"""
Duck Paintball 3D evaluation.

This file is intended to run beside the provided web_ut_harness.py.
It uses only public read-only state hooks plus real DOM/pointer input.
"""

# -*- coding: utf-8 -*-

import asyncio
import hashlib
import math
import re
import statistics
import time
from collections import defaultdict


# Exact public state contract surface. Runtime reads use _state() below, while
# these literals keep prompt/mapping/test traceability mechanically auditable.
STATE_CONTRACT_SURFACE = (
    "window.__game.getState()",
    "window.__scene.getState()",
    "window.__player.getState()",
    "window.__combat.getState()",
    "window.__bots.getState()",
    "window.__ranking.getState()",
)

RUBRIC = [
    {"id": 1, "text": "游戏页面加载后存在可见的游戏视口，并进入可交互的运行状态。", "kind": "state"},
    {"id": 2, "text": "游戏世界是真实实时渲染的 3D 场景。", "kind": "state"},
    {"id": 3, "text": "页面提供一个真实可见且可操作的玩家移动按钮。", "kind": "dom"},
    {"id": 4, "text": "通过页面提供的移动按钮可以真实改变玩家在 3D 世界中的位置。", "kind": "state"},
    {"id": 5, "text": "页面提供一个真实可见且可操作的射击按钮。", "kind": "dom"},
    {"id": 6, "text": "玩家操作射击按钮后会真实产生一次玩家武器射击。", "kind": "state"},
    {"id": 7, "text": "玩家射出的彩弹会作为真实战斗对象在 3D 世界中产生并运动。", "kind": "state"},
    {"id": 8, "text": "游戏中存在真实参与战斗的敌方 Bot，而不是纯装饰对象。", "kind": "state"},
    {"id": 9, "text": "敌方 Bot 会在实际游戏过程中自主发起对玩家的射击。", "kind": "state"},
    {"id": 10, "text": "Bot 射出的攻击真实朝向玩家，而不是随机射击或只播放射击效果。", "kind": "state"},
    {"id": 11, "text": "玩家真实射击可以命中并淘汰敌方 Bot。", "kind": "state"},
    {"id": 12, "text": "每个真实 Bot 淘汰只会为玩家结算一次击杀。", "kind": "state"},
    {"id": 13, "text": "正常游戏持续提供足够的 Bot 击杀机会，使 Bronze、Silver、Gold 的晋级路径真实可达。", "kind": "state"},
    {"id": 14, "text": "页面存在真实可见且可操作的段位入口按钮。", "kind": "dom"},
    {"id": 15, "text": "操作段位入口后能够真实打开段位界面。", "kind": "dom"},
    {"id": 16, "text": "段位界面包含至少 Bronze、Silver 和 Gold 三个不同层级。", "kind": "dom"},
    {"id": 17, "text": "段位系统明确保持 Bronze、Silver、Gold 的递增层级和击杀门槛。", "kind": "state"},
    {"id": 18, "text": "段位界面能够明确标识玩家当前所属段位。", "kind": "dom"},
    {"id": 19, "text": "段位界面能够向玩家展示当前击杀进度和下一段位所需的击杀要求。", "kind": "state"},
    {"id": 20, "text": "玩家未达到下一段位规定的击杀条件前不会提前晋级。", "kind": "state"},
    {"id": 21, "text": "玩家通过真实击杀达到规定条件后会晋升到相邻的下一段位。", "kind": "state"},
    {"id": 22, "text": "晋级完成后，当前段位及段位界面中的状态会同步更新。", "kind": "state"},
    {"id": 23, "text": "玩家每次提高段位后，Bot 的实际战斗行为都会产生可观察的难度提升。", "kind": "state"},
    {"id": 24, "text": "游戏的可见角色与武器设计明确体现鸭子和彩弹/颜料枪主题。", "kind": "vlm"},
    {"id": 25, "text": "游戏世界具有清晰的森林环境，并存在明显可见的树木和自然场景元素。", "kind": "vlm"},
    {"id": 26, "text": "游戏整体视觉与段位界面具有完整、协调的设计：3D 场景、HUD、控制按钮、段位面板的排版清晰可读，不存在严重默认样式、遮挡或不可读问题。", "kind": "vlm"},
]


# -----------------------------------------------------------------------------
# Small helpers
# -----------------------------------------------------------------------------

def _finite_number(v):
    return isinstance(v, (int, float)) and math.isfinite(float(v))


def _vec(v):
    if not isinstance(v, dict):
        return None
    vals = (v.get("x"), v.get("y"), v.get("z"))
    if not all(_finite_number(x) for x in vals):
        return None
    return tuple(float(x) for x in vals)


def _distance(a, b):
    if a is None or b is None:
        return None
    return math.sqrt(sum((a[i] - b[i]) ** 2 for i in range(3)))


def _norm(v):
    if v is None:
        return None
    n = math.sqrt(sum(x * x for x in v))
    if n <= 1e-12:
        return None
    return tuple(x / n for x in v)


def _dot(a, b):
    na, nb = _norm(a), _norm(b)
    if na is None or nb is None:
        return None
    return sum(na[i] * nb[i] for i in range(3))


def _median(values):
    vals = [float(v) for v in values if _finite_number(v)]
    return statistics.median(vals) if vals else None


def _mean(values):
    vals = [float(v) for v in values if _finite_number(v)]
    return sum(vals) / len(vals) if vals else None


def _event_key(e, fields):
    if not isinstance(e, dict):
        return None
    return tuple(e.get(k) for k in fields)


def _mat4_vec4(m, v):
    if not (isinstance(m, list) and len(m) == 16 and len(v) == 4):
        return None
    if not all(_finite_number(x) for x in list(m) + list(v)):
        return None
    x, y, z, w = [float(q) for q in v]
    return (
        m[0] * x + m[4] * y + m[8] * z + m[12] * w,
        m[1] * x + m[5] * y + m[9] * z + m[13] * w,
        m[2] * x + m[6] * y + m[10] * z + m[14] * w,
        m[3] * x + m[7] * y + m[11] * z + m[15] * w,
    )


def _camera_consistency(scene):
    camera = (scene or {}).get("camera") or {}
    view = camera.get("viewMatrix")
    pos = _vec(camera.get("position"))
    fwd = _vec(camera.get("forward"))
    if pos is None or fwd is None or not isinstance(view, list) or len(view) != 16:
        return False, {"reason": "missing-camera-data"}
    at_origin = _mat4_vec4(view, (*pos, 1.0))
    origin_err = None
    if at_origin is not None:
        origin_err = math.sqrt(at_origin[0] ** 2 + at_origin[1] ** 2 + at_origin[2] ** 2)
    matrix_forward = _norm((-float(view[2]), -float(view[6]), -float(view[10])))
    forward_dot = _dot(fwd, matrix_forward) if matrix_forward else None
    fwd_len = math.sqrt(sum(x * x for x in fwd))
    ok = (
        origin_err is not None and origin_err < 0.08
        and forward_dot is not None and forward_dot > 0.92
        and 0.80 < fwd_len < 1.20
    )
    return ok, {"originError": origin_err, "forwardDot": forward_dot, "forwardLength": fwd_len}


def _project_world(scene, world, box):
    if world is None or not box:
        return None
    camera = (scene or {}).get("camera") or {}
    view = camera.get("viewMatrix")
    proj = camera.get("projectionMatrix")
    eye = _mat4_vec4(view, (*world, 1.0))
    if eye is None:
        return None
    clip = _mat4_vec4(proj, eye)
    if clip is None or abs(clip[3]) < 1e-8 or clip[3] <= 0:
        return None
    nx, ny = clip[0] / clip[3], clip[1] / clip[3]
    if not (-1.15 <= nx <= 1.15 and -1.15 <= ny <= 1.15):
        return None
    x = float(box["x"]) + (nx + 1.0) * 0.5 * float(box["width"])
    y = float(box["y"]) + (1.0 - (ny + 1.0) * 0.5) * float(box["height"])
    return (x, y, nx, ny)


async def _region_sig(page, x, y, radius=18):
    try:
        vp = page.viewport_size or {"width": 1280, "height": 800}
        left = max(0.0, min(float(vp["width"]) - 4.0, float(x) - radius))
        top = max(0.0, min(float(vp["height"]) - 4.0, float(y) - radius))
        right = min(float(vp["width"]), float(x) + radius)
        bottom = min(float(vp["height"]), float(y) + radius)
        if right - left < 4 or bottom - top < 4:
            return None, 0
        png = await page.screenshot(type="png", clip={"x": left, "y": top, "width": right-left, "height": bottom-top})
        return hashlib.sha256(png).hexdigest(), len(png)
    except Exception:
        return None, 0


