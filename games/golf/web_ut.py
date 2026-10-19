"""3D 迷你高尔夫自动评测。

评测只依赖 prompt.md 明确声明的只读状态接口、DOM 定位契约以及实际
Three.js Scene / WebGLRenderer。所有会改变游戏状态的步骤均通过真实可见
UI、Canvas 指针输入或正常时间推进完成。
"""

# =============================================================================
# Prompt 中声明的公开契约（供静态对齐工具检查）
# =============================================================================
# window.__contract.getState()
# window.__game.getState()
# window.__ball.getState()
# window.__shot.getState()
# window.__course.getState()
# window.__multiplayer.getState()
# window.__powerups.getState()
# window.__camera.getState()
# window.__leaderboard.getState()
# window.__performance.getState()
# window.__THREE_SCENE__
# window.__THREE_RENDERER__
# [id="menu"] [id="levelSelect"] [id="gameScreen"]
# [id="multiplayerLobby"] [id="leaderboardScreen"] [id="resultScreen"]
# [data-testid="start-btn"] [data-testid="level-forest"]
# [data-testid="level-desert"] [data-testid="level-snow"]
# [data-testid="multiplayer-btn"] [data-testid="local-start-btn"] [data-testid="local-exit-btn"]
# [data-testid="leaderboard-btn"] [data-testid="shot-power"]
# [data-testid="stroke-count"] [data-testid="current-player"]
# [data-testid="powerup-status"] [data-testid="powerup-hio"]
# [data-testid="zoom-in"] [data-testid="zoom-out"]
# [data-testid="surface-friction"] [data-testid="aim-feedback"] [data-testid="result-next"]

from pathlib import Path
import asyncio
import base64
import json
import math
import os
import re
import secrets
import time

RUBRIC = json.loads((Path(__file__).with_name("mapping.json")).read_text(encoding="utf-8"))["rubrics"]


def _eval_timeout():
    try:
        return max(.75, min(4.0, float(os.environ.get("WEB_UT_EVAL_TIMEOUT", "3.0"))))
    except Exception:
        return 3.0


_BLOCKED_MARKER = "[[BLOCKED_BY:"


def _blocked(ctx, rid: int, reason: str, blocked_by=None):
    """Record official score=0 while marking evaluator-prerequisite blockage in-band.

    The controlled harness remains unchanged and therefore preserves the platform's
    1/0 deterministic score contract. run.py recognizes this marker only for
    root-cause diagnostics; it never converts the rubric to a passing score.
    """
    deps = [str(dep).replace("|", "/") for dep in (blocked_by or [])]
    marker = f"{_BLOCKED_MARKER}{'|'.join(deps)}]]"
    ctx.check(rid, False, f"受阻：{reason} {marker}")


def _vlm_blocked(ctx, rid: int, reason: str, blocked_by=None):
    """VLM analogue of _blocked without calling the visual model on invalid evidence."""
    deps = [str(dep).replace("|", "/") for dep in (blocked_by or [])]
    marker = f"{_BLOCKED_MARKER}{'|'.join(deps)}]]"
    ctx.vlm_skip(rid, f"受阻：{reason} {marker}")


async def _state(page, name):
    try:
        return await asyncio.wait_for(
            page.evaluate(
                "name => window[name] && typeof window[name].getState === 'function' ? window[name].getState() : null",
                name,
            ),
            timeout=_eval_timeout(),
        )
    except Exception:
        return None


async def _call(page, expression, arg=None):
    try:
        coro = page.evaluate(expression) if arg is None else page.evaluate(expression, arg)
        return await asyncio.wait_for(coro, timeout=_eval_timeout())
    except Exception:
        return None


async def _visible(page, selector):
    return bool(await _call(page, """selector=>{const e=document.querySelector(selector);if(!e)return false;const s=getComputedStyle(e),r=e.getBoundingClientRect();return !!e.offsetParent&&s.visibility!=='hidden'&&s.display!=='none'&&Number(s.opacity)>0&&r.width>0&&r.height>0}""", selector))


async def _dom_click(page, selector):
    try:
        loc = page.locator(selector).first
        if await loc.count() != 1:
            return False
        await loc.click(timeout=2800)
        return True
    except Exception:
        return False


async def _dom_select(page, selector, value):
    try:
        loc = page.locator(selector).first
        if await loc.count() != 1:
            return False
        await loc.select_option(str(value), timeout=2800)
        return True
    except Exception:
        return False


async def _feedback_snapshot(page, selector):
    """Capture implementation-agnostic visible feedback state.

    Rubrics require a visible feedback element, not any particular CSS class,
    language, tag type, or Tailwind convention.  The fingerprint intentionally
    observes text/ARIA/data attributes plus computed visual state for the element
    and a few descendants so text labels, icons, bars and rotated arrows are all
    valid implementations.
    """
    return await _call(page, r"""selector=>{
      const root=document.querySelector(selector);
      if(!root)return{exists:false,visible:false,text:'',fingerprint:''};
      const visible=e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity)>0&&r.width>0&&r.height>0};
      const snap=e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();const attrs={};for(const a of [...(e.attributes||[])].slice(0,20))attrs[a.name]=String(a.value||'').slice(0,140);const pseudo=which=>{try{const p=getComputedStyle(e,which);return{content:p.content,transform:p.transform,color:p.color,background:p.backgroundColor,opacity:p.opacity}}catch{return null}};let canvasSig='';if(e instanceof HTMLCanvasElement){try{canvasSig=e.toDataURL('image/png').slice(-320)}catch{}}return{tag:e.tagName,text:(e.textContent||'').trim().replace(/\s+/g,' ').slice(0,180),attrs,transform:s.transform,color:s.color,background:s.backgroundColor,opacity:s.opacity,width:Math.round(r.width*10)/10,height:Math.round(r.height*10)/10,before:pseudo('::before'),after:pseudo('::after'),canvasSig}};
      const parts=[root,...root.querySelectorAll('*')].slice(0,12).map(snap);
      return{exists:true,visible:visible(root),text:(root.textContent||'').trim(),fingerprint:JSON.stringify(parts)};
    }""", selector) or {"exists":False,"visible":False,"text":"","fingerprint":""}


async def _choose_player_count(page, value):
    """Choose a requested local-player count through the declared control without assuming its tag."""
    selector = "[data-testid='local-player-count']"
    try:
        root = page.locator(selector).first
        if await root.count() != 1 or not await root.is_visible():
            return False
        tag = (await root.evaluate("e=>e.tagName.toLowerCase()")) or ""
        typ = ((await root.get_attribute("type")) or "").lower()
        if tag == "select":
            await root.select_option(str(value), timeout=2800)
            return True
        if tag == "input" and typ in ("number", "text", "range"):
            await root.fill(str(value), timeout=2800)
            await root.press("Tab")
            return True

        candidates = root.locator("button, [role='button'], [role='radio'], input[type='radio'], input[type='button']")
        for i in range(await candidates.count()):
            item = candidates.nth(i)
            try:
                if not await item.is_visible():
                    continue
                blob = " ".join(filter(None, [
                    await item.inner_text(),
                    await item.get_attribute("value"),
                    await item.get_attribute("data-value"),
                    await item.get_attribute("aria-label"),
                ]))
                if re.search(rf"(?<!\d){int(value)}(?!\d)", blob):
                    await item.click(timeout=2800)
                    return True
            except Exception:
                continue

        # Some products put the data-testid on the button/radio itself.
        blob = " ".join(filter(None, [
            await root.inner_text(),
            await root.get_attribute("value"),
            await root.get_attribute("data-value"),
            await root.get_attribute("aria-label"),
        ]))
        if re.search(rf"(?<!\d){int(value)}(?!\d)", blob) and tag in ("button", "input"):
            await root.click(timeout=2800)
            return True

        # A valid stepper may expose the numeric value on the declared element
        # and place +/- buttons beside it.  Drive those visible sibling buttons
        # rather than requiring the value element itself to be interactive.
        m = re.search(r"(?<!\d)([2-9])(?!\d)", blob)
        if m:
            current = int(m.group(1))
            parent = root.locator("xpath=..")
            buttons = parent.locator("button, [role='button']")
            for _ in range(abs(int(value) - current)):
                want_up = int(value) > current
                clicked = False
                for i in range(await buttons.count()):
                    item = buttons.nth(i)
                    try:
                        if not await item.is_visible():
                            continue
                        label = " ".join(filter(None, [await item.inner_text(), await item.get_attribute("aria-label"), await item.get_attribute("title")])).strip().lower()
                        is_up = ("+" in label or "加" in label or "增" in label or "plus" in label or "more" in label)
                        is_down = ("-" in label or "−" in label or "减" in label or "少" in label or "minus" in label or "less" in label)
                        if (want_up and is_up) or ((not want_up) and is_down):
                            await item.click(timeout=2800); clicked = True; current += 1 if want_up else -1; break
                    except Exception:
                        continue
                if not clicked:
                    return False
            return current == int(value)
    except Exception:
        pass
    return False


async def _start_local_match(page, count, theme="forest"):
    """Start a local match through real UI, allowing a legitimate level-select step.

    A failed first navigation attempt is retried once from a clean page reload. This
    is evaluator recovery only: every accepted start still has to go through the
    product's visible multiplayer entry and start controls.
    """
    last={"selected":False,"started":False,"multiplayer":{},"hud":""}
    for attempt in range(2):
        if attempt:
            try:
                await page.reload(wait_until="load", timeout=7000)
                await _wait_state(page, "__game", lambda g: g.get("ready") is True, 3)
            except Exception:
                pass
        if not await _go_menu(page):
            continue
        if not await _dom_click(page, "[data-testid='multiplayer-btn']"):
            continue
        setup=await _wait_state(page, "__game", lambda g: g.get("gameState") == "local_setup", 2)
        if setup.get("gameState") != "local_setup":
            continue
        has_count_control = await _visible(page, "[data-testid='local-player-count']")
        selected = await _choose_player_count(page, count) if has_count_control else (count == 2)
        started = await _dom_click(page, "[data-testid='local-start-btn']")
        m = await _wait_state(page, "__multiplayer", lambda st: st.get("status") == "playing" and st.get("playerCount") == count, 1.6)
        if m.get("status") != "playing" or m.get("playerCount") != count:
            game = await _state(page, "__game") or {}
            if game.get("gameState") == "level_select" or await _visible(page, "#levelSelect"):
                # Starting local multiplayer may validly lead to course selection first.
                if await _dom_click(page, f"[data-testid='level-{theme}']"):
                    m = await _wait_state(page, "__multiplayer", lambda st: st.get("status") == "playing" and st.get("playerCount") == count, 3.2)
        hud = await _call(page, "()=>document.querySelector('[data-testid=current-player]')?.textContent||''") or ""
        last={"selected":selected,"started":started,"multiplayer":m or {},"hud":hud}
        if selected and started and m.get("status") == "playing" and m.get("playerCount") == count:
            return last
    return last


async def _wait_state(page, name, predicate, timeout=6.0, interval=.07):
    end = time.monotonic() + timeout
    last = None
    while time.monotonic() < end:
        last = await _state(page, name) or {}
        try:
            if predicate(last):
                return last
        except Exception:
            pass
        await page.wait_for_timeout(int(interval * 1000))
    return last or {}


def _dist(a, b, axes=("x", "y", "z")):
    if not isinstance(a, dict) or not isinstance(b, dict):
        return math.inf
    try:
        return math.sqrt(sum((float(a.get(k, 0)) - float(b.get(k, 0))) ** 2 for k in axes))
    except Exception:
        return math.inf


def _segment_distance(ax, az, bx, bz, px, pz):
    abx, abz = bx - ax, bz - az
    length_sq = abx * abx + abz * abz
    if length_sq <= 1e-12:
        return math.hypot(px - ax, pz - az)
    t = max(0.0, min(1.0, ((px - ax) * abx + (pz - az) * abz) / length_sq))
    return math.hypot(px - (ax + abx * t), pz - (az + abz * t))


def _finite_values(value):
    if isinstance(value, dict):
        return all(_finite_values(v) for v in value.values())
    if isinstance(value, list):
        return all(_finite_values(v) for v in value)
    if isinstance(value, float):
        return math.isfinite(value)
    return True


def _normalize2(x, z):
    m = math.hypot(x, z)
    return (x / m, z / m) if m > 1e-9 else (1.0, 0.0)


def _clear_shot_directions(course, position, count=2):
    """Pick obstacle/hole-clear directions inside public course bounds.

    Used for causal power comparisons so a stronger shot is not unfairly judged
    by hitting an obstacle earlier than a weaker shot. No mutation or hidden
    physics information is used.
    """
    if not isinstance(position,dict): return [{"x":1.0,"z":0.0}]
    px,pz=float(position.get("x",0) or 0),float(position.get("z",0) or 0)
    bounds=(course or {}).get("bounds") or {}; hole=(course or {}).get("hole") or {}; obstacles=(course or {}).get("obstacles") or []
    finite_bounds=all(isinstance(bounds.get(k),(int,float)) for k in ("minX","maxX","minZ","maxZ"))
    rows=[]
    for i in range(32):
        a=2*math.pi*i/32; dx,dz=math.cos(a),math.sin(a); travel=4.0
        if finite_bounds:
            limits=[]
            if dx>1e-6: limits.append((float(bounds["maxX"])-px-.45)/dx)
            elif dx<-1e-6: limits.append((float(bounds["minX"])-px+.45)/dx)
            if dz>1e-6: limits.append((float(bounds["maxZ"])-pz-.45)/dz)
            elif dz<-1e-6: limits.append((float(bounds["minZ"])-pz+.45)/dz)
            pos_limits=[v for v in limits if v>0]; travel=min([travel]+pos_limits)
        if travel<1.2: continue
        ex,ez=px+dx*travel,pz+dz*travel; clearance=travel
        if isinstance(hole,dict) and isinstance(hole.get("x"),(int,float)) and isinstance(hole.get("z"),(int,float)):
            clearance=min(clearance,_segment_distance(px,pz,ex,ez,float(hole["x"]),float(hole["z"]))-float(hole.get("radius",.5) or .5))
        for o in obstacles:
            if not isinstance(o,dict) or o.get("solid") is False: continue
            pos=o.get("position") or {};
            if not isinstance(pos.get("x"),(int,float)) or not isinstance(pos.get("z"),(int,float)): continue
            collider=o.get("collider") or {}; rad=float(o.get("radius",collider.get("radius",.55)) or .55)
            clearance=min(clearance,_segment_distance(px,pz,ex,ez,float(pos["x"]),float(pos["z"]))-rad)
        rows.append((clearance,travel,{"x":dx,"z":dz}))
    rows.sort(key=lambda r:(r[0],r[1]),reverse=True)
    chosen=[]
    for _,_,d in rows:
        if all(abs(d["x"]*q["x"]+d["z"]*q["z"])<.78 for q in chosen): chosen.append(d)
        if len(chosen)>=count: break
    return chosen or [{"x":1.0,"z":0.0}]


async def _menu_interactive(page):
    """Return true when menu state exposes at least one real menu action.

    Navigation helpers must not depend on the optional container assertion that R28
    scores separately; otherwise a missing #menu can cascade into unrelated rubrics.
    """
    game=await _state(page,"__game") or {}
    if game.get("gameState")!="menu":
        return False
    return bool(await _visible(page,"[data-testid='start-btn']") or await _visible(page,"[data-testid='multiplayer-btn']") or await _visible(page,"[data-testid='leaderboard-btn']"))


async def _go_menu(page):
    """Return to the menu through real UI when possible, reloading only as fallback.

    Reloading a Three.js app rebuilds the whole WebGL scene and was one of the
    largest costs in the suite. These controls are only navigation helpers; if a
    product does not expose a recognizable real back/menu control we retain the
    old external reload fallback, so the acceptance semantics do not change.
    """
    game = await _state(page, "__game") or {}
    if game.get("gameState") == "menu" and await _menu_interactive(page):
        return True

    # Prefer explicit stable controls first, then accessible/textual real buttons.
    candidates = []
    state = str(game.get("gameState") or "")
    if state == "local_setup":
        candidates.append("[data-testid='local-exit-btn']")
    if state == "playing":
        candidates.extend(["[aria-label='回到菜单']", "[title='回到菜单']"])
    candidates.extend(["button:has-text('返回主菜单')", "button:has-text('主菜单')", "button:has-text('返回')"])
    for selector in candidates:
        try:
            loc = page.locator(selector).first
            if await loc.count() and await loc.is_visible():
                await loc.click()
                menu = await _wait_state(page, "__game", lambda st: st.get("gameState") == "menu", .9)
                if menu.get("gameState") == "menu" and await _menu_interactive(page):
                    return True
        except Exception:
            continue

    try:
        await page.reload(wait_until="load", timeout=7000)
    except Exception:
        return False
    ready = await _wait_state(page, "__game", lambda state: state.get("ready") is True, 2.2)
    return bool(ready.get("ready") and ready.get("gameState") == "menu" and await _menu_interactive(page))


async def _ensure_single_player_menu(page):
    """Reach a clean single-player menu through visible product controls.

    Some products keep their local-multiplayer session enabled after a generic
    "back to menu" action. Entering and then exiting the multiplayer lobby is a
    real user flow that clears that session before single-player leaderboard and
    scoring checks; a reload is only a recovery fallback.
    """
    if not await _go_menu(page):
        return False
    mp=await _state(page,"__multiplayer") or {}
    if not mp.get("enabled"):
        return True
    if await _dom_click(page,"[data-testid='multiplayer-btn']"):
        setup=await _wait_state(page,"__game",lambda g:g.get("gameState")=="local_setup",1.8)
        if setup.get("gameState")=="local_setup" and await _dom_click(page,"[data-testid='local-exit-btn']"):
            menu=await _wait_state(page,"__game",lambda g:g.get("gameState")=="menu",1.4)
            mp2=await _state(page,"__multiplayer") or {}
            if menu.get("gameState")=="menu" and not mp2.get("enabled"):
                return True
    try:
        await page.reload(wait_until="load",timeout=7000)
    except Exception:
        return False
    ready=await _wait_state(page,"__game",lambda g:g.get("ready") is True and g.get("gameState")=="menu",3)
    mp3=await _state(page,"__multiplayer") or {}
    return bool(ready.get("ready") and ready.get("gameState")=="menu" and not mp3.get("enabled"))


async def _real_ui_return_to_menu(page, reenter, max_candidates=48):
    """Prove that a *real visible control* can return the current screen to menu.

    The rubric requires a usable return flow but prompt.md does not prescribe the
    control's label, language, tag or testid (except local-exit-btn in the local
    lobby).  Try visible buttons/links/role-buttons one by one.  Reload/navigation
    may be used only to restore the test state between candidates; a pass is
    recorded only when the candidate click itself reaches the menu.
    """
    for index in range(max_candidates):
        if index:
            try:
                if not await reenter():
                    return False
            except Exception:
                return False
        candidates = page.locator("button:visible, a[href]:visible, [role='button']:visible")
        try:
            count = min(await candidates.count(), max_candidates)
        except Exception:
            return False
        if index >= count:
            break
        item = candidates.nth(index)
        try:
            if not await item.is_visible() or not await item.is_enabled():
                continue
            await item.click(timeout=3500)
        except Exception:
            continue
        state = await _wait_state(page, "__game", lambda g: g.get("gameState") == "menu", .75)
        if state.get("gameState") == "menu" and await _menu_interactive(page):
            return True
    return False


async def _prove_result_continue_action(page):
    """Prove that a visible result control actually continues the user flow.

    Do not equate "there is some button" with the prompt's "可继续操作".  We try
    visible controls inside the result surfaces and accept one only when its own
    click changes the public game/multiplayer completion state or dismisses the
    result surface. Labels/testids are used only to choose a useful attempt order,
    never as the pass condition.
    """
    prep = await _call(page, r"""() => {
      const roots=[document.getElementById('resultScreen'),document.getElementById('localLeaderboardScreen')].filter(Boolean);
      const vis=e=>{if(!e)return false;const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity||1)>0&&r.width>0&&r.height>0};
      const rows=[];
      for(const root of roots.filter(vis)){
        for(const el of root.querySelectorAll('button,a[href],[role=button]')){
          if(!vis(el)||el.disabled||el.getAttribute('aria-disabled')==='true')continue;
          const label=(el.innerText||el.getAttribute('aria-label')||el.getAttribute('data-testid')||'').trim();
          const tid=String(el.getAttribute('data-testid')||'');
          const likely=/(result-next|restart|exit|next|continue|again|menu|back|继续|下一|再来|重开|返回|退出)/i.test(tid+' '+label);
          rows.push({el,label,likely});
        }
      }
      rows.sort((a,b)=>Number(b.likely)-Number(a.likely));
      rows.forEach((row,i)=>row.el.setAttribute('data-ut-result-action',String(i)));
      return rows.map((row,i)=>({index:i,label:row.label,likely:row.likely}));
    }""") or []
    if not prep:
        return {"ok":False,"attempts":[]}
    baseline_game=await _state(page,"__game") or {}
    baseline_mp=await _state(page,"__multiplayer") or {}
    attempts=[]
    for row in prep[:12]:
        selector=f"[data-ut-result-action='{int(row.get('index',0))}']"
        try:
            loc=page.locator(selector).first
            if not await loc.count() or not await loc.is_visible() or not await loc.is_enabled():
                continue
            await loc.click(timeout=2500)
        except Exception as exc:
            attempts.append({"label":row.get("label"),"clicked":False,"error":str(exc)[:120]})
            continue
        await page.wait_for_timeout(120)
        game=await _state(page,"__game") or {}
        mp=await _state(page,"__multiplayer") or {}
        roots_visible=await _call(page, r"""() => {const vis=e=>{if(!e)return false;const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity||1)>0&&r.width>0&&r.height>0};return [document.getElementById('resultScreen'),document.getElementById('localLeaderboardScreen')].some(vis)}""")
        changed=bool(
            game.get("gameState") != baseline_game.get("gameState")
            or mp.get("status") != baseline_mp.get("status")
            or roots_visible is False
        )
        attempts.append({"label":row.get("label"),"clicked":True,"gameState":game.get("gameState"),"mpStatus":mp.get("status"),"rootsVisible":roots_visible,"changed":changed})
        if changed:
            await _call(page,"()=>{document.querySelectorAll('[data-ut-result-action]').forEach(e=>e.removeAttribute('data-ut-result-action'));return true}")
            return {"ok":True,"label":row.get("label"),"attempts":attempts}
    await _call(page,"()=>{document.querySelectorAll('[data-ut-result-action]').forEach(e=>e.removeAttribute('data-ut-result-action'));return true}")
    return {"ok":False,"attempts":attempts}


async def _enter_level_ui(page, theme="forest"):
    """Enter a level using only the visible navigation flow.

    This intentionally does not require __course.levelId/theme. Rubrics such as R1
    test rendering/navigation independently from the full state-contract rubric R28.
    """
    if not await _go_menu(page):
        return False
    if not await _dom_click(page, "[data-testid='start-btn']"):
        return False
    state = await _wait_state(page, "__game", lambda s: s.get("gameState") == "level_select", 2)
    if state.get("gameState") != "level_select":
        return False
    if not await _dom_click(page, f"[data-testid='level-{theme}']"):
        return False
    game = await _wait_state(page, "__game", lambda s: s.get("gameState") == "playing", 4)
    return bool(game.get("gameState") == "playing")


async def _open_level(page, theme="forest"):
    if not await _enter_level_ui(page, theme):
        return False
    # Full semantic helper used by rubrics that explicitly depend on course identity.
    # theme is a free-form string in the prompt; only levelId identifies the selected
    # fixed level. Requiring theme == English levelId was an evaluator-only constraint.
    course = await _wait_state(page, "__course", lambda c: c.get("levelId") == theme and bool(c.get("theme")), 2.0)
    return bool(course.get("levelId") == theme and str(course.get("theme") or "").strip())


async def _reset_ball(page):
    """Establish a fresh shootable ball without requiring a reset-position feature.

    If the product happens to expose the old optional reset control, use it as a
    fast evaluator convenience. Otherwise re-enter the current level through the
    normal visible navigation flow. The reset control is not a product contract.
    """
    try:
        if await _visible(page, "[data-testid='reset-position']") and await _dom_click(page, "[data-testid='reset-position']"):
            ball = await _wait_state(page, "__ball", lambda b: not b.get("moving") and float(b.get("speed",0) or 0) <= .02 and not b.get("airborne"), 2.5)
            shot = await _state(page, "__shot") or {}
            if ball and shot.get("canShoot") is True:
                return True
    except Exception:
        pass
    course = await _state(page, "__course") or {}
    theme = course.get("levelId") if course.get("levelId") in ("forest", "desert", "snow") else "forest"
    if not await _open_level(page, theme):
        return False
    ball = await _wait_state(page, "__ball", lambda b: not b.get("moving") and float(b.get("speed",0) or 0) <= .02 and not b.get("airborne"), 2.0)
    shot = await _state(page, "__shot") or {}
    return bool(ball and shot.get("canShoot") is True)


async def _prepare_fresh_shot(page, theme="forest", reuse_ready=False):
    """Establish a stationary, shootable state without relying on prior rubric state.

    ``reuse_ready`` is used only when the rubric merely needs any genuine stable
    starting state (for example the motion lifecycle). It avoids destructive
    navigation when the previous real shot is already settling correctly.
    """
    game = await _state(page, "__game") or {}
    course = await _state(page, "__course") or {}
    if game.get("gameState") != "playing" or course.get("levelId") != theme:
        if not await _open_level(page, theme):
            return False
    if reuse_ready:
        ball=await _wait_state(page,"__ball",lambda b:b.get("moving") is False and isinstance(b.get("speed"),(int,float)) and float(b.get("speed") or 0)<=.02 and not b.get("airborne"),2.6,.05)
        shot=await _state(page,"__shot") or {}
        if ball and shot.get("canShoot") is True:
            return True
    if await _reset_ball(page):
        return True
    ball = await _state(page, "__ball") or {}
    shot = await _state(page, "__shot") or {}
    if ball.get("moving") is False and float(ball.get("speed",0) or 0) <= .02 and not ball.get("airborne") and shot.get("canShoot") is True:
        return True
    if not await _open_level(page, theme):
        return False
    ball = await _wait_state(page, "__ball", lambda b: b.get("moving") is False and float(b.get("speed",0) or 0) <= .02 and not b.get("airborne"), 2.0)
    shot = await _state(page, "__shot") or {}
    return bool(ball and shot.get("canShoot") is True)


async def _wait_ball_motion(page, timeout=1.5):
    return await _wait_state(
        page,
        "__ball",
        lambda b: b.get("moving") is True or (isinstance(b.get("speed"), (int, float)) and float(b.get("speed") or 0) > .02),
        timeout,
        .035,
    )


