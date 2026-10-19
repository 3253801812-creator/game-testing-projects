"""Deterministic evaluator for the mobile Bubble Craps prompt."""
from __future__ import annotations

import json
import math
from pathlib import Path
from typing import Any

_mapping_path = Path(__file__).resolve().parent / "mapping.json"
_mapping = json.loads(_mapping_path.read_text(encoding="utf-8"))
RUBRIC = _mapping.get("rubrics", [])

FACE_NORMALS = {
    1: (0.0, 0.0, 1.0), 2: (0.0, 1.0, 0.0), 3: (1.0, 0.0, 0.0),
    4: (-1.0, 0.0, 0.0), 5: (0.0, -1.0, 0.0), 6: (0.0, 0.0, -1.0),
}
POINTS = (4, 5, 6, 8, 9, 10)


def _rotate(q: dict[str, float], v: tuple[float, float, float]) -> tuple[float, float, float]:
    x, y, z, w = (float(q[k]) for k in ("x", "y", "z", "w"))
    n = math.sqrt(x*x + y*y + z*z + w*w) or 1.0
    x, y, z, w = x/n, y/n, z/n, w/n
    vx, vy, vz = v
    ix, iy, iz, iw = w*vx + y*vz - z*vy, w*vy + z*vx - x*vz, w*vz + x*vy - y*vx, -x*vx - y*vy - z*vz
    return (
        ix*w + iw*-x + iy*-z - iz*-y,
        iy*w + iw*-y + iz*-x - ix*-z,
        iz*w + iw*-z + ix*-y - iy*-x,
    )


def _top_face(q: dict[str, float]) -> tuple[int, float]:
    scores = {face: _rotate(q, normal)[1] for face, normal in FACE_NORMALS.items()}
    face = max(scores, key=scores.get)
    return face, scores[face]


def _bet(state: dict[str, Any], bet_id: str | None) -> dict[str, Any] | None:
    return next((b for b in state.get("activeBets", []) if b.get("id") == bet_id), None) if bet_id else None


async def _reset(page, balance: int = 1000) -> bool:
    return bool(await page.evaluate("balance => window.__test.resetGame(balance)", balance))


async def _place(page, bet_type: str, number: int | None = None, amount: int = 5) -> str | None:
    return await page.evaluate("([t,n,a]) => window.__test.placeBet(t,n,a)", [bet_type, number, amount])


async def _roll(page, d1: int | None = None, d2: int | None = None, timeout: int = 8000) -> dict[str, Any]:
    before = await page.evaluate("() => window.__game.getState().rollId")
    started = await page.evaluate(
        """([d1,d2]) => {
          const queued = d1 == null ? true : window.__test.forceRoll(d1,d2);
          const started = queued ? window.__test.roll() : false;
          return {queued,started};
        }""", [d1, d2])
    if not started.get("queued") or not started.get("started"):
        return {**started, "result": None}
    await page.wait_for_function(
        "before => { const state=window.__game?.getState?.(); return state && state.rollId===before+1 && !state.locked && state.machineState==='resolved' && state.lastRoll?.rollId===before+1; }",
        arg=before,
        polling=50,
        timeout=timeout,
    )
    result = await page.evaluate("() => window.__game.getState().lastRoll")
    return {**started, "result": result}


def _place_profit(num: int, amt: int) -> int:
    """Standard Place bet profit (stake stays working)."""
    if num in (4, 10):
        return (amt * 9) // 5
    if num in (5, 9):
        return (amt * 7) // 5
    return (amt * 7) // 6


def _buy_profit(num: int, amt: int) -> int:
    """Buy bet profit = true odds − 5% vig (ceil)."""
    if num in (4, 10):
        gross = amt * 2
    elif num in (5, 9):
        gross = (amt * 3) // 2
    else:
        gross = (amt * 6) // 5
    vig = (amt * 5 + 99) // 100
    return max(0, gross - vig)


def _true_odds_profit(num: int, amt: int) -> int:
    if num in (4, 10):
        return amt * 2
    if num in (5, 9):
        return (amt * 3) // 2
    return (amt * 6) // 5


async def _enable_fast_raf(page) -> None:
    await page.evaluate("""() => {
      if (window.__fastRafInstalled) return;
      window.__fastRafInstalled = true;
      let virtualNow = performance.now();
      window.requestAnimationFrame = (callback) => window.setTimeout(() => { virtualNow += 1200; callback(virtualNow); }, 0);
      window.cancelAnimationFrame = (handle) => window.clearTimeout(handle);
    }""")


async def _totals(page, pairs: list[tuple[int, int]]) -> None:
    for a, b in pairs:
        result = await _roll(page, a, b)
        if not result.get("result"):
            raise RuntimeError(f"roll failed: {a}+{b}: {result}")


async def _install_controlled_rng(page, die1: int, die2: int) -> bool:
    return bool(await page.evaluate("""values => {
      if (typeof window.__restoreControlledRng === 'function') window.__restoreControlledRng();
      const repeated = Array.from({length: 128}, (_, index) => values[index % values.length]);
      const cryptoObject = globalThis.crypto;
      const cryptoDescriptor = cryptoObject ? Object.getOwnPropertyDescriptor(cryptoObject, 'getRandomValues') : null;
      const originalCrypto = cryptoObject && typeof cryptoObject.getRandomValues === 'function'
        ? cryptoObject.getRandomValues.bind(cryptoObject) : null;
      const mathDescriptor = Object.getOwnPropertyDescriptor(Math, 'random');
      const originalMath = Math.random.bind(Math);
      const cryptoQueue = repeated.map(value => value - 1);
      const mathQueue = repeated.map(value => (value - 0.5) / 6);
      let cryptoInstalled = false;
      let mathInstalled = false;
      if (cryptoObject && originalCrypto) {
        try {
          Object.defineProperty(cryptoObject, 'getRandomValues', {
            configurable: true,
            value(target) {
              if (cryptoQueue.length) {
                for (let index = 0; index < target.length; index += 1) {
                  target[index] = cryptoQueue.shift() ?? 0;
                }
                return target;
              }
              return originalCrypto(target);
            },
          });
          cryptoInstalled = true;
        } catch (_) {}
      }
      try {
        Object.defineProperty(Math, 'random', {
          configurable: true,
          value() { return mathQueue.length ? mathQueue.shift() : originalMath(); },
        });
        mathInstalled = true;
      } catch (_) {}
      window.__restoreControlledRng = () => {
        try {
          if (cryptoObject && cryptoInstalled) {
            if (cryptoDescriptor) Object.defineProperty(cryptoObject, 'getRandomValues', cryptoDescriptor);
            else delete cryptoObject.getRandomValues;
          }
        } catch (_) {}
        try {
          if (mathInstalled) {
            if (mathDescriptor) Object.defineProperty(Math, 'random', mathDescriptor);
            else Math.random = originalMath;
          }
        } catch (_) {}
        delete window.__restoreControlledRng;
      };
      return cryptoInstalled || mathInstalled;
    }""", [die1, die2]))