async def _hook_surface(page):
    try:
        return await page.evaluate("""
        () => {
          const names = ['__game','__scene','__player','__combat','__bots','__ranking'];
          const detail = {};
          let ok = true;
          for (const n of names) {
            const obj = window[n];
            const keys = obj && typeof obj === 'object' ? Object.keys(obj).sort() : [];
            const valid = !!obj && keys.length === 1 && keys[0] === 'getState' && typeof obj.getState === 'function';
            detail[n] = {keys, valid};
            ok = ok && valid;
          }
          return {ok, detail};
        }
        """)
    except Exception as e:
        return {"ok": False, "error": repr(e)}


async def _state(ctx, name):
    try:
        st = await ctx.get_state(name)
        return st if isinstance(st, dict) else None
    except Exception:
        return None


async def _wait_for(async_predicate, timeout_s=8.0, interval_s=0.08):
    end = time.monotonic() + timeout_s
    last = None
    while time.monotonic() < end:
        try:
            last = await async_predicate()
            if last:
                return last
        except Exception:
            pass
        await asyncio.sleep(interval_s)
    return last


async def _visible(locator):
    try:
        return await locator.count() == 1 and await locator.is_visible()
    except Exception:
        return False


async def _enabled_visible(locator):
    try:
        if await locator.count() != 1 or not await locator.is_visible():
            return False
        disabled = await locator.get_attribute("disabled")
        box = await locator.bounding_box()
        return disabled is None and box is not None and box["width"] > 2 and box["height"] > 2
    except Exception:
        return False


async def _canvas_sig(page, canvas):
    """Hash the composited page pixels clipped to the real Canvas bounds.

    Locator.screenshot() can return a stale/cleared WebGL backing buffer on some
    Chromium GPU paths even while the composited page visibly updates. Clipping
    a normal page screenshot to the Canvas bounds observes what the player sees.
    """
    try:
        box = await canvas.bounding_box()
        if not box or box["width"] < 2 or box["height"] < 2:
            return None, 0
        vp = page.viewport_size or {"width": 1280, "height": 800}
        left = max(0.0, float(box["x"]))
        top = max(0.0, float(box["y"]))
        right = min(float(vp["width"]), float(box["x"] + box["width"]))
        bottom = min(float(vp["height"]), float(box["y"] + box["height"]))
        if right - left < 2 or bottom - top < 2:
            return None, 0
        png = await page.screenshot(type="png", clip={"x": left, "y": top, "width": right-left, "height": bottom-top})
        return hashlib.sha256(png).hexdigest(), len(png)
    except Exception:
        return None, 0


async def _maybe_start(page):
    start = page.locator("[data-testid='game-start-btn']")
    try:
        if await start.count() == 1 and await start.is_visible():
            await start.click()
    except Exception:
        pass


async def _wait_ready(page, ctx, timeout_s=10.0):
    await _maybe_start(page)

    async def pred():
        st = await _state(ctx, "__game")
        return st if st and st.get("ready") is True else None

    return await _wait_for(pred, timeout_s=timeout_s, interval_s=0.1)


async def _reload_fresh(page, ctx):
    # Fresh browser-session setup only; no product control hook is used.
    try:
        await page.evaluate("() => { try { localStorage.clear(); sessionStorage.clear(); } catch(e) {} }")
    except Exception:
        pass
    await page.reload(wait_until="load")
    await page.wait_for_timeout(250)
    return await _wait_ready(page, ctx, timeout_s=10.0)


async def _webgl_info(page):
    try:
        return await page.evaluate("""
        () => {
          const c = document.querySelector('[data-testid="game-canvas"]');
          if (!(c instanceof HTMLCanvasElement)) return {ok:false, reason:'missing-canvas'};
          let gl = null, type = null;
          try { gl = c.getContext('webgl2'); if (gl) type = 'webgl2'; } catch(e) {}
          if (!gl) {
            try { gl = c.getContext('webgl'); if (gl) type = 'webgl'; } catch(e) {}
          }
          return {
            ok: !!gl,
            type,
            width: c.width,
            height: c.height,
            clientWidth: c.clientWidth,
            clientHeight: c.clientHeight,
            drawingBufferWidth: gl ? gl.drawingBufferWidth : 0,
            drawingBufferHeight: gl ? gl.drawingBufferHeight : 0
          };
        }
        """)
    except Exception as e:
        return {"ok": False, "reason": repr(e)}


async def _runtime_observer(page):
    try:
        value = await page.evaluate(
            "() => window.__EVAL_OBSERVER__ ? window.__EVAL_OBSERVER__.snapshot() : null"
        )
        return value if isinstance(value, dict) else {}
    except Exception:
        return {}


def _resource_counter_total(observer, bucket="creates"):
    values = (((observer or {}).get("webgl") or {}).get(bucket) or {})
    return sum(int(v) for v in values.values() if isinstance(v, (int, float)) and math.isfinite(float(v)))


async def _press_hold_button(page, locator, hold_s=0.55):
    box = await locator.bounding_box()
    if not box:
        return False
    x = box["x"] + box["width"] / 2
    y = box["y"] + box["height"] / 2
    await page.mouse.move(x, y)
    await page.mouse.down()
    await asyncio.sleep(hold_s)
    await page.mouse.up()
    return True


def _rank_by_id(ranking, rid):
    if not ranking:
        return None
    for r in ranking.get("ranks", []) or []:
        if isinstance(r, dict) and r.get("id") == rid:
            return r
    return None


def _rank_snapshot(ranking):
    if not ranking:
        return None
    cr = ranking.get("currentRank") or {}
    return {
        "kills": ranking.get("kills"),
        "rank_id": cr.get("id"),
        "rank_index": cr.get("index"),
    }


def _profile(state):
    p = (state or {}).get("difficultyProfile") or {}
    return {
        "rankIndex": p.get("rankIndex"),
        "fireCooldownMs": p.get("fireCooldownMs"),
        "aimErrorDeg": p.get("aimErrorDeg"),
        "moveSpeed": p.get("moveSpeed"),
    }


async def _collect_ai_window(page, ctx, max_s=5.0):
    """Observe real bot shots and positions without controlling bots."""
    initial_combat = await _state(ctx, "__combat") or {}
    seen = {e.get("id") for e in initial_combat.get("recentShots", []) or [] if isinstance(e, dict)}
    shots = {}
    pos_samples = defaultdict(list)
    projectile_samples = defaultdict(list)
    live_counts = []
    player_positions = []
    start = time.monotonic()

    while time.monotonic() - start < max_s:
        now = time.monotonic()
        bots_state = await _state(ctx, "__bots") or {}
        player_state = await _state(ctx, "__player") or {}
        combat_state = await _state(ctx, "__combat") or {}
        pp = _vec(player_state.get("position"))
        if pp:
            player_positions.append(pp)

        live_now = [b for b in bots_state.get("bots", []) or [] if isinstance(b, dict) and b.get("alive") is True]
        live_counts.append(len(live_now))
        for b in live_now:
            bp = _vec(b.get("position"))
            if bp:
                pos_samples[str(b.get("id"))].append((now, bp))

        for projectile in combat_state.get("activeProjectiles", []) or []:
            if not isinstance(projectile, dict) or projectile.get("ownerType") != "bot":
                continue
            ppj = _vec(projectile.get("position"))
            if ppj is not None and projectile.get("id") is not None:
                projectile_samples[str(projectile.get("id"))].append(ppj)

        for s in combat_state.get("recentShots", []) or []:
            if not isinstance(s, dict) or s.get("ownerType") != "bot":
                continue
            sid = s.get("id")
            if sid not in seen:
                shots[sid] = dict(s)

        elapsed = time.monotonic() - start
        enough_motion = any(len(v) >= 6 for v in pos_samples.values())
        if elapsed >= 1.4 and len(shots) >= 3 and enough_motion:
            break
        await asyncio.sleep(0.16)

    duration = max(time.monotonic() - start, 1e-6)
    player_ref = player_positions[-1] if player_positions else None

    aim_dots = []
    per_bot_times = defaultdict(list)
    for s in shots.values():
        origin = _vec(s.get("origin"))
        direction = _vec(s.get("direction"))
        if origin and direction and player_ref:
            aim = _dot(direction, tuple(player_ref[i] - origin[i] for i in range(3)))
            if aim is not None:
                aim_dots.append(aim)
        if _finite_number(s.get("spawnedAt")):
            per_bot_times[str(s.get("ownerId"))].append(float(s.get("spawnedAt")))

    intervals = []
    for times in per_bot_times.values():
        times = sorted(times)
        intervals.extend(b - a for a, b in zip(times, times[1:]) if b > a)

    speeds = []
    for samples in pos_samples.values():
        for (t0, p0), (t1, p1) in zip(samples, samples[1:]):
            dt = t1 - t0
            d = _distance(p0, p1)
            if dt > 1e-4 and d is not None:
                speeds.append(d / dt)

    moving_projectile_distances = []
    for samples in projectile_samples.values():
        if len(samples) >= 2:
            d = _distance(samples[0], samples[-1])
            if d is not None and d > 1e-4:
                moving_projectile_distances.append(d)

    bots_state = await _state(ctx, "__bots") or {}
    avg_live = (sum(live_counts) / len(live_counts)) if live_counts else 0.0
    shot_rate = len(shots) / duration
    return {
        "shots": list(shots.values()),
        "shotCount": len(shots),
        "shotRate": shot_rate,
        "shotRatePerBot": (shot_rate / avg_live) if avg_live > 0 else None,
        "avgLiveBots": avg_live,
        "medianShotInterval": _median(intervals),
        "meanAimDot": _mean(aim_dots),
        "medianMoveSpeed": _median(speeds),
        "movingBotProjectileCount": len(moving_projectile_distances),
        "maxBotProjectileMotion": max(moving_projectile_distances) if moving_projectile_distances else None,
        "profile": _profile(bots_state),
        "duration": duration,
    }


