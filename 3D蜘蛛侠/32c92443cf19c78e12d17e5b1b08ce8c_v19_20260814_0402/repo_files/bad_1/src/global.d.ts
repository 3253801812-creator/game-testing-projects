export {}

type VecState = { x: number; y: number; z: number }
type MovementState = 'idle' | 'moving' | 'jumping' | 'falling' | 'swinging'

declare global {
  interface Window {
    readonly __game: { getState: () => { ready: boolean; running: boolean; elapsedTime: number; renderer: 'webgl'; viewport: { width: number; height: number } } }
    readonly __player: { getState: () => { position: VecState; velocity: VecState; grounded: boolean; movementState: MovementState; collider: { radius: number; height: number } } }
    readonly __camera: { getState: () => { mode: 'third-person'; position: VecState; target: VecState; yaw: number; pitch: number } }
    readonly __web: { getState: () => { attached: boolean; targetValid: boolean; anchor: VecState | null; anchorObjectId: string | null; ropeLength: number | null; distanceToAnchor: number | null; lineVisible: boolean; playerEndpoint: VecState | null; anchorEndpoint: VecState | null } }
    readonly __world: { getState: () => { groundY: number; buildings: Array<{ id: string; min: VecState; max: VecState }> } }
  }
}
