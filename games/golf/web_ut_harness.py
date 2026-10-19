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

    python3 web_ut.py --target /path/to/index.html
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
import shutil
import socketserver
import subprocess
import threading
import urllib.error
import urllib.request
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

# 每次调用 VLM 的截图都保存到这里，便于复核
UT_IMAGE_DIR = os.getenv("UT_IMAGE_DIR", "ut_images")
# VLM 调用“失败”（API 报错 / 超时）用这个分数标记，而不是 0（0=看了图判为不通过；失败=根本没判成）
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))


# ==============================================================================
# 产物解析 / 构建 / 静态服务（前端产物三种形态都支持）
#   1. 单文件           /path/to/index.html
#   2. 构建产物目录     /path/to/dist/     (内含 index.html + assets/*)
#   3. 未构建的 repo    /path/to/project/  (有 package.json，先 build 再评测)
# 统一做法：解析成一个静态目录 -> 起本地 HTTP server -> Playwright 走 http:// 访问。
# （React/Vite 的 dist 用 ES module + 绝对资源路径，file:// 会白屏，必须走 http。）
# ==============================================================================
def _find_index_dir(root: Path) -> Path | None:
    """在目录里找到含 index.html 的静态根：优先目录本身，其次常见 dist/build。"""
    if (root / "index.html").exists():
        return root
    for d in BUILD_OUTPUT_DIRS:
        if (root / d / "index.html").exists():
            return root / d
    return None


def _package_manager_executable(name: str) -> str:
    candidates = [name]
    if os.name == "nt":
        candidates = [f"{name}.cmd", f"{name}.exe", name]
    for candidate in candidates:
        resolved = shutil.which(candidate)
        if resolved:
            return resolved
    raise RuntimeError(f"{name} executable was not found in PATH")


def _run_package_manager(name: str, args: list[str], repo: Path):
    executable = _package_manager_executable(name)
    kwargs = dict(
        cwd=str(repo),
        env=dict(os.environ),
        check=True,
        timeout=BUILD_TIMEOUT,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
    )
    if os.name == "nt" and Path(executable).suffix.lower() in {".cmd", ".bat"}:
        command_line = subprocess.list2cmdline([executable, *args])
        return subprocess.run(command_line, shell=True, **kwargs)
    return subprocess.run([executable, *args], **kwargs)


def build_repo(repo: Path) -> Path:
    """对一个前端 repo 执行安装 + 构建，返回构建产物（含 index.html）的目录。

    只在目标是 repo（有 package.json 且当前没有可用的 index.html 静态根）时调用。
    失败会抛异常，由上层转成 layer1 不通过。
    """
    pm = "pnpm" if (repo / "pnpm-lock.yaml").exists() else \
         "yarn" if (repo / "yarn.lock").exists() else "npm"
    install_args = {"npm": ["install", "--no-audit", "--no-fund"],
                    "yarn": ["install"],
                    "pnpm": ["install"]}[pm]
    _run_package_manager(pm, install_args, repo)
    _run_package_manager(pm, ["run", "build"], repo)

    out = _find_index_dir(repo)
    if out is None:
        raise RuntimeError("构建完成但未找到 index.html（检查 dist/build 输出目录）")
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

    # 2) 目录：先看是否已有静态入口（dist 或本身就含 index.html）
    idx = _find_index_dir(p)
    has_pkg = (p / "package.json").exists()
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
    image: str = ""       # vlm 项：本次判定的截图保存路径


