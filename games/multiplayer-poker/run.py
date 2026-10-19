#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""批量执行炸金花验收，并原子覆盖 results.json。

默认自动发现脚本同级的 ``repo_files/`` 或 ``repo/``。目录既可以直接是一份
待测工程，也可以包含多份样本子目录；样本名称不再被限制为 good_N / bad_N。
优先使用样本已有的生产构建；没有可用构建时由受控 Harness 执行依赖安装与 ``npm run build`` 后再验收。

单个样本即使遇到构建、浏览器或 VLM 基础设施异常，也会保留真实诊断并继续收集
其它样本，最终仍生成完整的 results.json；不会因为一个样本异常而丢失整批结果。
"""
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import signal
import sys
import tempfile
import time
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any

HERE = Path(__file__).resolve().parent
MAPPING = HERE / "mapping.json"
RESULTS = HERE / "results.json"
REPO_DIR_CANDIDATES = ("repo_files", "repo")
WEB_UT = HERE / "web_ut.py"

def _load_json(path: Path) -> dict[str, Any]:
    value = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(value, dict):
        raise ValueError(f"{path.name} 顶层必须是对象")
    return value


def _validate_mapping(mapping: dict[str, Any]) -> None:
    if set(mapping) != {"prompt_id", "game_type", "exposed_hooks", "rubrics"}:
        raise ValueError("mapping.json 顶层字段必须恰为 prompt_id/game_type/exposed_hooks/rubrics")
    if mapping.get("game_type") not in {"2d", "3d"}:
        raise ValueError("game_type 非法")
    hooks = mapping.get("exposed_hooks")
    if not isinstance(hooks, list) or not hooks or len(hooks) != len(set(hooks)):
        raise ValueError("exposed_hooks 必须为非空且不重复的字符串列表")
    rubrics = mapping.get("rubrics")
    if not isinstance(rubrics, list) or not rubrics:
        raise ValueError("rubrics 必须为非空列表")
    ids = []
    texts = set()
    for i, row in enumerate(rubrics, 1):
        if not isinstance(row, dict) or set(row) != {"id", "text", "kind", "how"}:
            raise ValueError(f"Rubric {i} 字段必须恰为 id/text/kind/how")
        if not isinstance(row["id"], int) or isinstance(row["id"], bool):
            raise ValueError(f"Rubric {i} id 必须为整数")
        ids.append(row["id"])
        if row["kind"] not in {"state", "dom", "vlm"}:
            raise ValueError(f"Rubric {i} kind 非法")
        if not isinstance(row["text"], str) or not row["text"].strip() or row["text"] in texts:
            raise ValueError(f"Rubric {i} text 缺失或重复")
        texts.add(row["text"])
        if not isinstance(row["how"], str) or not row["how"].strip():
            raise ValueError(f"Rubric {i} how 缺失")
    if ids != list(range(1, len(rubrics) + 1)):
        raise ValueError(f"Rubric id 必须连续为 1..{len(rubrics)}")


def _looks_like_project(path: Path) -> bool:
    """Return whether *path* itself looks like a repository root."""
    if not path.is_dir():
        return False
    if (path / "package.json").is_file():
        return True
    return any((path / name).exists() for name in ("index.html", "src", "vite.config.ts", "vite.config.js"))


def _discover_repo_root(explicit: str | None = None) -> Path:
    """Resolve the repository container without relying on a machine-specific path."""
    if explicit:
        root = Path(explicit).expanduser()
        if not root.is_absolute():
            root = HERE / root
        root = root.resolve()
        if not root.exists():
            raise FileNotFoundError(f"目标目录不存在：{explicit}")
        if not root.is_dir():
            raise ValueError(f"目标必须是目录：{explicit}")
        return root

    existing = [HERE / name for name in REPO_DIR_CANDIDATES if (HERE / name).is_dir()]
    if not existing:
        names = " / ".join(f"{name}/" for name in REPO_DIR_CANDIDATES)
        raise FileNotFoundError(f"缺少待测目录：请提供 {names}，或使用 --target_dir 指定")
    return existing[0].resolve()


def _repo_order(path: Path) -> tuple[int, int, str]:
    """Match the mature delivery ordering while still accepting arbitrary names."""
    match = re.fullmatch(r"(good|bad|cheat)_(\d+)", path.name.lower())
    if not match:
        return (99, 999999, path.name.casefold())
    group = {"good": 0, "bad": 1, "cheat": 2}[match.group(1)]
    return (group, int(match.group(2)), path.name.casefold())


def _sample_dirs(repo_root: Path) -> list[Path]:
    """Discover one direct project or every immediate project-like sample directory."""
    if _looks_like_project(repo_root):
        return [repo_root]

    ignored = {"node_modules", "dist", "build", "out", ".git", "__pycache__", "ut_images"}
    dirs = [
        p for p in repo_root.iterdir()
        if p.is_dir() and not p.name.startswith(".") and p.name not in ignored and _looks_like_project(p)
    ]
    return sorted(dirs, key=_repo_order)


def _validate_report(sample: str, report: dict[str, Any], mapping: dict[str, Any]) -> None:
    required = {"layer1_pass", "layer1_detail", "items", "func_score", "vlm_score"}
    if not required.issubset(report):
        raise ValueError(f"{sample}: 单样本报告缺少字段 {sorted(required - set(report))}")
    items = report.get("items")
    if not isinstance(items, list):
        raise ValueError(f"{sample}: items 必须为列表")
    expected = mapping["rubrics"]
    if [x.get("id") for x in items] != [x["id"] for x in expected]:
        raise ValueError(f"{sample}: item id 未精确覆盖 Rubric")
    for row, rubric in zip(items, expected):
        if not isinstance(row, dict):
            raise ValueError(f"{sample}: item 非对象")
        expected_kind = "vlm" if rubric["kind"] == "vlm" else "det"
        if row.get("kind") != expected_kind:
            raise ValueError(f"{sample}: R{rubric['id']} kind 应为 {expected_kind}")
        score = row.get("score")
        allowed = {0, 1, -100} if expected_kind == "vlm" else {0, 1}
        if isinstance(score, bool) or score not in allowed:
            raise ValueError(f"{sample}: R{rubric['id']} score 非法 {score!r}")
        if not isinstance(row.get("reason"), str) or not row["reason"].strip():
            raise ValueError(f"{sample}: R{rubric['id']} reason 必须是自然语言非空字符串")
        if expected_kind == "vlm":
            if "image" not in row or not isinstance(row.get("image"), str):
                raise ValueError(f"{sample}: R{rubric['id']} VLM 缺少 image")
            image = row.get("image", "")
            if score in {0, 1}:
                if not image.strip():
                    raise ValueError(f"{sample}: R{rubric['id']} 已完成 VLM 判定但缺少截图证据")
                image_path = Path(image)
                if not image_path.is_absolute():
                    image_path = HERE / image_path
                if not image_path.is_file():
                    raise ValueError(f"{sample}: R{rubric['id']} VLM 截图不存在: {image}")
            elif score == -100 and not row.get("reason", "").lower().startswith("vlm-fail"):
                raise ValueError(f"{sample}: R{rubric['id']} -100 必须明确标记为 VLM 基础设施/调用失败")
        elif "image" in row:
            raise ValueError(f"{sample}: R{rubric['id']} 非 VLM 不应包含 image")


def _decode_subprocess_stream(value: bytes | str | None) -> str:
    """Decode child-process output deterministically on Windows/Python 3.14.

    ``subprocess.run(text=True)`` delegates decoding to background reader
    threads.  On Windows those threads use the active locale/code page; UTF-8
    Chinese output from ``web_ut.py`` can therefore make the reader thread
    fail and leave ``CompletedProcess.stdout`` as ``None``.  Capturing bytes and
    decoding here avoids that failure mode entirely.
    """
    if value is None:
        return ""
    if isinstance(value, str):
        return value
    return value.decode("utf-8-sig", errors="replace")



def _collect_child_stdout(stream, sink: list[bytes]) -> None:
    """Drain JSON stdout continuously so a large report cannot fill the pipe and stall."""
    try:
        while True:
            chunk = stream.read(8192)
            if not chunk:
                break
            sink.append(chunk)
    except Exception:
        pass


def _stream_child_stderr(stream, sample_name: str, sink: list[bytes]) -> None:
    """Drain child stderr silently and retain it for diagnostics on failure.

    The original runner exposed only concise per-sample progress.  Do not forward
    npm/Vite/browser diagnostics live here: many terminals render stderr in red,
    which makes normal build progress look like a failure.
    """
    try:
        while True:
            chunk = stream.readline()
            if not chunk:
                break
            sink.append(chunk)
    except Exception:
        pass


_ACTIVE_PROCS: set[subprocess.Popen] = set()
_ACTIVE_PROCS_LOCK = threading.Lock()
_STOP_EVENT = threading.Event()


def _posix_descendants(root_pid: int) -> list[int]:
    """Return current descendants deepest-first without optional third-party deps."""
    try:
        cp = subprocess.run(
            ["ps", "-eo", "pid=,ppid="], check=False, capture_output=True, text=True, timeout=2
        )
        children: dict[int, list[int]] = {}
        for line in cp.stdout.splitlines():
            parts = line.split()
            if len(parts) != 2:
                continue
            try:
                pid, ppid = int(parts[0]), int(parts[1])
            except ValueError:
                continue
            children.setdefault(ppid, []).append(pid)
        out: list[int] = []
        stack = [(root_pid, False)]
        while stack:
            pid, expanded = stack.pop()
            if expanded:
                if pid != root_pid:
                    out.append(pid)
                continue
            stack.append((pid, True))
            for child in children.get(pid, []):
                stack.append((child, False))
        return out
    except Exception:
        return []


def _terminate_process_tree(proc: subprocess.Popen) -> None:
    """Terminate evaluator plus descendants, including children in new sessions."""
    if proc.poll() is not None:
        return
    if os.name == "nt":
        try:
            subprocess.run(["taskkill", "/PID", str(proc.pid), "/T", "/F"],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                           timeout=8, check=False)
        except Exception:
            try: proc.kill()
            except Exception: pass
        return

    descendants = _posix_descendants(proc.pid)
    # Harness intentionally puts npm/build subprocesses in their own sessions so it
    # can timeout them independently.  Kill those descendants explicitly before the
    # evaluator group, otherwise they can become orphan processes after cancellation.
    for pid in descendants:
        try: os.kill(pid, signal.SIGTERM)
        except ProcessLookupError: pass
        except Exception: pass
    try:
        os.killpg(proc.pid, signal.SIGTERM)
    except ProcessLookupError:
        pass
    except Exception:
        try: proc.terminate()
        except Exception: pass
    deadline = time.monotonic() + 2.0
    while time.monotonic() < deadline:
        if proc.poll() is not None:
            break
        time.sleep(0.05)
    # Reap or force-kill any surviving descendants/groups.
    for pid in descendants:
        try: os.kill(pid, signal.SIGKILL)
        except ProcessLookupError: pass
        except Exception: pass
    if proc.poll() is None:
        try: os.killpg(proc.pid, signal.SIGKILL)
        except Exception:
            try: proc.kill()
            except Exception: pass
    try: proc.wait(timeout=1)
    except Exception: pass


def _register_proc(proc: subprocess.Popen) -> None:
    with _ACTIVE_PROCS_LOCK:
        _ACTIVE_PROCS.add(proc)


def _unregister_proc(proc: subprocess.Popen) -> None:
    with _ACTIVE_PROCS_LOCK:
        _ACTIVE_PROCS.discard(proc)


def _terminate_all_active() -> None:
    with _ACTIVE_PROCS_LOCK:
        procs = list(_ACTIVE_PROCS)
    for proc in procs:
        _terminate_process_tree(proc)


def _run_one(sample_dir: Path, timeout: int) -> dict[str, Any]:
    if _STOP_EVENT.is_set():
        raise RuntimeError(f"{sample_dir.name}: cancelled before start")
    # Keep the original concise runner presentation: announce only when a worker
    # actually starts this sample (not when it is merely queued).
    print(f"Testing {sample_dir.name}...", flush=True)
    env = os.environ.copy()
    env["UT_IMAGE_PREFIX"] = sample_dir.name
    env.setdefault("PYTHONUTF8", "1")
    env.setdefault("PYTHONIOENCODING", "utf-8")
    env.setdefault("NO_PROXY", "localhost,127.0.0.1")
    env.setdefault("no_proxy", "localhost,127.0.0.1")
    env["UT_IMAGE_DIR"] = str(HERE / "ut_images")
    cmd = [sys.executable, str(WEB_UT), "--target", str(sample_dir)]
    popen_kw: dict[str, Any] = {
        "cwd": HERE, "env": env, "stdout": subprocess.PIPE, "stderr": subprocess.PIPE,
        "text": False,
    }
    if os.name == "nt":
        popen_kw["creationflags"] = getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0)
    else:
        popen_kw["start_new_session"] = True
    proc = subprocess.Popen(cmd, **popen_kw)
    _register_proc(proc)
    stdout_chunks: list[bytes] = []
    stderr_chunks: list[bytes] = []
    stdout_thread = threading.Thread(target=_collect_child_stdout, args=(proc.stdout, stdout_chunks), daemon=True)
    stderr_thread = threading.Thread(target=_stream_child_stderr, args=(proc.stderr, sample_dir.name, stderr_chunks), daemon=True)
    stdout_thread.start(); stderr_thread.start()
    started = time.monotonic()
    next_heartbeat = started + 15.0
    timed_out = False
    cancelled = False
    while proc.poll() is None:
        now = time.monotonic()
        if _STOP_EVENT.is_set():
            cancelled = True
            break
        if now - started >= timeout:
            timed_out = True
            break
        time.sleep(0.25)

    if cancelled:
        _terminate_process_tree(proc)
        _unregister_proc(proc)
        stdout_thread.join(timeout=1); stderr_thread.join(timeout=1)
        raise RuntimeError(f"{sample_dir.name}: cancelled because another parallel sample failed")

    if timed_out:
        _terminate_process_tree(proc)
        _unregister_proc(proc)
        stdout_thread.join(timeout=1); stderr_thread.join(timeout=1)
        out_b = b"".join(stdout_chunks)
        err_b = b"".join(stderr_chunks)
        tail = (_decode_subprocess_stream(err_b) or _decode_subprocess_stream(out_b) or "<no child-process output>")[-1800:]
        raise RuntimeError(f"{sample_dir.name}: web_ut.py timeout after {timeout}s; process tree terminated: {tail}")

    _unregister_proc(proc)
    stdout_thread.join(timeout=1); stderr_thread.join(timeout=1)
    out_b = b"".join(stdout_chunks)
    err_b = b"".join(stderr_chunks)
    stdout = _decode_subprocess_stream(out_b)
    stderr = _decode_subprocess_stream(err_b)
    if proc.returncode != 0:
        tail = (stderr or stdout or "<no child-process output>")[-1800:]
        raise RuntimeError(
            f"{sample_dir.name}: web_ut.py 退出码 {proc.returncode}: {tail}"
        )

    payload = stdout.strip()
    if not payload:
        detail = (stderr or "<stderr empty>")[-1800:]
        raise RuntimeError(
            f"{sample_dir.name}: web_ut.py 成功退出但 stdout 为空；stderr tail={detail!r}"
        )
    try:
        report = json.loads(payload)
    except (json.JSONDecodeError, TypeError) as exc:
        raise RuntimeError(
            f"{sample_dir.name}: stdout 不是单一合法 UTF-8 JSON: {exc}; "
            f"stdout tail={payload[-1000:]!r}; stderr tail={stderr[-800:]!r}"
        ) from exc
    if not isinstance(report, dict):
        raise RuntimeError(f"{sample_dir.name}: 报告顶层不是对象")
    return report


def _run_one_guarded(sample_dir: Path, timeout: int) -> dict[str, Any]:
    """Run one isolated sample without cancelling unrelated samples on failure."""
    return _run_one(sample_dir, timeout)


def _clean_diagnostic(message: str) -> str:
    """Keep the useful failure cause while removing local-only log locations."""
    lines = []
    for raw in str(message).splitlines():
        line = raw.strip()
        if not line:
            continue
        if "complete log of this run can be found in:" in line.lower():
            continue
        try:
            line = line.replace(str(HERE.resolve()), ".")
        except Exception:
            pass
        lines.append(line)
    return "；".join(lines) or "未知验收执行异常"


def _sanitize_report_diagnostics(report: dict[str, Any]) -> None:
    """Normalize child diagnostics before persisting them in the portable result."""
    detail = report.get("layer1_detail")
    if isinstance(detail, dict):
        errors = detail.get("fatal_console_errors")
        if isinstance(errors, list):
            detail["fatal_console_errors"] = [
                _clean_diagnostic(x) if isinstance(x, str) else x for x in errors
            ]
        for key in ("run_checks_error",):
            if isinstance(detail.get(key), str):
                detail[key] = _clean_diagnostic(detail[key])
    items = report.get("items")
    if isinstance(items, list):
        for item in items:
            if isinstance(item, dict) and isinstance(item.get("reason"), str):
                item["reason"] = _clean_diagnostic(item["reason"])


def _normalise_sample(repo_name: str, report: dict[str, Any], mapping: dict[str, Any], target: Path) -> dict[str, Any]:
    """Emit the same public sample schema/field shape as the mature reference project."""
    rubrics = mapping["rubrics"]
    rubric_by_id = {int(r["id"]): r for r in rubrics}
    grouped: dict[int, dict[str, Any]] = {}
    for raw in report.get("items") or []:
        if not isinstance(raw, dict):
            continue
        try:
            rid = int(raw.get("id"))
        except Exception:
            continue
        rubric = rubric_by_id.get(rid)
        if rubric is None:
            continue
        kind = "vlm" if rubric.get("kind") == "vlm" else "det"
        score = raw.get("score")
        if kind == "vlm" and score == -100:
            norm_score = -100
        else:
            norm_score = 1 if score in (1, True) else 0
        item: dict[str, Any] = {
            "id": rid,
            "kind": kind,
            "score": norm_score,
            "reason": _clean_diagnostic(str(raw.get("reason") or "未提供原因。")),
        }
        if kind == "vlm":
            item["image"] = ""
            if isinstance(raw.get("image"), str) and raw.get("image"):
                image = str(raw["image"]).replace("\\", "/")
                ip = Path(image)
                if ip.is_absolute():
                    try:
                        image = str(ip.resolve().relative_to(HERE.resolve())).replace(os.sep, "/")
                    except Exception:
                        image = ""
                item["image"] = image
        grouped[rid] = item

    error = report.get("error")
    detail_in = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
    fatal = [str(v) for v in (detail_in.get("fatal_console_errors") or [])]
    run_checks_error = detail_in.get("run_checks_error")
    if run_checks_error:
        fatal.append(f"run_checks_error: {run_checks_error}")
    if detail_in.get("infrastructure_error") is True and not run_checks_error:
        fatal.append("infrastructure_error: 测试基础设施未完成正常执行。")
    if error:
        fatal.append(str(error))
    diagnostic = str(error or run_checks_error or (fatal[0] if fatal else "")).strip()
    # Deduplicate while preserving the underlying diagnostic text. The mature schema keeps
    # diagnostics in fatal_console_errors rather than introducing a new per-sample field.
    fatal = list(dict.fromkeys(v for v in fatal if v))
    loadable = bool(report.get("layer1_pass")) and detail_in.get("has_content", True) is not False and not error

    items: list[dict[str, Any]] = []
    scores: dict[int, int] = {}
    for rubric in rubrics:
        rid = int(rubric["id"])
        item = grouped.get(rid)
        if item is None:
            is_vlm = rubric.get("kind") == "vlm"
            item = {
                "id": rid,
                "kind": "vlm" if is_vlm else "det",
                "score": -100 if is_vlm else 0,
                **({"image": ""} if is_vlm else {}),
                "reason": (
                    f"vlm-fail(未完成：当前检查点未形成有效结论；{_clean_diagnostic(diagnostic)})"
                    if is_vlm and diagnostic else
                    "vlm-fail(未完成：检测脚本没有返回该视觉验收项的有效结论。)"
                    if is_vlm else
                    f"未通过：脚本执行异常，当前检查点未形成有效证据；{_clean_diagnostic(diagnostic)}"
                    if diagnostic else
                    "未通过：检测脚本未返回该检查点结果。"
                ),
            }
        items.append(item)
        scores[rid] = int(item["score"])

    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}
    for rubric in rubrics:
        bucket = vlm_score if rubric.get("kind") == "vlm" else func_score
        bucket[str(rubric["text"])] = scores[int(rubric["id"])]

    return {
        "repo": repo_name,
        "layer1_pass": bool(report.get("layer1_pass")),
        "layer1_detail": {
            "loadable": bool(loadable),
            "fatal_console_errors": [_clean_diagnostic(v) for v in fatal],
        },
        "items": items,
        "func_score": func_score,
        "vlm_score": vlm_score,
    }


def _unavailable_report(sample: str, mapping: dict[str, Any], message: str) -> dict[str, Any]:
    """Build an auditable report when the runner itself cannot obtain child JSON."""
    reason = _clean_diagnostic(message)
    items: list[dict[str, Any]] = []
    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}
    for rubric in mapping["rubrics"]:
        rid = rubric["id"]
        label = rubric["text"]
        if rubric["kind"] == "vlm":
            score = -100
            items.append({
                "id": rid, "kind": "vlm", "score": score,
                "reason": f"vlm-fail(未执行：{reason})", "image": "",
            })
            vlm_score[label] = score
        else:
            score = 0
            items.append({
                "id": rid, "kind": "det", "score": score,
                "reason": f"未通过：测试基础设施未完成执行；{reason}",
            })
            func_score[label] = score
    return {
        "repo": sample,
        "layer1_pass": False,
        "layer1_detail": {
            "fatal_console_errors": [reason],
            "has_content": False,
            "app_probe": {},
            "infrastructure_error": True,
        },
        "items": items,
        "func_score": func_score,
        "vlm_score": vlm_score,
    }


def _relativize_images(report: dict[str, Any]) -> None:
    for item in report.get("items", []):
        if not isinstance(item, dict) or item.get("kind") != "vlm":
            continue
        image = item.get("image")
        if not isinstance(image, str) or not image:
            continue
        p = Path(image)
        if p.is_absolute():
            try:
                item["image"] = str(p.resolve().relative_to(HERE.resolve())).replace(os.sep, "/")
            except Exception:
                # 不允许把本机绝对路径写入 results。
                item["image"] = ""
        else:
            item["image"] = image.replace(os.sep, "/")


def _atomic_write(payload: dict[str, Any]) -> None:
    data = json.dumps(payload, ensure_ascii=False, indent=2) + "\n"
    fd, name = tempfile.mkstemp(prefix="results.", suffix=".tmp", dir=HERE)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(data)
            f.flush()
            os.fsync(f.fileno())
        last_error: PermissionError | None = None
        for attempt in range(6):
            try:
                os.replace(name, RESULTS)
                last_error = None
                break
            except PermissionError as exc:
                last_error = exc
                if attempt == 5:
                    raise
                time.sleep(0.12 * (attempt + 1))
        if last_error is not None:
            raise last_error
    finally:
        try:
            Path(name).unlink(missing_ok=True)
        except Exception:
            pass


def _cleanup_runtime_coordination(repo_root: Path | None) -> None:
    """Remove dependency coordination locks left by killed evaluator processes."""
    if repo_root is None or not repo_root.is_dir():
        return
    for path in repo_root.glob(".web_ut_dep_lock_*"):
        if path.is_dir():
            try:
                import shutil
                shutil.rmtree(path, ignore_errors=True)
            except Exception:
                pass


def main() -> int:
    ap = argparse.ArgumentParser(description="批量运行炸金花自动化验收")
    ap.add_argument(
        "--target_dir", "--repo-dir", dest="target_dir",
        help="可选：指定单个工程或样本容器目录；默认自动发现 repo_files/ 或 repo/。",
    )
    ap.add_argument("--sample", action="append", help="只运行指定样本目录名；可重复")
    ap.add_argument("--timeout", type=int, default=int(os.getenv("WEB_UT_SAMPLE_TIMEOUT", "900")))
    auto_jobs = 2
    ap.add_argument(
        "--jobs", type=int, default=int(os.getenv("WEB_UT_JOBS", str(auto_jobs))),
        help="样本级并行度（默认 2；WEB_UT_JOBS 可覆盖）。",
    )
    ap.add_argument(
        "--require-vlm",
        action="store_true",
        default=os.getenv("WEB_UT_REQUIRE_VLM", "").strip().lower() in {"1", "true", "yes", "on"},
        help="要求所有 VLM 项都得到完整的 0/1 判定；不满足时仍先生成 results.json。",
    )
    args = ap.parse_args()
    _STOP_EVENT.clear()

    mapping = _load_json(MAPPING)
    _validate_mapping(mapping)
    repo_root = _discover_repo_root(args.target_dir)
    _cleanup_runtime_coordination(repo_root)
    image_dir = HERE / "ut_images"
    if image_dir.exists():
        shutil.rmtree(image_dir, ignore_errors=True)
    image_dir.mkdir(parents=True, exist_ok=True)
    samples = _sample_dirs(repo_root)

    if args.sample:
        wanted = set(args.sample)
        samples = [p for p in samples if p.name in wanted]
        missing = wanted - {p.name for p in samples}
        if missing:
            raise SystemExit(f"未找到样本：{', '.join(sorted(missing))}")
    if not samples:
        raise SystemExit(f"没有可运行样本：{repo_root}")

    output: dict[str, Any] = {
        "prompt_id": mapping["prompt_id"],
        "game_type": mapping["game_type"],
        "samples": {},
    }
    jobs = max(1, min(int(args.jobs), len(samples)))
    reports_by_name: dict[str, dict[str, Any]] = {}
    had_runner_error = False
    had_required_vlm_failure = False

    with ThreadPoolExecutor(max_workers=jobs, thread_name_prefix="sample") as pool:
        future_to_sample = {
            pool.submit(_run_one_guarded, sample, args.timeout): sample
            for sample in samples
        }
        for fut in as_completed(future_to_sample):
            sample = future_to_sample[fut]
            try:
                report = fut.result()
                _validate_report(sample.name, report, mapping)
            except Exception as exc:
                had_runner_error = True
                message = _clean_diagnostic(exc)
                print(f"ERROR: {sample.name}: {message[:700]}", flush=True)
                report = _unavailable_report(sample.name, mapping, message)

            _sanitize_report_diagnostics(report)
            detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
            if detail.get("infrastructure_error") is True:
                had_runner_error = True
                errors = detail.get("fatal_console_errors") if isinstance(detail.get("fatal_console_errors"), list) else []
                summary = str(errors[0])[:500] if errors else "未提供基础设施错误详情"
                print(f"ERROR: {sample.name}: 基础设施异常，结果仍会写入：{summary}", file=sys.stderr, flush=True)

            _relativize_images(report)
            report = _normalise_sample(sample.name, report, mapping, sample)
            _validate_report(sample.name, report, mapping)
            reports_by_name[sample.name] = report

            incomplete_vlm = [
                it.get("id")
                for it in report.get("items", [])
                if isinstance(it, dict) and it.get("kind") == "vlm" and it.get("score") == -100
            ]
            if incomplete_vlm and args.require_vlm:
                had_required_vlm_failure = True
                print(
                    f"WARNING: {sample.name}: VLM items {incomplete_vlm} 未完成 0/1 判定；results.json 仍会生成。",
                    flush=True,
                )

    for sample in samples:
        report = reports_by_name.get(sample.name)
        if report is None:
            had_runner_error = True
            raw = _unavailable_report(sample.name, mapping, "worker 未返回报告")
            report = _normalise_sample(sample.name, raw, mapping, sample)
        output["samples"][sample.name] = report

    _cleanup_runtime_coordination(repo_root)
    _atomic_write(output)
    print("done -> results.json")
    if had_runner_error:
        return 2
    if had_required_vlm_failure:
        return 3
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (RuntimeError, ValueError, FileNotFoundError, subprocess.TimeoutExpired) as exc:
        print(f"run failed: {exc}")
        raise SystemExit(2)
