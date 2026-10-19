#!/usr/bin/env python3
from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Any

BASE_DIR = Path(__file__).resolve().parent
MAPPING = json.loads((BASE_DIR / 'mapping.json').read_text(encoding='utf-8'))
RUBRIC = MAPPING['rubrics']

EXPECTED_HOOKS = [
    'window.__bus.getState()',
    'window.__game.getState()',
    'window.__vehicle.getState()',
    'window.__route.getState()',
    'window.__passengers.getState()',
    'window.__traffic.getState()',
    'window.__world.getState()',
    'window.__camera.getState()',
    'window.__input.getState()',
    'window.__renderer.getState()',
    'window.__performance.getState()',
    'window.__settings.getState()',
]

assert MAPPING.get('exposed_hooks') == EXPECTED_HOOKS
assert [r['id'] for r in RUBRIC] == list(range(1, len(RUBRIC) + 1))
assert all(set(r) == {'id', 'text', 'kind', 'how'} for r in RUBRIC)
assert all(r['kind'] in {'dom', 'state', 'vlm'} for r in RUBRIC)


async def get(page, hook: str) -> Any:
    return await page.evaluate(
        "name => window[name] && typeof window[name].getState === 'function' ? window[name].getState() : null",
        hook,
    )


async def all_states(page) -> dict[str, Any]:
    names = ['__bus','__game','__vehicle','__route','__passengers','__traffic','__world','__camera','__input','__renderer','__performance','__settings']
    return await page.evaluate(
        "names => Object.fromEntries(names.map(n => [n, window[n]?.getState ? window[n].getState() : null]))",
        names,
    )


async def visible_click(page, selector: str) -> bool:
    loc = page.locator(selector)
    for i in range(await loc.count()):
        item = loc.nth(i)
        try:
            if await item.is_visible():
                await item.click(timeout=1800)
                return True
        except Exception:
            continue
    return False


async def ensure_playing(page):
    g = await get(page, '__game')
    if not g or g.get('phase') == 'menu':
        clicked = await visible_click(page, '[data-action="play"]')
        if not clicked:
            await _fallback_open_game(page)
        await page.wait_for_timeout(180)
    elif g.get('phase') == 'paused':
        await page.keyboard.press('p')
        await page.wait_for_timeout(120)
        g2 = await get(page, '__game')
        if g2 and g2.get('phase') == 'paused':
            for selector in ('button:has-text("Resume")', 'button:has-text("Continue")', 'button:has-text("Lanjut")'):
                if await visible_click(page, selector):
                    break
            await page.wait_for_timeout(120)
    elif g.get('phase') == 'complete':
        clicked = await visible_click(page, '[data-action="reset"]')
        if not clicked:
            for selector in ('button:has-text("Reset")', 'button:has-text("Restart")', 'button:has-text("Again")'):
                if await visible_click(page, selector):
                    break
        await page.wait_for_timeout(180)


async def reset_game(page):
    await ensure_playing(page)
    clicked = await visible_click(page, '[data-action="reset"]')
    if not clicked:
        for selector in ('button:has-text("Reset")', 'button:has-text("Restart")', 'button:has-text("Reset Route")'):
            if await visible_click(page, selector):
                break
    for _ in range(20):
        await page.wait_for_timeout(70)
        v, r, p = await get(page, '__vehicle'), await get(page, '__route'), await get(page, '__passengers')
        if v and r and p and r.get('currentStopIndex') == 0 and p.get('boardedTotal') == 0 and abs(v.get('position',{}).get('z',999)-20) < .2:
            return


async def key_hold(page, key: str, ms: int):
    await page.keyboard.down(key)
    await page.wait_for_timeout(ms)
    await page.keyboard.up(key)


async def drive_to_first_stop(page) -> tuple[bool, dict[str, Any]]:
    await reset_game(page)
    await set_quality(page, prefer='low')
    # Drive by observable route progress rather than a fixed number of wall-clock pulses.
    # This keeps the test stable when Cinematic WebGL renders more slowly on software GPUs.
    await page.keyboard.down('w')
    try:
        waited = 0
        while waited < 6500:
            route = await get(page, '__route')
            veh = await get(page, '__vehicle')
            world = await get(page, '__world')
            if not route or not veh or not world:
                return False, {}
            if route.get('nextStopDistance', 999) <= 13.5:
                break
            # Follow the live road centre using the same production A/D steering path.
            lateral = veh.get('position', {}).get('x', 0) - world.get('roadCenter', 0)
            if lateral > .65:
                await page.keyboard.press('a')
            elif lateral < -.65:
                await page.keyboard.press('d')
            await page.wait_for_timeout(70)
            waited += 70
    finally:
        await page.keyboard.up('w')

    # Brake until the actual vehicle is both inside the stop zone and nearly stationary.
    await page.keyboard.down('s')
    try:
        waited = 0
        while waited < 4500:
            veh = await get(page, '__vehicle')
            route = await get(page, '__route')
            if veh and route and route.get('atStop') and abs(veh.get('speedKph', 99)) < 2.2:
                break
            await page.wait_for_timeout(55)
            waited += 55
    finally:
        await page.keyboard.up('s')

    veh, route = await get(page, '__vehicle'), await get(page, '__route')
    if not (veh and route and route.get('atStop')):
        return False, {'vehicle':veh,'route':route}

    # Settle using the normal parking brake so boarding starts from a deterministic safe stop.
    if not veh.get('parkingBrake'):
        await page.keyboard.press('Space')
    waited = 0
    while waited < 1800:
        veh = await get(page, '__vehicle')
        route = await get(page, '__route')
        if veh and route and route.get('atStop') and abs(veh.get('speedKph',99)) < .8:
            return True, {'vehicle':veh,'route':route}
        await page.wait_for_timeout(50)
        waited += 50
    return False, {'vehicle':veh,'route':route}


async def service_first_stop(page) -> dict[str, Any]:
    ok, _ = await drive_to_first_stop(page)
    before = {'route': await get(page,'__route'), 'passengers': await get(page,'__passengers'), 'game': await get(page,'__game')}
    if not ok:
        return {'ok':False,'before':before,'after':before}
    veh = await get(page, '__vehicle')
    if not veh.get('doorOpen'):
        await page.keyboard.press('e')

    # Wait for the real production boarding lifecycle instead of assuming it finishes in 1.45 wall seconds.
    waited = 0
    after = None
    while waited < 5000:
        after = {'route': await get(page,'__route'), 'passengers': await get(page,'__passengers'), 'game': await get(page,'__game'), 'vehicle': await get(page,'__vehicle')}
        if (after['route'].get('currentStopIndex') == 1 and
            after['passengers'].get('boardedTotal',0) > before['passengers'].get('boardedTotal',0)):
            return {'ok':True,'before':before,'after':after}
        await page.wait_for_timeout(70)
        waited += 70
    return {'ok':False,'before':before,'after':after or before}


def _xyz(value):
    if isinstance(value, dict):
        try: return float(value.get('x',0)), float(value.get('y',0)), float(value.get('z',0))
        except (TypeError, ValueError): return None
    if isinstance(value,(list,tuple)) and len(value)>=3:
        try: return float(value[0]), float(value[1]), float(value[2])
        except (TypeError, ValueError): return None
    return None

