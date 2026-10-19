#!/usr/bin/env python3
"""Run every repository sample and write a strictly formatted results.json.

The evaluator contract lives in web_ut.py + the fixed web_ut_harness.py.
Every discovered repository is evaluated from its current source. Historical dist
or results files are never reused as evidence for a new run.
"""
from __future__ import annotations

import atexit
import hashlib
import json
import os
from concurrent.futures import ThreadPoolExecutor, as_completed
import re
import shutil
import stat
import subprocess
import sys
import tempfile
import time
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


class ProductBuildError(RuntimeError):
    """The submitted source failed its own build; this is a product result, not evaluator infrastructure."""


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
    """Keep calibration fixtures grouped first without restricting repository names.

    Any immediate child directory under repo_files/ is a runnable target. Names
    such as good_N/bad_N/cheat_N only receive a convenient stable ordering;
    arbitrary game names are fully supported and are never rejected.
    """
    match = re.fullmatch(r"(good|bad|cheat)_(\d+)", name)
    if not match:
        return (3, 0, name.casefold())
    group_order = {"good": 0, "bad": 1, "cheat": 2}
    return (group_order[match.group(1)], int(match.group(2)), name.casefold())


def discover_repositories(repo_root: Path) -> list[str]:
    """Return every runnable game target directly contained in repo_files/.

    Supported entry forms:
      1. a project/static-site directory;
      2. a standalone .html/.htm file.

    The runner intentionally does not enforce good_N/bad_N/cheat_N naming or a
    fixed fixture count. Hidden entries are ignored as repository metadata rather
    than game targets. This preserves the original single-HTML entry workflow
    while also supporting any number of full project directories.
    """
    names = [
        path.name
        for path in repo_root.iterdir()
        if not path.name.startswith(".")
        and (path.is_dir() or (path.is_file() and path.suffix.lower() in {".html", ".htm"}))
    ]
    return sorted(names, key=repo_order)


