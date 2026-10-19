import type { MapDefinition, VehicleRuntime, VehicleStats } from './types'

export const INITIAL_CREDITS = 2400

export const VEHICLE_CATALOG: VehicleRuntime[] = [
  {
    id: 'trailfox-xr',
    name: 'TRAILFOX XR',
    tagline: '轻量 · 灵活 · 高抓地',
    owned: true,
    price: 0,
    className: 'SCOUT 4×4',
    color: '#d9ff43',
    accent: '#7c9c15',
    baseStats: { mass: 1420, power: 248, braking: 7.4, steering: 1.85, grip: 1.08, maxSpeed: 32, suspension: 0.78 },
    upgrades: [
      { id: 'engine-tune', name: 'ECU 动力套件', level: 0, cost: 650, affectedStat: 'power' },
      { id: 'long-travel', name: '长行程悬挂', level: 0, cost: 520, affectedStat: 'suspension' },
    ],
  },
  {
    id: 'mudhorn-rs',
    name: 'MUDHORN RS',
    tagline: '重型 · 高扭矩 · 长行程',
    owned: false,
    price: 1800,
    className: 'HEAVY PICKUP',
    color: '#ff7b36',
    accent: '#a83b12',
    baseStats: { mass: 1960, power: 338, braking: 8.2, steering: 1.48, grip: 1.2, maxSpeed: 29, suspension: 1.02 },
    upgrades: [
      { id: 'torque-pack', name: '扭矩增压套件', level: 0, cost: 820, affectedStat: 'power' },
      { id: 'all-terrain', name: '竞技全地形胎', level: 0, cost: 700, affectedStat: 'grip' },
    ],
  },
]

export const MAPS: MapDefinition[] = [
  {
    id: 'red-ridge',
    name: 'RED RIDGE',
    subtitle: '赤脊峡谷',
    difficulty: 'MEDIUM',
    surfaceLabel: '砂砾 / 岩脊',
    accent: '#ff7a38',
    spawn: { position: { x: -58, y: 0, z: -54 }, forward: { x: 0.72, y: 0, z: 0.69 } },
    checkpoints: [
      { id: 'rr-cp-1', index: 0, position: { x: -28, y: 0, z: -31 }, radius: 16 },
      { id: 'rr-cp-2', index: 1, position: { x: 10, y: 0, z: -20 }, radius: 16 },
      { id: 'rr-cp-3', index: 2, position: { x: 43, y: 0, z: 9 }, radius: 16 },
      { id: 'rr-cp-4', index: 3, position: { x: 26, y: 0, z: 47 }, radius: 16 },
    ],
    finish: { position: { x: -21, y: 0, z: 55 }, radius: 16 },
    terrain: { minHeight: -4.5, maxHeight: 8.5, surfaceTypes: ['gravel', 'rock', 'sand'] },
    obstacles: [
      { id: 'rr-rock-1', position: { x: -10, y: 0, z: -14 }, radius: 2.2, kind: 'rock' },
      { id: 'rr-rock-2', position: { x: 17, y: 0, z: 2 }, radius: 2.8, kind: 'rock' },
      { id: 'rr-rock-3', position: { x: 44, y: 0, z: 29 }, radius: 2.4, kind: 'rock' },
      { id: 'rr-rock-4', position: { x: 3, y: 0, z: 40 }, radius: 3.1, kind: 'rock' },
      { id: 'rr-rock-5', position: { x: -43, y: 0, z: 20 }, radius: 3.4, kind: 'rock' },
    ],
  },
  {
    id: 'pine-run',
    name: 'PINE RUN',
    subtitle: '针叶林冲沟',
    difficulty: 'HARD',
    surfaceLabel: '泥地 / 林径',
    accent: '#6bd39b',
    spawn: { position: { x: 58, y: 0, z: -55 }, forward: { x: -0.74, y: 0, z: 0.67 } },
    checkpoints: [
      { id: 'pr-cp-1', index: 0, position: { x: 28, y: 0, z: -31 }, radius: 6.5 },
      { id: 'pr-cp-2', index: 1, position: { x: -12, y: 0, z: -21 }, radius: 6.5 },
      { id: 'pr-cp-3', index: 2, position: { x: -43, y: 0, z: 12 }, radius: 6.5 },
      { id: 'pr-cp-4', index: 3, position: { x: -18, y: 0, z: 48 }, radius: 6.5 },
    ],
    finish: { position: { x: 35, y: 0, z: 53 }, radius: 7.5 },
    terrain: { minHeight: -3.5, maxHeight: 7.5, surfaceTypes: ['dirt', 'mud', 'grass'] },
    obstacles: [
      { id: 'pr-stump-1', position: { x: 9, y: 0, z: -26 }, radius: 1.9, kind: 'stump' },
      { id: 'pr-rock-1', position: { x: -28, y: 0, z: -5 }, radius: 2.5, kind: 'rock' },
      { id: 'pr-stump-2', position: { x: -37, y: 0, z: 31 }, radius: 2.1, kind: 'stump' },
      { id: 'pr-rock-2', position: { x: 1, y: 0, z: 49 }, radius: 2.7, kind: 'rock' },
      { id: 'pr-stump-3', position: { x: 47, y: 0, z: 8 }, radius: 2.0, kind: 'stump' },
      { id: 'pr-rock-3', position: { x: 19, y: 0, z: 14 }, radius: 2.3, kind: 'rock' },
    ],
  },
]

export function cloneVehicles(): VehicleRuntime[] {
  return VEHICLE_CATALOG.map(v => ({
    ...v,
    baseStats: { ...v.baseStats },
    upgrades: v.upgrades.map(u => ({ ...u })),
  }))
}

export function appliedStats(vehicle: VehicleRuntime): VehicleStats {
  const stats = { ...vehicle.baseStats }
  for (const upgrade of vehicle.upgrades) {
    if (upgrade.level <= 0) continue
    const multiplier = 1 + upgrade.level * (upgrade.affectedStat === 'suspension' ? 0.18 : 0.12)
    stats[upgrade.affectedStat] = Number((stats[upgrade.affectedStat] * multiplier).toFixed(3))
  }
  return stats
}

export function nextUpgradeCost(base: number, level: number): number {
  return Math.round(base * (1 + level * 0.65))
}
