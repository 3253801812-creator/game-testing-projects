#!/usr/bin/env python3
"""批量执行 3D 越野赛车网页验收，并覆盖生成 results.json。

输出结构：
{
  "prompt_id": "...",
  "game_type": "3d",
  "samples": {
    "game": {
      "repo": "game",
      "layer1_pass": true,
      "layer1_detail": {"loadable": true, "fatal_console_errors": []},
      "items": [...],
      "func_score": {...},
      "vlm_score": {...}
    }
  }
}

每次运行都以本次真实执行结果为准，不复用旧 results.json 中的样本分数。
若样本 Layer1 失败，仍输出完整 Rubric 覆盖：确定性项记 0，未真正执行的 VLM 项记 -100。
"""

from __future__ import annotations

import argparse
import contextlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from typing import Any

sys.dont_write_bytecode = True


def parse_report(stdout: str, stderr: str) -> dict[str, Any]:
    out = (stdout or "").strip()
    err = (stderr or "").strip()
    if out:
        try:
            value = json.loads(out)
            if isinstance(value, dict):
                return value
        except json.JSONDecodeError:
            pass
    return {
        "layer1_pass": False,
        "layer1_detail": {
            "loadable": False,
            "runner_error": "empty/invalid web_ut output",
            "stderr": err,
        },
        "items": [],
        "func_score": {},
        "vlm_score": {},
    }


def discover_samples(target_dir: Path) -> list[Path]:
    if not target_dir.exists():
        raise FileNotFoundError(target_dir)
    if target_dir.is_file():
        return [target_dir]
    if (target_dir / "package.json").exists() or (target_dir / "index.html").exists():
        return [target_dir]
    return sorted(
        child for child in target_dir.iterdir()
        if child.is_dir() and (
            (child / "package.json").exists()
            or (child / "index.html").exists()
            or (child / "dist" / "index.html").exists()
            or (child / "build" / "index.html").exists()
            or (child / "out" / "index.html").exists()
        )
    )



def validate_mapping_schema(mapping: Any) -> list[str]:
    """校验公开 mapping.json 的固定交付结构，不修改 Rubric。"""
    errors: list[str] = []
    if not isinstance(mapping, dict):
        return ["mapping.json 顶层必须是对象"]
    expected_top = {"prompt_id", "game_type", "exposed_hooks", "rubrics"}
    if set(mapping) != expected_top:
        errors.append("mapping.json 顶层字段必须恰好为 prompt_id、game_type、exposed_hooks、rubrics")
    if not isinstance(mapping.get("prompt_id"), str) or not mapping.get("prompt_id", "").strip():
        errors.append("prompt_id 必须是非空字符串")
    if mapping.get("game_type") not in {"2d", "3d"}:
        errors.append("game_type 必须是 2d 或 3d")
    hooks = mapping.get("exposed_hooks")
    if not isinstance(hooks, list) or any(not isinstance(x, str) or not x.strip() for x in hooks):
        errors.append("exposed_hooks 必须是字符串列表")
    elif len(hooks) != len(set(hooks)):
        errors.append("exposed_hooks 不得重复")
    rubrics = mapping.get("rubrics")
    if not isinstance(rubrics, list) or not rubrics:
        errors.append("rubrics 必须是非空列表")
        return errors
    ids: list[int] = []
    texts: list[str] = []
    for index, row in enumerate(rubrics, start=1):
        if not isinstance(row, dict) or set(row) != {"id", "text", "kind", "how"}:
            errors.append(f"Rubric {index} 字段必须恰好为 id、text、kind、how")
            continue
        if not isinstance(row.get("id"), int):
            errors.append(f"Rubric {index} 的 id 必须是整数")
        else:
            ids.append(row["id"])
        if row.get("kind") not in {"state", "dom", "vlm"}:
            errors.append(f"Rubric {index} 的 kind 非法")
        for key in ("text", "how"):
            if not isinstance(row.get(key), str) or not row[key].strip():
                errors.append(f"Rubric {index} 的 {key} 必须是非空字符串")
        if isinstance(row.get("text"), str):
            texts.append(row["text"])
    if ids != list(range(1, len(rubrics) + 1)):
        errors.append(f"Rubric id 必须连续为 1..{len(rubrics)}")
    if len(texts) != len(set(texts)):
        errors.append("Rubric text 不得重复")
    return errors


