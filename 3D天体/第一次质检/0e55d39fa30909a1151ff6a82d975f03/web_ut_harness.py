"""通用 Web 游戏单元测试 harness。

输入：单个 index.html、已构建目录，或含 package.json 的前端仓库。
输出：stdout 上唯一的 JSON 对象，至少包含 func_score 与 vlm_score。

依赖：
    pip install playwright openai
    playwright install chromium
"""

from __future__ import annotations

import argparse
import asyncio
import base64
import contextlib
import functools
import http.server
import json
import os
import re
import socketserver
import subprocess
import shutil
import sys
import threading
import time
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Any, Callable

try:
    from playwright.async_api import async_playwright
    PLAYWRIGHT_IMPORT_ERROR = ""
except Exception as exc:  # Optional at import time; runtime failure is reported as unverified, never source-scored.
    async_playwright = None
    PLAYWRIGHT_IMPORT_ERROR = repr(exc)

VIEWPORT = {"width": 1280, "height": 800}
BUILD_OUTPUT_DIRS = ("dist", "build", "out", ".output/public")
BUILD_TIMEOUT_S = int(os.getenv("BUILD_TIMEOUT_S", "600"))
PAGE_LOAD_TIMEOUT_MS = int(os.getenv("PAGE_LOAD_TIMEOUT_MS", "45000"))
CHECK_TIMEOUT_S = int(os.getenv("CHECK_TIMEOUT_S", "180"))

ARK_BASE_URL = os.getenv("ARK_BASE_URL", "https://ark.cn-beijing.volces.com/api/v3")
ARK_MODEL = os.getenv("ARK_VLM_MODEL", "ep-20260416114755-vvzqk")
ARK_API_KEY = os.getenv("ARK_API_KEY", "")
VLM_TIMEOUT_S = float(os.getenv("VLM_TIMEOUT_S", "120"))
UT_IMAGE_DIR = os.getenv("UT_IMAGE_DIR", "ut_images")
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))
HEADLESS = os.getenv("HEADLESS", "1").lower() not in {"0", "false", "no"}

