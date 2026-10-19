#!/usr/bin/env python3
"""Run every repository sample and write a strictly formatted results.json.

The evaluator contract lives in web_ut.py + the fixed web_ut_harness.py.  This
runner never rewrites either game code or mapping data.  When Playwright/VLM is
unavailable, a previously complete result is preserved instead of replacing it
with an all-zero infrastructure failure.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Any


REQUIRED_SAMPLE_FIELDS = {
    "repo",
    "layer1_pass",
    "layer1_detail",
    "items",
    "func_score",
    "vlm_score",
}


def parse_json_output(stdout: str | None, stderr: str | None, returncode: int = 0) -> dict[str, Any]:
    """Extract one JSON object from web_ut.py stdout without hiding real errors."""
    out = (stdout or "").strip()
    err = (stderr or "").strip()
    if out:
        try:
            data = json.loads(out)
            return data if isinstance(data, dict) else {"error": "Evaluator returned non-object JSON"}
        except json.JSONDecodeError:
            starts = [pos for pos in (out.find("{"), out.find("[")) if pos >= 0]
            if starts:
                try:
                    data = json.loads(out[min(starts):])
                    return data if isinstance(data, dict) else {"error": "Evaluator returned non-object JSON"}
                except Exception:
                    pass
    message = err or out or f"web_ut.py exited with code {returncode}"
    return {
        "error": message,
        "layer1_pass": False,
        "layer1_detail": {"fatal_console_errors": [message]},
        "items": [],
    }


def validate_mapping_schema(mapping: dict[str, Any]) -> list[str]:
    """Validate the exact public mapping.json contract before any evaluation."""
    errors: list[str] = []
    if set(mapping) != {"prompt_id", "game_type", "exposed_hooks", "rubrics"}:
        errors.append("mapping.json top-level fields must be exactly prompt_id, game_type, exposed_hooks, rubrics")
    if not isinstance(mapping.get("prompt_id"), str) or not mapping.get("prompt_id", "").strip():
        errors.append("prompt_id must be a non-empty string")
    if mapping.get("game_type") not in {"2d", "3d"}:
        errors.append("game_type must be 2d or 3d")
    hooks = mapping.get("exposed_hooks")
    if not isinstance(hooks, list) or not hooks or any(not isinstance(x, str) or not x.strip() for x in hooks):
        errors.append("exposed_hooks must be a non-empty list of non-empty strings")
    elif len(hooks) != len(set(hooks)):
        errors.append("exposed_hooks must not contain duplicates")
    rubrics = mapping.get("rubrics")
    if not isinstance(rubrics, list) or not rubrics:
        errors.append("rubrics must be a non-empty list")
        return errors
    expected_ids = list(range(1, len(rubrics) + 1))
    ids: list[int] = []
    texts: list[str] = []
    for index, row in enumerate(rubrics, 1):
        if not isinstance(row, dict) or set(row) != {"id", "text", "kind", "how"}:
            errors.append(f"rubric {index} fields must be exactly id, text, kind, how")
            continue
        if not isinstance(row.get("id"), int): errors.append(f"rubric {index} id must be an integer")
        else: ids.append(row["id"])
        if row.get("kind") not in {"state", "dom", "vlm"}: errors.append(f"rubric {index} kind is invalid")
        for key in ("text", "how"):
            if not isinstance(row.get(key), str) or not row[key].strip(): errors.append(f"rubric {index} {key} must be non-empty")
        if isinstance(row.get("text"), str): texts.append(row["text"])
    if ids != expected_ids: errors.append(f"rubric ids must be continuous 1..{len(rubrics)}")
    if len(texts) != len(set(texts)): errors.append("rubric text values must be unique")
    return errors


def repo_order(name: str) -> tuple[int, int, str]:
    match = re.fullmatch(r"(good|bad|cheat)_(\d+)", name)
    if not match:
        return (99, 999999, name)
    group_order = {"good": 0, "bad": 1, "cheat": 2}
    return (group_order[match.group(1)], int(match.group(2)), name)


def validate_repo_names(names: list[str]) -> list[str]:
    """Enforce the supplement's sample naming and category coverage rules."""
    errors: list[str] = []
    invalid = [name for name in names if not re.fullmatch(r"(good|bad|cheat)_\d+", name)]
    if invalid:
        errors.append("repo_files sample names must match good_N, bad_N, or cheat_N: " + ", ".join(invalid))
    categories = {name.split("_", 1)[0] for name in names if "_" in name}
    missing = [category for category in ("good", "bad", "cheat") if category not in categories]
    if missing:
        errors.append("repo_files must include good, bad, and cheat samples; missing: " + ", ".join(missing))
    if len(names) < 3:
        errors.append("repo_files must contain at least three sample repositories")
    return errors