def load_json_object(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
        return value if isinstance(value, dict) else {}
    except Exception:
        return {}


def concise_reason(kind: str, score: int, text: str, detail: str = "") -> str:
    """Match the compact, auditable reason style used by the bus evaluator."""
    detail = re.sub(r"\[\[BLOCKED_BY:.*?\]\]", "", str(detail or ""))
    detail = " ".join(detail.split())[:520]
    if kind == "vlm" and score == -100:
        return f"未完成：VLM 调用失败或超时，无法判定「{text}」。" + (f" 原因：{detail}" if detail else "")
    if score == 1:
        prefix = "VLM 截图确认" if kind == "vlm" else "自动化验证通过"
        return f"通过：{prefix}「{text}」。" + (f" 观测：{detail}" if detail else "")
    prefix = "VLM 截图未确认" if kind == "vlm" else "自动化验证未通过"
    return f"未通过：{prefix}「{text}」。" + (f" 观测：{detail}" if detail else " 未提供底层观测值。")


def normalize_report(
    repo_name: str,
    report: dict[str, Any],
    rubrics: list[dict[str, Any]],
    *,
    build_ok: bool,
    evaluator_return_code: int,
) -> dict[str, Any]:
    """Convert a harness report to the same public result shape as the bus game."""
    detail = report.get("layer1_detail") if isinstance(report.get("layer1_detail"), dict) else {}
    fatal_errors = [str(value) for value in (detail.get("fatal_console_errors") or [])]
    for key in ("build_error", "resolve_or_build_error", "run_checks_error"):
        if detail.get(key) and str(detail[key]) not in fatal_errors:
            fatal_errors.append(str(detail[key]))
    if report.get("error") and str(report["error"]) not in fatal_errors:
        fatal_errors.append(str(report["error"]))

    rubric_by_id = {int(row["id"]): row for row in rubrics}
    grouped: dict[int, list[dict[str, Any]]] = {}
    for raw in report.get("items") or []:
        if not isinstance(raw, dict):
            continue
        try:
            rid = int(raw.get("id"))
        except Exception:
            continue
        row = rubric_by_id.get(rid)
        if not row:
            continue
        kind = "vlm" if row.get("kind") == "vlm" else "det"
        raw_score = raw.get("score", raw.get("passed", 0))
        if kind == "vlm":
            score = raw_score if type(raw_score) is int and raw_score in {-100, 0, 1} else -100
        else:
            score = raw_score if type(raw_score) is int and raw_score in {0, 1} else (1 if raw_score is True else 0)
        grouped.setdefault(rid, []).append({
            "score": score,
            "reason": str(raw.get("reason", "")),
            "image": str(raw.get("image", "")) if raw.get("image") else "",
        })

    layer1_pass = bool(report.get("layer1_pass")) if not report.get("error") else False
    if report.get("error"):
        missing_detail = f"本轮评测基础设施或脚本异常：{report['error']}"
    elif detail.get("build_error"):
        missing_detail = f"当前提交源码构建失败，运行时检查未执行：{detail['build_error']}"
    elif detail.get("run_checks_error"):
        missing_detail = f"本轮检查提前中断：{detail['run_checks_error']}"
    elif not layer1_pass:
        missing_detail = "Layer1 未通过，Rubric 未执行"
    else:
        missing_detail = "evaluator did not emit an item for this rubric"

    items: list[dict[str, Any]] = []
    score_by_id: dict[int, int] = {}
    for rubric in sorted(rubrics, key=lambda row: int(row["id"])):
        rid = int(rubric["id"])
        kind = "vlm" if rubric.get("kind") == "vlm" else "det"
        rows = grouped.get(rid, [])
        if rows:
            scores = [int(row["score"]) for row in rows]
            if 0 in scores:
                score = 0
            elif kind == "vlm" and -100 in scores:
                score = -100
            else:
                score = int(all(value == 1 for value in scores))
            details = list(dict.fromkeys(row["reason"] for row in rows if row["reason"]))
            detail_text = " | ".join(details)
            image = next((row["image"] for row in rows if row["image"]), "")
        else:
            score = -100 if kind == "vlm" and evaluator_return_code != 0 else 0
            detail_text = missing_detail
            image = ""
        item: dict[str, Any] = {
            "id": rid,
            "kind": kind,
            "score": score,
            "reason": concise_reason(kind, score, str(rubric["text"]), detail_text),
        }
        if kind == "vlm" and image:
            item["image"] = image.replace("\\", "/")
        items.append(item)
        score_by_id[rid] = score

    func_score: dict[str, int] = {}
    vlm_score: dict[str, int] = {}
    for rubric in sorted(rubrics, key=lambda row: int(row["id"])):
        rid = int(rubric["id"])
        target = vlm_score if rubric.get("kind") == "vlm" else func_score
        target[str(rubric["text"])] = score_by_id[rid]

    return {
        "repo": repo_name,
        "layer1_pass": layer1_pass,
        "layer1_detail": {
            "loadable": bool(detail.get("loadable", layer1_pass)) if not report.get("error") else False,
            "fatal_console_errors": fatal_errors,
        },
        "items": items,
        "build_ok": bool(build_ok),
        "evaluator_return_code": int(evaluator_return_code),
        "func_score": func_score,
        "vlm_score": vlm_score,
        "func_passed": sum(1 for value in func_score.values() if value == 1),
        "vlm_passed": sum(1 for value in vlm_score.values() if value == 1),
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


def has_vlm_call_failure(report: dict[str, Any]) -> bool:
    return any(isinstance(item, dict) and item.get("kind") == "vlm" and item.get("score") == -100 for item in (report.get("items") or []))


def playwright_browser_available() -> bool:
    """Check either an explicit/system Chromium or a Playwright-managed browser."""
    explicit = os.environ.get("PLAYWRIGHT_EXECUTABLE_PATH")
    if explicit and Path(explicit).expanduser().is_file() and os.access(Path(explicit).expanduser(), os.X_OK):
        return True
    if sys.platform.startswith("linux") and shutil.which("xvfb-run") and (shutil.which("chromium") or shutil.which("chromium-browser")):
        return True
    configured = os.environ.get("PLAYWRIGHT_BROWSERS_PATH")
    roots = []
    if configured and configured != "0":
        roots.append(Path(configured).expanduser())
    roots.append(Path.home() / ".cache" / "ms-playwright")
    # Windows: Playwright installs browsers under %LOCALAPPDATA%\ms-playwright
    local_appdata = os.environ.get("LOCALAPPDATA")
    if local_appdata:
        roots.append(Path(local_appdata) / "ms-playwright")
    if sys.platform == "win32":
        patterns = (
            "chromium_headless_shell-*/chrome-headless-shell-win*/chrome-headless-shell.exe",
            "chromium-*/chrome-win*/chrome.exe",
        )
    else:
        patterns = (
            "chromium_headless_shell-*/chrome-headless-shell-*/chrome-headless-shell",
            "chromium-*/chrome-linux*/chrome",
        )
    return any(path.is_file() and os.access(path, os.X_OK) for root in roots for pattern in patterns for path in root.glob(pattern))


def _package_manager_executable(name: str) -> str:
    """Resolve npm/yarn/pnpm portably, including Windows *.cmd shims."""
    candidates = [name]
    if os.name == "nt":
        candidates = [f"{name}.cmd", f"{name}.exe", name]
    for candidate in candidates:
        resolved = shutil.which(candidate)
        if resolved:
            return resolved
    raise RuntimeError(
        f"{name} executable was not found in PATH. "
        f"Install Node.js/{name} and make sure its command is available to this process."
    )


def _run_package_manager(
    name: str,
    args: list[str],
    *,
    cwd: Path,
    timeout: int,
) -> subprocess.CompletedProcess[str]:
    """Run a JS package-manager command on POSIX and Windows.

    On Windows npm/yarn/pnpm are commonly .cmd shims. Calling a bare
    ``["npm", ...]`` through CreateProcess can raise WinError 2 even when npm
    works in an interactive shell. Resolve the shim explicitly and invoke it
    through cmd.exe when needed.
    """
    executable = _package_manager_executable(name)
    kwargs = dict(
        cwd=cwd,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=timeout,
    )
    try:
        if os.name == "nt" and Path(executable).suffix.lower() in {".cmd", ".bat"}:
            command_line = subprocess.list2cmdline([executable, *args])
            return subprocess.run(command_line, shell=True, **kwargs)
        return subprocess.run([executable, *args], **kwargs)
    except FileNotFoundError as exc:
        raise RuntimeError(
            f"Failed to start {name} at {executable!r} while evaluating {cwd.name}. "
            f"PATH={os.environ.get('PATH', '')!r}"
        ) from exc


def _dependency_fingerprint(package: dict[str, Any]) -> str:
    """Hash only dependency declarations that affect node_modules contents."""
    payload = {
        key: package.get(key) or {}
        for key in ("dependencies", "devDependencies", "optionalDependencies", "peerDependencies", "overrides")
    }
    payload["packageManager"] = package.get("packageManager") or ""
    raw = json.dumps(payload, sort_keys=True, separators=(",", ":"), ensure_ascii=True).encode("utf-8")
    return hashlib.sha256(raw).hexdigest()[:20]


def _is_directory_link(path: Path) -> bool:
    """Return True for symlinks and Windows junction/reparse-point directories."""
    if path.is_symlink():
        return True
    is_junction = getattr(path, "is_junction", None)
    if callable(is_junction):
        try:
            if is_junction():
                return True
        except OSError:
            pass
    os_isjunction = getattr(os.path, "isjunction", None)
    if callable(os_isjunction):
        try:
            if os_isjunction(path):
                return True
        except OSError:
            pass
    if os.name == "nt":
        try:
            attrs = os.lstat(path).st_file_attributes
            return bool(attrs & stat.FILE_ATTRIBUTE_REPARSE_POINT)
        except (AttributeError, FileNotFoundError, OSError):
            pass
    return False


def _path_is_within(path: Path, root: Path) -> bool:
    try:
        path.resolve(strict=False).relative_to(root.resolve(strict=False))
        return True
    except (OSError, ValueError):
        return False


def _is_managed_dependency_link(path: Path, cache_root: Path) -> bool:
    """Only classify links that point into this runner's dependency cache."""
    return _is_directory_link(path) and _path_is_within(path, cache_root)


def _remove_node_modules_link(path: Path) -> None:
    if not path.exists() and not path.is_symlink():
        return
    if path.is_symlink():
        path.unlink()
        return
    # Windows directory junctions are reparse points. os.rmdir removes the
    # junction itself without traversing the shared dependency directory.
    if os.name == "nt":
        try:
            os.rmdir(path)
            return
        except OSError:
            pass
    shutil.rmtree(path)


def cleanup_shared_dependency_links(repo_root: Path, cache_root: Path) -> list[str]:
    """Remove only node_modules links created against the shared runner cache.

    Real per-repository node_modules directories are deliberately preserved.
    This keeps the delivery tree small after a run and prevents archivers from
    dereferencing nine copies of the same cached dependency tree.
    """
    removed: list[str] = []
    if not repo_root.is_dir():
        return removed
    for target in repo_root.iterdir():
        if not target.is_dir():
            continue
        node_modules = target / "node_modules"
        if _is_managed_dependency_link(node_modules, cache_root):
            _remove_node_modules_link(node_modules)
            removed.append(target.name)
    return removed


def _link_directory(source: Path, target: Path) -> None:
    """Create a portable directory link, falling back to a Windows junction."""
    source = source.resolve()
    if target.exists() or target.is_symlink():
        return
    try:
        target.symlink_to(source, target_is_directory=True)
        return
    except OSError:
        if os.name != "nt":
            raise
    cmd = shutil.which("cmd.exe") or shutil.which("cmd")
    if not cmd:
        raise RuntimeError("Cannot create shared node_modules junction: cmd.exe is unavailable")
    line = subprocess.list2cmdline(["mklink", "/J", str(target), str(source)])
    completed = subprocess.run([cmd, "/d", "/s", "/c", line], capture_output=True, text=True, encoding="utf-8", errors="replace")
    if completed.returncode != 0 or not target.exists():
        detail = ((completed.stdout or "") + "\n" + (completed.stderr or "")).strip()
        raise RuntimeError(f"Failed to create node_modules junction {target} -> {source}: {detail}")


def default_dependency_cache_root() -> Path:
    """Return a persistent per-user cache so new ZIP extractions can reuse deps."""
    override = os.environ.get("WEB_UT_CACHE_DIR")
    if override:
        return Path(override).expanduser().resolve() / "dependencies"
    if os.name == "nt":
        base = Path(os.environ.get("LOCALAPPDATA") or Path.home() / "AppData" / "Local")
    else:
        base = Path(os.environ.get("XDG_CACHE_HOME") or Path.home() / ".cache")
    return base / "web_ut_runner" / "dependencies"


def ensure_shared_dependencies(target_dir: Path, cache_root: Path, timeout_seconds: int = 900) -> Path:
    """Install each unique dependency set once and link it into every sample.

    All repositories in this delivery currently share the same dependency set,
    so a five-sample run performs one npm install instead of five. The cache is
    keyed by dependency declarations and is safe to reuse on later runs.
    """
    package_path = target_dir / "package.json"
    package = load_json_object(package_path)
    if not package:
        raise RuntimeError(f"Invalid package.json in {target_dir}")
    fingerprint = _dependency_fingerprint(package)
    slot = cache_root / fingerprint
    shared_modules = slot / "node_modules"
    ready = slot / ".ready"
    if not ready.is_file() or not shared_modules.is_dir():
        if slot.exists():
            shutil.rmtree(slot)
        slot.mkdir(parents=True, exist_ok=True)
        shared_package = {
            "name": f"web-ut-deps-{fingerprint}",
            "private": True,
            "version": "0.0.0",
            "dependencies": package.get("dependencies") or {},
            "devDependencies": package.get("devDependencies") or {},
        }
        for key in ("optionalDependencies", "peerDependencies", "overrides", "packageManager"):
            if package.get(key):
                shared_package[key] = package[key]
        (slot / "package.json").write_text(json.dumps(shared_package, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        install = _run_package_manager(
            "npm",
            ["install", "--no-audit", "--no-fund", "--prefer-offline"],
            cwd=slot,
            timeout=timeout_seconds,
        )
        if install.returncode != 0:
            detail = ((install.stdout or "") + "\n" + (install.stderr or "")).strip()
            raise RuntimeError(f"shared npm install failed for dependency set {fingerprint}: {detail}")
        ready.write_text("ok\n", encoding="utf-8")

    target_modules = target_dir / "node_modules"
    if _is_directory_link(target_modules):
        try:
            if target_modules.resolve() == shared_modules.resolve():
                return shared_modules
        except OSError:
            pass
        _remove_node_modules_link(target_modules)
    elif target_modules.exists():
        # A real local installation is already valid; keep it rather than
        # deleting user data just to force cache reuse.
        return target_modules
    _link_directory(shared_modules, target_modules)
    return shared_modules


def build_target(target_dir: Path, timeout_seconds: int = 900, dependency_cache: Path | None = None) -> tuple[Path, bool]:
    """Resolve/build one target; never reuse a pre-existing dist as evidence.

    Standalone HTML files are already runnable static entries and therefore skip
    dependency installation/build. Project directories with package.json are
    rebuilt from current source on every run.
    """
    if target_dir.is_file():
        if target_dir.suffix.lower() in {".html", ".htm"}:
            return target_dir, False
        raise RuntimeError(f"Unsupported standalone target: {target_dir}")

    package_json = target_dir / "package.json"
    if not package_json.is_file():
        if (target_dir / "index.html").is_file():
            return target_dir, False
        raise RuntimeError(f"No package.json or index.html in {target_dir}")

    dist_dir = target_dir / "dist"
    if dist_dir.exists():
        shutil.rmtree(dist_dir)

    if not (target_dir / "node_modules").is_dir():
        if dependency_cache is not None:
            ensure_shared_dependencies(target_dir, dependency_cache, timeout_seconds)
        else:
            install = _run_package_manager(
                "npm",
                ["install", "--no-audit", "--no-fund", "--prefer-offline"],
                cwd=target_dir,
                timeout=timeout_seconds,
            )
            if install.returncode != 0:
                detail = ((install.stdout or "") + "\n" + (install.stderr or "")).strip()
                raise RuntimeError(f"npm install failed for {target_dir.name}: {detail}")

    completed = _run_package_manager(
        "npm", ["run", "build"], cwd=target_dir, timeout=timeout_seconds
    )
    if completed.returncode != 0:
        detail = ((completed.stdout or "") + "\n" + (completed.stderr or "")).strip()
        raise ProductBuildError(f"npm run build failed for {target_dir.name}: {detail}")
    if not (dist_dir / "index.html").is_file():
        raise ProductBuildError(f"Build succeeded but dist/index.html is missing: {target_dir}")
    return dist_dir, True


def _source_stack_items(target_dir: Path, build_ok: bool) -> list[dict[str, Any]]:
    """Score R38-R42 from source/build facts even when no browser build exists."""
    import web_ut

    stack = web_ut._source_stack_probe(source_dir=target_dir, build_ok=build_ok)
    rows = (
        (38, "react19"),
        (39, "typescript"),
        (40, "vite"),
        (41, "tailwind"),
        (42, "build"),
    )
    items: list[dict[str, Any]] = []
    for rid, key in rows:
        value = bool(stack.get(key))
        if rid == 42:
            reason = f"本轮 runner 从当前源码执行 npm run build 的结果 build={value}。"
        else:
            reason = f"源码技术栈检查：{key}={value}，detail={stack.get('detail')}。"
        items.append({"id": rid, "kind": "det", "score": int(value), "reason": reason, "image": ""})
    return items


def _merge_missing_items(report: dict[str, Any], extra_items: list[dict[str, Any]]) -> dict[str, Any]:
    """Add independently-derived rubric evidence without overwriting runtime evidence.

    R38-R42 are source/build facts. Browser startup, page load, gameplay timeouts,
    or a run_checks crash must not erase those already-known facts. If web_ut.py
    did return one of these rows, its fresh row wins and no duplicate is added.
    """
    rows = report.get("items")
    if not isinstance(rows, list):
        rows = []
        report["items"] = rows
    present: set[int] = set()
    for row in rows:
        if not isinstance(row, dict):
            continue
        try:
            present.add(int(row.get("id")))
        except Exception:
            pass
    for row in extra_items:
        try:
            rid = int(row.get("id"))
        except Exception:
            continue
        if rid not in present:
            rows.append(dict(row))
            present.add(rid)
    return report


def evaluator_command(target_dir: Path) -> list[str]:
    # Xvfb/system-Chromium selection is applied once by evaluate_repository.
    # Keeping this command plain avoids the old accidental nested xvfb-run.
    return [sys.executable, "web_ut.py", "--target", str(target_dir)]


def evaluate_repository(
    *,
    base_dir: Path,
    repo_root: Path,
    repo_name: str,
    dependency_cache: Path,
    timeout_seconds: int,
) -> tuple[str, dict[str, Any], bool, int, float, float, float]:
    """Build and evaluate one repository; safe to run in a small worker pool."""
    target_dir = repo_root / repo_name
    sample_started = time.monotonic()
    stage = "build"
    build_elapsed = 0.0
    evaluator_elapsed = 0.0
    build_ok = False
    evaluator_return_code = 1
    try:
        build_started = time.monotonic()
        static_target, build_ok = build_target(target_dir, timeout_seconds, dependency_cache)
        build_elapsed = time.monotonic() - build_started
        # Compute R38-R42 before launching the browser evaluator. These facts are
        # independently decidable from current source plus this fresh build and
        # must survive later browser/VLM/runtime failures.
        source_items = _source_stack_items(target_dir if target_dir.is_dir() else target_dir.parent, build_ok=build_ok)
        stage = "evaluator_setup"
        env = dict(os.environ)
        env["PYTHONIOENCODING"] = "utf-8"
        env["WEB_UT_SOURCE_DIR"] = str(target_dir if target_dir.is_dir() else target_dir.parent)
        env["WEB_UT_BUILD_OK"] = "1" if build_ok else "0"
        env["WEB_UT_SAMPLE_NAME"] = repo_name
        env.setdefault("NO_PROXY", "localhost,127.0.0.1")
        env.setdefault("no_proxy", "localhost,127.0.0.1")
        command = evaluator_command(static_target)
        if sys.platform.startswith("linux"):
            system_chromium = shutil.which("chromium") or shutil.which("chromium-browser")
            xvfb_run = shutil.which("xvfb-run")
            if system_chromium:
                env.setdefault("PLAYWRIGHT_EXECUTABLE_PATH", system_chromium)
            if system_chromium and xvfb_run and os.environ.get("WEB_UT_USE_XVFB", "1") != "0":
                env.setdefault("PLAYWRIGHT_HEADLESS", "0")
                if not env.get("DISPLAY"):
                    command = [xvfb_run, "-a", "-s", "-screen 0 1280x800x24 -ac", *command]
        stage = "evaluator_run"
        evaluator_started = time.monotonic()
        completed = subprocess.run(
            command,
            cwd=base_dir,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            env=env,
            timeout=timeout_seconds,
        )
        evaluator_return_code = int(completed.returncode)
        report = parse_json_output(completed.stdout, completed.stderr, completed.returncode)
        report = _merge_missing_items(report, source_items)
        evaluator_elapsed = time.monotonic() - evaluator_started
    except ProductBuildError as exc:
        # A compile/bundle failure belongs to the submitted product. Preserve
        # independently decidable source-stack rubrics instead of cascading the
        # build failure into unrelated R38-R41 zeros. R42 remains a real zero.
        message = str(exc)
        try:
            source_items = _source_stack_items(target_dir, build_ok=False)
        except Exception as probe_exc:
            source_items = []
            message += f" | source stack probe failed: {probe_exc!r}"
        report = {
            "layer1_pass": False,
            "layer1_detail": {
                "failure_stage": "build",
                "build_error": message,
                "fatal_console_errors": [],
            },
            "items": source_items,
        }
    except subprocess.TimeoutExpired as exc:
        message = f"{stage} timeout after {timeout_seconds}s: {exc}"
        report = {"error": message, "layer1_pass": False, "layer1_detail": {"failure_stage": stage, "fatal_console_errors": [message]}, "items": []}
        if "source_items" in locals():
            report = _merge_missing_items(report, source_items)
    except Exception as exc:
        message = f"{stage} failed: {exc!r}"
        report = {"error": message, "layer1_pass": False, "layer1_detail": {"failure_stage": stage, "fatal_console_errors": [message]}, "items": []}
        if "source_items" in locals():
            report = _merge_missing_items(report, source_items)
        elif stage == "build":
            # Even when dependency resolution/build infrastructure fails before
            # a fresh dist exists, R38-R41 remain statically inspectable. R42 is
            # recorded as not successful for this run, with the exact failure
            # retained in layer1_detail instead of cascading zeros across R38-R41.
            try:
                report = _merge_missing_items(report, _source_stack_items(target_dir if target_dir.is_dir() else target_dir.parent, build_ok=False))
            except Exception:
                pass
    return repo_name, report, bool(build_ok), int(evaluator_return_code), build_elapsed, evaluator_elapsed, time.monotonic() - sample_started


def atomic_write(path: Path, value: dict[str, Any]) -> None:
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=path.parent, delete=False) as temp:
        json.dump(value, temp, ensure_ascii=False, indent=2)
        temp.write("\n")
        temp_name = temp.name
    os.replace(temp_name, path)


def main() -> int:
    base_dir = Path(__file__).resolve().parent
    os.chdir(base_dir)

    mapping_path = base_dir / "mapping.json"
    repo_root = base_dir / "repo_files"
    output_path = base_dir / "results.json"
    if not mapping_path.is_file() or not repo_root.is_dir() or not (base_dir / "web_ut.py").is_file() or not (base_dir / "web_ut_harness.py").is_file():
        print("ERROR: required delivery files are missing.", file=sys.stderr)
        return 1

    mapping = load_json_object(mapping_path)
    schema_errors = validate_mapping_schema(mapping)
    if schema_errors:
        print("ERROR: invalid mapping.json: " + " | ".join(schema_errors), file=sys.stderr)
        return 1
    rubrics = mapping["rubrics"]

    repo_names = discover_repositories(repo_root)
    if not repo_names:
        print("ERROR: repo_files contains no runnable game targets (project directories or HTML files).", file=sys.stderr)
        return 1
    print(f"Discovered {len(repo_names)} game targets: {', '.join(repo_names)}", flush=True)

    image_dir = base_dir / "ut_images"
    image_dir.mkdir(exist_ok=True)
    for old_image in image_dir.iterdir():
        if old_image.is_file() and old_image.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}:
            old_image.unlink()

    samples: dict[str, Any] = {}
    had_infrastructure_failure = False
    timeout_seconds = int(os.environ.get("WEB_UT_SAMPLE_TIMEOUT", "900"))
    dependency_cache = default_dependency_cache_root()
    dependency_cache.mkdir(parents=True, exist_ok=True)
    print(f"Dependency cache: {dependency_cache}", flush=True)

    # Also clean on interpreter exit so build/test exceptions or Ctrl+C do not
    # leave cache junctions behind for a later archiver to dereference.
    def _cleanup_links_on_exit() -> None:
        try:
            cleanup_shared_dependency_links(repo_root, dependency_cache)
        except Exception:
            pass

    atexit.register(_cleanup_links_on_exit)

    # Warm each unique dependency set once before sample evaluation. With the
    # current fixtures this turns five npm installs into one. Later runs reuse
    # the fingerprinted cache directly while every sample is still rebuilt.
    warmed: set[str] = set()
    for repo_name in repo_names:
        target_dir = repo_root / repo_name
        if target_dir.is_file():
            continue
        package = load_json_object(target_dir / "package.json")
        if not package:
            continue
        fingerprint = _dependency_fingerprint(package)
        if fingerprint in warmed:
            continue
        warmed.add(fingerprint)
        started = time.monotonic()
        print(f"Preparing dependency set {fingerprint} from {repo_name}...", flush=True)
        try:
            ensure_shared_dependencies(target_dir, dependency_cache, timeout_seconds)
            print(f"Dependency set {fingerprint} ready in {time.monotonic()-started:.1f}s", flush=True)
        except Exception as exc:
            # Do not stop discovery here; the per-repository build stage will
            # report the same dependency failure with the affected sample name.
            print(f"Dependency prewarm failed for {fingerprint}: {exc}", file=sys.stderr, flush=True)

    # Evaluate a small number of independent samples concurrently. Two workers
    # is the default sweet spot for Chromium/WebGL: it overlaps build/browser/VLM
    # latency without saturating CPU/GPU or spawning every fixture at once.
    requested_workers = int(os.environ.get("WEB_UT_SAMPLE_WORKERS", "2") or "2")
    worker_count = max(1, min(len(repo_names), requested_workers))
    print(f"Evaluating with {worker_count} sample worker(s).", flush=True)
    raw_samples: dict[str, dict[str, Any]] = {}
    with ThreadPoolExecutor(max_workers=worker_count, thread_name_prefix="web-ut-sample") as pool:
        futures = {
            pool.submit(
                evaluate_repository,
                base_dir=base_dir,
                repo_root=repo_root,
                repo_name=repo_name,
                dependency_cache=dependency_cache,
                timeout_seconds=timeout_seconds,
            ): repo_name
            for repo_name in repo_names
        }
        for future in as_completed(futures):
            repo_name = futures[future]
            try:
                name, report, build_ok, evaluator_return_code, build_elapsed, evaluator_elapsed, total_elapsed = future.result()
            except Exception as exc:
                name = repo_name
                message = f"worker failed: {exc!r}"
                report = {"error": message, "layer1_pass": False, "layer1_detail": {"failure_stage": "worker", "fatal_console_errors": [message]}, "items": []}
                build_ok = False
                evaluator_return_code = 1
                build_elapsed = evaluator_elapsed = 0.0
                total_elapsed = 0.0
            print(f"  {name}: build {build_elapsed:.1f}s, evaluator {evaluator_elapsed:.1f}s, total {total_elapsed:.1f}s", flush=True)
            if is_infrastructure_failure(report) or has_vlm_call_failure(report):
                had_infrastructure_failure = True
            raw_samples[name] = normalize_report(
                name, report, rubrics,
                build_ok=build_ok, evaluator_return_code=evaluator_return_code,
            )

    # Preserve stable discovery order in results.json even though workers finish out of order.
    samples = {name: raw_samples[name] for name in repo_names if name in raw_samples}

    output = {"prompt_id": mapping["prompt_id"], "game_type": mapping["game_type"], "samples": samples}
    atomic_write(output_path, output)

    # Evaluation temporarily links each sample to the shared dependency cache.
    # Remove only those runner-managed links before handing the directory back
    # to the caller so compression tools cannot dereference and duplicate them.
    removed_links = cleanup_shared_dependency_links(repo_root, dependency_cache)
    atexit.unregister(_cleanup_links_on_exit)
    if removed_links:
        print(f"Cleaned shared node_modules links from {len(removed_links)} sample(s).", flush=True)

    print(f"done -> {output_path}")
    return 2 if had_infrastructure_failure else 0


if __name__ == "__main__":
    raise SystemExit(main())