def sample_order(path: Path) -> tuple[int, int, str]:
    match = re.fullmatch(r"(good|bad)_(\d+)", path.name)
    if not match:
        return (99, 999999, path.name)
    return ({"good": 0, "bad": 1}[match.group(1)], int(match.group(2)), path.name)


def validate_sample_layout(samples: list[Path], target_dir: Path) -> list[str]:
    """校验批量样本的通用 Vite 交付结构，不把具体校准样本名单写死在 runner 中。"""
    # 单项目调试模式只校验目标自身是否可运行，不要求 good/bad 命名。
    if target_dir.is_file() or (target_dir / "package.json").is_file() or (target_dir / "index.html").is_file():
        return []

    errors: list[str] = []
    roles = {"good": 0, "bad": 0}
    for sample in samples:
        match = re.fullmatch(r"(good|bad)_(\d+)", sample.name)
        if match:
            roles[match.group(1)] += 1
        required = ("package.json", "index.html", "dist/index.html")
        missing = [name for name in required if not (sample / name).is_file()]
        if missing:
            errors.append(f"{sample.name} 缺少：{', '.join(missing)}")

    if roles["good"] < 1:
        errors.append("批量 repo_files 至少需要一个 good_* 样本")
    if roles["bad"] < 1:
        errors.append("批量 repo_files 至少需要一个 bad_* 样本")
    return errors


def atomic_write_json(path: Path, value: dict[str, Any]) -> None:
    """原子覆盖结果，避免中断时留下半截 results.json。"""
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=path.parent, delete=False) as handle:
        json.dump(value, handle, ensure_ascii=False, indent=2)
        handle.write("\n")
        temp_name = handle.name
    os.replace(temp_name, path)

def _pick_free_x_display() -> str:
    for number in range(90, 120):
        if not (Path(tempfile.gettempdir()) / ".X11-unix" / f"X{number}").exists():
            return f":{number}"
    return f":{os.getpid() % 1000 + 120}"