def _ai_pair_harder(before, after):
    if not before or not after:
        return False, "缺少晋级前后 AI 观察窗口，无法比较真实难度变化。"

    pa, pb = before.get("profile", {}), after.get("profile", {})
    candidates = []

    a, b = pa.get("fireCooldownMs"), pb.get("fireCooldownMs")
    if _finite_number(a) and _finite_number(b) and float(b) < float(a) - 1e-9:
        obs_ok = False
        ia, ib = before.get("medianShotInterval"), after.get("medianShotInterval")
        observed_name = "Bot 实际射击间隔"
        observed_before, observed_after = ia, ib
        if _finite_number(ia) and _finite_number(ib) and float(ia) > 0:
            obs_ok = float(ib) <= float(ia) * 0.98
        if not obs_ok:
            ra, rb = before.get("shotRatePerBot"), after.get("shotRatePerBot")
            if _finite_number(ra) and _finite_number(rb):
                obs_ok = float(rb) >= float(ra) * 1.03
                observed_name = "单 Bot 实际射击频率"
                observed_before, observed_after = ra, rb
        candidates.append(("fireCooldownMs", obs_ok, a, b, observed_name, observed_before, observed_after))

    a, b = pa.get("aimErrorDeg"), pb.get("aimErrorDeg")
    if _finite_number(a) and _finite_number(b) and float(b) < float(a) - 1e-9:
        aa, ab = before.get("meanAimDot"), after.get("meanAimDot")
        obs_ok = False
        if _finite_number(aa) and _finite_number(ab):
            obs_ok = float(ab) >= float(aa) + 0.01
            if float(aa) >= 0.985:
                obs_ok = float(ab) >= float(aa) - 0.005
        candidates.append(("aimErrorDeg", obs_ok, a, b, "实际瞄准方向点积", aa, ab))

    a, b = pa.get("moveSpeed"), pb.get("moveSpeed")
    if _finite_number(a) and _finite_number(b) and float(b) > float(a) + 1e-9:
        sa, sb = before.get("medianMoveSpeed"), after.get("medianMoveSpeed")
        obs_ok = False
        if _finite_number(sa) and _finite_number(sb):
            baseline = max(abs(float(sa)), 1e-6)
            obs_ok = float(sb) >= float(sa) + max(0.01, baseline * 0.03)
        candidates.append(("moveSpeed", obs_ok, a, b, "实际移动速度", sa, sb))

    validated = [c for c in candidates if c[1]]
    if validated:
        parts = []
        names = {
            "fireCooldownMs": "射击冷却",
            "aimErrorDeg": "瞄准误差",
            "moveSpeed": "移动速度",
        }
        for name, _, before_param, after_param, obs_name, obs_before, obs_after in validated:
            parts.append(
                f"{names.get(name, name)}参数由 {before_param} 变为 {after_param}，"
                f"{obs_name}由 {obs_before!r} 变为 {obs_after!r}"
            )
        return True, "；".join(parts)

    if not candidates:
        return False, "晋级前后没有发现任何实际使用的非空 AI 参数朝更难方向变化。"
    failed_parts = []
    for name, _, before_param, after_param, obs_name, obs_before, obs_after in candidates:
        failed_parts.append(
            f"{name} 参数虽由 {before_param} 变为 {after_param}，但{obs_name}没有同步变难（{obs_before!r}→{obs_after!r}）"
        )
    return False, "；".join(failed_parts)


# -----------------------------------------------------------------------------
# Main checks
# -----------------------------------------------------------------------------

