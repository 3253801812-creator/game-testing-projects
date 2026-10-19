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
import socketserver
import subprocess
import shutil
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

# 每次调用 VLM 的截图都保存到这里，便于复核
UT_IMAGE_DIR = os.getenv("UT_IMAGE_DIR", "ut_images")
# VLM 调用“失败”（API 报错 / 超时）用这个分数标记，而不是 0（0=看了图判为不通过；失败=根本没判成）
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))


def _chromium_launch_kwargs() -> dict:
    """Use an explicit/system Chromium when Playwright's managed binary is absent."""
    explicit = os.getenv("PLAYWRIGHT_CHROMIUM_EXECUTABLE", "").strip()
    candidates = [explicit] if explicit else []
    candidates += [
        shutil.which("chromium") or "",
        shutil.which("chromium-browser") or "",
        shutil.which("google-chrome") or "",
        shutil.which("google-chrome-stable") or "",
        shutil.which("chrome") or "",
        shutil.which("msedge") or "",
    ]
    for candidate in candidates:
        if candidate and os.path.exists(candidate):
            return {"executable_path": candidate}
    return {}


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
    status: str = "evaluated"  # evaluated | vlm_failed | not_run


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

    def check(self, rid: int, passed: bool, reason: str = ""):
        """记录一个确定性(dom/state)判定结果。"""
        self.results.append(ItemResult(rid, "det", int(bool(passed)), reason, "", "evaluated"))

    def vlm_fail(self, rid: int, reason: str = ""):
        """记录 VLM 未完成。-100 表示没有得到视觉判定，不等价于视觉不通过。"""
        self.results.append(ItemResult(rid, "vlm", VLM_FAIL_SCORE, reason, "", "vlm_failed"))

    async def vlm(self, rid: int, question: str):
        """截图 -> VLM yes/no；截图存到 UT_IMAGE_DIR；调用失败(API/超时)记 VLM_FAIL_SCORE。"""
        self._n += 1
        png = await self.page.screenshot(type="png")
        img_path = ""
        try:
            os.makedirs(self._img_dir, exist_ok=True)
            img_path = os.path.join(self._img_dir, f"{self._prefix}_r{rid}_{self._n}.png")
            with open(img_path, "wb") as f:
                f.write(png)
        except Exception as e:
            img_path = f"(save-failed: {e!r})"
        ok, reason = await self._vlm_fn(question, base64.b64encode(png).decode())
        score = VLM_FAIL_SCORE if ok is None else (1 if ok else 0)
        status = "vlm_failed" if ok is None else "evaluated"
        self.results.append(ItemResult(rid, "vlm", score, reason, img_path, status))

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
    if _ark_client is None:
        from openai import OpenAI
        _ark_client = OpenAI(base_url=ARK_BASE_URL, api_key=ARK_API_KEY)
    return _ark_client


