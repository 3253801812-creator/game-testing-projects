#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""通用 Web 验收 Harness。

职责：解析/构建前端项目、启动本地静态服务器、运行 Chromium、收集网络与
WebGL/RAF 浏览器侧观测、提供确定性结果与 VLM 截图能力，并输出单个 JSON 报告。

依赖：
    pip install playwright
    playwright install chromium

VLM 网关配置支持通过环境变量覆盖。
"""

from __future__ import annotations

import argparse
import asyncio
import base64
import contextlib
import functools
import http.server
import io
import math
import re
import json
import os
import socketserver
import shutil
import subprocess
import sys
import threading
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any
from urllib.parse import urlparse
from urllib import error as urllib_error
from urllib import request as urllib_request

from playwright.async_api import async_playwright

VIEWPORT = {"width": 1280, "height": 800}
BUILD_OUTPUT_DIRS = ("dist", "build", "out")
BUILD_TIMEOUT = 600
NAV_TIMEOUT_MS = int(os.getenv("NAV_TIMEOUT_MS", "15000"))
_ut_image_dir_raw = os.getenv("UT_IMAGE_DIR", "ut_images").strip() or "ut_images"
_ut_image_dir_path = Path(_ut_image_dir_raw)
UT_IMAGE_DIR = "ut_images" if _ut_image_dir_path.is_absolute() or ".." in _ut_image_dir_path.parts else _ut_image_dir_path.as_posix()
# VLM gateway configuration.
ARK_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3"
ARK_MODEL = os.getenv("ARK_VLM_MODEL", "doubao-seed-2-0-lite-260428")
ARK_API_KEY = os.getenv("ARK_API_KEY", "")
VLM_TIMEOUT_S = float(os.getenv("VLM_TIMEOUT_S", "120"))
VLM_RETRIES = max(1, min(3, int(os.getenv("VLM_RETRIES", "2"))))
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))

# Internal evaluator aliases.
VLM_BASE_URL = ARK_BASE_URL
VLM_MODEL = ARK_MODEL
VLM_API_KEY = ARK_API_KEY.strip()
HARNESS_DIR = Path(__file__).resolve().parent


def _scrub_local_paths(text: str, *paths: Path) -> str:
    value = str(text)
    candidates = [HARNESS_DIR, Path.home(), *paths]
    for path in candidates:
        raw = str(path)
        if raw and raw not in {"/", "."}:
            value = value.replace(raw, "<project>")
    return value


@dataclass
class BuildInfo:
    attempted: bool = False
    succeeded: bool = False
    command: str = ""
    output_dir: str = ""
    detail: str = ""


@dataclass
class ItemResult:
    id: int
    kind: str
    score: int
    reason: str
    image: str | None = None


@dataclass
class SampleReport:
    layer1_pass: bool = False
    layer1_detail: dict[str, Any] = field(default_factory=dict)
    items: list[dict[str, Any]] = field(default_factory=list)
    func_score: dict[str, int] = field(default_factory=dict)
    vlm_score: dict[str, int] = field(default_factory=dict)


def _find_index_dir(root: Path) -> Path | None:
    for candidate in (root, *(root / name for name in BUILD_OUTPUT_DIRS)):
        if (candidate / "index.html").exists():
            return candidate
    return None


def _package_manager(repo: Path) -> str:
    if (repo / "pnpm-lock.yaml").exists():
        return "pnpm"
    if (repo / "yarn.lock").exists():
        return "yarn"
    return "npm"


def _pm_command(argv: list[str]) -> list[str]:
    """Resolve npm/pnpm/yarn portably, including Windows .cmd launchers.

    Python CreateProcess does not reliably execute npm.cmd when invoked as bare ``npm``.
    Resolve the launcher explicitly and route .cmd/.bat files through COMSPEC.
    """
    if not argv:
        return argv
    name = argv[0]
    candidates = [name]
    if os.name == "nt" and not name.lower().endswith((".cmd", ".bat", ".exe")):
        candidates = [name + ".cmd", name + ".exe", name]
    exe = next((shutil.which(c) for c in candidates if shutil.which(c)), None)
    if not exe:
        return argv
    resolved = [exe, *argv[1:]]
    if os.name == "nt" and Path(exe).suffix.lower() in {".cmd", ".bat"}:
        comspec = os.environ.get("COMSPEC") or shutil.which("cmd.exe") or "cmd.exe"
        return [comspec, "/d", "/s", "/c", subprocess.list2cmdline(resolved)]
    return resolved


def build_repo(repo: Path) -> tuple[Path | None, BuildInfo]:
    """Attempt the real production build without hiding unrelated rubric evidence on failure."""
    info = BuildInfo(attempted=True)
    pm = _package_manager(repo)
    if pm == "npm":
        install = ["npm", "install", "--prefer-offline", "--no-audit", "--no-fund"]
    elif pm == "pnpm":
        install = ["pnpm", "install", "--prefer-offline"]
    else:
        install = ["yarn", "install", "--prefer-offline"]
    build = [pm, "run", "build"]
    info.command = " ".join(build)
    install_cmd = _pm_command(install)
    build_cmd = _pm_command(build)
    env = dict(os.environ)
    logs: list[str] = []
    try:
        # Do not trust the mere presence of node_modules. Archives are often extracted
        # over an existing path, leaving a partial/stale dependency tree behind.  The
        # previous harness skipped installation in that case and then silently fell
        # back to an old standalone.html.  Require the package-manager build tool to
        # actually exist before reusing the dependency cache.
        # Never let an archive extracted over an old directory inherit stale build output.
        # This is especially important for calibration bundles that are repeatedly unpacked to
        # the same prompt-id path: zip extraction does not delete files absent from the new zip.
        for stale_name in BUILD_OUTPUT_DIRS:
            stale_out = repo / stale_name
            if stale_out.is_dir():
                shutil.rmtree(stale_out, ignore_errors=True)
        for stale_info in repo.glob("*.tsbuildinfo"):
            try:
                stale_info.unlink()
            except OSError:
                pass

        node_modules = repo / "node_modules"
        required_bins: list[Path] = [node_modules / ".bin" / "vite", node_modules / ".bin" / "vite.cmd"]
        dependency_cache_usable = (
            node_modules.is_dir()
            and any(path.exists() for path in required_bins)
            and (node_modules / "vite" / "package.json").is_file()
        )
        if not dependency_cache_usable:
            # A half-populated node_modules is worse than no cache: npm can otherwise reuse
            # binaries/native packages from a previous extraction path.  Remove it completely
            # before installing the dependencies declared by this sample.
            if node_modules.exists():
                shutil.rmtree(node_modules, ignore_errors=True)
            if pm == "npm" and (repo / "package-lock.json").is_file():
                install_cmd = _pm_command(["npm", "ci", "--prefer-offline", "--no-audit", "--no-fund"])
            cp = subprocess.run(
                install_cmd,
                cwd=str(repo),
                env=env,
                check=True,
                timeout=BUILD_TIMEOUT,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                encoding="utf-8",
                errors="replace",
            )
            logs.append(cp.stdout[-6000:])
        cp = subprocess.run(
            build_cmd,
            cwd=str(repo),
            env=env,
            check=True,
            timeout=BUILD_TIMEOUT,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
        logs.append(cp.stdout[-6000:])
        out = _find_index_dir(repo)
        if out is None or out == repo:
            for name in BUILD_OUTPUT_DIRS:
                if (repo / name / "index.html").exists():
                    out = repo / name
                    break
        if out is None or not (out / "index.html").exists() or out == repo:
            raise RuntimeError("生产构建完成后未找到独立构建目录中的 index.html")
        info.succeeded = True
        info.output_dir = str(out.relative_to(repo)) if out.is_relative_to(repo) else out.name
        info.detail = _scrub_local_paths("\n".join(logs)[-8000:], repo)
        return out, info
    except Exception as exc:
        info.succeeded = False
        info.detail = _scrub_local_paths(("\n".join(logs) + f"\n{type(exc).__name__}: {exc}")[-8000:], repo)
        return None, info


def resolve_target(target: str) -> tuple[Path, str, Path, BuildInfo]:
    p = Path(target).expanduser().resolve()
    if not p.exists():
        raise FileNotFoundError(str(p))
    if p.is_file():
        if p.suffix.lower() not in {".html", ".htm"}:
            raise ValueError("target file must be HTML")
        return p.parent, p.name, p.parent, BuildInfo(False, False, detail="static HTML target")
    if (p / "package.json").exists():
        out, info = build_repo(p)
        if out is not None:
            return out, "index.html", p, info
        # A failed build is evidence for the build rubric, but it must not suppress every unrelated
        # runtime rubric.  Prefer a self-contained direct-play entry when the product provides one.
        for name in ("standalone.html", "play.html", "index.html"):
            candidate = p / name
            if candidate.is_file():
                info.output_dir = name
                info.detail = (info.detail + f"\n构建失败后继续使用 {name} 采集其余独立验收证据。")[-8000:]
                return p, name, p, info
        raise RuntimeError(info.detail or "项目构建失败且没有可用的本地 HTML 入口")
    idx = _find_index_dir(p)
    if idx is None:
        raise RuntimeError("target has neither package.json nor a usable index.html")
    return idx, "index.html", p, BuildInfo(False, False, detail="prebuilt static target")


@contextlib.contextmanager
def serve_directory(root: Path, port: int = 0):
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(root))

    class QuietServer(socketserver.ThreadingTCPServer):
        allow_reuse_address = True

    httpd = QuietServer(("127.0.0.1", port), handler)
    real_port = httpd.server_address[1]
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    try:
        yield f"http://127.0.0.1:{real_port}"
    finally:
        httpd.shutdown()
        httpd.server_close()


INIT_OBSERVER = r"""
(() => {
  const observed = window.__utObserved = {
    webglContextCount: 0,
    webgl2ContextCount: 0,
    rafRequested: 0,
    rafCallbacks: 0,
    listenerAdds: {},
    canvasContexts: []
  };

  const originalGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function(type, ...args) {
    const ctx = originalGetContext.call(this, type, ...args);
    if (ctx && (type === 'webgl' || type === 'experimental-webgl')) {
      observed.webglContextCount += 1;
      observed.canvasContexts.push('webgl');
    }
    if (ctx && type === 'webgl2') {
      observed.webgl2ContextCount += 1;
      observed.canvasContexts.push('webgl2');
    }
    return ctx;
  };

  const originalRAF = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function(cb) {
    observed.rafRequested += 1;
    return originalRAF((ts) => {
      observed.rafCallbacks += 1;
      return cb(ts);
    });
  };

  const originalAdd = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(type, listener, options) {
    observed.listenerAdds[type] = (observed.listenerAdds[type] || 0) + 1;
    return originalAdd.call(this, type, listener, options);
  };
})();
"""


INPUT_ISOLATION_INIT = r"""
(() => {
  // Acceptance-test input is intentionally isolated from the host OS pointer. Games still observe
  // document.pointerLockElement and pointerlockchange exactly as their input state machine expects,
  // but Chromium never acquires the user's physical pointer.
  let virtualLockedElement = null;

  const installPointerLockGetter = (owner) => {
    try {
      Object.defineProperty(owner, 'pointerLockElement', {
        configurable: true,
        enumerable: true,
        get() { return virtualLockedElement; }
      });
      return true;
    } catch (_) { return false; }
  };
  if (!installPointerLockGetter(Document.prototype)) installPointerLockGetter(document);

  try {
    Element.prototype.requestPointerLock = function() {
      virtualLockedElement = this;
      queueMicrotask(() => document.dispatchEvent(new Event('pointerlockchange')));
      return Promise.resolve();
    };
  } catch (_) {}

  const virtualExit = function() {
    const changed = virtualLockedElement !== null;
    virtualLockedElement = null;
    if (changed) queueMicrotask(() => document.dispatchEvent(new Event('pointerlockchange')));
    return Promise.resolve();
  };
  try { Document.prototype.exitPointerLock = virtualExit; } catch (_) {}
  try { document.exitPointerLock = virtualExit; } catch (_) {}

  Object.defineProperty(window, '__utInputIsolation', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: Object.freeze({ mode: 'virtual-pointer', hostCursorTouched: false })
  });
})();
"""


class Ctx:
    def __init__(self, page, target_path: Path, build_info: BuildInfo, network_requests: list[str], vlm_fn, prefix: str, cdp=None):
        self.page = page
        self.target_path = target_path
        self.build_info = build_info
        self.network_requests = network_requests
        self.results: list[ItemResult] = []
        self._vlm_fn = vlm_fn
        self._prefix = prefix
        self.cdp = cdp
        self._mouse_x = float(VIEWPORT["width"]) * 0.5
        self._mouse_y = float(VIEWPORT["height"]) * 0.5
        self._mouse_buttons = 0
        self._shot_index = 0
        self._vlm_unavailable_reason: str | None = None
        progress_raw = os.getenv("UT_PROGRESS_FILE", "").strip()
        self._progress_file = Path(progress_raw) if progress_raw else None

    def _record_result(self, item: ItemResult) -> None:
        self.results.append(item)
        # Optional runner-owned checkpoint.  This contains only results already
        # produced by the evaluator; it never invents scores.  If the outer
        # runner is interrupted later, completed rubric evidence can still be
        # collected instead of collapsing the whole sample to zeros.
        if self._progress_file is None:
            return
        try:
            payload = [asdict(result) for result in self.results]
            tmp = self._progress_file.with_suffix(self._progress_file.suffix + ".tmp")
            tmp.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
            os.replace(tmp, self._progress_file)
        except OSError:
            pass

    def check(self, rid: int, passed: bool, reason: str):
        passed_bool = bool(passed)
        detail = _scrub_local_paths(str(reason), self.target_path).strip().rstrip("。")
        prefix = "通过" if passed_bool else "未通过"
        natural = f"{prefix}：{detail}。" if detail else f"{prefix}：该验收条件{'已满足' if passed_bool else '未满足'}。"
        self._record_result(ItemResult(rid, "det", int(passed_bool), natural))

    async def vlm(self, rid: int, question: str, locator=None):
        """Capture real visual evidence and score it only through the configured VLM.

        Infrastructure failure is recorded as score 0 with an explicit reason because this delivery's
        public score contract is binary. No state hook, source-text heuristic, fixture name, or cached
        prior result is allowed to substitute for the visual judgment.
        """
        self._shot_index += 1
        try:
            png = await (locator.screenshot(type="png") if locator is not None else self.page.screenshot(type="png"))
        except Exception as primary_exc:
            try:
                png = await self.page.screenshot(type="png")
            except Exception as page_exc:
                detail = _scrub_local_paths(
                    f"{type(primary_exc).__name__}: {primary_exc}; page fallback: {type(page_exc).__name__}: {page_exc}",
                    self.target_path,
                )
                self._record_result(ItemResult(rid, "vlm", VLM_FAIL_SCORE, f"视觉检查未完成：真实截图采集失败；{detail}"))
                return

        rel = f"{UT_IMAGE_DIR}/{self._prefix}_r{rid}_{self._shot_index}.png"
        image_path = HARNESS_DIR / rel
        image_path.parent.mkdir(parents=True, exist_ok=True)
        image_path.write_bytes(png)

        if self._vlm_unavailable_reason:
            self._record_result(ItemResult(
                rid, "vlm", VLM_FAIL_SCORE,
                f"视觉检查未完成：视觉服务在本样本中已确认不可用；{self._vlm_unavailable_reason}", rel
            ))
            return

        ok, raw_reason = await self._vlm_fn(question, base64.b64encode(png).decode("ascii"))
        if ok is None:
            detail = str(raw_reason).strip() or "视觉模型调用失败。"
            self._vlm_unavailable_reason = detail
            self._record_result(ItemResult(
                rid, "vlm", VLM_FAIL_SCORE,
                f"视觉检查未完成：未取得真实 VLM 结论；{detail}", rel
            ))
            return

        score = int(bool(ok))
        lines = [line.strip() for line in str(raw_reason).splitlines() if line.strip()]
        if lines and lines[0].lower().lstrip("*#-> ").startswith(("yes", "no")):
            lines = lines[1:]
        detail = " ".join(lines) or "视觉模型已完成当前截图判断。"
        reason = f"{'通过' if ok else '未通过'}：视觉检查结论为{'符合' if ok else '不符合'}；{detail}"
        self._record_result(ItemResult(rid, "vlm", score, reason, rel))

    async def seed_pointer(self):
        """Seed Chromium's internal pointer position before pointer lock; never touches the host cursor."""
        if self.cdp is None:
            return
        await self.cdp.send("Input.dispatchMouseEvent", {
            "type": "mouseMoved", "x": self._mouse_x, "y": self._mouse_y,
            "buttons": 0, "pointerType": "mouse",
        })

    async def mouse_move(self, dx: float, dy: float):
        """Send a trusted Chromium input event through CDP without moving the OS cursor."""
        if self.cdp is None:
            raise RuntimeError("CDP input session unavailable")
        self._mouse_x = max(2.0, min(float(VIEWPORT["width"] - 2), self._mouse_x + float(dx)))
        self._mouse_y = max(2.0, min(float(VIEWPORT["height"] - 2), self._mouse_y + float(dy)))
        await self.cdp.send("Input.dispatchMouseEvent", {
            "type": "mouseMoved", "x": self._mouse_x, "y": self._mouse_y,
            "buttons": self._mouse_buttons, "pointerType": "mouse",
        })

    async def mouse_button(self, event_type: str, button: int = 0):
        if self.cdp is None:
            raise RuntimeError("CDP input session unavailable")
        if button != 0:
            raise ValueError("Only primary mouse button is used by this evaluator")
        pressed = event_type == "mousedown"
        if event_type not in {"mousedown", "mouseup"}:
            raise ValueError(f"unsupported mouse event: {event_type}")
        self._mouse_buttons = 1 if pressed else 0
        await self.cdp.send("Input.dispatchMouseEvent", {
            "type": "mousePressed" if pressed else "mouseReleased",
            "x": self._mouse_x, "y": self._mouse_y,
            "button": "left", "buttons": self._mouse_buttons, "clickCount": 1,
            "pointerType": "mouse",
        })

    async def get_state(self, hook: str):
        return await self.page.evaluate(
            """(name) => {
                const obj = window[name];
                if (!obj || typeof obj.getState !== 'function') return null;
                try { return obj.getState(); } catch (e) { return {__error: String(e)}; }
            }""",
            hook,
        )

    async def observed(self):
        return await self.page.evaluate("() => window.__utObserved || null")

    def same_origin_requests(self, base_url: str) -> tuple[list[str], list[str]]:
        origin = urlparse(base_url).netloc
        local, remote = [], []
        for url in self.network_requests:
            parsed = urlparse(url)
            if parsed.scheme in {"data", "blob", "about"} or not parsed.scheme:
                local.append(url)
            elif parsed.netloc == origin:
                local.append(url)
            else:
                remote.append(url)
        return local, remote


