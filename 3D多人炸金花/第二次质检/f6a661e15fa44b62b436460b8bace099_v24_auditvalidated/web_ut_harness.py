"""Web 单元测试 harness —— 所有 Playwright 验收脚本样本都跑在这上面。

标注人员对每条 prompt 只需产出:
    RUBRIC     : list[dict]  每条 rubric 及其判定方式 {id, text, kind: dom|state|vlm}
    run_checks : async(page, ctx) -> None   用 ctx.check / ctx.vlm 记录逐条结果

本文件是**自包含**的（不依赖其它测试文件）：把通用脏活全写在这里——
    解析/构建产物(build) -> 起本地静态服务(serve) -> 开浏览器加载 ->
    Layer1 硬门槛 -> 读状态钩子 -> VLM 视觉判定 -> 分别汇总 func_score / vlm_score。
确定性脚本(dom/state)保持可复现，视觉项(vlm)统一走截图判定。

依赖:
    pip install playwright && playwright install chromium

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
import sys
import hashlib
import time
import shutil
import signal
import socketserver
import subprocess
import threading
import urllib.error
import urllib.request
from dataclasses import dataclass, field, asdict
from pathlib import Path

try:
    from playwright.async_api import async_playwright
    _PLAYWRIGHT_IMPORT_ERROR = None
except Exception as exc:  # environment compatibility path
    async_playwright = None
    _PLAYWRIGHT_IMPORT_ERROR = exc

# ==============================================================================
# 配置
# ==============================================================================
VIEWPORT = {"width": 1280, "height": 800}
BUILD_OUTPUT_DIRS = ("dist", "build", "out")   # 常见构建产物目录名
BUILD_TIMEOUT = 600                            # npm install + build 上限（秒）

# ------- VLM 网关（火山 ARK Responses 接口）-------
ARK_BASE_URL = "https://ark.cn-beijing.volces.com/api/v3"
ARK_MODEL = os.getenv("ARK_VLM_MODEL", "doubao-seed-2-0-lite-260428")
ARK_API_KEY = os.getenv("ARK_API_KEY", "")
VLM_TIMEOUT_S = float(os.getenv("VLM_TIMEOUT_S", "120"))

# 每次调用 VLM 的截图都保存到这里，便于复核
UT_IMAGE_DIR = os.getenv("UT_IMAGE_DIR", "ut_images")
# VLM 调用“失败”（API 报错 / 超时）用这个分数标记，而不是 0（0=看了图判为不通过；失败=根本没判成）
VLM_FAIL_SCORE = int(os.getenv("VLM_FAIL_SCORE", "-100"))


class InfrastructureError(RuntimeError):
    """Harness/environment failure: do not score it as a product defect."""


class ProductBuildError(RuntimeError):
    """The submitted product failed its required production-build contract."""


def _child_output(exc) -> str:
    raw = getattr(exc, "stdout", None) or getattr(exc, "output", None) or getattr(exc, "stderr", None) or b""
    if isinstance(raw, bytes):
        return raw.decode("utf-8-sig", errors="replace")[-1800:]
    return str(raw)[-1800:]


def _install_failure_is_infrastructure(text: str) -> bool:
    return bool(re.search(r"ECONNRESET|ENOTFOUND|ETIMEDOUT|EAI_AGAIN|network|proxy|certificate|registry.*(?:50[0234]|unavailable)", text, re.I))


# ==============================================================================
# 产物解析 / 构建 / 静态服务（前端产物三种形态都支持）
#   1. 单文件           /path/to/index.html
#   2. 构建产物目录     /path/to/dist/     (内含 index.html + assets/*)
#   3. 未构建的 repo    /path/to/project/  (有 package.json，先 build 再评测)
# 统一做法：解析成一个静态目录 -> 起本地 HTTP server -> Playwright 走 http:// 访问。
# （React/Vite 的 dist 用 ES module + 绝对资源路径，file:// 会白屏，必须走 http。）
# ==============================================================================
def _entry_root_for(index_path: Path, output_root: Path) -> tuple[Path, str]:
    """Choose a static root for a built HTML entry, preserving Vite /assets URLs."""
    cur = index_path.parent
    output_root = output_root.resolve()
    while True:
        if (cur / "assets").is_dir():
            return cur, index_path.resolve().relative_to(cur.resolve()).as_posix()
        if cur.resolve() == output_root or cur.parent == cur:
            break
        cur = cur.parent
    return index_path.parent, index_path.name


def _find_built_entry(root: Path) -> tuple[Path, str] | None:
    """Find the actual build entry, preferring the most recently emitted HTML.

    Some legacy fixtures also contain a separately generated standalone dist/index.html.
    The system prompt requires the React/Vite build, so after `npm run build` we choose
    the newest HTML emitted under a build-output directory rather than blindly taking
    a pre-existing root/standalone entry.
    """
    candidates: list[tuple[int, Path, Path]] = []
    for d in BUILD_OUTPUT_DIRS:
        out = root / d
        if not out.is_dir():
            continue
        for idx in out.rglob("index.html"):
            if idx.is_file():
                try:
                    stamp = idx.stat().st_mtime_ns
                except OSError:
                    stamp = 0
                candidates.append((stamp, idx, out))
    if not candidates:
        return None
    _, idx, out = max(candidates, key=lambda x: (x[0], len(x[1].parts)))
    return _entry_root_for(idx, out)



def _run_child_tree(command: list[str], *, cwd: Path, env: dict[str, str], timeout: float) -> bytes:
    """Run a build/install command and terminate its whole process tree on timeout."""
    kw: dict[str, object] = {
        "cwd": str(cwd), "env": env, "stdout": subprocess.PIPE, "stderr": subprocess.STDOUT,
    }
    if os.name == "nt":
        kw["creationflags"] = getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0)
    else:
        kw["start_new_session"] = True
    proc = subprocess.Popen(command, **kw)
    try:
        out, _ = proc.communicate(timeout=timeout)
    except subprocess.TimeoutExpired as exc:
        if os.name == "nt":
            try:
                subprocess.run(["taskkill", "/PID", str(proc.pid), "/T", "/F"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=8, check=False)
            except Exception:
                proc.kill()
        else:
            try:
                os.killpg(proc.pid, signal.SIGTERM)
                proc.wait(timeout=3)
            except Exception:
                try:
                    os.killpg(proc.pid, signal.SIGKILL)
                except Exception:
                    proc.kill()
        out, _ = proc.communicate()
        raise subprocess.TimeoutExpired(command, timeout, output=out) from exc
    if proc.returncode:
        raise subprocess.CalledProcessError(proc.returncode, command, output=out)
    return out or b""


def _progress(message: str) -> None:
    """Emit human-readable progress on stderr without contaminating JSON stdout."""
    if os.getenv("WEB_UT_QUIET_PROGRESS", "").strip().lower() in {"1", "true", "yes", "on"}:
        return
    print(f"[harness] {message}", file=sys.stderr, flush=True)


def _npm_ready(node_modules: Path) -> bool:
    return all((node_modules / rel).exists() for rel in (
        ".bin/vite", ".bin/tsc", "react/package.json", "react-dom/package.json", "three/package.json"
    ))


def _dependency_signature(repo: Path) -> str | None:
    """Fingerprint only the dependency graph, not fixture name/source code.

    Sibling fixtures with the same exact dependencies can safely reuse one runtime
    node_modules tree.  Local/workspace/git dependencies are excluded because their
    resolution can depend on the fixture directory itself.
    """
    try:
        pkg = json.loads((repo / "package.json").read_text(encoding="utf-8"))
    except Exception:
        return None
    sections = {k: pkg.get(k) or {} for k in ("dependencies", "devDependencies", "optionalDependencies", "peerDependencies")}
    vals = [str(v) for sec in sections.values() for v in (sec.values() if isinstance(sec, dict) else [])]
    if any(v.startswith(("file:", "link:", "workspace:", "git+", "github:")) for v in vals):
        return None
    lock = None
    for name in ("package-lock.json", "npm-shrinkwrap.json"):
        lp = repo / name
        if lp.is_file():
            try:
                lock = hashlib.sha256(lp.read_bytes()).hexdigest()
            except OSError:
                lock = None
            break
    payload = json.dumps({"sections": sections, "lock": lock}, ensure_ascii=True, sort_keys=True, separators=(",", ":"))
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def _dependency_stamp_path(node_modules: Path) -> Path:
    return node_modules / ".web_ut_dependency_signature"


def _node_modules_matches(repo: Path, node_modules: Path) -> bool:
    """Reuse dependencies only when this harness installed the exact current graph."""
    if not _npm_ready(node_modules):
        return False
    sig = _dependency_signature(repo)
    if not sig:
        return False
    try:
        return _dependency_stamp_path(node_modules).read_text(encoding="utf-8").strip() == sig
    except OSError:
        return False


def _write_dependency_stamp(repo: Path, node_modules: Path) -> None:
    sig = _dependency_signature(repo)
    if not sig:
        return
    try:
        _dependency_stamp_path(node_modules).write_text(sig + "\n", encoding="utf-8")
    except OSError:
        pass


def _find_sibling_node_modules(repo: Path) -> Path | None:
    sig = _dependency_signature(repo)
    if not sig:
        return None
    try:
        siblings = sorted(p for p in repo.parent.iterdir() if p.is_dir() and p != repo)
    except OSError:
        return None
    for sibling in siblings:
        if _dependency_signature(sibling) != sig:
            continue
        nm = sibling / "node_modules"
        if _node_modules_matches(sibling, nm):
            return nm.resolve()
    return None


def _attach_shared_node_modules(repo: Path, source: Path) -> bool:
    """Attach a sibling dependency tree for this build; return whether a link was made."""
    dest = repo / "node_modules"
    if dest.exists() or dest.is_symlink():
        return False
    try:
        os.symlink(str(source), str(dest), target_is_directory=True)
        return True
    except Exception:
        return False


def _claim_dependency_install(repo: Path, timeout: float) -> tuple[str, Path | None]:
    """Coordinate identical dependency installs across parallel sample processes.

    Returns ("shared", node_modules) when another sibling already installed the same
    dependency graph, or ("owner", lock_dir) when this process should perform the one
    real install.  The lock is runtime-only and removed after install/failure.
    """
    sig = _dependency_signature(repo)
    if not sig:
        return "owner", None
    lock_dir = repo.parent / f".web_ut_dep_lock_{sig[:20]}"
    deadline = time.monotonic() + timeout
    announced = False
    while True:
        shared = _find_sibling_node_modules(repo)
        if shared is not None:
            return "shared", shared
        try:
            lock_dir.mkdir()
            try:
                (lock_dir / "owner.txt").write_text(
                    f"pid={os.getpid()}\nrepo={repo.name}\ntime={time.time()}\n", encoding="utf-8"
                )
            except Exception:
                pass
            return "owner", lock_dir
        except FileExistsError:
            # A killed evaluator should not leave every future run blocked forever.
            try:
                age = time.time() - lock_dir.stat().st_mtime
                if age > max(timeout + 30.0, BUILD_TIMEOUT + 30.0):
                    shutil.rmtree(lock_dir, ignore_errors=True)
                    continue
            except OSError:
                pass
            if not announced:
                _progress(f"{repo.name}: waiting for matching dependency install from another parallel sample")
                announced = True
            if time.monotonic() >= deadline:
                raise InfrastructureError(
                    f"timed out waiting {int(timeout)}s for shared dependency install"
                )
            time.sleep(0.25)
        except OSError:
            # If the runtime cannot create coordination files, fall back to a normal
            # independent install rather than making the harness platform-specific.
            return "owner", None


def _release_dependency_install_lock(lock_dir: Path | None) -> None:
    if lock_dir is not None:
        shutil.rmtree(lock_dir, ignore_errors=True)


def build_repo(repo: Path) -> tuple[Path, str]:
    """Install/build a front-end repo and return the actual production entry."""
    pm = "pnpm" if (repo / "pnpm-lock.yaml").exists() else \
         "yarn" if (repo / "yarn.lock").exists() else "npm"
    candidates = [f"{pm}.cmd", pm] if os.name == "nt" else [pm]
    pm_exe = next((shutil.which(name) for name in candidates if shutil.which(name)), None)
    if not pm_exe:
        raise InfrastructureError(f"package manager not found: {pm}")
    env = dict(os.environ)
    # A completed node_modules from an earlier run is reusable.  Re-running `npm ci`
    # for every rubric batch needlessly deletes/reinstalls the same dependency tree and
    # makes repeated validation look hung.  Only skip installation when the actual build
    # toolchain and runtime dependencies required by this delivery are present.
    node_modules = repo / "node_modules"
    attached_shared = False
    install_lock: Path | None = None
    npm_ready = _node_modules_matches(repo, node_modules)
    if pm == "npm" and not npm_ready:
        shared = _find_sibling_node_modules(repo)
        if shared is not None:
            attached_shared = _attach_shared_node_modules(repo, shared)
            npm_ready = _node_modules_matches(repo, node_modules)
            if attached_shared and npm_ready:
                _progress(f"{repo.name}: reusing dependency tree from {shared.parent.name}")
        else:
            role, payload = _claim_dependency_install(repo, BUILD_TIMEOUT)
            if role == "shared" and payload is not None:
                attached_shared = _attach_shared_node_modules(repo, payload)
                npm_ready = _node_modules_matches(repo, node_modules)
                if attached_shared and npm_ready:
                    _progress(f"{repo.name}: reusing dependency tree from {payload.parent.name}")
            else:
                install_lock = payload
                # Recheck after winning the lock: a sibling may have completed between
                # the first lookup and the mkdir race.
                shared = _find_sibling_node_modules(repo)
                if shared is not None:
                    attached_shared = _attach_shared_node_modules(repo, shared)
                    npm_ready = _node_modules_matches(repo, node_modules)
                    _release_dependency_install_lock(install_lock)
                    install_lock = None
                    if attached_shared and npm_ready:
                        _progress(f"{repo.name}: reusing dependency tree from {shared.parent.name}")
    skip_install = pm == "npm" and npm_ready
    if pm == "npm":
        if (repo / "package-lock.json").is_file():
            install = [pm_exe, "ci", "--no-audit", "--no-fund"]
        else:
            # Do not mutate clean fixtures by generating a lockfile at evaluation time.
            install = [pm_exe, "install", "--no-audit", "--no-fund", "--package-lock=false"]
        # npm's default network retries can sit silent for minutes on DNS/proxy failures.
        # Keep BUILD_TIMEOUT unchanged, but make transport failures surface promptly so
        # Runner can classify them as infrastructure errors instead of appearing frozen.
        install += [
            "--prefer-offline",
            "--fetch-retries=1",
            "--fetch-retry-mintimeout=1000",
            "--fetch-retry-maxtimeout=5000",
            "--fetch-timeout=20000",
        ]
    else:
        install = [pm_exe, "install"]
    build = [pm_exe, "run", "build"]
    if skip_install:
        _release_dependency_install_lock(install_lock)
        install_lock = None
        _progress(f"{repo.name}: dependencies ready; skipping install")
    if not skip_install:
        # Try the real install directly with --prefer-offline.  This lets a complete npm
        # cache work without registry reachability; genuine cache misses/network failures
        # are still classified from npm's own error output below.
        _progress(f"{repo.name}: installing dependencies (cache preferred)")
        try:
            try:
                _run_child_tree(install, cwd=repo, env=env, timeout=BUILD_TIMEOUT)
                if pm == "npm":
                    _write_dependency_stamp(repo, node_modules)
            except subprocess.TimeoutExpired as exc:
                raise InfrastructureError(f"dependency install timeout after {BUILD_TIMEOUT}s; process tree terminated") from exc
            except subprocess.CalledProcessError as exc:
                detail = _child_output(exc)
                if _install_failure_is_infrastructure(detail):
                    raise InfrastructureError(f"dependency install infrastructure failure: {detail}") from exc
                raise ProductBuildError(f"dependency installation failed: {detail}") from exc
        finally:
            # Release immediately after install so waiting parallel samples can attach
            # this node_modules while the owner is already building its own fixture.
            _release_dependency_install_lock(install_lock)
            install_lock = None
    _progress(f"{repo.name}: npm run build")
    try:
        _run_child_tree(build, cwd=repo, env=env, timeout=BUILD_TIMEOUT)
    except subprocess.TimeoutExpired as exc:
        raise ProductBuildError(f"npm run build timeout after {BUILD_TIMEOUT}s; process tree terminated") from exc
    except subprocess.CalledProcessError as exc:
        raise ProductBuildError(f"npm run build failed: {_child_output(exc)}") from exc
    entry = _find_built_entry(repo)
    if entry is None:
        if attached_shared:
            try: node_modules.unlink()
            except Exception: pass
        raise ProductBuildError("构建完成但未在 dist/build/out 中找到生产 index.html")
    if attached_shared:
        try:
            node_modules.unlink()
        except Exception:
            pass
    _progress(f"{repo.name}: production build ready")
    return entry


def resolve_target(target: str, build: bool = False) -> tuple[Path, str]:
    """Resolve target to (static_root, html_entry)."""
    p = Path(target).resolve()
    if not p.exists():
        raise FileNotFoundError(target)
    if p.is_file():
        if p.suffix.lower() not in (".html", ".htm"):
            raise ValueError(f"文件不是 html: {p}")
        return p.parent, p.name
    has_pkg = (p / "package.json").exists()
    # Prefer an already-built production artifact.  If this is a source repository
    # without one, package.json means it must be built before browser evaluation;
    # serving Vite/TSX source index.html as a plain static page is not a valid product run.
    built = _find_built_entry(p)
    # Match the mature-project contract: a repository with package.json is always
    # evaluated from a fresh production build.  A stale dist/ must never mask src/ edits.
    if has_pkg:
        return build_repo(p)
    if built is not None:
        return built
    if (p / "index.html").is_file():
        return p, "index.html"
    raise RuntimeError(f"无法解析前端产物（既无生产构建也无 package.json）: {p}")


def _local_asset_path(static_root: Path, entry_name: str, ref: str) -> Path | None:
    from urllib.parse import urlparse
    parsed = urlparse(ref)
    if parsed.scheme or parsed.netloc or ref.startswith("data:"):
        return None
    path = parsed.path
    if path.startswith("/"):
        candidate = static_root / path.lstrip("/")
    else:
        candidate = (static_root / entry_name).parent / path
    try:
        resolved = candidate.resolve()
        resolved.relative_to(static_root.resolve())
    except Exception:
        return None
    return resolved if resolved.is_file() else None


def _inline_built_html(static_root: Path, entry_name: str) -> str:
    """Inline local Vite JS/CSS so content transport can run without localhost."""
    html_path = (static_root / entry_name).resolve()
    html = html_path.read_text(encoding="utf-8", errors="replace")

    def css_repl(m):
        href = m.group(1)
        asset = _local_asset_path(static_root, entry_name, href)
        if asset is None:
            return m.group(0)
        css = asset.read_text(encoding="utf-8", errors="replace")
        return "<style>" + css.replace("</style", "<\\/style") + "</style>"

    html = re.sub(
        r'<link\b[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\'][^>]*>',
        css_repl, html, flags=re.I,
    )
    html = re.sub(r'<link\b[^>]*rel=["\']modulepreload["\'][^>]*>', '', html, flags=re.I)

    def js_repl(m):
        before, src, after = m.group(1), m.group(2), m.group(3)
        asset = _local_asset_path(static_root, entry_name, src)
        if asset is None:
            return m.group(0)
        js = asset.read_text(encoding="utf-8", errors="replace").replace("</script", "<\\/script")
        typ = ' type="module"' if re.search(r'type=["\']module["\']', before + after, re.I) else ''
        return f"<script{typ}>" + js + "</script>"

    html = re.sub(
        r'<script\b([^>]*)\bsrc=["\']([^"\']+)["\']([^>]*)>\s*</script>',
        js_repl, html, flags=re.I,
    )
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

    def check(self, rid: int, passed: bool, reason: str = ""):
        """记录一个确定性判定；同一 Rubric ID 只保留一个最终结果。"""
        item = ItemResult(rid, "det", int(bool(passed)), reason)
        for index, existing in enumerate(self.results):
            if existing.id == rid:
                self.results[index] = item
                return
        self.results.append(item)

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
        self.results.append(ItemResult(rid, "vlm", score, reason, img_path))

    async def vlm_png(self, rid: int, question: str, png: bytes):
        """对评估器提供的真实截图执行一次纯视觉验收，并保存同一证据图。"""
        self._n += 1
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
        self.results.append(ItemResult(rid, "vlm", score, reason, img_path))

    async def vlm_zero_many(self, rids, png: bytes, reason: str):
        """目标视觉状态无法由产品正常流程建立时，记录带截图证据的产品失败 0 分。"""
        for rid in rids:
            self._n += 1
            img_path = ""
            try:
                os.makedirs(self._img_dir, exist_ok=True)
                img_path = os.path.join(self._img_dir, f"{self._prefix}_r{rid}_{self._n}.png")
                with open(img_path, "wb") as f:
                    f.write(png)
            except Exception as e:
                img_path = f"(save-failed: {e!r})"
            self.results.append(ItemResult(int(rid), "vlm", 0, reason, img_path))

    async def vlm_many(self, requests):
        """同一真实截图并发执行多个纯视觉验收，减少串行网络等待。"""
        if not requests:
            return
        png = await self.page.screenshot(type="png")
        image_b64 = base64.b64encode(png).decode()
        jobs = []
        metadata = []

        for rid, question in requests:
            self._n += 1
            img_path = ""
            try:
                os.makedirs(self._img_dir, exist_ok=True)
                img_path = os.path.join(self._img_dir, f"{self._prefix}_r{rid}_{self._n}.png")
                with open(img_path, "wb") as f:
                    f.write(png)
            except Exception as e:
                img_path = f"(save-failed: {e!r})"
            metadata.append((rid, img_path))
            jobs.append(self._vlm_fn(question, image_b64))

        outcomes = await asyncio.gather(*jobs, return_exceptions=True)
        for (rid, img_path), outcome in zip(metadata, outcomes):
            if isinstance(outcome, Exception):
                ok, reason = None, f"vlm-fail(API错误): {outcome!r}"
            else:
                ok, reason = outcome
            score = VLM_FAIL_SCORE if ok is None else (1 if ok else 0)
            self.results.append(ItemResult(rid, "vlm", score, reason, img_path))

    async def get_state(self, hook: str = "__game"):
        """读取页面暴露的语义状态钩子；没有则返回 None。"""
        return await self.page.evaluate(
            f"() => (window.{hook} && window.{hook}.getState) "
            f"? window.{hook}.getState() : (window.{hook} || null)")


# ==============================================================================
# VLM（火山 ARK Responses 接口）
# ==============================================================================

def _extract_response_text(payload):
    """解析 ARK Responses 返回内容。"""
    if isinstance(payload, dict):
        direct = payload.get("output_text")
        if isinstance(direct, str) and direct.strip():
            return direct.strip()
        output = payload.get("output")
        if isinstance(output, list):
            chunks = []
            for item in output:
                if not isinstance(item, dict):
                    continue
                content = item.get("content")
                if not isinstance(content, list):
                    continue
                for part in content:
                    if not isinstance(part, dict):
                        continue
                    text = part.get("text")
                    if isinstance(text, str) and text.strip():
                        chunks.append(text.strip())
            if chunks:
                return "\n".join(chunks)
    return ""


def _ark_vlm_sync(question: str, image_b64: str):
    """直接调用 ARK Responses API。"""
    if not ARK_API_KEY:
        raise RuntimeError("ARK_API_KEY is not configured")
    prompt = (question.strip() +
              "\n\n只判断画面，第一行严格输出 YES 或 NO，第二行用一句话给理由。")
    body = {
        "model": ARK_MODEL,
        "input": [{
            "role": "user",
            "content": [
                {"type": "input_image",
                 "image_url": f"data:image/png;base64,{image_b64}"},
                {"type": "input_text", "text": prompt},
            ],
        }],
    }
    req = urllib.request.Request(
        ARK_BASE_URL.rstrip("/") + "/responses",
        data=json.dumps(body, ensure_ascii=False).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {ARK_API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=VLM_TIMEOUT_S) as response:
            raw = response.read()
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:800]
        raise RuntimeError(f"ARK HTTP {exc.code}: {detail}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"ARK network error: {exc.reason}") from exc

    try:
        payload = json.loads(raw.decode("utf-8-sig"))
    except Exception as exc:
        raise RuntimeError(f"ARK response is not valid JSON: {raw[:240]!r}") from exc

    text = _extract_response_text(payload)
    if not text:
        raise RuntimeError("ARK response contains no output text")
    verdict = text.lower().lstrip("*#-> \t").split(maxsplit=1)[0]
    if verdict.startswith("yes") or verdict.startswith("是"):
        return True, text
    if verdict.startswith("no") or verdict.startswith("否"):
        return False, text
    raise RuntimeError(f"ARK response has no YES/NO verdict: {text[:160]!r}")


async def _default_vlm(question: str, image_b64: str):
    """截图 -> ARK 视觉模型 -> (通过?, 理由)。
    成功返回 (True/False, 理由)；调用失败返回 (None, 原因)，上层记 VLM_FAIL_SCORE。
    """
    try:
        return await asyncio.wait_for(
            asyncio.to_thread(_ark_vlm_sync, question, image_b64),
            timeout=VLM_TIMEOUT_S + 5)
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


def _unavailable_report(module, message: str) -> SampleReport:
    """构造完整的 harness/基础设施失败报告，避免子进程 traceback 或伪造产品失败。"""
    rep = SampleReport(layer1_pass=False)
    func_texts, vlm_texts, id2text = _rubric_index(module)
    rep.func_score = {t: 0 for t in func_texts}
    rep.vlm_score = {t: VLM_FAIL_SCORE for t in vlm_texts}
    rep.layer1_detail = {
        "fatal_console_errors": [message],
        "has_content": False,
        "app_probe": {},
        "infrastructure_error": True,
    }
    for row in getattr(module, "RUBRIC", []) or []:
        rid = int(row.get("id"))
        kind = row.get("kind")
        text = id2text.get(rid, str(rid))
        if kind == "vlm":
            rep.items.append({"id": rid, "kind": "vlm", "score": VLM_FAIL_SCORE,
                              "reason": f"vlm-fail({message})", "image": ""})
            rep.vlm_score[text] = VLM_FAIL_SCORE
        else:
            reason = f"未执行：{message}"
            rep.items.append({"id": rid, "kind": "det", "score": 0, "reason": reason})
            rep.func_score[text] = 0
    return rep


def _product_failure_report(module, message: str) -> SampleReport:
    """Complete product-failure report for a real submission/build defect."""
    rep = SampleReport(layer1_pass=False)
    func_texts, vlm_texts, id2text = _rubric_index(module)
    rep.func_score = {text: 0 for text in func_texts}
    rep.vlm_score = {text: VLM_FAIL_SCORE for text in vlm_texts}
    rep.layer1_detail = {
        "fatal_console_errors": [message],
        "has_content": False,
        "app_probe": {},
        "infrastructure_error": False,
        "product_build_failure": True,
    }
    for row in getattr(module, "RUBRIC", []) or []:
        rid = int(row.get("id")); kind = row.get("kind"); text = id2text.get(rid, str(rid))
        if kind == "vlm":
            reason = "vlm-fail(生产构建失败，未形成可观察画面)"
            rep.items.append({"id": rid, "kind": "vlm", "score": VLM_FAIL_SCORE, "reason": reason, "image": ""})
        else:
            reason = f"未通过：生产构建失败，无法完成该验收项；{message}"
            rep.items.append({"id": rid, "kind": "det", "score": 0, "reason": reason})
    return rep


async def run_sample(module, target: str, build: bool = False,
                     vlm_fn=_default_vlm) -> SampleReport:
    if async_playwright is None:
        return _unavailable_report(module, f"playwright unavailable: {_PLAYWRIGHT_IMPORT_ERROR}")
    rep = SampleReport()
    # 先按 RUBRIC 把每个判分点（用 rubric 原文作键）默认置 0；跑起来后再用实际结果覆盖
    func_texts, vlm_texts, id2text = _rubric_index(module)
    rep.func_score = {t: 0 for t in func_texts}
    rep.vlm_score = {t: VLM_FAIL_SCORE for t in vlm_texts}
    _name = os.getenv("UT_IMAGE_PREFIX") or Path(target).name or "target"
    prefix = "".join(c if (c.isalnum() or c in "-_.") else "_" for c in _name) or "t"
    _progress(f"{prefix}: resolving/building target")
    try:
        static_root, index_name = resolve_target(target, build=build)
    except ProductBuildError as e:
        return _product_failure_report(module, str(e))
    except Exception as e:
        return _unavailable_report(module, f"harness exception: resolve/build: {type(e).__name__}: {e}")

    console_errors: list[str] = []
    transport = os.getenv("WEB_UT_TRANSPORT", "http").strip().lower()
    server_cm = contextlib.nullcontext(None) if transport in {"file", "content"} else serve_directory(static_root)
    with server_cm as base_url:
        _progress(f"{prefix}: launching browser")
        async with async_playwright() as p:
            executable_path = os.getenv("PLAYWRIGHT_EXECUTABLE_PATH") or None
            if not executable_path:
                # Prefer Playwright's managed browser; when it is not installed, a
                # standard system Chromium/Chrome is a portable fallback.
                for candidate in ("/usr/bin/chromium", "/usr/bin/chromium-browser", "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable"):
                    if os.path.isfile(candidate) and os.access(candidate, os.X_OK):
                        executable_path = candidate
                        break
            headless = os.getenv("PLAYWRIGHT_HEADLESS", "1").strip().lower() not in {"0", "false", "no"}
            launch_args = ["--enable-webgl"]
            if os.name != "nt":
                launch_args += ["--use-gl=swiftshader", "--enable-unsafe-swiftshader"]
            elif os.getenv("WEB_UT_FORCE_SWIFTSHADER", "").strip().lower() in {"1","true","yes","on"}:
                launch_args += ["--use-gl=swiftshader", "--enable-unsafe-swiftshader"]
            browser = await p.chromium.launch(
                headless=headless,
                executable_path=executable_path,
                args=launch_args,
            )
            # Use an explicit BrowserContext. browser.new_page() creates an
            # ownerless convenience context that forbids context.new_page(),
            # which R6 legitimately needs for a same-browser blank rAF baseline.
            context = await browser.new_context(viewport=VIEWPORT)
            # Optional evaluator-owned pre-page instrumentation. Project-specific
            # observers live in web_ut.py and are injected before any product script.
            init_script = getattr(module, "INIT_SCRIPT", None)
            if isinstance(init_script, str) and init_script.strip():
                await context.add_init_script(script=init_script)
            installer = getattr(module, "install_init_scripts", None)
            if callable(installer):
                value = installer(context)
                if asyncio.iscoroutine(value):
                    await value
            page = await context.new_page()
            page.on("console", lambda m: console_errors.append(m.text)
                    if m.type == "error" else None)
            page.on("pageerror", lambda exc: console_errors.append(f"pageerror: {exc}"))

            if transport == "content":
                html = _inline_built_html(static_root, index_name)
                try:
                    # Commit the document immediately; external Three.js CDN scripts may
                    # continue loading while the Layer-1 readiness loop below polls for
                    # up to 12 seconds. This avoids tying readiness to DOMContentLoaded
                    # on slow Windows/network environments.
                    await page.set_content(html, wait_until="commit", timeout=8000)
                except Exception as exc:
                    console_errors.append(f"set_content: {exc}")
            else:
                page_url = (static_root / index_name).resolve().as_uri() if transport == "file" else f"{base_url}/{index_name}"
                try:
                    # Commit first, then let the Layer-1 readiness poll decide when the
                    # application is usable. This avoids turning a slow external script
                    # into an uncaught navigation timeout.
                    await page.goto(page_url, wait_until="commit", timeout=12000)
                except Exception as exc:
                    console_errors.append(f"navigation: {exc}")

            # ---- Layer 1 硬门槛 ----
            # Harness only verifies that a real browser page loaded and rendered usable
            # content. Project-specific hooks/selectors belong in web_ut.py, not here.
            probe = {}
            loop = asyncio.get_running_loop()
            ready_timeout = 18.0
            deadline = loop.time() + ready_timeout
            while loop.time() < deadline:
                try:
                    probe = await page.evaluate("""() => ({
                      readyState: document.readyState,
                      root: !!document.getElementById('root'),
                      canvasCount: document.querySelectorAll('canvas').length,
                      hasContent: !!document.body && (
                        (document.body.innerText || '').trim().length > 0 ||
                        document.querySelectorAll('canvas,svg,img,video').length > 0
                      ),
                      bodyChildren: document.body ? document.body.children.length : 0
                    })""")
                except Exception:
                    probe = {}
                if probe.get("root") and probe.get("hasContent") and probe.get("readyState") in {"interactive", "complete"}:
                    break
                await page.wait_for_timeout(120)

            fatal = [e for e in console_errors if "favicon" not in e.lower()]
            app_ready = bool(
                probe.get("root") and probe.get("hasContent")
                and probe.get("readyState") in {"interactive", "complete"}
            )
            script_errors = [e for e in fatal if e.startswith("pageerror:")]
            navigation_errors = [e for e in fatal if e.startswith("navigation:") or e.startswith("set_content:")]
            local_nav_blocked = any("ERR_BLOCKED_BY_ADMINISTRATOR" in e and ("127.0.0.1" in e or "localhost" in e) for e in fatal)
            transport_failure = bool(not app_ready and navigation_errors)
            rep.layer1_pass = bool(app_ready and not script_errors)
            rep.layer1_detail = {
                "fatal_console_errors": fatal,
                "has_content": bool(probe.get("hasContent")),
                "app_probe": probe,
                "infrastructure_error": bool(local_nav_blocked or transport_failure),
                "page_errors": script_errors,
            }
            if not rep.layer1_pass:
                # Product-level startup failure still needs a complete auditable
                # per-Rubric report. Infrastructure failures are filtered by run.py.
                fail_reason = (
                    "未通过：应用未进入可交互就绪状态。"
                    f"实际探测={json.dumps(probe, ensure_ascii=False)}；"
                    f"控制台错误={fatal[-8:]}"
                )
                fail_png = b""
                try:
                    fail_png = await page.screenshot(type="png")
                except Exception:
                    pass
                os.makedirs(UT_IMAGE_DIR, exist_ok=True)
                rep.items = []
                for row in getattr(module, "RUBRIC", []) or []:
                    rid = int(row.get("id"))
                    kind = row.get("kind")
                    key = id2text.get(rid, str(rid))
                    if kind == "vlm":
                        score = VLM_FAIL_SCORE
                        image = ""
                        if fail_png:
                            image = os.path.join(UT_IMAGE_DIR, f"{prefix}_r{rid}_layer1.png")
                            try:
                                with open(image, "wb") as f:
                                    f.write(fail_png)
                            except Exception:
                                image = ""
                        reason = "vlm-fail(应用未就绪，未执行视觉判定)"
                        rep.vlm_score[key] = score
                        rep.items.append({"id": rid, "kind": "vlm", "score": score, "reason": reason, "image": image})
                    else:
                        rep.func_score[key] = 0
                        rep.items.append({"id": rid, "kind": "det", "score": 0, "reason": fail_reason})
                await context.close()
                await browser.close()
                return rep

            # ---- 跑生成的逐条检查 ----
            ctx = Ctx(page, vlm_fn, UT_IMAGE_DIR, prefix)
            _progress(f"{prefix}: running deterministic/VLM checks")
            check_started = time.monotonic()
            try:
                await module.run_checks(page, ctx)
            except Exception as e:
                rep.layer1_detail["run_checks_error"] = repr(e)
                rep.layer1_detail["infrastructure_error"] = True
            _progress(f"{prefix}: checks finished in {time.monotonic()-check_started:.1f}s")

            # Finalize in Rubric order. A late exception must preserve every
            # deterministic observation already completed by web_ut.py.
            by_id = {r.id: r for r in ctx.results}
            live_obs = getattr(ctx, "_det_observations", {}) or {}
            executed = set(getattr(ctx, "_det_executed", set()) or set())
            rubric_rows = getattr(module, "RUBRIC", []) or []

            # If run_checks stopped before some VLM calls, preserve the real current
            # page as evidence for the -100 "not executed" result. The score remains
            # infrastructure/test-flow failure, never a fabricated visual pass.
            missing_vlm_ids = [
                int(row.get("id"))
                for row in rubric_rows
                if row.get("kind") == "vlm" and int(row.get("id")) not in by_id
            ]
            fallback_vlm_png = b""
            if missing_vlm_ids:
                try:
                    fallback_vlm_png = await page.screenshot(type="png")
                except Exception:
                    fallback_vlm_png = b""

            rep.items = []
            finalized = []
            for row in rubric_rows:
                rid = int(row.get("id"))
                kind = row.get("kind")
                existing = by_id.get(rid)
                if existing is not None:
                    score = existing.score
                    reason = existing.reason
                    image = existing.image
                elif kind == "vlm":
                    score = VLM_FAIL_SCORE
                    reason = "vlm-fail(测试流程未执行到该视觉验收项)"
                    image = ""
                    if fallback_vlm_png:
                        os.makedirs(UT_IMAGE_DIR, exist_ok=True)
                        image = os.path.join(UT_IMAGE_DIR, f"{prefix}_r{rid}_not_run.png")
                        try:
                            with open(image, "wb") as f:
                                f.write(fallback_vlm_png)
                        except Exception:
                            image = ""
                elif rid in live_obs:
                    ok, reason = live_obs[rid]
                    score = int(bool(ok)) if rid in executed else 0
                    if rid not in executed and not reason:
                        reason = "未通过：测试流程未执行到该验收项。"
                    image = ""
                else:
                    score = 0
                    reason = "未通过：测试流程未执行到该验收项。"
                    image = ""
                result_kind = "vlm" if kind == "vlm" else "det"
                item = {"id": rid, "kind": result_kind, "score": score, "reason": reason}
                if kind == "vlm":
                    item["image"] = image
                rep.items.append(item)
                finalized.append((rid, result_kind, score, reason))
            await context.close()
            await browser.close()

    # 用最终逐 Rubric 结果覆盖默认值。
    for rid, kind, score, reason in finalized:
        key = id2text.get(rid, str(rid))
        (rep.vlm_score if kind == "vlm" else rep.func_score)[key] = score
    return rep


def main(module):
    ap = argparse.ArgumentParser()
    ap.add_argument("--target", "--target_dir", dest="target", required=True)
    ap.add_argument("--build", action="store_true")
    args = ap.parse_args()
    try:
        rep = asyncio.run(run_sample(module, args.target, build=args.build))
    except Exception as exc:
        rep = _unavailable_report(module, f"harness exception: {type(exc).__name__}: {exc}")
    print(json.dumps(asdict(rep), ensure_ascii=False, indent=2))