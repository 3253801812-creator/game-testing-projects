import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties, MutableRefObject } from 'react'
import { MAPS, INITIAL_CREDITS, appliedStats, cloneVehicles, nextUpgradeCost } from './data'
import { emptyCameraState, emptySceneState, emptyVehicleState, OffroadEngine } from './engine'
import type { RaceHudSnapshot } from './engine'
import type { GameStateName, MapDefinition, RaceResult, VehicleRuntime } from './types'

const fmt = (seconds: number | null) => {
  const safe = Math.max(0, seconds ?? 0)
  const mins = Math.floor(safe / 60)
  const secs = Math.floor(safe % 60)
  const ms = Math.floor((safe % 1) * 1000)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(ms).padStart(3, '0')}`
}

const statLabel: Record<string, string> = {
  power: '动力', braking: '制动', steering: '转向', grip: '抓地', maxSpeed: '极速', suspension: '悬挂', mass: '质量',
}

const surfaceLabel: Record<string, string> = {
  gravel: '砂砾', rock: '岩石', sand: '沙地', dirt: '土路', mud: '泥地', grass: '草地',
}

const hudInitial: RaceHudSnapshot = {
  elapsed: 0,
  speed: 0,
  checkpointIndex: 0,
  surface: 'gravel',
  throttle: 0,
  brake: 0,
  steering: 0,
  grip: 1,
  slip: 0,
  x: 0,
  z: 0,
  heading: 0,
  suspensionLoad: 0,
}

function Credits({ value }: { value: number }) {
  return (
    <div className="credits-pill" aria-label={`金币 ${value}`}>
      <span className="coin-icon">◆</span>
      <span data-testid="credits-value">{value}</span>
      <span className="credits-label">CR</span>
    </div>
  )
}

function CornerFrame() {
  return <div className="corner-frame" aria-hidden="true"><i /><i /><i /><i /></div>
}

function Topbar({ credits, label, onBack, backTestId }: { credits: number; label: string; onBack: () => void; backTestId?: string }) {
  return (
    <header className="topbar">
      <button className="icon-button" onClick={onBack} data-testid={backTestId} aria-label="返回"><span>←</span></button>
      <div className="topbar-brand"><span>RIDGELINE</span><b>/</b><em>{label}</em></div>
      <Credits value={credits} />
    </header>
  )
}

function VehicleVisual({ vehicle, locked = false }: { vehicle: VehicleRuntime; locked?: boolean }) {
  return (
    <div className={`vehicle-visual ${vehicle.id} ${locked ? 'locked' : ''}`} style={{ '--vehicle-color': vehicle.color, '--vehicle-accent': vehicle.accent } as CSSProperties}>
      <div className="vehicle-ground" />
      <div className="vehicle-aura" />
      <span className="css-wheel wheel-fl"><i /></span>
      <span className="css-wheel wheel-fr"><i /></span>
      <span className="css-wheel wheel-rl"><i /></span>
      <span className="css-wheel wheel-rr"><i /></span>
      <div className="vehicle-css-body">
        <div className="vehicle-skid" />
        <div className="vehicle-hood"><i className="lamp left" /><i className="lamp right" /></div>
        <div className="vehicle-cabin"><span className="glass front" /><span className="glass side" /></div>
        <div className="vehicle-roof" />
        <div className="vehicle-bed" />
        <div className="vehicle-bumper" />
      </div>
      <div className="vehicle-spec-tag"><b>4×4</b><span>{vehicle.className}</span></div>
      {locked && <div className="lock-mark"><span>◇</span> LOCKED</div>}
    </div>
  )
}

function StatBars({ vehicle }: { vehicle: VehicleRuntime }) {
  const s = appliedStats(vehicle)
  const rows = [
    ['power', s.power / 430],
    ['grip', s.grip / 1.45],
    ['steering', s.steering / 2.2],
    ['suspension', s.suspension / 1.4],
    ['maxSpeed', s.maxSpeed / 38],
  ] as const
  return (
    <div className="stat-bars">
      {rows.map(([key, value]) => (
        <div className="stat-row" key={key}>
          <span>{statLabel[key]}</span>
          <div className="bar"><i style={{ width: `${Math.min(100, value * 100)}%` }} /></div>
          <b>{Math.round(Math.min(100, value * 100))}</b>
        </div>
      ))}
    </div>
  )
}

function MainMenu({ credits, onRace, onGarage }: { credits: number; onRace: () => void; onGarage: () => void }) {
  return (
    <main id="main-menu" className="screen menu-screen">
      <div className="menu-grid" />
      <div className="menu-noise" />
      <div className="menu-topline"><span><i /> OFFROAD SYSTEM // LIVE</span><Credits value={credits} /></div>
      <section className="hero-copy">
        <div className="eyebrow"><span /> 4×4 TIME TRIAL SIMULATOR</div>
        <h1><span>RIDGE</span><strong>LINE</strong></h1>
        <p>读懂地形。压住重心。把每一米都变成速度。</p>
        <div className="hero-actions">
          <button className="primary big" data-testid="start-race-btn" onClick={onRace}>
            <span><small>TIME TRIAL</small>开始计时赛</span><b>↗</b>
          </button>
          <button className="secondary big" data-testid="garage-btn" onClick={onGarage}>
            <span><small>WORKSHOP</small>车库 / 升级</span><b>02</b>
          </button>
        </div>
        <div className="hero-telemetry">
          <div><small>MODE</small><b>SOLO TT</b></div>
          <div><small>DRIVETRAIN</small><b>4WD</b></div>
          <div><small>PHYSICS</small><b>ACTIVE</b></div>
        </div>
        <div className="control-hint"><kbd>WASD</kbd><span>驾驶</span><kbd>↑↓←→</kbd><span>方向键</span></div>
      </section>
      <div className="hero-machine" aria-hidden="true">
        <div className="sun-disc"><i /></div>
        <div className="mountain m1" /><div className="mountain m2" /><div className="mountain m3" />
        <div className="hero-track t1" /><div className="hero-track t2" />
        <div className="hero-car">
          <span className="hero-windshield" /><span className="hero-grille" />
          <div className="hero-wheel one"><i /></div><div className="hero-wheel two"><i /></div>
        </div>
        <div className="hero-dust d1" /><div className="hero-dust d2" /><div className="hero-dust d3" />
      </div>
      <div className="menu-footer"><span>BUILD 03.27 // POLISHED</span><span>NO AI · PURE TIME TRIAL</span><span><i /> WEBGL ACTIVE</span></div>
      <CornerFrame />
    </main>
  )
}

function VehicleSelect({ credits, vehicles, selectedId, onBack, onSelect, onBuy, onContinue }: {
  credits: number
  vehicles: VehicleRuntime[]
  selectedId: string | null
  onBack: () => void
  onSelect: (id: string) => void
  onBuy: (id: string) => void
  onContinue: () => void
}) {
  const selected = vehicles.find(v => v.id === selectedId)
  return (
    <main id="vehicle-select" className="screen selection-screen">
      <Topbar credits={credits} label="VEHICLE SELECT" onBack={onBack} backTestId="vehicle-select-back-btn" />
      <div className="section-title"><span>01</span><div><small>CHOOSE YOUR MACHINE</small><h2>选择车辆</h2><p>不同质量、动力、抓地与悬挂会直接改变赛道表现。</p></div></div>
      <div className="vehicle-grid">
        {vehicles.map((vehicle, index) => {
          const chosen = selectedId === vehicle.id
          const stats = appliedStats(vehicle)
          return (
            <article key={vehicle.id} data-testid="vehicle-card" data-vehicle-id={vehicle.id} className={`vehicle-card ${chosen ? 'selected' : ''} ${!vehicle.owned ? 'not-owned' : ''}`}>
              <div className="card-index">0{index + 1}<small> / 02</small></div>
              <div className="vehicle-visual-wrap"><VehicleVisual vehicle={vehicle} locked={!vehicle.owned} /></div>
              <div className="vehicle-meta">
                <div className="vehicle-meta-head"><div><small>{vehicle.className}</small><h3>{vehicle.name}</h3><p>{vehicle.tagline}</p></div><span className="max-speed-chip"><small>V-MAX</small><b>{Math.round(stats.maxSpeed * 3.6)}</b><i>KM/H</i></span></div>
                <StatBars vehicle={vehicle} />
                <div className="card-actions">
                  {vehicle.owned ? (
                    <button className={chosen ? 'selected-button' : 'outline-button'} data-testid="select-vehicle-btn" data-vehicle-id={vehicle.id} onClick={() => onSelect(vehicle.id)}>
                      {chosen ? <><span className="check-dot">✓</span> 已装载</> : <>选择车辆 <b>→</b></>}
                    </button>
                  ) : (
                    <button className="buy-button" data-testid="buy-vehicle-btn" data-vehicle-id={vehicle.id} disabled={credits < vehicle.price} onClick={() => onBuy(vehicle.id)}>
                      <span>{credits >= vehicle.price ? '解锁车辆' : '金币不足'}</span><b>◆ {vehicle.price}</b>
                    </button>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <div className="selection-footer">
        <div><span className="status-dot" /><section><b>{selected?.owned ? selected.name : '未选择可用车辆'}</b><small>当前出赛车辆</small></section></div>
        <button className="primary continue" data-testid="vehicle-continue-btn" disabled={!selected?.owned} onClick={onContinue}>继续选择地图 <b>→</b></button>
      </div>
    </main>
  )
}

function MapRoute({ map, player }: { map: MapDefinition; player?: { x: number; z: number; heading: number } }) {
  const all = [map.spawn.position, ...map.checkpoints.map(c => c.position), map.finish.position]
  const min = -90, span = 180
  const points = all.map(p => `${((p.x - min) / span) * 100},${((p.z - min) / span) * 100}`).join(' ')
  return (
    <svg viewBox="0 0 100 100" className="route-svg" aria-hidden="true">
      <polyline className="route-shadow" points={points} fill="none" vectorEffect="non-scaling-stroke" />
      <polyline className="route-line" points={points} fill="none" vectorEffect="non-scaling-stroke" />
      {all.map((p, i) => <circle className={i === all.length - 1 ? 'finish-node' : i === 0 ? 'spawn-node' : ''} key={i} cx={((p.x - min) / span) * 100} cy={((p.z - min) / span) * 100} r={i === 0 || i === all.length - 1 ? 2.3 : 1.5} />)}
      {player && <g transform={`translate(${((player.x - min) / span) * 100} ${((player.z - min) / span) * 100}) rotate(${-player.heading * 180 / Math.PI})`}><path className="player-arrow" d="M 0 -3 L 2.2 2 L 0 1.2 L -2.2 2 Z" /></g>}
    </svg>
  )
}

function MapSelect({ credits, selectedId, onBack, onSelect, onStart }: { credits: number; selectedId: string | null; onBack: () => void; onSelect: (id: string) => void; onStart: () => void }) {
  const selected = MAPS.find(m => m.id === selectedId)
  return (
    <main id="map-select" className="screen selection-screen map-screen">
      <Topbar credits={credits} label="ROUTE SELECT" onBack={onBack} backTestId="map-select-back-btn" />
      <div className="section-title"><span>02</span><div><small>PICK THE TERRAIN</small><h2>选择地图</h2><p>顺序通过全部检查点后，终点才会开放。</p></div></div>
      <div className="map-grid">
        {MAPS.map((map, index) => {
          const chosen = selectedId === map.id
          return (
            <article key={map.id} data-testid="map-card" data-map-id={map.id} className={`map-card ${chosen ? 'selected' : ''} ${map.id}`}>
              <div className="map-preview">
                <div className="contours" />
                <div className="map-light" />
                <MapRoute map={map} />
                <span className="map-number">0{index + 1}</span>
                <div className="map-coordinate"><span>LAT 37°{index ? '21' : '42'}.8</span><span>ALT {index ? '964' : '731'}M</span></div>
              </div>
              <div className="map-info">
                <small>{map.subtitle}</small><h3>{map.name}</h3>
                <div className="map-tags"><span>{map.difficulty}</span><span>{map.surfaceLabel}</span><span>{map.checkpoints.length} CP</span></div>
                <p>{map.id === 'red-ridge' ? '高速砂砾谷底连接横切岩脊。松软沙地会吞噬加速，岩面抓地更强但连续起伏考验悬挂。' : '湿滑林径切过泥沟与侧坡。更低的表面抓地会让过量油门形成侧滑，稳定转向比蛮力更快。'}</p>
                <div className="map-detail-row"><div><small>ROUTE</small><b>{map.id === 'red-ridge' ? '4.1 KM' : '4.5 KM'}</b></div><div><small>OBSTACLES</small><b>{map.obstacles.length}</b></div><div><small>FORMAT</small><b>TT</b></div></div>
                <button className={chosen ? 'selected-button' : 'outline-button'} data-testid="select-map-btn" data-map-id={map.id} onClick={() => onSelect(map.id)}>{chosen ? '✓ 路线已锁定' : <>选择路线 <b>→</b></>}</button>
              </div>
            </article>
          )
        })}
      </div>
      <div className="selection-footer">
        <div><span className="status-dot" /><section><b>{selected?.name ?? '未选择路线'}</b><small>顺序检查点 · 单人计时</small></section></div>
        <button className="primary continue" data-testid="start-time-trial-btn" disabled={!selected} onClick={onStart}>启动计时赛 <b>⚑</b></button>
      </div>
    </main>
  )
}

function Garage({ credits, vehicles, onBack, onBuy, onUpgrade }: { credits: number; vehicles: VehicleRuntime[]; onBack: () => void; onBuy: (id: string) => void; onUpgrade: (vehicleId: string, upgradeId: string) => void }) {
  return (
    <main id="garage" className="screen garage-screen">
      <Topbar credits={credits} label="GARAGE / PERFORMANCE" onBack={onBack} backTestId="garage-back-btn" />
      <div className="garage-heading"><div><small>WORKSHOP // LIVE SESSION</small><h2>车辆与升级</h2></div><p>每一项升级都会进入当前车辆实际动力/抓地/悬挂计算。</p></div>
      <div className="garage-list">
        {vehicles.map(vehicle => {
          const stats = appliedStats(vehicle)
          return (
            <article key={vehicle.id} data-testid="vehicle-card" data-vehicle-id={vehicle.id} className={`garage-card ${vehicle.owned ? '' : 'garage-locked'}`}>
              <div className="garage-car"><VehicleVisual vehicle={vehicle} locked={!vehicle.owned} /><div className="garage-name"><small>{vehicle.className}</small><h3>{vehicle.name}</h3><span className={vehicle.owned ? 'owned' : 'locked-state'}>{vehicle.owned ? 'READY / OWNED' : `◆ ${vehicle.price}`}</span></div></div>
              <div className="spec-grid">
                {Object.entries(stats).map(([key, value]) => <div key={key}><small>{statLabel[key] ?? key}</small><b>{key === 'mass' ? `${Math.round(value)} kg` : key === 'maxSpeed' ? `${Math.round(value * 3.6)} km/h` : Number(value).toFixed(key === 'power' ? 0 : 2)}</b></div>)}
              </div>
              <div className="upgrade-stack">
                <div className="upgrade-stack-title"><span>PERFORMANCE MODULES</span><small>{vehicle.owned ? 'ACTIVE VEHICLE DATA' : 'LOCKED'}</small></div>
                {!vehicle.owned ? (
                  <button className="buy-button garage-buy" data-testid="buy-vehicle-btn" data-vehicle-id={vehicle.id} disabled={credits < vehicle.price} onClick={() => onBuy(vehicle.id)}>
                    <span>{credits >= vehicle.price ? '解锁车辆' : '金币不足'}</span><b>◆ {vehicle.price}</b>
                  </button>
                ) : vehicle.upgrades.map(upgrade => {
                  const cost = nextUpgradeCost(upgrade.cost, upgrade.level)
                  const maxed = upgrade.level >= 3
                  const boost = upgrade.affectedStat === 'suspension' ? 18 : 12
                  return (
                    <div className="upgrade-row" key={upgrade.id}>
                      <div className="upgrade-copy"><span>{upgrade.name}</span><small>{statLabel[upgrade.affectedStat]} · 每级 +{boost}%</small></div>
                      <div className="upgrade-level"><small>LV.{upgrade.level}/3</small><div className="upgrade-pips">{[0,1,2].map(i => <i key={i} className={i < upgrade.level ? 'active' : ''} />)}</div></div>
                      <button data-testid="upgrade-btn" data-vehicle-id={vehicle.id} data-upgrade-id={upgrade.id} disabled={maxed || credits < cost} onClick={() => onUpgrade(vehicle.id, upgrade.id)}>{maxed ? 'MAX' : `◆ ${cost}`}</button>
                    </div>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
      <div className="garage-note"><b>SESSION ECONOMY</b><span /> 金币、车辆与升级在本次运行中持续保留</div>
    </main>
  )
}

function RaceStage({ raceId, vehicle, map, gameState, result, onRunning, onHud, onFinish, onExit, onMenu, onRetry, engineRef }: {
  raceId: string
  vehicle: VehicleRuntime
  map: MapDefinition
  gameState: GameStateName
  result: RaceResult | null
  onRunning: () => void
  onHud: (hud: RaceHudSnapshot) => void
  onFinish: (raceId: string, finalTime: number, reward: number) => void
  onExit: () => void
  onMenu: () => void
  onRetry: () => void
  engineRef: MutableRefObject<OffroadEngine | null>
}) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [hud, setHud] = useState<RaceHudSnapshot>(hudInitial)
  const callbacksRef = useRef({ onRunning, onHud, onFinish })
  callbacksRef.current = { onRunning, onHud, onFinish }

  useEffect(() => {
    if (!mountRef.current) return
    const engine = new OffroadEngine(mountRef.current, raceId, vehicle, map, {
      onRunning: () => callbacksRef.current.onRunning(),
      onHud: data => { setHud(data); callbacksRef.current.onHud(data) },
      onFinish: (time, rewardValue) => callbacksRef.current.onFinish(raceId, time, rewardValue),
    })
    engineRef.current = engine
    return () => {
      engine.dispose()
      if (engineRef.current === engine) engineRef.current = null
    }
  }, [raceId, vehicle, map, engineRef])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && gameState !== 'result') onExit()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [gameState, onExit])

  const nextCp = Math.min(hud.checkpointIndex + 1, map.checkpoints.length)
  const target = hud.checkpointIndex < map.checkpoints.length ? map.checkpoints[hud.checkpointIndex].position : map.finish.position
  const targetDistance = Math.hypot(hud.x - target.x, hud.z - target.z)
  const gripPct = Math.round(clampUi(hud.grip / 1.45) * 100)
  const slipPct = Math.round(clampUi(hud.slip) * 100)
  const steeringPct = (hud.steering + 1) * 50

  return (
    <main id="race-screen" className={`screen race-screen surface-${hud.surface} ${hud.slip > 0.55 ? 'is-sliding' : ''}`}>
      <div ref={mountRef} className="game-canvas-host" />
      <div className="race-vignette" />
      <div className="race-scanlines" />

      <div className="race-top">
        <div className="race-badge"><small>TIME TRIAL // 4WD</small><b>{map.name}</b><span>{vehicle.name}</span></div>
        <div className="race-timer"><small>ELAPSED</small><b data-testid="race-timer">{fmt(0)}</b><i className={gameState === 'racing' ? 'live' : ''}>● LIVE</i></div>
        <button className="race-exit" data-testid="race-exit-btn" onClick={onExit}>退出比赛 <span>ESC</span></button>
      </div>

      <aside className="race-left-hud">
        <div className="hud-panel route-panel">
          <div className="hud-label"><span>ROUTE / NAV</span><b>{hud.checkpointIndex < map.checkpoints.length ? `CP ${String(nextCp).padStart(2, '0')}` : 'FINISH'}</b></div>
          <div className={`race-minimap ${map.id}`}><div className="contours" /><MapRoute map={map} player={{ x: hud.x, z: hud.z, heading: hud.heading }} /></div>
          <div className="target-distance"><small>NEXT TARGET</small><b>{Math.round(targetDistance)}<i>M</i></b></div>
          <div className="checkpoint-pips">{map.checkpoints.map((cp, i) => <i key={cp.id} className={i < hud.checkpointIndex ? 'passed' : i === hud.checkpointIndex ? 'next' : ''} />)}<i className={hud.checkpointIndex === map.checkpoints.length ? 'finish-open' : ''} /></div>
        </div>
      </aside>

      <aside className="race-right-hud">
        <div className="hud-panel telemetry-panel">
          <div className="telemetry-row"><span>SURFACE</span><b>{surfaceLabel[hud.surface] ?? hud.surface}</b></div>
          <div className="telemetry-row"><span>GRIP</span><b>{gripPct}%</b></div>
          <div className="telemetry-meter"><i style={{ width: `${gripPct}%` }} /></div>
          <div className="telemetry-row"><span>SLIP</span><b className={slipPct > 55 ? 'warn' : ''}>{slipPct}%</b></div>
          <div className="telemetry-meter slip"><i style={{ width: `${slipPct}%` }} /></div>
          <div className="telemetry-row"><span>SUSP.</span><b>{Math.round(hud.suspensionLoad * 100)}%</b></div>
        </div>
      </aside>

      <div className="race-bottom-hud">
        <div className="pedal-box">
          <div><small>THROTTLE</small><span><i style={{ width: `${Math.max(0, hud.throttle) * 100}%` }} /></span></div>
          <div><small>BRAKE</small><span className="brake-meter"><i style={{ width: `${hud.brake * 100}%` }} /></span></div>
        </div>
        <div className="steer-box"><small>STEERING</small><div><i style={{ left: `${steeringPct}%` }} /></div></div>
        <div className="race-speed"><div className="speed-number"><b>{Math.round(hud.speed * 3.6)}</b><small>KM/H</small></div><span><i /> 4WD · {hud.slip > 0.55 ? 'SLIDE' : 'TRACTION'}</span></div>
      </div>

      <div className="race-controls"><span><kbd>W</kbd> 油门</span><span><kbd>S</kbd> 制动 / 倒车</span><span><kbd>A</kbd><kbd>D</kbd> 转向</span></div>

      {gameState === 'loading' && (
        <div className="loading-overlay">
          <div className="loading-card">
            <div className="loading-kicker"><span>INITIALIZING</span><b>4WD</b></div>
            <div className="loading-mark"><span /><span /><span /><span /><span /></div>
            <h2>装载地形与车辆</h2>
            <p>{vehicle.name} <i>×</i> {map.name}</p>
            <div className="loading-specs"><span>PHYSICS <b>READY</b></span><span>SUSPENSION <b>LIVE</b></span><span>ROUTE <b>{map.checkpoints.length} CP</b></span></div>
            <div className="loading-bar"><i /></div>
          </div>
        </div>
      )}

      {gameState === 'result' && result && (
        <section id="result-panel" className="result-overlay">
          <div className="result-card">
            <div className="result-stripe" />
            <div className="result-top"><small>VALID RUN // COMPLETE</small><span>◆ +{result.reward} CR</span></div>
            <h2>计时完成</h2>
            <div className="result-time"><span>FINAL TIME</span><b data-testid="final-time">{fmt(result.finalTime + 5)}</b><small>ALL CHECKPOINTS VALIDATED</small></div>
            <div className="result-meta"><div><small>VEHICLE</small><b>{vehicle.name}</b></div><div><small>ROUTE</small><b>{map.name}</b></div><div><small>CHECKPOINTS</small><b>{map.checkpoints.length}/{map.checkpoints.length}</b></div></div>
            <div className="reward"><span>完赛奖励已计入余额</span><b data-testid="result-reward">+ ◆ {result.reward}</b></div>
            <div className="result-actions"><button className="primary" data-testid="result-retry-action" onClick={onRetry}>再次挑战 <b>↻</b></button><button className="secondary" data-testid="result-menu-btn" onClick={onMenu}>返回主菜单</button></div>
          </div>
        </section>
      )}
    </main>
  )
}

function clampUi(value: number) {
  return Math.min(1, Math.max(0, value))
}

export default function App() {
  const [gameState, setGameState] = useState<GameStateName>('menu')
  const [credits, setCredits] = useState(INITIAL_CREDITS)
  const [vehicles, setVehicles] = useState<VehicleRuntime[]>(() => cloneVehicles())
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null)
  const [selectedMapId, setSelectedMapId] = useState<string | null>(null)
  const [raceId, setRaceId] = useState<string | null>(null)
  const [result, setResult] = useState<RaceResult | null>(null)
  const engineRef = useRef<OffroadEngine | null>(null)
  const raceCounter = useRef(0)
  const rewardedRaces = useRef(new Set<string>())
  const live = useRef({ gameState, credits, vehicles, selectedVehicleId, selectedMapId, raceId, result })
  live.current = { gameState, credits, vehicles, selectedVehicleId, selectedMapId, raceId, result }

  const buyVehicle = useCallback((id: string) => {
    const current = live.current
    const vehicle = current.vehicles.find(v => v.id === id)
    if (!vehicle || vehicle.owned || current.credits < vehicle.price) return
    const nextCredits = current.credits - vehicle.price
    const nextVehicles = current.vehicles.map(v => v.id === id ? { ...v, owned: true } : v)
    live.current = { ...current, credits: nextCredits, vehicles: nextVehicles, selectedVehicleId: id }
    setCredits(nextCredits)
    setVehicles(nextVehicles)
    setSelectedVehicleId(id)
  }, [])

  const upgradeVehicle = useCallback((vehicleId: string, upgradeId: string) => {
    const current = live.current
    const vehicle = current.vehicles.find(v => v.id === vehicleId)
    const upgrade = vehicle?.upgrades.find(u => u.id === upgradeId)
    if (!vehicle?.owned || !upgrade || upgrade.level >= 3) return
    const cost = nextUpgradeCost(upgrade.cost, upgrade.level)
    if (current.credits < cost) return
    const nextCredits = current.credits - cost
    const nextVehicles = current.vehicles.map(v => v.id !== vehicleId ? v : ({ ...v, upgrades: v.upgrades.map(u => u.id === upgradeId ? { ...u, level: u.level + 1 } : u) }))
    live.current = { ...current, credits: nextCredits, vehicles: nextVehicles }
    setCredits(nextCredits)
    setVehicles(nextVehicles)
  }, [])

  const beginRace = useCallback(() => {
    const current = live.current
    const vehicle = current.vehicles.find(v => v.id === current.selectedVehicleId)
    const map = MAPS.find(m => m.id === current.selectedMapId)
    if (!vehicle?.owned || !map) return
    raceCounter.current += 1
    const id = `tt-${Date.now().toString(36)}-${raceCounter.current}`
    setResult(null)
    setRaceId(id)
    setGameState('loading')
  }, [])

  const handleFinish = useCallback((finishedRaceId: string, finalTime: number, reward: number) => {
    const current = live.current
    if (rewardedRaces.current.has(finishedRaceId)) return
    if (current.raceId !== finishedRaceId || !current.selectedVehicleId || !current.selectedMapId) return
    rewardedRaces.current.add(finishedRaceId)
    const nextCredits = current.credits + reward
    const nextResult = { raceId: finishedRaceId, vehicleId: current.selectedVehicleId, mapId: current.selectedMapId, finalTime, reward }
    live.current = { ...current, credits: nextCredits, result: nextResult, gameState: 'result' }
    setCredits(nextCredits)
    setResult(nextResult)
    engineRef.current?.markRewardGranted()
    setGameState('result')
  }, [])

  const exitRace = useCallback(() => {
    setGameState('menu')
    setRaceId(null)
    setResult(null)
  }, [])

  const resultMenu = useCallback(() => {
    setGameState('menu')
    setRaceId(null)
  }, [])

  const retryRace = useCallback(() => beginRace(), [beginRace])

  useEffect(() => {
    const idleRace = () => ({
      raceId: null, mode: 'time_trial' as const, phase: 'idle' as const, playerCount: 0, competitorCount: 0,
      vehicleId: null, mapId: null, elapsedTime: 0, finalTime: null, finished: false,
      currentCheckpointIndex: 0, passedCheckpointIds: [] as string[], finishEligible: false, reward: 0, rewardGranted: false,
    })
    window.__game = { getState: () => {
      const s = live.current
      return { ready: true, gameState: s.gameState, credits: s.credits, selectedVehicleId: s.selectedVehicleId, selectedMapId: s.selectedMapId, currentRaceId: s.raceId, result: s.result ? { ...s.result } : null }
    } }
    window.__garage = { getState: () => {
      const s = live.current
      return {
        credits: s.credits,
        selectedVehicleId: s.selectedVehicleId,
        vehicles: s.vehicles.map(v => ({
          id: v.id, name: v.name, owned: v.owned, selected: s.selectedVehicleId === v.id, price: v.price,
          stats: appliedStats(v),
          upgrades: v.upgrades.map(u => ({ ...u, cost: nextUpgradeCost(u.cost, u.level) })),
        })),
      }
    } }
    window.__world = { getState: () => {
      const engineWorld = engineRef.current?.getWorldState()
      return {
        maps: MAPS.map(m => ({ id: m.id, name: m.name })),
        currentMap: engineWorld?.currentMap ?? null,
        visibleMapObjectCount: engineWorld?.visibleMapObjectCount ?? 0,
        renderFrame: engineWorld?.renderFrame ?? 0,
      }
    } }
    window.__race = { getState: () => engineRef.current?.getRaceState() ?? idleRace() }
    window.__vehicle = { getState: () => engineRef.current?.getVehicleState() ?? emptyVehicleState() }
    window.__camera = { getState: () => engineRef.current?.getCameraState() ?? emptyCameraState() }
    window.__scene = { getState: () => engineRef.current?.getSceneState() ?? emptySceneState() }
  }, [])

  const selectedVehicle = useMemo(() => vehicles.find(v => v.id === selectedVehicleId) ?? null, [vehicles, selectedVehicleId])
  const selectedMap = useMemo(() => MAPS.find(m => m.id === selectedMapId) ?? null, [selectedMapId])

  return (
    <div className="app-shell">
      {gameState === 'menu' && <MainMenu credits={credits} onRace={() => setGameState('vehicle_select')} onGarage={() => setGameState('garage')} />}
      {gameState === 'vehicle_select' && <VehicleSelect credits={credits} vehicles={vehicles} selectedId={selectedVehicleId} onBack={() => setGameState('menu')} onSelect={setSelectedVehicleId} onBuy={buyVehicle} onContinue={() => setGameState('map_select')} />}
      {gameState === 'map_select' && <MapSelect credits={credits} selectedId={selectedMapId} onBack={() => setGameState('vehicle_select')} onSelect={setSelectedMapId} onStart={beginRace} />}
      {gameState === 'garage' && <Garage credits={credits} vehicles={vehicles} onBack={() => setGameState('menu')} onBuy={buyVehicle} onUpgrade={upgradeVehicle} />}
      {(gameState === 'loading' || gameState === 'racing' || gameState === 'result') && raceId && selectedVehicle && selectedMap && (
        <RaceStage
          key={raceId}
          raceId={raceId}
          vehicle={selectedVehicle}
          map={selectedMap}
          gameState={gameState}
          result={result}
          onRunning={() => setGameState('racing')}
          onHud={() => {}}
          onFinish={handleFinish}
          onExit={exitRace}
          onMenu={resultMenu}
          onRetry={retryRace}
          engineRef={engineRef}
        />
      )}
    </div>
  )
}