async def _camera_candidates(page, max_cycles: int = 10):
    seen={}
    for _ in range(max_cycles):
        cam,veh=await get(page,'__camera'),await get(page,'__vehicle')
        if not cam or not veh: break
        mode=str(cam.get('mode',f'view-{len(seen)}'))
        if mode in seen: break
        cp,tp,vp=_xyz(cam.get('position')),_xyz(cam.get('target')),_xyz(veh.get('position'))
        if vp: vp=(vp[0],1.4,vp[2])
        dist=math.dist(cp,vp) if cp and vp else math.inf
        look=math.dist(tp,vp) if tp and vp else 0.0
        try: cockpit=await page.locator('[data-cockpit]').is_visible()
        except Exception: cockpit=False
        seen[mode]={'mode':mode,'distance':dist,'lookahead':look,'cockpit':cockpit}
        await page.keyboard.press('c'); await page.wait_for_timeout(90)
    return list(seen.values())

async def _cycle_to_mode(page,target:str,max_cycles:int=12)->bool:
    for _ in range(max_cycles):
        cam=await get(page,'__camera')
        if cam and str(cam.get('mode'))==target:return True
        await page.keyboard.press('c');await page.wait_for_timeout(90)
    return False

async def select_camera_role(page, role:str)->bool:
    candidates=await _camera_candidates(page)
    if not candidates:return False
    cockpit_guess=max(candidates,key=lambda c:(1000 if c['cockpit'] else 0)+c['lookahead']/max(.5,c['distance']))
    if role=='cockpit': chosen=cockpit_guess
    else:
        exterior=[c for c in candidates if c['mode']!=cockpit_guess['mode']] or candidates
        chosen=min(exterior,key=lambda c:c['distance']) if role=='exterior_close' else max(exterior,key=lambda c:(c['lookahead'],c['distance']))
    return await _cycle_to_mode(page,chosen['mode'])


async def wait_game_phase(page, phase: str, timeout_ms: int = 1600) -> bool:
    waited = 0
    while waited <= timeout_ms:
        g = await get(page, '__game')
        if g and g.get('phase') == phase:
            return True
        await page.wait_for_timeout(40)
        waited += 40
    return False


async def quality_options(page):
    sel=page.locator('.hud-quality [data-setting="quality"]')
    try:
        if not await sel.count() or not await sel.first.is_visible():return []
        return await sel.first.locator('option').evaluate_all("opts => opts.map(o => o.value)")
    except Exception:return []

async def set_quality(page,target:str|None=None,prefer:str|None=None)->bool:
    sel=page.locator('.hud-quality [data-setting="quality"]')
    try:
        if not await sel.count() or not await sel.first.is_visible():return False
        options=await quality_options(page)
        if not options:return False
        chosen=target if target in options else None
        if chosen is None and prefer in {'low','high'}:
            scored=[]
            for value in options:
                await sel.first.select_option(value);await page.wait_for_timeout(55)
                sett,ren=await get(page,'__settings'),await get(page,'__renderer');source=sett or ren or {}
                ratio=source.get('pixelRatio');distance=source.get('renderDistance')
                ratio=float(ratio) if isinstance(ratio,(int,float)) and not isinstance(ratio,bool) else 1.0
                distance=float(distance) if isinstance(distance,(int,float)) and not isinstance(distance,bool) else 0.0
                scored.append((ratio*1000.0+distance,value))
            chosen=(min if prefer=='low' else max)(scored)[1]
        chosen=chosen or options[0]
        if await sel.first.input_value()!=chosen:
            await sel.first.select_option(chosen);await page.wait_for_timeout(100)
        return True
    except Exception:return False


async def wait_render_frames(page, minimum_delta: int = 6, timeout_ms: int = 2200) -> bool:
    """Wait for the real production renderer to commit several fresh frames after a visual-state change."""
    start = await get(page, '__renderer')
    base = int((start or {}).get('frame', 0))
    waited = 0
    while waited < timeout_ms:
        await page.wait_for_timeout(50)
        waited += 50
        cur = await get(page, '__renderer')
        if (cur and cur.get('frame', 0) >= base + minimum_delta and
            cur.get('drawCalls', 0) > 0 and cur.get('canvas', {}).get('width', 0) >= 900):
            return True
    return False


async def drive_to_visual_anchor(page, target_z: float, max_ms: int = 5200) -> bool:
    """Reach a repeatable route position through normal throttle/steering, independent of render cadence."""
    await reset_game(page)
    await set_quality(page, prefer='low')
    await page.keyboard.down('w')
    try:
        waited = 0
        while waited < max_ms:
            veh = await get(page, '__vehicle')
            world = await get(page, '__world')
            if not veh or not world:
                return False
            z = veh.get('position', {}).get('z', -999)
            if z >= target_z:
                break
            lateral = veh.get('position', {}).get('x', 0) - world.get('roadCenter', 0)
            if lateral > .60:
                await page.keyboard.press('a')
            elif lateral < -.60:
                await page.keyboard.press('d')
            await page.wait_for_timeout(55)
            waited += 55
    finally:
        await page.keyboard.up('w')
    veh = await get(page, '__vehicle')
    return bool(veh and veh.get('position', {}).get('z', -999) >= target_z)


