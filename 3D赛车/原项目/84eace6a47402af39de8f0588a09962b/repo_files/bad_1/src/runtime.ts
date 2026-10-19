import type { VehicleStats, Vec3 } from './gameData'

export type WheelRuntime = {
  id: string
  position: Vec3
  contactPoint: Vec3 | null
  grounded: boolean
  suspensionCompression: number
  suspensionTravel: number
}

export type VehicleRuntime = {
  id: string | null
  position: Vec3
  rotation: Vec3
  forward: Vec3
  velocity: Vec3
  speed: number
  throttle: number
  brake: number
  steering: number
  grounded: boolean
  surfaceType: string
  collision: { active: boolean; objectId: string | null }
  chassis: { height: number; pitch: number; roll: number }
  wheels: WheelRuntime[]
  appliedStats: VehicleStats
}

export type CameraRuntime = {
  mode: 'third_person'
  position: Vec3
  target: Vec3
  forward: Vec3
  followedVehicleId: string | null
  vehicleVisible: boolean
}

export type SceneRuntime = {
  renderer: 'webgl' | 'webgl2'
  canvasVisible: boolean
  canvasWidth: number
  canvasHeight: number
  renderFrame: number
  visibleVehicleIds: string[]
  visibleWheelCount: number
  visibleTerrain: boolean
  visibleMapObjectCount: number
}

const zeroStats: VehicleStats = {
  mass: 0,
  power: 0,
  braking: 0,
  steering: 0,
  grip: 0,
  maxSpeed: 0,
  suspension: 0,
}

export const createRuntime = () => ({
  vehicle: {
    id: null,
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    forward: { x: 0, y: 0, z: 1 },
    velocity: { x: 0, y: 0, z: 0 },
    speed: 0,
    throttle: 0,
    brake: 0,
    steering: 0,
    grounded: false,
    surfaceType: 'none',
    collision: { active: false, objectId: null },
    chassis: { height: 0, pitch: 0, roll: 0 },
    wheels: [],
    appliedStats: { ...zeroStats },
  } as VehicleRuntime,
  camera: {
    mode: 'third_person',
    position: { x: 0, y: 0, z: 0 },
    target: { x: 0, y: 0, z: 0 },
    forward: { x: 0, y: 0, z: 1 },
    followedVehicleId: null,
    vehicleVisible: false,
  } as CameraRuntime,
  scene: {
    renderer: 'webgl2',
    canvasVisible: false,
    canvasWidth: 0,
    canvasHeight: 0,
    renderFrame: 0,
    visibleVehicleIds: [],
    visibleWheelCount: 0,
    visibleTerrain: false,
    visibleMapObjectCount: 0,
  } as SceneRuntime,
})

export type RuntimeStore = ReturnType<typeof createRuntime>
