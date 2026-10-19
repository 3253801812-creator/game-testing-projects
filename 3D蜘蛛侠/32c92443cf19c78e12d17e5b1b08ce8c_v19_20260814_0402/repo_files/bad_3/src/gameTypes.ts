export type Vec3State = { x: number; y: number; z: number }
export type MovementState = 'idle' | 'moving' | 'jumping' | 'falling' | 'swinging'

export interface GamePublicState {
  ready: boolean
  running: boolean
  elapsedTime: number
  renderer: 'webgl'
  viewport: { width: number; height: number }
}
export interface PlayerPublicState {
  position: Vec3State
  velocity: Vec3State
  grounded: boolean
  movementState: MovementState
  collider: { radius: number; height: number }
}
export interface CameraPublicState {
  mode: 'third-person'
  position: Vec3State
  target: Vec3State
  yaw: number
  pitch: number
}
export interface WebPublicState {
  attached: boolean
  targetValid: boolean
  anchor: Vec3State | null
  anchorObjectId: string | null
  ropeLength: number | null
  distanceToAnchor: number | null
  lineVisible: boolean
  playerEndpoint: Vec3State | null
  anchorEndpoint: Vec3State | null
}
export interface WorldBuildingState {
  id: string
  min: Vec3State
  max: Vec3State
}
export interface WorldPublicState {
  groundY: number
  buildings: WorldBuildingState[]
}

declare global {
  interface Window {
    __game: { getState: () => GamePublicState }
    __player: { getState: () => PlayerPublicState }
    __camera: { getState: () => CameraPublicState }
    __web: { getState: () => WebPublicState }
    __world: { getState: () => WorldPublicState }
  }
}