async def run_checks_strict(page, ctx):
    # 1-2: first viewport / instructions.
    home_text = await page.locator('body').inner_text()
    play_visible = False
    for selector in ('[data-action="play"]', 'button:has-text("Drive")', 'button:has-text("Start")', 'button:has-text("Play")', 'button:has-text("Mulai")', 'button:has-text("Enter")'):
        try:
            loc = page.locator(selector)
            if await loc.count() and await loc.first.is_visible():
                play_visible = True
                break
        except Exception:
            pass
    ctx.check(1, play_visible and 'BUS' in home_text.upper(), 'branded home and visible primary drive control')
    lower_home=home_text.lower(); required=['w throttle','s brake','passenger doors','camera','pause','reset route']; steering_copy=(('a steer left' in lower_home and 'd steer right' in lower_home) or 'a/d steer' in lower_home)
    ctx.check(2, all(s in lower_home for s in required) and steering_copy, 'player-facing driving and stop protocol is present')

    await ensure_playing(page)
    # Deterministic checks run at the product's Balanced preset; VLM checks switch back to Cinematic.
    # This reduces software-GPU load without skipping or weakening any gameplay assertion.
    await set_quality(page, prefer='low')

    # 3: WebGL + frame progression.
    r0 = await get(page,'__renderer'); await page.wait_for_timeout(180); r1 = await get(page,'__renderer')
    webgl = await page.evaluate("() => { const c=document.querySelector('canvas'); const g=c && (c.getContext('webgl')||c.getContext('experimental-webgl')); return !!g; }")
    ctx.check(3, bool(webgl and r0 and r1 and r1.get('backend')=='WebGL' and r1.get('frame',0)>r0.get('frame',0) and r1.get('canvas',{}).get('width',0)>500), f'frame {r0 and r0.get("frame")}->{r1 and r1.get("frame")}')

    # 4: fresh vehicle.
    await reset_game(page); v=await get(page,'__vehicle'); p=await get(page,'__passengers')
    ctx.check(4, bool(v and p and v.get('fuel',0)>=99.9 and p.get('capacity',0)>=20 and abs(v.get('position',{}).get('z',0)-20)<.3 and v.get('type')), f'vehicle={v and v.get("type")}, capacity={p and p.get("capacity")}')

    # 5 throttle. Wait for real acceleration/progress rather than assuming a fixed render cadence.
    await reset_game(page); v0=await get(page,'__vehicle'); await page.keyboard.down('w')
    try:
        waited=0; v1=v0
        while waited<2400:
            await page.wait_for_timeout(80); waited+=80; v1=await get(page,'__vehicle')
            if (v0 and v1 and v1.get('speedKph',0)>8 and
                v1.get('position',{}).get('z',0)>v0.get('position',{}).get('z',0)+.8 and
                v1.get('odometerKm',0)>v0.get('odometerKm',0)):
                break
    finally:
        await page.keyboard.up('w')
    ctx.check(5, bool(v0 and v1 and v1.get('speedKph',0)>8 and v1.get('position',{}).get('z',0)>v0.get('position',{}).get('z',0)+.8 and v1.get('odometerKm',0)>v0.get('odometerKm',0)), f'speed={v1 and v1.get("speedKph"):.2f}' if v1 else 'missing vehicle')

    # 6 steering: verify normal left/right semantics, not merely any heading change.
    await reset_game(page); await key_hold(page,'w',420); left0=await all_states(page); await page.keyboard.down('w'); await key_hold(page,'a',520); await page.keyboard.up('w'); left1=await all_states(page)
    await reset_game(page); await key_hold(page,'w',420); right0=await all_states(page); await page.keyboard.down('w'); await key_hold(page,'d',520); await page.keyboard.up('w'); right1=await all_states(page)
    lo0=left0['__vehicle']['position']['x']-left0['__world']['roadCenter']; lo1=left1['__vehicle']['position']['x']-left1['__world']['roadCenter']; ro0=right0['__vehicle']['position']['x']-right0['__world']['roadCenter']; ro1=right1['__vehicle']['position']['x']-right1['__world']['roadCenter']
    steering_ok=(lo1 < lo0-.05 and ro1 > ro0+.05 and left1['__vehicle']['headingDeg'] < left0['__vehicle']['headingDeg']-.7 and right1['__vehicle']['headingDeg'] > right0['__vehicle']['headingDeg']+.7)
    ctx.check(6, steering_ok, f'left offset {lo0:.2f}->{lo1:.2f}, right offset {ro0:.2f}->{ro1:.2f}')

    # 7 brake / reverse.
    await reset_game(page); await key_hold(page,'w',700); fast=await get(page,'__vehicle'); await key_hold(page,'s',650); slower=await get(page,'__vehicle'); await key_hold(page,'s',650); rev=await get(page,'__vehicle')
    ctx.check(7, bool(fast and slower and rev and slower.get('speedKph',999)<fast.get('speedKph',0) and rev.get('gear')=='R'), f'speed {fast and fast.get("speedKph"):.1f}->{slower and slower.get("speedKph"):.1f}, gear={rev and rev.get("gear")}' if fast and slower and rev else 'missing')

    # 8 parking brake.
    await reset_game(page); await page.keyboard.press('Space'); pb0=await get(page,'__vehicle'); await key_hold(page,'w',600); pb1=await get(page,'__vehicle'); await page.keyboard.press('Space')
    ctx.check(8, bool(pb0 and pb1 and pb0.get('parkingBrake') and pb1.get('speedKph',99)<1.0), f'parking speed={pb1 and pb1.get("speedKph")}')

    # 9 camera.
    await reset_game(page); c0=await get(page,'__camera'); await page.keyboard.press('c'); await page.wait_for_timeout(120); c1=await get(page,'__camera'); await page.keyboard.press('c'); await page.wait_for_timeout(120); c2=await get(page,'__camera')
    distinct={c.get('mode') for c in (c0,c1,c2) if c}; transforms={(json.dumps(c.get('position'),sort_keys=True),json.dumps(c.get('target'),sort_keys=True)) for c in (c0,c1,c2) if c}
    ctx.check(9, bool(c0 and c1 and len(distinct)>=2 and len(transforms)>=2), f'modes={c0 and c0.get("mode")},{c1 and c1.get("mode")},{c2 and c2.get("mode")}')

    # 10 signals.
    await reset_game(page); await page.keyboard.press('l'); await page.keyboard.press('z'); await page.keyboard.press('h'); await page.wait_for_timeout(100); sig=await get(page,'__vehicle'); body=await page.locator('body').inner_text()
    ctx.check(10, bool(sig and sig.get('headlights') and sig.get('indicator')=='left' and sig.get('hornActive') and 'LIGHTS ON' in body), f'lights={sig and sig.get("headlights")}, ind={sig and sig.get("indicator")}, horn={sig and sig.get("hornActive")}')

    # 11 route definition.
    await reset_game(page); route=await get(page,'__route'); world=await get(page,'__world')
    ctx.check(11, bool(route and world and route.get('stopCount')==3 and len(route.get('stops',[]))==3 and route.get('currentStopIndex')==0 and route.get('nextStopDistance',0)>0 and world.get('nearStopMarkers',0)>=1), f'stops={route and route.get("stopCount")}, next={route and route.get("nextStopDistance")}')

    # 12, 14, 15 share one real passenger-service event.
    service = await service_first_stop(page); b=service['before']; a=service['after']
    ctx.check(12, bool(service['ok'] and a['passengers'].get('boardedTotal',0)>b['passengers'].get('boardedTotal',0) and a['passengers'].get('onboard',0)>b['passengers'].get('onboard',0)), f'boarded {b["passengers"].get("boardedTotal")}->{a["passengers"].get("boardedTotal")}')
    idx_after=a['route'].get('currentStopIndex',-1); await page.wait_for_timeout(700); route_later=await get(page,'__route')
    ctx.check(14, bool(service['ok'] and idx_after==1 and route_later and route_later.get('currentStopIndex')==1), f'index={idx_after}->{route_later and route_later.get("currentStopIndex")}')
    visible_msg=await page.locator('[data-bind="message"]').inner_text(); service_msg=str(a.get('game',{}).get('message',''))
    feedback_text=(service_msg+' '+visible_msg).lower()
    ctx.check(15, bool(service['ok'] and a['route'].get('earnings',0)>b['route'].get('earnings',0) and ('boarding' in feedback_text or 'passenger' in feedback_text)), f'earnings={b["route"].get("earnings")}->{a["route"].get("earnings")}, msg={(service_msg or visible_msg)[:80]}')

    # 13: moving interlock + no closed-door boarding.
    await reset_game(page); await key_hold(page,'w',520); moving=await get(page,'__vehicle'); await page.keyboard.press('e'); after_door=await get(page,'__vehicle'); safe_interlock=bool(moving and moving.get('speedKph',0)>4 and after_door and not after_door.get('doorOpen'))
    reached,_=await drive_to_first_stop(page); before_closed=await get(page,'__passengers'); route_before=await get(page,'__route'); await page.wait_for_timeout(1450); after_closed=await get(page,'__passengers'); route_closed=await get(page,'__route')
    no_closed_board=bool(reached and before_closed and after_closed and route_before and route_closed and before_closed.get('boardedTotal')==after_closed.get('boardedTotal') and route_before.get('currentStopIndex')==route_closed.get('currentStopIndex'))
    ctx.check(13, safe_interlock and no_closed_board, f'interlock={safe_interlock}, closedBoardSafe={no_closed_board}')

    # 16 fuel drain.
    await reset_game(page); f0=(await get(page,'__vehicle')).get('fuel'); await key_hold(page,'w',900); v=await get(page,'__vehicle'); ctx.check(16, bool(v and v.get('odometerKm',0)>0 and v.get('fuel',100)<f0-.001), f'fuel={f0}->{v and v.get("fuel")}, odo={v and v.get("odometerKm")}')

    # 17 traffic active/frozen. Snapshot after pause has actually taken effect so one boundary frame cannot create a false failure.
    await reset_game(page); t0=await get(page,'__traffic'); await page.wait_for_timeout(420); t1=await get(page,'__traffic'); await page.keyboard.press('p'); await page.wait_for_timeout(80); tp0=await get(page,'__traffic'); await page.wait_for_timeout(360); tp1=await get(page,'__traffic'); await page.keyboard.press('p')
    active_move=bool(t0 and t1 and any(abs(a['z']-b['z'])>.2 for a,b in zip(t0.get('vehicles',[]),t1.get('vehicles',[]))))
    frozen=bool(tp0 and tp1 and all(abs(a['z']-b['z'])<.02 for a,b in zip(tp0.get('vehicles',[]),tp1.get('vehicles',[]))))
    ctx.check(17, active_move and frozen, f'active={active_move}, pausedFrozen={frozen}')

    # 18 coherent world.
    w=await get(page,'__world'); r=await get(page,'__route'); ctx.check(18, bool(w and r and w.get('environment') and w.get('weather') and w.get('timeOfDay') and 4<=w.get('roadHalfWidth',0)<=7 and w.get('surface')=='asphalt' and w.get('nearStopMarkers') in {0,1}), f'env={w and w.get("environment")}, weather={w and w.get("weather")}')

    # 19 pause semantics. Capture both pause snapshots only after the production phase has entered paused.
    await reset_game(page); await key_hold(page,'w',420); await page.keyboard.press('p'); paused_phase=await wait_game_phase(page,'paused'); p0=await all_states(page); await page.wait_for_timeout(320); p1=await all_states(page)
    await page.keyboard.press('p'); playing_phase=await wait_game_phase(page,'playing'); r0=await all_states(page); await page.wait_for_timeout(260); r1=await all_states(page)
    traffic_frozen=all(abs(a['z']-b['z'])<.02 for a,b in zip(p0['__traffic'].get('vehicles',[]),p1['__traffic'].get('vehicles',[])))
    paused_ok=(paused_phase and p0['__game']['phase']=='paused' and p1['__game']['phase']=='paused' and abs(p1['__game']['elapsed']-p0['__game']['elapsed'])<.02 and abs(p1['__vehicle']['position']['z']-p0['__vehicle']['position']['z'])<.02 and abs(p1['__vehicle']['position']['x']-p0['__vehicle']['position']['x'])<.02 and traffic_frozen)
    resumed=(playing_phase and r1['__game']['elapsed']>r0['__game']['elapsed']+.12)
    ctx.check(19, paused_ok and resumed, f'paused={paused_phase}, elapsed={p0["__game"]["elapsed"]:.3f}->{p1["__game"]["elapsed"]:.3f}; resumed={r0["__game"]["elapsed"]:.3f}->{r1["__game"]["elapsed"]:.3f}')

    # 20 reset state.
    await key_hold(page,'w',500); await visible_click(page,'[data-action="reset"]'); await page.wait_for_timeout(180); s=await all_states(page)
    reset_ok=(s['__route']['currentStopIndex']==0 and s['__passengers']['boardedTotal']==0 and s['__route']['earnings']==0 and s['__vehicle']['fuel']>=99.9 and abs(s['__vehicle']['position']['z']-20)<.25 and s['__game']['phase']=='playing')
    ctx.check(20, reset_ok, f'z={s["__vehicle"]["position"]["z"]}, fuel={s["__vehicle"]["fuel"]}, idx={s["__route"]["currentStopIndex"]}')

    # 21 blur clears keys.
    await page.keyboard.down('w'); await page.wait_for_timeout(120); i0=await get(page,'__input'); await page.evaluate("() => window.dispatchEvent(new Event('blur'))"); await page.wait_for_timeout(60); i1=await get(page,'__input'); await page.keyboard.up('w')
    ctx.check(21, bool(i0 and 'KeyW' in i0.get('pressed',[]) and i1 and i1.get('pressed')==[]), f'pressed={i0 and i0.get("pressed")}->{i1 and i1.get("pressed")}')

    # 22 mobile production controls.
    await page.set_viewport_size({'width':390,'height':720}); await page.wait_for_timeout(160); await reset_game(page); btn=page.locator('[data-hold="KeyW"]'); visible=await btn.is_visible(); v0=await get(page,'__vehicle')
    if visible:
        await btn.dispatch_event('pointerdown', {'pointerType':'touch','pointerId':7,'isPrimary':True}); await page.wait_for_timeout(520); await btn.dispatch_event('pointerup', {'pointerType':'touch','pointerId':7,'isPrimary':True}); await page.wait_for_timeout(60)
    v1=await get(page,'__vehicle'); inp=await get(page,'__input'); ctx.check(22, bool(visible and v0 and v1 and v1.get('speedKph',0)>v0.get('speedKph',0)+3 and inp and inp.get('lastPointerType')=='touch' and inp.get('mobileControls')), f'visible={visible}, speed={v0 and v0.get("speedKph")}->{v1 and v1.get("speedKph")}, pointer={inp and inp.get("lastPointerType")}')
    await page.set_viewport_size({'width':1280,'height':800}); await page.wait_for_timeout(120)

    # 23 settings propagation with route preservation. Use the visible in-game quality control.
    await reset_game(page); before=await all_states(page); sel=page.locator('.hud-quality [data-setting="quality"]'); options=await quality_options(page); current=await sel.input_value() if await sel.count() else ''; target=next((v for v in options if v!=current),None)
    if target: await sel.select_option(target); await page.wait_for_timeout(180)
    after=await all_states(page); graphics_keys=('pixelRatio','renderDistance','trafficDensity','density')
    changed=any(before['__settings'].get(k)!=after['__settings'].get(k) for k in graphics_keys) or any(before['__renderer'].get(k)!=after['__renderer'].get(k) for k in graphics_keys)
    propagated=bool(target and after['__settings'].get('quality')==target and after['__renderer'].get('quality')==target and changed); preserved=(after['__route']['currentStopIndex']==before['__route']['currentStopIndex'] and after['__passengers']['onboard']==before['__passengers']['onboard'])
    ctx.check(23, bool(propagated and preserved), f'quality={current}->{target}, graphics_changed={changed}')
    await set_quality(page, prefer='low')

    # 24 fresh snapshots + no control methods.
    fresh = await page.evaluate("""() => {
      const names=['__bus','__game','__vehicle','__route','__passengers','__traffic','__world','__camera','__input','__renderer','__performance','__settings'];
      for (const n of names){ const h=window[n]; if(!h||typeof h.getState!=='function'||Object.keys(h).some(k=>k!=='getState')) return false; const a=h.getState(), b=h.getState(); if(a===b) return false; JSON.stringify(a); if(a && typeof a==='object'){a.__mutated=123;if(h.getState().__mutated===123)return false;} } return true;
    }""")
    ctx.check(24, bool(fresh), 'all documented hooks return independent serializable snapshots')

    # 25 same-turn cross-hook consistency.
    s=await all_states(page); bus=s['__bus']; game=s['__game']; veh=s['__vehicle']; route=s['__route']; pas=s['__passengers']; ren=s['__renderer']; sett=s['__settings']
    consistent=(bus['phase']==game['phase'] and abs(bus['speedKph']-veh['speedKph'])<.2 and abs(bus['position']['x']-veh['position']['x'])<.01 and abs(bus['position']['z']-veh['position']['z'])<.01 and bus['doorOpen']==veh['doorOpen'] and bus['passengerCount']==pas['onboard'] and bus['nextStopIndex']==route['currentStopIndex'] and ren['quality']==sett['quality'])
    ctx.check(25, consistent, f'busSpeed={bus["speedKph"]:.2f}, vehicleSpeed={veh["speedKph"]:.2f}, phase={bus["phase"]}/{game["phase"]}')

    # 26 renderer honesty.
    r0=await get(page,'__renderer'); await page.wait_for_timeout(160); r1=await get(page,'__renderer'); await page.evaluate("() => document.querySelector('canvas').dispatchEvent(new Event('webglcontextlost',{cancelable:true}))"); await page.wait_for_timeout(60); rl=await get(page,'__renderer'); await page.evaluate("() => document.querySelector('canvas').dispatchEvent(new Event('webglcontextrestored'))"); await page.wait_for_timeout(180); rr=await get(page,'__renderer')
    ctx.check(26, bool(r0 and r1 and rl and rr and r1['frame']>r0['frame'] and r1['drawCalls']>0 and r1.get('dynamicLighting') is True and r1.get('fog') is True and rl['contextLost'] is True and rr['contextLost'] is False and rr['frame']>=r1['frame']), f'frames={r0 and r0.get("frame")}->{r1 and r1.get("frame")}->{rr and rr.get("frame")}, lighting={r1 and r1.get("dynamicLighting")}, fog={r1 and r1.get("fog")}, lost={rl and rl.get("contextLost")}')

    # 27 live timing telemetry. Do not require one product-specific fixed-step coefficient.
    await ensure_playing(page); p0=await get(page,'__performance'); await page.wait_for_timeout(240); p1=await get(page,'__performance'); await page.keyboard.press('p'); await page.wait_for_timeout(80); pp0=await get(page,'__performance'); await page.wait_for_timeout(220); pp1=await get(page,'__performance'); await page.keyboard.press('p')
    timing_ok=False
    if p1 and pp1:
        acc=pp1.get('accumulator',0); timing_ok=isinstance(acc,(int,float)) and not isinstance(acc,bool) and math.isfinite(acc) and 0<=acc<.5; step=p1.get('fixedStep'); max_steps=p1.get('maxSubSteps')
        if step is not None: timing_ok=timing_ok and isinstance(step,(int,float)) and not isinstance(step,bool) and math.isfinite(step) and 0<step<=.25
        if max_steps is not None: timing_ok=timing_ok and isinstance(max_steps,(int,float)) and not isinstance(max_steps,bool) and 1<=max_steps<=64
    perf_ok=bool(p0 and p1 and pp0 and pp1 and p1['tick']>p0['tick'] and p1['frame']>p0['frame'] and p1['elapsed']>p0['elapsed'] and pp1['tick']==pp0['tick'] and pp1['frame']>pp0['frame'] and abs(pp1['elapsed']-pp0['elapsed'])<.02 and timing_ok)
    ctx.check(27, perf_ok, f'tick={p0 and p0.get("tick")}->{p1 and p1.get("tick")}; paused={pp0 and pp0.get("tick")}->{pp1 and pp1.get("tick")}, step={p1 and p1.get("fixedStep")}')


    # 32 solid road-world collision: real steering into the boundary must stop clipping through scenery.
    await reset_game(page); await page.keyboard.down('w'); await page.keyboard.down('a'); await page.wait_for_timeout(2350); await page.keyboard.up('a'); await page.keyboard.up('w'); await page.wait_for_timeout(100); cs=await all_states(page)
    cv,cw=cs['__vehicle'],cs['__world']; lateral=abs(cv['position']['x']-cw['roadCenter']); collision_ok=(lateral<=cw['roadHalfWidth']+.05 and cv.get('collisionCount',0)>=1 and cv.get('lastCollision') in {'road-edge','solid-object','traffic'})
    ctx.check(32, collision_ok, f'lateral={lateral:.2f}/{cw["roadHalfWidth"]:.2f}, collisions={cv.get("collisionCount")}, last={cv.get("lastCollision")}')

    # VLM 28: deterministic close exterior product camera.  No wall-clock driving dependency:
    # choose the closest observed exterior camera so the bus body, glazing, wheels and road contact dominate.
    await page.set_viewport_size({'width':1440,'height':900}); await reset_game(page); await set_quality(page, prefer='high'); await select_camera_role(page,'exterior_close')
    veh=await get(page,'__vehicle')
    if veh and not veh.get('headlights'):
        await page.keyboard.press('l')
    await wait_render_frames(page, 8)
    await ctx.vlm(28, 'Does this clear exterior gameplay screenshot show a polished, detailed 3D bus with a readable multi-part body, windows, round wheels, lighting details, and convincing contact with the paved road?')

    # Preserve the original environment-view setup before the cockpit check.
    await drive_to_visual_anchor(page, 35.0); await set_quality(page, prefer='high'); await select_camera_role(page,'exterior_road'); await wait_render_frames(page, 8)

    # VLM 29: cockpit.
    await select_camera_role(page,'cockpit'); await page.wait_for_timeout(180)
    await ctx.vlm(29, 'Is this clearly a cockpit-oriented first-person driving composition, visibly different from the exterior camera, with windshield/dashboard treatment and a readable driver-facing speed display?')

    # VLM 30: HUD readability in a road-oriented exterior view.
    await select_camera_role(page,'exterior_road'); await page.wait_for_timeout(120)
    await ctx.vlm(30, 'Does the driving HUD visibly communicate speed, fuel, passengers, next-stop/progress information and current status while keeping the road scene unobstructed and readable?')

    # Preserve the original passenger-stop setup before the mobile check.
    await page.set_viewport_size({'width':1440,'height':900}); stop_ok,_=await drive_to_first_stop(page); await set_quality(page, prefer='high')
    if stop_ok:
        veh=await get(page,'__vehicle')
        if veh and not veh.get('doorOpen'):
            await page.keyboard.press('e')
            await page.wait_for_timeout(120)
    await select_camera_role(page,'exterior_road'); await page.wait_for_timeout(220)

    # VLM 31: mobile.
    await page.set_viewport_size({'width':390,'height':720}); await page.wait_for_timeout(220)
    await ctx.vlm(31, 'At this narrow mobile viewport, is the bus-driving interface still usable and readable, with the 3D driving scene visible, essential HUD information not badly clipped, and touch driving controls visibly accessible?')