async def _dispatch_world_shot(page, direction, power):
    """Use real pointer input, translating a desired world direction to screen drag.

    __camera.angle is optional in the public contract, so derive the horizontal
    camera basis from the required position/target pair whenever possible.  Also
    start the gesture at the rendered ball's screen projection when it can be
    identified; falling back to the canvas center keeps implementations that
    intentionally accept drag-anywhere controls compatible.
    """
    dxw, dzw = _normalize2(float(direction.get("x", 0)), float(direction.get("z", 0)))
    camera = await _state(page, "__camera") or {}
    cp, ct = camera.get("position") or {}, camera.get("target") or {}
    basis_ok = all(isinstance(row.get(k), (int, float)) for row in (cp, ct) for k in ("x", "z"))
    if basis_ok:
        fx, fz = _normalize2(float(ct.get("x", 0)) - float(cp.get("x", 0)), float(ct.get("z", 0)) - float(cp.get("z", 0)))
        basis_ok = math.hypot(fx, fz) > .5
    if not basis_ok:
        # angle is optional, but when supplied it is still valid evidence.  The
        # neutral fallback is only used for a malformed camera hook and will be
        # caught independently by camera/state consistency rubrics.
        angle = float(camera.get("angle")) if isinstance(camera.get("angle"), (int, float)) else 0.0
        fx, fz = math.sin(angle), -math.cos(angle)
    right = (-fz, fx)
    forward = (fx, fz)
    horizontal = dxw * right[0] + dzw * right[1]
    vertical = dxw * forward[0] + dzw * forward[1]
    magnitude = max(.0, min(1.0, float(power))) * 190.0
    drag_dx = -horizontal * magnitude
    drag_dy = vertical * magnitude

    # Drive the canvas that the declared real WebGLRenderer actually renders to.
    # A valid product may contain other canvases (background, HUD, minimap), so
    # document.querySelector("canvas") / the first canvas is not a fair contract.
    # The start point is the actual rendered golf ball when identifiable.
    gesture = await _call(page, r"""async () => {
      const renderer=window.__THREE_RENDERER__,scene=window.__THREE_SCENE__;
      const canvas=renderer?.domElement;
      if(!(canvas instanceof HTMLCanvasElement)||!canvas.isConnected)return null;
      const rect=canvas.getBoundingClientRect(),style=getComputedStyle(canvas);
      if(style.display==='none'||style.visibility==='hidden'||Number(style.opacity)<=0||rect.width<=0||rect.height<=0)return null;

      // Reuse the same non-invasive render wrapper as _real_camera_probe so the
      // actual PerspectiveCamera can be observed even though no camera global is
      // part of the public contract.
      if(renderer&&typeof renderer.render==='function'&&window.__UT_CAMERA_RENDERER__!==renderer){
        const original=renderer.render;
        try{
          renderer.render=function(sc,camera){window.__UT_RENDER_CAMERA__=camera;return original.call(this,sc,camera)};
          window.__UT_CAMERA_RENDERER__=renderer;
        }catch{}
      }
      if(!window.__UT_RENDER_CAMERA__){
        await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
      }
      const camera=window.__UT_RENDER_CAMERA__;
      let sx=rect.x+rect.width*.52,sy=rect.y+rect.height*.54,projected=false;
      try{
        const bs=window.__ball?.getState?.()||{},bp=bs.position||{};
        const finite=n=>typeof n==='number'&&Number.isFinite(n);
        const dist=(a,b)=>a&&b&&finite(a.x)&&finite(a.z)&&finite(b.x)&&finite(b.z)?Math.hypot(a.x-b.x,a.z-b.z):1e9;
        const rows=[];
        scene?.updateMatrixWorld?.(true);camera?.updateMatrixWorld?.(true);camera?.updateProjectionMatrix?.();
        scene?.traverse?.(o=>{
          if(!o?.isMesh||o.visible===false||!o.position?.clone||typeof o.getWorldPosition!=='function')return;
          const p=o.position.clone();o.getWorldPosition(p);
          const named=/(^|[-_\s])(golf[-_\s]?)?ball($|[-_\s])/i.test(String(o.name||''))||/ball/i.test(String(o.userData?.role||o.userData?.type||''));
          const sphere=/sphere/i.test(String(o.geometry?.type||''));
          if(named||sphere)rows.push({p,named,d:dist(p,bp)});
        });
        rows.sort((a,b)=>(Number(b.named)-Number(a.named))||a.d-b.d);
        const hit=rows[0];
        if(hit&&camera?.isCamera&&hit.p?.clone){
          const q=hit.p.clone().project(camera);
          if([q.x,q.y,q.z].every(finite)&&Math.abs(q.x)<=1.15&&Math.abs(q.y)<=1.15){
            sx=rect.x+(q.x+1)*.5*rect.width;sy=rect.y+(1-q.y)*.5*rect.height;
            sx=Math.max(rect.x+8,Math.min(rect.right-8,sx));sy=Math.max(rect.y+8,Math.min(rect.bottom-8,sy));projected=true;
          }
        }
      }catch{}
      return{x:rect.x,y:rect.y,width:rect.width,height:rect.height,sx,sy,projected};
    }""")
    if not gesture:
        return {"ok": False}
    sx, sy = float(gesture["sx"]), float(gesture["sy"])
    before_ball = await _state(page, "__ball") or {}
    before_shot = await _state(page, "__shot") or {}
    aim_before = await _feedback_snapshot(page, "[data-testid='aim-feedback']")
    try:
        await page.mouse.move(sx, sy)
        await page.mouse.down()
        await page.mouse.move(sx + drag_dx, sy + drag_dy, steps=5)
        during = await _state(page, "__shot") or {}
        aim_during = await _feedback_snapshot(page, "[data-testid='aim-feedback']")
        await page.mouse.up()
    except Exception:
        try:
            await page.mouse.up()
        except Exception:
            pass
        return {"ok": False}
    after_shot = await _wait_state(page, "__shot", lambda s: not s.get("dragging"), 1)
    after_ball = await _state(page, "__ball") or {}
    return {
        "ok": True,
        "beforeBall": before_ball,
        "beforeShot": before_shot,
        "during": during,
        "afterShot": after_shot,
        "afterBall": after_ball,
        "aimVisible": bool(aim_during.get("visible")),
        "aimBefore": aim_before,
        "aimDuring": aim_during,
        "drag": {"dx": drag_dx, "dy": drag_dy, "projectedStart": bool(gesture.get("projected"))},
        "desired": {"x": dxw, "z": dzw},
    }


async def _wait_ball_stop(page, timeout=9.0, require_motion=False):
    """Wait for a real shot to settle, but abort quickly when motion never starts.

    Bad/cheat fixtures used to consume the full 4-9 second timeout repeatedly
    when their hooks stayed in an impossible limbo (moving=false, sleeping=false).
    A valid shot starts motion promptly; a valid already-settled ball reports
    sleeping=true. Detecting neither for ~0.9s is therefore a failed prerequisite,
    not useful waiting time.
    """
    started = time.monotonic()
    end = started + timeout
    rows = []
    saw_motion = False
    last_tick = None
    stagnant_ticks = 0
    while time.monotonic() < end:
        ball = await _state(page, "__ball") or {}
        perf = await _state(page, "__performance") or {}
        rows.append({"ball": ball, "perf": perf})
        speed = float(ball.get("speed", 0) or 0) if isinstance(ball.get("speed", 0), (int, float)) else 0.0
        if ball.get("moving") is True or speed > .02:
            saw_motion = True
        if ball.get("inHole") or ((not require_motion or saw_motion) and ball.get("moving") is False and speed <= .02 and not ball.get("airborne")):
            return rows
        tick = perf.get("simulationTick")
        if tick == last_tick:
            stagnant_ticks += 1
        else:
            stagnant_ticks = 0
            last_tick = tick
        elapsed = time.monotonic() - started
        if not saw_motion and elapsed >= .9:
            return rows
        if saw_motion and stagnant_ticks >= 12:
            return rows
        await page.wait_for_timeout(65)
    return rows


async def _shot_to_point(page, point, power=None, wait=True):
    ball = await _state(page, "__ball") or {}
    pos = ball.get("position") or {}
    dx = float(point.get("x", 0)) - float(pos.get("x", 0))
    dz = float(point.get("z", 0)) - float(pos.get("z", 0))
    distance = math.hypot(dx, dz)
    p = power if power is not None else max(.10, min(.82, distance / 18.0))
    row = await _dispatch_world_shot(page, {"x": dx, "z": dz}, p)
    if wait:
        row["samples"] = await _wait_ball_stop(page)
    return row


async def _play_to_hole(page, max_strokes=16, extra_strokes=0):
    """尝试用真实指针输入完成一洞，并返回评估侧实际取得的路径证据。

    这里的自动击球器只是“取证手段”，不是产品规则。没有把球打进洞只能说明
    本轮未取得完赛证据；只有当球真实到达洞口附近、或产品已经报告完赛状态时，
    才能据此对入洞逻辑本身作确定性失败判断。
    """
    course = await _state(page, "__course") or {}
    hole = course.get("hole") or {}
    diag = {
        "acceptedStrokes": 0,
        "motionShots": 0,
        "minDistance": None,
        "holeRadius": hole.get("radius"),
        "insideSamples": 0,
        "slowInsideSamples": 0,
        "minInsideSpeed": None,
        "endReason": "not-started",
    }
    if not isinstance(hole, dict) or not all(isinstance(hole.get(k), (int, float)) for k in ("x", "z")):
        diag["endReason"] = "invalid-hole-state"
        return False, 0, diag

    completion_budget = float(os.environ.get("WEB_UT_COMPLETION_BUDGET", "24"))
    deadline = time.monotonic() + max(12.0, completion_budget)
    settle_timeout = float(os.environ.get("WEB_UT_SHOT_SETTLE_TIMEOUT", "4.0"))
    max_observed_strokes = 0
    min_distance = math.inf

    def record_ball_sample(b):
        nonlocal min_distance
        pos = (b or {}).get("position") or {}
        if not all(isinstance(pos.get(k), (int, float)) for k in ("x", "z")):
            return
        dist = math.hypot(float(hole["x"]) - float(pos["x"]), float(hole["z"]) - float(pos["z"]))
        if not math.isfinite(dist):
            return
        min_distance = min(min_distance, dist)
        hole_radius = float(hole.get("radius", .5) or .5)
        speed = float((b or {}).get("speed", 0) or 0) if isinstance((b or {}).get("speed", 0), (int, float)) else math.inf
        # “直接反证”必须比“曾经靠近洞口”强得多：球中心需连续处于
        # 声明洞半径的内圈，并且处于近静止状态。高速掠过洞口不算。
        if dist <= max(.03, hole_radius * .72):
            diag["insideSamples"] += 1
            if math.isfinite(speed):
                prev = diag.get("minInsideSpeed")
                diag["minInsideSpeed"] = speed if prev is None else min(float(prev), speed)
            if speed <= .06 and (b or {}).get("moving") is not True:
                diag["slowInsideSamples"] += 1

    async def observe_distance():
        nonlocal max_observed_strokes
        b = await _state(page, "__ball") or {}
        g = await _state(page, "__game") or {}
        record_ball_sample(b)
        if isinstance(g.get("currentHoleStrokes"), (int, float)):
            max_observed_strokes = max(max_observed_strokes, int(g.get("currentHoleStrokes") or 0))
        return b, g

    await observe_distance()

    for _ in range(max(0, int(extra_strokes))):
        if time.monotonic() >= deadline:
            diag["endReason"] = "budget-before-padding"
            diag["minDistance"] = None if not math.isfinite(min_distance) else min_distance
            return False, max_observed_strokes, diag
        counted = False
        for retry in range(3):
            ball, game_before = await observe_distance()
            before_strokes = int(game_before.get("currentHoleStrokes", 0) or 0)
            if ball.get("inHole") or game_before.get("holeComplete"):
                diag["endReason"] = "completed-before-padding"
                diag["minDistance"] = None if not math.isfinite(min_distance) else min_distance
                return True, max_observed_strokes, diag
            pos = ball.get("position") or {}
            hx, hz = float(hole.get("x", 0)) - float(pos.get("x", 0)), float(hole.get("z", 0)) - float(pos.get("z", 0))
            dx, dz = _normalize2(-hz, hx)
            if retry % 2:
                dx, dz = -dx, -dz
            shot = await _dispatch_world_shot(page, {"x": dx, "z": dz}, .11 + .025 * retry)
            if not shot.get("ok"):
                continue
            rows = await _wait_ball_stop(page, min(3.2, settle_timeout), require_motion=True)
            g_after = await _state(page, "__game") or {}
            after_strokes = int(g_after.get("currentHoleStrokes", before_strokes) or 0)
            max_observed_strokes = max(max_observed_strokes, after_strokes)
            for sample in rows:
                record_ball_sample(sample.get("ball") or {})
            moved = bool(rows and any((r.get("ball") or {}).get("moving") is True or ((r.get("ball") or {}).get("speed",0) or 0) > .02 for r in rows))
            if moved:
                diag["motionShots"] += 1
            if after_strokes > before_strokes:
                diag["acceptedStrokes"] += after_strokes - before_strokes
            await observe_distance()
            if after_strokes > before_strokes and moved:
                counted = True
                break
        if not counted:
            diag["endReason"] = "padding-input-not-accepted"
            diag["minDistance"] = None if not math.isfinite(min_distance) else min_distance
            return False, max_observed_strokes, diag

    last_distance = math.inf
    stagnant = 0
    no_motion = 0
    jitters = (0.0, .12, -.12, .22, -.22, .34, -.34)
    for _attempt in range(max_strokes):
        if time.monotonic() >= deadline:
            diag["endReason"] = "completion-budget"
            break
        ball, game = await observe_distance()
        if ball.get("inHole") or game.get("holeComplete"):
            diag["endReason"] = "completed"
            diag["minDistance"] = None if not math.isfinite(min_distance) else min_distance
            return True, max_observed_strokes, diag
        pos = ball.get("position") or {}
        hx, hz = float(hole.get("x", 0)) - float(pos.get("x", 0)), float(hole.get("z", 0)) - float(pos.get("z", 0))
        distance = math.hypot(hx, hz)
        if not math.isfinite(distance):
            diag["endReason"] = "non-finite-distance"
            break
        if distance > last_distance - .15:
            stagnant += 1
        else:
            stagnant = 0
        if stagnant >= 8:
            diag["endReason"] = "driver-stagnant"
            break
        last_distance = distance
        base = math.atan2(hz, hx)
        angle = base + jitters[stagnant % len(jitters)]
        power = max(.08, min(.78, distance / 19.5))
        if distance < 2.4:
            power = max(.07, min(.19, distance / 10.0))
        before_strokes = int(game.get("currentHoleStrokes", 0) or 0)
        shot = await _dispatch_world_shot(page, {"x": math.cos(angle), "z": math.sin(angle)}, power)
        if not shot.get("ok"):
            diag["endReason"] = "pointer-dispatch-failed"
            break
        rows = await _wait_ball_stop(page, settle_timeout)
        g_after = await _state(page, "__game") or {}
        after_strokes = int(g_after.get("currentHoleStrokes", before_strokes) or 0)
        max_observed_strokes = max(max_observed_strokes, after_strokes)
        for sample in rows:
            record_ball_sample(sample.get("ball") or {})
        moved = any((r.get("ball") or {}).get("moving") is True or ((r.get("ball") or {}).get("speed",0) or 0) > .02 for r in rows)
        if moved:
            diag["motionShots"] += 1
        if after_strokes > before_strokes:
            diag["acceptedStrokes"] += after_strokes - before_strokes
        await observe_distance()
        no_motion = 0 if moved else no_motion + 1
        if no_motion >= 2:
            diag["endReason"] = "no-motion-after-input"
            break
    ball, game = await observe_distance()
    completed = bool(ball.get("inHole") or game.get("holeComplete"))
    if completed:
        diag["endReason"] = "completed"
    elif diag["endReason"] == "not-started":
        diag["endReason"] = "max-strokes"
    diag["minDistance"] = None if not math.isfinite(min_distance) else min_distance
    return completed, min(max_strokes + max(0, int(extra_strokes)), max_observed_strokes), diag


async def _play_local_player_to_turn_change(page, player_id, max_strokes=14, budget=20.0):
    """Drive the reported current local player with real shots until control changes.

    The helper mirrors the adaptive single-player completion strategy but observes
    the product's own multiplayer turn change instead of assuming per-stroke or
    per-hole sequencing. No state is mutated by the evaluator.
    """
    course=await _state(page,"__course") or {}; hole=course.get("hole") or {}
    if not all(isinstance(hole.get(k),(int,float)) for k in ("x","z")):
        return False,[]
    deadline=time.monotonic()+max(8.0,float(budget)); rows=[]; last_distance=math.inf; stagnant=0
    jitters=(0.0,.10,-.10,.18,-.18,.28,-.28)
    for attempt in range(max(1,int(max_strokes))):
        if time.monotonic()>=deadline:
            break
        mp=await _state(page,"__multiplayer") or {}
        if mp.get("status")=="complete" or mp.get("currentPlayerId")!=player_id:
            return True,rows
        ball=await _state(page,"__ball") or {}; pos=ball.get("position") or {}
        if not all(isinstance(pos.get(k),(int,float)) for k in ("x","z")):
            break
        hx,hz=float(hole["x"])-float(pos["x"]),float(hole["z"])-float(pos["z"]); distance=math.hypot(hx,hz)
        if not math.isfinite(distance):
            break
        stagnant=stagnant+1 if distance>last_distance-.12 else 0; last_distance=distance
        if stagnant>=7:
            break
        angle=math.atan2(hz,hx)+jitters[stagnant%len(jitters)]
        power=max(.08,min(.78,distance/19.5)); power=max(.07,min(.20,distance/10.0)) if distance<2.4 else power
        shot=await _dispatch_world_shot(page,{"x":math.cos(angle),"z":math.sin(angle)},power)
        samples=await _wait_ball_stop(page,min(5.0,max(.9,deadline-time.monotonic())),require_motion=True) if shot.get("ok") else []
        after=await _state(page,"__multiplayer") or {}
        rows.append({"stage":"advance","player":player_id,"attempt":attempt,"distance":round(distance,3),"shotOk":bool(shot.get("ok")),"samples":len(samples),"next":after.get("currentPlayerId"),"status":after.get("status")})
        if after.get("status")=="complete" or after.get("currentPlayerId")!=player_id:
            return True,rows
        moved=any((r.get("ball") or {}).get("moving") is True or ((r.get("ball") or {}).get("speed",0) or 0)>.02 for r in samples)
        if not shot.get("ok") or not moved:
            break
    final=await _state(page,"__multiplayer") or {}
    return bool(final.get("status")=="complete" or final.get("currentPlayerId")!=player_id),rows


async def _collect_local_hio(page, owner_id, item, max_attempts=5, budget=22.0):
    """Collect an HIO for one local player without assuming a per-stroke turn model.

    If control moves to the other player after a missed attempt, advance that real
    player only until the product naturally returns control, then retry. All state
    changes still come from normal canvas input.
    """
    def inv_hio(row):
        return next((int(v.get("count",0) or 0) for v in (row or {}).get("powerupInventory") or [] if v.get("type")=="hole_in_one"),0)
    owner0=next((p for p in ((await _state(page,"__multiplayer") or {}).get("players") or []) if p.get("id")==owner_id),{}) or {}; before=inv_hio(owner0)
    logs=[]; attempts=0; deadline=time.monotonic()+max(8.0,float(budget))
    while attempts<max(1,int(max_attempts)) and time.monotonic()<deadline:
        mp=await _state(page,"__multiplayer") or {}; owner=next((p for p in mp.get("players") or [] if p.get("id")==owner_id),{}) or {}; count=inv_hio(owner)
        if count>before: return True,count,logs
        if mp.get("status")=="complete": break
        current=mp.get("currentPlayerId")
        if current!=owner_id:
            remaining=max(4.0,deadline-time.monotonic())
            advanced,rows=await _play_local_player_to_turn_change(page,current,max_strokes=10,budget=min(7.0,remaining)) if current else (False,[])
            logs.append({"stage":"return-owner","current":current,"advanced":advanced,"rows":rows[-3:]})
            if not advanced: break
            continue
        shot=await _shot_to_point(page,item.get("position") or {},power=None,wait=False)
        samples=await _wait_ball_stop(page,3.0,require_motion=True) if shot.get("ok") else []
        after=await _state(page,"__multiplayer") or {}; owner_after=next((p for p in after.get("players") or [] if p.get("id")==owner_id),{}) or {}; count_after=inv_hio(owner_after)
        logs.append({"stage":"hio-pickup","attempt":attempts,"shotOk":bool(shot.get("ok")),"samples":len(samples),"ownerCount":count_after,"next":after.get("currentPlayerId")})
        attempts+=1
        if count_after>before: return True,count_after,logs
        if not shot.get("ok"): break
    final=await _state(page,"__multiplayer") or {}; owner_final=next((p for p in final.get("players") or [] if p.get("id")==owner_id),{}) or {}; final_count=inv_hio(owner_final)
    return final_count>before,final_count,logs


async def _real_scene_probe(page):
    return await _call(page, r"""() => {
      const scene=window.__THREE_SCENE__,renderer=window.__THREE_RENDERER__;
      const ballState=window.__ball?.getState?.()||{},course=window.__course?.getState?.()||{};
      const bp=ballState.position||{},hp=course.hole||{};
      const finite=n=>typeof n==='number'&&Number.isFinite(n);
      const pos=o=>{try{const e=o?.matrixWorld?.elements;if(e&&e.length>=16&&[e[12],e[13],e[14]].every(finite))return{x:e[12],y:e[13],z:e[14]}}catch{}const p=o?.position;return p&&[p.x,p.y,p.z].every(finite)?{x:p.x,y:p.y,z:p.z}:null};
      const dist=(a,b)=>a&&b&&finite(a.x)&&finite(a.z)&&finite(b.x)&&finite(b.z)?Math.hypot(a.x-b.x,a.z-b.z):1e9;
      const objects=[];let traversed=false;
      try{if(scene?.isScene&&typeof scene.traverse==='function'){scene.updateMatrixWorld?.(true);scene.traverse(o=>{const p=pos(o);objects.push({uuid:String(o?.uuid||''),name:String(o?.name||''),type:String(o?.type||''),isMesh:!!o?.isMesh,isLight:!!o?.isLight,visible:o?.visible!==false,geometry:String(o?.geometry?.type||''),materialType:String(Array.isArray(o?.material)?o.material[0]?.type||'':o?.material?.type||''),matrixWorldValid:!!(o?.matrixWorld?.elements&&o.matrixWorld.elements.length===16&&Array.from(o.matrixWorld.elements).every(finite)),userData:o?.userData||{},position:p})});traversed=true}}catch{}
      const meshes=objects.filter(o=>o.isMesh&&o.position),visibleMeshes=meshes.filter(o=>o.visible);
      const ballName=o=>/(^|[-_\s])(golf[-_\s]?)?ball($|[-_\s])/i.test(o.name)||/ball/i.test(String(o.userData?.role||o.userData?.type||''));
      const holeName=o=>/(^|[-_\s])(hole|cup)($|[-_\s])/i.test(o.name)||/(hole|cup)/i.test(String(o.userData?.role||o.userData?.type||''));
      const ballRows=visibleMeshes.filter(o=>ballName(o)||/sphere/i.test(o.geometry)).map(o=>({...o,d:dist(o.position,bp),named:ballName(o)})).sort((a,b)=>(b.named-a.named)||a.d-b.d);
      const holeRows=visibleMeshes.filter(o=>holeName(o)||/(cylinder|circle|ring|torus)/i.test(o.geometry)).map(o=>({...o,d:dist(o.position,hp),named:holeName(o)})).sort((a,b)=>(b.named-a.named)||a.d-b.d);
      const br=ballRows[0],hr=holeRows[0],ballLimit=Math.max(1.2,Number(ballState.radius||.25)*5);
      const actualBall=br&&(br.named||br.d<=ballLimit)?br.position:null,actualHole=hr&&(hr.named||hr.d<=1.6)?hr.position:null;
      // Keep all positioned meshes, not only named ones. Object names/userData are
      // helpful hints but are not part of the public contract; proximity is a valid
      // fallback when correlating a state obstacle/power-up with the rendered scene.
      const named=objects.filter(o=>o.position&&o.isMesh).slice(0,800).map(o=>({uuid:o.uuid,name:o.name,type:o.type,geometry:o.geometry,materialType:o.materialType,position:o.position,isMesh:o.isMesh,visible:o.visible,userData:o.userData||{}}));
      let contextObject=false,contextLost=false;try{const gl=renderer?.getContext?.();contextObject=!!gl;contextLost=typeof gl?.isContextLost==='function'&&gl.isContextLost()}catch{}
      const canvas=renderer?.domElement;
      const rect=canvas?.getBoundingClientRect?.();
      const canvasMatches=!!canvas&&canvas instanceof HTMLCanvasElement&&canvas.isConnected&&!!rect&&rect.width>0&&rect.height>0;
      return {traversed,sceneIsScene:scene?.isScene===true,objectCount:objects.length,visibleMeshCount:visibleMeshes.length,geometryCount:visibleMeshes.filter(o=>o.geometry).length,materialCount:visibleMeshes.filter(o=>o.materialType).length,lightCount:objects.filter(o=>o.isLight&&o.visible).length,matrixWorldCount:objects.filter(o=>o.matrixWorldValid).length,namedObjects:named,actualBall,actualHole,namedBallCount:meshes.filter(ballName).length,namedHoleCount:meshes.filter(holeName).length,rendererIsWebGL:renderer?.isWebGLRenderer===true,renderFunction:typeof renderer?.render==='function',rendererInfo:!!renderer?.info,getContextFunction:typeof renderer?.getContext==='function',contextObject,contextLost,canvasMatches};
    }""") or {}


def _scene_mesh_for_state_item(scene, item, *, tolerance=.9):
    """Match a declared obstacle/power-up to a visible rendered mesh generically.

    Names and userData IDs are optional implementation details. Prefer them when
    present, but accept a visible mesh colocated with the declared state position.
    """
    if not isinstance(scene, dict) or not isinstance(item, dict):
        return None
    item_id = str(item.get("id") or "")
    pos = item.get("position") or {}
    rows = [row for row in (scene.get("namedObjects") or []) if isinstance(row, dict) and row.get("visible")]
    for row in rows:
        ud = row.get("userData") or {}
        refs = [ud.get(k) for k in ("powerupId", "obstacleId", "itemId", "id") if ud.get(k) is not None]
        if item_id and (item_id in str(row.get("name") or "") or any(str(v) == item_id for v in refs)):
            return row
    if isinstance(pos, dict) and all(isinstance(pos.get(k), (int, float)) for k in ("x", "z")):
        nearby = sorted(rows, key=lambda row: _dist(row.get("position"), pos, ("x", "z")))
        if nearby and _dist(nearby[0].get("position"), pos, ("x", "z")) <= float(tolerance):
            return nearby[0]
    return None


async def _find_powerup_level(page, kind):
    """Find a real level containing an active power-up of the requested type."""
    for theme in ("forest", "desert", "snow"):
        if not await _open_level(page, theme):
            continue
        state = await _state(page, "__powerups") or {}
        item = next((row for row in state.get("items") or [] if isinstance(row, dict) and row.get("type") == kind and row.get("active") and not row.get("collected")), None)
        if item:
            return theme, item, state
    return None, None, {}