@contextlib.contextmanager
def evaluator_display_env() -> dict[str, str]:
    env = dict(os.environ)
    env["PYTHONDONTWRITEBYTECODE"] = "1"
    proc = None
    # Linux CI 中优先用 Xvfb + 系统 Chromium 以获得稳定 WebGL；可显式
    # AUTO_XVFB=0 回退 Playwright headless。
    if shutil.which("Xvfb") and os.getenv("AUTO_XVFB", "1").lower() not in {"0", "false", "no"}:
        display = _pick_free_x_display()
        proc = subprocess.Popen(
            [shutil.which("Xvfb"), display, "-screen", "0", "1280x800x24"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        time.sleep(0.5)
        if proc.poll() is None:
            env["DISPLAY"] = display
            env["PLAYWRIGHT_HEADLESS"] = "0"
            if shutil.which("chromium"):
                env["PLAYWRIGHT_CHROMIUM_EXECUTABLE"] = shutil.which("chromium")
    try:
        yield env
    finally:
        if proc is not None and proc.poll() is None:
            proc.terminate()
            try:
                proc.wait(timeout=2)
            except subprocess.TimeoutExpired:
                proc.kill()


def _redact_local_paths(value: object) -> str:
    text = str(value or "")
    win = re.compile(r"(?i)\b[A-Z]:\\(?:[^\\\s\"'<>|]+\\)*[^\\\s\"'<>|]+")
    posix = re.compile(r"(?<![:/\w])/(?:[^/\s\"'<>]+/)+[^/\s\"'<>]+")

    def repl(match: re.Match[str]) -> str:
        normalized = match.group(0).replace("\\", "/").rstrip(".,;:)")
        name = normalized.rsplit("/", 1)[-1] or "path"
        return f"<local-path>/{name}"

    return posix.sub(repl, win.sub(repl, text))


def _failure_reason(report: dict[str, Any]) -> str:
    detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
    parts: list[str] = []
    fatal = detail.get("fatal_console_errors")
    if isinstance(fatal, list):
        parts.extend(str(x) for x in fatal if str(x).strip())
    for key in (
        "runner_error", "resolve_or_build_error", "browser_launch_error",
        "navigation_error", "fallback_error", "stderr",
    ):
        value = detail.get(key)
        if value:
            parts.append(str(value))
    if detail.get("runner_exit_code") not in (None, 0):
        parts.append(f"runner_exit_code={detail.get('runner_exit_code')}")
    text = _redact_local_paths("；".join(p.strip().replace("\n", " ") for p in parts if p.strip()))
    return text[:1400] or "该项未完成实际验收"


def _clean_layer1_detail(report: dict[str, Any]) -> dict[str, Any]:
    detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
    fatal: list[str] = []
    raw_fatal = detail.get("fatal_console_errors")
    if isinstance(raw_fatal, list):
        fatal.extend(str(x) for x in raw_fatal if str(x).strip())
    extra = _failure_reason(report)
    if not bool(report.get("layer1_pass")) and extra and extra not in fatal:
        fatal.append(extra)
    return {
        "loadable": bool(detail.get("loadable", report.get("layer1_pass", False))),
        "fatal_console_errors": fatal,
    }


def _is_complete_sample(sample: Any, rubrics: list[dict[str, Any]]) -> bool:
    if not isinstance(sample, dict):
        return False
    items = sample.get("items")
    if not isinstance(items, list) or len(items) != len(rubrics):
        return False
    expected = {int(r["id"]) for r in rubrics}
    try:
        got = {int(item.get("id")) for item in items if isinstance(item, dict)}
    except Exception:
        return False
    if got != expected:
        return False
    func_expected = {str(r["text"]) for r in rubrics if r.get("kind") != "vlm"}
    vlm_expected = {str(r["text"]) for r in rubrics if r.get("kind") == "vlm"}
    return (
        isinstance(sample.get("func_score"), dict)
        and set(sample["func_score"]) == func_expected
        and isinstance(sample.get("vlm_score"), dict)
        and set(sample["vlm_score"]) == vlm_expected
    )


def _natural_reason(rubric_text: str, score: int, raw: object, *, visual: bool = False) -> str:
    text = str(rubric_text or "").strip().rstrip("。")
    detail = str(raw or "").strip()
    if detail.startswith(("通过：", "未通过：", "未完成：")):
        return detail
    if visual and score == -100:
        prefix = f"未完成：视觉模型未能完成“{text}”的判定。"
        return prefix + (f" 调用信息：{detail}" if detail else "")
    status = "通过" if score == 1 else "未通过"
    prefix = f"{status}：实际操作与观测{'满足' if score == 1 else '未满足'}“{text}”的要求。"
    return prefix + (f" 观测记录：{detail}" if detail else "")


def _normalize_sample(
    name: str,
    report: dict[str, Any],
    rubrics: list[dict[str, Any]],
    base_dir: Path,
) -> dict[str, Any]:
    raw_items = report.get("items") if isinstance(report.get("items"), list) else []
    by_id: dict[int, dict[str, Any]] = {}
    for item in raw_items:
        if not isinstance(item, dict):
            continue
        try:
            rid = int(item.get("id"))
        except Exception:
            continue
        by_id[rid] = item

    raw_func = report.get("func_score") if isinstance(report.get("func_score"), dict) else {}
    raw_vlm = report.get("vlm_score") if isinstance(report.get("vlm_score"), dict) else {}
    fail_reason = _failure_reason(report)

    items: list[dict[str, Any]] = []
    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}

    for rubric in sorted(rubrics, key=lambda x: int(x["id"])):
        rid = int(rubric["id"])
        text = str(rubric["text"])
        is_vlm = rubric.get("kind") == "vlm"
        raw = by_id.get(rid, {})
        score = raw.get("score")
        if is_vlm:
            if score not in (-100, 0, 1):
                score = raw_vlm.get(text, -100)
            if score not in (-100, 0, 1):
                score = -100
            vlm_score[text] = int(score)
            item: dict[str, Any] = {
                "id": rid,
                "kind": "vlm",
                "score": int(score),
                "reason": _natural_reason(
                    text, int(score),
                    raw.get("reason") or (fail_reason if int(score) == -100 else "未提供视觉判定说明"),
                    visual=True,
                ),
            }
            image = raw.get("image")
            if image:
                image_path = base_dir / str(image)
                if image_path.is_file():
                    item["image"] = str(image).replace("\\", "/")
            items.append(item)
        else:
            if score not in (0, 1):
                score = raw_func.get(text, 0)
            if score not in (0, 1):
                score = 0
            func_score[text] = int(score)
            items.append({
                "id": rid,
                "kind": "det",
                "score": int(score),
                "reason": _natural_reason(
                    text, int(score),
                    raw.get("reason") or (fail_reason if int(score) == 0 else "确定性验收已完成"),
                ),
            })

    return {
        "repo": name,
        "layer1_pass": bool(report.get("layer1_pass")),
        "layer1_detail": _clean_layer1_detail(report),
        "items": items,
        "func_score": func_score,
        "vlm_score": vlm_score,
    }



def main() -> int:
    base_dir = Path(__file__).resolve().parent
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--target_dir", "--target", dest="target_dir",
        default=str(base_dir / "repo_files"),
        help="单个项目目录，或包含多个样本目录的 repo_files 目录",
    )
    build_group = parser.add_mutually_exclusive_group()
    build_group.add_argument("--build", dest="build", action="store_true", help="安装依赖并执行正式 build 后验收")
    build_group.add_argument("--no-build", dest="build", action="store_false", help="跳过 npm 构建，直接验收各项目已提交的 dist/index.html")
    # mapping.json 的 R38 明确要求批量验收默认执行正式 npm/Vite build。
    # 构建失败时 web_ut_harness 会回退各样本已提交的 dist/index.html，继续测试
    # 其它功能项，但 R38 仍保持 0；--no-build 仅用于本地快速校准。
    parser.set_defaults(build=True)
    parser.add_argument("--output", default=str(base_dir / "results.json"))
    parser.add_argument("--sample-timeout", type=int, default=900, help="每个样本验收最长秒数（默认 900）")
    parser.add_argument("--heartbeat", type=int, default=15, help="长样本运行时每隔多少秒输出一次进度；0=关闭")
    args = parser.parse_args()

    try:
        mapping = json.loads((base_dir / "mapping.json").read_text(encoding="utf-8"))
    except Exception as exc:
        print(f"ERROR: invalid mapping.json: {exc}", file=sys.stderr)
        return 2
    mapping_errors = validate_mapping_schema(mapping)
    if mapping_errors:
        print("ERROR: invalid mapping.json: " + " | ".join(mapping_errors), file=sys.stderr)
        return 2
    prompt_id = str(mapping["prompt_id"])
    game_type = str(mapping["game_type"])
    rubrics = mapping["rubrics"]

    output_path = Path(args.output)
    if not output_path.is_absolute():
        output_path = base_dir / output_path
    try:
        samples = discover_samples(Path(args.target_dir).resolve())
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    if not samples:
        print("ERROR: no web projects found", file=sys.stderr)
        return 2
    target_path = Path(args.target_dir).resolve()
    samples = sorted(samples, key=sample_order)
    layout_errors = validate_sample_layout(samples, target_path)
    if layout_errors:
        print("ERROR: invalid repo_files layout: " + " | ".join(layout_errors), file=sys.stderr)
        return 2

    sample_results: dict[str, dict[str, Any]] = {}
    execution_failed = False

    with evaluator_display_env() as child_env:
        for sample in samples:
            print(f"Testing {sample.name}...", flush=True)
            # 始终以当前样本目录为 target；--no-build 使用已提交 dist，--build 执行正式构建。
            test_target = sample
            command = [sys.executable, str(base_dir / "web_ut.py"), "--target", str(test_target)]
            if args.build:
                command.append("--build")
            proc = None
            try:
                with tempfile.TemporaryFile(mode="w+t", encoding="utf-8", errors="replace") as out_f, \
                     tempfile.TemporaryFile(mode="w+t", encoding="utf-8", errors="replace") as err_f:
                    proc = subprocess.Popen(
                        command,
                        cwd=str(base_dir),
                        env=child_env,
                        stdout=out_f,
                        stderr=err_f,
                        text=True,
                        start_new_session=(os.name != "nt"),
                    )
                    timed_out = False
                    timeout_s = max(30, args.sample_timeout)
                    started_at = time.monotonic()
                    next_heartbeat = started_at + max(1, args.heartbeat) if args.heartbeat > 0 else float("inf")

                    def stop_child(force: bool = False) -> None:
                        if proc is None or proc.poll() is not None:
                            return
                        if os.name != "nt":
                            import signal
                            sig = signal.SIGKILL if force else signal.SIGTERM
                            try:
                                os.killpg(proc.pid, sig)
                            except ProcessLookupError:
                                pass
                        else:
                            # taskkill /T 能同时结束 Playwright driver 与 Chromium 后代。
                            if shutil.which("taskkill"):
                                subprocess.run(
                                    ["taskkill", "/PID", str(proc.pid), "/T", *( ["/F"] if force else [] )],
                                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False,
                                )
                            else:
                                (proc.kill if force else proc.terminate)()

                    try:
                        while proc.poll() is None:
                            now = time.monotonic()
                            elapsed = now - started_at
                            if elapsed >= timeout_s:
                                timed_out = True
                                stop_child(force=False)
                                try:
                                    proc.wait(timeout=3)
                                except subprocess.TimeoutExpired:
                                    stop_child(force=True)
                                    try:
                                        proc.wait(timeout=3)
                                    except subprocess.TimeoutExpired:
                                        pass
                                break
                            if now >= next_heartbeat:
                                print(f"  {sample.name}: running {int(elapsed)}s...", flush=True)
                                next_heartbeat = now + max(1, args.heartbeat)
                            time.sleep(0.2)
                    except KeyboardInterrupt:
                        stop_child(force=False)
                        try:
                            proc.wait(timeout=2)
                        except subprocess.TimeoutExpired:
                            stop_child(force=True)
                        raise
                    finally:
                        if proc.poll() is None:
                            stop_child(force=True)
                            try:
                                proc.wait(timeout=2)
                            except subprocess.TimeoutExpired:
                                pass

                    out_f.seek(0); stdout = out_f.read()
                    err_f.seek(0); stderr = err_f.read()
                if timed_out:
                    report = {
                        "layer1_pass": False,
                        "layer1_detail": {
                            "loadable": False,
                            "runner_error": f"sample timeout after {max(30, args.sample_timeout)}s",
                            "runner_exit_code": 124,
                        },
                        "items": [],
                        "func_score": {},
                        "vlm_score": {},
                    }
                else:
                    completed_returncode = proc.returncode
                    report = parse_report(stdout, stderr)
                    if completed_returncode != 0:
                        detail = report.setdefault("layer1_detail", {})
                        if isinstance(detail, dict):
                            detail.setdefault("runner_exit_code", completed_returncode)
                            if stderr.strip():
                                detail.setdefault("stderr", stderr.strip())
            except Exception as exc:
                report = {
                    "layer1_pass": False,
                    "layer1_detail": {
                        "loadable": False,
                        "runner_error": f"runner exception: {type(exc).__name__}: {exc}",
                    },
                    "items": [],
                    "func_score": {},
                    "vlm_score": {},
                }

            # 当前结果必须来自本次真实执行，禁止用旧 results.json 覆盖失败样本。
            normalized = _normalize_sample(sample.name, report, rubrics, base_dir)

            # repo 名始终与当前目录名一致。
            normalized = dict(normalized)
            normalized["repo"] = sample.name
            sample_results[sample.name] = normalized
            if not bool(normalized.get("layer1_pass")):
                execution_failed = True

    payload = {
        "prompt_id": prompt_id,
        "game_type": game_type,
        "samples": sample_results,
    }
    atomic_write_json(output_path, payload)
    try:
        shown = output_path.relative_to(base_dir)
    except ValueError:
        shown = output_path.name
    print(f"done -> {shown}")
    return 1 if execution_failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
