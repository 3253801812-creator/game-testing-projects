import { useCallback, useEffect, useMemo, useState } from 'react'
import { MAPS, VEHICLES } from './data'
import { runtime } from './runtime'
import type { GameScreen, VehicleDef, VehicleStats } from './types'
import ThreeGame from './components/ThreeGame'

declare global {
  interface Window {
    __game: { getState: () => unknown }
    __garage: { getState: () => unknown }
    __world: { getState: () => unknown }
    __race: { getState: () => unknown }
    __vehicle: { getState: () => unknown }
    __camera: { getState: () => unknown }
    __scene: { getState: () => unknown }
  }
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  const ms = Math.floor((seconds % 1) * 1000)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(ms).padStart(3, '0')}`
}

const statLabels: Record<keyof VehicleStats, string> = {
  mass: '重量', power: '动力', braking: '制动', steering: '转向', grip: '抓地', maxSpeed: '极速', suspension: '悬挂',
}

function getStats(vehicle: VehicleDef, levels: Record<string, number> | undefined): VehicleStats {
  const stats = { ...vehicle.baseStats }
  for (const upgrade of vehicle.upgrades) {
    const level = levels?.[upgrade.id] ?? 0
    stats[upgrade.affectedStat] += level * upgrade.amountPerLevel
  }
  return stats
}

function Credits({ value }: { value: number }) {
  return (
    <div className="credits-chip">
      <span className="coin-dot">C</span>
      <span data-testid="credits-value" className="tabular-nums">{value}</span>
      <span className="text-[10px] tracking-[.2em] text-white/45">CR</span>
    </div>
  )
}

function Logo() {
  return (
    <div className="select-none">
      <div className="flex items-center gap-2 text-[11px] font-bold tracking-[.34em] text-[#e9b64d]">
        <span className="inline-block h-[2px] w-7 bg-[#e9b64d]" /> RIDGELINE
      </div>
      <div className="mt-1 text-[10px] font-medium tracking-[.24em] text-white/35">OFFROAD DIVISION</div>
    </div>
  )
}

function BackButton({ onClick, testId, children = '返回' }: { onClick: () => void; testId: string; children?: string }) {
  return <button onClick={onClick} data-testid={testId} className="ghost-btn">← {children}</button>
}

function VehicleSilhouette({ vehicle }: { vehicle: VehicleDef }) {
  const color = `#${vehicle.bodyColor.toString(16).padStart(6, '0')}`
  return (
    <div className="vehicle-art" style={{ '--body-color': color } as React.CSSProperties}>
      <div className="vehicle-shadow" />
      <div className="vehicle-cabin" />
      <div className="vehicle-body" />
      <div className="vehicle-bumper" />
      <div className="wheel wheel-l" /><div className="wheel wheel-r" />
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState<GameScreen>('menu')
  const [credits, setCredits] = useState(runtime.credits)
  const [owned, setOwned] = useState<Record<string, boolean>>({ ...runtime.owned })
  const [upgrades, setUpgrades] = useState<Record<string, Record<string, number>>>({})
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>('trailhawk')
  const [selectedMapId, setSelectedMapId] = useState<string | null>(null)
  const [raceId, setRaceId] = useState<string | null>(null)
  const [hud, setHud] = useState({ elapsed: 0, speed: 0, checkpoint: 0, surface: 'dirt' })
  const [result, setResult] = useState<null | { raceId: string; vehicleId: string; mapId: string; finalTime: number; reward: number }>(null)
  const [notice, setNotice] = useState('')

  const selectedVehicle = VEHICLES.find(v => v.id === selectedVehicleId) ?? null
  const selectedMap = MAPS.find(m => m.id === selectedMapId) ?? null
  const appliedStats = useMemo(() => selectedVehicle ? getStats(selectedVehicle, upgrades[selectedVehicle.id]) : null, [selectedVehicle, upgrades])

  useEffect(() => {
    runtime.ready = true
    return () => { runtime.ready = false }
  }, [])

  useEffect(() => {
    runtime.gameState = screen
    runtime.credits = credits
    runtime.selectedVehicleId = selectedVehicleId
    runtime.selectedMapId = selectedMapId
    runtime.currentRaceId = raceId
    runtime.result = result
    runtime.owned = { ...owned }
    runtime.upgrades = JSON.parse(JSON.stringify(upgrades))
    if (screen !== 'loading' && screen !== 'racing') {
      runtime.scene.canvasVisible = false
      runtime.scene.visibleVehicleIds = []
      runtime.scene.visibleWheelCount = 0
      runtime.scene.visibleTerrain = false
      runtime.world.visibleMapObjectCount = 0
      runtime.camera.followedVehicleId = null
      runtime.camera.vehicleVisible = false
    }
  }, [screen, credits, selectedVehicleId, selectedMapId, raceId, result, owned, upgrades])

  useEffect(() => {
    const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value))

    window.__game = {
      getState: () => ({
        ready: runtime.ready,
        gameState: runtime.gameState,
        credits: runtime.credits,
        selectedVehicleId: runtime.selectedVehicleId,
        selectedMapId: runtime.selectedMapId,
        currentRaceId: runtime.currentRaceId,
        result: runtime.result ? clone(runtime.result) : null,
      }),
    }
    window.__garage = {
      getState: () => ({
        credits: runtime.credits,
        selectedVehicleId: runtime.selectedVehicleId,
        vehicles: VEHICLES.map(v => {
          const levels = runtime.upgrades[v.id]
          return {
            id: v.id,
            name: v.name,
            owned: Boolean(runtime.owned[v.id]),
            selected: runtime.selectedVehicleId === v.id,
            price: v.price,
            stats: getStats(v, levels),
            upgrades: v.upgrades.map(u => {
              const level = levels?.[u.id] ?? 0
              return {
                id: u.id,
                name: u.name,
                level,
                cost: level >= u.maxLevel ? 0 : Math.round(u.baseCost * (1 + level * 0.55)),
                affectedStat: u.affectedStat,
              }
            }),
          }
        }),
      }),
    }
    window.__world = {
      getState: () => {
        const m = MAPS.find(x => x.id === runtime.world.currentMapId)
        const live = (runtime.gameState === 'loading' || runtime.gameState === 'racing') && m
        return {
          maps: MAPS.map(x => ({ id: x.id, name: x.name })),
          currentMap: live ? {
            id: m.id,
            name: m.name,
            spawn: clone(m.spawn),
            finish: { position: { ...m.finish.position, y: m.heightAt(m.finish.position.x, m.finish.position.z) }, radius: m.finish.radius },
            checkpoints: m.checkpoints.map(cp => ({ ...cp, position: { ...cp.position, y: m.heightAt(cp.position.x, cp.position.z) } })),
            terrain: clone(m.terrain),
            obstacles: m.obstacles.map(o => ({ id: o.id, position: { ...o.position, y: m.heightAt(o.position.x, o.position.z) }, radius: o.radius })),
            obstacleCount: m.obstacles.length,
          } : null,
          visibleMapObjectCount: live ? runtime.world.visibleMapObjectCount : 0,
          renderFrame: runtime.world.renderFrame,
        }
      },
    }
    window.__race = {
      getState: () => ({
        raceId: runtime.race.raceId,
        mode: 'time_trial' as const,
        phase: runtime.race.phase,
        playerCount: runtime.race.raceId ? 1 : 0,
        competitorCount: 0,
        vehicleId: runtime.race.vehicleId,
        mapId: runtime.race.mapId,
        elapsedTime: runtime.race.elapsedTime,
        finalTime: runtime.race.finalTime,
        finished: runtime.race.finished,
        currentCheckpointIndex: runtime.race.currentCheckpointIndex,
        passedCheckpointIds: [...runtime.race.passedCheckpointIds],
        finishEligible: runtime.race.finishEligible,
        reward: runtime.race.reward,
        rewardGranted: runtime.race.rewardGranted,
      }),
    }
    window.__vehicle = {
      getState: () => {
        const live = runtime.gameState === 'loading' || runtime.gameState === 'racing'
        const v = runtime.vehicle
        return live ? clone(v) : {
          id: null,
          position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, forward: { x: 0, y: 0, z: -1 }, velocity: { x: 0, y: 0, z: 0 },
          speed: 0, throttle: 0, brake: 0, steering: 0, grounded: false, surfaceType: 'dirt', collision: { active: false, objectId: null },
          chassis: { height: 0, pitch: 0, roll: 0 }, wheels: [],
          appliedStats: { mass: 0, power: 0, braking: 0, steering: 0, grip: 0, maxSpeed: 0, suspension: 0 },
        }
      },
    }
    window.__camera = {
      getState: () => ({
        mode: 'third_person' as const,
        position: clone(runtime.camera.position),
        target: clone(runtime.camera.target),
        forward: clone(runtime.camera.forward),
        followedVehicleId: runtime.camera.followedVehicleId,
        vehicleVisible: runtime.camera.vehicleVisible,
      }),
    }
    window.__scene = {
      getState: () => ({
        renderer: runtime.scene.renderer,
        canvasVisible: runtime.scene.canvasVisible,
        canvasWidth: runtime.scene.canvasWidth,
        canvasHeight: runtime.scene.canvasHeight,
        renderFrame: runtime.scene.renderFrame,
        visibleVehicleIds: [...runtime.scene.visibleVehicleIds],
        visibleWheelCount: runtime.scene.visibleWheelCount,
        visibleTerrain: runtime.scene.visibleTerrain,
      }),
    }
  }, [])

  const flash = (text: string) => {
    setNotice(text)
    window.setTimeout(() => setNotice(''), 1800)
  }

  const buyVehicle = (vehicle: VehicleDef) => {
    if (owned[vehicle.id]) { flash('该车辆已拥有'); return }
    // BAD_2: insufficient-funds purchase protection is missing.
    setCredits(c => c - vehicle.price)
    setOwned(o => ({ ...o, [vehicle.id]: true }))
    setSelectedVehicleId(vehicle.id)
    flash(`${vehicle.name} 已加入车库`)
  }

  const buyUpgrade = (vehicle: VehicleDef, upgradeId: string) => {
    if (!owned[vehicle.id]) { flash('请先购买该车辆'); return }
    const upgrade = vehicle.upgrades.find(u => u.id === upgradeId)
    if (!upgrade) return
    const level = upgrades[vehicle.id]?.[upgrade.id] ?? 0
    if (level >= upgrade.maxLevel) { flash('升级已满级'); return }
    const cost = Math.round(upgrade.baseCost * (1 + level * 0.55))
    // BAD_2: insufficient-funds upgrade protection is missing.
    setCredits(c => c - cost)
    setUpgrades(all => ({ ...all, [vehicle.id]: { ...(all[vehicle.id] ?? {}), [upgrade.id]: level + 1 } }))
    flash(`${upgrade.name} 升至 Lv.${level + 1}`)
  }

  const startNewRace = useCallback(() => {
    if (!selectedVehicle || !selectedMap || !appliedStats || !owned[selectedVehicle.id]) return
    const id = `race-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    setRaceId(id)
    setResult(null)
    setHud({ elapsed: 0, speed: 0, checkpoint: 0, surface: 'dirt' })
    runtime.result = null
    runtime.currentRaceId = id
    runtime.race = {
      raceId: id, phase: 'loading', vehicleId: selectedVehicle.id, mapId: selectedMap.id,
      elapsedTime: 0, finalTime: null, finished: false, currentCheckpointIndex: 0,
      passedCheckpointIds: [], finishEligible: false, reward: 0, rewardGranted: false,
    }
    setScreen('loading')
  }, [selectedVehicle, selectedMap, appliedStats, owned])

  const handleReady = useCallback(() => setScreen(s => s === 'loading' ? 'racing' : s), [])
  const handleTick = useCallback((elapsed: number, speed: number, checkpoint: number, surface: string) => setHud({ elapsed, speed, checkpoint, surface }), [])
  const handleFinish = useCallback((finalTime: number) => {
    const m = MAPS.find(x => x.id === runtime.race.mapId)
    const vId = runtime.race.vehicleId
    const rId = runtime.race.raceId
    if (!m || !vId || !rId || runtime.race.rewardGranted) return
    const timeBonus = Math.max(0, Math.round((110 - finalTime) * 1.15))
    const reward = Math.max(1, m.rewardBase + timeBonus)
    runtime.race.reward = reward
    runtime.race.rewardGranted = true
    const nextResult = { raceId: rId, vehicleId: vId, mapId: m.id, finalTime, reward }
    runtime.result = nextResult
    setCredits(c => c + reward)
    setResult(nextResult)
    setScreen('result')
  }, [])

  const exitRace = () => {
    runtime.race.phase = 'idle'
    runtime.race.finished = false
    runtime.race.reward = 0
    runtime.race.rewardGranted = false
    runtime.currentRaceId = null
    setRaceId(null)
    setResult(null)
    setScreen('menu')
  }

  const renderHeader = (title: string, eyebrow: string, back?: React.ReactNode) => (
    <header className="screen-header">
      <div className="flex items-center gap-5">{back}<Logo /></div>
      <div className="absolute left-1/2 -translate-x-1/2 text-center max-sm:hidden">
        <div className="text-[10px] font-bold tracking-[.28em] text-[#e8b249]">{eyebrow}</div>
        <h1 className="mt-1 text-lg font-semibold tracking-[.08em] text-white/90">{title}</h1>
      </div>
      <Credits value={credits} />
    </header>
  )

  return (
    <main className="app-shell">
      {notice && <div className="toast">{notice}</div>}

      {screen === 'menu' && (
        <section id="main-menu" className="menu-screen">
          <div className="menu-grid" />
          <div className="menu-vignette" />
          <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-7 md:p-10"><Logo /><Credits value={credits} /></header>
          <div className="absolute right-[-6vw] top-[13vh] h-[64vh] w-[64vw] opacity-90 max-md:opacity-40">
            <VehicleSilhouette vehicle={VEHICLES[0]} />
          </div>
          <div className="relative z-10 flex h-full max-w-[1400px] items-center px-7 md:px-12 lg:px-20">
            <div className="max-w-[650px] pt-12">
              <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[.3em] text-[#e7b34c]"><span className="h-px w-10 bg-[#e7b34c]" /> SOLO TIME TRIAL</div>
              <h1 className="hero-title">越过边界<br/><span>只留下时间</span></h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/48">真实起伏地形、四轮独立悬挂与第三人称追踪驾驶。选车、选图、逐点通过检查门，用比赛奖励打造更强的越野机器。</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button data-testid="start-race-btn" onClick={() => setScreen('vehicle_select')} className="primary-btn min-w-[220px]">开始计时赛 <span>→</span></button>
                <button data-testid="garage-btn" onClick={() => setScreen('garage')} className="secondary-btn min-w-[160px]">车库 / 升级</button>
              </div>
              <div className="mt-10 flex gap-8 border-t border-white/10 pt-5 text-[10px] font-semibold tracking-[.16em] text-white/35">
                <span>WASD / 方向键 驾驶</span><span>2 张越野地图</span><span>纯单人</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 border-l border-t border-white/10 bg-black/25 px-7 py-4 text-[9px] tracking-[.18em] text-white/28">BUILD 02 · PHYSICS ONLINE</div>
        </section>
      )}

      {screen === 'vehicle_select' && (
        <section id="vehicle-select" className="panel-screen">
          {renderHeader('选择车辆', '01 / LOADOUT', <BackButton onClick={() => setScreen('menu')} testId="vehicle-select-back-btn" children="主菜单" />)}
          <div className="screen-content">
            <div className="section-intro"><h2>选择你的机器</h2><p>每台车都有独立的重量、动力、抓地与悬挂表现。未拥有车辆必须先购买。</p></div>
            <div className="vehicle-grid">
              {VEHICLES.map(v => {
                const isOwned = owned[v.id]
                const isSelected = selectedVehicleId === v.id
                const stats = getStats(v, upgrades[v.id])
                return (
                  <article key={v.id} data-testid="vehicle-card" data-vehicle-id={v.id} className={`vehicle-card ${isSelected ? 'selected' : ''}`}>
                    <div className="card-art"><VehicleSilhouette vehicle={v} /><div className="vehicle-class">{v.className}</div></div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-3"><div><h3>{v.name}</h3><p>{v.description}</p></div><span className={`status-pill ${isOwned ? 'owned' : ''}`}>{isOwned ? '已拥有' : `${v.price} CR`}</span></div>
                      <div className="stat-row"><span>动力 {stats.power.toFixed(1)}</span><span>极速 {stats.maxSpeed.toFixed(0)}</span><span>悬挂 {stats.suspension.toFixed(2)}</span></div>
                      <div className="mt-5">
                        {isOwned ? <button data-testid="select-vehicle-btn" data-vehicle-id={v.id} onClick={() => setSelectedVehicleId(v.id)} className={isSelected ? 'selected-btn' : 'card-btn'}>{isSelected ? '✓ 已选择' : '选择车辆'}</button>
                          : <button data-testid="buy-vehicle-btn" data-vehicle-id={v.id} onClick={() => buyVehicle(v)} className="card-btn">购买 · {v.price} CR</button>}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
            <div className="bottom-action"><div className="text-xs text-white/40">当前：<b className="text-white/80">{selectedVehicle?.name ?? '未选择'}</b></div><button data-testid="vehicle-continue-btn" disabled={!selectedVehicleId || !owned[selectedVehicleId]} onClick={() => setScreen('map_select')} className="primary-btn">继续选择地图 →</button></div>
          </div>
        </section>
      )}

      {screen === 'map_select' && (
        <section id="map-select" className="panel-screen">
          {renderHeader('选择赛道', '02 / ROUTE', <BackButton onClick={() => setScreen('vehicle_select')} testId="map-select-back-btn" children="车辆" />)}
          <div className="screen-content">
            <div className="section-intro"><h2>选择路线</h2><p>必须按顺序通过全部检查点后抵达终点。地表与坡度会改变抓地和速度。</p></div>
            <div className="map-grid">
              {MAPS.map((m, idx) => {
                const selected = selectedMapId === m.id
                return <article key={m.id} data-testid="map-card" data-map-id={m.id} className={`map-card ${selected ? 'selected' : ''}`}>
                  <div className={`map-preview map-preview-${idx + 1}`}><div className="contour-lines" /><span className="difficulty">{m.difficulty}</span><div className="route-line"><i/><i/><i/><i/><i/></div></div>
                  <div className="p-5 md:p-6"><div className="flex justify-between gap-3"><div><h3>{m.name}</h3><p>{m.subtitle}</p></div><div className="text-right text-[10px] leading-5 tracking-[.12em] text-white/35"><b className="block text-lg text-[#e8b34b]">{m.checkpoints.length}</b>CHECKPOINTS</div></div>
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-xs text-white/42">基础奖励 <b className="text-white/80">{m.rewardBase} CR</b></span><button data-testid="select-map-btn" data-map-id={m.id} onClick={() => setSelectedMapId(m.id)} className={selected ? 'selected-btn compact' : 'card-btn compact'}>{selected ? '✓ 已选择' : '选择地图'}</button></div>
                  </div>
                </article>
              })}
            </div>
            <div className="bottom-action"><div className="text-xs text-white/40">{selectedVehicle?.name} · <b className="text-white/80">{selectedMap?.name ?? '请选择地图'}</b></div><button data-testid="start-time-trial-btn" disabled={!selectedMapId} onClick={startNewRace} className="primary-btn">启动计时赛 →</button></div>
          </div>
        </section>
      )}

      {screen === 'garage' && (
        <section id="garage" className="panel-screen">
          {renderHeader('车库与升级', 'WORKSHOP', <BackButton onClick={() => setScreen('menu')} testId="garage-back-btn" children="主菜单" />)}
          <div className="screen-content pb-12">
            <div className="section-intro"><h2>车队管理</h2><p>购买车辆与真实性能升级。所有改装立即应用到后续比赛物理参数。</p></div>
            <div className="space-y-5">
              {VEHICLES.map(v => {
                const stats = getStats(v, upgrades[v.id]); const isOwned = owned[v.id]
                return <article key={v.id} data-vehicle-id={v.id} className="garage-card">
                  <div className="garage-vehicle"><VehicleSilhouette vehicle={v} /><div className="px-5 pb-5"><div className="flex items-center justify-between"><div><div className="text-[10px] tracking-[.18em] text-[#e4b149]">{v.className}</div><h3 className="mt-1 text-xl font-semibold">{v.name}</h3></div>{isOwned ? <span className="status-pill owned">已拥有</span> : <button data-testid="buy-vehicle-btn" data-vehicle-id={v.id} onClick={() => buyVehicle(v)} className="card-btn compact">购买 {v.price} CR</button>}</div></div></div>
                  <div className="garage-stats">
                    <div className="mb-4 text-[10px] font-bold tracking-[.2em] text-white/35">LIVE PERFORMANCE</div>
                    {(Object.keys(stats) as (keyof VehicleStats)[]).map(k => <div className="garage-stat" key={k}><span>{statLabels[k]}</span><b>{k === 'mass' ? `${stats[k].toFixed(0)} kg` : stats[k].toFixed(k === 'maxSpeed' ? 0 : 2)}</b></div>)}
                  </div>
                  <div className="garage-upgrades">
                    <div className="mb-4 text-[10px] font-bold tracking-[.2em] text-white/35">UPGRADES</div>
                    {v.upgrades.map(u => {
                      const level = upgrades[v.id]?.[u.id] ?? 0; const maxed = level >= u.maxLevel; const cost = maxed ? 0 : Math.round(u.baseCost * (1 + level * .55))
                      return <div key={u.id} className="upgrade-row"><div className="min-w-0"><div className="flex items-center gap-2"><b>{u.name}</b><span>Lv.{level}/{u.maxLevel}</span></div><p>{u.description}</p></div><button data-testid="upgrade-btn" data-vehicle-id={v.id} data-upgrade-id={u.id} disabled={!isOwned || maxed} onClick={() => buyUpgrade(v, u.id)} className="upgrade-btn">{maxed ? 'MAX' : `${cost} CR`}</button></div>
                    })}
                  </div>
                </article>
              })}
            </div>
          </div>
        </section>
      )}

      {(screen === 'loading' || screen === 'racing') && selectedMap && selectedVehicle && appliedStats && raceId && (
        <section id="race-screen" className="race-screen">
          <ThreeGame map={selectedMap} vehicle={selectedVehicle} stats={selectedVehicle.baseStats} raceId={raceId} active={screen === 'racing'} onReady={handleReady} onTick={handleTick} onFinish={handleFinish} />
          <div className="race-topbar"><Logo /><div className="race-timer-wrap"><span>TIME</span><strong data-testid="race-timer">{formatTime(hud.elapsed)}</strong></div><button data-testid="race-exit-btn" onClick={exitRace} className="race-exit">退出比赛</button></div>
          <div className="race-hud-left"><div className="hud-label">ROUTE PROGRESS</div><div className="checkpoint-big"><b>{Math.min(hud.checkpoint + 1, selectedMap.checkpoints.length + 1)}</b><span>/ {selectedMap.checkpoints.length + 1}</span></div><div className="hud-sub">{hud.checkpoint < selectedMap.checkpoints.length ? `CHECKPOINT ${hud.checkpoint + 1}` : 'FINISH OPEN'}</div></div>
          <div className="race-hud-right"><div className="speed-number">{Math.round(hud.speed * 3.6)}</div><div className="speed-unit">KM/H</div><div className="surface-badge">{hud.surface.toUpperCase()}</div></div>
          <div className="controls-hint"><span><kbd>W</kbd><kbd>S</kbd> 油门 / 制动 / 倒车</span><span><kbd>A</kbd><kbd>D</kbd> 转向</span></div>
          {screen === 'loading' && <div className="loading-overlay"><div className="loader-ring"/><div className="mt-5 text-xs font-bold tracking-[.28em] text-white/70">LOADING TERRAIN</div><div className="mt-2 text-[10px] tracking-[.18em] text-white/32">{selectedMap.name} · {selectedVehicle.name}</div></div>}
        </section>
      )}

      {screen === 'result' && result && (
        <section id="result-screen" className="result-screen">
          <div className="result-grid"/><header className="absolute inset-x-0 top-0 flex items-center justify-between p-7 md:p-10"><Logo/><Credits value={credits}/></header>
          <div className="result-card">
            <div className="result-kicker">TIME TRIAL COMPLETE</div><div className="finish-mark">✓</div><h1>路线完成</h1>
            <p>{VEHICLES.find(v=>v.id===result.vehicleId)?.name} · {MAPS.find(m=>m.id===result.mapId)?.name}</p>
            <div className="result-time"><span>FINAL TIME</span><strong data-testid="final-time">{formatTime(result.finalTime)}</strong></div>
            <div className="reward-line"><span>本次奖励</span><b data-testid="result-reward">+ {result.reward} CR</b></div>
            <div className="mt-7 grid grid-cols-2 gap-3"><button data-testid="result-menu-btn" onClick={() => { setRaceId(null); setScreen('menu') }} className="secondary-btn">返回主菜单</button><button data-testid="result-retry-btn" onClick={startNewRace} className="primary-btn">再次比赛 →</button></div>
            <div className="mt-5 text-[9px] tracking-[.14em] text-white/25">RACE ID · {result.raceId}</div>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