def _ark_vlm_sync(question: str, image_b64: str):
    """同步调用 ARK 视觉模型，让它对当前截图回答 yes/no。返回 (True/False, 理由)。"""
    client = _get_ark_client()
    prompt = (question.strip() +
              "\n\n只判断画面，第一行严格输出 YES 或 NO，第二行用一句话给理由。")
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
    # 确定性项默认 0；视觉项默认 -100，明确区分“未执行/调用失败”和“看图后判不通过”。
    func_texts, vlm_texts, id2text = _rubric_index(module)
    rep.func_score = {t: 0 for t in func_texts}
    rep.vlm_score = {t: VLM_FAIL_SCORE for t in vlm_texts}
    target_path = Path(target).resolve()
    # Build outputs are commonly all named "dist". Include the owning sample
    # directory in the screenshot prefix so parallel evaluator runs cannot
    # overwrite one another's VLM evidence.
    if target_path.is_file():
        leaf = target_path.parent.name or target_path.stem or "target"
        owner = target_path.parent.parent.name if leaf in BUILD_OUTPUT_DIRS else target_path.parent.name
    else:
        leaf = target_path.name or "target"
        owner = target_path.parent.name if leaf in BUILD_OUTPUT_DIRS else leaf
    _name = f"{owner}_{leaf}" if owner and owner != leaf else leaf
    prefix = "".join(c if (c.isalnum() or c in "-_.") else "_" for c in _name) or "t"
    try:
        static_root, index_name = resolve_target(target, build=build)
    except Exception as e:
        rep.layer1_detail = {"resolve_or_build_error": str(e)}
        return rep

    console_errors: list[str] = []
    page_errors: list[str] = []
    request_failures: list[str] = []
    navigation_error = ""
    ctx = None

    try:
        with serve_directory(static_root) as base_url:
            async with async_playwright() as p:
                browser = await p.chromium.launch(args=["--use-gl=swiftshader", "--enable-webgl"], **_chromium_launch_kwargs())
                page = await browser.new_page(viewport=VIEWPORT)
                page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
                page.on("pageerror", lambda exc: page_errors.append(str(exc)))
                page.on(
                    "requestfailed",
                    lambda req: request_failures.append(
                        f"{req.method} {req.url} :: {req.failure or 'request failed'}"
                    ),
                )

                try:
                    await page.goto(
                        f"{base_url}/{index_name}",
                        wait_until="domcontentloaded",
                        timeout=20000,
                    )
                except Exception as exc:
                    # A load timeout or a secondary resource error is diagnostic only
                    # if the document itself still rendered usable content.
                    navigation_error = repr(exc)

                await page.wait_for_timeout(1200)

                try:
                    has_body = await page.evaluate(
                        """() => {
                          if (!document.body) return false;
                          const text = (document.body.innerText || '').trim();
                          const visual = document.querySelectorAll('canvas,svg,img,video').length;
                          const interactive = document.querySelectorAll('button,a,input,select,[role=button]').length;
                          return text.length > 0 || visual > 0 || interactive > 0;
                        }"""
                    )
                except Exception:
                    has_body = False

                # Layer1 is a *loadability* gate, not a "zero console errors" gate.
                # Console/page errors are retained as diagnostics.  Only a truly
                # blank/unavailable document or a hard navigation failure blocks
                # the rubric runner.
                nav_fatal = bool(
                    navigation_error
                    and any(token in navigation_error for token in (
                        "ERR_CONNECTION_REFUSED",
                        "ERR_NAME_NOT_RESOLVED",
                        "ERR_FILE_NOT_FOUND",
                        "ERR_BLOCKED_BY_ADMINISTRATOR",
                    ))
                )
                rep.layer1_pass = bool(has_body) and not nav_fatal
                rep.layer1_detail = {
                    "has_content": bool(has_body),
                    "navigation_error": navigation_error,
                    "console_errors": console_errors[-50:],
                    "page_errors": page_errors[-50:],
                    "request_failures": request_failures[-50:],
                    "fatal_console_errors": (
                        ([navigation_error] if navigation_error else [])
                        + [f"pageerror: {e}" for e in page_errors[-10:]]
                        if not has_body else []
                    ),
                }

                if not rep.layer1_pass:
                    await browser.close()
                    return rep

                ctx = Ctx(page, vlm_fn, UT_IMAGE_DIR, prefix)
                try:
                    await module.run_checks(page, ctx)
                except Exception as exc:
                    rep.layer1_detail["run_checks_error"] = repr(exc)
                    # A module-level failure must not suppress visual evaluation.
                    fallback = getattr(module, "_fallback_vlm_checks", None)
                    if fallback is not None:
                        try:
                            await fallback(page, ctx)
                        except Exception as vexc:
                            rep.layer1_detail["vlm_fallback_error"] = repr(vexc)

                # Guarantee that missing visual items remain explicit -100 items
                # instead of silently disappearing from evidence.
                done_ids = {getattr(item, "id", None) for item in ctx.results}
                for rubric in getattr(module, "RUBRIC", []) or []:
                    rid = rubric.get("id")
                    if rubric.get("kind") == "vlm" and rid not in done_ids:
                        ctx.vlm_fail(int(rid), "visual rubric was not completed")

                rep.items = [vars(r) for r in ctx.results]
                await browser.close()

    except Exception as exc:
        # Browser/Playwright infrastructure failures must still produce valid JSON.
        rep.layer1_pass = False
        rep.layer1_detail = {
            "has_content": False,
            "infrastructure_error": repr(exc),
            "console_errors": console_errors[-50:],
            "page_errors": page_errors[-50:],
            "request_failures": request_failures[-50:],
            "fatal_console_errors": [f"infrastructure: {type(exc).__name__}: {exc}"],
        }
        return rep

    # 用实际判定结果覆盖默认值：det 1/0；vlm 1/0/-100(调用失败)
    for r in ctx.results:
        key = id2text.get(r.id, str(r.id))
        (rep.vlm_score if r.kind == "vlm" else rep.func_score)[key] = r.score
    return rep


def main(module):
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", "--target_dir", "--target-dir", dest="target", required=True)
    ap.add_argument("--build", action="store_true")
    args = ap.parse_args()
    rep = asyncio.run(run_sample(module, args.target, build=args.build))
    print(json.dumps(asdict(rep), ensure_ascii=False, indent=2))