async def _pickup_powerup(page, kinds=("hole_in_one","speed_boost","bounce_pad"), preferred_theme=None, budget=18.0):
    """用真实输入尝试拾取库存型道具，并返回“是否真正接近目标”的取证信息。"""
    deadline=time.monotonic()+max(6.0,float(budget))
    themes=[preferred_theme] if preferred_theme else []
    themes += [t for t in ("forest","desert","snow") if t not in themes]
    diag={"foundItems":0,"foundModels":0,"acceptedShots":0,"motionShots":0,"minDistance":None}
    closest=math.inf
    for theme in themes:
        if time.monotonic()>=deadline: break
        if not theme or not await _open_level(page, theme):
            continue
        state0=await _state(page,"__powerups") or {}
        for kind in kinds:
            items=[row for row in state0.get("items") or [] if isinstance(row,dict) and row.get("type")==kind and row.get("active") and not row.get("collected")]
            for item in items:
                diag["foundItems"]+=1
                scene0=await _real_scene_probe(page)
                model=_scene_mesh_for_state_item(scene0,item,tolerance=.9)
                if not model:
                    continue
                diag["foundModels"]+=1
                def count(st):
                    return next((int(r.get("count",0) or 0) for r in st.get("inventory") or [] if r.get("type")==kind),0)
                before=count(state0)
                for power in (.48,.62,.76,.88):
                    if time.monotonic()>=deadline: break
                    await _reset_ball(page)
                    g0=await _state(page,"__game") or {}; strokes0=int(g0.get("currentHoleStrokes",0) or 0)
                    shot=await _shot_to_point(page,item.get("position") or {},power=power,wait=False)
                    samples=[]
                    if shot.get("ok"):
                        samples=await _wait_ball_stop(page,2.8,require_motion=True)
                    g1=await _state(page,"__game") or {}; strokes1=int(g1.get("currentHoleStrokes",strokes0) or 0)
                    if strokes1>strokes0: diag["acceptedShots"]+=strokes1-strokes0
                    if any((r.get("ball") or {}).get("moving") is True or ((r.get("ball") or {}).get("speed",0) or 0)>.02 for r in samples): diag["motionShots"]+=1
                    for sample in samples:
                        b=(sample.get("ball") or {}); d=_dist(b.get("position"),item.get("position"),("x","z"))
                        if math.isfinite(d): closest=min(closest,d)
                    state1=await _state(page,"__powerups") or {}
                    row=next((r for r in state1.get("items") or [] if r.get("id")==item.get("id")),{})
                    after=count(state1)
                    if row.get("collected") is True and row.get("active") is False and after==before+1:
                        scene1=await _real_scene_probe(page)
                        same=[o for o in scene1.get("namedObjects") or [] if model.get("uuid") and o.get("uuid")==model.get("uuid") and o.get("visible")]
                        diag["minDistance"]=None if not math.isfinite(closest) else closest
                        return {"ok":True,"theme":theme,"item":item,"model":model,"before":before,"after":after,"state":state1,"sameVisible":same,"diag":diag}
    diag["minDistance"]=None if not math.isfinite(closest) else closest
    return {"ok":False,"diag":diag}


async def _real_camera_probe(page):
    await _call(page, r"""() => {const renderer=window.__THREE_RENDERER__;if(!renderer||typeof renderer.render!=='function')return false;if(window.__UT_CAMERA_RENDERER__!==renderer){const original=renderer.render;try{renderer.render=function(scene,camera){window.__UT_RENDER_CAMERA__=camera;return original.call(this,scene,camera)};window.__UT_CAMERA_RENDERER__=renderer}catch{return false}}return true}""")
    await page.wait_for_timeout(80)
    return await _call(page, r"""() => {const c=window.__UT_RENDER_CAMERA__,renderer=window.__THREE_RENDERER__,hook=window.__camera?.getState?.()||{};const finite=n=>typeof n==='number'&&Number.isFinite(n);const vec=v=>v&&[v.x,v.y,v.z].every(finite)?{x:v.x,y:v.y,z:v.z}:null;const e=c?.matrixWorld?.elements;let forward=null;if(e&&e.length===16&&Array.from(e).every(finite)){const x=-e[8],y=-e[9],z=-e[10],m=Math.hypot(x,y,z)||1;forward={x:x/m,y:y/m,z:z/m}}const target=hook.target||{},p=vec(c?.position);let targetDirection=null;if(p&&[target.x,target.y,target.z].every(finite)){const x=target.x-p.x,y=target.y-p.y,z=target.z-p.z,m=Math.hypot(x,y,z)||1;targetDirection={x:x/m,y:y/m,z:z/m}}const dot=forward&&targetDirection?forward.x*targetDirection.x+forward.y*targetDirection.y+forward.z*targetDirection.z:null;const canvas=renderer?.domElement,clientAspect=canvas?.clientHeight?canvas.clientWidth/canvas.clientHeight:null;return{captured:!!c,isPerspective:c?.isPerspectiveCamera===true,position:p,forward,targetDirection,dot,aspect:finite(c?.aspect)?c.aspect:null,clientAspect,hook}}""") or {}


async def _state_integrity_probe(page):
    return await _call(page, r"""() => {
      const names=['__contract','__game','__ball','__shot','__course','__multiplayer','__powerups','__camera','__leaderboard','__performance'];
      const errors=[],detail={};
      const critical=(name,s)=>{if(!s||typeof s!=='object')return null;if(name==='__game')return[s.gameState,s.currentHoleStrokes,s.totalStrokes,s.currentScore,s.totalScore,s.holeComplete];if(name==='__shot')return[s.dragging,s.canShoot,s.strokeCount,s.power,s.direction];if(name==='__multiplayer')return[s.status,s.playerCount,s.currentPlayerId,s.turnIndex,s.round,s.revision,s.winnerId,s.tiedPlayerIds,s.players];if(name==='__leaderboard')return[s.levelBest,s.overall,s.persisted];if(name==='__powerups')return[s.inventory,s.lastTriggeredId,s.armedType,s.selectedPlacedId];return s};
      const poison=o=>{const seen=new Set(),q=[o];let touched=0;while(q.length){const cur=q.shift();if(!cur||typeof cur!=='object'||seen.has(cur))continue;seen.add(cur);for(const k of Object.keys(cur)){const v=cur[k];if(v&&typeof v==='object'){q.push(v);continue}try{cur[k]='__eval_poison__';touched++}catch{}}try{cur.__eval_poison__=31337;touched++}catch{}}return touched};
      for(const name of names){
        const hook=window[name];
        if(!hook||typeof hook.getState!=='function'){errors.push('missing:'+name);continue}
        const extraFns=Object.keys(hook).filter(k=>k!=='getState'&&typeof hook[k]==='function');
        let a,b,c,before,after;
        try{a=hook.getState();b=hook.getState();before=JSON.stringify(critical(name,b));poison(a);c=hook.getState();after=JSON.stringify(critical(name,c))}catch(e){errors.push('read:'+name+':'+String(e));continue}
        const leaked=JSON.stringify(c).includes('__eval_poison__')||JSON.stringify(c).includes('31337');
        if(a===b||b===c)errors.push('shared-reference:'+name);
        if(leaked)errors.push('mutation-leak:'+name);
        if(before!==after)errors.push('read-side-effect:'+name);
        detail[name]={fresh:a!==b&&b!==c,leaked,stable:before===after,extraFns};
      }
      return{errors,detail};
    }""") or {"errors": ["integrity-evaluation"]}


def _rows_sorted(rows, key):
    """Validate primary ascending order and rank/display coherence only.

    Equal-score records may use any deterministic secondary ordering. Stability
    across reloads is verified separately by R32/R27.
    """
    if not isinstance(rows, list):
        return False
    values=[]; ranks=[]
    for row in rows:
        if not isinstance(row, dict):
            return False
        value=row.get(key); rank=row.get("rank")
        if not isinstance(value,(int,float)) or not math.isfinite(float(value)) or not isinstance(rank,int) or rank<1:
            return False
        values.append(float(value)); ranks.append(rank)
    if not all(b>=a for a,b in zip(values,values[1:])) or (ranks and ranks[0]!=1):
        return False
    # Equal scores may use shared rank (1,1,3) or stable display rank (1,2,3).
    # A strictly worse score, however, must never receive a better/equal rank.
    for av,bv,ar,br in zip(values,values[1:],ranks,ranks[1:]):
        if bv>av and br<=ar: return False
        if bv==av and br<ar: return False
    return True


async def _mutate_web_leaderboard_storage(page, op, payload=None):
    """Best-effort evaluator-only mutation of recognizable Web Storage leaderboards.

    This is an optional strengthening path for tie-order tests, never a product
    contract. prompt.md requires persistent leaderboard behaviour but does not
    require localStorage/sessionStorage or any particular serialized schema. If
    no safely recognizable Web Storage representation exists, callers must fall
    back to public __leaderboard observations rather than failing the rubric.
    """
    return await _call(page, r'''arg=>{
      const themes=['forest','desert','snow'];
      const isObj=v=>!!v&&typeof v==='object'&&!Array.isArray(v);
      const looksLevels=v=>isObj(v)&&themes.some(k=>Array.isArray(v[k]))&&themes.every(k=>v[k]===undefined||Array.isArray(v[k]));
      const locate=(root,depth=0,path=[])=>{
        if(!isObj(root)||depth>4)return null;
        if(isObj(root.levelBest))return{holder:root,levels:root.levelBest,overall:Array.isArray(root.overall)?root.overall:null,path:path.concat('levelBest'),shape:'levelBest'};
        if(looksLevels(root))return{holder:root,levels:root,overall:null,path,shape:'direct-level-map'};
        for(const [k,v] of Object.entries(root)){
          if(isObj(v)){const hit=locate(v,depth+1,path.concat(k));if(hit)return hit}
        }
        return null;
      };
      const normRows=rows=>Array.isArray(rows)?rows:[];
      const removeSynthetic=board=>{
        for(const t of themes){if(Array.isArray(board.levels[t]))board.levels[t]=board.levels[t].filter(r=>!/^tie-|^overall-/.test(String(r?.playerId||'')))}
        if(Array.isArray(board.overall))board.holder.overall=board.overall.filter(r=>!/^tie-|^overall-/.test(String(r?.playerId||'')));
      };
      const apply=(root)=>{
        const board=locate(root);if(!board)return null;
        removeSynthetic(board);
        if(arg.op==='reset'){
          for(const t of themes)board.levels[t]=[];
          if(Array.isArray(board.overall))board.holder.overall=[];
        }else if(arg.op==='cleanup'){
          // removeSynthetic above is the operation
        }else if(arg.op==='level-tie'){
          const score=Number(arg.payload?.strokes),par=Number(arg.payload?.par||4);
          const theme=themes.includes(arg.payload?.theme)?arg.payload.theme:'forest';
          if(!Number.isFinite(score))return null;
          board.levels[theme]=normRows(board.levels[theme]).concat([
            {playerId:'tie-z',playerName:'Z',strokes:score,par,relativeToPar:score-par,rank:0,achievedAt:2000},
            {playerId:'tie-a',playerName:'A',strokes:score,par,relativeToPar:score-par,rank:0,achievedAt:2000},
            {playerId:'tie-old',playerName:'Old',strokes:score,par,relativeToPar:score-par,rank:0,achievedAt:1000},
          ]);
        }else if(arg.op==='overall-tie'){
          const total=Number(arg.payload?.total),levels=arg.payload?.levels||{},pars=arg.payload?.pars||{};
          if(!Number.isFinite(total)||!themes.every(t=>Number.isFinite(Number(levels[t]))))return null;
          const players=[['overall-z','Z',2000],['overall-a','A',2000],['overall-old','Old',1000]];
          if(Array.isArray(board.overall)){
            board.holder.overall=board.overall.concat(players.map(([playerId,playerName,achievedAt])=>({playerId,playerName,totalStrokes:total,levelStrokes:{...levels},rank:0,achievedAt})));
          }else{
            for(const t of themes){
              const strokes=Number(levels[t]);
              board.levels[t]=normRows(board.levels[t]).concat(players.map(([playerId,playerName,achievedAt])=>({playerId,playerName,strokes,par:Number.isFinite(Number(pars[t]))?Number(pars[t]):4,relativeToPar:strokes-(Number.isFinite(Number(pars[t]))?Number(pars[t]):4),rank:0,achievedAt})));
            }
          }
        }else return null;
        return{root,shape:board.shape,path:board.path.join('.')};
      };
      const stores=[['localStorage',window.localStorage],['sessionStorage',window.sessionStorage]];
      const changed=[];
      for(const [kind,storage] of stores){
        for(let i=0;i<storage.length;i++){
          const key=storage.key(i);let root=null;try{root=JSON.parse(storage.getItem(key))}catch{continue}
          const hit=apply(root);if(!hit)continue;
          try{storage.setItem(key,JSON.stringify(hit.root));changed.push({kind,key,shape:hit.shape,path:hit.path})}catch{}
        }
      }
      return changed;
    }''', {"op":op,"payload":payload or {}}) or []


async def _complete_level(page, theme, extra=0):
    if not await _open_level(page, theme):
        return None
    ok, observed_strokes, completion_diag = await _play_to_hole(page, 18, extra_strokes=extra)
    if not ok:
        return None
    game = await _wait_state(page, "__game", lambda g: g.get("holeComplete") is True, 2)
    if isinstance(game, dict):
        # The semantic result state may precede React paint by one frame. Visibility
        # must be derived from computed style + geometry rather than offsetParent:
        # fixed/isolated result surfaces can legitimately have a null offsetParent.
        expected_score = game.get("currentScore")
        result = {}
        end = time.monotonic() + 2.0
        while time.monotonic() < end:
            result = await _call(page, r"""expected=>{
              const e=document.getElementById('resultScreen'),s=e?.querySelector('[data-testid=result-score],.result-score');
              if(!e)return{visible:false,text:'',scoreText:'',scoreValue:''};
              const cs=getComputedStyle(e),r=e.getBoundingClientRect();
              const visible=cs.display!=='none'&&cs.visibility!=='hidden'&&Number(cs.opacity||1)>0&&r.width>0&&r.height>0;
              const text=e.innerText||'',scoreText=s?.textContent||'',scoreValue=s?.getAttribute('data-score')||'';
              const numeric=[scoreValue,...(scoreText.match(/[-+]?\d[\d,]*(?:\.\d+)?/g)||[]),...(text.match(/[-+]?\d[\d,]*(?:\.\d+)?/g)||[])]
                .map(v=>Number(String(v).replaceAll(',',''))).filter(Number.isFinite);
              const scoreMatch=typeof expected!=='number'||!Number.isFinite(expected)||numeric.some(v=>Math.abs(v-expected)<=Math.max(.5,Math.abs(expected)*.001));
              return{visible,text,scoreText,scoreValue,scoreMatch};
            }""", expected_score) or {}
            if result.get("visible") and str(result.get("text") or "").strip() and result.get("scoreMatch", True):
                break
            await page.wait_for_timeout(35)
        game = dict(game); game["__observedStrokes"] = observed_strokes; game["__completionDiag"] = completion_diag; game["__resultVisible"] = bool(result.get("visible")); game["__resultText"] = str(result.get("text") or ""); game["__resultScoreText"] = str(result.get("scoreText") or ""); game["__resultScoreValue"] = str(result.get("scoreValue") or ""); game["__resultScoreMatch"] = bool(result.get("scoreMatch", False))
    return game



def _source_stack_probe(source_dir=None, build_ok=None):
    """Inspect source-only technology rubrics without depending on browser progress.

    R38-R41 are source-stack requirements and R42 is the runner's build fact. They
    must remain independently scoreable even when long gameplay checks time out or
    the product itself fails to build. The probe also rejects a destructive whole-
    document takeover after React mounts: in that case React/Tailwind are only a
    transient wrapper rather than the actual visible application.
    """
    if source_dir is None:
        source_env = os.environ.get("WEB_UT_SOURCE_DIR", "")
        source = Path(source_env).resolve() if source_env else None
    else:
        source = Path(source_dir).resolve()
    if build_ok is None:
        build_value = os.environ.get("WEB_UT_BUILD_OK") == "1"
    else:
        build_value = bool(build_ok)
    result = {
        "source": str(source) if source else "",
        "react19": False,
        "typescript": False,
        "vite": False,
        "tailwind": False,
        "build": build_value,
        "detail": [],
    }
    if not source or not source.is_dir():
        result["detail"].append("source-dir-missing")
        return result
    try:
        package = json.loads((source / "package.json").read_text(encoding="utf-8"))
    except Exception as exc:
        result["detail"].append(f"package-json:{exc}")
        return result
    deps = {**(package.get("dependencies") or {}), **(package.get("devDependencies") or {})}
    scripts = package.get("scripts") or {}
    react = str(deps.get("react", "")); react_dom = str(deps.get("react-dom", ""))
    react19_deps = bool(
        re.search(r"(?:^|[^0-9])19(?:\.|[^0-9]|$)", react)
        and re.search(r"(?:^|[^0-9])19(?:\.|[^0-9]|$)", react_dom)
    )
    src = source / "src"
    ts_files = list(src.rglob("*.ts")) + list(src.rglob("*.tsx")) if src.is_dir() else []
    tsx_files = list(src.rglob("*.tsx")) if src.is_dir() else []
    css_files = list(src.rglob("*.css")) if src.is_dir() else []
    css_text = "\n".join(p.read_text(encoding="utf-8", errors="ignore") for p in css_files)
    source_rows = [(p, p.read_text(encoding="utf-8", errors="ignore")) for p in ts_files]
    source_text = "\n".join(text for _, text in source_rows)
    tsx_text = "\n".join(p.read_text(encoding="utf-8", errors="ignore") for p in tsx_files)

    # Require an actual React DOM entry, but do not require the entry file to have
    # a .tsx extension (React.createElement in .ts is valid TypeScript/React).
    def is_react_entry(text):
        return bool(
            "react-dom/client" in text
            and re.search(r"(?:\bcreateRoot|ReactDOM\.createRoot)\s*\(", text)
            and ".render(" in text
        )
    react_entry_files = [(path, text) for path, text in source_rows if is_react_entry(text)]
    react_entry = bool(react_entry_files)

    # Reject a real whole-document takeover, while avoiding a false negative from
    # an unrelated/pre-mount innerHTML helper elsewhere in the source tree.
    direct_document_rewrite = bool(re.search(r"document\s*\.\s*(?:open|write|close)\s*\(", source_text, re.I))
    post_mount_body_rewrite = False
    for _path, text in react_entry_files:
        mount_positions = [m.start() for m in re.finditer(r"(?:\bcreateRoot|ReactDOM\.createRoot)\s*\(", text)]
        rewrite_positions = [m.start() for m in re.finditer(r"document\s*\.\s*(?:body|documentElement)\s*\.\s*innerHTML\s*=", text, re.I)]
        if mount_positions and rewrite_positions and max(rewrite_positions) > min(mount_positions):
            post_mount_body_rewrite = True
            break
    destructive_takeover = bool(direct_document_rewrite or post_mount_body_rewrite)
    result["react19"] = bool(react19_deps and react_entry and not destructive_takeover)

    # TypeScript must contain the React entry plus substantive TS/TSX source.
    result["typescript"] = bool((source / "tsconfig.json").is_file() and ts_files and react_entry)
    vite_cfg = any((source / name).is_file() for name in (
        "vite.config.ts","vite.config.js","vite.config.mts","vite.config.mjs","vite.config.cts","vite.config.cjs"
    ))
    result["vite"] = bool(
        "vite" in deps
        and vite_cfg
        and re.search(r"\bvite\b", str(scripts.get("build", "")))
        and re.search(r"\bvite\b", str(scripts.get("dev", "")))
    )
    has_directives = all(re.search(rf"@tailwind\s+{name}\b", css_text) for name in ("base", "components", "utilities"))
    tailwind_cfg = any((source / name).is_file() for name in ("tailwind.config.js","tailwind.config.cjs","tailwind.config.mjs","tailwind.config.ts","tailwind.config.cts","tailwind.config.mts"))
    postcss_cfg = any((source / name).is_file() for name in ("postcss.config.js","postcss.config.cjs","postcss.config.mjs","postcss.config.ts","postcss.config.cts","postcss.config.mts"))
    # Look specifically near className assignments, but recognize the broad set of
    # standard utility families rather than a hand-picked five-token allowlist.
    class_segments = re.findall(r"className\s*=\s*([^>\n]{1,600})", source_text)
    utility_pattern = re.compile(
        r"(?:^|[\s\"'`])(?:"
        r"(?:sm|md|lg|xl|2xl|hover|focus|active|disabled|group-hover|dark):)*"
        r"(?:block|inline|inline-block|hidden|flex|inline-flex|grid|contents|relative|absolute|fixed|sticky|"
        r"container|truncate|uppercase|lowercase|capitalize|italic|antialiased|"
        r"(?:bg|text|font|leading|tracking|border|rounded|shadow|opacity|z|order|basis|grow|shrink|"
        r"w|h|min-w|max-w|min-h|max-h|size|p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml|gap|space-x|space-y|"
        r"items|justify|content|self|place-items|place-content|place-self|overflow|object|cursor|select|"
        r"transition|duration|ease|delay|transform|translate-x|translate-y|scale|rotate|origin|ring|outline)-[^\s\"'`}]+)"
        r"(?=$|[\s\"'`}])"
    )
    has_utility = any(utility_pattern.search(segment) for segment in class_segments)
    result["tailwind"] = bool(
        "tailwindcss" in deps
        and tailwind_cfg
        and postcss_cfg
        and has_directives
        and has_utility
        and react_entry
        and not destructive_takeover
    )
    result["detail"] = [
        f"react={react}",
        f"react-dom={react_dom}",
        f"ts_files={len(ts_files)}",
        f"react_entry={react_entry}",
        f"destructive_takeover={destructive_takeover}",
        f"build_script={scripts.get('build')}",
        f"dev_script={scripts.get('dev')}",
        f"tailwind_directives={has_directives}",
        f"tailwind_config={tailwind_cfg}",
        f"postcss_config={postcss_cfg}",
        f"tailwind_utility={has_utility}",
    ]
    return result


def _record_source_stack_checks(ctx, *, source_dir=None, build_ok=None):
    """Record R38-R42 once, before any long-running gameplay sequence."""
    stack = _source_stack_probe(source_dir=source_dir, build_ok=build_ok)
    ctx.check(38, bool(stack.get("react19")), f"源码技术栈检查：react19={stack.get('react19')}，detail={stack.get('detail')}。")
    ctx.check(39, bool(stack.get("typescript")), f"源码技术栈检查：typescript={stack.get('typescript')}，detail={stack.get('detail')}。")
    ctx.check(40, bool(stack.get("vite")), f"源码技术栈检查：vite={stack.get('vite')}，detail={stack.get('detail')}。")
    ctx.check(41, bool(stack.get("tailwind")), f"源码技术栈检查：tailwind={stack.get('tailwind')}，detail={stack.get('detail')}。")
    ctx.check(42, bool(stack.get("build")), f"本轮 runner 从当前源码执行 npm run build 的结果 build={stack.get('build')}。")
    return stack


def _surface_point(surface):
    if not isinstance(surface, dict):
        return None
    center = surface.get("center")
    if isinstance(center, dict) and isinstance(center.get("x"), (int, float)) and isinstance(center.get("z"), (int, float)):
        return {"x": float(center["x"]), "z": float(center["z"])}
    bounds = surface.get("bounds")
    if isinstance(bounds, dict) and all(isinstance(bounds.get(k), (int, float)) for k in ("minX","maxX","minZ","maxZ")):
        return {"x": (float(bounds["minX"])+float(bounds["maxX"]))/2, "z": (float(bounds["minZ"])+float(bounds["maxZ"]))/2}
    return None


async def _install_runtime_probe(page):
    script = r"""() => {
      if (window.__UT_RUNTIME_PROBE__) return window.__UT_RUNTIME_PROBE__;
      const probe={rafScheduled:0,rafCancelled:0,rafActive:0,rafMaxActive:0,listenerAdds:0,listenerRemoves:0,listenerNet:0};
      const raf=window.requestAnimationFrame.bind(window), caf=window.cancelAnimationFrame.bind(window); const active=new Set();
      window.requestAnimationFrame=(cb)=>{let id=0;const wrapped=(t)=>{active.delete(id);probe.rafActive=active.size;return cb(t)};id=raf(wrapped);active.add(id);probe.rafScheduled++;probe.rafActive=active.size;probe.rafMaxActive=Math.max(probe.rafMaxActive,active.size);return id};
      window.cancelAnimationFrame=(id)=>{if(active.delete(id)){probe.rafCancelled++;probe.rafActive=active.size}return caf(id)};
      const add=EventTarget.prototype.addEventListener, rem=EventTarget.prototype.removeEventListener;
      const registry=new WeakMap();
      const captureOf=opt=>typeof opt==='boolean'?opt:!!opt?.capture;
      const removeRecord=(target,type,fn,capture)=>{
        const byType=registry.get(target),byFn=byType?.get(type),byCapture=byFn?.get(fn),rec=byCapture?.get(capture);
        if(!rec||!rec.active)return null;
        rec.active=false;probe.listenerRemoves++;probe.listenerNet=Math.max(0,probe.listenerNet-1);byCapture.delete(capture);
        if(!byCapture.size)byFn.delete(fn);if(!byFn.size)byType.delete(type);return rec;
      };
      EventTarget.prototype.addEventListener=function(type,fn,opt){
        if(fn==null)return add.call(this,type,fn,opt);
        const capture=captureOf(opt);let byType=registry.get(this);if(!byType){byType=new Map();registry.set(this,byType)}
        let byFn=byType.get(type);if(!byFn){byFn=new Map();byType.set(type,byFn)}let byCapture=byFn.get(fn);if(!byCapture){byCapture=new Map();byFn.set(fn,byCapture)}
        const existing=byCapture.get(capture);if(existing?.active)return add.call(this,type,existing.wrapped,opt);
        const once=!!(opt&&typeof opt==='object'&&opt.once);let wrapped=fn;const target=this;
        if(once){wrapped=function(...args){removeRecord(target,type,fn,capture);return typeof fn==='function'?fn.apply(this,args):fn?.handleEvent?.apply(fn,args)}}
        const rec={wrapped,active:true};byCapture.set(capture,rec);probe.listenerAdds++;probe.listenerNet++;
        const signal=opt&&typeof opt==='object'?opt.signal:null;
        if(signal&&typeof signal.addEventListener==='function')add.call(signal,'abort',()=>removeRecord(target,type,fn,capture),{once:true});
        return add.call(this,type,wrapped,opt)
      };
      EventTarget.prototype.removeEventListener=function(type,fn,opt){const rec=removeRecord(this,type,fn,captureOf(opt));return rem.call(this,type,rec?.wrapped||fn,opt)};
      window.__UT_RUNTIME_PROBE__=probe; return probe;
    }"""
    # Install for the current document and every subsequent reload/navigation.
    # _open_level may legitimately reload when the product has no contracted
    # in-game back button; the evaluator probe must survive that navigation path.
    try:
        # add_init_script executes raw JavaScript source; unlike page.evaluate it
        # does not call a string containing only an arrow-function expression.
        # Wrap the evaluator function as an IIFE so the probe is actually
        # installed in every new document.
        await page.add_init_script(f"({script})()")
    except Exception:
        pass
    return await _call(page, script) or {}


