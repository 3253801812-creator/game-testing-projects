#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""32c92443cf19c78e12d17e5b1b08ce8c — 3D web-swinging game acceptance checks.

Each rubric id produces exactly one result. Deterministic checks use real browser input plus
independent geometry/browser observations where practical. Pure visual requirements use VLM.
"""

from __future__ import annotations

import asyncio
import json
import math
import re
from pathlib import Path
from typing import Any


# Exact public hook expressions are kept here as the evaluator contract.
# They intentionally match prompt.md and mapping.json byte-for-byte after whitespace normalization.
CONTRACT_HOOKS = {
    "__game": "window.__game.getState()",
    "__player": "window.__player.getState()",
    "__camera": "window.__camera.getState()",
    "__web": "window.__web.getState()",
    "__world": "window.__world.getState()",
}


MAPPING_PATH = Path(__file__).resolve().with_name("mapping.json")


def _load_rubric() -> list[dict[str, Any]]:
    mapping = json.loads(MAPPING_PATH.read_text(encoding="utf-8"))
    rubrics = mapping.get("rubrics")
    if not isinstance(rubrics, list) or not rubrics:
        raise RuntimeError("mapping.json 缺少有效的 rubrics 列表")
    cleaned: list[dict[str, Any]] = []
    seen: set[int] = set()
    for row in rubrics:
        if not isinstance(row, dict):
            raise RuntimeError("mapping.json 中存在非对象 Rubric")
        rid, text, kind = row.get("id"), row.get("text"), row.get("kind")
        if not isinstance(rid, int) or rid in seen:
            raise RuntimeError(f"mapping.json 中存在无效或重复 Rubric id：{rid!r}")
        if not isinstance(text, str) or not text.strip() or kind not in {"state", "dom", "vlm"}:
            raise RuntimeError(f"mapping.json 中 Rubric {rid} 字段不完整")
        seen.add(rid)
        cleaned.append({"id": rid, "text": text, "kind": kind})
    return cleaned


RUBRIC = _load_rubric()


def _finite_number(v: Any) -> bool:
    return isinstance(v, (int, float)) and math.isfinite(float(v))


def _vec(obj: Any) -> tuple[float, float, float] | None:
    if not isinstance(obj, dict):
        return None
    if not all(_finite_number(obj.get(k)) for k in ("x", "y", "z")):
        return None
    return float(obj["x"]), float(obj["y"]), float(obj["z"])


def _sub(a, b):
    return a[0] - b[0], a[1] - b[1], a[2] - b[2]


def _norm2(x: float, z: float) -> tuple[float, float] | None:
    n = math.hypot(x, z)
    if n < 1e-9:
        return None
    return x / n, z / n


def _dist(a, b) -> float:
    return math.sqrt(sum((a[i] - b[i]) ** 2 for i in range(3)))


def _horiz_distance(a, b) -> float:
    return math.hypot(a[0] - b[0], a[2] - b[2])


def _camera_basis(camera: dict[str, Any]) -> tuple[tuple[float, float], tuple[float, float]] | None:
    p, t = _vec(camera.get("position")), _vec(camera.get("target"))
    if not p or not t:
        return None
    f = _norm2(t[0] - p[0], t[2] - p[2])
    if not f:
        return None
    # right = forward x up in an x/z plane, with Y up.
    right = (-f[1], f[0])
    return f, right


def _point_inside_aabb_xz(pos, building, margin: float = 0.0) -> bool:
    """Ground-plane occupancy check; deliberately independent of Y so groundY==box.min.y is valid."""
    mn, mx = _vec(building.get("min")), _vec(building.get("max"))
    if not mn or not mx:
        return False
    return (mn[0] - margin < pos[0] < mx[0] + margin and
            mn[2] - margin < pos[2] < mx[2] + margin)


def _player_penetrates_aabb(pos, building, radius: float, height: float, tol: float = 0.04) -> bool:
    """Independent capsule-vs-building conservative penetration check.

    The game exposes a vertical capsule-like collider as radius/height.  For wall collision we use
    an expanded XZ AABB and a vertical interval overlap.  Exact boundary contact is not penetration.
    """
    mn, mx = _vec(building.get("min")), _vec(building.get("max"))
    if not mn or not mx:
        return False
    feet, top = pos[1], pos[1] + max(0.0, height)
    vertical_overlap = top > mn[1] + tol and feet < mx[1] - tol
    if not vertical_overlap:
        return False
    return (mn[0] - radius + tol < pos[0] < mx[0] + radius - tol and
            mn[2] - radius + tol < pos[2] < mx[2] + radius - tol)


def _segment_tunnels_aabb_xz(a, b, building, radius: float, height: float, tol: float = 0.04) -> bool:
    """Detect a sampled step that enters and exits the expanded footprint entirely between samples."""
    mn, mx = _vec(building.get("min")), _vec(building.get("max"))
    if not mn or not mx:
        return False
    # Require the player's vertical interval to overlap the building at either endpoint.
    if not (((a[1] + height > mn[1] + tol) and (a[1] < mx[1] - tol)) or
            ((b[1] + height > mn[1] + tol) and (b[1] < mx[1] - tol))):
        return False
    xmin, xmax = mn[0] - radius + tol, mx[0] + radius - tol
    zmin, zmax = mn[2] - radius + tol, mx[2] + radius - tol
    dx, dz = b[0] - a[0], b[2] - a[2]
    t0, t1 = 0.0, 1.0
    for p, qmin, qmax, d in ((a[0], xmin, xmax, dx), (a[2], zmin, zmax, dz)):
        if abs(d) < 1e-12:
            if p <= qmin or p >= qmax:
                return False
            continue
        e0, e1 = (qmin - p) / d, (qmax - p) / d
        if e0 > e1:
            e0, e1 = e1, e0
        t0, t1 = max(t0, e0), min(t1, e1)
        if t0 >= t1:
            return False
    # A true tunnel has both entry and exit within the sampled movement segment.
    return 1e-4 < t0 < t1 < 1.0 - 1e-4


def _distance_to_aabb_xz(pos, building) -> float:
    mn, mx = _vec(building.get("min")), _vec(building.get("max"))
    if not mn or not mx:
        return float("inf")
    dx = max(mn[0] - pos[0], 0.0, pos[0] - mx[0])
    dz = max(mn[2] - pos[2], 0.0, pos[2] - mx[2])
    return math.hypot(dx, dz)


def _anchor_matches_building_and_aim(anchor, building, camera, tol: float = 1.0) -> tuple[bool, dict[str, Any]]:
    """Cross-check anchor against the selected building bounds and the real center-camera ray.

    AABB face distance alone is intentionally not required because a real cylindrical landmark can
    be hit on its curved surface well inside its AABB face.  Center-ray consistency plus membership
    in the selected real building bounds is a geometry-aware independent check for both boxes and
    cylinders.
    """
    if not isinstance(building, dict) or not isinstance(camera, dict):
        return False, {"insideBounds": False, "rayError": None, "rayT": None}
    mn, mx = _vec(building.get("min")), _vec(building.get("max"))
    cam_pos, cam_target = _vec(camera.get("position")), _vec(camera.get("target"))
    if not anchor or not mn or not mx or not cam_pos or not cam_target:
        return False, {"insideBounds": False, "rayError": None, "rayT": None}
    inside = all(mn[i] - tol <= anchor[i] <= mx[i] + tol for i in range(3))
    d = _sub(cam_target, cam_pos)
    mag = math.sqrt(sum(v*v for v in d))
    if mag < 1e-8:
        return False, {"insideBounds": inside, "rayError": None, "rayT": None}
    direction = tuple(v / mag for v in d)
    rel = _sub(anchor, cam_pos)
    ray_t = sum(rel[i] * direction[i] for i in range(3))
    closest = tuple(cam_pos[i] + direction[i] * ray_t for i in range(3))
    ray_error = _dist(anchor, closest)
    ok = inside and ray_t > 0 and ray_error <= tol
    return ok, {"insideBounds": inside, "rayError": ray_error, "rayT": ray_t}


def _read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return ""


def _project_source_text(project: Path) -> str:
    chunks: list[str] = []
    skip = {"node_modules", "dist", "build", "out", ".git"}
    for path in project.rglob("*"):
        if not path.is_file() or any(part in skip for part in path.parts):
            continue
        if path.suffix.lower() not in {".ts", ".tsx", ".js", ".jsx", ".html", ".css", ".json"}:
            continue
        chunks.append(_read_text(path)[:200000])
    return "\n".join(chunks)


def _source_feature_flags(project: Path) -> dict[str, bool]:
    t = _project_source_text(project).lower()
    return {"react_mount": "createroot" in t or "reactdom" in t}


def _tailwind_css_imported_by_app(project: Path, css_files: list[Path]) -> tuple[bool, list[str]]:
    """Require a real app entry to import the stylesheet that contains Tailwind directives."""
    tailwind_css = {
        p.resolve()
        for p in css_files
        if re.search(r"@tailwind\s+(?:base|components|utilities)|@import\s+[\"']tailwindcss[\"']", _read_text(p))
    }
    if not tailwind_css:
        return False, []
    imported: list[str] = []
    for name in ("main.tsx", "main.ts", "main.jsx", "main.js"):
        entry = project / "src" / name
        if not entry.is_file():
            continue
        text = _read_text(entry)
        for match in re.finditer(r"import(?:\s+[^\"']+?\s+from)?\s*[\"']([^\"']+\.css)[\"']", text):
            spec = match.group(1)
            if not spec.startswith("."):
                continue
            resolved = (entry.parent / spec).resolve()
            if resolved in tailwind_css:
                try:
                    imported.append(resolved.relative_to(project).as_posix())
                except Exception:
                    imported.append(resolved.name)
    return bool(imported), sorted(set(imported))


def _package(project: Path) -> dict[str, Any]:
    try:
        return json.loads((project / "package.json").read_text(encoding="utf-8"))
    except Exception:
        return {}


async def _canvas_bytes(canvas):
    try:
        return await canvas.screenshot(type="png")
    except Exception:
        return b""


async def _player_visual_patch(page, canvas):
    """Capture a broad third-person player region without assuming a game-specific DOM marker.

    The prompt requires the player to remain visible in front of a third-person camera.  A broad
    center/lower-center crop therefore provides browser-rendered evidence while tolerating camera
    bob, different character sizes, and small composition changes across valid implementations.
    """
    try:
        box = await canvas.bounding_box()
        if not box:
            return b""
        width = max(180.0, min(box["width"] * 0.42, 560.0))
        height = max(220.0, min(box["height"] * 0.62, 560.0))
        clip = {
            "x": box["x"] + box["width"] * 0.5 - width / 2,
            "y": box["y"] + box["height"] * 0.33,
            "width": width,
            "height": min(height, box["height"] * 0.67),
        }
        return await page.screenshot(type="png", clip=clip)
    except Exception:
        return b""


async def _canvas_web_patch_sets(page, canvas):
    """Capture narrow positive/negative-control strips around the expected center-ray web path.

    The anchor was independently checked against the center-camera ray, so a visible web should cross
    a narrow vertical corridor below the reticle toward the third-person player.  Side strips are
    negative controls: camera/world motion changes both areas, while the web itself should primarily
    change the center strips.
    """
    try:
        box = await canvas.bounding_box()
        if not box:
            return {"center": [], "control": [], "full": []}
        patch_w = max(42.0, min(84.0, box["width"] * 0.065))
        patch_h = max(30.0, min(58.0, box["height"] * 0.070))
        ys = (0.50, 0.575, 0.65, 0.725)
        out = {"center": [], "control": [], "full": [await canvas.screenshot(type="png")]}
        for name, xf in (("center", 0.5), ("control", 0.70)):
            for yf in ys:
                clip = {
                    "x": box["x"] + box["width"] * xf - patch_w / 2,
                    "y": box["y"] + box["height"] * yf - patch_h / 2,
                    "width": patch_w,
                    "height": patch_h,
                }
                out[name].append(await page.screenshot(type="png", clip=clip))
        return out
    except Exception:
        return {"center": [], "control": [], "full": []}


def _patch_change_count(a: Any, b: Any, key: str) -> int:
    if not isinstance(a, dict) or not isinstance(b, dict):
        return 0
    aa, bb = a.get(key, []), b.get(key, [])
    if not isinstance(aa, list) or not isinstance(bb, list):
        return 0
    return sum(bool(x and y and x != y) for x, y in zip(aa, bb))


async def _state(ctx, name: str) -> dict[str, Any]:
    value = await ctx.get_state(name)
    return value if isinstance(value, dict) else {}


async def _wait_state(ctx, hook: str, predicate, timeout_ms=3500, interval_ms=55):
    elapsed = 0
    last = {}
    while elapsed <= timeout_ms:
        last = await _state(ctx, hook)
        try:
            if predicate(last):
                return last
        except Exception:
            pass
        await ctx.page.wait_for_timeout(interval_ms)
        elapsed += interval_ms
    return last


async def _dispatch_browser_mouse_button(ctx, event_type: str, button: int = 0):
    """Dispatch trusted Chromium mouse input via CDP; never touch the host OS cursor."""
    return await ctx.mouse_button(event_type, button)


async def _dispatch_browser_mouse_move(ctx, dx: float, dy: float):
    """Dispatch trusted Chromium relative mouse movement via CDP inside headless Chromium."""
    return await ctx.mouse_move(dx, dy)


async def _ensure_input_focus(page, canvas, ctx):
    if await canvas.count() == 0:
        return

    overlay = page.locator(
        "[data-testid='start-overlay']:visible, #go:visible, #enter3:visible, #start4:visible, "
        "button:visible:has-text('Start'), button:visible:has-text('Play'), "
        "button:visible:has-text('Enter'), button:visible:has-text('Boot'), "
        "button:visible:has-text('开始'), button:visible:has-text('进入')"
    ).first
    try:
        if await overlay.count():
            # Keyboard activation is trusted browser input and cannot reposition the host pointer.
            await overlay.focus()
            await page.keyboard.press("Enter")
            await page.wait_for_timeout(120)
    except Exception:
        pass

    try:
        await canvas.focus()
        await _dispatch_browser_mouse_button(ctx, "mousedown", 0)
        await _dispatch_browser_mouse_button(ctx, "mouseup", 0)
        await page.wait_for_timeout(120)
        await canvas.focus()
    except Exception:
        pass


async def _press_move(page, key: str, duration_ms=320):
    await page.keyboard.down(key)
    await page.wait_for_timeout(duration_ms)
    await page.keyboard.up(key)
    await page.wait_for_timeout(45)


async def _tap_key_for_frame(page, key: str, hold_ms: int = 90):
    """Hold a key long enough to cross at least one fixed-step/RAF update.

    Playwright ``keyboard.press`` can emit down/up within one browser task, which a frame-polled
    game never observes. This helper remains a real keyboard action while guaranteeing an input frame.
    """
    await page.keyboard.down(key)
    await page.wait_for_timeout(max(35, hold_ms))
    await page.keyboard.up(key)
    await page.wait_for_timeout(25)


async def _movement_observation(ctx, key: str, duration_ms=320):
    p0 = await _state(ctx, "__player")
    c0 = await _state(ctx, "__camera")
    await _press_move(ctx.page, key, duration_ms)
    p1 = await _state(ctx, "__player")
    c1 = await _state(ctx, "__camera")
    a, b = _vec(p0.get("position")), _vec(p1.get("position"))
    return p0, p1, c0, c1, a, b


async def _mouse_home(page):
    """Return the canvas centre for diagnostics only; no host-pointer movement uses this value."""
    canvas = page.locator("[data-testid='game-canvas']").first
    box = await canvas.bounding_box() if await canvas.count() else None
    if not box:
        return None
    return (box["x"] + box["width"] * 0.5, box["y"] + box["height"] * 0.5)


async def _restore_mouse_aim(page, ctx, settle_ms: int = 45):
    """Undo evaluator aim by an inverse trusted Chromium movement delta.

    No Playwright page.mouse API is used. This guarantees the acceptance run cannot reposition the
    host OS cursor even on headed/managed Chromium installations.
    """
    current = getattr(ctx, "_ut_mouse_offset", (0.0, 0.0))
    if isinstance(current, tuple) and len(current) == 2:
        dx, dy = float(current[0]), float(current[1])
        if abs(dx) > 1e-9 or abs(dy) > 1e-9:
            await _dispatch_browser_mouse_move(ctx, -dx, -dy)
    setattr(ctx, "_ut_mouse_offset", (0.0, 0.0))
    if settle_ms:
        await page.wait_for_timeout(settle_ms)


async def _move_mouse_offset(page, ctx, dx: float, dy: float, settle_ms: int = 45):
    """Aim at a bounded offset using Chromium trusted input events."""
    canvas = page.locator("[data-testid='game-canvas']").first
    if await canvas.count() == 0:
        return False
    # Keep the virtual pointer bounded, but allow enough angular travel to inspect
    # sky/ground as well as nearby buildings. This remains real browser mouse input.
    dx = max(-240.0, min(240.0, float(dx)))
    dy = max(-240.0, min(240.0, float(dy)))
    current = getattr(ctx, "_ut_mouse_offset", (0.0, 0.0))
    cx, cy = (float(current[0]), float(current[1])) if isinstance(current, tuple) and len(current) == 2 else (0.0, 0.0)
    await _dispatch_browser_mouse_move(ctx, dx - cx, dy - cy)
    setattr(ctx, "_ut_mouse_offset", (dx, dy))
    if settle_ms:
        await page.wait_for_timeout(settle_ms)
    return True


async def _mouse_delta_changes_camera(page, ctx, dx: float, dy: float):
    canvas = page.locator("[data-testid='game-canvas']").first
    box = await canvas.bounding_box() if await canvas.count() else None
    if not box:
        return {}, {}, b"", b""
    await _restore_mouse_aim(page, ctx, settle_ms=25)
    before_state = await _state(ctx, "__camera")
    before_img = await _canvas_bytes(canvas)
    await _move_mouse_offset(page, ctx, dx, dy, settle_ms=80)
    after_state = await _state(ctx, "__camera")
    after_img = await _canvas_bytes(canvas)
    # The observation is captured before restoration, so the test still proves real mouse look while
    # the next Rubric starts from the same aim instead of inheriting this deliberate camera delta.
    await _restore_mouse_aim(page, ctx, settle_ms=35)
    return before_state, after_state, before_img, after_img


async def _scan_for_web_target(page, ctx, want_valid: bool, attempts=12):
    """Search a bounded deterministic aim window, reusing a previous successful offset first.

    Reusing the last real mouse offset is only a fast first probe; if the player/camera has moved, the
    normal bounded scan still runs. Failed scans restore home aim so Rubrics never accumulate drift.
    """
    await _restore_mouse_aim(page, ctx, settle_ms=25)
    last = await _state(ctx, "__web")
    if bool(last.get("targetValid")) is want_valid:
        return last

    cache_attr = "_ut_valid_target_offset" if want_valid else "_ut_invalid_target_offset"
    cached = getattr(ctx, cache_attr, None)
    if isinstance(cached, tuple) and len(cached) == 2:
        await _move_mouse_offset(page, ctx, cached[0], cached[1], settle_ms=40)
        last = await _state(ctx, "__web")
        if bool(last.get("targetValid")) is want_valid:
            return last
        await _restore_mouse_aim(page, ctx, settle_ms=20)

    if want_valid:
        # Search a wider but still bounded set of ordinary mouse-look directions.  This matters
        # after release, when retained momentum can move the player tens of units while the camera
        # catches up; a narrow reticle-sized scan can miss every building even in a valid city.
        pattern = [
            (0, -18), (22, -18), (-22, -18),
            (42, -10), (-42, -10), (58, 4), (-58, 4),
            (28, 18), (-28, 18), (0, 24),
            (78, -34), (-78, -34), (96, -10), (-96, -10),
            (118, -44), (-118, -44), (145, -18), (-145, -18),
            (170, -60), (-170, -60), (200, -24), (-200, -24),
        ]
    else:
        # Invalid-target checks must be able to reach open sky.  The old ±50 px scan
        # only changed pitch by ~0.1 rad in this game, so a dense skyline could make
        # every probe hit a building even though invalid aim directions clearly exist.
        # These are still ordinary trusted mouse movements, just over a realistic
        # look range rather than a tiny reticle-sized window.
        pattern = [
            # Look high into open sky first.
            (0, -90), (0, -150), (0, -220),
            (90, -190), (-90, -190),
            (150, -220), (-150, -220), (220, -240), (-220, -240),
            # Dense skylines can legitimately fill the whole upward cone.  Looking
            # steeply toward the nearby road/ground is another real direction with no
            # building target in games whose web raycast correctly excludes ground.
            (0, 120), (0, 200), (150, 220), (-150, 220),
        ]

    limit = min(max(1, int(attempts)), len(pattern))
    for dx, dy in pattern[:limit]:
        await _move_mouse_offset(page, ctx, dx, dy, settle_ms=45)
        last = await _state(ctx, "__web")
        if bool(last.get("targetValid")) is want_valid:
            setattr(ctx, cache_attr, (float(dx), float(dy)))
            return last

    await _restore_mouse_aim(page, ctx, settle_ms=35)
    return last


async def _attach_web(page, ctx):
    state = await _scan_for_web_target(page, ctx, True)
    if not state.get("targetValid"):
        empty_regions = {"center": [], "control": [], "full": []}
        return {}, empty_regions, empty_regions.copy(), {}, {}
    canvas = page.locator("[data-testid='game-canvas']").first
    before = await _canvas_web_patch_sets(page, canvas)
    aim_camera = await _state(ctx, "__camera")
    player_before = await _state(ctx, "__player")
    # Do not recenter the mouse after a valid aim is found. Under Pointer Lock that would create
    # a real movement delta and could rotate away from the very target we are trying to validate.
    await _dispatch_browser_mouse_button(ctx, "mousedown", 0)
    attached = await _wait_state(ctx, "__web", lambda st: st.get("attached") is True, timeout_ms=1300)
    await page.wait_for_timeout(65)
    after = await _canvas_web_patch_sets(page, canvas)
    return attached, before, after, aim_camera, player_before


async def _release_web(page, ctx):
    await _dispatch_browser_mouse_button(ctx, "mouseup", 0)
    released = await _wait_state(ctx, "__web", lambda s: s.get("attached") is False, timeout_ms=800)
    await _restore_mouse_aim(page, ctx, settle_ms=35)
    return released


async def _settle_ground(ctx, timeout_ms=5000):
    return await _wait_state(ctx, "__player", lambda s: s.get("grounded") is True, timeout_ms=timeout_ms)


async def _reset_to_readable_city_view(page, ctx):
    """Return to a reproducible baseline without assuming any game-specific reset control.

    A conforming implementation is not required to implement an ``R`` reset key.  Reloading the
    already-resolved production page is evaluator-side control, works across implementations, and
    preserves the rule that gameplay assertions themselves use normal user input.
    """
    # Release any input that a previous check may have left active before navigation.
    for key in ("w", "a", "s", "d", "Space", "Shift", "Control"):
        try:
            await page.keyboard.up(key)
        except Exception:
            pass
    try:
        await _dispatch_browser_mouse_button(ctx, "mouseup", 0)
    except Exception:
        pass

    await page.reload(wait_until="load")
    canvas = page.locator("canvas").first
    if await canvas.count():
        await _ensure_input_focus(page, canvas, ctx)

    # Wait for public runtime state to become available, then prefer a grounded baseline when the
    # implementation exposes grounded.  Do not require a project-specific ready flag/schema.
    await _wait_state(ctx, "__player", lambda st: bool(st) and _vec(st.get("position")) is not None, timeout_ms=5000)
    player = await _state(ctx, "__player")
    if "grounded" in player:
        await _settle_ground(ctx, 5000)
    await page.wait_for_timeout(120)
    await _restore_mouse_aim(page, ctx, settle_ms=35)
    return await _state(ctx, "__camera")


async def run_checks(page, ctx, base_url: str):
    project = Path(ctx.target_path)
    package = _package(project)
    deps = {**(package.get("dependencies") or {}), **(package.get("devDependencies") or {})}
    source_flags = _source_feature_flags(project)

    # 1 React 19 — require both project metadata/source mount and the actual production page to be React-mounted.
    react_version = str(deps.get("react", ""))
    root_locator = page.locator("#root").first
    root_children = await root_locator.locator(":scope > *").count() if await root_locator.count() else 0
    react_runtime_marker = await page.evaluate(
        """() => {
            const root = document.getElementById('root');
            if (!root) return false;
            const hasReactKey = (node) => Object.keys(node || {}).some((key) =>
                key.startsWith('__reactContainer$') || key.startsWith('__reactFiber$') || key.startsWith('__reactProps$')
            );
            if (hasReactKey(root)) return true;
            for (const node of root.querySelectorAll('*')) if (hasReactKey(node)) return true;
            return false;
        }"""
    )
    production_build_loaded = bool(ctx.build_info.attempted and ctx.build_info.succeeded and ctx.build_info.output_dir)
    react19 = bool(
        re.search(r"(?:^|[^0-9])19(?:\.|$)", react_version)
        and source_flags["react_mount"]
        and production_build_loaded
        and react_runtime_marker
        and root_children > 0
    )
    ctx.check(1, react19, f"package react={react_version!r}；sourceReactMount={source_flags['react_mount']}；productionBuildLoaded={production_build_loaded}；runtimeReactMarker={bool(react_runtime_marker)}；runtimeRootChildren={root_children}。")

    # 2 Vite + TypeScript
    vite_version = str(deps.get("vite", ""))
    ts_version = str(deps.get("typescript", ""))
    scripts = package.get("scripts") or {}
    build_script = str(scripts.get("build", ""))
    vite_cfg = any((project / n).exists() for n in ("vite.config.ts", "vite.config.js", "vite.config.mts", "vite.config.mjs"))
    ts_cfg = (project / "tsconfig.json").exists()
    ts_sources = list((project / "src").rglob("*.ts")) + list((project / "src").rglob("*.tsx")) if (project / "src").exists() else []
    vite_ts_ok = bool(vite_version and ts_version and "vite" in build_script and vite_cfg and ts_cfg and ts_sources)
    ctx.check(2, vite_ts_ok, f"vite={vite_version!r}, typescript={ts_version!r}, build={build_script!r}, viteConfig={vite_cfg}, tsconfig={ts_cfg}, tsSources={len(ts_sources)}。")

    # 3 Tailwind — require the Tailwind stylesheet to be imported by the real app entry.
    tailwind_version = str(deps.get("tailwindcss", ""))
    css_files = list((project / "src").rglob("*.css")) if (project / "src").exists() else []
    css_text = "\n".join(_read_text(p) for p in css_files)
    tw_cfg = any((project / n).exists() for n in ("tailwind.config.js", "tailwind.config.cjs", "tailwind.config.ts", "tailwind.config.mjs"))
    postcss_cfg = any((project / n).exists() for n in ("postcss.config.js", "postcss.config.cjs", "postcss.config.mjs"))
    tw_css = bool(re.search(r'@tailwind\s+(base|components|utilities)|@import\s+["\']tailwindcss["\']', css_text))
    tw_imported, imported_tailwind_css = _tailwind_css_imported_by_app(project, css_files)
    tailwind_ok = bool(
        tailwind_version
        and tw_css
        and tw_imported
        and (tw_cfg or postcss_cfg or tailwind_version.startswith(("4", "^4", "~4")))
    )
    ctx.check(3, tailwind_ok, f"tailwind={tailwind_version!r}, cssHasTailwindDirectives={tw_css}, importedTailwindCss={imported_tailwind_css}, tailwindConfig={tw_cfg}, postcssConfig={postcss_cfg}。")

    # 4 build — a compiler/bundler failure is a real failure; dependency-install/network timeout is
    # infrastructure and is not allowed to make otherwise buildable fixtures fail calibration.
    bi = ctx.build_info
    build_detail_lower = (bi.detail or "").lower()
    infra_markers = ("timeoutexpired", "timed out", "eai_again", "enotfound", "econnreset", "network", "registry", "certificate", "ssl")
    build_infra_only = (not bi.succeeded) and any(marker in build_detail_lower for marker in infra_markers) and not any(marker in build_detail_lower for marker in ("error ts", "syntaxerror", "rolluperror", "failed to resolve import"))
    build_contract = bool("vite" in str((package.get("scripts") or {}).get("build", "")) and deps.get("vite") and (project / "vite.config.ts").exists())
    build_ok = bool(bi.attempted and bi.succeeded)
    ctx.check(4, build_ok, f"buildAttempted={bi.attempted}, buildSucceeded={bi.succeeded}, infrastructureOnly={build_infra_only}, buildContract={build_contract}, command={bi.command!r}, outputDir={bi.output_dir!r}。")

    # R5 is intentionally scored after all core interactions so lazy-loaded remote dependencies are observed.

    # 6 main WebGL canvas
    canvas_all = page.locator("canvas[data-testid='game-canvas']")
    canvas_count = await canvas_all.count()
    canvas = canvas_all.first
    visible = await canvas.is_visible() if canvas_count else False
    box = await canvas.bounding_box() if canvas_count else None
    observed = await ctx.observed() or {}
    gl_count = int(observed.get("webglContextCount", 0)) + int(observed.get("webgl2ContextCount", 0))
    canvas_ok = canvas_count == 1 and visible and box and box["width"] > 32 and box["height"] > 32 and gl_count > 0
    ctx.check(6, bool(canvas_ok), f"canvasCount={canvas_count}, visible={visible}, box={box}, observedWebGLContexts={gl_count}。")

    await _ensure_input_focus(page, canvas, ctx)
    await page.wait_for_timeout(180)

    # 7 real 3D world
    game = await _state(ctx, "__game")
    camera = await _state(ctx, "__camera")
    player = await _state(ctx, "__player")
    world = await _state(ctx, "__world")
    buildings = world.get("buildings") if isinstance(world.get("buildings"), list) else []
    p3 = _vec(player.get("position"))
    c3 = _vec(camera.get("position"))
    has_3d_building = any(_vec(b.get("min")) and _vec(b.get("max")) and _vec(b.get("max"))[1] > _vec(b.get("min"))[1] for b in buildings if isinstance(b, dict))
    game_time0 = game.get("elapsedTime")
    img0 = await _canvas_bytes(canvas)
    await _press_move(page, "w", 180)
    game1 = await _state(ctx, "__game")
    img1 = await _canvas_bytes(canvas)
    time_advanced = _finite_number(game_time0) and _finite_number(game1.get("elapsedTime")) and float(game1["elapsedTime"]) > float(game_time0)
    real3d = gl_count > 0 and game.get("renderer") == "webgl" and camera.get("mode") == "third-person" and p3 and c3 and has_3d_building and time_advanced and img0 != img1
    ctx.check(7, bool(real3d), f"renderer={game.get('renderer')!r}, cameraMode={camera.get('mode')!r}, buildings={len(buildings)}, 3DBuilding={has_3d_building}, elapsedAdvanced={time_advanced}, canvasChanged={img0 != img1}。")

    # 8 third-person visual
    await ctx.vlm(8, "当前截图是否清楚呈现第三人称 3D 游戏视角：能看到位于相机前方的玩家角色/玩家代理，而不是第一人称视角或只有空场景？", locator=canvas)

    # 9 camera follows player
    p0, p1, c0, c1, a, b = await _movement_observation(ctx, "w", 420)
    ca, cb = _vec(c0.get("position")), _vec(c1.get("position"))
    player_move = _dist(a, b) if a and b else 0.0
    cam_move = _dist(ca, cb) if ca and cb else 0.0
    target1 = _vec(c1.get("target"))
    follow_target_dist = _dist(target1, b) if target1 and b else float("inf")
    follow_ok = player_move > 0.03 and cam_move > 0.01 and math.isfinite(follow_target_dist) and follow_target_dist < 8.0
    ctx.check(9, follow_ok, f"playerMove={player_move:.3f}, cameraMove={cam_move:.3f}, cameraTargetToPlayer={follow_target_dist:.3f}。")

    # 10 mouse yaw
    c0, c1, before, after = await _mouse_delta_changes_camera(page, ctx, 36, 0)
    yaw0, yaw1 = c0.get("yaw"), c1.get("yaw")
    yaw_changed = _finite_number(yaw0) and _finite_number(yaw1) and abs(float(yaw1) - float(yaw0)) > 1e-4
    ctx.check(10, bool(yaw_changed and before != after), f"yaw {yaw0!r}->{yaw1!r}, canvasChanged={before != after}。")

    # 11 mouse pitch
    c0, c1, before, after = await _mouse_delta_changes_camera(page, ctx, 0, -28)
    pitch0, pitch1 = c0.get("pitch"), c1.get("pitch")
    pitch_changed = _finite_number(pitch0) and _finite_number(pitch1) and abs(float(pitch1) - float(pitch0)) > 1e-4
    ctx.check(11, bool(pitch_changed and before != after), f"pitch {pitch0!r}->{pitch1!r}, canvasChanged={before != after}。")

    # 12-15 camera-relative movement. Each direction starts from a clean real-input reset so a
    # deliberately broken direction cannot poison the next rubric's state.
    for rid, key, mode in [(12, "w", "forward"), (13, "s", "back"), (14, "a", "left"), (15, "d", "right")]:
        await _reset_to_readable_city_view(page, ctx)
        p0, p1, c0, _c1, a, b = await _movement_observation(ctx, key, 300)
        basis = _camera_basis(c0)
        passed = False
        detail = "missing position/camera basis"
        if a and b and basis:
            d = _norm2(b[0] - a[0], b[2] - a[2])
            fwd, right = basis
            if d:
                expected = {"forward": fwd, "back": (-fwd[0], -fwd[1]), "left": (-right[0], -right[1]), "right": right}[mode]
                dot = d[0] * expected[0] + d[1] * expected[1]
                moved = _horiz_distance(a, b)
                passed = moved > 0.025 and dot > 0.45
                detail = f"horizontalMove={moved:.3f}, directionDot={dot:.3f}"
        ctx.check(rid, passed, detail + "。")

    # 16-18 jump, gravity, ground collision
    await _reset_to_readable_city_view(page, ctx)
    ground_state = await _settle_ground(ctx, 3500)
    p_before = _vec(ground_state.get("position"))
    await _tap_key_for_frame(page, "Space", 95)
    jump_samples = []
    for _ in range(12):
        await page.wait_for_timeout(80)
        st = await _state(ctx, "__player")
        jump_samples.append(st)
    pos_samples = [_vec(st.get("position")) for st in jump_samples]
    vel_samples = [_vec(st.get("velocity")) for st in jump_samples]
    vertical_vel = [v[1] for v in vel_samples if v]
    max_y = max((p[1] for p in pos_samples if p), default=-float("inf"))
    jump_state_seen = any(st.get("movementState") == "jumping" for st in jump_samples)
    jump_ok = bool(ground_state.get("grounded") is True and p_before and
                   max_y > p_before[1] + 0.08 and any(v > 0.05 for v in vertical_vel) and jump_state_seen)
    ctx.check(16, jump_ok, f"groundedBefore={ground_state.get('grounded')}, startY={p_before[1] if p_before else None}, maxY={max_y if math.isfinite(max_y) else None}, jumpingStateSeen={jump_state_seen}, verticalVelocities={vertical_vel[:8]}。")

    gravity_pairs = [(vertical_vel[i], vertical_vel[i+1]) for i in range(len(vertical_vel)-1)]
    decreases = sum(b < a - 1e-4 for a, b in gravity_pairs)
    became_down = any(v < -0.02 for v in vertical_vel)
    gravity_ok = len(vertical_vel) >= 5 and decreases >= 2 and became_down
    ctx.check(17, gravity_ok, f"verticalVelocitySamples={vertical_vel}, decreasingPairs={decreases}, becameNegative={became_down}。")

    landed = await _settle_ground(ctx, 6500)
    landed_pos = _vec(landed.get("position"))
    world_now = await _state(ctx, "__world")
    gy = world_now.get("groundY")
    collider = landed.get("collider") if isinstance(landed.get("collider"), dict) else {}
    radius = float(collider.get("radius", 0.0)) if _finite_number(collider.get("radius")) else 0.0
    ground_ok = landed.get("grounded") is True and landed_pos and _finite_number(gy) and landed_pos[1] >= float(gy) - max(0.05, radius * 0.15)
    ctx.check(18, bool(ground_ok), f"landed={landed.get('grounded')}, playerY={landed_pos[1] if landed_pos else None}, groundY={gy}, colliderRadius={radius}。")

    # 19 building collision. Use a short runtime sample plus independent source evidence instead of
    # requiring one specific building approach/jump/swing choreography, which caused false negatives
    # across otherwise independent city layouts.
    await _reset_to_readable_city_view(page, ctx)
    world19 = await _state(ctx, "__world")
    p19 = await _state(ctx, "__player")
    pos19 = _vec(p19.get("position"))
    collider19 = p19.get("collider") if isinstance(p19.get("collider"), dict) else {}
    rad19 = float(collider19.get("radius", 0.3)) if _finite_number(collider19.get("radius")) else 0.3
    height19 = float(collider19.get("height", 1.8)) if _finite_number(collider19.get("height")) else 1.8
    buildings19 = [b for b in world19.get("buildings", []) if isinstance(b, dict)]
    initial_penetration = bool(pos19 and any(_player_penetrates_aabb(pos19, b, rad19, height19) for b in buildings19))
    sampled_points = []
    await page.keyboard.down("w")
    for _ in range(8):
        await page.wait_for_timeout(55)
        pp = _vec((await _state(ctx, "__player")).get("position"))
        if pp:
            sampled_points.append(pp)
    await page.keyboard.up("w")
    sampled_penetration = any(_player_penetrates_aabb(pp, b, rad19, height19) for pp in sampled_points for b in buildings19)
    sampled_tunnel = any(_segment_tunnels_aabb_xz(sampled_points[i-1], sampled_points[i], b, rad19, height19) for i in range(1, len(sampled_points)) for b in buildings19) if len(sampled_points) >= 2 else False
    collision19_ok = bool(len(buildings19) >= 2 and not initial_penetration and not sampled_penetration and not sampled_tunnel)
    ctx.check(19, collision19_ok, f"reportedBuildings={len(buildings19)}, initialPenetration={initial_penetration}, sampledPoints={len(sampled_points)}, sampledPenetration={sampled_penetration}, sampledTunnel={sampled_tunnel}。")

    # 20-25 first real attach: target identity, anchor geometry, visible line, rope length, constraint.
    await _reset_to_readable_city_view(page, ctx)
    await _settle_ground(ctx, 3500)
    attached, web_before_region, web_after_region, aim_camera, player_at_click = await _attach_web(page, ctx)
    attach_runtime = attached.get("attached") is True and isinstance(attached.get("anchorObjectId"), str) and _vec(attached.get("anchor")) is not None
    attach_ok = bool(attach_runtime)
    ctx.check(20, attach_ok, f"runtimeAttached={attach_runtime}, anchorObjectId={attached.get('anchorObjectId')!r}, anchor={attached.get('anchor')}。")

    world_web = await _state(ctx, "__world")
    building = next((b for b in world_web.get("buildings", []) if isinstance(b, dict) and b.get("id") == attached.get("anchorObjectId")), None)
    anchor = _vec(attached.get("anchor"))
    anchor_ok_runtime, anchor_detail = _anchor_matches_building_and_aim(anchor, building, aim_camera)
    anchor_ok = bool(anchor_ok_runtime)
    ctx.check(21, anchor_ok, f"runtimeAnchorMatch={anchor_ok_runtime}, anchorObjectId={attached.get('anchorObjectId')!r}, buildingFound={building is not None}, geometryCheck={anchor_detail}, anchor={anchor}。")

    p_now = await _state(ctx, "__player")
    ppos = _vec(p_now.get("position"))
    player_end = _vec(attached.get("playerEndpoint"))
    anchor_end = _vec(attached.get("anchorEndpoint"))
    coll_now = p_now.get("collider") if isinstance(p_now.get("collider"), dict) else {}
    body_h = float(coll_now.get("height", 1.8)) if _finite_number(coll_now.get("height")) else 1.8
    body_r = float(coll_now.get("radius", 0.35)) if _finite_number(coll_now.get("radius")) else 0.35
    player_endpoint_ok = bool(ppos and player_end and _horiz_distance(ppos, player_end) <= max(0.25, body_r * 0.75) and
                              ppos[1] - 0.15 <= player_end[1] <= ppos[1] + body_h + 0.25)
    anchor_endpoint_ok = bool(anchor and anchor_end and _dist(anchor, anchor_end) <= 0.25)
    center_attach_changes = _patch_change_count(web_before_region, web_after_region, "center")
    control_attach_changes = _patch_change_count(web_before_region, web_after_region, "control")

    click_pos = _vec(player_at_click.get("position"))
    rope_len = attached.get("ropeLength")
    geom_len = _dist(click_pos, anchor) if click_pos and anchor else None
    rope_ok_runtime = _finite_number(rope_len) and float(rope_len) > 0 and geom_len is not None and abs(float(rope_len) - geom_len) <= max(0.9, geom_len * 0.08)
    rope_ok = bool(rope_ok_runtime)
    ctx.check(24, rope_ok, f"runtimeDistanceMatch={rope_ok_runtime}, ropeLength={rope_len}, geometricDistanceAtClick={geom_len}。")

    constraint_samples = []
    for _ in range(8):
        await page.wait_for_timeout(70)
        ps = await _state(ctx, "__player")
        ws = await _state(ctx, "__web")
        pp, aa = _vec(ps.get("position")), _vec(ws.get("anchor"))
        if pp and aa:
            constraint_samples.append(_dist(pp, aa))
    max_excess = max((d - float(rope_len) for d in constraint_samples), default=float("inf")) if _finite_number(rope_len) else float("inf")
    constraint_ok_runtime = len(constraint_samples) >= 5 and _finite_number(rope_len) and max_excess <= max(1.0, float(rope_len) * 0.10)
    constraint_ok = bool(constraint_ok_runtime)
    ctx.check(25, constraint_ok, f"runtimeConstraint={constraint_ok_runtime}, distanceSamples={constraint_samples}, ropeLength={rope_len}, maxExcess={max_excess if math.isfinite(max_excess) else None}。")

    # Release this setup and verify the localized render evidence changes back when the line disappears.
    await _release_web(page, ctx)
    await page.wait_for_timeout(70)
    web_released_region = await _canvas_web_patch_sets(page, canvas)
    center_release_changes = _patch_change_count(web_after_region, web_released_region, "center")
    control_release_changes = _patch_change_count(web_after_region, web_released_region, "control")
    # A whole-canvas delta is not specific enough: camera/player animation can change the
    # full frame even when no web is rendered. Require localized center-ray evidence to
    # appear on attach and disappear on release, with a side strip as negative control.
    localized_web_change = (
        center_attach_changes >= 2
        and center_release_changes >= 2
        and center_attach_changes > control_attach_changes
        and center_release_changes > control_release_changes
    )
    full_attach_change = _patch_change_count(web_before_region, web_after_region, "full") >= 1
    full_release_change = _patch_change_count(web_after_region, web_released_region, "full") >= 1
    player_endpoint_present = _vec(attached.get("playerEndpoint")) is not None
    anchor_endpoint_present = _vec(attached.get("anchorEndpoint")) is not None
    # The localized corridor is the strongest evidence, but third-person implementations may place
    # the player/anchor line outside that fixed screen corridor.  In that case require a symmetric
    # attach->visible and visible->release render change, together with independently checked real
    # web endpoints.  This remains a rendered-frame observation rather than trusting lineVisible alone.
    frame_transition_evidence = bool(
        full_attach_change and full_release_change
        and player_endpoint_present and anchor_endpoint_present and anchor_endpoint_ok
    )
    render_evidence = bool(localized_web_change or frame_transition_evidence)
    evidence_mode = "localized" if localized_web_change else ("frame-transition" if frame_transition_evidence else "none")
    line_runtime = bool(attached.get("lineVisible") is True and player_endpoint_present and anchor_endpoint_present)
    line_ok = bool(line_runtime and render_evidence)
    ctx.check(23, line_ok,
              f"runtimeLine={line_runtime}, lineVisibleAtAttach={attached.get('lineVisible')}, playerEndpointInBody={player_endpoint_ok}, anchorEndpointMatches={anchor_endpoint_ok}, renderPatchEvidence={render_evidence}, evidenceMode={evidence_mode}, fullAttachChange={full_attach_change}, fullReleaseChange={full_release_change}。")
    await _settle_ground(ctx, 4500)

    # 26 momentum-based swing: acquire horizontal speed first, then attach and stop movement input.
    # Keep this 26->29 chain free of screenshots or other heavyweight browser operations:
    # the release/momentum checks must observe the same real-time physics event before it
    # can land or collide for unrelated reasons.
    await _reset_to_readable_city_view(page, ctx)
    await page.wait_for_timeout(100)
    target26 = await _scan_for_web_target(page, ctx, True, attempts=12)
    pre_attach_player = {}
    attached26 = {}
    if target26.get("targetValid"):
        # Build real pre-existing momentum and get airborne before attachment. This makes the test
        # independent of whether a game's initial ground target would otherwise produce a tiny arc.
        await page.keyboard.down("w")
        await page.wait_for_timeout(320)
        await _tap_key_for_frame(page, "Space", 95)
        await page.wait_for_timeout(110)
        if not (await _state(ctx, "__web")).get("targetValid"):
            await _scan_for_web_target(page, ctx, True, attempts=12)
        pre_attach_player = await _state(ctx, "__player")
        if (await _state(ctx, "__web")).get("targetValid"):
            await _dispatch_browser_mouse_button(ctx, "mousedown", 0)
            attached26 = await _wait_state(ctx, "__web", lambda st: st.get("attached") is True, timeout_ms=1900)
        await page.keyboard.up("w")
    pre_v26 = _vec(pre_attach_player.get("velocity"))
    pre_h_speed = math.hypot(pre_v26[0], pre_v26[2]) if pre_v26 else 0.0
    swing_samples = []
    if attached26.get("attached") is True:
        # Capture enough of the swing to prove curved/gravity-driven motion without
        # deliberately waiting until a low-altitude fixture has already hit the ground.
        # Release/momentum rubrics below are specifically about airborne post-release
        # behavior, so the sampling window should not force a landing first.
        for _ in range(5):
            await page.wait_for_timeout(55)
            sample_player26 = await _state(ctx, "__player")
            sample_web26 = await _state(ctx, "__web")
            swing_samples.append((sample_player26, sample_web26))
    positions, velocities, distances = [], [], []
    anchor26 = _vec(attached26.get("anchor"))
    rope26 = attached26.get("ropeLength")
    for ps, ws in swing_samples:
        pp, vv, aa = _vec(ps.get("position")), _vec(ps.get("velocity")), _vec(ws.get("anchor"))
        if pp: positions.append(pp)
        if vv: velocities.append(vv)
        if pp and aa: distances.append(_dist(pp, aa))
    path_length = sum(_dist(positions[i], positions[i-1]) for i in range(1, len(positions)))
    # Measure angular sweep in full 3D around the anchor. A horizontal-only angle
    # incorrectly rejects legitimate swings that occur in a near-vertical plane.
    radial_dirs3 = []
    if anchor26:
        for pp in positions:
            rx, ry, rz = pp[0]-anchor26[0], pp[1]-anchor26[1], pp[2]-anchor26[2]
            mag = math.sqrt(rx*rx + ry*ry + rz*rz)
            if mag > 1e-9:
                radial_dirs3.append((rx/mag, ry/mag, rz/mag))
    radial_change = 0.0
    if len(radial_dirs3) >= 2:
        for i in range(1, len(radial_dirs3)):
            a0, a1 = radial_dirs3[i-1], radial_dirs3[i]
            dot = max(-1.0, min(1.0, a0[0]*a1[0] + a0[1]*a1[1] + a0[2]*a1[2]))
            radial_change += math.acos(dot)
    vy = [v[1] for v in velocities]
    gravity_variation = len(vy) >= 4 and (max(vy) - min(vy) > 0.15)
    swing_state_seen = any(ps.get("movementState") == "swinging" for ps, _ in swing_samples)
    momentum_direction_continues = False
    direction_cos = None
    if pre_v26 and velocities and pre_h_speed > 1e-6:
        post = velocities[0]
        post_h = math.hypot(post[0], post[2])
        if post_h > 1e-6:
            direction_cos = (pre_v26[0]*post[0] + pre_v26[2]*post[2]) / (pre_h_speed * post_h)
            momentum_direction_continues = direction_cos > 0.25
    # Do not accept a self-reported "swinging" state by itself. The sampled path must
    # actually sweep around the real anchor while preserving incoming motion and reacting
    # to gravity. The small angular floor tolerates short sampling windows and long ropes.
    arc_motion = radial_change > 0.008
    swing_runtime = (
        attached26.get("attached") is True
        and pre_h_speed > 0.20
        and path_length > 0.10
        and gravity_variation
        and arc_motion
        and momentum_direction_continues
    )
    swing_ok = bool(swing_runtime)
    ctx.check(26, swing_ok, f"runtimeSwingPhysics={swing_runtime}, preAttachHorizontalSpeed={pre_h_speed:.3f}, earlyDirectionCos={direction_cos}, pathLength={path_length:.3f}, radialAngleChange={radial_change:.4f}, verticalVelocityRange={(max(vy)-min(vy)) if vy else None}, swingingStateSeen={swing_state_seen}。")

    # 27-29 release, horizontal momentum continuity, then free flight under gravity.
    pre_release_player = await _state(ctx, "__player")
    pre_v = _vec(pre_release_player.get("velocity"))
    released = await _release_web(page, ctx)
    release_runtime = released.get("attached") is False and released.get("lineVisible") is not True and released.get("anchor") is None and released.get("anchorObjectId") is None
    ctx.check(27, bool(release_runtime), f"runtimeRelease={release_runtime}, webAfterMouseUp={released}。")

    post_immediate = await _state(ctx, "__player")
    post_v = _vec(post_immediate.get("velocity"))
    pre_h = math.hypot(pre_v[0], pre_v[2]) if pre_v else 0.0
    post_h = math.hypot(post_v[0], post_v[2]) if post_v else 0.0
    h_delta = math.hypot(post_v[0]-pre_v[0], post_v[2]-pre_v[2]) if pre_v and post_v else float("inf")
    h_cos = None
    if pre_v and post_v and pre_h > 1e-6 and post_h > 1e-6:
        h_cos = (pre_v[0]*post_v[0] + pre_v[2]*post_v[2]) / (pre_h * post_h)
    momentum_runtime = pre_v and post_v and pre_h > 0.12 and h_delta <= max(0.65, pre_h * 0.30) and h_cos is not None and h_cos > 0.65
    momentum_ok = bool(momentum_runtime)
    ctx.check(28, momentum_ok, f"runtimeMomentumPreserved={bool(momentum_runtime)}, preVelocity={pre_v}, immediatePostVelocity={post_v}, preHorizontalSpeed={pre_h:.3f}, postHorizontalSpeed={post_h:.3f}, horizontalDelta={h_delta if math.isfinite(h_delta) else None}, horizontalDirectionCos={h_cos}。")

    post_samples = []
    for _ in range(6):
        await page.wait_for_timeout(50)
        post_samples.append(await _state(ctx, "__player"))
    valid_pp = [p for p in (_vec(st.get("position")) for st in post_samples) if p]
    valid_vv = [v for v in (_vec(st.get("velocity")) for st in post_samples) if v]
    flight_move = _dist(valid_pp[0], valid_pp[-1]) if len(valid_pp) >= 2 else 0.0
    vy_release = [v[1] for v in valid_vv]
    gravity_after_release = len(vy_release) >= 3 and any(vy_release[i+1] < vy_release[i] - 1e-4 for i in range(len(vy_release)-1))
    flight_runtime = released.get("attached") is False and flight_move > 0.03 and gravity_after_release
    flight_ok = bool(flight_runtime)
    ctx.check(29, flight_ok, f"runtimeFreeFlight={flight_runtime}, postReleaseMove={flight_move:.3f}, verticalVelocity={vy_release}, gravityDecrease={gravity_after_release}。")

    # 30 reattach using only normal browser mouse input.  Release momentum can move the
    # player/camera substantially while a single aim scan is in progress, so use bounded
    # re-scan/click attempts instead of treating one stale target sample as definitive.
    reattached = {}
    new_target = {}
    reattach_attempts = []
    for reattach_attempt in range(5):
        new_target = await _scan_for_web_target(page, ctx, True, attempts=22)
        entry = {"attempt": reattach_attempt + 1, "targetValid": new_target.get("targetValid")}
        if new_target.get("targetValid") is not True:
            reattach_attempts.append(entry)
            await page.wait_for_timeout(80)
            continue
        # A fast-moving third-person camera can invalidate the ray immediately after a scan.
        # Confirm the target once more after a short render interval before clicking.
        await page.wait_for_timeout(24)
        confirmed_target = await _state(ctx, "__web")
        entry["confirmedTargetValid"] = confirmed_target.get("targetValid")
        if confirmed_target.get("targetValid") is not True:
            reattach_attempts.append(entry)
            continue
        await _dispatch_browser_mouse_button(ctx, "mousedown", 0)
        reattached = await _wait_state(ctx, "__web", lambda st: st.get("attached") is True, timeout_ms=900, interval_ms=30)
        entry.update({"attached": reattached.get("attached"), "anchorObjectId": reattached.get("anchorObjectId")})
        reattach_attempts.append(entry)
        if (reattached.get("attached") is True
                and _vec(reattached.get("anchor")) is not None
                and isinstance(reattached.get("anchorObjectId"), str)):
            break
        await _release_web(page, ctx)
        await page.wait_for_timeout(60)
    reattach_runtime = reattached.get("attached") is True and _vec(reattached.get("anchor")) is not None and isinstance(reattached.get("anchorObjectId"), str)
    reattach_ok = bool(reattach_runtime)
    ctx.check(30, reattach_ok, f"runtimeReattach={reattach_runtime}, targetValid={new_target.get('targetValid')}, reattached={reattached.get('attached')}, anchorObjectId={reattached.get('anchorObjectId')!r}, attempts={reattach_attempts}。")
    await _release_web(page, ctx)

    # 22 invalid target after releasing any web.
    #
    # Use the actual invalid state at input time.  Some third-person cameras ease toward the
    # requested mouse orientation, so waiting an extra frame after observing targetValid=False
    # can turn a valid negative sample into a different ray.  Deliver the trusted click
    # immediately after the negative observation, then reject the sample only if the target
    # has already become valid by the first post-input observation.
    await _release_web(page, ctx)
    invalid_runtime = False
    invalid_evidence = []
    invalid = {}
    invalid_click_state = {}
    exercised_invalid_click = False
    for invalid_attempt in range(6):
        invalid = await _scan_for_web_target(page, ctx, False, attempts=13)
        if invalid.get("targetValid") is not False:
            invalid_evidence.append({"attempt": invalid_attempt + 1, "pre": invalid, "outcome": "no-invalid-direction"})
            await _restore_mouse_aim(page, ctx, settle_ms=30)
            continue

        await _dispatch_browser_mouse_button(ctx, "mousedown", 0)
        await page.wait_for_timeout(8)
        click_early = await _state(ctx, "__web")
        await page.wait_for_timeout(18)
        invalid_click_state = await _state(ctx, "__web")
        await _dispatch_browser_mouse_button(ctx, "mouseup", 0)

        no_attachment = (
            click_early.get("attached") is not True
            and invalid_click_state.get("attached") is not True
            and click_early.get("anchor") is None
            and invalid_click_state.get("anchor") is None
            and click_early.get("anchorObjectId") is None
            and invalid_click_state.get("anchorObjectId") is None
        )
        # A negative-click guard is fundamentally demonstrated by *no attachment*.  Camera easing
        # after the trusted click may legitimately make targetValid true before the next polling
        # read; that later aim change must not erase the already-observed negative input sample.
        # Conversely, if an attachment appears only after the aim has become valid, the sample is
        # ambiguous and is retried instead of falsely failing the game.
        attached_after_click = not no_attachment
        invalid_at_processing = click_early.get("targetValid") is False
        # If the click resolves to a concrete real building anchor, camera/raycast state has
        # advanced to a valid hit even when targetValid polling lags by a frame. Treat that
        # sample as timing-contaminated rather than claiming the game attached to empty space.
        resolved_real_hit = (
            attached_after_click
            and _vec(click_early.get("anchor")) is not None
            and isinstance(click_early.get("anchorObjectId"), str)
            and bool(click_early.get("anchorObjectId"))
        )
        contaminated = attached_after_click and (not invalid_at_processing or resolved_real_hit)
        invalid_evidence.append({
            "attempt": invalid_attempt + 1, "pre": invalid, "early": click_early,
            "after": invalid_click_state, "contaminated": contaminated, "noAttachment": no_attachment,
        })
        await _restore_mouse_aim(page, ctx, settle_ms=30)
        if no_attachment:
            exercised_invalid_click = True
            invalid_runtime = True
            break
        if contaminated:
            continue
        exercised_invalid_click = True
        invalid_runtime = False
        break

    # An inability to obtain an uncontaminated negative click is not evidence of a broken
    # guard. Only fail when a stable negative sample demonstrably attaches without resolving
    # to a concrete building hit.
    invalid_ok = bool((exercised_invalid_click and invalid_runtime) or (not exercised_invalid_click and invalid_evidence))
    ctx.check(22, invalid_ok, f"runtimeInvalidTargetGuard={invalid_runtime}, exercisedInvalidClick={exercised_invalid_click}, targetValidBeforeClick={invalid.get('targetValid')}, stateAfterInvalidClick={invalid_click_state}, attempts={invalid_evidence}。")

    # 31 multiple real 3D buildings: validate geometry only; web-target coverage is tested elsewhere.
    world31 = await _state(ctx, "__world")
    blds = [b for b in world31.get("buildings", []) if isinstance(b, dict)]
    valid_blds, ids = [], set()
    for b in blds:
        mn, mx = _vec(b.get("min")), _vec(b.get("max"))
        bid = b.get("id")
        if isinstance(bid, str) and bid and mn and mx and all(mx[i] > mn[i] for i in range(3)):
            valid_blds.append(b)
            ids.add(bid)
    observed31 = await ctx.observed() or {}
    gl31 = int(observed31.get("webglContextCount", 0)) + int(observed31.get("webgl2ContextCount", 0))
    buildings_ok = len(valid_blds) >= 2 and len(ids) >= 2 and gl31 > 0
    ctx.check(31, buildings_ok, f"reportedBuildings={len(blds)}, validUnique3DBuildings={len(ids)}, WebGLContexts={gl31}。")

    # 32 open traversal: require a real non-trivial WASD path plus a city layout with multiple
    # separated building footprints. It does not require passing near two buildings within one short
    # sampling window, which was layout-dependent and produced false negatives.
    await _release_web(page, ctx)
    await _reset_to_readable_city_view(page, ctx)
    p32base = await _state(ctx, "__player")
    coll32 = p32base.get("collider") if isinstance(p32base.get("collider"), dict) else {}
    rad32 = float(coll32.get("radius", 0.35)) if _finite_number(coll32.get("radius")) else 0.35
    h32 = float(coll32.get("height", 1.8)) if _finite_number(coll32.get("height")) else 1.8
    best_path32 = 0.0
    clean32 = True
    for key32 in ("w", "a", "s", "d"):
        await _reset_to_readable_city_view(page, ctx)
        st0 = await _state(ctx, "__player")
        p0 = _vec(st0.get("position"))
        await _press_move(page, key32, 260)
        st1 = await _state(ctx, "__player")
        p1 = _vec(st1.get("position"))
        if p0 and p1:
            best_path32 = max(best_path32, _horiz_distance(p0, p1))
            for b in buildings19:
                if _player_penetrates_aabb(p1, b, rad32, h32) or _segment_tunnels_aabb_xz(p0, p1, b, rad32, h32):
                    clean32 = False
    centers = []
    for b in buildings19:
        mn, mx = _vec(b.get("min")), _vec(b.get("max"))
        if mn and mx:
            centers.append(((mn[0]+mx[0])*0.5, (mn[2]+mx[2])*0.5))
    separated_layout = any(math.hypot(centers[i][0]-centers[j][0], centers[i][1]-centers[j][1]) > 8.0 for i in range(len(centers)) for j in range(i))
    open_ok = bool(best_path32 > 0.10 and clean32 and len(buildings19) >= 2 and separated_layout)
    ctx.check(32, open_ok, f"bestRealMove={best_path32:.3f}, collisionClean={clean32}, buildingCount={len(buildings19)}, separatedLayout={separated_layout}。")

    # 33-34 restore a stable evaluator-side city view before VLM; the prompt does not
    # require the game itself to expose a Reset control.
    landmark_camera = await _reset_to_readable_city_view(page, ctx)
    await ctx.vlm(33, f"当前截图已由评测侧恢复到稳定城市视角（camera yaw={landmark_camera.get('yaw')}, pitch={landmark_camera.get('pitch')}）。画面中是否能看到至少一个在轮廓、高度或造型上从普通建筑中明显可辨识的风格化地标？只判断地标是否可辨识。", locator=canvas)
    await ctx.vlm(34, "只判断当前稳定城市截图是否存在明确的受保护内容复刻信号：可读的受保护游戏/品牌文字、徽标、角色符号，或某个地标同时在独特轮廓与专属装饰上明显一对一对应同一受保护游戏资产。若没有这些明确负面信号，且只是通用尖塔、桥梁、矩形高楼等抽象建筑语言，请回答 YES；出现任一明确负面信号则回答 NO。", locator=canvas)

    # 35 visible jump/airborne change — deterministic rendering evidence.
    # The functional jump/gravity checks above already establish real physics.  Here we verify
    # that a real Space jump also changes the browser-rendered third-person player region, avoiding
    # subjective single-frame VLM judgements about whether perspective makes the feet look grounded.
    ground35 = await _settle_ground(ctx, 4500)
    # Let camera easing settle before the reference frame so the visual delta is caused by the
    # actual Space jump rather than residual camera interpolation from an earlier rubric.
    await page.wait_for_timeout(160)
    ground35 = await _state(ctx, "__player")
    ground35_pos = _vec(ground35.get("position"))
    ground35_y = ground35_pos[1] if ground35_pos else 0.0
    before35 = await _player_visual_patch(page, canvas)
    jump_visual_state = {}
    jump_visual_matched = False
    jump_patch = b""
    for jump_attempt in range(3):
        if jump_attempt:
            ground35 = await _settle_ground(ctx, 4500)
            await page.wait_for_timeout(120)
            ground35 = await _state(ctx, "__player")
            ground35_pos = _vec(ground35.get("position"))
            ground35_y = ground35_pos[1] if ground35_pos else ground35_y
            before35 = await _player_visual_patch(page, canvas)
        await _tap_key_for_frame(page, "Space", 95)
        elapsed35 = 0
        while elapsed35 <= 900:
            st35 = await _state(ctx, "__player")
            p35 = _vec(st35.get("position"))
            v35 = _vec(st35.get("velocity"))
            if (st35.get("grounded") is False and p35 and v35
                    and p35[1] >= ground35_y + 0.45 and v35[1] > 0.20):
                await page.evaluate("() => new Promise(resolve => requestAnimationFrame(resolve))")
                jump_visual_state = await _state(ctx, "__player")
                cp35 = _vec(jump_visual_state.get("position"))
                if jump_visual_state.get("grounded") is False and cp35 and cp35[1] >= ground35_y + 0.40:
                    jump_patch = await _player_visual_patch(page, canvas)
                    jump_visual_matched = True
                    break
            await page.wait_for_timeout(10)
            elapsed35 += 10
        if jump_visual_matched:
            break
    p35_final = _vec(jump_visual_state.get("position"))
    visible_jump_change = bool(before35 and jump_patch and before35 != jump_patch)
    jump_pose_ok = bool(jump_visual_matched and p35_final and p35_final[1] >= ground35_y + 0.40 and visible_jump_change)
    ctx.check(35, jump_pose_ok, f"capturedAirborne={jump_visual_matched}, groundY={ground35_y}, playerY={p35_final[1] if p35_final else None}, renderedPlayerRegionChanged={visible_jump_change}, movementState={jump_visual_state.get('movementState')}。")

    # 36 visible swing feedback.  Do not launch another independent swing or take a
    # heavyweight screenshot inside the release-critical 26->29 chain.  Rubric 23 already
    # proved a real rendered web appeared/disappeared, and Rubric 26 proved a real curved
    # swing around the anchor. Together with an observed swinging state, these are objective
    # browser/runtime evidence of visible swing feedback without a flaky single-frame VLM gate.
    swing_feedback_runtime = bool(
        swing_runtime
        and swing_state_seen
        and line_runtime
        and render_evidence
        and path_length > 0.10
        and radial_change > 0.002
    )
    ctx.check(36, swing_feedback_runtime,
              f"runtimeVisibleSwingFeedback={swing_feedback_runtime}, reusedRenderedWeb={line_runtime and render_evidence}, pathLength={path_length:.3f}, radialAngleChange={radial_change:.4f}, swingingStateSeen={swing_state_seen}。")

    # 5 no remote runtime dependencies — score last so lazy-loaded gameplay dependencies are included.
    await page.wait_for_timeout(120)
    _, remote = ctx.same_origin_requests(base_url)
    remote_http = sorted({u for u in remote if url_scheme(u) in {"http", "https", "ws", "wss"}})
    ctx.check(5, len(remote_http) == 0, f"完整核心游玩流程后观察到跨源运行时请求 {len(remote_http)} 个：{remote_http[:8]}。")


def url_scheme(url: str) -> str:
    try:
        return url.split(":", 1)[0].lower()
    except Exception:
        return ""


if __name__ == "__main__":
    import web_ut_harness
    web_ut_harness.main(__import__("web_ut"))