async def _restore_controlled_rng(page) -> None:
    await page.evaluate("() => { if (typeof window.__restoreControlledRng === 'function') window.__restoreControlledRng(); }")


async def _ui_roll_with_rng(page, die1: int, die2: int, timeout: int = 8000) -> dict[str, Any]:
    installed = await _install_controlled_rng(page, die1, die2)
    before = await page.evaluate("() => window.__game.getState().rollId")
    try:
        await page.locator('[data-testid="roll-btn"]').click()
        await page.wait_for_function(
            "before => { const state=window.__game?.getState?.(); return state && state.rollId===before+1 && !state.locked && state.machineState==='resolved'; }",
            arg=before,
            polling=50,
            timeout=timeout,
        )
        state = await page.evaluate("() => window.__game.getState()")
        return {"installed": installed, "state": state}
    finally:
        await _restore_controlled_rng(page)


async def _setup_seven_loss_bets_via_ui(page) -> dict[str, Any]:
    await _reset(page, 1000)
    clicked = await page.evaluate("""testids => {
      const results = {};
      for (const testid of testids) {
        const control = document.querySelector(`[data-testid="${testid}"]`);
        results[testid] = control instanceof HTMLButtonElement && !control.disabled;
        if (results[testid]) control.click();
      }
      return results;
    }""", ["chip-5", "place-6", "buy-8", "progressive-low", "progressive-high", "progressive-hitall"])
    const_state = await page.evaluate("() => window.__game.getState()")
    const_state["__uiClicks"] = clicked
    return const_state


def _normalized_rule_state(state: dict[str, Any]) -> dict[str, Any]:
    def normalize_entries(ledger: dict[str, Any]) -> list[tuple[Any, ...]]:
        return sorted(
            (
                entry.get("type"), entry.get("number"), entry.get("outcome"), entry.get("stake"),
                entry.get("odds"), entry.get("credit"), entry.get("profit"),
            )
            for entry in ledger.get("entries", [])
        )

    ledgers = [
        {
            "total": ledger.get("total"),
            "balanceBefore": ledger.get("balanceBefore"),
            "balanceAfter": ledger.get("balanceAfter"),
            "entries": normalize_entries(ledger),
        }
        for ledger in state.get("settlementLedger", [])
    ]
    active = sorted(
        (bet.get("type"), bet.get("number"), bet.get("amount"), bet.get("odds"), bet.get("status"))
        for bet in state.get("activeBets", [])
    )
    progress = {
        key: {
            "hits": tracker.get("hits", []),
            "active": tracker.get("activeBetId") is not None,
            "completed": tracker.get("completedCount", 0),
        }
        for key, tracker in (state.get("progressive") or {}).items()
    }
    last = state.get("lastRoll") or {}
    return {
        "balance": state.get("balance"),
        "tablePhase": state.get("tablePhase"),
        "point": state.get("point"),
        "last": (last.get("die1"), last.get("die2"), last.get("total")),
        "active": active,
        "progress": progress,
        "ledgers": ledgers,
    }


