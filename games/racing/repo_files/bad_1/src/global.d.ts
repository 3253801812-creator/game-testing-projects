export {}

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