@dataclass
class SampleReport:
    layer1_pass: bool = False
    layer1_detail: dict = field(default_factory=dict)
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
        # VLM calls are independent of later browser actions. Start them as
        # background asyncio tasks as soon as each screenshot is captured, then
        # flush once deterministic checks finish. This preserves all visual
        # rubrics while hiding most network latency behind gameplay checks.
        self._pending_vlm: list[tuple[int, str, asyncio.Task]] = []

    def _already_recorded(self, rid: int) -> bool:
        return any(row.id == rid for row in self.results)

    def _already_pending(self, rid: int) -> bool:
        return any(row[0] == rid for row in self._pending_vlm)

    def check(self, rid: int, passed: bool, reason: str = ""):
        """记录确定性判定，并明确区分通过/失败语气。"""
        # Mapping is one rubric -> one result. A late timeout/cleanup path must
        # never append a second contradictory verdict for an already executed id.
        if self._already_recorded(rid) or self._already_pending(rid):
            return
        ok = bool(passed)
        detail = (reason or "").strip()
        if ok:
            message = detail if detail.startswith("通过：") else f"通过：{detail}"
        else:
            message = detail if detail.startswith("未通过：") else f"未通过：至少一个验收条件未满足。检查摘要：{detail}"
        self.results.append(ItemResult(rid, "det", int(ok), message))

    def _queue_vlm_bytes(self, rid: int, question: str, png: bytes) -> None:
        if self._already_recorded(rid) or self._already_pending(rid):
            return
        self._n += 1
        img_path = ""
        try:
            os.makedirs(self._img_dir, exist_ok=True)
            img_path = os.path.join(self._img_dir, f"{self._prefix}_r{rid}_{self._n}.png")
            with open(img_path, "wb") as f:
                f.write(png)
        except Exception as e:
            img_path = f"(save-failed: {e!r})"
        task = asyncio.create_task(self._vlm_fn(question, base64.b64encode(png).decode()))
        self._pending_vlm.append((rid, img_path, task))

    async def vlm(self, rid: int, question: str):
        """Capture now and start VLM asynchronously; final score is flushed later."""
        png = await self.page.screenshot(type="png")
        self._queue_vlm_bytes(rid, question, png)

    async def vlm_image(self, rid: int, question: str, png: bytes):
        """Run a visual rubric on an already captured image without reloading the page."""
        self._queue_vlm_bytes(rid, question, png)

    def vlm_skip(self, rid: int, reason: str):
        """Record a deterministic visual failure when prerequisite evidence is absent.

        This avoids spending an external VLM call on a screenshot that cannot possibly
        contain the requested state (for example, no result screen was produced).
        It is a rubric failure (0), not an infrastructure failure (-100).
        """
        if self._already_recorded(rid) or self._already_pending(rid):
            return
        detail = (reason or "visual prerequisite not met").strip()
        message = detail if detail.startswith("未通过：") else f"未通过：{detail}"
        self.results.append(ItemResult(rid, "vlm", 0, message, ""))

    async def flush_vlm(self):
        """Finish all queued VLM calls, preserving one result per queued visual check."""
        pending = self._pending_vlm
        self._pending_vlm = []
        for rid, img_path, task in pending:
            try:
                ok, reason = await task
            except Exception as e:
                ok, reason = None, f"vlm-fail(任务异常): {e!r}"
            score = VLM_FAIL_SCORE if ok is None else (1 if ok else 0)
            if not self._already_recorded(rid):
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


def _extract_ark_output_text(payload: dict) -> str:
    """Extract textual output from a Responses API JSON payload without SDK dependency."""
    direct = payload.get("output_text")
    if isinstance(direct, str) and direct.strip():
        return direct.strip()
    texts = []
    for item in payload.get("output") or []:
        if not isinstance(item, dict):
            continue
        for content in item.get("content") or []:
            if isinstance(content, dict) and content.get("type") in {"output_text", "text"}:
                text = content.get("text")
                if isinstance(text, str) and text.strip():
                    texts.append(text.strip())
    return "\n".join(texts).strip()