async def phase_foundation(page, ctx):
    # 1-4. Technology and production build evidence.
    root = Path(ctx.source_root) if ctx.source_root else None
    required_vite = ["package.json", "vite.config.ts", "tsconfig.json", "tsconfig.node.json", "index.html", "src/main.tsx"]
    tech = {"root": root.name if root else "", "deps": {}, "missing_vite": required_vite, "tailwind_files": False, "directives": False, "dist": False}
    react_ok = vite_ok = tailwind_ok = dist_ok = False
    if root and root.is_dir():
        try:
            pkg = json.loads((root / "package.json").read_text(encoding="utf-8"))
            deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
            tech["deps"] = {k: deps.get(k) for k in ("react", "react-dom", "typescript", "vite", "tailwindcss", "@vitejs/plugin-react")}
            tech["missing_vite"] = [p for p in required_vite if not (root / p).is_file()]
            react_ok = all(str(deps.get(k, "")).lstrip("^~").startswith("19") for k in ("react", "react-dom"))
            vite_ok = not tech["missing_vite"] and all(deps.get(k) for k in ("typescript", "vite", "@vitejs/plugin-react")) and "vite build" in pkg.get("scripts", {}).get("build", "")
            tech["tailwind_files"] = all((root / p).is_file() for p in ("tailwind.config.js", "postcss.config.js", "src/index.css"))
            if tech["tailwind_files"]:
                css = (root / "src/index.css").read_text(encoding="utf-8")
                tech["directives"] = all(f"@tailwind {x}" in css for x in ("base", "components", "utilities"))
            tailwind_ok = bool(deps.get("tailwindcss")) and tech["tailwind_files"] and tech["directives"]
            tech["dist"] = (root / "dist/index.html").is_file() and any((root / "dist/assets").glob("*.js"))
            dist_ok = tech["dist"]
        except Exception as exc:
            tech["error"] = repr(exc)
    ctx.check(1, react_ok, str(tech))
    ctx.check(2, vite_ok, str(tech))
    ctx.check(3, tailwind_ok, str(tech))
    ctx.check(4, dist_ok, str(tech))

    # 5-6. Exact live DOM contract.
    id_structural = ["game-root", "bubble-dome", "betting-board"]
    testid_structural = ["dice-arena", "pulsing-floor", "die-1", "die-2", "balance", "table-phase", "point-value", "last-roll"]
    controls = ["roll-btn", "chip-1", "chip-5", "chip-10", "chip-25", "chip-100", "pass-line", "come", "pass-odds", "clear-bets", "progressive-low", "progressive-high", "progressive-hitall", "place-4", "place-5", "place-6", "place-8", "place-9", "place-10", "buy-4", "buy-5", "buy-6", "buy-8", "buy-9", "buy-10"]
    dom = await page.evaluate("""([idStructural,testidStructural,controls]) => {
      const byId = Object.fromEntries(idStructural.map(x=>[x,!!document.getElementById(x)]));
      const byTestid = Object.fromEntries(testidStructural.map(x=>[x,!!document.querySelector(`[data-testid="${x}"]`)]));
      return {
        ids:byId,
        structural:byTestid,
        controls:Object.fromEntries(controls.map(x=>{const e=document.querySelector(`[data-testid="${x}"]`);return [x,{exists:!!e,tag:e?.tagName,disabled:!!e?.disabled}]}))
      };
    }""", [id_structural, testid_structural, controls])
    structural_ok = all(dom["ids"].values()) and all(dom["structural"].values())
    controls_ok = all(v.get("exists") and v.get("tag") == "BUTTON" for v in dom["controls"].values())
    ctx.check(5, structural_ok, str({"ids": dom["ids"], "structural": dom["structural"]}))
    ctx.check(6, controls_ok, str(dom["controls"]))

    # 7-11. Read-only state contract.
    hooks = await page.evaluate("""() => {
      const names=['__contract','__game','__dice','__bets','__progressives'];
      const present=Object.fromEntries(names.map(n=>[n,typeof window[n]?.getState==='function']));
      if(!Object.values(present).every(Boolean)) return {present,fields:false,fresh:false,aligned:false,max:null};
      const c1=window.__contract.getState(), c2=window.__contract.getState();
      const g1=window.__game.getState(), g2=window.__game.getState();
      const d1=window.__dice.getState(), d2=window.__dice.getState();
      const b1=window.__bets.getState(), b2=window.__bets.getState();
      const p1=window.__progressives.getState(), p2=window.__progressives.getState();
      const before=g2.balance;
      c1.version='mutated';
      g1.balance=-999; g1.activeBets?.push({id:'mutated'});
      if(d1.dice?.[0]) d1.dice[0].position.x=999;
      b1.balance=-999; b1.bets?.push({id:'mutated'});
      if(p1.low) p1.low.hits.push(99);
      const c3=window.__contract.getState(), g3=window.__game.getState(), d3=window.__dice.getState(), b3=window.__bets.getState(), p3=window.__progressives.getState();
      const fresh=c3.version!=='mutated' && g3.balance===before && !g3.activeBets.some(x=>x.id==='mutated')
        && d3.dice?.[0]?.position?.x!==999 && b3.balance===before && !b3.bets.some(x=>x.id==='mutated')
        && !p3.low.hits.includes(99) && c1!==c2 && g1!==g2 && d1!==d2 && b1!==b2 && p1!==p2;
      const contractFields=['version','gameType','renderer','stateSource','hooksReady','hookNames','buildId'].every(k=>k in c2);
      const fields=contractFields
        && ['ready','variant','machineState','tablePhase','point','balance','selectedChip','locked','canRoll','rollId','lastRoll','history','activeBets','progressive','settlementLedger','dome'].every(k=>k in g2)
        && ['rolling','machineState','floorPulse','floorOffset','domeRadius','dice'].every(k=>k in d2)
        && ['selectedChip','balance','locked','bets','maxOddsMultiplier'].every(k=>k in b2)
        && ['low','high','hitall'].every(k=>k in p2);
      const shown=Number((document.querySelector('[data-testid="balance"]')?.textContent||'').replace(/[^0-9-]/g,''));
      return {present,fields,fresh,aligned:shown===g3.balance && b3.balance===g3.balance,shown,game:g3.balance,bets:b3.balance,max:b3.maxOddsMultiplier};
    }""")
    ctx.check(7, all(hooks.get("present", {}).values()), str(hooks))
    ctx.check(8, bool(hooks.get("fields")), str(hooks))
    ctx.check(9, bool(hooks.get("fresh")), str(hooks))
    ctx.check(10, bool(hooks.get("aligned")), str(hooks))
    ctx.check(11, hooks.get("max") == 3, str(hooks))

    # 12-13. Visual requirements at phone size.
    await page.set_viewport_size({"width": 390, "height": 844})
    await _reset(page)
    await _roll(page, 4, 4)
    await page.locator('[data-testid="bubble-dome"]').scroll_into_view_if_needed()
    await ctx.vlm(12, "这张手机竖屏截图是否呈现一台完整、经典、可操作的商业 Bubble Craps 机台，而不是普通表单或通用仪表盘？应能辨认余额、掷骰区、ROLL、筹码和下注台。")
    await ctx.vlm(13, "截图是否清楚显示透明泡泡穹顶、从上方向下观察的两颗立体骰子，以及穹顶底部具有机械弹跳或脉冲感的平台？骰子朝上点数应清晰。")
    await page.set_viewport_size({"width": 1280, "height": 800})

    # 14-17. Production roll lifecycle, motion, floor pulse and duplicate lock.
    await _reset(page)
    await page.evaluate("() => window.__test.forceRoll(3,4)")
    started = await page.evaluate("() => window.__test.roll()")
    duplicate = await page.evaluate("() => window.__test.roll()")
    await page.wait_for_timeout(120)
    moving = await ctx.get_state("__dice")
    await page.wait_for_timeout(420)
    mid = await ctx.get_state("__dice")
    await page.wait_for_function("() => { const state=window.__game?.getState?.(); return state && !state.locked && state.machineState==='resolved'; }", polling=50, timeout=10000)
    result = await page.evaluate("() => window.__game.getState().lastRoll")
    events = await page.evaluate("() => window.__test.getEventLog()")
    seq = [e.get("value") for e in events if e.get("type") == "machine_state"]
    speed = lambda die, key: math.sqrt(sum(float(die.get(key, {}).get(k, 0))**2 for k in ("x", "y", "z")))
    sequence_ok = all(x in seq for x in ("rolling", "settling", "resolved")) and seq.index("rolling") < seq.index("settling") < seq.index("resolved")
    linear_motion = any(speed(d, "linearVelocity") > 0.01 for d in moving.get("dice", []))
    angular_motion = any(speed(d, "angularVelocity") > 0.01 for d in moving.get("dice", []))
    pulse_ok = max(abs(float(moving.get("floorPulse", 0))), abs(float(mid.get("floorPulse", 0))), abs(float(moving.get("floorOffset", 0))), abs(float(mid.get("floorOffset", 0)))) > 0.001
    ctx.check(14, started is True and bool(result) and sequence_ok, f"started={started}, result={result}, seq={seq}")
    ctx.check(15, linear_motion and angular_motion, f"linear={linear_motion}, angular={angular_motion}, dice={moving.get('dice')}")
    ctx.check(16, pulse_ok, f"moving={moving.get('floorPulse'),moving.get('floorOffset')}, mid={mid.get('floorPulse'),mid.get('floorOffset')}")
    ctx.check(17, duplicate is False and result.get("rollId") == 1, f"duplicate={duplicate}, result={result}")

    await _enable_fast_raf(page)

    # 18. Unforced random results.
    await _reset(page)
    pairs = []
    for _ in range(8):
        r = await _roll(page)
        rr = r.get("result") or {}
        pairs.append((rr.get("die1"), rr.get("die2")))
    random_ok = all(isinstance(a, int) and isinstance(b, int) and 1 <= a <= 6 and 1 <= b <= 6 for a, b in pairs) and len(set(pairs)) >= 2
    ctx.check(18, random_ok, f"pairs={pairs}")

    # 19-21. Settled physics, face truth across all six faces, and geometry.
    face_cases = [(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)]
    settled_ok, face_ok, geometry_ok = True, True, True
    face_evidence = []
    geometry_evidence = []
    for expected_pair in face_cases:
        await _reset(page)
        await _roll(page, *expected_pair)
        ds = await ctx.get_state("__dice")
        gs = await ctx.get_state("__game")
        geom = await page.evaluate("""() => {
          const arena=document.querySelector('[data-testid="dice-arena"]')?.getBoundingClientRect();
          const a=document.querySelector('[data-testid="die-1"]')?.getBoundingClientRect();
          const b=document.querySelector('[data-testid="die-2"]')?.getBoundingClientRect();
          if(!arena||!a||!b) return null;
          const iw=Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left));
          const ih=Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
          const overlap=iw*ih/Math.max(1,Math.min(a.width*a.height,b.width*b.height));
          const inside=[a,b].every(r=>r.left>=arena.left-5&&r.right<=arena.right+5&&r.top>=arena.top-5&&r.bottom<=arena.bottom+5);
          return {overlap,inside,values:[...document.querySelectorAll('[data-testid="die-1"],[data-testid="die-2"]')].map(x=>({value:Number(x.dataset.value),top:Number(x.dataset.topFace),settled:x.dataset.settled}))};
        }""")
        observed_faces = []
        for index, die in enumerate(ds.get("dice", [])):
            face, up_score = _top_face(die.get("quaternion", {}))
            expected = expected_pair[index]
            observed_faces.append((face, up_score, die.get("value"), die.get("topFace"), expected))
            settled_ok = settled_ok and die.get("isSettled") is True and die.get("stableSamples", 0) >= 2 and speed(die, "linearVelocity") < 1e-6 and speed(die, "angularVelocity") < 1e-6
            face_ok = face_ok and up_score > 0.99 and face == die.get("value") == die.get("topFace") == expected
        last = gs.get("lastRoll") or {}
        state_match = (last.get("die1"), last.get("die2")) == expected_pair
        dom_values = [v.get("value") for v in (geom or {}).get("values", [])]
        dom_match = dom_values == list(expected_pair) and all(v.get("value") == v.get("top") and v.get("settled") == "true" for v in (geom or {}).get("values", []))
        face_ok = face_ok and state_match and dom_match
        one_geometry_ok = bool(geom) and geom.get("inside") and geom.get("overlap", 1) < 0.15
        geometry_ok = geometry_ok and one_geometry_ok
        face_evidence.append({"expected": expected_pair, "faces": observed_faces, "last": last, "dom": (geom or {}).get("values")})
        geometry_evidence.append({"expected": expected_pair, "geometry": geom})
    ctx.check(19, settled_ok, f"cases={face_evidence}")
    ctx.check(20, face_ok, f"cases={face_evidence}")
    ctx.check(21, geometry_ok, f"cases={geometry_evidence}")

    # 22-23. Phone layout and real touch interaction.
    await page.set_viewport_size({"width": 390, "height": 844})
    await _reset(page)
    mobile = await page.evaluate("""() => {const b=document.querySelector('[data-testid="roll-btn"]');const r=b?.getBoundingClientRect();return {tag:b?.tagName,width:r?.width||0,height:r?.height||0,scroll:document.documentElement.scrollWidth,inner:innerWidth,before:window.__game.getState().rollId};}""")
    ctx.check(22, mobile.get("scroll", 9999) <= mobile.get("inner", 0) + 2, str(mobile))
    await page.locator('[data-testid="roll-btn"]').click()
    await page.wait_for_function("before => { const state=window.__game?.getState?.(); return state && state.rollId===before+1 && !state.locked && state.machineState==='resolved'; }", arg=mobile.get("before", 0), polling=50, timeout=10000)
    touch_state = await ctx.get_state("__game")
    ctx.check(23, mobile.get("tag") == "BUTTON" and mobile.get("width", 0) >= 44 and mobile.get("height", 0) >= 44 and touch_state.get("rollId") == mobile.get("before", 0) + 1, f"mobile={mobile}, after={touch_state.get('rollId')}")
    await page.set_viewport_size({"width": 1280, "height": 800})



