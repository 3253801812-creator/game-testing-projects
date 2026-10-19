# -*- coding: utf-8 -*-
"""Web 单元测试 harness —— 所有「生成的 Playwright 脚本」样本都跑在这上面。

标注人员对每条 prompt 只需产出:
    RUBRIC     : list[dict]  每条 rubric 及其判定方式 {id, text, kind: dom|state|vlm}
    run_checks : async(page, ctx) -> None   用 ctx.check / ctx.vlm 记录逐条结果

本文件是**自包含**的（不依赖其它测试文件）：把通用脏活全写在这里——
    解析/构建产物(build) -> 起本地静态服务(serve) -> 开浏览器加载 ->
    Layer1 硬门槛 -> 读状态钩子 -> VLM 视觉判定 -> 分别汇总 func_score / vlm_score。
这样确定性脚本(dom/state)便宜可复现，视觉项(vlm)统一走截图问模型。

依赖:
    pip install playwright openai && playwright install chromium

用法（在你的 web_ut.py 末尾）:
    if __name__ == "__main__":
        import web_ut_harness
        web_ut_harness.main(__import__("web_ut"))

    python3 web_ut.py --target /path/to/play.html
    python3 web_ut.py --target /path/to/dist
    python3 web_ut.py --target /path/to/repo --build
"""

import argparse
import asyncio
import base64
import contextlib
import functools
import http.server
import json
import os
import socketserver
import subprocess
import threading
from dataclasses import dataclass, field, asdict
from pathlib import Path

from playwright.async_api import async_playwright, ConsoleMessage

# ==============================================================================
# 配置
# ==============================================================================
VIEWPORT = {"width": 1280, "height": 800}
BUILD_OUTPUT_DIRS = ("dist", "build", "out")   # 常见构建产物目录名
BUILD_TIMEOUT = 600                            # npm install + build 上限（秒）

# ------- VLM 网关（火山 ARK / OpenAI 兼容 responses 接口）-------
ARK_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3"
ARK_MODEL = os.getenv("ARK_VLM_MODEL", "ep-20260416114755-vvzqk")
ARK_API_KEY = os.getenv("ARK_API_KEY", "")
VLM_TIMEOUT_S = float(os.getenv("VLM_TIMEOUT_S", "120"))
SKIP_VLM = os.getenv("SKIP_VLM", "0").strip().lower() in ("1", "true", "yes")

# 每次调用 VLM 的截图都保存到这里，便于复核
UT_IMAGE_DIR = os.getenv("UT_IMAGE_DIR", "ut_images")
# VLM 调用“失败”（API 报错 / 超时）用这个分数标记，而不是 0（0=看了图判为不通过；失败=根本没判成）
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))

# 浏览器路径/显示模式允许由运行环境覆盖；默认仍使用 Playwright 自带 Chromium。
CHROMIUM_EXECUTABLE_PATH = os.getenv("CHROMIUM_EXECUTABLE_PATH", "").strip()
CHROMIUM_HEADLESS = os.getenv("CHROMIUM_HEADLESS", "1").strip().lower() not in ("0", "false", "no")
CHROMIUM_EXTRA_ARGS = [a for a in os.getenv("CHROMIUM_EXTRA_ARGS", "").split() if a]

