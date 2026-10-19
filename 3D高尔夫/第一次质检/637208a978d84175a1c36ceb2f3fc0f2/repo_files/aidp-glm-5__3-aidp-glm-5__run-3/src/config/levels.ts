import { LevelConfig } from '../types';

// Friction constants
// Sand: 3.5x grass friction (more frictionion)
// Ice: 1/8 grass friction (less frictionion)
// These ratios ensure clear differences in ball behavior

export const FRICTION = {
  GRASS: 0.015,
  SAND: 0.0525, // 3.5x grass
  ICE: 0.001875, // 1/8 grass
};

export const LEVELS: Record<string, LevelConfig> = {
  forest: {
    id: 'forest',
    name: '森林球场',
    theme: 'forest',
    par: 3,
    bounds: {
      minX: -15,
      maxX: 15,
      minZ: -20,
      maxZ: 20,
    },
    spawn: { x: 0, y: 0.15, z: 15 },
    hole: { x: 0, y: 0.1, z: -12, radius: 0.5 },
    surfaces: [
      // Main grass area
      {
        id: 'main_grass',
        type: 'grass',
        friction: FRICTION.GRASS,
      },
      // Sand traps
      {
        id: 'sand1',
        type: 'sand',
        friction: FRICTION.SAND,
        center: { x: -5, y: 0.02, z: 5 },
        bounds: { minX: -7, maxX: -3, minZ: 3, maxZ: 7 },
      },
      {
        id: 'sand2',
        type: 'sand',
        friction: FRICTION.SAND,
        center: { x: 5, y: 0.02, z: 5 },
        bounds: { minX: 3, maxX: 7, minZ: 3, maxZ: 7 },
      },
      {
        id: 'sand3',
        type: 'sand',
        friction: FRICTION.SAND,
        center: { x: 0, y: 0.02, z: -5 },
        bounds: { minX: -3, maxX: 3, minZ: -7, maxZ: -3 },
      },
    ],
    obstacles: [
      // Trees as solid obstacles
      {
        id: 'tree1',
        type: 'tree',
        position: { x: -8, y: 0, z: 0 },
        solid: true,
        radius: 0.8,
      },
      {
        id: 'tree2',
        type: 'tree',
        position: { x: 8, y: 0, z: 0 },
        solid: true,
        radius: 0.8,
      },
      {
        id: 'tree3',
        type: 'tree',
        position: { x: -10, y: 0, z: -8 },
        solid: true,
        radius: 0.8,
      },
      {
        id: 'tree4',
        type: 'tree',
        position: { x: 10, y: 0, z: -8 },
        solid: true,
        radius: 0.8,
      },
      // Rock obstacles
      {
        id: 'rock1',
        type: 'rock',
        position: { x: -3, y: 0, z: 10 },
        solid: true,
        radius: 0.6,
      },
      {
        id: 'rock2',
        type: 'rock',
        position: { x: 3, y: 0, z: 10 },
        solid: true,
        radius: 0.6,
      },
    ],
    terrainFeatures: [],
  },

  desert: {
    id: 'desert',
    name: '沙漠球场',
    theme: 'desert',
    par: 4,
    bounds: {
      minX: -18,
      maxX: 18,
      minZ: -25,
      maxZ: 25,
    },
    spawn: { x: 0, y: 0.15, z: 20 },
    hole: { x: 0, y: 0.1, z: -18, radius: 0.5 },
    surfaces: [
      // Main sandy grass (slightly more friction than normal grass due to sand)
      {
        id: 'main_ground',
        type: 'grass',
        friction: FRICTION.GRASS * 1.2,
      },
      // Deep sand areas (very high friction)
      {
        id: 'deep_sand1',
        type: 'sand',
        friction: FRICTION.SAND * 1.5,
        center: { x: -6, y: 0.02, z: 8 },
        bounds: { minX: -10, maxX: -2, minZ: 4, maxZ: 12 },
      },
      {
        id: 'deep_sand2',
        type: 'sand',
        friction: FRICTION.SAND * 1.5,
        center: { x: 6, y: 0.02, z: 8 },
        bounds: { minX: 2, maxX: 10, minZ: 4, maxZ: 12 },
      },
      {
        id: 'deep_sand3',
        type: 'sand',
        friction: FRICTION.SAND * 1.5,
        center: { x: 0, y: 0.02, z: -5 },
        bounds: { minX: -5, maxX: 5, minZ: -8, maxZ: -2 },
      },
    ],
    obstacles: [
      // Sand dunes as solid obstacles
      {
        id: 'dune1',
        type: 'dune',
        position: { x: -8, y: 0, z: 0 },
        solid: true,
        radius: 2.5,
      },
      {
        id: 'dune2',
        type: 'dune',
        position: { x: 8, y: 0, z: 0 },
        solid: true,
        radius: 2.5,
      },
      // Rock formations
      {
        id: 'rock1',
        type: 'rock',
        position: { x: -5, y: 0, z: -10 },
        solid: true,
        radius: 1.2,
      },
      {
        id: 'rock2',
        type: 'rock',
        position: { x: 5, y: 0, z: -10 },
        solid: true,
        radius: 1.2,
      },
      {
        id: 'rock3',
        type: 'rock',
        position: { x: 0, y: 0, z: 15 },
        solid: true,
        radius: 0.8,
      },
    ],
    terrainFeatures: [
      {
        id: 'dune_terrain1',
        type: 'dune',
        position: { x: -12, y: 0, z: -15 },
        height: 1.5,
        radius: 3,
      },
      {
        id: 'dune_terrain2',
        type: 'dune',
        position: { x: 12, y: 0, z: -15 },
        height: 1.5,
        radius: 3,
      },
    ],
  },

  snow: {
    id: 'snow',
    name: '冰雪球场',
    theme: 'snow',
    par: 3,
    bounds: {
      minX: -15,
      maxX: 15,
      minZ: -20,
      maxZ: 20,
    },
    spawn: { x: 0, y: 0.15, z: 15 },
    hole: { x: 0, y: 0.1, z: -12, radius: 0.5 },
    surfaces: [
      // Main snow grass
      {
        id: 'main_snow',
        type: 'grass',
        friction: FRICTION.GRASS,
      },
      // Ice patches (very low friction)
      {
        id: 'ice1',
        type: 'ice',
        friction: FRICTION.ICE,
        center: { x: -4, y: 0.01, z: 5 },
        bounds: { minX: -7, maxX: -1, minZ: 2, maxZ: 8 },
      },
      {
        id: 'ice2',
        type: 'ice',
        friction: FRICTION.ICE,
        center: { x: 4, y: 0.01, z: 5 },
        bounds: { minX: 1, maxX: 7, minZ: 2, maxZ: 8 },
      },
      {
        id: 'ice3',
        type: 'ice',
        friction: FRICTION.ICE,
        center: { x: 0, y: 0.01, z: -5 },
        bounds: { minX: -4, maxX: 4, minZ: -8, maxZ: -2 },
      },
      // Snow banks (higher friction like sand)
      {
        id: 'snow_bank1',
        type: 'sand',
        friction: FRICTION.SAND,
        center: { x: -10, y: 0.05, z: 0 },
        bounds: { minX: -12, maxX: -8, minZ: -3, maxZ: 3 },
      },
      {
        id: 'snow_bank2',
        type: 'sand',
        friction: FRICTION.SAND,
        center: { x: 10, y: 0.05, z: 0 },
        bounds: { minX: 8, maxX: 12, minZ: -3, maxZ: 3 },
      },
    ],
    obstacles: [
      // Snow piles as solid obstacles
      {
        id: 'snow_pile1',
        type: 'snow_pile',
        position: { x: -6, y: 0, z: 10 },
        solid: true,
        radius: 1.5,
      },
      {
        id: 'snow_pile2',
        type: 'snow_pile',
        position: { x: 6, y: 0, z: 10 },
        solid: true,
        radius: 1.5,
      },
      // Ice crystals
      {
        id: 'ice_crystal1',
        type: 'ice_crystal',
        position: { x: -8, y: 0, z: -5 },
        solid: true,
        radius: 0.8,
      },
      {
        id: 'ice_crystal2',
        type: 'ice_crystal',
        position: { x: 8, y: 0, z: -5 },
        solid: true,
        radius: 0.8,
      },
      // Rocks
      {
        id: 'rock1',
        type: 'rock',
        position: { x: 0, y: 0, z: 0 },
        solid: true,
        radius: 1.0,
      },
    ],
    terrainFeatures: [
      {
        id: 'snow_mound1',
        type: 'snow_mound',
        position: { x: -10, y: 0, z: -10 },
        height: 1.2,
        radius: 2,
      },
      {
        id: 'snow_mound2',
        type: 'snow_mound',
        position: { x: 10, y: 0, z: -10 },
        height: 1.2,
        radius: 2,
      },
    ],
  },
};

export function getLevel(levelId: string): LevelConfig | undefined {
  return LEVELS[levelId];
}

export function getLevelList(): LevelConfig[] {
  return Object.values(LEVELS);
}