# Evaluator-owned observation layer. It is injected before application code and
# records browser-visible lifecycle facts without depending on the product's
# public getState() hooks. Project-specific assertions remain in web_ut.py.
EVALUATOR_OBSERVER_SCRIPT = r"""
(() => {
  if (Object.prototype.hasOwnProperty.call(window, '__utObserver')) return;
  const targetIds = new WeakMap();
  const callbackIds = new WeakMap();
  let nextTargetId = 1;
  let nextCallbackId = 1;
  const listeners = new Map();
  const stats = {addTotal: 0, removeTotal: 0, rafScheduled: 0, rafFired: 0, rafCancelled: 0, rafMaxActive: 0};
  const rafActive = new Set();
  let latestRafCallback = null;
  let benchmarkMode = false;
  let benchmarkQueuedCallback = null;

  const getTargetId = (target) => {
    if (!targetIds.has(target)) targetIds.set(target, nextTargetId++);
    return targetIds.get(target);
  };
  const getCallbackId = (callback) => {
    if (callback == null || (typeof callback !== 'function' && typeof callback !== 'object')) return String(callback);
    if (!callbackIds.has(callback)) callbackIds.set(callback, nextCallbackId++);
    return callbackIds.get(callback);
  };
  const targetLabel = (target) => {
    try {
      if (target === window) return 'window';
      if (target === document) return 'document';
      if (target && target.tagName) {
        const tag = String(target.tagName).toLowerCase();
        const id = target.id ? `#${target.id}` : '';
        const testid = target.getAttribute && target.getAttribute('data-testid');
        return `${tag}${id}${testid ? `[data-testid=${testid}]` : ''}`;
      }
    } catch (_) {}
    return Object.prototype.toString.call(target);
  };
  const captureFlag = (options) => typeof options === 'boolean' ? options : Boolean(options && options.capture);

  const originalAdd = EventTarget.prototype.addEventListener;
  const originalRemove = EventTarget.prototype.removeEventListener;
  EventTarget.prototype.addEventListener = function(type, callback, options) {
    try {
      const key = `${getTargetId(this)}|${String(type)}|${getCallbackId(callback)}|${captureFlag(options) ? 1 : 0}`;
      if (!listeners.has(key)) {
        listeners.set(key, {target: targetLabel(this), type: String(type), capture: captureFlag(options)});
        stats.addTotal += 1;
      }
    } catch (_) {}
    return originalAdd.call(this, type, callback, options);
  };
  EventTarget.prototype.removeEventListener = function(type, callback, options) {
    try {
      const key = `${getTargetId(this)}|${String(type)}|${getCallbackId(callback)}|${captureFlag(options) ? 1 : 0}`;
      if (listeners.delete(key)) stats.removeTotal += 1;
    } catch (_) {}
    return originalRemove.call(this, type, callback, options);
  };

  const originalRaf = window.requestAnimationFrame.bind(window);
  const originalCancelRaf = window.cancelAnimationFrame.bind(window);
  window.requestAnimationFrame = (callback) => {
    latestRafCallback = callback;
    if (benchmarkMode) {
      benchmarkQueuedCallback = callback;
      stats.rafScheduled += 1;
      return -stats.rafScheduled;
    }
    let id = 0;
    id = originalRaf((time) => {
      rafActive.delete(id);
      stats.rafFired += 1;
      latestRafCallback = callback;
      callback(time);
    });
    rafActive.add(id);
    stats.rafScheduled += 1;
    stats.rafMaxActive = Math.max(stats.rafMaxActive, rafActive.size);
    return id;
  };
  window.cancelAnimationFrame = (id) => {
    if (rafActive.delete(id)) stats.rafCancelled += 1;
    return originalCancelRaf(id);
  };

  // Evaluator-owned WebGL resource accounting. Wrap creation/deletion before
  // application code so resource stability is not inferred from product hooks.
  const resourceTypes = {
    buffer: ['createBuffer', 'deleteBuffer'],
    texture: ['createTexture', 'deleteTexture'],
    shader: ['createShader', 'deleteShader'],
    program: ['createProgram', 'deleteProgram'],
    framebuffer: ['createFramebuffer', 'deleteFramebuffer'],
    renderbuffer: ['createRenderbuffer', 'deleteRenderbuffer'],
  };
  const resourceStats = {};
  const resourceObjects = {};
  for (const type of Object.keys(resourceTypes)) {
    resourceStats[type] = {created: 0, deleted: 0};
    resourceObjects[type] = new Set();
  }
  const wrappedMark = Symbol('utWebGLWrapped');
  const wrapGLPrototype = (proto) => {
    if (!proto) return;
    for (const [type, [createName, deleteName]] of Object.entries(resourceTypes)) {
      const originalCreate = proto[createName];
      if (typeof originalCreate === 'function' && !originalCreate[wrappedMark]) {
        const wrappedCreate = function(...args) {
          const value = originalCreate.apply(this, args);
          if (value) {
            resourceStats[type].created += 1;
            resourceObjects[type].add(value);
          }
          return value;
        };
        try { Object.defineProperty(wrappedCreate, wrappedMark, {value: true}); } catch (_) {}
        try { proto[createName] = wrappedCreate; } catch (_) {}
      }
      const originalDelete = proto[deleteName];
      if (typeof originalDelete === 'function' && !originalDelete[wrappedMark]) {
        const wrappedDelete = function(value, ...args) {
          if (value && resourceObjects[type].delete(value)) resourceStats[type].deleted += 1;
          return originalDelete.call(this, value, ...args);
        };
        try { Object.defineProperty(wrappedDelete, wrappedMark, {value: true}); } catch (_) {}
        try { proto[deleteName] = wrappedDelete; } catch (_) {}
      }
    }
  };
  try { wrapGLPrototype(window.WebGLRenderingContext && window.WebGLRenderingContext.prototype); } catch (_) {}
  try { wrapGLPrototype(window.WebGL2RenderingContext && window.WebGL2RenderingContext.prototype); } catch (_) {}

  const snapshot = () => {
    const activeByType = {};
    const activeByTargetType = {};
    for (const entry of listeners.values()) {
      activeByType[entry.type] = (activeByType[entry.type] || 0) + 1;
      const key = `${entry.target}|${entry.type}`;
      activeByTargetType[key] = (activeByTargetType[key] || 0) + 1;
    }
    return {
      listenerActive: listeners.size,
      listenerAddTotal: stats.addTotal,
      listenerRemoveTotal: stats.removeTotal,
      activeByType,
      activeByTargetType,
      rafActive: rafActive.size,
      rafScheduled: stats.rafScheduled,
      rafFired: stats.rafFired,
      rafCancelled: stats.rafCancelled,
      rafMaxActive: stats.rafMaxActive,
      webglResources: Object.fromEntries(Object.keys(resourceTypes).map((type) => [type, {
        created: resourceStats[type].created,
        deleted: resourceStats[type].deleted,
        active: resourceObjects[type].size,
      }])),
    };
  };
  const benchmarkRafFrames = (frameCount = 60, stepMs = 1000 / 60) => {
    const requested = Math.max(1, Math.min(180, Number(frameCount) || 60));
    const step = Math.max(1, Number(stepMs) || (1000 / 60));
    let callback = latestRafCallback;
    if (typeof callback !== 'function') return {ok: false, frames: 0, wallMs: 0, fps: 0, reason: 'no captured RAF callback'};

    // Pause evaluator-observed real RAF callbacks so the benchmark drives one
    // production animation chain rather than creating a second game loop.
    for (const id of Array.from(rafActive)) {
      try { originalCancelRaf(id); } catch (_) {}
      rafActive.delete(id);
      stats.rafCancelled += 1;
    }

    benchmarkMode = true;
    benchmarkQueuedCallback = null;
    const wallStart = performance.now();
    let syntheticNow = wallStart;
    let completed = 0;
    try {
      for (let i = 0; i < requested; i++) {
        benchmarkQueuedCallback = null;
        syntheticNow += step;
        callback(syntheticNow);
        // Force completion of commands submitted by the production frame so
        // the benchmark measures actual WebGL rendering work rather than only
        // JavaScript command submission.
        try {
          const canvas = document.querySelector('[data-testid=\"space-canvas\"]');
          const gl = canvas && (canvas.getContext('webgl2') || canvas.getContext('webgl'));
          if (gl && typeof gl.finish === 'function') gl.finish();
        } catch (_) {}
        completed += 1;
        if (typeof benchmarkQueuedCallback !== 'function') break;
        callback = benchmarkQueuedCallback;
        latestRafCallback = callback;
      }
    } finally {
      benchmarkMode = false;
      benchmarkQueuedCallback = null;
      if (typeof callback === 'function') window.requestAnimationFrame(callback);
    }
    const wallMs = Math.max(0.001, performance.now() - wallStart);
    return {
      ok: completed === requested,
      frames: completed,
      requestedFrames: requested,
      syntheticStepMs: step,
      wallMs,
      fps: completed * 1000 / wallMs,
      averageFrameCostMs: wallMs / Math.max(1, completed),
    };
  };
  Object.defineProperty(window, '__utObserver', {value: Object.freeze({snapshot, benchmarkRafFrames}), configurable: false, writable: false});
})();
"""


