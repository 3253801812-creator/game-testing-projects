import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { GameEngine, type HudSnapshot, type MovementState } from './game/GameEngine';

const initialHud: HudSnapshot = {
  speed: 0,
  altitude: 0,
  verticalSpeed: 0,
  attached: false,
  targetValid: false,
  targetDistance: null,
  movementState: 'idle',
  heading: 0,
  ready: false,
  tension: 0,
  ropeLength: null,
  playerX: 0,
  playerZ: 0,
};

const headingLabel = (heading: number) => {
  const points = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return points[Math.round(heading / 45) % 8];
};

const stateLabel: Record<MovementState, string> = {
  idle: '待机',
  moving: '疾跑',
  jumping: '上升',
  falling: '下坠',
  swinging: '摆荡',
};

export default function App() {
  const hostRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  const [hud, setHud] = useState(initialHud);
  const [entered, setEntered] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (!hostRef.current) return;
    const engine = new GameEngine(hostRef.current, setHud);
    engineRef.current = engine;

    const onPointerLock = () => {
      const canvas = hostRef.current?.querySelector('[data-testid="game-canvas"]');
      setLocked(document.pointerLockElement === canvas);
    };
    document.addEventListener('pointerlockchange', onPointerLock);

    return () => {
      document.removeEventListener('pointerlockchange', onPointerLock);
      engine.dispose();
      engineRef.current = null;
    };
  }, []);

  const enterGame = () => {
    setEntered(true);
    engineRef.current?.requestPointerLock();
  };

  const speedRatio = Math.min(1, hud.speed / 58);
  const tensionRatio = Math.min(1, Math.max(0, hud.tension));
  const minimapPosition = useMemo(() => ({
    left: `${50 + Math.max(-43, Math.min(43, hud.playerX / 6.4))}%`,
    top: `${50 + Math.max(-43, Math.min(43, hud.playerZ / 6.4))}%`,
  }), [hud.playerX, hud.playerZ]);

  const fxStyle = {
    '--speed': speedRatio.toFixed(3),
    '--tension': tensionRatio.toFixed(3),
  } as CSSProperties;

  return (
    <main style={fxStyle} className="relative h-full w-full select-none overflow-hidden bg-[#02050a] text-slate-100">
      <div ref={hostRef} className="absolute inset-0" />

      <div className="speed-fx pointer-events-none absolute inset-0" />
      <div className="cinema-vignette pointer-events-none absolute inset-0" />
      <div className="scan-grain pointer-events-none absolute inset-0" />

      <header className={`pointer-events-none absolute left-4 right-4 top-4 flex items-start justify-between gap-4 transition-opacity duration-500 sm:left-6 sm:right-6 sm:top-6 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="brand-lockup">
          <div className="brand-kicker">SKYLINE THREAD / FREE ROAM</div>
          <div className="mt-1 flex items-center gap-2.5">
            <div className="h-[2px] w-8 bg-cyan-300/70" />
            <span className="text-xs font-black tracking-[.22em] text-white/85">CITY 03</span>
          </div>
        </div>

        <div className="telemetry-row">
          <div className="telemetry-item">
            <span className="telemetry-label">SPEED</span>
            <div className="telemetry-value">{hud.speed.toFixed(0)}<small> m/s</small></div>
          </div>
          <div className="telemetry-divider" />
          <div className="telemetry-item">
            <span className="telemetry-label">ALT</span>
            <div className="telemetry-value">{hud.altitude.toFixed(0)}<small> m</small></div>
          </div>
          <div className="telemetry-divider hidden sm:block" />
          <div className="telemetry-item hidden sm:block">
            <span className="telemetry-label">V/S</span>
            <div className={`telemetry-value ${hud.verticalSpeed < -18 ? 'text-amber-200' : ''}`}>{hud.verticalSpeed > 0 ? '+' : ''}{hud.verticalSpeed.toFixed(0)}<small> m/s</small></div>
          </div>
        </div>
      </header>

      <div className={`pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`reticle ${hud.attached ? 'is-attached' : hud.targetValid ? 'is-valid' : ''}`}>
          <span className="reticle-dot" />
          <span className="reticle-tl" /><span className="reticle-tr" /><span className="reticle-bl" /><span className="reticle-br" />
        </div>
        <div className={`target-readout ${hud.attached ? 'attached' : hud.targetValid ? 'valid' : ''}`}>
          <span className="target-state">{hud.attached ? 'WEB // LOCK' : hud.targetValid ? 'ANCHOR // READY' : 'SCAN // NO LOCK'}</span>
          <span className="target-distance">{hud.attached && hud.ropeLength ? `${hud.ropeLength.toFixed(0)}m` : hud.targetDistance ? `${hud.targetDistance.toFixed(0)}m` : '—'}</span>
        </div>
      </div>

      <aside className={`pointer-events-none absolute bottom-4 left-4 flex items-end gap-3 transition-opacity duration-500 sm:bottom-6 sm:left-6 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="minimap hidden sm:block">
          <div className="minimap-grid" />
          <div className="minimap-axis minimap-axis-x" />
          <div className="minimap-axis minimap-axis-z" />
          <div className="minimap-player" style={minimapPosition}>
            <span style={{ transform: `rotate(${hud.heading}deg)` }} />
          </div>
          <div className="minimap-caption"><span>LOCAL</span><b>{headingLabel(hud.heading)} {Math.round(hud.heading)}°</b></div>
        </div>

        <div className="control-strip hidden lg:block">
          <div><kbd>WASD</kbd><span>移动 / 空中修正</span></div>
          <div><kbd>SPACE</kbd><span>跳跃</span></div>
          <div><kbd>LMB</kbd><span>按住摆荡 · 松开脱离</span></div>
        </div>
      </aside>

      <aside className={`pointer-events-none absolute bottom-4 right-4 flex flex-col items-end gap-2 transition-opacity duration-500 sm:bottom-6 sm:right-6 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="motion-card">
          <div className="motion-card-top">
            <span>{stateLabel[hud.movementState]}</span>
            <b>{Math.round(speedRatio * 100).toString().padStart(2, '0')}</b>
          </div>
          <div className="speed-track"><span style={{ width: `${Math.max(3, speedRatio * 100)}%` }} /></div>
          <div className="motion-meta"><span>MOMENTUM</span><span>{hud.attached ? `TENSION ${Math.round(tensionRatio * 100)}%` : 'FREE FLIGHT'}</span></div>
        </div>
        {!locked && entered && (
          <button type="button" onClick={() => engineRef.current?.requestPointerLock()} className="pointer-events-auto capture-button">
            点击继续控制
          </button>
        )}
      </aside>

      {!entered && (
        <div className="absolute inset-0 z-20 grid place-items-center overflow-hidden bg-[#03070d]/55 px-6 backdrop-blur-[2px]">
          <div className="intro-orbit intro-orbit-a" />
          <div className="intro-orbit intro-orbit-b" />
          <section className="relative max-w-2xl text-center">
            <div className="mx-auto mb-6 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[.34em] text-cyan-100/55">
              <span className="h-px w-10 bg-cyan-200/30" />
              Momentum System Online
              <span className="h-px w-10 bg-cyan-200/30" />
            </div>
            <h1 className="intro-title">SKYLINE<span>THREAD</span></h1>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-slate-300/68 sm:text-[15px]">
              瞄准真实建筑表面，按住主鼠标键建立蛛丝锚点。绳长、重力和当前速度共同决定摆荡轨迹；松开后保留全部动量继续飞行。
            </p>
            <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-2 text-[10px] uppercase tracking-[.13em] text-white/45">
              <div className="intro-spec"><b>01</b><span>LOCK</span></div>
              <div className="intro-spec"><b>02</b><span>SWING</span></div>
              <div className="intro-spec"><b>03</b><span>RELEASE</span></div>
            </div>
            <button type="button" onClick={enterGame} className="pointer-events-auto group relative mt-9 overflow-hidden rounded-full border border-cyan-100/20 bg-cyan-50 px-7 py-3.5 text-[11px] font-black uppercase tracking-[.22em] text-slate-950 shadow-[0_20px_80px_rgba(87,210,255,.17)] transition hover:scale-[1.025] hover:bg-white active:scale-[.985]">
              <span className="relative z-10">进入城市</span>
            </button>
            <div className="mt-4 text-[9px] uppercase tracking-[.18em] text-white/30">Click to capture mouse · ESC to release</div>
          </section>
        </div>
      )}
    </main>
  );
}