def load_json_object(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
        return value if isinstance(value, dict) else {}
    except Exception:
        return {}


def normalize_previous_sample(sample: Any, rubrics: list[dict[str, Any]]) -> dict[str, Any] | None:
    """Validate and strip an older sample to the exact public results schema."""
    if not isinstance(sample, dict):
        return None
    items = sample.get("items")
    if not isinstance(items, list) or len(items) != len(rubrics):
        return None

    rubric_by_id = {int(row["id"]): row for row in rubrics}
    seen: set[int] = set()
    clean_items: list[dict[str, Any]] = []
    score_by_id: dict[int, int] = {}
    for raw in items:
        try:
            rid = int(raw["id"])
        except Exception:
            return None
        if rid not in rubric_by_id or rid in seen:
            return None
        raw_score = raw.get("score", raw.get("passed"))
        rubric = rubric_by_id[rid]
        kind = "vlm" if rubric.get("kind") == "vlm" else "det"
        # Older harness runs used -100 for a VLM infrastructure failure.  It is
        # not a product failure, but it should not invalidate the entire prior
        # sample and disable the runner's infrastructure fallback.
        if raw_score == -100 and kind == "vlm":
            normalized_score = -100
        elif raw_score in (0, 1, False, True):
            normalized_score = 1 if raw_score in (1, True) else 0
        else:
            return None
        item: dict[str, Any] = {
            "id": rid,
            "kind": kind,
            "score": normalized_score,
            "reason": str(raw.get("reason", "")),
        }
        if kind == "vlm" and raw.get("image"):
            item["image"] = str(raw["image"])
        clean_items.append(item)
        score_by_id[rid] = item["score"]
        seen.add(rid)

    if seen != set(rubric_by_id):
        return None
    clean_items.sort(key=lambda row: row["id"])

    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}
    for rubric in sorted(rubrics, key=lambda row: int(row["id"])):
        target = vlm_score if rubric.get("kind") == "vlm" else func_score
        target[str(rubric["text"])] = score_by_id[int(rubric["id"])]

    detail = sample.get("layer1_detail") if isinstance(sample.get("layer1_detail"), dict) else {}
    diagnostic = json.dumps(detail, ensure_ascii=False).lower()
    infrastructure_markers = (
        "browsertype.launch", "executable doesn't exist", "err_blocked_by_administrator",
        "targetclosederror", "missing x server", "playwright", "browser has been closed",
        "timeout", "empty output", "invalid json",
    )
    if not sample.get("layer1_pass") and all(item["score"] == 0 for item in clean_items) \
            and any(marker in diagnostic for marker in infrastructure_markers):
        # Do not treat a previous infrastructure crash that was expanded to all
        # zeroes as a valid calibrated result worth preserving.
        return None
    return {
        "repo": str(sample.get("repo") or ""),
        "layer1_pass": bool(sample.get("layer1_pass")),
        "layer1_detail": {
            "loadable": bool(detail.get("loadable", sample.get("layer1_pass", False))),
            "fatal_console_errors": [str(value) for value in (detail.get("fatal_console_errors") or [])],
        },
        "items": clean_items,
        "func_score": func_score,
        "vlm_score": vlm_score,
    }


