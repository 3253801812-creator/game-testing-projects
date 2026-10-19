export type Vec3 = { x: number; y: number; z: number }

export type VehicleStats = {
  mass: number
  power: number
  braking: number
  steering: number
  grip: number
  maxSpeed: number
  suspension: number
}

export type UpgradeDefinition = {
  id: string
  name: string
  affectedStat: 'power' | 'braking' | 'steering' | 'grip' | 'maxSpeed' | 'suspension'
  baseCost: number
  step: number
  maxLevel: number
  unit: string
}

export type VehicleDefinition = {
  id: string
  name: string
  subtitle: string
  price: number
  baseStats: VehicleStats
  upgrades: UpgradeDefinition[]
  bodyColor: number
  accentColor: number
  description: string
}

export type Checkpoint = {
  id: string
  index: number
  position: Vec3
  radius: number
}

export type Obstacle = {
  id: string
  position: Vec3
  radius: number
  type: 'rock' | 'log' | 'stump'
}

export type MapDefinition = {
  id: string
  name: string
  subtitle: string
  description: string
  spawn: { position: Vec3; forward: Vec3 }
  finish: { position: Vec3; radius: number }
  checkpoints: Checkpoint[]
  obstacles: Obstacle[]
  terrain: { minHeight: number; maxHeight: number; surfaceTypes: string[] }
  rewardBase: number
  theme: 'canyon' | 'forest'
  heightAt: (x: number, z: number) => number
  surfaceAt: (x: number, z: number) => string
}

export const VEHICLES: VehicleDefinition[] = [
  {
    id: 'trailhawk-x1',
    name: 'Trailhawk X1',
    subtitle: '轻量探索者',
    price: 0,
    bodyColor: 0xd8ff3e,
    accentColor: 0x20251f,
    description: '轻、灵活、悬挂行程长。适合第一次跑完整条越野路线。',
    baseStats: {
      mass: 1520,
      power: 11800,
      braking: 9.2,
      steering: 1.65,
      grip: 7.4,
      maxSpeed: 25.5,
      suspension: 0.56,
    },
    upgrades: [
      { id: 'ecu', name: 'ECU 动力标定', affectedStat: 'power', baseCost: 260, step: 1250, maxLevel: 3, unit: 'N' },
      { id: 'coilovers', name: '长行程避震', affectedStat: 'suspension', baseCost: 320, step: 0.08, maxLevel: 3, unit: 'm' },
    ],
  },
  {
    id: 'ironclad-v8',
    name: 'Ironclad V8',
    subtitle: '重型攀爬者',
    price: 900,
    bodyColor: 0xff7a32,
    accentColor: 0x171919,
    description: '更重、更快、抓地更强，但转向惯性明显。适合岩石和长直路。',
    baseStats: {
      mass: 1980,
      power: 16500,
      braking: 10.5,
      steering: 1.34,
      grip: 8.8,
      maxSpeed: 29.5,
      suspension: 0.47,
    },
    upgrades: [
      { id: 'diff-lock', name: '差速锁套件', affectedStat: 'grip', baseCost: 420, step: 1.1, maxLevel: 3, unit: '' },
      { id: 'turbo', name: '涡轮增压', affectedStat: 'power', baseCost: 520, step: 1550, maxLevel: 3, unit: 'N' },
    ],
  },
]

const canyonHeight = (x: number, z: number) => {
  const rolling = Math.sin(z * 0.095) * 1.0 + Math.sin(x * 0.075) * 0.7
  const corrugation = Math.sin((x + z) * 0.24) * 0.28
  const ridge = Math.exp(-((x - 16) ** 2 + (z - 82) ** 2) / 420) * 4.2
  const basin = Math.exp(-((x + 18) ** 2 + (z - 118) ** 2) / 520) * -1.6
  return rolling + corrugation + ridge + basin
}

const forestHeight = (x: number, z: number) => {
  const rolling = Math.sin(x * 0.08) * 0.85 + Math.cos(z * 0.075) * 0.75
  const washboard = Math.sin((x - z) * 0.19) * 0.36
  const moundA = Math.exp(-((x - 12) ** 2 + (z + 18) ** 2) / 300) * 3.3
  const moundB = Math.exp(-((x - 42) ** 2 + (z - 12) ** 2) / 290) * 2.6
  return rolling + washboard + moundA + moundB
}

