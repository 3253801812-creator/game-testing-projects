"""3D天体：Universe Sandbox 类 Three.js 网页游戏的金标准单元测试。

本文件只包含任务特定 rubric 与 Playwright 检查；通用构建、静态服务、浏览器、
VLM 和结果汇总逻辑位于同目录 web_ut_harness.py。
"""

from __future__ import annotations

import asyncio
import base64
import hashlib
import json
import math
import os
import re
import sys
import time
from pathlib import Path
from typing import Any


# mapping.json is the single grading specification; loading it here prevents
# rubric text/ID drift between the traceability layer and executable checks.
RUBRIC = json.loads(
    Path(__file__).with_name("mapping.json").read_text(encoding="utf-8")
).get("rubrics", [])



PUBLIC_READ_ONLY_HOOKS = (
    "window.__game.getState()",
    "window.__universe.getState()",
    "window.__spawner.getState()",
    "window.__selection.getState()",
    "window.__settings.getState()",
    "window.__camera.getState()",
    "window.__renderer.getState()",
)

PUBLIC_HOOK_NAMES = tuple(token.split(".")[1] for token in PUBLIC_READ_ONLY_HOOKS)

# This task cannot be meaningfully runtime-verified without a real WebGL context.
# The Harness uses this only as an environment prerequisite probe; it does not
# award or recover Rubric scores from the probe.
REQUIRES_WEBGL = True

# Local/self-contained UI state transitions are synchronous or complete within a
# few animation frames.  Keep setup waits short so a deliberately broken fixture
# cannot consume most of the calibration budget merely by omitting a control or
# state transition.  This timeout affects only test setup/observation waits; it
# does not relax any gameplay threshold or scoring criterion.
TEST_UI_TIMEOUT_MS = max(800, int(os.getenv("TEST_UI_TIMEOUT_MS", "1500")))
STATE_READ_TIMEOUT_S = max(1.0, float(os.getenv("STATE_READ_TIMEOUT_S", "3.0")))
EVALUATOR_JS_TIMEOUT_S = max(2.0, float(os.getenv("EVALUATOR_JS_TIMEOUT_S", "6.0")))


PUBLIC_UI_CONTRACT = (
    "id=mainMenu",
    "data-testid=play-btn",
    "id=scenarioSelect",
    "data-testid=solar-system-btn",
    "data-testid=custom-sandbox-btn",
    "id=gameScreen",
    "data-testid=space-canvas",
    "id=sandboxToolbar",
    "data-testid=spawn-object-btn",
    "data-testid=spawn-object-select",
    "data-testid=spawn-star-btn",
    "data-testid=object-settings-btn",
    "id=objectSettingsPanel",
    "data-testid=selected-object-name",
    "data-testid=temperature-slider",
    "data-testid=rotation-speed-slider",
    "data-testid=orbital-velocity-slider",
    "data-testid=object-settings-close",
    "data-testid=menu-btn",
)


def contract_css(token: str) -> str:
    """Translate an exact public DOM-contract token into its CSS selector."""
    if token.startswith("id="):
        return "#" + token.split("=", 1)[1]
    if token.startswith("data-testid="):
        value = token.split("=", 1)[1]
        return f'[data-testid="{value}"]'
    raise ValueError(f"unsupported DOM contract token: {token}")


def contract_locator(page, token: str):
    """Locate the real DOM element named by an exact prompt contract token."""
    if token not in PUBLIC_UI_CONTRACT:
        raise ValueError(f"undeclared DOM contract token: {token}")
    return page.locator(contract_css(token)).first


PUBLIC_ROOT_FIELDS = {
    "__game": {"ready", "gameState", "scenario", "elapsedTime", "toolbarVisible", "spawnMode", "selectedObjectId", "bodyCount", "planetCount", "starCount", "canvas", "performance"},
    "__universe": {"gravityEnabled", "gravitationalConstant", "simulationTime", "physicsStepCount", "orbitModel", "bodies"},
    "__spawner": {"mode", "selectedPreset", "pendingPlacement", "placementPlane", "cursorIntersection", "lastPlacement", "lastSpawnedBodyId", "placementCount"},
    "__selection": {"selectedObjectId", "selectedObjectType", "settingsOpen"},
    "__settings": {"panelOpen", "selectedObjectId", "averageTemperature", "rotationSpeed", "orbitalVelocity"},
    "__camera": {"cameraType", "controlsType", "enabled", "position", "target", "distance", "azimuthAngle", "polarAngle", "minDistance", "maxDistance", "domElementMatchesCanvas", "projectionMatrix", "projectionMatrixInverse", "matrixWorld", "matrixWorldInverse"},
    "__renderer": {"webgl", "contextType", "canvasWidth", "canvasHeight", "clientWidth", "clientHeight", "pixelRatio", "animationRunning", "frameCount", "averageFps", "lastFrameDeltaMs", "drawCalls", "triangles", "sceneBodyMeshCount"},
}


async def public_contract_probe(page) -> dict[str, bool]:
    """Verify every declared read-only hook exists, serializes, and exposes its required root schema."""
    result: dict[str, bool] = {}
    for token, hook_name in zip(PUBLIC_READ_ONLY_HOOKS, PUBLIC_HOOK_NAMES):
        try:
            value = await page.evaluate(
                "name => { const h = window[name]; if (!h || typeof h.getState !== 'function') return null; const v = h.getState(); JSON.stringify(v); return v; }",
                hook_name,
            )
            required = PUBLIC_ROOT_FIELDS.get(hook_name, set())
            ok = isinstance(value, dict) and required.issubset(value.keys())
            if ok and hook_name == "__game":
                ok = isinstance(value.get("canvas"), dict) and {"width", "height", "clientWidth", "clientHeight"}.issubset(value["canvas"])
                ok = ok and isinstance(value.get("performance"), dict) and {"animationRunning", "frameCount", "averageFps", "lastFrameDeltaMs"}.issubset(value["performance"])
            elif ok and hook_name == "__universe":
                ok = isinstance(value.get("bodies"), list) and value.get("orbitModel") in {"gravity", "analytic", "hybrid"}
            elif ok and hook_name == "__camera":
                ok = all(isinstance(value.get(key), list) and len(value[key]) == 16 for key in ("projectionMatrix", "projectionMatrixInverse", "matrixWorld", "matrixWorldInverse"))
            result[token] = bool(ok)
        except Exception:
            result[token] = False
    return result


def stack_preflight(root: Path) -> dict:
    """Verify static engineering constraints and generated-play provenance.

    These checks are valid evidence for source/tooling requirements only. They
    never substitute for browser causality tests of gameplay behavior. The
    production build attempt itself is recorded separately by the Harness as a
    formal execution precondition.
    """
    root = Path(root)
    required_files = (
        "package.json", "vite.config.ts", "tsconfig.json", "tsconfig.node.json",
        "tailwind.config.js", "postcss.config.js", "index.html",
        "src/main.tsx", "src/index.css",
    )
    missing_files = [name for name in required_files if not (root / name).is_file()]
    try:
        package = json.loads((root / "package.json").read_text(encoding="utf-8"))
    except Exception as exc:
        package = {}
        package_error = repr(exc)
    else:
        package_error = ""
    deps: dict[str, Any] = {}
    if isinstance(package, dict):
        deps.update(package.get("dependencies") or {})
        deps.update(package.get("devDependencies") or {})
    scripts = package.get("scripts") if isinstance(package, dict) and isinstance(package.get("scripts"), dict) else {}

    main = (root / "src/main.tsx").read_text(encoding="utf-8", errors="ignore") if (root / "src/main.tsx").is_file() else ""
    css = (root / "src/index.css").read_text(encoding="utf-8", errors="ignore") if (root / "src/index.css").is_file() else ""
    vite_config = (root / "vite.config.ts").read_text(encoding="utf-8", errors="ignore") if (root / "vite.config.ts").is_file() else ""
    source = "\n".join(
        path.read_text(encoding="utf-8", errors="ignore")
        for path in sorted((root / "src").rglob("*"))
        if path.is_file() and path.suffix.lower() in {".ts", ".tsx"}
    ) if (root / "src").is_dir() else ""
    index_html = (root / "index.html").read_text(encoding="utf-8", errors="ignore") if (root / "index.html").is_file() else ""

    react19 = "19" in str(deps.get("react", "")) and "19" in str(deps.get("react-dom", ""))
    react_entry = "createRoot" in main and "<App" in main
    typescript_configured = bool(
        "typescript" in deps
        and (root / "tsconfig.json").is_file()
        and (root / "tsconfig.node.json").is_file()
        and (root / "src/main.tsx").is_file()
    )
    vite_configured = bool(
        "vite" in deps
        and (root / "vite.config.ts").is_file()
        and "defineConfig" in vite_config
        and "vite" in str(scripts.get("build", ""))
    )
    tailwind_ready = bool(
        "tailwindcss" in deps
        and (root / "tailwind.config.js").is_file()
        and (root / "postcss.config.js").is_file()
        and all(token in css for token in ("@tailwind base", "@tailwind components", "@tailwind utilities"))
    )
    three_dependency = "three" in deps
    three_import = ("from 'three'" in source or 'from "three"' in source)
    orbit_import = "OrbitControls" in source and "three/addons/controls/OrbitControls" in source

    play_path = root / "play.html"
    play_html = play_path.read_text(encoding="utf-8", errors="ignore") if play_path.is_file() else ""
    index_uses_main = "/src/main.tsx" in index_html or "./src/main.tsx" in index_html
    play_sources = (
        "src/main.tsx",
        "src/App.tsx",
        "src/components/UniverseShell.tsx",
        "src/game/runtime.ts",
        "src/index.css",
    )
    play_digest = hashlib.sha256()
    play_sources_present = True
    for rel in play_sources:
        source_path = root / rel
        if not source_path.is_file():
            play_sources_present = False
            break
        play_digest.update(rel.encode("utf-8")); play_digest.update(b"\0")
        play_digest.update(source_path.read_text(encoding="utf-8", errors="strict").encode("utf-8")); play_digest.update(b"\0")
    expected_play_hash = play_digest.hexdigest() if play_sources_present else ""
    hash_match = re.search(r'<meta\s+name=["\']play-source-sha256["\']\s+content=["\']([0-9a-f]{64})["\']', play_html, re.I)

    # Verify the vendored Three.js bytes that the generated artifact claims to embed.
    delivery_root = root.parent.parent if root.parent.name == "repo_files" else root
    vendor_dir = delivery_root / "tools" / "vendor" / "three-r179"
    vendor_names = ("three.core.min.js", "three.module.min.js", "OrbitControls.js", "LICENSE")
    vendor_digest = hashlib.sha256()
    vendor_present = all((vendor_dir / name).is_file() for name in vendor_names)
    if vendor_present:
        for name in vendor_names:
            vendor_digest.update(name.encode("utf-8")); vendor_digest.update(b"\0")
            vendor_digest.update((vendor_dir / name).read_bytes()); vendor_digest.update(b"\0")
    expected_vendor_hash = vendor_digest.hexdigest() if vendor_present else ""
    vendor_match = re.search(r'<meta\s+name=["\']play-vendor-sha256["\']\s+content=["\']([0-9a-f]{64})["\']', play_html, re.I)
    runtime_meta = re.search(r'<meta\s+name=["\']play-runtime["\']\s+content=["\']([^"\']+)["\']', play_html, re.I)
    play_self_contained = bool(
        play_path.is_file()
        and runtime_meta
        and runtime_meta.group(1) == "embedded-three-r179-orbitcontrols"
        and "http://" not in play_html.lower()
        and "https://" not in play_html.lower()
        and not re.search(r'<script[^>]+src=', play_html, re.I)
        and not re.search(r'<link[^>]+(?:stylesheet|modulepreload)', play_html, re.I)
    )
    play_is_generated_from_canonical_sources = bool(
        play_path.is_file()
        and hash_match
        and hash_match.group(1).lower() == expected_play_hash
        and vendor_match
        and vendor_present
        and vendor_match.group(1).lower() == expected_vendor_hash
        and "GENERATED PLAY ARTIFACT" in play_html
        and "Canonical production entry remains /src/main.tsx" in play_html
        and "play-main.js" not in play_html
        and "play-styles.css" not in play_html
        and not (root / "play-main.js").exists()
        and not (root / "play-styles.css").exists()
    )
    play_optional_valid = bool(
        not play_path.is_file()
        or (play_is_generated_from_canonical_sources and play_self_contained)
    )
    single_entry = bool(index_uses_main and play_optional_valid)

    required_deps = ("react", "react-dom", "three", "typescript", "vite", "tailwindcss")
    missing_deps = [name for name in required_deps if name not in deps]
    ok = bool(
        not missing_files and not package_error and not missing_deps
        and react19 and react_entry and typescript_configured and vite_configured
        and tailwind_ready and three_dependency and three_import and orbit_import
        and single_entry and play_optional_valid
    )
    return {
        "ok": ok,
        "missingFiles": missing_files,
        "packageError": package_error,
        "missingDependencies": missing_deps,
        "react19": react19,
        "reactEntry": react_entry,
        "typescriptConfigured": typescript_configured,
        "viteConfigured": vite_configured,
        "tailwindConfigured": tailwind_ready,
        "threeDependency": three_dependency,
        "threeModuleImport": three_import,
        "orbitControlsImport": orbit_import,
        "singleIntegratedEntry": single_entry,
        "playHtmlPresent": play_path.is_file(),
        "playHtmlGeneratedFromCanonicalSources": play_is_generated_from_canonical_sources,
        "playHtmlSelfContained": play_self_contained,
        "playHtmlOptionalValid": play_optional_valid,
        "playSourceHash": expected_play_hash,
        "playVendorHash": expected_vendor_hash,
    }


# Auxiliary source calibration/integrity audit. This remains inside web_ut.py
# because 规范.md permits anti-cheat observation logic in the evaluator, while
# the runtime Playwright assertions below remain the primary evidence path.

def _rx(text: str, pattern: str) -> bool:
    return re.search(pattern, text, re.I | re.S) is not None


def _anyrx(text: str, *patterns: str) -> bool:
    return any(_rx(text, pattern) for pattern in patterns)


def _allrx(text: str, *patterns: str) -> bool:
    return all(_rx(text, pattern) for pattern in patterns)


def _segment(text: str, start_pattern: str, maxlen: int = 5000) -> str:
    match = re.search(start_pattern, text, re.I | re.S)
    return text[match.start():match.start() + maxlen] if match else ""


def _function_block(text: str, name: str) -> str:
    """Best-effort brace-balanced extraction for a named JS function."""
    match = re.search(rf"function\s+{re.escape(name)}\s*\([^)]*\)\s*\{{", text, re.I | re.S)
    if not match:
        return ""
    start = match.start()
    brace = text.find("{", match.start())
    depth = 0
    quote = None
    escaped = False
    for i in range(brace, len(text)):
        ch = text[i]
        if quote:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                quote = None
            continue
        if ch in ("'", '"', "`"):
            quote = ch
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return text[start:i + 1]
    return text[start:start + 6000]


def _click_listener_segments(js: str, names: list[str]) -> list[str]:
    segments: list[str] = []
    for name in names:
        pattern = rf"(?:dom\.)?{name}\.addEventListener\s*\(\s*['\"]click['\"]"
        for match in re.finditer(pattern, js, re.I):
            segments.append(js[match.start():match.start() + 450])
    return segments