class BuildInfrastructureUnavailable(RuntimeError):
    """Dependency/tool infrastructure prevented the production build from being attempted faithfully."""


class BrowserInfrastructureUnavailable(RuntimeError):
    """The browser host cannot provide a prerequisite required by the evaluated app."""


def _dependency_infrastructure_failure(output: str) -> bool:
    low = (output or "").lower()
    markers = (
        "e404", "404 not found", "eai_again", "enotfound", "getaddrinfo",
        "network is unreachable", "connection refused", "connection reset",
        "econnrefused", "etimedout", "socket hang up",
        "certificate", "unable to verify the first certificate",
    )
    return any(marker in low for marker in markers)

def _compact_build_error(command: list[str], output: str) -> str:
    text = output or ""
    safe_command = [Path(command[0]).name, *command[1:]] if command else []
    low = text.lower()
    if "e404" in low or "404 not found" in low:
        return f"command failed ({' '.join(safe_command)}): dependency unavailable in configured registry (E404)"
    if "eai_again" in low or "enotfound" in low or "getaddrinfo" in low:
        return f"command failed ({' '.join(safe_command)}): dependency network unavailable"
    text = re.sub(r"https?://[^\s]+", "<external-url>", text)
    text = re.sub(r"(?:/home|/mnt|/tmp|/Users)/[^\s:]+", "<local-path>", text)
    return f"command failed ({' '.join(safe_command)}):\n{text[-5000:]}"


def _compact_runtime_error(value: Any) -> str:
    """Keep runtime diagnostics auditable without leaking ephemeral/local paths."""
    text = repr(value) if isinstance(value, BaseException) else str(value)
    text = re.sub(r"https?://(?:127\.0\.0\.1|localhost):\d+(?:/[^\s'\"]*)?", "<local-test-url>", text, flags=re.I)
    text = re.sub(r"file:///(?:[A-Za-z]:/|/)?[^\s'\"]+", "<local-file-url>", text, flags=re.I)
    text = re.sub(r"(?:[A-Za-z]:\\Users\\[^\s:'\"]+|/(?:home|mnt|tmp|Users)/[^\s:'\"]+)", "<local-path>", text)
    return text[-5000:]


# -----------------------------------------------------------------------------
# Target resolution / build / local static server
# -----------------------------------------------------------------------------
def _find_index_dir(root: Path) -> Path | None:
    if (root / "index.html").is_file():
        return root
    for relative in BUILD_OUTPUT_DIRS:
        candidate = root / relative
        if (candidate / "index.html").is_file():
            return candidate
    return None

def _find_build_output(root: Path) -> Path | None:
    for relative in BUILD_OUTPUT_DIRS:
        candidate = root / relative
        if (candidate / "index.html").is_file():
            return candidate
    return None


def _package_manager(repo: Path) -> tuple[str, list[str]]:
    if (repo / "pnpm-lock.yaml").exists():
        return "pnpm", ["pnpm", "install", "--frozen-lockfile"]
    if (repo / "yarn.lock").exists():
        return "yarn", ["yarn", "install", "--frozen-lockfile"]
    if (repo / "package-lock.json").exists():
        return "npm", ["npm", "ci", "--no-audit", "--no-fund"]
    return "npm", ["npm", "install", "--no-audit", "--no-fund"]


def build_repo(repo: Path) -> Path:
    manager, install_cmd = _package_manager(repo)
    manager_path = shutil.which(manager)
    if not manager_path:
        raise BuildInfrastructureUnavailable(f"dependency tool unavailable: {manager}")

    def resolved(command: list[str]) -> list[str]:
        return [manager_path, *command[1:]] if command and command[0] == manager else command

    commands = (
        ("install", resolved(install_cmd)),
        ("build", resolved([manager, "run", "build"])),
    )
    env = dict(os.environ)
    env.setdefault("CI", "1")
    for phase, command in commands:
        try:
            completed = subprocess.run(
                command,
                cwd=str(repo),
                env=env,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                encoding="utf-8",
                errors="replace",
                timeout=BUILD_TIMEOUT_S,
            )
        except FileNotFoundError as exc:
            raise BuildInfrastructureUnavailable(f"dependency tool unavailable: {manager}") from exc
        except subprocess.TimeoutExpired as exc:
            if phase == "install":
                raise BuildInfrastructureUnavailable(f"dependency install timeout: {manager}>{BUILD_TIMEOUT_S}s") from exc
            raise RuntimeError(f"production build timeout: {manager}>{BUILD_TIMEOUT_S}s") from exc
        except OSError as exc:
            raise BuildInfrastructureUnavailable(f"dependency tool unavailable: {manager}: {exc}") from exc
        if completed.returncode != 0:
            compact = _compact_build_error(command, completed.stdout or "")
            if phase == "install" and _dependency_infrastructure_failure(completed.stdout or ""):
                raise BuildInfrastructureUnavailable(compact)
            # A dependency/lockfile/configuration defect or an actual production
            # build failure is a product failure and must not use the play artifact.
            raise RuntimeError(compact)
    output = _find_build_output(repo)
    if output is None:
        raise RuntimeError("build completed but no index.html was found in dist/build/out")
    return output


