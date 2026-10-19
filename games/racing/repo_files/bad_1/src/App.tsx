import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import GameCanvas from './GameCanvas'
import { MAPS, VEHICLES, getMap, getVehicle, statLabel, type VehicleStats } from './gameData'
import { createRuntime } from './runtime'

type Screen = 'menu' | 'vehicle_select' | 'map_select' | 'garage' | 'loading' | 'racing' | 'result'

type RaceMutable = {
  raceId: string | null
  phase: 'idle' | 'loading' | 'running' | 'finished'
  startTimeMs: number | null
  elapsedTime: number
  finalTime: number | null
  finished: boolean
  currentCheckpointIndex: number
  passedCheckpointIds: string[]
  finishEligible: boolean
  reward: number
  rewardGranted: boolean
}

type ResultState = null | {
  raceId: string
  vehicleId: string
  mapId: string
  finalTime: number
  reward: number
}

type ProfileStore = {
  credits: number
  owned: Set<string>
  upgrades: Record<string, Record<string, number>>
}

type BestRun = {
  time: number
  vehicleId: string
}

const initialRace = (): RaceMutable => ({
  raceId: null,
  phase: 'idle',
  startTimeMs: null,
  elapsedTime: 0,
  finalTime: null,
  finished: false,
  currentCheckpointIndex: 0,
  passedCheckpointIds: [],
  finishEligible: false,
  reward: 0,
  rewardGranted: false,
})

const formatTime = (seconds: number) => {
  const safe = Math.max(0, seconds)
  const minutes = Math.floor(safe / 60)
  const remainder = safe - minutes * 60
  return `${String(minutes).padStart(2, '0')}:${remainder.toFixed(2).padStart(5, '0')}`
}

const clamp01 = (value: number) => Math.max(0, Math.min(1, value))

const statMeterRanges: Record<Exclude<keyof VehicleStats, 'mass'>, [number, number]> = {
  power: [9000, 22000],
  braking: [7, 13],
  steering: [1, 2.2],
  grip: [5, 11],
  maxSpeed: [20, 34],
  suspension: [0.35, 0.85],
}

const statMeterValue = (key: Exclude<keyof VehicleStats, 'mass'>, value: number) => {
  const [min, max] = statMeterRanges[key]
  return clamp01((value - min) / (max - min))
}