async def _renderer_canvas_png(page):
    """Capture the actual renderer canvas, excluding unrelated HUD chrome."""
    try:
        ok=await _call(page, """()=>{document.querySelectorAll('[data-ut-render-canvas]').forEach(e=>e.removeAttribute('data-ut-render-canvas'));const c=window.__THREE_RENDERER__?.domElement;if(!(c instanceof HTMLCanvasElement)||!c.isConnected)return false;c.setAttribute('data-ut-render-canvas','1');return true}""")
        if not ok:
            return None
        loc=page.locator('canvas[data-ut-render-canvas="1"]').first
        if await loc.count()!=1 or not await loc.is_visible():
            return None
        return await loc.screenshot(type="png")
    except Exception:
        return None


async def _renderer_powerup_focus_png(page, item):
    """Capture a real renderer crop centered on a state-correlated 3D power-up.

    State is used only to frame the screenshot; VLM still judges the pixels. The
    target mesh is found by public powerup id first, then by world-position
    proximity. No product state is mutated.
    """
    if not isinstance(item, dict):
        return None
    try:
        await _real_camera_probe(page)
        target = {"id": str(item.get("id") or ""), "position": item.get("position") or {}}
        projected = await _call(page, r"""arg=>{
          const scene=window.__THREE_SCENE__,renderer=window.__THREE_RENDERER__,camera=window.__UT_RENDER_CAMERA__;
          const canvas=renderer?.domElement;if(!scene?.traverse||!camera||!(canvas instanceof HTMLCanvasElement))return null;
          const p=arg.position||{},finite=n=>typeof n==='number'&&Number.isFinite(n);let best=null,bestD=1e9;
          scene.updateMatrixWorld?.(true);camera.updateMatrixWorld?.(true);camera.updateProjectionMatrix?.();
          scene.traverse(o=>{if(!o?.isMesh||o.visible===false||!o.position?.clone)return;
            let w=o.position.clone();try{o.getWorldPosition?.(w)}catch{}
            const tagged=String(o.userData?.powerupId||'')===String(arg.id||'');
            const d=finite(p.x)&&finite(p.z)?Math.hypot(w.x-p.x,w.z-p.z):1e9;
            if(tagged||d<bestD){if(tagged||!best||d<bestD){best={o,w,tagged};bestD=d}}
          });
          if(!best||(!best.tagged&&bestD>1.2))return null;
          const q=best.w.clone().project(camera),r=canvas.getBoundingClientRect();
          if(![q.x,q.y,q.z,r.left,r.top,r.width,r.height].every(finite)||r.width<=0||r.height<=0)return null;
          return{x:r.left+(q.x*.5+.5)*r.width,y:r.top+(-q.y*.5+.5)*r.height,canvas:{left:r.left,top:r.top,width:r.width,height:r.height},behind:q.z>1};
        }""", target)
        if not projected or projected.get("behind"):
            return await _renderer_canvas_png(page)
        box=projected.get("canvas") or {}; cx=float(projected.get("x",0)); cy=float(projected.get("y",0))
        left=float(box.get("left",0)); top=float(box.get("top",0)); width=float(box.get("width",0)); height=float(box.get("height",0))
        crop_w=min(width,max(300.0,width*.46)); crop_h=min(height,max(240.0,height*.46))
        x=max(left,min(cx-crop_w/2,left+width-crop_w)); y=max(top,min(cy-crop_h/2,top+height-crop_h))
        return await page.screenshot(type="png",clip={"x":x,"y":y,"width":crop_w,"height":crop_h})
    except Exception:
        return await _renderer_canvas_png(page)


async def _frame_course_visual(page, max_clicks=10):
    """Use only the product zoom control to bring the real ball and hole away from canvas edges."""
    async def framed():
        return await _call(page, r"""()=>{
          const scene=window.__THREE_SCENE__,renderer=window.__THREE_RENDERER__,camera=window.__UT_RENDER_CAMERA__;
          const bs=window.__ball?.getState?.()||{},cs=window.__course?.getState?.()||{};
          if(!scene?.traverse||!renderer?.domElement||!camera?.isCamera)return false;
          const finite=n=>typeof n==='number'&&Number.isFinite(n),dist=(a,b)=>a&&b&&finite(a.x)&&finite(a.z)&&finite(b.x)&&finite(b.z)?Math.hypot(a.x-b.x,a.z-b.z):1e9;
          scene.updateMatrixWorld?.(true);camera.updateMatrixWorld?.(true);camera.updateProjectionMatrix?.();
          const find=(target,kind)=>{let best=null,bestD=1e9;scene.traverse(o=>{if(!o?.isMesh||o.visible===false||!o.position?.clone)return;let w=o.position.clone();try{o.getWorldPosition?.(w)}catch{};const tag=kind==='ball'?(/ball/i.test(String(o.name||''))+ /ball/i.test(String(o.userData?.role||o.userData?.type||''))>0):(/hole|cup|flag/i.test(String(o.name||''))+ /hole|cup|flag/i.test(String(o.userData?.role||o.userData?.type||''))>0);const d=dist(w,target);if(tag||d<bestD){if(tag||!best||d<bestD){best=w;bestD=d}}});return best&&bestD<2.0?best:null};
          const bp=find(bs.position||{},'ball'),hp=find(cs.hole||{},'hole'); if(!bp||!hp)return false;
          const q1=bp.clone().project(camera),q2=hp.clone().project(camera);
          return [q1.x,q1.y,q2.x,q2.y].every(finite)&&Math.abs(q1.x)<.84&&Math.abs(q1.y)<.84&&Math.abs(q2.x)<.84&&Math.abs(q2.y)<.84;
        }""")
    await _real_camera_probe(page)
    for _ in range(max(0,int(max_clicks))+1):
        if await framed(): return True
        if not await _dom_click(page,"[data-testid='zoom-out']"): break
        await page.wait_for_timeout(55)
        await _real_camera_probe(page)
    return bool(await framed())


async def _theme_composite_vlm(page, ctx, captured, rid=35, prompt=None):
    """Build a three-theme comparison from screenshots already taken.

    R3-R6 necessarily load every theme, so visual rubrics can reuse those real
    screenshots instead of reloading the Three.js game solely to collect evidence.
    """
    shots=[]
    for theme in ("forest","desert","snow"):
        png=(captured or {}).get(theme)
        if not png:
            return False
        shots.append((theme, base64.b64encode(png).decode()))
    payload=[{"theme":theme,"src":"data:image/png;base64,"+data} for theme,data in shots]
    await _call(page, r"""async rows=>{const old=document.getElementById('__ut-theme-composite');if(old)old.remove();const root=document.createElement('div');root.id='__ut-theme-composite';Object.assign(root.style,{position:'fixed',inset:'0',zIndex:'2147483647',background:'#09110d',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px',padding:'8px'});for(const row of rows){const cell=document.createElement('div');cell.style.cssText='display:grid;grid-template-rows:auto 1fr;min-width:0;background:#111;border:1px solid #888';const label=document.createElement('div');label.textContent=row.theme;label.style.cssText='padding:8px;color:white;font:700 18px sans-serif;text-align:center';const img=document.createElement('img');img.src=row.src;img.style.cssText='width:100%;height:100%;object-fit:contain;background:#050805;min-width:0;min-height:0';cell.append(label,img);root.append(cell)}document.body.append(root);await Promise.all([...root.querySelectorAll('img')].map(img=>img.decode?.().catch(()=>{})||Promise.resolve()));return true}""",payload)
    if prompt is None:
        prompt = "Answer YES only if the three labeled panels visibly show three clearly distinguishable 3D course themes consistent with forest, desert, and snow/ice. Judge the overall scene language using any combination of materials, layout, terrain treatment, props, lighting, and environmental modeling. Do not require a specific asset such as trees, dunes, or ice crystals. Different text labels or a simple global tint alone are insufficient."
    await ctx.vlm(rid,prompt)
    await _call(page,"()=>{document.getElementById('__ut-theme-composite')?.remove();return true}")
    return True