def resolve_target(target: str, build: bool = False) -> tuple[Path, str]:
    path = Path(target).expanduser().resolve()
    if not path.exists():
        raise FileNotFoundError(str(path))
    if path.is_file():
        if path.suffix.lower() not in {".html", ".htm"}:
            raise ValueError(f"target file is not HTML: {path}")
        return path.parent, path.name

    has_package = (path / "package.json").is_file()
    if has_package:
        # Source Vite index.html files are not independently runnable static
        # artifacts; always exercise the system-required production build.
        return build_repo(path), "index.html"
    static_root = _find_index_dir(path)
    if static_root is not None:
        return static_root, "index.html"
    raise RuntimeError(f"cannot resolve target; no index.html or package.json: {path}")


class _QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, _format: str, *args: Any) -> None:
        return


@contextlib.contextmanager
def serve_directory(root: Path, port: int = 0):
    handler = functools.partial(_QuietHandler, directory=str(root))

    class Server(socketserver.ThreadingTCPServer):
        allow_reuse_address = True
        daemon_threads = True

    server = Server(("127.0.0.1", port), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f"http://127.0.0.1:{server.server_address[1]}"
    finally:
        server.shutdown()
        server.server_close()
        thread.join(timeout=2)


# -----------------------------------------------------------------------------
# Results and task context
# -----------------------------------------------------------------------------
@dataclass
class ItemResult:
    id: int
    kind: str
    score: int
    reason: str = ""
    image: str = ""


@dataclass
class SampleReport:
    layer1_pass: bool = False
    layer1_detail: dict = field(default_factory=dict)
    items: list = field(default_factory=list)
    func_score: dict = field(default_factory=dict)
    vlm_score: dict = field(default_factory=dict)


def _serialize_item(item: ItemResult) -> dict:
    payload = {
        "id": item.id,
        "kind": item.kind,
        "score": item.score,
        "reason": item.reason,
    }
    if item.kind == "vlm":
        payload["image"] = item.image
    return payload


def _scrub_paths(value: Any, replacements: list[tuple[str, str]]) -> Any:
    if isinstance(value, str):
        cleaned = value
        for source, replacement in replacements:
            if source:
                cleaned = cleaned.replace(source, replacement)
        cleaned = re.sub(r"(?:/home|/mnt|/tmp|/Users|/opt)/[^\s:'\"]+", "<local-path>", cleaned)
        return cleaned
    if isinstance(value, list):
        return [_scrub_paths(item, replacements) for item in value]
    if isinstance(value, dict):
        return {key: _scrub_paths(item, replacements) for key, item in value.items()}
    return value


class Ctx:
    def __init__(
        self,
        page,
        vlm_fn: Callable,
        image_dir: str,
        prefix: str,
        console_errors: list[str],
        page_errors: list[str],
        preflight: dict | None = None,
    ):
        self.page = page
        self._vlm_fn = vlm_fn
        self._image_dir = image_dir
        self._prefix = prefix
        self._image_index = 0
        self.console_errors = console_errors
        self.page_errors = page_errors
        self.preflight = dict(preflight or {})
        self.results: list[ItemResult] = []
        self._trace_started = time.monotonic()

    def check(self, rubric_id: int, passed: bool, reason: str = "") -> None:
        self.results.append(ItemResult(rubric_id, "det", 1 if bool(passed) else 0, str(reason)))
        if os.getenv("UT_TRACE", "0").lower() in {"1", "true", "yes"}:
            print(f"[web_ut +{time.monotonic()-self._trace_started:6.2f}s] R{rubric_id}={1 if bool(passed) else 0}", file=sys.stderr, flush=True)

    async def vlm(self, rubric_id: int, question: str) -> None:
        self._image_index += 1
        png = await self.page.screenshot(type="png")
        image_path = ""
        try:
            os.makedirs(self._image_dir, exist_ok=True)
            filename = f"{self._prefix}_r{rubric_id}_{self._image_index}.png"
            image_path = str(Path(self._image_dir) / filename)
            Path(image_path).write_bytes(png)
        except Exception as exc:
            image_path = f"save-failed:{exc!r}"

        verdict, reason = await self._vlm_fn(question, base64.b64encode(png).decode("ascii"))
        score = VLM_FAIL_SCORE if verdict is None else (1 if verdict else 0)
        self.results.append(ItemResult(rubric_id, "vlm", score, reason, image_path))
        if os.getenv("UT_TRACE", "0").lower() in {"1", "true", "yes"}:
            print(f"[web_ut +{time.monotonic()-self._trace_started:6.2f}s] R{rubric_id}={score} (vlm)", file=sys.stderr, flush=True)

    async def get_state(self, hook: str = "__game"):
        return await self.page.evaluate(
            """hook => {
                const value = window[hook];
                if (!value) return null;
                if (typeof value.getState === 'function') return value.getState();
                return value;
            }""",
            hook,
        )


# -----------------------------------------------------------------------------
# VLM adapter. Missing key/API failures are -100, distinct from a visual NO.
# -----------------------------------------------------------------------------
_openai_client = None


def _get_openai_client():
    global _openai_client
    if not ARK_API_KEY:
        raise RuntimeError("ARK_API_KEY is not configured")
    if _openai_client is None:
        from openai import OpenAI

        _openai_client = OpenAI(base_url=ARK_BASE_URL, api_key=ARK_API_KEY)
    return _openai_client


def _vlm_sync(question: str, image_b64: str) -> tuple[bool, str]:
    client = _get_openai_client()
    instruction = (
        question.strip()
        + "\n\n只根据截图判断。第一行严格输出 YES 或 NO，第二行用一句话说明理由。"
    )
    response = client.chat.completions.create(
        model=ARK_MODEL,
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{image_b64}"}},
                    {"type": "text", "text": instruction},
                ],
            }
        ],
    )
    text = (response.choices[0].message.content or "").strip() if response.choices else ""
    token = text.lower().lstrip("*#-> \t").split(maxsplit=1)[0] if text else ""
    passed = token.startswith("yes") or token.startswith("是")
    return passed, text or "empty-vlm-response"