async def phase_betting_rules(page, ctx):
    await _enable_fast_raf(page)

    # 24-26. Chip selection, debit, insufficient balance.
    await _reset(page, 1000)
    selections = [await page.evaluate("v => window.__test.selectChip(v)", v) for v in (1, 5, 10, 25, 100)]
    bet_id = await _place(page, "place", 4, 25)
    debit = await ctx.get_state("__game")
    await _reset(page, 10)
    rejected = await _place(page, "buy", 4, 25)
    low_balance = await ctx.get_state("__game")
    ctx.check(24, all(selections), f"selections={selections}")
    ctx.check(25, bool(bet_id) and debit.get("balance") == 975, f"betId={bet_id}, balance={debit.get('balance')}")
    ctx.check(26, rejected is None and low_balance.get("balance") == 10 and not low_balance.get("activeBets"), f"rejected={rejected}, state={low_balance}")

    # 27-28. Place numbers and working behavior.
    await _reset(page, 5000)
    place_ids = {n: await _place(page, "place", n, 12) for n in POINTS}
    after_place = await ctx.get_state("__game")
    await _roll(page, 3, 3); hit_place = await ctx.get_state("__game")
    await _roll(page, 1, 4); keep_place = await ctx.get_state("__game")
    await _roll(page, 3, 4); seven_place = await ctx.get_state("__game")
    place_create_ok = all(place_ids.values()) and len(set(place_ids.values())) == 6 and all(_bet(after_place, bid) for bid in place_ids.values())
    place_work_ok = all(_bet(hit_place, bid) for bid in place_ids.values()) and all(_bet(keep_place, bid) for bid in place_ids.values()) and all(_bet(seven_place, bid) is None for bid in place_ids.values())
    ctx.check(27, place_create_ok, f"ids={place_ids}, active={after_place.get('activeBets')}")

    # 28-bis. Verify Place payout correctness (7:6 for 6/8, 7:5 for 5/9, 9:5 for 4/10).
    place_payout_ok = True
    place_payout_evidence = []
    for num, stake, pair in ((6, 12, (3, 3)), (8, 12, (4, 4)), (4, 5, (2, 2)), (5, 10, (2, 3))):
        await _reset(page, 2000)
        await _place(page, "place", num, stake)
        bal_before = (await ctx.get_state("__game")).get("balance", 0)
        await _roll(page, *pair)
        bal_after = (await ctx.get_state("__game")).get("balance", 0)
        expected = _place_profit(num, stake)
        one_ok = bal_after == bal_before + expected
        place_payout_ok = place_payout_ok and one_ok
        place_payout_evidence.append({"num": num, "stake": stake, "pair": pair, "expectedProfit": expected, "before": bal_before, "after": bal_after, "ok": one_ok})
    # Fold payout verification into R28 (Place working behavior implies correct payout on hit).
    # Only update if the basic structure already passed.
    if place_work_ok and not place_payout_ok:
        place_work_ok = False
    ctx.check(28, place_work_ok, f"afterHit={len(hit_place.get('activeBets',[]))}, afterMiss={len(keep_place.get('activeBets',[]))}, after7={len(seven_place.get('activeBets',[]))}; placePayout={place_payout_evidence}")

    # 29-30. Buy numbers and working behavior.
    await _reset(page, 5000)
    buy_ids = {n: await _place(page, "buy", n, 20) for n in POINTS}
    after_buy = await ctx.get_state("__game")
    await _roll(page, 2, 2); hit_buy = await ctx.get_state("__game")
    await _roll(page, 2, 3); keep_buy = await ctx.get_state("__game")
    await _roll(page, 3, 4); seven_buy = await ctx.get_state("__game")
    buy_create_ok = all(buy_ids.values()) and len(set(buy_ids.values())) == 6 and all(_bet(after_buy, bid) for bid in buy_ids.values())
    buy_work_ok = all(_bet(hit_buy, bid) for bid in buy_ids.values()) and all(_bet(keep_buy, bid) for bid in buy_ids.values()) and all(_bet(seven_buy, bid) is None for bid in buy_ids.values())
    # Verify Buy payout correctness: true odds minus 5% vig.
    buy_payout_ok = True
    buy_payout_evidence = []
    for num, stake, pair in ((4, 20, (2, 2)), (10, 20, (4, 6)), (6, 20, (3, 3)), (8, 20, (4, 4))):
        await _reset(page, 3000)
        await _place(page, "buy", num, stake)
        bal_before = (await ctx.get_state("__game")).get("balance", 0)
        await _roll(page, *pair)
        bal_after = (await ctx.get_state("__game")).get("balance", 0)
        expected = _buy_profit(num, stake)
        one_ok = bal_after == bal_before + expected
        buy_payout_ok = buy_payout_ok and one_ok
        buy_payout_evidence.append({"num": num, "stake": stake, "pair": pair, "expectedProfit": expected, "before": bal_before, "after": bal_after, "ok": one_ok})
    if buy_work_ok and not buy_payout_ok:
        buy_work_ok = False
    ctx.check(29, buy_create_ok, f"ids={buy_ids}, active={after_buy.get('activeBets')}")
    ctx.check(30, buy_work_ok, f"afterHit={len(hit_buy.get('activeBets',[]))}, afterMiss={len(keep_buy.get('activeBets',[]))}, after7={len(seven_buy.get('activeBets',[]))}; buyPayout={buy_payout_evidence}")

    # 31-35. Pass Line flow, each state transition scored separately.
    natural_evidence, natural_ok = [], True
    for pair in ((3,4), (5,6)):
        await _reset(page); pid = await _place(page, "pass", None, 10); await _roll(page, *pair); st = await ctx.get_state("__game")
        # Natural pays 1:1 → balance = 1000 − 10 + 20 = 1010
        one_ok = st.get("balance") == 1010 and _bet(st, pid) is None and st.get("tablePhase") == "come_out"
        natural_ok = natural_ok and one_ok; natural_evidence.append((pair, st.get("balance"), st.get("tablePhase")))
    ctx.check(31, natural_ok, str(natural_evidence))

    craps_evidence, craps_ok = [], True
    for pair in ((1,1), (1,2), (6,6)):
        await _reset(page); pid = await _place(page, "pass", None, 10); await _roll(page, *pair); st = await ctx.get_state("__game")
        one_ok = st.get("balance") == 990 and _bet(st, pid) is None and st.get("tablePhase") == "come_out" and st.get("point") is None
        craps_ok = craps_ok and one_ok; craps_evidence.append((pair, st.get("balance"), st.get("tablePhase")))
    ctx.check(32, craps_ok, str(craps_evidence))

    await _reset(page); pid = await _place(page, "pass", None, 10); await _roll(page, 2, 2); point_state = await ctx.get_state("__game")
    point_established = point_state.get("point") == 4 and point_state.get("tablePhase") == "point" and _bet(point_state, pid) is not None
    ctx.check(33, point_established, f"state={point_state}")
    await _roll(page, 2, 2); made_state = await ctx.get_state("__game")
    # Point made pays 1:1 on flat → balance = 1000 − 10 + 20 = 1010
    point_made = made_state.get("tablePhase") == "come_out" and made_state.get("point") is None and _bet(made_state, pid) is None and made_state.get("balance") == 1010
    ctx.check(34, point_made, f"state={made_state}")

    await _reset(page); pid2 = await _place(page, "pass", None, 10); await _roll(page, 2, 2); await _roll(page, 3, 4); out_state = await ctx.get_state("__game")
    seven_out = out_state.get("tablePhase") == "come_out" and out_state.get("point") is None and _bet(out_state, pid2) is None and out_state.get("balance") == 990
    ctx.check(35, seven_out, f"state={out_state}")

    # 36-38. Come flow.
    # 36-bis. Come must be rejected during come_out phase.
    await _reset(page)
    come_in_comeout = await _place(page, "come", None, 10)
    comeout_state = await ctx.get_state("__game")
    come_phase_ok = come_in_comeout is None and not comeout_state.get("activeBets")

    await _reset(page); await _roll(page, 3, 3)
    c1 = await _place(page, "come", None, 10); await _roll(page, 2, 3); established = await ctx.get_state("__game")
    c1_state = _bet(established, c1)
    come_move_ok = bool(c1_state and c1_state.get("status") == "established" and c1_state.get("number") == 5)
    ctx.check(36, come_phase_ok and come_move_ok, f"phaseOk={come_phase_ok}(comeoutRejected={come_in_comeout}), move={c1_state}")
    await _roll(page, 1, 4); won = await ctx.get_state("__game")
    # Come natural/point pays 1:1 on flat → balance = 1000 − 10 + 20 = 1010
    come_established_ok = _bet(won, c1) is None and won.get("balance") == 1010
    # 37-bis. Come natural payout: pending Come + 7 → pays 1:1.
    await _reset(page); await _roll(page, 3, 3)  # point=6
    c_nat = await _place(page, "come", None, 10)
    await _roll(page, 5, 2)  # 7 = Come natural
    nat_state = await ctx.get_state("__game")
    come_natural_ok = _bet(nat_state, c_nat) is None and nat_state.get("balance") == 1010
    ctx.check(37, come_established_ok and come_natural_ok, f"established={come_established_ok}(bal={won.get('balance')}), natural={come_natural_ok}(bal={nat_state.get('balance')})")

    await _reset(page); await _roll(page, 3, 3); c2 = await _place(page, "come", None, 10); await _roll(page, 2, 2); before7 = await ctx.get_state("__game"); await _roll(page, 3, 4); lost = await ctx.get_state("__game")
    c2_before = _bet(before7, c2)
    ctx.check(38, bool(c2_before and c2_before.get("number") == 4 and _bet(lost, c2) is None and lost.get("balance") <= 990), f"before={c2_before}, afterBalance={lost.get('balance')}")

    # 39-40. Separate Pass and Come odds eligibility/caps.
    await _reset(page); pass_id = await _place(page, "pass", None, 10)
    pass_before = await page.evaluate("id => window.__test.addOdds(id,5)", pass_id)
    await _roll(page, 2, 2)
    pass_30 = await page.evaluate("id => window.__test.addOdds(id,30)", pass_id)
    pass_over = await page.evaluate("id => window.__test.addOdds(id,1)", pass_id)
    pass_bet = _bet(await ctx.get_state("__game"), pass_id)
    ctx.check(39, pass_before is False and pass_30 is True and pass_over is False and pass_bet and pass_bet.get("odds") == 30, f"before={pass_before}, add30={pass_30}, over={pass_over}, bet={pass_bet}")

    await _reset(page); await _roll(page, 3, 3); come_id = await _place(page, "come", None, 10)
    come_pending = await page.evaluate("id => window.__test.addOdds(id,5)", come_id)
    await _roll(page, 2, 3)
    come_30 = await page.evaluate("id => window.__test.addOdds(id,30)", come_id)
    come_over = await page.evaluate("id => window.__test.addOdds(id,1)", come_id)
    come_bet = _bet(await ctx.get_state("__game"), come_id)
    ctx.check(40, come_pending is False and come_30 is True and come_over is False and come_bet and come_bet.get("odds") == 30, f"pending={come_pending}, add30={come_30}, over={come_over}, bet={come_bet}")

    # 41-46. Progressive uniqueness and completion are independently scored.
    await _reset(page, 5000)
    low_id = await _place(page, "progressive_low", None, 10)
    high_id = await _place(page, "progressive_high", None, 10)
    all_id = await _place(page, "progressive_hitall", None, 10)
    await _totals(page, [(1,1), (1,1), (1,2), (2,2)])
    low_partial = await ctx.get_state("__game")
    low_tracker_partial = low_partial.get("progressive", {}).get("low", {})
    low_unique = low_tracker_partial.get("targets") == [2,3,4,5,6] and low_tracker_partial.get("hits") == [2,3,4]
    ctx.check(41, low_unique, f"low={low_tracker_partial}")

    await _totals(page, [(2,3), (3,3)])
    low_done = await ctx.get_state("__game")
    low_tracker_done = low_done.get("progressive", {}).get("low", {})
    low_complete = low_tracker_done.get("completedCount") == 1 and low_tracker_done.get("hits") == [] and low_tracker_done.get("activeBetId") is None and _bet(low_done, low_id) is None
    ctx.check(42, low_complete, f"low={low_tracker_done}")

    await _totals(page, [(4,4), (4,4), (4,5), (5,5), (5,6)])
    high_partial = await ctx.get_state("__game")
    high_tracker_partial = high_partial.get("progressive", {}).get("high", {})
    all_tracker_partial = high_partial.get("progressive", {}).get("hitall", {})
    high_unique = high_tracker_partial.get("targets") == [8,9,10,11,12] and high_tracker_partial.get("hits") == [8,9,10,11]
    hitall_unique = all_tracker_partial.get("targets") == [2,3,4,5,6,8,9,10,11,12] and 7 not in all_tracker_partial.get("targets", []) and all_tracker_partial.get("hits") == [2,3,4,5,6,8,9,10,11]
    await _roll(page, 6, 6)
    progress_done = await ctx.get_state("__game")
    high_done = progress_done.get("progressive", {}).get("high", {})
    hitall_done = progress_done.get("progressive", {}).get("hitall", {})
    high_complete = high_done.get("completedCount") == 1 and high_done.get("hits") == [] and high_done.get("activeBetId") is None and _bet(progress_done, high_id) is None
    hitall_complete = hitall_done.get("completedCount") == 1 and hitall_done.get("hits") == [] and hitall_done.get("activeBetId") is None and _bet(progress_done, all_id) is None
    ctx.check(43, high_unique, f"high={high_tracker_partial}")
    ctx.check(44, high_complete, f"high={high_done}")
    ctx.check(45, hitall_unique, f"hitall={all_tracker_partial}")
    ctx.check(46, hitall_complete, f"hitall={hitall_done}")



