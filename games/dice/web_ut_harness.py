"""Shared Playwright harness for web_ut.py."""
from __future__ import annotations

import argparse
import asyncio
import base64
import json
import os
import re
import subprocess
import time
from dataclasses import asdict, dataclass, field
from pathlib import Path

from playwright.async_api import async_playwright

VIEWPORT = {"width": 1280, "height": 800}
BUILD_OUTPUT_DIRS = ("dist", "build", "out")
BUILD_TIMEOUT = 600
ARK_BASE_URL = os.getenv("ARK_BASE_URL", "https://ark.cn-beijing.volces.com/api/v3")
ARK_MODEL = os.getenv("ARK_VLM_MODEL", "ep-20260416114755-vvzqk")
ARK_API_KEY = os.getenv("ARK_API_KEY", "")
VLM_TIMEOUT_S = float(os.getenv("VLM_TIMEOUT_S", "120"))
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))
UT_IMAGE_DIR = Path(os.getenv("UT_IMAGE_DIR", "ut_images"))


def _find_index_dir(root: Path) -> Path | None:
    for name in BUILD_OUTPUT_DIRS:
        if (root / name / "index.html").is_file():
            return root / name
    if (root / "index.html").is_file():
        return root
    return None


def build_repo(repo: Path) -> Path:
    pm = "pnpm" if (repo / "pnpm-lock.yaml").exists() else "yarn" if (repo / "yarn.lock").exists() else "npm"
    install = {"npm": ["npm", "install", "--no-audit", "--no-fund"], "yarn": ["yarn", "install"], "pnpm": ["pnpm", "install"]}[pm]
    build = [pm, "run", "build"]
    try:
        subprocess.run(build, cwd=repo, check=True, timeout=BUILD_TIMEOUT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    except (subprocess.CalledProcessError, FileNotFoundError):
        subprocess.run(install, cwd=repo, check=True, timeout=BUILD_TIMEOUT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        subprocess.run(build, cwd=repo, check=True, timeout=BUILD_TIMEOUT, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    out = _find_index_dir(repo)
    if out is None:
        raise RuntimeError("build completed without dist/index.html")
    return out


def resolve_target(target: str, build: bool = False) -> tuple[Path, str, Path | None]:
    p = Path(target).resolve()
    if not p.exists():
        raise FileNotFoundError(target)
    if p.is_file():
        if p.suffix.lower() not in (".html", ".htm"):
            raise ValueError(f"not html: {p}")
        source = p.parent.parent if p.parent.name in BUILD_OUTPUT_DIRS and (p.parent.parent / "package.json").is_file() else None
        return p.parent, p.name, source
    has_pkg = (p / "package.json").is_file()
    idx = _find_index_dir(p)
    if has_pkg and build:
        return build_repo(p), "index.html", p
    if idx is not None:
        source = p if has_pkg else (p.parent if p.name in BUILD_OUTPUT_DIRS and (p.parent / "package.json").is_file() else None)
        return idx, "index.html", source
    if has_pkg:
        return build_repo(p), "index.html", p
    raise RuntimeError(f"cannot resolve target: {p}")


@dataclass
class ItemResult:
    id: int
    kind: str
    score: int = 0
    reason: str = ""
    image: str = ""


@dataclass
class SampleReport:
    layer1_pass: bool = False
    layer1_detail: dict = field(default_factory=dict)
    items: list = field(default_factory=list)
    func_score: dict = field(default_factory=dict)
    vlm_score: dict = field(default_factory=dict)


class Ctx:
    def __init__(self, page, vlm_fn, source_root: Path | None, rubric_texts: dict[int, str] | None = None):
        self.page = page
        self._vlm_fn = vlm_fn
        self.source_root = source_root
        self.rubric_texts = rubric_texts or {}
        self.results: list[ItemResult] = []
        self._debug_started = time.monotonic()

    def _rubric_text(self, rid: int) -> str:
        return self.rubric_texts.get(rid, f"检查点 {rid}")

    def check(self, rid: int, passed: bool, reason: str = ""):
        score = int(bool(passed))
        text = self._rubric_text(rid)
        if passed:
            evidence = f"；观测值：{reason}" if reason else ""
            natural_reason = f"通过：自动化断言确认「{text}」{evidence}。"
        else:
            failure_details = {
                11: "下注接口声明的最大 Odds 倍数不是 3，玩家可以突破提示词规定的 3× 上限。",
                29: "4、5、6、8、9、10 中至少有一个号码无法建立 Buy 注，因此六个指定号码的 Buy 功能并不完整。",
                30: "Buy 注无法在六个指定号码上完整执行命中继续工作、未命中保留以及掷出 7 后清除的流程。",
                39: "Pass Odds 的限制不正确，测试中超过平注 3 倍的追加 Odds 仍可被接受。",
                40: "Come Odds 的限制不正确，测试中超过平注 3 倍的追加 Odds 仍可被接受。",
                48: "掷出 7 后，LOW、HIGH 或 HIT ALL 仍保留之前点亮的命中进度，没有按规则全部清零。",
                57: "玩家通过真实 ROLL 路径掷出 7 时，已有下注没有全部按输注处理，出现了不应发生的筹码返还或状态保留。",
                58: "相同初始状态和相同骰点序列下，真实随机 ROLL 路径与确定性输入路径产生了不同的结算结果，说明生产路径存在分叉规则。",
            }
            detail = failure_details.get(rid, reason) if (failure_details.get(rid) or reason) else "实际运行结果与该要求不一致。"
            natural_reason = f"未通过：自动化断言发现「{text}」未满足；{detail}"
        self.results.append(ItemResult(rid, "det", score, natural_reason))
        if os.getenv("DEBUG_UT"):
            print(f"[rubric {rid}] {score} +{time.monotonic()-self._debug_started:.2f}s", flush=True)

    async def vlm(self, rid: int, question: str):
        # Always capture auditable visual evidence, even when the external VLM
        # service is unavailable. The score may fail closed, but the evidence
        # path remains valid and portable.
        png = await self.page.screenshot(type="png")
        sample = self.source_root.name if self.source_root else "target"
        image_dir = UT_IMAGE_DIR if UT_IMAGE_DIR.is_absolute() else Path.cwd() / UT_IMAGE_DIR
        image_dir.mkdir(parents=True, exist_ok=True)
        image_file = image_dir / f"{sample}_r{rid}_1.png"
        image_file.write_bytes(png)
        try:
            image_ref = str(image_file.relative_to(Path.cwd()))
        except ValueError:
            image_ref = str(image_file)
        text = self._rubric_text(rid)
        if not ARK_API_KEY:
            natural_reason = f"未评分：视觉检查「{text}」未执行，因为当前环境没有配置视觉模型 API Key；对应截图已保存在 ut_images 目录中。"
            self.results.append(ItemResult(rid, "vlm", VLM_FAIL_SCORE, natural_reason, image_ref))
            if os.getenv("DEBUG_UT"):
                print(f"[rubric {rid}] {VLM_FAIL_SCORE} +{time.monotonic()-self._debug_started:.2f}s", flush=True)
            return
        ok, reason = await self._vlm_fn(question, base64.b64encode(png).decode())
        score = VLM_FAIL_SCORE if ok is None else int(bool(ok))
        if ok is True:
            natural_reason = f"通过：视觉检查确认「{text}」。"
        elif ok is False:
            natural_reason = f"未通过：视觉检查发现「{text}」未满足。"
        else:
            natural_reason = f"未评分：视觉检查服务未返回有效结论，已保存截图用于检查「{text}」。"
        self.results.append(ItemResult(rid, "vlm", score, natural_reason, image_ref))

    async def get_state(self, hook: str = "__game"):
        return await self.page.evaluate(f"() => window.{hook}?.getState ? window.{hook}.getState() : null")


_ark_client = None


def _ark_sync(question: str, image_b64: str):
    global _ark_client
    if _ark_client is None:
        from openai import OpenAI
        _ark_client = OpenAI(base_url=ARK_BASE_URL, api_key=ARK_API_KEY)
    response = _ark_client.responses.create(model=ARK_MODEL, input=[{"role": "user", "content": [
        {"type": "input_image", "image_url": f"data:image/png;base64,{image_b64}"},
        {"type": "input_text", "text": question + "\n第一行严格输出 YES 或 NO，第二行一句话说明理由。"},
    ]}])
    text = (getattr(response, "output_text", "") or "").strip()
    token = text.lower().lstrip("*#-> \t").split(maxsplit=1)[0] if text else ""
    return token.startswith("yes") or token.startswith("是"), text or "empty-vlm-response"


async def _default_vlm(question: str, image_b64: str):
    if not ARK_API_KEY:
        return None, "vlm-fail(API key missing)"
    try:
        return await asyncio.wait_for(asyncio.to_thread(_ark_sync, question, image_b64), timeout=VLM_TIMEOUT_S)
    except asyncio.TimeoutError:
        return None, f"vlm-fail(timeout>{VLM_TIMEOUT_S}s)"
    except Exception as exc:
        return None, f"vlm-fail(API error): {exc!r}"


def _rubric_index(module):
    func, vlm, by_id = [], [], {}
    for item in getattr(module, "RUBRIC", []) or []:
        text = item.get("text", str(item.get("id")))
        by_id[item.get("id")] = text
        (vlm if item.get("kind") == "vlm" else func).append(text)
    return func, vlm, by_id


def _inline_document(static_root: Path, index_name: str) -> str:
    html = (static_root / index_name).read_text(encoding="utf-8")
    deferred_scripts: list[str] = []

    def inline_style(match):
        href = match.group(1)
        asset = (static_root / href.lstrip("./")).resolve()
        if asset.is_file() and str(asset).startswith(str(static_root.resolve())):
            return f'<style data-original-href="{href}">{asset.read_text(encoding="utf-8")}</style>'
        return match.group(0)

    def inline_script(match):
        attrs, src = match.group(1), match.group(2)
        asset = (static_root / src.lstrip("./")).resolve()
        if asset.is_file() and str(asset).startswith(str(static_root.resolve())):
            code = asset.read_text(encoding="utf-8").replace("</script>", "<\\/script>")
            # Inline scripts do not honor the external-script defer attribute.
            # Move deferred bundles to the end of body so they still execute
            # after the root DOM has been parsed.
            if re.search(r"\bdefer\b", attrs, flags=re.I):
                clean_attrs = re.sub(r"\s+defer(?:=[^\s>]+)?", "", attrs, flags=re.I)
                deferred_scripts.append(f"<script{clean_attrs}>{code}</script>")
                return ""
            return f"<script{attrs}>{code}</script>"
        return match.group(0)

    html = re.sub(r"<link[^>]+rel=[\"\']stylesheet[\"\'][^>]+href=[\"\']([^\"\']+)[\"\'][^>]*>", inline_style, html, flags=re.I)
    html = re.sub(r"<script([^>]*)src=[\"\']([^\"\']+)[\"\'][^>]*>\s*</script>", inline_script, html, flags=re.I)
    if deferred_scripts:
        payload = "\n".join(deferred_scripts)
        html = re.sub(r"</body\s*>", lambda _m: payload + "\n</body>", html, count=1, flags=re.I)
    return html


def _launch_options() -> dict:
    args = [
        "--no-sandbox", "--use-gl=swiftshader",
        "--disable-background-timer-throttling", "--disable-renderer-backgrounding",
        "--disable-backgrounding-occluded-windows",
        "--disable-features=CalculateNativeWinOcclusion,IntensiveWakeUpThrottling",
    ]
    launch: dict = {"args": args}
    browser_path = os.getenv("PLAYWRIGHT_CHROMIUM_EXECUTABLE", "")
    if not browser_path and Path("/usr/bin/chromium").exists():
        browser_path = "/usr/bin/chromium"
    if browser_path:
        launch["executable_path"] = browser_path
    return launch


async def _open_loaded_page(browser, static_root: Path, index_name: str, console_errors: list[str]):
    context = await browser.new_context(viewport=VIEWPORT)
    page = await context.new_page()
    page.on("console", lambda message: console_errors.append(message.text) if message.type == "error" else None)
    page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))
    # Inline local build assets before loading. This keeps evaluation portable in
    # browser environments that block file:// navigation while preserving the
    # exact built HTML/CSS/JavaScript content.
    html = _inline_document(static_root, index_name)
    await page.set_content(html, wait_until="load")
    await page.wait_for_timeout(700)
    return context, page


async def _dispose_context(context) -> None:
    if context is None:
        return
    try:
        await asyncio.wait_for(context.close(), timeout=4)
    except Exception:
        pass


async def _dispose_browser(browser) -> None:
    if browser is None:
        return
    try:
        await asyncio.wait_for(browser.close(), timeout=6)
        return
    except Exception:
        pass
    # Do not terminate Playwright's shared driver process here. The next phase
    # launches a separate browser instance, so a close timeout cannot leak state
    # into its scoring context.
    return


async def run_sample(module, target: str, build: bool = False, vlm_fn=_default_vlm) -> SampleReport:
    report = SampleReport()
    func_texts, vlm_texts, id_to_text = _rubric_index(module)
    report.func_score = {text: 0 for text in func_texts}
    report.vlm_score = {text: 0 for text in vlm_texts}
    try:
        static_root, index_name, source_root = resolve_target(target, build)
    except Exception as exc:
        report.layer1_detail = {"resolve_or_build_error": repr(exc)}
        return report

    browser = None
    context = None
    try:
        async with async_playwright() as playwright:
            # One browser process per sample; each layer/phase gets a fresh context.
            # This preserves state isolation while avoiding repeated Chromium launches.
            browser = await playwright.chromium.launch(**_launch_options())

            load_errors: list[str] = []
            context, page = await _open_loaded_page(browser, static_root, index_name, load_errors)
            fatal = [e for e in load_errors if "favicon" not in e.lower()]
            loadable = bool(await page.evaluate("() => !!document.body && (document.body.innerText.length > 0 || document.querySelectorAll('canvas,svg,img').length > 0)"))
            report.layer1_pass = loadable and not fatal
            report.layer1_detail = {"loadable": loadable, "fatal_console_errors": fatal}
            await _dispose_context(context)
            context = None

            if report.layer1_pass:
                ctx = Ctx(None, vlm_fn, source_root, id_to_text)
                phases = list(getattr(module, "CHECK_PHASES", []) or [])
                if not phases:
                    phases = [module.run_checks]
                phase_errors: dict[str, list[str]] = {}
                try:
                    for phase in phases:
                        phase_name = getattr(phase, "__name__", "phase")
                        if os.getenv("DEBUG_UT"):
                            print(f"[phase start] {phase_name}", flush=True)
                        current_errors: list[str] = []
                        context, page = await _open_loaded_page(browser, static_root, index_name, current_errors)
                        ctx.page = page
                        try:
                            await phase(page, ctx)
                        finally:
                            fatal_phase = [e for e in current_errors if "favicon" not in e.lower()]
                            if fatal_phase:
                                phase_errors[phase_name] = fatal_phase
                            await _dispose_context(context)
                            context = None
                            if os.getenv("DEBUG_UT"):
                                print(f"[phase end] {phase_name}", flush=True)
                except Exception as exc:
                    report.layer1_detail["run_checks_error"] = repr(exc)
                if phase_errors:
                    report.layer1_detail["phase_console_errors"] = phase_errors
                report.items = []
                for item in ctx.results:
                    payload = {"id": item.id, "kind": item.kind, "score": item.score, "reason": item.reason}
                    if item.kind == "vlm":
                        payload["image"] = item.image
                    report.items.append(payload)
                for item in ctx.results:
                    key = id_to_text.get(item.id, str(item.id))
                    (report.vlm_score if item.kind == "vlm" else report.func_score)[key] = item.score
    except Exception as exc:
        report.layer1_pass = False
        report.layer1_detail.setdefault("harness_error", repr(exc))
    finally:
        await _dispose_context(context)
        await _dispose_browser(browser)
    return report


def main(module):
    parser = argparse.ArgumentParser()
    parser.add_argument("--target", required=True)
    parser.add_argument("--build", action="store_true")
    args = parser.parse_args()
    print(json.dumps(asdict(asyncio.run(run_sample(module, args.target, args.build))), ensure_ascii=False, indent=2))