function App() {
  const [screen, setScreenState] = useState<Screen>('menu')
  const screenRef = useRef<Screen>('menu')
  const [selectedVehicleId, setSelectedVehicleState] = useState<string | null>('trailhawk-x1')
  const selectedVehicleRef = useRef<string | null>('trailhawk-x1')
  const [selectedMapId, setSelectedMapState] = useState<string | null>('red-rock-run')
  const selectedMapRef = useRef<string | null>('red-rock-run')
  const profileRef = useRef<ProfileStore>({
    credits: 1400,
    owned: new Set(['trailhawk-x1']),
    upgrades: {},
  })
  const bestRunsRef = useRef<Record<string, BestRun>>({})
  const [profileVersion, setProfileVersion] = useState(0)
  const [uiTick, setUiTick] = useState(0)
  const [sessionVersion, setSessionVersion] = useState(0)
  const resultRef = useRef<ResultState>(null)
  const [result, setResult] = useState<ResultState>(null)
  const raceRef = useRef<RaceMutable>(initialRace())
  const runtimeRef = useRef(createRuntime())
  const raceCounter = useRef(0)

  const setScreen = useCallback((next: Screen) => {
    screenRef.current = next
    setScreenState(next)
  }, [])

  const setSelectedVehicle = useCallback((id: string | null) => {
    selectedVehicleRef.current = id
    setSelectedVehicleState(id)
  }, [])

  const setSelectedMap = useCallback((id: string | null) => {
    selectedMapRef.current = id
    setSelectedMapState(id)
  }, [])

  const getUpgradeLevel = useCallback((vehicleId: string, upgradeId: string) => {
    return profileRef.current.upgrades[vehicleId]?.[upgradeId] ?? 0
  }, [])

  const getUpgradeCost = useCallback((vehicleId: string, upgradeId: string) => {
    const vehicle = getVehicle(vehicleId)
    const upgrade = vehicle?.upgrades.find((item) => item.id === upgradeId)
    if (!upgrade) return 0
    const level = getUpgradeLevel(vehicleId, upgradeId)
    if (level >= upgrade.maxLevel) return 0
    return upgrade.baseCost + level * Math.round(upgrade.baseCost * 0.55)
  }, [getUpgradeLevel])

  const getAppliedStats = useCallback((vehicleId: string | null): VehicleStats => {
    const vehicle = getVehicle(vehicleId)
    if (!vehicle) return { mass: 0, power: 0, braking: 0, steering: 0, grip: 0, maxSpeed: 0, suspension: 0 }
    const stats = { ...vehicle.baseStats }
    for (const upgrade of vehicle.upgrades) {
      const level = getUpgradeLevel(vehicle.id, upgrade.id)
      stats[upgrade.affectedStat] += upgrade.step * level
    }
    return stats
  }, [getUpgradeLevel])

  const selectedVehicle = getVehicle(selectedVehicleId)
  const selectedMap = getMap(selectedMapId)
  const appliedStats = useMemo(
    () => getAppliedStats(selectedVehicleId),
    [getAppliedStats, profileVersion, selectedVehicleId],
  )

  const startRace = useCallback(() => {
    const vehicleId = selectedVehicleRef.current
    const mapId = selectedMapRef.current
    if (!vehicleId || !mapId || !profileRef.current.owned.has(vehicleId)) return
    raceCounter.current += 1
    const raceId = `tt-${Date.now()}-${raceCounter.current}`
    raceRef.current = {
      raceId,
      phase: 'loading',
      startTimeMs: null,
      elapsedTime: 0,
      finalTime: null,
      finished: false,
      currentCheckpointIndex: 0,
      passedCheckpointIds: [],
      finishEligible: false,
      reward: 0,
      rewardGranted: false,
    }
    resultRef.current = null
    setResult(null)
    setUiTick((v) => v + 1)
    setScreen('loading')
  }, [setScreen])

  const finishRace = useCallback((finalTime: number) => {
    const race = raceRef.current
    const vehicleId = selectedVehicleRef.current
    const mapId = selectedMapRef.current
    const map = getMap(mapId)
    if (!race.raceId || !vehicleId || !mapId || !map || race.rewardGranted === true) return
    if (!race.finished || !race.finishEligible || race.passedCheckpointIds.length !== map.checkpoints.length) return
    const timeBonus = Math.max(0, Math.floor((105 - finalTime) * 2.2))
    const reward = Math.max(1, map.rewardBase + timeBonus)
    race.finalTime = finalTime
    race.elapsedTime = finalTime
    race.reward = reward
    race.rewardGranted = true
    race.finished = true
    race.phase = 'finished'
    profileRef.current.credits += reward

    const currentBest = bestRunsRef.current[mapId]
    if (!currentBest || finalTime < currentBest.time) {
      bestRunsRef.current[mapId] = { time: finalTime, vehicleId }
      setSessionVersion((v) => v + 1)
    }

    const nextResult: NonNullable<ResultState> = {
      raceId: race.raceId,
      vehicleId,
      mapId,
      finalTime,
      reward,
    }
    resultRef.current = nextResult
    setResult(nextResult)
    setProfileVersion((v) => v + 1)
    setScreen('result')
  }, [setScreen])

  const exitRace = useCallback(() => {
    raceRef.current = initialRace()
    resultRef.current = null
    setResult(null)
    setUiTick((v) => v + 1)
    setScreen('menu')
  }, [setScreen])

  const buyVehicle = useCallback((vehicleId: string) => {
    const vehicle = getVehicle(vehicleId)
    if (!vehicle || profileRef.current.owned.has(vehicleId)) return
    if (profileRef.current.credits < vehicle.price) return
    profileRef.current.credits -= vehicle.price
    profileRef.current.owned.add(vehicleId)
    setSelectedVehicle(vehicleId)
    setProfileVersion((v) => v + 1)
  }, [setSelectedVehicle])

  const buyUpgrade = useCallback((vehicleId: string, upgradeId: string) => {
    const vehicle = getVehicle(vehicleId)
    const upgrade = vehicle?.upgrades.find((item) => item.id === upgradeId)
    if (!vehicle || !upgrade || !profileRef.current.owned.has(vehicleId)) return
    const level = getUpgradeLevel(vehicleId, upgradeId)
    if (level >= upgrade.maxLevel) return
    const cost = getUpgradeCost(vehicleId, upgradeId)
    if (profileRef.current.credits < cost) return
    profileRef.current.credits -= cost
    profileRef.current.upgrades[vehicleId] = profileRef.current.upgrades[vehicleId] ?? {}
    profileRef.current.upgrades[vehicleId][upgradeId] = level + 1
    setProfileVersion((v) => v + 1)
  }, [getUpgradeCost, getUpgradeLevel])

  const progressUpdate = useCallback(() => setUiTick((v) => v + 1), [])

  useEffect(() => {
    if (screen !== 'loading') return
    const timer = window.setTimeout(() => {
      if (raceRef.current.phase !== 'loading') return
      raceRef.current.phase = 'running'
      raceRef.current.startTimeMs = performance.now()
      raceRef.current.elapsedTime = 0
      setScreen('racing')
    }, 850)
    return () => window.clearTimeout(timer)
  }, [screen, setScreen])

  useEffect(() => {
    if (screen !== 'racing' && screen !== 'loading') return
    const timer = window.setInterval(() => setUiTick((v) => v + 1), 80)
    return () => window.clearInterval(timer)
  }, [screen])

  useEffect(() => {
    const garageState = () => ({
      credits: profileRef.current.credits,
      selectedVehicleId: selectedVehicleRef.current,
      vehicles: VEHICLES.map((vehicle) => {
        const stats = getAppliedStats(vehicle.id)
        return {
          id: vehicle.id,
          name: vehicle.name,
          owned: profileRef.current.owned.has(vehicle.id),
          selected: selectedVehicleRef.current === vehicle.id,
          price: vehicle.price,
          stats,
          upgrades: vehicle.upgrades.map((upgrade) => ({
            id: upgrade.id,
            name: upgrade.name,
            level: getUpgradeLevel(vehicle.id, upgrade.id),
            cost: getUpgradeCost(vehicle.id, upgrade.id),
            affectedStat: upgrade.affectedStat,
          })),
        }
      }),
    })

    window.__game = {
      getState: () => ({
        ready: true,
        gameState: screenRef.current,
        credits: profileRef.current.credits,
        selectedVehicleId: selectedVehicleRef.current,
        selectedMapId: selectedMapRef.current,
        currentRaceId: raceRef.current.raceId,
        result: resultRef.current ? { ...resultRef.current } : null,
      }),
    }
    window.__garage = { getState: garageState }
    window.__world = {
      getState: () => {
        const active = screenRef.current === 'loading' || screenRef.current === 'racing'
        const current = active ? getMap(selectedMapRef.current) : null
        return {
          maps: MAPS.map((map) => ({ id: map.id, name: map.name })),
          currentMap: current
            ? {
                id: current.id,
                name: current.name,
                spawn: {
                  position: {
                    x: current.spawn.position.x,
                    y: current.heightAt(current.spawn.position.x, current.spawn.position.z),
                    z: current.spawn.position.z,
                  },
                  forward: { ...current.spawn.forward },
                },
                finish: {
                  position: {
                    x: current.finish.position.x,
                    y: current.heightAt(current.finish.position.x, current.finish.position.z),
                    z: current.finish.position.z,
                  },
                  radius: current.finish.radius,
                },
                checkpoints: current.checkpoints.map((cp) => ({
                  id: cp.id,
                  index: cp.index,
                  position: { x: cp.position.x, y: current.heightAt(cp.position.x, cp.position.z), z: cp.position.z },
                  radius: cp.radius,
                })),
                terrain: { ...current.terrain, surfaceTypes: [...current.terrain.surfaceTypes] },
                obstacles: current.obstacles.map((obstacle) => ({
                  id: obstacle.id,
                  position: {
                    x: obstacle.position.x,
                    y:
                      current.heightAt(obstacle.position.x, obstacle.position.z) +
                      (obstacle.type === 'rock' ? obstacle.radius * 0.62 : obstacle.radius * 0.5),
                    z: obstacle.position.z,
                  },
                  radius: obstacle.radius,
                })),
                obstacleCount: current.obstacles.length,
              }
            : null,
          visibleMapObjectCount: runtimeRef.current.scene.visibleMapObjectCount,
          renderFrame: runtimeRef.current.scene.renderFrame,
        }
      },
    }
    window.__race = {
      getState: () => {
        const race = raceRef.current
        return {
          raceId: race.raceId,
          mode: 'time_trial' as const,
          phase: race.phase,
          playerCount: race.raceId ? 1 : 0,
          competitorCount: 0,
          vehicleId: race.raceId ? selectedVehicleRef.current : null,
          mapId: race.raceId ? selectedMapRef.current : null,
          elapsedTime: race.elapsedTime,
          finalTime: race.finalTime,
          finished: race.finished,
          currentCheckpointIndex: race.currentCheckpointIndex,
          passedCheckpointIds: [...race.passedCheckpointIds],
          finishEligible: race.finishEligible,
          reward: race.reward,
          rewardGranted: race.rewardGranted,
        }
      },
    }
    window.__vehicle = { getState: () => structuredClone(runtimeRef.current.vehicle) }
    window.__camera = { getState: () => structuredClone(runtimeRef.current.camera) }
    window.__scene = { getState: () => structuredClone(runtimeRef.current.scene) }

    return () => {
      delete (window as Partial<Window>).__game
      delete (window as Partial<Window>).__garage
      delete (window as Partial<Window>).__world
      delete (window as Partial<Window>).__race
      delete (window as Partial<Window>).__vehicle
      delete (window as Partial<Window>).__camera
      delete (window as Partial<Window>).__scene
    }
  }, [getAppliedStats, getUpgradeCost, getUpgradeLevel])

  const race = raceRef.current
  const currentSpeed = runtimeRef.current.vehicle.speed
  const currentSurface = runtimeRef.current.vehicle.surfaceType
  const wheelCompressions = runtimeRef.current.vehicle.wheels.map((wheel) => wheel.suspensionCompression)
  const throttleValue = runtimeRef.current.vehicle.throttle
  const brakeValue = runtimeRef.current.vehicle.brake
  const steeringValue = runtimeRef.current.vehicle.steering
  const credits = profileRef.current.credits
  const totalUpgradesPurchased = Object.values(profileRef.current.upgrades).reduce(
    (sum, vehicleUpgrades) => sum + Object.values(vehicleUpgrades).reduce((inner, level) => inner + level, 0),
    0,
  )
  const ownedCount = profileRef.current.owned.size
  const selectedBest = selectedMapId ? bestRunsRef.current[selectedMapId] : undefined
  const bestEntries = Object.entries(bestRunsRef.current) as [string, BestRun][]
  const bestEntry = [...bestEntries].sort((a, b) => a[1].time - b[1].time)[0]
  const resultBest = result ? bestRunsRef.current[result.mapId] : undefined
  const isBestResult = !!result && !!resultBest && Math.abs(resultBest.time - result.finalTime) < 0.0001
  void uiTick
  void profileVersion
  void sessionVersion

  const performanceKeys: (Exclude<keyof VehicleStats, 'mass'>)[] = ['power', 'braking', 'steering', 'grip', 'maxSpeed', 'suspension']

  return (
    <main className="app-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <button className="brand" onClick={() => {
          if (screen === 'racing' || screen === 'loading') return
          if (screen === 'result') { raceRef.current = initialRace(); resultRef.current = null; setResult(null) }
          setScreen('menu')
        }} aria-label="返回主菜单">
          <span className="brand-mark">R</span>
          <span><b>RUGGED</b><small>OFFROAD DIVISION</small></span>
        </button>
        <div className="credits-pill" aria-label="金币余额">
          <span className="coin-dot">◆</span>
          <strong data-testid="credits-value">{credits.toLocaleString('zh-CN')}</strong>
          <small>CR</small>
        </div>
      </header>

      {screen === 'menu' && (
        <section id="main-menu" className="screen menu-screen">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> SOLO TIME TRIAL / SEASON 01</div>
              <h1>荒野没有<br /><em>理想路线</em></h1>
              <p>控制四轮悬挂穿越真实起伏地形。按顺序攻下检查点，用最短时间抵达终点；购买新车和升级，让每一条路都更快通过。</p>
              <div className="hero-actions">
                <button data-testid="start-race-btn" className="button primary huge" onClick={() => setScreen('vehicle_select')}>
                  <span>开始计时赛</span><b>→</b>
                </button>
                <button data-testid="garage-btn" className="button ghost huge" onClick={() => setScreen('garage')}>
                  进入车库
                </button>
              </div>
              <div className="control-strip">
                <span><kbd>W</kbd><kbd>↑</kbd> 加速</span>
                <span><kbd>S</kbd><kbd>↓</kbd> 制动 / 倒车</span>
                <span><kbd>A</kbd><kbd>D</kbd> 转向</span>
              </div>
              <div className="hero-overview">
                <div className="overview-card emphasis">
                  <small>当前出赛</small>
                  <b>{selectedVehicle?.name ?? '未选择'}</b>
                  <span>{selectedMap?.name ?? '未选择地图'}</span>
                </div>
                <div className="overview-card">
                  <small>车库进度</small>
                  <b>{ownedCount}/{VEHICLES.length}</b>
                  <span>已拥有车辆</span>
                </div>
                <div className="overview-card">
                  <small>升级总数</small>
                  <b>{totalUpgradesPurchased}</b>
                  <span>已安装升级</span>
                </div>
                <div className="overview-card">
                  <small>最佳成绩</small>
                  <b>{bestEntry ? formatTime(bestEntry[1].time) : '--:--.--'}</b>
                  <span>{bestEntry ? getMap(bestEntry[0])?.name : '等待首次完赛'}</span>
                </div>
              </div>
            </div>
            <div className="hero-machine" aria-hidden="true">
              <div className="sun-disc" />
              <div className="mountain mountain-a" />
              <div className="mountain mountain-b" />
              <div className="silhouette-car">
                <div className="sil-body" /><div className="sil-cabin" />
                <div className="sil-wheel left" /><div className="sil-wheel right" />
              </div>
              <div className="spec-tag tag-a"><b>4×4</b><small>DRIVETRAIN</small></div>
              <div className="spec-tag tag-b"><b>LIVE</b><small>SUSPENSION</small></div>
            </div>
          </div>
          <div className="menu-footer">
            <span>2 张地形地图</span><i /> <span>2 辆独立调校车辆</span><i /> <span>单人纯计时</span>
          </div>
        </section>
      )}

      {screen === 'vehicle_select' && (
        <section id="vehicle-select" className="screen selection-screen">
          <div className="section-heading">
            <div><span className="step">01 / 02</span><h2>选择车辆</h2><p>车辆质量、动力、转向、抓地和悬挂会直接改变驾驶表现。</p></div>
            <button data-testid="vehicle-select-back-btn" className="text-button" onClick={() => setScreen('menu')}>← 主菜单</button>
          </div>
          <div className="vehicle-grid">
            {VEHICLES.map((vehicle) => {
              const owned = profileRef.current.owned.has(vehicle.id)
              const selected = selectedVehicleId === vehicle.id
              const stats = getAppliedStats(vehicle.id)
              return (
                <article key={vehicle.id} data-testid="vehicle-card" data-vehicle-id={vehicle.id} className={`vehicle-card ${selected ? 'selected' : ''} ${!owned ? 'locked' : ''}`}>
                  <div className={`vehicle-poster ${vehicle.id === 'ironclad-v8' ? 'orange' : 'lime'}`}>
                    <span className="vehicle-index">{vehicle.id === 'trailhawk-x1' ? '01' : '02'}</span>
                    <div className="vehicle-art"><span className="art-body" /><span className="art-cabin" /><span className="art-wheel w1" /><span className="art-wheel w2" /></div>
                    {!owned && <div className="lock-badge">◆ {vehicle.price} CR 解锁</div>}
                    {owned && <div className="poster-chip">READY</div>}
                  </div>
                  <div className="vehicle-card-body">
                    <small>{vehicle.subtitle}</small><h3>{vehicle.name}</h3><p>{vehicle.description}</p>
                    <div className="mini-stats">
                      <span><b>{Math.round(stats.power / 100) / 10}k</b> 动力</span>
                      <span><b>{stats.maxSpeed.toFixed(1)}</b> m/s</span>
                      <span><b>{stats.suspension.toFixed(2)}</b> m 悬挂</span>
                    </div>
                    <div className="stat-bar-grid">
                      {performanceKeys.map((key) => (
                        <div className="stat-bar" key={key}>
                          <span>{statLabel[key]}</span>
                          <div><i style={{ width: `${statMeterValue(key, stats[key]) * 100}%` }} /></div>
                        </div>
                      ))}
                    </div>
                    <button
                      data-testid="select-vehicle-btn"
                      data-vehicle-id={vehicle.id}
                      className="button card-button"
                      disabled={!owned}
                      onClick={() => setSelectedVehicle(vehicle.id)}
                    >
                      {selected ? '已选择' : owned ? '选择车辆' : '需先在车库购买'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="bottom-action enhanced">
            <div className="bottom-summary">
              <span>{selectedVehicle ? `当前：${selectedVehicle.name}` : '请选择已拥有车辆'}</span>
              {selectedVehicle && <small>{selectedVehicle.description}</small>}
            </div>
            <button data-testid="vehicle-continue-btn" className="button primary" disabled={!selectedVehicleId || !profileRef.current.owned.has(selectedVehicleId)} onClick={() => setScreen('map_select')}>继续选择地图 →</button>
          </div>
        </section>
      )}

      {screen === 'map_select' && (
        <section id="map-select" className="screen selection-screen">
          <div className="section-heading">
            <div><span className="step">02 / 02</span><h2>选择赛段</h2><p>每张地图拥有独立地形函数、路线、检查点和实体障碍。</p></div>
            <button data-testid="map-select-back-btn" className="text-button" onClick={() => setScreen('vehicle_select')}>← 返回选车</button>
          </div>
          <div className="map-grid">
            {MAPS.map((map) => {
              const selected = selectedMapId === map.id
              const bestRun = bestRunsRef.current[map.id]
              return (
                <article key={map.id} data-testid="map-card" data-map-id={map.id} className={`map-card ${selected ? 'selected' : ''}`}>
                  <div className={`map-visual ${map.theme}`}>
                    <div className="map-gridlines" />
                    <div className="route-sketch"><i /><i /><i /><i /></div>
                    <span className="map-weather">{map.theme === 'canyon' ? 'DRY / 31°C' : 'WET / 16°C'}</span>
                    <div className="map-badge">{map.theme === 'canyon' ? 'HIGH SPEED' : 'LOW GRIP'}</div>
                  </div>
                  <div className="map-info">
                    <small>{map.subtitle}</small><h3>{map.name}</h3><p>{map.description}</p>
                    <div className="map-meta"><span>{map.checkpoints.length} CHECKPOINTS</span><span>{map.obstacles.length} OBSTACLES</span><span>+{map.rewardBase} CR</span></div>
                    <div className="map-extra-meta">
                      <span>表面：{map.terrain.surfaceTypes.join(' / ')}</span>
                      <span>最佳：{bestRun ? formatTime(bestRun.time) : '暂无'}</span>
                    </div>
                    <button data-testid="select-map-btn" data-map-id={map.id} className="button card-button" onClick={() => setSelectedMap(map.id)}>{selected ? '已选择' : '选择赛段'}</button>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="bottom-action enhanced">
            <div className="bottom-summary">
              <span>{selectedVehicle?.name} / {selectedMap?.name}</span>
              <small>{selectedBest ? `当前赛段最佳 ${formatTime(selectedBest.time)} · ${getVehicle(selectedBest.vehicleId)?.name}` : '完成本赛段即可记录本次会话最佳成绩'}</small>
            </div>
            <button data-testid="start-time-trial-btn" className="button primary" disabled={!selectedMap || !selectedVehicle || !profileRef.current.owned.has(selectedVehicle.id)} onClick={startRace}>启动计时赛 →</button>
          </div>
        </section>
      )}

      {screen === 'garage' && (
        <section id="garage" className="screen garage-screen">
          <div className="section-heading">
            <div><span className="step">WORKSHOP</span><h2>车辆车库</h2><p>购买车辆与性能升级。升级后的数值直接传入下一场比赛的车辆物理。</p></div>
            <button data-testid="garage-back-btn" className="text-button" onClick={() => setScreen('menu')}>← 主菜单</button>
          </div>
          <div className="garage-header-strip">
            <div><small>车库概况</small><b>{ownedCount}/{VEHICLES.length} 台已拥有</b></div>
            <div><small>升级安装</small><b>{totalUpgradesPurchased} 项</b></div>
            <div><small>可用资金</small><b>{credits.toLocaleString('zh-CN')} CR</b></div>
          </div>
          <div className="garage-list">
            {VEHICLES.map((vehicle) => {
              const owned = profileRef.current.owned.has(vehicle.id)
              const stats = getAppliedStats(vehicle.id)
              return (
                <article key={vehicle.id} data-testid="vehicle-card" data-vehicle-id={vehicle.id} className="garage-card">
                  <div className={`garage-car ${vehicle.id === 'ironclad-v8' ? 'orange' : 'lime'}`}>
                    <span className="garage-status">{owned ? 'OWNED' : 'LOCKED'}</span>
                    <h3>{vehicle.name}</h3><small>{vehicle.subtitle}</small>
                    <div className="garage-art"><i /><i /><b /><b /></div>
                    <div className="garage-chip-row">
                      <span>{Math.round(stats.power / 100) / 10}k 力</span>
                      <span>{stats.grip.toFixed(1)} 抓地</span>
                    </div>
                    {!owned && <button data-testid="buy-vehicle-btn" data-vehicle-id={vehicle.id} className="button primary" disabled={credits < vehicle.price} onClick={() => buyVehicle(vehicle.id)}>购买 · {vehicle.price} CR</button>}
                    {owned && <button className="button ghost" onClick={() => setSelectedVehicle(vehicle.id)}>{selectedVehicleId === vehicle.id ? '当前出赛车辆' : '设为出赛车辆'}</button>}
                  </div>
                  <div className="garage-detail">
                    <div className="stat-table">
                      {(Object.keys(stats) as (keyof VehicleStats)[]).map((key) => (
                        <div key={key}><span>{statLabel[key]}</span><strong>{key === 'mass' ? `${stats[key].toFixed(0)} kg` : stats[key].toFixed(key === 'power' ? 0 : 2)}</strong></div>
                      ))}
                    </div>
                    <div className="upgrade-list">
                      {vehicle.upgrades.map((upgrade) => {
                        const level = getUpgradeLevel(vehicle.id, upgrade.id)
                        const cost = getUpgradeCost(vehicle.id, upgrade.id)
                        const maxed = level >= upgrade.maxLevel
                        const progress = `${(level / upgrade.maxLevel) * 100}%`
                        return (
                          <div className="upgrade-row" key={upgrade.id}>
                            <div>
                              <small>{statLabel[upgrade.affectedStat]}</small>
                              <b>{upgrade.name}</b>
                              <span>LV {level}/{upgrade.maxLevel}</span>
                              <div className="upgrade-progress"><i style={{ width: progress }} /></div>
                            </div>
                            <button
                              data-testid="upgrade-btn"
                              data-vehicle-id={vehicle.id}
                              data-upgrade-id={upgrade.id}
                              className="upgrade-button"
                              disabled={!owned || maxed || credits < cost}
                              onClick={() => buyUpgrade(vehicle.id, upgrade.id)}
                            >
                              {!owned ? '先购买车辆' : maxed ? 'MAX' : `${cost} CR · 升级`}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      )}

      {(screen === 'loading' || screen === 'racing') && selectedMap && selectedVehicle && (
        <section id="race-screen" className="race-screen">
          <GameCanvas
            key={race.raceId ?? 'race'}
            map={selectedMap}
            vehicle={getVehicle('trailhawk-x1')!}
            appliedStats={getAppliedStats('trailhawk-x1')}
            raceRef={raceRef}
            runtimeRef={runtimeRef}
            onProgress={progressUpdate}
            onFinish={finishRace}
          />
          <div className="race-vignette" aria-hidden="true" />
          <div className="race-top-hud">
            <div className="race-title"><small>TIME TRIAL</small><b>{selectedMap.name}</b></div>
            <div className="timer-panel"><small>ELAPSED</small><strong data-testid="race-timer">{formatTime(race.elapsedTime)}</strong></div>
            <button data-testid="race-exit-btn" className="exit-race" onClick={exitRace}>退出比赛</button>
          </div>
          <div className="checkpoint-panel">
            <small>ROUTE PROGRESS</small>
            <strong>{Math.min(race.currentCheckpointIndex, selectedMap.checkpoints.length)} / {selectedMap.checkpoints.length}</strong>
            <div className="checkpoint-dots">
              {selectedMap.checkpoints.map((cp, i) => <i key={cp.id} className={i < race.currentCheckpointIndex ? 'passed' : i === race.currentCheckpointIndex ? 'active' : ''} />)}
              <i className={race.finishEligible ? 'finish active' : 'finish'} />
            </div>
            <span>{race.finishEligible ? '终点已解锁' : `下一检查点：CP ${race.currentCheckpointIndex + 1}`}</span>
          </div>
          <div className="telemetry-panel">
            <div className="speed"><strong>{Math.round(currentSpeed * 3.6)}</strong><small>KM/H</small></div>
            <div className="telemetry-meta">
              <span>SURFACE <b>{currentSurface.toUpperCase()}</b></span>
              <span>GRIP <b>{appliedStats.grip.toFixed(1)}</b></span>
              <span>BEST <b>{selectedBest ? formatTime(selectedBest.time) : '--:--.--'}</b></span>
            </div>
            <div className="suspension-readout">
              <small>SUSPENSION / FL FR RL RR</small>
              <div>{[0, 1, 2, 3].map((i) => <i key={i}><b style={{ height: `${Math.max(6, (wheelCompressions[i] ?? 0) * 100)}%` }} /></i>)}</div>
            </div>
          </div>
          <div className="objective-panel">
            <small>RUN STATUS</small>
            <b>{selectedVehicle.name}</b>
            <span>{selectedMap.subtitle}</span>
            <div className="input-meter-list">
              <div><label>THROTTLE</label><i><b style={{ width: `${throttleValue * 100}%` }} /></i></div>
              <div><label>BRAKE</label><i><b style={{ width: `${brakeValue * 100}%` }} /></i></div>
              <div><label>STEER</label><i><b style={{ width: `${Math.abs(steeringValue) * 50}%`, marginLeft: steeringValue < 0 ? `${50 - Math.abs(steeringValue) * 50}%` : '50%' }} /></i></div>
            </div>
          </div>
          <div className="race-controls"><kbd>W</kbd><span>油门</span><kbd>S</kbd><span>制动/倒车</span><kbd>A</kbd><kbd>D</kbd><span>转向</span></div>
          {screen === 'loading' && (
            <div className="loading-overlay"><div className="loader-ring" /><small>PREPARING COURSE</small><h2>{selectedMap.name}</h2><p>{selectedVehicle.name} · suspension calibrated</p></div>
          )}
        </section>
      )}

      {screen === 'result' && result && (
        <section id="result-screen" className="screen result-screen">
          <div className="result-card">
            <div className="result-stripe">{isBestResult ? 'NEW BEST' : 'VALID RUN'}</div>
            <small className="eyebrow result-eye"><span /> TIME TRIAL COMPLETE</small>
            <h2>赛段完成</h2>
            <div className="final-time"><small>FINAL TIME</small><strong data-testid="final-time">{formatTime(result.finalTime)}</strong></div>
            <div className="result-grid">
              <div><small>车辆</small><b>{getVehicle(result.vehicleId)?.name}</b></div>
              <div><small>地图</small><b>{getMap(result.mapId)?.name}</b></div>
              <div><small>奖励</small><b data-testid="result-reward">+{result.reward} CR</b></div>
            </div>
            <div className="result-summary-line">
              <span>{isBestResult ? '本次刷新了该赛段会话最佳成绩。' : '继续优化路线和抓地控制，争取更快的用时。'}</span>
              <small>{resultBest ? `赛段最佳：${formatTime(resultBest.time)} · ${getVehicle(resultBest.vehicleId)?.name}` : ''}</small>
            </div>
            <div className="result-actions">
              <button data-testid="result-retry-btn" className="button primary" onClick={startRace}>再次挑战</button>
              <button data-testid="result-menu-btn" className="button ghost" onClick={() => { raceRef.current = initialRace(); resultRef.current = null; setResult(null); setScreen('menu') }}>返回主菜单</button>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