def source_audit(static_root: Path) -> dict:
    """Return generic source evidence for all rubrics plus integrity hard-fails."""
    root = Path(static_root)

    def read_many(paths):
        chunks = []
        for path in paths:
            if path.is_file():
                chunks.append(path.read_text(encoding="utf-8", errors="ignore"))
        return "\n".join(chunks)

    # React/Vite fixtures keep the real product DOM in React/TS source rather
    # than in the tiny Vite index.html.  Audit all first-party source files,
    # while still separating CSS-like and runtime-like evidence for the
    # existing generic heuristics.
    html_paths = [root / "index.html"] + sorted(root.glob("src/**/*.tsx")) + sorted(root.glob("src/**/*.ts"))
    css_paths = sorted(root.glob("src/**/*.css")) + sorted(root.glob("*.css"))
    runtime_paths = [p for p in sorted(root.glob("src/**/*")) if p.is_file() and p.suffix.lower() in {".ts", ".tsx", ".js", ".jsx"}]
    if not runtime_paths:
        runtime_paths = [root / "main.js"]
    html = read_many(html_paths).replace('\\"', '"')
    # Normalize React JSX literal attributes so the generic DOM-contract
    # heuristics can evaluate the same selectors used by plain HTML samples.
    html = re.sub(r'\b(id|data-testid|value)=\{["\']([^"\']+)["\']\}', r'\1="\2"', html)
    css = read_many(css_paths)
    js = read_many(runtime_paths)
    src = "\n".join((html, css, js))
    low = src.lower()
    checks: dict[int, bool] = {}
    evidence: dict[int, str] = {}
    integrity_flags: list[str] = []

    hidden_canvas = _anyrx(
        js,
        r"renderer\.domElement\.style\.(?:opacity|visibility|display)\s*=\s*['\"](?:0|hidden|none)",
        r"renderer\.domElement\.style\.pointerEvents\s*=\s*['\"]none",
    ) or _anyrx(
        css,
        r"\[data-testid=['\"]?space-canvas[^}]*\{[^}]*(?:opacity\s*:\s*0\b|display\s*:\s*none|visibility\s*:\s*hidden|pointer-events\s*:\s*none)",
    )
    if hidden_canvas:
        integrity_flags.append("render_surface_hidden_or_noninteractive")

    live_universe = _anyrx(
        js,
        r"bodies\s*:\s*bodies\.map\s*\(",
        r"bodies\s*:\s*universeState\.bodies\.map\s*\(",
    )
    if not live_universe:
        integrity_flags.append("universe_hook_not_mapped_from_live_body_collection")

    fixed_renderer = _rx(js, r"drawCalls\s*:\s*\d+\s*,\s*triangles\s*:\s*\d+")
    if fixed_renderer:
        integrity_flags.append("renderer_metrics_are_fixed_literals")

    checks[1] = (
        all(token in html for token in ('id="mainMenu"', 'data-testid="play-btn"'))
        and _anyrx(js, r"(?:play|playBtn)\.addEventListener\s*\(\s*['\"]click")
        and _anyrx(js, r"\bready\s*[:=]\s*true\b", r"appState\.ready\s*=\s*true")
    )
    evidence[1] = "main menu/play selectors, click wiring, and ready state"

    checks[2] = (
        len(css) > 1500
        and _anyrx(css, r"linear-gradient|radial-gradient")
        and _anyrx(css, r"#mainMenu|\.main-menu|\.menu")
        and _anyrx(css, r"button|\.cta|play")
    )
    evidence[2] = "nontrivial themed CSS with menu hierarchy, gradients, and CTA styling"

    checks[3] = (
        all(token in html for token in ('id="scenarioSelect"', 'data-testid="solar-system-btn"', 'data-testid="custom-sandbox-btn"'))
        and _anyrx(js, r"(?:solar|solarBtn|solarScenario)\.addEventListener")
        and _anyrx(js, r"(?:custom|customBtn|customScenario)\.addEventListener")
    )
    evidence[3] = "scenario DOM and separate solar/custom click paths"

    checks[4] = _allrx(src, r"WebGLRenderer", r"OrbitControls", r"space-canvas", r"sandboxToolbar") and not hidden_canvas
    evidence[4] = "real renderer/control construction and non-hidden canvas"

    solar = _segment(js, r"function\s+(?:buildSolar|spawnSolarSystem|startScenario)\b", 8000)
    jupiter_active = _anyrx(
        solar,
        r"add(?:Planet)?\s*\(\s*['\"]Jupiter['\"]\s*,\s*['\"]jupiter",
        r"spawnPlanet\s*\(\s*['\"]jupiter['\"]",
        r"\['Jupiter'\s*,\s*'jupiter'",
        r'\["Jupiter"\s*,\s*"jupiter"',
    )
    checks[5] = _allrx(js, r"['\"]sun['\"]", r"['\"]earth['\"]", r"['\"]mars['\"]", r"['\"]jupiter['\"]") and jupiter_active
    evidence[5] = "active solar constructor includes sun/earth/mars/jupiter"

    star_visual_segment = "\n".join((
        _segment(js, r"function\s+(?:spawnStar|spawnStarAt|createStar|makeStar)\b", 4200),
        _segment(
            js,
            r"if\s*\(\s*(?:isStar|type\s*===?\s*['\"]star['\"])\s*\)",
            2600,
        ),
    ))
    star_visual_ok = _anyrx(
        star_visual_segment,
        r"new\s+(?:T\.|THREE\.)PointLight\s*\(",
        r"new\s+(?:T\.|THREE\.)SpriteMaterial\s*\(",
        r"\bemissive\s*[:=]\s*new\s+(?:T\.|THREE\.)Color\s*\(",
        r"\bemissiveIntensity\s*[:=]\s*(?:[1-9]|0?\.[1-9])",
    )
    distinct_preset_paths = all(
        _anyrx(
            js,
            rf"(?:preset|kind)\s*===?\s*['\"]{preset}['\"]",
            rf"textures\.{preset}\b",
            rf"canvasTexture\s*\(\s*['\"]{preset}['\"]",
            rf"makePlanetTexture\s*\(\s*['\"]{preset}['\"]",
        )
        for preset in ("earth", "mars", "jupiter")
    )
    checks[6] = _anyrx(js, r"SphereGeometry", r"IcosahedronGeometry") and not hidden_canvas
    evidence[6] = "production body construction uses real spherical/icosahedral 3D geometry on a visible render surface"
    checks[33] = distinct_preset_paths and not hidden_canvas
    evidence[33] = "Earth, Mars, and Jupiter each have a distinct production appearance path"
    checks[34] = star_visual_ok and not hidden_canvas
    evidence[34] = "the solar-system star construction contains an active emissive, glow, sprite, or light path"

    has_spin = _anyrx(
        js,
        r"(?:mesh|coreMesh)\.rotation\.[xyz]\s*\+=\s*[^;\n]*rotationSpeed",
        r"rotationSpeed\s*\*\s*dt",
    )
    has_orbit = _anyrx(
        js,
        r"orbitAngle\s*\+=",
        r"(?:group|mesh)\.position\.addScaledVector\s*\(\s*[^,]*(?:velocity|body\.velocity)",
        r"position\.set\([^\n]*(?:Math\.cos|Math\.sin)",
    )
    checks[7] = has_orbit and _anyrx(js, r"physicsStepCount\s*(?:\+\+|\+=\s*1)")
    evidence[7] = "simulation advances orbital/velocity position while physics steps progress"
    checks[35] = has_spin and _anyrx(js, r"physicsStepCount\s*(?:\+\+|\+=\s*1)")
    evidence[35] = "simulation consumes rotationSpeed to advance real mesh rotation while physics steps progress"

    clear = _function_block(js, "clearWorld")
    clears = _anyrx(
        clear,
        r"bodies\.length\s*=\s*0",
        r"universeState\.bodies\.length\s*=\s*0",
        r"bodies\s*=\s*\[\s*\]",
        r"bodies\.splice\s*\(",
    )
    checks[8] = clears and _anyrx(js, r"custom_sandbox", r"Custom Sandbox")
    evidence[8] = "custom mode exists and the production body collection has a real clear path"

    checks[9] = (
        all(value in html for value in ('value="earth"', 'value="mars"', 'value="procedural"'))
        and all(testid in html for testid in (
            'data-testid="spawn-object-btn"',
            'data-testid="spawn-object-select"',
            'data-testid="spawn-star-btn"',
            'data-testid="object-settings-btn"',
        ))
    )
    evidence[9] = "all toolbar controls and all three required planet preset values"

    toolbar_click = "\n".join(_click_listener_segments(js, ["spawnPlanet", "spawnObjectBtn", "spawnStar", "spawnStarBtn"]))
    toolbar_bad = _rx(toolbar_click, r"placementCount\s*\+\+")
    checks[10] = (
        _anyrx(js, r"\bspawnMode\b", r"spawnerState\.mode")
        and _anyrx(js, r"pendingPlacement", r"pendingPlacement\s*:\s*!!spawnMode")
        and _anyrx(js, r"planeIntersection", r"intersectPlacement", r"worldPointFromPointer")
        and _anyrx(js, r"pointerup|click")
        and not toolbar_bad
    )
    evidence[10] = "placement requires pointer/canvas path and toolbar clicks do not mutate placement count"

    spawn_planet = _segment(js, r"function\s+spawnPlanet(?:At)?\b", 5200)
    fixed_placement = _anyrx(
        spawn_planet,
        r"placedPosition\s*=.*new\s+(?:T\.|THREE\.)Vector3\s*\(\s*0\s*,\s*0\s*,\s*0",
        r"preset\s*===?\s*['\"]earth['\"][\s\S]{0,300}position\s*:\s*new\s+(?:T\.|THREE\.)Vector3\s*\(\s*0",
    )
    uses_position = _anyrx(
        spawn_planet,
        r"position\s*:\s*(?:pos|position)\b",
        r"\bposition\s*,",
        r"group\.position\.copy\s*\(\s*position",
        r"mesh\.position\.copy\s*\(\s*position",
        r"addBody\([^\)]*position",
    )
    distinct_planets = _anyrx(
        js,
        r"#2F78FF|0x2F78FF|textures\.earth|canvasTexture\s*\(\s*['\"]earth|makePlanetTexture\s*\(\s*['\"]earth",
    ) and _anyrx(
        js,
        r"#CF5F3B|0xCF5F3B|textures\.mars|canvasTexture\s*\(\s*['\"]mars|makePlanetTexture\s*\(\s*['\"]mars",
    )
    checks[11] = uses_position and not fixed_placement and 'value="earth"' in html and 'value="mars"' in html
    evidence[11] = "Earth/Mars spawn path consumes the caller's independently determined placement position"

    proc_fixed_scale = _anyrx(
        spawn_planet,
        r"\bscale\s*=\s*1(?:\.0+)?\b",
        r"scale\s*:\s*1(?:\.0+)?\b",
    )
    proc_fixed_color = _anyrx(
        spawn_planet,
        r"color\s*=\s*['\"]#888888",
        r"color\s*:\s*['\"]#888888",
    )
    proc_zero_relief = _anyrx(
        spawn_planet,
        r"\bds\s*=\s*0\b",
        r"displacementStrength\s*:\s*0\b",
    )
    proc_random = _anyrx(js, r"Math\.random\s*\(", r"rng32\s*\(", r"seeded\s*\(", r"Date\.now\s*\(")
    proc_relief = _anyrx(js, r"geometry_displacement", r"makeProceduralGeometry", r"displacementMap", r"bumpMap", r"normalMap") and _anyrx(
        js,
        r"displacementStrength\s*[:=]\s*(?:0?\.\d+|\.[0-9])",
        r"\bds\s*=\s*\.[0-9]",
    )
    proc_color = _anyrx(js, r"hsl\s*\(", r"neon\s*=\s*\[", r"hue\s*=|generatedColor", r"Math\.floor\s*\([^\)]*360")
    proc_scale_direct = _anyrx(
        spawn_planet,
        r"scale\s*=\s*[^;\n]*(?:rng|random)\s*\(",
        r"scale\s*[:=]\s*[^;\n]*Math\.random\s*\(",
    )
    proc_scale_via_radius = _anyrx(spawn_planet, r"radius\s*[:=][^;\n]*Math\.random\s*\(") and _anyrx(
        js, r"scale\s*:\s*(?:round\(\s*)?radius\b", r"scale\s*:\s*(?:props\.)?radius\b"
    )
    proc_scale = proc_scale_direct or proc_scale_via_radius
    procedural_ui = 'value="procedural"' in html
    checks[12] = procedural_ui and proc_random and proc_scale and not proc_fixed_scale
    evidence[12] = "the accessible procedural preset uses a nonconstant random scale path"
    checks[36] = procedural_ui and proc_random and proc_color and not proc_fixed_color
    evidence[36] = "the accessible procedural preset uses a varying high-saturation/neon color path"
    checks[37] = procedural_ui and proc_relief and not proc_zero_relief
    evidence[37] = "the accessible procedural preset applies a nonzero production relief mechanism"

    spawn_star = _segment(js, r"function\s+spawnStar(?:At)?\b", 3500)
    explicitly_tiny = _anyrx(spawn_star, r"mass\s*:\s*[0-9](?:\D|$)", r"radius\s*:\s*1(?:\.\d+)?\b")
    star_large = not explicitly_tiny and _anyrx(
        spawn_star,
        r"mass\s*:\s*(?:[2-9]\d|\d{3,})",
        r"mass\s*=\s*[^;\n]*(?:\d{3,}|1100|1400|6800)",
        r"radius\s*:\s*(?:[3-9]|\d{2,})(?:\.\d+)?",
        r"radius\s*=\s*[^;\n]*(?:3\.5|4\.5|4\b)",
    )
    star_position = _anyrx(
        spawn_star,
        r"position\s*:\s*(?:pos|position)\b",
        r"\bposition\s*,",
        r"position\.copy\s*\(\s*position",
    )
    star_glow = star_visual_ok
    checks[13] = star_position
    evidence[13] = "star spawn consumes the independently determined click/placement position"
    checks[38] = star_large
    evidence[38] = "custom-star spawn uses materially larger radius/mass values than ordinary planets"
    checks[39] = star_glow and not hidden_canvas
    evidence[39] = "custom-star rendering has an active emissive, glow, sprite, or light path"

    selection_segment = _segment(
        js,
        r"(?:function\s+(?:onCanvasClick|handleCanvasPointerUp)\b|renderer\.domElement\.addEventListener\s*\(\s*['\"]pointerup)",
        6000,
    )
    raycast = _anyrx(selection_segment, r"intersectObjects")
    hit_select = _anyrx(
        selection_segment,
        r"hits\s*\[\s*0\s*\][^;\n]*(?:bodyId|body)",
        r"setSelection\s*\(\s*(?:id|hits)",
        r"selectBody\s*\(\s*hits",
    )
    arbitrary_first = _anyrx(selection_segment, r"selectBody\s*\(\s*bodies\s*\[\s*0\s*\]")
    checks[14] = raycast and hit_select and not arbitrary_first
    evidence[14] = "selection is derived from the raycast hit rather than an arbitrary object"

    sync_settings = _segment(js, r"function\s+(?:syncSettings|syncSettingsUi)\b", 4500)
    selected_ref = _anyrx(sync_settings, r"selectedBody", r"selected\s*\(", r"getBodyById")
    temp_live = _anyrx(sync_settings, r"(?:temp|temperature)[A-Za-z]*\.value\s*=\s*[^;\n]*(?:averageTemperature|temperature)")
    rotation_live = _anyrx(sync_settings, r"rotation[A-Za-z]*\.value\s*=\s*[^;\n]*rotationSpeed")
    orbital_live = _anyrx(sync_settings, r"orbital[A-Za-z]*\.value\s*=\s*[^;\n]*(?:orbitalVelocity|velocity|\bv\b)")
    checks[15] = selected_ref and temp_live and rotation_live and orbital_live
    evidence[15] = "settings controls are populated from the selected production body"

    temperature_listener = _segment(js, r"(?:dom\.)?(?:temp|temperatureSlider)\.addEventListener\s*\(\s*['\"]input", 1100)
    rotation_listener = _segment(js, r"(?:dom\.)?(?:rotation|rotationSlider)\.addEventListener\s*\(\s*['\"]input", 1100)
    orbital_listener = _segment(js, r"(?:dom\.)?(?:orbital|orbitalSlider)\.addEventListener\s*\(\s*['\"]input", 1600)
    checks[16] = _anyrx(temperature_listener, r"(?:averageTemperature|\.temperature)\s*=")
    evidence[16] = "temperature input mutates the selected body's production temperature state"
    checks[17] = _anyrx(rotation_listener, r"rotationSpeed\s*=") and has_spin
    evidence[17] = "rotation input mutates production rotationSpeed and simulation consumes it"
    checks[18] = _anyrx(
        orbital_listener,
        r"orbitalVelocity\s*=",
        r"velocity\.(?:copy|setLength|multiplyScalar)\s*\(",
        r"setCircularOrbit\s*\(",
    ) and has_orbit
    evidence[18] = "orbital input mutates production orbital speed/velocity and simulation consumes it"

    no_parent = _anyrx(spawn_planet, r"const\s+nearest\s*=\s*null", r"parentStarId\s*:\s*null")
    parent_logic = _anyrx(spawn_planet, r"nearestStar|findNearestStar|parentStar") and _anyrx(js, r"parentStarId|parentStar\s*=")
    custom_gravity_disabled = _anyrx(js, r"gravityEnabled\s*&&\s*appState\.scenario\s*!==\s*['\"]custom_sandbox")
    checks[19] = parent_logic and has_orbit and not no_parent and not custom_gravity_disabled
    evidence[19] = "custom planet spawn can bind to a nearby star and dynamics consume the relationship"

    fixed_count = _anyrx(js, r"sceneBodyMeshCount\s*:\s*0\b", r"sceneBodyMeshCount\s*:\s*app\.scenario")
    checks[20] = (
        live_universe
        and _anyrx(js, r"getWorldPosition|worldPosition")
        and _anyrx(js, r"renderer\.info\.render\.(?:calls|triangles)")
        and not fixed_renderer
        and not fixed_count
    )
    evidence[20] = "public state maps live bodies and renderer reports measured, nonliteral production metrics"

    controls_ok = _anyrx(js, r"new\s+(?:T\.|THREE\.)OrbitControls", r"new\s+OrbitControls") and not _anyrx(js, r"controls\.enabled\s*=\s*false") and not hidden_canvas
    checks[21] = controls_ok
    evidence[21] = "OrbitControls is instantiated, enabled, and attached to an interactive render surface"
    checks[22] = controls_ok and _anyrx(js, r"pointerdown|mousedown") and _anyrx(js, r"pointerup|mouseup")
    evidence[22] = "interactive pointer path coexists with enabled OrbitControls"

    animation = _function_block(js, "frame") or _function_block(js, "animate")
    has_raf = _anyrx(animation, r"requestAnimationFrame\s*\(\s*(?:frame|animate)\s*\)")
    frame_limited_raf = _anyrx(
        animation,
        r"if\s*\([^\)]*frameCount[^\)]*\)[^\n;{}]*(?:animationFrameId\s*=\s*)?requestAnimationFrame\s*\(\s*(?:frame|animate)\s*\)",
        r"if\s*\([^\)]*frameCount[^\)]*\)\s*\{[^}]{0,400}requestAnimationFrame\s*\(\s*(?:frame|animate)\s*\)",
    )
    unconditional_raf = has_raf and not frame_limited_raf
    checks[23] = (
        unconditional_raf
        and _anyrx(js, r"FIXED_STEP|FIXED_REAL_STEP")
        and _anyrx(js, r"MAX_PHYSICS_STEPS")
        and _anyrx(js, r"frameCount\s*\+\+|frameCount\s*\+=")
        and has_spin
        and has_orbit
        and not hidden_canvas
    )
    evidence[23] = "unbounded RAF loop plus bounded fixed-step simulation and live frame counters"

    menu_path = _segment(js, r"(?:function\s+(?:showMainMenu|showMenu)\b|menuBtn\.addEventListener|dom\.menu\.addEventListener)", 2200)
    scenario_path = _segment(js, r"function\s+startScenario\b", 3500)
    checks[24] = clears and "clearWorld" in menu_path and "clearWorld" in scenario_path
    evidence[24] = "menu and scenario reload paths both call a clear routine that empties production bodies"

    hook_names = ("__game", "__universe", "__spawner", "__selection", "__settings", "__camera", "__renderer")
    hook_presence = all(name in js for name in hook_names)
    direct_getters = len(re.findall(r"\bgetState\s*(?::\s*|\()", js, re.I)) >= 7
    define_hook_calls = len(re.findall(r"defineHook\s*\(\s*['\"]__(?:game|universe|spawner|selection|settings|camera|renderer)['\"]", js, re.I)) >= 7
    # JSON serializability is a property of the complete public snapshot surface,
    # not just the first getState body.  Search the public-hook region for
    # values that JSON.stringify cannot encode.
    hook_region = _function_block(js, 'expose') or _segment(js, r"function\s+defineHook\b", 18000)
    nonserializable_hook = _anyrx(
        hook_region,
        r"\b\d+n\b",
        r"BigInt\s*\(",
        r"\bSymbol\s*\(",
    )
    checks[25] = hook_presence and (direct_getters or define_hook_calls) and not nonserializable_hook
    evidence[25] = "all seven public getState snapshot surfaces are present and avoid directly non-JSON-serializable values"

    frozen_count = len(re.findall(r"Object\.freeze\s*\(", js, re.I))
    define_hook_readonly = _anyrx(
        js,
        r"function\s+defineHook\([^\)]*\)\s*\{[^}]*Object\.defineProperty[^}]*Object\.freeze",
        r"const\s+defineHook\s*=.*Object\.defineProperty[\s\S]{0,500}Object\.freeze",
    )
    control_method_leak = _anyrx(js, r"__(?:game|universe|spawner|selection|settings|camera|renderer)[\s\S]{0,300}\b(?:setState|spawn|select|mutate|reset)\s*:")
    # A getter may use local counters while constructing a snapshot; that is
    # not a mutation of product state.  Flag only writes to known persistent
    # runtime state or to a closure-level observer counter.
    getter_side_effect = _anyrx(
        hook_region,
        r"getState[\s\S]{0,1600}\bobserverReadCount\s*(?:\+\+|--|\+=|-=|=)",
        r"getState[\s\S]{0,1600}\b(?:app|appState|sim|spawner|universeState|selectionState|settingsState|perf)\.[A-Za-z_$][\w$]*\s*(?:\+\+|--|\+=|-=|=(?!=))",
        r"getState[\s\S]{0,1600}\bbodies\s*\.(?:push|pop|shift|unshift|splice|sort|reverse)\s*\(",
    )
    checks[26] = hook_presence and (frozen_count >= 7 or define_hook_readonly) and not control_method_leak and not getter_side_effect
    evidence[26] = "public hooks expose frozen/read-only snapshot surfaces without control methods or persistent getter-side mutations"

    stable_id_path = _anyrx(
        js,
        r"bodySerial\s*\+\+", r"\+\+bodySerial", r"nextBodyId\s*\(",
        r"function\s+makeId\s*\(", r"(?:id|bodyId)\s*=\s*['\"]?[A-Za-z_-]*['\"]?\s*\+\s*\+\+", r"String\s*\(\s*\+\+bodyId\s*\)", r"bodyId\s*=\s*0[\s\S]{0,5000}\+\+bodyId",
    )
    live_uuid_path = _anyrx(
        js,
        r"uuid\s*:\s*body\.(?:root|mesh|group)\.uuid",
        r"uuid\s*:\s*b\.(?:root|mesh|group)\.uuid",
        r"uuid\s*:\s*(?:root|mesh|group)\.uuid",
    )
    constant_id_generator = _anyrx(
        js,
        r"function\s+makeId\([^)]*\)\s*\{[^}]{0,240}return\s+`?\$?\{?prefix\}?[-_: ]*shared`?",
        r"\bid\s*:\s*['\"]shared-body['\"]",
    )
    checks[27] = stable_id_path and live_uuid_path and live_universe and not constant_id_generator
    evidence[27] = "body IDs come from a nonconstant production ID generator and mesh UUIDs come from live Three.js objects"

    drag_guard = _anyrx(
        js,
        r"pointerTravel\s*>\s*[1-9]",
        r"(?:moved|movement)\s*=\s*[^;\n]*Math\.hypot[\s\S]{0,180}(?:moved|movement)\s*>\s*[1-9]",
        r"Math\.hypot\([^\)]*(?:pointerStart|pointerDown)[^\)]*\)[\s\S]{0,180}>\s*[1-9]",
    )
    checks[28] = controls_ok and drag_guard and _anyrx(js, r"pointerdown") and _anyrx(js, r"pointer(?:move|up)") and not hidden_canvas
    evidence[28] = "canvas pointer path measures drag distance and suppresses placement/select click semantics after camera drags"

    named_resize = _segment(js, r"function\s+(?:resize|handleResize)\b", 2200)
    anonymous_resize = _segment(js, r"addEventListener\s*\(\s*['\"]resize['\"]", 1800)
    resize_source = named_resize + "\n" + anonymous_resize
    resize_bound = _anyrx(
        js,
        r"addEventListener\s*\(\s*['\"]resize['\"]\s*,\s*(?:resize|handleResize)",
        r"addEventListener\s*\(\s*['\"]resize['\"]\s*,\s*\(.*?camera\.aspect",
    )
    checks[29] = (
        _anyrx(resize_source, r"camera\.aspect\s*=")
        and _anyrx(resize_source, r"camera\.updateProjectionMatrix\s*\(")
        and _anyrx(resize_source, r"renderer\.setSize\s*\(")
        and resize_bound
        and not hidden_canvas
    )
    evidence[29] = "resize path updates camera projection and renderer size and is bound to the window resize event"

    start_scenario_segment = _function_block(js, "startScenario")
    bind_calls = len(re.findall(r"\bbind\s*\(\s*\)\s*;", js))
    has_top_level_handlers = _anyrx(js, r"addEventListener\s*\(")
    scenario_rebinds = _anyrx(start_scenario_segment, r"addEventListener\s*\(", r"\bbind\s*\(")
    placement_increment = _anyrx(js, r"placementCount\s*(?:\+\+|\+=\s*1)")
    checks[30] = has_top_level_handlers and not scenario_rebinds and placement_increment and (bind_calls <= 1) and not hidden_canvas
    evidence[30] = "scene rebuild path does not register handlers again and the production placement path increments once"

    settings_listener_source = "\n".join((temperature_listener, rotation_listener, orbital_listener))
    selected_scope = _anyrx(
        settings_listener_source,
        r"const\s+[A-Za-z_$][\w$]*\s*=\s*selected\s*\(\)",
        r"selectedBody",
        r"getBodyById\s*\(",
    )
    bulk_mutation = _anyrx(settings_listener_source, r"for\s*\([^\)]*bodies", r"bodies\.forEach\s*\(")
    checks[31] = selected_scope and checks[16] and checks[17] and checks[18] and not bulk_mutation
    evidence[31] = "all three settings listeners resolve one selected production body and do not iterate/mutate the full body collection"

    schema_tokens = (
        "ready", "gameState", "scenario", "bodyCount", "performance",
        "gravityEnabled", "simulationTime", "physicsStepCount", "orbitModel", "bodies",
        "pendingPlacement", "placementPlane", "lastSpawnedBodyId", "placementCount",
        "selectedObjectId", "settingsOpen", "averageTemperature", "rotationSpeed", "orbitalVelocity",
        "cameraType", "controlsType", "projectionMatrix", "projectionMatrixInverse", "matrixWorld", "matrixWorldInverse",
        "webgl", "frameCount", "drawCalls", "triangles", "sceneBodyMeshCount",
    )
    malformed_matrix_source = _anyrx(
        js,
        r"projectionMatrix[^;\n]{0,180}slice\(\s*0\s*,\s*(?:1[0-5]|[0-9])\s*\)",
        r"matrixWorld[^;\n]{0,180}slice\(\s*0\s*,\s*(?:1[0-5]|[0-9])\s*\)",
    )
    checks[32] = hook_presence and all(token in js for token in schema_tokens) and not malformed_matrix_source
    evidence[32] = "declared root hook fields and full-length camera Matrix4 snapshot paths are present"

    hard_fail_ids: set[int] = set()
    if "render_surface_hidden_or_noninteractive" in integrity_flags:
        hard_fail_ids.update({4, 6, 11, 13, 14, 21, 22, 23, 28, 29, 30, 33, 34, 39})
    if "universe_hook_not_mapped_from_live_body_collection" in integrity_flags:
        hard_fail_ids.update({5, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 27, 31, 33, 34, 35, 36, 37, 38, 39})
    if "renderer_metrics_are_fixed_literals" in integrity_flags:
        hard_fail_ids.update({4, 5, 6, 20, 23, 29})
    for rubric_id in hard_fail_ids:
        checks[rubric_id] = False
        evidence[rubric_id] += "; anti-cheat integrity hard-fail"

    return {
        "checks": checks,
        "evidence": evidence,
        "integrity_flags": integrity_flags,
        "hard_fail_ids": sorted(hard_fail_ids),
    }