# Evaluation-side runtime observer. This script is injected before any product
# JavaScript executes; it is not part of the submitted game and cannot control
# gameplay. It independently observes RAF loops, event listeners, draw calls,
# and WebGL resource creation/deletion for cross-checking real runtime behavior.
EVAL_OBSERVER_INIT = r"""
(() => {
  if (globalThis.__EVAL_OBSERVER__) return;
  const state = {
    raf: {scheduled: 0, cancelled: 0, callbacks: 0, active: 0, maxActive: 0},
    listeners: {adds: 0, removes: 0, active: 0, maxActive: 0, byType: {}},
    webgl: {
      contexts: 0, drawCalls: 0, clearCalls: 0,
      creates: {buffer:0, texture:0, shader:0, program:0, framebuffer:0, renderbuffer:0, vertexArray:0},
      deletes: {buffer:0, texture:0, shader:0, program:0, framebuffer:0, renderbuffer:0, vertexArray:0}
    }
  };

  const nativeRAF = globalThis.requestAnimationFrame.bind(globalThis);
  const nativeCAF = globalThis.cancelAnimationFrame.bind(globalThis);
  const activeRaf = new Set();
  globalThis.requestAnimationFrame = function(cb) {
    let id = 0;
    const wrapped = (ts) => {
      activeRaf.delete(id);
      state.raf.active = activeRaf.size;
      state.raf.callbacks++;
      return cb(ts);
    };
    id = nativeRAF(wrapped);
    activeRaf.add(id);
    state.raf.scheduled++;
    state.raf.active = activeRaf.size;
    state.raf.maxActive = Math.max(state.raf.maxActive, activeRaf.size);
    return id;
  };
  globalThis.cancelAnimationFrame = function(id) {
    if (activeRaf.delete(id)) state.raf.cancelled++;
    state.raf.active = activeRaf.size;
    return nativeCAF(id);
  };

  const nativeAdd = EventTarget.prototype.addEventListener;
  const nativeRemove = EventTarget.prototype.removeEventListener;
  const targetIds = new WeakMap();
  const callbackIds = new WeakMap();
  let nextTarget = 1, nextCallback = 1;
  const activeListeners = new Set();
  const getId = (map, obj, next) => {
    if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) return 'primitive';
    if (!map.has(obj)) map.set(obj, next());
    return map.get(obj);
  };
  const captureOf = (opts) => typeof opts === 'boolean' ? opts : !!(opts && opts.capture);
  EventTarget.prototype.addEventListener = function(type, callback, options) {
    const tid = getId(targetIds, this, () => nextTarget++);
    const cid = getId(callbackIds, callback, () => nextCallback++);
    const key = `${tid}|${String(type)}|${captureOf(options)?1:0}|${cid}`;
    if (!activeListeners.has(key)) {
      activeListeners.add(key);
      state.listeners.adds++;
      state.listeners.active = activeListeners.size;
      state.listeners.maxActive = Math.max(state.listeners.maxActive, activeListeners.size);
      const t = String(type);
      state.listeners.byType[t] = (state.listeners.byType[t] || 0) + 1;
    }
    return nativeAdd.call(this, type, callback, options);
  };
  EventTarget.prototype.removeEventListener = function(type, callback, options) {
    const tid = targetIds.get(this);
    const cid = callbackIds.get(callback);
    const key = `${tid}|${String(type)}|${captureOf(options)?1:0}|${cid}`;
    if (tid && cid && activeListeners.delete(key)) {
      state.listeners.removes++;
      state.listeners.active = activeListeners.size;
      const t = String(type);
      state.listeners.byType[t] = Math.max(0, (state.listeners.byType[t] || 0) - 1);
    }
    return nativeRemove.call(this, type, callback, options);
  };

  const seenContexts = new WeakSet();
  const nativeGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function(type, ...args) {
    const ctx = nativeGetContext.call(this, type, ...args);
    if (ctx && /^webgl2?$/.test(String(type)) && !seenContexts.has(ctx)) {
      seenContexts.add(ctx);
      state.webgl.contexts++;
    }
    return ctx;
  };

  const wrapProto = (proto, name, onCall) => {
    if (!proto) return;
    const original = proto[name];
    if (typeof original !== 'function' || original.__evalObserverWrapped) return;
    function wrapped(...args) {
      try { onCall(this, args); } catch (_) {}
      return original.apply(this, args);
    }
    Object.defineProperty(wrapped, '__evalObserverWrapped', {value:true});
    try { proto[name] = wrapped; } catch (_) {}
  };
  const protos = [globalThis.WebGLRenderingContext && WebGLRenderingContext.prototype,
                  globalThis.WebGL2RenderingContext && WebGL2RenderingContext.prototype].filter(Boolean);
  const createMap = {
    createBuffer:'buffer', createTexture:'texture', createShader:'shader', createProgram:'program',
    createFramebuffer:'framebuffer', createRenderbuffer:'renderbuffer', createVertexArray:'vertexArray'
  };
  const deleteMap = {
    deleteBuffer:'buffer', deleteTexture:'texture', deleteShader:'shader', deleteProgram:'program',
    deleteFramebuffer:'framebuffer', deleteRenderbuffer:'renderbuffer', deleteVertexArray:'vertexArray'
  };
  for (const proto of protos) {
    wrapProto(proto, 'drawArrays', () => state.webgl.drawCalls++);
    wrapProto(proto, 'drawElements', () => state.webgl.drawCalls++);
    wrapProto(proto, 'clear', () => state.webgl.clearCalls++);
    for (const [name, key] of Object.entries(createMap)) wrapProto(proto, name, () => state.webgl.creates[key]++);
    for (const [name, key] of Object.entries(deleteMap)) wrapProto(proto, name, () => state.webgl.deletes[key]++);
  }

  const clone = () => JSON.parse(JSON.stringify(state));
  Object.defineProperty(globalThis, '__EVAL_OBSERVER__', {
    configurable: false,
    enumerable: false,
    value: { snapshot: clone }
  });
})();
"""