export const MAPS: MapDefinition[] = [
  {
    id: 'red-rock-run',
    name: 'Red Rock Run',
    subtitle: '红岩峡谷 · 高速起伏',
    description: '路线先直上峡谷，再横切岩脊，最后穿过冲沟。留意中段的大岩石。',
    theme: 'canyon',
    spawn: { position: { x: 0, y: 0, z: -8 }, forward: { x: 0, y: 0, z: 1 } },
    finish: { position: { x: 7, y: 0, z: 145 }, radius: 8 },
    checkpoints: [
      { id: 'rr-cp-1', index: 0, position: { x: 0, y: 0, z: 34 }, radius: 8 },
      { id: 'rr-cp-2', index: 1, position: { x: 18, y: 0, z: 73 }, radius: 8 },
      { id: 'rr-cp-3', index: 2, position: { x: -12, y: 0, z: 111 }, radius: 8 },
    ],
    obstacles: [
      { id: 'rr-rock-a', position: { x: -7, y: 0, z: 49 }, radius: 2.2, type: 'rock' },
      { id: 'rr-rock-b', position: { x: 9, y: 0, z: 89 }, radius: 2.8, type: 'rock' },
      { id: 'rr-rock-c', position: { x: -4, y: 0, z: 126 }, radius: 2.4, type: 'rock' },
      { id: 'rr-log-a', position: { x: 19, y: 0, z: 60 }, radius: 1.8, type: 'log' },
    ],
    terrain: { minHeight: -3.55, maxHeight: 5.65, surfaceTypes: ['hardpack', 'rock', 'sand'] },
    rewardBase: 420,
    heightAt: canyonHeight,
    surfaceAt: (x, z) => {
      if (Math.abs(x) > 38) return 'sand'
      if (z > 66 && z < 98 && x > 5) return 'rock'
      return 'hardpack'
    },
  },
  {
    id: 'pine-mire-loop',
    name: 'Pine Mire Loop',
    subtitle: '松林泥沼 · 抓地挑战',
    description: '湿滑林道呈折线回环，泥地会明显削弱加速与转向，树桩与横木迫使你择线。',
    theme: 'forest',
    spawn: { position: { x: 0, y: 0, z: -8 }, forward: { x: 0, y: 0, z: 1 } },
    finish: { position: { x: 7, y: 0, z: 145 }, radius: 8 },
    checkpoints: [
      { id: 'rr-cp-1', index: 0, position: { x: 0, y: 0, z: 34 }, radius: 8 },
      { id: 'rr-cp-2', index: 1, position: { x: 18, y: 0, z: 73 }, radius: 8 },
      { id: 'rr-cp-3', index: 2, position: { x: -12, y: 0, z: 111 }, radius: 8 },
    ],
    obstacles: [
      { id: 'rr-rock-a', position: { x: -7, y: 0, z: 49 }, radius: 2.2, type: 'rock' },
      { id: 'rr-rock-b', position: { x: 9, y: 0, z: 89 }, radius: 2.8, type: 'rock' },
      { id: 'rr-rock-c', position: { x: -4, y: 0, z: 126 }, radius: 2.4, type: 'rock' },
      { id: 'rr-log-a', position: { x: 19, y: 0, z: 60 }, radius: 1.8, type: 'log' },
    ],
    terrain: { minHeight: -3.55, maxHeight: 5.65, surfaceTypes: ['hardpack', 'rock', 'sand'] },
    rewardBase: 520,
    heightAt: canyonHeight,
    surfaceAt: (x, z) => {
      if (Math.abs(x) > 38) return 'sand'
      if (z > 66 && z < 98 && x > 5) return 'rock'
      return 'hardpack'
    },
  },
]

export const getMap = (id: string | null) => MAPS.find((map) => map.id === id) ?? null
export const getVehicle = (id: string | null) => VEHICLES.find((vehicle) => vehicle.id === id) ?? null

export const statLabel: Record<keyof VehicleStats, string> = {
  mass: '质量',
  power: '动力',
  braking: '制动',
  steering: '转向',
  grip: '抓地',
  maxSpeed: '极速',
  suspension: '悬挂',
}