# -----------------------------------------------------------------------------
# Numeric / geometry helpers
# -----------------------------------------------------------------------------


def as_dict(value: Any) -> dict:
    return value if isinstance(value, dict) else {}


async def state_dict(ctx, hook: str) -> dict:
    """Read a public snapshot without allowing a wedged fixture to stall the suite.

    A missing/blocked snapshot is evidence of failure for whichever Rubric consumes
    it, not a reason to abort unrelated Rubrics.  The timeout is observational and
    does not mutate product state or convert missing evidence into a pass.
    """
    try:
        return as_dict(await asyncio.wait_for(ctx.get_state(hook), timeout=STATE_READ_TIMEOUT_S))
    except Exception:
        return {}

_NO_EVAL_ARG = object()


async def bounded_evaluate(page, expression: str, arg: Any = _NO_EVAL_ARG, *, timeout: float = EVALUATOR_JS_TIMEOUT_S) -> Any:
    """Evaluator-side JS must never let a wedged renderer abort later Rubrics."""
    try:
        call = page.evaluate(expression) if arg is _NO_EVAL_ARG else page.evaluate(expression, arg)
        return await asyncio.wait_for(call, timeout=timeout)
    except Exception:
        return None


def finite_number(value: Any) -> bool:
    return isinstance(value, (int, float)) and not isinstance(value, bool) and math.isfinite(float(value))


def finite_vec3(value: Any) -> bool:
    return isinstance(value, dict) and all(finite_number(value.get(k)) for k in ("x", "y", "z"))


def body_contract_valid(body: dict | None) -> bool:
    if not isinstance(body, dict):
        return False
    required = {
        "id", "name", "bodyType", "preset", "position", "velocity", "acceleration", "rotation",
        "mass", "radius", "averageTemperature", "rotationSpeed", "orbitalVelocity", "parentStarId",
        "distanceToParent", "orbiting", "meshVisible", "appearance", "mesh", "procedural",
    }
    if not required.issubset(body):
        return False
    if body.get("bodyType") not in {"star", "planet"}:
        return False
    if not isinstance(body.get("id"), str) or not body.get("id") or not isinstance(body.get("name"), str):
        return False
    if not all(finite_vec3(body.get(key)) for key in ("position", "velocity", "acceleration", "rotation")):
        return False
    if not all(finite_number(body.get(key)) for key in ("mass", "radius", "averageTemperature", "rotationSpeed", "orbitalVelocity")):
        return False
    appearance = body.get("appearance")
    mesh = body.get("mesh")
    if not isinstance(appearance, dict) or not {"color", "textureKey", "hasTexture", "materialTypes", "emissiveIntensity", "reliefTechnique", "reliefStrength", "glowMechanisms", "hasLightSource"}.issubset(appearance):
        return False
    if not isinstance(mesh, dict) or not {"uuid", "objectType", "geometryType", "vertexCount", "worldPosition", "worldScale"}.issubset(mesh):
        return False
    if not finite_vec3(mesh.get("worldPosition")) or not finite_vec3(mesh.get("worldScale")):
        return False
    if not finite_number(mesh.get("vertexCount")) or float(mesh.get("vertexCount")) < 0:
        return False
    procedural = body.get("procedural")
    if body.get("preset") == "procedural":
        if not isinstance(procedural, dict) or not {"seed", "scale", "color", "displacementStrength", "roughness", "vertexRadiusVariance"}.issubset(procedural):
            return False
        if not all(finite_number(procedural.get(key)) for key in ("scale", "displacementStrength", "roughness", "vertexRadiusVariance")):
            return False
    return True


def vec_distance(a: dict | None, b: dict | None) -> float:
    if not finite_vec3(a) or not finite_vec3(b):
        return math.inf
    return math.sqrt(sum((float(a[k]) - float(b[k])) ** 2 for k in ("x", "y", "z")))


def vec_length(a: dict | None) -> float:
    if not finite_vec3(a):
        return math.inf
    return math.sqrt(sum(float(a[k]) ** 2 for k in ("x", "y", "z")))


def dot(a: dict | None, b: dict | None) -> float:
    if not finite_vec3(a) or not finite_vec3(b):
        return math.nan
    return sum(float(a[k]) * float(b[k]) for k in ("x", "y", "z"))


def subtract(a: dict | None, b: dict | None) -> dict:
    if not finite_vec3(a) or not finite_vec3(b):
        return {"x": math.nan, "y": math.nan, "z": math.nan}
    return {k: float(a[k]) - float(b[k]) for k in ("x", "y", "z")}


def wrapped_angle_delta(a: float, b: float) -> float:
    if not finite_number(a) or not finite_number(b):
        return math.inf
    d = (float(b) - float(a) + math.pi) % (2 * math.pi) - math.pi
    return abs(d)


def rotation_delta(a: dict | None, b: dict | None) -> float:
    if not finite_vec3(a) or not finite_vec3(b):
        return math.inf
    return math.sqrt(sum(wrapped_angle_delta(float(a[k]), float(b[k])) ** 2 for k in ("x", "y", "z")))


def relative_close(a: Any, b: Any, abs_tol: float = 1e-3, rel_tol: float = 0.03) -> bool:
    if not finite_number(a) or not finite_number(b):
        return False
    return abs(float(a) - float(b)) <= max(abs_tol, rel_tol * max(abs(float(a)), abs(float(b)), 1.0))


def valid_hex_color(value: Any) -> bool:
    return isinstance(value, str) and re.fullmatch(r"#[0-9a-fA-F]{6}", value.strip()) is not None


def color_saturation_and_value(value: str) -> tuple[float, float]:
    """Return HSV-style saturation/value for a #RRGGBB color.

    The prompt requires procedural planets to use a neon color.  A tiny RGB
    channel delta is not a meaningful proxy for "high saturation", so the
    evaluator uses a normalized saturation and brightness threshold instead.
    """
    if not valid_hex_color(value):
        return 0.0, 0.0
    rgb = [int(value[i:i + 2], 16) / 255.0 for i in (1, 3, 5)]
    hi, lo = max(rgb), min(rgb)
    saturation = 0.0 if hi <= 1e-12 else (hi - lo) / hi
    return saturation, hi


def body_by_preset(universe: dict | None, preset: str) -> dict | None:
    for body in (universe or {}).get("bodies", []) or []:
        if body.get("preset") == preset:
            return body
    return None


def body_by_id(universe: dict | None, body_id: Any) -> dict | None:
    for body in (universe or {}).get("bodies", []) or []:
        if body.get("id") == body_id:
            return body
    return None


def count_types(bodies: list[dict]) -> tuple[int, int]:
    planets = sum(1 for b in bodies if b.get("bodyType") == "planet")
    stars = sum(1 for b in bodies if b.get("bodyType") == "star")
    return planets, stars



async def evaluator_observer_state(page) -> dict:
    """Read evaluator-owned browser lifecycle counters injected by the Harness."""
    value = await bounded_evaluate(
        page,
        "() => window.__utObserver && typeof window.__utObserver.snapshot === 'function' ? window.__utObserver.snapshot() : null",
        timeout=2.0,
    )
    return value if isinstance(value, dict) else {}

async def visible(locator) -> bool:
    try:
        return await locator.count() > 0 and await locator.first.is_visible()
    except Exception:
        return False


async def enabled(locator) -> bool:
    try:
        return await visible(locator) and await locator.first.is_enabled()
    except Exception:
        return False


async def safe_click(locator, timeout: int = TEST_UI_TIMEOUT_MS) -> bool:
    """Attempt a real Playwright click without letting a bad fixture abort later rubrics."""
    if not await enabled(locator):
        return False
    try:
        await locator.first.click(timeout=timeout)
        return True
    except Exception:
        return False


async def menu_style_probe(page) -> dict:
    try:
        return await page.evaluate(
            r"""() => {
                const menu = document.querySelector('#mainMenu');
                const play = document.querySelector('[data-testid="play-btn"]');
                const title = menu && (menu.querySelector('h1, .title, [class*="title"]') || menu.firstElementChild);
                if (!menu || !play) return {ok:false};
                const style = getComputedStyle(menu);
                const bodyStyle = getComputedStyle(document.body);
                const playStyle = getComputedStyle(play);
                const titleStyle = title ? getComputedStyle(title) : null;
                const rect = play.getBoundingClientRect();
                const parse = (value) => {
                    const m = String(value || '').match(/rgba?\((\d+)[, ]+(\d+)[, ]+(\d+)/i);
                    return m ? [Number(m[1]), Number(m[2]), Number(m[3])] : null;
                };
                const candidates = [parse(style.backgroundColor), parse(bodyStyle.backgroundColor)].filter(Boolean);
                const dark = candidates.some(rgb => (rgb[0] + rgb[1] + rgb[2]) / 3 < 90)
                    || style.backgroundImage !== 'none'
                    || bodyStyle.backgroundImage !== 'none';
                return {
                    ok: true,
                    dark,
                    menuBackgroundImage: style.backgroundImage,
                    bodyBackgroundImage: bodyStyle.backgroundImage,
                    playWidth: rect.width,
                    playHeight: rect.height,
                    playFontSize: parseFloat(playStyle.fontSize) || 0,
                    titleFontSize: titleStyle ? (parseFloat(titleStyle.fontSize) || 0) : 0,
                    playVisible: rect.width > 60 && rect.height > 26 && playStyle.visibility !== 'hidden' && playStyle.display !== 'none',
                };
            }"""
        )
    except Exception:
        return {"ok": False}


async def canvas_integrity_probe(page) -> dict:
    try:
        return await page.evaluate(
            """() => {
                const c = document.querySelector('[data-testid="space-canvas"]');
                if (!c || !(c instanceof HTMLCanvasElement)) return {ok:false, canvas:false};
                const style = getComputedStyle(c);
                const rect = c.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const top = document.elementFromPoint(cx, cy);
                const gl = c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl');
                const visible = rect.width > 8 && rect.height > 8 && style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0.05;
                const interactive = style.pointerEvents !== 'none' && Boolean(top && (top === c || c.contains(top) || top.closest?.('#canvasHost, #gameScreen')));
                return {
                    ok: true,
                    canvas: true,
                    webgl: !!gl,
                    visible,
                    interactive,
                    width: c.width,
                    height: c.height,
                    clientWidth: c.clientWidth,
                    clientHeight: c.clientHeight,
                    opacity: style.opacity,
                    pointerEvents: style.pointerEvents,
                    display: style.display,
                    visibility: style.visibility,
                    contextLost: gl && typeof gl.isContextLost === 'function' ? gl.isContextLost() : null,
                };
            }"""
        )
    except Exception:
        return {"ok": False}


def visual_body_signature(body: dict | None) -> tuple:
    appearance = as_dict((body or {}).get("appearance"))
    return (
        appearance.get("color"),
        appearance.get("textureKey"),
        tuple(appearance.get("materialTypes") or []),
        round(float((body or {}).get("radius") or 0), 3),
    )


async def wait_game_state(page, desired: str, timeout: int = TEST_UI_TIMEOUT_MS) -> bool:
    try:
        await page.wait_for_function(
            "desired => window.__game && window.__game.getState && window.__game.getState().gameState === desired",
            arg=desired,
            timeout=timeout,
        )
        return True
    except Exception:
        return False


async def wait_scenario(page, desired: str, timeout: int = TEST_UI_TIMEOUT_MS) -> bool:
    try:
        await page.wait_for_function(
            "desired => window.__game && window.__game.getState && window.__game.getState().scenario === desired",
            arg=desired,
            timeout=timeout,
        )
        return True
    except Exception:
        return False


async def wait_simulation_delta(page, baseline: Any, delta: float, timeout: int = 1200) -> bool:
    """Wait on observed simulation progress instead of sleeping for an arbitrary wall time."""
    if not finite_number(baseline):
        return False
    try:
        await page.wait_for_function(
            "([start, delta]) => { const u=window.__universe?.getState?.(); return u && Number.isFinite(u.simulationTime) && u.simulationTime >= start + delta; }",
            arg=[float(baseline), float(delta)],
            timeout=timeout,
        )
        return True
    except Exception:
        return False