async def phase_settlement_and_dom(page, ctx):
    # 47-48. Seven clears bets and progressive lamps as separate obligations.
    await _reset(page, 5000)
    pass_id = await _place(page, "pass", None, 10); await _roll(page, 2, 2); await page.evaluate("id => window.__test.addOdds(id,30)", pass_id)
    come_id = await _place(page, "come", None, 10); await _roll(page, 2, 3); await page.evaluate("id => window.__test.addOdds(id,30)", come_id)
    p_id = await _place(page, "place", 6, 12); b_id = await _place(page, "buy", 8, 20)
    prog_ids = [await _place(page, "progressive_low", None, 5), await _place(page, "progressive_high", None, 5), await _place(page, "progressive_hitall", None, 5)]
    await _roll(page, 1, 1); before_seven = await ctx.get_state("__game"); await _roll(page, 3, 4); after_seven = await ctx.get_state("__game")
    trackers = after_seven.get("progressive", {})
    all_ids = [pass_id, come_id, p_id, b_id, *prog_ids]
    all_bets_cleared = bool(before_seven.get("activeBets")) and all(_bet(after_seven, bid) is None for bid in all_ids) and after_seven.get("tablePhase") == "come_out"
    all_progress_cleared = all(trackers.get(k, {}).get("hits") == [] and trackers.get(k, {}).get("activeBetId") is None for k in ("low", "high", "hitall"))
    # 47-bis. Clear-bets button must refund odds (not just flat stake).
    await _reset(page, 2000)
    pid_refund = await _place(page, "pass", None, 10)
    await _roll(page, 2, 2)
    await page.evaluate("id => window.__test.addOdds(id,30)", pid_refund)
    await page.locator('[data-testid="clear-bets"]').click()
    clear_refund_state = await ctx.get_state("__game")
    clear_odds_refund_ok = clear_refund_state.get("balance") == 2000 and not clear_refund_state.get("activeBets")

    ctx.check(47, all_bets_cleared and clear_odds_refund_ok, f"ids={all_ids}, after={after_seven.get('activeBets')}, clearRefund={clear_odds_refund_ok}(${clear_refund_state.get('balance')})")
    ctx.check(48, all_progress_cleared, f"progress={trackers}")

    # 49-51. History, ledger, and visible DOM alignment.
    await _reset(page); pid = await _place(page, "pass", None, 10); await _roll(page, 5, 6)
    final = await ctx.get_state("__game")
    live = await page.evaluate("""() => ({balance:Number((document.querySelector('[data-testid="balance"]')?.textContent||'').replace(/[^0-9-]/g,'')),phase:document.querySelector('[data-testid="table-phase"]')?.textContent?.trim(),last:document.querySelector('[data-testid="last-roll"]')?.textContent?.trim(),chips:[...document.querySelectorAll('[data-testid^="bet-chip-"]')].length})""")
    ledger = final.get("settlementLedger", [])
    last = final.get("lastRoll") or {}
    history_ok = len(final.get("history", [])) == 1 and final.get("history", [])[-1] == last and last.get("total") == 11 and final.get("rollId") == 1
    ledger_ok = len(ledger) == 1 and ledger[-1].get("rollId") == 1 and ledger[-1].get("total") == 11 and any(e.get("betId") == pid for e in ledger[-1].get("entries", [])) and ledger[-1].get("balanceAfter") == final.get("balance")
    dom_ok = live.get("balance") == final.get("balance") and "COME OUT" in (live.get("phase") or "").upper() and "11" in (live.get("last") or "") and live.get("chips") == 0
    ctx.check(49, history_ok, f"history={final.get('history')}, last={last}")
    ctx.check(50, ledger_ok, f"ledger={ledger[-1] if ledger else None}, balance={final.get('balance')}")
    ctx.check(51, dom_ok, f"live={live}, stateBalance={final.get('balance')}")

    # 52. Visual realism of the active roll, captured during production motion.
    await page.set_viewport_size({"width": 390, "height": 844})
    await _reset(page)
    await page.evaluate("() => window.__test.forceRoll(2,5)")
    await page.evaluate("() => window.__test.roll()")
    await page.wait_for_timeout(80)
    await ctx.vlm(52, "这张滚动瞬间的手机截图是否显示两颗真正立体的骰子在透明泡泡穹顶内以不同姿态翻滚、弹跳并具有可信的空间层次，而不是仅替换平面点数、重叠穿模或静止图标？")
    await page.wait_for_function("() => { const state=window.__game?.getState?.(); return state && !state.locked && state.machineState==='resolved'; }", polling=50, timeout=10000)
    await page.set_viewport_size({"width": 1280, "height": 800})
    await _enable_fast_raf(page)

    # 53. Progressive lamps exist for every target and mirror live hit state.
    await _reset(page, 1000)
    await _place(page, "progressive_low", None, 5)
    await _place(page, "progressive_high", None, 5)
    await _place(page, "progressive_hitall", None, 5)
    await _roll(page, 1, 1)
    lamp_state = await ctx.get_state("__progressives")
    lamp_dom = await page.evaluate("""tracks => {
      const out={};
      for(const [key,state] of Object.entries(tracks)){
        out[key]={};
        for(const n of state.targets){
          const e=document.querySelector(`[data-testid="progress-light-${key}-${n}"]`);
          out[key][n]={exists:!!e,hit:e?.dataset.hit};
        }
      }
      return out;
    }""", lamp_state)
    lamps_ok = True
    for key, tracker in lamp_state.items():
        hits = set(tracker.get("hits", []))
        for n in tracker.get("targets", []):
            observed = lamp_dom.get(key, {}).get(str(n), lamp_dom.get(key, {}).get(n, {}))
            lamps_ok = lamps_ok and observed.get("exists") and observed.get("hit") == ("true" if n in hits else "false")
    ctx.check(53, lamps_ok, f"state={lamp_state}, dom={lamp_dom}")

    # 54. Dynamic active bet chip contract.
    await _reset(page, 1000)
    visible_bet_id = await _place(page, "place", 6, 25)
    visible_bet = _bet(await ctx.get_state("__game"), visible_bet_id)
    bet_dom = await page.evaluate("id => {const e=document.querySelector(`[data-testid=\"bet-chip-${id}\"]`);return e?{type:e.dataset.type,number:e.dataset.number,amount:e.dataset.amount,odds:e.dataset.odds,visible:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}:null}", visible_bet_id)
    bet_chip_ok = bool(visible_bet and bet_dom and bet_dom.get("visible") and bet_dom.get("type") == "place" and float(bet_dom.get("number")) == 6 and float(bet_dom.get("amount")) == 25 and float(bet_dom.get("odds")) == 0)
    ctx.check(54, bet_chip_ok, f"state={visible_bet}, dom={bet_dom}")

    # 55. Dynamic established Come odds control and odds synchronization.
    await _reset(page, 1000)
    await _roll(page, 3, 3)
    dynamic_come_id = await _place(page, "come", None, 10)
    await _roll(page, 2, 3)
    odds_control_before = await page.evaluate("id => {const e=document.querySelector(`[data-testid=\"come-odds-${id}\"]`);return e?{tag:e.tagName,disabled:!!e.disabled}:null}", dynamic_come_id)
    odds_added = await page.evaluate("id => window.__test.addOdds(id,30)", dynamic_come_id)
    dynamic_come_bet = _bet(await ctx.get_state("__game"), dynamic_come_id)
    odds_dom = await page.evaluate("id => {const b=document.querySelector(`[data-testid=\"bet-chip-${id}\"]`);const o=document.querySelector(`[data-testid=\"come-odds-${id}\"]`);return {betOdds:b?.dataset.odds,oddsTag:o?.tagName,oddsDisabled:!!o?.disabled}}", dynamic_come_id)
    come_odds_dom_ok = bool(odds_control_before and odds_control_before.get("tag") == "BUTTON" and not odds_control_before.get("disabled") and odds_added is True and dynamic_come_bet and dynamic_come_bet.get("odds") == 30 and float(odds_dom.get("betOdds")) == 30 and odds_dom.get("oddsTag") == "BUTTON")
    ctx.check(55, come_odds_dom_ok, f"before={odds_control_before}, added={odds_added}, state={dynamic_come_bet}, dom={odds_dom}")

    # 56. Die DOM position/value/settled attributes mirror the dice snapshot.
    await _reset(page)
    await _roll(page, 4, 2)
    dice_state = await ctx.get_state("__dice")
    die_dom = await page.evaluate("""() => [...document.querySelectorAll('[data-testid="die-1"],[data-testid="die-2"]')].map(e=>({id:e.dataset.testid,value:Number(e.dataset.value),topFace:Number(e.dataset.topFace),x:Number(e.dataset.x),y:Number(e.dataset.y),z:Number(e.dataset.z),settled:e.dataset.settled}))""")
    dice_dom_ok = len(dice_state.get("dice", [])) == 2 and len(die_dom) == 2
    for die, observed in zip(dice_state.get("dice", []), die_dom):
        pos = die.get("position", {})
        dice_dom_ok = dice_dom_ok and observed.get("value") == die.get("value") and observed.get("topFace") == die.get("topFace") and observed.get("settled") == ("true" if die.get("isSettled") else "false") and all(abs(float(observed.get(axis, 999)) - float(pos.get(axis, -999))) < 0.01 for axis in ("x", "y", "z"))
    ctx.check(56, dice_dom_ok, f"state={dice_state.get('dice')}, dom={die_dom}")