async def default_vlm(question: str, image_b64: str):
    try:
        return await asyncio.wait_for(
            asyncio.to_thread(_vlm_sync, question, image_b64),
            timeout=VLM_TIMEOUT_S,
        )
    except asyncio.TimeoutError:
        return None, f"vlm-fail(timeout>{VLM_TIMEOUT_S}s)"
    except Exception as exc:
        return None, f"vlm-fail:{exc!r}"


# -----------------------------------------------------------------------------
# Browser execution and score aggregation
# -----------------------------------------------------------------------------
def _rubric_index(module) -> tuple[list[str], list[str], dict[int, str]]:
    func_texts: list[str] = []
    vlm_texts: list[str] = []
    id_to_text: dict[int, str] = {}
    seen_ids: set[int] = set()
    seen_texts: set[str] = set()
    for rubric in getattr(module, "RUBRIC", []) or []:
        rubric_id = int(rubric["id"])
        text = str(rubric["text"])
        kind = str(rubric["kind"])
        if rubric_id in seen_ids:
            raise ValueError(f"duplicate rubric id: {rubric_id}")
        if text in seen_texts:
            raise ValueError(f"duplicate rubric text: {text}")
        if kind not in {"dom", "state", "vlm"}:
            raise ValueError(f"invalid rubric kind: {kind}")
        seen_ids.add(rubric_id)
        seen_texts.add(text)
        id_to_text[rubric_id] = text
        (vlm_texts if kind == "vlm" else func_texts).append(text)
    return func_texts, vlm_texts, id_to_text


def _fatal_console_error(message: str) -> bool:
    lowered = message.lower()
    benign_fragments = (
        "favicon",
        "devtools",
        "webgl: context lost",
        "three.webglrenderer",
        "slow network",
    )
    if any(fragment in lowered for fragment in benign_fragments):
        return False
    return any(
        marker in lowered
        for marker in (
            "uncaught",
            "unhandled",
            "failed to resolve module",
            "syntaxerror",
            "referenceerror",
            "typeerror",
        )
    )


def _unverified_item_results(module, reason: str) -> list[ItemResult]:
    """Emit explicit non-passing results when runtime evidence was not produced."""
    results: list[ItemResult] = []
    for rubric in getattr(module, "RUBRIC", []) or []:
        rubric_id = int(rubric["id"])
        kind = "vlm" if str(rubric.get("kind")) == "vlm" else "det"
        score = VLM_FAIL_SCORE if kind == "vlm" else 0
        results.append(ItemResult(rubric_id, kind, score, reason))
    return results


def _normalize_results(module, results: list[ItemResult]) -> tuple[list[ItemResult], list[str]]:
    expected = {int(rubric["id"]): rubric for rubric in getattr(module, "RUBRIC", []) or []}
    buckets: dict[int, list[ItemResult]] = {}
    for item in results:
        buckets.setdefault(int(item.id), []).append(item)
    normalized: list[ItemResult] = []
    errors: list[str] = []
    for rubric_id in sorted(expected):
        rubric = expected[rubric_id]
        matches = buckets.get(rubric_id, [])
        expected_kind = "vlm" if str(rubric.get("kind")) == "vlm" else "det"
        if len(matches) == 1:
            item = matches[0]
            if item.kind not in {"det", "vlm"}:
                item.kind = expected_kind
            normalized.append(item)
        elif not matches:
            errors.append(f"missing rubric result: {rubric_id}")
            normalized.append(ItemResult(rubric_id, expected_kind, VLM_FAIL_SCORE if expected_kind == "vlm" else 0, "missing rubric result"))
        else:
            errors.append(f"duplicate rubric result: {rubric_id} x{len(matches)}")
            normalized.append(ItemResult(rubric_id, expected_kind, 0, f"duplicate rubric result x{len(matches)}"))
    unknown = sorted(set(buckets) - set(expected))
    if unknown:
        errors.append(f"unknown rubric ids: {unknown}")
    return normalized, errors


