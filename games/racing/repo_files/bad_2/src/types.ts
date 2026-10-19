export type Vec3 = { x: number; y: number; z: number }
export type GameScreen = 'menu' | 'vehicle_select' | 'map_select' | 'garage' | 'loading' | 'racing' | 'result'
export type StatKey = 'power' | 'braking' | 'steering' | 'grip' | 'maxSpeed' | 'suspension'

export type VehicleStats = {
  mass: number
  power: number
  braking: number
  steering: number
  grip: number
  maxSpeed: number
  suspension: number
}

export type UpgradeDef = {
  id: string
  name: string
  description: string
  affectedStat: StatKey
  baseCost: number
  maxLevel: number
  amountPerLevel: number
}

export type VehicleDef = {
  id: string
  name: string
  className: string
  description: string
  price: number
  bodyColor: number
  accentColor: number
  baseStats: VehicleStats
  upgrades: UpgradeDef[]
}

export type CheckpointDef = { id: string; index: number; position: Vec3; radius: number }
export type ObstacleDef = { id: string; position: Vec3; radius: number; kind: 'rock' | 'log' | 'barrel' }

export type MapDef = {
  id: string
  name: string
  subtitle: string
  difficulty: string
  skyColor: number
  fogColor: number
  spawn: { position: Vec3; forward: Vec3 }
  finish: { position: Vec3; radius: number }
  checkpoints: CheckpointDef[]
  obstacles: ObstacleDef[]
  terrain: { minHeight: number; maxHeight: number; surfaceTypes: string[] }
  rewardBase: number
  bounds: number
  heightAt: (x: number, z: number) => number
  surfaceAt: (x: number, z: number) => 'dirt' | 'mud' | 'rock' | 'sand'
}