async def phase_anticheat(page, ctx):
    await _enable_fast_raf(page)

    # 57. Exercise several user-reachable seven combinations through the real
    # button and production RNG path. Pair diversity prevents a sample from
    # special-casing one known checkpoint while leaving normal play defective.
    seven_evidence = []
    seven_cases_ok = True
    expected_types = {"place", "buy", "progressive_low", "progressive_high", "progressive_hitall"}
    for pair in ((1, 6), (2, 5), (3, 4)):
        ui_before = await _setup_seven_loss_bets_via_ui(page)
        ui_roll = await _ui_roll_with_rng(page, *pair)
        ui_after = ui_roll.get("state") or {}
        ui_ledger = (ui_after.get("settlementLedger") or [{}])[-1]
        observed_losses = {entry.get("type") for entry in ui_ledger.get("entries", []) if entry.get("outcome") == "lose"}
        progress_after = ui_after.get("progressive", {})
        one_ok = (
            ui_roll.get("installed") is True
            and len(ui_before.get("activeBets", [])) == 5
            and ui_before.get("balance") == 975
            and (ui_after.get("lastRoll") or {}).get("total") == 7
            and ui_after.get("balance") == ui_before.get("balance")
            and not ui_after.get("activeBets")
            and expected_types.issubset(observed_losses)
            and ui_ledger.get("balanceBefore") == ui_before.get("balance")
            and ui_ledger.get("balanceAfter") == ui_after.get("balance")
            and all(
                progress_after.get(key, {}).get("hits") == []
                and progress_after.get(key, {}).get("activeBetId") is None
                for key in ("low", "high", "hitall")
            )
        )
        seven_cases_ok = seven_cases_ok and one_ok
        seven_evidence.append({
            "pair": pair,
            "ok": one_ok,
            "beforeBalance": ui_before.get("balance"),
            "afterBalance": ui_after.get("balance"),
            "total": (ui_after.get("lastRoll") or {}).get("total"),
            "lossTypes": sorted(str(value) for value in observed_losses),
        })
    # 57-bis. Verify winning payouts via real ROLL path match expected amounts.
    # This catches path-dependent cheats that alter payouts on non-forced rolls.
    win_evidence = []
    win_cases_ok = True
    for num, stake, pair in ((6, 12, (3, 3)), (4, 5, (1, 3)), (8, 12, (4, 4))):
        await _reset(page, 2000)
        await _place(page, "place", num, stake)
        bal_before = (await ctx.get_state("__game")).get("balance", 0)
        ui_roll = await _ui_roll_with_rng(page, *pair)
        ui_after = ui_roll.get("state") or {}
        actual = ui_after.get("balance", 0)
        expected = bal_before + _place_profit(num, stake)
        one_ok = ui_roll.get("installed") is True and actual == expected
        win_cases_ok = win_cases_ok and one_ok
        win_evidence.append({"num": num, "stake": stake, "pair": pair, "before": bal_before, "after": actual, "expected": expected, "ok": one_ok})
    # If seven cases pass but winning payouts are wrong (path-dependent cheat), fail R57.
    if seven_cases_ok and not win_cases_ok:
        seven_cases_ok = False
        seven_evidence.append({"winPayoutCheck": "FAILED", "detail": win_evidence})
    ctx.check(57, seven_cases_ok, f"cases={seven_evidence}")

    # 58. Compare a realistic multi-roll session through both paths. The
    # normalized comparison ignores IDs/timestamps but retains every ledger,
    # balance transition, active bet, point, and progressive hit.
    sequence = ((1, 1), (1, 2), (3, 3), (5, 6), (3, 4))
    forced_before = await _setup_seven_loss_bets_via_ui(page)
    forced_started = True
    for pair in sequence:
        queued = await page.evaluate("pair => window.__test.forceRoll(pair[0],pair[1])", list(pair))
        before_roll = await page.evaluate("() => window.__game.getState().rollId")
        await page.locator('[data-testid="roll-btn"]').click()
        await page.wait_for_function(
            "before => { const state=window.__game?.getState?.(); return state && state.rollId===before+1 && !state.locked && state.machineState==='resolved'; }",
            arg=before_roll,
            polling=50,
            timeout=8000,
        )
        forced_started = forced_started and queued is True
    forced_after = await ctx.get_state("__game")

    random_before = await _setup_seven_loss_bets_via_ui(page)
    random_started = True
    for pair in sequence:
        random_roll = await _ui_roll_with_rng(page, *pair)
        random_started = random_started and random_roll.get("installed") is True
    random_after = await ctx.get_state("__game")

    forced_normalized = _normalized_rule_state(forced_after)
    random_normalized = _normalized_rule_state(random_after)
    equivalent_paths = (
        forced_started
        and random_started
        and forced_before.get("balance") == random_before.get("balance") == 975
        and forced_normalized == random_normalized
    )
    ctx.check(58, equivalent_paths, f"sequence={sequence}, forced={forced_normalized}, random={random_normalized}")


CHECK_PHASES = [
    phase_foundation,
    phase_betting_rules,
    phase_settlement_and_dom,
    phase_anticheat,
]


async def run_checks(page, ctx):
    """Fallback runner; the shared harness executes CHECK_PHASES in isolated contexts."""
    for phase in CHECK_PHASES:
        await phase(page, ctx)


if __name__ == "__main__":
    import web_ut_harness
    web_ut_harness.main(__import__("web_ut"))
