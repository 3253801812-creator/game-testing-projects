export type GameStateName = 'menu' | 'vehicle_select' | 'map_select' | 'garage' | 'loading' | 'racing' | 'result'
export type RacePhase = 'idle' | 'loading' | 'running' | 'finished'
export type StatKey = 'power' | 'braking' | 'steering' | 'grip' | 'maxSpeed' | 'suspension'

export type Vec3State = { x: number; y: number; z: number }

export type VehicleStats = {
  mass: number
  power: number
  braking: number
  steering: number
  grip: number
  maxSpeed: number
  suspension: number
}

export type UpgradeState = {
  id: string
  name: string
  level: number
  cost: number
  affectedStat: StatKey
}

export type VehicleRuntime = {
  id: string
  name: string
  tagline: string
  owned: boolean
  price: number
  baseStats: VehicleStats
  upgrades: UpgradeState[]
  color: string
  accent: string
  className: string
}

export type MapDefinition = {
  id: string
  name: string
  subtitle: string
  difficulty: string
  surfaceLabel: string
  accent: string
  spawn: { position: Vec3State; forward: Vec3State }
  finish: { position: Vec3State; radius: number }
  checkpoints: Array<{ id: string; index: number; position: Vec3State; radius: number }>
  obstacles: Array<{ id: string; position: Vec3State; radius: number; kind: 'rock' | 'stump' }>
  terrain: { minHeight: number; maxHeight: number; surfaceTypes: string[] }
}

export type RaceResult = {
  raceId: string
  vehicleId: string
  mapId: string
  finalTime: number
  reward: number
}

export type RaceSnapshot = {
  raceId: string | null
  mode: 'time_trial'
  phase: RacePhase
  playerCount: number
  competitorCount: number
  vehicleId: string | null
  mapId: string | null
  elapsedTime: number
  finalTime: number | null
  finished: boolean
  currentCheckpointIndex: number
  passedCheckpointIds: string[]
  finishEligible: boolean
  reward: number
  rewardGranted: boolean
}

export type WheelSnapshot = {
  id: string
  position: Vec3State
  contactPoint: Vec3State | null
  grounded: boolean
  suspensionCompression: number
  suspensionTravel: number
}

export type VehicleSnapshot = {
  id: string | null
  position: Vec3State
  rotation: Vec3State
  forward: Vec3State
  velocity: Vec3State
  speed: number
  throttle: number
  brake: number
  steering: number
  grounded: boolean
  surfaceType: string
  collision: { active: boolean; objectId: string | null }
  chassis: { height: number; pitch: number; roll: number }
  wheels: WheelSnapshot[]
  appliedStats: VehicleStats
}

export type CameraSnapshot = {
  mode: 'third_person'
  position: Vec3State
  target: Vec3State
  forward: Vec3State
  followedVehicleId: string | null
  vehicleVisible: boolean
}

export type SceneSnapshot = {
  renderer: 'webgl' | 'webgl2'
  canvasVisible: boolean
  canvasWidth: number
  canvasHeight: number
  renderFrame: number
  visibleVehicleIds: string[]
  visibleWheelCount: number
  visibleTerrain: boolean
}