async def _fallback_open_game(page):
    """Best-effort start for products that do not implement the evaluator selectors."""
    selectors = [
        '[data-action="play"]',
        'button:has-text("Drive")',
        'button:has-text("Start")',
        'button:has-text("Play")',
        'button:has-text("Mulai")',
        'button:has-text("Enter")',
    ]
    for selector in selectors:
        try:
            if await visible_click(page, selector):
                await page.wait_for_timeout(180)
                return True
        except Exception:
            pass
    return False


async def _fallback_vlm_checks(page, ctx):
    """Visual checks are independent from deterministic hook failures."""
    done = {getattr(item, 'id', None) for item in getattr(ctx, 'results', [])}
    await _fallback_open_game(page)
    try:
        await page.set_viewport_size({'width': 1440, 'height': 900})
        await page.wait_for_timeout(180)
    except Exception:
        pass

    questions = {
        28: 'Does this gameplay/product screenshot show a polished, detailed 3D bus with a readable multi-part body, windows, round wheels, lighting details, and convincing contact with a paved road?',
        29: 'Does this screenshot show a clearly cockpit-oriented first-person driving composition with visible dashboard or windshield treatment?',
        30: 'Does this screenshot show a driving HUD that clearly communicates core bus-simulator information such as speed, fuel, passengers, next stop, route progress, and immediate status feedback without obscuring the road?',
    }
    for rid, question in questions.items():
        if rid not in done:
            try:
                await ctx.vlm(rid, question)
            except Exception as exc:
                ctx.vlm_fail(rid, f'visual check infrastructure error: {exc!r}')

    if 31 not in done:
        try:
            await page.set_viewport_size({'width': 390, 'height': 720})
            await page.wait_for_timeout(180)
            await ctx.vlm(31, 'At a 390x720 mobile viewport, is the home/driving interface readable and usable, with visible touch controls or an otherwise clearly mobile-usable control layout?')
        except Exception as exc:
            ctx.vlm_fail(31, f'visual check infrastructure error: {exc!r}')
        finally:
            try:
                await page.set_viewport_size({'width': 1280, 'height': 800})
            except Exception:
                pass


