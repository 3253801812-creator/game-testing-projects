import type { GameScreen, Vec3, VehicleStats } from './types'

export type WheelRuntime = {
  id: string
  position: Vec3
  contactPoint: Vec3 | null
  grounded: boolean
  suspensionCompression: number
  suspensionTravel: number
}

const zero = (): Vec3 => ({ x: 0, y: 0, z: 0 })

export const runtime = {
  ready: false,
  gameState: 'menu' as GameScreen,
  credits: 650,
  selectedVehicleId: 'trailhawk' as string | null,
  selectedMapId: null as string | null,
  currentRaceId: null as string | null,
  result: null as null | { raceId: string; vehicleId: string; mapId: string; finalTime: number; reward: number },
  owned: { trailhawk: true, 'baja-r': false } as Record<string, boolean>,
  upgrades: {} as Record<string, Record<string, number>>,
  race: {
    raceId: null as string | null,
    phase: 'idle' as 'idle' | 'loading' | 'running' | 'finished',
    vehicleId: null as string | null,
    mapId: null as string | null,
    elapsedTime: 0,
    finalTime: null as number | null,
    finished: false,
    currentCheckpointIndex: 0,
    passedCheckpointIds: [] as string[],
    finishEligible: false,
    reward: 0,
    rewardGranted: false,
  },
  vehicle: {
    id: null as string | null,
    position: zero(),
    rotation: zero(),
    forward: { x: 0, y: 0, z: -1 },
    velocity: zero(),
    speed: 0,
    throttle: 0,
    brake: 0,
    steering: 0,
    grounded: false,
    surfaceType: 'dirt',
    collision: { active: false, objectId: null as string | null },
    chassis: { height: 0, pitch: 0, roll: 0 },
    wheels: [] as WheelRuntime[],
    appliedStats: { mass: 0, power: 0, braking: 0, steering: 0, grip: 0, maxSpeed: 0, suspension: 0 } as VehicleStats,
  },
  camera: {
    position: zero(),
    target: zero(),
    forward: { x: 0, y: 0, z: -1 },
    followedVehicleId: null as string | null,
    vehicleVisible: false,
  },
  scene: {
    renderer: 'webgl' as 'webgl' | 'webgl2',
    canvasVisible: false,
    canvasWidth: 0,
    canvasHeight: 0,
    renderFrame: 0,
    visibleVehicleIds: [] as string[],
    visibleWheelCount: 0,
    visibleTerrain: false,
  },
  world: {
    currentMapId: null as string | null,
    visibleMapObjectCount: 0,
    renderFrame: 0,
  },
}

export const cloneVec = (v: Vec3): Vec3 => ({ x: Number(v.x), y: Number(v.y), z: Number(v.z) })