async def run_checks(page, ctx):
    det = {}

    def setdet(rid, ok, reason):
        det[rid] = (bool(ok), reason)

    game_root = page.locator("#game")
    canvas = page.locator("[data-testid='game-canvas']")
    move_btn = page.locator("[data-testid='move-btn']")
    shoot_btn = page.locator("[data-testid='shoot-btn']")
    rank_btn = page.locator("[data-testid='rank-btn']")
    rank_panel = page.locator("#rankPanel")
    current_rank_el = page.locator("[data-testid='current-rank']")
    progress_el = page.locator("[data-testid='kills-progress']")

    # ---- Initial load / 3D / controls -------------------------------------------------
    ready_state = await _wait_ready(page, ctx)
    root_ok = await _visible(game_root)
    canvas_ok = await _visible(canvas)
    dom_unique = {
        "game": await game_root.count() == 1,
        "canvas": await canvas.count() == 1,
        "move": await move_btn.count() == 1,
        "shoot": await shoot_btn.count() == 1,
        "rank": await rank_btn.count() == 1,
        "rankPanel": await rank_panel.count() == 1,
        "currentRank": await current_rank_el.count() == 1,
        "killsProgress": await progress_el.count() == 1,
    }
    hook_surface = await _hook_surface(page)
    game_time0 = await _state(ctx, "__game")
    await asyncio.sleep(0.24)
    game_time1 = await _state(ctx, "__game")
    elapsed0 = (game_time0 or {}).get("elapsedTime")
    elapsed1 = (game_time1 or {}).get("elapsedTime")
    elapsed_advances = (
        _finite_number(elapsed0) and _finite_number(elapsed1)
        and float(elapsed1) > float(elapsed0) + 0.08
        and (game_time0 or {}).get("kills") == (game_time1 or {}).get("kills")
    )
    r1_ok = bool(ready_state and root_ok and canvas_ok and all(dom_unique.values())
                 and hook_surface.get("ok") and elapsed_advances)
    if r1_ok:
        r1_reason = (
            f"通过：页面加载后游戏根节点和主 Canvas 均可见，8 个核心 DOM 标识符均唯一，"
            f"6 个公开状态接口均只暴露 getState()；运行时间从 {elapsed0:.3f} 增长到 {elapsed1:.3f} 秒，"
            "期间击杀数未被无关时间推进改变。"
        )
    else:
        r1_reason = (
            f"未通过：页面未形成完整可交互初始状态。ready={bool(ready_state)}，根节点可见={root_ok}，"
            f"Canvas 可见={canvas_ok}，DOM 唯一性={dom_unique}，只读接口完整={hook_surface.get('ok')}，"
            f"运行时间观测为 {elapsed0!r}→{elapsed1!r} 秒。"
        )
    setdet(1, r1_ok, r1_reason)

    scene = await _state(ctx, "__scene")
    player = await _state(ctx, "__player")
    bots_state = await _state(ctx, "__bots")
    gl = await _webgl_info(page)
    view = ((scene or {}).get("camera") or {}).get("viewMatrix")
    proj = ((scene or {}).get("camera") or {}).get("projectionMatrix")
    renderer = (scene or {}).get("renderer") or {}
    matrices_ok = (
        isinstance(view, list) and len(view) == 16 and all(_finite_number(x) for x in view)
        and isinstance(proj, list) and len(proj) == 16 and all(_finite_number(x) for x in proj)
    )
    canvas_size_match = (
        _finite_number(renderer.get("width")) and _finite_number(renderer.get("height"))
        and renderer.get("width", 0) > 0 and renderer.get("height", 0) > 0
        and int(renderer.get("width")) == int(gl.get("width", -1))
        and int(renderer.get("height")) == int(gl.get("height", -1))
    )
    dbw, dbh = gl.get("drawingBufferWidth", 0), gl.get("drawingBufferHeight", 0)
    drawing_buffer_match = (
        (not _finite_number(dbw) or not _finite_number(dbh) or int(dbw) <= 0 or int(dbh) <= 0)
        or (int(renderer.get("width")) == int(dbw) and int(renderer.get("height")) == int(dbh))
    )
    scene_dims_ok = canvas_size_match and drawing_buffer_match
    camera_ok, camera_detail = _camera_consistency(scene)
    player3d = _vec((player or {}).get("position")) is not None
    live_bots = [b for b in ((bots_state or {}).get("bots") or []) if isinstance(b, dict) and b.get("alive") is True]
    bots3d = any(_vec(b.get("position")) is not None for b in live_bots)
    renderer_type_ok = renderer.get("type") == gl.get("type") and renderer.get("type") in ("webgl", "webgl2")

    # Independent evaluator-side runtime witness: a real-time 3D game should keep
    # advancing RAF callbacks and issue real WebGL draw calls. After the initial
    # warm-up, listeners/resources should not grow continuously while idle.
    runtime0 = await _runtime_observer(page)
    await asyncio.sleep(0.36)
    runtime1 = await _runtime_observer(page)
    raf0 = (runtime0.get("raf") or {})
    raf1 = (runtime1.get("raf") or {})
    webgl0 = (runtime0.get("webgl") or {})
    webgl1 = (runtime1.get("webgl") or {})
    listeners0 = (runtime0.get("listeners") or {})
    listeners1 = (runtime1.get("listeners") or {})
    raf_delta = int(raf1.get("callbacks", 0)) - int(raf0.get("callbacks", 0))
    draw_delta = int(webgl1.get("drawCalls", 0)) - int(webgl0.get("drawCalls", 0))
    listener_growth = int(listeners1.get("active", 0)) - int(listeners0.get("active", 0))
    resource_growth = _resource_counter_total(runtime1, "creates") - _resource_counter_total(runtime0, "creates")
    raf_total = int(raf1.get("callbacks", 0))
    draw_total = int(webgl1.get("drawCalls", 0))
    runtime_loop_ok = raf_total >= 1 and draw_total >= 1 and int(raf1.get("maxActive", 0)) <= 4
    runtime_stable = listener_growth <= 2 and resource_growth <= 4

    r2_ok = bool(gl.get("ok") and matrices_ok and scene_dims_ok and renderer_type_ok and camera_ok
                 and player3d and bots3d and runtime_loop_ok and runtime_stable)
    if r2_ok:
        r2_reason = (
            f"通过：页面使用 {renderer.get('type')} 实时渲染；Canvas 绘制尺寸为 "
            f"{renderer.get('width')}×{renderer.get('height')}，相机矩阵与相机位置/朝向一致。"
            f"评估侧累计观测到 RAF 回调 {raf_total} 次、WebGL 绘制调用 {draw_total} 次；"
            f"额外 0.36 秒稳定窗口内增量为 RAF {raf_delta}、draw {draw_delta}，"
            f"活动监听器净增长 {listener_growth}、WebGL 资源创建净增长 {resource_growth}，未出现空转或持续泄漏。"
        )
    else:
        r2_reason = (
            f"未通过：3D 实时渲染证据不完整。WebGL={bool(gl.get('ok'))}，矩阵有效={matrices_ok}，"
            f"绘制尺寸匹配={scene_dims_ok}，相机交叉校验={camera_ok}，玩家/Bot 三维坐标={player3d}/{bots3d}；"
            f"评估侧累计 RAF 回调={raf_total}、WebGL 绘制调用={draw_total}；稳定窗口内增量为 RAF {raf_delta}、draw {draw_delta}，"
            f"监听器净增长 {listener_growth}、资源创建净增长 {resource_growth}。"
        )
    setdet(2, r2_ok, r2_reason)

    move_dom_ok = await _enabled_visible(move_btn)
    shoot_dom_ok = await _enabled_visible(shoot_btn)
    rank_dom_ok = await _enabled_visible(rank_btn)
    move_count = await move_btn.count()
    shoot_count = await shoot_btn.count()
    rank_count = await rank_btn.count()
    setdet(3, move_dom_ok,
           "通过：页面存在且仅存在一个可见、可操作的 MOVE 按钮。" if move_dom_ok
           else f"未通过：MOVE 按钮数量为 {move_count}，可见且可操作={move_dom_ok}；要求唯一且可操作。")
    setdet(5, shoot_dom_ok,
           "通过：页面存在且仅存在一个可见、可操作的射击按钮。" if shoot_dom_ok
           else f"未通过：射击按钮数量为 {shoot_count}，可见且可操作={shoot_dom_ok}；要求唯一且可操作。")
    setdet(14, rank_dom_ok,
           "通过：页面存在且仅存在一个可见、可操作的段位入口按钮。" if rank_dom_ok
           else f"未通过：段位按钮数量为 {rank_count}，可见且可操作={rank_dom_ok}；要求唯一且可操作。")

    # Real move + render cross-check. Use an independently projected live Bot as a
    # local framebuffer witness so full-canvas animation alone cannot satisfy R4.
    move_before = await _state(ctx, "__player")
    p0 = _vec((move_before or {}).get("position"))
    sig0, png0 = await _canvas_sig(page, canvas) if canvas_ok else (None, 0)
    move_scene0 = await _state(ctx, "__scene")
    move_bots0 = await _state(ctx, "__bots") or {}
    canvas_box0 = await canvas.bounding_box() if canvas_ok else None
    witness_bot_id = None
    witness_screen0 = None
    witness_sig0 = None
    if canvas_box0:
        for b in move_bots0.get("bots", []) or []:
            if not isinstance(b, dict) or b.get("alive") is not True:
                continue
            bp = _vec(b.get("position"))
            screen = _project_world(move_scene0, bp, canvas_box0)
            if screen and (canvas_box0["x"] + 24 < screen[0] < canvas_box0["x"] + canvas_box0["width"] - 24) and (canvas_box0["y"] + 24 < screen[1] < canvas_box0["y"] + canvas_box0["height"] - 24):
                witness_bot_id = str(b.get("id"))
                witness_screen0 = screen
                witness_sig0, _ = await _region_sig(page, screen[0], screen[1], radius=20)
                break
    observed_moving = False
    move_during = None
    if move_dom_ok:
        try:
            box = await move_btn.bounding_box()
            if box:
                x = box["x"] + box["width"] / 2
                y = box["y"] + box["height"] / 2
                await page.mouse.move(x, y)
                await page.mouse.down()
                for _ in range(6):
                    await asyncio.sleep(0.09)
                    st = await _state(ctx, "__player")
                    if st and st.get("isMoving") is True:
                        observed_moving = True
                    pp = _vec((st or {}).get("position"))
                    if p0 and pp and (_distance(p0, pp) or 0) > 1e-4:
                        move_during = pp
                await page.mouse.up()
                await asyncio.sleep(0.12)
        except Exception:
            try:
                await page.mouse.up()
            except Exception:
                pass
    move_after = await _state(ctx, "__player")
    p1 = _vec((move_after or {}).get("position"))
    sig1, png1 = await _canvas_sig(page, canvas) if canvas_ok else (None, 0)
    move_scene1 = await _state(ctx, "__scene")
    move_bots1 = await _state(ctx, "__bots") or {}
    witness_screen1 = None
    witness_sig_after_old = None
    if witness_bot_id and witness_screen0:
        same_bot = next((b for b in move_bots1.get("bots", []) or [] if isinstance(b, dict) and str(b.get("id")) == witness_bot_id and b.get("alive") is True), None)
        if same_bot:
            witness_screen1 = _project_world(move_scene1, _vec(same_bot.get("position")), canvas_box0)
        witness_sig_after_old, _ = await _region_sig(page, witness_screen0[0], witness_screen0[1], radius=20)
    moved = p0 is not None and p1 is not None and (_distance(p0, p1) or 0) > 1e-4
    render_changed = sig0 is not None and sig1 is not None and sig0 != sig1 and png0 > 100 and png1 > 100
    local_changed = witness_sig0 is not None and witness_sig_after_old is not None and witness_sig0 != witness_sig_after_old
    screen_shift = None
    if witness_screen0 and witness_screen1:
        screen_shift = math.hypot(witness_screen1[0] - witness_screen0[0], witness_screen1[1] - witness_screen0[1])
    # After release, isMoving must turn false and position must stop changing.
    stop0 = await _state(ctx, "__player")
    sp0 = _vec((stop0 or {}).get("position"))
    await asyncio.sleep(0.24)
    stop1 = await _state(ctx, "__player")
    sp1 = _vec((stop1 or {}).get("position"))
    stopped = bool((stop1 or {}).get("isMoving") is False and sp0 and sp1 and (_distance(sp0, sp1) or 0) < 0.08)
    local_witness_ok = screen_shift is not None and screen_shift > 1.0 and (local_changed or render_changed)
    move_distance = _distance(p0, p1)
    stop_distance = _distance(sp0, sp1)
    r4_ok = moved and observed_moving and stopped and render_changed and local_witness_ok
    if r4_ok:
        r4_reason = (
            f"通过：按住 MOVE 后玩家真实移动 {move_distance:.3f} 个世界单位，移动期间 isMoving=true；"
            f"松开后 0.24 秒内仅漂移 {stop_distance:.3f}。同一可见 Bot 的屏幕投影移动 {screen_shift:.2f}px，"
            "并伴随对应 Canvas 画面变化，证明不是只修改自报坐标。"
        )
    else:
        r4_reason = (
            f"未通过：MOVE 操作没有形成完整的真实移动证据。实际位移={move_distance!r}，"
            f"观察到 isMoving=true={observed_moving}，松手后停止={stopped}（残余位移={stop_distance!r}），"
            f"Canvas 发生变化={render_changed}，Bot 局部投影位移={screen_shift!r}px，局部证据有效={local_witness_ok}。"
        )
    setdet(4, r4_ok, r4_reason)

    # ---- Rank panel: initial state ----------------------------------------------------
    ranking_initial_ui = await _state(ctx, "__ranking")
    ranks = (ranking_initial_ui or {}).get("ranks") or []
    br = _rank_by_id(ranking_initial_ui, "bronze")
    si = _rank_by_id(ranking_initial_ui, "silver")
    go = _rank_by_id(ranking_initial_ui, "gold")
    rank_order_ok = bool(
        br and si and go
        and _finite_number(br.get("index")) and _finite_number(si.get("index")) and _finite_number(go.get("index"))
        and float(br["index"]) < float(si["index"]) < float(go["index"])
        and _finite_number(br.get("killsRequired")) and _finite_number(si.get("killsRequired")) and _finite_number(go.get("killsRequired"))
        and float(br["killsRequired"]) < float(si["killsRequired"]) < float(go["killsRequired"])
    )
    if rank_order_ok:
        r17_reason = (f"通过：段位顺序为 Bronze(index={br.get('index')}, kills={br.get('killsRequired')}) → "
                      f"Silver(index={si.get('index')}, kills={si.get('killsRequired')}) → "
                      f"Gold(index={go.get('index')}, kills={go.get('killsRequired')})，层级和累计击杀门槛均严格递增。")
    else:
        r17_reason = f"未通过：Bronze/Silver/Gold 的层级或累计击杀门槛没有严格递增；实际段位数据为 {br!r}、{si!r}、{go!r}。"
    setdet(17, rank_order_ok, r17_reason)

    panel_before_visible = await _visible(rank_panel)
    if rank_dom_ok:
        try:
            await rank_btn.click()
        except Exception:
            pass
    panel_opened = await _wait_for(lambda: _visible(rank_panel), timeout_s=2.5, interval_s=0.08)
    r15_ok = (not panel_before_visible) and bool(panel_opened)
    setdet(15, r15_ok,
           "通过：段位面板初始隐藏，真实点击段位按钮后变为可见。" if r15_ok
           else f"未通过：段位面板点击前可见={panel_before_visible}，点击后可见={bool(panel_opened)}；应由段位按钮从隐藏状态打开。")

    ranks_dom_ok = False
    current_dom_ok = False
    progress_ok = False
    if panel_opened:
        bronze_dom = page.locator("#rankPanel [data-testid='rank-item'][data-rank-id='bronze']")
        silver_dom = page.locator("#rankPanel [data-testid='rank-item'][data-rank-id='silver']")
        gold_dom = page.locator("#rankPanel [data-testid='rank-item'][data-rank-id='gold']")
        ranks_dom_ok = (
            await bronze_dom.count() == 1 and await silver_dom.count() == 1 and await gold_dom.count() == 1
            and await bronze_dom.is_visible() and await silver_dom.is_visible() and await gold_dom.is_visible()
        )
        current_state = (ranking_initial_ui or {}).get("currentRank") or {}
        current_attr = await current_rank_el.get_attribute("data-rank-id") if await current_rank_el.count() == 1 else None
        current_dom_ok = await _visible(current_rank_el) and current_attr == current_state.get("id")

        next_rank = (ranking_initial_ui or {}).get("nextRank")
        kills = (ranking_initial_ui or {}).get("kills")
        if await _visible(progress_el) and isinstance(next_rank, dict) and _finite_number(kills) and _finite_number(next_rank.get("killsRequired")):
            txt = await progress_el.inner_text()
            nums = [int(x) for x in re.findall(r"\d+", txt)]
            progress_ok = int(kills) in nums and int(next_rank["killsRequired"]) in nums
            progress_detail = f"text={txt!r}, nums={nums}, kills={kills}, next={next_rank}"
        else:
            progress_detail = f"progressVisible={await _visible(progress_el)}, ranking={ranking_initial_ui}"
    else:
        progress_detail = "rankPanel not visible"

    rank_item_total = await page.locator("#rankPanel [data-testid='rank-item']").count() if panel_opened else 0
    stable_rank_counts = {
        "bronze": await page.locator("#rankPanel [data-testid='rank-item'][data-rank-id='bronze']").count() if panel_opened else 0,
        "silver": await page.locator("#rankPanel [data-testid='rank-item'][data-rank-id='silver']").count() if panel_opened else 0,
        "gold": await page.locator("#rankPanel [data-testid='rank-item'][data-rank-id='gold']").count() if panel_opened else 0,
    }
    setdet(16, ranks_dom_ok,
           f"通过：段位面板中 Bronze、Silver、Gold 三个稳定段位项均各出现 1 次且可见，共检测到 {rank_item_total} 个段位项。"
           if ranks_dom_ok else
           f"未通过：Bronze/Silver/Gold 稳定段位项的数量分别为 {stable_rank_counts.get('bronze')}/{stable_rank_counts.get('silver')}/{stable_rank_counts.get('gold')}，要求各恰好 1 个且可见。")
    current_state_for_reason = (ranking_initial_ui or {}).get("currentRank") or {}
    setdet(18, current_dom_ok,
           f"通过：界面当前段位标识为 {current_state_for_reason.get('id')}，与实时段位状态一致。"
           if current_dom_ok else
           f"未通过：界面当前段位标识与实时状态不一致；实时段位为 {current_state_for_reason.get('id')!r}。")
    ranking_game_ui = await _state(ctx, "__game")
    consistency_ui = (
        ranking_initial_ui is not None and ranking_game_ui is not None
        and ranking_initial_ui.get("kills") == ranking_game_ui.get("kills")
    )
    r19_ok = progress_ok and consistency_ui
    shown_kills = (ranking_initial_ui or {}).get("kills")
    shown_next = ((ranking_initial_ui or {}).get("nextRank") or {}).get("killsRequired")
    setdet(19, r19_ok,
           f"通过：段位进度界面同时展示当前击杀数 {shown_kills} 和下一段位累计门槛 {shown_next}，并与 game/ranking 实时状态一致。"
           if r19_ok else
           f"未通过：段位进度显示与实时状态不一致或信息不完整。当前击杀={shown_kills!r}，下一门槛={shown_next!r}；{progress_detail}。")

    # Close initial rank overlay by starting a fresh normal page load before combat checks.
    await _reload_fresh(page, ctx)
    canvas = page.locator("[data-testid='game-canvas']")
    move_btn = page.locator("[data-testid='move-btn']")
    shoot_btn = page.locator("[data-testid='shoot-btn']")
    rank_btn = page.locator("[data-testid='rank-btn']")
    rank_panel = page.locator("#rankPanel")
    current_rank_el = page.locator("[data-testid='current-rank']")

    # ---- Autonomous bot combat -------------------------------------------------------
    bots_start = await _state(ctx, "__bots")
    live_start = [b for b in ((bots_start or {}).get("bots") or []) if isinstance(b, dict) and b.get("alive") is True]
    ids = [str(b.get("id")) for b in live_start]
    valid_bot_entities = (
        len(live_start) >= 1 and len(ids) == len(set(ids))
        and all(b.get("id") not in (None, "") and _vec(b.get("position")) is not None for b in live_start)
    )
    combat_runtime = await _runtime_observer(page)
    combat_draw_calls = int(((combat_runtime.get("webgl") or {}).get("drawCalls") or 0))
    rendered_bot_entities = valid_bot_entities and combat_draw_calls > 0
    setdet(8, rendered_bot_entities,
           f"通过：检测到 {len(live_start)} 个具有唯一 ID 和真实三维坐标的存活 Bot，且评估侧已观测到 WebGL 实体绘制调用。"
           if rendered_bot_entities else
           f"未通过：Bot 实体缺少真实战斗/渲染证据。存活 Bot 数={len(live_start)}，ID/三维坐标有效={valid_bot_entities}，独立 WebGL draw call 累计={combat_draw_calls}。")

    bronze_ai = await _collect_ai_window(page, ctx, max_s=5.0)
    current_bot_ids = {str(b.get("id")) for b in live_start}
    autonomous_shots = [s for s in bronze_ai.get("shots", []) if str(s.get("ownerId")) in current_bot_ids]
    target_map = {str(b.get("id")): b.get("targetPlayer") for b in live_start}
    targeted_shots = [s for s in autonomous_shots if target_map.get(str(s.get("ownerId"))) is True]
    moving_bot_projectiles = int(bronze_ai.get("movingBotProjectileCount") or 0)
    r9_ok = len(targeted_shots) > 0 and moving_bot_projectiles > 0
    setdet(9, r9_ok,
           f"通过：未控制 Bot 的观察窗口内出现 {len(targeted_shots)} 次由正在锁定玩家的真实 Bot 发起的射击，并观测到 {moving_bot_projectiles} 个 Bot 弹丸在世界中实际移动。"
           if r9_ok else
           f"未通过：Bot 自主攻击缺少真实运动证据。新 Bot 射击={len(autonomous_shots)}，来自 targetPlayer=true Bot 的射击={len(targeted_shots)}，实际移动的 Bot 弹丸={moving_bot_projectiles}。")

    player_now = await _state(ctx, "__player")
    pp = _vec((player_now or {}).get("position"))
    bot_aim_dots = []
    for s in autonomous_shots:
        origin = _vec(s.get("origin"))
        direction = _vec(s.get("direction"))
        if origin and direction and pp:
            d = _dot(direction, tuple(pp[i] - origin[i] for i in range(3)))
            if d is not None:
                bot_aim_dots.append(d)
    aim_mean = _mean(bot_aim_dots)
    r10_ok = aim_mean is not None and aim_mean > 0.50 and moving_bot_projectiles > 0
    setdet(10, r10_ok,
           f"通过：Bot 射击方向与‘射击起点→玩家位置’方向的平均点积为 {aim_mean:.3f}，且对应攻击存在真实移动弹丸。"
           if r10_ok else
           f"未通过：Bot 攻击未能同时证明真实弹丸运动和朝向玩家。方向点积样本={len(bot_aim_dots)}，平均值={aim_mean!r}，移动弹丸数={moving_bot_projectiles}。")

    # ---- Player shot and projectile motion -------------------------------------------
    combat_before = await _state(ctx, "__combat") or {}
    baseline_shot_ids = {s.get("id") for s in combat_before.get("recentShots", []) or [] if isinstance(s, dict)}
    baseline_kill_keys = {
        _event_key(k, ("botId", "sourceShotId", "happenedAt"))
        for k in combat_before.get("recentKills", []) or [] if isinstance(k, dict)
    }
    baseline_kill_keys.discard(None)

    initial_rank = await _state(ctx, "__ranking")
    initial_game = await _state(ctx, "__game")
    initial_kills = (initial_rank or {}).get("kills")
    initial_current = (initial_rank or {}).get("currentRank") or {}
    initial_next = (initial_rank or {}).get("nextRank") or {}
    rank_history = [_rank_snapshot(initial_rank)] if _rank_snapshot(initial_rank) else []

    shots_by_id = {}
    hit_events = []
    kill_events_by_key = {}

    async def capture_combat_and_rank():
        combat = await _state(ctx, "__combat") or {}
        ranking = await _state(ctx, "__ranking")
        for s in combat.get("recentShots", []) or []:
            if isinstance(s, dict) and s.get("id") is not None:
                shots_by_id[s.get("id")] = dict(s)
        for h in combat.get("recentHits", []) or []:
            if isinstance(h, dict):
                hit_events.append(dict(h))
        for k in combat.get("recentKills", []) or []:
            if not isinstance(k, dict):
                continue
            key = _event_key(k, ("botId", "sourceShotId", "happenedAt"))
            if key is not None and key not in baseline_kill_keys:
                kill_events_by_key[key] = dict(k)
        snap = _rank_snapshot(ranking)
        if snap and (not rank_history or snap != rank_history[-1]):
            rank_history.append(snap)
        return combat, ranking

    shot_sig0, _ = await _canvas_sig(page, canvas) if await _visible(canvas) else (None, 0)
    shot_runtime0 = await _runtime_observer(page)
    player_shot = None
    active_motion = None
    projectile_visual_changed = False
    projectile_screen_shift = None
    projectile_visual_point = None
    if await _enabled_visible(shoot_btn):
        try:
            await shoot_btn.click()
        except Exception:
            pass

        async def find_player_shot():
            combat, _ = await capture_combat_and_rank()
            for s in combat.get("recentShots", []) or []:
                if isinstance(s, dict) and s.get("ownerType") == "player" and s.get("id") not in baseline_shot_ids:
                    return dict(s)
            return None

        player_shot = await _wait_for(find_player_shot, timeout_s=2.0, interval_s=0.035)

        if player_shot:
            sid = player_shot.get("id")
            first_pos = None
            second_pos = None
            first_screen = None
            first_region_sig = None
            canvas_box_shot = await canvas.bounding_box()
            for _ in range(9):
                combat, _ = await capture_combat_and_rank()
                active = next((p for p in combat.get("activeProjectiles", []) or []
                               if isinstance(p, dict) and p.get("id") == sid), None)
                if active:
                    pos = _vec(active.get("position"))
                    scene_now = await _state(ctx, "__scene")
                    screen_now = _project_world(scene_now, pos, canvas_box_shot) if canvas_box_shot else None
                    if pos and first_pos is None:
                        first_pos = pos
                        first_screen = screen_now
                        if first_screen:
                            first_region_sig, _ = await _region_sig(page, first_screen[0], first_screen[1], radius=12)
                    elif pos and first_pos is not None and (_distance(first_pos, pos) or 0) > 0.12:
                        second_pos = pos
                        if first_screen and screen_now:
                            projectile_screen_shift = math.hypot(screen_now[0] - first_screen[0], screen_now[1] - first_screen[1])
                            later_region_sig, _ = await _region_sig(page, first_screen[0], first_screen[1], radius=12)
                            projectile_visual_changed = bool(first_region_sig and later_region_sig and first_region_sig != later_region_sig)
                            projectile_visual_point = first_screen
                        break
                await asyncio.sleep(0.035)
            active_motion = _distance(first_pos, second_pos) if first_pos and second_pos else None
            await asyncio.sleep(0.12)
            await capture_combat_and_rank()

    shot_sig1, _ = await _canvas_sig(page, canvas) if await _visible(canvas) else (None, 0)
    player_state_for_shot = await _state(ctx, "__player") or {}
    shot_origin = _vec((player_shot or {}).get("origin"))
    shot_dir = _vec((player_shot or {}).get("direction"))
    player_pos_for_shot = _vec(player_state_for_shot.get("position"))
    bots_for_shot = await _state(ctx, "__bots") or {}
    bot_positions_for_shot = [_vec(b.get("position")) for b in bots_for_shot.get("bots", []) or [] if isinstance(b, dict) and b.get("alive") is True]
    bot_positions_for_shot = [p for p in bot_positions_for_shot if p is not None]
    d_player_origin = _distance(shot_origin, player_pos_for_shot)
    d_nearest_bot_origin = min((_distance(shot_origin, bp) for bp in bot_positions_for_shot), default=None) if shot_origin else None
    origin_plausible = (
        d_player_origin is not None
        and (d_nearest_bot_origin is None or d_player_origin <= d_nearest_bot_origin + 1e-6)
        and _norm(shot_dir) is not None
    )
    player_forward_for_shot = _vec(player_state_for_shot.get("forward"))
    forward_dot = _dot(player_forward_for_shot, shot_dir) if player_forward_for_shot and shot_dir else None
    shot_owner_ok = bool(
        player_shot
        and player_shot.get("ownerType") == "player"
        and player_shot.get("ownerId") == player_state_for_shot.get("id")
        and origin_plausible
        and forward_dot is not None and forward_dot > 0.70
    )
    shot_runtime1 = await _runtime_observer(page)
    shot_draw_delta = int((((shot_runtime1.get("webgl") or {}).get("drawCalls")) or 0)) - int((((shot_runtime0.get("webgl") or {}).get("drawCalls")) or 0))
    shot_canvas_changed = bool(shot_sig0 and shot_sig1 and shot_sig0 != shot_sig1)
    r6_ok = shot_owner_ok and shot_canvas_changed and shot_draw_delta > 0
    if r6_ok:
        r6_reason = (
            f"通过：点击射击按钮后生成玩家射击 {player_shot.get('id')}；ownerId 与玩家 ID 一致，"
            f"射击方向与玩家武器前向的点积为 {forward_dot:.3f}，起点距离玩家 {d_player_origin:.3f}。"
            f"同一时间窗 Canvas 发生变化且评估侧记录到 {shot_draw_delta} 次 WebGL 绘制调用。"
        )
    else:
        r6_reason = (
            f"未通过：点击射击按钮后没有形成完整的真实玩家射击证据。检测到新玩家 shot={bool(player_shot)}，"
            f"owner/起点/朝向一致={shot_owner_ok}，朝向点积={forward_dot!r}，Canvas 变化={shot_canvas_changed}，"
            f"同期 WebGL 绘制调用增量={shot_draw_delta}。"
        )
    setdet(6, r6_ok, r6_reason)

    completed_motion = None
    if player_shot:
        latest = shots_by_id.get(player_shot.get("id"), player_shot)
        completed_motion = _distance(_vec(latest.get("origin")), _vec(latest.get("lastPosition")))
    projectile_moved = (
        (active_motion is not None and active_motion > 1e-5)
        or (completed_motion is not None and completed_motion > 1e-5)
    )
    projectile_visual_ok = projectile_visual_changed and projectile_screen_shift is not None and projectile_screen_shift > 0.8
    impact_visual_changed = False
    impact_point = None
    # Very short player shots can hit before Playwright catches an active projectile.
    # In that case use the independently projected impact location as local render evidence:
    # the hit/paint mark or defeated Bot must change that small framebuffer region over time.
    if player_shot and projectile_moved and not projectile_visual_ok:
        latest = shots_by_id.get(player_shot.get("id"), player_shot)
        impact = _vec(latest.get("lastPosition"))
        scene_impact = await _state(ctx, "__scene")
        canvas_box_impact = await canvas.bounding_box()
        impact_screen = _project_world(scene_impact, impact, canvas_box_impact) if canvas_box_impact else None
        if impact_screen:
            impact_point = impact_screen
            impact_sig0, _ = await _region_sig(page, impact_screen[0], impact_screen[1], radius=16)
            await asyncio.sleep(1.75)
            impact_sig1, _ = await _region_sig(page, impact_screen[0], impact_screen[1], radius=16)
            impact_visual_changed = bool(impact_sig0 and impact_sig1 and impact_sig0 != impact_sig1)
    trajectory_screen_shift = None
    if player_shot:
        latest_for_projection = shots_by_id.get(player_shot.get("id"), player_shot)
        origin_for_projection = _vec(latest_for_projection.get("origin"))
        end_for_projection = _vec(latest_for_projection.get("lastPosition"))
        scene_for_projection = await _state(ctx, "__scene")
        box_for_projection = await canvas.bounding_box()
        a = _project_world(scene_for_projection, origin_for_projection, box_for_projection) if box_for_projection else None
        b = _project_world(scene_for_projection, end_for_projection, box_for_projection) if box_for_projection else None
        if a and b:
            trajectory_screen_shift = math.hypot(b[0] - a[0], b[1] - a[1])
    projectile_visual_ok = (
        projectile_visual_ok
        or impact_visual_changed
        or (trajectory_screen_shift is not None and trajectory_screen_shift > 1.0 and shot_sig0 is not None and shot_sig1 is not None and shot_sig0 != shot_sig1)
    )
    r7_ok = bool(player_shot and projectile_moved and projectile_visual_ok)
    motion_value = active_motion if active_motion is not None else completed_motion
    visual_shift = projectile_screen_shift if projectile_screen_shift is not None else trajectory_screen_shift
    setdet(7, r7_ok,
           f"通过：玩家弹丸 {player_shot.get('id')} 在 3D 世界中移动约 {motion_value:.3f} 个单位，世界轨迹投影产生约 {visual_shift:.2f}px 的屏幕位移或命中点局部画面变化。"
           if r7_ok else
           f"未通过：玩家射击没有同时证明真实弹丸运动和对应渲染变化。弹丸存在={bool(player_shot)}，世界位移={motion_value!r}，屏幕投影位移={visual_shift!r}px，局部弹丸变化={projectile_visual_changed}，命中区域变化={impact_visual_changed}。")

    # ---- Progression by real shooting ------------------------------------------------
    async def shoot_until_rank(target_rank_id, timeout_s):
        end = time.monotonic() + timeout_s
        last_ranking = await _state(ctx, "__ranking")
        while time.monotonic() < end:
            cr = (last_ranking or {}).get("currentRank") or {}
            if cr.get("id") == target_rank_id:
                return last_ranking
            try:
                if await _enabled_visible(shoot_btn):
                    await shoot_btn.click()
                else:
                    break
            except Exception:
                break
            await asyncio.sleep(0.105)
            _, last_ranking = await capture_combat_and_rank()
        return last_ranking

    silver_state = await shoot_until_rank("silver", timeout_s=45.0)
    reached_silver = ((silver_state or {}).get("currentRank") or {}).get("id") == "silver"

    # Freeze player input and observe the now-live Silver AI before continuing.
    silver_ai = await _collect_ai_window(page, ctx, max_s=5.0) if reached_silver else None
    await capture_combat_and_rank()

    gold_state = await shoot_until_rank("gold", timeout_s=60.0) if reached_silver else silver_state
    reached_gold = ((gold_state or {}).get("currentRank") or {}).get("id") == "gold"
    gold_ai = await _collect_ai_window(page, ctx, max_s=5.0) if reached_gold else None
    await capture_combat_and_rank()

    # Let any already-fired player projectiles settle before final kill accounting.
    # This avoids racing a late projectile that increments ranking.kills between the
    # last combat snapshot and the final accounting read. No new player input is sent.
    settle_deadline = time.monotonic() + 3.0
    stable_since = None
    last_signature = None
    while time.monotonic() < settle_deadline:
        combat_now, ranking_now = await capture_combat_and_rank()
        active_player = [p for p in combat_now.get("activeProjectiles", []) or []
                         if isinstance(p, dict) and p.get("ownerType") == "player"]
        signature = (
            (ranking_now or {}).get("kills"),
            len([k for k in combat_now.get("recentKills", []) or [] if isinstance(k, dict) and k.get("creditedTo") == "player"]),
            len(active_player),
        )
        if not active_player and signature == last_signature:
            stable_since = stable_since or time.monotonic()
            if time.monotonic() - stable_since >= 0.35:
                break
        else:
            stable_since = None
        last_signature = signature
        await asyncio.sleep(0.08)

    # R11: causal shot -> hit -> kill, and killed ID no longer remains alive.
    kill_events = list(kill_events_by_key.values())
    live_end_state = await _state(ctx, "__bots") or {}
    live_end_ids = {
        str(b.get("id")) for b in live_end_state.get("bots", []) or []
        if isinstance(b, dict) and b.get("alive") is True
    }
    kill_chain = None
    for k in kill_events:
        if k.get("creditedTo") != "player":
            continue
        bot_id = str(k.get("botId"))
        sid = k.get("sourceShotId")
        s = shots_by_id.get(sid)
        hit = next((h for h in hit_events
                    if h.get("shotId") == sid and str(h.get("targetId")) == bot_id
                    and h.get("attackerType") == "player"), None)
        if (s and s.get("ownerType") == "player" and hit
                and str(s.get("hitEntityId")) == bot_id
                and str(hit.get("targetId")) == bot_id
                and str(k.get("sourceShotId")) == str(s.get("id"))
                and bot_id not in live_end_ids):
            kill_chain = {"kill": k, "shot": s, "hit": hit}
            break
    r11_ok = kill_chain is not None and rendered_bot_entities
    if r11_ok:
        kc_bot = str(kill_chain["kill"].get("botId"))
        kc_shot = str(kill_chain["shot"].get("id"))
        r11_reason = (f"通过：玩家射击 {kc_shot} 的 hitEntityId、命中事件和击杀事件均指向 Bot {kc_bot}，"
                      "且该 Bot 在击杀后不再出现在存活实体列表中；Bot 场景渲染已由评估侧 WebGL draw call 交叉确认。")
    else:
        r11_reason = (f"未通过：未找到完整的真实 shot→hitEntityId→hit→kill→Bot 移除因果链。"
                      f"新增击杀事件数={len(kill_events)}，结束时存活 Bot 数={len(live_end_ids)}，真实 Bot 渲染证据={rendered_bot_entities}。")
    setdet(11, r11_ok, r11_reason)

    # R12: exact unique accounting across the whole real progression session.
    final_ranking = await _state(ctx, "__ranking")
    final_game = await _state(ctx, "__game")
    final_kills = (final_ranking or {}).get("kills")
    new_player_kills = [k for k in kill_events if k.get("creditedTo") == "player"]
    unique_bot_ids = {str(k.get("botId")) for k in new_player_kills}
    unique_event_keys = {_event_key(k, ("botId", "sourceShotId", "happenedAt")) for k in new_player_kills}
    delta = None
    if _finite_number(initial_kills) and _finite_number(final_kills):
        delta = int(final_kills) - int(initial_kills)
    accounting_ok = (
        delta is not None and delta >= 1
        and delta == len(unique_bot_ids)
        and len(new_player_kills) == len(unique_bot_ids)
        and len(unique_event_keys) == len(new_player_kills)
        and (final_game or {}).get("kills") == final_kills
    )
    setdet(12, accounting_ok,
           f"通过：本轮击杀从 {initial_kills} 增加到 {final_kills}，增量 {delta} 与 {len(unique_bot_ids)} 个唯一 Bot 和 {len(new_player_kills)} 条击杀事件完全一致，同一 Bot 未重复结算。"
           if accounting_ok else
           f"未通过：击杀结算不满足唯一性。初始/最终击杀={initial_kills!r}/{final_kills!r}，增量={delta!r}，唯一 Bot={len(unique_bot_ids)}，玩家击杀事件={len(new_player_kills)}，game.kills={None if not final_game else final_game.get('kills')!r}。")

    # R13: Bronze -> Silver -> Gold is actually reachable through the above real clicks.
    r13_ok = reached_silver and reached_gold and r11_ok and rendered_bot_entities
    setdet(13, r13_ok,
           f"通过：只使用公开射击按钮完成真实战斗后，段位依次到达 Silver 和 Gold；期间观测到 {len(unique_bot_ids)} 个唯一 Bot 淘汰，并已验证真实击杀因果链。"
           if r13_ok else
           f"未通过：正常战斗晋级路径未形成完整真实证据。到达 Silver={reached_silver}、到达 Gold={reached_gold}、真实击杀链={r11_ok}、Bot 渲染证据={rendered_bot_entities}、唯一淘汰数={len(unique_bot_ids)}。")

    # R20: before the initial next threshold, rank must remain Bronze.
    threshold = initial_next.get("killsRequired")
    initial_bronze_ok = (
        initial_current.get("id") == "bronze"
        and initial_kills == 0
        and _finite_number(threshold) and float(threshold) > 0
    )
    premature = []
    if _finite_number(threshold):
        for snap in rank_history:
            if snap and _finite_number(snap.get("kills")) and float(snap["kills"]) < float(threshold):
                if snap.get("rank_id") != "bronze":
                    premature.append(snap)
    r20_ok = initial_bronze_ok and not premature
    setdet(20, r20_ok,
           f"通过：新局从 Bronze、0 击杀开始；Silver 门槛为 {threshold}，在击杀数低于门槛的所有观测点中段位始终保持 Bronze。"
           if r20_ok else
           f"未通过：存在提前晋级或初始状态错误。初始段位={initial_current.get('id')!r}，初始击杀={initial_kills!r}，Silver 门槛={threshold!r}，提前晋级观测数={len(premature)}。")

    # R21: first threshold crossing must land on exactly the adjacent next rank.
    crossing = None
    if _finite_number(threshold):
        for snap in rank_history:
            if snap and _finite_number(snap.get("kills")) and float(snap["kills"]) >= float(threshold):
                crossing = snap
                break
    expected_next_id = initial_next.get("id")
    expected_index = (float(initial_current.get("index")) + 1) if _finite_number(initial_current.get("index")) else None
    promotion_ok = bool(
        crossing and crossing.get("rank_id") == expected_next_id
        and expected_index is not None and _finite_number(crossing.get("rank_index"))
        and float(crossing["rank_index"]) == expected_index
    )
    setdet(21, promotion_ok,
           f"通过：击杀数首次达到门槛 {threshold} 时，段位从 Bronze 只提升一级到 {expected_next_id}，没有跳级。"
           if promotion_ok else
           f"未通过：首次达到击杀门槛后的段位不是相邻下一段。门槛={threshold!r}，期望段位={expected_next_id!r}，首次越线观测={crossing!r}。")

    # R23: each real promotion in the required 3-rank path must make live AI harder.
    bs_ok, bs_reason = _ai_pair_harder(bronze_ai, silver_ai) if reached_silver else (False, "Silver not reached")
    sg_ok, sg_reason = _ai_pair_harder(silver_ai, gold_ai) if reached_gold else (False, "Gold not reached")
    rank_index_profiles_ok = False
    if bronze_ai and silver_ai and gold_ai:
        bi = bronze_ai.get("profile", {}).get("rankIndex")
        si_idx = silver_ai.get("profile", {}).get("rankIndex")
        gi = gold_ai.get("profile", {}).get("rankIndex")
        rank_index_profiles_ok = all(_finite_number(x) for x in (bi, si_idx, gi)) and float(bi) < float(si_idx) < float(gi)
    r23_ok = bs_ok and sg_ok and rank_index_profiles_ok
    if r23_ok:
        r23_reason = (
            "通过：Bronze→Silver 与 Silver→Gold 两次晋级都观察到实际 AI 难度参数朝更难方向变化，"
            f"并由真实射击频率、瞄准精度或移动速度窗口交叉验证；三个阶段 rankIndex 严格递增。"
            f"第一次验证：{bs_reason}；第二次验证：{sg_reason}。"
        )
    else:
        r23_reason = (
            "未通过：至少一次晋级没有同时满足‘难度参数变难’和‘真实行为同步变难’。"
            f"Bronze→Silver：{bs_reason}；Silver→Gold：{sg_reason}；rankIndex 严格递增={rank_index_profiles_ok}。"
        )
    setdet(23, r23_ok, r23_reason)

    # ---- Post-promotion UI sync + visual evidence ------------------------------------
    post_rank = await _state(ctx, "__ranking")
    post_game = await _state(ctx, "__game")

    # Capture clean gameplay visuals before opening the rank overlay.
    await ctx.vlm(
        24,
        "当前截图是否明确呈现鸭子主题的玩家/角色（必须能看到鸭嘴、鸭蹼、羽毛等明确鸭子特征），并且武器具有明显的彩弹/颜料枪/喷漆元素？如果没有鸭子特征、角色只是普通几何体或人类、或武器是普通枪支/激光枪而无颜料特征，输出 NO。"
    )
    await ctx.vlm(
        25,
        "当前真实游戏画面是否明显是 3D 森林环境（能清楚看到多棵树木、植被或自然地面）？如果场景是室内、空白、纯色背景、城市、沙漠等非森林环境，或只有一两棵孤立的树没有形成森林氛围，输出 NO。"
    )

    post_panel_open = False
    try:
        if await _enabled_visible(rank_btn):
            await rank_btn.click()
            post_panel_open = bool(await _wait_for(lambda: _visible(rank_panel), timeout_s=2.5, interval_s=0.08))
    except Exception:
        post_panel_open = False

    current_attr = await current_rank_el.get_attribute("data-rank-id") if await current_rank_el.count() == 1 else None
    current_post = (post_rank or {}).get("currentRank") or {}
    ui_sync_ok = (
        reached_silver
        and post_panel_open
        and current_attr == current_post.get("id")
        and (post_rank or {}).get("kills") == (post_game or {}).get("kills")
    )
    setdet(22, ui_sync_ok,
           f"通过：真实晋级后重新打开段位面板，界面当前段位为 {current_attr}，与实时段位一致；ranking.kills 与 game.kills 均为 {(post_rank or {}).get('kills')}。"
           if ui_sync_ok else
           f"未通过：晋级后的界面与实时状态没有同步。面板已打开={post_panel_open}，界面段位={current_attr!r}，实时段位={current_post.get('id')!r}，ranking/game 击杀={(post_rank or {}).get('kills')!r}/{(post_game or {}).get('kills')!r}。")

    await ctx.vlm(
        26,
        "当前截图中的游戏整体视觉和已打开的段位界面是否具有明显完成度与统一的游戏化设计？请同时考虑：3D 场景是否有一致的视觉风格、HUD/按钮/段位面板是否经过设计排版、文字是否清晰可读。如果存在大面积浏览器默认样式（白底黑字未美化）、控件遮挡重叠、排版混乱、文字不可读、段位面板只是一行纯文本等明显半成品迹象，输出 NO。"
    )

    # Emit exactly one deterministic result for every non-VLM rubric.
    for r in RUBRIC:
        if r["kind"] == "vlm":
            continue
        rid = r["id"]
        ok, reason = det.get(rid, (False, "未执行到该验收项或缺少必要状态。"))
        ctx.check(rid, ok, reason)


if __name__ == "__main__":
    import web_ut_harness
    web_ut_harness.main(__import__("web_ut"))