# ==============================================================================
# 产物解析 / 构建 / 静态服务（前端产物三种形态都支持）
#   1. 单文件           /path/to/play.html
#   2. 构建产物目录     /path/to/dist/     (内含 index.html + assets/*)
#   3. 未构建的 repo    /path/to/project/  (有 package.json，先 build 再评测)
# 统一做法：解析成一个静态目录 -> 起本地 HTTP server -> Playwright 走 http:// 访问。
# （React/Vite 的 dist 用 ES module + 绝对资源路径，file:// 会白屏，必须走 http。）
# ==============================================================================
def _find_index_dir(root: Path) -> Path | None:
    """在一个已经是静态产物的目录中寻找入口。

    非 build 模式下保留原行为：目录本身若有 index.html 就直接 serve；
    否则再尝试常见构建目录。
    """
    if (root / "index.html").exists():
        return root
    for d in BUILD_OUTPUT_DIRS:
        if (root / d / "index.html").exists():
            return root / d
    return None


def _find_build_output_dir(repo: Path) -> Path | None:
    """构建后只寻找真正的构建产物，不把源码根 index.html 误当成产物。

    先检查常见目录；再检查 repo 的直接子目录，以兼容 Vite 自定义 outDir。
    该逻辑只看“构建后存在 index.html 的输出目录”，不包含任何具体项目规则。
    """
    for d in BUILD_OUTPUT_DIRS:
        candidate = repo / d
        if candidate.is_dir() and (candidate / "index.html").exists():
            return candidate

    ignored = {"node_modules", "src", "public", ".git", ".vite", ".cache"}
    candidates = []
    for child in repo.iterdir():
        if not child.is_dir() or child.name in ignored or child.name.startswith("."):
            continue
        index_file = child / "index.html"
        if index_file.exists():
            candidates.append((index_file.stat().st_mtime_ns, child))
    if candidates:
        candidates.sort(key=lambda item: item[0], reverse=True)
        return candidates[0][1]
    return None


def build_repo(repo: Path) -> Path:
    """对一个前端 repo 执行安装 + 构建，返回构建产物（含 index.html）的目录。

    只在目标是 repo（有 package.json 且当前没有可用的 index.html 静态根）时调用。
    失败会抛异常，由上层转成 layer1 不通过。
    """
    pm = "pnpm" if (repo / "pnpm-lock.yaml").exists() else \
         "yarn" if (repo / "yarn.lock").exists() else "npm"
    install = {"npm": ["npm", "install", "--no-audit", "--no-fund"],
               "yarn": ["yarn", "install"],
               "pnpm": ["pnpm", "install"]}[pm]
    build = [pm, "run", "build"]

    env = dict(os.environ)
    for cmd in (install, build):
        subprocess.run(cmd, cwd=str(repo), env=env, check=True,
                       timeout=BUILD_TIMEOUT,
                       stdout=subprocess.PIPE, stderr=subprocess.STDOUT)

    out = _find_build_output_dir(repo)
    if out is None:
        raise RuntimeError("构建完成但未找到独立构建产物 index.html（检查构建输出目录）")
    return out