def _ark_vlm_sync(question: str, image_b64: str):
    """Call ARK Responses API directly using stdlib HTTP; return (bool, reason).

    Direct HTTP avoids making VLM depend on an optional ``openai`` Python package.
    The endpoint/model/key remain environment-overridable.
    """
    if not ARK_API_KEY:
        raise RuntimeError("ARK_API_KEY is empty")
    prompt = (question.strip() +
              "\n\n只根据截图中实际可见内容判断。满足核心视觉条件即可判 YES；不要因为轻微 HUD 遮挡、透视角度、物体未居中、抗锯齿或小范围裁切而误判。只有核心对象/视觉语义明显缺失时才判 NO。第一行严格输出 YES 或 NO，第二行用一句话说明关键可见证据。")
    body = {
        "model": ARK_MODEL,
        "input": [{
            "role": "user",
            "content": [
                {"type": "input_image", "image_url": f"data:image/png;base64,{image_b64}"},
                {"type": "input_text", "text": prompt},
            ],
        }],
    }
    url = ARK_BASE_URL.rstrip("/") + "/responses"
    raw = json.dumps(body, ensure_ascii=False).encode("utf-8")
    last_error = None
    for attempt in range(2):
        req = urllib.request.Request(
            url,
            data=raw,
            headers={
                "Authorization": f"Bearer {ARK_API_KEY}",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=VLM_TIMEOUT_S) as response:
                payload = json.loads(response.read().decode("utf-8", errors="replace"))
            text = _extract_ark_output_text(payload)
            if not text:
                raise RuntimeError(f"empty-vlm-response status={payload.get('status')!r}")
            normalized = text.lower().lstrip("*#-> \t\r\n")
            first = normalized.split(maxsplit=1)[0] if normalized else ""
            passed = first.startswith("yes") or first.startswith("是")
            if first.startswith("no") or first.startswith("否"):
                passed = False
            return passed, text
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")[:1000]
            last_error = RuntimeError(f"HTTP {exc.code}: {detail}")
            if 400 <= exc.code < 500 and exc.code != 429:
                break
        except Exception as exc:
            last_error = exc
        if attempt == 0:
            import time as _time
            _time.sleep(.6)
    raise last_error or RuntimeError("ARK VLM request failed")


async def _default_vlm(question: str, image_b64: str):
    """截图 -> ARK 视觉模型 -> (通过?, 理由)。
    成功返回 (True/False, 理由)；**调用失败(API/超时)返回 (None, 原因)** → 上层记 VLM_FAIL_SCORE。
    本地离线复测可设置 WEB_UT_SKIP_VLM=1；该模式明确返回失败标记，本轮结果不得沿用历史视觉分。"""
    if os.getenv("WEB_UT_SKIP_VLM", "0") == "1":
        return None, "vlm-fail(按 WEB_UT_SKIP_VLM 跳过)"
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


_LAYER1_CRITICAL_RESOURCE_TYPES = {"document", "script", "stylesheet", "xhr", "fetch"}
_LAYER1_RESOURCE_ERROR_MARKERS = (
    "failed to load resource",
    "net::err_",
    "cors policy",
    "cross-origin request blocked",
)


def _is_resource_console_error(message: str) -> bool:
    lower = message.lower()
    return "favicon" in lower or any(marker in lower for marker in _LAYER1_RESOURCE_ERROR_MARKERS)


def _is_same_origin_resource(url: str, base_url: str) -> bool:
    base = base_url.rstrip("/")
    return url == base or url.startswith(base + "/")


def _critical_local_resource_errors(base_url: str, rows: list[dict]) -> list[str]:
    errors: list[str] = []
    for row in rows:
        url = str(row.get("url") or "")
        resource_type = str(row.get("resource_type") or "")
        if resource_type not in _LAYER1_CRITICAL_RESOURCE_TYPES:
            continue
        if not _is_same_origin_resource(url, base_url):
            continue
        detail = str(row.get("error") or row.get("status") or "resource load failed")
        errors.append(f"{resource_type} {url}: {detail}")
    return errors


async def run_sample(module, target: str, build: bool = False,
                     vlm_fn=_default_vlm) -> SampleReport:
    rep = SampleReport()
    # 先按 RUBRIC 把每个判分点（用 rubric 原文作键）默认置 0；跑起来后再用实际结果覆盖
    func_texts, vlm_texts, id2text = _rubric_index(module)
    rep.func_score = {t: 0 for t in func_texts}
    rep.vlm_score = {t: 0 for t in vlm_texts}
    _name = os.getenv("WEB_UT_SAMPLE_NAME") or Path(target).stem or Path(target).name or "target"
    prefix = "".join(c if (c.isalnum() or c in "-_.") else "_" for c in _name) or "t"
    try:
        static_root, index_name = resolve_target(target, build=build)
    except Exception as e:
        rep.layer1_detail = {"resolve_or_build_error": str(e)}
        return rep

    console_errors: list[str] = []
    page_errors: list[str] = []
    resource_failures: list[dict] = []
    http_errors: list[dict] = []
    with serve_directory(static_root) as base_url:
        async with async_playwright() as p:
            executable_path = os.getenv("PLAYWRIGHT_EXECUTABLE_PATH") or None
            headless = os.getenv("PLAYWRIGHT_HEADLESS", "1").strip().lower() not in {"0", "false", "no"}
            force_swiftshader = os.getenv("WEB_UT_FORCE_SWIFTSHADER", "0").strip().lower() in {"1", "true", "yes"}
            normal_args = ["--enable-webgl", "--ignore-gpu-blocklist"]
            swift_args = ["--use-gl=angle", "--use-angle=swiftshader-webgl", "--enable-webgl", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"]
            launch_args = swift_args if force_swiftshader else normal_args
            try:
                browser = await p.chromium.launch(
                    headless=headless,
                    executable_path=executable_path,
                    args=launch_args,
                )
            except Exception:
                if force_swiftshader:
                    raise
                # Hardware/ANGLE path is preferred for speed. Only fall back when
                # browser launch itself cannot start on the normal WebGL path.
                browser = await p.chromium.launch(
                    headless=headless,
                    executable_path=executable_path,
                    args=swift_args,
                )
            page = await browser.new_page(viewport=VIEWPORT)

            # Chromium may launch successfully while its default GPU/ANGLE path
            # still exposes no WebGL context.  In that case a valid Three.js app
            # is forced into its compatibility renderer and R1/R28 become an
            # environment false negative.  Probe before loading the product and
            # opportunistically relaunch with SwiftShader; keep the original
            # browser if the software path is unavailable too.
            async def _page_has_webgl(candidate):
                try:
                    return bool(await candidate.evaluate("""()=>{const c=document.createElement('canvas');for(const name of ['webgl2','webgl','experimental-webgl']){try{const gl=c.getContext(name);if(gl&&!gl.isContextLost?.())return true}catch{}}return false}"""))
                except Exception:
                    return False

            if not force_swiftshader and not await _page_has_webgl(page):
                swift_browser = None
                try:
                    swift_browser = await p.chromium.launch(
                        headless=headless,
                        executable_path=executable_path,
                        args=swift_args,
                    )
                    swift_page = await swift_browser.new_page(viewport=VIEWPORT)
                    if await _page_has_webgl(swift_page):
                        await page.close()
                        await browser.close()
                        browser, page = swift_browser, swift_page
                        swift_browser = None
                    else:
                        await swift_page.close()
                except Exception:
                    pass
                finally:
                    if swift_browser is not None:
                        try:
                            await swift_browser.close()
                        except Exception:
                            pass

            page.on("console", lambda m: console_errors.append(m.text)
                    if m.type == "error" else None)
            page.on("pageerror", lambda exc: page_errors.append(f"pageerror: {exc}"))
            page.on("requestfailed", lambda request: resource_failures.append({
                "url": request.url,
                "resource_type": request.resource_type,
                "error": request.failure or "request failed",
            }))
            page.on("response", lambda response: http_errors.append({
                "url": response.url,
                "resource_type": response.request.resource_type,
                "status": response.status,
                "error": f"HTTP {response.status}",
            }) if response.status >= 400 else None)

            await page.goto(f"{base_url}/{index_name}", wait_until="load")
            # Prefer an observable readiness condition over a fixed two-second
            # delay. Fall back after a short timeout for products without hooks.
            try:
                await page.wait_for_function(
                    "() => window.__game?.getState?.()?.ready === true || "
                    "((document.body?.innerText?.length || 0) + document.querySelectorAll('canvas,svg,img').length > 0)",
                    timeout=1200,
                )
            except Exception:
                pass

            # ---- Layer 1 硬门槛 ----
            # Do not fail the whole sample for non-critical network resources
            # such as Google Fonts, remote images, analytics, or optional CDNs.
            # Those failures remain auditable below and the rubric checks still
            # decide whether the missing resource actually harms the product.
            non_resource_console_errors = [
                e for e in console_errors if not _is_resource_console_error(e)
            ]
            ignored_console_errors = [
                e for e in console_errors if _is_resource_console_error(e)
            ]
            critical_resource_errors = _critical_local_resource_errors(
                base_url, [*resource_failures, *http_errors]
            )
            fatal = [*page_errors, *non_resource_console_errors, *critical_resource_errors]
            has_body = await page.evaluate("() => document.body && document.body.innerText.length + document.querySelectorAll('canvas,svg,img').length > 0")
            rep.layer1_pass = (len(fatal) == 0) and bool(has_body)
            rep.layer1_detail = {
                "fatal_console_errors": fatal,
                "ignored_console_errors": ignored_console_errors,
                "resource_failures": resource_failures,
                "http_errors": http_errors,
                "has_content": bool(has_body),
            }
            if not rep.layer1_pass:
                await browser.close()
                return rep

            # ---- 跑生成的逐条检查 ----
            ctx = Ctx(page, vlm_fn, UT_IMAGE_DIR, prefix)
            try:
                await module.run_checks(page, ctx)
            except Exception as e:
                rep.layer1_detail["run_checks_error"] = repr(e)
            finally:
                # Visual API latency runs concurrently with deterministic checks;
                # only wait for any unfinished requests once at the end.
                await ctx.flush_vlm()
            rep.items = [vars(r) for r in ctx.results]
            await browser.close()

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