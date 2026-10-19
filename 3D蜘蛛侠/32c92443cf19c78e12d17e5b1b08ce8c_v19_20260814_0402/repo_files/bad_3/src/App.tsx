import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { GameScene, type HudSnapshot } from './components/GameScene'

const initialHud: HudSnapshot = {
  speed: 0,
  altitude: 0,
  verticalSpeed: 0,
  compass: 'N',
  heading: 0,
  attached: false,
  targetValid: false,
  movementState: 'idle',
  ropeLength: null,
  ropeDistance: null,
  webTension: 0,
  running: false,
  playerX: 0,
  playerZ: 5,
  anchorX: null,
  anchorZ: null,
}

const stateLabel = {
  idle: 'STANDBY',
  moving: 'SPRINT',
  jumping: 'RISE',
  falling: 'DIVE',
  swinging: 'SWING',
} as const

export default function App() {
  const [hud, setHud] = useState(initialHud)
  const [hasStarted, setHasStarted] = useState(false)
  const [locked, setLocked] = useState(false)
  const [night, setNight] = useState(false)
  const gameRef = useRef<{ lock: () => void; toggleNight: (value: boolean) => void; reset: () => void } | null>(null)

  const onHud = useCallback((snapshot: HudSnapshot) => setHud(snapshot), [])

  useEffect(() => {
    gameRef.current?.toggleNight(night)
  }, [night])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.code === 'KeyN' && !event.repeat) setNight((value) => !value)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const enterGame = () => {
    setHasStarted(true)
    gameRef.current?.lock()
  }

  const speedPct = Math.min(100, (hud.speed / 60) * 100)
  const tensionPct = Math.min(100, (hud.webTension / 52) * 100)
  const motionIntensity = Math.min(1, Math.max(0, (hud.speed - 11) / 42))
  const altitudePct = Math.min(100, hud.altitude / 1.05)
  const directionTicks = useMemo(() => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const center = Math.max(0, directions.indexOf(hud.compass))
    return [-2, -1, 0, 1, 2].map((offset) => directions[(center + offset + directions.length) % directions.length])
  }, [hud.compass])

  const webStatus = hud.attached ? 'TETHER LIVE' : hud.targetValid ? 'ANCHOR READY' : 'NO SURFACE'
  const webSub = hud.attached ? 'release to preserve momentum' : hud.targetValid ? 'hold LMB to connect' : 'aim at a building face'
  const mapX = Math.min(96, Math.max(4, 50 + (hud.playerX / 126) * 46))
  const mapY = Math.min(96, Math.max(4, 50 + (hud.playerZ / 126) * 46))
  const anchorMapX = hud.anchorX == null ? null : Math.min(96, Math.max(4, 50 + (hud.anchorX / 126) * 46))
  const anchorMapY = hud.anchorZ == null ? null : Math.min(96, Math.max(4, 50 + (hud.anchorZ / 126) * 46))

  return (
    <main className={`game-shell ${night ? 'theme-night' : 'theme-day'} relative h-full w-full overflow-hidden bg-black select-none`}>
      <GameScene ref={gameRef} onHud={onHud} onPointerLock={setLocked} />

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="hud-vignette absolute inset-0" />
        <div className="speed-wash absolute inset-0" style={{ opacity: motionIntensity * 0.35 }} />
        <div className="edge-rush absolute inset-0" style={{ opacity: motionIntensity * 0.72 }} />
        <div className="scan-grid absolute inset-0" />

        <header className="absolute left-0 right-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-6">
          <div className="hud-panel speed-cluster relative min-w-[200px] overflow-hidden rounded-[20px] px-4 py-3 sm:min-w-[258px] sm:px-5 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="brand-mark grid h-9 w-9 place-items-center rounded-[11px] text-[10px] font-black">NT</div>
                <div>
                  <div className="eyebrow">RUNNER // 04</div>
                  <div className="mt-1 flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-white/78">
                    <span className={`status-dot ${hud.running ? 'is-live' : ''}`} />
                    NEON THREAD
                  </div>
                </div>
              </div>
              <div className={`motion-chip ${hud.attached ? 'is-live' : ''}`}>{stateLabel[hud.movementState]}</div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div className="speed-number font-mono font-black leading-none text-white">
                {hud.speed.toFixed(0)}
                <span className="ml-2 text-[9px] font-bold tracking-[0.18em] text-cyan-100/42">M/S</span>
              </div>
              <div className="pb-1 text-right">
                <div className="metric-label">VERT</div>
                <div className={`mt-1 font-mono text-[12px] font-black ${hud.verticalSpeed >= 0 ? 'text-cyan-100' : 'text-rose-100'}`}>
                  {hud.verticalSpeed >= 0 ? '+' : ''}{hud.verticalSpeed.toFixed(1)}
                </div>
              </div>
            </div>
            <div className="speed-track mt-3"><span style={{ width: `${speedPct}%` }} /></div>
            <div className="mt-2 flex justify-between text-[7px] font-bold tracking-[0.2em] text-white/20">
              <span>0</span><span>FLOW</span><span>60+</span>
            </div>
          </div>

          <div className="absolute left-1/2 top-4 hidden -translate-x-1/2 sm:block sm:top-6">
            <div className="hud-panel compass-shell rounded-full px-5 py-2.5">
              <div className="flex min-w-[250px] items-center justify-center gap-5 text-[8px] font-black tracking-[0.24em] text-white/26">
                {directionTicks.map((tick) => (
                  <span key={tick} className={tick === hud.compass ? 'compass-active' : ''}>{tick}</span>
                ))}
              </div>
              <div className="mt-1 flex items-center justify-center gap-3 font-mono text-[9px] text-white/36">
                <span className="compass-line" />
                <b className="text-white/84">{hud.heading.toFixed(0).padStart(3, '0')}°</b>
                <span className="compass-line reverse" />
              </div>
            </div>
          </div>

          <div className="hud-panel altitude-cluster rounded-[20px] px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex items-start gap-4">
              <div>
                <div className="metric-label">ALTITUDE</div>
                <div className="mt-1 font-mono text-[23px] font-black tracking-[-0.05em] text-white">
                  {hud.altitude.toFixed(1)}<span className="ml-1 text-[8px] tracking-[0.15em] text-white/28">M</span>
                </div>
              </div>
              <div className="alt-mini relative h-10 w-1 overflow-hidden rounded-full bg-white/[0.06]">
                <span className="absolute bottom-0 left-0 w-full rounded-full" style={{ height: `${altitudePct}%` }} />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 text-[8px] font-bold tracking-[0.17em] text-white/32">
              <span>{night ? 'NIGHT GRID' : 'DAY GRID'}</span>
              <span>N</span>
            </div>
          </div>
        </header>

        <aside className="absolute right-4 top-1/2 hidden -translate-y-1/2 sm:block sm:right-6">
          <div className={`hud-panel web-telemetry w-[154px] rounded-[19px] p-3.5 ${hud.attached ? 'is-attached' : ''}`}>
            <div className="flex items-center justify-between">
              <span className="metric-label">WEB LOAD</span>
              <span className="font-mono text-[9px] font-black text-white/72">{Math.round(tensionPct)}%</span>
            </div>
            <div className="tension-track mt-2"><span style={{ width: `${tensionPct}%` }} /></div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="telemetry-cell">
                <span>ROPE</span>
                <b>{hud.ropeLength == null ? '--' : hud.ropeLength.toFixed(0)}m</b>
              </div>
              <div className="telemetry-cell">
                <span>DIST</span>
                <b>{hud.ropeDistance == null ? '--' : hud.ropeDistance.toFixed(0)}m</b>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.16em] text-white/34">
              <span className={`link-node ${hud.attached ? 'on' : hud.targetValid ? 'ready' : ''}`} />
              {webStatus}
            </div>
          </div>
        </aside>

        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 lg:block lg:left-6">
          <div className="elevation-rail relative h-48 w-7">
            <span className="rail-line absolute bottom-0 left-2 top-0 w-px" />
            <span className="rail-fill absolute bottom-0 left-2 w-px" style={{ height: `${altitudePct}%` }} />
            {[0, 25, 50, 75, 100].map((mark) => <i key={mark} className="rail-tick" style={{ bottom: `${mark}%` }} />)}
            <b className="absolute bottom-1/2 left-5 origin-left -rotate-90 text-[7px] uppercase tracking-[0.28em] text-white/20">Elevation</b>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={`kinetic-halo ${hud.attached ? 'is-live' : ''}`} style={{ opacity: 0.15 + motionIntensity * 0.35 }} />
          <div className={`aim-reticle relative h-12 w-12 ${hud.targetValid ? 'is-valid' : ''} ${hud.attached ? 'is-attached' : ''}`}>
            <span className="reticle-bracket bracket-tl" />
            <span className="reticle-bracket bracket-tr" />
            <span className="reticle-bracket bracket-bl" />
            <span className="reticle-bracket bracket-br" />
            <span className="reticle-core absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 hidden xl:block">
          <div className="hud-panel minimap-shell relative h-[142px] w-[142px] overflow-hidden rounded-[22px]">
            <div className="minimap-grid absolute inset-0" />
            <span className="map-landmark prism" title="Prism Spire" />
            <span className="map-landmark crown-a" title="Split Crown West" />
            <span className="map-landmark crown-b" title="Split Crown East" />
            {anchorMapX != null && anchorMapY != null && (
              <span className="map-anchor" style={{ left: `${anchorMapX}%`, top: `${anchorMapY}%` }} />
            )}
            <span className="map-player" style={{ left: `${mapX}%`, top: `${mapY}%`, transform: `translate(-50%, -50%) rotate(${hud.heading}deg)` }} />
            <div className="absolute inset-x-3 bottom-2 flex items-center justify-between text-[6px] font-black uppercase tracking-[0.18em] text-white/25">
              <span>City Grid</span><span>126m</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-[610px] -translate-x-1/2 sm:bottom-6">
          <div className={`web-prompt hud-panel mx-auto flex min-h-[50px] items-center rounded-full px-4 py-2.5 sm:px-5 ${hud.attached ? 'web-live' : hud.targetValid ? 'web-ready' : ''}`}>
            <span className="mouse-glyph mr-3 grid h-7 w-7 shrink-0 place-items-center rounded-full">L</span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[9px] font-black uppercase tracking-[0.22em] text-white/78">{webStatus}</div>
              <div className="mt-0.5 truncate text-[8px] uppercase tracking-[0.11em] text-white/27">{webSub}</div>
            </div>
            <div className={`signal-bars ml-4 hidden items-end gap-[2px] sm:flex ${hud.targetValid || hud.attached ? 'active' : ''}`}>
              <i /><i /><i /><i />
            </div>
          </div>
        </div>

        {hasStarted && locked && (
          <div className="absolute bottom-5 left-5 hidden items-center gap-2 text-[7px] font-bold tracking-[0.15em] text-white/25 xl:flex">
            <span className="micro-key">WASD</span><span>MOVE</span>
            <span className="micro-key">SPACE</span><span>JUMP</span>
            <span className="micro-key">SHIFT</span><span>SPRINT</span>
            <span className="micro-key">R</span><span>RESET</span>
          </div>
        )}
      </div>

      {(!hasStarted || !locked) && (
        <div className="pause-layer absolute inset-0 z-30 grid place-items-center px-4 py-5">
          <div className="absolute inset-0 bg-[#02050a]/70 backdrop-blur-[9px]" />
          <div className="intro-glow absolute left-1/2 top-1/2 h-[580px] w-[880px] max-w-[96vw] -translate-x-1/2 -translate-y-1/2 rounded-full" />

          <section className="intro-panel relative w-full max-w-[850px] overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#07111b]/90 shadow-[0_32px_110px_rgba(0,0,0,.62)]">
            <div className="intro-noise absolute inset-0" />
            <div className="intro-scan absolute inset-x-0 top-0 h-px" />
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="brand-mark grid h-10 w-10 place-items-center rounded-[12px] text-[11px] font-black">NT</div>
                  <div>
                    <div className="eyebrow">COMPLETE MOMENTUM PLAYGROUND</div>
                    <div className="mt-1 text-[9px] tracking-[0.17em] text-white/28">WEBGL CITY SYSTEM // RUNNER 04 // V9</div>
                  </div>
                </div>
                <button
                  className="ghost-button pointer-events-auto rounded-full px-4 py-2 text-[8px] font-black uppercase tracking-[0.18em] text-white/55"
                  onClick={() => setNight((value) => !value)}
                >
                  {night ? '☀  Day' : '◐  Night'}
                </button>
              </div>

              <div className="mt-8 grid gap-7 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
                <div>
                  <div className="intro-kicker">VELOCITY IS THE GAME</div>
                  <h1 className="title-lockup mt-3 text-[52px] font-black uppercase leading-[0.78] tracking-[-0.08em] text-white sm:text-[76px]">
                    Neon<br /><span>Thread</span>
                  </h1>
                  <p className="mt-6 max-w-[560px] text-[12px] leading-6 text-white/43 sm:text-[13px]">
                    在原创程序化霓虹都市中跑动、跃起、瞄准真实建筑表面并建立蛛丝。摆荡由当前速度、重力、锚点和真实绳长共同决定；松手后动量完整保留。
                  </p>
                </div>

                <div className="city-readout rounded-[21px] border border-white/[0.065] bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="metric-label">SYSTEM</span>
                    <span className="ready-tag">READY</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {[['PHYSICS', '120 HZ'], ['TARGET', 'RAYCAST'], ['CAMERA', 'FREE 3RD'], ['WORLD', 'PROCEDURAL']].map(([label, value]) => (
                      <div key={label} className="readout-cell">
                        <span>{label}</span><b>{value}</b>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 text-[8px] leading-4 tracking-[0.06em] text-white/27">No remote models · No remote textures · No backend</div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-5">
                {[
                  ['WASD', '移动 / 空中修正'],
                  ['鼠标', '第三人称观察'],
                  ['左键', '按住连接蛛丝'],
                  ['SPACE', '短按低跃 / 长按高跃'],
                  ['SHIFT', '冲刺 / 保持高速'],
                ].map(([key, label], index) => (
                  <div key={key} className="control-card rounded-[15px] border border-white/[0.055] bg-white/[0.022] p-3">
                    <div className="flex items-center justify-between"><b>{key}</b><i>0{index + 1}</i></div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={enterGame}
                  className="primary-cta pointer-events-auto flex-1 rounded-[17px] px-6 py-4 text-[10px] font-black uppercase tracking-[0.24em] text-[#041018] transition active:scale-[0.99]"
                >
                  {hasStarted ? 'Resume Momentum' : 'Enter City'}
                </button>
                {hasStarted && (
                  <button
                    onClick={() => { gameRef.current?.reset(); enterGame() }}
                    className="secondary-cta pointer-events-auto rounded-[17px] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/52"
                  >
                    Reset Position
                  </button>
                )}
              </div>
              <div className="mt-3 text-center text-[7px] font-bold uppercase tracking-[0.22em] text-white/18">ESC · RELEASE MOUSE &nbsp; / &nbsp; R · RESET &nbsp; / &nbsp; N · DAY–NIGHT</div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