def normalize_report(
    repo_name: str,
    report: dict[str, Any],
    rubrics: list[dict[str, Any]],
    previous: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Convert harness output to the public results format; -100 is reserved for VLM infrastructure failure."""
    detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
    fatal_errors = [str(value) for value in (detail.get("fatal_console_errors") or [])]
    if report.get("error") and not fatal_errors:
        fatal_errors = [str(report["error"])]
    loadable = bool(report.get("layer1_pass")) and detail.get("has_content", True) is not False and not report.get("error")

    previous_by_id = {}
    if previous:
        previous_by_id = {int(item["id"]): item for item in previous.get("items", []) if isinstance(item, dict) and "id" in item}

    grouped: dict[int, list[dict[str, Any]]] = {}
    for raw in report.get("items") or []:
        if not isinstance(raw, dict):
            continue
        try:
            rid = int(raw["id"])
        except Exception:
            continue
        raw_value = raw.get("score", raw.get("passed", 0))
        is_vlm_failure = raw_value == -100
        grouped.setdefault(rid, []).append(
            {
                "score": 1 if raw_value in (1, True) else 0,
                "vlm_failure": is_vlm_failure,
                "reason": str(raw.get("reason", "")),
                "image": str(raw.get("image", "")) if raw.get("image") else "",
            }
        )

    items: list[dict[str, Any]] = []
    score_by_id: dict[int, int] = {}
    run_checks_error = detail.get("run_checks_error")
    if report.get("error"):
        missing_reason = f"脚本执行异常：{report['error']}，导致本检查点未执行。"
    elif run_checks_error:
        missing_reason = f"脚本在更早的检查点中断（{run_checks_error}），导致本项及后续检查点未执行。"
    else:
        missing_reason = "检测脚本未返回该检查点结果。"
    for rubric in sorted(rubrics, key=lambda row: int(row["id"])):
        rid = int(rubric["id"])
        kind = "vlm" if rubric.get("kind") == "vlm" else "det"
        rows = grouped.get(rid, [])

        # A VLM API timeout/error is infrastructure failure, not visual failure.
        # Preserve the last valid VLM judgement when available.
        if kind == "vlm" and rows and all(row["vlm_failure"] for row in rows):
            old = previous_by_id.get(rid)
            old_score = old.get("score", old.get("passed")) if old else None
            if old is not None and old_score in (0, 1, False, True):
                # Preserve a previous *actual* visual judgement when the current
                # VLM service is unavailable.
                item = {
                    "id": rid,
                    "kind": "vlm",
                    "score": 1 if old_score in (1, True) else 0,
                    "reason": str(old.get("reason", "VLM 不可用，保留上一份有效视觉结果。")),
                }
                if old.get("image"):
                    item["image"] = str(old["image"])
            else:
                # -100 means the visual model did not return a judgement.  Do
                # not turn an infrastructure failure into a false visual fail.
                reasons = list(dict.fromkeys(row["reason"] for row in rows if row["reason"]))
                item = {
                    "id": rid,
                    "kind": "vlm",
                    "score": -100,
                    "reason": " | ".join(reasons) or "VLM 调用失败，未产生视觉判定。",
                }
                image = next((row["image"] for row in rows if row["image"]), "")
                if image:
                    item["image"] = image
                elif old and old.get("image"):
                    item["image"] = str(old["image"])
        elif rows:
            score = int(all(row["score"] == 1 for row in rows))
            reasons = list(dict.fromkeys(row["reason"] for row in rows if row["reason"]))
            item = {
                "id": rid,
                "kind": kind,
                "score": score,
                "reason": " | ".join(reasons),
            }
            image = next((row["image"] for row in rows if row["image"]), "")
            if kind == "vlm" and image:
                item["image"] = image
        else:
            item = {"id": rid, "kind": kind, "score": 0, "reason": missing_reason}

        items.append(item)
        score_by_id[rid] = int(item["score"])

    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}
    for rubric in sorted(rubrics, key=lambda row: int(row["id"])):
        target = vlm_score if rubric.get("kind") == "vlm" else func_score
        target[str(rubric["text"])] = score_by_id[int(rubric["id"])]

    layer1_detail: dict[str, Any] = {
        "loadable": bool(loadable),
        "fatal_console_errors": fatal_errors,
    }
    if detail.get("run_checks_error"):
        layer1_detail["run_checks_error"] = str(detail["run_checks_error"])
    return {
        "repo": repo_name,
        "layer1_pass": bool(report.get("layer1_pass")),
        "layer1_detail": layer1_detail,
        "items": items,
        "func_score": func_score,
        "vlm_score": vlm_score,
    }


def is_infrastructure_failure(report: dict[str, Any]) -> bool:
    if report.get("error"):
        return True
    if report.get("items"):
        return False
    raw = json.dumps(report.get("layer1_detail") or {}, ensure_ascii=False).lower()
    markers = (
        "browsertype.launch",
        "executable doesn't exist",
        "err_blocked_by_administrator",
        "targetclosederror",
        "missing x server",
        "playwright",
        "browser has been closed",
        "timeout",
        "empty output",
        "invalid json",
    )
    return any(marker in raw for marker in markers)


def explicit_chromium() -> Path | None:
    """Return an explicitly configured Chromium executable, if valid."""
    for key in ("CHROMIUM_EXECUTABLE_PATH", "PLAYWRIGHT_EXECUTABLE_PATH"):
        value = os.environ.get(key, "").strip()
        if not value:
            continue
        path = Path(value).expanduser()
        if path.is_file() and os.access(path, os.X_OK):
            return path
    return None


def system_chromium() -> Path | None:
    """Return a Chromium-family browser available on PATH."""
    for command in ("chromium", "chromium-browser", "google-chrome", "google-chrome-stable"):
        found = shutil.which(command)
        if found:
            path = Path(found)
            if path.is_file() and os.access(path, os.X_OK):
                return path
    return None


def _playwright_browser_roots() -> list[Path]:
    """Return likely Playwright browser-cache roots without starting Playwright.

    Starting ``sync_playwright()`` merely to read ``chromium.executable_path``
    creates a private asyncio loop/transport in the *runner* process.  On newer
    Python versions (notably 3.14) closing that probe can surface Playwright's
    internal init task as ``Task was destroyed but it is pending``.  The runner
    does not need a protocol connection for discovery, so use filesystem-only
    probing here and leave all real Playwright work to web_ut.py.
    """
    roots: list[Path] = []
    configured = os.environ.get("PLAYWRIGHT_BROWSERS_PATH", "").strip()
    if configured and configured != "0":
        roots.append(Path(configured).expanduser())

    if sys.platform == "win32":
        local_appdata = os.environ.get("LOCALAPPDATA", "").strip()
        if local_appdata:
            roots.append(Path(local_appdata) / "ms-playwright")
    elif sys.platform == "darwin":
        roots.append(Path.home() / "Library" / "Caches" / "ms-playwright")
    else:
        roots.append(Path.home() / ".cache" / "ms-playwright")

    # PLAYWRIGHT_BROWSERS_PATH=0 stores browsers beside the Playwright package.
    # Include that location as a fallback without importing/starting its driver.
    try:
        import importlib.util
        spec = importlib.util.find_spec("playwright")
        if spec and spec.submodule_search_locations:
            package_root = Path(next(iter(spec.submodule_search_locations)))
            roots.append(package_root / "driver" / "package" / ".local-browsers")
    except Exception:
        pass

    unique: list[Path] = []
    seen: set[str] = set()
    for root in roots:
        key = os.path.normcase(str(root))
        if key not in seen:
            seen.add(key)
            unique.append(root)
    return unique


def playwright_managed_browser_path() -> Path | None:
    """Locate a Playwright-managed Chromium executable without opening Playwright."""
    if sys.platform == "win32":
        patterns = (
            "chromium_headless_shell-*/chrome-headless-shell-win*/chrome-headless-shell.exe",
            "chromium_headless_shell-*/chrome-headless-shell-win64/chrome-headless-shell.exe",
            "chromium-*/chrome-win*/chrome.exe",
            "chromium-*/chrome-win64/chrome.exe",
        )
    elif sys.platform == "darwin":
        patterns = (
            "chromium_headless_shell-*/chrome-headless-shell-mac*/chrome-headless-shell",
            "chromium-*/chrome-mac*/Chromium.app/Contents/MacOS/Chromium",
        )
    else:
        patterns = (
            "chromium_headless_shell-*/chrome-headless-shell-linux*/chrome-headless-shell",
            "chromium-*/chrome-linux*/chrome",
        )
    for root in _playwright_browser_roots():
        for pattern in patterns:
            for path in root.glob(pattern):
                if path.is_file() and os.access(path, os.X_OK):
                    return path
    return None


def playwright_managed_browser_available() -> bool:
    return playwright_managed_browser_path() is not None


def playwright_browser_available() -> bool:
    """Check explicit, Playwright-managed, then system Chromium in that order."""
    return explicit_chromium() is not None or playwright_managed_browser_available() or system_chromium() is not None


def build_target(target_dir: Path, timeout_seconds: int = 600) -> Path:
    """Use the committed play.html by default; rebuild only when requested or missing.

    The source Vite entry remains index.html. The directly playable/evaluation entry
    is committed as play.html in each sample root. When an explicit rebuild is
    requested, Vite still builds to dist/index.html and the fresh artifact is copied
    back to play.html so there is only one submitted standalone entry location.
    """
    play_file = target_dir / "play.html"
    dist_file = target_dir / "dist" / "index.html"
    rebuild = os.environ.get("WEB_UT_REBUILD", "0") == "1"
    if not rebuild and play_file.is_file():
        return play_file

    package_json = target_dir / "package.json"
    if not package_json.is_file():
        if play_file.is_file():
            return play_file
        raise RuntimeError(f"No package.json or play.html in {target_dir}")

    completed = subprocess.run(
        ["npm", "run", "build"],
        cwd=target_dir,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=timeout_seconds,
    )
    if completed.returncode != 0:
        detail = ((completed.stdout or "") + "\n" + (completed.stderr or "")).strip()
        raise RuntimeError(f"npm run build failed for {target_dir.name}: {detail}")
    if not dist_file.is_file():
        raise RuntimeError(f"Build succeeded but dist/index.html is missing: {target_dir}")
    shutil.copy2(dist_file, play_file)
    return play_file


def evaluator_command(target_dir: Path, web_ut_path: Path) -> list[str]:
    command = [sys.executable, str(web_ut_path), "--target", str(target_dir)]
    if sys.platform.startswith("linux") and os.environ.get("WEB_UT_USE_XVFB", "1") != "0":
        xvfb = shutil.which("xvfb-run")
        if xvfb:
            command = [xvfb, "-a", "-s", "-screen 0 1280x800x24"] + command
    return command


def atomic_write(path: Path, value: dict[str, Any]) -> None:
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=path.parent, delete=False) as temp:
        json.dump(value, temp, ensure_ascii=False, indent=2)
        temp.write("\n")
        temp_name = temp.name
    os.replace(temp_name, path)


def resolve_delivery_paths(target_dir: str | None) -> tuple[Path, Path, Path]:
    """Resolve delivery root, repo_files root and results path.

    Platform runners commonly pass --target_dir.  Accept either the delivery
    root (contains mapping.json + repo_files) or repo_files itself.
    """
    script_root = Path(__file__).resolve().parent
    if not target_dir:
        delivery_root = script_root
        repo_root = delivery_root / "repo_files"
    else:
        candidate = Path(target_dir).expanduser().resolve()
        if (candidate / "mapping.json").is_file() and (candidate / "repo_files").is_dir():
            delivery_root = candidate
            repo_root = candidate / "repo_files"
        elif candidate.is_dir() and candidate.name == "repo_files" and (candidate.parent / "mapping.json").is_file():
            delivery_root = candidate.parent
            repo_root = candidate
        else:
            raise ValueError("--target_dir must point to the delivery root or its repo_files directory")
    return delivery_root, repo_root, delivery_root / "results.json"


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Run all calibrated web samples and write results.json")
    parser.add_argument("--target_dir", "--target-dir", dest="target_dir", default=None,
                        help="delivery root, or its repo_files directory")
    args = parser.parse_args(argv)

    script_root = Path(__file__).resolve().parent
    try:
        base_dir, repo_root, output_path = resolve_delivery_paths(args.target_dir)
    except ValueError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    os.chdir(base_dir)

    mapping_path = base_dir / "mapping.json"
    web_ut_path = script_root / "web_ut.py"
    harness_path = script_root / "web_ut_harness.py"
    if not mapping_path.is_file() or not repo_root.is_dir() or not web_ut_path.is_file() or not harness_path.is_file():
        print("ERROR: required delivery files are missing.", file=sys.stderr)
        return 1

    mapping = load_json_object(mapping_path)
    schema_errors = validate_mapping_schema(mapping)
    if schema_errors:
        print("ERROR: invalid mapping.json: " + " | ".join(schema_errors), file=sys.stderr)
        return 1
    rubrics = mapping["rubrics"]

    previous_root = load_json_object(output_path)
    previous_samples_raw = previous_root.get("samples") if isinstance(previous_root.get("samples"), dict) else {}
    previous_samples = {
        name: clean
        for name, raw in previous_samples_raw.items()
        if (clean := normalize_previous_sample(raw, rubrics)) is not None
    }

    repo_names = sorted((path.name for path in repo_root.iterdir() if path.is_dir()), key=repo_order)
    if not repo_names:
        print("ERROR: repo_files contains no sample repositories.", file=sys.stderr)
        return 1
    repo_errors = validate_repo_names(repo_names)
    if repo_errors:
        print("ERROR: invalid repo_files layout: " + " | ".join(repo_errors), file=sys.stderr)
        return 1

    # The canonical harness requires a Playwright-managed Chromium.  If it is
    # absent, preserve a complete prior run rather than emitting fake all-zero
    # game failures.  This is a successful, explicit infrastructure skip.
    force_run = os.environ.get("WEB_UT_FORCE_RUN", "0") == "1"
    if not force_run and not playwright_browser_available():
        missing = [name for name in repo_names if name not in previous_samples]
        if missing:
            print("ERROR: Playwright Chromium is unavailable and no complete prior result exists for: " + ", ".join(missing), file=sys.stderr)
            return 2
        samples = {name: {**previous_samples[name], "repo": name} for name in repo_names}
        atomic_write(
            output_path,
            {"prompt_id": mapping["prompt_id"], "game_type": mapping["game_type"], "samples": samples},
        )
        print(f"evaluator skipped (Playwright Chromium unavailable); preserved complete results -> {output_path}")
        return 0

    samples: dict[str, Any] = {}
    unrecoverable_infra: list[str] = []
    timeout_seconds = int(os.environ.get("WEB_UT_SAMPLE_TIMEOUT", "900"))
    for repo_name in repo_names:
        target_dir = repo_root / repo_name
        print(f"Testing {repo_name}...", flush=True)
        previous = previous_samples.get(repo_name)
        try:
            static_target = build_target(target_dir)
            env = dict(os.environ)
            env["PYTHONIOENCODING"] = "utf-8"
            env.setdefault("NO_PROXY", "localhost,127.0.0.1")
            env.setdefault("no_proxy", "localhost,127.0.0.1")
            # Linux CI often has a functional system Chromium while Playwright's
            # headless shell lacks WebGL. Use the real browser in a virtual X11
            # display when no display is already present, so custom WebGL games
            # and Three.js games are evaluated under the same rendering path.
            command = evaluator_command(static_target, web_ut_path)
            chromium = explicit_chromium()
            if chromium is None and not playwright_managed_browser_available():
                chromium = system_chromium()
            if chromium is not None:
                # These are the exact variable names consumed by the fixed harness.
                env.setdefault("CHROMIUM_EXECUTABLE_PATH", str(chromium))
                use_xvfb = (sys.platform.startswith("linux")
                            and env.get("WEB_UT_USE_XVFB", "1") != "0"
                            and shutil.which("xvfb-run") is not None)
                if use_xvfb or env.get("DISPLAY"):
                    # evaluator_command already wraps the process in xvfb-run; do
                    # not wrap it a second time. Headful Chromium under Xvfb gives
                    # WebGL a more representative path than the headless shell.
                    env.setdefault("CHROMIUM_HEADLESS", "0")
            completed = subprocess.run(
                command,
                capture_output=True,
                text=True,
                encoding="utf-8",
                errors="replace",
                env=env,
                timeout=timeout_seconds,
            )
            report = parse_json_output(completed.stdout, completed.stderr, completed.returncode)
        except subprocess.TimeoutExpired as exc:
            report = {"error": f"web_ut.py timeout after {timeout_seconds}s: {exc}", "layer1_pass": False, "layer1_detail": {"fatal_console_errors": [f"timeout after {timeout_seconds}s"]}, "items": []}
        except Exception as exc:
            report = {"error": repr(exc), "layer1_pass": False, "layer1_detail": {"fatal_console_errors": [repr(exc)]}, "items": []}

        if is_infrastructure_failure(report):
            if previous is not None:
                samples[repo_name] = {**previous, "repo": repo_name}
                print(f"  infrastructure unavailable; preserved prior complete result for {repo_name}.")
            else:
                unrecoverable_infra.append(repo_name)
                diagnostic = str(report.get("error") or report.get("layer1_detail") or "unknown infrastructure failure")
                print(f"ERROR: evaluator infrastructure failed for {repo_name}: {diagnostic}", file=sys.stderr)
                break
        else:
            samples[repo_name] = normalize_report(repo_name, report, rubrics, previous)

    if unrecoverable_infra:
        print("ERROR: results.json was not overwritten because evaluator infrastructure failed without a valid prior result.", file=sys.stderr)
        return 2

    output = {"prompt_id": mapping["prompt_id"], "game_type": mapping["game_type"], "samples": samples}
    atomic_write(output_path, output)
    print(f"done -> {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
