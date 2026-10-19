import type { MapDef, VehicleDef } from './types'

export const VEHICLES: VehicleDef[] = [
  {
    id: 'trailhawk',
    name: 'Trailhawk XR',
    className: 'Balanced 4×4',
    description: 'A forgiving short-wheelbase crawler with predictable steering and long suspension travel.',
    price: 0,
    bodyColor: 0xd9a43a,
    accentColor: 0x20241f,
    baseStats: { mass: 1650, power: 18, braking: 13, steering: 1.8, grip: 1.0, maxSpeed: 31, suspension: 1.05 },
    upgrades: [
      { id: 'engine', name: 'Torque Tune', description: 'More low-end drive on climbs.', affectedStat: 'power', baseCost: 120, maxLevel: 3, amountPerLevel: 2.5 },
      { id: 'suspension', name: 'Long Travel Kit', description: 'Adds usable wheel travel over rough terrain.', affectedStat: 'suspension', baseCost: 140, maxLevel: 3, amountPerLevel: 0.12 },
    ],
  },
  {
    id: 'baja-r',
    name: 'Baja R',
    className: 'Desert Runner',
    description: 'Faster and heavier, with stronger brakes and less forgiving steering at low speed.',
    price: 420,
    bodyColor: 0xc84d3d,
    accentColor: 0x16191c,
    baseStats: { mass: 1920, power: 25, braking: 15, steering: 1.55, grip: 0.92, maxSpeed: 40, suspension: 1.22 },
    upgrades: [
      { id: 'engine', name: 'Stage II ECU', description: 'Raises power delivery and acceleration.', affectedStat: 'power', baseCost: 180, maxLevel: 3, amountPerLevel: 3.2 },
      { id: 'grip', name: 'All-Terrain Compound', description: 'Improves traction on mud and rock.', affectedStat: 'grip', baseCost: 165, maxLevel: 3, amountPerLevel: 0.08 },
    ],
  },
]

const canyonHeight = (x: number, z: number) => {
  const ridge = Math.sin(x * 0.055) * 1.25 + Math.cos(z * 0.045) * 0.85
  const wash = Math.sin((x + z) * 0.035) * 0.55
  const basin = -Math.exp(-((x - 10) ** 2 + (z + 10) ** 2) / 650) * 1.6
  return ridge + wash + basin
}

const forestHeight = (x: number, z: number) => {
  const rolling = Math.sin(x * 0.04) * 1.45 + Math.sin(z * 0.06) * 1.1
  const cross = Math.cos((x - z) * 0.033) * 0.8
  const hill = Math.exp(-((x + 20) ** 2 + (z - 12) ** 2) / 520) * 3.2
  return rolling + cross + hill
}

export const MAPS: MapDef[] = [
  {
    id: 'red-canyon',
    name: 'Red Canyon Run',
    subtitle: 'Dust, rock shelves and a fast dry wash',
    difficulty: 'MEDIUM',
    skyColor: 0x8695a3,
    fogColor: 0xb98966,
    bounds: 82,
    rewardBase: 145,
    spawn: { position: { x: -58, y: 0, z: 47 }, forward: { x: 0.73, y: 0, z: -0.68 } },
    checkpoints: [
      { id: 'rc-cp-1', index: 0, position: { x: -28, y: 0, z: 18 }, radius: 7 },
      { id: 'rc-cp-2', index: 1, position: { x: 1, y: 0, z: -11 }, radius: 7 },
      { id: 'rc-cp-3', index: 2, position: { x: 34, y: 0, z: -28 }, radius: 7 },
      { id: 'rc-cp-4', index: 3, position: { x: 55, y: 0, z: 1 }, radius: 7 },
    ],
    finish: { position: { x: 49, y: 0, z: 38 }, radius: 7.5 },
    obstacles: [
      { id: 'rc-rock-1', kind: 'rock', position: { x: -15, y: 0, z: 7 }, radius: 2.2 },
      { id: 'rc-rock-2', kind: 'rock', position: { x: 17, y: 0, z: -18 }, radius: 2.6 },
      { id: 'rc-log-1', kind: 'log', position: { x: 41, y: 0, z: -18 }, radius: 2.4 },
      { id: 'rc-rock-3', kind: 'rock', position: { x: 57, y: 0, z: 17 }, radius: 2.4 },
      { id: 'rc-barrel-1', kind: 'barrel', position: { x: -39, y: 0, z: 34 }, radius: 1.2 },
    ],
    terrain: { minHeight: -3.5, maxHeight: 3.3, surfaceTypes: ['dirt', 'rock', 'sand'] },
    heightAt: canyonHeight,
    surfaceAt: (x, z) => {
      if (Math.abs(Math.sin(x * 0.07) + Math.cos(z * 0.05)) > 1.25) return 'rock'
      if (x > 7 && z > 7) return 'sand'
      return 'dirt'
    },
  },
  {
    id: 'pine-ridge',
    name: 'Pine Ridge',
    subtitle: 'Wet switchbacks, roots and a steep summit',
    difficulty: 'HARD',
    skyColor: 0x738487,
    fogColor: 0x617162,
    bounds: 78,
    rewardBase: 185,
    spawn: { position: { x: -50, y: 0, z: -46 }, forward: { x: 0.84, y: 0, z: 0.54 } },
    checkpoints: [
      { id: 'pr-cp-1', index: 0, position: { x: -18, y: 0, z: -28 }, radius: 6.8 },
      { id: 'pr-cp-2', index: 1, position: { x: 18, y: 0, z: -8 }, radius: 6.8 },
      { id: 'pr-cp-3', index: 2, position: { x: -5, y: 0, z: 24 }, radius: 6.8 },
      { id: 'pr-cp-4', index: 3, position: { x: 28, y: 0, z: 45 }, radius: 6.8 },
    ],
    finish: { position: { x: 57, y: 0, z: 23 }, radius: 7.3 },
    obstacles: [
      { id: 'pr-log-1', kind: 'log', position: { x: -29, y: 0, z: -33 }, radius: 2.2 },
      { id: 'pr-rock-1', kind: 'rock', position: { x: 3, y: 0, z: -18 }, radius: 2.0 },
      { id: 'pr-rock-2', kind: 'rock', position: { x: 10, y: 0, z: 12 }, radius: 2.7 },
      { id: 'pr-log-2', kind: 'log', position: { x: 8, y: 0, z: 35 }, radius: 2.5 },
      { id: 'pr-rock-3', kind: 'rock', position: { x: 42, y: 0, z: 36 }, radius: 2.3 },
      { id: 'pr-barrel-1', kind: 'barrel', position: { x: 48, y: 0, z: 19 }, radius: 1.0 },
    ],
    terrain: { minHeight: -3.7, maxHeight: 6.2, surfaceTypes: ['dirt', 'mud', 'rock'] },
    heightAt: forestHeight,
    surfaceAt: (x, z) => {
      if (Math.sin(x * 0.06) * Math.cos(z * 0.08) > 0.45) return 'mud'
      if (z > 20 && x < 18) return 'rock'
      return 'dirt'
    },
  },
]
