#!/usr/bin/env python3
"""3D 越野赛车：DOM、实时状态、真实输入、WebGL 证据与 VLM 验收。"""

from __future__ import annotations

import asyncio
import io
import json
import math
import re
from pathlib import Path
from typing import Any, Awaitable, Callable

from PIL import Image, ImageOps


MAPPING = json.loads(
    Path(__file__).with_name("mapping.json").read_text(encoding="utf-8")
)
RUBRIC = MAPPING["rubrics"]

CONTRACT_HOOK_NAMES = (
    "window.__game.getState()",
    "window.__garage.getState()",
    "window.__world.getState()",
    "window.__race.getState()",
    "window.__vehicle.getState()",
    "window.__camera.getState()",
    "window.__scene.getState()",
)


def _finite(value: Any) -> bool:
    return isinstance(value, (int, float)) and math.isfinite(float(value))


def _num(value: Any, default: float = 0.0) -> float:
    return float(value) if _finite(value) else default


def _vec3(value: Any) -> tuple[float, float, float]:
    if not isinstance(value, dict):
        return 0.0, 0.0, 0.0
    return _num(value.get("x")), _num(value.get("y")), _num(value.get("z"))


def _dist_xz(a: Any, b: Any) -> float:
    ax, _, az = _vec3(a)
    bx, _, bz = _vec3(b)
    return math.hypot(ax - bx, az - bz)


def _dot_xz(a: Any, b: Any) -> float:
    ax, _, az = _vec3(a)
    bx, _, bz = _vec3(b)
    return ax * bx + az * bz


def _changed(a: float, b: float, epsilon: float = 1e-4) -> bool:
    return _finite(a) and _finite(b) and abs(float(a) - float(b)) > epsilon


