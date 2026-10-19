# -*- coding: utf-8 -*-
"""炸金花 / Three.js r128 自动化验收。

测试只通过真实页面操作、公开只读状态接口、浏览器/WebGL 独立观测和必要的
源码静态证据进行判定；不提供改牌、改筹码、强制电脑决策、跳过动画等测试控制入口。
"""
from __future__ import annotations

import asyncio
import base64
import json
import math
import os
import re
import sys
import shutil
import subprocess
import tempfile
from collections import Counter
from pathlib import Path
from typing import Any

HERE = Path(__file__).resolve().parent
with (HERE / "mapping.json").open("r", encoding="utf-8") as _f:
    _MAPPING = json.load(_f)
RUBRIC = _MAPPING["rubrics"]

RANK_VALUE = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
              "10": 10, "J": 11, "Q": 12, "K": 13, "A": 14}
RANK_ALIASES = {**{str(i): str(i) for i in range(2, 11)},
                "j": "J", "jack": "J", "q": "Q", "queen": "Q",
                "k": "K", "king": "K", "a": "A", "ace": "A"}
SUIT_ALIASES = {
    "h": "H", "heart": "H", "hearts": "H", "♥": "H", "红桃": "H",
    "d": "D", "diamond": "D", "diamonds": "D", "♦": "D", "方块": "D", "方片": "D",
    "c": "C", "club": "C", "clubs": "C", "♣": "C", "梅花": "C",
    "s": "S", "spade": "S", "spades": "S", "♠": "S", "黑桃": "S",
}
TYPE_NAME = {6: "豹子", 5: "同花顺", 4: "金花", 3: "顺子", 2: "对子", 1: "单张"}

def _progress(message: str) -> None:
    if os.getenv("WEB_UT_QUIET_PROGRESS", "").strip().lower() in {"1", "true", "yes", "on"}:
        return
    print(f"[web_ut] {message}", file=sys.stderr, flush=True)

# Evaluator-owned instrumentation. It is installed before page scripts execute by the harness.
INIT_SCRIPT = r"""
(() => {
  if (window.__evalObs) return;
  const obs = window.__evalObs = {
    raf: {scheduled: 0, callbacks: 0, pending: 0, maxPending: 0, cancelled: 0},
    events: {add: {}, remove: {}, active: {}, maxActive: {}},
    gl: {drawCalls: 0, clearCalls: 0, drawTimes: [], clearTimes: [], creates: {}, deletes: {}, perspectiveMatrices: 0, ambientShader: false, roughnessShader: false, ambientProgramsUsed: 0, roughnessProgramsUsed: 0, textureUploads: 0, programmaticTextureUploads: 0}
  };
  const pending = new Set();
  const raf = window.requestAnimationFrame.bind(window);
  const caf = window.cancelAnimationFrame.bind(window);
  window.requestAnimationFrame = function(cb) {
    let id = 0;
    id = raf((ts) => {
      if (pending.delete(id)) obs.raf.pending = pending.size;
      obs.raf.callbacks++;
      cb(ts);
    });
    pending.add(id);
    obs.raf.scheduled++;
    obs.raf.pending = pending.size;
    obs.raf.maxPending = Math.max(obs.raf.maxPending, pending.size);
    return id;
  };
  window.cancelAnimationFrame = function(id) {
    if (pending.delete(id)) obs.raf.pending = pending.size;
    obs.raf.cancelled++;
    return caf(id);
  };
  const add = EventTarget.prototype.addEventListener;
  const rem = EventTarget.prototype.removeEventListener;
  const listenerIds = new WeakMap(), targetIds = new WeakMap(), activeListeners = new Set();
  let nextListenerId = 1, nextTargetId = 1;
  const idFor = (map, obj, next) => { if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) return 0; let id=map.get(obj); if(!id){id=next();map.set(obj,id)} return id; };
  const captureOf = opts => typeof opts === 'boolean' ? opts : !!(opts && opts.capture);
  const listenerKey = (target,type,fn,opts) => `${idFor(targetIds,target,()=>nextTargetId++)}:${String(type)}:${idFor(listenerIds,fn,()=>nextListenerId++)}:${captureOf(opts)?1:0}`;
  const markInactive = (type,key) => { if(activeListeners.delete(key)) obs.events.active[type]=Math.max(0,(obs.events.active[type]||0)-1); };
  EventTarget.prototype.addEventListener = function(type, fn, opts) {
    obs.events.add[type] = (obs.events.add[type] || 0) + 1;
    if (!fn) return add.call(this,type,fn,opts);
    const key=listenerKey(this,type,fn,opts), once=!!(opts&&typeof opts==='object'&&opts.once);
    // Preserve the browser's exact callback identity and once-dedup semantics.  A once
    // listener is self-cleaning by definition, so it is not counted as a persistent leak.
    const result=add.call(this,type,fn,opts);
    if (!once && !activeListeners.has(key)) {
      activeListeners.add(key); obs.events.active[type]=(obs.events.active[type]||0)+1;
      obs.events.maxActive[type]=Math.max(obs.events.maxActive[type]||0,obs.events.active[type]);
    }
    const signal=opts&&typeof opts==='object'?opts.signal:null;
    if(!once&&signal&&typeof signal.addEventListener==='function') add.call(signal,'abort',()=>markInactive(type,key),{once:true});
    return result;
  };
  EventTarget.prototype.removeEventListener = function(type, fn, opts) {
    obs.events.remove[type] = (obs.events.remove[type] || 0) + 1;
    if (!fn) return rem.call(this,type,fn,opts);
    const key=listenerKey(this,type,fn,opts);
    const result=rem.call(this,type,fn,opts); markInactive(type,key); return result;
  };
  const patchGL = (proto) => {
    if (!proto || proto.__evalPatched) return;
    Object.defineProperty(proto, '__evalPatched', {value: true});
    const pushTime=(arr)=>{arr.push(performance.now());if(arr.length>5000)arr.splice(0,arr.length-5000)};
    for (const name of ['drawArrays','drawElements','drawArraysInstanced','drawElementsInstanced']) {
      if (typeof proto[name] !== 'function') continue;
      const orig = proto[name];
      proto[name] = function(...args) { obs.gl.drawCalls++; pushTime(obs.gl.drawTimes); return orig.apply(this,args); };
    }
    if (typeof proto.clear === 'function') {
      const origClear = proto.clear;
      proto.clear = function(...args) { obs.gl.clearCalls++; pushTime(obs.gl.clearTimes); return origClear.apply(this,args); };
    }
    if (typeof proto.uniformMatrix4fv === 'function') {
      const origMatrix=proto.uniformMatrix4fv;
      proto.uniformMatrix4fv=function(...args){
        const v=args[2]; try{if(v&&v.length>=16&&Math.abs(Number(v[11])+1)<0.08&&Math.abs(Number(v[15]))<0.08)obs.gl.perspectiveMatrices++;}catch(e){}
        return origMatrix.apply(this,args);
      };
    }
    const shaderMeta=new WeakMap(), programMeta=new WeakMap();
    if (typeof proto.shaderSource === 'function') {
      const origShader=proto.shaderSource;
      proto.shaderSource=function(shader,source){
        const t=String(source||''), meta={ambient:/ambientLightColor|ambientLight/i.test(t),rough:/roughnessFactor|roughness/i.test(t)};
        shaderMeta.set(shader,meta); if(meta.ambient)obs.gl.ambientShader=true; if(meta.rough)obs.gl.roughnessShader=true;
        return origShader.call(this,shader,source);
      };
    }
    if (typeof proto.attachShader === 'function') {
      const origAttach=proto.attachShader;
      proto.attachShader=function(program,shader){const sm=shaderMeta.get(shader)||{},pm=programMeta.get(program)||{ambient:false,rough:false};pm.ambient=pm.ambient||!!sm.ambient;pm.rough=pm.rough||!!sm.rough;programMeta.set(program,pm);return origAttach.call(this,program,shader)};
    }
    if (typeof proto.useProgram === 'function') {
      const origUse=proto.useProgram;
      proto.useProgram=function(program){const pm=programMeta.get(program)||{};if(pm.ambient)obs.gl.ambientProgramsUsed++;if(pm.rough)obs.gl.roughnessProgramsUsed++;return origUse.call(this,program)};
    }
    if (typeof proto.texImage2D === 'function') {
      const origTex=proto.texImage2D;
      proto.texImage2D=function(...args){
        obs.gl.textureUploads++;
        try{const programmatic=args.some(x=>(typeof HTMLCanvasElement!=='undefined'&&x instanceof HTMLCanvasElement)||(typeof OffscreenCanvas!=='undefined'&&x instanceof OffscreenCanvas)||(typeof ImageData!=='undefined'&&x instanceof ImageData)||ArrayBuffer.isView(x));if(programmatic)obs.gl.programmaticTextureUploads++;}catch(e){}
        return origTex.apply(this,args);
      };
    }
    for (const kind of ['Buffer','Texture','Program','Shader','Framebuffer','Renderbuffer','VertexArray']) {
      const c = 'create' + kind, d = 'delete' + kind;
      if (typeof proto[c] === 'function') {
        const orig = proto[c];
        proto[c] = function(...args) { obs.gl.creates[kind] = (obs.gl.creates[kind]||0)+1; return orig.apply(this,args); };
      }
      if (typeof proto[d] === 'function') {
        const orig = proto[d];
        proto[d] = function(...args) { obs.gl.deletes[kind] = (obs.gl.deletes[kind]||0)+1; return orig.apply(this,args); };
      }
    }
  };
  patchGL(window.WebGLRenderingContext && WebGLRenderingContext.prototype);
  patchGL(window.WebGL2RenderingContext && WebGL2RenderingContext.prototype);
})();
"""


def _target_arg() -> Path | None:
    for flag in ("--target_dir", "--target"):
        if flag in sys.argv:
            i = sys.argv.index(flag)
            if i + 1 < len(sys.argv):
                try:
                    return Path(sys.argv[i + 1]).resolve()
                except Exception:
                    return None
    return None


def _repo_root() -> Path | None:
    p = _target_arg()
    if p is None:
        return None
    if p.is_file():
        return p.parent
    return p


def _typescript_runtime_path(repo: Path) -> str | None:
    """Find TypeScript even when a temporary shared node_modules link was detached."""
    candidates: list[Path] = [repo / "node_modules" / "typescript" / "lib" / "typescript.js"]
    parent = repo.parent
    if parent.is_dir():
        try:
            siblings = list(parent.iterdir())
        except Exception:
            siblings = []
        for sibling in siblings:
            if sibling.is_dir() and sibling != repo:
                candidates.append(sibling / "node_modules" / "typescript" / "lib" / "typescript.js")
    for exe_name in ("tsc", "tsc.cmd"):
        exe = shutil.which(exe_name)
        if not exe:
            continue
        try:
            resolved = Path(exe).resolve()
            for ancestor in [resolved.parent, *list(resolved.parents)[:5]]:
                candidates.extend([
                    ancestor / "node_modules" / "typescript" / "lib" / "typescript.js",
                    ancestor / "lib" / "node_modules" / "typescript" / "lib" / "typescript.js",
                ])
        except Exception:
            pass
    for candidate in candidates:
        try:
            if candidate.is_file():
                return str(candidate.resolve())
        except Exception:
            pass
    return None


def _source_files() -> list[str]:
    """List project source/config files for the static technology-stack rubric only."""
    root = _repo_root()
    if root is None or not root.exists():
        return []
    ignored = {"node_modules", ".git", "dist", "build", "out", ".vite", "__pycache__"}
    exts = {".html", ".js", ".mjs", ".cjs", ".ts", ".tsx", ".jsx", ".css", ".json"}
    return [str(p.relative_to(root)) for p in sorted(root.rglob("*"))
            if p.is_file() and p.suffix.lower() in exts and not any(part in ignored for part in p.parts)]


def _production_source_plan(repo: Path) -> dict[str, Any]:
    """Resolve source that actually feeds the served production entry.

    Local Vite module entries are followed through relative imports. Standalone fixtures
    are represented by the inline script in index.html, so unrelated/dead ``src`` files
    cannot create static evidence for (or against) the running product.
    """
    html_path=repo/'index.html'
    if not html_path.is_file():
        return {"mode":"none","files":[],"text":"","label":""}
    raw=html_path.read_text(encoding='utf-8',errors='replace')
    script_re=re.compile(r'<script\b([^>]*)>([\s\S]*?)</script\s*>',re.I)
    tags=list(script_re.finditer(raw))
    local_entries=[]
    for m in tags:
        attrs=m.group(1) or ''
        srcm=re.search(r'\bsrc\s*=\s*[\'"]([^\'"]+)[\'"]',attrs,re.I)
        typem=re.search(r'\btype\s*=\s*[\'"]module[\'"]',attrs,re.I)
        if not (srcm and typem):
            continue
        spec=srcm.group(1).split('?',1)[0].split('#',1)[0]
        if re.match(r'^(?:https?:)?//',spec,re.I):
            continue
        candidate=(repo/spec.lstrip('/')).resolve() if spec.startswith('/') else (repo/spec).resolve()
        if candidate.is_file() and (candidate==repo.resolve() or repo.resolve() in candidate.parents):
            local_entries.append(candidate)
    exts=(".ts",".tsx",".js",".jsx",".mjs")
    if local_entries:
        src=repo/'src'
        files=[x.resolve() for x in src.rglob('*') if x.is_file() and x.suffix.lower() in exts] if src.is_dir() else []
        file_set=set(files)
        def resolve_rel(base:Path,spec:str):
            if not spec.startswith('.'):
                return None
            stem=(base.parent/spec).resolve()
            for cand in [stem,*[Path(str(stem)+e) for e in exts],*[stem/('index'+e) for e in exts]]:
                if cand in file_set:
                    return cand
            return None
        import_re=re.compile(r'(?:import|export)\s+(?:[^\'"]*?\s+from\s+)?[\'"]([^\'"]+)[\'"]')
        reachable=set(); queue=list(local_entries)
        while queue:
            cur=queue.pop(0)
            if cur in reachable or cur not in file_set:
                continue
            reachable.add(cur)
            try:
                text=cur.read_text(encoding='utf-8',errors='replace')
            except Exception:
                continue
            for spec in import_re.findall(text):
                target=resolve_rel(cur,spec)
                if target is not None and target not in reachable:
                    queue.append(target)
        text='\n'.join(x.read_text(encoding='utf-8',errors='replace') for x in sorted(reachable) if x.is_file())
        return {"mode":"modules","files":sorted(reachable),"text":text,"label":"src"}
    bodies=[]
    for m in tags:
        attrs=m.group(1) or ''; body=(m.group(2) or '').strip()
        if not body or re.search(r'\bsrc\s*=',attrs,re.I):
            continue
        bodies.append(body)
    inline='\n'.join(bodies)
    return {"mode":"inline" if inline else "none","files":[],"text":inline,"label":"index.html::<inline>"}


def _unwrap_inline_entry(source: str) -> str:
    """Expose functions inside the common standalone ``(()=>{ ... })();`` wrapper."""
    m=re.search(r'^\s*\(\(\)\s*=>\s*\{([\s\S]*?)\}\)\(\);?',source,re.S)
    return m.group(1) if m else source


def _inline_rule_prefix(source: str) -> str:
    """Keep the standalone rule declarations but skip DOM/Three boot side effects for execution."""
    markers=[m for token in ('const root=document','let root=document','const scene=new THREE.Scene') if (m:=source.find(token))>=0]
    cut=min(markers) if markers else len(source)
    return source[:cut]


def _scene_source_features() -> dict[str, bool]:
    """Read only production-reachable code as a fallback for leaky GL instrumentation."""
    root=_repo_root()
    if root is None or not root.is_dir():
        return {"reachable":False,"perspective":False,"ambient":False,"litMaterial":False,"roughness":False}
    plan=_production_source_plan(root); text=str(plan.get('text') or '')
    return {
        "reachable":bool(text.strip()),
        "perspective":bool(re.search(r'\b(?:THREE\.)?PerspectiveCamera\s*\(',text)),
        "ambient":bool(re.search(r'\b(?:THREE\.)?AmbientLight\s*\(',text)),
        "litMaterial":bool(re.search(r'\b(?:THREE\.)?(?:MeshStandardMaterial|MeshPhysicalMaterial|MeshPhongMaterial|MeshLambertMaterial)\s*\(',text)),
        "roughness":bool(re.search(r'\b(?:THREE\.)?(?:MeshStandardMaterial|MeshPhysicalMaterial)\s*\([\s\S]{0,600}?roughness\s*:',text)),
    }


def _normalize_rank(v: Any) -> str | None:
    if v is None:
        return None
    s = str(v).strip()
    if s.upper() in RANK_VALUE:
        return s.upper()
    return RANK_ALIASES.get(s.lower())


def _normalize_suit(v: Any) -> str | None:
    if v is None:
        return None
    return SUIT_ALIASES.get(str(v).strip().lower()) or SUIT_ALIASES.get(str(v).strip())


def _card_tuple(card: dict[str, Any]) -> tuple[int, str] | None:
    rank = _normalize_rank(card.get("rank"))
    suit = _normalize_suit(card.get("suit"))
    if rank not in RANK_VALUE or suit not in {"H", "D", "C", "S"}:
        return None
    return RANK_VALUE[rank], suit


def evaluate_hand(cards: list[dict[str, Any]]) -> tuple[int, tuple[int, ...], str] | None:
    if not isinstance(cards, list) or len(cards) != 3:
        return None
    parsed = [_card_tuple(c) for c in cards if isinstance(c, dict)]
    if len(parsed) != 3 or any(x is None for x in parsed):
        return None
    vals = [x[0] for x in parsed if x]
    suits = [x[1] for x in parsed if x]
    counts = Counter(vals)
    uniq = sorted(set(vals))
    flush = len(set(suits)) == 1
    if set(vals) == {14, 2, 3}:
        straight, straight_high = True, 3
    else:
        straight = len(uniq) == 3 and uniq[2] - uniq[1] == 1 and uniq[1] - uniq[0] == 1
        straight_high = max(vals) if straight else 0
    if len(counts) == 1:
        cat, key = 6, (vals[0],)
    elif flush and straight:
        cat, key = 5, (straight_high,)
    elif flush:
        cat, key = 4, tuple(sorted(vals, reverse=True))
    elif straight:
        cat, key = 3, (straight_high,)
    elif 2 in counts.values():
        pair = max(v for v, n in counts.items() if n == 2)
        kicker = max(v for v, n in counts.items() if n == 1)
        cat, key = 2, (pair, kicker)
    else:
        cat, key = 1, tuple(sorted(vals, reverse=True))
    return cat, key, TYPE_NAME[cat]


def compare_hands(a: list[dict[str, Any]], b: list[dict[str, Any]]) -> int | None:
    ea, eb = evaluate_hand(a), evaluate_hand(b)
    if ea is None or eb is None:
        return None
    ka, kb = (ea[0], *ea[1]), (eb[0], *eb[1])
    return 1 if ka > kb else (-1 if ka < kb else 0)


def _finite_num(v: Any) -> float | None:
    if isinstance(v, bool):
        return None
    try:
        x = float(v)
        return x if math.isfinite(x) else None
    except Exception:
        return None


def _vec(v: Any) -> tuple[float, float, float] | None:
    # Runtime hooks normally expose {x,y,z}, while evaluator-owned helpers may
    # already have normalized the same vector to a tuple/list.  Accept both so
    # cross-checking one normalized vector against another does not become a
    # false negative (R8 previously did exactly that).
    if isinstance(v, dict):
        xs = [_finite_num(v.get(k)) for k in ("x", "y", "z")]
    elif isinstance(v, (list, tuple)) and len(v) >= 3:
        xs = [_finite_num(v[i]) for i in range(3)]
    else:
        return None
    if any(x is None for x in xs):
        return None
    return xs[0], xs[1], xs[2]  # type: ignore[return-value]


def _dist(a: Any, b: Any) -> float | None:
    va, vb = _vec(a), _vec(b)
    if va is None or vb is None:
        return None
    return math.sqrt(sum((x-y)**2 for x, y in zip(va, vb)))


def _cards_unique(cards: list[dict[str, Any]]) -> tuple[bool, str]:
    ids, faces = [], []
    legal = True
    for c in cards:
        if not isinstance(c, dict):
            legal = False
            continue
        rank, suit = _normalize_rank(c.get("rank")), _normalize_suit(c.get("suit"))
        legal = legal and rank in RANK_VALUE and suit in {"H","D","C","S"}
        ids.append(str(c.get("id", "")))
        faces.append((rank, suit))
    ok = legal and len(cards) == 6 and len(set(ids)) == 6 and all(ids) and len(set(faces)) == 6
    return ok, f"count={len(cards)}, idsUnique={len(set(ids))}, facesUnique={len(set(faces))}, legal={legal}"


async def _zjh(page) -> dict[str, Any] | None:
    try:
        v = await page.evaluate("() => window.__zjh && typeof window.__zjh.getState==='function' ? window.__zjh.getState() : null")
        return v if isinstance(v, dict) else None
    except Exception:
        return None


async def _scene(page) -> dict[str, Any] | None:
    try:
        v = await page.evaluate("() => window.__scene && typeof window.__scene.getState==='function' ? window.__scene.getState() : null")
        return v if isinstance(v, dict) else None
    except Exception:
        return None


async def _obs(page) -> dict[str, Any]:
    try:
        v = await page.evaluate("() => window.__evalObs || {}")
        return v if isinstance(v, dict) else {}
    except Exception:
        return {}


async def _wait_state(page, pred, timeout_ms: int = 5000, interval_ms: int = 70) -> dict[str, Any] | None:
    loop = asyncio.get_running_loop()
    end = loop.time() + timeout_ms / 1000
    last = None
    while loop.time() < end:
        last = await _zjh(page)
        try:
            if last is not None and pred(last):
                return last
        except Exception:
            pass
        await page.wait_for_timeout(interval_ms)
    return None


async def _fresh_round(page, sample_frames: bool = False) -> tuple[dict[str, Any] | None, dict[str, Any] | None, list[dict[str, Any]]]:
    """Start one round only through the normal Deal control and return before/after state.

    If a prior round is still active, finish it through the normal Fold action first.  No
    product state is mutated directly.  When requested, scene frames are sampled during
    the real deal animation.
    """
    st = await _zjh(page)
    if not st:
        return None, None, []
    if st.get('phase') == 'computer_turn':
        st = await _wait_state(page, lambda x: x.get('phase') != 'computer_turn', 5000) or await _zjh(page)
    if st and st.get('phase') in {'dealing', 'comparing'}:
        st = await _wait_state(page, lambda x: x.get('phase') not in {'dealing', 'comparing'}, 5000) or await _zjh(page)
    if st and st.get('phase') == 'player_turn':
        if st.get('canFold'):
            await _click(page, '[data-testid="fold-btn"]')
            st = await _wait_state(page, lambda x: x.get('phase') in {'round_over', 'eliminated'}, 4000) or await _zjh(page)
        else:
            return st, None, []
    if not st or st.get('phase') == 'eliminated' or not st.get('canDeal'):
        return st, None, []
    before = st
    await _click(page, '[data-testid="deal-btn"]')
    frames = await _frames(page, 900, 35) if sample_frames else []
    dealt = await _wait_state(
        page,
        lambda x: x.get('phase') in {'player_turn', 'computer_turn', 'round_over', 'eliminated'}
                  and len(((x.get('player') or {}).get('cards') or [])) == 3
                  and len(((x.get('computer') or {}).get('cards') or [])) == 3,
        5200,
    )
    if dealt and dealt.get('phase') == 'computer_turn':
        dealt = await _wait_state(page, lambda x: x.get('phase') != 'computer_turn', 4500) or dealt
    return before, dealt, frames


async def _ensure_player_turn(page, max_rounds: int = 3) -> dict[str, Any] | None:
    """Reach a genuine player turn through normal UI actions only."""
    for _ in range(max_rounds + 1):
        st = await _zjh(page)
        if not st:
            return None
        phase = st.get('phase')
        if phase == 'player_turn' and st.get('turn') == 'player':
            return st
        if phase == 'computer_turn':
            st = await _wait_state(page, lambda x: x.get('phase') != 'computer_turn', 5000)
            if st and st.get('phase') == 'player_turn' and st.get('turn') == 'player':
                return st
            continue
        if phase in {'dealing', 'comparing'}:
            await _wait_state(page, lambda x: x.get('phase') not in {'dealing', 'comparing'}, 5000)
            continue
        if phase == 'eliminated':
            return None
        if phase in {'waiting', 'round_over'} and st.get('canDeal'):
            await _click(page, '[data-testid="deal-btn"]')
            st = await _wait_state(page, lambda x: x.get('phase') in {'player_turn', 'computer_turn', 'eliminated'}, 5200)
            if st and st.get('phase') == 'player_turn' and st.get('turn') == 'player':
                return st
            if st and st.get('phase') == 'eliminated':
                return None
            continue
        return None
    return None


async def _advance_until_compare(page, max_actions: int = 8) -> dict[str, Any] | None:
    """Reach a real state where Compare is legal, using only normal human actions."""
    st = await _ensure_player_turn(page)
    for _ in range(max_actions):
        if not st or st.get('phase') != 'player_turn' or st.get('turn') != 'player':
            return None
        if st.get('canCompare'):
            return st
        action = 'call' if st.get('canCall') else ('raise' if st.get('canRaise') else None)
        if action is None:
            return None
        await _click(page, f'[data-testid="{action}-btn"]')
        mid = await _wait_state(page, lambda x: x.get('phase') == 'computer_turn', 1200, 20)
        if mid:
            st = await _wait_state(page, lambda x: x.get('phase') != 'computer_turn', 5000)
        else:
            st = await _zjh(page)
        if st and st.get('phase') in {'round_over', 'eliminated'}:
            st = await _ensure_player_turn(page)
    return st if st and st.get('canCompare') else None


async def _visible(page, sel: str) -> bool:
    try:
        loc = page.locator(sel).first
        return await loc.count() > 0 and await loc.is_visible()
    except Exception:
        return False


async def _click(page, sel: str, *, force: bool = False) -> bool:
    try:
        loc = page.locator(sel).first
        if await loc.count() == 0:
            return False
        await loc.click(force=force, timeout=1500)
        return True
    except Exception:
        return False


async def _text(page, sel: str) -> str:
    try:
        loc = page.locator(sel).first
        return (await loc.inner_text(timeout=1000)).strip()
    except Exception:
        return ""


def _num_text(s: str) -> float | None:
    m = re.search(r"-?\d+(?:[,.]\d{3})*(?:\.\d+)?", s.replace("，", ","))
    if not m:
        return None
    try:
        return float(m.group(0).replace(",", ""))
    except Exception:
        return None