def resolve_target(target: str, build: bool = False) -> tuple[Path, str]:
    """把用户给的 target 解析成 (要 serve 的静态目录, 入口 html 文件名)。"""
    p = Path(target).resolve()
    if not p.exists():
        raise FileNotFoundError(target)

    # 1) 单个 html 文件：serve 它所在目录
    if p.is_file():
        if p.suffix.lower() not in (".html", ".htm"):
            raise ValueError(f"文件不是 html: {p}")
        return p.parent, p.name

    # 2) 目录：提交格式优先使用样本根目录中的 play.html。
    # index.html 保留为 Vite 源码入口，避免把源码入口误当成已提交试玩产物。
    has_pkg = (p / "package.json").exists()
    play_file = p / "play.html"
    if play_file.is_file() and not (build and has_pkg):
        return p, "play.html"

    idx = _find_index_dir(p)
    if idx is not None and not (build and has_pkg):
        return idx, "index.html"

    # 3) 需要构建的 repo
    if has_pkg:
        out = build_repo(p)
        return out, "index.html"

    raise RuntimeError(f"无法解析前端产物（既无 index.html 也无 package.json）: {p}")


@contextlib.contextmanager
def serve_directory(root: Path, port: int = 0):
    """在后台线程起一个静态 HTTP server，yield 出 base_url，退出时关闭。"""
    handler = functools.partial(http.server.SimpleHTTPRequestHandler,
                                directory=str(root))

    class _Quiet(socketserver.ThreadingTCPServer):
        allow_reuse_address = True
    httpd = _Quiet(("127.0.0.1", port), handler)
    real_port = httpd.server_address[1]
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    try:
        yield f"http://127.0.0.1:{real_port}"
    finally:
        httpd.shutdown()
        httpd.server_close()


# ==============================================================================
# 结果结构
# ==============================================================================
@dataclass
class ItemResult:
    id: int
    kind: str
    score: int = 0        # det: 1/0；vlm: 1(通过)/0(不通过)/VLM_FAIL_SCORE(调用失败)
    reason: str = ""
    image: str | None = None  # 仅 vlm 项：本次判定的截图保存路径

    def to_dict(self):
        data = {
            "id": self.id,
            "kind": self.kind,
            "score": self.score,
            "reason": self.reason,
        }
        if self.kind == "vlm":
            data["image"] = self.image or ""
        return data


@dataclass
class SampleReport:
    layer1_pass: bool = False
    layer1_detail: dict = field(default_factory=dict)
    execution: dict = field(default_factory=dict)
    items: list = field(default_factory=list)
    func_score: dict = field(default_factory=dict)  # {rubric原文: 1/0}（dom+state 确定性项）
    vlm_score: dict = field(default_factory=dict)   # {rubric原文: 1/0/-100}（vlm；-100=调用失败）


class Ctx:
    """给 run_checks 用的记录器 + 工具。"""
    def __init__(self, page, vlm_fn, img_dir=UT_IMAGE_DIR, prefix="t"):
        self.page = page
        self._vlm_fn = vlm_fn
        self.results: list[ItemResult] = []
        self._img_dir = img_dir
        self._prefix = prefix
        self._n = 0

    def check(self, rid: int, passed: bool, reason: str = ""):
        """记录一个确定性(dom/state)判定结果。"""
        self.results.append(ItemResult(rid, "det", int(bool(passed)), reason))

    async def vlm(self, rid: int, question: str):
        """截图 -> VLM yes/no；SKIP_VLM=1 时仍保存真实截图证据，但不调用模型。"""
        self._n += 1
        png = await self.page.screenshot(type="png")
        img_path = ""
        try:
            os.makedirs(self._img_dir, exist_ok=True)
            img_path = os.path.join(self._img_dir, f"{self._prefix}_r{rid}_{self._n}.png").replace("\\", "/")
            with open(img_path, "wb") as f:
                f.write(png)
        except Exception as e:
            img_path = f"(save-failed: {e!r})"
        if SKIP_VLM:
            self.results.append(ItemResult(
                rid, "vlm", VLM_FAIL_SCORE,
                "视觉模型本轮按配置跳过；已保留当前真实游戏截图，未伪造视觉判定。",
                img_path,
            ))
            return
        ok, reason = await self._vlm_fn(question, base64.b64encode(png).decode())
        score = VLM_FAIL_SCORE if ok is None else (1 if ok else 0)
        self.results.append(ItemResult(rid, "vlm", score, reason, img_path))

    async def get_state(self, hook: str = "__game"):
        """读取页面暴露的语义状态钩子；没有则返回 None。"""
        return await self.page.evaluate(
            f"() => (window.{hook} && window.{hook}.getState) "
            f"? window.{hook}.getState() : (window.{hook} || null)")