async def _run_checks_impl(page, ctx):
    # 1 实际 Three.js 运行。主菜单阶段允许真实 renderer canvas 被页面布局隐藏；
    # rubric 关注的是“应用可启动并持续使用真实 Three.js 三维渲染”，因此先通过
    # 真实 UI 进入一个可玩关卡，再要求可见 canvas、PerspectiveCamera 和持续帧推进。
    await _wait_state(page, "__game", lambda g: g.get("ready") is True, 3)
    contract = await _state(page, "__contract") or {}
    opened_r1 = await _enter_level_ui(page, "forest")
    if not opened_r1:
        # A single clean reload is recovery from an evaluator/navigation race; the
        # accepted path still has to use the visible start + forest controls.
        try:
            await page.reload(wait_until="load", timeout=7000)
            await _wait_state(page, "__game", lambda g: g.get("ready") is True, 3)
            opened_r1 = await _enter_level_ui(page, "forest")
        except Exception:
            opened_r1 = False
    perf0, perf1, real, real_camera = {}, {}, {}, {}
    render_progress = False
    if opened_r1:
        # Contract initialization and Three scene mounting can complete on adjacent
        # frames. Re-read after the accepted real UI navigation so a pre-ready
        # empty snapshot cannot turn an otherwise valid renderer into a false 0.
        contract = await _wait_state(page, "__contract", lambda c: c.get("gameType") == "3d-mini-golf" and c.get("renderer") == "threejs" and c.get("stateSource") == "live", 2.0) or contract
        for _ in range(12):
            perf0 = await _state(page, "__performance") or {}
            real = await _real_scene_probe(page)
            real_camera = await _real_camera_probe(page)
            await page.wait_for_timeout(100)
            perf1 = await _state(page, "__performance") or {}
            real = await _real_scene_probe(page)
            render_progress = bool(
                isinstance(perf0.get("renderFrame"), (int, float))
                and isinstance(perf1.get("renderFrame"), (int, float))
                and perf1.get("renderFrame") > perf0.get("renderFrame")
            )
            if (
                real.get("sceneIsScene") and real.get("rendererIsWebGL")
                and real.get("visibleMeshCount", 0) > 0 and real.get("lightCount", 0) >= 1
                and real.get("canvasMatches") and real.get("contextObject") and not real.get("contextLost")
                and real_camera.get("captured") and real_camera.get("isPerspective") and render_progress
            ):
                break
    ctx.check(1, bool(opened_r1 and contract.get("gameType") == "3d-mini-golf" and contract.get("renderer") == "threejs" and contract.get("stateSource") == "live" and real.get("sceneIsScene") and real.get("rendererIsWebGL") and real_camera.get("captured") and real_camera.get("isPerspective") and real.get("visibleMeshCount", 0) > 0 and real.get("lightCount", 0) >= 1 and real.get("canvasMatches") and real.get("contextObject") and not real.get("contextLost") and render_progress), f"通过真实 UI 进入 forest={opened_r1}；Three.js Scene/WebGLRenderer 正在真实渲染，真实 render() 捕获相机 PerspectiveCamera={real_camera.get('isPerspective')}，当前可见网格 {real.get('visibleMeshCount',0)} 个、灯光 {real.get('lightCount',0)} 个，renderFrame 从 {perf0.get('renderFrame')} 增至 {perf1.get('renderFrame')}。")

    # 2 主入口 + 真实返回流。返回控件没有固定文案/标签契约，因此通过
    # 可见可点击元素逐项验证，而不是依赖“返回/Back”等语言文本。
    async def enter_level_select():
        if not await _go_menu(page): return False
        if not await _dom_click(page, "[data-testid='start-btn']"): return False
        st=await _wait_state(page,"__game",lambda g:g.get("gameState")=="level_select",2)
        return st.get("gameState")=="level_select"
    async def enter_leaderboard():
        if not await _go_menu(page): return False
        if not await _dom_click(page, "[data-testid='leaderboard-btn']"): return False
        st=await _wait_state(page,"__game",lambda g:g.get("gameState")=="leaderboard",2)
        return st.get("gameState")=="leaderboard"

    await _go_menu(page)
    menu = await _visible(page, "#menu")
    level_ok = await enter_level_select()
    level_return = await _real_ui_return_to_menu(page, enter_level_select) if level_ok else False

    await _go_menu(page)
    mp_ok = await _dom_click(page, "[data-testid='multiplayer-btn']")
    mp_state = await _wait_state(page, "__game", lambda g: g.get("gameState") == "local_setup", 2)
    mp_return = False
    if mp_ok and mp_state.get("gameState") == "local_setup":
        mp_return = await _dom_click(page,"[data-testid='local-exit-btn']")
        if mp_return:
            back=await _wait_state(page,"__game",lambda g:g.get("gameState")=="menu",1.2)
            mp_return=bool(back.get("gameState")=="menu" and await _menu_interactive(page))

    lb_ok = await enter_leaderboard()
    lb_return = await _real_ui_return_to_menu(page, enter_leaderboard) if lb_ok else False
    ctx.check(2, bool(level_ok and level_return and mp_ok and mp_state.get("gameState") == "local_setup" and mp_return and lb_ok and lb_return), f"三个主入口均能进入对应页面；真实 UI 返回流：关卡选择={level_return}、多人设置={mp_return}、排行榜={lb_return}。")

    # 3-6 三关及主题/可玩性
    level_rows = {}
    theme_shots = {}
    r34_forest_shot = None
    for theme in ("forest", "desert", "snow"):
        # Keep UI entry and semantic course-state validation separate.  R3-R6
        # depend on the public course contract, while R34/R35 are visual rubrics
        # that only need proof that the real UI entered the requested course.
        ui_opened = await _enter_level_ui(page, theme)
        course = {}
        opened = False
        if ui_opened:
            course = await _wait_state(
                page,
                "__course",
                lambda c: c.get("levelId") == theme and bool(str(c.get("theme") or "").strip()),
                2.0,
            ) or await _state(page, "__course") or {}
            opened = bool(course.get("levelId") == theme and str(course.get("theme") or "").strip())
        game_state = await _state(page, "__game") or {}
        scene = await _real_scene_probe(page)
        # R34/R35 are visual rubrics.  Capture the actual page after the real
        # navigation attempt even when the semantic hook says the level did not
        # open.  A missing/wrong visual state is evidence for the visual rubric;
        # suppressing the screenshot would make the audit needlessly N.
        await page.wait_for_timeout(80)
        # Visual rubrics require screenshots of the actually-entered course. A menu or
        # preview captured after failed navigation is invalid evidence, not a theme shot.
        if ui_opened and game_state.get("gameState") == "playing":
            theme_shots[theme] = await _renderer_canvas_png(page) or await page.screenshot(type="png")
        if ui_opened and game_state.get("gameState") == "playing" and theme == "forest":
            await _frame_course_visual(page, 10)
            await page.wait_for_timeout(80)
            r34_forest_shot = await _renderer_canvas_png(page) or await page.screenshot(type="png")
        before_shot = await _state(page, "__shot") or {}
        before_ball = await _state(page, "__ball") or {}
        shot = await _shot_to_point(page, course.get("hole") or {"x": 1, "z": 0}, power=.14, wait=False) if opened else {"ok": False}
        ball = await _wait_state(page, "__ball", lambda b: b.get("moving") is True or (b.get("speed", 0) or 0) > .02 or _dist(before_ball.get("position"), b.get("position"), ("x","z")) > .01, .8) if opened else {}
        after_shot = await _state(page, "__shot") or {}
        solid_obstacles=[o for o in course.get("obstacles") or [] if isinstance(o,dict) and o.get("solid") is True]
        obstacle_models=[_scene_mesh_for_state_item(scene,o,tolerance=max(.9,float(o.get("radius",.5) or .5)*1.8)) for o in solid_obstacles]
        visible_obstacle_model=any(bool(m) for m in obstacle_models)
        level_rows[theme] = {"uiOpened": ui_opened, "opened": opened, "course": course, "game": game_state, "scene": scene, "shot": shot, "ball": ball, "beforeShot": before_shot, "afterShot": after_shot, "beforeBall": before_ball, "solidObstacles":solid_obstacles, "visibleObstacleModel":visible_obstacle_model}
    def level_matches_selection(t, r):
        course = r.get("course") or {}
        ctheme = str(course.get("theme") or "").strip()
        return bool(r.get("opened") and (r.get("game") or {}).get("gameState") == "playing" and course.get("levelId") == t and ctheme)
    # prompt.md declares theme:string, not a canonical enum or unique identifier.
    # levelId is the contract field that uniquely identifies forest/desert/snow;
    # requiring three distinct theme strings would merely replace the old English-ID
    # overconstraint with a new representation constraint. Theme semantics are judged
    # by the per-course and VLM rubrics instead.
    theme_values = [str((r.get("course") or {}).get("theme") or "").strip().casefold() for r in level_rows.values()]
    all_levels = all(level_matches_selection(t, r) for t, r in level_rows.items()) and len(theme_values) == 3 and all(theme_values)
    ctx.check(3, all_levels, "森林、沙漠、冰雪三个入口均可进入，公开 course 状态和真实 Three.js 场景随关卡切换。")
    signatures = {t: json.dumps({"s": r["course"].get("surfaces"), "h": r["course"].get("hole"), "spawn": r["course"].get("spawn")}, sort_keys=True) for t, r in level_rows.items()}
    for rid, theme in ((4, "forest"), (5, "desert"), (6, "snow")):
        row = level_rows[theme]
        distinct = len(set(signatures.values())) == 3
        moved = (row["ball"].get("speed", 0) or 0) > .01 or row["ball"].get("moving") is True or _dist(row["beforeBall"].get("position"), row["ball"].get("position"), ("x","z")) > .01 or row["afterShot"].get("strokeCount") == row["beforeShot"].get("strokeCount", 0) + 1
        spawn=row["course"].get("spawn") or {}; hole=row["course"].get("hole") or {}
        finite_layout=all(isinstance((spawn if k.startswith("s") else hole).get(k[-1]),(int,float)) for k in ("sx","sz","hx","hz"))
        ctx.check(rid, bool(row["opened"] and row["course"].get("loaded") is True and row["course"].get("surfaces") and finite_layout and row["scene"].get("actualBall") and row["scene"].get("actualHole") and distinct and moved), f"{theme} 关卡具有有限出生点/球洞与可玩表面，真实球/球洞存在，三关布局/表面签名有差异={distinct}，并能通过真实拖拽产生击球/位移。实体障碍若存在由 R12 独立验证。")

    # 34/35 only consume screenshots captured after a confirmed real course entry.
    # A menu/preview after failed navigation is invalid visual evidence and is marked
    # evaluator-blocked instead of being sent to VLM as though it were a course.
    if r34_forest_shot:
        await ctx.vlm_image(34, "Answer YES only if ALL of these are clearly identifiable in this exact renderer screenshot: (1) perspective 3D ground/course, (2) a golf ball, (3) an unmistakable hole/cup or flag located inside the play area and not merely a clipped colored ellipse at the image edge, (4) lighting/depth cues, and (5) at least one visible 3D scene object or physical obstacle distinct from ball and ground. If the alleged hole/flag is edge-clipped, ambiguous, too tiny to identify, or inferred only from golf context, answer NO. Judge visible pixels only.", r34_forest_shot)
    else:
        _vlm_blocked(ctx, 34, "未取得真实进入 forest 后的 renderer 截图，不能用菜单/预览替代视觉证据。", blocked_by=["evaluator-forest-visual-input"])
    if not await _theme_composite_vlm(page, ctx, theme_shots):
        _vlm_blocked(ctx, 35, "至少一个主题未取得真实进入关卡后的 renderer 截图，不能用菜单/预览拼成三关对比。", blocked_by=["evaluator-theme-visual-input"])

    # 7 拖拽期间实时瞄准 + 松开出球
    fresh7 = await _prepare_fresh_shot(page, "forest")
    course = await _state(page, "__course") or {}
    hole = course.get("hole") or {"x": 1, "z": 0}
    ball0 = await _state(page, "__ball") or {}
    p0 = ball0.get("position") or {}
    shot_row = await _dispatch_world_shot(page, {"x": hole.get("x", 0)-p0.get("x", 0), "z": hole.get("z", 0)-p0.get("z", 0)}, .42) if fresh7 else {"ok":False}
    during = shot_row.get("during") or {}; before_shot = shot_row.get("beforeShot") or {}; after_shot = shot_row.get("afterShot") or {}
    moving7 = await _wait_ball_motion(page, 1.2) if shot_row.get("ok") else {}
    vel = moving7.get("velocity") or {}; direction = during.get("direction") or {}
    vmag = math.hypot(float(vel.get("x", 0) or 0), float(vel.get("z", 0) or 0)); dmag = math.hypot(float(direction.get("x", 0) or 0), float(direction.get("z", 0) or 0)); dot = (float(vel.get("x", 0) or 0)*float(direction.get("x", 0) or 0)+float(vel.get("z", 0) or 0)*float(direction.get("z", 0) or 0))/(vmag*dmag) if vmag*dmag else -1
    aim_before = shot_row.get("aimBefore") or {}; aim_during = shot_row.get("aimDuring") or {}
    aim_changed = bool(aim_during.get("visible") and (not aim_before.get("visible") or aim_before.get("fingerprint") != aim_during.get("fingerprint")))
    ctx.check(7, bool(fresh7 and shot_row.get("ok") and during.get("dragging") is True and (during.get("power") or 0) > 0 and aim_changed and after_shot.get("dragging") is False and after_shot.get("strokeCount") == before_shot.get("strokeCount", 0)+1 and vmag > .05 and dot > .85), f"真实 Canvas 拖拽期间 dragging=true、power={during.get('power')}；aim-feedback 拖拽前/中可见={aim_before.get('visible')}/{aim_during.get('visible')} 且反馈状态变化={aim_changed}；松开后只增加一杆，球初速度与公开瞄准方向一致（dot={dot:.3f}）。")

    # 8 力度与方向因果：每一组都从独立静止状态开始。
    # 世界坐标映射属于产品实现细节；真实因果应以本次拖拽期间公开的
    # __shot.direction / power 为准，再核对真实球速度和位移。
    speeds=[]; displacements=[]; direction_dots=[]; actual_powers=[]; actual_dirs=[]; prep_rows=[]
    course8 = await _state(page, "__course") or {}
    clear_dirs=_clear_shot_directions(course8,course8.get("spawn") or {},2); requested_dir=clear_dirs[0]
    for gesture_power in (.28, .68):
        fresh = await _prepare_fresh_shot(page, "forest"); prep_rows.append(fresh)
        b0 = await _state(page, "__ball") or {}
        row = await _dispatch_world_shot(page, requested_dir, gesture_power) if fresh else {"ok":False}
        during=row.get("during") or {}; actual_dir=during.get("direction") or {}; actual_power=during.get("power")
        moving = await _wait_ball_motion(page, 1.25) if row.get("ok") else {}
        vel=moving.get("velocity") or {}; speed=math.hypot(float(vel.get("x",0) or 0),float(vel.get("z",0) or 0))
        dx=float(actual_dir.get("x",0) or 0); dz=float(actual_dir.get("z",0) or 0); dmag=math.hypot(dx,dz)
        dot2=(float(vel.get("x",0) or 0)*dx+float(vel.get("z",0) or 0)*dz)/(speed*dmag) if speed*dmag else -1
        speeds.append(speed); direction_dots.append(dot2); actual_powers.append(float(actual_power) if isinstance(actual_power,(int,float)) else math.nan); actual_dirs.append((dx,dz))
        # Compare travelled path over the same early-time window instead of one
        # arbitrary net-displacement snapshot. A stronger shot may already have
        # crossed/deflected from a small obstacle at 180 ms, making its net
        # displacement smaller even though it genuinely travelled farther.
        trajectory=[]
        prev=(b0.get("position") or {})
        travelled=0.0
        end8=time.monotonic()+.24
        while time.monotonic()<end8:
            cur=await _state(page,"__ball") or {}
            pos=cur.get("position") or {}
            if prev and pos:
                step=_dist(prev,pos,("x","z"))
                if isinstance(step,(int,float)) and math.isfinite(step): travelled += max(0.0,float(step))
            trajectory.append(cur)
            prev=pos
            await page.wait_for_timeout(24)
        displacements.append(travelled)
        await _wait_ball_stop(page, 5.0, require_motion=True)

    # A third distinct gesture verifies that a changed public aim direction causes
    # the real velocity direction to change as well.
    fresh_dir=await _prepare_fresh_shot(page, "forest")
    bdir=await _state(page, "__ball") or {}; dirs_now=_clear_shot_directions(await _state(page,"__course") or {},bdir.get("position") or {},2); requested_other=dirs_now[1] if len(dirs_now)>1 else {"x":-requested_dir["z"],"z":requested_dir["x"]}
    drow=await _dispatch_world_shot(page,requested_other,.42) if fresh_dir else {"ok":False}; dduring=drow.get("during") or {}; dactual=dduring.get("direction") or {}; dm=await _wait_ball_motion(page,1.25) if drow.get("ok") else {}; dv=dm.get("velocity") or {}; dvm=math.hypot(float(dv.get("x",0) or 0),float(dv.get("z",0) or 0)); damag=math.hypot(float(dactual.get("x",0) or 0),float(dactual.get("z",0) or 0)); dir_dot=(float(dv.get("x",0) or 0)*float(dactual.get("x",0) or 0)+float(dv.get("z",0) or 0)*float(dactual.get("z",0) or 0))/(dvm*damag) if dvm*damag else -1
    first_dir=actual_dirs[0] if actual_dirs else (0.0,0.0); first_mag=math.hypot(*first_dir); changed_dir_dot=(first_dir[0]*float(dactual.get("x",0) or 0)+first_dir[1]*float(dactual.get("z",0) or 0))/(first_mag*damag) if first_mag*damag else 1

    power_order=bool(len(actual_powers)==2 and all(math.isfinite(v) for v in actual_powers) and actual_powers[1] > actual_powers[0] + max(.001,abs(actual_powers[0])*.01))
    speed_increase=bool(len(speeds)==2 and speeds[1] > speeds[0] + max(.01, abs(speeds[0])*.01))
    displacement_increase=bool(len(displacements)==2 and displacements[1] > displacements[0] + max(.001, abs(displacements[0])*.01))
    direction_changed=bool(changed_dir_dot < .96)
    ctx.check(8, bool(all(prep_rows) and fresh_dir and len(speeds)==2 and speeds[0]>.05 and power_order and speed_increase and displacement_increase and all(v>.82 for v in direction_dots) and dir_dot>.82 and direction_changed), f"两次真实拖拽公开 power={actual_powers}，初速度={speeds}（更大力度确实更快={speed_increase}）、同时间窗累计位移={displacements}（更远={displacement_increase}），速度与各自公开 direction 点积={direction_dots}；第三次公开方向与第一次差异 dot={changed_dir_dot:.3f}，其速度方向点积={dir_dot:.3f}。")

    # 9 计杆边界：单独重置场景，不继承 R8 的运动球。
    fresh9 = await _prepare_fresh_shot(page, "forest")
    if not fresh9:
        await _go_menu(page)
        fresh9 = await _prepare_fresh_shot(page, "forest")
    s0 = await _state(page, "__shot") or {}; b9 = await _state(page, "__ball") or {}
    zero = await _dispatch_world_shot(page, {"x":1,"z":0}, 0.0) if fresh9 else {"ok":False}
    await page.wait_for_timeout(120); s1 = await _state(page, "__shot") or {}; bz = await _state(page, "__ball") or {}
    # A visible HUD action must not be interpreted as a shot. Use the contracted
    # zoom control so this check does not depend on arbitrary HUD markup.
    hud_click=await _dom_click(page,"[data-testid='zoom-in']") if fresh9 else False
    await page.wait_for_timeout(80); s_hud=await _state(page,"__shot") or {}; b_hud=await _state(page,"__ball") or {}
    valid = await _dispatch_world_shot(page, {"x":1,"z":0}, .35) if fresh9 else {"ok":False}
    moving9 = await _wait_ball_motion(page, 1.2) if valid.get("ok") else {}; s2 = await _state(page, "__shot") or {}
    duplicate = await _dispatch_world_shot(page, {"x":0,"z":1}, .35) if moving9.get("moving") is True or (moving9.get("speed",0) or 0)>.02 else {"ok":False}
    await page.wait_for_timeout(100); s3 = await _state(page, "__shot") or {}
    zero_no_motion = bool((bz.get("speed",0) or 0) <= .02 and _dist(b9.get("position"),bz.get("position"),("x","z")) < .02)
    hud_no_shot=bool(hud_click and s_hud.get("strokeCount")==s1.get("strokeCount") and (b_hud.get("speed",0) or 0)<=.02 and _dist(bz.get("position"),b_hud.get("position"),("x","z"))<.02)
    # Helper return values only tell us whether Playwright delivered the gesture;
    # once the public state proves the intended semantic outcome, they must not
    # become extra product requirements.  This avoids a transient pointer helper
    # status turning otherwise correct stroke-boundary behavior into a false 0.
    valid_effect=bool(s2.get("strokeCount") == s0.get("strokeCount",0)+1 and (moving9.get("moving") is True or (moving9.get("speed",0) or 0)>.02))
    duplicate_blocked=bool(valid_effect and s3.get("strokeCount") == s2.get("strokeCount"))
    ctx.check(9, bool(fresh9 and s1.get("strokeCount") == s0.get("strokeCount") and zero_no_motion and hud_no_shot and valid_effect and duplicate_blocked), f"零拖拽不计杆且不出球={zero_no_motion}；HUD zoom 点击不计杆/不出球={hud_no_shot}；有效击球只增加一杆并真实运动={valid_effect}；运动中再次拖拽不重复计杆={duplicate_blocked}。手势派发状态 zero/valid/duplicate={zero.get('ok')}/{valid.get('ok')}/{duplicate.get('ok')}（仅作诊断，不作为额外 rubric 条件）。")

    # 10 连续有限物理 + fixed step：独立发球，并先观察到运动再判断停稳。
    fresh10 = await _prepare_fresh_shot(page, "forest")
    shot10 = await _dispatch_world_shot(page, {"x":.92,"z":.24}, .32) if fresh10 else {"ok":False}
    motion10 = await _wait_ball_motion(page, 1.4) if shot10.get("ok") else {}
    perf_at_motion = await _state(page, "__performance") or {} if motion10 else {}
    tail10 = await _wait_ball_stop(page, 8) if motion10 else []
    samples = ([{"ball": motion10, "perf": perf_at_motion}] + tail10) if motion10 else []
    perf_rows = [r.get("perf") or {} for r in samples]; ball_rows = [r.get("ball") or {} for r in samples]
    moved_steps = sum(_dist(ball_rows[i-1].get("position"), ball_rows[i].get("position")) > .0005 for i in range(1, len(ball_rows)))
    finite = _finite_values(ball_rows) and _finite_values(perf_rows)
    ticks = [r.get("simulationTick",0) for r in perf_rows if isinstance(r.get("simulationTick"),(int,float))]
    frames = [r.get("renderFrame",0) for r in perf_rows if isinstance(r.get("renderFrame"),(int,float))]
    fixed_values=[float(r.get("fixedStep")) for r in perf_rows if isinstance(r.get("fixedStep"),(int,float)) and math.isfinite(float(r.get("fixedStep")))]
    fixed = fixed_values[0] if fixed_values else 0
    fixed_stable=bool(fixed_values and len(fixed_values)==len(perf_rows) and fixed>0 and max(abs(v-fixed) for v in fixed_values)<=max(1e-9,abs(fixed)*1e-6))
    tick_monotonic=bool(len(ticks)>=2 and all(b>=a for a,b in zip(ticks,ticks[1:])) and ticks[-1]>ticks[0])
    frame_monotonic=bool(len(frames)>=2 and all(b>=a for a,b in zip(frames,frames[1:])) and frames[-1]>frames[0])
    settled = bool(ball_rows and (ball_rows[-1].get("inHole") or (not ball_rows[-1].get("moving") and float(ball_rows[-1].get("speed",0) or 0) <= .02 and not ball_rows[-1].get("airborne"))))
    ctx.check(10, bool(fresh10 and shot10.get("ok") and (motion10.get("moving") is True or (motion10.get("speed",0) or 0)>.02) and fixed_stable and finite and moved_steps >= 1 and tick_monotonic and frame_monotonic and settled), f"独立真实击球先观察到 speed={motion10.get('speed')} / moving={motion10.get('moving')}；随后采集 {len(samples)} 个时间点，位置连续变化 {moved_steps} 次，fixedStep 序列稳定={fixed_stable}({fixed_values[:6]})，renderFrame/tick 单调前进={frame_monotonic}/{tick_monotonic} 且最终稳定。")

    # 11 表面摩擦：验证真实排序差异，不规定唯一倍率。
    declared = {}
    r11_deadline = time.monotonic() + 30.0
    sand_pair_seen = False
    ice_pair_seen = False
    declared_ok = True
    for theme in ("forest", "desert", "snow"):
        await _open_level(page, theme)
        rows = (await _state(page, "__course") or {}).get("surfaces") or []
        coeff = {r.get("type"): r.get("friction") for r in rows if isinstance(r, dict)}
        declared[theme] = coeff
        grass, sand, ice = coeff.get("grass"), coeff.get("sand"), coeff.get("ice")
        if isinstance(grass,(int,float)) and isinstance(sand,(int,float)):
            sand_pair_seen = True; declared_ok = declared_ok and sand > grass > 0
        if isinstance(grass,(int,float)) and isinstance(ice,(int,float)):
            ice_pair_seen = True; declared_ok = declared_ok and grass > ice >= 0

    def surface_entry_point(surface, spawn):
        bounds = (surface or {}).get("bounds") or {}
        if all(isinstance(bounds.get(k), (int, float)) for k in ("minX", "maxX", "minZ", "maxZ")):
            margin = .42
            min_x, max_x = float(bounds["minX"]) + margin, float(bounds["maxX"]) - margin
            min_z, max_z = float(bounds["minZ"]) + margin, float(bounds["maxZ"]) - margin
            sx, sz = float((spawn or {}).get("x", 0)), float((spawn or {}).get("z", 0))
            return {"x": max(min_x, min(max_x, sx)), "z": max(min_z, min(max_z, sz))}
        return _surface_point(surface)

    async def measure_decay(theme, kind, surface, power):
        if not await _open_level(page, theme) or not await _reset_ball(page): return None
        course=await _state(page,"__course") or {}; spawn=course.get("spawn") or {}; ball0=await _state(page,"__ball") or {}; target=surface_entry_point(surface,spawn)
        if ball0.get("currentSurface")==kind:
            direction={"x":0.0,"z":-1.0 if float(spawn.get("z",0))>=0 else 1.0}; row=await _dispatch_world_shot(page,direction,min(power,.44))
        else:
            row=await _shot_to_point(page,target or {},power=power,wait=False)
        if not row.get("ok"): return None
        end=min(r11_deadline,time.monotonic()+3.0); first_ball=first_perf=None
        while time.monotonic()<end:
            ball=await _state(page,"__ball") or {}; perf=await _state(page,"__performance") or {}
            if ball.get("currentSurface")==kind and isinstance(ball.get("speed"),(int,float)) and float(ball.get("speed",0) or 0)>.16 and not ball.get("airborne"):
                first_ball,first_perf=ball,perf; break
            if not ball.get("moving") and float(ball.get("speed",0) or 0)<=.02: break
            await page.wait_for_timeout(30)
        if not first_ball or not first_perf: return None
        tick0=first_perf.get("simulationTick"); fixed=first_perf.get("fixedStep")
        if not isinstance(tick0,(int,float)) or not isinstance(fixed,(int,float)) or fixed<=0: return None
        last_ball,last_perf=first_ball,first_perf; valid_ticks=0
        while time.monotonic()<end:
            ball=await _state(page,"__ball") or {}; perf=await _state(page,"__performance") or {}; tick=perf.get("simulationTick")
            if ball.get("currentSurface")!=kind or ball.get("airborne"): break
            if isinstance(tick,(int,float)): valid_ticks=int(tick-tick0)
            last_ball,last_perf=ball,perf
            if valid_ticks>=10: break
            await page.wait_for_timeout(25)
        tick1=last_perf.get("simulationTick")
        if not isinstance(tick1,(int,float)) or tick1<=tick0 or valid_ticks<5: return None
        duration=(tick1-tick0)*fixed; s0=float(first_ball.get("speed",0) or 0); s1=float(last_ball.get("speed",0) or 0)
        return {"theme":theme,"decay":max(0.0,(s0-s1)/max(duration,1e-6)),"start":s0,"end":s1,"friction":first_ball.get("friction"),"expected":surface.get("friction") if isinstance(surface,dict) else None,"ticks":tick1-tick0}

    async def sample_kind(kind):
        candidates=[]
        for theme in ("forest","desert","snow"):
            if not await _open_level(page,theme): continue
            course=await _state(page,"__course") or {}; spawn=course.get("spawn") or {}
            for surface in course.get("surfaces") or []:
                if isinstance(surface,dict) and surface.get("type")==kind:
                    point=surface_entry_point(surface,spawn) or {}; candidates.append((_dist(spawn,point,("x","z")),theme,surface))
        candidates.sort(key=lambda row:row[0])
        for _,theme,surface in candidates:
            if time.monotonic()>=r11_deadline: break
            for power in ((.42,.54) if kind=="grass" else (.68,.84)):
                if time.monotonic()>=r11_deadline: break
                sample=await measure_decay(theme,kind,surface,power)
                if sample: return sample
        return None

    grass_sample=await sample_kind("grass"); sand_sample=await sample_kind("sand"); ice_sample=await sample_kind("ice") if ice_pair_seen else None
    samples={"grass":grass_sample,"sand":sand_sample,"ice":ice_sample}
    required_samples=[grass_sample,sand_sample]+([ice_sample] if ice_pair_seen else [])
    sync_ok=bool(required_samples and all(sample and isinstance(sample.get("friction"),(int,float)) and isinstance(sample.get("expected"),(int,float)) and abs(float(sample["friction"])-float(sample["expected"]))<.05 for sample in required_samples))
    # "明显差异" needs tolerance above frame/noise variation, not a product-specific fixed ratio.
    sand_decay_ok=bool(grass_sample and sand_sample and sand_sample["decay"] > grass_sample["decay"] + max(.05,abs(grass_sample["decay"])*.15))
    ice_decay_ok=True if not ice_pair_seen else bool(grass_sample and ice_sample and grass_sample["decay"] > ice_sample["decay"] + max(.02,abs(grass_sample["decay"])*.10))
    decay_ok=bool(sand_decay_ok and ice_decay_ok)

    await _open_level(page,"forest"); await _reset_ball(page); await page.wait_for_timeout(140)
    hud_probe=await _call(page,"""()=>{const e=document.querySelector('[data-testid=surface-friction]');const b=window.__ball?.getState?.();if(!e)return{visible:false,text:'',friction:b?.friction,currentSurface:b?.currentSurface};const s=getComputedStyle(e),r=e.getBoundingClientRect();return{visible:s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity)>0&&r.width>0&&r.height>0,text:e.textContent||'',friction:b?.friction,currentSurface:b?.currentSurface}}""") or {}
    hud_value=None; hud_tolerance=None; hud_text=str(hud_probe.get("text","")); match=re.search(r"μ\s*(-?\d+(?:\.\d+)?)",hud_text) or re.search(r"(-?\d+(?:\.\d+)?)",hud_text)
    if match:
        try:
            raw_num=match.group(1); hud_value=float(raw_num); decimals=len(raw_num.split('.',1)[1]) if '.' in raw_num else 0; hud_tolerance=.5*(10**(-decimals))+1e-6
            if '%' in hud_text[max(0,match.start()-2):match.end()+3]: hud_value/=100.0; hud_tolerance/=100.0
        except (ValueError,OverflowError): hud_value=hud_tolerance=None
    hud_ok=bool(hud_probe.get("visible") and isinstance(hud_probe.get("friction"),(int,float)) and hud_value is not None and hud_tolerance is not None and abs(hud_value-float(hud_probe["friction"]))<=hud_tolerance)
    direct11={"sandGrassDeclared":bool(sand_pair_seen),"declaredOrder":bool(declared_ok),"hudSync":bool(hud_ok)}
    failed11=[k for k,v in direct11.items() if not v]
    missing_samples=[name for name,sample in samples.items() if (name in ("grass","sand") or (name=="ice" and ice_pair_seen)) and not sample]
    if failed11:
        ctx.check(11,False,f"可直接判定的摩擦要求失败={failed11}；声明摩擦={declared}，HUD={hud_probe}。真实衰减取样={samples}。")
    elif missing_samples:
        _blocked(ctx, 11,f"声明摩擦顺序和实时 HUD 已满足，但评估侧未能通过真实击球取得 {missing_samples} 的稳定滚动采样；自动取样失败不能替代真实物理差异的反证。已取得样本={samples}。",blocked_by=["evaluator-friction-sampling"])
    else:
        conditions11={"surfaceHookSync":bool(sync_ok),"measuredDecayDifference":bool(decay_ok)}
        failed=[k for k,v in conditions11.items() if not v]
        ctx.check(11,not failed,f"三种表面已取得真实滚动样本；条件={conditions11}，失败={failed}；声明摩擦={declared}，实测衰减={samples}，HUD同步={hud_ok}。")

    # 12 障碍真实模型与碰撞。不要要求障碍 ID 必须写进 Three.js object.name；
    # 名称/userData 只是可选提示，空间对应 + 真实碰撞同样是合法实现。
    obstacle_candidates=[]
    r12_opened=[]
    for theme in ("forest","desert","snow"):
        opened12=await _open_level(page, theme)
        r12_opened.append(bool(opened12))
        if not opened12:
            continue
        await _reset_ball(page)
        course=await _state(page,"__course") or {}
        scene=await _real_scene_probe(page)
        spawn=course.get("spawn") or {}
        for obstacle in course.get("obstacles") or []:
            if isinstance(obstacle,dict) and obstacle.get("solid") is True:
                model=_scene_mesh_for_state_item(scene, obstacle, tolerance=max(.9,float(obstacle.get("radius",.5) or .5)*1.8))
                obstacle_candidates.append((_dist(spawn,obstacle.get("position") or {},("x","z")),theme,obstacle,model))
    obstacle_candidates.sort(key=lambda row:row[0])
    r12_deadline=time.monotonic()+24.0
    collision=False; bcol={}; target=None; target_theme=None; model=None; collision_marker=""; collision_power=None; collision_response=None; peak_speed=0.0
    # A failed auto-shot is not itself evidence that obstacle physics is broken.
    # Track whether a real fast-moving ball actually penetrated the declared
    # collider. Only that is a direct negative physics observation; otherwise the
    # evaluator may simply have missed the target and the rubric must be blocked.
    closest_gap=float("inf"); closest_gap_speed=0.0; closest_gap_target=None
    def obstacle_gap12(pos, obstacle, ball_radius):
        if not isinstance(pos,dict) or not isinstance(obstacle,dict):
            return float("inf")
        bounds=obstacle.get("bounds") or {}
        if all(isinstance(bounds.get(k),(int,float)) for k in ("minX","maxX","minZ","maxZ")):
            x=float(pos.get("x",0) or 0); z=float(pos.get("z",0) or 0)
            dx=max(float(bounds["minX"])-x,0.0,x-float(bounds["maxX"]))
            dz=max(float(bounds["minZ"])-z,0.0,z-float(bounds["maxZ"]))
            return math.hypot(dx,dz)-float(ball_radius or 0)
        opos=obstacle.get("position") or {}
        if all(isinstance(opos.get(k),(int,float)) for k in ("x","z")):
            return _dist(pos,opos,("x","z"))-float(obstacle.get("radius",.55) or .55)-float(ball_radius or 0)
        return float("inf")
    for _,theme,candidate,candidate_model in obstacle_candidates[:6]:
        if time.monotonic()>=r12_deadline: break
        if not candidate_model:
            continue
        if not await _open_level(page,theme):
            continue
        # High-power attempts come first because R12 explicitly guards against
        # tunnelling.  A stale lastCollision from a previous attempt is not new
        # evidence: the marker must transition after this shot.
        for power in (.90,.78):
            if time.monotonic()>=r12_deadline: break
            if not await _reset_ball(page):
                continue
            baseline=str((await _state(page,"__ball") or {}).get("lastCollision") or "")
            shot12=await _shot_to_point(page,candidate.get("position") or {},power=power,wait=False)
            if not shot12.get("ok"):
                continue
            end=min(r12_deadline,time.monotonic()+2.8); local_peak=0.0
            prev_velocity=None
            while time.monotonic()<end:
                bcol=await _state(page,"__ball") or {}; last=str(bcol.get("lastCollision") or "")
                local_peak=max(local_peak,float(bcol.get("speed",0) or 0)); peak_speed=max(peak_speed,local_peak)
                pos=bcol.get("position") or {}; radius=float(bcol.get("radius",.28) or .28); orad=float(candidate.get("radius",.55) or .55)
                velocity=bcol.get("velocity") or {}
                gap=obstacle_gap12(pos,candidate,radius)
                if gap<closest_gap:
                    closest_gap=gap; closest_gap_speed=float(bcol.get("speed",0) or 0); closest_gap_target=(theme,candidate.get("id"))
                near=_dist(pos,candidate.get("position") or {},("x","z")) <= radius+orad+.45
                id_or_type=bool(last and (str(candidate.get("id") or "") in last or str(candidate.get("type") or "") in last))
                new_collision=bool(last and last!=baseline)
                response_delta=0.0
                if prev_velocity and all(isinstance((prev_velocity or {}).get(k),(int,float)) and isinstance(velocity.get(k),(int,float)) for k in ("x","z")):
                    response_delta=math.hypot(float(velocity["x"])-float(prev_velocity["x"]),float(velocity["z"])-float(prev_velocity["z"]))
                spatial_contact=bool(gap<=.15 or near)
                # Cross-check the self-reported collision marker with real motion.
                # A surface/HUD marker changing near an obstacle is not enough on
                # its own; the ball must show an observable velocity response.
                if new_collision and spatial_contact and response_delta>.02:
                    collision=True; target=candidate; target_theme=theme; model=candidate_model; collision_marker=last; collision_power=power; collision_response=response_delta; break
                prev_velocity=dict(velocity) if isinstance(velocity,dict) else None
                if not bcol.get("moving") and (bcol.get("speed",0) or 0)<.02: break
                await page.wait_for_timeout(35)
            if collision: break
        if collision: break
    r12_collection_ready = all(r12_opened)
    no_solid_obstacles = bool(r12_collection_ready and len(obstacle_candidates) == 0)
    visible_candidate_count=sum(1 for row in obstacle_candidates if row[3])
    direct_model_failure=bool(obstacle_candidates and visible_candidate_count==0)
    direct_physics_failure=bool(visible_candidate_count>0 and not collision and closest_gap < -.05 and closest_gap_speed > .05)
    if not r12_collection_ready:
        _blocked(ctx,12,f"评估侧未能完整进入三关读取障碍声明，不能把‘未收集到障碍’解释为产品没有实体障碍。关卡读取={r12_opened}，已收集 solid obstacle 数={len(obstacle_candidates)}。",blocked_by=["evaluator-obstacle-enumeration"])
    elif no_solid_obstacles:
        ctx.check(12,True,"三关均已成功读取，且公开 course 未声明可玩区 solid obstacle；按条件型 Rubric 不强制凭空增加实体障碍。")
    elif direct_model_failure:
        ctx.check(12,False,f"公开声明 solid obstacle 数={len(obstacle_candidates)}，但没有任何一个能与真实可见 Three.js mesh 做空间/标识对应，违反实体障碍模型一致性。")
    elif direct_physics_failure:
        ctx.check(12,False,f"评估侧真实高力度击球已进入声明碰撞体内部但未产生新碰撞证据：closestGap={closest_gap:.3f}，speed={closest_gap_speed:.3f}，target={closest_gap_target}；这是直接物理反证而非自动瞄准失败。")
    elif not collision:
        _blocked(ctx,12,f"已确认存在 {len(obstacle_candidates)} 个公开 solid obstacle，且至少 {visible_candidate_count} 个有真实 Three.js 模型对应；但自动高力度击球未形成可直接判定的碰撞/穿透输入（closestGap={closest_gap:.3f}, speed={closest_gap_speed:.3f}, target={closest_gap_target}）。测试器未撞中不能当作产品碰撞失败。",blocked_by=["evaluator-obstacle-collision-input"])
    else:
        r12_ok = bool(target and model and collision and collision_power is not None and collision_power>=.78 and peak_speed>.05 and isinstance(collision_response,(int,float)) and collision_response>.02 and _finite_values(bcol))
        ctx.check(12,r12_ok,f"三关均已成功读取；公开 solid obstacle 数={len(obstacle_candidates)}；目标={target.get('id') if target else None}@{target_theme}，Three.js 模型对应={bool(model)}，高力度={collision_power}、峰值 speed={peak_speed:.3f} 后新碰撞={collision}，速度响应 Δv={collision_response}，lastCollision={collision_marker!r}，球状态有限={_finite_values(bcol)}。")

    # 13 正常物理进洞与幂等状态
    await _open_level(page,"forest"); ok,played_strokes,completion_diag=await _play_to_hole(page,18)
    # Hole capture, React result rendering and leaderboard persistence can settle
    # on adjacent animation/microtask turns.  Wait two real render opportunities
    # before taking the idempotence baseline so a correct one-time asynchronous
    # settlement is not mistaken for duplicate scoring.
    if ok:
        await _wait_state(page,"__game",lambda g:g.get("holeComplete") is True,2)
        await _wait_state(page,"__ball",lambda b:b.get("inHole") is True,1.2)
        await _call(page,"()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))")
    game=await _state(page,"__game") or {}; ball=await _state(page,"__ball") or {}; course=await _state(page,"__course") or {}; real=await _real_scene_probe(page)
    hole=course.get("hole") or {}; at_hole=_dist(ball.get("position"),hole,("x","z")) <= float(hole.get("radius",.5))+.50
    settled_snapshot={"strokes":game.get("currentHoleStrokes"),"score":game.get("currentScore"),"totalStrokes":game.get("totalStrokes"),"totalScore":game.get("totalScore"),"leaderboard":await _state(page,"__leaderboard")}
    perf_start=(await _state(page,"__performance") or {}).get("simulationTick",0)
    await _wait_state(page,"__performance",lambda p:p.get("simulationTick",0)>=perf_start+20,1.5)
    later=await _state(page,"__game") or {}; later_lb=await _state(page,"__leaderboard")
    stable=settled_snapshot["strokes"]==later.get("currentHoleStrokes") and settled_snapshot["score"]==later.get("currentScore") and settled_snapshot["totalStrokes"]==later.get("totalStrokes") and settled_snapshot["totalScore"]==later.get("totalScore") and settled_snapshot["leaderboard"]==later_lb
    # 自动击球器只是取证手段。未把球送入洞口不能证明产品的入洞逻辑错误；
    # 只有取得直接洞口/完赛证据后，R13 才给确定性 0/1。
    completion_prereq=bool(ok and played_strokes>0 and game.get("holeComplete") is True and ball.get("inHole") is True and at_hole)
    min_distance=completion_diag.get("minDistance") if isinstance(completion_diag,dict) else None
    hole_radius=float(hole.get("radius",.5) or .5) if isinstance(hole.get("radius",.5),(int,float)) else .5
    state_disagrees=bool(game.get("holeComplete") is not ball.get("inHole"))
    if state_disagrees and not completion_prereq:
        await _call(page,"()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))")
        game2=await _state(page,"__game") or {}; ball2=await _state(page,"__ball") or {}
        state_disagrees=bool(game2.get("holeComplete") is not ball2.get("inHole"))
        if state_disagrees:
            game,ball=game2,ball2
    slow_inside_samples=int((completion_diag or {}).get("slowInsideSamples",0) or 0)
    physically_inside_but_unsettled=bool(slow_inside_samples >= 3 and not game.get("holeComplete") and not ball.get("inHole"))
    if completion_prereq:
        real_ball_ok=bool(real.get("actualBall") and _dist(real.get("actualBall"),hole,("x","z")) <= hole_radius+.55)
        r13_ok=bool(real_ball_ok and stable)
        ctx.check(13,r13_ok,f"真实完赛已发生：杆数={played_strokes}，holeComplete={game.get('holeComplete')}，inHole={ball.get('inHole')}，真实 Three.js 球位于洞口={real_ball_ok}，后续 tick 结算保持不变={stable}；路径证据={completion_diag}。")
    elif state_disagrees or physically_inside_but_unsettled:
        ctx.check(13,False,f"已取得入洞逻辑直接反证：holeComplete={game.get('holeComplete')}、inHole={ball.get('inHole')}、状态互相矛盾={state_disagrees}；球中心在声明洞半径内圈且近静止的连续采样={slow_inside_samples}，最近距洞={min_distance}、洞半径={hole_radius}。仅‘曾经靠近’或高速掠过不会触发此失败。路径证据={completion_diag}。")
    else:
        _blocked(ctx, 13,f"本轮真实指针输入已接受杆数={completion_diag.get('acceptedStrokes') if isinstance(completion_diag,dict) else played_strokes}，但没有取得完赛事件，也没有取得‘球在洞内近静止却不结算’的直接反证；最近距洞={min_distance}，slowInsideSamples={slow_inside_samples}。自动击球器未完成路径不能单独证明产品入洞逻辑失败。路径证据={completion_diag}。", blocked_by=["evaluator-completion-path"])

    # 15 结算界面与多关进度：只验证 Prompt 明确要求的完成信息和 result-next。
    if ok:
        await _wait_state(page,"__game",lambda g:g.get("holeComplete") is True,1.5)
        end_result=time.monotonic()+2.2
        result={}
        while time.monotonic()<end_result:
            result=await _call(page,"""()=>{const e=document.getElementById('resultScreen');const n=e?.querySelector('[data-testid=result-next]'),nr=n?.getBoundingClientRect(),ns=n?getComputedStyle(n):null;return{visible:!!e?.offsetParent,text:e?.innerText||'',continueVisible:!!n&&!!nr&&ns?.display!=='none'&&ns?.visibility!=='hidden'&&Number(ns?.opacity||1)>0&&nr.width>0&&nr.height>0}}""") or {}
            if result.get("visible"): break
            await page.wait_for_timeout(45)
    else:
        result=await _call(page,"""()=>{const e=document.getElementById('resultScreen');const n=e?.querySelector('[data-testid=result-next]'),nr=n?.getBoundingClientRect(),ns=n?getComputedStyle(n):null;return{visible:!!e?.offsetParent,text:e?.innerText||'',continueVisible:!!n&&!!nr&&ns?.display!=='none'&&ns?.visibility!=='hidden'&&Number(ns?.opacity||1)>0&&nr.width>0&&nr.height>0}}""") or {}
    if not completion_prereq:
        _vlm_blocked(ctx, 37,"真实完赛前置状态未产生，无法生成合法结算态截图；该视觉项标记为受阻而不是独立根因失败。",blocked_by=[13])
    elif result.get("visible"):
        result_png=await page.screenshot(type="png")
        await ctx.vlm_image(37,"Answer YES only if this actual completed-hole/result screenshot clearly communicates that the hole was completed, shows readable stroke or score information, and has a clear usable continue/next action. Accept equivalent Chinese wording. Do not require par-relative wording or a second action choice. If this is still gameplay/menu, or these completion/action cues are absent or unreadable, answer NO.",result_png)
    else:
        ctx.vlm_skip(37,"已经真实完赛，但额外等待后仍未产生可见结算页；这是结算视觉本身的直接失败。")
    result_text=str(result.get("text") or "")
    stroke_semantic=bool(played_strokes>0 and re.search(rf"(?<!\d){int(played_strokes)}(?!\d)",result_text))
    score_value=game.get("currentScore")
    score_semantic=False
    if isinstance(score_value,(int,float)) and math.isfinite(float(score_value)):
        for token in re.findall(r"[-+]?\d[\d,]*(?:\.\d+)?",result_text):
            try:
                if abs(float(token.replace(',', ''))-float(score_value))<=max(.5,abs(float(score_value))*.001):
                    score_semantic=True; break
            except ValueError:
                pass
    completion_info=bool(stroke_semantic or score_semantic)
    next_clicked=False; progress_state={}
    if ok and result.get("visible"):
        next_clicked=await _dom_click(page,"[data-testid='result-next']")
        progress_state=await _wait_state(page,"__game",lambda g:g.get("gameState") not in ("hole_complete","local_result"),2.5)
    resumed=bool(next_clicked and progress_state and progress_state.get("gameState") not in ("hole_complete","local_result"))
    if resumed and progress_state.get("gameState")=="playing":
        resumed=resumed and progress_state.get("currentHoleStrokes")==0
    if not completion_prereq:
        _blocked(ctx, 15,f"真实完赛前置证据未满足（ok={ok}, strokes={played_strokes}, holeComplete={game.get('holeComplete')}, inHole={ball.get('inHole')}）；无法独立评价结算继续操作。",blocked_by=[13])
    else:
        ctx.check(15,bool(result.get("visible") and result.get("continueVisible") and completion_info and resumed),f"真实完赛杆数={played_strokes}，result-next 可见={result.get('continueVisible')}，结果页包含杆数或得分信息={completion_info}（stroke={stroke_semantic}, score={score_semantic}）；点击继续后离开结算态={resumed}，状态={progress_state}。若直接进入新洞，仅要求 currentHoleStrokes=0；不限定必须跳到某个固定页面，也不要求 Par 文案。")

    # 16 可拾取道具：rubric 只要求“至少一种”，不绑定 hole_in_one、forest
    # 或 userData.powerupId 这种实现细节。
    pickup=await _pickup_powerup(page,budget=16.0)
    if not pickup.get("ok"):
        pickup=await _pickup_powerup(page,budget=10.0)
    repeat_stable=False
    if pickup.get("ok"):
        item=pickup.get("item") or {}; kind=item.get("type"); count_after=int(pickup.get("after",0) or 0)
        await _reset_ball(page)
        repeat_shot=await _shot_to_point(page,item.get("position") or {},power=.70,wait=False)
        if repeat_shot.get("ok"): await _wait_ball_stop(page,2.8,require_motion=True)
        repeat=await _state(page,"__powerups") or {}
        repeat_count=next((int(r.get("count",0) or 0) for r in repeat.get("inventory") or [] if r.get("type")==kind),0)
        repeat_stable=repeat_count==count_after
    item=pickup.get("item") or {}
    model=pickup.get("model") or {}
    r16_ok=bool(pickup.get("ok") and model and not pickup.get("sameVisible") and repeat_stable)
    ctx.check(16,r16_ok,f"可拾取道具={item.get('id')} / {item.get('type')}@{pickup.get('theme')}，拾取前真实模型对应={bool(model)}，库存 {pickup.get('before')}→{pickup.get('after')}，原模型仍可见={len(pickup.get('sameVisible') or [])}，再次经过库存稳定={repeat_stable}。")

    # 17 反弹垫：道具可以出现在任一主题关卡，不绑定 forest。
    # direction 在公开 powerup schema 中是可选字段；有声明时核对沿该方向
    # 的真实速度，没有声明时只验证碰撞瞬间确实产生新的有限物理冲量，
    # 可见方向提示由独立的 R36 视觉项负责，不能偷偷默认世界 +X。
    pad_theme,pad,_=await _find_powerup_level(page,"bounce_pad")
    pad_model=None; triggered=False; sample={}; pad_speed_series=[]
    if pad_theme and pad:
        await _open_level(page,pad_theme); await _reset_ball(page)
        pad_model=_scene_mesh_for_state_item(await _real_scene_probe(page),pad,tolerance=.95)
        raw_dir=pad.get("direction") if isinstance(pad.get("direction"),dict) else None
        dir_declared=bool(raw_dir and all(isinstance(raw_dir.get(k),(int,float)) for k in ("x","z")) and math.hypot(float(raw_dir.get("x",0)),float(raw_dir.get("z",0)))>.05)
        dx,dz=_normalize2(float(raw_dir.get("x",0)),float(raw_dir.get("z",0))) if dir_declared else (0.0,0.0)
        pad_deadline=time.monotonic()+14.0
        for power in (.48,.64,.80,.92):
            if time.monotonic()>=pad_deadline: break
            await _reset_ball(page); prev_b=await _state(page,"__ball") or {}; await _shot_to_point(page,pad.get("position") or {},power=power,wait=False)
            end=min(pad_deadline,time.monotonic()+2.8)
            while time.monotonic()<end:
                b=await _state(page,"__ball") or {}; pnow=await _state(page,"__powerups") or {}
                if pnow.get("lastTriggeredId")==pad.get("id"):
                    pv=prev_b.get("velocity") or {}; v=b.get("velocity") or {}
                    pre_speed=math.hypot(float(pv.get("x",0) or 0),float(pv.get("z",0) or 0)); post_speed=math.hypot(float(v.get("x",0) or 0),float(v.get("z",0) or 0))
                    delta_v=math.hypot(float(v.get("x",0) or 0)-float(pv.get("x",0) or 0),float(v.get("z",0) or 0)-float(pv.get("z",0) or 0))
                    projection=float(v.get("x",0) or 0)*dx+float(v.get("z",0) or 0)*dz if dir_declared else None
                    triggered=bool((projection is not None and projection>.02) if dir_declared else (delta_v>.08 and post_speed>.05))
                    sample={"ball":b,"projection":projection,"deltaV":delta_v,"preSpeed":pre_speed,"postSpeed":post_speed,"directionDeclared":dir_declared}
                    if triggered:
                        # Sample while the ball is still in/near normal play.  A bounded
                        # effect may fluctuate, but must not exhibit sustained multiplicative
                        # acceleration from repeated contact with the same pad.
                        for _ in range(14):
                            bs=await _state(page,"__ball") or {}; sp=bs.get("speed")
                            if isinstance(sp,(int,float)) and math.isfinite(float(sp)): pad_speed_series.append(float(sp))
                            await page.wait_for_timeout(35)
                    break
                prev_b=b
                await page.wait_for_timeout(45)
            if triggered: break
    pad_run=0; pad_longest=0
    for a,b in zip(pad_speed_series,pad_speed_series[1:]):
        pad_run=pad_run+1 if b>a*1.05+.02 else 0; pad_longest=max(pad_longest,pad_run)
    pad_bounded=bool(pad_speed_series and all(math.isfinite(v) for v in pad_speed_series) and pad_longest<5)
    r17_ok=bool(pad and pad_model and triggered and _finite_values(sample) and (sample.get("ball") or {}).get("speed",0)>0 and pad_bounded)
    ctx.check(17,r17_ok,f"反弹垫={pad.get('id') if pad else None}@{pad_theme}，真实模型对应={bool(pad_model)}，lastTriggeredId 对应；公开 direction 存在={sample.get('directionDeclared')}，沿公开方向速度投影={sample.get('projection')}，无 direction 时真实速度增量向量 Δv={sample.get('deltaV')}；触发后速度序列={pad_speed_series[:8]}...，连续异常增速最长={pad_longest}，有界={pad_bounded}。")

    # Keep a dedicated renderer-canvas visual while the camera is already near
    # the real bounce pad.  R36 is a visual rubric; full-page/theme composites can
    # shrink a valid small 3D prop until the VLM mistakes it for HUD decoration.
    powerup_visual_image=await _renderer_powerup_focus_png(page,pad) if pad else None

    # 18 一杆入洞：在实际包含该道具的任一关卡完成拾取、启用、合法消费，
    # 并验证技能实际把球的效果导向球洞，而非只扣库存。启用后先做一次
    # 零拖拽无效输入，确认“只有下一次合法击球”才会消费。
    hio_pick=await _pickup_powerup(page,kinds=("hole_in_one",),budget=14.0)
    def inv_count(state): return next((int(r.get("count",0) or 0) for r in state.get("inventory") or [] if r.get("type")=="hole_in_one"),0)
    hio_item=hio_pick.get("item") or {}; hio_theme=hio_pick.get("theme")
    p0=await _state(page,"__powerups") or {} if hio_pick.get("ok") else {}; c0=inv_count(p0)
    armed=await _dom_click(page,"[data-testid='powerup-hio']") if c0>0 else False
    p1=await _state(page,"__powerups") or {}; c1=inv_count(p1); s18_before=await _state(page,"__shot") or {}
    invalid=await _dispatch_world_shot(page,{"x":1,"z":0},0.0) if c1>0 and p1.get("armedType")=="hole_in_one" else {"ok":False}
    await page.wait_for_timeout(120)
    p_invalid=await _state(page,"__powerups") or {}; s18_invalid=await _state(page,"__shot") or {}; c_invalid=inv_count(p_invalid)
    invalid_kept=bool(invalid.get("ok") and c_invalid==c1 and p_invalid.get("armedType")=="hole_in_one" and s18_invalid.get("strokeCount")==s18_before.get("strokeCount"))
    ball_before=await _state(page,"__ball") or {}; course18=await _state(page,"__course") or {}; hole18=course18.get("hole") or {}; pos18=ball_before.get("position") or {}
    hx,hz=_normalize2(float(hole18.get("x",0))-float(pos18.get("x",0)),float(hole18.get("z",0))-float(pos18.get("z",0)))
    sideways={"x":-hz,"z":hx}
    shot=await _dispatch_world_shot(page,sideways,.30) if invalid_kept else {"ok":False}
    motion18=await _wait_ball_motion(page,1.4) if shot.get("ok") else {}
    p2=await _wait_state(page,"__powerups",lambda st:inv_count(st)<=max(0,c1-1),1.4) if shot.get("ok") else {}; c2=inv_count(p2)
    after18=await _state(page,"__ball") or {}; game18=await _state(page,"__game") or {}
    v18=(motion18 or after18).get("velocity") or {}; vm18=math.hypot(float(v18.get("x",0) or 0),float(v18.get("z",0) or 0)); toward_dot=(float(v18.get("x",0) or 0)*hx+float(v18.get("z",0) or 0)*hz)/vm18 if vm18 else -1
    skill_toward_hole=bool(after18.get("inHole") or game18.get("holeComplete") or toward_dot>.70)
    await page.wait_for_timeout(220); c3=inv_count(await _state(page,"__powerups") or {})
    ctx.check(18,bool(hio_pick.get("ok") and c0>0 and armed and p1.get("armedType")=="hole_in_one" and c1==c0 and invalid_kept and shot.get("ok") and c2==c1-1 and c3==c2 and skill_toward_hole),f"一杆入洞={hio_item.get('id')}@{hio_theme}，拾取库存={c0}；启用后 armed={p1.get('armedType')} 且库存不减；零拖拽后库存/armed/杆数保持={invalid_kept}；下一次合法击球后库存 {c1}→{c2}→{c3}，朝洞效果 dot={toward_dot:.3f}/inHole={after18.get('inHole')}。")

    # 19 加速带：动态寻找真实关卡和模型，并比较触发前后的速度变化。
    # direction 在公开 schema 中可选；存在时严格验证沿其方向的分量增加，
    # 缺失时验证触发瞬间真实速度大小增加，避免偷偷默认世界 +X。
    boost_theme,boost,_=await _find_powerup_level(page,"speed_boost")
    boost_model=None; trigger_sample={}; boost_speed_series=[]
    if boost_theme and boost:
        await _open_level(page,boost_theme); await _reset_ball(page)
        boost_model=_scene_mesh_for_state_item(await _real_scene_probe(page),boost,tolerance=.95)
        raw_dir=boost.get("direction") if isinstance(boost.get("direction"),dict) else None
        dir_declared=bool(raw_dir and all(isinstance(raw_dir.get(k),(int,float)) for k in ("x","z")) and math.hypot(float(raw_dir.get("x",0)),float(raw_dir.get("z",0)))>.05)
        dx,dz=_normalize2(float(raw_dir.get("x",0)),float(raw_dir.get("z",0))) if dir_declared else (0.0,0.0)
        boost_deadline=time.monotonic()+14.0
        for power in (.48,.64,.80,.92):
            if time.monotonic()>=boost_deadline: break
            await _reset_ball(page); initial=(await _state(page,"__powerups") or {}).get("lastTriggeredId")
            await _shot_to_point(page,boost.get("position") or {},power=power,wait=False); end=min(boost_deadline,time.monotonic()+2.8); prev_ball=await _state(page,"__ball") or {}
            while time.monotonic()<end:
                b=await _state(page,"__ball") or {}; pnow=await _state(page,"__powerups") or {}
                if pnow.get("lastTriggeredId")==boost.get("id") and (initial!=boost.get("id") or _dist(b.get("position"),boost.get("position"),("x","z"))<1.3):
                    pv=prev_ball.get("velocity") or {}; av=b.get("velocity") or {}; pre_speed=math.hypot(float(pv.get("x",0) or 0),float(pv.get("z",0) or 0)); post_speed=math.hypot(float(av.get("x",0) or 0),float(av.get("z",0) or 0))
                    before_proj=float(pv.get("x",0) or 0)*dx+float(pv.get("z",0) or 0)*dz if dir_declared else None
                    after_proj=float(av.get("x",0) or 0)*dx+float(av.get("z",0) or 0)*dz if dir_declared else None
                    gain=(after_proj-before_proj) if dir_declared else (post_speed-pre_speed)
                    trigger_sample={"beforeProjection":before_proj,"afterProjection":after_proj,"preSpeed":pre_speed,"postSpeed":post_speed,"gain":gain,"speed":b.get("speed"),"id":pnow.get("lastTriggeredId"),"directionDeclared":dir_declared}
                    if trigger_sample.get("gain",0)>.02:
                        for _ in range(14):
                            bs=await _state(page,"__ball") or {}; sp=bs.get("speed")
                            if isinstance(sp,(int,float)) and math.isfinite(float(sp)): boost_speed_series.append(float(sp))
                            await page.wait_for_timeout(35)
                    break
                prev_ball=b
                await page.wait_for_timeout(35)
            if trigger_sample.get("gain",0)>.02: break
    boost_run=0; boost_longest=0
    for a,b in zip(boost_speed_series,boost_speed_series[1:]):
        boost_run=boost_run+1 if b>a*1.05+.02 else 0; boost_longest=max(boost_longest,boost_run)
    boost_bounded=bool(boost_speed_series and all(math.isfinite(v) for v in boost_speed_series) and boost_longest<5)
    ctx.check(19,bool(boost and boost_model and trigger_sample.get("id")==boost.get("id") and trigger_sample.get("gain",0)>.02 and isinstance(trigger_sample.get("speed"),(int,float)) and math.isfinite(float(trigger_sample.get("speed"))) and boost_bounded),f"加速带={boost.get('id') if boost else None}@{boost_theme}，真实模型对应={bool(boost_model)}，公开 direction 存在={trigger_sample.get('directionDeclared')}；触发前/后沿带方向分量={trigger_sample.get('beforeProjection')}→{trigger_sample.get('afterProjection')}，无 direction 时比较真实 speed={trigger_sample.get('preSpeed')}→{trigger_sample.get('postSpeed')}，增量={trigger_sample.get('gain')}；触发后速度序列={boost_speed_series[:8]}...，连续异常增速最长={boost_longest}，有界={boost_bounded}。")

    # R36: use a dedicated crop of the actual renderer canvas while normal play
    # has brought the camera near a verified bounce/boost object.  This changes
    # only evidence framing, not the required visual semantics.
    if not powerup_visual_image and boost:
        powerup_visual_image=await _renderer_powerup_focus_png(page,boost)
    if not powerup_visual_image and (pad or boost):
        powerup_visual_image=await _renderer_canvas_png(page)
    powerup_visual_prompt="This image is a real renderer view or evaluator crop centered on a state-correlated gameplay power-up. Answer YES if at least one physical bounce/boost gameplay prop is visibly distinguishable from ordinary terrain by grounded 3D volume/thickness plus color, shape, or direction cues. An arrow is optional: the rubric explicitly accepts color OR shape OR direction indication. Answer NO only when the visible pixels do not let you identify a physical gameplay power-up, e.g. HUD-only text/icons, scenery, or a featureless flat color patch. Judge pixels only; do not infer success from this instruction."
    if powerup_visual_image:
        await ctx.vlm_image(36,powerup_visual_prompt,powerup_visual_image)
    else:
        ctx.vlm_skip(36,"真实玩法流程未能采集到可核验道具附近的 renderer canvas 截图。")

    # 20 实际渲染相机跟随与缩放
    await _open_level(page,"forest"); c0=await _wait_state(page,"__camera",lambda c:isinstance(c.get("distance"),(int,float)) and isinstance(c.get("target"),dict),1.5) or {}; r0=await _real_camera_probe(page)
    if not (r0.get("captured") and r0.get("isPerspective")):
        await page.wait_for_timeout(90); r0=await _real_camera_probe(page)
    zin=await _dom_click(page,"[data-testid='zoom-in']"); c1=await _wait_state(page,"__camera",lambda c:isinstance(c.get("distance"),(int,float)) and isinstance(c0.get("distance"),(int,float)) and c.get("distance")!=c0.get("distance"),1.8); r1=await _real_camera_probe(page)
    shot20=await _dispatch_world_shot(page,{"x":.8,"z":.3},.42); moving=await _wait_ball_motion(page,1.5) if shot20.get("ok") else {}
    c2={}; moving2=moving
    end=time.monotonic()+1.2
    while time.monotonic()<end:
        moving2=await _state(page,"__ball") or moving2; c2=await _state(page,"__camera") or {}
        if _dist(c2.get("target"),moving2.get("position"))<1.25: break
        await page.wait_for_timeout(35)
    r2=await _real_camera_probe(page); target_error=_dist(c2.get("target"),moving2.get("position"))
    ctx.check(20,bool(r0.get("captured") and r0.get("isPerspective") and isinstance(c0.get("distance"),(int,float)) and isinstance(c1.get("distance"),(int,float)) and c1.get("distance")<c0.get("distance") and r1.get("captured") and r2.get("captured") and r2.get("dot") is not None and r2.get("dot")>.90 and target_error<1.25),f"真实相机为 PerspectiveCamera；distance {c0.get('distance')}→{c1.get('distance')}，球移动后等待跟随状态收敛，相机 target 与球位置误差={target_error:.3f}，朝向 dot={r2.get('dot')}。")

    # 21 核心 HUD：只验证 prompt 明确声明的可见控件，不额外创造
    # 760×720 响应式或键盘聚焦要求。缩放按钮是否真实生效由 R20 验证。
    required_hud = ("shot-power","stroke-count","current-player","powerup-status","zoom-in","zoom-out")
    hud_probe=await _call(page,"""()=>{const ids=['shot-power','stroke-count','current-player','powerup-status','zoom-in','zoom-out'];const rows=Object.fromEntries(ids.map(id=>{const e=document.querySelector(`[data-testid='${id}']`),r=e?.getBoundingClientRect(),st=e?getComputedStyle(e):null;const visible=!!e&&!!r&&st?.display!=='none'&&st?.visibility!=='hidden'&&Number(st?.opacity||1)>0&&r.width>0&&r.height>0;return[id,{exists:!!e,visible,text:e?.textContent||'',w:r?.width||0,h:r?.height||0}]}));return{rows}}""") or {}
    hud_rows=hud_probe.get("rows") or {}
    missing=[k for k in required_hud if not (hud_rows.get(k) or {}).get("exists")]
    hidden=[k for k in required_hud if (hud_rows.get(k) or {}).get("exists") and not (hud_rows.get(k) or {}).get("visible")]
    r21_ok=not missing and not hidden
    ctx.check(21,r21_ok,f"prompt 声明的核心 HUD/控件：缺失={missing}，存在但不可见={hidden}；观测={hud_rows}。本项不附加窄屏尺寸或键盘聚焦要求。")

    # 22 运动状态生命周期：只读状态应跟随真实物理，不要求调试型 HUD。
    fresh22=await _prepare_fresh_shot(page,"forest",reuse_ready=True)
    if not fresh22:
        fresh22=await _prepare_fresh_shot(page,"forest",reuse_ready=False)
    before_ball={}; before_shot={}
    if fresh22:
        for _ in range(4):
            before_ball=await _state(page,"__ball") or before_ball; before_shot=await _state(page,"__shot") or before_shot
            if before_ball and before_shot: break
            await page.wait_for_timeout(35)
    row=await _dispatch_world_shot(page,{"x":1,"z":.2},.5) if fresh22 else {"ok":False}
    samples=await _wait_ball_stop(page,7,require_motion=True) if row.get("ok") else []
    moving_candidates=[(r.get("ball") or {}) for r in samples if (r.get("ball") or {}).get("moving") is True and isinstance((r.get("ball") or {}).get("speed"),(int,float)) and float((r.get("ball") or {}).get("speed",0) or 0)>.02]
    moving=moving_candidates[0] if moving_candidates else (await _wait_ball_motion(page,.8) if row.get("ok") else {})
    stopped=(samples[-1].get("ball") if samples else await _state(page,"__ball")) or {}; stopped_shot=await _state(page,"__shot") or {}
    before_static=bool(before_ball.get("moving") is False and float(before_ball.get("speed",0) or 0)<=.02 and not before_ball.get("airborne") and before_shot.get("canShoot") is True)
    moving_real=bool(moving.get("moving") is True and isinstance(moving.get("speed"),(int,float)) and float(moving.get("speed",0) or 0)>.02 and moving.get("sleeping") is False)
    stopped_real=bool(stopped.get("moving") is False and float(stopped.get("speed",0) or 0)<=.02 and not stopped.get("airborne") and (stopped.get("inHole") or stopped_shot.get("canShoot") is True))
    finite_series=bool(samples and all(_finite_values((r.get("ball") or {})) for r in samples))
    ctx.check(22,bool(fresh22 and before_static and moving_real and stopped_real and finite_series),f"静止→运动→停稳状态：before={{moving:{before_ball.get('moving')},sleeping:{before_ball.get('sleeping')},speed:{before_ball.get('speed')}}}，运动样本数={len(moving_candidates)}，moving={{moving:{moving.get('moving')},sleeping:{moving.get('sleeping')},speed:{moving.get('speed')},airborne:{moving.get('airborne')}}}，stopped={{moving:{stopped.get('moving')},sleeping:{stopped.get('sleeping')},speed:{stopped.get('speed')},airborne:{stopped.get('airborne')},inHole:{stopped.get('inHole')}}}；全程有限={finite_series}。")

    # 28 Prompt 中声明的接口/DOM/Three 运行对象
    # Use an ordinary single-player playing state. Multiplayer setup/turn
    # transitions can temporarily hide or remount the renderer and are already
    # tested by R23-R25; they must not create a one-frame false negative here.
    await _open_level(page, "forest")
    await _wait_state(page, "__game", lambda g: g.get("gameState") == "playing", 2.0)
    schema=await _call(page,r"""()=>{
      const reqDom=['menu','levelSelect','gameScreen','multiplayerLobby','leaderboardScreen','resultScreen'];
      const reqTest=['start-btn','level-forest','level-desert','level-snow','multiplayer-btn','local-start-btn','local-exit-btn','leaderboard-btn','shot-power','stroke-count','current-player','powerup-status','powerup-hio','zoom-in','zoom-out','surface-friction','aim-feedback','result-next'];
      const hookKeys={
        __contract:['version','gameType','renderer','stateSource','hooksReady','hookNames','buildId'],
        __game:['ready','gameState','mode','currentLevel','currentHoleStrokes','totalStrokes','currentScore','totalScore','holeComplete','elapsedTime'],
        __ball:['position','velocity','speed','radius','moving','sleeping','airborne','inHole','outOfBounds','currentSurface','friction','lastCollision','lastSafePosition'],
        __shot:['dragging','canShoot','startScreen','currentScreen','direction','power','minPower','maxPower','strokeCount'],
        __course:['levelId','name','theme','par','bounds','spawn','hole','surfaces','obstacles','terrainFeatures','obstacleCount','sceneObjectCount','loaded'],
        __multiplayer:['enabled','mode','status','playerCount','currentPlayerId','turnIndex','round','revision','players','winnerId','tiedPlayerIds'],
        __powerups:['items','inventory','activeEffect','lastTriggeredId'],
        __camera:['mode','position','target','distance','minDistance','maxDistance','zoom'],
        __leaderboard:['levelBest','overall','persisted'],
        __performance:['fixedStep','accumulator','simulationTick','renderFrame','reactCommitCount','logicLoopCount','listenerCount','runtimeMountCount','runtimeCleanupCount','engineGeneration','poolStats']
      };
      const errors=[];
      const required=['__contract','__game','__ball','__shot','__course','__multiplayer','__powerups','__camera','__leaderboard','__performance'];
      const has=(o,keys,label)=>{if(!o||typeof o!=='object'){errors.push(label+':object');return false}for(const k of keys)if(!(k in o))errors.push(label+'.'+k);return true};
      const vec=(o,keys,label)=>{if(!has(o,keys,label))return;for(const k of keys)if(typeof o[k]!=='number'||!Number.isFinite(o[k]))errors.push(label+'.'+k+':number')};
      const finiteNumber=(v,label)=>{if(typeof v!=='number'||!Number.isFinite(v))errors.push(label+':number')};
      const nonFinite=(value,path,seen=new Set())=>{if(typeof value==='number'&&!Number.isFinite(value))return path;if(!value||typeof value!=='object'||seen.has(value))return null;seen.add(value);for(const [k,v] of Object.entries(value)){const hit=nonFinite(v,path+'.'+k,seen);if(hit)return hit}return null};

      // prompt.md explicitly forbids duplicate/hidden substitute identifiers.  A
      // screen may legitimately be hidden while inactive, so require uniqueness
      // and attachment here; visibility is exercised by its owning rubric.
      for(const id of reqDom){const rows=document.querySelectorAll('#'+CSS.escape(id));if(rows.length!==1)errors.push('dom:'+id+':count='+rows.length)}
      for(const id of reqTest){const rows=document.querySelectorAll(`[data-testid="${CSS.escape(id)}"]`);if(rows.length!==1)errors.push('testid:'+id+':count='+rows.length)}

      const states={};
      for(const[name,keys]of Object.entries(hookKeys)){
        const h=window[name],st=h?.getState?.();states[name]=st;
        if(!st){errors.push('hook:'+name);continue}
        has(st,keys,name);
        try{JSON.stringify(st)}catch{errors.push('json:'+name)}
        const bad=nonFinite(st,name);if(bad)errors.push('nonfinite:'+bad)
      }
      const c=states.__contract,g=states.__game,b=states.__ball,sh=states.__shot,co=states.__course,mp=states.__multiplayer,pw=states.__powerups,cam=states.__camera,lb=states.__leaderboard,pf=states.__performance;
      // Validate only the schema/value guarantees actually declared by prompt.md.
      // The existence of the ten required hooks is checked independently above;
      // prompt.md does not require hookNames to enumerate them, hooksReady to be
      // true at every instant, or buildId to be non-empty.
      if(c){
        if(typeof c.version!=='string'||typeof c.hooksReady!=='boolean'||!Array.isArray(c.hookNames)||!c.hookNames.every(v=>typeof v==='string')||typeof c.buildId!=='string')errors.push('contract-types');
        if(c.gameType!=='3d-mini-golf'||c.renderer!=='threejs'||c.stateSource!=='live')errors.push('contract-values');
      }


      if(g?.currentLevel!==null&&g?.currentLevel!==undefined){has(g.currentLevel,['id','name','theme','par'],'__game.currentLevel');finiteNumber(g.currentLevel?.par,'__game.currentLevel.par')}
      if(b){vec(b.position,['x','y','z'],'__ball.position');vec(b.velocity,['x','y','z'],'__ball.velocity');vec(b.lastSafePosition,['x','y','z'],'__ball.lastSafePosition');if(b.lastCollision!=null&&typeof b.lastCollision!=='string')errors.push('__ball.lastCollision:string|null')}
      if(sh){if(sh.startScreen!=null)vec(sh.startScreen,['x','y'],'__shot.startScreen');if(sh.currentScreen!=null)vec(sh.currentScreen,['x','y'],'__shot.currentScreen');vec(sh.direction,['x','z'],'__shot.direction')}
      if(co){
        has(co.bounds,['minX','maxX','minZ','maxZ'],'__course.bounds');if(co.bounds)for(const k of ['minX','maxX','minZ','maxZ'])finiteNumber(co.bounds[k],'__course.bounds.'+k);
        vec(co.spawn,['x','y','z'],'__course.spawn');has(co.hole,['x','y','z','radius'],'__course.hole');if(co.hole){vec(co.hole,['x','y','z'],'__course.hole');finiteNumber(co.hole.radius,'__course.hole.radius')}
        if(!Array.isArray(co.surfaces))errors.push('__course.surfaces:array');else co.surfaces.forEach((r,i)=>{has(r,['id','type','friction'],`__course.surfaces[${i}]`);finiteNumber(r?.friction,`__course.surfaces[${i}].friction`);if(r?.center!=null)vec(r.center,['x','y','z'],`__course.surfaces[${i}].center`);if(r?.bounds!=null){has(r.bounds,['minX','maxX','minZ','maxZ'],`__course.surfaces[${i}].bounds`);for(const k of ['minX','maxX','minZ','maxZ'])finiteNumber(r.bounds[k],`__course.surfaces[${i}].bounds.${k}`)}});
        if(!Array.isArray(co.obstacles))errors.push('__course.obstacles:array');else co.obstacles.forEach((r,i)=>{has(r,['id','type','position','solid'],`__course.obstacles[${i}]`);vec(r?.position,['x','y','z'],`__course.obstacles[${i}].position`);if(r?.radius!=null)finiteNumber(r.radius,`__course.obstacles[${i}].radius`);if(r?.bounds!=null){has(r.bounds,['minX','maxX','minZ','maxZ'],`__course.obstacles[${i}].bounds`);for(const k of ['minX','maxX','minZ','maxZ'])finiteNumber(r.bounds[k],`__course.obstacles[${i}].bounds.${k}`)}});
        if(!Array.isArray(co.terrainFeatures))errors.push('__course.terrainFeatures:array');
      }
      if(mp){
        if(!Array.isArray(mp.players))errors.push('__multiplayer.players:array');else mp.players.forEach((r,i)=>{has(r,['id','name','holeStrokes','totalStrokes','finished','ballPosition','powerupInventory','armedPowerup'],`__multiplayer.players[${i}]`);vec(r?.ballPosition,['x','y','z'],`__multiplayer.players[${i}].ballPosition`);if(!Array.isArray(r?.powerupInventory))errors.push(`__multiplayer.players[${i}].powerupInventory:array`);else r.powerupInventory.forEach((v,j)=>has(v,['type','count'],`__multiplayer.players[${i}].powerupInventory[${j}]`))});
        if(!Array.isArray(mp.tiedPlayerIds))errors.push('__multiplayer.tiedPlayerIds:array');
      }
      if(pw){
        if(!Array.isArray(pw.items))errors.push('__powerups.items:array');else pw.items.forEach((r,i)=>{has(r,['id','type','position','active','collected'],`__powerups.items[${i}]`);vec(r?.position,['x','y','z'],`__powerups.items[${i}].position`);if(r?.direction!=null)vec(r.direction,['x','z'],`__powerups.items[${i}].direction`)});
        if(!Array.isArray(pw.inventory))errors.push('__powerups.inventory:array');else pw.inventory.forEach((r,i)=>has(r,['type','count'],`__powerups.inventory[${i}]`));
      }
      if(cam){vec(cam.position,['x','y','z'],'__camera.position');vec(cam.target,['x','y','z'],'__camera.target')}
      if(lb){
        if(!lb.levelBest||typeof lb.levelBest!=='object'||Array.isArray(lb.levelBest))errors.push('__leaderboard.levelBest:record');else for(const [level,rows] of Object.entries(lb.levelBest)){if(!Array.isArray(rows)){errors.push(`__leaderboard.levelBest.${level}:array`);continue}rows.forEach((r,i)=>has(r,['playerId','playerName','strokes','rank','par','relativeToPar','achievedAt'],`__leaderboard.levelBest.${level}[${i}]`))}
        if(!Array.isArray(lb.overall))errors.push('__leaderboard.overall:array');else lb.overall.forEach((r,i)=>{has(r,['playerId','playerName','levelStrokes','totalStrokes','rank','achievedAt'],`__leaderboard.overall[${i}]`);if(r?.levelStrokes!=null)has(r.levelStrokes,['forest','desert','snow'],`__leaderboard.overall[${i}].levelStrokes`)});
      }
      if(pf){if(!pf.poolStats||typeof pf.poolStats!=='object'||Array.isArray(pf.poolStats))errors.push('__performance.poolStats:record');else for(const [name,row] of Object.entries(pf.poolStats))has(row,['capacity','createdTotal','reused'],`__performance.poolStats.${name}`)}
      if(!window.__THREE_SCENE__?.isScene)errors.push('three-scene');
      if(!window.__THREE_RENDERER__?.isWebGLRenderer)errors.push('three-renderer');
      return{errors};
    }""") or {"errors":["evaluation"]}
    real=await _real_scene_probe(page)
    if not (real.get("sceneIsScene") and real.get("rendererIsWebGL") and real.get("canvasMatches") and real.get("contextObject") and not real.get("contextLost")):
        end28=time.monotonic()+1.2
        while time.monotonic()<end28:
            await page.wait_for_timeout(45)
            retry28=await _real_scene_probe(page)
            if retry28.get("sceneIsScene") and retry28.get("rendererIsWebGL") and retry28.get("canvasMatches") and retry28.get("contextObject") and not retry28.get("contextLost"):
                real=retry28; break
    ctx.check(28,bool(not schema.get("errors") and real.get("sceneIsScene") and real.get("rendererIsWebGL") and real.get("canvasMatches") and real.get("contextObject") and not real.get("contextLost")),f"Prompt 声明的十个只读状态接口、全部固定 DOM/data-testid 和真实 Three.js Scene/WebGLRenderer 均存在且结构完整；错误列表为 {schema.get('errors')}，Three 运行态={real}。")

    # 29 核心重复状态的一致性。按规范保持原子：这里只检查关卡、杆数、
    # 球/洞这组真正重复的数据；相机由 R20，道具由 R16-R19 分别验证。
    await _open_level(page,"forest"); await _reset_ball(page)
    g0=await _state(page,"__game") or {}; b0=await _state(page,"__ball") or {}; s0=await _state(page,"__shot") or {}; c0=await _state(page,"__course") or {}; r0=await _real_scene_probe(page)
    baseline=int(g0.get("currentHoleStrokes",0) or 0)
    pre_level=(g0.get("currentLevel") or {}).get("id")==c0.get("levelId")
    pre_strokes=g0.get("currentHoleStrokes")==s0.get("strokeCount")==baseline
    pre_ball=bool(r0.get("actualBall") and _dist(b0.get("position"),r0.get("actualBall"))<.14)
    pre_hole=bool(r0.get("actualHole") and _dist(c0.get("hole"),r0.get("actualHole"),("x","z"))<.3)

    shot29=await _dispatch_world_shot(page,{"x":.9,"z":.3},.33)
    if not shot29.get("ok"):
        _blocked(ctx, 29,"本项需要一次真实击球后的跨表示收敛证据，但本轮指针手势未被页面接受；击球能力由 R7/R8 独立判定。",blocked_by=[7])
    else:
        g1=await _wait_state(page,"__game",lambda g:int(g.get("currentHoleStrokes",-999) or 0)==baseline+1,1.8)
        s1=await _wait_state(page,"__shot",lambda st:int(st.get("strokeCount",-999) or 0)==baseline+1,1.2)
        dom1=await _call(page,r"""async expected=>{const end=performance.now()+1400;while(performance.now()<end){const e=document.querySelector('[data-testid=stroke-count]');const value=Number(e?.dataset?.strokes);const text=e?.textContent||'';const style=e?getComputedStyle(e):null;const visible=!!e&&style?.display!=='none'&&style?.visibility!=='hidden'&&Number(style?.opacity||1)>0;if(visible&&(value===expected||new RegExp('(^|\D)'+expected+'(\D|$)').test(text)))return{text,strokes:value,visible:true};await new Promise(r=>setTimeout(r,35))}const e=document.querySelector('[data-testid=stroke-count]');return{text:e?.textContent||'',strokes:Number(e?.dataset?.strokes),visible:!!e}}""",baseline+1) or {}
        settle29=await _wait_ball_stop(page,5.5,require_motion=True)
        await _call(page,"()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))")
        b1=await _state(page,"__ball") or {}; r1=await _real_scene_probe(page)
        post_strokes=bool(g1.get("currentHoleStrokes")==baseline+1 and s1.get("strokeCount")==baseline+1)
        hud_text=str(dom1.get("text") or "")
        hud_number_match=bool(re.search(rf"(?<!\d){baseline+1}(?!\d)", hud_text))
        dom_sync=bool(dom1.get("visible") and (dom1.get("strokes")==baseline+1 or hud_number_match))
        post_ball=bool(r1.get("actualBall") and _dist(b1.get("position"),r1.get("actualBall"))<.16)
        r29_conditions={
            "levelId":bool(pre_level),
            "preStroke":bool(pre_strokes),
            "preBall":bool(pre_ball),
            "hole":bool(pre_hole),
            "postStroke":bool(post_strokes),
            "strokeHud":bool(dom_sync),
            "postBall":bool(post_ball),
        }
        failed=[name for name,value in r29_conditions.items() if not value]
        ctx.check(29,not failed,f"核心重复状态条件={r29_conditions}；失败条件={failed}。击球前球模型误差={_dist(b0.get('position'),r0.get('actualBall')) if r0.get('actualBall') else None}、洞模型误差={_dist(c0.get('hole'),r0.get('actualHole'),('x','z')) if r0.get('actualHole') else None}；击球后 game/shot={g1.get('currentHoleStrokes')}/{s1.get('strokeCount')}，DOM={dom1}，球模型误差={_dist(b1.get('position'),r1.get('actualBall')) if r1.get('actualBall') else None}。")

    # 30 getState 独立只读快照
    integrity=await _state_integrity_probe(page)
    ctx.check(30,bool(not integrity.get("errors")),f"连续读取并递归污染第一次返回对象后，十个公开 getState 均返回新的独立深层快照，读取未改变关键游戏状态；错误列表为 {integrity.get('errors')}。")
    # If a product violated the snapshot contract, the evaluator intentionally
    # mutated shared data to prove it.  Reload before later rubrics so that one
    # R30 failure cannot corrupt R31/R23+ and cascade into unrelated zeros.
    try:
        await page.reload(wait_until="load",timeout=7000)
    except Exception:
        pass
    await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)

    # 31 评估侧独立运行时稳定性。探针通过 init script 跨 reload
    # 自动安装；资源稳定性比较“缓存已热后的同一 forest 重复加载”，不把
    # desert/snow 本身更复杂的合法资源量误认为泄漏。
    await _install_runtime_probe(page)
    try:
        await page.reload(wait_until="load",timeout=7000)
    except Exception:
        pass
    await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
    counts=[]; memories=[]; probes=[]; themes31=("forest","desert","snow","forest","forest","forest")
    for theme in themes31:
        await _open_level(page,theme)
        tick=(await _state(page,"__performance") or {}).get("renderFrame",0)
        await _wait_state(page,"__performance",lambda p:p.get("renderFrame",0)>=tick+2,1.0)
        counts.append(await _real_scene_probe(page))
        memories.append(await _call(page,"()=>({...window.__THREE_RENDERER__?.info?.memory})") or {})
        probes.append(await _call(page,"()=>({...window.__UT_RUNTIME_PROBE__})") or {})
    forest_idx=[i for i,t in enumerate(themes31) if t=="forest"]
    warm_idx=forest_idx[-3:]
    warm_counts=[counts[i] for i in warm_idx]; warm_mem=[memories[i] for i in warm_idx]; warm_probes=[probes[i] for i in warm_idx]
    def stable_numeric(rows,key,absolute=2,ratio=.08):
        vals=[float(r.get(key,0) or 0) for r in rows]
        if not vals: return False
        base=max(1.0,abs(vals[0])); return max(vals)-min(vals) <= max(float(absolute),base*ratio)
    graph=bool(warm_counts and all(r.get("sceneIsScene") and r.get("rendererIsWebGL") and r.get("visibleMeshCount",0)>0 for r in warm_counts) and stable_numeric(warm_counts,"visibleMeshCount",3,.08) and stable_numeric(warm_counts,"objectCount",6,.08))
    mem_vals=[(int(m.get("geometries",0) or 0),int(m.get("textures",0) or 0)) for m in warm_mem]
    resources_ok=False
    if len(mem_vals)>=3:
        base_g,base_t=mem_vals[0]; final_g,final_t=mem_vals[-1]
        retained_ok=(final_g<=base_g+max(3,int(max(1,base_g)*.15)) and final_t<=base_t+max(2,int(max(1,base_t)*.20)))
        finite_bounded=(max(v[0] for v in mem_vals)<=max(64,base_g*5+12) and max(v[1] for v in mem_vals)<=max(24,base_t*5+8))
        # Transient theme-loading peaks are valid; a leak is retained growth, not a peak that returns.
        resources_ok=bool(retained_ok and finite_bounded)
    probe_ok=bool(warm_probes and all(isinstance(r.get("rafScheduled"),(int,float)) and r.get("rafScheduled",0)>0 for r in warm_probes))
    raf_ok=bool(probe_ok and warm_probes[-1].get("rafActive",99)<=warm_probes[0].get("rafActive",0)+2 and warm_probes[-1].get("rafMaxActive",99)<=max(4,warm_probes[0].get("rafMaxActive",0)+2))
    listeners_ok=bool(probe_ok and warm_probes[-1].get("listenerNet",999)<=warm_probes[0].get("listenerNet",0)+4)
    # R31 只验证运行时资源稳定。窗口响应式/resize 并非本 Prompt 独立硬要求，
    # 不再把一次 viewport 改变绑入资源泄漏 Rubric。
    ctx.check(31,bool(graph and raf_ok and listeners_ok and resources_ok),f"热缓存后同一 forest 场景稳定={graph}，RAF probes={warm_probes}，监听器稳定={listeners_ok}，renderer memory={mem_vals} 稳定={resources_ok}。")



    # 23 本地多人：核心要求是至少两名玩家可真实开局。
    started23=await _start_local_match(page,2); m23=started23.get("multiplayer") or {}; hud23=str(started23.get("hud") or ""); players23=m23.get("players") or []; current23=next((p for p in players23 if p.get("id")==m23.get("currentPlayerId")),{}); current_index23=next((i+1 for i,p in enumerate(players23) if p.get("id")==m23.get("currentPlayerId")),None)
    hud_current23=bool(hud23 and (any(token and str(token) in hud23 for token in (current23.get("name"),current23.get("id"))) or (current_index23 is not None and re.search(rf"(?<!\d){current_index23}(?!\d)",hud23))))
    r23_ok=bool(started23.get("selected") and started23.get("started") and m23.get("status")=="playing" and m23.get("playerCount")==2 and len(players23)==2 and len({p.get("id") for p in players23})==2 and m23.get("currentPlayerId") in {p.get("id") for p in players23} and hud_current23)
    ctx.check(23,r23_ok,f"真实多人入口选择 2 人并开局={r23_ok}；playerCount={m23.get('playerCount')}，players={[p.get('id') for p in players23]}，current={m23.get('currentPlayerId')}，HUD={hud23!r}。3/4 人属于可选增强，不作为硬门槛。")

    # 24 玩家状态隔离：兼容每杆轮换或每洞轮换。
    m0=(await _start_local_match(page,2)).get("multiplayer") or {}; ids=[p.get("id") for p in m0.get("players") or []]; isolation_rows=[]; score_isolated=False; other_reached=False
    if len(ids)==2 and m0.get("currentPlayerId") in ids:
        owner=m0.get("currentPlayerId"); other=ids[1] if ids[0]==owner else ids[0]; before_rows={p.get("id"):p for p in m0.get("players") or []}; before_other=dict(before_rows.get(other) or {})
        # First legal stroke must modify only the actual player, regardless of whether
        # the product switches immediately or lets that player finish the hole.
        course24=await _state(page,"__course") or {}; hole24=course24.get("hole") or {}; shot24=await _shot_to_point(page,hole24,power=.24,wait=False); await _wait_ball_stop(page,5.5,require_motion=True) if shot24.get("ok") else None; after1=await _state(page,"__multiplayer") or {}; rows1={p.get("id"):p for p in after1.get("players") or []}
        before_owner=before_rows.get(owner) or {}; after_owner=rows1.get(owner) or {}; after_other=rows1.get(other) or {}
        owner_hole_delta=int(after_owner.get("holeStrokes",0) or 0)-int(before_owner.get("holeStrokes",0) or 0)
        owner_total_delta=int(after_owner.get("totalStrokes",0) or 0)-int(before_owner.get("totalStrokes",0) or 0)
        owner_score_advanced=bool(owner_hole_delta==1 or owner_total_delta==1 or (after_owner.get("finished") and owner_total_delta>0))
        other_score_same=bool(after_other.get("holeStrokes")==before_other.get("holeStrokes") and after_other.get("totalStrokes")==before_other.get("totalStrokes") and after_other.get("finished")==before_other.get("finished"))
        owner_ball_changed=bool(_dist(before_owner.get("ballPosition"),after_owner.get("ballPosition"),("x","z"))>.01 or after_owner.get("finished"))
        other_ball_same=bool(_dist(before_other.get("ballPosition"),after_other.get("ballPosition"),("x","z"))<=.01)
        score_isolated=bool(shot24.get("ok") and owner_score_advanced and other_score_same and owner_ball_changed and other_ball_same)
        isolation_rows.append({"stage":"first-shot","owner":owner,"currentAfter":after1.get("currentPlayerId"),"ownerHoleDelta":owner_hole_delta,"ownerTotalDelta":owner_total_delta,"ownerBallChanged":owner_ball_changed,"otherScoreSame":other_score_same,"otherBallSame":other_ball_same})
        # If the implementation is per-hole, keep playing the owner normally until
        # control moves to the other player. This observes the product strategy; it
        # does not prescribe a switch after every stroke.
        mp_after_first=await _state(page,"__multiplayer") or {}
        if mp_after_first.get("currentPlayerId")==owner and mp_after_first.get("status")!="complete":
            advanced24,advance_rows24=await _play_local_player_to_turn_change(page,owner,max_strokes=14,budget=20.0)
            isolation_rows.extend(advance_rows24[-6:])
            other_reached=other_reached or advanced24
        mp_other=await _state(page,"__multiplayer") or {}; other_reached=other_reached or mp_other.get("currentPlayerId")==other
        if other_reached:
            owner_before_other=dict(next((p for p in mp_other.get("players") or [] if p.get("id")==owner),{}) or {}); other_before=dict(next((p for p in mp_other.get("players") or [] if p.get("id")==other),{}) or {}); cnow=await _state(page,"__course") or {}; hnow=cnow.get("hole") or {}; shot_other=await _shot_to_point(page,hnow,power=.22,wait=False); await _wait_ball_stop(page,5.5,require_motion=True) if shot_other.get("ok") else None; mp_after_other=await _state(page,"__multiplayer") or {}; owner_after=next((p for p in mp_after_other.get("players") or [] if p.get("id")==owner),{}) or {}; other_after=next((p for p in mp_after_other.get("players") or [] if p.get("id")==other),{}) or {}
            owner_score_unchanged=bool(owner_after.get("holeStrokes")==owner_before_other.get("holeStrokes") and owner_after.get("totalStrokes")==owner_before_other.get("totalStrokes") and owner_after.get("finished")==owner_before_other.get("finished"))
            owner_ball_unchanged=bool(_dist(owner_before_other.get("ballPosition"),owner_after.get("ballPosition"),("x","z"))<=.01)
            other_hole_delta=int(other_after.get("holeStrokes",0) or 0)-int(other_before.get("holeStrokes",0) or 0)
            other_total_delta=int(other_after.get("totalStrokes",0) or 0)-int(other_before.get("totalStrokes",0) or 0)
            other_score_advanced=bool(other_hole_delta==1 or other_total_delta==1 or (other_after.get("finished") and other_total_delta>0))
            other_ball_changed=bool(_dist(other_before.get("ballPosition"),other_after.get("ballPosition"),("x","z"))>.01 or other_after.get("finished"))
            isolation_rows.append({"stage":"other-shot","ownerScoreUnchanged":owner_score_unchanged,"ownerBallUnchanged":owner_ball_unchanged,"otherHoleDelta":other_hole_delta,"otherTotalDelta":other_total_delta,"otherBallChanged":other_ball_changed})
            score_isolated=bool(score_isolated and shot_other.get("ok") and owner_score_unchanged and owner_ball_unchanged and other_score_advanced and other_ball_changed)
        # If multiplayer actually exposes a collectible HIO, prove its inventory
        # does not cross-write. This does not require per-player cloned scene items.
        powerup_isolated=True; powerup_detail={"applicable":False}
        # Rubric is conditional: only require the inventory/armed cross-player proof
        # when local multiplayer actually exposes per-player power-up capability.
        mp_caps=await _state(page,"__multiplayer") or {}
        players_caps=mp_caps.get("players") or []
        multiplayer_powerups_allowed=any(any(k in p for k in ("powerupInventory","armedPowerup","armedType")) for p in players_caps if isinstance(p,dict))
        hio_theme24,_,_=await _find_powerup_level(page,"hole_in_one") if multiplayer_powerups_allowed else (None,None,{})
        powerup_probe_blocked=bool(multiplayer_powerups_allowed and not hio_theme24)
        if hio_theme24:
            local24=(await _start_local_match(page,2,theme=hio_theme24)).get("multiplayer") or {}; pids24=[p.get("id") for p in local24.get("players") or []]; pstate24=await _state(page,"__powerups") or {}; hio24=next((i for i in pstate24.get("items") or [] if i.get("type")=="hole_in_one" and i.get("active") and not i.get("collected")),None)
            if len(pids24)==2 and hio24 and local24.get("currentPlayerId") in pids24:
                powerup_detail["applicable"]=True; own24=local24.get("currentPlayerId"); oth24=pids24[1] if pids24[0]==own24 else pids24[0]
                def inv_hio(row): return next((int(v.get("count",0) or 0) for v in (row or {}).get("powerupInventory") or [] if v.get("type")=="hole_in_one"),0)
                pickup_ok24,owner_count,pickup_rows24=await _collect_local_hio(page,own24,hio24,max_attempts=5)
                mp_pick=await _state(page,"__multiplayer") or {}
                owner_row=next((p for p in mp_pick.get("players") or [] if p.get("id")==own24),{}) or {}
                oth_row=next((p for p in mp_pick.get("players") or [] if p.get("id")==oth24),{}) or {}
                owner_after_pick=inv_hio(owner_row); other_count=inv_hio(oth_row)
                # The rubric asks for isolated per-player inventory, not for an
                # additional turn transition after pickup. Reading both independent
                # player snapshots immediately after the real pickup proves the
                # cross-write boundary without spending another full-hole drive.
                powerup_isolated=bool(pickup_ok24 and owner_count>0 and owner_after_pick==owner_count and other_count==0)
                powerup_detail.update({"owner":own24,"other":oth24,"ownerCount":owner_count,"otherCount":other_count,"ownerAfterPick":owner_after_pick,"driver":pickup_rows24[-6:]})
                if not pickup_ok24 or owner_count<=0:
                    powerup_probe_blocked=True
            else:
                # A real HIO level was found, but the evaluator failed to establish
                # a valid two-player pickup state. That is missing causal input, not
                # evidence of cross-player inventory corruption.
                powerup_probe_blocked=True
    else:
        powerup_isolated=False; powerup_detail={"applicable":False}
    if 'powerup_probe_blocked' in locals() and powerup_probe_blocked and len(ids)==2 and score_isolated and other_reached:
        _blocked(ctx,24,f"成绩/球位隔离已验证，但多人状态暴露道具能力后，评估侧未能通过真实关卡流程取得可验证的一杆入洞道具输入；不能把该子条件当作 not applicable。道具明细={powerup_detail}，过程={isolation_rows}。",blocked_by=["evaluator-multiplayer-powerup-input"])
    else:
        r24_ok=bool(len(ids)==2 and score_isolated and other_reached and powerup_isolated)
        ctx.check(24,r24_ok,f"两人成绩/球位隔离={score_isolated}，已按产品自身轮换策略到达另一玩家={other_reached}；多人道具隔离（存在可用道具时验证）={powerup_isolated}，道具明细={powerup_detail}，过程={isolation_rows}。不要求每杆轮换或复制独立场上道具实例。")

    # 25 胜者、平局、重复结算与干净重开。
    # Drive whichever player the product reports as current. This works for
    # per-stroke hot-seat and per-hole sequencing without prescribing either.
    async def drive_match(padding_by_index):
        started=await _start_local_match(page,len(padding_by_index))
        mp0=started.get("multiplayer") or {}
        if mp0.get("status")!="playing":
            return False,{},[]
        ordered=[p.get("id") for p in mp0.get("players") or []]
        padding={pid:max(0,int(padding_by_index[i])) for i,pid in enumerate(ordered) if pid}
        rows=[]
        deadline=time.monotonic()+34.0
        for turn in range(96):
            if time.monotonic()>=deadline:
                break
            mp=await _state(page,"__multiplayer") or {}
            if mp.get("status")=="complete":
                return True,mp,rows
            pid=mp.get("currentPlayerId")
            if not pid or pid not in ordered:
                break
            course=await _state(page,"__course") or {}; hole=course.get("hole") or {}; ball=await _state(page,"__ball") or {}; pos=ball.get("position") or {}
            if not all(isinstance(hole.get(k),(int,float)) and isinstance(pos.get(k),(int,float)) for k in ("x","z")):
                break
            before_row=next((p for p in mp.get("players") or [] if p.get("id")==pid),{})
            before_strokes=int(before_row.get("holeStrokes",0) or 0)
            if padding.get(pid,0)>0:
                stroke_happened=False; shot={"ok":False}; samples=[]; after=mp; row_after=before_row; after_strokes=before_strokes
                for retry in range(3):
                    ball=await _state(page,"__ball") or {}; pos=ball.get("position") or {}
                    hx=float(hole["x"])-float(pos.get("x",0)); hz=float(hole["z"])-float(pos.get("z",0)); tx,tz=_normalize2(-hz,hx)
                    if retry%2: tx,tz=-tx,-tz
                    shot=await _dispatch_world_shot(page,{"x":tx,"z":tz},.11+.025*retry)
                    samples=await _wait_ball_stop(page,3.8,require_motion=True) if shot.get("ok") else []
                    after=await _state(page,"__multiplayer") or {}
                    row_after=next((p for p in after.get("players") or [] if p.get("id")==pid),{})
                    after_strokes=int(row_after.get("holeStrokes",before_strokes) or 0)
                    stroke_happened=after_strokes>before_strokes or bool(row_after.get("finished"))
                    if stroke_happened: break
                if stroke_happened:
                    padding[pid]=max(0,padding.get(pid,0)-1)
                rows.append({"turn":turn,"player":pid,"kind":"padding","before":before_strokes,"after":after_strokes,"finished":bool(row_after.get("finished")),"shotOk":shot.get("ok"),"samples":len(samples),"next":after.get("currentPlayerId"),"status":after.get("status")})
                if not stroke_happened:
                    break
            else:
                advanced,advance_rows=await _play_local_player_to_turn_change(page,pid,max_strokes=14,budget=min(26.0,max(8.0,deadline-time.monotonic())))
                rows.extend({"turn":turn,**row} for row in advance_rows)
                if not advanced:
                    break
        final=await _state(page,"__multiplayer") or {}
        return final.get("status")=="complete",final,rows

    # R25 唯一胜者：只验证 Prompt 明确的最低总杆胜者语义。
    unique_done,mu,unique_rows=await drive_match((0,1))
    players=mu.get("players") or []
    min_stroke=min([p.get("totalStrokes",999) for p in players],default=999)
    expected=[p.get("id") for p in players if p.get("totalStrokes")==min_stroke]
    unique_input_ready=bool(unique_done and len(expected)==1)
    unique_winner=bool(unique_input_ready and mu.get("winnerId")==expected[0] and not (mu.get("tiedPlayerIds") or []))
    unique_ui={}
    if unique_input_ready:
        end25=time.monotonic()+1.8
        while time.monotonic()<end25:
            unique_ui=await _call(page,"""()=>{const a=document.getElementById('resultScreen'),b=document.getElementById('localLeaderboardScreen');const g=window.__game?.getState?.();const vis=e=>{if(!e)return false;const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity||1)>0&&r.width>0&&r.height>0};return{visible:vis(a)||vis(b),gameState:g?.gameState,lbVis:vis(b),lbCls:b&&b.className,text:[vis(a)?a.innerText:'',vis(b)?b.innerText:''].join(' ')}}""") or {}
            if unique_ui.get("visible"):
                break
            await page.wait_for_timeout(50)
    unique_ui_ok=bool(unique_ui.get("visible"))
    if unique_input_ready:
        ctx.check(25,bool(unique_winner and unique_ui_ok),f"唯一胜者真实多人完赛输入已形成；players={[(p.get('id'),p.get('totalStrokes')) for p in players]}，期望 winner={expected}，实际 winnerId={mu.get('winnerId')}，tied={mu.get('tiedPlayerIds')}，结果界面可见={unique_ui_ok}。")
    else:
        _blocked(ctx, 25,f"评估侧未形成‘唯一最低总杆’目标输入：matchComplete={unique_done}，players={[(p.get('id'),p.get('totalStrokes')) for p in players]}，最低杆集合={expected}。未形成唯一胜者输入时不能判胜者计算失败。驱动={unique_rows[-8:]}。",blocked_by=["evaluator-multiplayer-unique-input"])

    # R14 平局：与唯一胜者拆开，避免一类完赛路径失败拖累另一类。
    tie_done,mt,tie_rows=await drive_match((0,0))
    tie_players=mt.get("players") or []
    tie_totals=[p.get("totalStrokes") for p in tie_players]
    tie_ids=[p.get("id") for p in tie_players]
    tie_input_ready=bool(tie_done and len(tie_ids)==2 and len(set(tie_totals))==1)
    tie_state_ok=bool(tie_input_ready and mt.get("winnerId") is None and set(mt.get("tiedPlayerIds") or [])==set(tie_ids))
    board={}
    if tie_input_ready:
        end14=time.monotonic()+1.8
        while time.monotonic()<end14:
            board=await _call(page,"""()=>{const a=document.getElementById('resultScreen'),b=document.getElementById('localLeaderboardScreen');const vis=e=>{if(!e)return false;const s=getComputedStyle(e),r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&Number(s.opacity||1)>0&&r.width>0&&r.height>0};const roots=[a,b].filter(vis);const controls=roots.flatMap(root=>[...root.querySelectorAll('button,a[href],[role=button]')]).filter(e=>vis(e)&&!e.disabled&&e.getAttribute('aria-disabled')!=='true');return{visible:roots.length>0,text:roots.map(e=>e.innerText||'').join(' '),continueVisible:controls.length>0,continueLabels:controls.map(e=>(e.innerText||e.getAttribute('aria-label')||e.getAttribute('data-testid')||'').trim()).filter(Boolean)}}""") or {}
            if board.get("visible"):
                break
            await page.wait_for_timeout(50)
    board_text=str(board.get("text") or "")
    tie_semantic=bool(re.search(r"平局|并列|tie|draw",board_text,re.I))
    board_rows_ok=bool(board.get("visible") and all(str(p.get("name") or p.get("id") or "") in board_text and re.search(rf"(?<!\d){int(p.get('totalStrokes',-999))}(?!\d)",board_text) for p in tie_players) and (tie_semantic or len(set(tie_totals))==1))
    continue_probe=await _prove_result_continue_action(page) if tie_input_ready and board_rows_ok else {"ok":False,"attempts":[]}
    if tie_input_ready:
        ctx.check(14,bool(tie_state_ok and board_rows_ok and continue_probe.get('ok')),f"平局真实多人完赛输入已形成；totals={tie_totals}，winnerId={mt.get('winnerId')}，tiedPlayerIds={mt.get('tiedPlayerIds')}，结果页并列玩家/杆数完整={board_rows_ok}；可继续操作真实点击验证={continue_probe.get('ok')}，操作证据={continue_probe.get('attempts')}。")
    else:
        _blocked(ctx, 14,f"评估侧未形成‘相同最少总杆’目标输入：matchComplete={tie_done}，totals={tie_totals}。没有真实平局输入时不能判平局结算逻辑失败。驱动={tie_rows[-8:]}。",blocked_by=["evaluator-multiplayer-tie-input"])

    # 26 单关榜：未完赛击球不得写入排行榜。
    # 不假设具体持久化 API。先从公开 __leaderboard 记录基线，再验证未完赛
    # 不改变榜单、较好成绩覆盖、较差成绩不覆盖，以及刷新后状态稳定。
    # 若 evaluator 能安全识别 Web Storage 中的排行榜结构，再额外注入同杆
    # tie rows 强化排序验证；找不到该结构不能作为产品失败理由。
    single_mode_ready=await _ensure_single_player_menu(page)
    baseline_lb=await _state(page,"__leaderboard") or {}; baseline_levels=baseline_lb.get("levelBest") or {}
    leaderboard_theme=next((t for t in ("forest","desert","snow") if not (baseline_levels.get(t) or [])),None)
    # In a fresh evaluator run at least one level should normally be untouched by
    # earlier rubrics. If all three already contain results, select the level with
    # the worst existing best so a newly produced better score can still replace it.
    if leaderboard_theme is None:
        def _existing_best(t):
            rows=baseline_levels.get(t) or []; v=rows[0].get("strokes") if rows else None
            return float(v) if isinstance(v,(int,float)) and math.isfinite(float(v)) else -1.0
        leaderboard_theme=max(("forest","desert","snow"),key=_existing_best)
    baseline_rows=baseline_levels.get(leaderboard_theme) or []; baseline_rows_json=json.dumps(baseline_rows,sort_keys=True,ensure_ascii=False)
    await _open_level(page,leaderboard_theme); await _dispatch_world_shot(page,{"x":0,"z":1},.11); await _wait_ball_stop(page,4); incomplete=(await _state(page,"__leaderboard") or {}).get("levelBest",{}).get(leaderboard_theme) or []; incomplete_unchanged=json.dumps(incomplete,sort_keys=True,ensure_ascii=False)==baseline_rows_json
    incomplete_game=await _state(page,"__game") or {}; incomplete_ball=await _state(page,"__ball") or {}
    incomplete_input_ready=bool(incomplete_game.get("holeComplete") is not True and incomplete_ball.get("inHole") is not True)
    if incomplete_input_ready:
        ctx.check(26,bool(incomplete_unchanged),f"单关排行榜基线={baseline_rows}；真实击球且确认未完赛后={incomplete}；未完赛记录保持不变={incomplete_unchanged}。")
    else:
        _blocked(ctx, 26,f"用于验证‘未完赛不入榜’的低力度击球意外形成了完赛状态：holeComplete={incomplete_game.get('holeComplete')}，inHole={incomplete_ball.get('inHole')}。本轮没有合法未完赛输入。",blocked_by=["evaluator-incomplete-input"])
    worse=await _complete_level(page,leaderboard_theme,extra=3)
    if not worse: worse=await _complete_level(page,leaderboard_theme,extra=3)
    worse_score=(worse or {}).get("__observedStrokes")
    lbw=await _wait_state(page,"__leaderboard",lambda lb: any(isinstance(r,dict) and r.get("playerId")=="local-player" for r in ((lb.get("levelBest") or {}).get(leaderboard_theme) or [])),2.0) or await _state(page,"__leaderboard") or {}; rows_w=lbw.get("levelBest",{}).get(leaderboard_theme) or []
    better=await _complete_level(page,leaderboard_theme,extra=0)
    if not better: better=await _complete_level(page,leaderboard_theme,extra=0)
    better_strokes=(better or {}).get("__observedStrokes")
    lbb=await _wait_state(page,"__leaderboard",lambda lb: bool((lb.get("levelBest") or {}).get(leaderboard_theme)) and isinstance(((lb.get("levelBest") or {}).get(leaderboard_theme) or [{}])[0].get("strokes"),(int,float)),1.4) or await _state(page,"__leaderboard") or {}; rows_b=lbb.get("levelBest",{}).get(leaderboard_theme) or []; best_score=rows_b[0].get("strokes") if rows_b else None
    await _go_menu(page); await _dom_click(page,"[data-testid='leaderboard-btn']"); await _wait_state(page,"__game",lambda g:g.get("gameState")=="leaderboard",2)
    leaderboard_screen_visible=await _visible(page,"#leaderboardScreen")
    leaderboard_score_pair={"worse":worse,"better":better,"worseStrokes":worse_score,"betterStrokes":better_strokes}
    worse_again=await _complete_level(page,leaderboard_theme,extra=4)
    lba=await _wait_state(page,"__leaderboard",lambda lb: bool((lb.get("levelBest") or {}).get(leaderboard_theme)),1.4) or await _state(page,"__leaderboard") or {}; rows_a=lba.get("levelBest",{}).get(leaderboard_theme) or []; best_after=rows_a[0].get("strokes") if rows_a else None
    worse_again_strokes=(worse_again or {}).get("__observedStrokes")

    # Public-state persistence is always required.
    before_refresh=[(r.get("playerId"),r.get("strokes"),r.get("achievedAt"),r.get("rank")) for r in rows_a]
    await page.reload(wait_until="load"); await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
    persisted_rows=(await _state(page,"__leaderboard") or {}).get("levelBest",{}).get(leaderboard_theme) or []; persisted_order=[(r.get("playerId"),r.get("strokes"),r.get("achievedAt"),r.get("rank")) for r in persisted_rows]
    public_persist_ok=bool(persisted_order==before_refresh and _rows_sorted(persisted_rows,"strokes"))

    # Optional evaluator-only tie injection. Absence of a recognizable Web Storage
    # representation is not a contract failure. If injection succeeds, tie order
    # and second-refresh stability become mandatory.
    tie_score=int(best_score or 1)+20
    tie_par=(rows_b[0].get("par") if rows_b and isinstance(rows_b[0].get("par"),(int,float)) else 4)
    injected_rows=await _mutate_web_leaderboard_storage(page,"level-tie",{"theme":leaderboard_theme,"strokes":tie_score,"par":tie_par})
    injected=bool(injected_rows)
    tie_validation=True; tie_order=[]; tie_refresh_stable=True
    if injected:
        await page.reload(wait_until="load"); await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
        reload_rows=(await _state(page,"__leaderboard") or {}).get("levelBest",{}).get(leaderboard_theme) or []; order_after=[(r.get("playerId"),r.get("strokes"),r.get("achievedAt"),r.get("rank")) for r in reload_rows]; tie_order=[r.get("playerId") for r in reload_rows if r.get("strokes")==tie_score]
        await page.reload(wait_until="load"); await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
        refresh_rows=(await _state(page,"__leaderboard") or {}).get("levelBest",{}).get(leaderboard_theme) or []; refresh_order=[(r.get("playerId"),r.get("strokes"),r.get("achievedAt"),r.get("rank")) for r in refresh_rows]
        tie_refresh_stable=refresh_order==order_after
        tie_validation=bool(_rows_sorted(reload_rows,"strokes") and set(tie_order)=={"tie-old","tie-a","tie-z"} and tie_refresh_stable)

    completion_inputs32=bool(worse and better and worse_again)
    ordered_inputs32=bool(completion_inputs32 and isinstance(worse_score,(int,float)) and isinstance(better_strokes,(int,float)) and isinstance(worse_again_strokes,(int,float)) and worse_score>better_strokes and worse_again_strokes>better_strokes)
    r32_gates={
        "rowsAfterWorse":any(isinstance(r,dict) and r.get("playerId")=="local-player" for r in rows_w),
        "rowsAfterBetter":any(isinstance(r,dict) and r.get("playerId")=="local-player" for r in rows_b),
        "savedBestEqualsBetterRun":bool(best_score==better_strokes),
        "bestPreservedAfterLaterWorse":bool(best_after==best_score),
        "screen":bool(leaderboard_screen_visible),
        "sortedAndRanked":bool(_rows_sorted(persisted_rows,"strokes")),
        "publicPersist":bool(public_persist_ok),
        "tieValidationIfInjectable":bool(tie_validation),
    }
    if not ordered_inputs32:
        _blocked(ctx, 32,f"R32 需要三次合法完赛且实际形成‘较差 > 较好 < 再次较差’输入；完成={bool(worse)}/{bool(better)}/{bool(worse_again)}，真实杆数={worse_score}/{better_strokes}/{worse_again_strokes}。未形成目标成绩顺序时不能判 best-only 逻辑失败。",blocked_by=["evaluator-leaderboard-score-order"])
    else:
        failed32=[k for k,v in r32_gates.items() if not v]
        ctx.check(32,not failed32,f"三次真实完赛输入杆数={worse_score}/{better_strokes}/{worse_again_strokes}；榜单保存 best={best_score}、再次较差后 best={best_after}；条件={r32_gates}，失败={failed32}；可选 tie 注入={injected_rows or '未识别，不作为失败条件'}。")

    # 33 少杆得分更高：R32 已真实完成同一 forest 的较差/较好成绩，
    # 直接复用这两次真实完赛结果，不再额外重复两次完整通关。
    slow=(leaderboard_score_pair or {}).get("worse"); fast=(leaderboard_score_pair or {}).get("better"); slow_strokes=(leaderboard_score_pair or {}).get("worseStrokes"); fast_strokes=(leaderboard_score_pair or {}).get("betterStrokes")
    # A correct implementation may reset currentHoleStrokes immediately at hole
    # completion (R15 requires that). Compare the real persisted completion stroke
    # counts captured by R32 instead of the post-settlement current-hole field.
    def score_visible(row):
        if not isinstance(row,dict) or not row.get("__resultVisible"): return False
        if row.get("__resultScoreMatch") is True: return True
        score=row.get("currentScore")
        if not isinstance(score,(int,float)) or not math.isfinite(float(score)): return False
        texts=[str(row.get("__resultScoreText") or ""),str(row.get("__resultText") or "")]
        raw_value=str(row.get("__resultScoreValue") or "").strip()
        if raw_value:
            try:
                if abs(float(raw_value)-float(score))<=max(.5,abs(float(score))*.001): return True
            except ValueError:
                pass
        for text in texts:
            vals=[]
            for token in re.findall(r"[-+]?\d[\d,]*(?:\.\d+)?",text):
                try: vals.append(float(token.replace(',','')))
                except ValueError: pass
            if any(abs(v-float(score))<=max(.5,abs(float(score))*.001) for v in vals): return True
        return False
    score_dom_ok=bool(score_visible(fast) and score_visible(slow))
    score_pair_ready=bool(fast and slow and isinstance(fast_strokes,(int,float)) and isinstance(slow_strokes,(int,float)) and fast_strokes<slow_strokes)
    if not score_pair_ready:
        _blocked(ctx, 33,f"R33 需要同关两次真实完赛并形成明确杆数顺序；当前 slow={bool(slow)}/{slow_strokes}, fast={bool(fast)}/{fast_strokes}。输入未形成时不判积分函数失败。",blocked_by=[32])
    else:
        ctx.check(33,bool(fast.get("currentScore",0)>0 and slow.get("currentScore",0)>0 and fast.get("currentScore",0)>slow.get("currentScore",0) and score_dom_ok),f"同一关卡真实完赛杆数 {fast_strokes} < {slow_strokes}；对应正向积分 {fast.get('currentScore') if fast else None} > {slow.get('currentScore') if slow else None}，两次结算界面均能读到对应积分={score_dom_ok}。杆数来自两次真实完赛结果。")


    # 27 总榜：复用 R32 已真实完成的 forest 最佳成绩，再真实完成 desert/snow。
    # 可选的 Web Storage 合成 tie rows 只在此前确实注入过时尝试清理；
    # 找不到/未使用 Web Storage 不影响产品通过。
    cleaned_rows=await _mutate_web_leaderboard_storage(page,"cleanup") if injected else []
    cleanup_ok=bool(cleaned_rows) if injected else True
    if injected:
        await page.reload(wait_until="load"); await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
    existing=(await _state(page,"__leaderboard") or {}).get("levelBest",{}).get(leaderboard_theme) or []
    actual={leaderboard_theme:existing[0].get("strokes") if existing else None}; completions=bool(cleanup_ok and isinstance(actual[leaderboard_theme],(int,float)))
    extra_by_theme={"forest":0,"desert":1,"snow":2}
    for theme in ("forest","desert","snow"):
        if theme==leaderboard_theme: continue
        g=await _complete_level(page,theme,extra=extra_by_theme[theme]); completions=completions and bool(g); lb=await _state(page,"__leaderboard") or {}; rows=(lb.get("levelBest") or {}).get(theme) or []; actual[theme]=rows[0].get("strokes") if rows else None
    lb3=await _state(page,"__leaderboard") or {}; overall=lb3.get("overall") or []; first=overall[0] if overall else {}; before=json.dumps({"levels":first.get("levelStrokes"),"total":first.get("totalStrokes")},sort_keys=True)
    worse27_theme=next(t for t in ("desert","forest","snow") if t!=leaderboard_theme)
    worse27=await _complete_level(page,worse27_theme,extra=3) if completions else {}
    lb_after=await _state(page,"__leaderboard") or {}; overall_after=lb_after.get("overall") or []; first_after=overall_after[0] if overall_after else {}; after=json.dumps({"levels":first_after.get("levelStrokes"),"total":first_after.get("totalStrokes")},sort_keys=True)

    # Public-state sort/persistence is mandatory regardless of backend.
    public_order=[(r.get("playerId"),r.get("totalStrokes"),r.get("achievedAt"),r.get("rank")) for r in overall_after]
    public_sorted=_rows_sorted(overall_after,"totalStrokes")
    await page.reload(wait_until="load"); await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
    public_overall_refresh=(await _state(page,"__leaderboard") or {}).get("overall") or []; public_order_refresh=[(r.get("playerId"),r.get("totalStrokes"),r.get("achievedAt"),r.get("rank")) for r in public_overall_refresh]
    public_persist_ok=public_order_refresh==public_order

    tie_total=int(first_after.get("totalStrokes") or 3)+30; base=tie_total//3; levels={"forest":base,"desert":base,"snow":tie_total-2*base}
    pars={}
    for theme in ("forest","desert","snow"):
        rows=((lb_after.get("levelBest") or {}).get(theme) or [])
        pars[theme]=rows[0].get("par") if rows and isinstance(rows[0].get("par"),(int,float)) else 4
    injected_overall_rows=await _mutate_web_leaderboard_storage(page,"overall-tie",{"total":tie_total,"levels":levels,"pars":pars})
    injected_overall=bool(injected_overall_rows)
    tie_validation=True; tie_order=[]; tie_refresh_stable=True; totals_exact=True
    if injected_overall:
        await page.reload(wait_until="load"); await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
        overall_r=(await _state(page,"__leaderboard") or {}).get("overall") or []; order1=[(r.get("playerId"),r.get("totalStrokes"),r.get("achievedAt"),r.get("rank")) for r in overall_r]; tie_order=[r.get("playerId") for r in overall_r if r.get("totalStrokes")==tie_total]; totals_exact=all(r.get("totalStrokes")==sum((r.get("levelStrokes") or {}).values()) for r in overall_r if isinstance(r.get("levelStrokes"),dict))
        await page.reload(wait_until="load"); await _wait_state(page,"__game",lambda g:g.get("ready") is True,3)
        overall_rr=(await _state(page,"__leaderboard") or {}).get("overall") or []; order2=[(r.get("playerId"),r.get("totalStrokes"),r.get("achievedAt"),r.get("rank")) for r in overall_rr]
        tie_refresh_stable=order2==order1
        tie_validation=bool(_rows_sorted(overall_r,"totalStrokes") and set(tie_order)=={"overall-old","overall-a","overall-z"} and totals_exact and tie_refresh_stable)

    exact=all(isinstance(actual[t],(int,float)) for t in actual) and first.get("levelStrokes")==actual and first.get("totalStrokes")==sum(actual.values())
    worse27_strokes=(worse27 or {}).get("__observedStrokes")
    worse27_real=bool(isinstance(worse27_strokes,(int,float)) and isinstance(actual.get(worse27_theme),(int,float)) and worse27_strokes>actual[worse27_theme])
    inputs27_ready=bool(completions and worse27 and worse27_real)
    if not inputs27_ready:
        _blocked(ctx, 27,f"总榜需要三关真实完赛最佳，并在其中一关实际形成一次更差完赛作为覆盖测试；当前三关={actual}，额外完赛={bool(worse27)}，额外杆数={worse27_strokes}，确实更差={worse27_real}。目标输入未形成时不判总榜逻辑失败。",blocked_by=[32])
    else:
        conditions27={"worseReallyWorse":bool(worse27_real),"threeLevelSum":bool(exact),"worseDoesNotOverwrite":bool(before==after),"sorted":bool(public_sorted),"persisted":bool(public_persist_ok),"tieStableIfInjectable":bool(tie_validation)}
        failed27=[k for k,v in conditions27.items() if not v]
        ctx.check(27,not failed27,f"三关真实最佳={actual}，总榜首条={first}；更差 {worse27_theme} 完赛杆数={worse27_strokes}；条件={conditions27}，失败={failed27}。")