async def _limited_checks_without_hooks(page, ctx, missing_hooks):
    """Score observable DOM/WebGL items without crashing on absent required hooks."""
    try:
        body_text = await page.locator('body').inner_text()
    except Exception:
        body_text = ''
    upper = body_text.upper()
    lower = body_text.lower()

    play_visible = False
    for selector in ('[data-action="play"]', 'button:has-text("Drive")', 'button:has-text("Start")', 'button:has-text("Play")', 'button:has-text("Mulai")'):
        try:
            loc = page.locator(selector)
            if await loc.count() and await loc.first.is_visible():
                play_visible = True
                break
        except Exception:
            pass
    ctx.check(1, bool(play_visible and ('BUS' in upper or 'SIMULATOR' in upper)),
              'fallback DOM check; required observation hooks are absent')

    control_terms = ('w', 's', 'door', 'camera', 'pause', 'reset')
    ctx.check(2, sum(term in lower for term in control_terms) >= 4,
              'fallback player-facing controls copy check; required observation hooks are absent')

    await _fallback_open_game(page)
    try:
        webgl = await page.evaluate("""() => {
          const canvases=[...document.querySelectorAll('canvas')];
          return canvases.some(c => {
            try { return !!(c.getContext('webgl2') || c.getContext('webgl') || c.getContext('experimental-webgl')); }
            catch (_) { return false; }
          });
        }""")
    except Exception:
        webgl = False
    ctx.check(3, bool(webgl), 'independent canvas WebGL check; renderer hook unavailable')

    missing_text = ', '.join(missing_hooks)
    for rid in list(range(4, 28)) + [32]:
        ctx.check(rid, False, f'not testable as specified: missing required prompt observation hooks: {missing_text}')

    await _fallback_vlm_checks(page, ctx)