# ==============================================================================
# VLM（火山 ARK 视觉模型）
# ==============================================================================
_ark_client = None


def _get_ark_client():
    global _ark_client
    if not ARK_API_KEY:
        raise RuntimeError("ARK_API_KEY environment variable is required for VLM rubrics")
    if _ark_client is None:
        from openai import OpenAI
        _ark_client = OpenAI(base_url=ARK_BASE_URL, api_key=ARK_API_KEY)
    return _ark_client


def _ark_vlm_sync(question: str, image_b64: str):
    """同步调用 ARK 视觉模型，让它对当前截图回答 yes/no。返回 (True/False, 理由)。"""
    client = _get_ark_client()
    system_instruction = (
        "你是一个严格的游戏质量评估器。你的唯一任务是判断游戏截图是否满足给定的验收标准。\n"
        "判定规则：\n"
        "1. 只有当画面中明确、清晰、无歧义地呈现了要求的全部关键内容时，才输出 YES。\n"
        "2. 如果画面模糊、关键元素缺失或不明显、明显是占位/默认素材、或只能部分满足要求，必须输出 NO。\n"
        "3. 不要因为“还行”“差不多”“有一点像”就给 YES；标准从严。\n"
        "4. 仅根据实际看到的画面内容判断，不要推测或假设画面外可能存在的内容。\n"
        "5. 对于“完整”“协调”“游戏化设计”等整体性要求，只要存在明显的半成品迹象（大面积默认样式、控件遮挡重叠、排版混乱、美术风格极简如纯色块代替纹理等），必须输出 NO。"
    )
    prompt = (
        system_instruction + "\n\n"
        "验收标准：" + question.strip() +
        "\n\n第一行严格输出 YES 或 NO，第二行用一句话说明画面中看到的具体证据。"
    )
    resp = client.responses.create(
        model=ARK_MODEL,
        input=[{
            "role": "user",
            "content": [
                {"type": "input_image",
                 "image_url": f"data:image/png;base64,{image_b64}"},
                {"type": "input_text", "text": prompt},
            ],
        }],
    )
    text = (getattr(resp, "output_text", "") or "").strip()
    verdict = text.lower().lstrip("*#-> \t").split(maxsplit=1)[0] if text else ""
    passed = verdict.startswith("yes") or verdict.startswith("是")
    return passed, text or "empty-vlm-response"


async def _default_vlm(question: str, image_b64: str):
    """截图 -> ARK 视觉模型 -> (通过?, 理由)。
    成功返回 (True/False, 理由)；**调用失败(API/超时)返回 (None, 原因)** → 上层记 VLM_FAIL_SCORE。"""
    try:
        return await asyncio.wait_for(
            asyncio.to_thread(_ark_vlm_sync, question, image_b64),
            timeout=VLM_TIMEOUT_S)
    except asyncio.TimeoutError:
        return None, f"vlm-fail(超时>{VLM_TIMEOUT_S}s)"
    except Exception as e:
        return None, f"vlm-fail(API错误): {e!r}"


# ==============================================================================
# 主流程
# ==============================================================================
def _rubric_index(module):
    """收集 RUBRIC：(func 项原文列表, vlm 项原文列表, {id: 原文})。"""
    func_texts, vlm_texts, id2text = [], [], {}
    for r in getattr(module, "RUBRIC", []) or []:
        text = r.get("text", str(r.get("id")))
        id2text[r.get("id")] = text
        (vlm_texts if r.get("kind") == "vlm" else func_texts).append(text)
    return func_texts, vlm_texts, id2text


