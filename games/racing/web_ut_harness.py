"""Web 单元测试 harness —— 所有「生成的 Playwright 脚本」样本都跑在这上面。

标注人员对每条 prompt 只需产出:
    RUBRIC     : list[dict]  每条 rubric 及其判定方式 {id, text, kind: dom|state|vlm}
    run_checks : async(page, ctx) -> None   用 ctx.check / ctx.vlm 记录逐条结果

本文件是**自包含**的（不依赖其它测试文件）：把通用脏活全写在这里——
    解析/构建产物(build) -> 起本地静态服务(serve) -> 开浏览器加载 ->
    Layer1 硬门槛 -> 读状态钩子 -> VLM 视觉判定 -> 分别汇总 func_score / vlm_score。
这样确定性脚本(dom/state)便宜可复现，视觉项(vlm)统一走截图问模型。

依赖:
    pip install playwright openai pillow && playwright install chromium

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
import re
import socketserver
import shutil
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
# 受控配置：以下 VLM 网关参数由验收方统一维护，列入“禁止修改文件/字段清单”。
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
def _find_index_dir(root: Path, prefer_build: bool = True) -> Path | None:
    """找到可直接静态服务的入口目录。

    对 package/Vite 工程优先选择 dist/build/out，避免把引用 ``/src/main.tsx``
    的开发 ``index.html`` 当成生产静态页直接交给浏览器。
    """
    candidates = []
    if prefer_build:
        candidates.extend(root / d for d in BUILD_OUTPUT_DIRS)
        candidates.append(root)
    else:
        candidates.append(root)
        candidates.extend(root / d for d in BUILD_OUTPUT_DIRS)
    for candidate in candidates:
        if (candidate / "index.html").is_file():
            return candidate
    return None


def _resolve_cli(name: str) -> str:
    """跨平台解析 npm/pnpm/yarn。Windows 上优先解析 *.cmd，避免 WinError 2。"""
    candidates = [name]
    if os.name == "nt":
        candidates = [f"{name}.cmd", f"{name}.exe", f"{name}.bat", name]
    for candidate in candidates:
        resolved = shutil.which(candidate)
        if resolved:
            return resolved
    raise FileNotFoundError(f"未找到构建工具 {name!r}；请安装 Node.js/对应包管理器并加入 PATH")


def _existing_build_dir(repo: Path) -> Path | None:
    return next((repo / d for d in BUILD_OUTPUT_DIRS if (repo / d / "index.html").is_file()), None)


def _redact_local_paths(value: object) -> str:
    """Remove machine-specific absolute paths before they enter public results."""
    text = str(value or "")
    win = re.compile(r"(?i)\b[A-Z]:\\(?:[^\\\s\"'<>|]+\\)*[^\\\s\"'<>|]+")
    posix = re.compile(r"(?<![\w:])/(?:home|Users|mnt|tmp|private|var|opt)/[^\s\"'<>]+")

    def repl(match: re.Match[str]) -> str:
        normalized = match.group(0).replace("\\", "/").rstrip(".,;:)")
        name = normalized.rsplit("/", 1)[-1] or "path"
        return f"<local-path>/{name}"

    text = win.sub(repl, text)
    text = posix.sub(repl, text)
    return text


def _build_failure_summary(exc: Exception) -> str:
    """Compact, portable failure summary for results.json."""
    if isinstance(exc, subprocess.CalledProcessError):
        raw_cmd = exc.cmd if isinstance(exc.cmd, (list, tuple)) else [exc.cmd]
        cmd = []
        for index, part in enumerate(raw_cmd):
            value = str(part)
            if index == 0:
                value = Path(value.replace("\\", "/")).name or value
            cmd.append(value)
        output = exc.stdout or b""
        if isinstance(output, bytes):
            output = output.decode("utf-8", errors="replace")
        tail = _redact_local_paths(output).strip().replace("\n", " ")[-800:]
        base = f"command failed (exit={exc.returncode}, command={' '.join(cmd)})"
        return f"{base}: {tail}" if tail else base
    if isinstance(exc, subprocess.TimeoutExpired):
        raw_cmd = exc.cmd if isinstance(exc.cmd, (list, tuple)) else [exc.cmd]
        cmd = [Path(str(raw_cmd[0]).replace("\\", "/")).name, *map(str, raw_cmd[1:])]
        return f"command timed out after {exc.timeout}s (command={' '.join(cmd)})"
    return _redact_local_paths(f"{type(exc).__name__}: {exc}")


def build_repo(repo: Path) -> Path:
    """对前端 repo 执行安装 + 构建，并返回含 index.html 的构建目录。

    Windows 下 npm 通常实际是 npm.cmd；这里先用 shutil.which 解析真实路径，
    避免直接 subprocess(["npm", ...]) 触发 WinError 2。
    """
    pm = "pnpm" if (repo / "pnpm-lock.yaml").exists() else \
         "yarn" if (repo / "yarn.lock").exists() else "npm"
    pm_exe = _resolve_cli(pm)
    install_args = {
        "npm": ["install", "--no-audit", "--no-fund"],
        "yarn": ["install"],
        "pnpm": ["install"],
    }[pm]
    install_cmd = [pm_exe, *install_args]
    build_cmd = [pm_exe, "run", "build"]

    env = dict(os.environ)
    # npm 网络不可达时尽快失败并回退已有 dist，避免一个样本卡满 10 分钟。
    env.setdefault("npm_config_fetch_retries", "0")
    env.setdefault("npm_config_fetch_timeout", "20000")
    env.setdefault("npm_config_fetch_retry_maxtimeout", "20000")

    # 已有 node_modules 时先直接执行正式 build。验收目标是证明 npm build 真能成功，
    # 并不要求每次都重新联网安装依赖；这样在干净但离线的评测机上也不会因为
    # npm registry 不可达把一个本可正常构建的项目误判为 R38 失败。
    if (repo / "node_modules").is_dir():
        try:
            subprocess.run(
                build_cmd, cwd=str(repo), env=env, check=True, timeout=BUILD_TIMEOUT,
                stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
            )
            out = _find_index_dir(repo, prefer_build=True)
            if out is None:
                raise RuntimeError("构建完成但未找到 index.html（检查 dist/build 输出目录）")
            return out
        except Exception:
            # 本地依赖损坏或不完整时再走安装 + build 的标准恢复路径。
            pass

    for cmd in (install_cmd, build_cmd):
        subprocess.run(
            cmd, cwd=str(repo), env=env, check=True, timeout=BUILD_TIMEOUT,
            stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
        )

    out = _find_index_dir(repo, prefer_build=True)
    if out is None:
        raise RuntimeError("构建完成但未找到 index.html（检查 dist/build 输出目录）")
    return out


def resolve_target(target: str, build: bool = False) -> tuple[Path, str, bool, str]:
    """把用户给的 target 解析成 (要 serve 的静态目录, 入口 html 文件名)。"""
    p = Path(target).resolve()
    if not p.exists():
        raise FileNotFoundError(target)

    # 1) 单个 html 文件：serve 它所在目录
    if p.is_file():
        if p.suffix.lower() not in (".html", ".htm"):
            raise ValueError(f"文件不是 html: {p}")
        return p.parent, p.name, False, "single html target; build not requested"

    # 2) package 工程：显式 --build 时总是重建；否则优先使用已有
    # dist/build/out。若只有开发 index.html，则自动构建，而不是直接把 TSX
    # 入口交给普通静态服务器。
    has_pkg = (p / "package.json").exists()
    if has_pkg:
        if build:
            try:
                out = build_repo(p)
                return out, "index.html", True, "npm/vite build succeeded"
            except Exception as exc:
                # Build 工具缺失/构建失败不能把整套功能验收都抹成 0。
                # 若已有真实 dist/build/out，则继续跑产品验收，并仅让 build rubric 失败。
                built = _existing_build_dir(p)
                if built is not None:
                    detail = f"build failed; using existing {built.name}: {_build_failure_summary(exc)}"
                    return built, "index.html", False, detail
                raise
        built = _existing_build_dir(p)
        if built is not None:
            return built, "index.html", False, "build not requested; using existing build output"
        out = build_repo(p)
        return out, "index.html", True, "no existing build output; npm/vite build succeeded"

    # 3) 非 package 的纯静态目录可直接使用自身 index.html。
    idx = _find_index_dir(p, prefer_build=False)
    if idx is not None:
        return idx, "index.html", False, "static directory target; build not requested"

    raise RuntimeError(f"无法解析前端产物（既无可用静态 index.html 也无 package.json）: {p}")


def _inline_local_entry(entry: Path, static_root: Path) -> str:
    """Inline only local JS/CSS assets for managed-browser URL-block fallback.

    Normal evaluation still uses the real HTTP-served build output. This path is
    used only when Chromium policy blocks localhost navigation; it executes the
    same submitted dist assets rather than substituting a different app.
    """
    html = entry.read_text(encoding="utf-8")

    script_re = re.compile(
        r'<script(?P<before>[^>]*?)\bsrc=["\'](?P<src>[^"\']+)["\'](?P<after>[^>]*)>\s*</script>',
        re.IGNORECASE,
    )
    style_re = re.compile(
        r'<link(?P<attrs>[^>]*?)\bhref=["\'](?P<href>[^"\']+)["\'](?P<tail>[^>]*)>',
        re.IGNORECASE,
    )

    def resolve_local(ref: str) -> Path | None:
        if re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', ref) or ref.startswith('//'):
            return None
        relative = ref.split('?', 1)[0].split('#', 1)[0].lstrip('/')
        candidate = (static_root / relative).resolve()
        try:
            candidate.relative_to(static_root.resolve())
        except ValueError:
            return None
        return candidate if candidate.is_file() else None

    def script_sub(match: re.Match[str]) -> str:
        asset = resolve_local(match.group('src'))
        if asset is None:
            return match.group(0)
        attrs = (match.group('before') + match.group('after'))
        attrs = re.sub(r'\s+crossorigin(?:=["\'][^"\']*["\'])?', '', attrs, flags=re.I)
        code = asset.read_text(encoding='utf-8', errors='replace').replace('</script>', '<\\/script>')
        return f'<script{attrs}>{code}</script>'

    def style_sub(match: re.Match[str]) -> str:
        attrs = match.group('attrs') + match.group('tail')
        if not re.search(r'\brel=["\']stylesheet["\']', attrs, flags=re.I):
            return match.group(0)
        asset = resolve_local(match.group('href'))
        if asset is None:
            return match.group(0)
        css = asset.read_text(encoding='utf-8', errors='replace').replace('</style>', '<\\/style>')
        return f'<style data-inlined-from="{match.group("href")}">{css}</style>'

    html = script_re.sub(script_sub, html)
    html = style_re.sub(style_sub, html)
    return html


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
        yield f"http://localhost:{real_port}"
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
    image: str = ""       # 仅 vlm 项输出；确定性项不得输出 image

    def as_result_dict(self) -> dict:
        value = {"id": self.id, "kind": self.kind, "score": self.score, "reason": self.reason}
        if self.kind == "vlm" and self.image and not self.image.startswith("(save-failed:"):
            value["image"] = self.image
        return value


@dataclass
class SampleReport:
    layer1_pass: bool = False
    layer1_detail: dict = field(default_factory=dict)
    items: list = field(default_factory=list)
    func_score: dict = field(default_factory=dict)  # {rubric原文: 1/0}（dom+state 确定性项）
    vlm_score: dict = field(default_factory=dict)   # {rubric原文: 1/0/-100}（vlm；-100=调用失败）


class Ctx:
    """给 run_checks 用的记录器 + 工具。"""
    def __init__(self, page, vlm_fn, img_dir=UT_IMAGE_DIR, prefix="t", target_path=None, static_root=None, build_requested=False, build_succeeded=False, build_detail="", rubric_texts=None):
        self.page = page
        self.target_path = Path(target_path).resolve() if target_path else None
        self.static_root = Path(static_root).resolve() if static_root else None
        self.build_requested = bool(build_requested)
        self.build_succeeded = bool(build_succeeded)
        self.build_detail = str(build_detail or "")
        self._vlm_fn = vlm_fn
        self.results: list[ItemResult] = []
        self._img_dir = img_dir
        self._prefix = prefix
        self._n = 0
        self._rubric_texts = dict(rubric_texts or {})

    def _reason(self, rid: int, status: str, observation: str = "", *, visual: bool = False) -> str:
        requirement = str(self._rubric_texts.get(rid) or f"验收项 R{rid}").strip().rstrip("。")
        detail = str(observation or "").strip()
        if visual and status == "未完成":
            prefix = f"未完成：视觉模型未能完成“{requirement}”的判定。"
            return prefix + (f" 调用信息：{detail}" if detail else "")
        prefix = f"{status}：实际操作与观测{'满足' if status == '通过' else '未满足'}“{requirement}”的要求。"
        return prefix + (f" 观测记录：{detail}" if detail else "")

    def check(self, rid: int, passed: bool, reason: str = ""):
        """记录一个确定性(dom/state)判定结果，并输出可审计的自然语言原因。"""
        self.results.append(ItemResult(rid, "det", int(bool(passed)), self._reason(rid, "通过" if passed else "未通过", reason)))

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
        status = "未完成" if ok is None else ("通过" if ok else "未通过")
        self.results.append(ItemResult(rid, "vlm", score, self._reason(rid, status, reason, visual=True), img_path))

    async def vlm_png(self, rid: int, question: str, png: bytes,
                      filename_suffix: str = "evidence"):
        """使用调用方准备的 PNG 证据图进行 VLM 判定。"""
        self._n += 1
        img_path = ""
        try:
            os.makedirs(self._img_dir, exist_ok=True)
            safe_suffix = "".join(
                c if (c.isalnum() or c in "-_") else "_"
                for c in filename_suffix
            ) or "evidence"
            img_path = os.path.join(
                self._img_dir,
                f"{self._prefix}_r{rid}_{self._n}_{safe_suffix}.png",
            )
            with open(img_path, "wb") as f:
                f.write(png)
        except Exception as e:
            img_path = f"(save-failed: {e!r})"
        ok, reason = await self._vlm_fn(question, base64.b64encode(png).decode())
        score = VLM_FAIL_SCORE if ok is None else (1 if ok else 0)
        status = "未完成" if ok is None else ("通过" if ok else "未通过")
        self.results.append(ItemResult(rid, "vlm", score, self._reason(rid, status, reason, visual=True), img_path))

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
        if not ARK_API_KEY:
            raise RuntimeError("ARK_API_KEY environment variable is not configured")
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
def _system_chromium_executable() -> str | None:
    """查找系统 Chrome/Edge；兼容 Windows 常见安装目录。"""
    names = ("chromium", "chromium-browser", "google-chrome", "google-chrome-stable", "chrome", "msedge")
    for name in names:
        found = shutil.which(name)
        if found:
            return found
    if os.name == "nt":
        roots = [
            os.getenv("LOCALAPPDATA", ""),
            os.getenv("PROGRAMFILES", ""),
            os.getenv("PROGRAMFILES(X86)", ""),
        ]
        rels = [
            Path("Google/Chrome/Application/chrome.exe"),
            Path("Microsoft/Edge/Application/msedge.exe"),
            Path("Chromium/Application/chrome.exe"),
        ]
        for root in roots:
            if not root:
                continue
            for rel in rels:
                candidate = Path(root) / rel
                if candidate.is_file():
                    return str(candidate)
    return None


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
    # -100 表示视觉判定未完成（包括 Layer1 失败导致根本未调用 VLM），
    # 0 只保留给“VLM 实际看过证据后判定不通过”。
    rep.vlm_score = {t: VLM_FAIL_SCORE for t in vlm_texts}
    target_path = Path(target)
    # Use the sample directory name for evidence files because every submitted
    # project exposes the same dist/index.html basename.
    if target_path.suffix.lower() in {".html", ".htm"}:
        parent = target_path.parent
        _name = parent.parent.name if parent.name in {"dist", "build", "out"} else parent.name
    else:
        _name = target_path.name
    _name = _name or "target"
    prefix = "".join(c if (c.isalnum() or c in "-_.") else "_" for c in _name) or "t"
    try:
        static_root, index_name, build_succeeded, build_detail = resolve_target(target, build=build)
    except Exception as e:
        rep.layer1_detail = {"loadable": False, "resolve_or_build_error": str(e)}
        return rep

    console_errors: list[str] = []
    with serve_directory(static_root) as base_url:
        async with async_playwright() as p:
            launch_args = ["--use-angle=swiftshader", "--use-gl=angle", "--enable-webgl", "--ignore-gpu-blocklist", "--enable-unsafe-swiftshader", "--no-sandbox", "--disable-dev-shm-usage"]
            headless = os.getenv("PLAYWRIGHT_HEADLESS", "1").lower() not in {"0", "false", "no"}
            preferred_chromium = os.getenv("PLAYWRIGHT_CHROMIUM_EXECUTABLE")
            if preferred_chromium:
                try:
                    browser = await p.chromium.launch(executable_path=preferred_chromium, headless=headless, args=launch_args)
                    rep.layer1_detail["browser_fallback"] = preferred_chromium
                except Exception as preferred_error:
                    rep.layer1_detail = {"loadable": False, "browser_launch_error": str(preferred_error), "browser_fallback": preferred_chromium}
                    return rep
            else:
                try:
                    browser = await p.chromium.launch(headless=headless, args=launch_args)
                except Exception as launch_error:
                    # Playwright Python 包存在但其托管 Chromium 未下载时，优先回退到系统 Chromium。
                    system_chromium = _system_chromium_executable()
                    if not system_chromium:
                        rep.layer1_detail = {"loadable": False, "browser_launch_error": str(launch_error)}
                        return rep
                    try:
                        browser = await p.chromium.launch(executable_path=system_chromium, headless=headless, args=launch_args)
                        rep.layer1_detail["browser_fallback"] = system_chromium
                    except Exception as fallback_error:
                        rep.layer1_detail = {
                            "loadable": False,
                            "browser_launch_error": str(launch_error),
                            "browser_fallback_error": str(fallback_error),
                            "browser_fallback": system_chromium,
                        }
                        return rep
            context = await browser.new_context(viewport=VIEWPORT)
            page = await context.new_page()
            await page.add_init_script("""
            (() => {
              const observation = {
                rafRequested: 0,
                rafExecuted: 0,
                rafActive: new Set(),
                rafMaxActive: 0,
                listenerAdds: Object.create(null),
                listenerRemoves: Object.create(null),
                webglContexts: 0,
                canvas2dContexts: 0,
                timeoutActive: new Set(),
                intervalActive: new Set(),
                timeoutCreated: 0,
                intervalCreated: 0,
                resources: {
                  buffer: {created:0, deleted:0, active:0},
                  texture: {created:0, deleted:0, active:0},
                  shader: {created:0, deleted:0, active:0},
                  program: {created:0, deleted:0, active:0},
                  framebuffer: {created:0, deleted:0, active:0}
                }
              };

              const originalRAF = window.requestAnimationFrame.bind(window);
              const originalCancelRAF = window.cancelAnimationFrame.bind(window);
              window.requestAnimationFrame = callback => {
                observation.rafRequested += 1;
                let requestId = 0;
                requestId = originalRAF(timestamp => {
                  observation.rafActive.delete(requestId);
                  observation.rafExecuted += 1;
                  callback(timestamp);
                });
                observation.rafActive.add(requestId);
                observation.rafMaxActive = Math.max(
                  observation.rafMaxActive,
                  observation.rafActive.size
                );
                return requestId;
              };
              window.cancelAnimationFrame = requestId => {
                observation.rafActive.delete(requestId);
                return originalCancelRAF(requestId);
              };

              const originalSetTimeout = window.setTimeout.bind(window);
              const originalClearTimeout = window.clearTimeout.bind(window);
              const originalSetInterval = window.setInterval.bind(window);
              const originalClearInterval = window.clearInterval.bind(window);
              window.setTimeout = (callback, delay, ...args) => {
                observation.timeoutCreated += 1;
                let timerId = 0;
                const wrapped = (...cbArgs) => {
                  observation.timeoutActive.delete(timerId);
                  if (typeof callback === 'function') return callback(...cbArgs);
                  return Function(String(callback))();
                };
                timerId = originalSetTimeout(wrapped, delay, ...args);
                observation.timeoutActive.add(timerId);
                return timerId;
              };
              window.clearTimeout = timerId => {
                observation.timeoutActive.delete(timerId);
                return originalClearTimeout(timerId);
              };
              window.setInterval = (callback, delay, ...args) => {
                observation.intervalCreated += 1;
                const timerId = originalSetInterval(callback, delay, ...args);
                observation.intervalActive.add(timerId);
                return timerId;
              };
              window.clearInterval = timerId => {
                observation.intervalActive.delete(timerId);
                return originalClearInterval(timerId);
              };

              const originalAdd = EventTarget.prototype.addEventListener;
              const originalRemove = EventTarget.prototype.removeEventListener;
              const targetIds = new WeakMap();
              const listenerIds = new WeakMap();
              let nextTargetId = 1;
              let nextListenerId = 1;
              const activeByType = Object.create(null);
              const getWeakId = (map, value, kind) => {
                if ((typeof value !== 'object' && typeof value !== 'function') || value === null) return null;
                let id = map.get(value);
                if (!id) {
                  id = kind === 'target' ? nextTargetId++ : nextListenerId++;
                  map.set(value, id);
                }
                return id;
              };
              const captureOf = options => typeof options === 'boolean' ? options : !!(options && options.capture);
              const listenerKey = (target, listener, options) => {
                const targetId = getWeakId(targetIds, target, 'target');
                const listenerId = getWeakId(listenerIds, listener, 'listener');
                if (targetId === null || listenerId === null) return null;
                return `${targetId}:${listenerId}:${captureOf(options) ? 1 : 0}`;
              };
              EventTarget.prototype.addEventListener = function(type, listener, options) {
                const result = originalAdd.call(this, type, listener, options);
                observation.listenerAdds[type] = (observation.listenerAdds[type] || 0) + 1;
                const key = listenerKey(this, listener, options);
                if (key !== null) {
                  if (!activeByType[type]) activeByType[type] = new Set();
                  activeByType[type].add(key); // 浏览器对相同 target/type/listener/capture 去重
                }
                return result;
              };
              EventTarget.prototype.removeEventListener = function(type, listener, options) {
                const result = originalRemove.call(this, type, listener, options);
                observation.listenerRemoves[type] = (observation.listenerRemoves[type] || 0) + 1;
                const key = listenerKey(this, listener, options);
                if (key !== null && activeByType[type]) activeByType[type].delete(key);
                return result;
              };

              const originalGetContext = HTMLCanvasElement.prototype.getContext;
              HTMLCanvasElement.prototype.getContext = function(type, ...args) {
                const context = originalGetContext.call(this, type, ...args);
                if (context && (type === 'webgl' || type === 'webgl2' || type === 'experimental-webgl')) {
                  observation.webglContexts += 1;
                } else if (context && type === '2d') {
                  observation.canvas2dContexts += 1;
                }
                return context;
              };

              const wrapGLResources = proto => {
                if (!proto || proto.__evaluatorResourceWrapped) return;
                Object.defineProperty(proto, '__evaluatorResourceWrapped', {value:true});
                const pairs = [
                  ['buffer','createBuffer','deleteBuffer'],
                  ['texture','createTexture','deleteTexture'],
                  ['shader','createShader','deleteShader'],
                  ['program','createProgram','deleteProgram'],
                  ['framebuffer','createFramebuffer','deleteFramebuffer']
                ];
                for (const [kind, createName, deleteName] of pairs) {
                  const createdObjects = new WeakSet();
                  const createOriginal = proto[createName];
                  const deleteOriginal = proto[deleteName];
                  if (typeof createOriginal === 'function') {
                    proto[createName] = function(...args) {
                      const value = createOriginal.apply(this, args);
                      if (value && !createdObjects.has(value)) {
                        createdObjects.add(value);
                        observation.resources[kind].created += 1;
                        observation.resources[kind].active += 1;
                      }
                      return value;
                    };
                  }
                  if (typeof deleteOriginal === 'function') {
                    proto[deleteName] = function(value, ...args) {
                      if (value && createdObjects.has(value)) {
                        createdObjects.delete(value);
                        observation.resources[kind].deleted += 1;
                        observation.resources[kind].active = Math.max(0, observation.resources[kind].active - 1);
                      }
                      return deleteOriginal.call(this, value, ...args);
                    };
                  }
                }
              };
              wrapGLResources(window.WebGLRenderingContext && WebGLRenderingContext.prototype);
              wrapGLResources(window.WebGL2RenderingContext && WebGL2RenderingContext.prototype);

              window.__evaluatorObservation = {
                getState() {
                  const listeners = {};
                  const types = new Set([
                    ...Object.keys(observation.listenerAdds),
                    ...Object.keys(observation.listenerRemoves)
                  ]);
                  for (const type of types) {
                    listeners[type] = {
                      added: observation.listenerAdds[type] || 0,
                      removed: observation.listenerRemoves[type] || 0,
                      active: activeByType[type] ? activeByType[type].size : 0,
                      net: activeByType[type] ? activeByType[type].size : 0
                    };
                  }
                  return {
                    rafRequested: observation.rafRequested,
                    rafExecuted: observation.rafExecuted,
                    rafActive: observation.rafActive.size,
                    rafMaxActive: observation.rafMaxActive,
                    listeners,
                    webglContexts: observation.webglContexts,
                    canvas2dContexts: observation.canvas2dContexts,
                    timers: {
                      timeoutsCreated: observation.timeoutCreated,
                      intervalsCreated: observation.intervalCreated,
                      activeTimeouts: observation.timeoutActive.size,
                      activeIntervals: observation.intervalActive.size
                    },
                    webglResources: JSON.parse(JSON.stringify(observation.resources))
                  };
                }
              };
            })();
            """)
            page.on("console", lambda m: console_errors.append(m.text)
                    if m.type == "error" else None)
            page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))

            navigation_fallback = None
            target_url = f"{base_url}/{index_name}"
            try:
                await page.goto(target_url, wait_until="load")
            except Exception as navigation_error:
                # 受管 Chromium 可能通过 URLBlocklist 禁止一切 http/file/data URL。
                # 仅在这种浏览器策略错误下重用已经解析出的标准 dist/index.html；
                # 正常评测环境仍始终走真实 HTTP 构建产物。
                fallback_entry = static_root / index_name
                if "ERR_BLOCKED_BY_ADMINISTRATOR" in str(navigation_error) and fallback_entry.is_file():
                    try:
                        await page.wait_for_timeout(150)
                        await page.set_content(_inline_local_entry(fallback_entry, static_root), wait_until="load")
                        navigation_fallback = f"{static_root.name}/{index_name}:set_content (managed-browser URL block)"
                    except Exception as fallback_error:
                        rep.layer1_pass = False
                        rep.layer1_detail = {
                            **rep.layer1_detail,
                            "loadable": False,
                            "navigation_error": str(navigation_error),
                            "fallback_error": str(fallback_error),
                        }
                        await browser.close()
                        return rep
                else:
                    rep.layer1_pass = False
                    rep.layer1_detail = {**rep.layer1_detail, "loadable": False, "navigation_error": str(navigation_error)}
                    await browser.close()
                    return rep
            await page.wait_for_timeout(2000)

            # ---- Layer 1 硬门槛 ----
            fatal = [e for e in console_errors if "favicon" not in e.lower()]
            has_body = await page.evaluate("() => document.body && document.body.innerText.length + document.querySelectorAll('canvas,svg,img').length > 0")
            rep.layer1_pass = (len(fatal) == 0) and bool(has_body)
            rep.layer1_detail = {"loadable": bool(has_body), "fatal_console_errors": fatal}
            if navigation_fallback:
                rep.layer1_detail["environment_fallback"] = navigation_fallback
            if not rep.layer1_pass:
                await browser.close()
                return rep

            # ---- 跑生成的逐条检查 ----
            ctx = Ctx(
                page, vlm_fn, UT_IMAGE_DIR, prefix,
                target_path=target, static_root=static_root, build_requested=build,
                build_succeeded=build_succeeded, build_detail=build_detail,
                rubric_texts=id2text,
            )
            rep.layer1_detail["build"] = {
                "requested": bool(build),
                "succeeded": bool(build_succeeded),
                "detail": build_detail,
            }
            ctx.environment_fallback = navigation_fallback
            ctx.product_url = target_url
            try:
                await module.run_checks(page, ctx)
            except Exception as e:
                rep.layer1_detail["run_checks_error"] = repr(e)
            rep.items = [r.as_result_dict() for r in ctx.results]
            await browser.close()

    # 用实际判定结果覆盖默认值：det 1/0；vlm 1/0/-100(调用失败)
    for r in ctx.results:
        key = id2text.get(r.id, str(r.id))
        (rep.vlm_score if r.kind == "vlm" else rep.func_score)[key] = r.score
    return rep


def main(module):
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", "--target_dir", dest="target", required=True)
    ap.add_argument("--build", action="store_true")
    args = ap.parse_args()
    rep = asyncio.run(run_sample(module, args.target, build=args.build))
    print(json.dumps(asdict(rep), ensure_ascii=False, indent=2))