def _state_signature(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


async def _snapshot(page) -> dict[str, Any]:
    return await page.evaluate(
        """
        () => {
          const read = name => {
            try {
              const target = window[name];
              if (!target) return null;
              if (typeof target.getState === 'function') return target.getState();
              return target;
            } catch (error) {
              return {__readError: String(error)};
            }
          };
          return {
            game: read('__game'),
            garage: read('__garage'),
            world: read('__world'),
            race: read('__race'),
            vehicle: read('__vehicle'),
            camera: read('__camera'),
            scene: read('__scene'),
            observer: read('__evaluatorObservation')
          };
        }
        """
    )


async def _wait_for(
    predicate: Callable[[], Awaitable[bool]],
    timeout: float = 5.0,
    interval: float = 0.1,
) -> bool:
    deadline = asyncio.get_running_loop().time() + timeout
    while asyncio.get_running_loop().time() < deadline:
        try:
            if await predicate():
                return True
        except Exception:
            pass
        await asyncio.sleep(interval)
    return False


async def _visible(page, selector: str) -> bool:
    locator = page.locator(selector)
    count = await locator.count()
    for index in range(count):
        if await locator.nth(index).is_visible():
            return True
    return False


async def _click_visible(page, selector: str) -> bool:
    locator = page.locator(selector)
    count = await locator.count()
    for index in range(count):
        item = locator.nth(index)
        if await item.is_visible() and await item.is_enabled():
            await item.click()
            return True
    return False


async def _find_by_data(page, testid: str, attribute: str, value: str):
    locator = page.locator(f'[data-testid="{testid}"]')
    count = await locator.count()
    for index in range(count):
        item = locator.nth(index)
        if await item.get_attribute(attribute) == str(value):
            return item
    return None


async def _click_by_data(
    page, testid: str, attribute: str, value: str, allow_disabled: bool = False
) -> tuple[bool, bool]:
    item = await _find_by_data(page, testid, attribute, value)
    if item is None or not await item.is_visible():
        return False, False
    disabled = not await item.is_enabled()
    if not disabled or allow_disabled:
        if not disabled:
            await item.click()
            return True, False
    return False, disabled


async def _wait_game_state(page, expected: str, timeout: float = 6.0) -> bool:
    async def predicate() -> bool:
        snap = await _snapshot(page)
        return isinstance(snap.get("game"), dict) and snap["game"].get("gameState") == expected

    return await _wait_for(predicate, timeout=timeout)


async def _ensure_menu(page) -> bool:
    for _ in range(10):
        snap = await _snapshot(page)
        game_state = (snap.get("game") or {}).get("gameState")
        if game_state == "menu" and await _visible(page, "#main-menu"):
            return True
        selectors = (
            '[data-testid="result-menu-btn"]',
            '[data-testid="race-exit-btn"]',
            '[data-testid="garage-back-btn"]',
            '[data-testid="map-select-back-btn"]',
            '[data-testid="vehicle-select-back-btn"]',
        )
        acted = False
        for selector in selectors:
            if await _click_visible(page, selector):
                acted = True
                await asyncio.sleep(0.25)
                break
        if not acted:
            await page.keyboard.press("Escape")
            await asyncio.sleep(0.25)
    return await _wait_game_state(page, "menu", timeout=2.0)


async def _fresh_session(page, ctx) -> bool:
    """Reload the real product to obtain an isolated current-session baseline.

    The prompt explicitly does not require persistence across browser reloads, so
    negative transaction branches may be isolated from positive branches.  In
    the managed-browser fallback used only by this container, HTTP navigation is
    blocked by policy; there we re-inject the already-resolved submitted
    dist/index.html instead of changing any game state directly.
    """
    try:
        if getattr(ctx, "environment_fallback", None):
            static_root = getattr(ctx, "static_root", None)
            entry = Path(static_root) / "index.html" if static_root is not None else None
            if entry is None or not entry.is_file():
                return False
            await page.set_content(entry.read_text(encoding="utf-8"), wait_until="load")
        else:
            await page.reload(wait_until="load")
        await asyncio.sleep(0.5)
        return await _wait_game_state(page, "menu", timeout=5.0)
    except Exception:
        return False


async def _open_isolated_product(page, ctx):
    """Open the same product in a separate page for destructive negative tests."""
    isolated = await page.context.new_page()
    try:
        if getattr(ctx, "environment_fallback", None):
            static_root = getattr(ctx, "static_root", None)
            entry = Path(static_root) / "index.html" if static_root is not None else None
            if entry is None or not entry.is_file():
                await isolated.close(); return None
            await isolated.set_content(entry.read_text(encoding="utf-8"), wait_until="load")
        else:
            url = getattr(ctx, "product_url", None)
            if not url:
                await isolated.close(); return None
            await isolated.goto(url, wait_until="load")
        await asyncio.sleep(0.6)
        if not await _wait_game_state(isolated, "menu", timeout=5.0):
            await isolated.close(); return None
        return isolated
    except Exception:
        try: await isolated.close()
        except Exception: pass
        return None


async def _open_vehicle_select(page) -> bool:
    if not await _ensure_menu(page):
        return False
    if not await _click_visible(page, '[data-testid="start-race-btn"]'):
        return False
    return await _wait_game_state(page, "vehicle_select")


async def _select_vehicle(page, vehicle_id: str) -> bool:
    clicked, disabled = await _click_by_data(
        page, "select-vehicle-btn", "data-vehicle-id", vehicle_id
    )
    if not clicked or disabled:
        return False

    async def predicate() -> bool:
        snap = await _snapshot(page)
        return (snap.get("game") or {}).get("selectedVehicleId") == vehicle_id

    return await _wait_for(predicate, timeout=3.0)


async def _open_map_select(page) -> bool:
    if not await _click_visible(page, '[data-testid="vehicle-continue-btn"]'):
        return False
    return await _wait_game_state(page, "map_select")


async def _select_map(page, map_id: str) -> bool:
    clicked, disabled = await _click_by_data(
        page, "select-map-btn", "data-map-id", map_id
    )
    if not clicked or disabled:
        return False

    async def predicate() -> bool:
        snap = await _snapshot(page)
        return (snap.get("game") or {}).get("selectedMapId") == map_id

    return await _wait_for(predicate, timeout=3.0)


async def _start_race(page, vehicle_id: str, map_id: str) -> bool:
    if not await _open_vehicle_select(page):
        return False
    if not await _select_vehicle(page, vehicle_id):
        return False
    if not await _open_map_select(page):
        return False
    if not await _select_map(page, map_id):
        return False
    if not await _click_visible(page, '[data-testid="start-time-trial-btn"]'):
        return False
    return await _wait_game_state(page, "racing", timeout=12.0)


async def _release_drive_keys(page) -> None:
    for key in ("ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"):
        try:
            await page.keyboard.up(key)
        except Exception:
            pass


async def _drive_to(page, target: dict, radius: float, timeout: float = 25.0) -> bool:
    threshold = max(1.0, float(radius or 1.0) * 0.72)
    deadline = asyncio.get_running_loop().time() + timeout
    last_distance = float("inf")
    last_progress_time = asyncio.get_running_loop().time()
    try:
        await page.keyboard.down("ArrowUp")
        while asyncio.get_running_loop().time() < deadline:
            snap = await _snapshot(page)
            race = snap.get("race") or {}
            vehicle = snap.get("vehicle") or {}
            if race.get("finished") or race.get("phase") == "finished":
                return True
            position = vehicle.get("position")
            distance = _dist_xz(position, target)
            if distance <= threshold:
                await asyncio.sleep(0.3)
                return True

            px, _, pz = _vec3(position)
            tx, _, tz = _vec3(target)
            dx, dz = tx - px, tz - pz
            length = math.hypot(dx, dz) or 1.0
            direction = {"x": dx / length, "y": 0.0, "z": dz / length}
            fx, _, fz = _vec3(vehicle.get("forward"))
            flen = math.hypot(fx, fz) or 1.0
            fx, fz = fx / flen, fz / flen
            cross = fx * direction["z"] - fz * direction["x"]
            steer_key = "ArrowLeft" if cross > 0.05 else "ArrowRight" if cross < -0.05 else None
            opposite = "ArrowRight" if steer_key == "ArrowLeft" else "ArrowLeft"
            await page.keyboard.up(opposite)
            if steer_key:
                await page.keyboard.down(steer_key)
            else:
                await page.keyboard.up("ArrowLeft")
                await page.keyboard.up("ArrowRight")

            now = asyncio.get_running_loop().time()
            if distance < last_distance - 0.25:
                last_distance = distance
                last_progress_time = now
            elif now - last_progress_time > 3.0:
                await page.keyboard.up("ArrowUp")
                await page.keyboard.down("ArrowDown")
                await asyncio.sleep(0.7)
                await page.keyboard.up("ArrowDown")
                await page.keyboard.down("ArrowUp")
                last_progress_time = now
            await asyncio.sleep(0.1)
    finally:
        await _release_drive_keys(page)
    return False


async def _drive_into_obstacle(page, obstacle: dict, timeout: float = 18.0) -> dict[str, Any]:
    """Steer into a declared obstacle and sample collision continuously.

    Collision flags are often transient because the physics solver immediately
    separates the car.  Sampling only after navigation can miss a real contact,
    so this helper observes the flag while the vehicle is still being driven.
    """
    target = obstacle.get("position") or {}
    expected_id = str(obstacle.get("id") or "")
    radius = max(0.1, _num(obstacle.get("radius"), 1.0))
    deadline = asyncio.get_running_loop().time() + timeout
    last_distance = float("inf")
    stalled_since = asyncio.get_running_loop().time()
    try:
        await page.keyboard.down("ArrowUp")
        while asyncio.get_running_loop().time() < deadline:
            snap = await _snapshot(page)
            vehicle = snap.get("vehicle") or {}
            collision = vehicle.get("collision") or {}
            distance = _dist_xz(vehicle.get("position"), target)
            if bool(collision.get("active")):
                return {
                    "observed": str(collision.get("objectId")) == expected_id,
                    "objectId": collision.get("objectId"),
                    "distance": distance,
                    "radius": radius,
                }

            px, _, pz = _vec3(vehicle.get("position"))
            tx, _, tz = _vec3(target)
            dx, dz = tx - px, tz - pz
            length = math.hypot(dx, dz) or 1.0
            dirx, dirz = dx / length, dz / length
            fx, _, fz = _vec3(vehicle.get("forward"))
            flen = math.hypot(fx, fz) or 1.0
            fx, fz = fx / flen, fz / flen
            cross = fx * dirz - fz * dirx
            if cross > 0.035:
                await page.keyboard.down("ArrowLeft"); await page.keyboard.up("ArrowRight")
            elif cross < -0.035:
                await page.keyboard.down("ArrowRight"); await page.keyboard.up("ArrowLeft")
            else:
                await page.keyboard.up("ArrowLeft"); await page.keyboard.up("ArrowRight")

            now = asyncio.get_running_loop().time()
            if distance < last_distance - 0.15:
                last_distance = distance
                stalled_since = now
            elif now - stalled_since > 2.5:
                await page.keyboard.up("ArrowUp")
                await page.keyboard.down("ArrowDown")
                await asyncio.sleep(0.55)
                await page.keyboard.up("ArrowDown")
                await page.keyboard.down("ArrowUp")
                stalled_since = now
            await asyncio.sleep(0.055)
    finally:
        await _release_drive_keys(page)
    return {"observed": False, "objectId": None, "distance": None, "radius": radius}


async def _measure_vehicle_response(page) -> dict[str, Any]:
    """用同一组真实键盘输入采集可跨车辆、跨升级比较的响应。"""
    await _release_drive_keys(page)
    start = await _snapshot(page)
    start_vehicle = start.get("vehicle") or {}
    start_forward = start_vehicle.get("forward")
    suspension_vectors: list[list[float]] = []

    await page.keyboard.down("ArrowUp")
    for _ in range(6):
        await asyncio.sleep(0.18)
        snap = await _snapshot(page)
        wheels = (snap.get("vehicle") or {}).get("wheels") or []
        suspension_vectors.append([
            _num(wheel.get("suspensionCompression")) for wheel in wheels
        ])
    accelerated = await _snapshot(page)
    accel_vehicle = accelerated.get("vehicle") or {}
    accel_longitudinal = _dot_xz(accel_vehicle.get("velocity"), accel_vehicle.get("forward"))

    await page.keyboard.up("ArrowUp")
    await page.keyboard.down("ArrowDown")
    await asyncio.sleep(0.75)
    braked = await _snapshot(page)
    await page.keyboard.up("ArrowDown")
    brake_vehicle = braked.get("vehicle") or {}
    brake_longitudinal = _dot_xz(brake_vehicle.get("velocity"), brake_vehicle.get("forward"))

    await page.keyboard.down("ArrowUp")
    await page.keyboard.down("ArrowLeft")
    await asyncio.sleep(0.8)
    steered = await _snapshot(page)
    await page.keyboard.up("ArrowLeft")
    await page.keyboard.up("ArrowUp")
    steer_vehicle = steered.get("vehicle") or {}
    forward_dot = _dot_xz(start_forward, steer_vehicle.get("forward"))
    velocity = steer_vehicle.get("velocity")
    forward = steer_vehicle.get("forward")
    vx, _, vz = _vec3(velocity)
    fx, _, fz = _vec3(forward)
    speed = max(1e-6, math.hypot(vx, vz))
    lateral_slip = abs(fx * vz - fz * vx) / speed
    flat_compression = [value for vector in suspension_vectors for value in vector]
    suspension_range = (
        max(flat_compression) - min(flat_compression) if flat_compression else 0.0
    )
    await _release_drive_keys(page)
    return {
        "acceleration": _num(accel_vehicle.get("speed")),
        "longitudinalAcceleration": accel_longitudinal,
        "braking": accel_longitudinal - brake_longitudinal,
        "steering": 1.0 - forward_dot,
        "grip": lateral_slip,
        "suspension": suspension_range,
        "appliedStats": accel_vehicle.get("appliedStats") or {},
        "vehicleId": accel_vehicle.get("id"),
    }


async def _complete_current_race(page, negative_finish_check: bool = False) -> dict:
    snap = await _snapshot(page)
    current_map = (snap.get("world") or {}).get("currentMap") or {}
    checkpoints = sorted(
        current_map.get("checkpoints") or [], key=lambda item: item.get("index", 0)
    )
    finish = current_map.get("finish") or {}
    negative_ok = None
    visited: list[str] = []

    if negative_finish_check and checkpoints and isinstance(finish.get("position"), dict):
        reached = await _drive_to(
            page, finish["position"], _num(finish.get("radius"), 2.0), timeout=25.0
        )
        before_route = await _snapshot(page)
        race = before_route.get("race") or {}
        negative_ok = reached and not bool(race.get("finished"))

    for checkpoint in checkpoints:
        reached = await _drive_to(
            page,
            checkpoint.get("position") or {},
            _num(checkpoint.get("radius"), 2.0),
            timeout=45.0,
        )
        if not reached:
            return {
                "completed": False,
                "negative_ok": negative_ok,
                "visited": visited,
                "failure": f"checkpoint timeout: {checkpoint.get('id')}",
            }
        visited.append(str(checkpoint.get("id")))

    finish_reached = False
    if isinstance(finish.get("position"), dict):
        finish_reached = await _drive_to(
            page, finish["position"], _num(finish.get("radius"), 2.0), timeout=45.0
        )
    finished = await _wait_game_state(page, "result", timeout=8.0)
    final = await _snapshot(page)
    race = final.get("race") or {}
    return {
        "completed": bool(finish_reached and finished and race.get("finished")),
        "negative_ok": negative_ok,
        "visited": visited,
        "final": final,
        "failure": "" if finished else "result state timeout",
    }


def _layout_signature(world_state: dict) -> str:
    current = (world_state or {}).get("currentMap") or {}
    value = {
        "spawn": current.get("spawn"),
        "finish": current.get("finish"),
        "checkpoints": current.get("checkpoints"),
        "terrain": current.get("terrain"),
        "obstacles": current.get("obstacles"),
    }
    return _state_signature(value)


def _compose_grid(images: list[bytes], columns: int = 2) -> bytes:
    opened = [Image.open(io.BytesIO(data)).convert("RGB") for data in images if data]
    if not opened:
        raise ValueError("no screenshots to compose")
    cell_width, cell_height = 640, 400
    rows = math.ceil(len(opened) / columns)
    canvas = Image.new("RGB", (cell_width * columns, cell_height * rows), "#111827")
    for index, source in enumerate(opened):
        fitted = ImageOps.contain(source, (cell_width - 12, cell_height - 12))
        x = (index % columns) * cell_width + (cell_width - fitted.width) // 2
        y = (index // columns) * cell_height + (cell_height - fitted.height) // 2
        canvas.paste(fitted, (x, y))
    buffer = io.BytesIO()
    canvas.save(buffer, format="PNG", optimize=True)
    return buffer.getvalue()


def _parse_timer_text(text: str) -> float | None:
    value = (text or "").strip().replace(",", ".")
    m = re.search(r"(?:(\d+):)?(\d{1,2})(?:\.(\d{1,3}))?", value)
    if not m:
        return None
    minutes = int(m.group(1) or 0)
    seconds = int(m.group(2) or 0)
    frac = m.group(3) or ""
    fraction = int(frac) / (10 ** len(frac)) if frac else 0.0
    return minutes * 60 + seconds + fraction


def _image_difference_ratio(a: bytes, b: bytes) -> float:
    try:
        ia = Image.open(io.BytesIO(a)).convert("RGB").resize((160, 100))
        ib = Image.open(io.BytesIO(b)).convert("RGB").resize((160, 100))
        pa, pb = list(ia.getdata()), list(ib.getdata())
        total = sum(abs(x-y) for ca, cb in zip(pa, pb) for x, y in zip(ca, cb))
        return total / (len(pa) * 3 * 255)
    except Exception:
        return 0.0


def _major_version(spec: Any) -> int | None:
    text = re.sub(r"^[\^~<>=!\s]+", "", str(spec or "").strip())
    m = re.search(r"(\d+)", text)
    return int(m.group(1)) if m else None


def _project_contract(ctx) -> dict[str, tuple[bool, str]]:
    root = getattr(ctx, "target_path", None)
    static_root = getattr(ctx, "static_root", None)
    if root is None:
        reason = "evaluator target path unavailable"
        return {"stack": (False, reason), "build": (False, reason)}
    root = Path(root)
    if root.is_file():
        root = root.parent
    package = root / "package.json"
    if not package.is_file():
        return {"stack": (False, "package.json missing"), "build": (False, "package.json missing")}
    try:
        pkg = json.loads(package.read_text(encoding="utf-8"))
    except Exception as exc:
        reason = f"invalid package.json: {exc}"
        return {"stack": (False, reason), "build": (False, reason)}
    all_deps = {**(pkg.get("dependencies") or {}), **(pkg.get("devDependencies") or {})}
    scripts = pkg.get("scripts") or {}
    react_ok = _major_version(all_deps.get("react")) == 19 and _major_version(all_deps.get("react-dom")) == 19
    ts_ok = "typescript" in all_deps and any((root / n).is_file() for n in ("tsconfig.json", "tsconfig.app.json"))
    vite_ok = "vite" in all_deps and (root / "vite.config.ts").is_file()
    tailwind_ok = "tailwindcss" in all_deps and (root / "tailwind.config.js").is_file()
    css_files = list((root / "src").rglob("*.css")) if (root / "src").is_dir() else []
    css_text = "\n".join(f.read_text(encoding="utf-8", errors="ignore") for f in css_files)
    tailwind_directives = all(token in css_text for token in ("@tailwind base", "@tailwind components", "@tailwind utilities"))
    entry_ok = (root / "src" / "main.tsx").is_file() and (root / "index.html").is_file()
    stack_ok = react_ok and ts_ok and vite_ok and tailwind_ok and tailwind_directives and entry_ok

    build_script_ok = "vite build" in str(scripts.get("build", ""))
    served_build = static_root is not None and Path(static_root).name in {"dist", "build", "out"}
    build_requested = bool(getattr(ctx, "build_requested", False))
    build_succeeded = bool(getattr(ctx, "build_succeeded", False))
    build_detail = str(getattr(ctx, "build_detail", "") or "")
    build_ok = build_succeeded and build_script_ok and served_build and (Path(static_root) / "index.html").is_file()
    return {
        "stack": (stack_ok, f"react19={react_ok}, ts={ts_ok}, vite={vite_ok}, tailwind={tailwind_ok and tailwind_directives}, entry={entry_ok}"),
        "build": (build_ok, f"build_requested={build_requested}, build_succeeded={build_succeeded}, vite_build_script={build_script_ok}, served={Path(static_root).name if static_root else None}, index={bool(static_root and (Path(static_root)/'index.html').is_file())}, detail={build_detail}"),
    }

def _source_contract(ctx) -> dict[str, tuple[bool, str]]:
    root = getattr(ctx, "target_path", None)
    if root is None:
        return {"ids": (False, "target path unavailable"), "testids": (False, "target path unavailable")}
    root = Path(root)
    if root.is_file():
        root = root.parent
    files = [p for p in (root / "src").rglob("*") if p.is_file() and p.suffix.lower() in {".ts", ".tsx", ".js", ".jsx", ".html"}] if (root / "src").is_dir() else []
    text = "\n".join(p.read_text(encoding="utf-8", errors="ignore") for p in files)
    index_text = (root / "index.html").read_text(encoding="utf-8", errors="ignore") if (root / "index.html").is_file() else ""
    fixed_ids = [
        'id="root"', 'id="main-menu"', 'id="vehicle-select"', 'id="map-select"', 'id="garage"', 'id="race-screen"', 'id="result-screen"',
    ]
    testids = [
        'game-canvas', 'start-race-btn', 'garage-btn', 'vehicle-card', 'select-vehicle-btn', 'buy-vehicle-btn', 'vehicle-continue-btn',
        'map-card', 'select-map-btn', 'start-time-trial-btn', 'upgrade-btn', 'credits-value', 'race-timer', 'final-time', 'result-reward',
        'result-menu-btn', 'result-retry-btn', 'garage-back-btn', 'vehicle-select-back-btn', 'map-select-back-btn', 'race-exit-btn',
    ]
    missing_ids=[]
    for token in fixed_ids:
        haystack = index_text if token == 'id="root"' else text
        if token not in haystack:
            missing_ids.append(token)
    missing_testids=[token for token in testids if token not in text]
    stable_id_tokens = ('data-vehicle-id', 'data-map-id', 'data-upgrade-id')
    missing_stable=[token for token in stable_id_tokens if token not in text]
    return {
        "ids": (not missing_ids, f"missing_fixed_ids={missing_ids}"),
        "testids": (not missing_testids and not missing_stable, f"missing_testids={missing_testids}, missing_stable_ids={missing_stable}"),
    }

def _valid_vec3(value: Any) -> bool:
    return isinstance(value, dict) and all(_finite(value.get(k)) for k in ("x", "y", "z"))


def _schema_contract(snap: dict[str, Any]) -> tuple[bool, str]:
    g, ga, w, r, v, c, s = (snap.get(k) or {} for k in ("game", "garage", "world", "race", "vehicle", "camera", "scene"))
    errors: list[str] = []

    if g.get("ready") is not True: errors.append("game.ready")
    if g.get("gameState") not in {"menu","vehicle_select","map_select","garage","loading","racing","result"}: errors.append("game.gameState")
    if not _finite(g.get("credits")) or _num(g.get("credits")) < 0: errors.append("game.credits")
    if g.get("selectedVehicleId") is not None and not isinstance(g.get("selectedVehicleId"), str): errors.append("game.selectedVehicleId")
    if g.get("selectedMapId") is not None and not isinstance(g.get("selectedMapId"), str): errors.append("game.selectedMapId")
    result = g.get("result")
    if result is not None:
        if not isinstance(result, dict) or not all(isinstance(result.get(k), str) and result.get(k) for k in ("raceId","vehicleId","mapId")) or not _finite(result.get("finalTime")) or not _finite(result.get("reward")): errors.append("game.result")

    if not _finite(ga.get("credits")) or _num(ga.get("credits")) < 0: errors.append("garage.credits")
    vehicles = ga.get("vehicles")
    if not isinstance(vehicles, list) or len(vehicles) < 2:
        errors.append("garage.vehicles")
    else:
        ids=[]
        for item in vehicles:
            if not isinstance(item, dict) or not isinstance(item.get("id"), str) or not item.get("id") or not isinstance(item.get("name"), str) or not isinstance(item.get("owned"), bool) or not isinstance(item.get("selected"), bool) or not _finite(item.get("price")) or _num(item.get("price")) < 0:
                errors.append("garage.vehicle.schema"); break
            ids.append(item.get("id"))
            stats=item.get("stats") or {}
            if not all(_finite(stats.get(k)) and _num(stats.get(k)) >= 0 for k in ("mass","power","braking","steering","grip","maxSpeed","suspension")):
                errors.append("garage.stats"); break
            upgrades=item.get("upgrades")
            if not isinstance(upgrades,list): errors.append("garage.upgrades"); break
            for up in upgrades:
                if not isinstance(up,dict) or not up.get("id") or not isinstance(up.get("name"),str) or up.get("affectedStat") not in {"power","braking","steering","grip","maxSpeed","suspension"} or not _finite(up.get("level")) or _num(up.get("level")) < 0 or not _finite(up.get("cost")) or _num(up.get("cost")) < 0:
                    errors.append("garage.upgrade.schema"); break
        if len(ids) != len(set(ids)): errors.append("garage.vehicle.ids")

    maps=w.get("maps")
    if not isinstance(maps,list) or len(maps)<2 or any(not isinstance(m,dict) or not m.get("id") or not isinstance(m.get("name"),str) for m in maps): errors.append("world.maps")
    current=w.get("currentMap")
    if current is not None:
        if not isinstance(current,dict) or not current.get("id") or not isinstance(current.get("name"),str): errors.append("world.currentMap")
        else:
            spawn=current.get("spawn") or {}; finish=current.get("finish") or {}
            if not _valid_vec3(spawn.get("position")) or not _valid_vec3(spawn.get("forward")): errors.append("world.spawn")
            if not _valid_vec3(finish.get("position")) or not _finite(finish.get("radius")) or _num(finish.get("radius")) <= 0: errors.append("world.finish")
            cps=current.get("checkpoints")
            if not isinstance(cps,list) or any(not cp.get("id") or not _finite(cp.get("index")) or not _valid_vec3(cp.get("position")) or not _finite(cp.get("radius")) or _num(cp.get("radius")) <= 0 for cp in cps or []): errors.append("world.checkpoints")
            elif [int(_num(cp.get("index"))) for cp in cps] != sorted(int(_num(cp.get("index"))) for cp in cps): errors.append("world.checkpoint.order")
            terrain=current.get("terrain") or {}
            if not _finite(terrain.get("minHeight")) or not _finite(terrain.get("maxHeight")) or not isinstance(terrain.get("surfaceTypes"),list) or not terrain.get("surfaceTypes"): errors.append("world.terrain")
            obstacles=current.get("obstacles")
            if not isinstance(obstacles,list) or any(not ob.get("id") or not _valid_vec3(ob.get("position")) or not _finite(ob.get("radius")) for ob in obstacles or []): errors.append("world.obstacles")
            if int(_num(current.get("obstacleCount"), len(obstacles or []))) != len(obstacles or []): errors.append("world.obstacleCount.current")
    if not _finite(w.get("visibleMapObjectCount")) or not _finite(w.get("renderFrame")): errors.append("world.render")

    if r.get("mode") != "time_trial" or r.get("phase") not in {"idle","loading","running","finished"}: errors.append("race.mode/phase")
    if not all(_finite(r.get(k)) for k in ("playerCount","competitorCount","elapsedTime","currentCheckpointIndex","reward")): errors.append("race.numeric")
    if r.get("finalTime") is not None and not _finite(r.get("finalTime")): errors.append("race.finalTime")
    if not isinstance(r.get("finished"),bool) or not isinstance(r.get("finishEligible"),bool) or not isinstance(r.get("rewardGranted"),bool) or not isinstance(r.get("passedCheckpointIds"),list): errors.append("race.flags")

    if v.get("id") is not None:
        if not isinstance(v.get("id"),str) or not all(_valid_vec3(v.get(k)) for k in ("position","rotation","forward","velocity")): errors.append("vehicle.vectors")
        if not all(_finite(v.get(k)) for k in ("speed","throttle","brake","steering")): errors.append("vehicle.inputs")
        if abs(_num(v.get("throttle"))) > 1.001 or abs(_num(v.get("brake"))) > 1.001 or abs(_num(v.get("steering"))) > 1.001: errors.append("vehicle.input.range")
        if not isinstance(v.get("grounded"),bool) or not isinstance(v.get("surfaceType"),str): errors.append("vehicle.ground")
        collision=v.get("collision") or {}
        if not isinstance(collision.get("active"),bool) or (collision.get("objectId") is not None and not isinstance(collision.get("objectId"),str)): errors.append("vehicle.collision")
        chassis=v.get("chassis") or {}
        if not all(_finite(chassis.get(k)) for k in ("height","pitch","roll")): errors.append("vehicle.chassis")
        wheels=v.get("wheels")
        if not isinstance(wheels,list) or len(wheels)<4:
            errors.append("vehicle.wheels")
        else:
            wheel_ids=[]
            for wh in wheels:
                wheel_ids.append(wh.get("id"))
                if not wh.get("id") or not _valid_vec3(wh.get("position")) or (wh.get("contactPoint") is not None and not _valid_vec3(wh.get("contactPoint"))) or not isinstance(wh.get("grounded"),bool) or not _finite(wh.get("suspensionCompression")) or not _finite(wh.get("suspensionTravel")) or _num(wh.get("suspensionTravel")) < 0:
                    errors.append("wheel.schema"); break
            if len(wheel_ids)!=len(set(wheel_ids)): errors.append("wheel.ids")
        applied=v.get("appliedStats") or {}
        if not all(_finite(applied.get(k)) for k in ("mass","power","braking","steering","grip","maxSpeed","suspension")): errors.append("vehicle.appliedStats")

    if c.get("mode") != "third_person" or not _valid_vec3(c.get("position")) or not _valid_vec3(c.get("target")) or not _valid_vec3(c.get("forward")) or not isinstance(c.get("vehicleVisible"),bool): errors.append("camera")
    if s.get("renderer") not in {"webgl","webgl2"} or not isinstance(s.get("canvasVisible"),bool) or not all(_finite(s.get(k)) for k in ("canvasWidth","canvasHeight","renderFrame","visibleWheelCount")) or not isinstance(s.get("visibleVehicleIds"),list) or not isinstance(s.get("visibleTerrain"),bool): errors.append("scene")
    prefixes = {
        "game": ("game.",),
        "garage": ("garage.",),
        "world": ("world.",),
        "race": ("race.",),
        "vehicle": ("vehicle.", "wheel."),
        "camera": ("camera",),
        "scene": ("scene",),
    }
    grouped = {}
    for name, starts in prefixes.items():
        group_errors = [err for err in errors if any(err.startswith(prefix) for prefix in starts)]
        grouped[name] = (not group_errors, f"schema_errors={group_errors}")
    return not errors, f"schema_errors={errors}", grouped


async def _readonly_probe(page) -> tuple[bool, str]:
    result = await page.evaluate('''() => {
      const names=['__game','__garage','__world','__race','__vehicle','__camera','__scene'];
      const strip=v=>{
        const copy=JSON.parse(JSON.stringify(v));
        const walk=x=>{ if(!x||typeof x!=='object')return; delete x.renderFrame; delete x.elapsedTime; for(const k of Object.keys(x)) walk(x[k]); };
        walk(copy); return copy;
      };
      const before={}; const after={}; const missing=[];
      for(const n of names){ const h=window[n]; if(!h||typeof h.getState!=='function'){missing.push(n);continue;} before[n]=strip(h.getState()); }
      for(let i=0;i<25;i++) for(const n of names){ const h=window[n]; if(h&&typeof h.getState==='function') h.getState(); }
      for(const n of names){ const h=window[n]; if(h&&typeof h.getState==='function') after[n]=strip(h.getState()); }
      return {missing, same: missing.length===0 && JSON.stringify(before)===JSON.stringify(after)};
    }''')
    return bool(result.get("same")), f"missing={result.get('missing')}, same={result.get('same')}"


async def _runtime_cross_contract(page, snap: dict[str, Any]) -> tuple[bool, str]:
    g, ga, w, r, v, c, s = (snap.get(k) or {} for k in ("game", "garage", "world", "race", "vehicle", "camera", "scene"))
    canvas_loc = page.locator('[data-testid="game-canvas"]').first
    canvas = await canvas_loc.count() > 0 and await canvas_loc.is_visible()
    before_scene = _num(s.get("renderFrame"), -1)
    before_world = _num(w.get("renderFrame"), -1)
    later_scene, later_world = before_scene, before_world
    # Heavy WebGL scenes can render slower under software/CI GPUs. Require genuine
    # frame progression, but allow a short bounded window instead of assuming 250ms.
    for _ in range(8):
        await asyncio.sleep(0.25)
        later = await _snapshot(page)
        later_scene = _num((later.get("scene") or {}).get("renderFrame"), -1)
        later_world = _num((later.get("world") or {}).get("renderFrame"), -1)
        if later_scene > before_scene and later_world > before_world:
            break
    wheels = v.get("wheels") or []
    current_map=(w.get("currentMap") or {}).get("id")
    observer=snap.get("observer") or {}
    ok = (
        canvas and g.get("credits") == ga.get("credits") and g.get("currentRaceId") == r.get("raceId")
        and r.get("vehicleId") == v.get("id") and r.get("mapId") == current_map
        and v.get("id") in (s.get("visibleVehicleIds") or [])
        and int(_num(s.get("visibleWheelCount"), -1)) == len(wheels) and len(wheels) >= 4
        and s.get("visibleTerrain") is True and _num(w.get("visibleMapObjectCount"), 0) > 0 and c.get("followedVehicleId") == v.get("id") and c.get("vehicleVisible") is True
        and later_scene > before_scene and later_world > before_world
        and _num(observer.get("webglContexts"), 0) >= 1
    )
    return ok, f"canvas={canvas}, ids={(r.get('vehicleId'),v.get('id'),r.get('mapId'),current_map)}, wheels={len(wheels)}/{s.get('visibleWheelCount')}, frames={(before_scene,later_scene,before_world,later_world)}, webgl={observer.get('webglContexts')}"


async def run_checks(page, ctx):
    checks: dict[int, tuple[bool, str]] = {}
    screenshots: dict[str, bytes] = {}
    fatal_detail = ""

    def mark(rid: int, passed: bool, reason: str) -> None:
        checks[rid] = (bool(passed), reason)

    try:
        project_contract = _project_contract(ctx)
        mark(37, *project_contract["stack"])
        mark(38, *project_contract["build"])
        source_contract = _source_contract(ctx)
        # R39 只验证固定界面 ID；R40 只验证 data-testid / 稳定实体 ID / 可见画布。
        # 两类契约分开采证，避免一个缺失的 testid 连带击穿固定 ID rubric。
        dom_ids_runtime: dict[str, bool] = {}
        dom_testids_runtime: dict[str, bool] = {}

        initial = await _snapshot(page)
        root_count = await page.locator("#root").count()
        menu_count = await page.locator("#main-menu").count()
        menu_start_count = await page.locator('[data-testid="start-race-btn"]').count()
        menu_garage_count = await page.locator('[data-testid="garage-btn"]').count()
        dom_ids_runtime["menu"] = root_count == 1 and menu_count == 1
        dom_testids_runtime["menu"] = menu_start_count == 1 and menu_garage_count == 1
        menu_visible = await _visible(page, "#main-menu")
        start_visible = await _visible(page, '[data-testid="start-race-btn"]')
        garage_visible = await _visible(page, '[data-testid="garage-btn"]')
        mark(
            1,
            menu_visible and start_visible and garage_visible,
            f"menu={menu_visible}, start={start_visible}, garage={garage_visible}, gameState={(initial.get('game') or {}).get('gameState')}",
        )
        screenshots["menu"] = await page.screenshot(type="png")

        start_roundtrip = False
        garage_roundtrip = False
        if await _open_vehicle_select(page):
            entered = await _visible(page, "#vehicle-select")
            if await _click_visible(page, '[data-testid="vehicle-select-back-btn"]'):
                start_roundtrip = entered and await _wait_game_state(page, "menu")
        if await _ensure_menu(page) and await _click_visible(page, '[data-testid="garage-btn"]'):
            entered = await _wait_game_state(page, "garage") and await _visible(page, "#garage")
            screenshots["garage_initial"] = await page.screenshot(type="png")
            if await _click_visible(page, '[data-testid="garage-back-btn"]'):
                garage_roundtrip = entered and await _wait_game_state(page, "menu")
        mark(
            2,
            start_roundtrip and garage_roundtrip,
            f"time_trial_roundtrip={start_roundtrip}, garage_roundtrip={garage_roundtrip}",
        )

        await _ensure_menu(page)
        await _click_visible(page, '[data-testid="garage-btn"]')
        await _wait_game_state(page, "garage")
        garage0 = (await _snapshot(page)).get("garage") or {}
        dom_ids_runtime["garage"] = await page.locator("#garage").count() == 1
        dom_testids_runtime["garage"] = (
            await page.locator('[data-testid="garage-back-btn"]').count() == 1
            and await page.locator('[data-testid="credits-value"]').count() >= 1
        )
        vehicles = garage0.get("vehicles") or []
        vehicle_cards = await page.locator('[data-testid="vehicle-card"]').count()
        owned = [item for item in vehicles if item.get("owned")]
        locked = [item for item in vehicles if not item.get("owned")]
        identifiable = len({str(item.get("id")) for item in vehicles if item.get("id")}) == len(vehicles)
        mark(
            3,
            len(vehicles) >= 2 and vehicle_cards >= 2 and identifiable and bool(owned) and bool(locked),
            f"vehicles={len(vehicles)}, cards={vehicle_cards}, owned={len(owned)}, purchasable={len(locked)}, unique_ids={identifiable}",
        )
        starter = owned[0] if owned else None
        locked_vehicle = min(locked, key=lambda item: _num(item.get("price")), default=None)
        starter_id = str((starter or {}).get("id") or "")
        locked_id = str((locked_vehicle or {}).get("id") or "")
        starter_stats_before = dict((starter or {}).get("stats") or {})
        initial_credits = _num(garage0.get("credits"), -1)

        await _ensure_menu(page)
        gate_ok = False
        selected_owned_ok = False
        if await _open_vehicle_select(page):
            dom_ids_runtime["vehicle_select"] = await page.locator("#vehicle-select").count() == 1
            dom_testids_runtime["vehicle_select"] = (
                await page.locator('[data-testid="vehicle-select-back-btn"]').count() == 1
                and await page.locator('[data-testid="vehicle-continue-btn"]').count() == 1
            )
            before_gate = await _snapshot(page)
            if locked_id:
                clicked, disabled = await _click_by_data(
                    page,
                    "select-vehicle-btn",
                    "data-vehicle-id",
                    locked_id,
                    allow_disabled=True,
                )
                await asyncio.sleep(0.2)
                after_gate = await _snapshot(page)
                gate_ok = (
                    disabled or not clicked
                ) and (after_gate.get("game") or {}).get("selectedVehicleId") != locked_id
            if starter_id:
                selected_owned_ok = await _select_vehicle(page, starter_id)
        mark(
            4,
            gate_ok and selected_owned_ok,
            f"locked_id={locked_id!r}, locked_rejected={gate_ok}, owned_id={starter_id!r}, owned_selected={selected_owned_ok}",
        )

        world_catalog = (await _snapshot(page)).get("world") or {}
        maps = world_catalog.get("maps") or []
        if not await _visible(page, "#map-select"):
            await _open_map_select(page)
        dom_ids_runtime["map_select"] = await page.locator("#map-select").count() == 1
        dom_testids_runtime["map_select"] = (
            await page.locator('[data-testid="map-select-back-btn"]').count() == 1
            and await page.locator('[data-testid="start-time-trial-btn"]').count() == 1
        )
        map_cards = await page.locator('[data-testid="map-card"]').count()
        map_ids = [str(item.get("id")) for item in maps if item.get("id")]
        mark(
            7,
            len(maps) >= 2 and map_cards >= 2 and len(set(map_ids)) == len(maps),
            f"maps={len(maps)}, cards={map_cards}, unique_ids={len(set(map_ids)) == len(maps)}",
        )
        screenshots["map_select"] = await page.screenshot(type="png")
        map1_id = map_ids[0] if map_ids else ""
        map2_id = map_ids[1] if len(map_ids) > 1 else ""
        selected_map_ok = bool(map1_id) and await _select_map(page, map1_id)
        pre_start_snap = await _snapshot(page)
        pre_start_race = pre_start_snap.get("race") or {}
        pre_start_elapsed = _num(pre_start_race.get("elapsedTime"), 0.0)
        if selected_map_ok:
            await _click_visible(page, '[data-testid="start-time-trial-btn"]')
        race_started = selected_map_ok and await _wait_game_state(page, "racing", timeout=12.0)
        # Some WebGL implementations publish gameState="racing" one render tick before
        # wheel/runtime telemetry is populated. Wait briefly for a live frame so R11/R45/R49
        # measure the running game rather than the transition micro-frame.
        if race_started:
            async def live_race_frame() -> bool:
                snap = await _snapshot(page)
                vehicle = snap.get("vehicle") or {}
                scene = snap.get("scene") or {}
                race = snap.get("race") or {}
                return (
                    _num(scene.get("renderFrame"), 0) >= 2
                    and len(vehicle.get("wheels") or []) >= 4
                    and _num(race.get("elapsedTime"), 0) > 0
                )
            await _wait_for(live_race_frame, timeout=4.0, interval=0.1)
        race0 = await _snapshot(page)
        dom_ids_runtime["race"] = await page.locator("#race-screen").count() == 1
        dom_testids_runtime["race"] = (
            await page.locator('[data-testid="race-exit-btn"]').count() == 1
            and await page.locator('[data-testid="race-timer"]').count() == 1
            and await page.locator('canvas[data-testid="game-canvas"]').count() == 1
            and await page.locator('canvas[data-testid="game-canvas"]').first.is_visible()
        )
        actual_vehicle_id = (race0.get("vehicle") or {}).get("id")
        actual_map_id = ((race0.get("world") or {}).get("currentMap") or {}).get("id")
        mark(
            5,
            race_started and actual_vehicle_id == starter_id and (race0.get("scene") or {}).get("visibleVehicleIds", []).count(starter_id) >= 1,
            f"selected={starter_id!r}, vehicle_state={actual_vehicle_id!r}, visible={(race0.get('scene') or {}).get('visibleVehicleIds')}",
        )
        mark(
            8,
            race_started and actual_map_id == map1_id and (race0.get("race") or {}).get("mapId") == map1_id,
            f"selected_map={map1_id!r}, world_map={actual_map_id!r}, race_map={(race0.get('race') or {}).get('mapId')!r}",
        )
        race_state0 = race0.get("race") or {}
        visible_ids0 = (race0.get("scene") or {}).get("visibleVehicleIds") or []
        mark(
            10,
            race_state0.get("mode") == "time_trial"
            and race_state0.get("playerCount") == 1
            and race_state0.get("competitorCount") == 0
            and len(visible_ids0) == 1
            and visible_ids0[0] == starter_id,
            f"mode={race_state0.get('mode')}, players={race_state0.get('playerCount')}, competitors={race_state0.get('competitorCount')}, visibleVehicleIds={visible_ids0}",
        )
        vehicle0 = race0.get("vehicle") or {}
        world0 = race0.get("world") or {}
        scene0 = race0.get("scene") or {}
        race_id0 = race_state0.get("raceId")
        spawn_pos = (((world0.get("currentMap") or {}).get("spawn") or {}).get("position") or {})
        initial_clean = (
            race_started
            and race_state0.get("phase") == "running"
            and bool(race_id0)
            and pre_start_elapsed <= 0.05
            and _num(race_state0.get("elapsedTime")) >= 0
            and race_state0.get("currentCheckpointIndex") in (0, -1)
            and (race_state0.get("passedCheckpointIds") or []) == []
            and not race_state0.get("finished")
            and not race_state0.get("rewardGranted")
            and _num(race_state0.get("reward")) == 0
            and _num(vehicle0.get("speed")) < 1.0
            and _dist_xz(vehicle0.get("position"), spawn_pos) < 8.0
            and not bool((vehicle0.get("collision") or {}).get("active"))
            and scene0.get("renderer") in ("webgl", "webgl2")
            and scene0.get("canvasVisible") is True
        )
        mark(
            11,
            initial_clean,
            f"raceId={race_id0!r}, phase={race_state0.get('phase')}, elapsed={race_state0.get('elapsedTime')}, checkpoint={race_state0.get('currentCheckpointIndex')}, speed={vehicle0.get('speed')}, renderer={scene0.get('renderer')}",
        )
        schema_ok, schema_reason, schema_groups = _schema_contract(race0)
        for rid, name in ((41,"game"),(42,"garage"),(43,"world"),(44,"race"),(45,"vehicle"),(46,"camera"),(47,"scene")):
            mark(rid, *schema_groups[name])
        readonly_ok, readonly_reason = await _readonly_probe(page)
        mark(48, readonly_ok, readonly_reason)
        cross_ok, cross_reason = await _runtime_cross_contract(page, race0)
        mark(49, cross_ok, cross_reason)

        layout1 = _layout_signature(world0)
        observer_first_race = (await _snapshot(page)).get("observer") or {}

        timer_locator = page.locator('[data-testid="race-timer"]').first
        timer_visible = await timer_locator.count() > 0 and await timer_locator.is_visible()
        timer_text0 = (await timer_locator.inner_text()).strip() if timer_visible else ""
        timer_state0 = _num(((await _snapshot(page)).get("race") or {}).get("elapsedTime"), -1)
        await asyncio.sleep(0.35)
        timer_text1 = (await timer_locator.inner_text()).strip() if timer_visible else ""
        timer_state1 = _num(((await _snapshot(page)).get("race") or {}).get("elapsedTime"), -1)
        parsed0, parsed1 = _parse_timer_text(timer_text0), _parse_timer_text(timer_text1)
        timer_dom_delta = (parsed1 - parsed0) if parsed0 is not None and parsed1 is not None else None
        timer_state_delta = timer_state1 - timer_state0
        timer_synced = (
            timer_visible and parsed0 is not None and parsed1 is not None
            and timer_dom_delta is not None and timer_dom_delta > 0
            and timer_state_delta > 0
            and abs(timer_dom_delta - timer_state_delta) < 0.35
        )
        mark(
            20,
            timer_synced,
            f"visible={timer_visible}, dom=({timer_text0!r}->{timer_text1!r}, delta={timer_dom_delta}), state=({timer_state0:.3f}->{timer_state1:.3f}, delta={timer_state_delta:.3f})",
        )

        samples: list[dict] = []
        before_drive = await _snapshot(page)
        await page.keyboard.down("ArrowUp")
        for _ in range(6):
            await asyncio.sleep(0.18)
            samples.append(await _snapshot(page))
        accel_state = samples[-1] if samples else before_drive
        await page.keyboard.up("ArrowUp")
        await asyncio.sleep(0.12)
        coast_early = await _snapshot(page)
        await asyncio.sleep(0.32)
        coast_late = await _snapshot(page)
        before_brake_longitudinal = _dot_xz(
            (coast_late.get("vehicle") or {}).get("velocity"),
            (coast_late.get("vehicle") or {}).get("forward"),
        )
        await page.keyboard.down("ArrowDown")
        await asyncio.sleep(0.9)
        brake_state = await _snapshot(page)
        await asyncio.sleep(1.0)
        reverse_state = await _snapshot(page)
        await page.keyboard.up("ArrowDown")
        accel_vehicle = accel_state.get("vehicle") or {}
        brake_vehicle = brake_state.get("vehicle") or {}
        reverse_vehicle = reverse_state.get("vehicle") or {}
        accel_longitudinal = _dot_xz(accel_vehicle.get("velocity"), accel_vehicle.get("forward"))
        brake_longitudinal = _dot_xz(brake_vehicle.get("velocity"), brake_vehicle.get("forward"))
        reverse_longitudinal = _dot_xz(reverse_vehicle.get("velocity"), reverse_vehicle.get("forward"))
        longitudinal_ok = (
            accel_longitudinal > 0.05
            and brake_longitudinal < before_brake_longitudinal
            and reverse_longitudinal < -0.02
            and _num(accel_vehicle.get("throttle")) >= 0
            and _num(brake_vehicle.get("brake")) >= 0
        )
        mark(
            12,
            longitudinal_ok,
            f"accelerated={accel_longitudinal:.3f}, before_brake={before_brake_longitudinal:.3f}, after_brake={brake_longitudinal:.3f}, reverse={reverse_longitudinal:.3f}",
        )
        starter_accel_metric = max(_num((item.get("vehicle") or {}).get("speed")) for item in samples) if samples else 0.0

        await page.keyboard.down("ArrowUp")
        await page.keyboard.down("ArrowLeft")
        await asyncio.sleep(0.8)
        left_state = await _snapshot(page)
        await page.keyboard.up("ArrowLeft")
        await page.keyboard.down("ArrowRight")
        await asyncio.sleep(1.4)
        right_state = await _snapshot(page)
        await page.keyboard.up("ArrowRight")
        await page.keyboard.up("ArrowUp")
        await asyncio.sleep(0.35)
        neutral_state = await _snapshot(page)
        left_vehicle = left_state.get("vehicle") or {}
        right_vehicle = right_state.get("vehicle") or {}
        neutral_steering = _num((neutral_state.get("vehicle") or {}).get("steering"))
        steer_ok = (
            _num(left_vehicle.get("steering")) * _num(right_vehicle.get("steering")) < 0
            and _dot_xz(left_vehicle.get("forward"), right_vehicle.get("forward")) < 0.999
            and abs(neutral_steering) < 0.15
        )
        mark(
            13,
            steer_ok,
            f"left_steering={left_vehicle.get('steering')}, right_steering={right_vehicle.get('steering')}, neutral={neutral_steering:.3f}, forward_dot={_dot_xz(left_vehicle.get('forward'), right_vehicle.get('forward')):.4f}",
        )

        speed_series = [_num((item.get("vehicle") or {}).get("speed")) for item in samples]
        position_series = [(item.get("vehicle") or {}).get("position") for item in samples]
        step_distances = [
            _dist_xz(position_series[i - 1], position_series[i])
            for i in range(1, len(position_series))
        ]
        distinct_speeds = len({round(value, 2) for value in speed_series})
        coast_early_speed = _num((coast_early.get("vehicle") or {}).get("speed"))
        coast_late_speed = _num((coast_late.get("vehicle") or {}).get("speed"))
        coast_distance = _dist_xz((accel_state.get("vehicle") or {}).get("position"), (coast_late.get("vehicle") or {}).get("position"))
        continuous_ok = (
            len(samples) >= 4
            and distinct_speeds >= 3
            and any(distance > 0.001 for distance in step_distances)
            and all(math.isfinite(distance) and distance < 100 for distance in step_distances)
            and coast_early_speed > 0.03
            and coast_late_speed > 0.01
            and coast_distance > 0.001
        )
        mark(
            14,
            continuous_ok,
            f"speed_samples={[round(v, 3) for v in speed_series]}, step_distances={[round(v, 3) for v in step_distances]}, coast=({coast_early_speed:.3f}->{coast_late_speed:.3f}), coast_distance={coast_distance:.3f}",
        )

        suspension_samples = samples + [left_state, right_state, brake_state]
        wheel_rows = [
            (item.get("vehicle") or {}).get("wheels") or []
            for item in suspension_samples
        ]
        wheel_count = max((len(row) for row in wheel_rows), default=0)
        compression_vectors = [
            [round(_num(wheel.get("suspensionCompression")), 5) for wheel in row]
            for row in wheel_rows if row
        ]
        wheel_schema_ok = any(
            len(row) >= 4
            and len({str(w.get("id")) for w in row}) == len(row)
            and all(_finite(w.get("suspensionTravel")) and _num(w.get("suspensionTravel")) > 0 for w in row)
            and all((not w.get("grounded")) or isinstance(w.get("contactPoint"), dict) for w in row)
            for row in wheel_rows
        )
        independent_wheels = any(
            len(vector) >= 4 and max(vector) - min(vector) > 1e-4
            for vector in compression_vectors
        )
        changing_compression = len({_state_signature(vector) for vector in compression_vectors}) >= 2
        mark(
            16,
            wheel_count >= 4 and wheel_schema_ok and independent_wheels and changing_compression,
            f"wheel_count={wheel_count}, schema={wheel_schema_ok}, independent={independent_wheels}, compression_states={compression_vectors[:6]}",
        )
        chassis_rows = [(item.get("vehicle") or {}).get("chassis") or {} for item in suspension_samples]
        pitch_values = [round(_num(row.get("pitch")), 5) for row in chassis_rows]
        roll_values = [round(_num(row.get("roll")), 5) for row in chassis_rows]
        chassis_changed = len(set(pitch_values)) >= 2 or len(set(roll_values)) >= 2
        coupled_pose = any(
            len(vector) >= 4 and (max(vector)-min(vector) > 1e-4)
            and (abs(_num(chassis_rows[i].get("pitch"))) > 1e-4 or abs(_num(chassis_rows[i].get("roll"))) > 1e-4)
            for i, vector in enumerate(compression_vectors[:len(chassis_rows)])
        )
        mark(
            17,
            changing_compression and chassis_changed and coupled_pose,
            f"compression_changed={changing_compression}, coupled_pose={coupled_pose}, pitch={pitch_values[:8]}, roll={roll_values[:8]}",
        )
        surfaces = {(item.get("vehicle") or {}).get("surfaceType") for item in suspension_samples}
        terrain = ((world0.get("currentMap") or {}).get("terrain") or {})
        terrain_varies = _num(terrain.get("maxHeight")) > _num(terrain.get("minHeight"))
        pose_or_grip_changed = chassis_changed or len(surfaces - {None, ""}) >= 2
        mark(
            18,
            terrain_varies and pose_or_grip_changed,
            f"height_range=({_num(terrain.get('minHeight'))}, {_num(terrain.get('maxHeight'))}), surfaces={sorted(str(v) for v in surfaces)}, chassis_changed={chassis_changed}",
        )
        left_velocity = left_vehicle.get("velocity")
        left_forward = left_vehicle.get("forward")
        lvx, _, lvz = _vec3(left_velocity)
        lfx, _, lfz = _vec3(left_forward)
        left_speed = max(1e-6, math.hypot(lvx, lvz))
        flattened_compression = [value for vector in compression_vectors for value in vector]
        baseline_response = {
            "acceleration": starter_accel_metric,
            "longitudinalAcceleration": accel_longitudinal,
            "braking": before_brake_longitudinal - brake_longitudinal,
            "steering": 1.0 - _dot_xz(
                (before_drive.get("vehicle") or {}).get("forward"),
                left_vehicle.get("forward"),
            ),
            "grip": abs(lfx * lvz - lfz * lvx) / left_speed,
            "suspension": (
                max(flattened_compression) - min(flattened_compression)
                if flattened_compression else 0.0
            ),
        }

        camera_samples = [item.get("camera") or {} for item in suspension_samples]
        camera_ok = False
        camera_distances = []
        for item, camera in zip(suspension_samples, camera_samples):
            vehicle = item.get("vehicle") or {}
            if camera.get("mode") != "third_person" or not camera.get("vehicleVisible"):
                continue
            camera_position = camera.get("position")
            vehicle_position = vehicle.get("position")
            distance = _dist_xz(camera_position, vehicle_position)
            camera_distances.append(distance)
            offset = {
                "x": _vec3(camera_position)[0] - _vec3(vehicle_position)[0],
                "y": 0,
                "z": _vec3(camera_position)[2] - _vec3(vehicle_position)[2],
            }
            if distance > 0.1 and _dot_xz(offset, vehicle.get("forward")) < 0:
                camera_ok = True
        camera_positions = {_state_signature(camera.get("position")) for camera in camera_samples}
        mark(
            19,
            camera_ok and len(camera_positions) >= 2,
            f"third_person_behind={camera_ok}, camera_positions={len(camera_positions)}, distances={[round(v, 2) for v in camera_distances[:6]]}",
        )

        collision_observed = False
        collision_object = None
        collision_distance = None
        collision_radius = None
        obstacles = ((world0.get("currentMap") or {}).get("obstacles") or [])
        if obstacles:
            obstacle = min(
                obstacles,
                key=lambda item: _dist_xz(vehicle0.get("position"), item.get("position")),
            )
            collision_probe = await _drive_into_obstacle(page, obstacle, timeout=18.0)
            collision_observed = bool(collision_probe.get("observed"))
            collision_object = collision_probe.get("objectId")
            collision_distance = collision_probe.get("distance")
            collision_radius = collision_probe.get("radius")
        grounded_observed = any(bool((item.get("vehicle") or {}).get("grounded")) for item in suspension_samples)
        mark(
            15,
            grounded_observed and bool(obstacles) and collision_observed,
            f"grounded={grounded_observed}, obstacles={len(obstacles)}, collision={collision_observed}, object={collision_object!r}, distance={collision_distance}, radius={collision_radius}",
        )

        timer_before = _num((before_drive.get("race") or {}).get("elapsedTime"), -1)
        timer_after = _num(((await _snapshot(page)).get("race") or {}).get("elapsedTime"), -1)
        mark(
            21,
            pre_start_elapsed <= 0.05 and timer_before >= 0 and timer_after > timer_before,
            f"pre_start_elapsed={pre_start_elapsed:.3f}, running_timer_before={timer_before:.3f}, running_timer_after={timer_after:.3f}; finish stop checked with result",
        )
        screenshots["race"] = await page.screenshot(type="png")

        # 用同一辆未升级车辆、同一组真实键盘输入在第二张地图做受控对比。
        await _click_visible(page, '[data-testid="race-exit-btn"]')
        await _wait_game_state(page, "menu", timeout=6.0)
        map2_loaded = False
        map2_layout_changed = False
        map2_visual_changed = False
        if map2_id and await _start_race(page, starter_id, map2_id):
            map2_snap = await _snapshot(page)
            map2_world = map2_snap.get("world") or {}
            map2_loaded = (
                ((map2_world.get("currentMap") or {}).get("id") == map2_id)
                and ((map2_snap.get("race") or {}).get("mapId") == map2_id)
            )
            layout2_early = _layout_signature(map2_world)
            map2_layout_changed = layout2_early != layout1
            map2_png = await page.screenshot(type="png")
            map2_visual_changed = _image_difference_ratio(screenshots["race"], map2_png) > 0.01
            await _click_visible(page, '[data-testid="race-exit-btn"]')
            await _wait_game_state(page, "menu", timeout=6.0)
        mark(8, checks.get(8, (False, ""))[0] and map2_loaded, f"map1_loaded={checks.get(8, (False, ''))[0]}, map2_loaded={map2_loaded}")
        mark(9, map2_loaded and map2_layout_changed and map2_visual_changed, f"map2_loaded={map2_loaded}, layout_changed={map2_layout_changed}, visual_changed={map2_visual_changed}")

        clean_started = await _start_race(page, starter_id, map1_id)
        clean_snap = await _snapshot(page)
        clean_race = clean_snap.get("race") or {}
        race_id1 = clean_race.get("raceId")
        clean_vehicle = clean_snap.get("vehicle") or {}
        clean_game = clean_snap.get("game") or {}
        clean_spawn = ((((clean_snap.get("world") or {}).get("currentMap") or {}).get("spawn") or {}).get("position") or {})
        clean_state_ok = (
            clean_started
            and bool(race_id1)
            and race_id1 != race_id0
            and _num(clean_race.get("elapsedTime")) < 2.0
            and clean_race.get("currentCheckpointIndex") in (0, -1)
            and (clean_race.get("passedCheckpointIds") or []) == []
            and not clean_race.get("finished")
            and not clean_race.get("finishEligible")
            and not clean_race.get("rewardGranted")
            and _num(clean_race.get("reward")) == 0
            and clean_game.get("result") is None
            and _num(clean_vehicle.get("speed")) < 1.0
            and not bool((clean_vehicle.get("collision") or {}).get("active"))
            and _dist_xz(clean_vehicle.get("position"), clean_spawn) < 8.0
        )
        mark(
            31,
            clean_state_ok,
            f"old_race={race_id0!r}, new_race={race_id1!r}, elapsed={clean_race.get('elapsedTime')}, checkpoint={clean_race.get('currentCheckpointIndex')}, speed={(clean_snap.get('vehicle') or {}).get('speed')}",
        )

        # 先在一场独立比赛中做“跳过路线直冲终点”的负面测试。
        # 负面尝试会把车辆带离出生区域，因此不能继续拿同一场比赛做正向路线验证；
        # 否则测试本身会把后续自动驾驶置于极端位置，产生与产品无关的假失败。
        negative_ok = False
        negative_world = (clean_snap.get("world") or {}).get("currentMap") or {}
        negative_finish = negative_world.get("finish") or {}
        if isinstance(negative_finish.get("position"), dict):
            negative_reached = await _drive_to(
                page,
                negative_finish.get("position") or {},
                _num(negative_finish.get("radius"), 2.0),
                timeout=35.0,
            )
            negative_snap = await _snapshot(page)
            negative_race = negative_snap.get("race") or {}
            negative_ok = negative_reached and not bool(negative_race.get("finished"))

        await _click_visible(page, '[data-testid="race-exit-btn"]')
        await _wait_game_state(page, "menu", timeout=6.0)
        route_started = await _start_race(page, starter_id, map1_id)
        route_start_snap = await _snapshot(page) if route_started else {}
        declared_ids = [
            str(item.get("id"))
            for item in ((((route_start_snap.get("world") or {}).get("currentMap") or {}).get("checkpoints") or []))
        ]
        completion = (
            await _complete_current_race(page, negative_finish_check=False)
            if route_started else
            {"completed": False, "visited": [], "failure": "fresh route race failed to start"}
        )
        final_snap = completion.get("final") or await _snapshot(page)
        final_race = final_snap.get("race") or {}
        passed_ids = final_race.get("passedCheckpointIds") or []
        route_ok = (
            negative_ok
            and completion.get("completed")
            and passed_ids == declared_ids
            and final_race.get("finishEligible") is True
        )
        mark(
            22,
            route_ok,
            f"negative_finish_blocked={negative_ok}, declared={declared_ids}, passed={passed_ids}, completed={completion.get('completed')}, failure={completion.get('failure')}",
        )
        game_final = final_snap.get("game") or {}
        result_data = game_final.get("result") or {}
        final_time = _num(final_race.get("finalTime"), -1)
        final_time_visible = await _visible(page, '[data-testid="final-time"]')
        result_reward_visible = await _visible(page, '[data-testid="result-reward"]')
        retry_visible = await _visible(page, '[data-testid="result-retry-btn"]')
        menu_result_visible = await _visible(page, '[data-testid="result-menu-btn"]')
        # Result correctness (R23) is semantic and must not be coupled to the fixed-ID contract (R39).
        result_visible = (
            game_final.get("gameState") == "result"
            and final_time_visible
            and result_reward_visible
            and menu_result_visible
        )
        dom_ids_runtime["result"] = await page.locator("#result-screen").count() == 1
        dom_testids_runtime["result"] = (
            await page.locator('[data-testid="final-time"]').count() == 1
            and await page.locator('[data-testid="result-reward"]').count() == 1
            and await page.locator('[data-testid="result-retry-btn"]').count() == 1
            and await page.locator('[data-testid="result-menu-btn"]').count() == 1
        )
        result_text = (await page.locator("body").inner_text()) if result_visible else ""
        final_time_text = (await page.locator('[data-testid="final-time"]').first.inner_text()) if final_time_visible else ""
        parsed_final_time = _parse_timer_text(final_time_text)
        starter_name = str((starter or {}).get("name") or starter_id)
        map1_name = str(next((m.get("name") for m in maps if str(m.get("id")) == map1_id), map1_id))
        result_dom_consistent = (
            parsed_final_time is not None
            and abs(parsed_final_time - final_time) < 0.2
            and (starter_name in result_text or starter_id in result_text)
            and (map1_name in result_text or map1_id in result_text)
        )
        mark(
            23,
            completion.get("completed")
            and result_visible and final_time_visible
            and result_data.get("raceId") == final_race.get("raceId")
            and result_data.get("vehicleId") == starter_id
            and result_data.get("mapId") == map1_id
            and final_time > 0
            and result_dom_consistent,
            f"visible={result_visible}, result={result_data}, final_time={final_time}, dom_time={final_time_text!r}, vehicle_name={starter_name!r}, map_name={map1_name!r}, dom_consistent={result_dom_consistent}",
        )
        screenshots["result"] = await page.screenshot(type="png")

        credits_after_finish = _num(game_final.get("credits"), -1)
        reward = _num(final_race.get("reward"), -1)
        balance_delta = credits_after_finish - initial_credits
        await asyncio.sleep(0.6)
        repeat_snap = await _snapshot(page)
        credits_after_wait = _num((repeat_snap.get("game") or {}).get("credits"), -1)
        reward_once = (
            reward > 0
            and final_race.get("rewardGranted") is True
            and abs(balance_delta - reward) < 1e-6
            and credits_after_wait == credits_after_finish
        )
        mark(
            24,
            reward_once,
            f"before={initial_credits}, after={credits_after_finish}, reward={reward}, delta={balance_delta}, after_wait={credits_after_wait}",
        )
        timer_stopped = _num((repeat_snap.get("race") or {}).get("finalTime"), -2) == final_time
        prior_timer_check = checks.get(21, (False, ""))[0]
        mark(
            21,
            prior_timer_check and timer_stopped,
            f"running_increased={prior_timer_check}, final={final_time}, after_wait={(repeat_snap.get('race') or {}).get('finalTime')}",
        )

        async def open_garage() -> dict:
            await _ensure_menu(page)
            await _click_visible(page, '[data-testid="garage-btn"]')
            await _wait_game_state(page, "garage")
            return await _snapshot(page)

        async def displayed_credits() -> float | None:
            locator = page.locator('[data-testid="credits-value"]').first
            if await locator.count() == 0 or not await locator.is_visible():
                return None
            text = await locator.inner_text()
            normalized = "".join(ch for ch in text if ch.isdigit() or ch in ".-")
            try:
                return float(normalized)
            except Exception:
                return None

        garage_after_finish_snap = await open_garage()
        garage_after_finish = garage_after_finish_snap.get("garage") or {}
        visible_credits = await displayed_credits()
        credits_state = _num(garage_after_finish.get("credits"), -2)
        mark(
            25,
            visible_credits is not None
            and credits_state == credits_after_finish
            and abs(visible_credits - credits_state) < 1e-6
            and credits_state >= 0,
            f"dom_credits={visible_credits}, garage_credits={credits_state}, game_credits={credits_after_finish}",
        )

        async def earn_until(required: float, max_races: int = 8) -> float:
            balance = _num(((await _snapshot(page)).get("game") or {}).get("credits"), 0)
            attempts = 0
            while balance + 1e-9 < required and attempts < max_races:
                await _ensure_menu(page)
                if not await _start_race(page, starter_id, map1_id):
                    break
                earned = await _complete_current_race(page, negative_finish_check=False)
                if not earned.get("completed"):
                    break
                balance = _num(((earned.get("final") or {}).get("game") or {}).get("credits"), balance)
                attempts += 1
            return balance

        purchase_success = False
        duplicate_protected = False
        insufficient_protected = False
        purchased_id = ""
        purchase_cost = _num((locked_vehicle or {}).get("price"), float("inf"))
        spend_attempts = 0

        if locked_id and math.isfinite(purchase_cost):
            # 负面分支在独立页面中通过正常升级消费金币制造余额不足，
            # 避免污染主页面随后要执行的正向购买与完整流程。
            isolated = await _open_isolated_product(page, ctx)
            if isolated is not None:
                try:
                    await _click_visible(isolated, '[data-testid="garage-btn"]')
                    await _wait_game_state(isolated, "garage")
                    iso_garage = (await _snapshot(isolated)).get("garage") or {}
                    iso_balance = _num(iso_garage.get("credits"), 0)
                    while iso_balance >= purchase_cost and spend_attempts < 10:
                        iso_starter = next(
                            (item for item in iso_garage.get("vehicles") or [] if str(item.get("id")) == starter_id),
                            {},
                        )
                        candidates = sorted(
                            [u for u in iso_starter.get("upgrades") or [] if _finite(u.get("cost")) and _num(u.get("cost")) <= iso_balance],
                            key=lambda u: _num(u.get("cost")),
                            reverse=True,
                        )
                        bought = False
                        for candidate in candidates:
                            uid = str(candidate.get("id") or "")
                            button = isolated.locator(
                                f'[data-testid="upgrade-btn"][data-vehicle-id="{starter_id}"][data-upgrade-id="{uid}"]'
                            ).first
                            if await button.count() and await button.is_visible() and await button.is_enabled():
                                before = iso_balance
                                await button.click()
                                await asyncio.sleep(0.2)
                                iso_garage = (await _snapshot(isolated)).get("garage") or {}
                                iso_balance = _num(iso_garage.get("credits"), before)
                                if iso_balance < before:
                                    bought = True
                                    spend_attempts += 1
                                    break
                        if not bought:
                            break
                    if iso_balance < purchase_cost:
                        clicked_bad, disabled_bad = await _click_by_data(
                            isolated, "buy-vehicle-btn", "data-vehicle-id", locked_id, allow_disabled=True
                        )
                        await asyncio.sleep(0.2)
                        rejected = (await _snapshot(isolated)).get("garage") or {}
                        rejected_record = next(
                            (item for item in rejected.get("vehicles") or [] if str(item.get("id")) == locked_id),
                            {},
                        )
                        # Rubric cares about the transaction outcome, not whether the UI disables the button.
                        # A clickable button that cleanly rejects an unaffordable purchase is still protected.
                        insufficient_protected = (
                            not bool(rejected_record.get("owned"))
                            and abs(_num(rejected.get("credits"), -1) - iso_balance) < 1e-6
                        )
                finally:
                    await isolated.close()

            # 正向购买始终在主页面当前真实会话执行。
            await _ensure_menu(page)
            garage_main_snap = await open_garage()
            garage_main = garage_main_snap.get("garage") or {}
            before_purchase_balance = _num(garage_main.get("credits"), 0)
            if before_purchase_balance < purchase_cost:
                before_purchase_balance = await earn_until(purchase_cost)
                garage_main_snap = await open_garage()
                garage_main = garage_main_snap.get("garage") or {}
                before_purchase_balance = _num(garage_main.get("credits"), 0)
            if before_purchase_balance >= purchase_cost:
                clicked, _ = await _click_by_data(page, "buy-vehicle-btn", "data-vehicle-id", locked_id)
                await asyncio.sleep(0.35)
                after_purchase = (await _snapshot(page)).get("garage") or {}
                purchased_record = next(
                    (item for item in after_purchase.get("vehicles") or [] if str(item.get("id")) == locked_id),
                    {},
                )
                after_purchase_balance = _num(after_purchase.get("credits"), -1)
                purchase_success = (
                    clicked
                    and purchased_record.get("owned") is True
                    and abs((before_purchase_balance - after_purchase_balance) - purchase_cost) < 1e-6
                )
                purchased_id = locked_id if purchase_success else ""
                clicked_again, disabled_again = await _click_by_data(
                    page, "buy-vehicle-btn", "data-vehicle-id", locked_id, allow_disabled=True
                )
                await asyncio.sleep(0.2)
                duplicate_state = (await _snapshot(page)).get("garage") or {}
                duplicate_protected = (
                    (disabled_again or not clicked_again)
                    and abs(_num(duplicate_state.get("credits"), -2) - after_purchase_balance) < 1e-6
                )

        mark(
            26,
            purchase_success and duplicate_protected and insufficient_protected,
            f"vehicle={locked_id!r}, cost={purchase_cost}, purchased={purchase_success}, duplicate_protected={duplicate_protected}, insufficient_exercised={insufficient_protected}, isolated_spend_attempts={spend_attempts}",
        )
        screenshots["garage"] = await page.screenshot(type="png")

        await _ensure_menu(page)
        purchase_persisted = False
        if purchased_id and await _open_vehicle_select(page):
            current = await _snapshot(page)
            garage_now = current.get("garage") or {}
            record = next(
                (item for item in garage_now.get("vehicles") or [] if str(item.get("id")) == purchased_id),
                {},
            )
            purchase_persisted = bool(record.get("owned")) and await _select_vehicle(page, purchased_id)
            await _click_visible(page, '[data-testid="vehicle-select-back-btn"]')
        mark(
            27,
            purchase_persisted,
            f"purchased_id={purchased_id!r}, retained_and_selectable={purchase_persisted}",
        )

        upgrade_success = False
        upgrade_effect_state = False
        upgrade_id = ""
        affected = ""
        upgrade_level_after = None
        upgrade_insufficient_protected = False

        # 余额不足升级在独立页面中验证，避免为了制造低余额而污染主会话。
        isolated_upgrade = await _open_isolated_product(page, ctx)
        if isolated_upgrade is not None:
            try:
                await _click_visible(isolated_upgrade, '[data-testid="garage-btn"]')
                await _wait_game_state(isolated_upgrade, "garage")
                iso_garage = (await _snapshot(isolated_upgrade)).get("garage") or {}
                iso_vehicle = next(
                    (item for item in iso_garage.get("vehicles") or [] if str(item.get("id")) == starter_id),
                    {},
                )
                iso_balance = _num(iso_garage.get("credits"), 0)
                iso_upgrades = iso_vehicle.get("upgrades") or []
                # 正常购买若干升级，直到至少存在一个价格高于当前余额的升级。
                for _ in range(10):
                    unaffordable = [u for u in iso_upgrades if _finite(u.get("cost")) and _num(u.get("cost")) > iso_balance]
                    if unaffordable:
                        target_bad = min(unaffordable, key=lambda u: _num(u.get("cost")))
                        bad_id = str(target_bad.get("id") or "")
                        bad_level = _num(target_bad.get("level"), -1)
                        button_bad = isolated_upgrade.locator(
                            f'[data-testid="upgrade-btn"][data-vehicle-id="{starter_id}"][data-upgrade-id="{bad_id}"]'
                        ).first
                        clicked_bad = False
                        disabled_bad = await button_bad.count() > 0 and not await button_bad.is_enabled()
                        if await button_bad.count() > 0 and await button_bad.is_visible() and await button_bad.is_enabled():
                            await button_bad.click(); clicked_bad = True
                        await asyncio.sleep(0.2)
                        rejected = (await _snapshot(isolated_upgrade)).get("garage") or {}
                        rejected_vehicle = next(
                            (item for item in rejected.get("vehicles") or [] if str(item.get("id")) == starter_id),
                            {},
                        )
                        rejected_upgrade = next(
                            (u for u in rejected_vehicle.get("upgrades") or [] if str(u.get("id")) == bad_id),
                            {},
                        )
                        # Same rule for upgrades: protection is the immutable economic state after the attempt.
                        upgrade_insufficient_protected = (
                            abs(_num(rejected.get("credits"), -1) - iso_balance) < 1e-6
                            and _num(rejected_upgrade.get("level"), -2) == bad_level
                        )
                        break
                    affordable = sorted(
                        [u for u in iso_upgrades if _finite(u.get("cost")) and _num(u.get("cost")) <= iso_balance],
                        key=lambda u: _num(u.get("cost")),
                        reverse=True,
                    )
                    if not affordable:
                        break
                    spend = affordable[0]
                    spend_id = str(spend.get("id") or "")
                    spend_button = isolated_upgrade.locator(
                        f'[data-testid="upgrade-btn"][data-vehicle-id="{starter_id}"][data-upgrade-id="{spend_id}"]'
                    ).first
                    if await spend_button.count() == 0 or not await spend_button.is_visible() or not await spend_button.is_enabled():
                        break
                    before_iso_balance = iso_balance
                    await spend_button.click(); await asyncio.sleep(0.2)
                    iso_garage = (await _snapshot(isolated_upgrade)).get("garage") or {}
                    iso_vehicle = next(
                        (item for item in iso_garage.get("vehicles") or [] if str(item.get("id")) == starter_id),
                        {},
                    )
                    iso_upgrades = iso_vehicle.get("upgrades") or []
                    iso_balance = _num(iso_garage.get("credits"), before_iso_balance)
                    if iso_balance >= before_iso_balance:
                        break
            finally:
                await isolated_upgrade.close()

        # 正向升级在主页面当前会话执行，并检查余额、等级和真实性能参数同步变化。
        garage_pre_upgrade_snap = await open_garage()
        garage_pre_upgrade = garage_pre_upgrade_snap.get("garage") or {}
        starter_record = next(
            (item for item in garage_pre_upgrade.get("vehicles") or [] if str(item.get("id")) == starter_id),
            {},
        )
        upgrades = starter_record.get("upgrades") or []
        balance = _num(garage_pre_upgrade.get("credits"), 0)
        affordable = sorted(
            [u for u in upgrades if _finite(u.get("cost")) and _num(u.get("cost")) <= balance],
            key=lambda u: _num(u.get("cost")),
        )
        if not affordable and upgrades:
            balance = await earn_until(min(_num(u.get("cost"), float("inf")) for u in upgrades))
            garage_pre_upgrade_snap = await open_garage()
            garage_pre_upgrade = garage_pre_upgrade_snap.get("garage") or {}
            starter_record = next(
                (item for item in garage_pre_upgrade.get("vehicles") or [] if str(item.get("id")) == starter_id),
                {},
            )
            upgrades = starter_record.get("upgrades") or []
            affordable = sorted(
                [u for u in upgrades if _finite(u.get("cost")) and _num(u.get("cost")) <= _num(garage_pre_upgrade.get("credits"), 0)],
                key=lambda u: _num(u.get("cost")),
            )
        upgrade = affordable[0] if affordable else None
        # 升级前后必须在同一车辆、同一地图、同一起点用同一组真实按键做受控对比。
        # 不能拿前面已经在赛道上驾驶过一段距离的响应作为 baseline，否则地形/速度差异会造成 R29 偶发误判。
        controlled_upgrade_baseline: dict[str, Any] = {}
        if upgrade:
            await _ensure_menu(page)
            if await _start_race(page, starter_id, map1_id):
                controlled_upgrade_baseline = await _measure_vehicle_response(page)
                await _click_visible(page, '[data-testid="race-exit-btn"]')
                await _wait_game_state(page, "menu", timeout=6.0)
            garage_pre_upgrade_snap = await open_garage()
            garage_pre_upgrade = garage_pre_upgrade_snap.get("garage") or {}
            starter_record = next(
                (item for item in garage_pre_upgrade.get("vehicles") or [] if str(item.get("id")) == starter_id),
                {},
            )
            upgrade_id = str(upgrade.get("id") or "")
            upgrade_cost = _num(upgrade.get("cost"), float("inf"))
            affected = str(upgrade.get("affectedStat") or "")
            before_level = _num(upgrade.get("level"), -1)
            before_stat = _num((starter_record.get("stats") or {}).get(affected), float("nan"))
            balance_before_upgrade = _num(garage_pre_upgrade.get("credits"), 0)
            button = page.locator(
                f'[data-testid="upgrade-btn"][data-vehicle-id="{starter_id}"][data-upgrade-id="{upgrade_id}"]'
            ).first
            if await button.count() > 0 and await button.is_visible() and await button.is_enabled():
                await button.click(); await asyncio.sleep(0.35)
                garage_post_upgrade = (await _snapshot(page)).get("garage") or {}
                starter_post = next(
                    (item for item in garage_post_upgrade.get("vehicles") or [] if str(item.get("id")) == starter_id),
                    {},
                )
                upgrade_post = next(
                    (item for item in starter_post.get("upgrades") or [] if str(item.get("id")) == upgrade_id),
                    {},
                )
                upgrade_level_after = _num(upgrade_post.get("level"), -1)
                after_stat = _num((starter_post.get("stats") or {}).get(affected), float("nan"))
                balance_after_upgrade = _num(garage_post_upgrade.get("credits"), -1)
                upgrade_success = (
                    upgrade_level_after > before_level
                    and abs((balance_before_upgrade - balance_after_upgrade) - upgrade_cost) < 1e-6
                )
                upgrade_effect_state = _changed(before_stat, after_stat)

        mark(
            28,
            upgrade_success and upgrade_effect_state and upgrade_insufficient_protected,
            f"vehicle={starter_id!r}, upgrade={upgrade_id!r}, level_after={upgrade_level_after}, transaction={upgrade_success}, stat_changed={upgrade_effect_state}, insufficient_exercised={upgrade_insufficient_protected}",
        )

        await _ensure_menu(page)
        upgrade_persisted = False
        if upgrade_success:
            await _click_visible(page, '[data-testid="garage-btn"]')
            await _wait_game_state(page, "garage")
            persisted_garage = (await _snapshot(page)).get("garage") or {}
            persisted_vehicle = next(
                (item for item in persisted_garage.get("vehicles") or [] if str(item.get("id")) == starter_id),
                {},
            )
            persisted_upgrade = next(
                (item for item in persisted_vehicle.get("upgrades") or [] if str(item.get("id")) == upgrade_id),
                {},
            )
            upgrade_persisted = _num(persisted_upgrade.get("level"), -2) == upgrade_level_after
        mark(
            30,
            upgrade_persisted,
            f"upgrade={upgrade_id!r}, expected_level={upgrade_level_after}, retained={upgrade_persisted}",
        )

        upgraded_drive_ok = await _start_race(page, starter_id, map1_id)
        upgraded_response: dict[str, Any] = {}
        upgraded_applied = {}
        if upgraded_drive_ok:
            upgraded_response = await _measure_vehicle_response(page)
            upgraded_applied = upgraded_response.get("appliedStats") or {}
        stat_differences = {
            key: (_num(starter_stats_before.get(key)), _num(upgraded_applied.get(key)))
            for key in starter_stats_before
            if _changed(_num(starter_stats_before.get(key)), _num(upgraded_applied.get(key)))
        }
        response_baseline = controlled_upgrade_baseline or baseline_response
        directional_effects: dict[str, bool] = {}
        for stat_key, (old_stat, new_stat) in stat_differences.items():
            if new_stat <= old_stat:
                directional_effects[stat_key] = False
                continue
            if stat_key == "power":
                directional_effects[stat_key] = _num(upgraded_response.get("acceleration")) > _num(response_baseline.get("acceleration")) + 0.001
            elif stat_key == "braking":
                directional_effects[stat_key] = _num(upgraded_response.get("braking")) > _num(response_baseline.get("braking")) + 0.001
            elif stat_key == "steering":
                directional_effects[stat_key] = _num(upgraded_response.get("steering")) > _num(response_baseline.get("steering")) + 0.001
            elif stat_key == "grip":
                # grip 指标是横向滑移率；真实抓地提升应让相同转向输入下滑移减少。
                directional_effects[stat_key] = _num(upgraded_response.get("grip")) < _num(response_baseline.get("grip")) - 0.001
            elif stat_key == "suspension":
                directional_effects[stat_key] = _changed(_num(response_baseline.get("suspension")), _num(upgraded_response.get("suspension")), epsilon=0.001)
            elif stat_key == "maxSpeed":
                directional_effects[stat_key] = _num(upgraded_response.get("acceleration")) >= _num(response_baseline.get("acceleration"))
        actual_directional_effect = any(directional_effects.values())
        mark(
            29,
            upgraded_drive_ok and bool(stat_differences) and actual_directional_effect,
            f"applied_stat_differences={stat_differences}, directional_effects={directional_effects}, baseline_response={response_baseline}, upgraded_response={upgraded_response}",
        )
        await _click_visible(page, '[data-testid="race-exit-btn"]')
        await _wait_game_state(page, "menu")

        car_difference_ok = False
        if purchased_id:
            # Compare both vehicles at their base state. Using an already-upgraded starter here would
            # conflate the vehicle-difference rubric with the upgrade rubric.
            first_car_stats = starter_stats_before
            first_car_response = baseline_response
            if await _start_race(page, purchased_id, map1_id):
                second_response = await _measure_vehicle_response(page)
                second_stats = second_response.get("appliedStats") or {}
                different_stats = any(
                    _changed(_num(first_car_stats.get(key)), _num(second_stats.get(key)))
                    for key in set(first_car_stats) | set(second_stats)
                )
                response_differences = {
                    key: (_num(first_car_response.get(key)), _num(second_response.get(key)))
                    for key in ("acceleration", "braking", "steering", "grip", "suspension")
                    if _changed(
                        _num(first_car_response.get(key)),
                        _num(second_response.get(key)),
                        epsilon=0.001,
                    )
                }
                second_vehicle_snap = await _snapshot(page)
                second_scene = second_vehicle_snap.get("scene") or {}
                second_loaded_ok = (
                    second_response.get("vehicleId") == purchased_id
                    and purchased_id in (second_scene.get("visibleVehicleIds") or [])
                )
                car_difference_ok = different_stats and bool(response_differences) and second_loaded_ok
                starter_loaded_ok = checks.get(5, (False, ""))[0]
                mark(5, starter_loaded_ok and second_loaded_ok, f"starter_loaded={starter_loaded_ok}, second={purchased_id!r}, second_loaded={second_loaded_ok}, visible={second_scene.get('visibleVehicleIds')}")
                await _click_visible(page, '[data-testid="race-exit-btn"]')
                await _wait_game_state(page, "menu")
        mark(
            6,
            car_difference_ok,
            f"starter={starter_id!r}, second={purchased_id!r}, actual_behavior_difference={car_difference_ok}",
        )

        map_difference_ok = False
        if map2_id and await _start_race(page, starter_id, map2_id):
            second_map_snap = await _snapshot(page)
            layout2 = _layout_signature(second_map_snap.get("world") or {})
            map_difference_ok = (
                ((second_map_snap.get("world") or {}).get("currentMap") or {}).get("id") == map2_id
                and layout1 != layout2
            )
            await _click_visible(page, '[data-testid="race-exit-btn"]')
            await _wait_game_state(page, "menu")
        prior_map_difference = checks.get(9, (False, ""))[0]
        mark(
            9,
            prior_map_difference and map_difference_ok,
            f"early_visual_and_layout={prior_map_difference}, later_layout_recheck={map_difference_ok}, map1={map1_id!r}, map2={map2_id!r}",
        )

        economy_prior_ok = checks.get(25, (False, ""))[0]
        final_garage_snap = await open_garage()
        final_garage = final_garage_snap.get("garage") or {}
        final_dom_credits = await displayed_credits()
        final_game_credits = _num((final_garage_snap.get("game") or {}).get("credits"), -1)
        final_garage_credits = _num(final_garage.get("credits"), -2)
        final_credit_sync = (
            final_dom_credits is not None
            and abs(final_dom_credits - final_game_credits) < 1e-6
            and final_game_credits == final_garage_credits
            and final_game_credits >= 0
        )
        mark(
            25,
            economy_prior_ok and final_credit_sync,
            f"reward_sync={economy_prior_ok}, final_dom={final_dom_credits}, final_game={final_game_credits}, final_garage={final_garage_credits}",
        )
        await _ensure_menu(page)
        final_economy = (await _snapshot(page)).get("game") or {}
        full_loop_ok = (
            completion.get("completed")
            and reward_once
            and purchase_success
            and upgrade_success
            and purchase_persisted
            and upgrade_persisted
            and final_economy.get("gameState") == "menu"
        )
        mark(
            32,
            full_loop_ok,
            f"completed={completion.get('completed')}, reward={reward_once}, purchase={purchase_success}, upgrade={upgrade_success}, purchase_retained={purchase_persisted}, upgrade_retained={upgrade_persisted}, state={final_economy.get('gameState')}",
        )

        observer_after = (await _snapshot(page)).get("observer") or {}
        first_listeners = observer_first_race.get("listeners") or {}
        after_listeners = observer_after.get("listeners") or {}
        watched_types = ("keydown", "keyup")
        listener_growth = {
            event_type: _num((after_listeners.get(event_type) or {}).get("net"))
            - _num((first_listeners.get(event_type) or {}).get("net"))
            for event_type in watched_types
        }
        raf_growth = _num(observer_after.get("rafActive")) - _num(observer_first_race.get("rafActive"))
        first_timers = observer_first_race.get("timers") or {}
        after_timers = observer_after.get("timers") or {}
        timeout_growth = _num(after_timers.get("activeTimeouts")) - _num(first_timers.get("activeTimeouts"))
        interval_growth = _num(after_timers.get("activeIntervals")) - _num(first_timers.get("activeIntervals"))
        first_resources = observer_first_race.get("webglResources") or {}
        after_resources = observer_after.get("webglResources") or {}
        def active_resource_total(value: dict) -> float:
            return sum(_num((value.get(kind) or {}).get("active")) for kind in ("buffer","texture","shader","program","framebuffer"))
        resource_growth = active_resource_total(after_resources) - active_resource_total(first_resources)
        stable_runtime = (
            observer_after.get("webglContexts", 0) >= 1
            and raf_growth <= 0
            and timeout_growth <= 0
            and interval_growth <= 0
            and resource_growth <= 0
            and all(growth <= 0 for growth in listener_growth.values())
            and _num(observer_after.get("rafMaxActive")) <= _num(observer_first_race.get("rafMaxActive")) + 1
        )
        mark(
            33,
            stable_runtime,
            f"raf_active=({observer_first_race.get('rafActive')}->{observer_after.get('rafActive')}), raf_max=({observer_first_race.get('rafMaxActive')}->{observer_after.get('rafMaxActive')}), listener_growth={listener_growth}, timer_growth=(timeouts:{timeout_growth}, intervals:{interval_growth}), webgl_resource_growth={resource_growth}, webgl_contexts={observer_after.get('webglContexts')}",
        )

        duplicate_ids = await page.evaluate("""() => { const seen=new Map(), dup=[]; for(const el of document.querySelectorAll('[id]')){ const id=el.id; seen.set(id,(seen.get(id)||0)+1); } for(const [id,n] of seen){ if(n>1) dup.push([id,n]); } return dup; }""")
        fixed_ids_ok, fixed_ids_reason = source_contract["ids"]
        testids_ok, testids_reason = source_contract["testids"]
        fixed_id_runtime_ok = all(dom_ids_runtime.values())
        testid_runtime_ok = all(dom_testids_runtime.values())
        mark(39, fixed_ids_ok and fixed_id_runtime_ok and not duplicate_ids, f"source={fixed_ids_reason}, runtime_ids={dom_ids_runtime}, duplicate_ids={duplicate_ids}")
        mark(40, testids_ok and testid_runtime_ok, f"source={testids_reason}, runtime_testids={dom_testids_runtime}")

    except Exception as exc:
        fatal_detail = repr(exc)
    finally:
        await _release_drive_keys(page)

    for rubric in RUBRIC:
        rid = int(rubric["id"])
        if rubric["kind"] == "vlm":
            continue
        passed, reason = checks.get(
            rid,
            (False, f"未执行到该检查；run_checks_error={fatal_detail or 'unknown'}"),
        )
        ctx.check(rid, passed, reason)

    fallback = await page.screenshot(type="png")
    race_png = screenshots.get("race", fallback)
    garage_png = screenshots.get("garage", screenshots.get("garage_initial", fallback))
    try:
        ui_png = _compose_grid(
            [
                screenshots.get("menu", fallback),
                screenshots.get("garage", screenshots.get("garage_initial", fallback)),
                screenshots.get("map_select", fallback),
                screenshots.get("race", fallback),
                screenshots.get("result", fallback),
            ]
        )
    except Exception:
        ui_png = fallback

    await ctx.vlm_png(
        34,
        "画面是否清楚呈现真实比赛中的第三人称 3D 越野赛车环境？必须能看到玩家车辆、车辆后上方外部视角、具有高度或非铺装特征的三维地形和可驾驶路线。菜单、二维俯视、静态展台或缺少越野环境回答 NO。",
        race_png,
        "race",
    )
    await ctx.vlm_png(
        35,
        "车库画面是否展示至少两辆在轮廓、车身比例、结构或明确配色上可辨认不同的车辆？只有名称不同、同一模型的极小装饰变化或看不到两辆车时回答 NO。",
        garage_png,
        "garage",
    )
    await ctx.vlm_png(
        36,
        "这张界面合成图中的主菜单、车库或车辆选择、地图选择、比赛 HUD 和结果界面，其核心按钮、金币、计时和结果信息是否清晰可读且没有严重裁切、重叠、遮挡或与背景混淆？缺少多个关键界面或核心信息不可读时回答 NO。",
        ui_png,
        "ui-grid",
    )


if __name__ == "__main__":
    import web_ut_harness

    web_ut_harness.main(__import__("web_ut"))