async def enter_scenario(page, desired: str) -> bool:
    """Establish one Rubric's scenario through the public UI, independent of prior checks.

    Negative fixtures often leave the previous scenario in a broken state.  A later
    Rubric should fail for its own observable requirement, not merely because an
    earlier fixture defect prevented test setup.  This helper performs only normal
    player navigation and never mutates product state directly.
    """
    game = as_dict(await bounded_evaluate(page, "() => window.__game?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    if game.get("gameState") == "playing":
        if not await safe_click(contract_locator(page, "data-testid=menu-btn")):
            return False
        if not await wait_game_state(page, "menu"):
            return False
    elif game.get("gameState") == "scenario_select":
        # The public UI has no dedicated back contract; return to menu through the
        # visible product control only when one exists, otherwise reload navigation
        # by choosing a scenario below.
        pass

    game = as_dict(await bounded_evaluate(page, "() => window.__game?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    if game.get("gameState") == "menu":
        if not await safe_click(contract_locator(page, "data-testid=play-btn")):
            return False
        if not await wait_game_state(page, "scenario_select"):
            return False

    token = "data-testid=solar-system-btn" if desired == "solar_system" else "data-testid=custom-sandbox-btn"
    if not await safe_click(contract_locator(page, token)):
        return False
    if not await wait_scenario(page, desired):
        return False
    await page.wait_for_timeout(50)
    final_game = as_dict(await bounded_evaluate(page, "() => window.__game?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    return bool(final_game.get("gameState") == "playing" and final_game.get("scenario") == desired)


async def set_range(locator, value: float) -> bool:
    try:
        if await locator.count() <= 0:
            return False
        await locator.first.evaluate(
            """(el, value) => {
                el.value = String(value);
                el.dispatchEvent(new Event('input', {bubbles: true}));
                el.dispatchEvent(new Event('change', {bubbles: true}));
            }""",
            value,
            timeout=TEST_UI_TIMEOUT_MS,
        )
        return True
    except Exception:
        return False


async def range_bounds(locator) -> tuple[float, float, float]:
    try:
        if await locator.count() <= 0:
            return 0.0, 100.0, 0.1
        minimum = float(await locator.first.get_attribute("min", timeout=TEST_UI_TIMEOUT_MS) or 0)
        maximum = float(await locator.first.get_attribute("max", timeout=TEST_UI_TIMEOUT_MS) or 100)
        step_raw = await locator.first.get_attribute("step", timeout=TEST_UI_TIMEOUT_MS)
        step = float(step_raw) if step_raw not in (None, "", "any") else max((maximum - minimum) / 1000, 1e-6)
        if maximum <= minimum:
            maximum = minimum + 1
        return minimum, maximum, abs(step)
    except Exception:
        return 0.0, 100.0, 0.1


def alternate_range_value(current: Any, minimum: float, maximum: float, step: float) -> float:
    """Pick a legal slider value observably different from current."""
    cur = float(current) if finite_number(current) else minimum
    span = max(maximum - minimum, abs(step), 1e-6)
    delta = max(abs(step) * 3, span * 0.18)
    candidate = cur + delta if cur + delta <= maximum else cur - delta
    candidate = max(minimum, min(maximum, candidate))
    if abs(candidate - cur) < max(abs(step) * 0.5, 1e-6):
        candidate = maximum if abs(maximum - cur) >= abs(cur - minimum) else minimum
    return candidate


def valid_matrix4(value: Any) -> bool:
    return isinstance(value, list) and len(value) == 16 and all(finite_number(v) for v in value)


def transform4(matrix: list, vector: tuple[float, float, float, float]) -> tuple[float, float, float, float]:
    """Multiply a Three.js column-major Matrix4 by a column vector."""
    x, y, z, w = vector
    e = [float(v) for v in matrix]
    return (
        e[0] * x + e[4] * y + e[8] * z + e[12] * w,
        e[1] * x + e[5] * y + e[9] * z + e[13] * w,
        e[2] * x + e[6] * y + e[10] * z + e[14] * w,
        e[3] * x + e[7] * y + e[11] * z + e[15] * w,
    )


def homogenize(v: tuple[float, float, float, float]) -> dict | None:
    if not finite_number(v[3]) or abs(float(v[3])) < 1e-12:
        return None
    w = float(v[3])
    point = {"x": float(v[0]) / w, "y": float(v[1]) / w, "z": float(v[2]) / w}
    return point if finite_vec3(point) else None


def normalize_vec3(v: dict | None) -> dict | None:
    length = vec_length(v)
    if not finite_number(length) or length <= 1e-12:
        return None
    return {k: float(v[k]) / float(length) for k in ("x", "y", "z")}


async def canvas_box(page) -> dict | None:
    try:
        return await contract_locator(page, "data-testid=space-canvas").bounding_box()
    except Exception:
        return None


async def camera_state(page) -> dict:
    return as_dict(await bounded_evaluate(page, "() => window.__camera?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))


async def project_world_to_canvas(page, world: dict | None) -> dict | None:
    """Project a world point using only the public read-only camera matrices."""
    if not finite_vec3(world):
        return None
    camera = await camera_state(page)
    box = await canvas_box(page)
    projection = camera.get("projectionMatrix")
    view = camera.get("matrixWorldInverse")
    if not box or not valid_matrix4(projection) or not valid_matrix4(view):
        return None
    view_pos = transform4(view, (float(world["x"]), float(world["y"]), float(world["z"]), 1.0))
    clip = transform4(projection, view_pos)
    if not finite_number(clip[3]) or abs(float(clip[3])) < 1e-12:
        return None
    ndc = {"x": clip[0] / clip[3], "y": clip[1] / clip[3], "z": clip[2] / clip[3]}
    if not finite_vec3(ndc):
        return None
    return {
        "x": float(box["x"]) + (float(ndc["x"]) + 1.0) * 0.5 * float(box["width"]),
        "y": float(box["y"]) + (1.0 - float(ndc["y"])) * 0.5 * float(box["height"]),
        "visible": bool(clip[3] > 0 and -1 <= ndc["x"] <= 1 and -1 <= ndc["y"] <= 1 and -1 <= ndc["z"] <= 1),
        "ndc": ndc,
    }


async def canvas_patch_probe(page, screen: dict | None, radius: int = 12) -> dict:
    """Sample the actual viewport pixels near one projected world position.

    The screenshot is clipped to the local evidence region before PNG encoding.
    This preserves independent browser-render evidence while avoiding repeated
    full-viewport captures, which can make negative-fixture calibration dominated
    by software-renderer overhead rather than product behavior.
    """
    if not isinstance(screen, dict) or screen.get("visible") is not True:
        return {}
    try:
        viewport = page.viewport_size or {"width": 1280, "height": 800}
        x, y = float(screen["x"]), float(screen["y"])
        r = max(3.0, float(radius))
        left = max(0.0, x - r)
        top = max(0.0, y - r)
        right = min(float(viewport["width"]), x + r + 1.0)
        bottom = min(float(viewport["height"]), y + r + 1.0)
        if right <= left or bottom <= top:
            return {}
        clip = {"x": left, "y": top, "width": right - left, "height": bottom - top}
        png = await page.screenshot(type="png", animations="disabled", clip=clip, timeout=5000)
        encoded = base64.b64encode(png).decode("ascii")
        return as_dict(await bounded_evaluate(page,
            """async ({pngBase64, clipWidth, clipHeight}) => {
                const img = new Image();
                const loaded = new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; });
                img.src = 'data:image/png;base64,' + pngBase64;
                await loaded;
                const scratch = document.createElement('canvas');
                scratch.width = img.naturalWidth; scratch.height = img.naturalHeight;
                const ctx = scratch.getContext('2d', {willReadFrequently:true});
                if (!ctx) return null;
                ctx.drawImage(img, 0, 0);
                const data = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;
                let sumLum=0, maxLum=0, signal=0, bestScore=-1, best=[0,0,0];
                for (let i=0; i<data.length; i+=4) {
                    const r=data[i]/255, g=data[i+1]/255, b=data[i+2]/255;
                    const hi=Math.max(r,g,b), lo=Math.min(r,g,b);
                    const sat=hi>1e-9 ? (hi-lo)/hi : 0;
                    const lum=0.2126*r+0.7152*g+0.0722*b;
                    const score=lum*0.55+sat*0.45;
                    sumLum+=lum; maxLum=Math.max(maxLum,lum);
                    if (lum>0.06 || sat>0.20) signal++;
                    if (score>bestScore) { bestScore=score; best=[r,g,b]; }
                }
                const n=Math.max(1,data.length/4);
                return {meanLuminance:sumLum/n,maxLuminance:maxLum,signalFraction:signal/n,representativeRgb:best,
                    sampleWidth:img.naturalWidth,sampleHeight:img.naturalHeight,
                    screenshotWidth:img.naturalWidth,screenshotHeight:img.naturalHeight,
                    clipCssWidth:clipWidth,clipCssHeight:clipHeight};
            }""",
            {"pngBase64": encoded, "clipWidth": clip["width"], "clipHeight": clip["height"]},
        ))
    except Exception:
        return {}


async def canvas_multi_patch_probe(page, screens: dict[str, dict | None], radius: int = 10) -> dict[str, dict]:
    """Sample several projected points from one clipped real viewport screenshot."""
    valid = {name: point for name, point in screens.items() if isinstance(point, dict) and point.get("visible") is True}
    if not valid:
        return {name: {} for name in screens}
    try:
        viewport = page.viewport_size or {"width": 1280, "height": 800}
        r = max(3.0, float(radius))
        xs = [float(point["x"]) for point in valid.values()]
        ys = [float(point["y"]) for point in valid.values()]
        left = max(0.0, min(xs) - r)
        top = max(0.0, min(ys) - r)
        right = min(float(viewport["width"]), max(xs) + r + 1.0)
        bottom = min(float(viewport["height"]), max(ys) + r + 1.0)
        if right <= left or bottom <= top:
            return {name: {} for name in screens}
        clip = {"x": left, "y": top, "width": right-left, "height": bottom-top}
        png = await page.screenshot(type="png", animations="disabled", clip=clip, timeout=5000)
        encoded = base64.b64encode(png).decode("ascii")
        result = as_dict(await bounded_evaluate(page,
            """async ({pngBase64, points, radius, clip}) => {
                const img=new Image();
                const loaded=new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject;});
                img.src='data:image/png;base64,'+pngBase64; await loaded;
                const scratch=document.createElement('canvas'); scratch.width=img.naturalWidth; scratch.height=img.naturalHeight;
                const ctx=scratch.getContext('2d',{willReadFrequently:true}); if(!ctx) return {};
                ctx.drawImage(img,0,0);
                const sx=img.naturalWidth/Math.max(1,clip.width), sy=img.naturalHeight/Math.max(1,clip.height);
                const rr=Math.max(2,Math.round(radius*Math.max(sx,sy))); const out={};
                for (const [name,point] of Object.entries(points)) {
                    const px=(point.x-clip.x)*sx, py=(point.y-clip.y)*sy;
                    const l=Math.max(0,Math.floor(px-rr)), t=Math.max(0,Math.floor(py-rr));
                    const w=Math.max(1,Math.min(img.naturalWidth-l,rr*2+1)), h=Math.max(1,Math.min(img.naturalHeight-t,rr*2+1));
                    const data=ctx.getImageData(l,t,w,h).data;
                    let sumLum=0,maxLum=0,signal=0,bestScore=-1,best=[0,0,0];
                    for(let i=0;i<data.length;i+=4){
                        const r=data[i]/255,g=data[i+1]/255,b=data[i+2]/255;
                        const hi=Math.max(r,g,b),lo=Math.min(r,g,b),sat=hi>1e-9?(hi-lo)/hi:0;
                        const lum=0.2126*r+0.7152*g+0.0722*b,score=lum*0.55+sat*0.45;
                        sumLum+=lum;maxLum=Math.max(maxLum,lum);if(lum>0.06||sat>0.20)signal++;
                        if(score>bestScore){bestScore=score;best=[r,g,b];}
                    }
                    const n=Math.max(1,data.length/4);
                    out[name]={meanLuminance:sumLum/n,maxLuminance:maxLum,signalFraction:signal/n,representativeRgb:best,
                        sampleWidth:w,sampleHeight:h,screenshotWidth:img.naturalWidth,screenshotHeight:img.naturalHeight,
                        clipCssWidth:clip.width,clipCssHeight:clip.height};
                }
                return out;
            }""",
            {"pngBase64": encoded, "points": valid, "radius": int(radius), "clip": clip},
        ))
        return {name: as_dict(result.get(name)) for name in screens}
    except Exception:
        return {name: {} for name in screens}


async def visible_body_patch(page, body: dict | None, radius: int = 10) -> tuple[dict | None, dict]:
    """Cross-check one reported body against what is actually visible to the player."""
    world = as_dict((body or {}).get("mesh")).get("worldPosition") or (body or {}).get("position")
    screen = await project_world_to_canvas(page, world)
    patch = await canvas_patch_probe(page, screen, radius)
    return screen, patch


def patch_has_body_signal(screen: dict | None, patch: dict, *, minimum_signal: float = 0.10) -> bool:
    """Conservative local render evidence; avoids treating a blank starfield as a body."""
    return bool(
        isinstance(screen, dict) and screen.get("visible") is True
        and finite_number(patch.get("signalFraction"))
        and float(patch.get("signalFraction", 0)) >= minimum_signal
        and finite_number(patch.get("maxLuminance"))
        and float(patch.get("maxLuminance", 0)) >= 0.015
    )


def screen_distance(a: dict | None, b: dict | None) -> float:
    if not (isinstance(a, dict) and isinstance(b, dict)):
        return math.inf
    if not all(finite_number(value) for value in (a.get("x"), a.get("y"), b.get("x"), b.get("y"))):
        return math.inf
    return math.hypot(float(b["x"]) - float(a["x"]), float(b["y"]) - float(a["y"]))


def rgb_distance(a: Any, b: Any) -> float:
    if not (isinstance(a, list) and isinstance(b, list) and len(a) == 3 and len(b) == 3):
        return math.inf
    if not all(finite_number(v) for v in [*a, *b]):
        return math.inf
    return math.sqrt(sum((float(x) - float(y)) ** 2 for x, y in zip(a, b)))


async def ray_plane_intersection_for_client_point(page, client_x: float, client_y: float) -> dict | None:
    """Independently unproject a canvas point and intersect the public placement plane."""
    camera = await camera_state(page)
    spawner = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    box = await canvas_box(page)
    projection_inverse = camera.get("projectionMatrixInverse")
    matrix_world = camera.get("matrixWorld")
    plane = as_dict(spawner.get("placementPlane"))
    normal = as_dict(plane.get("normal"))
    constant = plane.get("constant")
    if (
        not box
        or not valid_matrix4(projection_inverse)
        or not valid_matrix4(matrix_world)
        or not finite_vec3(normal)
        or not finite_number(constant)
        or float(box.get("width", 0)) <= 0
        or float(box.get("height", 0)) <= 0
    ):
        return None
    nx = ((float(client_x) - float(box["x"])) / float(box["width"])) * 2.0 - 1.0
    ny = 1.0 - ((float(client_y) - float(box["y"])) / float(box["height"])) * 2.0

    def unproject(ndc_z: float) -> dict | None:
        camera_h = transform4(projection_inverse, (nx, ny, ndc_z, 1.0))
        camera_point = homogenize(camera_h)
        if not camera_point:
            return None
        world_h = transform4(matrix_world, (camera_point["x"], camera_point["y"], camera_point["z"], 1.0))
        return homogenize(world_h)

    near = unproject(-1.0)
    far = unproject(1.0)
    direction = normalize_vec3(subtract(far, near)) if near and far else None
    if not near or not direction:
        return None
    denom = dot(normal, direction)
    if not finite_number(denom) or abs(float(denom)) < 1e-10:
        return None
    numerator = -(dot(normal, near) + float(constant))
    t = float(numerator) / float(denom)
    if not finite_number(t) or t < 0:
        return None
    hit = {k: float(near[k]) + t * float(direction[k]) for k in ("x", "y", "z")}
    return hit if finite_vec3(hit) else None


async def choose_canvas_placement(page, fractions: list[tuple[float, float]]) -> tuple[dict | None, dict | None]:
    box = await canvas_box(page)
    if not box:
        return None, None
    for fx, fy in fractions:
        x = float(box["x"]) + float(box["width"]) * float(fx)
        y = float(box["y"]) + float(box["height"]) * float(fy)
        ground_truth = await ray_plane_intersection_for_client_point(page, x, y)
        if ground_truth:
            return {"x": x, "y": y}, ground_truth
    return None, None


async def exit_spawn_mode(page) -> bool:
    """Return to ordinary selection mode using only real user input."""
    state = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    if state.get("mode") == "idle" and state.get("pendingPlacement") is False:
        return True
    try:
        await page.keyboard.press("Escape")
        await page.wait_for_timeout(50)
    except Exception:
        pass
    state = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    if state.get("mode") == "idle" and state.get("pendingPlacement") is False:
        return True
    # Fallback to toggling the currently active public toolbar control. This is
    # setup only; no Rubric is awarded for supporting either exit gesture.
    mode = state.get("mode")
    token = "data-testid=spawn-object-btn" if mode == "planet" else "data-testid=spawn-star-btn" if mode == "star" else None
    if token:
        button = contract_locator(page, token)
        if await enabled(button):
            if await safe_click(button):
                await page.wait_for_timeout(50)
    state = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    return bool(state.get("mode") == "idle" and state.get("pendingPlacement") is False)


async def select_body_by_click(page, body_id: str) -> tuple[bool, dict | None]:
    await exit_spawn_mode(page)
    universe = as_dict(await bounded_evaluate(page, "() => window.__universe?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    body = body_by_id(universe, body_id)
    screen = await project_world_to_canvas(page, (body or {}).get("position"))
    if screen and screen.get("visible") is True:
        try:
            await page.mouse.click(float(screen["x"]), float(screen["y"]))
            await page.wait_for_timeout(80)
        except Exception:
            pass
    selection = as_dict(await bounded_evaluate(page, "() => window.__selection?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    return bool(body and screen and screen.get("visible") is True and selection.get("selectedObjectId") == body_id), screen


async def arm_planet(page, preset: str) -> tuple[bool, dict | None]:
    selector = contract_locator(page, "data-testid=spawn-object-select")
    button = contract_locator(page, "data-testid=spawn-object-btn")
    try:
        await selector.select_option(preset, timeout=TEST_UI_TIMEOUT_MS)
    except Exception:
        try:
            if await selector.count() <= 0:
                raise RuntimeError("spawn preset selector missing")
            await selector.evaluate(
                """(el, value) => {
                    el.value = value;
                    el.dispatchEvent(new Event('input', {bubbles:true}));
                    el.dispatchEvent(new Event('change', {bubbles:true}));
                }""",
                preset,
                timeout=TEST_UI_TIMEOUT_MS,
            )
        except Exception:
            pass
    await page.wait_for_timeout(50)
    state = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    if not state or state.get("mode") != "planet" or state.get("pendingPlacement") is not True:
        if await safe_click(button):
            await page.wait_for_timeout(70)
    state = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    ok = bool(
        state
        and state.get("mode") == "planet"
        and state.get("pendingPlacement") is True
        and state.get("selectedPreset") == preset
    )
    return ok, state


async def arm_star(page) -> tuple[bool, dict | None]:
    button = contract_locator(page, "data-testid=spawn-star-btn")
    state = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    if not state or state.get("mode") != "star" or state.get("pendingPlacement") is not True:
        if await safe_click(button):
            await page.wait_for_timeout(70)
    state = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    ok = bool(state and state.get("mode") == "star" and state.get("pendingPlacement") is True)
    return ok, state


async def spawn_planet(page, preset: str, fractions: list[tuple[float, float]]) -> dict:
    before = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    armed, armed_state = await arm_planet(page, preset)
    point, ground_truth = await choose_canvas_placement(page, fractions) if armed else (None, None)
    if armed and point:
        await page.mouse.click(float(point["x"]), float(point["y"]))
        await page.wait_for_timeout(50)
    after = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    universe = as_dict(await bounded_evaluate(page, "() => window.__universe?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    body = body_by_id(universe, (after or {}).get("lastSpawnedBodyId"))
    return {
        "armed": armed,
        "armedState": armed_state,
        "before": before,
        "after": after,
        "point": point,
        "groundTruth": ground_truth,
        "body": body,
        "universe": universe,
    }


async def spawn_star(page, fractions: list[tuple[float, float]]) -> dict:
    before = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    armed, armed_state = await arm_star(page)
    point, ground_truth = await choose_canvas_placement(page, fractions) if armed else (None, None)
    if armed and point:
        await page.mouse.click(float(point["x"]), float(point["y"]))
        await page.wait_for_timeout(50)
    after = as_dict(await bounded_evaluate(page, "() => window.__spawner?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    universe = as_dict(await bounded_evaluate(page, "() => window.__universe?.getState?.() || null", timeout=STATE_READ_TIMEOUT_S))
    body = body_by_id(universe, (after or {}).get("lastSpawnedBodyId"))
    return {
        "armed": armed,
        "armedState": armed_state,
        "before": before,
        "after": after,
        "point": point,
        "groundTruth": ground_truth,
        "body": body,
        "universe": universe,
    }


async def open_settings(page) -> bool:
    button = contract_locator(page, "data-testid=object-settings-btn")
    if await safe_click(button):
        await page.wait_for_timeout(70)
    return await visible(contract_locator(page, "id=objectSettingsPanel"))


async def run_checks(page, ctx):
    contract_probe = await public_contract_probe(page)
    play = contract_locator(page, "data-testid=play-btn")
    main_menu = contract_locator(page, "id=mainMenu")
    scenario_select = contract_locator(page, "id=scenarioSelect")
    solar_button = contract_locator(page, "data-testid=solar-system-btn")
    custom_button = contract_locator(page, "data-testid=custom-sandbox-btn")
    canvas = contract_locator(page, "data-testid=space-canvas")
    toolbar = contract_locator(page, "id=sandboxToolbar")

    # 1. Boot/menu
    try:
        await page.wait_for_function(
            "() => window.__game && window.__game.getState && window.__game.getState().ready === true",
            timeout=10000,
        )
    except Exception:
        pass
    game0 = await state_dict(ctx, "__game")
    init_ok = bool(
        game0
        and game0.get("ready") is True
        and game0.get("gameState") == "menu"
        and await visible(main_menu)
        and await enabled(play)
        and len(getattr(ctx, "page_errors", [])) == 0
    )
    ctx.check(1, init_ok, f"game={game0}, publicHooks={contract_probe}, mainVisible={await visible(main_menu)}, playEnabled={await enabled(play)}, pageErrors={getattr(ctx, 'page_errors', [])}")

    # 2. Pure visual menu quality is judged from the real rendered screenshot.
    await ctx.vlm(
        2,
        "判断当前主菜单是否整体呈现 sleek、dark sci-fi 风格：应有明确的深色科幻视觉语言、清晰的信息层级和显著的 Play 主操作；仅有深色背景或普通按钮不足以通过。",
    )

    # 3. Scenario selection
    if await safe_click(play):
        await page.wait_for_timeout(200)
    await wait_game_state(page, "scenario_select")
    game_select = await state_dict(ctx, "__game")
    selection_ok = bool(
        game_select
        and game_select.get("gameState") == "scenario_select"
        and await visible(scenario_select)
        and await enabled(solar_button)
        and await enabled(custom_button)
        and not await visible(main_menu)
    )
    ctx.check(3, selection_ok, f"game={game_select}, scenarioVisible={await visible(scenario_select)}, solar={await enabled(solar_button)}, custom={await enabled(custom_button)}")

    # 4. Enter Solar System / real interactive WebGL canvas
    await safe_click(solar_button)
    await wait_scenario(page, "solar_system")
    await page.wait_for_timeout(50)
    game_solar = await state_dict(ctx, "__game")
    renderer_solar = await state_dict(ctx, "__renderer")
    webgl_actual = await canvas_integrity_probe(page)
    game_screen = contract_locator(page, "id=gameScreen")
    menu_button = contract_locator(page, "data-testid=menu-btn")
    game_active_ok = bool(
        game_solar
        and game_solar.get("gameState") == "playing"
        and game_solar.get("scenario") == "solar_system"
        and await visible(game_screen)
        and await visible(canvas)
        and webgl_actual.get("webgl") is True
        and webgl_actual.get("visible") is True
        and webgl_actual.get("interactive") is True
        and webgl_actual.get("contextLost") is not True
        and renderer_solar
        and renderer_solar.get("webgl") is True
        and isinstance(game_solar.get("canvas"), dict)
        and abs(float(game_solar["canvas"].get("clientWidth", 0)) - float(webgl_actual.get("clientWidth", 0))) <= 2
        and abs(float(game_solar["canvas"].get("clientHeight", 0)) - float(webgl_actual.get("clientHeight", 0))) <= 2
        and abs(float(renderer_solar.get("clientWidth", 0)) - float(webgl_actual.get("clientWidth", 0))) <= 2
        and abs(float(renderer_solar.get("clientHeight", 0)) - float(webgl_actual.get("clientHeight", 0))) <= 2
    )
    ctx.check(4, game_active_ok, f"game={game_solar}, renderer={renderer_solar}, actual={webgl_actual}, canvasVisible={await visible(canvas)}")

    # 29. Resize is exercised early on the fresh Solar world so viewport behavior
    # is isolated from later sandbox object churn and settings mutations.
    resize_game_before = await state_dict(ctx, "__game")
    resize_renderer_before = await state_dict(ctx, "__renderer")
    resize_camera_before = await state_dict(ctx, "__camera")
    resize_universe_before = await state_dict(ctx, "__universe")
    resize_ids_before = [b.get("id") for b in (resize_universe_before or {}).get("bodies", []) or []]
    old_viewport = page.viewport_size or {"width": 1280, "height": 800}
    new_width = 1000 if int(old_viewport.get("width", 1280)) != 1000 else 1120
    new_height = 700 if int(old_viewport.get("height", 800)) != 700 else 740
    await page.set_viewport_size({"width": new_width, "height": new_height})
    # Chromium normally dispatches resize for set_viewport_size(), but some
    # headed/virtual-display combinations update CSS viewport metrics before
    # delivering that event. Dispatch the standard browser resize event as a
    # transport nudge; the product still has to react through its real handler.
    await bounded_evaluate(page, "window.dispatchEvent(new Event('resize'))")
    try:
        await page.wait_for_function(
            """([w,h]) => {
                const r = window.__renderer?.getState?.();
                return r
                    && Math.abs(r.clientWidth - w) <= 2
                    && Math.abs(r.clientHeight - h) <= 2
                    && Math.abs(r.canvasWidth - w * (r.pixelRatio || 1)) <= 3
                    && Math.abs(r.canvasHeight - h * (r.pixelRatio || 1)) <= 3;
            }""",
            arg=[new_width, new_height],
            timeout=4000,
        )
    except Exception:
        pass
    resize_game_after = await state_dict(ctx, "__game")
    resize_renderer_after = await state_dict(ctx, "__renderer")
    resize_camera_after = await state_dict(ctx, "__camera")
    resize_universe_after = await state_dict(ctx, "__universe")
    resize_ids_after = [b.get("id") for b in (resize_universe_after or {}).get("bodies", []) or []]
    projection_changed = bool(
        valid_matrix4(resize_camera_before.get("projectionMatrix"))
        and valid_matrix4(resize_camera_after.get("projectionMatrix"))
        and any(abs(float(a) - float(b)) > 1e-6 for a, b in zip(resize_camera_before["projectionMatrix"], resize_camera_after["projectionMatrix"]))
    )
    resize_ok = bool(
        abs(float(resize_renderer_after.get("clientWidth", 0)) - new_width) <= 2
        and abs(float(resize_renderer_after.get("clientHeight", 0)) - new_height) <= 2
        and abs(float((resize_game_after.get("canvas") or {}).get("clientWidth", 0)) - new_width) <= 2
        and abs(float((resize_game_after.get("canvas") or {}).get("clientHeight", 0)) - new_height) <= 2
        and projection_changed
        and resize_ids_before == resize_ids_after
        and resize_game_after.get("bodyCount") == resize_game_before.get("bodyCount")
    )
    await page.set_viewport_size({"width": int(old_viewport.get("width", 1280)), "height": int(old_viewport.get("height", 800))})
    await bounded_evaluate(page, "window.dispatchEvent(new Event('resize'))")
    await page.wait_for_timeout(80)
    ctx.check(29, resize_ok, f"viewport={old_viewport}->{new_width}x{new_height}, renderer={resize_renderer_before}->{resize_renderer_after}, projectionChanged={projection_changed}, ids={resize_ids_before}->{resize_ids_after}")


    # 5. Solar body set and real render roots
    universe_solar = await state_dict(ctx, "__universe")
    game_solar = await state_dict(ctx, "__game")
    renderer_solar = await state_dict(ctx, "__renderer")
    bodies_solar = (universe_solar or {}).get("bodies", []) or []
    sun = body_by_preset(universe_solar, "sun")
    earth = body_by_preset(universe_solar, "earth")
    mars = body_by_preset(universe_solar, "mars")
    jupiter = body_by_preset(universe_solar, "jupiter")
    ids = [b.get("id") for b in bodies_solar]
    planets_n, stars_n = count_types(bodies_solar)
    body_render_valid = all(
        isinstance((b.get("mesh") or {}).get("uuid"), str)
        and len((b.get("mesh") or {}).get("uuid", "")) > 5
        and (b.get("mesh") or {}).get("objectType") in ("Mesh", "Group", "Object3D")
        and finite_vec3((b.get("mesh") or {}).get("worldPosition"))
        for b in (sun, earth, mars, jupiter)
        if b
    )
    solar_screens = {
        preset: await project_world_to_canvas(page, as_dict((body or {}).get("mesh")).get("worldPosition") or (body or {}).get("position"))
        for preset, body in (("sun", sun), ("earth", earth), ("mars", mars), ("jupiter", jupiter))
    }
    solar_patches = await canvas_multi_patch_probe(page, solar_screens, 12)
    solar_presence = {
        preset: {"screen": solar_screens.get(preset), "patch": solar_patches.get(preset, {}), "visible": patch_has_body_signal(solar_screens.get(preset), solar_patches.get(preset, {}))}
        for preset in ("sun", "earth", "mars", "jupiter")
    }
    visible_solar_bodies = all(entry.get("visible") is True for entry in solar_presence.values())
    solar_set_ok = bool(
        sun and earth and mars and jupiter
        and sun.get("bodyType") == "star"
        and all(p.get("bodyType") == "planet" and p.get("parentStarId") == sun.get("id") for p in (earth, mars, jupiter))
        and len(ids) == len(set(ids))
        and all(body_contract_valid(body) for body in (sun, earth, mars, jupiter))
        and body_render_valid
        and visible_solar_bodies
        and game_solar.get("bodyCount") == len(bodies_solar)
        and game_solar.get("planetCount") == planets_n
        and game_solar.get("starCount") == stars_n
        and renderer_solar.get("sceneBodyMeshCount") == len(bodies_solar)
    )
    ctx.check(5, solar_set_ok, f"presets={[b.get('preset') for b in bodies_solar]}, counts=game:{game_solar.get('bodyCount')}/{game_solar.get('planetCount')}/{game_solar.get('starCount')} actual:{len(bodies_solar)}/{planets_n}/{stars_n}, renderRoots={renderer_solar.get('sceneBodyMeshCount')}, renderValid={body_render_valid}, visibleBodies={solar_presence}")

    # 6 / 33 / 34. Atomic 3D geometry, preset appearance, and solar-star glow evidence.
    planet_signatures = {visual_body_signature(body) for body in (earth, mars, jupiter) if body}
    sun_appearance = as_dict((sun or {}).get("appearance"))
    sun_luminous = bool(
        float(sun_appearance.get("emissiveIntensity") or 0) > 0
        or sun_appearance.get("hasLightSource") is True
        or len(sun_appearance.get("glowMechanisms") or []) > 0
    )
    geometry_3d_ok = bool(
        webgl_actual.get("visible") is True
        and webgl_actual.get("interactive") is True
        and renderer_solar.get("drawCalls", 0) > 0
        and renderer_solar.get("triangles", 0) > 0
        and all(
            isinstance(as_dict((body or {}).get("mesh")).get("geometryType"), str)
            and finite_number(as_dict((body or {}).get("mesh")).get("vertexCount"))
            and float(as_dict((body or {}).get("mesh")).get("vertexCount")) > 0
            for body in (sun, earth, mars, jupiter)
            if body
        )
    )
    planet_screens = {
        preset: await project_world_to_canvas(page, as_dict((body or {}).get("mesh")).get("worldPosition") or (body or {}).get("position"))
        for preset, body in (("earth", earth), ("mars", mars), ("jupiter", jupiter))
    }
    planet_pixels = {preset: await canvas_patch_probe(page, point, 10) for preset, point in planet_screens.items()}
    planet_rgb = [as_dict(planet_pixels.get(preset)).get("representativeRgb") for preset in ("earth", "mars", "jupiter")]
    pixel_distances = [rgb_distance(planet_rgb[i], planet_rgb[j]) for i in range(3) for j in range(i + 1, 3)]
    pixel_signal_ok = all(float(as_dict(planet_pixels.get(p)).get("signalFraction", 0) or 0) >= 0.04 for p in ("earth", "mars", "jupiter"))
    preset_appearance_ok = bool(
        earth and mars and jupiter and len(planet_signatures) >= 3
        and webgl_actual.get("visible") is True and pixel_signal_ok
        and len(pixel_distances) == 3 and min(pixel_distances) >= 0.04
    )
    sun_screen = await project_world_to_canvas(page, as_dict((sun or {}).get("mesh")).get("worldPosition") or (sun or {}).get("position"))
    sun_pixels = await canvas_patch_probe(page, sun_screen, 16)
    solar_star_glow_ok = bool(
        sun and sun_luminous and webgl_actual.get("visible") is True
        and float(sun_pixels.get("maxLuminance", 0) or 0) >= 0.45
        and float(sun_pixels.get("signalFraction", 0) or 0) >= 0.12
    )
    ctx.check(6, geometry_3d_ok, f"canvas={webgl_actual}, drawCalls={renderer_solar.get('drawCalls')}, triangles={renderer_solar.get('triangles')}, meshes={[as_dict((b or {}).get('mesh')) for b in (sun, earth, mars, jupiter)]}")
    ctx.check(33, preset_appearance_ok, f"planetSignatures={planet_signatures}, screens={planet_screens}, pixels={planet_pixels}, rgbDistances={pixel_distances}")
    ctx.check(34, solar_star_glow_ok, f"sunAppearance={sun_appearance}, sunLuminous={sun_luminous}, screen={sun_screen}, pixels={sun_pixels}")

    # 40. Pure visual quality of the actual 3D Solar System scene.
    await ctx.vlm(
        40,
        "判断当前 Solar System 游戏画面是否具有精致且清晰的 3D 呈现：太阳与行星应可辨识，颜色/尺度有变化，空间层次清楚，整体画面不应显得粗糙、空洞、严重遮挡或不可读。只根据截图评价视觉质量，不判断物理数值。",
    )

    # 7 / 35. Atomic orbital revolution and self-rotation checks.
    # Cross-check the reported transform changes against the pixels visible at
    # independently projected positions. A fixture cannot pass by animating only
    # its public snapshots while leaving the WebGL scene empty.
    solar_before = await state_dict(ctx, "__universe")
    game_before_motion = await state_dict(ctx, "__game")
    motion_screens_before = {
        preset: await project_world_to_canvas(page, as_dict((body_by_preset(solar_before, preset) or {}).get("mesh")).get("worldPosition") or (body_by_preset(solar_before, preset) or {}).get("position"))
        for preset in ("earth", "mars", "jupiter")
    }
    motion_patches_before = await canvas_multi_patch_probe(page, motion_screens_before, 10)
    visual_before = {
        preset: {"screen": motion_screens_before.get(preset), "patch": motion_patches_before.get(preset, {}), "visible": patch_has_body_signal(motion_screens_before.get(preset), motion_patches_before.get(preset, {}), minimum_signal=0.06)}
        for preset in ("earth", "mars", "jupiter")
    }
    motion_wait_ok = await wait_simulation_delta(page, (solar_before or {}).get("simulationTime"), 0.70, timeout=1400)
    solar_after = await state_dict(ctx, "__universe")
    game_after_motion = await state_dict(ctx, "__game")
    movement = {}
    rotations = {}
    bounded = {}
    visual_after = {}
    screen_motion = {}
    nonzero_rotation_speed = {}
    motion_screens_after = {}
    for preset in ("earth", "mars", "jupiter"):
        b0 = body_by_preset(solar_before, preset)
        b1 = body_by_preset(solar_after, preset)
        movement[preset] = vec_distance((b0 or {}).get("position"), (b1 or {}).get("position"))
        rotations[preset] = rotation_delta((b0 or {}).get("rotation"), (b1 or {}).get("rotation"))
        nonzero_rotation_speed[preset] = bool(finite_number((b0 or {}).get("rotationSpeed")) and abs(float((b0 or {}).get("rotationSpeed", 0))) > 1e-6)
        d0, d1 = (b0 or {}).get("distanceToParent"), (b1 or {}).get("distanceToParent")
        bounded[preset] = bool(
            finite_number(d0) and finite_number(d1) and float(d0) > 0 and float(d1) > 0
            and max(float(d0), float(d1)) / max(min(float(d0), float(d1)), 1e-9) < 1.8
        )
        motion_screens_after[preset] = await project_world_to_canvas(page, as_dict((b1 or {}).get("mesh")).get("worldPosition") or (b1 or {}).get("position"))
    motion_patches_after = await canvas_multi_patch_probe(page, motion_screens_after, 10)
    for preset in ("earth", "mars", "jupiter"):
        screen1 = motion_screens_after.get(preset)
        patch1 = motion_patches_after.get(preset, {})
        visual_after[preset] = {"screen": screen1, "patch": patch1, "visible": patch_has_body_signal(screen1, patch1, minimum_signal=0.06)}
        screen_motion[preset] = screen_distance(as_dict(visual_before.get(preset)).get("screen"), screen1)
    eb, mb, jb = (body_by_preset(solar_before, p) for p in ("earth", "mars", "jupiter"))
    ordering = bool(
        eb and mb and jb
        and finite_number(eb.get("distanceToParent"))
        and finite_number(mb.get("distanceToParent"))
        and finite_number(jb.get("distanceToParent"))
        and float(eb["distanceToParent"]) < float(mb["distanceToParent"]) < float(jb["distanceToParent"])
    )
    time_progressed = bool(
        motion_wait_ok and solar_before and solar_after and game_before_motion and game_after_motion
        and solar_after.get("physicsStepCount", 0) > solar_before.get("physicsStepCount", 0)
        and solar_after.get("simulationTime", 0) > solar_before.get("simulationTime", 0)
    )
    visible_motion_ok = all(
        as_dict(visual_before.get(preset)).get("visible") is True
        and as_dict(visual_after.get(preset)).get("visible") is True
        and finite_number(screen_motion.get(preset))
        and float(screen_motion[preset]) > 1.0
        for preset in ("earth", "mars", "jupiter")
    )
    visible_rotation_targets = all(
        as_dict(visual_before.get(preset)).get("visible") is True
        and as_dict(visual_after.get(preset)).get("visible") is True
        for preset in ("earth", "mars", "jupiter")
    )
    orbit_motion_ok = bool(
        time_progressed
        and all(finite_number(v) and v > 1e-4 for v in movement.values())
        and all(bounded.values())
        and ordering
        and visible_motion_ok
    )
    self_rotation_ok = bool(
        time_progressed
        and len(rotations) == 3
        and all(nonzero_rotation_speed.values())
        and all(finite_number(v) and v > 1e-5 for v in rotations.values())
        and visible_rotation_targets
    )
    ctx.check(7, orbit_motion_ok, f"move={movement}, screenMove={screen_motion}, visibleBefore={visual_before}, visibleAfter={visual_after}, bounded={bounded}, ordering={ordering}, steps={solar_before.get('physicsStepCount') if solar_before else None}->{solar_after.get('physicsStepCount') if solar_after else None}")
    ctx.check(35, self_rotation_ok, f"rotation={rotations}, rotationSpeedNonzero={nonzero_rotation_speed}, visibleTargets={visible_rotation_targets}, timeProgressed={time_progressed}")

    # 21 / 22 use the fresh initial Solar world, before later sandbox churn.
    # The target comes from the same real rendered Earth used by the Solar checks.
    orbit_target = body_by_preset(await state_dict(ctx, "__universe"), "earth")

    # Camera controls must be exercised on the real canvas rather
    # than through an overlapping settings/toolbar element. Close the panel and
    # leave placement mode as test setup before dispatching actual mouse input.
    camera_settings_state = await state_dict(ctx, "__settings")
    if camera_settings_state.get("panelOpen") is True:
        close_for_camera = contract_locator(page, "data-testid=object-settings-close")
        if await safe_click(close_for_camera):
            await page.wait_for_timeout(50)
    await exit_spawn_mode(page)

    # 21. OrbitControls zoom
    camera_before_zoom = await state_dict(ctx, "__camera")
    try:
        cbox = await canvas.bounding_box()
        if cbox:
            await page.mouse.move(cbox["x"] + cbox["width"] * 0.7, cbox["y"] + cbox["height"] * 0.35)
            await page.mouse.wheel(0, -700)
            await page.wait_for_timeout(220)
    except Exception:
        pass
    camera_after_zoom = await state_dict(ctx, "__camera")
    zoom_position_delta = vec_distance((camera_before_zoom or {}).get("position"), (camera_after_zoom or {}).get("position"))
    zoom_ok = bool(
        camera_before_zoom and camera_after_zoom
        and camera_after_zoom.get("controlsType") == "OrbitControls"
        and camera_after_zoom.get("enabled") is True
        and camera_after_zoom.get("domElementMatchesCanvas") is True
        and finite_number(camera_before_zoom.get("distance")) and finite_number(camera_after_zoom.get("distance"))
        and abs(float(camera_after_zoom["distance"]) - float(camera_before_zoom["distance"])) > 1e-4
        and finite_number(zoom_position_delta) and zoom_position_delta > 1e-4
        and float(camera_after_zoom["distance"]) >= float(camera_after_zoom.get("minDistance", 0)) - 1e-4
        and (
            not finite_number(camera_after_zoom.get("maxDistance"))
            or float(camera_after_zoom["distance"]) <= float(camera_after_zoom["maxDistance"]) + 1e-4
        )
    )
    ctx.check(21, zoom_ok, f"before={camera_before_zoom}, after={camera_after_zoom}, positionDelta={zoom_position_delta}")

    # 22. OrbitControls drag
    camera_before_drag = await state_dict(ctx, "__camera")
    orbit_target_before = body_by_id(await state_dict(ctx, "__universe"), (orbit_target or {}).get("id")) if orbit_target else None
    target_screen_before = await project_world_to_canvas(page, (orbit_target_before or {}).get("position")) if orbit_target_before else None
    try:
        cbox = await canvas.bounding_box()
        if cbox:
            sx = cbox["x"] + cbox["width"] * 0.62
            sy = cbox["y"] + cbox["height"] * 0.38
            await page.mouse.move(sx, sy)
            await page.mouse.down()
            await page.mouse.move(sx - 150, sy + 65, steps=12)
            await page.mouse.up()
            await page.wait_for_timeout(220)
    except Exception:
        pass
    camera_after_drag = await state_dict(ctx, "__camera")
    orbit_target_after = body_by_id(await state_dict(ctx, "__universe"), (orbit_target or {}).get("id")) if orbit_target else None
    target_screen_after = await project_world_to_canvas(page, (orbit_target_after or {}).get("position")) if orbit_target_after else None
    camera_drag_delta = vec_distance((camera_before_drag or {}).get("position"), (camera_after_drag or {}).get("position"))
    angle_change = max(
        wrapped_angle_delta((camera_before_drag or {}).get("azimuthAngle"), (camera_after_drag or {}).get("azimuthAngle")),
        wrapped_angle_delta((camera_before_drag or {}).get("polarAngle"), (camera_after_drag or {}).get("polarAngle")),
    )
    projection_change = math.inf
    if target_screen_before and target_screen_after and finite_number(target_screen_before.get("x")) and finite_number(target_screen_after.get("x")):
        projection_change = math.hypot(
            float(target_screen_after["x"]) - float(target_screen_before["x"]),
            float(target_screen_after["y"]) - float(target_screen_before["y"]),
        )
    target_finite = finite_vec3((camera_after_drag or {}).get("target"))
    drag_ok = bool(
        camera_before_drag and camera_after_drag and target_finite
        and finite_number(camera_drag_delta) and camera_drag_delta > 1e-4
        and finite_number(angle_change) and angle_change > 1e-4
        and (not target_screen_before or not target_screen_after or (finite_number(projection_change) and projection_change > 0.5))
    )
    ctx.check(22, drag_ok, f"before={camera_before_drag}, after={camera_after_drag}, cameraDelta={camera_drag_delta}, angleChange={angle_change}, projectionChange={projection_change}, projectedBefore={target_screen_before}, projectedAfter={target_screen_after}")


    # 30. Lifecycle isolation is checked while the page is still lightly loaded.
    # This keeps the duplicate-side-effect Rubric independent of the many objects
    # and settings mutations created later in the suite.
    lifecycle_observer_snapshots = []
    for cycle in range(2):
        current_game = await state_dict(ctx, "__game")
        if current_game.get("gameState") == "playing" and await safe_click(menu_button):
            await wait_game_state(page, "menu")
        if await safe_click(play):
            await wait_game_state(page, "scenario_select")
        if await safe_click(custom_button):
            await wait_scenario(page, "custom_sandbox")
        await page.wait_for_timeout(50)
        lifecycle_observer_snapshots.append(await evaluator_observer_state(page))
    duplicate_before_game = await state_dict(ctx, "__game")
    duplicate_before_spawner = await state_dict(ctx, "__spawner")
    armed_once, _ = await arm_star(page)
    duplicate_box = await canvas_box(page)
    duplicate_point = None
    if armed_once and duplicate_box:
        # R30 checks duplicate side effects, not placement geometry (covered by
        # R11/R13). Use an unobstructed central canvas click so this lifecycle
        # check is not coupled to another ground-truth ray calculation.
        duplicate_point = {
            "x": float(duplicate_box["x"]) + float(duplicate_box["width"]) * 0.55,
            "y": float(duplicate_box["y"]) + float(duplicate_box["height"]) * 0.55,
        }
        await page.mouse.click(float(duplicate_point["x"]), float(duplicate_point["y"]))
        await page.wait_for_timeout(50)
    duplicate_after_game = await state_dict(ctx, "__game")
    duplicate_after_spawner = await state_dict(ctx, "__spawner")
    lifecycle_listener_stable = bool(
        len(lifecycle_observer_snapshots) == 2
        and lifecycle_observer_snapshots[0].get("listenerActive") == lifecycle_observer_snapshots[1].get("listenerActive")
        and lifecycle_observer_snapshots[0].get("listenerAddTotal") == lifecycle_observer_snapshots[1].get("listenerAddTotal")
        and lifecycle_observer_snapshots[0].get("activeByTargetType") == lifecycle_observer_snapshots[1].get("activeByTargetType")
    )
    duplicate_once_ok = bool(
        lifecycle_listener_stable
        and armed_once and duplicate_point
        and duplicate_after_spawner.get("placementCount") == int(duplicate_before_spawner.get("placementCount", 0) or 0) + 1
        and duplicate_after_game.get("bodyCount") == int(duplicate_before_game.get("bodyCount", 0) or 0) + 1
        and duplicate_after_game.get("starCount") == int(duplicate_before_game.get("starCount", 0) or 0) + 1
    )
    ctx.check(30, duplicate_once_ok, f"before={duplicate_before_game}/{duplicate_before_spawner}, after={duplicate_after_game}/{duplicate_after_spawner}, armed={armed_once}, point={duplicate_point}, listenerStable={lifecycle_listener_stable}, evaluatorLifecycle={lifecycle_observer_snapshots}")


    # Enter a fresh Custom Sandbox through the public UI for rubric 8.
    # The helper makes R8 independent from the lifecycle test immediately above.
    await enter_scenario(page, "custom_sandbox")
    await page.wait_for_timeout(50)

    # 8. Empty custom sandbox
    custom0 = await state_dict(ctx, "__universe")
    game_custom0 = await state_dict(ctx, "__game")
    renderer_custom0 = await state_dict(ctx, "__renderer")
    empty_ok = bool(
        game_custom0 and game_custom0.get("gameState") == "playing" and game_custom0.get("scenario") == "custom_sandbox"
        and custom0 and (custom0.get("bodies") or []) == []
        and all(game_custom0.get(k) == 0 for k in ("bodyCount", "planetCount", "starCount"))
        and renderer_custom0 and renderer_custom0.get("sceneBodyMeshCount") == 0
        and renderer_custom0.get("animationRunning") is True
        and await visible(toolbar)
    )
    ctx.check(8, empty_ok, f"game={game_custom0}, universeBodies={(custom0 or {}).get('bodies')}, renderer={renderer_custom0}")

    # 9 / 41-46. Toolbar DOM plus implementation-stack traceability.
    spawn_object_button = contract_locator(page, "data-testid=spawn-object-btn")
    preset_select = contract_locator(page, "data-testid=spawn-object-select")
    spawn_star_button = contract_locator(page, "data-testid=spawn-star-btn")
    settings_button = contract_locator(page, "data-testid=object-settings-btn")

    toolbar_visible = bool(await visible(toolbar))
    settings_visible = bool(await visible(settings_button))
    ctx.check(9, toolbar_visible, f"toolbarVisible={toolbar_visible}")

    stack_info = ctx.preflight.get("stack") if isinstance(getattr(ctx, "preflight", None), dict) else {}
    stack_info = stack_info if isinstance(stack_info, dict) else {}
    runtime_target = ctx.preflight.get("runtime_target") if isinstance(getattr(ctx, "preflight", None), dict) else None
    runtime_provenance_ok = runtime_target in {"production_build", "verified_generated_play_artifact"}

    root_probe = await bounded_evaluate(page, """() => {
        const root = document.querySelector('#root');
        const play = document.querySelector('[data-testid="play-btn"]');
        if (!root) return {rootPresent:false, childCount:0, playPresent:false};
        return {
          rootPresent: true,
          childCount: root.childElementCount,
          playPresent: Boolean(play),
          playEnabled: Boolean(play && !play.disabled),
        };
    }""")
    root_probe = root_probe if isinstance(root_probe, dict) else {}
    react_runtime_ok = bool(
        stack_info.get("react19") is True
        and stack_info.get("reactEntry") is True
        and root_probe.get("rootPresent") is True
        and int(root_probe.get("childCount", 0) or 0) > 0
        and root_probe.get("playPresent") is True
        and root_probe.get("playEnabled") is True
    )
    ctx.check(41, react_runtime_ok, f"react19={stack_info.get('react19')}, reactEntry={stack_info.get('reactEntry')}, root={root_probe}")

    typescript_runtime_ok = bool(stack_info.get("typescriptConfigured") is True and runtime_provenance_ok)
    ctx.check(42, typescript_runtime_ok, f"typescriptConfigured={stack_info.get('typescriptConfigured')}, runtimeTarget={runtime_target}, provenanceVerified={runtime_provenance_ok}, sourceHash={stack_info.get('playSourceHash')}")

    production_build_succeeded = bool(ctx.preflight.get("production_build_succeeded")) if isinstance(getattr(ctx, "preflight", None), dict) else False
    production_build_status = ctx.preflight.get("production_build_status") if isinstance(getattr(ctx, "preflight", None), dict) else None
    vite_runtime_ok = bool(
        stack_info.get("viteConfigured") is True
        and production_build_succeeded
        and production_build_status == "passed"
        and runtime_target == "production_build"
    )
    ctx.check(43, vite_runtime_ok, f"viteConfigured={stack_info.get('viteConfigured')}, productionBuildSucceeded={production_build_succeeded}, productionBuildStatus={production_build_status}, runtimeTarget={runtime_target}")

    style_probe = await bounded_evaluate(page, """() => {
        const menu = document.querySelector('#mainMenu');
        const play = document.querySelector('[data-testid="play-btn"]');
        if (!menu || !play) return {ok:false};
        const ms = getComputedStyle(menu);
        const ps = getComputedStyle(play);
        return {
          ok: true,
          menuDisplay: ms.display,
          menuPosition: ms.position,
          playDisplay: ps.display,
          playBackground: ps.backgroundImage || ps.backgroundColor,
          playBorderRadius: ps.borderRadius,
        };
    }""")
    style_probe = style_probe if isinstance(style_probe, dict) else {}
    tailwind_runtime_ok = bool(
        stack_info.get("tailwindConfigured") is True
        and style_probe.get("ok") is True
        and str(style_probe.get("menuPosition") or "") not in {"", "static"}
        and str(style_probe.get("playBorderRadius") or "") not in {"", "0px"}
        and str(style_probe.get("playBackground") or "") not in {"", "none", "rgba(0, 0, 0, 0)"}
    )
    ctx.check(44, tailwind_runtime_ok, f"tailwindConfigured={stack_info.get('tailwindConfigured')}, computedStyle={style_probe}")

    renderer_stack = await state_dict(ctx, "__renderer")
    camera_stack = await state_dict(ctx, "__camera")
    three_runtime_ok = bool(
        stack_info.get("threeDependency") is True
        and stack_info.get("threeModuleImport") is True
        and stack_info.get("orbitControlsImport") is True
        and renderer_stack.get("webgl") is True
        and renderer_stack.get("animationRunning") is True
        and renderer_stack.get("drawCalls", 0) > 0
        and camera_stack.get("enabled") is True
        and camera_stack.get("controlsType") == "OrbitControls"
        and camera_stack.get("domElementMatchesCanvas") is True
    )
    ctx.check(45, three_runtime_ok, f"threeDependency={stack_info.get('threeDependency')}, threeImport={stack_info.get('threeModuleImport')}, orbitImport={stack_info.get('orbitControlsImport')}, renderer={{'webgl':{renderer_stack.get('webgl')},'animationRunning':{renderer_stack.get('animationRunning')},'drawCalls':{renderer_stack.get('drawCalls')}}}, controlsEnabled={camera_stack.get('enabled')}, controlsType={camera_stack.get('controlsType')}, domElementMatchesCanvas={camera_stack.get('domElementMatchesCanvas')}")

    ctx.check(46, settings_visible, f"settingsVisible={settings_visible}")

    # 10. Spawn mode transitions only.
    game_before_isolation = await state_dict(ctx, "__game")
    spawner_before_isolation = await state_dict(ctx, "__spawner")
    planet_armed, planet_arm_state = await arm_planet(page, "earth")
    game_planet_arm = await state_dict(ctx, "__game")
    mode_planet_ok = bool(
        planet_armed
        and game_planet_arm.get("spawnMode") == "planet"
        and (planet_arm_state or {}).get("mode") == "planet"
        and (planet_arm_state or {}).get("pendingPlacement") is True
    )

    # 47. Toolbar interaction must not itself place a body.
    count_before_toolbar = (await state_dict(ctx, "__game")).get("bodyCount")
    placement_before_toolbar = (await state_dict(ctx, "__spawner")).get("placementCount")
    toolbar_click_performed = False
    try:
        box = await toolbar.bounding_box()
        if box and toolbar_visible:
            await page.mouse.click(box["x"] + 8, box["y"] + 8)
            toolbar_click_performed = True
            await page.wait_for_timeout(50)
    except Exception:
        pass
    game_after_toolbar = await state_dict(ctx, "__game")
    spawner_after_toolbar = await state_dict(ctx, "__spawner")
    toolbar_isolation_ok = bool(
        toolbar_click_performed
        and game_after_toolbar.get("bodyCount") == count_before_toolbar
        and spawner_after_toolbar.get("placementCount") == placement_before_toolbar
    )
    ctx.check(47, toolbar_isolation_ok, f"clicked={toolbar_click_performed}, bodyCount={count_before_toolbar}->{game_after_toolbar.get('bodyCount')}, placementCount={placement_before_toolbar}->{spawner_after_toolbar.get('placementCount')}")

    star_armed, star_arm_state = await arm_star(page)
    game_star_arm = await state_dict(ctx, "__game")
    mode_star_ok = bool(
        star_armed
        and game_star_arm.get("spawnMode") == "star"
        and (star_arm_state or {}).get("mode") == "star"
        and (star_arm_state or {}).get("pendingPlacement") is True
    )
    mode_transition_ok = bool(mode_planet_ok and mode_star_ok)
    ctx.check(10, mode_transition_ok, f"initial={game_before_isolation}/{spawner_before_isolation}, planet={planet_arm_state}/{game_planet_arm}, star={star_arm_state}/{game_star_arm}")

    # 28. The already-armed star placement mode from R10 is kept active while
    # the player performs a real OrbitControls drag.  The camera must move, while
    # body/placement counts stay unchanged and placement remains pending.
    drag_before_game = await state_dict(ctx, "__game")
    drag_before_spawner = await state_dict(ctx, "__spawner")
    drag_camera_before = await state_dict(ctx, "__camera")
    drag_box = await canvas_box(page)
    if drag_box:
        sx = float(drag_box["x"]) + float(drag_box["width"]) * 0.46
        sy = float(drag_box["y"]) + float(drag_box["height"]) * 0.48
        ex = sx + min(120.0, float(drag_box["width"]) * 0.16)
        ey = sy + min(70.0, float(drag_box["height"]) * 0.10)
        await page.mouse.move(sx, sy)
        await page.mouse.down()
        await page.mouse.move(ex, ey, steps=8)
        await page.mouse.up()
        await page.wait_for_timeout(70)
    drag_after_game = await state_dict(ctx, "__game")
    drag_after_spawner = await state_dict(ctx, "__spawner")
    drag_camera_after = await state_dict(ctx, "__camera")
    drag_camera_delta = vec_distance(drag_camera_before.get("position"), drag_camera_after.get("position"))
    drag_angle_delta = max(
        wrapped_angle_delta(drag_camera_before.get("azimuthAngle"), drag_camera_after.get("azimuthAngle")),
        wrapped_angle_delta(drag_camera_before.get("polarAngle"), drag_camera_after.get("polarAngle")),
    )
    drag_no_spawn = bool(
        star_armed and drag_box
        and drag_before_spawner.get("mode") == "star" and drag_before_spawner.get("pendingPlacement") is True
        and drag_after_game.get("bodyCount") == drag_before_game.get("bodyCount")
        and drag_after_spawner.get("placementCount") == drag_before_spawner.get("placementCount")
        and drag_after_spawner.get("mode") == "star" and drag_after_spawner.get("pendingPlacement") is True
        and finite_number(drag_camera_delta) and drag_camera_delta > 1e-4
        and finite_number(drag_angle_delta) and drag_angle_delta > 1e-4
    )
    ctx.check(28, drag_no_spawn, f"before={drag_before_game}/{drag_before_spawner}, afterDrag={drag_after_game}/{drag_after_spawner}, cameraBefore={drag_camera_before}, cameraAfter={drag_camera_after}, cameraDelta={drag_camera_delta}, angleDelta={drag_angle_delta}")

    # Place star first, then planets so custom planets can bind to it.
    star_result = await spawn_star(page, [(0.50, 0.50), (0.50, 0.45), (0.45, 0.50)])
    earth_result = await spawn_planet(page, "earth", [(0.66, 0.50), (0.70, 0.46), (0.64, 0.42)])
    mars_result = await spawn_planet(page, "mars", [(0.34, 0.50), (0.30, 0.46), (0.36, 0.42)])

    # 11. Earth/Mars placement at independently computed pointer-plane intersections.
    earth_custom = earth_result.get("body")
    mars_custom = mars_result.get("body")
    earth_last = (earth_result.get("after") or {}).get("lastPlacement")
    mars_last = (mars_result.get("after") or {}).get("lastPlacement")
    earth_gt = earth_result.get("groundTruth")
    mars_gt = mars_result.get("groundTruth")
    placement_tolerance_e = max(1.2, float((earth_custom or {}).get("radius", 1)) * 0.35) if finite_number((earth_custom or {}).get("radius")) else 1.2
    placement_tolerance_m = max(1.2, float((mars_custom or {}).get("radius", 1)) * 0.35) if finite_number((mars_custom or {}).get("radius")) else 1.2
    real_planets_ok = bool(
        earth_result.get("armed") and mars_result.get("armed")
        and earth_custom and mars_custom
        and earth_custom.get("preset") == "earth" and mars_custom.get("preset") == "mars"
        and earth_custom.get("bodyType") == "planet" and mars_custom.get("bodyType") == "planet"
        and vec_distance(earth_last, earth_gt) <= placement_tolerance_e
        and vec_distance(mars_last, mars_gt) <= placement_tolerance_m
        and vec_distance(earth_custom.get("position"), earth_gt) <= placement_tolerance_e
        and vec_distance(mars_custom.get("position"), mars_gt) <= placement_tolerance_m
        and earth_custom.get("meshVisible") is True and mars_custom.get("meshVisible") is True
        and finite_vec3((earth_custom.get("mesh") or {}).get("worldPosition"))
        and finite_vec3((mars_custom.get("mesh") or {}).get("worldPosition"))
    )
    ctx.check(11, real_planets_ok, f"earth={earth_custom}, earthLast={earth_last}, earthGT={earth_gt}, mars={mars_custom}, marsLast={mars_last}, marsGT={mars_gt}")

    # 12 / 36 / 37. Atomic procedural scale, color, and relief checks.
    proc1_result = await spawn_planet(page, "procedural", [(0.50, 0.34), (0.58, 0.36), (0.42, 0.36)])
    proc2_result = await spawn_planet(page, "procedural", [(0.50, 0.66), (0.58, 0.64), (0.42, 0.64)])
    proc3_result = await spawn_planet(page, "procedural", [(0.68, 0.62), (0.72, 0.58), (0.64, 0.60)])
    proc1, proc2, proc3 = proc1_result.get("body"), proc2_result.get("body"), proc3_result.get("body")
    procedural_bodies = [body for body in (proc1, proc2, proc3) if body and body.get("preset") == "procedural" and body.get("bodyType") == "planet"]
    proc_states = [(body.get("procedural") or {}) for body in procedural_bodies]
    unique_seeds = {str(state.get("seed")) for state in proc_states if state.get("seed") is not None}
    unique_colors = {str(state.get("color") or "").upper() for state in proc_states if state.get("color")}
    scales = [float(state.get("scale")) for state in proc_states if finite_number(state.get("scale"))]
    scale_varies = len(scales) == 3 and any(abs(a - b) > 1e-3 for i, a in enumerate(scales) for b in scales[i + 1:])
    scale_ok = bool(len(procedural_bodies) == 3 and len(unique_seeds) == 3 and scale_varies and all(v > 0 for v in scales))

    colors = []
    color_ok_each = []
    relief_ok_each = []
    for body in procedural_bodies:
        state = body.get("procedural") or {}
        app = body.get("appearance") or {}
        color = state.get("color") or app.get("color")
        colors.append(color)
        saturation, brightness = color_saturation_and_value(color)
        color_ok_each.append(valid_hex_color(color) and saturation >= 0.55 and brightness >= 0.55)
        effective_relief = max(
            abs(float(app.get("reliefStrength", 0))) if finite_number(app.get("reliefStrength")) else 0,
            abs(float(state.get("displacementStrength", 0))) if finite_number(state.get("displacementStrength")) else 0,
            abs(float(state.get("vertexRadiusVariance", 0))) if finite_number(state.get("vertexRadiusVariance")) else 0,
        )
        relief_ok_each.append(
            app.get("reliefTechnique") in {"geometry_displacement", "displacement_map", "normal_map", "bump_map", "shader_noise"}
            and effective_relief > 1e-7
        )
    color_ok = bool(len(procedural_bodies) == 3 and all(color_ok_each) and len(unique_colors) >= 2)
    relief_ok = bool(len(procedural_bodies) == 3 and all(relief_ok_each))
    ctx.check(12, scale_ok, f"scales={scales}, uniqueSeeds={len(unique_seeds)}, scaleVaries={scale_varies}")
    color_metrics = [color_saturation_and_value(str(color)) for color in colors]
    ctx.check(36, color_ok, f"colors={colors}, uniqueColors={len(unique_colors)}, saturationBrightness={color_metrics}, threshold=saturation>=0.55/value>=0.55, perColorOk={color_ok_each}")
    ctx.check(37, relief_ok, f"reliefOk={relief_ok_each}, procedural={proc_states}")

    # 13 / 38 / 39. Atomic star placement, scale/mass, and glow checks.
    custom_star = star_result.get("body")
    star_app = (custom_star or {}).get("appearance", {}) or {}
    star_mesh = (custom_star or {}).get("mesh", {}) or {}
    planet_radii = [
        float(b.get("radius")) for b in (earth_custom, mars_custom, proc1, proc2, proc3)
        if b and finite_number(b.get("radius")) and float(b.get("radius")) > 0
    ]
    planet_masses = [
        float(b.get("mass")) for b in (earth_custom, mars_custom, proc1, proc2, proc3)
        if b and finite_number(b.get("mass")) and float(b.get("mass")) > 0
    ]
    max_planet_radius = max(planet_radii) if planet_radii else 0
    max_planet_mass = max(planet_masses) if planet_masses else 0
    star_last = (star_result.get("after") or {}).get("lastPlacement")
    star_gt = star_result.get("groundTruth")
    glow_reported = bool(
        star_app.get("hasLightSource") is True
        or finite_number(star_app.get("emissiveIntensity")) and float(star_app.get("emissiveIntensity")) > 0
        or len(star_app.get("glowMechanisms") or []) > 0
    )
    star_tol = max(1.5, float((custom_star or {}).get("radius", 1)) * 0.35) if finite_number((custom_star or {}).get("radius")) else 1.5
    star_placement_ok = bool(
        star_result.get("armed") and custom_star and star_gt
        and custom_star.get("bodyType") == "star" and custom_star.get("preset") == "custom_star"
        and vec_distance(star_last, star_gt) <= star_tol
        and vec_distance(custom_star.get("position"), star_gt) <= star_tol
        and finite_vec3(star_mesh.get("worldPosition"))
        and vec_distance(custom_star.get("position"), star_mesh.get("worldPosition")) <= star_tol
    )
    star_massive_ok = bool(
        custom_star
        and finite_number(custom_star.get("mass"))
        and float(custom_star.get("mass")) > max(1.0, max_planet_mass)
    )
    custom_star_screen = await project_world_to_canvas(page, star_mesh.get("worldPosition") or (custom_star or {}).get("position"))
    custom_star_pixels = await canvas_patch_probe(page, custom_star_screen, 14)
    custom_star_glow_ok = bool(
        custom_star and glow_reported and webgl_actual.get("visible") is True
        and float(custom_star_pixels.get("maxLuminance", 0) or 0) >= 0.40
        and float(custom_star_pixels.get("signalFraction", 0) or 0) >= 0.08
    )
    ctx.check(13, star_placement_ok, f"star={custom_star}, last={star_last}, groundTruth={star_gt}, mesh={star_mesh}")
    ctx.check(38, star_massive_ok, f"starMass={(custom_star or {}).get('mass')}, maxPlanetMass={max_planet_mass}, starRadiusObserved={(custom_star or {}).get('radius')}")
    ctx.check(39, custom_star_glow_ok, f"starAppearance={star_app}, glow={glow_reported}, screen={custom_star_screen}, pixels={custom_star_pixels}")

    # 27. IDs/mesh UUIDs stay unique and stable through live simulation frames.
    # Reuse the multiple bodies created by the actual placement Rubrics above;
    # identity stability does not need another scenario reset or duplicate setup.
    ids_before_state = await state_dict(ctx, "__universe")
    spawner_id_state = await state_dict(ctx, "__spawner")
    bodies_id_before = (ids_before_state or {}).get("bodies", []) or []
    id_map_before = {b.get("id"): (b.get("mesh") or {}).get("uuid") for b in bodies_id_before if isinstance(b, dict)}
    await page.wait_for_timeout(70)
    ids_after_state = await state_dict(ctx, "__universe")
    bodies_id_after = (ids_after_state or {}).get("bodies", []) or []
    id_map_after = {b.get("id"): (b.get("mesh") or {}).get("uuid") for b in bodies_id_after if isinstance(b, dict)}
    ids_unique_stable_ok = bool(
        len(id_map_before) >= 3
        and len(id_map_before) == len(bodies_id_before)
        and len(id_map_after) == len(bodies_id_after)
        and len(id_map_after) == len(set(id_map_after))
        and len(set(id_map_after.values())) == len(id_map_after)
        and all(isinstance(value, str) and len(value) > 5 for value in id_map_after.values())
        and id_map_before == id_map_after
        and spawner_id_state.get("lastSpawnedBodyId") in id_map_after
    )
    ctx.check(27, ids_unique_stable_ok, f"before={id_map_before}, after={id_map_after}, lastSpawned={spawner_id_state.get('lastSpawnedBodyId')}")

    # 19. Custom orbit before settings modify the baseline.
    # 19. Custom orbit before settings modify the baseline.
    orbit_body_id = (earth_custom or {}).get("id")
    parent_id = (earth_custom or {}).get("parentStarId")
    orbit_samples = []
    for _ in range(4):
        universe_sample = await state_dict(ctx, "__universe")
        b = body_by_id(universe_sample, orbit_body_id)
        p = body_by_id(universe_sample, (b or {}).get("parentStarId"))
        orbit_samples.append((b, p))
        await page.wait_for_timeout(220)
    distances = [b.get("distanceToParent") for b, _ in orbit_samples if b and finite_number(b.get("distanceToParent"))]
    orbit_positions = [b.get("position") for b, _ in orbit_samples if b]
    orbit_velocities = [b.get("velocity") for b, _ in orbit_samples if b]
    movement_total = vec_distance(orbit_positions[0], orbit_positions[-1]) if len(orbit_positions) >= 2 else math.inf
    velocity_change = vec_distance(orbit_velocities[0], orbit_velocities[-1]) if len(orbit_velocities) >= 2 else math.inf
    acceleration_points_inward = False
    if orbit_samples:
        b, parent = orbit_samples[-1]
        if b and parent and finite_vec3(b.get("acceleration")):
            to_parent = subtract(parent.get("position"), b.get("position"))
            acceleration_points_inward = dot(b.get("acceleration"), to_parent) > 0
    distance_bounded = bool(
        len(distances) >= 2
        and min(float(d) for d in distances) > 0
        and max(float(d) for d in distances) / max(min(float(d) for d in distances), 1e-9) < 2.5
    )
    custom_orbit_ok = bool(
        orbit_samples and all(b and p for b, p in orbit_samples)
        and all(b.get("orbiting") is True and b.get("parentStarId") == p.get("id") for b, p in orbit_samples)
        and finite_number(movement_total) and movement_total > 1e-4
        and finite_number(velocity_change) and velocity_change > 1e-6
        and distance_bounded
        and acceleration_points_inward
    )
    ctx.check(19, custom_orbit_ok, f"body={orbit_body_id}, parent={parent_id}, distances={distances}, movement={movement_total}, velocityChange={velocity_change}, inward={acceleration_points_inward}")

    # 14. Real pointer selection using evaluator-side projection
    selected_target = earth_custom or mars_custom or proc1
    screen_pos = None
    selection_after_click = None
    selected_by_click = False
    if selected_target:
        selected_by_click, screen_pos = await select_body_by_click(page, selected_target.get("id"))
        selection_after_click = await state_dict(ctx, "__selection")
    game_selection = await state_dict(ctx, "__game")
    selection_ok = bool(
        selected_target and selected_by_click and screen_pos and screen_pos.get("visible") is True
        and selection_after_click
        and selection_after_click.get("selectedObjectId") == selected_target.get("id")
        and selection_after_click.get("selectedObjectType") == selected_target.get("bodyType")
        and game_selection.get("selectedObjectId") == selected_target.get("id")
    )
    ctx.check(14, selection_ok, f"target={(selected_target or {}).get('id')}, screen={screen_pos}, selection={selection_after_click}, game={game_selection}")

    # 15. Settings panel sync
    if selected_target and not selection_ok:
        await select_body_by_click(page, selected_target.get("id"))
    panel_open = await open_settings(page)
    settings_state = await state_dict(ctx, "__settings")
    selection_state = await state_dict(ctx, "__selection")
    universe_now = await state_dict(ctx, "__universe")
    selected_body = body_by_id(universe_now, (selection_state or {}).get("selectedObjectId"))
    selected_label = contract_locator(page, "data-testid=selected-object-name")
    label_text = (await selected_label.inner_text()).strip() if await visible(selected_label) else ""
    temp_slider = contract_locator(page, "data-testid=temperature-slider")
    rotation_slider = contract_locator(page, "data-testid=rotation-speed-slider")
    orbit_slider = contract_locator(page, "data-testid=orbital-velocity-slider")

    async def input_float(locator):
        try:
            return float(await locator.input_value())
        except Exception:
            return math.nan

    t_value, r_value, o_value = await input_float(temp_slider), await input_float(rotation_slider), await input_float(orbit_slider)
    settings_sync_ok = bool(
        panel_open and settings_state and selection_state and selected_body
        and settings_state.get("panelOpen") is True
        and selection_state.get("settingsOpen") is True
        and settings_state.get("selectedObjectId") == selected_body.get("id") == selection_state.get("selectedObjectId")
        and (
            not selected_body.get("name")
            or selected_body.get("name", "").lower() in label_text.lower()
            or str(selected_body.get("preset", "")).lower() in label_text.lower()
            or selected_body.get("id", "").lower() in label_text.lower()
        )
        and relative_close(t_value, selected_body.get("averageTemperature"), abs_tol=0.5, rel_tol=0.02)
        and relative_close(r_value, selected_body.get("rotationSpeed"), abs_tol=1e-3, rel_tol=0.03)
        and relative_close(o_value, selected_body.get("orbitalVelocity"), abs_tol=1e-3, rel_tol=0.03)
    )
    ctx.check(15, settings_sync_ok, f"panel={panel_open}, selection={selection_state}, settings={settings_state}, body={selected_body}, label={label_text!r}, inputs={t_value}/{r_value}/{o_value}")

    # 16. Temperature persistence per object
    temp_min, temp_max, temp_step = await range_bounds(temp_slider)
    original_temp = (selected_body or {}).get("averageTemperature")
    target_temp = temp_min + (temp_max - temp_min) * 0.68
    if finite_number(original_temp) and abs(float(original_temp) - target_temp) <= max(temp_step, (temp_max - temp_min) * 0.02):
        target_temp = temp_min + (temp_max - temp_min) * 0.32
    temp_changed = await set_range(temp_slider, target_temp)
    await page.wait_for_timeout(70)
    after_temp_universe = await state_dict(ctx, "__universe")
    after_temp_settings = await state_dict(ctx, "__settings")
    temp_body = body_by_id(after_temp_universe, (selected_body or {}).get("id"))
    other_body = mars_custom if selected_body and selected_body.get("id") != (mars_custom or {}).get("id") else proc1
    switched = False
    switched_back = False
    if other_body and selected_body:
        switched, _ = await select_body_by_click(page, other_body.get("id"))
        switched_back, _ = await select_body_by_click(page, selected_body.get("id"))
    persisted_universe = await state_dict(ctx, "__universe")
    persisted_body = body_by_id(persisted_universe, (selected_body or {}).get("id"))
    temp_persist_ok = bool(
        temp_changed and temp_body and persisted_body
        and relative_close(temp_body.get("averageTemperature"), target_temp, abs_tol=max(temp_step, 0.5), rel_tol=0.02)
        and relative_close((after_temp_settings or {}).get("averageTemperature"), target_temp, abs_tol=max(temp_step, 0.5), rel_tol=0.02)
        and switched and switched_back
        and relative_close(persisted_body.get("averageTemperature"), target_temp, abs_tol=max(temp_step, 0.5), rel_tol=0.02)
    )
    ctx.check(16, temp_persist_ok, f"target={target_temp}, bodyAfter={temp_body}, settingsAfter={after_temp_settings}, switched={switched}/{switched_back}, persisted={persisted_body}")

    # Re-open settings if changing the selected scene object closed it.
    if not await visible(contract_locator(page, "id=objectSettingsPanel")):
        await open_settings(page)

    # 17. Rotation speed causal effect
    rot_min, rot_max, rot_step = await range_bounds(rotation_slider)
    if rot_min <= 0 <= rot_max:
        low_rot = 0.0
        high_rot = max(rot_step, rot_max * 0.35)
    else:
        low_rot = rot_min + (rot_max - rot_min) * 0.10
        high_rot = rot_min + (rot_max - rot_min) * 0.70
        if abs(high_rot) <= abs(low_rot):
            high_rot = rot_max
    await set_range(rotation_slider, low_rot)
    await page.wait_for_timeout(50)
    low_universe_start = await state_dict(ctx, "__universe")
    low_start = body_by_id(low_universe_start, (selected_body or {}).get("id"))
    low_wait_ok = await wait_simulation_delta(page, low_universe_start.get("simulationTime"), 0.35, timeout=1000)
    low_end = body_by_id(await state_dict(ctx, "__universe"), (selected_body or {}).get("id"))
    await set_range(rotation_slider, high_rot)
    await page.wait_for_timeout(50)
    high_universe_start = await state_dict(ctx, "__universe")
    high_start = body_by_id(high_universe_start, (selected_body or {}).get("id"))
    high_wait_ok = await wait_simulation_delta(page, high_universe_start.get("simulationTime"), 0.35, timeout=1000)
    high_end = body_by_id(await state_dict(ctx, "__universe"), (selected_body or {}).get("id"))
    low_delta = rotation_delta((low_start or {}).get("rotation"), (low_end or {}).get("rotation"))
    high_delta = rotation_delta((high_start or {}).get("rotation"), (high_end or {}).get("rotation"))
    rotation_causal_ok = bool(
        low_wait_ok and high_wait_ok and low_end and high_end
        and relative_close(low_end.get("rotationSpeed"), low_rot, abs_tol=max(rot_step, 1e-3), rel_tol=0.03)
        and relative_close(high_end.get("rotationSpeed"), high_rot, abs_tol=max(rot_step, 1e-3), rel_tol=0.03)
        and finite_number(high_delta) and high_delta > 1e-5
        and (
            abs(high_rot) <= abs(low_rot) + 1e-9
            or high_delta > low_delta * 1.2 + 1e-5
            or (abs(low_rot) <= max(rot_step, 1e-6) and low_delta < 1e-4 and high_delta > 1e-4)
        )
    )
    ctx.check(17, rotation_causal_ok, f"values={low_rot}/{high_rot}, deltas={low_delta}/{high_delta}, lowBody={low_end}, highBody={high_end}")

    # 18. Orbital velocity causal effect
    orbit_target = selected_body
    if not orbit_target or not orbit_target.get("parentStarId"):
        orbit_target = earth_custom if earth_custom and earth_custom.get("parentStarId") else None
    orbit_causal_ok = False
    orbit_detail = "no orbiting target"
    orbit_selected = False
    if orbit_target:
        orbit_selected, _ = await select_body_by_click(page, orbit_target.get("id"))
    if orbit_target and orbit_selected:
        if not await visible(contract_locator(page, "id=objectSettingsPanel")):
            await open_settings(page)
        orbit_slider = contract_locator(page, "data-testid=orbital-velocity-slider")
        omin, omax, ostep = await range_bounds(orbit_slider)
        low_orbit = omin + (omax - omin) * 0.25
        high_orbit = omin + (omax - omin) * 0.75
        if abs(high_orbit) <= abs(low_orbit):
            high_orbit = omax
        await set_range(orbit_slider, low_orbit)
        await page.wait_for_timeout(50)
        low_orbit_state = await state_dict(ctx, "__universe")
        ol0 = body_by_id(low_orbit_state, orbit_target.get("id"))
        low_orbit_wait = await wait_simulation_delta(page, low_orbit_state.get("simulationTime"), 0.35, timeout=1000)
        ol1 = body_by_id(await state_dict(ctx, "__universe"), orbit_target.get("id"))
        await set_range(orbit_slider, high_orbit)
        await page.wait_for_timeout(50)
        high_orbit_state = await state_dict(ctx, "__universe")
        oh0 = body_by_id(high_orbit_state, orbit_target.get("id"))
        high_orbit_wait = await wait_simulation_delta(page, high_orbit_state.get("simulationTime"), 0.35, timeout=1000)
        oh1 = body_by_id(await state_dict(ctx, "__universe"), orbit_target.get("id"))
        low_move = vec_distance((ol0 or {}).get("position"), (ol1 or {}).get("position"))
        high_move = vec_distance((oh0 or {}).get("position"), (oh1 or {}).get("position"))
        low_speed = vec_length((ol1 or {}).get("velocity"))
        high_speed = vec_length((oh1 or {}).get("velocity"))
        values_synced = bool(
            ol1 and oh1
            and relative_close(ol1.get("orbitalVelocity"), low_orbit, abs_tol=max(ostep, 1e-3), rel_tol=0.04)
            and relative_close(oh1.get("orbitalVelocity"), high_orbit, abs_tol=max(ostep, 1e-3), rel_tol=0.04)
        )
        causal_change = bool(
            finite_number(low_move) and finite_number(high_move)
            and finite_number(low_speed) and finite_number(high_speed)
            and (
                high_move > low_move * 1.12 + 1e-4
                or high_speed > low_speed * 1.08 + 1e-5
                or abs(high_speed - low_speed) > max(1e-4, 0.05 * max(low_speed, high_speed, 1e-6))
            )
        )
        orbit_causal_ok = bool(low_orbit_wait and high_orbit_wait and values_synced and causal_change)
        orbit_detail = f"values={low_orbit}/{high_orbit}, move={low_move}/{high_move}, speed={low_speed}/{high_speed}, synced={values_synced}"
    ctx.check(18, orbit_causal_ok, orbit_detail)

    # 31. Settings mutations are scoped to the currently selected body.
    # Reuse the two real custom planets already created and exercised above; the
    # isolation assertion itself supplies the independent before/after evidence.
    scope_universe_before = await state_dict(ctx, "__universe")
    earth_scope = body_by_id(scope_universe_before, (earth_custom or {}).get("id"))
    mars_scope = body_by_id(scope_universe_before, (mars_custom or {}).get("id"))
    selected_scope_ok = False
    if earth_scope and mars_scope:
        selected_scope_ok, _ = await select_body_by_click(page, earth_scope.get("id"))
    if selected_scope_ok:
        await open_settings(page)
    temp_slider = contract_locator(page, "data-testid=temperature-slider")
    rot_slider = contract_locator(page, "data-testid=rotation-speed-slider")
    orb_slider = contract_locator(page, "data-testid=orbital-velocity-slider")
    earth_before_props = {k: (earth_scope or {}).get(k) for k in ("averageTemperature", "rotationSpeed", "orbitalVelocity")}
    mars_before_props = {k: (mars_scope or {}).get(k) for k in ("averageTemperature", "rotationSpeed", "orbitalVelocity")}
    t_min, t_max, t_step = await range_bounds(temp_slider)
    r_min, r_max, r_step = await range_bounds(rot_slider)
    o_min, o_max, o_step = await range_bounds(orb_slider)
    targets = {
        "averageTemperature": alternate_range_value(earth_before_props.get("averageTemperature"), t_min, t_max, t_step),
        "rotationSpeed": alternate_range_value(earth_before_props.get("rotationSpeed"), r_min, r_max, r_step),
        "orbitalVelocity": alternate_range_value(earth_before_props.get("orbitalVelocity"), o_min, o_max, o_step),
    }
    edits_ok = False
    if selected_scope_ok and await visible(contract_locator(page, "id=objectSettingsPanel")):
        set_t = await set_range(temp_slider, targets["averageTemperature"])
        set_r = await set_range(rot_slider, targets["rotationSpeed"])
        set_o = await set_range(orb_slider, targets["orbitalVelocity"])
        edits_ok = set_t and set_r and set_o
        await page.wait_for_timeout(50)
    scope_universe_after = await state_dict(ctx, "__universe")
    earth_after_scope = body_by_id(scope_universe_after, (earth_scope or {}).get("id"))
    mars_after_scope = body_by_id(scope_universe_after, (mars_scope or {}).get("id"))
    earth_changed = bool(
        earth_after_scope
        and relative_close(earth_after_scope.get("averageTemperature"), targets["averageTemperature"], abs_tol=max(1.0, abs(t_step) * 1.5), rel_tol=0.01)
        and relative_close(earth_after_scope.get("rotationSpeed"), targets["rotationSpeed"], abs_tol=max(0.01, abs(r_step) * 1.5), rel_tol=0.03)
        and relative_close(earth_after_scope.get("orbitalVelocity"), targets["orbitalVelocity"], abs_tol=max(0.01, abs(o_step) * 1.5), rel_tol=0.03)
    )
    mars_unchanged = bool(
        mars_after_scope
        and all(relative_close(mars_after_scope.get(k), mars_before_props.get(k), abs_tol=1e-4, rel_tol=1e-4) for k in mars_before_props)
    )
    scoped_settings_ok = bool(selected_scope_ok and edits_ok and earth_changed and mars_unchanged)
    ctx.check(31, scoped_settings_ok, f"earthBefore={earth_before_props}, targets={targets}, earthAfter={earth_after_scope}, marsBefore={mars_before_props}, marsAfter={mars_after_scope}")

    # 20. Cross-state / real render consistency.
    # Establish a fresh non-empty world so this Rubric is not accidentally
    # determined by whether earlier Custom Sandbox placement checks succeeded.
    consistency_setup_ok = await enter_scenario(page, "solar_system")
    universe_consistency_before = await state_dict(ctx, "__universe")
    renderer_consistency_before = await state_dict(ctx, "__renderer")
    consistency_progress_ok = False
    try:
        await page.wait_for_function(
            "([physics0, frame0]) => { const u=window.__universe?.getState?.(); const r=window.__renderer?.getState?.(); return u && r && u.physicsStepCount > physics0 && r.frameCount > frame0; }",
            arg=[int(universe_consistency_before.get("physicsStepCount", -1) or -1), int(renderer_consistency_before.get("frameCount", -1) or -1)],
            timeout=900,
        )
        consistency_progress_ok = True
    except Exception:
        pass
    universe_consistency = await state_dict(ctx, "__universe")
    game_consistency = await state_dict(ctx, "__game")
    renderer_consistency = await state_dict(ctx, "__renderer")
    bodies_consistency = (universe_consistency or {}).get("bodies", []) or []
    ids_consistency = [b.get("id") for b in bodies_consistency]
    planets_c, stars_c = count_types(bodies_consistency)
    consistency_failures = []
    render_screens = {}
    for b in bodies_consistency:
        if not all(finite_number(b.get(k)) for k in ("mass", "radius", "averageTemperature", "rotationSpeed", "orbitalVelocity")):
            consistency_failures.append(f"nonfinite-scalar:{b.get('id')}")
        if not all(finite_vec3(b.get(k)) for k in ("position", "velocity", "acceleration", "rotation")):
            consistency_failures.append(f"nonfinite-vector:{b.get('id')}")
        mesh = b.get("mesh") or {}
        if not mesh.get("uuid") or not finite_vec3(mesh.get("worldPosition")):
            consistency_failures.append(f"missing-mesh:{b.get('id')}")
        if vec_distance(b.get("position"), mesh.get("worldPosition")) > max(0.05, float(b.get("radius", 1)) * 0.05):
            consistency_failures.append(f"transform-mismatch:{b.get('id')}")
        parent_id = b.get("parentStarId")
        if parent_id:
            parent = body_by_id(universe_consistency, parent_id)
            recomputed = vec_distance(b.get("position"), (parent or {}).get("position"))
            if not parent or not relative_close(recomputed, b.get("distanceToParent"), abs_tol=0.05, rel_tol=0.03):
                consistency_failures.append(f"parent-distance:{b.get('id')}")
        render_screens[str(b.get("id"))] = await project_world_to_canvas(page, mesh.get("worldPosition") or b.get("position"))
    render_patches = await canvas_multi_patch_probe(page, render_screens, 11)
    render_presence = {
        body_id: {"screen": render_screens.get(body_id), "patch": render_patches.get(body_id, {}), "visible": patch_has_body_signal(render_screens.get(body_id), render_patches.get(body_id, {}), minimum_signal=0.05)}
        for body_id in render_screens
    }
    visible_reported_bodies = bool(bodies_consistency) and all(
        as_dict(render_presence.get(str(body.get("id")))).get("visible") is True
        for body in bodies_consistency
    )
    state_consistency_ok = bool(
        consistency_setup_ok and universe_consistency and game_consistency and renderer_consistency
        and 4 <= len(bodies_consistency) <= 16
        and len(ids_consistency) == len(set(ids_consistency))
        and all(body_contract_valid(body) for body in bodies_consistency)
        and game_consistency.get("bodyCount") == len(bodies_consistency)
        and game_consistency.get("planetCount") == planets_c
        and game_consistency.get("starCount") == stars_c
        and renderer_consistency.get("sceneBodyMeshCount") == len(bodies_consistency)
        and renderer_consistency.get("drawCalls", 0) > 0
        and renderer_consistency.get("triangles", 0) > 0
        and visible_reported_bodies
        and consistency_progress_ok
        and finite_number(universe_consistency.get("physicsStepCount"))
        and universe_consistency.get("physicsStepCount", 0) > (universe_consistency_before or {}).get("physicsStepCount", -1)
        and renderer_consistency.get("frameCount", 0) > (renderer_consistency_before or {}).get("frameCount", -1)
        and len(consistency_failures) == 0
    )
    ctx.check(20, state_consistency_ok, f"setup={consistency_setup_ok}, progress={consistency_progress_ok}, counts={game_consistency.get('bodyCount') if game_consistency else None}/{len(bodies_consistency)}/{renderer_consistency.get('sceneBodyMeshCount') if renderer_consistency else None}, steps={(universe_consistency_before or {}).get('physicsStepCount')}->{universe_consistency.get('physicsStepCount') if universe_consistency else None}, frames={(renderer_consistency_before or {}).get('frameCount')}->{renderer_consistency.get('frameCount') if renderer_consistency else None}, visibleBodies={render_presence}, failures={consistency_failures}")

    # 23. Modest-load stability. The workload is the fresh four-body Solar
    # System established for R20, not a residue of earlier successful/failed
    # sandbox operations. Keep independent render evidence at both ends.
    renderer_before_stability = await state_dict(ctx, "__renderer")
    universe_before_stability = await state_dict(ctx, "__universe")
    observer_before_stability = await evaluator_observer_state(page)
    stability_screens_before = {
        preset: await project_world_to_canvas(page, as_dict((body_by_preset(universe_before_stability, preset) or {}).get("mesh")).get("worldPosition") or (body_by_preset(universe_before_stability, preset) or {}).get("position"))
        for preset in ("sun", "earth")
    }
    stability_patches_before = await canvas_multi_patch_probe(page, stability_screens_before, 13)
    stability_visual_before = {
        preset: {"screen": stability_screens_before.get(preset), "patch": stability_patches_before.get(preset, {}), "visible": patch_has_body_signal(stability_screens_before.get(preset), stability_patches_before.get(preset, {}), minimum_signal=0.05)}
        for preset in ("sun", "earth")
    }
    page_error_count_before = len(getattr(ctx, "page_errors", []))
    stability_wall_start = time.monotonic()
    await page.wait_for_timeout(900)
    stability_wall_elapsed = max(time.monotonic() - stability_wall_start, 1e-6)
    renderer_after_stability = await state_dict(ctx, "__renderer")
    universe_after_stability = await state_dict(ctx, "__universe")
    observer_after_stability = await evaluator_observer_state(page)
    resources_before_stability = as_dict(observer_before_stability.get("webglResources"))
    resources_after_stability = as_dict(observer_after_stability.get("webglResources"))
    resource_types = ("buffer", "texture", "shader", "program", "framebuffer", "renderbuffer")
    resource_created_delta = sum(
        int(as_dict(resources_after_stability.get(kind)).get("created", 0) or 0)
        - int(as_dict(resources_before_stability.get(kind)).get("created", 0) or 0)
        for kind in resource_types
    )
    resource_active_delta = sum(
        int(as_dict(resources_after_stability.get(kind)).get("active", 0) or 0)
        - int(as_dict(resources_before_stability.get(kind)).get("active", 0) or 0)
        for kind in resource_types
    )
    resource_observer_ok = bool(
        all(kind in resources_before_stability and kind in resources_after_stability for kind in resource_types)
        and resource_created_delta <= 4
        and resource_active_delta <= 4
    )
    stability_screens_after = {
        preset: await project_world_to_canvas(page, as_dict((body_by_preset(universe_after_stability, preset) or {}).get("mesh")).get("worldPosition") or (body_by_preset(universe_after_stability, preset) or {}).get("position"))
        for preset in ("sun", "earth")
    }
    stability_patches_after = await canvas_multi_patch_probe(page, stability_screens_after, 13)
    stability_visual_after = {
        preset: {"screen": stability_screens_after.get(preset), "patch": stability_patches_after.get(preset, {}), "visible": patch_has_body_signal(stability_screens_after.get(preset), stability_patches_after.get(preset, {}), minimum_signal=0.05)}
        for preset in ("sun", "earth")
    }
    new_page_errors = getattr(ctx, "page_errors", [])[page_error_count_before:]
    stable_numeric = True
    for b in (universe_after_stability or {}).get("bodies", []) or []:
        if not all(finite_vec3(b.get(k)) for k in ("position", "velocity", "acceleration", "rotation")):
            stable_numeric = False
            break
    body_count_stability = len((universe_after_stability or {}).get("bodies", []) or [])
    stable_render_evidence = all(
        as_dict(stability_visual_before.get(preset)).get("visible") is True
        and as_dict(stability_visual_after.get(preset)).get("visible") is True
        for preset in ("sun", "earth")
    )
    representative_load_ok = bool(
        4 <= body_count_stability <= 16
        and renderer_after_stability.get("sceneBodyMeshCount") == body_count_stability
        and renderer_after_stability.get("drawCalls", 0) > 0
        and renderer_after_stability.get("triangles", 0) > 0
        and stable_render_evidence
    )
    frame_delta_stability = float(renderer_after_stability.get("frameCount", 0) or 0) - float(renderer_before_stability.get("frameCount", 0) or 0)
    measured_fps = frame_delta_stability / stability_wall_elapsed
    observed_raf_delta = float(observer_after_stability.get("rafFired", 0) or 0) - float(observer_before_stability.get("rafFired", 0) or 0)
    observed_raf_fps = observed_raf_delta / stability_wall_elapsed
    frame_raf_ratio = frame_delta_stability / observed_raf_delta if observed_raf_delta > 0 else math.inf
    raf_observer_ok = bool(
        observer_before_stability and observer_after_stability
        and observed_raf_delta > 0
        and float(observer_after_stability.get("rafScheduled", 0) or 0) > float(observer_before_stability.get("rafScheduled", 0) or 0)
        and finite_number(frame_raf_ratio) and 0.65 <= frame_raf_ratio <= 1.55
    )
    gpu_probe = await bounded_evaluate(page,
        """() => {
            const canvas = document.querySelector('[data-testid="space-canvas"]');
            const gl = canvas && (canvas.getContext('webgl2') || canvas.getContext('webgl'));
            if (!gl) return {renderer: '', vendor: '', software: false, headless: /HeadlessChrome/i.test(navigator.userAgent)};
            const ext = gl.getExtension('WEBGL_debug_renderer_info');
            const renderer = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER) || '');
            const vendor = String(ext ? gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR) || '');
            return {renderer, vendor, software: /swiftshader|llvmpipe|software/i.test(renderer), headless: /HeadlessChrome/i.test(navigator.userAgent)};
        }"""
    )
    fps_target = 60.0
    # Display-vsync can throttle RAF in virtual/Xvfb hosts even when the product
    # can render a frame inside the 16.67 ms budget.  Use an evaluator-owned
    # uncapped benchmark of the *captured production RAF callback*: the harness
    # temporarily pauses the real RAF chain, drives exactly 60 production frames
    # with 16.67 ms synthetic timestamps (including the real renderer.render),
    # measures wall time, then restores one real RAF chain.  The target remains
    # strictly 60 FPS; no CI/headless/software threshold exemption exists.
    frame_budget_probe = await bounded_evaluate(page,
        "() => window.__utObserver && typeof window.__utObserver.benchmarkRafFrames === 'function' ? window.__utObserver.benchmarkRafFrames(60, 1000/60) : null",
        timeout=8.0,
    )
    frame_budget_probe = frame_budget_probe if isinstance(frame_budget_probe, dict) else {}
    benchmark_fps = float(frame_budget_probe.get("fps", 0) or 0)
    average_frame_cost_ms = float(frame_budget_probe.get("averageFrameCostMs", math.inf) or math.inf)
    fps_threshold_ok = bool(
        frame_budget_probe.get("ok") is True
        and int(frame_budget_probe.get("frames", 0) or 0) == 60
        and benchmark_fps >= fps_target
        and average_frame_cost_ms <= (1000.0 / fps_target)
    )
    stability_ok = bool(
        renderer_before_stability and renderer_after_stability and universe_before_stability and universe_after_stability
        and representative_load_ok
        and renderer_after_stability.get("webgl") is True
        and renderer_after_stability.get("animationRunning") is True
        and frame_delta_stability > 0
        and raf_observer_ok
        and resource_observer_ok
        and universe_after_stability.get("physicsStepCount", 0) > universe_before_stability.get("physicsStepCount", 0)
        and finite_number(renderer_after_stability.get("averageFps")) and float(renderer_after_stability.get("averageFps")) > 0
        and finite_number(renderer_after_stability.get("lastFrameDeltaMs")) and 0 <= float(renderer_after_stability.get("lastFrameDeltaMs")) < 250
        and stable_numeric
        and len(new_page_errors) == 0
    )
    fps_ok = bool(
        renderer_before_stability and renderer_after_stability
        and representative_load_ok
        and renderer_after_stability.get("webgl") is True
        and frame_delta_stability > 0
        and raf_observer_ok
        and fps_threshold_ok
    )
    ctx.check(23, stability_ok, f"before={renderer_before_stability}, after={renderer_after_stability}, wallElapsed={stability_wall_elapsed:.3f}s, frameDelta={frame_delta_stability}, evaluatorRafDelta={observed_raf_delta}, frameRafRatio={frame_raf_ratio}, rafObserverOk={raf_observer_ok}, webglResourcesBefore={resources_before_stability}, webglResourcesAfter={resources_after_stability}, resourceCreatedDelta={resource_created_delta}, resourceActiveDelta={resource_active_delta}, resourceObserverOk={resource_observer_ok}, bodyCount={body_count_stability}, representativeLoad={representative_load_ok}, visibleBefore={stability_visual_before}, visibleAfter={stability_visual_after}, numeric={stable_numeric}, newErrors={new_page_errors}")
    ctx.check(48, fps_ok, f"representativeLoad={representative_load_ok}, measuredDisplayFps={measured_fps:.1f}, evaluatorDisplayRafFps={observed_raf_fps:.1f}, benchmarkFrames={frame_budget_probe.get('frames')}, benchmarkWallMs={frame_budget_probe.get('wallMs')}, benchmarkFps={benchmark_fps:.1f}, averageFrameCostMs={average_frame_cost_ms:.3f}, targetFps>={fps_target:.0f}, gpu={gpu_probe}, thresholdExemption=False")


    # 24. Menu / reset cleanup
    # The settings panel may remain mounted off-screen after being closed. Do not
    # infer clickability from is_visible() alone; cleanup must exercise the menu
    # transition itself rather than clicking a transformed-away close control.
    await arm_planet(page, "procedural")
    pre_menu_game = await state_dict(ctx, "__game")
    pre_menu_universe = await state_dict(ctx, "__universe")
    await safe_click(menu_button)
    await wait_game_state(page, "menu")
    menu_state = await state_dict(ctx, "__game")
    menu_selection = await state_dict(ctx, "__selection")
    menu_settings = await state_dict(ctx, "__settings")
    menu_spawner = await state_dict(ctx, "__spawner")
    menu_cleanup = bool(
        menu_state and menu_state.get("gameState") == "menu" and menu_state.get("scenario") is None
        and menu_state.get("selectedObjectId") is None and menu_state.get("spawnMode") == "idle"
        and menu_state.get("toolbarVisible") is False
        and menu_selection and menu_selection.get("selectedObjectId") is None and menu_selection.get("settingsOpen") is False
        and menu_settings and menu_settings.get("panelOpen") is False and menu_settings.get("selectedObjectId") is None
        and menu_spawner and menu_spawner.get("mode") == "idle" and menu_spawner.get("pendingPlacement") is False
    )
    # Re-enter scenarios only through the same UI path available to users.
    await safe_click(play)
    await wait_game_state(page, "scenario_select")
    await safe_click(custom_button)
    await wait_scenario(page, "custom_sandbox")
    await page.wait_for_timeout(50)
    custom_reset = await state_dict(ctx, "__universe")
    custom_reset_game = await state_dict(ctx, "__game")

    await safe_click(menu_button)
    await wait_game_state(page, "menu")
    await safe_click(play)
    await wait_game_state(page, "scenario_select")
    await safe_click(solar_button)
    await wait_scenario(page, "solar_system")
    await page.wait_for_timeout(50)
    solar_reset = await state_dict(ctx, "__universe")

    await safe_click(menu_button)
    await wait_game_state(page, "menu")
    await safe_click(play)
    await wait_game_state(page, "scenario_select")
    await safe_click(custom_button)
    await wait_scenario(page, "custom_sandbox")
    await page.wait_for_timeout(50)
    custom_reset_2 = await state_dict(ctx, "__universe")

    solar_presets = {b.get("preset") for b in (solar_reset or {}).get("bodies", []) or []}
    reset_ok = bool(
        menu_cleanup
        and custom_reset_game and custom_reset_game.get("scenario") == "custom_sandbox"
        and (custom_reset or {}).get("bodies", []) == []
        and {"sun", "earth", "mars", "jupiter"}.issubset(solar_presets)
        and (custom_reset_2 or {}).get("bodies", []) == []
    )
    ctx.check(24, reset_ok, f"preMenuBodies={len((pre_menu_universe or {}).get('bodies', []) or [])}, preMenu={pre_menu_game}, menu={menu_state}/{menu_selection}/{menu_settings}/{menu_spawner}, custom1={(custom_reset or {}).get('bodies')}, solarPresets={solar_presets}, custom2={(custom_reset_2 or {}).get('bodies')}")


    # 25. Public hook serialization and declared root schemas.
    contract_probe_late = await public_contract_probe(page)
    serialization_probe = await bounded_evaluate(page,
        """names => {
            const snapshots = {};
            let ok = true;
            let error = null;
            for (const name of names) {
                try {
                    const hook = window[name];
                    if (!hook || typeof hook.getState !== 'function') { ok = false; continue; }
                    const value = hook.getState();
                    const encoded = JSON.stringify(value);
                    if (typeof encoded !== 'string') ok = false;
                    snapshots[name] = value;
                } catch (e) {
                    ok = false;
                    error = String(e && e.message ? e.message : e);
                }
            }
            return {ok, error, snapshots};
        }""",
        list(PUBLIC_HOOK_NAMES),
    )
    contract_serializable_ok = bool(
        isinstance(serialization_probe, dict)
        and serialization_probe.get("ok") is True
        and isinstance(serialization_probe.get("snapshots"), dict)
        and len(serialization_probe.get("snapshots", {})) == len(PUBLIC_HOOK_NAMES)
    )
    ctx.check(25, contract_serializable_ok, f"serializationOk={serialization_probe.get('ok') if isinstance(serialization_probe, dict) else None}, snapshotCount={len(serialization_probe.get('snapshots', {})) if isinstance(serialization_probe, dict) else 0}, error={serialization_probe.get('error') if isinstance(serialization_probe, dict) else None}")
    ctx.check(32, all(contract_probe_late.values()), f"contractSchema={contract_probe_late}")

    # 26. getState is observational: repeated synchronous reads cannot mutate state.
    readonly_probe = await bounded_evaluate(page,
        """names => {
            const snap = () => Object.fromEntries(names.map((name) => {
                const hook = window[name];
                return [name, hook && typeof hook.getState === 'function' ? hook.getState() : null];
            }));
            const before = snap();
            for (let i = 0; i < 80; i++) {
                for (const name of names) {
                    const hook = window[name];
                    if (hook && typeof hook.getState === 'function') hook.getState();
                }
            }
            const after = snap();
            try {
                return {same: JSON.stringify(before) === JSON.stringify(after), error: null};
            } catch (e) {
                return {same: false, error: String(e && e.message ? e.message : e)};
            }
        }""",
        list(PUBLIC_HOOK_NAMES),
    )
    readonly_ok = bool(isinstance(readonly_probe, dict) and readonly_probe.get("same") is True)
    ctx.check(26, readonly_ok, f"synchronousSnapshotStable={readonly_probe.get('same') if isinstance(readonly_probe, dict) else None}, error={readonly_probe.get('error') if isinstance(readonly_probe, dict) else None}")




if __name__ == "__main__":
    import web_ut_harness

    web_ut_harness.main(__import__("web_ut"))