async def run_sample(module, target: str, build: bool = False,
                     vlm_fn=_default_vlm) -> SampleReport:
    rep = SampleReport()
    # 先按 RUBRIC 把每个判分点（用 rubric 原文作键）默认置 0；跑起来后再用实际结果覆盖
    func_texts, vlm_texts, id2text = _rubric_index(module)
    rep.func_score = {t: 0 for t in func_texts}
    rep.vlm_score = {t: 0 for t in vlm_texts}
    target_path = Path(target)
    if target_path.is_file():
        _name = f"{target_path.parent.name}_{target_path.name}"
    elif target_path.name in {"dist", "build", "out"} and target_path.parent.name:
        _name = target_path.parent.name
    else:
        _name = target_path.name or "target"
    prefix = "".join(c if (c.isalnum() or c in "-_.") else "_" for c in _name) or "t"
    requested_mode = "build" if build else ("prebuilt_html" if target_path.is_file() else "static_directory")
    rep.execution = {
        "mode": requested_mode,
        "buildRequested": bool(build),
        "requestedEntry": target_path.name if target_path.is_file() else "index.html",
    }
    try:
        static_root, index_name = resolve_target(target, build=build)
        rep.execution.update({
            "resolvedEntry": index_name,
            "servedDirectoryName": static_root.name,
            "buildVerified": bool(build),
        })
    except Exception as e:
        rep.execution["buildVerified"] = False
        rep.layer1_detail = {"resolve_or_build_error": str(e)}
        return rep

    console_errors: list[str] = []
    ctx = None
    with serve_directory(static_root) as base_url:
        async with async_playwright() as p:
            browser = None
            context = None
            page = None
            try:
                launch_kwargs = {
                    "headless": CHROMIUM_HEADLESS,
                    "args": ["--use-angle=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist", *CHROMIUM_EXTRA_ARGS],
                }
                if CHROMIUM_EXECUTABLE_PATH:
                    launch_kwargs["executable_path"] = CHROMIUM_EXECUTABLE_PATH
                browser = await p.chromium.launch(**launch_kwargs)

                # 显式创建 BrowserContext，便于按 page -> context -> browser 顺序回收。
                context = await browser.new_context(viewport=VIEWPORT)
                page = await context.new_page()
                await page.add_init_script(EVAL_OBSERVER_INIT)
                page.on("console", lambda m: console_errors.append(m.text)
                        if m.type == "error" else None)
                page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))

                await page.goto(f"{base_url}/{index_name}", wait_until="load")
                await page.wait_for_timeout(2000)

                # ---- Layer 1 硬门槛 ----
                fatal = [e for e in console_errors if "favicon" not in e.lower()]
                has_body = await page.evaluate("() => document.body && document.body.innerText.length + document.querySelectorAll('canvas,svg,img').length > 0")
                rep.layer1_pass = (len(fatal) == 0) and bool(has_body)
                rep.layer1_detail = {"fatal_console_errors": fatal, "has_content": bool(has_body)}
                if not rep.layer1_pass:
                    return rep

                # ---- 跑生成的逐条检查 ----
                ctx = Ctx(page, vlm_fn, UT_IMAGE_DIR, prefix)
                try:
                    await module.run_checks(page, ctx)
                except Exception as e:
                    rep.layer1_detail["run_checks_error"] = repr(e)
                try:
                    rep.layer1_detail["runtime_observer"] = await page.evaluate(
                        "() => window.__EVAL_OBSERVER__ ? window.__EVAL_OBSERVER__.snapshot() : null"
                    )
                except Exception as e:
                    rep.layer1_detail["runtime_observer_error"] = repr(e)
                rep.items = [r.to_dict() for r in ctx.results]
            finally:
                # Python 3.14 会更明显地报告未回收的 Playwright channel task。
                # 无论测试成功、页面异常还是提前 return，都按依赖顺序完整释放。
                if page is not None:
                    with contextlib.suppress(Exception):
                        await page.close()
                if context is not None:
                    with contextlib.suppress(Exception):
                        await context.close()
                if browser is not None:
                    with contextlib.suppress(Exception):
                        await browser.close()
                await asyncio.sleep(0)

    if ctx is not None:
        # 用实际判定结果覆盖默认值：det 1/0；vlm 1/0/-100(调用失败)
        for r in ctx.results:
            key = id2text.get(r.id, str(r.id))
            (rep.vlm_score if r.kind == "vlm" else rep.func_score)[key] = r.score
    return rep


def main(module):
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", required=True)
    ap.add_argument("--build", action="store_true")
    args = ap.parse_args()
    rep = asyncio.run(run_sample(module, args.target, build=args.build))
    print(json.dumps(asdict(rep), ensure_ascii=False, indent=2))