async def run_checks(page, ctx):
    """Run the rubric suite within an evaluator-side budget.

    run.py owns a larger per-sample process timeout. Broken or adversarial
    implementations can make many bounded UI/physics waits accumulate until that
    outer timeout kills the evaluator before it can emit any report. Keep this
    budget comfortably below the process timeout so completed rubric evidence is
    preserved and every not-yet-reached rubric receives an explicit diagnostic
    result instead of the entire repository being normalized to zeros.
    """
    try:
        sample_timeout = float(os.environ.get("WEB_UT_SAMPLE_TIMEOUT", "900"))
    except Exception:
        sample_timeout = 900.0
    try:
        vlm_timeout = float(os.environ.get("VLM_TIMEOUT_S", "120"))
    except Exception:
        vlm_timeout = 120.0
    # run_checks 之后 Harness 还必须 flush 已排队的 VLM，并关闭浏览器、序列化报告。
    # 旧版只预留 90s，小于默认 VLM_TIMEOUT=120s，会让外层 runner 先杀进程。
    reserve = max(150.0, min(240.0, vlm_timeout + 45.0))
    max_check_budget = max(60.0, sample_timeout - reserve)
    default_budget = min(700.0, max_check_budget)
    try:
        budget = float(os.environ.get("WEB_UT_CHECK_BUDGET", str(default_budget)))
    except Exception:
        budget = default_budget
    budget = max(60.0, min(max_check_budget, budget))

    # R38-R42 are cheap source/build facts. Record them before the gameplay
    # budget so a slow or broken product cannot turn unrelated stack facts into
    # false negatives. _run_checks_impl intentionally does not record them.
    _record_source_stack_checks(ctx)
    try:
        await asyncio.wait_for(_run_checks_impl(page, ctx), timeout=budget)
        return
    except asyncio.TimeoutError:
        completed = {
            int(getattr(row, "id"))
            for row in getattr(ctx, "results", [])
            if isinstance(getattr(row, "id", None), int)
        }
        queued = {
            int(row[0])
            for row in getattr(ctx, "_pending_vlm", [])
            if isinstance(row, tuple) and row and isinstance(row[0], int)
        }
        completed |= queued
        reason = (
            f"本轮测试已达到 {budget:.0f}s 的脚本总预算；"
            "此前已完成的检查结果予以保留；未执行到的检查点仅表示 evaluator 前置流程耗时异常，不能据此推断产品未实现。"
        )
        for rubric in RUBRIC:
            rid = int(rubric.get("id", 0) or 0)
            if not rid or rid in completed:
                continue
            if rubric.get("kind") == "vlm":
                _vlm_blocked(ctx, rid, reason, blocked_by=["evaluator-budget"])
            else:
                _blocked(ctx, rid, reason, blocked_by=["evaluator-budget"])
        return


if __name__ == "__main__":
    import web_ut_harness
    web_ut_harness.main(__import__("web_ut"))