def _extract_response_text(payload: dict[str, Any]) -> str:
    direct = payload.get("output_text")
    if isinstance(direct, str) and direct.strip():
        return direct.strip()

    parts: list[str] = []
    output = payload.get("output")
    if isinstance(output, list):
        for item in output:
            if not isinstance(item, dict):
                continue
            content = item.get("content")
            if not isinstance(content, list):
                continue
            for block in content:
                if not isinstance(block, dict):
                    continue
                text = block.get("text")
                if isinstance(text, str) and text.strip():
                    parts.append(text.strip())
                elif isinstance(text, dict):
                    value = text.get("value")
                    if isinstance(value, str) and value.strip():
                        parts.append(value.strip())
    if parts:
        return "\n".join(parts)

    choices = payload.get("choices")
    if isinstance(choices, list) and choices and isinstance(choices[0], dict):
        message = choices[0].get("message")
        if isinstance(message, dict):
            content = message.get("content")
            if isinstance(content, str):
                return content.strip()
    return ""


def _vlm_sync(question: str, image_b64: str):
    if not VLM_API_KEY:
        raise RuntimeError("未配置 VLM_API_KEY/ARK_API_KEY")

    prompt = question.strip() + "\n\n只判断当前截图。第一行严格输出 YES 或 NO，第二行用自然语言简要说明视觉证据。"
    payload = {
        "model": VLM_MODEL,
        "input": [{
            "role": "user",
            "content": [
                {"type": "input_image", "image_url": f"data:image/png;base64,{image_b64}"},
                {"type": "input_text", "text": prompt},
            ],
        }],
    }
    endpoint = VLM_BASE_URL.rstrip("/") + "/responses"
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    req = urllib_request.Request(
        endpoint,
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {VLM_API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    )
    try:
        with urllib_request.urlopen(req, timeout=VLM_TIMEOUT_S) as resp:
            raw = resp.read()
    except urllib_error.HTTPError as exc:
        detail = exc.read(512).decode("utf-8", errors="replace")
        raise RuntimeError(f"VLM HTTP {exc.code}: {detail}") from exc
    except urllib_error.URLError as exc:
        raise RuntimeError(f"VLM network error: {exc.reason}") from exc

    try:
        response_payload = json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise RuntimeError("VLM 返回了无法解析的 JSON") from exc
    if not isinstance(response_payload, dict):
        raise RuntimeError("VLM 返回 JSON 顶层不是对象")

    text = _extract_response_text(response_payload)
    head = text.lower().lstrip("*#-> \t").split(maxsplit=1)[0] if text else ""
    if head.startswith("yes") or head.startswith("是"):
        return True, text
    if head.startswith("no") or head.startswith("否"):
        return False, text
    raise RuntimeError(f"VLM 未按要求返回 YES/NO：{text[:160]!r}")


async def _default_vlm(question: str, image_b64: str):
    if not VLM_API_KEY:
        return None, "未配置 VLM_API_KEY/ARK_API_KEY；未使用状态或源码启发式替代视觉判断"
    failures: list[str] = []
    for attempt in range(1, VLM_RETRIES + 1):
        try:
            return await asyncio.wait_for(asyncio.to_thread(_vlm_sync, question, image_b64), timeout=VLM_TIMEOUT_S)
        except asyncio.TimeoutError:
            failures.append(f"第{attempt}次超时（>{VLM_TIMEOUT_S:g}s）")
        except Exception as exc:
            failures.append(f"第{attempt}次失败：{type(exc).__name__}: {exc}")
        if attempt < VLM_RETRIES:
            await asyncio.sleep(min(0.6 * attempt, 1.2))
    return None, f"VLM 已重试 {VLM_RETRIES} 次仍未得到视觉结论：" + "；".join(failures)


def _rubric_index(module):
    all_r = list(getattr(module, "RUBRIC", []) or [])
    id2text = {int(r["id"]): str(r["text"]) for r in all_r}
    kinds = {int(r["id"]): str(r["kind"]) for r in all_r}
    return all_r, id2text, kinds


def _fatal_console_messages(messages: list[str]) -> list[str]:
    """Return only errors that make the page materially non-loadable.

    SwiftShader can reject Three.js MeshDepthMaterial shadow variants while the main render pass
    continues correctly; that optional shadow-pass diagnostic is not a layer-1 load failure.
    """
    fatal: list[str] = []
    for raw in messages:
        text = str(raw)
        low = text.lower()
        if "favicon" in low:
            continue
        if "three.webglprogram: shader error" in low and "material type: meshdepthmaterial" in low and not low.startswith("pageerror:"):
            continue
        fatal.append(text)
    return fatal


async def run_sample(module, target: str, vlm_fn=_default_vlm) -> SampleReport:
    report = SampleReport()
    rubrics, id2text, kinds = _rubric_index(module)
    report.func_score = {r["text"]: 0 for r in rubrics if r["kind"] != "vlm"}
    report.vlm_score = {r["text"]: 0 for r in rubrics if r["kind"] == "vlm"}

    try:
        static_root, index_name, project_root, build_info = await asyncio.to_thread(resolve_target, target)
    except Exception as exc:
        detail = _scrub_local_paths(f"{type(exc).__name__}: {exc}")
        report.layer1_pass = False
        report.layer1_detail = {"resolve_or_build_error": detail}
        # A preflight/build failure prevents browser checks, but the report must still preserve the
        # complete Rubric chain so downstream audit never sees a deceptively empty item list.
        report.items = []
        for r in rubrics:
            rid = int(r["id"])
            kind = "vlm" if r["kind"] == "vlm" else "det"
            score = VLM_FAIL_SCORE if r["kind"] == "vlm" else 0
            reason = (f"视觉检查未执行：项目无法进入该项所需的真实运行环境；{detail}" if r["kind"] == "vlm" else f"未通过：项目无法进入该项所需的真实运行环境；{detail}")
            report.items.append({"id": rid, "kind": kind, "score": score, "reason": reason})
            if r["kind"] == "vlm":
                report.vlm_score[r["text"]] = score
            else:
                report.func_score[r["text"]] = 0
        return report

    console_errors: list[str] = []
    requests: list[str] = []
    prefix = "".join(c if c.isalnum() or c in "-_." else "_" for c in project_root.name) or "target"

    with serve_directory(static_root) as base_url:
        async with async_playwright() as p:
            launch_args = ["--use-gl=swiftshader", "--enable-webgl", "--no-sandbox", "--allow-file-access-from-files"]
            try:
                browser = await p.chromium.launch(headless=True, args=launch_args)
            except Exception as launch_exc:
                system_chromium = os.getenv("CHROMIUM_EXECUTABLE") or shutil.which("chromium") or shutil.which("chromium-browser") or shutil.which("google-chrome")
                if not system_chromium:
                    raise launch_exc
                browser = await p.chromium.launch(executable_path=system_chromium, headless=True, args=launch_args)
            page = await browser.new_page(viewport=VIEWPORT)
            await page.add_init_script(INPUT_ISOLATION_INIT)
            await page.add_init_script(INIT_OBSERVER)
            page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
            page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))
            page.on("request", lambda req: requests.append(req.url))
            try:
                target_url = f"{base_url}/{index_name}"
                try:
                    await page.goto(target_url, wait_until="load", timeout=NAV_TIMEOUT_MS)
                except Exception as nav_exc:
                    if "ERR_BLOCKED_BY_ADMINISTRATOR" not in str(nav_exc):
                        raise
                    file_url = (static_root / index_name).resolve().as_uri()
                    try:
                        target_url = file_url
                        await page.goto(target_url, wait_until="load", timeout=NAV_TIMEOUT_MS)
                    except Exception as file_exc:
                        # Managed browsers can block both loopback HTTP and file:// navigation.
                        # For a self-contained standalone entry, set_content loads the exact file
                        # bytes without changing game logic or inventing state.
                        if "ERR_BLOCKED_BY_ADMINISTRATOR" not in str(file_exc) or index_name != "standalone.html":
                            raise
                        html = (static_root / index_name).read_text(encoding="utf-8")
                        await page.close()
                        page = await browser.new_page(viewport=VIEWPORT)
                        page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
                        page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))
                        page.on("request", lambda req: requests.append(req.url))
                        isolation_tag = f"<script>{INPUT_ISOLATION_INIT}</script>"
                        observer_tag = f"<script>{INIT_OBSERVER}</script>"
                        init_tags = isolation_tag + observer_tag
                        if "<head>" in html:
                            html = html.replace("<head>", "<head>" + init_tags, 1)
                        else:
                            html = init_tags + html
                        await page.set_content(html, wait_until="load", timeout=NAV_TIMEOUT_MS)
                        target_url = "about:blank#standalone-content"
                try:
                    await page.wait_for_function(
                        "() => !!document.body && !!document.querySelector('canvas')",
                        timeout=2500,
                    )
                except Exception:
                    pass
                await page.wait_for_timeout(350)
                fatal = _fatal_console_messages(console_errors)
                has_content = await page.evaluate(
                    "() => !!document.body && (document.body.innerText.trim().length > 0 || document.querySelectorAll('canvas,svg,img').length > 0)"
                )
                report.layer1_pass = bool(has_content) and not fatal
                report.layer1_detail = {
                    "fatal_console_errors": fatal,
                    "has_content": bool(has_content),
                    "build": asdict(build_info),
                }
                cdp = await page.context.new_cdp_session(page)
                ctx = Ctx(page, project_root, build_info, requests, vlm_fn, prefix, cdp=cdp)
                await ctx.seed_pointer()
                if has_content:
                    try:
                        await module.run_checks(page, ctx, base_url)
                    except Exception as exc:
                        report.layer1_detail["run_checks_error"] = _scrub_local_paths(f"{type(exc).__name__}: {exc}", project_root)
            finally:
                await browser.close()

    latest: dict[int, ItemResult] = {}
    duplicate_ids: set[int] = set()
    unexpected_ids: set[int] = set()
    valid_ids = {int(r["id"]) for r in rubrics}
    for item in ctx.results:
        if item.id not in valid_ids:
            unexpected_ids.add(item.id)
            continue
        if item.id in latest:
            duplicate_ids.add(item.id)
            continue
        latest[item.id] = item
    if duplicate_ids:
        report.layer1_detail["duplicate_rubric_results"] = sorted(duplicate_ids)
        for rid in duplicate_ids:
            is_vlm = kinds.get(rid) == "vlm"
            latest[rid] = ItemResult(
                rid,
                "vlm" if is_vlm else "det",
                VLM_FAIL_SCORE if is_vlm else 0,
                (f"视觉检查未完成：Rubric {rid} 在一次运行中生成了重复结果。" if is_vlm else f"未通过：Rubric {rid} 在一次运行中生成了重复结果，无法形成唯一可审计结论。"),
            )
    if unexpected_ids:
        report.layer1_detail["unexpected_rubric_results"] = sorted(unexpected_ids)
    for r in rubrics:
        rid = int(r["id"])
        if rid not in latest:
            err = report.layer1_detail.get("run_checks_error") if isinstance(report.layer1_detail, dict) else None
            suffix = f"；测试链异常={err}" if err else ""
            is_vlm = r["kind"] == "vlm"
            latest[rid] = ItemResult(rid, "vlm" if is_vlm else "det", VLM_FAIL_SCORE if is_vlm else 0, (f"视觉检查未完成：该验收项没有形成有效 VLM 结论{suffix}。" if is_vlm else f"未通过：该验收项没有生成有效确定性证据{suffix}。"))

    ordered = [latest[int(r["id"])] for r in rubrics]
    report.items = []
    for item in ordered:
        row = {"id": item.id, "kind": item.kind, "score": item.score, "reason": item.reason}
        if item.kind == "vlm" and item.image:
            row["image"] = item.image
        report.items.append(row)
        text = id2text[item.id]
        if kinds[item.id] == "vlm":
            report.vlm_score[text] = item.score
        else:
            report.func_score[text] = item.score
    return report


def main(module):
    # Windows 控制台默认 GBK，报告里可能携带构建日志中的非 GBK 字符（如 U+FFFD），
    # 直接 print 会触发 UnicodeEncodeError。统一把 stdout 切到 UTF-8 再输出结果。
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    parser = argparse.ArgumentParser()
    parser.add_argument("--target", required=True, help="项目目录、构建目录或 index.html")
    args = parser.parse_args()
    try:
        report = asyncio.run(run_sample(module, args.target))
        print(json.dumps(asdict(report), ensure_ascii=False))
    except Exception as exc:
        print(json.dumps({"error": _scrub_local_paths(f"{type(exc).__name__}: {exc}")}, ensure_ascii=False))
        sys.exit(1)


if __name__ == "__main__":
    raise SystemExit("请通过 web_ut.py 调用 web_ut_harness.main(module)")
