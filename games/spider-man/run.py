#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Run repository samples and write results.json in the public delivery schema.

Default:
    python run.py

Optional:
    python run.py --target_dir repo_files
    python run.py --target_dir repo_files/good_1

The runner does not modify game source or mapping data. Deterministic rubric scores are 0/1; VLM infrastructure failures preserve the harness sentinel -100 rather than being collapsed into a semantic failure.
"""
from __future__ import annotations

import argparse
import concurrent.futures
import json
import os
import re
import signal
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Any

# The harness itself may spend up to 600s in dependency install/build.  The
# outer runner must never kill a valid harness run sooner than that.
SAMPLE_TIMEOUT_S = int(os.getenv("SAMPLE_TIMEOUT_S", "780"))
RETRY_TIMEOUT_S = int(os.getenv("RETRY_TIMEOUT_S", "900"))
RUN_JOBS = max(1, min(4, int(os.getenv("RUN_JOBS", "2"))))

def _looks_like_target(path: Path) -> bool:
    if not path.is_dir():
        return False
    if (path / "package.json").exists() or (path / "index.html").exists() or (path / "standalone.html").exists():
        return True
    return any((path / name / "index.html").exists() for name in ("dist", "build", "out"))


def _repo_order(path: Path) -> tuple[int, int, str]:
    match = re.fullmatch(r"(good|bad|cheat)_(\d+)", path.name.lower())
    if not match:
        return (99, 999999, path.name.lower())
    group = {"good": 0, "bad": 1, "cheat": 2}[match.group(1)]
    return (group, int(match.group(2)), path.name.lower())


def _discover(root: Path) -> list[Path]:
    if _looks_like_target(root):
        return [root]
    return [p for p in sorted(root.iterdir(), key=_repo_order) if _looks_like_target(p)]


def _clean_text(text: str, *paths: Path) -> str:
    value = str(text)
    candidates = [Path(__file__).resolve().parent, Path.home(), *paths]
    for path in candidates:
        raw = str(path)
        if raw and raw not in {"/", "."}:
            value = value.replace(raw, "<project>")
    return value


def _load_json(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
        return value if isinstance(value, dict) else {}
    except Exception:
        return {}


def _atomic_write(path: Path, payload: dict[str, Any]) -> None:
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=path.parent, delete=False) as tmp:
        json.dump(payload, tmp, ensure_ascii=False, indent=2)
        tmp.write("\n")
        temp_name = tmp.name
    os.replace(temp_name, path)


def _validate_mapping(mapping: dict[str, Any]) -> list[str]:
    errors: list[str] = []
    if set(mapping) != {"prompt_id", "game_type", "exposed_hooks", "rubrics"}:
        errors.append("mapping.json 顶层字段必须恰好为 prompt_id/game_type/exposed_hooks/rubrics")
    if not isinstance(mapping.get("prompt_id"), str) or not mapping.get("prompt_id", "").strip():
        errors.append("prompt_id 必须是非空字符串")
    if mapping.get("game_type") not in {"2d", "3d"}:
        errors.append("game_type 必须是 2d 或 3d")
    hooks = mapping.get("exposed_hooks")
    if not isinstance(hooks, list) or not hooks or any(not isinstance(v, str) or not v.strip() for v in hooks):
        errors.append("exposed_hooks 必须是非空字符串数组")
    rubrics = mapping.get("rubrics")
    if not isinstance(rubrics, list) or not rubrics:
        errors.append("rubrics 必须是非空数组")
        return errors
    ids: list[int] = []
    texts: list[str] = []
    for index, row in enumerate(rubrics, 1):
        if not isinstance(row, dict) or set(row) != {"id", "text", "kind", "how"}:
            errors.append(f"rubric {index} 字段必须恰好为 id/text/kind/how")
            continue
        if not isinstance(row.get("id"), int):
            errors.append(f"rubric {index} id 必须为整数")
        else:
            ids.append(int(row["id"]))
        if row.get("kind") not in {"state", "dom", "vlm"}:
            errors.append(f"rubric {index} kind 非法")
        for key in ("text", "how"):
            if not isinstance(row.get(key), str) or not row[key].strip():
                errors.append(f"rubric {index} {key} 必须非空")
        if isinstance(row.get("text"), str):
            texts.append(row["text"])
    if ids != list(range(1, len(rubrics) + 1)):
        errors.append(f"rubric id 必须连续为 1..{len(rubrics)}")
    if len(texts) != len(set(texts)):
        errors.append("rubric text 不得重复")
    return errors



def _parse_report(stdout: str, stderr: str, target: Path, returncode: int) -> dict[str, Any]:
    text = (stdout or "").strip()
    if text:
        try:
            value = json.loads(text)
            if isinstance(value, dict):
                return value
        except json.JSONDecodeError:
            pass
    detail = _clean_text((stderr or text or f"web_ut.py exited with code {returncode}")[-6000:], target)
    return {"error": detail, "layer1_pass": False, "layer1_detail": {"fatal_console_errors": [detail]}, "items": []}




def _normalise_sample(repo_name: str, report: dict[str, Any], rubrics: list[dict[str, Any]], target: Path) -> dict[str, Any]:
    rubric_by_id = {int(r["id"]): r for r in rubrics}
    grouped: dict[int, dict[str, Any]] = {}
    for raw in report.get("items") or []:
        if not isinstance(raw, dict):
            continue
        try:
            rid = int(raw["id"])
        except Exception:
            continue
        if rid not in rubric_by_id:
            continue
        rubric = rubric_by_id[rid]
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
            "reason": _clean_text(str(raw.get("reason", "未提供原因。")), target),
        }
        if kind == "vlm" and raw.get("image"):
            item["image"] = str(raw["image"]).replace("\\", "/")
        grouped[rid] = item

    error = report.get("error")
    detail_in = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
    fatal = [str(v) for v in (detail_in.get("fatal_console_errors") or [])]
    if error and not fatal:
        fatal = [str(error)]
    loadable = bool(report.get("layer1_pass")) and detail_in.get("has_content", True) is not False and not error

    items: list[dict[str, Any]] = []
    score_by_id: dict[int, int] = {}
    for rubric in rubrics:
        rid = int(rubric["id"])
        item = grouped.get(rid)
        if item is None:
            reason = "未通过：检测脚本未返回该检查点结果。"
            if error:
                reason = f"未通过：脚本执行异常，当前检查点未形成有效证据；{_clean_text(str(error), target)}"
            is_vlm = rubric.get("kind") == "vlm"
            if is_vlm:
                reason = "视觉检查未完成：检测脚本没有返回该视觉验收项的有效结论。" if not error else f"视觉检查未完成：脚本执行异常；{_clean_text(str(error), target)}"
            item = {
                "id": rid,
                "kind": "vlm" if is_vlm else "det",
                "score": -100 if is_vlm else 0,
                "reason": reason,
            }
        items.append(item)
        score_by_id[rid] = int(item["score"])

    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}
    for rubric in rubrics:
        target_map = vlm_score if rubric.get("kind") == "vlm" else func_score
        target_map[str(rubric["text"])] = score_by_id[int(rubric["id"])]

    return {
        "repo": repo_name,
        "layer1_pass": bool(report.get("layer1_pass")),
        "layer1_detail": {
            "loadable": bool(loadable),
            "fatal_console_errors": [_clean_text(v, target) for v in fatal],
        },
        "items": items,
        "func_score": func_score,
        "vlm_score": vlm_score,
    }



def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--target_dir", help="单个样本目录或样本集合目录；省略时默认 repo_files/。")
    parser.add_argument("--jobs", type=int, default=RUN_JOBS, help="并行样本数；默认 2，最多 4。")
    args = parser.parse_args()

    base_dir = Path(__file__).resolve().parent
    mapping_path = base_dir / "mapping.json"
    output_path = base_dir / "results.json"
    image_dir = base_dir / "ut_images"
    root = Path(args.target_dir).expanduser().resolve() if args.target_dir else (base_dir / "repo_files").resolve()

    # A rerun must never reuse screenshots from an older extraction/run.  This is
    # especially important when a new archive is unpacked over the same directory.
    if image_dir.exists():
        shutil.rmtree(image_dir, ignore_errors=True)
    image_dir.mkdir(parents=True, exist_ok=True)

    if not mapping_path.is_file() or not (base_dir / "web_ut.py").is_file() or not (base_dir / "web_ut_harness.py").is_file():
        print("ERROR: required delivery files are missing.", file=sys.stderr)
        return 1
    if not root.is_dir():
        print(f"ERROR: target_dir 不存在或不是目录：{_clean_text(str(root), root)}", file=sys.stderr)
        return 2

    mapping = _load_json(mapping_path)
    errors = _validate_mapping(mapping)
    if errors:
        print("ERROR: invalid mapping.json: " + " | ".join(errors), file=sys.stderr)
        return 1
    rubrics = mapping["rubrics"]

    targets = _discover(root)
    if not targets:
        print("ERROR: target_dir 中未发现可测试前端项目。", file=sys.stderr)
        return 2
    invalid_names = [p.name for p in targets if p.parent.name == "repo_files" and not re.fullmatch(r"(good|bad|cheat)_\d+", p.name)]
    if invalid_names:
        print("ERROR: repo_files 样本名必须使用 good_N / bad_N / cheat_N 格式：" + ", ".join(invalid_names), file=sys.stderr)
        return 2

    web_ut = base_dir / "web_ut.py"

    def _invoke_target(target: Path, timeout_s: int) -> tuple[dict[str, Any], bool]:
        child_env = os.environ.copy()
        child_env["UT_INPUT_MODE"] = "virtual-pointer"
        child_env["UT_IMAGE_DIR"] = "ut_images"
        progress_file = base_dir / f".ut_progress_{os.getpid()}_{target.name}.json"
        try:
            progress_file.unlink()
        except FileNotFoundError:
            pass
        child_env["UT_PROGRESS_FILE"] = str(progress_file)
        proc = subprocess.Popen(
            [sys.executable, str(web_ut), "--target", str(target)],
            cwd=str(base_dir), stdout=subprocess.PIPE, stderr=subprocess.PIPE,
            text=True, encoding="utf-8", errors="replace", env=child_env,
            start_new_session=(os.name != "nt"),
        )
        try:
            stdout, stderr = proc.communicate(timeout=timeout_s)
        except subprocess.TimeoutExpired:
            # Kill the whole sample process group so npm/vite/browser grandchildren
            # cannot leak into the retry or into another fixture's run.
            if os.name != "nt":
                try:
                    os.killpg(proc.pid, signal.SIGTERM)
                except (ProcessLookupError, PermissionError):
                    pass
                try:
                    proc.wait(timeout=3)
                except subprocess.TimeoutExpired:
                    try:
                        os.killpg(proc.pid, signal.SIGKILL)
                    except (ProcessLookupError, PermissionError):
                        pass
            else:
                proc.kill()
            stdout, stderr = proc.communicate()
            partial_items: list[dict[str, Any]] = []
            try:
                raw_progress = json.loads(progress_file.read_text(encoding="utf-8"))
                if isinstance(raw_progress, list):
                    partial_items = [item for item in raw_progress if isinstance(item, dict)]
            except (OSError, json.JSONDecodeError):
                pass
            try:
                progress_file.unlink()
            except FileNotFoundError:
                pass
            return ({
                "error": f"web_ut.py timeout after {timeout_s}s",
                "layer1_pass": False,
                "layer1_detail": {
                    "fatal_console_errors": [f"timeout after {timeout_s}s"],
                    "partial_results_preserved": len(partial_items),
                },
                "items": partial_items,
            }, True)
        report = _parse_report(stdout, stderr, target, proc.returncode)
        try:
            progress_file.unlink()
        except FileNotFoundError:
            pass
        incomplete = bool(report.get("error")) or not isinstance(report.get("items"), list) or not report.get("items")
        return report, incomplete

    def run_one(target: Path) -> tuple[str, dict[str, Any]]:
        # First run uses a timeout longer than the harness build/install ceiling.
        # If infrastructure still interrupts the child before it can emit a complete
        # report, retry once generically.  This is deliberately independent of sample
        # name/role and does not alter any rubric predicate or score.
        report, incomplete = _invoke_target(target, SAMPLE_TIMEOUT_S)
        if incomplete:
            retry_report, retry_incomplete = _invoke_target(target, max(RETRY_TIMEOUT_S, SAMPLE_TIMEOUT_S))
            if not retry_incomplete:
                report = retry_report
            else:
                first_error = str(report.get("error") or "first attempt incomplete")
                second_error = str(retry_report.get("error") or "retry incomplete")
                report = retry_report
                report["error"] = f"{second_error}; retry after: {first_error}"
                detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
                fatal = list(detail.get("fatal_console_errors") or [])
                fatal.append("generic retry also failed")
                detail["fatal_console_errors"] = fatal
                report["layer1_detail"] = detail
        sample = _normalise_sample(target.name, report, rubrics, target)
        return target.name, sample

    jobs = max(1, min(4, int(args.jobs or 1), len(targets)))
    completed: dict[str, dict[str, Any]] = {}
    if jobs == 1:
        for target in targets:
            print(f"Testing {target.name}...", flush=True)
            name, sample = run_one(target)
            completed[name] = sample
    else:
        print(f"Testing {len(targets)} samples with {jobs} workers...", flush=True)
        with concurrent.futures.ThreadPoolExecutor(max_workers=jobs) as pool:
            future_to_target = {pool.submit(run_one, target): target for target in targets}
            for future in concurrent.futures.as_completed(future_to_target):
                target = future_to_target[future]
                try:
                    name, sample = future.result()
                except Exception as exc:
                    report = {
                        "error": f"parallel runner failure: {type(exc).__name__}: {exc}",
                        "layer1_pass": False,
                        "layer1_detail": {"fatal_console_errors": [f"parallel runner failure: {type(exc).__name__}: {exc}"]},
                        "items": [],
                    }
                    name = target.name
                    sample = _normalise_sample(target.name, report, rubrics, target)
                completed[name] = sample
                print(f"Finished {name}", flush=True)

    # Preserve stable sample ordering.
    samples = {target.name: completed[target.name] for target in targets}
    payload = {"prompt_id": mapping["prompt_id"], "game_type": mapping["game_type"], "samples": samples}
    _atomic_write(output_path, payload)
    print("done -> results.json", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