async def run_sample(module, target: str, build: bool = False, vlm_fn=default_vlm, source_only: bool = False) -> SampleReport:
    report = SampleReport()
    try:
        func_texts, vlm_texts, id_to_text = _rubric_index(module)
    except Exception as exc:
        report.layer1_detail = {"rubric_error": repr(exc)}
        return report

    report.func_score = {text: 0 for text in func_texts}
    report.vlm_score = {text: 0 for text in vlm_texts}
    target_prefix_path = Path(target)
    prefix_raw = (target_prefix_path.parent.name if target_prefix_path.name == "play.html" else target_prefix_path.name) or "target"
    prefix = "".join(char if (char.isalnum() or char in "-_.") else "_" for char in prefix_raw)

    source_audit = None
    audit_root = Path(target).expanduser().resolve()
    if audit_root.is_file():
        audit_root = audit_root.parent
    if hasattr(module, "source_audit"):
        try:
            source_audit = module.source_audit(audit_root)
        except Exception as exc:
            source_audit = {"audit_error": repr(exc), "checks": {}, "evidence": {}, "integrity_flags": [], "hard_fail_ids": []}

    preflight: dict[str, Any] = {"production_build_succeeded": False, "production_build_status": "not_attempted", "runtime_target": "unresolved"}
    if hasattr(module, "stack_preflight"):
        try:
            preflight["stack"] = module.stack_preflight(audit_root)
        except Exception as exc:
            preflight["stack"] = {"ok": False, "error": repr(exc)}

    if source_only:
        report.layer1_pass = False
        report.layer1_detail = {
            "execution_mode": "source_audit_only",
            "runtime_verified": False,
            "score_interpretation": "not_scored_from_source",
            "source_calibration_requested": True,
            "source_integrity": {
                "integrity_flags": (source_audit or {}).get("integrity_flags", []) if isinstance(source_audit, dict) else [],
                "hard_fail_ids": (source_audit or {}).get("hard_fail_ids", []) if isinstance(source_audit, dict) else [],
            },
            "stack_preflight": preflight.get("stack", {}),
            "note": "Source audit is diagnostic evidence only. Browser runtime was not executed, so no Rubric receives a passing score.",
        }
        final_results = _unverified_item_results(
            module,
            "未验证：仅执行源码审计；规范禁止用源码证据替代浏览器运行时验收。",
        )
        normalized, contract_errors = _normalize_results(module, final_results)
        report.items = [_serialize_item(item) for item in normalized]
        if contract_errors:
            report.layer1_detail["result_contract_errors"] = contract_errors
        for item in normalized:
            text = id_to_text.get(item.id, str(item.id))
            if item.kind == "vlm":
                report.vlm_score[text] = item.score
            else:
                report.func_score[text] = item.score
        return report

    try:
        static_root, index_name = resolve_target(target, build=build)
        target_path = Path(target).expanduser().resolve()
        stack_info = preflight.get("stack") if isinstance(preflight.get("stack"), dict) else {}
        if target_path.is_file():
            # A directly supplied HTML file did not execute a production build.
            # If it is the provenance-verified self-contained play artifact, use
            # its exact bytes in-memory so loopback policy cannot affect grading.
            preflight["production_build_succeeded"] = False
            preflight["production_build_status"] = "not_applicable"
            if (
                index_name == "play.html"
                and stack_info.get("playHtmlGeneratedFromCanonicalSources") is True
                and stack_info.get("playHtmlSelfContained") is True
            ):
                preflight["runtime_target"] = "verified_generated_play_artifact"
            else:
                preflight["runtime_target"] = "provided_static_target"
        elif (audit_root / "package.json").is_file():
            preflight["production_build_succeeded"] = True
            preflight["production_build_status"] = "passed"
            preflight["runtime_target"] = "production_build"
        else:
            preflight["production_build_status"] = "not_applicable"
            preflight["runtime_target"] = "provided_static_target"
    except BuildInfrastructureUnavailable as exc:
        # Infrastructure-only fallback: continue with a browser runtime test of
        # the generated play artifact *only* when stack_preflight has verified
        # that it is tied to the current canonical src/ hash and is self-contained.
        stack_info = preflight.get("stack") if isinstance(preflight.get("stack"), dict) else {}
        play_path = audit_root / "play.html"
        play_verified = bool(
            play_path.is_file()
            and stack_info.get("playHtmlGeneratedFromCanonicalSources") is True
            and stack_info.get("playHtmlSelfContained") is True
        )
        if not play_verified:
            error_text = str(exc)
            report.layer1_pass = False
            report.layer1_detail = {
                "execution_mode": "build_environment_unavailable",
                "runtime_verified": False,
                "build_environment_error": error_text,
                "stack_preflight": stack_info,
                "note": "Dependency infrastructure was unavailable and no verified generated play artifact was available; no source score fallback was used.",
            }
            final_results = _unverified_item_results(module, f"未验证：依赖基础设施不可用，且无可验证的生成式 play.html：{error_text}")
            normalized, contract_errors = _normalize_results(module, final_results)
            report.items = [_serialize_item(item) for item in normalized]
            if contract_errors:
                report.layer1_detail["result_contract_errors"] = contract_errors
            for item in normalized:
                text = id_to_text.get(item.id, str(item.id))
                (report.vlm_score if item.kind == "vlm" else report.func_score)[text] = item.score
            return report
        static_root, index_name = audit_root, "play.html"
        preflight["production_build_succeeded"] = False
        preflight["production_build_status"] = "environment_unavailable"
        preflight["runtime_target"] = "verified_generated_play_artifact"
        preflight["build_environment_error"] = str(exc)
    except Exception as exc:
        error_text = str(exc)
        report.layer1_pass = False
        report.layer1_detail = {
            "execution_mode": "build_failed",
            "runtime_verified": False,
            "resolve_or_build_error": error_text,
            "source_integrity": {
                "integrity_flags": (source_audit or {}).get("integrity_flags", []) if isinstance(source_audit, dict) else [],
                "hard_fail_ids": (source_audit or {}).get("hard_fail_ids", []) if isinstance(source_audit, dict) else [],
            },
            "stack_preflight": preflight.get("stack", {}),
            "note": "Production build/target resolution failed. Source audit is retained only as diagnostics and does not replace runtime scores.",
        }
        final_results = _unverified_item_results(
            module,
            f"未通过/未验证：生产构建或目标解析失败：{error_text}",
        )
        normalized, contract_errors = _normalize_results(module, final_results)
        report.items = [_serialize_item(item) for item in normalized]
        if contract_errors:
            report.layer1_detail["result_contract_errors"] = contract_errors
        for item in normalized:
            text = id_to_text.get(item.id, str(item.id))
            if item.kind == "vlm":
                report.vlm_score[text] = item.score
            else:
                report.func_score[text] = item.score
        return report

    console_errors: list[str] = []
    page_errors: list[str] = []
    context = None
    browser = None
    playwright = None
    final_results: list[ItemResult] = []
    try:
        if async_playwright is None:
            raise RuntimeError(f"Playwright unavailable: {PLAYWRIGHT_IMPORT_ERROR or 'module import failed'}")
        with serve_directory(static_root) as base_url:
            # Start/stop Playwright explicitly instead of relying on the async
            # context manager. On software WebGL hosts a deliberately broken
            # fixture can wedge Chromium during teardown; bounded explicit
            # cleanup keeps one negative sample from stalling the whole batch.
            playwright = await async_playwright().start()
            chromium_path = os.getenv("CHROMIUM_EXECUTABLE") or shutil.which("chromium") or shutil.which("chromium-browser") or shutil.which("google-chrome")
            browser = await playwright.chromium.launch(
                headless=HEADLESS,
                executable_path=chromium_path,
                args=(
                    [
                        "--enable-webgl",
                        "--ignore-gpu-blocklist",
                        "--disable-dev-shm-usage",
                        "--no-sandbox",
                    ]
                    + (["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] if os.getenv("FORCE_SWIFTSHADER", "0").lower() in {"1", "true", "yes"} else [])
                ),
            )
            context = await browser.new_context(
                viewport=VIEWPORT,
                device_scale_factor=1,
                reduced_motion="no-preference",
            )
            await context.add_init_script(EVALUATOR_OBSERVER_SCRIPT)
            page = await context.new_page()
            page.set_default_timeout(int(os.getenv("ACTION_TIMEOUT_MS", "5000")))
            page.on(
                "console",
                lambda message: console_errors.append(message.text)
                if message.type == "error"
                else None,
            )
            page.on("pageerror", lambda error: page_errors.append(str(error)))

            # WebGL is a browser-host prerequisite for this task. Probe it on
            # an empty page first so a machine with no usable WebGL does not
            # get misreported as a gameplay defect. This does not score any
            # Rubric; it only determines whether runtime verification is possible.
            if bool(getattr(module, "REQUIRES_WEBGL", False)):
                webgl_available = await page.evaluate(
                    """() => {
                        const canvas = document.createElement('canvas');
                        try {
                            return Boolean(
                                canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: false }) ||
                                canvas.getContext('webgl', { failIfMajorPerformanceCaveat: false }) ||
                                canvas.getContext('experimental-webgl')
                            );
                        } catch (_) { return false; }
                    }"""
                )
                preflight["browser_webgl_available"] = bool(webgl_available)
                if not webgl_available:
                    raise BrowserInfrastructureUnavailable(
                        "browser host has no usable WebGL context; runtime verification cannot be performed"
                    )

            target_url = f"{base_url}/{index_name}"
            # A provenance-verified play.html is fully self-contained, so load
            # its exact generated bytes directly into the browser. This avoids
            # making loopback-network policy a prerequisite while still running
            # the real JavaScript/WebGL application. Production builds continue
            # to use the local HTTP server.
            if (
                preflight.get("runtime_target") == "verified_generated_play_artifact"
                and index_name == "play.html"
            ):
                await page.set_content(
                    (static_root / index_name).read_text(encoding="utf-8"),
                    wait_until="domcontentloaded",
                    timeout=PAGE_LOAD_TIMEOUT_MS,
                )
                preflight["runtime_transport"] = "in_memory_self_contained_html"
            else:
                await page.goto(
                    target_url,
                    wait_until="domcontentloaded",
                    timeout=PAGE_LOAD_TIMEOUT_MS,
                )
                preflight["runtime_transport"] = "loopback_http"
            try:
                await page.wait_for_load_state("networkidle", timeout=5000)
            except Exception:
                pass
            await page.wait_for_timeout(1200)

            has_content = await page.evaluate(
                """() => Boolean(
                    document.body && (
                        (document.body.innerText || '').trim().length > 0 ||
                        document.querySelector('canvas, svg, img, video')
                    )
                )"""
            )
            fatal_console = [message for message in console_errors if _fatal_console_error(message)]
            report.layer1_pass = bool(has_content and not page_errors and not fatal_console)
            report.layer1_detail = {
                "execution_mode": "browser",
                "runtime_verified": True,
                "has_content": bool(has_content),
                "page_errors": list(page_errors),
                "fatal_console_errors": fatal_console,
                "all_console_errors": list(console_errors),
                "production_build_status": preflight.get("production_build_status"),
                "production_build_succeeded": preflight.get("production_build_succeeded"),
                "runtime_target": preflight.get("runtime_target"),
                "runtime_transport": preflight.get("runtime_transport"),
                "browser_webgl_available": preflight.get("browser_webgl_available"),
            }
            if preflight.get("build_environment_error"):
                report.layer1_detail["build_environment_error"] = preflight["build_environment_error"]
            if isinstance(source_audit, dict):
                report.layer1_detail["source_integrity"] = {
                    "integrity_flags": source_audit.get("integrity_flags", []),
                    "hard_fail_ids": source_audit.get("hard_fail_ids", []),
                }
            report.layer1_detail["stack_preflight"] = preflight.get("stack", {})

            if report.layer1_pass:
                ctx = Ctx(
                    page=page,
                    vlm_fn=vlm_fn,
                    image_dir=UT_IMAGE_DIR,
                    prefix=prefix or "target",
                    console_errors=console_errors,
                    page_errors=page_errors,
                    preflight=preflight,
                )
                try:
                    await asyncio.wait_for(module.run_checks(page, ctx), timeout=CHECK_TIMEOUT_S)
                except asyncio.TimeoutError:
                    report.layer1_detail["run_checks_error"] = f"timeout>{CHECK_TIMEOUT_S}s"
                except Exception as exc:
                    report.layer1_detail["run_checks_error"] = repr(exc)
                final_results = list(ctx.results)
            else:
                report.layer1_detail["run_checks_skipped"] = "browser loaded but application failed layer1; no source fallback used"
    except Exception as exc:
        error_text = _compact_runtime_error(exc)
        report.layer1_pass = False
        environment_unavailable = isinstance(exc, BrowserInfrastructureUnavailable)
        report.layer1_detail = {
            "execution_mode": "browser_environment_unavailable" if environment_unavailable else "browser_failed",
            "runtime_verified": False,
            "browser_environment_error": error_text,
            "production_build_status": preflight.get("production_build_status"),
            "production_build_succeeded": preflight.get("production_build_succeeded"),
            "runtime_target": preflight.get("runtime_target"),
            "runtime_transport": preflight.get("runtime_transport"),
            "browser_webgl_available": preflight.get("browser_webgl_available"),
            "source_integrity": {
                "integrity_flags": (source_audit or {}).get("integrity_flags", []) if isinstance(source_audit, dict) else [],
                "hard_fail_ids": (source_audit or {}).get("hard_fail_ids", []) if isinstance(source_audit, dict) else [],
            },
            "stack_preflight": preflight.get("stack", {}),
            "note": (
                "Browser host prerequisites were unavailable. Source audit is diagnostic only and no runtime score is recovered from source."
                if environment_unavailable
                else "Browser execution failed. Source audit is diagnostic only and no runtime score is recovered from source."
            ),
        }
        if preflight.get("build_environment_error"):
            report.layer1_detail["build_environment_error"] = preflight["build_environment_error"]
        if not final_results:
            final_results = _unverified_item_results(
                module,
                (
                    f"未验证：浏览器宿主环境不可用：{error_text}"
                    if environment_unavailable
                    else f"未通过/未验证：浏览器运行失败：{error_text}"
                ),
            )

    finally:
        # Teardown is diagnostic/infrastructure work, not a Rubric. Keep it
        # bounded so pathological bad/cheat renderers cannot prevent already
        # collected runtime facts from being serialized.
        try:
            if context is not None:
                await asyncio.wait_for(context.close(), timeout=3)
        except Exception:
            pass
        try:
            if browser is not None:
                await asyncio.wait_for(browser.close(), timeout=3)
        except Exception:
            pass
        try:
            if playwright is not None:
                await asyncio.wait_for(playwright.stop(), timeout=3)
        except Exception:
            pass

    normalized, contract_errors = _normalize_results(module, final_results)
    report.items = [_serialize_item(item) for item in normalized]
    if contract_errors:
        report.layer1_detail["result_contract_errors"] = contract_errors
        report.layer1_pass = False

    for item in normalized:
        text = id_to_text.get(item.id, str(item.id))
        if item.kind == "vlm":
            report.vlm_score[text] = item.score
        else:
            report.func_score[text] = item.score
    return report


def main(module) -> None:
    parser = argparse.ArgumentParser(description="Evaluate a generated web game")
    parser.add_argument("--target", required=True, help="index.html, static build directory, or project repo")
    parser.add_argument("--build", action="store_true", help="force rebuilding a project repo")
    parser.add_argument(
        "--source-calibration",
        action="store_true",
        help="skip browser/build execution and emit a non-scoring source-audit diagnostic report",
    )
    args = parser.parse_args()

    try:
        report = asyncio.run(
            run_sample(
                module,
                args.target,
                build=args.build,
                source_only=args.source_calibration,
            )
        )
        payload = asdict(report)
        target_path = str(Path(args.target).expanduser().resolve())
        harness_dir = str(Path(__file__).resolve().parent)
        payload = _scrub_paths(payload, [(target_path, "<target>"), (harness_dir, ".")])
    except Exception as exc:
        payload = {
            "layer1_pass": False,
            "layer1_detail": {"fatal_harness_error": repr(exc)},
            "items": [],
            "func_score": {},
            "vlm_score": {},
        }
    sys.stdout.write(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")


if __name__ == "__main__":
    raise SystemExit("Import this module from web_ut.py")