async def _recover_missing_deterministic(page, ctx, cause: Exception | None = None):
    """Best-effort, per-rubric recovery after a strict-step exception.

    Every remaining deterministic rubric is evaluated independently.  This is
    intentionally conservative: a missing observation fails only that rubric;
    it never aborts the rest of the suite.
    """
    done = {getattr(item, 'id', None) for item in getattr(ctx, 'results', [])}
    cause_text = f"{type(cause).__name__}: {cause}" if cause else "strict check not completed"

    async def record(rid: int, fn):
        nonlocal done
        if rid in done:
            return
        try:
            passed, reason = await fn()
            ctx.check(rid, bool(passed), reason)
        except Exception as exc:
            ctx.check(rid, False, f"isolated check error: {type(exc).__name__}: {exc}")
        done.add(rid)

    async def r1():
        text = await page.locator('body').inner_text()
        upper = text.upper()
        visible = False
        for sel in (
            '[data-action="play"]', 'button:has-text("Drive")',
            'button:has-text("Start")', 'button:has-text("Play")',
            'button:has-text("Mulai")', 'button:has-text("Enter")',
        ):
            try:
                loc = page.locator(sel)
                if await loc.count() and await loc.first.is_visible():
                    visible = True
                    break
            except Exception:
                pass
        return (('BUS' in upper or 'COACH' in upper) and visible,
                'independent first-viewport identity/start-control check')

    async def r2():
        text = (await page.locator('body').inner_text()).lower()
        driving = ('w' in text and 's' in text and ('a/d' in text or ('a' in text and 'd' in text)))
        feature_hits = sum(k in text for k in ('door', 'camera', 'pause', 'reset', 'passenger', 'stop'))
        return driving and feature_hits >= 3, f'visible instructions: driving={driving}, feature_hits={feature_hits}'

    async def r3():
        info = await page.evaluate("""() => {
          const cs=[...document.querySelectorAll('canvas')];
          for (const c of cs) {
            try {
              const g=c.getContext('webgl2')||c.getContext('webgl')||c.getContext('experimental-webgl');
              if (g) return {ok:true,w:c.width,h:c.height};
            } catch (_) {}
          }
          return {ok:false,w:0,h:0};
        }""")
        r0 = await get(page, '__renderer')
        await page.wait_for_timeout(180)
        r1 = await get(page, '__renderer')
        frame_ok = bool(r0 and r1 and r1.get('frame', 0) > r0.get('frame', 0))
        return bool(info.get('ok') and info.get('w',0) > 320 and info.get('h',0) > 200 and frame_ok), \
               f"webgl={info.get('ok')}, canvas={info.get('w')}x{info.get('h')}, frame={r0 and r0.get('frame')}->{r1 and r1.get('frame')}"

    async def r4():
        v, psg = await get(page,'__vehicle'), await get(page,'__passengers')
        pos = (v or {}).get('position', {})
        finite = all(isinstance(pos.get(k),(int,float)) and math.isfinite(float(pos.get(k))) for k in ('x','z'))
        fuel = (v or {}).get('fuel')
        cap = (psg or {}).get('capacity')
        return bool(v and psg and finite and isinstance(fuel,(int,float)) and fuel >= 0 and isinstance(cap,(int,float)) and cap >= 0 and v.get('type')), \
               f"vehicle={v and v.get('type')}, fuel={fuel}, capacity={cap}, position={pos}"

    async def r5():
        await ensure_playing(page)
        b = await get(page,'__vehicle')
        await page.keyboard.down('w')
        await page.wait_for_timeout(850)
        await page.keyboard.up('w')
        a = await get(page,'__vehicle')
        if not b or not a:
            return False, 'missing vehicle state'
        speed_up = a.get('speedKph',0) > b.get('speedKph',0) + 1
        odo_up = a.get('odometerKm',0) > b.get('odometerKm',0)
        z_up = a.get('position',{}).get('z',0) > b.get('position',{}).get('z',0)
        return speed_up and (odo_up or z_up), f"speed={b.get('speedKph')}->{a.get('speedKph')}, odo={b.get('odometerKm')}->{a.get('odometerKm')}"

    async def r6():
        await ensure_playing(page)
        b = await get(page,'__vehicle')
        await page.keyboard.down('w'); await page.keyboard.down('a')
        await page.wait_for_timeout(500)
        await page.keyboard.up('a'); await page.keyboard.up('w')
        l = await get(page,'__vehicle')
        await page.keyboard.down('w'); await page.keyboard.down('d')
        await page.wait_for_timeout(700)
        await page.keyboard.up('d'); await page.keyboard.up('w')
        rr = await get(page,'__vehicle')
        if not (b and l and rr): return False, 'missing vehicle state'
        bx=b.get('position',{}).get('x',0); lx=l.get('position',{}).get('x',bx); rx=rr.get('position',{}).get('x',lx)
        bh=b.get('headingDeg',0); lh=l.get('headingDeg',bh); rh=rr.get('headingDeg',lh)
        return (lx < bx-.02 or lh < bh-.2) and (rx > lx+.02 or rh > lh+.2), f'x={bx}->{lx}->{rx}, heading={bh}->{lh}->{rh}'

    async def r7():
        await ensure_playing(page)
        await page.keyboard.down('w'); await page.wait_for_timeout(700); await page.keyboard.up('w')
        fast=await get(page,'__vehicle')
        await page.keyboard.down('s'); await page.wait_for_timeout(1100); await page.keyboard.up('s')
        end=await get(page,'__vehicle')
        if not (fast and end): return False,'missing vehicle state'
        slowed=end.get('speedKph',999) < fast.get('speedKph',0)
        reverse=(str(end.get('gear','')).upper()=='R' or end.get('velocity',0) < -0.05)
        return slowed and reverse, f"speed={fast.get('speedKph')}->{end.get('speedKph')}, gear={end.get('gear')}, velocity={end.get('velocity')}"

    async def r8():
        await ensure_playing(page)
        await page.keyboard.press('Space'); await page.wait_for_timeout(80)
        pb=await get(page,'__vehicle')
        await page.keyboard.down('w'); await page.wait_for_timeout(550); await page.keyboard.up('w')
        a=await get(page,'__vehicle')
        return bool(pb and a and pb.get('parkingBrake') is True and a.get('speedKph',99)<1.5), f"parkingBrake={pb and pb.get('parkingBrake')}, speed={a and a.get('speedKph')}"

    async def r9():
        await ensure_playing(page)
        c0=await get(page,'__camera')
        await page.keyboard.press('c'); await page.wait_for_timeout(120)
        c1=await get(page,'__camera')
        changed=bool(c0 and c1 and (c0.get('mode')!=c1.get('mode') or c0.get('position')!=c1.get('position')))
        return changed, f"camera={c0 and c0.get('mode')}->{c1 and c1.get('mode')}"

    async def r10():
        await ensure_playing(page)
        b=await get(page,'__vehicle')
        for key in ('l','z','h'):
            await page.keyboard.press(key); await page.wait_for_timeout(70)
        a=await get(page,'__vehicle')
        if not (b and a): return False,'missing vehicle state'
        changed=(b.get('headlights')!=a.get('headlights') or b.get('indicator')!=a.get('indicator') or a.get('hornActive'))
        return changed, f"lights={b.get('headlights')}->{a.get('headlights')}, indicator={b.get('indicator')}->{a.get('indicator')}, horn={a.get('hornActive')}"

    async def r11():
        rt=await get(page,'__route'); w=await get(page,'__world')
        n=(rt or {}).get('stopCount'); stops=(rt or {}).get('stops',[])
        return bool(rt and n==3 and len(stops)==3 and (rt.get('nextStopDistance') is not None)), f"stopCount={n}, len={len(stops) if isinstance(stops,list) else 'n/a'}, markers={(w or {}).get('nearStopMarkers')}"

    async def r12():
        s=await service_first_stop(page)
        b=s.get('before',{}); a=s.get('after',{})
        bp=(b.get('passengers') or {}).get('boardedTotal',0)
        ap=(a.get('passengers') or {}).get('boardedTotal',0)
        return bool(s.get('ok') and ap>bp), f'boarded={bp}->{ap}'

    async def r13():
        await ensure_playing(page)
        await page.keyboard.down('w'); await page.wait_for_timeout(650); await page.keyboard.up('w')
        moving=await get(page,'__vehicle')
        await page.keyboard.press('e'); await page.wait_for_timeout(100)
        after=await get(page,'__vehicle')
        return bool(moving and after and moving.get('speedKph',0)>3 and not after.get('doorOpen')), f"movingSpeed={moving and moving.get('speedKph')}, doorAfter={after and after.get('doorOpen')}"

    async def r14():
        s=await service_first_stop(page)
        a=(s.get('after') or {}).get('route') or {}
        idx=a.get('currentStopIndex')
        await page.wait_for_timeout(350)
        later=await get(page,'__route')
        return bool(s.get('ok') and idx is not None and later and later.get('currentStopIndex')==idx), f'index={idx}->{later and later.get("currentStopIndex")}'

    async def r15():
        s=await service_first_stop(page)
        b=(s.get('before') or {}).get('route') or {}
        a=(s.get('after') or {}).get('route') or {}
        g=(s.get('after') or {}).get('game') or {}
        msg=str(g.get('message','')).lower()
        return bool(s.get('ok') and a.get('earnings',0)>b.get('earnings',0) and msg), f"earnings={b.get('earnings')}->{a.get('earnings')}, message={g.get('message')}"

    async def r16():
        await ensure_playing(page)
        b=await get(page,'__vehicle')
        await page.keyboard.down('w'); await page.wait_for_timeout(900); await page.keyboard.up('w')
        a=await get(page,'__vehicle')
        return bool(b and a and a.get('fuel',0)<b.get('fuel',0)), f"fuel={b and b.get('fuel')}->{a and a.get('fuel')}"

    async def r17():
        await ensure_playing(page)
        t0=await get(page,'__traffic'); await page.wait_for_timeout(250); t1=await get(page,'__traffic')
        def posmap(t):
            return {str(x.get('id')):(x.get('x'),x.get('z')) for x in (t or {}).get('vehicles',[]) if isinstance(x,dict)}
        m0,m1=posmap(t0),posmap(t1)
        common=set(m0)&set(m1)
        moved=any(m0[k]!=m1[k] for k in common)
        await page.keyboard.press('p'); await page.wait_for_timeout(100)
        p0=await get(page,'__traffic'); await page.wait_for_timeout(240); p1=await get(page,'__traffic'); await page.keyboard.press('p')
        pm0,pm1=posmap(p0),posmap(p1); pc=set(pm0)&set(pm1)
        frozen=bool(pc) and all(pm0[k]==pm1[k] for k in pc)
        return moved and frozen, f"traffic_common={len(common)}, moved={moved}, pausedFrozen={frozen}"

    async def r18():
        w=await get(page,'__world'); rt=await get(page,'__route')
        bad={'','Unspecified',None}
        coherent=bool(w and w.get('environment') not in bad and w.get('weather') not in bad and w.get('timeOfDay') not in bad)
        bounds=isinstance((w or {}).get('roadHalfWidth'),(int,float)) and (w or {}).get('roadHalfWidth',0)>0
        return coherent and bounds and bool(rt), f"environment={(w or {}).get('environment')}, weather={(w or {}).get('weather')}, roadHalfWidth={(w or {}).get('roadHalfWidth')}"

    async def r19():
        await ensure_playing(page)
        b=await all_states(page); await page.keyboard.press('p'); await page.wait_for_timeout(120); p0=await all_states(page); await page.wait_for_timeout(250); p1=await all_states(page); await page.keyboard.press('p'); await page.wait_for_timeout(140); a=await all_states(page)
        try:
            frozen=abs(p1['__game']['elapsed']-p0['__game']['elapsed'])<.05
            resumed=a['__game']['elapsed']>p1['__game']['elapsed']
            return frozen and resumed, f"elapsed={b['__game']['elapsed']}->{p0['__game']['elapsed']}->{p1['__game']['elapsed']}->{a['__game']['elapsed']}"
        except Exception:
            return False,'missing pause telemetry'

    async def r20():
        # Evaluate the product's own reset control; do not require one hard-coded initial z/fuel.
        await ensure_playing(page)
        before=await all_states(page)
        await page.keyboard.down('w'); await page.wait_for_timeout(650); await page.keyboard.up('w')
        changed=await all_states(page)
        clicked=await visible_click(page,'[data-action="reset"]')
        if not clicked:
            for sel in ('button:has-text("Reset Route")','button:has-text("Reset")','button:has-text("Restart")'):
                if await visible_click(page,sel):
                    clicked=True; break
        await page.wait_for_timeout(220)
        after=await all_states(page)
        if not clicked: return False,'no visible reset control'
        try:
            ok=(after['__route']['currentStopIndex']==before['__route']['currentStopIndex'] and
                abs(after['__vehicle']['speedKph']-before['__vehicle']['speedKph'])<2 and
                after['__passengers']['boardedTotal']==before['__passengers']['boardedTotal'])
            return ok, f"speed={changed['__vehicle']['speedKph']}->{after['__vehicle']['speedKph']}, idx={after['__route']['currentStopIndex']}"
        except Exception:
            return False,'reset telemetry incomplete'

    async def r21():
        await ensure_playing(page)
        await page.keyboard.down('w'); await page.wait_for_timeout(100)
        i0=await get(page,'__input')
        await page.evaluate("() => window.dispatchEvent(new Event('blur'))")
        await page.wait_for_timeout(80)
        i1=await get(page,'__input'); await page.keyboard.up('w')
        return bool(i0 and i1 and len(i0.get('pressed',[]))>0 and i1.get('pressed')==[]), f"pressed={i0 and i0.get('pressed')}->{i1 and i1.get('pressed')}"

    async def r22():
        await page.set_viewport_size({'width':390,'height':720}); await ensure_playing(page)
        visible=await page.evaluate("""() => [...document.querySelectorAll('button,[role=button]')].some(e => {
          const t=(e.textContent||e.getAttribute('aria-label')||'').toLowerCase();
          const r=e.getBoundingClientRect();
          return r.width>0&&r.height>0&&(t.includes('acceler')||t.includes('throttle')||t==='▲'||t.includes('left')||t.includes('right'));
        })""")
        inp=await get(page,'__input')
        await page.set_viewport_size({'width':1280,'height':800})
        return bool(visible and inp and inp.get('mobileControls')), f"touchVisible={visible}, mobileControls={inp and inp.get('mobileControls')}"

    async def r23():
        s0=await get(page,'__settings'); r0=await get(page,'__route')
        changed=await set_quality(page, prefer='high')
        s1=await get(page,'__settings'); r1=await get(page,'__route')
        propagated=bool(changed and s0 and s1 and s0.get('quality')!=s1.get('quality'))
        preserved=bool(r0 and r1 and r0.get('currentStopIndex')==r1.get('currentStopIndex'))
        return propagated and preserved, f"quality={(s0 or {}).get('quality')}->{(s1 or {}).get('quality')}, preserved={preserved}"

    async def r24():
        names=['__bus','__game','__vehicle','__route','__passengers','__traffic','__world','__camera','__input','__renderer','__performance','__settings']
        val=await page.evaluate("""names => names.every(n => {
          const h=window[n]; if (!h || typeof h.getState!=='function') return false;
          const a=h.getState(), b=h.getState();
          try { JSON.stringify(a); JSON.stringify(b); } catch (_) { return false; }
          return a !== b;
        })""", names)
        return bool(val), 'fresh serializable snapshots for all documented hooks'

    async def r25():
        b,g,v=await get(page,'__bus'),await get(page,'__game'),await get(page,'__vehicle')
        if not (b and g and v): return False,'missing cross-hook state'
        speed_ok=abs(float(b.get('speedKph',0))-float(v.get('speedKph',0)))<.5
        phase_ok=b.get('phase')==g.get('phase')
        return speed_ok and phase_ok, f"speed={b.get('speedKph')}/{v.get('speedKph')}, phase={b.get('phase')}/{g.get('phase')}"

    async def r26():
        r0=await get(page,'__renderer'); await page.wait_for_timeout(200); r1=await get(page,'__renderer')
        if not (r0 and r1): return False,'missing renderer state'
        lighting=isinstance(r1.get('dynamicLighting'),bool)
        fog=isinstance(r1.get('fog'),bool)
        canvas=(r1.get('canvas') or {})
        ok=(r1.get('backend')=='WebGL' and r1.get('frame',0)>r0.get('frame',0) and canvas.get('width',0)>0 and lighting and fog)
        return ok, f"backend={r1.get('backend')}, frame={r0.get('frame')}->{r1.get('frame')}, lighting={r1.get('dynamicLighting')}, fog={r1.get('fog')}"

    async def r27():
        p0=await get(page,'__performance'); await page.wait_for_timeout(220); p1=await get(page,'__performance')
        if not (p0 and p1): return False,'missing performance state'
        frame_ok=p1.get('frame',0)>p0.get('frame',0)
        tick0,tick1=p0.get('tick'),p1.get('tick')
        tick_ok=(tick0 is None or tick1 is None or tick1>=tick0)
        return frame_ok and tick_ok, f"frame={p0.get('frame')}->{p1.get('frame')}, tick={tick0}->{tick1}"

    async def r32():
        v,w=await get(page,'__vehicle'),await get(page,'__world')
        if not (v and w): return False,'missing collision state'
        c=w.get('collision') or {}
        declared=bool(c.get('roadEdgeEnabled') or c.get('trafficEnabled') or c.get('solidObjectsEnabled'))
        observed=(v.get('collisionCount',0)>0 or v.get('lastCollision') not in (None,'none',''))
        return declared and observed, f"collisionDeclared={declared}, count={v.get('collisionCount')}, last={v.get('lastCollision')}"

    funcs = {
        1:r1,2:r2,3:r3,4:r4,5:r5,6:r6,7:r7,8:r8,9:r9,10:r10,11:r11,12:r12,
        13:r13,14:r14,15:r15,16:r16,17:r17,18:r18,19:r19,20:r20,21:r21,22:r22,
        23:r23,24:r24,25:r25,26:r26,27:r27,32:r32,
    }
    for rid in list(range(1,28))+[32]:
        if rid not in done:
            await record(rid, funcs[rid])



async def run_checks(page, ctx):
    """Failure-isolated entry point.

    Missing prompt-required hooks are treated as product failures, not evaluator
    crashes. Visual items still execute independently. Full-contract products
    continue through the strict gameplay checks.
    """
    names = ['__bus','__game','__vehicle','__route','__passengers','__traffic',
             '__world','__camera','__input','__renderer','__performance','__settings']
    try:
        available = await page.evaluate(
            "names => Object.fromEntries(names.map(n => [n, !!(window[n] && typeof window[n].getState === 'function')]))",
            names,
        )
    except Exception:
        available = {name: False for name in names}
    missing = [name for name in names if not available.get(name)]

    if missing:
        await _limited_checks_without_hooks(page, ctx, missing)
        return

    try:
        await run_checks_strict(page, ctx)
    except Exception as exc:
        await _recover_missing_deterministic(page, ctx, exc)
        await _fallback_vlm_checks(page, ctx)
    else:
        # Defensive completion: if a future strict implementation forgets a
        # deterministic rubric, evaluate the missing item independently.
        await _recover_missing_deterministic(page, ctx, None)
        await _fallback_vlm_checks(page, ctx)


if __name__ == '__main__':
    import web_ut_harness
    web_ut_harness.main(__import__('web_ut'))