async def _frames(page, duration_ms: int = 900, interval_ms: int = 45) -> list[dict[str, Any]]:
    out = []
    n = max(1, duration_ms // interval_ms)
    for _ in range(n):
        s = await _scene(page)
        if s:
            out.append(s)
        await page.wait_for_timeout(interval_ms)
    return out


async def _start_scene_frame_recorder(page, duration_ms: int = 650) -> None:
    """Start a read-only in-page rAF recorder before a time-sensitive UI action."""
    try:
        await page.evaluate(r"""duration => {
          const rec={frames:[],started:performance.now(),done:false};
          window.__utSceneFrameRecorder=rec;
          const clone=v=>{try{return structuredClone(v)}catch{return JSON.parse(JSON.stringify(v))}};
          const tick=()=>{
            try{
              const s=window.__scene&&typeof window.__scene.getState==='function'?window.__scene.getState():null;
              if(s)rec.frames.push(clone({chips:Array.isArray(s.chips)?s.chips:[],cards:Array.isArray(s.cards)?s.cards:[]}));
            }catch{}
            if(performance.now()-rec.started<duration)requestAnimationFrame(tick);else rec.done=true;
          };
          requestAnimationFrame(tick);
        }""", duration_ms)
    except Exception:
        pass


async def _click_with_scene_recorder(page, sel: str, duration_ms: int = 900, probe_illegal: bool = False) -> dict[str, Any]:
    """Start rAF evidence and dispatch the real control click in one browser task.

    The returned ``after`` snapshot is the synchronous post-click boundary, taken before
    timer-driven AI work can run.  This avoids attributing an opponent's immediate reply
    to the human wager on loaded CI hosts.  The helper never mutates product state except
    through the normal DOM control.
    """
    try:
        out=await page.evaluate(r"""({selector,duration,probeIllegal}) => {
          const read=()=>window.__zjh&&typeof window.__zjh.getState==='function'?window.__zjh.getState():null;
          const scene=()=>window.__scene&&typeof window.__scene.getState==='function'?window.__scene.getState():null;
          const clone=v=>{try{return structuredClone(v)}catch{return JSON.parse(JSON.stringify(v))}};
          const rec={frames:[],started:performance.now(),done:false};
          window.__utSceneFrameRecorder=rec;
          const tick=()=>{
            try{const s=scene();if(s)rec.frames.push(clone({chips:Array.isArray(s.chips)?s.chips:[],cards:Array.isArray(s.cards)?s.cards:[]}));}catch{}
            if(performance.now()-rec.started<duration)requestAnimationFrame(tick);else rec.done=true;
          };
          requestAnimationFrame(tick);
          const button=document.querySelector(selector);
          const before=clone(read()), sceneBefore=clone(scene());
          if(!button || typeof button.click!=='function') return {clicked:false,before,after:before,sceneBefore};
          button.click();
          const after=clone(read());
          const disabled=Object.fromEntries(['deal','peek','call','raise','fold','compare'].map(k=>{const b=document.querySelector(`[data-testid="${k}-btn"]`);return [k,b?!!b.disabled:null]}));
          const turnText=(document.querySelector('[data-testid="turn"]')?.textContent||'').trim();
          let illegalAfter=null;
          if(probeIllegal){
            for(const k of ['peek','call','raise','fold','compare']) document.querySelector(`[data-testid="${k}-btn"]`)?.click();
            illegalAfter=clone(read());
          }
          return {clicked:true,before,after,sceneBefore,disabled,turnText,illegalAfter};
        }""", {'selector':sel,'duration':duration_ms,'probeIllegal':probe_illegal})
        return out if isinstance(out,dict) else {}
    except Exception:
        return {}


async def _finish_scene_frame_recorder(page, timeout_ms: int = 1200) -> list[dict[str, Any]]:
    try:
        await page.wait_for_function("() => !!window.__utSceneFrameRecorder?.done", timeout=timeout_ms)
    except Exception:
        pass
    try:
        frames=await page.evaluate(r"""() => {
          const r=window.__utSceneFrameRecorder;
          const out=Array.isArray(r?.frames)?r.frames:[];
          try{delete window.__utSceneFrameRecorder}catch{}
          return out;
        }""")
        return [x for x in frames if isinstance(x,dict)] if isinstance(frames,list) else []
    except Exception:
        return []


def _track_positions(frames: list[dict[str, Any]], card_id: str) -> list[dict[str, Any]]:
    pts = []
    for f in frames:
        for c in f.get("cards", []) if isinstance(f.get("cards"), list) else []:
            if isinstance(c, dict) and str(c.get("id")) == str(card_id) and isinstance(c.get("position"), dict):
                pts.append(c["position"])
                break
    return pts


def _has_motion(points: list[dict[str, Any]], min_span: float = 0.15) -> tuple[bool, float, int]:
    if len(points) < 3:
        return False, 0.0, len(points)
    span = 0.0
    for a in points:
        for b in points:
            d = _dist(a, b)
            if d is not None:
                span = max(span, d)
    unique = {tuple(round(x, 3) for x in _vec(p) or (0,0,0)) for p in points}
    return len(unique) >= 3 and span >= min_span, span, len(unique)


def _react_vite_evidence(files: list[str]) -> tuple[bool, str]:
    """Validate the requested stack without prescribing one Vite/Tailwind template layout."""
    repo = _repo_root()
    if repo is None:
        return False, "repo unavailable"
    pkg_path = repo / "package.json"
    if not pkg_path.is_file():
        return False, "missing package.json"
    try:
        pkg=json.loads(pkg_path.read_text(encoding="utf-8"))
    except Exception as exc:
        return False, f"package.json invalid: {exc}"
    deps=pkg.get("dependencies") if isinstance(pkg.get("dependencies"),dict) else {}
    dev=pkg.get("devDependencies") if isinstance(pkg.get("devDependencies"),dict) else {}
    all_deps={**dev,**deps}; scripts=pkg.get("scripts") if isinstance(pkg.get("scripts"),dict) else {}
    react=str(all_deps.get("react","")); react_dom=str(all_deps.get("react-dom","")); three=str(all_deps.get("three",""))
    vite=str(all_deps.get("vite","")); typescript=str(all_deps.get("typescript","")); tailwind=str(all_deps.get("tailwindcss","")); build_script=str(scripts.get("build",""))
    stack_ok=(re.search(r"(?:^|[^0-9])19(?:\.|$)",react) is not None and
              re.search(r"(?:^|[^0-9])19(?:\.|$)",react_dom) is not None and
              re.search(r"(?:^|[^0-9])0?\.128(?:\.0)?(?:$|[^0-9])",three) is not None and
              bool(vite) and bool(typescript) and bool(tailwind) and
              re.search(r"(?:^|[\s;&])vite(?:\s+build)?(?:\s|$)",build_script) is not None)
    src_files=[x for x in repo.rglob('*') if x.is_file() and not any(part in {'node_modules','.git','dist','build','out','.vite','__pycache__'} for part in x.parts)]
    ts_files=[x for x in src_files if x.suffix.lower() in {'.ts','.tsx'}]
    react_entry=False; tailwind_entry=False
    for f in src_files:
        if f.suffix.lower() in {'.ts','.tsx','.js','.jsx'}:
            txt=f.read_text(encoding='utf-8',errors='replace')
            if re.search(r"\bcreateRoot\s*\(",txt): react_entry=True
        if f.suffix.lower() in {'.css','.pcss','.postcss'}:
            txt=f.read_text(encoding='utf-8',errors='replace')
            if ('@tailwind base' in txt and '@tailwind utilities' in txt) or re.search(r"@import\s+['\"]tailwindcss['\"]",txt): tailwind_entry=True
    index_path=repo/'index.html'
    html_ok=index_path.is_file()
    module_entry=False
    module_target=''
    if html_ok:
        html=index_path.read_text(encoding='utf-8',errors='replace')
        for match in re.finditer(r'<script\b[^>]*\btype=["\']module["\'][^>]*\bsrc=["\']([^"\']+)["\'][^>]*>',html,re.I):
            ref=match.group(1).split('?',1)[0].split('#',1)[0]
            if re.match(r'^[a-z]+://',ref,re.I) or ref.startswith('//'):
                continue
            candidate=(repo/ref.lstrip('/')).resolve()
            try:
                candidate.relative_to(repo.resolve())
            except ValueError:
                continue
            if candidate.is_file() and candidate.suffix.lower() in {'.ts','.tsx','.js','.jsx'}:
                module_target=str(candidate.relative_to(repo))
                entry_text=candidate.read_text(encoding='utf-8',errors='replace')
                module_entry=bool(re.search(r"\bcreateRoot\s*\(",entry_text))
                if module_entry:
                    break
    ignored={'node_modules','.git','dist','build','out','.vite','__pycache__'}
    model_files=[str(f.relative_to(repo)) for f in repo.rglob('*') if f.is_file() and f.suffix.lower() in {'.glb','.gltf','.obj','.fbx'} and not any(part in ignored for part in f.parts)]
    ok=stack_ok and bool(ts_files) and react_entry and tailwind_entry and html_ok and module_entry and not model_files
    return ok,(f"react={react!r}, reactDom={react_dom!r}, three={three!r}, vite={vite!r}, typescript={typescript!r}, tailwind={tailwind!r}, "
               f"buildScript={build_script!r}, tsFiles={len(ts_files)}, reactCreateRoot={react_entry}, tailwindEntry={tailwind_entry}, indexHtml={html_ok}, "
               f"viteModuleEntry={module_entry}, moduleTarget={module_target!r}, externalModelFiles={model_files[:4]}")


def _deal_lerp_source_evidence() -> tuple[bool, str]:
    """Supplement runtime deal traces with evidence that the production source uses linear interpolation."""
    repo = _repo_root()
    if repo is None:
        return False, "repo unavailable"
    ignored={"node_modules",".git","dist","build","out",".vite","__pycache__"}
    hits=[]
    for f in repo.rglob("*"):
        if not f.is_file() or f.suffix.lower() not in {".ts",".tsx",".js",".jsx"} or any(part in ignored for part in f.parts):
            continue
        txt=f.read_text(encoding="utf-8",errors="replace")
        # Native Three.js lerp/lerpVectors is the strongest signal.  Also accept a
        # conventional affine interpolation expression for implementation diversity.
        native=bool(re.search(r"\.(?:lerp|lerpVectors)\s*\(",txt))
        affine=bool(re.search(r"(?:start|from|origin|source)[A-Za-z0-9_\.]*\s*\+\s*\([^\n]{0,120}[-+]\s*(?:start|from|origin|source)[A-Za-z0-9_\.]*\)\s*\*",txt,re.I))
        if native or affine:
            hits.append(str(f.relative_to(repo)))
    return bool(hits), ", ".join(hits[:4]) if hits else "no LERP-style interpolation found in production source"


async def _canvas_green_probe(page) -> dict[str, Any]:
    """Independently sample rendered canvas pixels from a Playwright screenshot."""
    try:
        canvas = page.locator('[data-testid="game-canvas"]').first
        if await canvas.count() == 0:
            return {"ok": False, "reason": "canvas missing"}
        png = await canvas.screenshot(type="png")
        encoded = base64.b64encode(png).decode("ascii")
        return await page.evaluate("""async (b64) => {
          const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
          const w=80,h=50,c=document.createElement('canvas'); c.width=w;c.height=h;
          const x=c.getContext('2d',{willReadFrequently:true}); x.drawImage(img,0,0,w,h);
          const d=x.getImageData(0,0,w,h).data; let n=0,g=0,sr=0,sg=0,sb=0;
          for(let yy=5;yy<38;yy++) for(let xx=10;xx<70;xx++){const i=(yy*w+xx)*4,r=d[i],gr=d[i+1],b=d[i+2],a=d[i+3];if(a<180)continue;n++;sr+=r;sg+=gr;sb+=b;if(gr>=42&&gr>=r+14&&gr>=b+8)g++;}
          return {ok:n>0,samples:n,greenPixels:g,greenRatio:n?g/n:0,mean:n?[sr/n,sg/n,sb/n]:null};
        }""", encoded)
    except Exception as exc:
        return {"ok": False, "reason": f"{type(exc).__name__}: {exc}"}



async def _canvas_png(page) -> bytes:
    """Capture the actual WebGL canvas as rendered by the browser."""
    try:
        canvas = page.locator('[data-testid="game-canvas"]').first
        if await canvas.count() == 0 or not await canvas.is_visible():
            return b""
        return await canvas.screenshot(type="png")
    except Exception:
        return b""


async def _png_region_diff(page, before: bytes, after: bytes,
                           region: tuple[float, float, float, float]) -> dict[str, Any]:
    """Compare a normalized region of two real browser screenshots.

    This is evaluator-owned render evidence.  It deliberately does not use any
    project-provided pixel/animation flag.
    """
    if not before or not after:
        return {"ok": False, "changedRatio": 0.0, "meanDelta": 0.0, "reason": "missing screenshot"}
    try:
        payload={"a":base64.b64encode(before).decode("ascii"),"b":base64.b64encode(after).decode("ascii"),"r":list(region)}
        return await page.evaluate(r"""async ({a,b,r}) => {
          const load=async src=>{const im=new Image();im.src='data:image/png;base64,'+src;await im.decode();return im};
          const [ia,ib]=await Promise.all([load(a),load(b)]);
          const w=120,h=76, ca=document.createElement('canvas'), cb=document.createElement('canvas');
          ca.width=cb.width=w;ca.height=cb.height=h;
          const xa=ca.getContext('2d',{willReadFrequently:true}), xb=cb.getContext('2d',{willReadFrequently:true});
          xa.drawImage(ia,0,0,w,h);xb.drawImage(ib,0,0,w,h);
          const da=xa.getImageData(0,0,w,h).data, db=xb.getImageData(0,0,w,h).data;
          const x0=Math.max(0,Math.floor(r[0]*w)), y0=Math.max(0,Math.floor(r[1]*h));
          const x1=Math.min(w,Math.ceil(r[2]*w)), y1=Math.min(h,Math.ceil(r[3]*h));
          let n=0, changed=0, total=0;
          for(let y=y0;y<y1;y++)for(let x=x0;x<x1;x++){
            const i=(y*w+x)*4; if(da[i+3]<32 && db[i+3]<32) continue;
            const d=Math.abs(da[i]-db[i])+Math.abs(da[i+1]-db[i+1])+Math.abs(da[i+2]-db[i+2]);
            n++; total+=d; if(d>=38) changed++;
          }
          return {ok:n>0,changedRatio:n?changed/n:0,meanDelta:n?total/(n*3):0,samples:n,region:r};
        }""", payload)
    except Exception as exc:
        return {"ok": False, "changedRatio": 0.0, "meanDelta": 0.0, "reason": f"{type(exc).__name__}: {exc}"}


def _render_diff_ok(v: dict[str, Any] | None, *, min_ratio: float = 0.003, min_mean: float = 0.35) -> bool:
    return bool(isinstance(v,dict) and v.get('ok') and
                (_finite_num(v.get('changedRatio')) or 0) >= min_ratio and
                (_finite_num(v.get('meanDelta')) or 0) >= min_mean)


def _project_to_screen(point: Any, camera: dict[str, Any], canvas: dict[str, Any]) -> tuple[float, float] | None:
    p, pos, target = _vec(point), _vec(camera.get("position")), _vec(camera.get("target"))
    if p is None or pos is None or target is None:
        return None
    fov = _finite_num(camera.get("fov")); aspect = _finite_num(camera.get("aspect"))
    width = _finite_num(canvas.get("width")); height = _finite_num(canvas.get("height"))
    if fov is None or width is None or height is None or width <= 0 or height <= 0:
        return None
    if aspect is None or aspect <= 0:
        aspect = width / height
    fx,fy,fz = (target[i]-pos[i] for i in range(3))
    fl = math.sqrt(fx*fx+fy*fy+fz*fz)
    if fl <= 1e-9: return None
    fx,fy,fz = fx/fl,fy/fl,fz/fl
    # right = normalize(forward x worldUp), up = right x forward
    rx,ry,rz = -fz,0.0,fx
    rl = math.sqrt(rx*rx+rz*rz)
    if rl <= 1e-9: return None
    rx,rz = rx/rl,rz/rl
    ux,uy,uz = -fy*rz, rz*fx-rx*fz, rx*fy
    vx,vy,vz = p[0]-pos[0],p[1]-pos[1],p[2]-pos[2]
    cx = vx*rx + vy*ry + vz*rz
    cy = vx*ux + vy*uy + vz*uz
    depth = vx*fx + vy*fy + vz*fz
    if depth <= 1e-6: return None
    tan = math.tan(math.radians(fov)/2)
    ndcx = cx / (depth*tan*aspect)
    ndcy = cy / (depth*tan)
    return ((ndcx+1)*0.5*width, (1-ndcy)*0.5*height)




def _causal_rule_link(repo: Path, defining_file: str, name: str, source_root: Path | None = None) -> dict[str, Any]:
    """Use the TypeScript AST to prove a rule result enters real gameplay dataflow.

    This is deliberately stricter than simple call reachability: calls under statically
    false branches are ignored, evaluator results must flow into ``handType`` or the
    real showdown winner expression, and an ignored/decoy call is not sufficient.
    """
    if not name or not re.fullmatch(r"[A-Za-z_$][\w$]*(?:#[A-Za-z_$][\w$]*)?", name):
        return {"ok": False, "handTypeCausal": False, "showdownCausal": False, "reason": "invalid candidate name"}
    node=shutil.which("node"); src_root=(source_root or (repo/"src")).resolve(); defining=Path(defining_file).resolve()
    if node is None or not src_root.is_dir() or not defining.is_file():
        return {"ok": False, "handTypeCausal": False, "showdownCausal": False, "reason": "node/production-source unavailable"}
    js=r"""
const fs=require('fs'),path=require('path'); let ts;
try{const forced=process.env.WEB_UT_TYPESCRIPT_PATH;ts=forced?require(forced):require(require.resolve('typescript',{paths:[process.cwd()]}))}catch(e){try{const cp=require('child_process');const root=cp.execFileSync(process.platform==='win32'?'npm.cmd':'npm',['root','-g'],{encoding:'utf8'}).trim();ts=require(path.join(root,'typescript'))}catch(e2){console.log(JSON.stringify({ok:false,error:'typescript unavailable '+e2}));process.exit(0)}}
const srcRoot=path.resolve(process.argv[2]), defining=path.resolve(process.argv[3]), exportName=process.argv[4];
const exts=['.ts','.tsx','.js','.jsx'];
function allFiles(dir,out=[]){for(const ent of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,ent.name);if(ent.isDirectory()){if(!['node_modules','dist','build','out'].includes(ent.name))allFiles(p,out)}else if(exts.includes(path.extname(p)))out.push(path.resolve(p));}return out}
const files=allFiles(srcRoot),set=new Set(files);
function resolveRel(from,spec){if(!spec.startsWith('.'))return null;const base=path.resolve(path.dirname(from),spec);for(const p of [base,...exts.map(e=>base+e),...exts.map(e=>path.join(base,'index'+e))])if(set.has(path.resolve(p)))return path.resolve(p);return null}
const ast=new Map(),imports=new Map(),importSyms=new Map();
for(const f of files){const sf=ts.createSourceFile(f,fs.readFileSync(f,'utf8'),ts.ScriptTarget.Latest,true);ast.set(f,sf);const edges=[],syms=new Map();sf.forEachChild(n=>{if(ts.isImportDeclaration(n)&&ts.isStringLiteral(n.moduleSpecifier)){const t=resolveRel(f,n.moduleSpecifier.text);if(!t)return;edges.push(t);const c=n.importClause;if(c&&c.name)syms.set(c.name.text,{file:t,name:'default'});if(c&&c.namedBindings&&ts.isNamedImports(c.namedBindings))for(const el of c.namedBindings.elements)syms.set(el.name.text,{file:t,name:(el.propertyName||el.name).text});if(c&&c.namedBindings&&ts.isNamespaceImport(c.namedBindings))syms.set(c.namedBindings.name.text,{file:t,name:'*'});}});imports.set(f,edges);importSyms.set(f,syms)}
const entries=files.filter(f=>/^main\.(?:tsx?|jsx?)$/i.test(path.basename(f))),reachableModules=new Set(),mq=[...entries];while(mq.length){const f=mq.shift();if(reachableModules.has(f))continue;reachableModules.add(f);for(const n of imports.get(f)||[])mq.push(n)}
if(!reachableModules.has(defining)){console.log(JSON.stringify({ok:false,reason:'defining module not reachable from main'}));process.exit(0)}
const nodes=new Map(),localSyms=new Map(),classMethods=new Map();const keyTop=f=>f+'::<top>',keyFn=(f,n)=>f+'::fn:'+n,keyCls=(f,c,m)=>f+'::class:'+c+'.'+m;
for(const f of reachableModules){const sf=ast.get(f),locals=new Map();nodes.set(keyTop(f),{file:f,kind:'top',node:sf,className:null});sf.forEachChild(n=>{if(ts.isFunctionDeclaration(n)&&n.name){locals.set(n.name.text,keyFn(f,n.name.text));nodes.set(keyFn(f,n.name.text),{file:f,kind:'fn',node:n,className:null});}else if(ts.isVariableStatement(n)){for(const d of n.declarationList.declarations)if(ts.isIdentifier(d.name)&&d.initializer&&(ts.isArrowFunction(d.initializer)||ts.isFunctionExpression(d.initializer))){locals.set(d.name.text,keyFn(f,d.name.text));nodes.set(keyFn(f,d.name.text),{file:f,kind:'fn',node:d.initializer,className:null});}}else if(ts.isClassDeclaration(n)&&n.name){const cn=n.name.text;locals.set(cn,keyCls(f,cn,'constructor'));const mm=new Map();for(const m of n.members){if(ts.isConstructorDeclaration(m)){const k=keyCls(f,cn,'constructor');nodes.set(k,{file:f,kind:'method',node:m,className:cn});mm.set('constructor',k);}else if(ts.isMethodDeclaration(m)&&m.name){const mn=m.name.getText(sf).replace(/^['"]|['"]$/g,'');const k=keyCls(f,cn,mn);nodes.set(k,{file:f,kind:'method',node:m,className:cn});mm.set(mn,k);}}classMethods.set(f+'::'+cn,mm);}});localSyms.set(f,locals)}
function resolveIdent(f,name){const l=localSyms.get(f)||new Map();if(l.has(name))return l.get(name);const imp=(importSyms.get(f)||new Map()).get(name);if(!imp||imp.name==='*')return null;const tl=localSyms.get(imp.file)||new Map();return imp.name==='default'?(tl.get('default')||null):(tl.get(imp.name)||null)}
for(const f of reachableModules){const sf=ast.get(f),locals=localSyms.get(f);sf.forEachChild(n=>{if(ts.isExportAssignment(n)&&ts.isIdentifier(n.expression)){const k=resolveIdent(f,n.expression.text);if(k)locals.set('default',k)}if((ts.isFunctionDeclaration(n)||ts.isClassDeclaration(n))&&n.name&&n.modifiers&&n.modifiers.some(x=>x.kind===ts.SyntaxKind.DefaultKeyword)){const k=locals.get(n.name.text);if(k)locals.set('default',k)}})}
function staticBool(n){if(!n)return null;if(n.kind===ts.SyntaxKind.TrueKeyword)return true;if(n.kind===ts.SyntaxKind.FalseKeyword)return false;if(n.kind===ts.SyntaxKind.NullKeyword)return false;if(ts.isNumericLiteral(n))return Number(n.text)!==0;if(ts.isStringLiteral(n))return n.text.length>0;if(ts.isParenthesizedExpression(n))return staticBool(n.expression);if(ts.isPrefixUnaryExpression(n)&&n.operator===ts.SyntaxKind.ExclamationToken){const v=staticBool(n.operand);return v===null?null:!v}return null}
function childDead(parent,child){if(ts.isIfStatement(parent)){const b=staticBool(parent.expression);if(b===false&&parent.thenStatement===child)return true;if(b===true&&parent.elseStatement===child)return true}if(ts.isConditionalExpression(parent)){const b=staticBool(parent.condition);if(b===false&&parent.whenTrue===child)return true;if(b===true&&parent.whenFalse===child)return true}if((ts.isWhileStatement(parent)||ts.isDoStatement(parent))&&staticBool(parent.expression)===false&&parent.statement===child)return true;return false}
function isDead(n){let c=n,p=n.parent;while(p){if(childDead(p,c))return true;c=p;p=p.parent}return false}
const edges=new Map();for(const k of nodes.keys())edges.set(k,new Set());function addEdge(o,t){if(o&&t&&edges.has(o)&&nodes.has(t))edges.get(o).add(t)}
function walkOwned(owner,root){const meta=nodes.get(owner),f=meta.file,cn=meta.className;function walk(n,isRoot=false){if(isDead(n))return;if(!isRoot&&ts.isClassDeclaration(n))return;if(ts.isCallExpression(n)){const e=n.expression;if(ts.isIdentifier(e))addEdge(owner,resolveIdent(f,e.text));else if(ts.isPropertyAccessExpression(e)){if(e.expression.kind===ts.SyntaxKind.ThisKeyword&&cn){const mm=classMethods.get(f+'::'+cn);if(mm)addEdge(owner,mm.get(e.name.text));}else if(ts.isIdentifier(e.expression)){const imp=(importSyms.get(f)||new Map()).get(e.expression.text);if(imp&&imp.name==='*'){const tl=localSyms.get(imp.file)||new Map();addEdge(owner,tl.get(e.name.text));}}}}else if(ts.isNewExpression(n)&&ts.isIdentifier(n.expression))addEdge(owner,resolveIdent(f,n.expression.text));else if((ts.isJsxOpeningElement(n)||ts.isJsxSelfClosingElement(n))&&ts.isIdentifier(n.tagName))addEdge(owner,resolveIdent(f,n.tagName.text));ts.forEachChild(n,c=>walk(c,false))}walk(root,true)}
for(const [k,m] of nodes){if(m.kind==='top'){for(const st of m.node.statements){if(ts.isFunctionDeclaration(st)||ts.isClassDeclaration(st))continue;if(ts.isVariableStatement(st)&&st.declarationList.declarations.every(d=>d.initializer&&(ts.isArrowFunction(d.initializer)||ts.isFunctionExpression(d.initializer))))continue;walkOwned(k,st)}}else walkOwned(k,m.node)}
for(const f of reachableModules)for(const t of imports.get(f)||[])if(reachableModules.has(t))addEdge(keyTop(f),keyTop(t));
const seen=new Set(),q=entries.map(keyTop);while(q.length){const k=q.shift();if(!k||seen.has(k))continue;seen.add(k);for(const t of edges.get(k)||[])q.push(t)}
let target=null,targetClass=null,targetMethod=null;
if(exportName.includes('#')){const parts=exportName.split('#');targetClass=parts[0];targetMethod=parts[1];target=(classMethods.get(defining+'::'+targetClass)||new Map()).get(targetMethod)||null}
else target=(localSyms.get(defining)||new Map()).get(exportName)||null;
function contains(root,needle){return !!root&&!!needle&&needle.pos>=root.pos&&needle.end<=root.end}
function nodeText(n,f){try{return n.getText(ast.get(f))}catch{return ''}}
function targetCall(n,f){if(!ts.isCallExpression(n))return false;const e=n.expression;if(ts.isIdentifier(e))return resolveIdent(f,e.text)===target;if(targetClass&&f===defining&&ts.isPropertyAccessExpression(e)&&e.name.text===targetMethod&&e.expression.kind===ts.SyntaxKind.ThisKeyword)return true;return false}
function varUses(ownerNode,varName){const out=[];function w(n){if(ts.isIdentifier(n)&&n.text===varName)out.push(n);ts.forEachChild(n,w)}w(ownerNode);return out}
function literalsUnder(n){const out=new Set();function w(x){if(ts.isStringLiteralLike(x))out.add(x.text);ts.forEachChild(x,w)}w(n);return out}
const stateInfoCache=new Map();
function unExpr(n){while(n&&(ts.isParenthesizedExpression(n)||ts.isAsExpression(n)||ts.isTypeAssertionExpression(n)||ts.isNonNullExpression(n)|| (ts.isSatisfiesExpression&&ts.isSatisfiesExpression(n))))n=n.expression;return n}
function classPath(expr,aliases){expr=unExpr(expr);if(!expr)return null;if(expr.kind===ts.SyntaxKind.ThisKeyword)return'';if(ts.isIdentifier(expr))return aliases.get(expr.text)||null;if(ts.isPropertyAccessExpression(expr)){const b=classPath(expr.expression,aliases);return b===null?null:(b?b+'.':'')+expr.name.text}if(ts.isElementAccessExpression(expr)){const b=classPath(expr.expression,aliases);if(b===null)return null;const a=unExpr(expr.argumentExpression);let k='*';if(a&&ts.isStringLiteralLike(a))k=a.text;return b+'['+k+']'}return null}
function classAliases(root,file){const a=new Map();for(let pass=0;pass<5;pass++){let changed=false;function w(n){if(ts.isVariableDeclaration(n)&&ts.isIdentifier(n.name)&&n.initializer){const q=classPath(n.initializer,a);if(q!==null&&q!==''&&a.get(n.name.text)!==q){a.set(n.name.text,q);changed=true}}ts.forEachChild(n,w)}w(root);if(!changed)break}return a}
function rootPart(p){if(!p)return null;const m=String(p).match(/^([A-Za-z_$][\w$]*)/);return m?m[1]:null}
function immediateReturnExpr(root){let found=null;function w(n,isRoot=false){if(found)return;if(!isRoot&&(ts.isFunctionLike(n)||ts.isClassLike&&ts.isClassLike(n)))return;if(ts.isReturnStatement(n)&&n.expression){found=unExpr(n.expression);return}ts.forEachChild(n,c=>w(c,false))}w(root,true);return found}
function propKey(n,file){if(!n)return'';if(ts.isIdentifier(n)||ts.isStringLiteralLike(n)||ts.isNumericLiteral(n))return String(n.text);return nodeText(n,file).replace(/^['"]|['"]$/g,'')}
function pathsUnder(expr,aliases){const out=new Set();function w(n){const p=classPath(n,aliases);if(p&&rootPart(p))out.add(p);ts.forEachChild(n,w)}if(expr)w(expr);return out}
function methodReturnsSeatPath(m,meta,primaryRoots,seatPaths){if(!m)return null;const aliases=classAliases(m.node,meta.file);let ret=immediateReturnExpr(m.node);const p=classPath(ret,aliases);if(!p)return null;const root=rootPart(p);if(!root||!primaryRoots.has(root))return null;if(seatPaths.has(p))return p;const dyn=p.match(/^([A-Za-z_$][\w$]*)\[\*\]$/);if(dyn&&primaryRoots.has(dyn[1])){const txt=nodeText(m.node,meta.file);if(/['"]player['"]/.test(txt)&&/['"]computer['"]/.test(txt))return dyn[1]+'[*]';const params=m.node.parameters||[];if(params.some(par=>{const t=nodeText(par.type,meta.file);return /['"]player['"]/.test(t)&&/['"]computer['"]/.test(t)}))return dyn[1]+'[*]'}return null}
function classStateInfo(meta){
  if(!meta.className)return null; const ck=meta.file+'::'+meta.className;if(stateInfoCache.has(ck))return stateInfoCache.get(ck);
  const mm=classMethods.get(ck)||new Map(); let snapshotName=null;
  for(const [mn,k] of mm){const m=nodes.get(k);if(!m)continue;const t=nodeText(m.node,meta.file);if(/__zjh/.test(t)&&/getState/.test(t)){const q=t.match(/getState\s*:\s*\(?[^=]*\)?\s*=>\s*this\.([A-Za-z_$][\w$]*)\s*\(/);if(q)snapshotName=q[1];}}
  const roots=new Set(), seatPaths=new Set(), winnerPaths=new Set(), winnerMethods=new Set(), seatMethods=new Map();
  const snapKey=snapshotName&&mm.get(snapshotName), snap=snapKey&&nodes.get(snapKey);
  if(snap){
    const aliases=classAliases(snap.node,meta.file), ret=immediateReturnExpr(snap.node);
    const required=new Set(['ready','phase','turn','round','pot','currentBet','winner','outcome','score','player','computer']);
    if(ret&&ts.isObjectLiteralExpression(ret)){
      for(const prop of ret.properties){
        if(ts.isSpreadAssignment(prop)){for(const q of pathsUnder(prop.expression,aliases)){const r=rootPart(q);if(r)roots.add(r);if(!q.includes('.')&&!q.includes('[')){seatPaths.add(q+'.player');seatPaths.add(q+'.computer');winnerPaths.add(q+'.winner')}}continue}
        if(!ts.isPropertyAssignment(prop)&&!ts.isShorthandPropertyAssignment(prop))continue;
        const key=propKey(prop.name,meta.file);if(!required.has(key))continue;
        const init=ts.isShorthandPropertyAssignment(prop)?prop.name:prop.initializer;
        const ps=pathsUnder(init,aliases);for(const q of ps){const r=rootPart(q);if(r)roots.add(r)}
        if(key==='player'||key==='computer')for(const q of ps){if(q.endsWith('.'+key)||q.endsWith('['+key+']'))seatPaths.add(q)}
        if(key==='winner')for(const q of ps)if(/(?:\.|\])winner$/.test(q)||q.endsWith('.winner'))winnerPaths.add(q)
      }
    }else{
      const q=classPath(ret,aliases),r=rootPart(q);if(r){roots.add(r);if(q===r){seatPaths.add(r+'.player');seatPaths.add(r+'.computer');winnerPaths.add(r+'.winner')}}
    }
  }
  function methodTouchesRoot(k){const m=nodes.get(k);if(!m)return false;const aliases=classAliases(m.node,meta.file);let yes=false;function w(n){const q=classPath(n,aliases),r=rootPart(q);if(r&&roots.has(r))yes=true;ts.forEachChild(n,w)}w(m.node);return yes}
  for(const [mn,k] of mm){const m=nodes.get(k);if(!m)continue;const sp=methodReturnsSeatPath(m,meta,roots,seatPaths);if(sp)seatMethods.set(mn,sp)}
  function resolveObj(expr,ownerRoot){expr=unExpr(expr);if(!expr)return null;const aliases=classAliases(ownerRoot,meta.file);const direct=classPath(expr,aliases);if(direct)return direct;if(ts.isCallExpression(expr)&&ts.isPropertyAccessExpression(expr.expression)&&expr.expression.expression.kind===ts.SyntaxKind.ThisKeyword){const sp=seatMethods.get(expr.expression.name.text);if(sp)return sp}if(ts.isIdentifier(expr)){let init=null;function w(n){if(init)return;if(ts.isVariableDeclaration(n)&&ts.isIdentifier(n.name)&&n.name.text===expr.text&&n.initializer)init=n.initializer;ts.forEachChild(n,w)}w(ownerRoot);if(init)return resolveObj(init,ownerRoot)}return null}
  function isSeatObjectPath(p){if(!p)return false;if(seatPaths.has(p))return true;const dyn=p.match(/^([A-Za-z_$][\w$]*)\[\*\]$/);if(dyn&&seatPaths.has(dyn[1]+'.player')&&seatPaths.has(dyn[1]+'.computer'))return true;return false}
  function handLeftIsState(left,ownerRoot){left=unExpr(left);if(!left||!ts.isPropertyAccessExpression(left)||left.name.text!=='handType')return false;return isSeatObjectPath(resolveObj(left.expression,ownerRoot))}
  function winnerLeftIsState(left,ownerRoot){left=unExpr(left);if(!left||!ts.isPropertyAccessExpression(left)||left.name.text!=='winner')return false;const p=resolveObj(left.expression,ownerRoot);return !!p&&winnerPaths.has(p+'.winner')}
  for(const [mn,k] of mm){const m=nodes.get(k);if(!m)continue;let writes=false;function w(n){if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.EqualsToken&&winnerLeftIsState(n.left,m.node))writes=true;ts.forEachChild(n,w)}w(m.node);if(writes)winnerMethods.add(mn)}
  const info={roots,seatPaths,winnerPaths,winnerMethods,seatMethods,methodTouchesRoot,resolveObj,handLeftIsState,winnerLeftIsState};stateInfoCache.set(ck,info);return info;
}
const fileStateInfoCache=new Map();
function filePublicStateInfo(file){
  if(fileStateInfoCache.has(file))return fileStateInfoCache.get(file);
  const sf=ast.get(file);if(!sf){fileStateInfoCache.set(file,null);return null}
  // Tie state roots to the public production hook instead of accepting arbitrary
  // objects in the file. This prevents dead audit helpers from becoming evidence.
  const full=sf.getFullText(), hm=full.match(/__zjh\s*=\s*\{[\s\S]{0,1200}?getState\s*:\s*([A-Za-z_$][\w$]*)/);
  const snapshotName=hm&&hm[1];let snapshotNode=null;
  if(snapshotName){const k=(localSyms.get(file)||new Map()).get(snapshotName);const m=k&&nodes.get(k);if(m)snapshotNode=m.node}
  const byRoot=new Map(), core=new Set(['ready','phase','turn','round','pot','currentBet','winner','outcome','score','player','computer']);
  if(snapshotNode){function w(n){if(ts.isPropertyAccessExpression(n)&&ts.isIdentifier(n.expression)&&core.has(n.name.text)){const r=n.expression.text;if(!byRoot.has(r))byRoot.set(r,new Set());byRoot.get(r).add(n.name.text)}ts.forEachChild(n,w)}w(snapshotNode)}
  const roots=new Set();for(const [r,fields] of byRoot){if(fields.has('player')&&fields.has('computer')&&fields.size>=4)roots.add(r)}
  const winnerMethods=new Set();
  if(roots.size){for(const [name,k] of (localSyms.get(file)||new Map())){const m=nodes.get(k);if(!m||m.kind!=='fn')continue;let writes=false;function w(n){if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.EqualsToken&&/winner$/i.test(nodeText(n.left,file))){const t=nodeText(n.left,file);for(const r of roots)if(new RegExp('^'+r.replace(/[$]/g,'\\$&')+'(?:\\.|\\[)').test(t))writes=true}ts.forEachChild(n,w)}w(m.node);if(writes)winnerMethods.add(name)}}
  const info=roots.size?{roots,winnerMethods}:null;fileStateInfoCache.set(file,info);return info;
}
function localFunctionStateInfo(meta){
  if(meta.kind!=='fn')return null;
  // Standalone production pages expose __zjh at file scope, while gameplay
  // functions that write handType/winner are sibling functions. Use only roots
  // proven by that public production hook, never arbitrary source objects.
  return filePublicStateInfo(meta.file);
}
function stateInfo(meta){return classStateInfo(meta)||localFunctionStateInfo(meta)}
function handSink(left,root,meta){if(!/handType/i.test(nodeText(left,meta.file)))return false;const info=stateInfo(meta);if(!info)return false;if(meta.className&&info.handLeftIsState)return info.handLeftIsState(left,root);const t=nodeText(left,meta.file);if(!meta.className){for(const r of info.roots)if(new RegExp('^'+r.replace(/[$]/g,'\\$&')+'(?:\\.|\\[)').test(t))return true;return false}return false}
function useFeedsWinnerSink(use,root,meta){const info=stateInfo(meta);if(!info)return false;let a=use;for(let depth=0;depth<12&&a&&a!==root;depth++,a=a.parent){if(ts.isCallExpression(a)){if(meta.className&&ts.isPropertyAccessExpression(a.expression)&&a.expression.expression.kind===ts.SyntaxKind.ThisKeyword&&info.winnerMethods.has(a.expression.name.text))return true;if(!meta.className&&ts.isIdentifier(a.expression)&&info.winnerMethods.has(a.expression.text))return true}if(ts.isBinaryExpression(a)&&a.operatorToken.kind===ts.SyntaxKind.EqualsToken&&/winner$/i.test(nodeText(a.left,meta.file))){if(meta.className&&info.winnerLeftIsState&&info.winnerLeftIsState(a.left,root))return true;if(!meta.className){const t=nodeText(a.left,meta.file);for(const r of info.roots)if(new RegExp('^'+r.replace(/[$]/g,'\\$&')+'(?:\\.|\\[)').test(t))return true}}}return false}
function exprVar(root,expr){let a=expr;while(a&&a!==root){if(ts.isVariableDeclaration(a)&&a.initializer&&contains(a.initializer,expr)&&ts.isIdentifier(a.name))return a.name.text;a=a.parent}return null}
function exprFeedsWinner(expr,root,meta){const vn=exprVar(root,expr);if(vn&&varUses(root,vn).some(u=>useFeedsWinnerSink(u,root,meta)))return true;let a=expr;for(let depth=0;depth<12&&a&&a!==root;depth++,a=a.parent){if(useFeedsWinnerSink(a,root,meta))return true}return false}
function reducerHandProperty(prop,root,meta){
  if(!ts.isPropertyAssignment(prop)||propKey(prop.name,meta.file)!=='handType')return false;
  let obj=prop.parent, seatProp=null, outer=null;
  while(obj&&obj!==root){if(ts.isPropertyAssignment(obj)&&(propKey(obj.name,meta.file)==='player'||propKey(obj.name,meta.file)==='computer')){seatProp=obj;break}obj=obj.parent}
  if(!seatProp)return false;outer=seatProp.parent;if(!outer||!ts.isObjectLiteralExpression(outer))return false;
  let returnsState=false,a=outer;while(a&&a!==root){if(ts.isReturnStatement(a)){returnsState=true;break}a=a.parent}if(!returnsState)return false;
  // Require the same returned object to preserve/update an actual state-shaped object, not an isolated audit object.
  let stateLike=false;for(const p of outer.properties){if(ts.isSpreadAssignment(p)&&ts.isIdentifier(p.expression)&&p.expression.text==='state')stateLike=true;if(ts.isPropertyAssignment(p)&&['phase','turn','pot','currentBet','winner','player','computer'].includes(propKey(p.name,meta.file)))stateLike=true}
  return stateLike;
}
let sites=[],handTypeCausal=false,showdownCausal=false;
for(const [owner,meta] of nodes){if(!seen.has(owner)||!['method','fn'].includes(meta.kind))continue;const f=meta.file, root=meta.node;function scan(n){if(isDead(n))return;if(targetCall(n,f)){
  let hand=false,show=false,cur=n,declVar=null;
  while(cur&&cur!==root){const par=cur.parent;if(!par)break;if(ts.isBinaryExpression(par)&&par.operatorToken.kind===ts.SyntaxKind.EqualsToken&&contains(par.right,n)&&handSink(par.left,root,meta))hand=true;if(meta.kind==='fn'&&ts.isPropertyAssignment(par)&&par.initializer&&contains(par.initializer,n)&&reducerHandProperty(par,root,meta))hand=true;if(ts.isVariableDeclaration(par)&&par.initializer&&contains(par.initializer,n)&&ts.isIdentifier(par.name))declVar=par.name.text;cur=par;}
  if(declVar){for(const use of varUses(root,declVar)){let a=use;for(let depth=0;depth<10&&a&&a!==root;depth++,a=a.parent){if(ts.isBinaryExpression(a)&&a.operatorToken.kind===ts.SyntaxKind.EqualsToken&&contains(a.right,use)&&handSink(a.left,root,meta))hand=true;if(meta.kind==='fn'&&(ts.isConditionalExpression(a)||ts.isIfStatement(a)||ts.isCallExpression(a))){const lits=literalsUnder(a);if(lits.has('player')&&lits.has('computer'))show=true}}if(useFeedsWinnerSink(use,root,meta))show=true}}
  let outer=n;for(let depth=0;depth<12&&outer&&outer!==root;depth++,outer=outer.parent){if(ts.isCallExpression(outer)&&ts.isPropertyAccessExpression(outer.expression)&&outer.expression.name.text==='compare'&&exprFeedsWinner(outer,root,meta))show=true;if(meta.kind==='fn'&&ts.isCallExpression(outer)&&ts.isPropertyAccessExpression(outer.expression)&&outer.expression.name.text==='compare'){const vn=exprVar(root,outer);if(vn){for(const u of varUses(root,vn)){let z=u;for(let d=0;d<8&&z&&z!==root;d++,z=z.parent){if(ts.isConditionalExpression(z)||ts.isCallExpression(z)){const lits=literalsUnder(z);if(lits.has('player')&&lits.has('computer'))show=true}}}}}}
  if(exprFeedsWinner(n,root,meta))show=true;
  handTypeCausal=handTypeCausal||hand;showdownCausal=showdownCausal||show;sites.push({owner,file:path.relative(srcRoot,f),pos:n.pos,hand,show,stateRoots:[...(stateInfo(meta)?.roots||[])]});
}ts.forEachChild(n,scan)}scan(root)}
function chain(n){if(ts.isIdentifier(n))return n.text;if(n.kind===ts.SyntaxKind.ThisKeyword)return'this';if(ts.isPropertyAccessExpression(n))return chain(n.expression)+'.'+n.name.text;return ''}
function aliasesFor(root){const a={player:new Set(),computer:new Set(),both:new Set()};function w1(n){if(ts.isVariableDeclaration(n)&&ts.isIdentifier(n.name)&&n.initializer){const q=chain(n.initializer);if(/(?:^|\.)player\.chips$/.test(q))a.player.add(n.name.text);if(/(?:^|\.)computer\.chips$/.test(q))a.computer.add(n.name.text)}ts.forEachChild(n,w1)}w1(root);function sidesRaw(cond){let p=false,c=false;function w(n){if(ts.isPropertyAccessExpression(n)){const q=chain(n);if(/(?:^|\.)player\.chips$/.test(q))p=true;if(/(?:^|\.)computer\.chips$/.test(q))c=true}else if(ts.isIdentifier(n)){if(a.player.has(n.text))p=true;if(a.computer.has(n.text))c=true}ts.forEachChild(n,w)}w(cond);return{p,c}}function w2(n){if(ts.isVariableDeclaration(n)&&ts.isIdentifier(n.name)&&n.initializer){const f=sidesRaw(n.initializer);if(f.p&&f.c)a.both.add(n.name.text)}ts.forEachChild(n,w2)}w2(root);return a}
function chipSides(cond,aliases){let p=false,c=false;function w(n){if(ts.isPropertyAccessExpression(n)){const q=chain(n);if(/(?:^|\.)player\.chips$/.test(q))p=true;if(/(?:^|\.)computer\.chips$/.test(q))c=true}else if(ts.isIdentifier(n)){if(aliases.player.has(n.text))p=true;if(aliases.computer.has(n.text))c=true;if(aliases.both.has(n.text)){p=true;c=true}}ts.forEachChild(n,w)}w(cond);return{p,c}}
function phaseAssignment(node,file){let ok=false;function w(n){if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.EqualsToken&&/phase$/i.test(nodeText(n.left,file))&&ts.isStringLiteralLike(n.right)&&n.right.text==='eliminated')ok=true;if(ts.isPropertyAssignment(n)&&/phase/i.test(nodeText(n.name,file))&&ts.isStringLiteralLike(n.initializer)&&n.initializer.text==='eliminated')ok=true;ts.forEachChild(n,w)}w(node);return ok}
function winnerSymmetry(node,aliases,file){let ok=false;function validWinnerExpr(expr){if(!expr)return false;const txt=nodeText(expr,file), f=chipSides(expr,aliases), lits=literalsUnder(expr);return f.p&&f.c&&lits.has('player')&&lits.has('computer')}function w(n){if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.EqualsToken&&/winner$/i.test(nodeText(n.left,file))&&validWinnerExpr(n.right))ok=true;if(ts.isPropertyAssignment(n)&&/winner/i.test(nodeText(n.name,file))&&validWinnerExpr(n.initializer))ok=true;ts.forEachChild(n,w)}w(node);return ok}
function winnerLiteral(node,expected,file){let ok=false;function w(n){if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.EqualsToken&&/winner$/i.test(nodeText(n.left,file))&&ts.isStringLiteralLike(n.right)&&n.right.text===expected)ok=true;if(ts.isPropertyAssignment(n)&&/winner/i.test(nodeText(n.name,file))&&ts.isStringLiteralLike(n.initializer)&&n.initializer.text===expected)ok=true;ts.forEachChild(n,w)}w(node);return ok}
let symmetricElimination=false,symmetricWinner=false,eliminationSites=[];
let playerDepletion=false,computerDepletion=false,playerDepletionWinner=false,computerDepletionWinner=false;
for(const [owner,meta] of nodes){if(!seen.has(owner))continue;const aliases=aliasesFor(meta.node);function scanElim(n){if(isDead(n))return;if(ts.isIfStatement(n)){const f=chipSides(n.expression,aliases);if(phaseAssignment(n.thenStatement,meta.file)){
  if(f.p&&f.c){symmetricElimination=true;const w=winnerSymmetry(n.thenStatement,aliases,meta.file);symmetricWinner=symmetricWinner||w;eliminationSites.push({owner,file:path.relative(srcRoot,meta.file),pos:n.pos,kind:'combined',winnerSymmetric:w})}
  else if(f.p&&!f.c){const w=winnerLiteral(n.thenStatement,'computer',meta.file);playerDepletion=true;playerDepletionWinner=playerDepletionWinner||w;eliminationSites.push({owner,file:path.relative(srcRoot,meta.file),pos:n.pos,kind:'player-depleted',winnerOpposite:w})}
  else if(f.c&&!f.p){const w=winnerLiteral(n.thenStatement,'player',meta.file);computerDepletion=true;computerDepletionWinner=computerDepletionWinner||w;eliminationSites.push({owner,file:path.relative(srcRoot,meta.file),pos:n.pos,kind:'computer-depleted',winnerOpposite:w})}
}}else if(ts.isConditionalExpression(n)){const f=chipSides(n.condition,aliases);if(f.p&&f.c){const par=n.parent;const targetPhase=(ts.isBinaryExpression(par)&&par.operatorToken.kind===ts.SyntaxKind.EqualsToken&&/phase$/i.test(nodeText(par.left,meta.file)))||(ts.isPropertyAssignment(par)&&/phase/i.test(nodeText(par.name,meta.file)));if(targetPhase&&ts.isStringLiteralLike(n.whenTrue)&&n.whenTrue.text==='eliminated'){symmetricElimination=true;eliminationSites.push({owner,file:path.relative(srcRoot,meta.file),pos:n.pos,kind:'combined-conditional',winnerSymmetric:false})}}}ts.forEachChild(n,scanElim)}scanElim(meta.node)}
if(playerDepletion&&computerDepletion)symmetricElimination=true;
if(playerDepletionWinner&&computerDepletionWinner)symmetricWinner=true;
// Winner selection may legitimately live in a different reachable method than the phase
// assignment (e.g. Deal detects either depleted seat and dispatches SETTLE, while the
// reducer writes phase='eliminated').  Recognize that split architecture instead of
// requiring the winner expression to sit inside the exact same AST block.
for(const [owner,meta] of nodes){if(!seen.has(owner))continue;const aliases=aliasesFor(meta.node);if(winnerSymmetry(meta.node,aliases,meta.file)){symmetricWinner=true;eliminationSites.push({owner,file:path.relative(srcRoot,meta.file),pos:meta.node.pos,kind:'reachable-symmetric-winner',winnerSymmetric:true})}}
console.log(JSON.stringify({ok:!!target&&seen.has(target),target,handTypeCausal,showdownCausal,sites,reachableCount:seen.size,symmetricElimination,symmetricWinner,eliminationSites}));
"""
    try:
        with tempfile.TemporaryDirectory(prefix="zjh-causal-link-") as td:
            script=Path(td)/"link.js"; script.write_text(js,encoding="utf-8")
            env=os.environ.copy()
            ts_runtime=_typescript_runtime_path(repo)
            if ts_runtime:
                env["WEB_UT_TYPESCRIPT_PATH"]=ts_runtime
            cp=subprocess.run([node,str(script),str(src_root),str(defining),name],cwd=str(repo),env=env,capture_output=True,text=True,encoding="utf-8",errors="replace",timeout=12,check=False)
        value=json.loads((cp.stdout or "").strip() or "{}")
        if not isinstance(value,dict): return {"ok":False,"reason":"invalid causal probe output"}
        root_text=str(repo.resolve())
        def clean(v):
            if isinstance(v,str):
                return v.replace(root_text+os.sep,"").replace(root_text+"/","").replace(root_text,"")
            if isinstance(v,list): return [clean(x) for x in v]
            if isinstance(v,dict): return {k:clean(x) for k,x in v.items()}
            return v
        return clean(value)
    except Exception as exc:
        return {"ok":False,"handTypeCausal":False,"showdownCausal":False,"reason":f"causal probe failed: {type(exc).__name__}: {exc}"}


def _rule_engine_probe() -> dict[str, Any]:
    """Execute rule candidates from the actual production entry, then prove gameplay use."""
    repo=_repo_root(); node=shutil.which("node")
    if repo is None or node is None:
        return {"ok":False,"error":"repo or node unavailable"}
    plan=_production_source_plan(repo)
    module_files=[Path(x) for x in (plan.get('files') or [])]
    inline_source=_unwrap_inline_entry(str(plan.get('text') or '')) if plan.get('mode')=='inline' else ''
    if not module_files and not inline_source.strip():
        return {"ok":False,"error":"production source unavailable"}
    js=r"""
const fs=require('fs'),vm=require('vm');let ts;
try{const forced=process.env.WEB_UT_TYPESCRIPT_PATH;ts=forced?require(forced):require(require.resolve('typescript',{paths:[process.cwd()]}))}catch(e){try{const cp=require('child_process'),path=require('path');const root=cp.execFileSync(process.platform==='win32'?'npm.cmd':'npm',['root','-g'],{encoding:'utf8'}).trim();ts=require(path.join(root,'typescript'))}catch(e2){console.log(JSON.stringify({error:'typescript runtime unavailable: '+e2.message,rows:[]}));process.exit(0)}}
const files=process.argv.slice(2);
const H={
 highLo:[['Q','H'],['10','D'],['7','S']],highHi:[['A','H'],['K','D'],['9','S']],pairLo:[['7','H'],['7','D'],['Q','S']],pairHi:[['9','H'],['9','D'],['K','S']],
 straightLo:[['4','H'],['5','D'],['6','S']],straightHi:[['8','H'],['9','D'],['10','S']],flushLo:[['Q','D'],['10','D'],['7','D']],flushHi:[['A','H'],['K','H'],['9','H']],
 sfLo:[['4','H'],['5','H'],['6','H']],sfHi:[['8','D'],['9','D'],['10','D']],tripsLo:[['8','H'],['8','D'],['8','S']],tripsHi:[['Q','H'],['Q','D'],['Q','S']],
 a23:[['A','H'],['2','D'],['3','S']],s234:[['2','H'],['3','D'],['4','S']],jqk:[['J','H'],['Q','D'],['K','S']],qka:[['Q','H'],['K','D'],['A','S']],ka2:[['K','H'],['A','D'],['2','S']],
 suitA:[['A','H'],['K','D'],['9','S']],suitB:[['A','S'],['K','C'],['9','D']]
};
function cards(a){return a.map(([rank,suit],i)=>({id:'ut-'+i,rank,suit,faceUp:true}))}
function leaves(v,p='',o={}){if(v==null)return o;if(['number','string','boolean'].includes(typeof v)){o[p]=v;return o}if(Array.isArray(v)){for(let i=0;i<v.length;i++)leaves(v[i],p+'['+i+']',o);return o}if(typeof v==='object'){for(const k of Object.keys(v))if(typeof v[k]!=='function')leaves(v[k],p?p+'.'+k:k,o);return o}return o}
const expectedType={highLo:'单张',highHi:'单张',pairLo:'对子',pairHi:'对子',straightLo:'顺子',straightHi:'顺子',flushLo:'金花',flushHi:'金花',sfLo:'同花顺',sfHi:'同花顺',tripsLo:'豹子',tripsHi:'豹子',a23:'顺子',s234:'顺子',jqk:'顺子',qka:'顺子',ka2:'单张'};
function typePath(outputs){const maps={};for(const [k,v] of Object.entries(outputs))maps[k]=leaves(v);const core=['highLo','highHi','pairLo','pairHi','straightLo','straightHi','flushLo','flushHi','sfLo','sfHi','tripsLo','tripsHi'];const paths=new Set(core.flatMap(k=>Object.keys(maps[k]||{})));for(const p of paths){if(core.every(k=>maps[k]&&maps[k][p]===expectedType[k]))return p}return null}
function categoryPath(outputs){const maps={};for(const [k,v] of Object.entries(outputs))maps[k]=leaves(v);const paths=new Set(Object.values(maps).flatMap(x=>Object.keys(x)));for(const p of paths){const vals={high:maps.highLo[p],pair:maps.pairLo[p],straight:maps.straightLo[p],flush:maps.flushLo[p],sf:maps.sfLo[p],trips:maps.tripsLo[p]};if(Object.values(vals).every(v=>v!==undefined)&&new Set(Object.values(vals).map(JSON.stringify)).size===6)return {path:p,vals}}return null}
function sign(v){const n=Number(v);return Number.isFinite(n)?Math.sign(n):null}
const orderTests=[['tripsHi','sfHi',1],['sfHi','flushHi',1],['flushHi','straightHi',1],['straightHi','pairHi',1],['pairHi','highHi',1]];
const tieTests=[['tripsHi','tripsLo',1],['sfHi','sfLo',1],['flushHi','flushLo',1],['straightHi','straightLo',1],['pairHi','pairLo',1],['highHi','highLo',1]];
function runCompare(call){const run=tests=>tests.map(([a,b,w])=>{let got=null,err=null;try{got=sign(call(cards(H[a]),cards(H[b])))}catch(e){err=String(e)}return{a,b,w,got,ok:got===w,err}});const order=run(orderTests),tie=run(tieTests);let noSuit=null;try{noSuit=sign(call(cards(H.suitA),cards(H.suitB)))}catch(e){}let a23_234=null,qka_jqk=null;try{a23_234=sign(call(cards(H.a23),cards(H.s234)));qka_jqk=sign(call(cards(H.qka),cards(H.jqk)))}catch(e){}return{orderOk:order.every(x=>x.ok),tieOk:tie.every(x=>x.ok)&&noSuit===0,noSuit,order,tie,edgeCompareOk:a23_234===-1&&qka_jqk===1,a23_234,qka_jqk}}
const path=require('path');
const moduleCache=new Map();
const extensions=['.ts','.tsx','.js','.jsx'];
function resolveLocal(from,spec){if(!spec.startsWith('.'))return null;const base=path.resolve(path.dirname(from),spec);for(const cand of [base,...extensions.map(e=>base+e),...extensions.map(e=>path.join(base,'index'+e))]){if(fs.existsSync(cand)&&fs.statSync(cand).isFile())return cand;}return null}
function callableSpecs(src,file){
  const sf=ts.createSourceFile(file,src,ts.ScriptTarget.Latest,true), specs=[];
  sf.forEachChild(n=>{
    if(ts.isFunctionDeclaration(n)&&n.name)specs.push({key:n.name.text,expr:n.name.text});
    else if(ts.isVariableStatement(n))for(const d of n.declarationList.declarations){
      if(ts.isIdentifier(d.name)&&d.initializer&&(ts.isArrowFunction(d.initializer)||ts.isFunctionExpression(d.initializer)))specs.push({key:d.name.text,expr:d.name.text});
    } else if(ts.isClassDeclaration(n)&&n.name){
      const cn=n.name.text;
      for(const m of n.members){if(ts.isMethodDeclaration(m)&&m.name&&ts.isIdentifier(m.name)){const mn=m.name.text;specs.push({key:cn+'#'+mn,expr:'(...__utArgs)=>'+cn+'.prototype.'+mn+'.apply(Object.create('+cn+'.prototype),__utArgs)'})}}
    }
  });
  const seen=new Set();return specs.filter(x=>/^[A-Za-z_$][\w$]*(?:#[A-Za-z_$][\w$]*)?$/.test(x.key)&&!seen.has(x.key)&&(seen.add(x.key),true));
}
const dummyFn=function(){return dummyProxy};
const dummyProxy=new Proxy(dummyFn,{get(){return dummyProxy},apply(){return dummyProxy},construct(){return dummyProxy}});
function syncValue(v){if(v&&typeof v.then==='function'){try{v.catch(()=>{})}catch{}throw new Error('async candidate');}return v;}
function loadModule(file){
  file=path.resolve(file); if(moduleCache.has(file))return moduleCache.get(file).exports;
  let src=fs.readFileSync(file,'utf8'), module={exports:{}}; moduleCache.set(file,module);
  const locals=callableSpecs(src,file);
  let code=ts.transpileModule(src,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020,esModuleInterop:true,jsx:ts.JsxEmit.ReactJSX}}).outputText;
  if(locals.length){
    const pairs=locals.map(x=>JSON.stringify(x.key)+':(()=>{try{return '+x.expr+'}catch(e){return undefined}})()').join(',');
    code+='\n;try{module.exports.__utLocals={'+pairs+'}}catch(__utErr){}\n';
  }
  const localRequire=(spec)=>{const target=resolveLocal(file,String(spec));if(target)return loadModule(target);return dummyProxy};
  const sandbox={module,exports:module.exports,require:localRequire,console,Math,Map,Set,Object,Array,Number,String,Boolean,JSON,Date,Promise,RegExp,Error,Symbol,BigInt,setTimeout,clearTimeout,performance:{now:()=>0},devicePixelRatio:1,innerWidth:1280,innerHeight:800,requestAnimationFrame:()=>0,cancelAnimationFrame:()=>{},addEventListener:()=>{},removeEventListener:()=>{},window:dummyProxy,document:dummyProxy,navigator:dummyProxy,THREE:dummyProxy,React:dummyProxy,ReactDOM:dummyProxy,HTMLElement:function(){},HTMLCanvasElement:function(){}};
  vm.runInNewContext(code,sandbox,{filename:file,timeout:1500}); return module.exports;
}
let rows=[];
for(const file of files){let exportsObj;try{exportsObj=loadModule(file)}catch(e){continue}
 const pool=new Map();
 for(const [name,fn] of Object.entries(exportsObj||{}))if(name!=='__utLocals'&&typeof fn==='function')pool.set(name,fn);
 for(const [name,fn] of Object.entries((exportsObj&&exportsObj.__utLocals)||{}))if(typeof fn==='function'&&!pool.has(name))pool.set(name,fn);
 for(const [name,fn] of pool){const row={file,name};
  try{const outputs={};for(const [k,h] of Object.entries(H))outputs[k]=syncValue(fn(cards(h)));const tp=typePath(outputs),cp=categoryPath(outputs);if(tp&&cp){const method=(outputs.highHi&&typeof outputs.highHi.compare==='function')?runCompare((a,b)=>syncValue(fn(a).compare(fn(b)))):null;const edgeOk=expectedType.a23===leaves(outputs.a23)[tp]&&expectedType.qka===leaves(outputs.qka)[tp]&&expectedType.ka2===leaves(outputs.ka2)[tp]&&(!method||method.edgeCompareOk);row.evaluator={typePath:tp,categoryPath:cp.path,categories:cp.vals,typesOk:true,edgeOk,method};}}catch(e){}
  try{const cmp=runCompare((a,b)=>syncValue(fn(a,b)));if([...cmp.order,...cmp.tie].some(x=>x.got!==null)||cmp.noSuit!==null||cmp.a23_234!==null||cmp.qka_jqk!==null)row.comparator=cmp;}catch(e){}
  rows.push(row);
 }
}
console.log(JSON.stringify({rows}));
"""
    try:
        with tempfile.TemporaryDirectory(prefix="zjh-rule-engine-") as td:
            td_path=Path(td)
            script=td_path/"probe.js"; script.write_text(js,encoding="utf-8")
            if inline_source.strip():
                prod_root=td_path/"prod"; prod_root.mkdir()
                inline_file=prod_root/"main.js"; inline_file.write_text(inline_source,encoding="utf-8")
                probe_file=prod_root/"rules.js"; probe_file.write_text(_inline_rule_prefix(inline_source),encoding="utf-8")
                files=[probe_file]
            else:
                inline_file=None
                files=module_files
                prod_root=(repo/"src").resolve()
            env=os.environ.copy()
            ts_runtime=_typescript_runtime_path(repo)
            if ts_runtime:
                env["WEB_UT_TYPESCRIPT_PATH"]=ts_runtime
            cp=subprocess.run([node,str(script),*map(str,files)],cwd=str(repo),env=env,capture_output=True,text=True,encoding="utf-8",errors="replace",timeout=25,check=False)
            payload=json.loads((cp.stdout or "").strip() or "{}")
            if payload.get("error"):
                return {"ok":False,"error":str(payload.get("error"))}
            evaluators=[]; comparators=[]
            for row in payload.get("rows") or []:
                if not isinstance(row,dict):
                    continue
                file=str(row.get("file") or ""); name=str(row.get("name") or "")
                ev=row.get("evaluator") if isinstance(row.get("evaluator"),dict) else None
                cmp=row.get("comparator") if isinstance(row.get("comparator"),dict) else None
                if ev:
                    link=_causal_rule_link(repo,str(inline_file) if inline_file is not None else file,name,prod_root)
                    if inline_source.strip():
                        display_file="index.html::<inline>"
                    else:
                        try: display_file=str(Path(file).resolve().relative_to(repo.resolve())).replace(os.sep,"/")
                        except Exception: display_file=Path(file).name
                    evaluators.append({"name":name,"file":display_file,"probe":ev,"link":link})
                if cmp and (cmp.get("orderOk") or cmp.get("tieOk")):
                    link=_causal_rule_link(repo,str(inline_file) if inline_file is not None else file,name,prod_root)
                    if inline_source.strip():
                        display_file="index.html::<inline>"
                    else:
                        try: display_file=str(Path(file).resolve().relative_to(repo.resolve())).replace(os.sep,"/")
                        except Exception: display_file=Path(file).name
                    comparators.append({"name":name,"file":display_file,"probe":cmp,"link":link})
            evaluator=next((x for x in evaluators if x["probe"].get("typesOk") and x["link"].get("ok") and x["link"].get("handTypeCausal")),None)
            comparator=next((x for x in comparators if x["probe"].get("orderOk") and x["link"].get("ok") and x["link"].get("showdownCausal")),None)
            compare_probe=None; compare_source=None
            if comparator:
                compare_probe=comparator["probe"]; compare_source={"kind":"function","name":comparator["name"],"file":comparator["file"],"link":comparator["link"]}
            elif evaluator and evaluator["link"].get("showdownCausal") and isinstance(evaluator["probe"].get("method"),dict):
                compare_probe=evaluator["probe"]["method"]; compare_source={"kind":"evaluator.compare","name":evaluator["name"],"file":evaluator["file"],"link":evaluator["link"]}
            return {"ok":bool(evaluator),"evaluator":evaluator,"compare":compare_probe,"compareSource":compare_source,"candidates":{"evaluators":evaluators,"comparators":comparators},"productionMode":plan.get('mode')}
    except Exception as exc:
        return {"ok":False,"error":f"rule engine probe failed: {type(exc).__name__}: {exc}"}



async def _readonly_hook_probe(page) -> dict[str, Any]:
    """Actively verify public hooks are observation-only, with a no-call drift control."""
    try:
        return await page.evaluate(r"""async () => {
          const z=window.__zjh,s=window.__scene;
          if(!z||!s||typeof z.getState!=='function'||typeof s.getState!=='function') return {ok:false,error:'missing getState hook'};
          const setters=[]; const calls=[]; const discoveryErrors=[]; const seen=new WeakSet();
          const game=()=>JSON.stringify(z.getState());
          const scene=()=>JSON.stringify(s.getState());
          const ui=()=>JSON.stringify({
            text:(document.querySelector('[data-testid="game-status"]')?.textContent||'')+'|'+(document.querySelector('[data-testid="turn"]')?.textContent||''),
            buttons:['deal','peek','call','raise','fold','compare'].map(k=>{const b=document.querySelector(`[data-testid="${k}-btn"]`);return [k,b?!!b.disabled:null]}),
            root:document.getElementById('root')?.getAttribute('data-phase')||'',
            winner:document.getElementById('root')?.getAttribute('data-winner')||''
          });
          const discoveryGame0=game(), discoveryScene0=scene(), discoveryUI0=ui();
          function walk(v,path,depth,receiver=v){
            const tv=typeof v;
            if(!v||(tv!=='object'&&tv!=='function')||depth>10||seen.has(v))return; seen.add(v);
            for(const k of Reflect.ownKeys(v)){
              const key=String(k), d=Object.getOwnPropertyDescriptor(v,k); if(!d)continue;
              if(typeof d.set==='function') setters.push(path+'.'+key);
              let x;
              if('value' in d) x=d.value;
              else if(typeof d.get==='function'){
                try{x=d.get.call(receiver)}catch(e){discoveryErrors.push(path+'.'+key+':'+String(e&&e.name||e));continue}
              }else continue;
              if(typeof x==='function'){
                if(!(depth===0&&key==='getState')) calls.push({path:path+'.'+key,owner:receiver,key,fn:x});
                walk(x,path+'.'+key,depth+1,x);
              }else if(x&&typeof x==='object') walk(x,path+'.'+key,depth+1,x);
            }
            const proto=Object.getPrototypeOf(v);
            if(proto&&proto!==Object.prototype&&proto!==Function.prototype&&proto!==Array.prototype) walk(proto,path+'.<proto>',depth+1,receiver);
          }
          walk(z,'__zjh',0,z); walk(s,'__scene',0,s);
          const discoveryGame1=game(), discoveryScene1=scene(), discoveryUI1=ui();
          const discoveryMutation=discoveryGame0!==discoveryGame1||discoveryScene0!==discoveryScene1||discoveryUI0!==discoveryUI1;
          const z0=game(),s0=scene(),u0=ui(),z1=game(),s1=scene(),u1=ui();
          let cloneIsolation=true;
          try{const c=z.getState();if(c&&c.player)c.player.chips=-987654;if(c)c.pot=-12345;cloneIsolation=game()===z1}catch(e){cloneIsolation=false}
          let sceneIsolation=true;
          try{const c=s.getState();if(c&&c.camera&&c.camera.position)c.camera.position.x=987654;sceneIsolation=scene()===s1}catch(e){sceneIsolation=false}

          // Establish a same-duration no-call control so normal idle animation/damping is not
          // falsely attributed to a read-only function invocation.
          await new Promise(r=>setTimeout(r,180));
          const c0={g:game(),sc:scene(),ui:ui()}; await new Promise(r=>setTimeout(r,150)); const c1={g:game(),sc:scene(),ui:ui()};
          const natural={game:c0.g!==c1.g,scene:c0.sc!==c1.sc,ui:c0.ui!==c1.ui};
          const mutations=[]; const errors=[];
          const argSets=[[],[0],[1],['player'],['computer'],[[]],[{}],['player',0],['player',[]],[0,0],[{},{}],['player',0,'A'],['player',0,'A','H'],['computer',0,'K','S'],[0,0,0],[0,0,0,0],[1,1,1,1],[{},0,'A','H']];
          outer: for(const item of calls){
            for(let i=0;i<argSets.length;i++){
              const before={g:game(),sc:scene(),ui:ui()};
              try{
                const ret=item.fn.apply(item.owner,argSets[i]);
                if(ret&&typeof ret.then==='function') await Promise.race([Promise.resolve(ret).catch(()=>{}),new Promise(r=>setTimeout(r,120))]);
              }catch(e){errors.push(item.path+'#'+i+':'+String(e&&e.name||e));}
              await new Promise(r=>setTimeout(r,150));
              let after; try{after={g:game(),sc:scene(),ui:ui()}}catch(e){mutations.push({path:item.path,args:i,reason:'state/UI read failed after call'});break outer}
              const gameChanged=!natural.game&&before.g!==after.g;
              const sceneChanged=!natural.scene&&before.sc!==after.sc;
              const uiChanged=!natural.ui&&before.ui!==after.ui;
              if(gameChanged||sceneChanged||uiChanged){mutations.push({path:item.path,args:i,gameChanged,sceneChanged,uiChanged,natural});break outer}
            }
          }
          return {
            ok:setters.length===0&&mutations.length===0&&!discoveryMutation&&z0===z1&&s0===s1&&u0===u1&&cloneIsolation&&sceneIsolation,
            setters,mutations,naturalDrift:natural,discoveryMutation,discoveryErrors:discoveryErrors.slice(0,12),callablePaths:calls.map(x=>x.path),callableProbeErrors:errors.slice(0,12),
            gameReadPure:z0===z1,sceneReadPure:s0===s1,uiReadStable:u0===u1,cloneIsolation,sceneIsolation,zKeys:Reflect.ownKeys(z).map(String),sKeys:Reflect.ownKeys(s).map(String)
          };
        }""")
    except Exception as exc:
        return {"ok":False,"error":f"read-only hook probe failed: {type(exc).__name__}: {exc}"}


async def _seeded_round(page, seed: int, mode: str) -> dict[str, Any]:
    """Reload, then patch only page-local Math.random before Deal; no persistent marker is exposed."""
    try:
        await page.reload(wait_until="domcontentloaded", timeout=8000)
        await _wait_state(page,lambda x:bool(x.get('ready')),3500)
        await page.evaluate(r"""seed => {
          let x=(Number(seed)>>>0)||1;
          const seeded=()=>{x=(Math.imul(1664525,x)+1013904223)>>>0;return x/4294967296;};
          Object.defineProperty(seeded,'name',{value:'random'});
          Math.random=seeded;
        }""", seed)
        await _click(page,'[data-testid="deal-btn"]')
        st=await _wait_state(page,lambda x:x.get('phase')=='player_turn' and x.get('turn')=='player',5000)
        if not st: return {"ok":False,"seed":seed,"mode":mode,"reason":"no player turn"}
        ev=evaluate_hand((st.get('computer') or {}).get('cards') or [])
        if not ev: return {"ok":False,"seed":seed,"mode":mode,"reason":"computer hand unavailable"}
        actions=[]
        target_steps=3 if mode=='high' else 1
        for step in range(target_steps):
            cur=await _zjh(page)
            if not cur or cur.get('phase')!='player_turn': break
            human='call' if mode=='low' else ('raise' if cur.get('canRaise') else ('call' if cur.get('canCall') else None))
            if not human: break
            await _click(page,f'[data-testid="{human}-btn"]')
            mid=await _wait_state(page,lambda x:x.get('phase')=='computer_turn' and x.get('turn')=='computer',900,20)
            post=await _wait_state(page,lambda x:x.get('phase') in {'player_turn','round_over','eliminated'} and x.get('turn')!='computer',4300)
            act=_infer_ai_action(mid,post)
            if mid and post and act:
                mc0=(mid.get('computer') or {}); mc1=(post.get('computer') or {})
                actions.append({"step":step,"human":human,"action":act,"currentBet":_finite_num(mid.get('currentBet')),"pot":_finite_num(mid.get('pot')),"chips":_finite_num(mc0.get('chips')),
                                "computerChipDelta":(_finite_num(mc0.get('chips')) or 0)-(_finite_num(mc1.get('chips')) or 0),
                                "computerRoundBetDelta":(_finite_num(mc1.get('roundBet')) or 0)-(_finite_num(mc0.get('roundBet')) or 0),
                                "potDelta":(_finite_num(post.get('pot')) or 0)-(_finite_num(mid.get('pot')) or 0)})
            if not post or post.get('phase')!='player_turn': break
        signature=[(str(c.get('rank')),str(c.get('suit'))) for c in ((st.get('computer') or {}).get('cards') or []) if isinstance(c,dict)]
        return {"ok":bool(actions),"seed":seed,"mode":mode,"strength":ev[0]*20+(ev[1][0] if ev[1] else 0),"type":ev[2],"cards":(st.get('computer') or {}).get('cards') or [],"signature":signature,"actions":actions}
    except Exception as exc:
        return {"ok":False,"seed":seed,"mode":mode,"reason":f"{type(exc).__name__}: {exc}"}


async def _natural_ai_round(page, mode: str) -> dict[str, Any]:
    """Observe one fresh real round without replacing any product randomness."""
    try:
        await page.reload(wait_until="domcontentloaded", timeout=8000)
        await _wait_state(page,lambda x:bool(x.get('ready')),3500)
        await _click(page,'[data-testid="deal-btn"]')
        st=await _wait_state(page,lambda x:x.get('phase')=='player_turn' and x.get('turn')=='player',5000)
        if not st: return {"ok":False,"mode":mode,"reason":"no player turn"}
        ev=evaluate_hand((st.get('computer') or {}).get('cards') or [])
        if not ev: return {"ok":False,"mode":mode,"reason":"computer hand unavailable"}
        target_steps=3 if mode=='high' else 1
        actions=[]
        for step in range(target_steps):
            cur=await _zjh(page)
            if not cur or cur.get('phase')!='player_turn': break
            human='call' if mode=='low' else ('raise' if cur.get('canRaise') else ('call' if cur.get('canCall') else None))
            if not human: break
            await _click(page,f'[data-testid="{human}-btn"]')
            mid=await _wait_state(page,lambda x:x.get('phase')=='computer_turn' and x.get('turn')=='computer',900,20)
            post=await _wait_state(page,lambda x:x.get('phase') in {'player_turn','round_over','eliminated'} and x.get('turn')!='computer',4300)
            act=_infer_ai_action(mid,post)
            if mid and post and act:
                mc0=(mid.get('computer') or {}); mc1=(post.get('computer') or {})
                actions.append({"step":step,"human":human,"action":act,"currentBet":_finite_num(mid.get('currentBet')),"pot":_finite_num(mid.get('pot')),"chips":_finite_num(mc0.get('chips')),
                                "computerChipDelta":(_finite_num(mc0.get('chips')) or 0)-(_finite_num(mc1.get('chips')) or 0),
                                "computerRoundBetDelta":(_finite_num(mc1.get('roundBet')) or 0)-(_finite_num(mc0.get('roundBet')) or 0),
                                "potDelta":(_finite_num(post.get('pot')) or 0)-(_finite_num(mid.get('pot')) or 0)})
            if not post or post.get('phase')!='player_turn': break
        cards=(st.get('computer') or {}).get('cards') or []
        signature=[(str(c.get('rank')),str(c.get('suit'))) for c in cards if isinstance(c,dict)]
        return {"ok":bool(actions),"mode":mode,"strength":ev[0]*20+(ev[1][0] if ev[1] else 0),"type":ev[2],"cards":cards,"signature":signature,"actions":actions}
    except Exception as exc:
        return {"ok":False,"mode":mode,"reason":f"{type(exc).__name__}: {exc}"}


def _find_ai_pairs(rows: list[dict[str, Any]]) -> tuple[Any,Any]:
    strength_pair=None; context_pair=None
    usable=[r for r in rows if r.get('ok') and r.get('actions')]
    # Strength effect: compare *all* real AI decisions that occurred at the same
    # betting pressure.  Using only the highest-pressure action from each round can
    # create a false negative: a weak hand may fold at 80 while a stronger hand
    # correctly continues to 100, so their final observed pressures differ even
    # though the decisive 80-vs-80 actions already prove hand-strength dependence.
    for i,a in enumerate(usable):
        a_actions=[x for x in (a.get('actions') or []) if isinstance(x,dict)]
        for b in usable[i+1:]:
            if abs(float(a.get('strength',0))-float(b.get('strength',0)))<4: continue
            b_actions=[x for x in (b.get('actions') or []) if isinstance(x,dict)]
            for aa in a_actions:
                ap=_finite_num(aa.get('currentBet'))
                if ap is None: continue
                for bb in b_actions:
                    bp=_finite_num(bb.get('currentBet'))
                    if bp is None: continue
                    if abs(ap-bp)<=1e-6 and aa.get('action')!=bb.get('action'):
                        strength_pair=(a,b,aa,bb); break
                if strength_pair: break
            if strength_pair: break
        if strength_pair: break
    # Context effect fallback: similar independently calculated strength, materially different real bet pressure, different action.
    for a in usable:
        aa=_ai_decision_action(a); ap=_finite_num(aa.get('currentBet'))
        for b in usable:
            if a is b: continue
            bb=_ai_decision_action(b); bp=_finite_num(bb.get('currentBet'))
            if ap is None or bp is None: continue
            similar=bool(a.get('type')==b.get('type') and abs(float(a.get('strength',0))-float(b.get('strength',0)))<=2)
            if similar and abs(ap-bp)>1e-6 and aa.get('action')!=bb.get('action'):
                context_pair=(a,b); break
        if context_pair: break
    return strength_pair,context_pair


def _ai_decision_action(row: dict[str, Any] | None) -> dict[str, Any]:
    """Use the highest-pressure observed AI decision from one real round."""
    actions=(row or {}).get('actions') if isinstance(row,dict) else None
    if not isinstance(actions,list) or not actions: return {}
    valid=[a for a in actions if isinstance(a,dict)]
    if not valid: return {}
    return max(valid,key=lambda a: (_finite_num(a.get('currentBet')) or -1.0, int(a.get('step') or 0)))


async def _probe_ai_behavior_seeded(page, max_seeds: int = 8) -> dict[str, Any]:
    """Observe AI dependence on both hand strength and bet pressure with bounded rounds.

    The older probe searched many low-pressure rounds, where sensible AIs often make the
    same action for most hands.  That could require dozens of reloads.  Here we sample
    the first AI decision at a higher, but still normal, pressure (player Raise), which
    naturally separates weak/medium/strong hands much faster.  For context evidence the
    same seed is replayed once at low pressure (player Call), so cards/chips start from
    the same fresh-page baseline and pressure is the only intended difference.
    """
    low_rows=[]; high_rows=[]; context_pair=None; strength_pair=None
    replay_a=await _seeded_round(page,1901,'low')
    replay_b=await _seeded_round(page,1901,'low')
    replayable=bool(replay_a.get('ok') and replay_b.get('ok') and replay_a.get('signature')==replay_b.get('signature'))
    if replayable:
        for seed in range(1001,1001+max_seeds):
            high=await _seeded_round(page,seed,'high')
            if high.get('ok'):
                high_rows.append(high)
                # Strength effect at the same real pressure: different independent hand
                # strengths must produce a different first computer action.
                ha=_ai_decision_action(high)
                hp=_finite_num(ha.get('currentBet'))
                # Look across every decision in both high-pressure rounds, not just
                # the last/highest-pressure one.  This preserves the causal variable
                # (same currentBet) when a weak hand exits earlier by folding.
                for prev in high_rows[:-1]:
                    if abs(float(prev.get('strength',0))-float(high.get('strength',0)))<4: continue
                    for pa in [x for x in (prev.get('actions') or []) if isinstance(x,dict)]:
                        pp=_finite_num(pa.get('currentBet'))
                        if pp is None: continue
                        for cur_a in [x for x in (high.get('actions') or []) if isinstance(x,dict)]:
                            cp=_finite_num(cur_a.get('currentBet'))
                            if cp is None: continue
                            if abs(pp-cp)<=1e-6 and pa.get('action')!=cur_a.get('action'):
                                strength_pair=(prev,high,pa,cur_a); break
                        if strength_pair: break
                    if strength_pair: break
                # Context effect: replay exactly the same cards from a fresh page at
                # low pressure and require a different action when pressure differs.
                if context_pair is None:
                    low=await _seeded_round(page,seed,'low')
                    if low.get('ok'):
                        low_rows.append(low)
                        la=_ai_decision_action(low)
                        lp=_finite_num(la.get('currentBet'))
                        if low.get('signature')==high.get('signature') and lp is not None and hp is not None and abs(lp-hp)>1e-6 and la.get('action')!=ha.get('action'):
                            context_pair=(low,high,ha)
            if strength_pair and context_pair:
                break
    natural_rows=[]; natural_strength=None; natural_context=None
    if not (replayable and strength_pair and context_pair):
        # Compatibility fallback for crypto/custom RNG.  Keep it bounded and use the
        # high-pressure mode half the time so action diversity appears sooner.
        for i in range(12):
            mode='high' if i%2==0 else 'low'
            row=await _natural_ai_round(page,mode)
            if row.get('ok'): natural_rows.append(row)
            natural_strength,natural_context=_find_ai_pairs(natural_rows)
            if natural_strength and natural_context: break
    exact_ok=bool(replayable and strength_pair and context_pair)
    fallback_ok=bool(natural_strength and natural_context)
    all_rows=[replay_a,replay_b,*high_rows,*low_rows,*natural_rows]
    def bet_evidence(rows):
        for row in rows:
            if not isinstance(row,dict): continue
            for a in row.get('actions') or []:
                if not isinstance(a,dict) or a.get('action') not in {'call','raise'}: continue
                cd=_finite_num(a.get('computerChipDelta')); rd=_finite_num(a.get('computerRoundBetDelta')); pd=_finite_num(a.get('potDelta'))
                if cd is not None and rd is not None and pd is not None and cd>0 and abs(cd-rd)<1e-6 and abs(cd-pd)<1e-6:
                    return {"ok":True,"row":row,"action":a}
        return None
    accounting=bet_evidence(all_rows)
    if accounting is None:
        # Do not let a fold/compare make R32 vacuous, but cap the extra search.
        extra=[]
        for seed in range(2201,2207):
            row=await _seeded_round(page,seed,'low') if replayable else await _natural_ai_round(page,'low')
            if row.get('ok'): extra.append(row)
            accounting=bet_evidence(extra)
            if accounting: break
        all_rows.extend(extra)
    return {"ok":bool(exact_ok or fallback_ok),"mode":"replay" if exact_ok else ("observational" if fallback_ok else "insufficient"),"replayable":replayable,"replay":(replay_a,replay_b),"strengthPair":strength_pair or natural_strength,"contextPair":context_pair or natural_context,"lowRows":low_rows,"highRows":high_rows,"naturalRows":natural_rows,"betAccounting":accounting}


async def _combine_before_after_png(page, before: bytes, after: bytes) -> bytes:
    """Compose two screenshots side by side in-browser; no image library dependency."""
    if not before or not after:
        return after or before
    try:
        payload=await page.evaluate(r"""async ([a,b])=>{
          const load=s=>new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=reject;i.src='data:image/png;base64,'+s});
          const [x,y]=await Promise.all([load(a),load(b)]); const gap=16, label=28;
          const c=document.createElement('canvas');c.width=x.width+y.width+gap;c.height=Math.max(x.height,y.height)+label;
          const g=c.getContext('2d');g.fillStyle='#111';g.fillRect(0,0,c.width,c.height);g.drawImage(x,0,label);g.drawImage(y,x.width+gap,label);
          g.fillStyle='#fff';g.font='bold 18px sans-serif';g.fillText('BEFORE',10,20);g.fillText('AFTER',x.width+gap+10,20);
          return c.toDataURL('image/png').split(',')[1];
        }""", [base64.b64encode(before).decode(),base64.b64encode(after).decode()])
        return base64.b64decode(payload)
    except Exception:
        return after


async def _canvas_region_png(page, region=(0.0,0.0,1.0,1.0)) -> bytes:
    """Screenshot a CSS-space subregion of the real WebGL canvas.

    Used for visual rubrics that must judge rendered cards rather than nearby DOM text.
    """
    try:
        box=await page.locator('[data-testid="game-canvas"]').first.bounding_box()
        if not box: return await page.screenshot(type='png')
        x0,y0,x1,y1=region
        clip={
            'x':box['x']+box['width']*x0,
            'y':box['y']+box['height']*y0,
            'width':max(1.0,box['width']*(x1-x0)),
            'height':max(1.0,box['height']*(y1-y0)),
        }
        return await page.screenshot(type='png',clip=clip)
    except Exception:
        return await page.screenshot(type='png')


async def _actions_region_png(page) -> bytes:
    """Capture just the six real action controls so hover evidence is large and auditable."""
    try:
        rect=await page.evaluate(r"""() => {
          const els=['deal','peek','call','raise','fold','compare'].map(k=>document.querySelector(`[data-testid="${k}-btn"]`)).filter(Boolean);
          const rs=els.map(e=>e.getBoundingClientRect()).filter(r=>r.width>0&&r.height>0);
          if(!rs.length)return null;const pad=18;
          const left=Math.max(0,Math.min(...rs.map(r=>r.left))-pad), top=Math.max(0,Math.min(...rs.map(r=>r.top))-pad);
          const right=Math.min(innerWidth,Math.max(...rs.map(r=>r.right))+pad), bottom=Math.min(innerHeight,Math.max(...rs.map(r=>r.bottom))+pad);
          return {x:left,y:top,width:Math.max(1,right-left),height:Math.max(1,bottom-top)};
        }""")
        if isinstance(rect,dict) and (_finite_num(rect.get('width')) or 0)>1 and (_finite_num(rect.get('height')) or 0)>1:
            return await page.screenshot(type='png',clip=rect)
    except Exception:
        pass
    return await page.screenshot(type='png')


async def _visual_state(page) -> dict[str, Any]:
    return await page.evaluate("""() => {
      const s=document.querySelector('[data-testid="game-status"]'), r=document.getElementById('root');
      const one=e=>e?{color:getComputedStyle(e).color,bg:getComputedStyle(e).backgroundColor,border:getComputedStyle(e).borderColor,shadow:getComputedStyle(e).boxShadow,className:e.className||'',tone:e.dataset?.tone||'',phase:e.dataset?.phase||'',winner:e.dataset?.winner||'',text:(e.innerText||e.textContent||'').trim()}:null;
      return {status:one(s),root:one(r),turn:(document.querySelector('[data-testid="turn"]')?.textContent||'').trim()};
    }""")


async def _hud_snapshot(page, state: dict[str, Any] | None = None) -> dict[str, Any]:
    # Read the public state and all six HUD values in one browser task.  Passing a
    # state captured just before the computer timer fires can otherwise compare a
    # stale state with a newer DOM and falsely fail a perfectly synchronized HUD.
    try:
        snap = await page.evaluate(r"""() => {
          const s=(window.__zjh&&typeof window.__zjh.getState==='function')?window.__zjh.getState():null;
          const ids={currentBet:'current-bet',pot:'pot',playerChips:'player-chips',computerChips:'computer-chips',playerScore:'player-score',computerScore:'computer-score'};
          const text={}; for(const [k,id] of Object.entries(ids)) text[k]=(document.querySelector(`[data-testid="${id}"]`)?.textContent||'').trim();
          return {state:s,text};
        }""")
    except Exception:
        snap = None
    live = (snap or {}).get('state') if isinstance(snap,dict) else None
    if not isinstance(live,dict):
        live = state if isinstance(state,dict) else None
    if not isinstance(live,dict): return {"ok":False,"actual":{},"expected":{},"phase":None}
    raw=(snap or {}).get('text') if isinstance(snap,dict) and isinstance((snap or {}).get('text'),dict) else {}
    actual={k:_num_text(str(raw.get(k,''))) for k in ("currentBet","pot","playerChips","computerChips","playerScore","computerScore")}
    expected={"currentBet":_finite_num(live.get("currentBet")),"pot":_finite_num(live.get("pot")),"playerChips":_finite_num((live.get("player") or {}).get("chips")),"computerChips":_finite_num((live.get("computer") or {}).get("chips")),"playerScore":_finite_num((live.get("score") or {}).get("player")),"computerScore":_finite_num((live.get("score") or {}).get("computer"))}
    ok=all(actual[k] is not None and expected[k] is not None and abs(actual[k]-expected[k])<1e-6 for k in expected)
    return {"ok":ok,"actual":actual,"expected":expected,"phase":live.get("phase"),"round":live.get("round")}


def _style_signature(v: dict[str, Any] | None) -> tuple[str, ...]:
    if not isinstance(v,dict): return ()
    st=v.get("status") if isinstance(v.get("status"),dict) else {}; root=v.get("root") if isinstance(v.get("root"),dict) else {}
    return tuple(str(x or "") for x in (st.get("color"),st.get("bg"),st.get("border"),st.get("shadow"),root.get("color"),root.get("bg"),root.get("border"),root.get("shadow")))

def _computed_style_changed(before: dict[str, Any] | None, after: dict[str, Any] | None) -> bool:
    a,b=_style_signature(before),_style_signature(after); return bool(a and b and a!=b)


async def _drive_to_elimination(page, max_rounds: int | None = None) -> dict[str, Any]:
    """Reach elimination only through normal UI actions; never mutate game state.

    Prefer Call -> Fold when the computer returns the turn.  That commits a real extra
    bet before forfeiting and reaches the same natural zero-chip boundary in fewer
    rounds.  If the AI repeatedly folds/ends the round so this does not reduce player
    chips, automatically fall back to plain Fold, which is slower but deterministic.
    """
    history=[]; before_terminal_visual=None; budget=max_rounds; rounds_done=0
    accelerated=True; nonprogress=0
    while True:
        st=await _zjh(page)
        if not st: break
        chips=[_finite_num((st.get(side) or {}).get('chips')) for side in ('player','computer')]
        history.append({'step':rounds_done,'phase':st.get('phase'),'chips':chips,'round':st.get('round')})
        if any(x is not None and x < -1e-9 for x in chips): return {'state':st,'history':history,'negativeSeen':True,'beforeVisual':before_terminal_visual,'afterVisual':await _visual_state(page),'budget':budget,'accelerated':accelerated}
        if st.get('phase')=='eliminated': return {'state':st,'history':history,'negativeSeen':False,'beforeVisual':before_terminal_visual,'afterVisual':await _visual_state(page),'budget':budget,'accelerated':accelerated}
        if budget is not None and rounds_done>=budget: break
        if st.get('phase') in {'waiting','round_over'} and st.get('canDeal'):
            await _click(page,'[data-testid="deal-btn"]'); st=await _wait_state(page,lambda x:x.get('phase') in {'player_turn','eliminated'},4500)
            if not st: break
            if st.get('phase')=='eliminated': return {'state':st,'history':history,'negativeSeen':False,'beforeVisual':before_terminal_visual,'afterVisual':await _visual_state(page),'budget':budget,'accelerated':accelerated}
        if st.get('phase')=='player_turn':
            if budget is None:
                rb=_finite_num((st.get('player') or {}).get('roundBet')); pc=_finite_num((st.get('player') or {}).get('chips'))
                # The accelerated Call->Fold path can occasionally win when the AI folds,
                # so a budget derived from the current ante count is not guaranteed to
                # reach elimination.  Keep a bounded but generous natural-UI budget; the
                # fallback Fold path then has enough rounds to reach the real boundary.
                estimated=math.ceil((pc+rb)/rb)+8 if rb is not None and rb>0 and pc is not None else 80
                budget=max(60,min(180,estimated))
            before_pc=_finite_num((st.get('player') or {}).get('chips'))
            # Fast path: a normal Call, then Fold when control returns.  No hidden API,
            # time skipping, or state mutation is used.
            if accelerated and st.get('canCall'):
                await _click(page,'[data-testid="call-btn"]')
                mid=await _wait_state(page,lambda x:x.get('phase')=='computer_turn',700,20)
                post=await _wait_state(page,lambda x:x.get('phase')!='computer_turn',3500) if mid else await _zjh(page)
                if post and post.get('phase')=='player_turn' and post.get('canFold'):
                    before_terminal_visual=await _visual_state(page)
                    await _click(page,'[data-testid="fold-btn"]'); rounds_done+=1
                    endst=await _wait_state(page,lambda x:x.get('phase') in {'round_over','eliminated'},2600)
                elif post and post.get('phase') in {'round_over','eliminated'}:
                    rounds_done+=1; endst=post
                else:
                    endst=post
                after_pc=_finite_num(((endst or {}).get('player') or {}).get('chips')) if endst else None
                if before_pc is not None and after_pc is not None and after_pc < before_pc-1e-9:
                    nonprogress=0
                else:
                    nonprogress+=1
                    if nonprogress>=2:
                        accelerated=False
                        rb_now=_finite_num(((endst or st).get('player') or {}).get('roundBet'))
                        pc_now=_finite_num(((endst or st).get('player') or {}).get('chips'))
                        if rb_now is not None and rb_now>0 and pc_now is not None and budget is not None:
                            budget=max(budget,min(180,rounds_done+math.ceil((pc_now+rb_now)/rb_now)+8))
                if endst and endst.get('phase')=='eliminated': return {'state':endst,'history':history,'negativeSeen':False,'beforeVisual':before_terminal_visual,'afterVisual':await _visual_state(page),'budget':budget,'accelerated':accelerated}
                if endst and endst.get('phase')=='round_over':
                    continue
            # Guaranteed fallback: immediate Fold loses the real ante and always makes
            # monotonic progress toward the player's elimination boundary.
            st=await _zjh(page) or st
            if st.get('phase')=='player_turn' and st.get('canFold'):
                before_terminal_visual=await _visual_state(page); await _click(page,'[data-testid="fold-btn"]'); rounds_done+=1
                st=await _wait_state(page,lambda x:x.get('phase') in {'round_over','eliminated'},2600)
                if st and st.get('phase')=='eliminated': return {'state':st,'history':history,'negativeSeen':False,'beforeVisual':before_terminal_visual,'afterVisual':await _visual_state(page),'budget':budget,'accelerated':accelerated}
                continue
        if st.get('phase')=='computer_turn': await _wait_state(page,lambda x:x.get('phase')!='computer_turn',3000)
        else: await page.wait_for_timeout(30)
    st=await _zjh(page); return {'state':st,'history':history,'negativeSeen':False,'beforeVisual':before_terminal_visual,'afterVisual':await _visual_state(page),'budget':budget,'accelerated':accelerated}


def _infer_ai_action(mid: dict[str, Any] | None, post: dict[str, Any] | None) -> str | None:
    if not mid or not post:
        return None
    c0=(mid.get('computer') or {}); c1=(post.get('computer') or {})
    if c1.get('folded') or (post.get('outcome')=='fold' and post.get('winner')=='player'):
        return 'fold'
    if post.get('outcome')=='compare' or post.get('phase')=='comparing':
        return 'compare'
    if (_finite_num(post.get('currentBet')) or 0) > (_finite_num(mid.get('currentBet')) or 0)+1e-6:
        return 'raise'
    if (_finite_num(c0.get('chips')) or 0) > (_finite_num(c1.get('chips')) or 0)+1e-6:
        return 'call'
    return None


async def run_checks(page, ctx) -> None:
    _progress("checks: startup/static rule probe")
    files = _source_files()
    rule_probe: dict[str, Any] = {}

    # R1 startup/readiness
    startup = await page.evaluate("""() => {
      const root=document.getElementById('root');
      const localModuleScripts=[...document.scripts].filter(s=>{
        if(s.type!=='module' || !s.src) return false;
        try { const u=new URL(s.src,location.href); return u.origin===location.origin && /[.]js(?:$|[?])/i.test(u.pathname); } catch { return false; }
      });
      return {
        root: !!root,
        canvas: !!document.querySelector('[data-testid="game-canvas"]'),
        hook: !!(window.__zjh && typeof window.__zjh.getState==='function'),
        scene: !!(window.__scene && typeof window.__scene.getState==='function'),
        text: (document.body && document.body.innerText || '').trim().length,
        localModuleScripts: localModuleScripts.length
      };
    }""")
    s0, sc0 = await _zjh(page), await _scene(page)
    initial_visual = await _visual_state(page)
    rule_probe = _rule_engine_probe()
    _progress("checks: public-hook purity and core interaction flow")
    # R50 probes both waiting and a real dealt/player-turn state.  A card/settlement mutator
    # can be inert while no cards exist, so waiting-only probing is insufficient.
    readonly_wait = await _readonly_hook_probe(page)
    if readonly_wait.get('callablePaths'):
        await page.reload(wait_until='domcontentloaded',timeout=8000)
        await _wait_state(page,lambda x:bool(x.get('ready')),3500)
    dealt_ready=False
    if await _click(page,'[data-testid="deal-btn"]'):
        dealt_ready=bool(await _wait_state(page,lambda x:x.get('phase')=='player_turn' and x.get('turn')=='player',5200))
    readonly_dealt = await _readonly_hook_probe(page) if dealt_ready else {'ok':False,'error':'unable to prepare dealt state'}
    r50=bool(readonly_wait.get('ok') and readonly_dealt.get('ok'))
    ctx.check(50,r50,f"{'通过' if r50 else '未通过'}：等待状态接口纯读={bool(readonly_wait.get('ok')) if isinstance(readonly_wait,dict) else False}，真实发牌后接口纯读={bool(readonly_dealt.get('ok')) if isinstance(readonly_dealt,dict) else False}；未发现 setter、状态突变或可控制牌局的公开测试能力。")
    # Always reset after active public-API probing so later gameplay evidence starts clean.
    await page.reload(wait_until='domcontentloaded',timeout=8000)
    await _wait_state(page,lambda x:bool(x.get('ready')),3500)
    s0,sc0=await _zjh(page),await _scene(page)
    initial_visual=await _visual_state(page)
    hud_waiting = await _hud_snapshot(page, s0)
    waiting_disabled = await page.evaluate("""() => Object.fromEntries(['deal','peek','call','raise','fold','compare'].map(k=>{const b=document.querySelector(`[data-testid="${k}-btn"]`);return [k,b?!!b.disabled:null]}))""")
    ok1 = bool(startup.get("root") and startup.get("canvas") and startup.get("hook") and startup.get("scene") and int(startup.get("localModuleScripts") or 0)>0 and s0 and s0.get("ready") and sc0 and sc0.get("ready"))
    ctx.check(1, ok1, f"{'通过' if ok1 else '未通过'}：root={startup.get('root')}, canvas={startup.get('canvas')}, zjhHook={startup.get('hook')}, sceneHook={startup.get('scene')}, localViteModuleScripts={startup.get('localModuleScripts')}, gameReady={bool(s0 and s0.get('ready'))}, sceneReady={bool(sc0 and sc0.get('ready'))}, bodyTextLen={startup.get('text')}。")

    # R2 Three r128 + real WebGL draws
    obs_a = await _obs(page); draw_a = int(((obs_a.get("gl") or {}).get("drawCalls") or 0))
    # Fixed sleeps can sample before the first compositor-visible WebGL frame on Windows.
    # Poll evaluator-owned GL counters until a real draw is observed or 1.8s elapses.
    draw_b = draw_a
    obs_b = obs_a
    for _ in range(18):
        await page.wait_for_timeout(100)
        obs_b = await _obs(page)
        draw_b = int(((obs_b.get("gl") or {}).get("drawCalls") or 0))
        if draw_b > draw_a:
            break
    gl_probe = await page.evaluate("""() => { const c=document.querySelector('[data-testid="game-canvas"]'); if(!c) return null; const g=c.getContext('webgl2')||c.getContext('webgl'); return {webgl:!!g}; }""")
    rev = str((sc0 or {}).get("threeRevision", ""))
    renderer = (sc0 or {}).get("renderer") or {}
    three_pkg=''
    try:
        pkg=json.loads((_repo_root()/"package.json").read_text(encoding="utf-8")) if _repo_root() else {}
        three_pkg=str((pkg.get("dependencies") or {}).get("three",''))
    except Exception: pass
    three_pkg_ok=bool(re.fullmatch(r"(?:~?\^?)?0\.128\.0",three_pkg.strip()))
    ok2 = bool(rev == "128" and three_pkg_ok and renderer.get("ready") and renderer.get('type') == 'WebGLRenderer' and gl_probe and gl_probe.get("webgl") and draw_b > draw_a)
    ctx.check(2, ok2, f"{'通过' if ok2 else '未通过'}：runtimeThreeRevision={rev!r}, packageThree={three_pkg!r}, renderer={renderer}, webgl={bool(gl_probe and gl_probe.get('webgl'))}, drawDelta={draw_b-draw_a}。")

    # R3 stack evidence starts statically, then is finalized after a real Deal so the
    # same rubric also proves the running production app did not lazy-load an external model.
    stack_ok, stack_reason = _react_vite_evidence(files)
    ctx.check(3, stack_ok, f"{'通过' if stack_ok else '未通过'}：技术栈静态证据：{stack_reason}；运行时外部模型请求将在真实发牌后复核。")

    # R4 responsive canvas + camera aspect, independently read backing store.
    before_resize = await page.evaluate("""() => {const c=document.querySelector('[data-testid="game-canvas"]'); return c?{cw:c.width,ch:c.height,w:c.getBoundingClientRect().width,h:c.getBoundingClientRect().height}:null}""")
    sc_before = await _scene(page)
    try:
        await page.set_viewport_size({"width": 1037, "height": 691})
        await page.wait_for_timeout(250)
    except Exception:
        pass
    after_resize = await page.evaluate("""() => {const c=document.querySelector('[data-testid="game-canvas"]'); return c?{cw:c.width,ch:c.height,w:c.getBoundingClientRect().width,h:c.getBoundingClientRect().height}:null}""")
    sc_after = await _scene(page)
    cam_b, cam_a = (sc_before or {}).get("camera") or {}, (sc_after or {}).get("camera") or {}
    aspect_expected = (after_resize or {}).get("w", 0) / max(1, (after_resize or {}).get("h", 1)) if after_resize else 0
    # The camera aspect must be observed from the live read-only scene state; source text is not evidence.
    aspect_live = _finite_num(cam_a.get("aspect"))
    aspect_ok = aspect_live is not None and abs(aspect_live-aspect_expected) < 0.08
    size_changed = bool(before_resize and after_resize and (before_resize["cw"], before_resize["ch"]) != (after_resize["cw"], after_resize["ch"]))
    backing_ok = bool(after_resize and after_resize["cw"] > 0 and after_resize["ch"] > 0 and after_resize["w"] > 0 and after_resize["h"] > 0)
    viewport_fit = bool(after_resize and abs(float(after_resize['w'])-1037)<=10 and abs(float(after_resize['h'])-691)<=10)
    ok4 = size_changed and backing_ok and viewport_fit and aspect_ok
    ctx.check(4, ok4, f"{'通过' if ok4 else '未通过'}：before={before_resize}, after={after_resize}, cameraBefore={cam_b}, cameraAfter={cam_a}, viewportFit={viewport_fit}, expectedAspect={aspect_expected:.3f}, aspectOK={aspect_ok}。")
    try:
        await page.set_viewport_size({"width": 1280, "height": 800})
        await page.wait_for_timeout(180)
    except Exception:
        pass

    # R5 measure the real WebGL render cadence; product scheduling method is intentionally irrelevant.
    try:
        blank = await page.context.new_page()
        baseline_stats = await blank.evaluate("""() => new Promise(resolve=>{const ts=[];let t0=performance.now();function f(t){ts.push(t);if(t-t0>=1000){const gaps=ts.slice(1).map((x,i)=>x-ts[i]);resolve({fps:ts.length*1000/(t-t0),count:ts.length,maxGap:gaps.length?Math.max(...gaps):999});}else requestAnimationFrame(f)}requestAnimationFrame(f)})""")
        await blank.close()
    except Exception:
        baseline_stats = {"fps":60.0,"maxGap":34.0}
    # Measure a real stable playable state, not the cheaper empty waiting scene.
    perf_state=await _ensure_player_turn(page)
    oa=await _obs(page); t0=await page.evaluate("performance.now()")
    await page.wait_for_timeout(1100)
    ob=await _obs(page); t1=await page.evaluate("performance.now()")
    glb=ob.get('gl') or {}
    raw_clear=[float(x) for x in glb.get('clearTimes') or [] if isinstance(x,(int,float)) and t0 <= float(x) <= t1]
    raw_draw=[float(x) for x in glb.get('drawTimes') or [] if isinstance(x,(int,float)) and t0 <= float(x) <= t1]
    # A renderer may issue many draw calls per visual frame. Collapse clustered draw calls
    # into frame marks instead of counting every mesh draw as another FPS sample.
    def collapse_frames(ts: list[float], gap_ms: float = 5.0) -> list[float]:
        out=[]
        for x in sorted(ts):
            if not out or x-out[-1] >= gap_ms: out.append(x)
        return out
    marks=raw_clear if len(raw_clear)>=4 else collapse_frames(raw_draw)
    duration=max(1.0,float(t1)-float(t0)); render_fps=len(marks)*1000.0/duration
    gaps=[b-a for a,b in zip(marks,marks[1:])]
    max_gap=max(gaps,default=999.0)
    base_fps=max(1.0,float(baseline_stats.get('fps') or 60.0))
    # The Prompt asks for a 60FPS experience. Compare the real WebGL cadence against
    # the same-host blank-page RAF capacity without lowering that acceptance standard.
    # Host-relative timing keeps slow machines comparable, while the 80% ratio preserves
    # the original 'close to baseline' requirement from the approved Rubric.
    base_frame_ms=1000.0/base_fps
    long_gap_threshold=max(34.0,base_frame_ms*2.0)
    long_ratio=sum(1 for g in gaps if g>long_gap_threshold)/max(1,len(gaps))
    required=max(12.0,min(58.0,base_fps*0.80))
    allowed_gap=max(90.0,float(baseline_stats.get('maxGap') or base_frame_ms)*1.8)
    ok5=bool(perf_state and perf_state.get('phase')=='player_turn' and render_fps>=required and len(marks)>=8 and max_gap<=allowed_gap and long_ratio<=0.35)
    ctx.check(5,ok5,f"{'通过' if ok5 else '未通过'}：在真实发牌后的 player_turn 稳定可玩状态测量；同一浏览器空白页 RAF 基线 {base_fps:.1f} FPS，主 WebGL {render_fps:.1f} FPS，要求至少 {required:.1f} FPS；最长帧间隔 {max_gap:.1f}ms（允许 {allowed_gap:.1f}ms），长帧占比 {long_ratio:.3f}。")
    # Reset after the performance round so R6+ and the later functional flow do not
    # inherit its cards, chips or score.
    await page.reload(wait_until='domcontentloaded',timeout=8000)
    await _wait_state(page,lambda x:bool(x.get('ready')),3500)
    s0,sc0=await _zjh(page),await _scene(page)

    # R6-R11 scene / procedural rendering
    sc = await _scene(page) or {}
    cam = sc.get("camera") or {}
    gl_runtime=(await _obs(page)).get('gl') or {}
    scene_source=_scene_source_features()
    live_draws=int(gl_runtime.get('drawCalls') or 0)
    r2_draw_delta=max(0,draw_b-draw_a)
    live_draw_evidence=bool(live_draws>0 or (ok2 and r2_draw_delta>0))
    perspective_instrumented=int(gl_runtime.get('perspectiveMatrices') or 0)>0
    perspective_fallback=bool(not perspective_instrumented and scene_source.get('reachable') and scene_source.get('perspective') and live_draw_evidence)
    ok6 = bool(cam.get("type") == "PerspectiveCamera" and all(_finite_num(cam.get(k)) is not None for k in ("fov","near","far")) and (perspective_instrumented or perspective_fallback))
    ctx.check(6, ok6, f"{'通过' if ok6 else '未通过'}：运行时 camera.type={cam.get('type')}, fov/near/far=({cam.get('fov')},{cam.get('near')},{cam.get('far')})；透视矩阵 instrumentation 次数={gl_runtime.get('perspectiveMatrices')}，instrumentation 未命中时生产可达源码+真实 WebGL 绘制交叉补证={perspective_fallback}。")
    amb = sc.get("ambientLight") or {}
    ambient_instrumented=int(gl_runtime.get('ambientProgramsUsed') or 0)>0
    ambient_fallback=bool(not ambient_instrumented and scene_source.get('reachable') and scene_source.get('ambient') and scene_source.get('litMaterial') and live_draw_evidence)
    ok7 = bool(amb.get("exists") and (_finite_num(amb.get("intensity")) or 0) > 0 and live_draw_evidence and (ambient_instrumented or ambient_fallback))
    ctx.check(7, ok7, f"{'通过' if ok7 else '未通过'}：运行时 AmbientLight 存在且强度={amb.get('intensity')}，当前采样 drawCalls={live_draws}、同页 R2 实测 drawDelta={r2_draw_delta}；实际使用环境光 shader 的 instrumentation 次数={gl_runtime.get('ambientProgramsUsed')}，漏采时生产可达 AmbientLight+受光材质补证={ambient_fallback}。")
    orbit = sc.get("orbitControls") or {}
    cam0 = (await _scene(page) or {}).get("camera") or {}
    # real drag on upper canvas area so it does not hit HUD.
    try:
        canvas = page.locator('[data-testid="game-canvas"]').first
        box = await canvas.bounding_box()
        if box:
            x, y = box['x'] + box['width']*0.55, box['y'] + box['height']*0.35
            await page.mouse.move(x, y); await page.mouse.down(); await page.mouse.move(x+70, y+18, steps=6); await page.mouse.up(); await page.wait_for_timeout(180)
    except Exception:
        pass
    cam1 = (await _scene(page) or {}).get("camera") or {}
    moved = (_dist(cam0.get("position"), cam1.get("position")) or 0) > 0.02
    target_vec=_vec(cam1.get('target'))
    sc_center=await _scene(page) or {}
    table_center=_vec((sc_center.get('table') or {}).get('position')) or _vec((sc_center.get('deck') or {}).get('position'))
    center_dist=_dist(target_vec,table_center) if target_vec is not None and table_center is not None else None
    camera_center_dist=_dist(cam1.get('position'),table_center) if table_center is not None else None
    center_limit=max(0.25,(camera_center_dist or 1.0)*0.35)
    center_ok=bool(center_dist is not None and center_dist <= center_limit)
    # Orbit drag must not leave the HUD covered or unusable.  At the initial
    # waiting state Deal is the one legal user action, so independently hit-test
    # its rendered centre without triggering a round early.
    deal_hit = await page.evaluate(r"""() => {
      const b=document.querySelector('[data-testid="deal-btn"]');
      if(!(b instanceof HTMLElement)) return {visible:false,enabled:false,hit:false};
      const r=b.getBoundingClientRect(), cs=getComputedStyle(b);
      const visible=r.width>0&&r.height>0&&cs.visibility!=='hidden'&&cs.display!=='none';
      const x=r.left+r.width/2,y=r.top+r.height/2, top=document.elementFromPoint(x,y);
      return {visible,enabled:!b.hasAttribute('disabled') && !(b).disabled,hit:!!top&&(top===b||b.contains(top)),box:{x:r.x,y:r.y,w:r.width,h:r.height}};
    }""")
    controls_accessible=bool(deal_hit.get('visible') and deal_hit.get('enabled') and deal_hit.get('hit'))
    # The Rubric explicitly requires the post-orbit composition to remain playable, not
    # merely the OrbitControls target to stay near the table.  Start one real round while
    # keeping the dragged camera, then independently project both hands and the deck.
    orbit_composition_ok=False; orbit_player_y=None; orbit_computer_y=None; orbit_deck_screen=None
    if controls_accessible and await _click(page,'[data-testid="deal-btn"]'):
        orbit_dealt=await _wait_state(page,lambda x:x.get('phase')=='player_turn' and x.get('turn')=='player' and len((x.get('player') or {}).get('cards') or [])==3,5200)
        orbit_scene=await _scene(page) or {}; orbit_cam=orbit_scene.get('camera') or {}; orbit_canvas=orbit_scene.get('canvas') or {}
        orbit_cards=orbit_scene.get('cards') if isinstance(orbit_scene.get('cards'),list) else []
        orbit_pp=[_project_to_screen(c.get('position'),orbit_cam,orbit_canvas) for c in orbit_cards if isinstance(c,dict) and c.get('owner')=='player']
        orbit_cc=[_project_to_screen(c.get('position'),orbit_cam,orbit_canvas) for c in orbit_cards if isinstance(c,dict) and c.get('owner')=='computer']
        orbit_pp=[x for x in orbit_pp if x]; orbit_cc=[x for x in orbit_cc if x]
        orbit_deck_screen=_project_to_screen((orbit_scene.get('deck') or {}).get('position'),orbit_cam,orbit_canvas)
        oh=_finite_num(orbit_canvas.get('height')) or 0; ow=_finite_num(orbit_canvas.get('width')) or 0
        orbit_player_y=sum(x[1] for x in orbit_pp)/len(orbit_pp) if orbit_pp else None
        orbit_computer_y=sum(x[1] for x in orbit_cc)/len(orbit_cc) if orbit_cc else None
        orbit_deck_center=bool(orbit_deck_screen and ow>0 and oh>0 and abs(orbit_deck_screen[0]-ow/2)<ow*.28 and abs(orbit_deck_screen[1]-oh/2)<oh*.30)
        orbit_composition_ok=bool(orbit_dealt and len(orbit_pp)==3 and len(orbit_cc)==3 and orbit_player_y is not None and orbit_computer_y is not None and orbit_player_y>orbit_computer_y+oh*.10 and orbit_deck_center)
    ok8 = bool(orbit.get("enabled") and moved and center_ok and controls_accessible and orbit_composition_ok)
    ctx.check(8, ok8, f"{'通过' if ok8 else '未通过'}：cameraMoved={moved}, targetCentered={center_ok}, controlsAccessible={controls_accessible}；拖拽后真实发牌投影仍保持真人在下/电脑在上={orbit_composition_ok}（playerMeanY={orbit_player_y}, computerMeanY={orbit_computer_y}, deckScreen={orbit_deck_screen}）。")
    # R8 used a real round only as post-orbit evidence. Reload so later gameplay starts clean.
    await page.reload(wait_until='domcontentloaded',timeout=8000)
    await _wait_state(page,lambda x:bool(x.get('ready')),3500)
    s0,sc0=await _zjh(page),await _scene(page)
    table = (await _scene(page) or {}).get("table") or {}
    color = str(table.get("color", "")).lower().replace("#", "").replace("0x", "")
    rough = _finite_num(table.get("roughness"))
    green_probe = await _canvas_green_probe(page)
    rendered_green = bool(green_probe.get("ok") and (_finite_num(green_probe.get("greenRatio")) or 0) >= 0.18)
    rough_instrumented=int(gl_runtime.get('roughnessProgramsUsed') or 0)>0
    rough_fallback=bool(not rough_instrumented and scene_source.get('reachable') and scene_source.get('roughness') and live_draw_evidence)
    ok9 = bool(color == "006400" and rough is not None and rough > 0 and rendered_green and (rough_instrumented or rough_fallback))
    ctx.check(9, ok9, f"{'通过' if ok9 else '未通过'}：运行时桌面 color=#{color}, roughness={rough}，真实中央桌面深绿像素采样={rendered_green}；roughness shader instrumentation 次数={gl_runtime.get('roughnessProgramsUsed')}，漏采时生产可达粗糙材质补证={rough_fallback}。")
    sc = await _scene(page) or {}
    # R10/R11 are checked after a real deal from live scene objects and renderer/resource observations.

    # Missing the required read-only game hook is a product-contract failure, not an
    # infrastructure timeout. Fail dependent gameplay Rubrics immediately while still
    # preserving independent source/DOM/visual observations.
    if not startup.get("hook"):
        selectors = ['deal','peek','call','raise','fold','compare']
        vis = {x: await _visible(page, f'[data-testid="{x}-btn"]') for x in selectors}
        computer_manual = await page.evaluate("""() => {const allowed=new Set(['deal-btn','peek-btn','call-btn','raise-btn','fold-btn','compare-btn']);return Array.from(document.querySelectorAll('button')).filter(b=>{const t=(b.innerText||b.textContent||'').trim();const id=b.getAttribute('data-testid')||'';const ai=/(电脑|ai|computer|机器人|自动)/i.test(t), action=/(行动|操作|下一步|出牌|跟注|加注|弃牌|比牌|call|raise|fold|compare|act|move|next)/i.test(t);const r=b.getBoundingClientRect(),cs=getComputedStyle(b),visible=r.width>0&&r.height>0&&cs.display!=='none'&&cs.visibility!=='hidden';return visible&&!allowed.has(id)&&((ai&&action)||/(电脑跟注|电脑加注|电脑弃牌|电脑比牌|ai\\s*(call|raise|fold|compare|move|act))/i.test(t))}).map(b=>({text:(b.innerText||'').trim(),testid:b.getAttribute('data-testid')}))}""")
        ok15 = all(vis.values()) and not computer_manual
        ctx.check(15, ok15, f"{'通过' if ok15 else '未通过'}：controls={vis}, manualComputerButtons={computer_manual}。")
        ctx.check(10,False,"未通过：缺少 window.__zjh.getState()，无法将真实发牌对象投影到运行中的 Three.js 场景位置。")
        ctx.check(11,False,"未通过：缺少 window.__zjh.getState()，无法交叉验证运行中的牌局卡牌与 Three.js 3D 卡牌对象。")
        for rid in (20,21,22,23):
            ctx.check(rid,False,"未通过：缺少 window.__zjh.getState()，无法用真实手牌/真实比牌交叉验证牌型实现；源码字符串或未调用 helper 不作为通过证据。")
        ctx.check(31,False,"未通过：缺少 window.__zjh.getState()，无法观察电脑真实牌力、下注压力与自动行动；任何源码 AI 字段不作为通过证据。")
        ctx.check(44,False,"未通过：缺少 window.__zjh.getState()，无法通过正常 Deal/Fold 流程观察真实淘汰边界；源码淘汰字符串不作为通过证据。")
        already={1,2,3,4,5,6,7,8,9,10,11,15,20,21,22,23,31,44,50}
        for row in RUBRIC:
            rid=int(row['id'])
            if row['kind']=='vlm' or rid in already:
                continue
            ctx.check(rid,False,"未通过：缺少必需的只读牌局接口 window.__zjh.getState()，无法取得该项真实运行状态。")
        await ctx.vlm_many([
            (46, '只看画面判断：是否呈现绿色绒布牌桌，中央有牌堆，上方电脑牌区、下方真人牌区对坐且空间层次清晰？不要根据文字说明推断。'),
            (47, '只看画面判断：底部操作区是否呈现半透明/模糊玻璃层次，六类核心按钮标签是否完整可读；当前悬停按钮是否相对邻近按钮出现可见抬升或阴影变化，并且没有遮挡其它关键控件或状态信息？'),
            (48, '只看画面判断：可见 3D 扑克牌是否能辨识点数与花色，牌体具有轻微曲面/实体感，而不是仅用普通文字列表或平面 DOM 方块表示？'),
            (49, '只看画面判断：当前画面的牌面、筹码、奖池、状态和操作区是否清晰可读，整体具有完整可玩的 3D 炸金花游戏视觉完成度？'),
        ])
        return

    # R15 controls can be checked before starting a round.
    selectors = ['deal','peek','call','raise','fold','compare']
    vis = {x: await _visible(page, f'[data-testid="{x}-btn"]') for x in selectors}
    computer_manual = await page.evaluate("""() => {const allowed=new Set(['deal-btn','peek-btn','call-btn','raise-btn','fold-btn','compare-btn']);return Array.from(document.querySelectorAll('button')).filter(b=>{const t=(b.innerText||b.textContent||'').trim();const id=b.getAttribute('data-testid')||'';const ai=/(电脑|ai|computer|机器人|自动)/i.test(t), action=/(行动|操作|下一步|出牌|跟注|加注|弃牌|比牌|call|raise|fold|compare|act|move|next)/i.test(t);const r=b.getBoundingClientRect(),cs=getComputedStyle(b),visible=r.width>0&&r.height>0&&cs.display!=='none'&&cs.visibility!=='hidden';return visible&&!allowed.has(id)&&((ai&&action)||/(电脑跟注|电脑加注|电脑弃牌|电脑比牌|ai\\s*(call|raise|fold|compare|move|act))/i.test(t))}).map(b=>({text:(b.innerText||'').trim(),testid:b.getAttribute('data-testid')}))}""")
    ok15 = all(vis.values()) and not computer_manual
    ctx.check(15, ok15, f"{'通过' if ok15 else '未通过'}：controls={vis}, manualComputerButtons={computer_manual}。")

    # Start a real round while sampling deal animation.  Capture real rendered
    # canvas before/after so scene-state trajectories cannot pass on their own.
    deal_render_before = await _canvas_png(page)
    deal_before, dealt, deal_frames = await _fresh_round(page, sample_frames=True)
    deal_render_after = await _canvas_png(page)
    deal_render_player = await _png_region_diff(page, deal_render_before, deal_render_after, (0.18,0.48,0.82,0.90))
    deal_render_computer = await _png_region_diff(page, deal_render_before, deal_render_after, (0.18,0.08,0.82,0.50))
    hud_dealt = await _hud_snapshot(page, dealt)
    hud_bet = None
    hud_settlement = None
    p_cards = ((dealt or {}).get("player") or {}).get("cards") or []
    c_cards = ((dealt or {}).get("computer") or {}).get("cards") or []

    unique_ok, unique_reason = _cards_unique([*p_cards, *c_cards]) if isinstance(p_cards,list) and isinstance(c_cards,list) else (False,"cards unavailable")
    deck_after_deal=((await _scene(page) or {}).get('deck') or {}).get('count')
    standard_deck_ok=bool(unique_ok and deck_after_deal==46)
    ctx.check(12, standard_deck_ok, f"{'通过' if standard_deck_ok else '未通过'}：{unique_reason}, liveDeckRemaining={deck_after_deal}, expectedRemainingAfterSix=46。")
    p = (dealt or {}).get("player") or {}; c = (dealt or {}).get("computer") or {}
    p_hidden = len(p_cards)==3 and not bool(p.get("looked")) and all(not bool(x.get("faceUp")) for x in p_cards if isinstance(x,dict))
    c_hidden = len(c_cards)==3 and all(not bool(x.get("faceUp")) for x in c_cards if isinstance(x,dict))
    ok13 = bool(dealt and len(p_cards)==3 and len(c_cards)==3 and p_hidden and c_hidden and dealt.get("phase") in {"player_turn","computer_turn"})
    ctx.check(13, ok13, f"{'通过' if ok13 else '未通过'}：phase={(dealt or {}).get('phase')}, turn={(dealt or {}).get('turn')}, playerCards={len(p_cards)}, computerCards={len(c_cards)}, playerLooked={p.get('looked')}, playerHidden={p_hidden}, computerHidden={c_hidden}。")
    # R10 real canvas-space composition: project live card/deck world positions through exposed camera.
    sc_dealt = await _scene(page) or {}
    cam10 = sc_dealt.get("camera") or {}; canvas10 = sc_dealt.get("canvas") or {}
    deck10 = (sc_dealt.get("deck") or {}).get("position")
    cards10 = sc_dealt.get("cards") if isinstance(sc_dealt.get("cards"), list) else []
    pp10=[_project_to_screen(c.get("position"),cam10,canvas10) for c in cards10 if isinstance(c,dict) and c.get("owner")=="player"]
    cc10=[_project_to_screen(c.get("position"),cam10,canvas10) for c in cards10 if isinstance(c,dict) and c.get("owner")=="computer"]
    dp10=_project_to_screen(deck10,cam10,canvas10)
    pp10=[x for x in pp10 if x]; cc10=[x for x in cc10 if x]
    h10=_finite_num(canvas10.get("height")) or 0; w10=_finite_num(canvas10.get("width")) or 0
    player_y=sum(x[1] for x in pp10)/len(pp10) if pp10 else -1
    computer_y=sum(x[1] for x in cc10)/len(cc10) if cc10 else 1e9
    deck_center=bool(dp10 and w10>0 and h10>0 and abs(dp10[0]-w10/2)<w10*.22 and abs(dp10[1]-h10/2)<h10*.25)
    composition_render_ok=bool(_render_diff_ok(deal_render_player,min_ratio=0.002,min_mean=0.20) and _render_diff_ok(deal_render_computer,min_ratio=0.002,min_mean=0.20))
    ok10=bool(len(pp10)==3 and len(cc10)==3 and player_y>computer_y+h10*.15 and deck_center and composition_render_ok)
    ctx.check(10,ok10,f"{'通过' if ok10 else '未通过'}：canvas={canvas10}, deckScreen={dp10}, playerScreen={pp10}, computerScreen={cc10}, playerMeanY={player_y:.1f}, computerMeanY={computer_y:.1f}, deckCentered={deck_center}, realCanvasRegionChange=({deal_render_player},{deal_render_computer})。")
    # R11: cross-check the live dealt cards against the live Three.js scene objects.
    z_cards={str(c.get('id')):c for c in [*p_cards,*c_cards] if isinstance(c,dict) and c.get('id') is not None}
    scene_cards={str(c.get('id')):c for c in cards10 if isinstance(c,dict) and c.get('id') is not None}
    card_rows=[]
    for cid,zc in z_cards.items():
        scard=scene_cards.get(cid) or {}
        expected_owner='player' if zc in p_cards else 'computer'
        card_rows.append({
            'id':cid,'rankMatch':str(scard.get('rank'))==str(zc.get('rank')),
            'suitMatch':str(scard.get('suit'))==str(zc.get('suit')),
            'ownerMatch':str(scard.get('owner'))==expected_owner,
            'hasTransform':isinstance(scard.get('position'),dict) and isinstance(scard.get('rotation'),dict)
        })
    obs11=await _obs(page)
    gl_creates=((obs11.get('gl') or {}).get('creates') or {})
    gl_resource_count=sum(int(v or 0) for v in gl_creates.values())
    texture_uploads=int((obs11.get('gl') or {}).get('textureUploads') or 0); programmatic_texture_uploads=int((obs11.get('gl') or {}).get('programmaticTextureUploads') or 0)
    external_models=await page.evaluate(r"""() => performance.getEntriesByType('resource').map(r=>String(r.name||'')).filter(n=>/\.(?:glb|gltf|obj|fbx)(?:[?#]|$)/i.test(n))""")
    ok11=bool(len(card_rows)==6 and all(r['rankMatch'] and r['suitMatch'] and r['ownerMatch'] and r['hasTransform'] for r in card_rows) and gl_resource_count>0 and texture_uploads>0 and programmatic_texture_uploads>0 and not external_models)
    ctx.check(11,ok11,f"{'通过' if ok11 else '未通过'}：运行中的 6 张牌有 {sum(1 for r in card_rows if r['rankMatch'] and r['suitMatch'] and r['ownerMatch'] and r['hasTransform'])}/6 张同时匹配真实 rank、suit、owner 与 Three.js transform；WebGL 资源创建数={gl_resource_count}，纹理上传={texture_uploads}，其中程序化纹理上传={programmatic_texture_uploads}；外部 3D 模型请求数={len(external_models)}。")
    r3=bool(stack_ok and not external_models)
    ctx.check(3,r3,f"{'通过' if r3 else '未通过'}：{stack_reason}；真实发牌后的运行时外部 3D 模型请求数={len(external_models)}。")
    # R14 track all six real dealt cards; a partial animation cannot pass.
    deck = ((deal_frames[0] if deal_frames else sc).get("deck") or {}).get("position") if (deal_frames or sc) else None
    motion_details=[]; motion_ok=True
    for owner, cards in (("player",p_cards),("computer",c_cards)):
        for card in cards:
            cid = str(card.get("id")) if isinstance(card,dict) else ""
            pts = _track_positions(deal_frames,cid) if cid else []
            mot, span, uniq = _has_motion(pts)
            steps=[_dist(a,b) or 0 for a,b in zip(pts,pts[1:])]
            max_step=max(steps,default=0.0)
            continuous=bool(span>0 and max_step <= span*0.55+0.15)
            start_near = bool(pts and deck and (_dist(pts[0],deck) or 999) < 3.5)
            motion_ok = motion_ok and bool(cid) and mot and start_near and continuous
            motion_details.append((owner,cid,len(pts),round(span,3),uniq,start_near,round(max_step,3),continuous))
    motion_ok = motion_ok and len(motion_details)==6
    deal_render_ok = _render_diff_ok(deal_render_player, min_ratio=0.003, min_mean=0.30) and _render_diff_ok(deal_render_computer, min_ratio=0.003, min_mean=0.30)
    lerp_ok, lerp_source = _deal_lerp_source_evidence()
    r14 = bool(motion_ok and deal_render_ok and lerp_ok)
    ctx.check(14, r14, f"{'通过' if r14 else '未通过'}：6 张真实发牌中满足多帧位移轨迹要求的数量={sum(1 for x in motion_details if x[-1])}/6；牌堆起点可用={bool(deck)}，真人区域与电脑区域在发牌前后都观察到真实画布变化={bool(_render_diff_ok(deal_render_player,min_ratio=0.002,min_mean=0.20) and _render_diff_ok(deal_render_computer,min_ratio=0.002,min_mean=0.20))}；生产源码存在 LERP/等价线性插值={lerp_ok}（{lerp_source}）。")

    # R16 gating: capture player-turn controls now; computer-turn controls are cross-checked at the call boundary below.
    st = dealt or {}
    disabled = await page.evaluate("""() => Object.fromEntries(['deal','peek','call','raise','fold','compare'].map(k=>{const b=document.querySelector(`[data-testid="${k}-btn"]`);return [k,b?!!b.disabled:null]}))""")
    can_map = {k: bool(st.get('can'+k.capitalize())) for k in ['peek','call','raise','fold','compare']}
    gate_player_ok = bool(disabled.get('deal') is True and all(disabled.get(k) is None or disabled.get(k) == (not can_map[k]) for k in can_map))
    initial_player_turn_text = await _text(page,'[data-testid="turn"]') if st.get('turn')=='player' else ''

    # R17-R19 peek and hand classification.
    pre_peek = await _ensure_player_turn(page)
    pre_ids = [str(x.get('id')) for x in (((pre_peek or {}).get('player') or {}).get('cards') or []) if isinstance(x,dict)]
    pre_nums = {k:_finite_num((pre_peek or {}).get(k)) for k in ('pot','currentBet')}
    pre_chips = (_finite_num(((pre_peek or {}).get('player') or {}).get('chips')), _finite_num(((pre_peek or {}).get('computer') or {}).get('chips')))
    pre_turn = (pre_peek or {}).get('turn')
    peek_frames=[]
    clicked_peek=False
    peek_render_before = await _canvas_png(page)
    if pre_peek and pre_peek.get('canPeek'):
        clicked_peek = await _click(page,'[data-testid="peek-btn"]')
        if clicked_peek:
            peek_frames = await _frames(page,850,35)
    post_peek = await _wait_state(page, lambda s: bool((s.get('player') or {}).get('looked')), 2500) if clicked_peek else await _zjh(page)
    peek_render_after = await _canvas_png(page)
    peek_render_change = await _png_region_diff(page, peek_render_before, peek_render_after, (0.16,0.48,0.84,0.90))
    pp=(post_peek or {}).get('player') or {}; cp=(post_peek or {}).get('computer') or {}
    post_ids=[str(x.get('id')) for x in (pp.get('cards') or []) if isinstance(x,dict)]
    ev=evaluate_hand(pp.get('cards') or [])
    peek_invariants = bool(clicked_peek and pp.get('looked') and len(pp.get('cards') or [])==3 and all(bool(x.get('faceUp')) for x in pp.get('cards') or [] if isinstance(x,dict)) and all(not bool(x.get('faceUp')) for x in cp.get('cards') or [] if isinstance(x,dict)) and pre_ids==post_ids and pre_nums['pot']==_finite_num((post_peek or {}).get('pot')) and pre_nums['currentBet']==_finite_num((post_peek or {}).get('currentBet')) and pre_chips==(_finite_num(pp.get('chips')),_finite_num(cp.get('chips'))) and pre_turn==(post_peek or {}).get('turn'))
    type_match = bool(ev and str(pp.get('handType'))==ev[2])
    ctx.check(17, peek_invariants and type_match, f"{'通过' if peek_invariants and type_match else '未通过'}：看牌点击成功={clicked_peek}，6 张牌 ID 保持不变={pre_ids==post_ids}；真人已看牌且只有真人 3 张牌翻开={bool(pp.get('looked') and sum(bool(x.get('faceUp')) for x in pp.get('cards') or [] if isinstance(x,dict))==3 and sum(bool(x.get('faceUp')) for x in cp.get('cards') or [] if isinstance(x,dict))==0)}；奖池、双方筹码和行动方均未改变={peek_invariants}；独立牌型={(ev or (None,None,None))[2]}，状态牌型={pp.get('handType')}。")
    # R18: verify true multi-frame flip plus a fan-shaped pose transition.
    flip_ok=False; fan_ok=False; rotation_spans={}; fan_metrics={}
    if len(post_ids)==3 and peek_frames:
        rotated=0; z_spreads=[]; curvature=[]
        for f in peek_frames:
            hits=[]
            for cid in post_ids:
                hit=next((cc for cc in (f.get('cards') or []) if isinstance(cc,dict) and str(cc.get('id'))==cid),None)
                if hit: hits.append(hit)
            if len(hits)==3:
                zrots=[(_vec(h.get('rotation')) or (0,0,0))[2] for h in hits]
                z_spreads.append(max(zrots)-min(zrots))
                poses=[_vec(h.get('position')) for h in hits]
                if all(poses):
                    curvature.append(abs(((poses[0][2]+poses[2][2])/2)-poses[1][2]))
        for cid in post_ids:
            rots=[]
            for f in peek_frames:
                hit=next((cc for cc in (f.get('cards') or []) if isinstance(cc,dict) and str(cc.get('id'))==cid),None)
                rv=_vec((hit or {}).get('rotation')) if hit else None
                if rv: rots.append(rv)
            span=max((math.dist(a,b) for i,a in enumerate(rots) for b in rots[i+1:]),default=0.0)
            rotation_spans[cid]=span
            if span>=0.75: rotated+=1
        flip_ok=rotated==3
        if len(z_spreads)>=4:
            n=min(3,max(1,len(z_spreads)//3)); z0=sum(z_spreads[:n])/n; z1=sum(z_spreads[-n:])/n
        else: z0=z1=0.0
        c1=max(curvature[-3:],default=0.0) if curvature else 0.0
        fan_ok=bool((z1>=0.18 and abs(z1-z0)>=0.025) or c1>=0.12)
        fan_metrics={'zRotationSpread':(z0,z1),'finalCurvature':c1}
    peek_render_ok = _render_diff_ok(peek_render_change, min_ratio=0.004, min_mean=0.35)
    r18 = bool(flip_ok and fan_ok and peek_render_ok)
    ctx.check(18, r18, f"{'通过' if r18 else '未通过'}：frames={len(peek_frames)}, rotationSpans={rotation_spans}, fanMetrics={fan_metrics}, flipMultiFrame={flip_ok}, fanTransition={fan_ok}, playerRenderChange={peek_render_change}, cardIds={post_ids}。")
    dom_type=await _text(page,'[data-testid="player-hand-type"]')
    ok19=bool(ev and str(pp.get('handType'))==ev[2] and ev[2] in dom_type)
    ctx.check(19,ok19,f"{'通过' if ok19 else '未通过'}：cards={pp.get('cards')}, expectedType={(ev or (None,None,None))[2]}, stateType={pp.get('handType')!r}, domType={dom_type!r}。")

    # R20: execute the causally-linked gameplay evaluator on fixed hands, then cross-check one real deal.
    rule_ev=rule_probe.get('evaluator') if isinstance(rule_probe,dict) else None
    ev_probe=(rule_ev or {}).get('probe') if isinstance(rule_ev,dict) else None
    ev_link=(rule_ev or {}).get('link') if isinstance(rule_ev,dict) else None
    r20_runtime=bool(ev and str(pp.get('handType'))==ev[2])
    r20_engine=bool(isinstance(ev_probe,dict) and ev_probe.get('typesOk') and isinstance(ev_link,dict) and ev_link.get('ok') and ev_link.get('handTypeCausal'))
    rule_probe_unavailable=bool(isinstance(rule_probe,dict) and rule_probe.get('error'))
    # R20 requires all six fixed categories to execute through the real handType path.
    # A missing evaluator probe is missing evidence, not a product pass.
    r20=bool(r20_runtime and r20_engine)
    ctx.check(20,r20,f"{'通过' if r20 else '未通过'}：实际执行牌型函数={(rule_ev or {}).get('name') if isinstance(rule_ev,dict) else None}；六类固定牌测试全部正确={bool(isinstance(ev_probe,dict) and ev_probe.get('typesOk'))}，函数真实参与 handType 生成={bool(isinstance(ev_link,dict) and ev_link.get('handTypeCausal'))}；本局独立计算牌型={(ev or (None,None,None))[2]}，状态牌型={pp.get('handType')}；规则探针异常={(rule_probe or {}).get('error') if isinstance(rule_probe,dict) else None!r}。")
    # R21-R23 are finalized after the real showdown cross-check below.

    # R24 ante / initial pot based on the actual deal delta.
    bplayer=((deal_before or {}).get('player') or {}); bcomp=((deal_before or {}).get('computer') or {})
    aplayer=((dealt or {}).get('player') or {}); acomp=((dealt or {}).get('computer') or {})
    dp=(_finite_num(bplayer.get('chips')) or 0)-(_finite_num(aplayer.get('chips')) or 0)
    dc=(_finite_num(bcomp.get('chips')) or 0)-(_finite_num(acomp.get('chips')) or 0)
    pot=_finite_num((dealt or {}).get('pot'))
    ante_ok=bool(deal_before and dealt and dp>0 and abs(dp-dc)<1e-6 and pot is not None and abs(pot-(dp+dc))<1e-6 and abs((_finite_num(aplayer.get('roundBet')) or 0)-dp)<1e-6 and abs((_finite_num(acomp.get('roundBet')) or 0)-dc)<1e-6)
    ctx.check(24,ante_ok,f"{'通过' if ante_ok else '未通过'}：playerAnte={dp}, computerAnte={dc}, pot={pot}, playerRoundBet={aplayer.get('roundBet')}, computerRoundBet={acomp.get('roundBet')}。")

    # R25 call: capture the synchronous post-click boundary in the same browser task.
    call_pre=await _ensure_player_turn(page); call_mid=None; call_post=None; call_frames=[]; call_mid_disabled={}; call_mid_turn_text=''; computer_illegal_inert=False; call_scene_pre={}
    call_render_before=await _canvas_png(page)
    call_render_motion=b''
    call_render_after=b''
    if call_pre and call_pre.get('canCall'):
        cap=await _click_with_scene_recorder(page,'[data-testid="call-btn"]',1900,True)
        call_scene_pre=(cap.get('sceneBefore') or {}) if isinstance(cap,dict) else {}
        sync_after=cap.get('after') if isinstance(cap,dict) else None
        if isinstance(sync_after,dict) and sync_after.get('phase')=='computer_turn' and sync_after.get('turn')=='computer':
            call_mid=sync_after
        else:
            call_mid=await _wait_state(page,lambda s:s.get('phase')=='computer_turn' and s.get('turn')=='computer',900,15)
        call_mid_disabled=(cap.get('disabled') or {}) if isinstance(cap,dict) else {}
        call_mid_turn_text=str(cap.get('turnText') or '') if isinstance(cap,dict) else ''
        illegal_after=cap.get('illegalAfter') if isinstance(cap,dict) else None
        computer_illegal_inert=bool(call_mid and isinstance(illegal_after,dict) and json.dumps(call_mid,sort_keys=True,ensure_ascii=False)==json.dumps(illegal_after,sort_keys=True,ensure_ascii=False))
        if call_mid and not call_mid_disabled:
            call_mid_disabled=await page.evaluate("""() => Object.fromEntries(['deal','peek','call','raise','fold','compare'].map(k=>{const b=document.querySelector(`[data-testid="${k}-btn"]`);return [k,b?!!b.disabled:null]}))""")
        if call_mid and not call_mid_turn_text:
            call_mid_turn_text=await _text(page,'[data-testid="turn"]')
        # Capture while the human chip is visibly in flight, before waiting for the full trace.
        await page.wait_for_timeout(180)
        call_render_motion=await _canvas_png(page)
        call_frames=await _finish_scene_frame_recorder(page,2600)
        call_render_after=await _canvas_png(page)
        if call_mid: hud_bet=await _hud_snapshot(page,call_mid)
        call_post=await _wait_state(page,lambda s:s.get('phase') in {'player_turn','round_over','eliminated'},4500)
    bp=(call_pre or {}).get('player') or {}; mp=(call_mid or {}).get('player') or {}
    bc0=(call_pre or {}).get('computer') or {}; bcm=(call_mid or {}).get('computer') or {}
    call_chip=(_finite_num(bp.get('chips')) or 0)-(_finite_num(mp.get('chips')) or 0)
    call_comp_chip=(_finite_num(bc0.get('chips')) or 0)-(_finite_num(bcm.get('chips')) or 0)
    call_pot=(_finite_num((call_mid or {}).get('pot')) or 0)-(_finite_num((call_pre or {}).get('pot')) or 0)
    call_bet=(_finite_num(mp.get('roundBet')) or 0)-(_finite_num(bp.get('roundBet')) or 0)
    call_comp_bet=(_finite_num(bcm.get('roundBet')) or 0)-(_finite_num(bc0.get('roundBet')) or 0)
    call_target=_finite_num((call_pre or {}).get('currentBet')); call_round=_finite_num(bp.get('roundBet')) or 0; call_due=max(0.0,(call_target or 0)-call_round) if call_target is not None else None
    # Mapping requires the immediate human wager boundary itself: the player's chip
    # decrease, roundBet increase and pot increase must be the same amount. Opponent
    # follow-up betting is measured separately by R32 and must not be folded into R25.
    call_ok=bool(call_pre and call_pre.get('canCall') and call_mid and call_due is not None and call_due>=0 and abs(call_chip-call_due)<1e-6 and abs(call_chip-call_bet)<1e-6 and abs(call_pot-call_chip)<1e-6 and abs(call_comp_chip)<1e-6 and abs(call_comp_bet)<1e-6)
    ctx.check(25,call_ok,f"{'通过' if call_ok else '未通过'}：跟注前需补 {call_due}，同步点击边界观察到真人筹码减少 {call_chip}、真人 roundBet 增加 {call_bet}、奖池增加 {call_pot}；同一边界电脑筹码变化 {call_comp_chip}，阶段={(call_mid or {}).get('phase')}。")

    # R16/R30/R33 explicitly observe the automatic computer-turn boundary, then its natural completion.
    gate_computer_ok=bool(call_mid and all(v is True for v in call_mid_disabled.values() if v is not None))
    computer_auto=bool(call_mid and call_post and call_mid.get('turn')=='computer' and (call_post or {}).get('phase') in {'player_turn','round_over','eliminated'} and (call_post or {}).get('turn')!='computer')
    ctx.check(30,computer_auto,f"{'通过' if computer_auto else '未通过'}：humanAction=call, observedBoundaryPhase={(call_mid or {}).get('phase')}, observedBoundaryTurn={(call_mid or {}).get('turn')}, finalPhase={(call_post or {}).get('phase')}, finalTurn={(call_post or {}).get('turn')}；未点击任何电脑控件。")
    bc=(call_mid or {}).get('computer') or {}; ac=(call_post or {}).get('computer') or {}
    computer_chip=(_finite_num(bc.get('chips')) or 0)-(_finite_num(ac.get('chips')) or 0)
    computer_round=(_finite_num(ac.get('roundBet')) or 0)-(_finite_num(bc.get('roundBet')) or 0)
    computer_pot=(_finite_num((call_post or {}).get('pot')) or 0)-(_finite_num((call_mid or {}).get('pot')) or 0)
    ai_action_call=_infer_ai_action(call_mid,call_post)
    if ai_action_call in {'call','raise'}:
        computer_bet_ok=computer_chip>0 and abs(computer_chip-computer_round)<1e-6 and abs(computer_chip-computer_pot)<1e-6
    elif ai_action_call=='fold':
        computer_bet_ok=abs(computer_chip)<1e-6 and abs(computer_round)<1e-6 and abs(computer_pot)<1e-6
    elif ai_action_call=='compare':
        computer_bet_ok=abs(computer_chip)<1e-6 and abs(computer_round)<1e-6
    else:
        computer_bet_ok=False
    r32_initial={"action":ai_action_call,"ok":bool(call_mid and call_post and computer_bet_ok),"computerChipDelta":computer_chip,"computerRoundBetDelta":computer_round,"potDelta":computer_pot}

    # R26 raise: use the same synchronous-boundary capture as Call.
    raise_pre=await _ensure_player_turn(page); raise_mid=None; raise_post=None; raise_frames=[]; raise_scene_pre={}
    raise_render_before=await _canvas_png(page)
    raise_render_motion=b''
    raise_render_after=b''
    if raise_pre and raise_pre.get('canRaise'):
        capr=await _click_with_scene_recorder(page,'[data-testid="raise-btn"]',1900,False)
        raise_scene_pre=(capr.get('sceneBefore') or {}) if isinstance(capr,dict) else {}
        sync_raise=capr.get('after') if isinstance(capr,dict) else None
        if isinstance(sync_raise,dict) and sync_raise.get('phase')=='computer_turn' and sync_raise.get('turn')=='computer':
            raise_mid=sync_raise
        else:
            raise_mid=await _wait_state(page,lambda s:s.get('phase')=='computer_turn' and s.get('turn')=='computer',900,15)
        if raise_mid and hud_bet is None:
            hud_bet=await _hud_snapshot(page,raise_mid)
        await page.wait_for_timeout(180)
        raise_render_motion=await _canvas_png(page)
        raise_frames=await _finish_scene_frame_recorder(page,2600)
        raise_render_after=await _canvas_png(page)
        raise_post=await _wait_state(page,lambda s:s.get('phase') in {'player_turn','round_over','eliminated'},4500)
    rp0=(raise_pre or {}).get('player') or {}; rpm=(raise_mid or {}).get('player') or {}
    rc0=(raise_pre or {}).get('computer') or {}; rcm=(raise_mid or {}).get('computer') or {}
    rchip=(_finite_num(rp0.get('chips')) or 0)-(_finite_num(rpm.get('chips')) or 0)
    rcomp_chip=(_finite_num(rc0.get('chips')) or 0)-(_finite_num(rcm.get('chips')) or 0)
    rpot=(_finite_num((raise_mid or {}).get('pot')) or 0)-(_finite_num((raise_pre or {}).get('pot')) or 0)
    rround=(_finite_num(rpm.get('roundBet')) or 0)-(_finite_num(rp0.get('roundBet')) or 0)
    rcomp_round=(_finite_num(rcm.get('roundBet')) or 0)-(_finite_num(rc0.get('roundBet')) or 0)
    rb0=_finite_num((raise_pre or {}).get('currentBet')); rb1=_finite_num((raise_mid or {}).get('currentBet'))
    raise_round0=_finite_num(rp0.get('roundBet')) or 0; raise_due=max(0.0,(rb1 or 0)-raise_round0) if rb1 is not None else None
    raise_ok=bool(raise_pre and raise_pre.get('canRaise') and raise_mid and rb0 is not None and rb1 is not None and rb1>rb0 and raise_due is not None and raise_due>0 and abs(rchip-raise_due)<1e-6 and abs(rchip-rround)<1e-6 and abs(rpot-rchip)<1e-6 and abs(rcomp_chip)<1e-6 and abs(rcomp_round)<1e-6)
    ctx.check(26,raise_ok,f"{'通过' if raise_ok else '未通过'}：targetBet={rb0}->{rb1}, roundBetBefore={raise_round0}, amountDue={raise_due}, boundaryPhase={(raise_mid or {}).get('phase')}, playerChipDelta={rchip}, playerRoundBetDelta={rround}, computerChipDeltaAtBoundary={rcomp_chip}, immediatePotDelta={rpot}。")

    # R33: bind real player/computer turn states to non-empty DOM text at those exact boundaries.
    player_turn_text=initial_player_turn_text
    player_match=bool(dealt and dealt.get('turn')=='player' and re.search(r"真人|玩家|player|you",player_turn_text,re.I))
    computer_match=bool(call_mid and call_mid.get('turn')=='computer' and re.search(r"电脑|computer|\bai\b",call_mid_turn_text,re.I))
    ctx.check(33,player_match and computer_match,f"{'通过' if player_match and computer_match else '未通过'}：playerStateTurn={(dealt or {}).get('turn')}, playerDomTurn={player_turn_text!r}, computerStateTurn={(call_mid or {}).get('turn')}, computerDomTurn={call_mid_turn_text!r}；只检查运行时 DOM，不扫描源码词。")

    # R27 fold settlement and once-only behavior; also capture score/chip conservation.
    fold_pre=await _ensure_player_turn(page); fold_end=None
    fold_visual_before=await page.evaluate("""() => {const s=document.querySelector('[data-testid="game-status"]'), r=document.getElementById('root'); const one=e=>e?{color:getComputedStyle(e).color,bg:getComputedStyle(e).backgroundColor,border:getComputedStyle(e).borderColor,shadow:getComputedStyle(e).boxShadow,className:e.className||''}:null; return {status:one(s),root:one(r)};}""")
    if fold_pre and fold_pre.get('canFold'):
        await _click(page,'[data-testid="fold-btn"]')
        fold_end=await _wait_state(page,lambda s:s.get('phase') in {'round_over','eliminated'},3500)
    fold_visual_after=await page.evaluate("""() => {const s=document.querySelector('[data-testid="game-status"]'), r=document.getElementById('root'); const one=e=>e?{color:getComputedStyle(e).color,bg:getComputedStyle(e).backgroundColor,border:getComputedStyle(e).borderColor,shadow:getComputedStyle(e).boxShadow,className:e.className||''}:null; return {status:one(s),root:one(r)};}""")
    fold_status_visual=await _visual_state(page)
    hud_settlement=await _hud_snapshot(page,fold_end)
    fp=(fold_pre or {}).get('player') or {}; fc=(fold_pre or {}).get('computer') or {}
    ep=(fold_end or {}).get('player') or {}; ec=(fold_end or {}).get('computer') or {}
    fpot=_finite_num((fold_pre or {}).get('pot')) or 0
    comp_gain=(_finite_num(ec.get('chips')) or 0)-(_finite_num(fc.get('chips')) or 0)
    score0=(fold_pre or {}).get('score') or {}; score1=(fold_end or {}).get('score') or {}
    fold_ok=bool(fold_end and fold_end.get('winner')=='computer' and fold_end.get('outcome')=='fold' and abs(comp_gain-fpot)<1e-6 and (_finite_num((fold_end or {}).get('pot')) or 0) <= 1e-6)
    # Wait and click again to ensure no second settlement.
    snap=( _finite_num(ec.get('chips')), score1.get('computer'))
    await _click(page,'[data-testid="fold-btn"]',force=True); await page.wait_for_timeout(220)
    fold_late=await _zjh(page); lc=(fold_late or {}).get('computer') or {}; ls=(fold_late or {}).get('score') or {}
    once=( _finite_num(lc.get('chips')), ls.get('computer'))==snap
    ctx.check(27,fold_ok and once,f"{'通过' if fold_ok and once else '未通过'}：potBefore={fpot}, computerGain={comp_gain}, winner={(fold_end or {}).get('winner')}, outcome={(fold_end or {}).get('outcome')}, potAfter={(fold_end or {}).get('pot')}, settlementStable={once}。")

    # R35 duplicate input: a double-click must equal exactly one independently calculated fold settlement.
    await _click(page,'[data-testid="deal-btn"]'); dbl_pre=await _wait_state(page,lambda x:x.get('phase')=='player_turn',4000)
    dbl_end=None
    if dbl_pre and dbl_pre.get('canFold'):
        try: await page.locator('[data-testid="fold-btn"]').first.dblclick(delay=25, timeout=1500)
        except Exception: pass
        dbl_end=await _wait_state(page,lambda x:x.get('phase') in {'round_over','eliminated'},3000)
    dp0=(dbl_pre or {}).get('player') or {}; dc0=(dbl_pre or {}).get('computer') or {}; dp1=(dbl_end or {}).get('player') or {}; dc1=(dbl_end or {}).get('computer') or {}
    dpot=_finite_num((dbl_pre or {}).get('pot')) or 0; ds0=(dbl_pre or {}).get('score') or {}; ds1=(dbl_end or {}).get('score') or {}
    exact_once=bool(dbl_end and dbl_end.get('winner')=='computer' and (dbl_end.get('outcome') in {'fold','elimination'}) and
      abs((_finite_num(dp1.get('chips')) or 0)-(_finite_num(dp0.get('chips')) or 0))<1e-6 and
      abs(((_finite_num(dc1.get('chips')) or 0)-(_finite_num(dc0.get('chips')) or 0))-dpot)<1e-6 and
      (_finite_num((dbl_end or {}).get('pot')) or 0)<=1e-6 and
      ((_finite_num(ds1.get('computer')) or 0)-(_finite_num(ds0.get('computer')) or 0))==1 and
      ((_finite_num(ds1.get('player')) or 0)-(_finite_num(ds0.get('player')) or 0))==0)
    dbl_sig=json.dumps(dbl_end,sort_keys=True,ensure_ascii=False) if dbl_end else ''
    await _click(page,'[data-testid="fold-btn"]',force=True); await page.wait_for_timeout(180)
    dbl_late=await _zjh(page); stable_after=bool(dbl_end and dbl_late and json.dumps(dbl_late,sort_keys=True,ensure_ascii=False)==dbl_sig)
    # A second independent path (the synchronous computer-turn probe captured during Call)
    # verifies that rapid/forced duplicate actions are inert outside the legal player boundary.
    dbl_ok=bool(exact_once and stable_after and computer_illegal_inert)
    ctx.check(35,dbl_ok,f"{'通过' if dbl_ok else '未通过'}：真人 Fold 快速双击只结算一次={bool(exact_once and stable_after)}；Call 后电脑回合强制重复/非法动作保持状态不变={computer_illegal_inert}；potBefore={dpot}, winner={(dbl_end or {}).get('winner')}, outcome={(dbl_end or {}).get('outcome')}。")

    roundover_disabled=await page.evaluate("""() => Object.fromEntries(['deal','peek','call','raise','fold','compare'].map(k=>{const b=document.querySelector(`[data-testid="${k}-btn"]`);return [k,b?!!b.disabled:null]}))""")
    waiting_gate_ok=bool(s0 and s0.get('phase')=='waiting' and waiting_disabled.get('deal') is False and all(waiting_disabled.get(k) is True for k in ['peek','call','raise','fold','compare']))
    round_phase=(dbl_end or {}).get('phase')
    roundover_gate_ok=bool(dbl_end and round_phase in {'round_over','eliminated'} and all(roundover_disabled.get(k) is True for k in ['peek','call','raise','fold','compare']) and roundover_disabled.get('deal') is (False if round_phase=='round_over' else True))
    full_gate_ok=bool(waiting_gate_ok and st and st.get('phase')=='player_turn' and gate_player_ok and gate_computer_ok and roundover_gate_ok)
    ctx.check(16,full_gate_ok,f"{'通过' if full_gate_ok else '未通过'}：waitingDisabled={waiting_disabled}, playerCan={can_map}, playerDisabled={disabled}, computerBoundary={(call_mid or {}).get('phase')}, computerDisabled={call_mid_disabled}, roundOverPhase={(dbl_end or {}).get('phase')}, roundOverDisabled={roundover_disabled}。")

    # R34 illegal input after round end must be inert.
    illegal_pre=dbl_end or await _zjh(page)
    before_sig=json.dumps({k:(illegal_pre or {}).get(k) for k in ('pot','currentBet','winner','outcome','score')},sort_keys=True,ensure_ascii=False)+json.dumps({x:((illegal_pre or {}).get(x) or {}) for x in ('player','computer')},sort_keys=True,ensure_ascii=False)
    for sel in ('call','raise','fold','compare'):
        await _click(page,f'[data-testid="{sel}-btn"]',force=True)
    await page.wait_for_timeout(180); illegal_post=await _zjh(page)
    after_sig=json.dumps({k:(illegal_post or {}).get(k) for k in ('pot','currentBet','winner','outcome','score')},sort_keys=True,ensure_ascii=False)+json.dumps({x:((illegal_post or {}).get(x) or {}) for x in ('player','computer')},sort_keys=True,ensure_ascii=False)
    r34=bool(computer_illegal_inert and illegal_pre and illegal_post and before_sig==after_sig)
    ctx.check(34,r34,f"{'通过' if r34 else '未通过'}：computerTurnForcedActionsStateStable={computer_illegal_inert}, roundOverIllegalActionsStateStable={bool(illegal_pre and illegal_post and before_sig==after_sig)}。")

    # R36 conservation / R37 score on fold settlement.
    fold_values_before=[_finite_num(fp.get('chips')),_finite_num(fc.get('chips')),_finite_num((fold_pre or {}).get('pot'))]
    fold_values_after=[_finite_num(ep.get('chips')),_finite_num(ec.get('chips')),_finite_num((fold_end or {}).get('pot'))]
    fold_fields_complete=all(x is not None for x in [*fold_values_before,*fold_values_after])
    total_before=sum(x for x in fold_values_before if x is not None)
    total_after=sum(x for x in fold_values_after if x is not None)
    nonneg=bool(fold_fields_complete and all(x is not None and x>=0 for x in fold_values_after[:2]))
    cons_ok=bool(fold_pre and fold_end and fold_fields_complete and abs(total_before-total_after)<1e-6 and nonneg)
    fold_conservation=cons_ok
    pdelta=(_finite_num(score1.get('player')) or 0)-(_finite_num(score0.get('player')) or 0); cdelta=(_finite_num(score1.get('computer')) or 0)-(_finite_num(score0.get('computer')) or 0)
    fold_score_ok=bool(fold_end and ((fold_end.get('winner')=='computer' and cdelta==1 and pdelta==0) or (fold_end.get('winner')=='player' and pdelta==1 and cdelta==0))) and once

    # R38 next-round reset from the completed double-click fold round.
    settled=dbl_end or fold_end
    settled_chips={s:_finite_num(((settled or {}).get(s) or {}).get('chips')) for s in ('player','computer')}; settled_score=(settled or {}).get('score') or {}; settled_round=(settled or {}).get('round')
    await _click(page,'[data-testid="deal-btn"]'); next_round=await _wait_state(page,lambda s:len((s.get('player') or {}).get('cards') or [])==3 and s.get('phase')!='dealing',4000)
    nrp=(next_round or {}).get('player') or {}; nrc=(next_round or {}).get('computer') or {}
    # Chips may drop by the new ante, so compare pre-deal settlement to next-round chips + roundBet.
    chip_carry=True
    for side, obj in [('player',nrp),('computer',nrc)]:
        scv=settled_chips[side]; cv=_finite_num(obj.get('chips')); rb=_finite_num(obj.get('roundBet'))
        if scv is None or cv is None or rb is None or abs((cv+rb)-scv)>1e-6: chip_carry=False
    old_ids={str(c.get('id')) for side in ('player','computer') for c in (((settled or {}).get(side) or {}).get('cards') or []) if isinstance(c,dict)}
    new_ids={str(c.get('id')) for side in ('player','computer') for c in (((next_round or {}).get(side) or {}).get('cards') or []) if isinstance(c,dict)}
    current_ids_ok=bool(len(new_ids)==6 and len([c for side in ('player','computer') for c in (((next_round or {}).get(side) or {}).get('cards') or []) if isinstance(c,dict)])==6)
    nr_pot=_finite_num((next_round or {}).get('pot')); nr_bet=_finite_num((next_round or {}).get('currentBet')); nr_prb=_finite_num(nrp.get('roundBet')); nr_crb=_finite_num(nrc.get('roundBet'))
    wager_reset_ok=bool(nr_pot is not None and nr_prb is not None and nr_crb is not None and nr_bet is not None and nr_prb>0 and nr_crb>0 and abs(nr_pot-(nr_prb+nr_crb))<1e-6 and nr_bet>=max(nr_prb,nr_crb)-1e-6 and nr_bet<=nr_pot+1e-6)
    reset_ok=bool(next_round and (settled_round is None or (next_round.get('round') or 0)>settled_round) and next_round.get('winner') is None and next_round.get('outcome') is None and not nrp.get('looked') and not nrp.get('folded') and not nrc.get('folded') and (next_round.get('score') or {})==settled_score and chip_carry and current_ids_ok and wager_reset_ok)
    ctx.check(38,reset_ok,f"{'通过' if reset_ok else '未通过'}：局号从 {settled_round} 进入 {(next_round or {}).get('round')}；累计计分保留={((next_round or {}).get('score')==settled_score)}，筹码按上一局余额扣除新底注后连续={chip_carry}；新一局 6 张牌 ID 合法={current_ids_ok}，看牌/弃牌/胜负/下注状态均已重置={wager_reset_ok and not nrp.get('looked') and not nrp.get('folded') and not nrc.get('folded') and (next_round or {}).get('winner') is None}。")

    # R39: compare the numeric HUD with the same live state at four genuinely distinct phases.
    cur=await _zjh(page) or {}
    hud_stages={'waiting':hud_waiting,'dealt':hud_dealt,'bet':hud_bet,'settlement':hud_settlement}
    hud_ok=all(isinstance(v,dict) and v.get('ok') for v in hud_stages.values())
    bet_changed=bool(hud_dealt and hud_bet and any(abs((_finite_num((hud_bet.get('actual') or {}).get(k)) or 0)-(_finite_num((hud_dealt.get('actual') or {}).get(k)) or 0))>1e-6 for k in ('pot','playerChips','computerChips','currentBet')))
    phase_ok=bool((hud_waiting or {}).get('phase')=='waiting' and (hud_dealt or {}).get('phase') in {'player_turn','computer_turn'} and (hud_bet or {}).get('phase') in {'computer_turn','player_turn','round_over'} and bet_changed and (hud_settlement or {}).get('phase') in {'round_over','eliminated'})
    ctx.check(39,hud_ok and phase_ok,f"{'通过' if hud_ok and phase_ok else '未通过'}：等待、发牌后、下注后、结算后四个阶段的 HUD 数值均与真实状态逐项一致={hud_ok}；四阶段覆盖了不同 phase={phase_ok}。")

    # R40 secrecy before peek, reveal after peek. Verify both exact cards and actual hand type.
    hand_before=await _text(page,'[data-testid="player-hand"]'); type_before=await _text(page,'[data-testid="player-hand-type"]')
    curp=(cur.get('player') or {}); curc=(cur.get('computer') or {})
    suit_symbol={'S':'♠','H':'♥','D':'♦','C':'♣'}
    def visible_tokens(cards):
        out=[]
        for card in cards or []:
            if isinstance(card,dict):
                rank=str(card.get('rank') or '').upper(); sym=suit_symbol.get(str(card.get('suit') or '').upper(),'')
                if rank and sym: out.append(rank+sym)
        return out
    player_visible_tokens=visible_tokens(curp.get('cards') or []); computer_visible_tokens=visible_tokens(curc.get('cards') or [])
    compact_hand=re.sub(r'\s+','',hand_before).upper(); compact_type=re.sub(r'\s+','',type_before)
    expected_hidden=evaluate_hand(curp.get('cards') or []); expected_hidden_type=(expected_hidden or (None,None,None))[2]
    no_card_leak=not any(tok in compact_hand for tok in player_visible_tokens)
    no_type_leak=bool(expected_hidden_type and expected_hidden_type not in compact_type and not any(name in compact_type for name in TYPE_NAME.values()))
    body_before=await _text(page,'body'); compact_body=re.sub(r'\s+','',body_before).upper()
    computer_dom_hidden=not any(tok in compact_body for tok in computer_visible_tokens)
    if cur.get('canPeek'): await _click(page,'[data-testid="peek-btn"]')
    reveal=await _wait_state(page,lambda x:bool((x.get('player') or {}).get('looked')),2000)
    hand_after=await _text(page,'[data-testid="player-hand"]'); type_after=await _text(page,'[data-testid="player-hand-type"]')
    revp=(reveal or {}).get('player') or {}; revc=(reveal or {}).get('computer') or {}; rev_eval=evaluate_hand(revp.get('cards') or [])
    after_tokens=visible_tokens(revp.get('cards') or []); compact_after=re.sub(r'\s+','',hand_after).upper()
    exact_cards_visible=bool(len(after_tokens)==3 and all(tok in compact_after for tok in after_tokens))
    reveal_ok=bool(reveal and rev_eval and exact_cards_visible and rev_eval[2] in type_after and all(bool(x.get('faceUp')) for x in revp.get('cards') or [] if isinstance(x,dict)) and all(not bool(x.get('faceUp')) for x in revc.get('cards') or [] if isinstance(x,dict)))
    r40=bool(no_card_leak and no_type_leak and computer_dom_hidden and reveal_ok)
    ctx.check(40,r40,f"{'通过' if r40 else '未通过'}：看牌前真人牌面不泄露={no_card_leak}、牌型不泄露={no_type_leak}，电脑牌在 DOM 中保持隐藏={computer_dom_hidden}；看牌后真人 3 张真实牌全部准确显示={exact_cards_visible}，页面牌型={type_after!r}，独立计算牌型={(rev_eval or (None,None,None))[2]}。")
    _progress("checks: visual screenshots / VLM")
    # Visual-only Rubrics: capture a real neutral/hover pair; hidden test state is never sent to VLM.
    visual_state=reveal or await _zjh(page)
    visual_ready=bool(visual_state and visual_state.get('phase')=='player_turn' and len((visual_state.get('player') or {}).get('cards') or [])==3 and (visual_state.get('player') or {}).get('looked'))
    try: await page.mouse.move(8,8); await page.wait_for_timeout(120)
    except Exception: pass
    hover_before=await page.screenshot(type='png')
    action_before=await _actions_region_png(page)
    # R48 must judge the actual Three.js card faces.  Crop away the HUD text so a
    # model cannot substitute the DOM hand label for unreadable 3D rank/suit textures.
    card_evidence=await _canvas_region_png(page,(0.12,0.40,0.88,0.80))
    hovered=None
    for key in ('raise','call','fold','compare','peek'):
        try:
            loc=page.locator(f'[data-testid="{key}-btn"]').first
            if await loc.is_visible() and not await loc.is_disabled():
                await loc.hover(timeout=1000); await page.wait_for_timeout(160); hovered=key; break
        except Exception: pass
    hover_after=await page.screenshot(type='png')
    action_after=await _actions_region_png(page)
    hover_pair=await _combine_before_after_png(page,action_before,action_after)
    vlm_jobs=[]
    if visual_ready:
        vlm_jobs.extend([
            ctx.vlm_png(46,'只看这张完整截图本身判断：是否呈现绿色绒布牌桌，中央有牌堆，上方电脑牌区、下方真人牌区对坐且空间层次清晰？不要根据测试状态或文字说明推断。',hover_before),
            ctx.vlm_png(48,'这张图已裁到真实 WebGL 牌桌区域。只判断实际渲染的 3D 扑克牌：至少三张可见牌的点数与花色是否能直接从牌面纹理清楚辨识，并且牌体具有轻微曲面/实体感？不得使用截图外的 DOM 手牌文字或状态文字代替牌面证据；如果牌面过曝、发白、模糊到 rank/suit 不可辨认，必须回答 NO。',card_evidence),
            ctx.vlm_png(49,'只看这张完整截图判断：真实 3D 牌面、双方筹码、奖池、当前行动/状态和底部操作区是否都清晰可辨？若关键 3D 牌面因遮挡、裁切、模糊、过暗或过曝而不可读，即使 HUD/文字仍可读也必须回答 NO。',hover_before),
        ])
    else:
        await ctx.vlm_zero_many([46,48,49],hover_after,'visual-precondition-failed: 未能进入真实已发牌且已看牌的可玩状态')
    if visual_ready and hovered:
        vlm_jobs.append(ctx.vlm_png(47,'只看这张放大的 BEFORE/AFTER 操作区并排图判断：六类核心按钮标签是否完整可读；AFTER 中同一个被悬停按钮相比 BEFORE 是否出现清楚的抬升或阴影变化，并且没有遮挡相邻按钮或状态信息？半透明层次可由透明背景、边框、高光和阴影形成，不要求必须使用某个 CSS 属性。',hover_pair))
    else:
        await ctx.vlm_zero_many([47],hover_pair,'visual-precondition-failed: 未能真实 hover 一个可用核心按钮')
    if vlm_jobs:
        await asyncio.gather(*vlm_jobs)

    # R28/R29 compare: advance naturally until compare is legal.
    cmp_pre=await _advance_until_compare(page); cmp_frames=[]; cmp_end=None; cmp_mid=None; cmp_status_visual=None; cmp_expected=None
    cmp_render_before=await _canvas_png(page)
    cmp_render_after=b''
    if cmp_pre and cmp_pre.get('canCompare'):
        pc=(cmp_pre.get('player') or {}).get('cards') or []; cc=(cmp_pre.get('computer') or {}).get('cards') or []
        cmp_expected=compare_hands(pc,cc)
        await _click(page,'[data-testid="compare-btn"]')
        cmp_mid=await _wait_state(page,lambda s:s.get('phase')=='comparing',700,20)
        if cmp_mid: cmp_status_visual=await _visual_state(page)
        cmp_frames=await _frames(page,1200,35)
        cmp_render_after=await _canvas_png(page)
        cmp_end=await _wait_state(page,lambda s:s.get('phase') in {'round_over','eliminated'},3500)
    winner_expected='player' if cmp_expected==1 else ('computer' if cmp_expected==-1 else None)
    cmp_pot=_finite_num((cmp_pre or {}).get('pot')) or 0
    cmp_before_vals=[_finite_num(((cmp_pre or {}).get(side) or {}).get('chips')) for side in ('player','computer')]+[_finite_num((cmp_pre or {}).get('pot'))]
    cmp_after_vals=[_finite_num(((cmp_end or {}).get(side) or {}).get('chips')) for side in ('player','computer')]+[_finite_num((cmp_end or {}).get('pot'))]
    cmp_fields_complete=all(x is not None for x in [*cmp_before_vals,*cmp_after_vals])
    cmp_before_total=sum(x for x in cmp_before_vals if x is not None)
    cmp_after_total=sum(x for x in cmp_after_vals if x is not None)
    payout_ok=bool(cmp_end and cmp_fields_complete and abs(cmp_before_total-cmp_after_total)<1e-6)
    winner_ok=False
    tie_detail=None
    if cmp_expected in {1,-1} and cmp_end:
        side=winner_expected
        pre_ch=_finite_num(((cmp_pre or {}).get(side) or {}).get('chips')) or 0
        post_ch=_finite_num((cmp_end.get(side) or {}).get('chips')) or 0
        payout_ok=payout_ok and (_finite_num(cmp_end.get('pot')) or 0)<=1e-6 and abs((post_ch-pre_ch)-cmp_pot)<1e-6
        winner_ok=cmp_end.get('winner')==winner_expected
    elif cmp_expected==0 and cmp_end:
        pre_p=_finite_num(((cmp_pre or {}).get('player') or {}).get('chips')) or 0
        pre_c=_finite_num(((cmp_pre or {}).get('computer') or {}).get('chips')) or 0
        post_p=_finite_num((cmp_end.get('player') or {}).get('chips')) or 0
        post_c=_finite_num((cmp_end.get('computer') or {}).get('chips')) or 0
        gain_p=post_p-pre_p; gain_c=post_c-pre_c
        score0=(cmp_pre or {}).get('score') or {}; score1=cmp_end.get('score') or {}
        score_unchanged=score0==score1
        winner_ok=cmp_end.get('winner') is None
        # The prompt forbids suit-based tie breaking but does not prescribe split-vs-carry pot policy.
        # Accept any neutral tie settlement that conserves total value and awards no score/winner.
        neutral_tie=bool(score_unchanged and winner_ok and abs(cmp_before_total-cmp_after_total)<1e-6)
        payout_ok=payout_ok and neutral_tie
        tie_detail={'gainPlayer':gain_p,'gainComputer':gain_c,'potAfter':_finite_num(cmp_end.get('pot')),'neutralTie':neutral_tie,'scoreUnchanged':score_unchanged}
    cmp_ok=bool(cmp_end and cmp_end.get('outcome')=='compare' and winner_ok and payout_ok)
    ctx.check(28,cmp_ok,f"{'通过' if cmp_ok else '未通过'}：双方真实三张牌的独立比较结果={cmp_expected}，预期 winner={winner_expected}，页面实际 winner={(cmp_end or {}).get('winner')}；结算类型={(cmp_end or {}).get('outcome')}，奖池从 {cmp_pot} 归零为 {(cmp_end or {}).get('pot')}，双方筹码加奖池总价值从 {cmp_before_total} 到 {cmp_after_total}，胜者与派彩均正确={winner_ok and payout_ok}。")
    compare_conservation=bool(cmp_end and cmp_fields_complete and abs(cmp_before_total-cmp_after_total)<1e-6 and all(x is not None and x>=0 for x in cmp_after_vals[:2]))
    r36=bool(fold_conservation and compare_conservation)
    ctx.check(36,r36,f"{'通过' if r36 else '未通过'}：foldConservation={fold_conservation}, compareConservation={compare_conservation}, foldTotal={total_before}->{total_after}, compareTotal={cmp_before_total}->{cmp_after_total}。")
    compare_ids=[]
    if cmp_pre:
        compare_ids=[str(c.get('id')) for side in ('player','computer') for c in ((cmp_pre.get(side) or {}).get('cards') or []) if isinstance(c,dict)]
    moving=sum(1 for cid in compare_ids if _has_motion(_track_positions(cmp_frames,cid),0.12)[0])
    # final scene cards should be visible in compare/round_over.
    final_sc=cmp_frames[-1] if cmp_frames else await _scene(page) or {}
    byid={str(c.get('id')):c for c in final_sc.get('cards',[]) if isinstance(c,dict)}
    faceup=sum(1 for cid in compare_ids if cid in byid and bool(byid[cid].get('faceUp')))
    compare_owner=sum(1 for cid in compare_ids if cid in byid and str(byid[cid].get('owner'))=='compare')
    central=sum(1 for cid in compare_ids if cid in byid and (_vec(byid[cid].get('position')) is not None) and abs((_vec(byid[cid].get('position')) or (99,99,99))[0])<3.2 and abs((_vec(byid[cid].get('position')) or (99,99,99))[2])<1.2)
    compare_render_change=await _png_region_diff(page,cmp_render_before,cmp_render_after,(0.12,0.18,0.88,0.78))
    compare_render_ok=_render_diff_ok(compare_render_change,min_ratio=0.005,min_mean=0.35)
    ok29=len(compare_ids)==6 and moving==6 and faceup==6 and compare_owner==6 and central==6 and compare_render_ok
    ctx.check(29,ok29,f"{'通过' if ok29 else '未通过'}：cardIds={compare_ids}, movingCards={moving}/6, finalFaceUp={faceup}/6, compareOwner={compare_owner}/6, centralCards={central}/6, sampledFrames={len(cmp_frames)}, centerRenderChange={compare_render_change}。")

    # R21-R23: fixed execution is accepted only from a function whose result causally drives showdown.
    compare_probe=rule_probe.get('compare') if isinstance(rule_probe,dict) else None
    compare_source=rule_probe.get('compareSource') if isinstance(rule_probe,dict) else None
    compare_link=(compare_source or {}).get('link') if isinstance(compare_source,dict) else None
    compare_causal=bool(isinstance(compare_link,dict) and compare_link.get('showdownCausal'))
    static_compare_ok=bool(isinstance(compare_probe,dict) and compare_probe.get('orderOk') and compare_causal)
    r21=bool(cmp_ok and static_compare_ok)
    ctx.check(21,r21,f"{'通过' if r21 else '未通过'}：固定六类牌型顺序探针={'全部正确' if static_compare_ok else '未完整通过'}；比较函数是否真实驱动 showdown={compare_causal}；真实比牌独立结果={cmp_expected}，页面最终 winner={(cmp_end or {}).get('winner')}；规则探针异常={((rule_probe or {}).get('error') if isinstance(rule_probe,dict) else None)!r}。")
    static_tie_ok=bool(isinstance(compare_probe,dict) and compare_probe.get('tieOk') and compare_causal)
    no_suit=((compare_probe or {}).get('noSuit') if isinstance(compare_probe,dict) else None)
    r22=bool(cmp_ok and static_tie_ok and no_suit==0)
    ctx.check(22,r22,f"{'通过' if r22 else '未通过'}：六类同牌型高低固定牌测试={'全部正确' if static_tie_ok else '未完整通过'}；同点数不同花色比较结果={no_suit}（0 表示平局）；真实 showdown 路径={compare_causal}，真实比牌独立结果={cmp_expected}。")
    edge_eval=bool(isinstance(ev_probe,dict) and ev_probe.get('edgeOk') and isinstance(ev_link,dict) and ev_link.get('handTypeCausal'))
    edge_compare=bool(isinstance(compare_probe,dict) and compare_probe.get('edgeCompareOk') and compare_causal)
    r23=bool(r20_runtime and cmp_ok and edge_eval and edge_compare)
    edge_detail={'A23<234':(compare_probe or {}).get('a23_234') if isinstance(compare_probe,dict) else None,'QKA>JQK':(compare_probe or {}).get('qka_jqk') if isinstance(compare_probe,dict) else None}
    ctx.check(23,r23,f"{'通过' if r23 else '未通过'}：evaluatorEdgeOK={edge_eval}, compareEdges={edge_detail}, handTypeCausal={(ev_link or {}).get('handTypeCausal') if isinstance(ev_link,dict) else None}, showdownCausal={compare_causal}, ruleProbeUnavailable={rule_probe_unavailable}。")

    # R37 also requires compare scoring, not only fold scoring.
    cmp_score0=(cmp_pre or {}).get('score') or {}; cmp_score1=(cmp_end or {}).get('score') or {}
    cpdelta=(_finite_num(cmp_score1.get('player')) or 0)-(_finite_num(cmp_score0.get('player')) or 0); ccdelta=(_finite_num(cmp_score1.get('computer')) or 0)-(_finite_num(cmp_score0.get('computer')) or 0)
    if cmp_expected==1: compare_score_ok=bool(cmp_end and cpdelta==1 and ccdelta==0)
    elif cmp_expected==-1: compare_score_ok=bool(cmp_end and cpdelta==0 and ccdelta==1)
    elif cmp_expected==0: compare_score_ok=bool(cmp_end and cpdelta==0 and ccdelta==0)
    else: compare_score_ok=False
    score_sig=json.dumps((cmp_end or {}).get('score') or {},sort_keys=True)
    await page.wait_for_timeout(160); score_stable=json.dumps(((await _zjh(page) or {}).get('score') or {}),sort_keys=True)==score_sig
    r37=bool(fold_score_ok and compare_score_ok and score_stable)
    ctx.check(37,r37,f"{'通过' if r37 else '未通过'}：foldScoreOK={fold_score_ok}, compareExpected={cmp_expected}, compareScoreDelta=({cpdelta},{ccdelta}), compareScoreOK={compare_score_ok}, scoreStableAfterSettlement={score_stable}。")

    # R51: once showdown is revealed, computer handType must equal an independent evaluator.
    comp_revealed=(cmp_end or {}).get('computer') or {}; comp_eval=evaluate_hand(comp_revealed.get('cards') or [])
    r51=bool(cmp_end and comp_eval and str(comp_revealed.get('handType'))==comp_eval[2] and len(comp_revealed.get('cards') or [])==3)
    ctx.check(51,r51,f"{'通过' if r51 else '未通过'}：computerCards={comp_revealed.get('cards')}, independentType={(comp_eval or (None,None,None))[2]}, stateHandType={comp_revealed.get('handType')}。")

    # R41: bind real phases/turns to DOM text observed at those exact states; no source vocabulary or hidden data attributes.
    waiting_text=((initial_visual.get('status') or {}).get('text') or '') if initial_visual else ''
    waiting_turn=(initial_visual.get('turn') or '') if initial_visual else ''
    fold_text=((fold_status_visual.get('status') or {}).get('text') or '') if fold_status_visual else ''
    compare_text=((cmp_status_visual.get('status') or {}).get('text') or '') if cmp_status_visual else ''
    waiting_ok=bool(s0 and s0.get('phase')=='waiting' and re.search(r'等待|wait|ready|开始',waiting_text,re.I))
    player_turn_ok=bool(dealt and dealt.get('turn')=='player' and re.search(r'真人|玩家|player|you',initial_player_turn_text,re.I))
    computer_turn_ok=bool(call_mid and call_mid.get('turn')=='computer' and re.search(r'电脑|computer|\bai\b',call_mid_turn_text,re.I))
    fold_status_ok=bool(fold_end and fold_end.get('outcome')=='fold' and re.search(r'胜|win|fold|弃',fold_text,re.I))
    compare_status_ok=bool(cmp_mid and cmp_mid.get('phase')=='comparing' and re.search(r'比牌|compare|showdown',compare_text,re.I))

    # R42 chip flight: evaluate Call and Raise traces independently. A valid animation
    # in either normal wager path is sufficient; do not discard a good Call trace merely
    # because a later Raise trace happened to be sparsely sampled on a loaded host.
    def _chip_trace_evidence(frames, pre_scene):
        chip_tracks={}; missing=0
        pre_ids={str(c.get('id') or '') for c in ((pre_scene or {}).get('chips') or []) if isinstance(c,dict)}
        for f in frames:
            for ch in f.get('chips',[]) if isinstance(f.get('chips'),list) else []:
                if not isinstance(ch,dict) or not isinstance(ch.get('position'),dict):
                    continue
                cid=str(ch.get('id') or '')
                if not cid:
                    missing += 1; continue
                tr=chip_tracks.setdefault(cid,{'positions':[],'owners':[],'new':cid not in pre_ids})
                tr['positions'].append(ch['position']); tr['owners'].append(str(ch.get('owner') or ''))
        moving=[]
        for cid,tr in chip_tracks.items():
            motion=_has_motion(tr['positions'],0.08)
            pts=tr['positions']; steps=[_dist(a,b) or 0 for a,b in zip(pts,pts[1:])]; max_step=max(steps,default=0.0)
            vecs=[_vec(p) for p in pts]; vecs=[v for v in vecs if v is not None]
            radial=[math.hypot(v[0],v[2]) for v in vecs]
            progress=(radial[0]-radial[-1]) if len(radial)>=2 else 0.0
            toward=sum(1 for a,b in zip(radial,radial[1:]) if b<=a+0.16)
            sparse_path=bool(motion[2]>=4 and motion[1]>=0.45 and progress>=0.35 and toward>=max(1,len(radial)-2))
            dense_path=bool(motion[2]>=6 and motion[1]>0 and max_step<=motion[1]*0.38+0.12)
            continuous=bool(dense_path or sparse_path)
            final_pos=_vec(pts[-1]) if pts else None
            in_pot=bool(final_pos and math.hypot(final_pos[0],final_pos[2])<=1.5)
            owner0=tr['owners'][0] if tr['owners'] else ''
            owner1=tr['owners'][-1] if tr['owners'] else ''
            moving.append((cid,motion,owner0,owner1,continuous,max_step,in_pot,bool(tr.get('new'))))
        # Prefer newly-created wager chips, while still allowing implementations that
        # animate an existing chip object from a player stack into the pot.
        qualifying=[m for m in moving if m[1][0] and m[2] in {'player','computer'} and m[3] in {'player','computer','pot'} and m[4] and m[6]]
        new_qualifying=[m for m in qualifying if m[7]]
        chip_motion=bool(new_qualifying or qualifying)
        ids_ok=bool(chip_tracks) and missing==0
        strong=bool(chip_motion and max((m[1][2] for m in qualifying),default=0)>=4)
        return {'frames':frames,'tracks':chip_tracks,'missing':missing,'moving':moving,'qualifying':qualifying,'chipMotion':chip_motion,'idsOK':ids_ok,'strong':strong}

    call_ev=_chip_trace_evidence(call_frames,call_scene_pre)
    raise_ev=_chip_trace_evidence(raise_frames,raise_scene_pre)
    chip_render_evidence=[]
    for label,before,motion_png,after,ev,pdelta in [
        ('call',call_render_before,call_render_motion,call_render_after,call_ev,call_pot),
        ('raise',raise_render_before,raise_render_motion,raise_render_after,raise_ev,rpot),
    ]:
        mid=await _png_region_diff(page,before,motion_png,(0.20,0.20,0.80,0.82))
        final=await _png_region_diff(page,before,after,(0.20,0.20,0.80,0.82))
        change=max((mid,final),key=lambda v:((_finite_num(v.get('changedRatio')) or 0),(_finite_num(v.get('meanDelta')) or 0)))
        render_ok=_render_diff_ok(change,min_ratio=0.00035,min_mean=0.05)
        path_ok=bool(ev['idsOK'] and ev['chipMotion'] and pdelta>0 and (render_ok or ev['strong']))
        chip_render_evidence.append({'label':label,'ev':ev,'change':change,'renderOK':render_ok,'pathOK':path_ok,'potDelta':pdelta})
    best_chip=max(chip_render_evidence,key=lambda x:(bool(x['pathOK']),bool(x['ev']['chipMotion']),len(x['ev']['qualifying']),len(x['ev']['frames'])))
    # "真人或电脑发生下注时" applies to both actors.  Require evaluator-owned
    # multi-frame evidence for at least one human wager chip and one automatic computer
    # wager chip across the normal Call/Raise traces, rather than letting one side mask
    # a missing animation on the other.
    all_qualifying=[m for x in chip_render_evidence for m in x['ev']['qualifying']]
    owner_motion={owner:any(m[2]==owner and m[1][2]>=3 for m in all_qualifying) for owner in ('player','computer')}
    numeric_wagers_ok=bool(call_pot>0 and rpot>0)
    # Frame rate itself is not a product requirement.  On a loaded host a real 520–760ms
    # interpolation may yield only a handful of rAF samples, so require multiple distinct
    # continuous positions per actor rather than an arbitrary total-frame count.
    owner_samples={owner:max((m[1][2] for m in all_qualifying if m[2]==owner),default=0) for owner in ('player','computer')}
    trace_quality_ok=bool(call_ev['idsOK'] and raise_ev['idsOK'] and owner_samples['player']>=4 and owner_samples['computer']>=4)
    r42=bool(owner_motion['player'] and owner_motion['computer'] and numeric_wagers_ok and trace_quality_ok)
    best_ev=best_chip['ev']
    ctx.check(42,r42,f"{'通过' if r42 else '未通过'}：Call/Raise 分别采样 {len(call_frames)}/{len(raise_frames)} 帧，缺失筹码 ID 数 {call_ev['missing']}/{raise_ev['missing']}；真人连续飞入奖池={owner_motion['player']}（有效采样 {owner_samples['player']}），电脑连续飞入奖池={owner_motion['computer']}（有效采样 {owner_samples['computer']}）；Call/Raise 真人同步奖池增量分别为 {call_pot}/{rpot}。")


    _progress("checks: R45 resource-stability paths")
    # R45 resource stability while playable: compare normalized post-cleanup states across multiple paths.
    rounds_exercised=0; paths45=[]; samples45=[]
    st45=await _zjh(page)
    if st45 and st45.get('phase')=='computer_turn': st45=await _wait_state(page,lambda x:x.get('phase')!='computer_turn',4000)
    if st45 and st45.get('phase') in {'round_over','waiting'} and st45.get('canDeal'):
        await _click(page,'[data-testid="deal-btn"]'); st45=await _wait_state(page,lambda x:x.get('phase') in {'player_turn','eliminated'},4500)
    if st45 and st45.get('phase')=='player_turn':
        await page.wait_for_timeout(120); samples45.append(await _obs(page))
    for idx45 in range(4):
        stx=await _zjh(page)
        if not stx or stx.get('phase')!='player_turn': break
        path='fold'
        if idx45==1 and stx.get('canPeek'):
            await _click(page,'[data-testid="peek-btn"]'); stx=await _wait_state(page,lambda x:bool((x.get('player') or {}).get('looked')),2500) or await _zjh(page); path='peek+fold'
        elif idx45==2:
            act='raise' if stx.get('canRaise') else ('call' if stx.get('canCall') else None)
            if act:
                await _click(page,f'[data-testid="{act}-btn"]'); path=act
                stx=await _wait_state(page,lambda x:x.get('phase')!='computer_turn',4500) or await _zjh(page)
        elif idx45==3:
            # Drive this round until Compare is genuinely legal; don't silently fall back to Fold.
            for _ in range(5):
                stx=await _zjh(page) or stx
                if not stx or stx.get('phase')!='player_turn': break
                if stx.get('canCompare'):
                    await _click(page,'[data-testid="compare-btn"]'); path='compare'
                    stx=await _wait_state(page,lambda x:x.get('phase') in {'round_over','eliminated'},4500)
                    break
                act='call' if stx.get('canCall') else ('raise' if stx.get('canRaise') else None)
                if not act: break
                await _click(page,f'[data-testid="{act}-btn"]'); path='prepare-compare'
                stx=await _wait_state(page,lambda x:x.get('phase')!='computer_turn',4500) or await _zjh(page)
        if stx and stx.get('phase')=='player_turn' and stx.get('canFold'):
            await _click(page,'[data-testid="fold-btn"]'); path += '+fold' if path!='fold' else ''
            stx=await _wait_state(page,lambda x:x.get('phase') in {'round_over','eliminated'},3000)
        if not stx or stx.get('phase') not in {'round_over','eliminated'}: break
        rounds_exercised+=1; paths45.append(path)
        if stx.get('phase')=='eliminated' or not stx.get('canDeal'): break
        # Starting the next round forces the previous round's dynamic cards/chips to be disposed.
        # Sample only after the new base deal is ready, so different action paths do not create
        # legitimate resource-count differences that look like leaks.
        await _click(page,'[data-testid="deal-btn"]'); normalized=await _wait_state(page,lambda x:x.get('phase')=='player_turn',4500)
        if not normalized: break
        await page.wait_for_timeout(140); samples45.append(await _obs(page))
    focus={'resize','pointerdown','pointermove','pointerup','mousedown','mousemove','mouseup','touchstart','touchmove','touchend','keydown','keyup','wheel'}
    def active_events(o):
        active=((o.get('events') or {}).get('active') or {}); return sum(int(active.get(k,0) or 0) for k in focus)
    def net_gl(o):
        g=o.get('gl') or {}; a=g.get('creates') or {}; d=g.get('deletes') or {}; return sum(int(a.get(k,0))-int(d.get(k,0)) for k in set(a)|set(d))
    active_series=[active_events(o) for o in samples45]; gl_series=[net_gl(o) for o in samples45]; pending_series=[int(((o.get('raf') or {}).get('pending') or 0)) for o in samples45]; peak_series=[int(((o.get('raf') or {}).get('maxPending') or 0)) for o in samples45]
    gl_steps=[b-a for a,b in zip(gl_series,gl_series[1:])]
    positive_tail=[x for x in gl_steps if x>0]
    repeated_growth=bool(len(positive_tail)>=2 or (len(gl_steps)>=3 and sum(gl_steps[-3:])>1))
    stable=bool(rounds_exercised==4 and len(samples45)>=5 and any(p=='compare' for p in paths45) and max(active_series)-min(active_series)<=1 and gl_series[-1]-gl_series[0]<=1 and max(gl_series)-min(gl_series)<=2 and not repeated_growth and max(pending_series)-min(pending_series)<=2 and max(peak_series)-min(peak_series)<=2)
    ctx.check(45,stable,f"{'通过' if stable else '未通过'}：normalizedSamples={len(samples45)}, paths={paths45}, activeSeries={active_series}, webglNetSeries={gl_series}, webglSteps={gl_steps}, repeatedGrowth={repeated_growth}, rafPendingSeries={pending_series}, rafPeakSeries={peak_series}, roundsExercised={rounds_exercised}。")

    _progress("checks: R31/R32 bounded AI behavior probe")
    # R31 late in the run so its multi-round sampling cannot pollute earlier functional evidence.
    ai_probe=await _probe_ai_behavior_seeded(page)
    ai_live=bool(ai_probe.get('ok'))
    ctx.check(31,ai_live,f"{'通过' if ai_live else '未通过'}：电脑决策探针模式={ai_probe.get('mode')}，可重放随机序列={ai_probe.get('replayable')}；已观察到牌力变化会改变行动倾向={bool(ai_probe.get('strengthPair'))}，下注压力变化会改变行动倾向={bool(ai_probe.get('contextPair'))}；自然观察局数={len(ai_probe.get('naturalRows') or [])}。所有证据均来自真实 Deal/Call/Raise 与电脑自动行动。")
    bet_acc=ai_probe.get('betAccounting') if isinstance(ai_probe,dict) else None
    r32=bool(isinstance(bet_acc,dict) and bet_acc.get('ok'))
    ctx.check(32,r32,f"{'通过' if r32 else '未通过'}：已观察到电脑真实下注动作={((bet_acc or {}).get('action') or {}).get('action') if isinstance(bet_acc,dict) else None}；电脑 chips、roundBet 与 pot 的投入增量是否一致={bool(isinstance(bet_acc,dict) and bet_acc.get('ok'))}。弃牌或比牌不会作为本项空通过证据。")

    _progress("checks: R44 natural elimination boundary")
    # R44: drive naturally to elimination only after all non-terminal tests are complete.
    elim=await _drive_to_elimination(page,None)
    terminal=elim.get('state') or {}; th=elim.get('history') or []
    pchip=_finite_num((terminal.get('player') or {}).get('chips')); cchip=_finite_num((terminal.get('computer') or {}).get('chips'))
    terminal_nonnegative=bool(pchip is not None and cchip is not None and pchip>=0 and cchip>=0)
    eliminated=bool(terminal.get('phase')=='eliminated' and terminal.get('outcome')=='elimination' and terminal.get('winner') in {'player','computer'})
    terminal_visual=elim.get('afterVisual') or {}; terminal_text=((terminal_visual.get('status') or {}).get('text') or '')
    deal_disabled=await page.evaluate("""() => {const b=document.querySelector('[data-testid="deal-btn"]');return b?!!b.disabled:null}""")
    sig_before=json.dumps(terminal,sort_keys=True,ensure_ascii=False)
    await _click(page,'[data-testid="deal-btn"]',force=True); await page.wait_for_timeout(160)
    terminal_after=await _zjh(page) or {}
    inert=json.dumps(terminal_after,sort_keys=True,ensure_ascii=False)==sig_before
    symmetry_link=((rule_probe.get('evaluator') or {}).get('link') or {}) if isinstance(rule_probe,dict) else {}
    symmetry_available=bool(isinstance(symmetry_link,dict) and symmetry_link.get('ok') and 'symmetricElimination' in symmetry_link)
    symmetric_guard=bool(symmetry_available and symmetry_link.get('symmetricElimination') and symmetry_link.get('symmetricWinner'))
    # The approved Mapping explicitly requires structural confirmation that both seats can
    # reach the real elimination settlement path. Missing symmetry evidence is therefore
    # incomplete evidence, not an automatic pass.
    r44=bool(eliminated and terminal_nonnegative and not bool(elim.get('negativeSeen')) and deal_disabled is True and inert and symmetric_guard)
    ctx.check(44,r44,f"{'通过' if r44 else '未通过'}：通过正常 UI 推进 {len(th)} 局后到达 phase={terminal.get('phase')}、outcome={terminal.get('outcome')}，winner={terminal.get('winner')}，双方筹码为 {pchip}/{cchip}；终局 Deal 禁用={deal_disabled is True}，强制点击后状态保持不变={inert}；源码结构是否证明双方都能进入真实淘汰结算={symmetric_guard}（探针可用={symmetry_available}）。")

    # Finish R41 with the real terminal state.  Runtime DOM wording is checked against the same observed phase; source text is never used.
    elimination_status_ok=bool(eliminated and re.search(r'淘汰|eliminat|最终|胜|victory|win',terminal_text,re.I))
    status_texts=[x.strip() for x in (waiting_text,fold_text,compare_text,terminal_text) if isinstance(x,str) and x.strip()]
    status_distinct=len(set(status_texts))>=3
    turn_distinct=bool(initial_player_turn_text.strip() and call_mid_turn_text.strip() and initial_player_turn_text.strip()!=call_mid_turn_text.strip())
    r41=bool(waiting_ok and player_turn_ok and computer_turn_ok and fold_status_ok and compare_status_ok and elimination_status_ok and status_distinct and turn_distinct)
    ctx.check(41,r41,f"{'通过' if r41 else '未通过'}：运行时 DOM 能分别识别等待={waiting_ok}、真人回合={player_turn_ok}、电脑回合={computer_turn_ok}、弃牌结算={fold_status_ok}、比牌过程={compare_status_ok}、淘汰终局={elimination_status_ok}；状态文案至少形成 {len(set(status_texts))} 个不同结果，真人/电脑行动方文案发生真实切换={turn_distinct}。")

    # R43: computed visual style must actually change at settlement and elimination, backed by real winner state.
    fold_style_changed=_computed_style_changed(fold_visual_before,fold_status_visual)
    eb=elim.get('beforeVisual') or {}; ea=elim.get('afterVisual') or {}
    elim_style_changed=_computed_style_changed(eb,ea)
    fold_color_runtime=bool(fold_end and fold_end.get('winner') in {'player','computer'} and fold_style_changed)
    elim_color_runtime=bool(eliminated and terminal.get('winner') in {'player','computer'} and elim_style_changed)
    r43=bool(fold_color_runtime and elim_color_runtime)
    ctx.check(43,r43,f"{'通过' if r43 else '未通过'}：普通弃牌结算观察到真实 winner={(fold_end or {}).get('winner')} 且状态区域计算样式发生颜色变化={fold_style_changed}；淘汰终局观察到真实 winner={terminal.get('winner')} 且计算样式发生颜色变化={elim_style_changed}。")

    _progress("checks: complete")


if __name__ == "__main__":
    import web_ut_harness
    web_ut_harness.main(__import__("web_ut"))
