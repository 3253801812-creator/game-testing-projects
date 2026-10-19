import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import * as THREE from 'three'
import type {
  CameraPublicState,
  GamePublicState,
  MovementState,
  PlayerPublicState,
  WebPublicState,
  WorldBuildingState,
  WorldPublicState,
} from '../gameTypes'

export type HudSnapshot = {
  speed: number
  altitude: number
  verticalSpeed: number
  compass: string
  heading: number
  attached: boolean
  targetValid: boolean
  movementState: MovementState
  ropeLength: number | null
  ropeDistance: number | null
  webTension: number
  running: boolean
  playerX: number
  playerZ: number
  anchorX: number | null
  anchorZ: number | null
}

type Props = {
  onHud: (snapshot: HudSnapshot) => void
  onPointerLock: (locked: boolean) => void
}

type Handle = {
  lock: () => void
  toggleNight: (value: boolean) => void
  reset: () => void
}

type BuildingRuntime = WorldBuildingState & {
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>
}

type WebRuntime = {
  attached: boolean
  targetValid: boolean
  anchor: THREE.Vector3 | null
  anchorObjectId: string | null
  ropeLength: number | null
  targetPoint: THREE.Vector3 | null
  targetObjectId: string | null
  targetNormal: THREE.Vector3 | null
  tension: number
}

type PlayerRig = {
  root: THREE.Group
  visual: THREE.Group
  torso: THREE.Mesh
  head: THREE.Mesh
  arms: [THREE.Group, THREE.Group]
  legs: [THREE.Group, THREE.Group]
  scarf: THREE.Mesh
}

const GROUND_Y = 0
const PLAYER_RADIUS = 0.54
const PLAYER_HEIGHT = 1.86
const PLAYER_HALF = PLAYER_HEIGHT / 2
const GRAVITY = 30
const MAX_WEB_DISTANCE = 118
const MIN_WEB_DISTANCE = 1.2
const FIXED_DT = 1 / 120

// V9 complete tune: contract-safe momentum, readable web load, free vertical framing, and responsive traversal.
const WALK_SPEED = 16.4
const SPRINT_SPEED = 24.2
const GROUND_ACCEL = 112
const GROUND_TURN_ACCEL = 148
const GROUND_REVERSE_ACCEL = 176
const GROUND_BRAKE = 86
const GROUND_OVERSPEED_DRAG = 0.4
const GROUND_OVERSPEED_TURN_RATE = 3.9
const AIR_ACCEL = 19.4
const SWING_STEER_ACCEL = 31.2
const AIR_SOFT_SPEED = 27
const SWING_SOFT_SPEED = 39
const AIRBORNE_DRAG = 0.014
const WEB_CATCH_DECAY = 3.05
const RELEASE_MOMENTUM_DECAY = 1.9
const JUMP_SPEED = 13.45
const JUMP_BUFFER_TIME = 0.2
const COYOTE_TIME = 0.16
const JUMP_HOLD_TIME = 0.185
const JUMP_HOLD_GRAVITY_SCALE = 0.68
const FALL_GRAVITY_SCALE = 1.11
const JUMP_CUT_MULTIPLIER = 0.52
const START_POSITION = new THREE.Vector3(14, PLAYER_HALF + 0.03, 5)
const WORLD_LIMIT = 126
const WEB_VISUAL_SEGMENTS = 20
const UP = new THREE.Vector3(0, 1, 0)

const copyVec = (v: THREE.Vector3) => ({ x: v.x, y: v.y, z: v.z })
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))
const damp = (current: number, target: number, lambda: number, dt: number) =>
  THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt))

function seededNoise(x: number, z: number) {
  const n = Math.sin(x * 127.1 + z * 311.7) * 43758.5453123
  return n - Math.floor(n)
}

function makeFacadeTexture(seed: number) {
  const canvas = document.createElement('canvas')
  canvas.width = 160
  canvas.height = 320
  const ctx = canvas.getContext('2d')!

  const warm = seed % 4 === 0 || seed % 7 === 0
  const base = ctx.createLinearGradient(0, 0, 160, 320)
  base.addColorStop(0, seed % 3 === 0 ? '#1a2b3e' : '#14263a')
  base.addColorStop(0.52, '#0d1725')
  base.addColorStop(1, '#070d16')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, 160, 320)

  // Broad structural bands make every tower readable at swing speed.
  ctx.fillStyle = 'rgba(122,170,205,.055)'
  for (let x = 0; x < 160; x += 20) ctx.fillRect(x, 0, 1, 320)
  for (let y = 0; y < 320; y += 20) ctx.fillRect(0, y, 160, 1)
  ctx.fillStyle = 'rgba(205,236,255,.035)'
  for (let y = 40; y < 320; y += 80) ctx.fillRect(0, y, 160, 2)

  for (let y = 7; y < 312; y += 16) {
    for (let x = 7; x < 152; x += 16) {
      const n = seededNoise(x + seed * 17, y + seed * 11)
      const lit = n > 0.51
      const alpha = 0.38 + n * 0.42
      ctx.fillStyle = lit
        ? warm
          ? `rgba(255,197,118,${alpha})`
          : `rgba(100,220,255,${alpha})`
        : `rgba(45,73,98,${0.19 + n * 0.17})`
      const inset = n > 0.83 ? 1 : 0
      ctx.fillRect(x + inset, y + inset, 8 - inset, 10 - inset)
      if (lit && n > 0.79) {
        ctx.fillStyle = warm ? 'rgba(255,228,181,.24)' : 'rgba(196,248,255,.22)'
        ctx.fillRect(x + 1, y + 1, 6, 1)
      }
    }
  }

  // A few full-width emissive floors break repetition without external textures.
  for (let band = 0; band < 3; band++) {
    const n = seededNoise(seed * 13 + band, seed * 7)
    if (n > 0.42) {
      const y = 34 + Math.floor(n * 14) * 16
      ctx.fillStyle = warm ? 'rgba(255,143,91,.14)' : 'rgba(73,222,255,.13)'
      ctx.fillRect(0, y, 160, 2)
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.anisotropy = 8
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function addGroundAndRoads(scene: THREE.Scene) {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(286, 286),
    new THREE.MeshStandardMaterial({ color: 0x091018, roughness: 0.82, metalness: 0.12 }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = GROUND_Y
  ground.receiveShadow = true
  scene.add(ground)

  const roadMat = new THREE.MeshStandardMaterial({ color: 0x09131d, roughness: 0.5, metalness: 0.34 })
  const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x1b2832, roughness: 0.76, metalness: 0.14 })
  const laneMat = new THREE.MeshBasicMaterial({ color: 0xd2e8ef, transparent: true, opacity: 0.28 })
  const curbGlow = new THREE.MeshBasicMaterial({ color: 0x58dcf5, transparent: true, opacity: 0.18 })
  const warmGlow = new THREE.MeshBasicMaterial({ color: 0xffa067, transparent: true, opacity: 0.14 })
  const roads = [-98, -84, -56, -28, 0, 28, 56, 84, 98]

  for (const pos of roads) {
    const vertical = new THREE.Mesh(new THREE.PlaneGeometry(8.2, 274), roadMat)
    vertical.rotation.x = -Math.PI / 2
    vertical.position.set(pos, 0.012, 0)
    scene.add(vertical)

    const horizontal = new THREE.Mesh(new THREE.PlaneGeometry(274, 8.2), roadMat)
    horizontal.rotation.x = -Math.PI / 2
    horizontal.position.set(0, 0.014, pos)
    scene.add(horizontal)
  }

  for (let p = -116; p <= 116; p += 8) {
    for (const road of [-84, -56, -28, 0, 28, 56, 84]) {
      const dashZ = new THREE.Mesh(new THREE.PlaneGeometry(0.11, 3.35), laneMat)
      dashZ.rotation.x = -Math.PI / 2
      dashZ.position.set(road, 0.026, p)
      scene.add(dashZ)

      const dashX = new THREE.Mesh(new THREE.PlaneGeometry(3.35, 0.11), laneMat)
      dashX.rotation.x = -Math.PI / 2
      dashX.position.set(p, 0.028, road)
      scene.add(dashX)
    }
  }

  // Crosswalks and curb light rails give the ground a strong sense of scale while moving fast.
  for (const ix of [-56, 0, 56]) {
    for (const iz of [-56, 0, 56]) {
      for (let stripe = -3; stripe <= 3; stripe++) {
        const cross = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 3.2), laneMat)
        cross.rotation.x = -Math.PI / 2
        cross.position.set(ix + stripe * 0.72, 0.031, iz + 5.2)
        scene.add(cross)
      }
    }
  }

  for (const side of [-1, 1]) {
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 258), curbGlow)
    strip.rotation.x = -Math.PI / 2
    strip.position.set(side * 4.15, 0.034, 0)
    scene.add(strip)
  }
  for (const side of [-1, 1]) {
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(258, 0.06), warmGlow)
    strip.rotation.x = -Math.PI / 2
    strip.position.set(0, 0.035, side * 28 + 4.14)
    scene.add(strip)
  }

  return { sidewalkMat }
}

function makeSignTexture(label: string, hue: 'cyan' | 'pink' | 'amber') {
  const canvas = document.createElement('canvas')
  canvas.width = 384
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  const palette = hue === 'cyan'
    ? { main: '#8ff5ff', soft: '#1dd7f1' }
    : hue === 'pink'
      ? { main: '#ff91b8', soft: '#f13478' }
      : { main: '#ffd091', soft: '#ff914d' }

  ctx.fillStyle = 'rgba(3,8,16,.88)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  const glow = ctx.createLinearGradient(0, 0, canvas.width, 0)
  glow.addColorStop(0, 'rgba(255,255,255,.02)')
  glow.addColorStop(.5, `${palette.soft}33`)
  glow.addColorStop(1, 'rgba(255,255,255,.015)')
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = `${palette.soft}66`
  ctx.lineWidth = 3
  ctx.strokeRect(7, 7, canvas.width - 14, canvas.height - 14)
  ctx.fillStyle = palette.main
  ctx.shadowColor = palette.soft
  ctx.shadowBlur = 20
  ctx.font = '900 49px Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(label, canvas.width / 2, canvas.height / 2 + 2)
  ctx.shadowBlur = 0
  ctx.fillStyle = 'rgba(255,255,255,.5)'
  ctx.fillRect(22, 22, 44, 3)
  ctx.fillRect(canvas.width - 66, canvas.height - 25, 44, 3)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 8
  return texture
}

function addCity(scene: THREE.Scene, sidewalkMat: THREE.MeshStandardMaterial) {
  const buildings: BuildingRuntime[] = []
  const raycastMeshes: THREE.Object3D[] = []
  const facadeMaterials: THREE.MeshStandardMaterial[] = []
  const centers = [-70, -42, -14, 14, 42, 70]
  const trimMaterials = [0x5ee8ff, 0xff5fa7, 0xffbd67].map((color) =>
    new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.55, roughness: 0.24, metalness: 0.3 }),
  )
  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x111d2a, roughness: 0.34, metalness: 0.7 })
  const roofMetal = new THREE.MeshStandardMaterial({ color: 0x253746, roughness: 0.48, metalness: 0.54 })
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x71bad2,
    roughness: 0.16,
    metalness: 0.08,
    transmission: 0.06,
    transparent: true,
    opacity: 0.46,
    clearcoat: 0.65,
    clearcoatRoughness: 0.2,
  })

  const rooftopUnits: Array<{ x: number; y: number; z: number; sx: number; sz: number }> = []
  const signAnchors: Array<{ x: number; y: number; z: number; rotY: number; label: string; hue: 'cyan' | 'pink' | 'amber' }> = []
  const roofMasts: Array<{ x: number; y: number; z: number; h: number }> = []

  centers.forEach((x, xi) => {
    centers.forEach((z, zi) => {
      const n = seededNoise(xi + 1, zi + 2)
      const width = 14.6 + seededNoise(xi * 3 + 4, zi + 1) * 5.2
      const depth = 14.6 + seededNoise(xi + 2, zi * 4 + 8) * 5.2
      let height = 23 + n * 43

      const isPrismSpire = x === 14 && z === -14
      const isSplitCrownA = x === -42 && z === 42
      const isSplitCrownB = x === 42 && z === 42
      if (isPrismSpire) height = 94
      if (isSplitCrownA) height = 76
      if (isSplitCrownB) height = 72

      const id = `building-${xi}-${zi}`
      const texture = makeFacadeTexture(xi * 10 + zi + 1)
      texture.repeat.set(Math.max(1.5, width / 9), Math.max(2.5, height / 12))
      const baseHue = 0.55 + seededNoise(xi + 6, zi + 3) * 0.1
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(baseHue, 0.25, 0.145 + n * 0.065),
        roughness: 0.48,
        metalness: 0.34,
        map: texture,
        emissiveMap: texture,
        emissive: new THREE.Color(seedColor(xi, zi)),
        emissiveIntensity: 0.28,
      })
      facadeMaterials.push(material)

      // The original collision body remains the actual raycast/collision surface.
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material)
      mesh.position.set(x, height / 2, z)
      mesh.castShadow = height < 82
      mesh.receiveShadow = true
      mesh.userData.buildingId = id
      scene.add(mesh)

      const min = new THREE.Vector3(x - width / 2, GROUND_Y, z - depth / 2)
      const max = new THREE.Vector3(x + width / 2, height, z + depth / 2)
      buildings.push({ id, min: copyVec(min), max: copyVec(max), mesh })
      raycastMeshes.push(mesh)

      const pad = new THREE.Mesh(new THREE.BoxGeometry(width + 3.2, 0.2, depth + 3.2), sidewalkMat)
      pad.position.set(x, 0.1, z)
      pad.receiveShadow = true
      scene.add(pad)

      const trimIndex = (xi * 2 + zi) % trimMaterials.length
      const trimMat = trimMaterials[trimIndex]

      // Podium + setback volume breaks the single-box silhouette while remaining decorative.
      const podiumH = 2.2 + seededNoise(xi + 4, zi + 8) * 2.2
      const podium = new THREE.Mesh(new THREE.BoxGeometry(width + 1.25, podiumH, depth + 1.25), darkMetal)
      podium.position.set(x, podiumH / 2 + 0.12, z)
      podium.castShadow = true
      scene.add(podium)

      // Structural corner piers make the tower silhouette read as a designed volume instead of a textured box.
      const pierH = Math.max(8, height - podiumH * 0.55)
      const pierSize = 0.38 + seededNoise(xi + 41, zi + 23) * 0.22
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          if ((sx === 1 && sz === 1) || height > 52) {
            const pier = new THREE.Mesh(new THREE.BoxGeometry(pierSize, pierH, pierSize), darkMetal)
            pier.position.set(
              x + sx * (width / 2 - pierSize * 0.46),
              podiumH + pierH / 2 - 0.08,
              z + sz * (depth / 2 - pierSize * 0.46),
            )
            pier.castShadow = height < 72
            scene.add(pier)
          }
        }
      }

      // A mid-level mechanical/service deck introduces believable vertical zoning on taller towers.
      if (height > 48) {
        const deckY = height * (0.54 + seededNoise(xi + 18, zi + 29) * 0.08)
        const deck = new THREE.Mesh(new THREE.BoxGeometry(width + 0.72, 0.46, depth + 0.72), roofMetal)
        deck.position.set(x, deckY, z)
        deck.castShadow = false
        scene.add(deck)

        const deckInset = new THREE.Mesh(new THREE.BoxGeometry(width * 0.9, 0.14, depth * 0.9), trimMat)
        deckInset.position.set(x, deckY + 0.29, z)
        scene.add(deckInset)
      }

      if (height > 38) {
        const setbackH = 2.1 + seededNoise(xi + 12, zi + 2) * 3.2
        const setback = new THREE.Mesh(new THREE.BoxGeometry(width * 0.76, setbackH, depth * 0.76), roofMetal)
        setback.position.set(x, height - setbackH / 2 + 0.12, z)
        setback.castShadow = true
        scene.add(setback)
      }

      const rim = new THREE.Mesh(new THREE.BoxGeometry(width + 0.09, 0.15, depth + 0.09), trimMat)
      rim.position.set(x, height - 0.075, z)
      scene.add(rim)

      // Architectural fins, shadow gaps and belts give the facade a more authored model language.
      const finCount = height > 55 ? 4 : 2
      for (let f = 0; f < finCount; f++) {
        const side = f % 2 === 0 ? -1 : 1
        const front = f < 2
        const finH = height * (0.52 + seededNoise(xi + f * 2, zi + f * 4) * 0.22)
        const fin = new THREE.Mesh(
          front ? new THREE.BoxGeometry(0.13, finH, 0.42) : new THREE.BoxGeometry(0.42, finH, 0.13),
          darkMetal,
        )
        if (front) fin.position.set(x + side * (width / 2 - 0.5), height - finH / 2 - 1.1, z - depth / 2 - 0.11)
        else fin.position.set(x + width / 2 + 0.11, height - finH / 2 - 1.1, z + side * (depth / 2 - 0.5))
        scene.add(fin)
      }

      if ((xi + zi) % 2 === 0 || height > 62) {
        const railMat = new THREE.MeshBasicMaterial({ color: trimMat.color, transparent: true, opacity: height > 68 ? 0.72 : 0.42, toneMapped: false })
        const railHeight = Math.min(height * 0.68, 48)
        for (const sx of [-1, 1]) {
          const rail = new THREE.Mesh(new THREE.BoxGeometry(0.075, railHeight, 0.075), railMat)
          rail.position.set(x + sx * (width / 2 - 0.06), height - railHeight / 2 - 0.26, z - depth / 2 + 0.04)
          scene.add(rail)
        }
      }

      const beltCount = height > 55 ? 2 : 1
      for (let b = 0; b < beltCount; b++) {
        const beltY = height * (0.34 + b * 0.26 + seededNoise(xi + b, zi + 5) * 0.05)
        const belt = new THREE.Mesh(new THREE.BoxGeometry(width + 0.04, 0.12, depth + 0.04), trimMat)
        belt.position.set(x, Math.min(beltY, height - 4), z)
        belt.scale.set(1, 0.62, 1)
        scene.add(belt)
      }

      // Recessed glass crown on selected towers.
      if ((xi * 3 + zi) % 5 === 0 && !isPrismSpire) {
        const glassCap = new THREE.Mesh(new THREE.BoxGeometry(width * 0.52, 2.8, depth * 0.52), glass)
        glassCap.position.set(x, height + 1.25, z)
        scene.add(glassCap)
        const capFrame = new THREE.Mesh(new THREE.BoxGeometry(width * 0.56, 0.12, depth * 0.56), trimMat)
        capFrame.position.set(x, height + 2.65, z)
        scene.add(capFrame)
      }

      // Rooftop props are batched later using InstancedMesh.
      if (height > 32 && !isPrismSpire) {
        rooftopUnits.push({
          x: x + (seededNoise(xi + 31, zi + 17) - 0.5) * width * 0.34,
          y: height + 0.48,
          z: z + (seededNoise(xi + 9, zi + 25) - 0.5) * depth * 0.34,
          sx: 0.7 + seededNoise(xi + 22, zi + 6) * 0.7,
          sz: 0.7 + seededNoise(xi + 5, zi + 33) * 0.7,
        })
        if ((xi + zi) % 3 === 0 || height > 63) {
          roofMasts.push({
            x: x + (seededNoise(xi + 71, zi + 13) - 0.5) * width * 0.22,
            y: height + 1.2,
            z: z + (seededNoise(xi + 37, zi + 61) - 0.5) * depth * 0.22,
            h: 2.8 + seededNoise(xi + 44, zi + 82) * 5.6,
          })
        }
      }

      if ((xi + zi * 2) % 7 === 0 && height > 38) {
        const hue: 'cyan' | 'pink' | 'amber' = trimIndex === 0 ? 'cyan' : trimIndex === 1 ? 'pink' : 'amber'
        signAnchors.push({
          x,
          y: Math.min(height * 0.62, height - 5),
          z: z - depth / 2 - 0.07,
          rotY: 0,
          label: ['N//04', 'THREAD', 'AXIS', 'VANTA', 'GRID'][Math.abs(xi * 2 + zi) % 5],
          hue,
        })
      }

      if (isPrismSpire) {
        const crown = new THREE.Group()
        const lowerRing = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.16, 10, 48), trimMaterials[0])
        lowerRing.rotation.x = Math.PI / 2
        lowerRing.position.y = 1.4
        crown.add(lowerRing)
        const upperRing = new THREE.Mesh(new THREE.TorusGeometry(2.65, 0.09, 8, 36), trimMaterials[1])
        upperRing.rotation.x = Math.PI / 2
        upperRing.position.y = 5.1
        crown.add(upperRing)
        const shard = new THREE.Mesh(new THREE.OctahedronGeometry(2.35, 1), darkMetal)
        shard.scale.set(0.68, 2.45, 0.68)
        shard.position.y = 4.25
        shard.rotation.y = Math.PI / 4
        crown.add(shard)
        const innerShard = new THREE.Mesh(new THREE.OctahedronGeometry(1.25, 0), glass)
        innerShard.scale.set(0.58, 2.25, 0.58)
        innerShard.position.y = 4.25
        innerShard.rotation.y = Math.PI / 4
        crown.add(innerShard)
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.18, 12, 10), trimMaterials[0])
        mast.position.y = 10.5
        crown.add(mast)
        crown.position.set(x, height, z)
        scene.add(crown)
      }
      if (isSplitCrownA || isSplitCrownB) {
        const crown = new THREE.Group()
        const crownMat = trimMaterials[isSplitCrownA ? 1 : 2]
        for (const side of [-1, 1]) {
          const fin = new THREE.Mesh(new THREE.ConeGeometry(1.32, 7.8, 4), crownMat)
          fin.position.set(side * width * 0.24, 3.6, 0)
          fin.rotation.y = Math.PI / 4
          crown.add(fin)
          const brace = new THREE.Mesh(new THREE.BoxGeometry(0.14, 5.1, width * 0.16), darkMetal)
          brace.position.set(side * width * 0.18, 2.8, 0)
          crown.add(brace)
        }
        const lens = new THREE.Mesh(new THREE.BoxGeometry(width * 0.5, 0.38, 1.15), glass)
        lens.position.y = 1.1
        crown.add(lens)
        crown.position.set(x, height, z)
        scene.add(crown)
      }
    })
  })

  if (rooftopUnits.length) {
    const unitGeo = new THREE.BoxGeometry(1.55, 0.85, 1.35)
    const units = new THREE.InstancedMesh(unitGeo, roofMetal, rooftopUnits.length)
    const matrix = new THREE.Matrix4()
    const position = new THREE.Vector3()
    const rotation = new THREE.Quaternion()
    const scale = new THREE.Vector3()
    rooftopUnits.forEach((unit, i) => {
      position.set(unit.x, unit.y, unit.z)
      scale.set(unit.sx, 1, unit.sz)
      matrix.compose(position, rotation, scale)
      units.setMatrixAt(i, matrix)
    })
    units.castShadow = true
    units.receiveShadow = true
    scene.add(units)
  }

  if (roofMasts.length) {
    const mastGeo = new THREE.CylinderGeometry(0.055, 0.09, 1, 7)
    const masts = new THREE.InstancedMesh(mastGeo, darkMetal, roofMasts.length)
    const tips = new THREE.InstancedMesh(new THREE.SphereGeometry(0.11, 8, 6), trimMaterials[0], roofMasts.length)
    const matrix = new THREE.Matrix4()
    const quat = new THREE.Quaternion()
    const scale = new THREE.Vector3()
    roofMasts.forEach((mast, i) => {
      matrix.compose(new THREE.Vector3(mast.x, mast.y + mast.h / 2, mast.z), quat, scale.set(1, mast.h, 1))
      masts.setMatrixAt(i, matrix)
      matrix.compose(new THREE.Vector3(mast.x, mast.y + mast.h, mast.z), quat, scale.set(1, 1, 1))
      tips.setMatrixAt(i, matrix)
    })
    scene.add(masts, tips)
  }

  // Neon signs use local canvas textures: no remote assets and no dependency on fonts/models.
  signAnchors.forEach((sign) => {
    const texture = makeSignTexture(sign.label, sign.hue)
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.88, toneMapped: false, depthWrite: false, side: THREE.DoubleSide })
    const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 1.72), material)
    signMesh.position.set(sign.x, sign.y, sign.z)
    signMesh.rotation.y = sign.rotY
    signMesh.renderOrder = 2
    scene.add(signMesh)
  })

  // Street furniture adds human scale without making every prop its own draw call.
  const lampPositions: THREE.Vector3[] = []
  for (const road of [-84, -56, -28, 0, 28, 56, 84]) {
    for (let p = -108; p <= 108; p += 18) {
      lampPositions.push(new THREE.Vector3(road + 5.25, 1.9, p))
    }
  }
  const lampPosts = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.055, 0.075, 3.8, 7), darkMetal, lampPositions.length)
  const lampHeads = new THREE.InstancedMesh(new THREE.BoxGeometry(0.34, 0.12, 0.72), trimMaterials[0], lampPositions.length)
  const matrix = new THREE.Matrix4()
  const quat = new THREE.Quaternion()
  const scale = new THREE.Vector3(1, 1, 1)
  lampPositions.forEach((position, i) => {
    matrix.compose(position, quat, scale)
    lampPosts.setMatrixAt(i, matrix)
    matrix.compose(new THREE.Vector3(position.x, position.y + 1.88, position.z), quat, scale)
    lampHeads.setMatrixAt(i, matrix)
  })
  scene.add(lampPosts, lampHeads)

  // Sky-link becomes a small architectural truss rather than a single glowing bar.
  const bridgeMat = new THREE.MeshStandardMaterial({
    color: 0x84edff,
    emissive: 0x1d7f9d,
    emissiveIntensity: 2.4,
    metalness: 0.76,
    roughness: 0.18,
    transparent: true,
    opacity: 0.9,
  })
  const bridge = new THREE.Group()
  for (const yOff of [-0.32, 0.32]) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(18, 0.16, 0.16), bridgeMat)
    beam.position.y = yOff
    bridge.add(beam)
  }
  for (let x = -8.2; x <= 8.2; x += 2.05) {
    const strut = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.72, 0.11), darkMetal)
    strut.position.x = x
    strut.rotation.z = x % 4.1 === 0 ? 0.34 : -0.34
    bridge.add(strut)
  }
  bridge.position.set(0, 35, 42)
  scene.add(bridge)

  return { buildings, raycastMeshes, facadeMaterials }
}

function seedColor(x: number, z: number) {
  const index = Math.floor(seededNoise(x + 3, z + 9) * 3)
  return index === 0 ? 0x183f54 : index === 1 ? 0x42263e : 0x3d351c
}


function addSkyDome(scene: THREE.Scene) {
  const uniforms = {
    topColor: { value: new THREE.Color(0x367b9a) },
    horizonColor: { value: new THREE.Color(0x9bc9d1) },
    bottomColor: { value: new THREE.Color(0xe2c8b0) },
  }
  const material = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    depthWrite: false,
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vWorldPosition;
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 bottomColor;
      void main() {
        float h = normalize(vWorldPosition).y * 0.5 + 0.5;
        vec3 lower = mix(bottomColor, horizonColor, smoothstep(0.18, 0.54, h));
        vec3 color = mix(lower, topColor, smoothstep(0.5, 0.98, h));
        gl_FragColor = vec4(color, 1.0);
      }
    `,
  })
  const dome = new THREE.Mesh(new THREE.SphereGeometry(320, 32, 20), material)
  dome.renderOrder = -20
  scene.add(dome)
  return uniforms
}

function addDistantSkyline(scene: THREE.Scene) {
  const count = 86
  const geo = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshStandardMaterial({ color: 0x152533, roughness: 0.72, metalness: 0.18 })
  const towers = new THREE.InstancedMesh(geo, material, count)
  const matrix = new THREE.Matrix4()
  const position = new THREE.Vector3()
  const rotation = new THREE.Quaternion()
  const scale = new THREE.Vector3()

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + seededNoise(i, 77) * 0.12
    const radius = 142 + seededNoise(i, 29) * 52
    const width = 5 + seededNoise(i, 31) * 9
    const depth = 5 + seededNoise(i, 41) * 8
    const height = 12 + Math.pow(seededNoise(i, 53), 0.72) * 54
    position.set(Math.cos(angle) * radius, height / 2 - 0.2, Math.sin(angle) * radius)
    rotation.setFromAxisAngle(UP, -angle + seededNoise(i, 61) * 0.22)
    scale.set(width, height, depth)
    matrix.compose(position, rotation, scale)
    towers.setMatrixAt(i, matrix)
  }
  towers.receiveShadow = false
  towers.castShadow = false
  scene.add(towers)

  const beaconMaterial = new THREE.MeshBasicMaterial({ color: 0x66e9ff, transparent: true, opacity: 0.22, toneMapped: false })
  const beacons = new THREE.InstancedMesh(new THREE.BoxGeometry(0.08, 6, 0.08), beaconMaterial, 22)
  for (let i = 0; i < 22; i++) {
    const angle = (i / 22) * Math.PI * 2 + seededNoise(i, 91) * 0.16
    const radius = 148 + seededNoise(i, 93) * 37
    const height = 22 + seededNoise(i, 97) * 34
    position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius)
    rotation.identity()
    scale.set(1, 1, 1)
    matrix.compose(position, rotation, scale)
    beacons.setMatrixAt(i, matrix)
  }
  scene.add(beacons)
}

function addAtmosphere(scene: THREE.Scene) {
  const skyUniforms = addSkyDome(scene)
  addDistantSkyline(scene)
  const starGeo = new THREE.BufferGeometry()
  const stars: number[] = []
  for (let i = 0; i < 620; i++) {
    const radius = 118 + seededNoise(i, i * 3) * 86
    const angle = seededNoise(i * 2, 7) * Math.PI * 2
    const y = 38 + seededNoise(i * 5, 11) * 126
    stars.push(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(stars, 3))
  const starMat = new THREE.PointsMaterial({ color: 0xdff7ff, size: 0.46, transparent: true, opacity: 0, depthWrite: false })
  const starField = new THREE.Points(starGeo, starMat)
  scene.add(starField)

  const hazeGeo = new THREE.BufferGeometry()
  const haze: number[] = []
  for (let i = 0; i < 180; i++) {
    const a = seededNoise(i, 19) * Math.PI * 2
    const r = 35 + seededNoise(i, 31) * 108
    haze.push(Math.cos(a) * r, 4 + seededNoise(i * 7, 3) * 56, Math.sin(a) * r)
  }
  hazeGeo.setAttribute('position', new THREE.Float32BufferAttribute(haze, 3))
  const hazeMat = new THREE.PointsMaterial({ color: 0xb8efff, size: 0.33, transparent: true, opacity: 0.14, depthWrite: false })
  const hazeField = new THREE.Points(hazeGeo, hazeMat)
  scene.add(hazeField)

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(5.3, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0xe9f4ff, transparent: true, opacity: 0 }),
  )
  moon.position.set(-92, 112, -138)
  scene.add(moon)

  const moonHalo = new THREE.Mesh(
    new THREE.RingGeometry(6.4, 9.8, 48),
    new THREE.MeshBasicMaterial({ color: 0x9bc7ff, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }),
  )
  moonHalo.position.copy(moon.position)
  moonHalo.lookAt(0, 50, 0)
  scene.add(moonHalo)

  const sunDisc = new THREE.Mesh(
    new THREE.SphereGeometry(7.8, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0xffe7c3, transparent: true, opacity: 0.8 }),
  )
  sunDisc.position.set(118, 116, -142)
  scene.add(sunDisc)

  const sunHalo = new THREE.Mesh(
    new THREE.RingGeometry(9.4, 16, 48),
    new THREE.MeshBasicMaterial({ color: 0xffd9ad, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false }),
  )
  sunHalo.position.copy(sunDisc.position)
  sunHalo.lookAt(0, 50, 0)
  scene.add(sunHalo)

  return {
    starMat,
    moon: moon.material as THREE.MeshBasicMaterial,
    moonHalo: moonHalo.material as THREE.MeshBasicMaterial,
    sun: sunDisc.material as THREE.MeshBasicMaterial,
    sunHalo: sunHalo.material as THREE.MeshBasicMaterial,
    hazeField,
    skyUniforms,
  }
}


function addDistantArt(scene: THREE.Scene) {
  const silhouetteMat = new THREE.MeshStandardMaterial({ color: 0x101b27, roughness: 0.72, metalness: 0.18 })
  const glowMat = new THREE.MeshBasicMaterial({ color: 0x4de5ff, transparent: true, opacity: 0.18, toneMapped: false, depthWrite: false })
  const skylineGeo = new THREE.BoxGeometry(1, 1, 1)
  const skyline: Array<{ x: number; y: number; z: number; sx: number; sy: number; sz: number }> = []
  const radius = 150
  for (let i = 0; i < 96; i++) {
    const a = (i / 96) * Math.PI * 2 + seededNoise(i, 41) * 0.08
    const r = radius + seededNoise(i, 77) * 34
    const h = 22 + seededNoise(i, 91) * 74
    skyline.push({
      x: Math.cos(a) * r,
      y: h / 2 - 1,
      z: Math.sin(a) * r,
      sx: 6 + seededNoise(i, 63) * 13,
      sy: h,
      sz: 6 + seededNoise(i, 54) * 13,
    })
  }
  const skylineMesh = new THREE.InstancedMesh(skylineGeo, silhouetteMat, skyline.length)
  const matrix = new THREE.Matrix4()
  const q = new THREE.Quaternion()
  skyline.forEach((b, i) => {
    matrix.compose(new THREE.Vector3(b.x, b.y, b.z), q, new THREE.Vector3(b.sx, b.sy, b.sz))
    skylineMesh.setMatrixAt(i, matrix)
  })
  skylineMesh.receiveShadow = false
  scene.add(skylineMesh)

  // Sparse vertical light rails make the distant city readable without expensive windows.
  const rails: THREE.Mesh[] = []
  for (let i = 0; i < 22; i++) {
    const b = skyline[(i * 13) % skyline.length]
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.18, Math.max(7, b.sy * 0.52), 0.06), glowMat)
    rail.position.set(b.x, Math.max(6, b.sy * 0.52), b.z)
    rail.lookAt(0, rail.position.y, 0)
    rails.push(rail)
    scene.add(rail)
  }

  // Elevated transit streaks provide scale and parallax in the mid-distance.
  const transitMat = new THREE.MeshBasicMaterial({ color: 0xff6fa3, transparent: true, opacity: 0.26, toneMapped: false, depthWrite: false })
  for (const z of [-112, 116]) {
    const track = new THREE.Mesh(new THREE.BoxGeometry(190, 0.08, 0.08), transitMat)
    track.position.set(0, 22 + (z > 0 ? 5 : 0), z)
    scene.add(track)
  }

  // Thin horizon bands give the atmosphere a deliberate layered composition.
  const hazeMat = new THREE.MeshBasicMaterial({ color: 0x7fd9ef, transparent: true, opacity: 0.055, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })
  for (const y of [18, 34, 52]) {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(132 + y * 0.7, 132 + y * 0.7, 0.12, 64, 1, true), hazeMat)
    band.position.y = y
    scene.add(band)
  }
}

function createPlayer(scene: THREE.Scene): PlayerRig {
  const root = new THREE.Group()
  root.position.copy(START_POSITION)
  const visual = new THREE.Group()
  root.add(visual)

  const suit = new THREE.MeshStandardMaterial({ color: 0x0e2238, roughness: 0.36, metalness: 0.42 })
  const deep = new THREE.MeshStandardMaterial({ color: 0x040c16, roughness: 0.46, metalness: 0.34 })
  const panel = new THREE.MeshStandardMaterial({ color: 0x294863, roughness: 0.3, metalness: 0.55 })
  const carbon = new THREE.MeshStandardMaterial({ color: 0x101820, roughness: 0.62, metalness: 0.22 })
  const accent = new THREE.MeshStandardMaterial({ color: 0x69f0ff, emissive: 0x0a9ebc, emissiveIntensity: 2.45, roughness: 0.18, metalness: 0.28 })
  const hot = new THREE.MeshStandardMaterial({ color: 0xff4d86, emissive: 0xc01658, emissiveIntensity: 1.85, roughness: 0.22, metalness: 0.2 })
  const visorMat = new THREE.MeshPhysicalMaterial({
    color: 0xcafaff,
    emissive: 0x6eefff,
    emissiveIntensity: 1.35,
    roughness: 0.08,
    metalness: 0.12,
    transmission: 0.14,
    transparent: true,
    opacity: 0.92,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
  })
  const eye = new THREE.MeshBasicMaterial({ color: 0xf4feff, toneMapped: false })

  // Core body: narrow waist and layered chest armor preserve a fast runner silhouette.
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.49, 10, 18), suit)
  torso.position.y = 0.08
  torso.scale.set(1.08, 1.02, 0.77)
  torso.castShadow = true
  visual.add(torso)

  const abdomen = new THREE.Mesh(new THREE.CapsuleGeometry(0.235, 0.26, 7, 12), carbon)
  abdomen.position.set(0, -0.19, -0.005)
  abdomen.scale.set(1, 1, 0.78)
  abdomen.castShadow = true
  visual.add(abdomen)

  const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.35, 0.075, 1, 1, 1), panel)
  chestPlate.position.set(0, 0.23, -0.295)
  chestPlate.rotation.x = -0.08
  visual.add(chestPlate)

  for (const side of [-1, 1]) {
    const pectoral = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.22, 0.055), deep)
    pectoral.position.set(side * 0.155, 0.3, -0.34)
    pectoral.rotation.z = side * -0.12
    visual.add(pectoral)

    const sidePlate = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.38, 0.22), panel)
    sidePlate.position.set(side * 0.34, 0.08, -0.04)
    sidePlate.rotation.z = side * -0.12
    visual.add(sidePlate)
  }

  const chestCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), hot)
  chestCore.position.set(0, 0.225, -0.356)
  chestCore.scale.set(0.6, 1.42, 0.28)
  visual.add(chestCore)

  const sternumRail = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.5, 0.035), accent)
  sternumRail.position.set(0, 0.1, -0.36)
  visual.add(sternumRail)

  // Hard-surface yoke and floating abdominal plates create a clearer armored anatomy.
  const yoke = new THREE.Mesh(new THREE.CylinderGeometry(0.285, 0.355, 0.24, 8, 1, false, Math.PI / 8), panel)
  yoke.position.set(0, 0.38, -0.01)
  yoke.scale.set(1.34, 1, 0.82)
  yoke.rotation.y = Math.PI / 8
  visual.add(yoke)

  for (let i = 0; i < 3; i++) {
    const abPlate = new THREE.Mesh(new THREE.BoxGeometry(0.32 - i * 0.035, 0.075, 0.055), i === 1 ? panel : deep)
    abPlate.position.set(0, 0.045 - i * 0.095, -0.286 - i * 0.008)
    abPlate.rotation.x = -0.1 + i * 0.04
    visual.add(abPlate)
  }

  const hips = new THREE.Mesh(new THREE.SphereGeometry(0.32, 18, 14), deep)
  hips.position.y = -0.38
  hips.scale.set(1.05, 0.67, 0.8)
  hips.castShadow = true
  visual.add(hips)

  const hipArmor = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.16, 0.34), panel)
  hipArmor.position.set(0, -0.38, -0.035)
  hipArmor.rotation.x = -0.1
  visual.add(hipArmor)

  for (const side of [-1, 1]) {
    const hipPod = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.22, 0.24), carbon)
    hipPod.position.set(side * 0.31, -0.38, 0.015)
    hipPod.rotation.z = side * -0.18
    visual.add(hipPod)

    const hipBlade = new THREE.Mesh(new THREE.ConeGeometry(0.095, 0.28, 4), panel)
    hipBlade.position.set(side * 0.35, -0.49, -0.04)
    hipBlade.rotation.z = side * 0.35
    hipBlade.rotation.y = Math.PI / 4
    visual.add(hipBlade)
  }

  // Helmet: shell, jaw, brow and glass visor read better at close third-person distance.
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.29, 24, 18), suit)
  head.position.y = 0.8
  head.scale.set(0.92, 1.08, 0.88)
  head.castShadow = true
  visual.add(head)

  const crownPlate = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.12, 0.23), panel)
  crownPlate.position.set(0, 1.015, -0.015)
  crownPlate.rotation.x = -0.12
  visual.add(crownPlate)

  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.18), deep)
  jaw.position.set(0, 0.69, -0.14)
  jaw.rotation.x = 0.14
  visual.add(jaw)

  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.37, 0.12, 0.03), visorMat)
  visor.position.set(0, 0.86, -0.266)
  visor.scale.x = 0.94
  visual.add(visor)

  const visorLight = new THREE.Mesh(new THREE.BoxGeometry(0.29, 0.025, 0.01), eye)
  visorLight.position.set(0, 0.87, -0.286)
  visual.add(visorLight)

  const visorCut = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.135, 0.038), suit)
  visorCut.position.set(0, 0.86, -0.282)
  visual.add(visorCut)

  for (const side of [-1, 1]) {
    const temple = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.17), hot)
    temple.position.set(side * 0.265, 0.83, -0.02)
    temple.rotation.z = side * 0.08
    visual.add(temple)

    const earPod = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.055, 10), panel)
    earPod.position.set(side * 0.286, 0.82, 0.025)
    earPod.rotation.z = Math.PI / 2
    visual.add(earPod)

    const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.16, 0.055), deep)
    cheek.position.set(side * 0.195, 0.745, -0.205)
    cheek.rotation.z = side * -0.16
    cheek.rotation.y = side * 0.12
    visual.add(cheek)
  }

  const rearHelmet = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.18, 0.095), carbon)
  rearHelmet.position.set(0, 0.82, 0.225)
  rearHelmet.rotation.x = -0.08
  visual.add(rearHelmet)

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.026, 0.24, 6), accent)
  antenna.position.set(0.16, 1.08, 0.02)
  antenna.rotation.z = -0.18
  visual.add(antenna)

  const neckRing = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.026, 8, 24), accent)
  neckRing.position.y = 0.57
  neckRing.rotation.x = Math.PI / 2
  visual.add(neckRing)

  const shoulderGeo = new THREE.SphereGeometry(0.145, 14, 10)
  const upperLimbGeo = new THREE.CapsuleGeometry(0.086, 0.3, 7, 12)
  const forearmGeo = new THREE.CapsuleGeometry(0.078, 0.24, 7, 12)
  const armGroups: THREE.Group[] = []
  for (const side of [-1, 1]) {
    const arm = new THREE.Group()
    arm.position.set(side * 0.415, 0.34, 0)

    const shoulder = new THREE.Mesh(shoulderGeo, hot)
    shoulder.scale.set(1.12, 0.9, 1)
    shoulder.castShadow = true
    arm.add(shoulder)

    const shoulderPlate = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.11, 0.24), panel)
    shoulderPlate.position.set(side * 0.035, 0.01, 0)
    shoulderPlate.rotation.z = side * -0.18
    arm.add(shoulderPlate)

    const shoulderBlade = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.25, 4), hot)
    shoulderBlade.position.set(side * 0.09, 0.035, 0.045)
    shoulderBlade.rotation.z = side * -1.15
    shoulderBlade.rotation.y = Math.PI / 4
    shoulderBlade.scale.set(0.7, 1, 1.1)
    arm.add(shoulderBlade)

    const upper = new THREE.Mesh(upperLimbGeo, suit)
    upper.position.y = -0.22
    upper.castShadow = true
    arm.add(upper)

    const bicepShell = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.22, 0.085), panel)
    bicepShell.position.set(side * 0.028, -0.22, -0.085)
    bicepShell.rotation.z = side * -0.05
    arm.add(bicepShell)

    const tricepShell = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.19, 0.07), carbon)
    tricepShell.position.set(-side * 0.035, -0.22, 0.085)
    tricepShell.rotation.z = side * 0.05
    arm.add(tricepShell)

    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.102, 12, 9), deep)
    elbow.position.set(0, -0.43, -0.015)
    elbow.scale.set(1, 0.78, 0.9)
    arm.add(elbow)

    const elbowRing = new THREE.Mesh(new THREE.TorusGeometry(0.095, 0.018, 7, 16), hot)
    elbowRing.position.set(0, -0.43, -0.015)
    elbowRing.rotation.x = Math.PI / 2
    arm.add(elbowRing)

    const forearm = new THREE.Mesh(forearmGeo, carbon)
    forearm.position.set(0, -0.57, -0.012)
    forearm.scale.set(1.02, 1, 0.95)
    forearm.castShadow = true
    arm.add(forearm)

    const forearmPlate = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.26, 0.055), accent)
    forearmPlate.position.set(side * 0.055, -0.56, -0.09)
    forearmPlate.rotation.z = side * -0.08
    arm.add(forearmPlate)

    const gauntlet = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.12, 6, 10), panel)
    gauntlet.position.y = -0.73
    gauntlet.scale.set(0.9, 1, 0.88)
    arm.add(gauntlet)

    const emitterHousing = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.19, 0.08), deep)
    emitterHousing.position.set(0, -0.705, -0.095)
    emitterHousing.rotation.x = 0.1
    arm.add(emitterHousing)

    const emitter = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.014, 7, 18), accent)
    emitter.position.set(0, -0.75, -0.08)
    emitter.rotation.x = Math.PI / 2
    arm.add(emitter)

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.095, 12, 9), deep)
    hand.position.y = -0.88
    hand.scale.set(0.9, 1.05, 0.86)
    arm.add(hand)
    visual.add(arm)
    armGroups.push(arm)
  }

  const legGroups: THREE.Group[] = []
  for (const side of [-1, 1]) {
    const leg = new THREE.Group()
    leg.position.set(side * 0.19, -0.47, 0)

    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.112, 0.33, 7, 12), panel)
    thigh.position.y = -0.22
    thigh.castShadow = true
    leg.add(thigh)

    const thighOuter = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.34, 4), carbon)
    thighOuter.position.set(side * 0.105, -0.2, 0.015)
    thighOuter.rotation.z = side * -0.1
    thighOuter.rotation.y = Math.PI / 4
    thighOuter.scale.set(0.75, 1, 1.08)
    leg.add(thighOuter)

    const thighGuard = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.31, 0.08), suit)
    thighGuard.position.set(side * 0.045, -0.2, -0.115)
    thighGuard.rotation.z = side * -0.07
    leg.add(thighGuard)

    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.118, 12, 9), hot)
    knee.position.set(0, -0.47, -0.03)
    knee.scale.set(0.92, 0.72, 0.8)
    leg.add(knee)

    const kneePlate = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.11, 0.055), accent)
    kneePlate.position.set(0, -0.475, -0.13)
    leg.add(kneePlate)

    for (const hingeSide of [-1, 1]) {
      const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.035, 8), panel)
      hinge.position.set(hingeSide * 0.105, -0.47, -0.01)
      hinge.rotation.z = Math.PI / 2
      leg.add(hinge)
    }

    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.27, 6, 11), deep)
    shin.position.y = -0.65
    shin.castShadow = true
    leg.add(shin)

    const shinRail = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.29, 0.045), accent)
    shinRail.position.set(side * 0.07, -0.65, -0.075)
    leg.add(shinRail)

    const calfShell = new THREE.Mesh(new THREE.BoxGeometry(0.115, 0.24, 0.075), panel)
    calfShell.position.set(-side * 0.035, -0.66, 0.075)
    calfShell.rotation.z = side * 0.06
    leg.add(calfShell)

    const ankle = new THREE.Mesh(new THREE.SphereGeometry(0.082, 10, 8), carbon)
    ankle.position.y = -0.83
    leg.add(ankle)

    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.15, 0.36), hot)
    boot.position.set(0, -0.91, -0.075)
    boot.rotation.x = -0.06
    boot.castShadow = true
    leg.add(boot)

    const toeCap = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.18, 4), panel)
    toeCap.position.set(0, -0.91, -0.275)
    toeCap.rotation.x = -Math.PI / 2
    toeCap.rotation.y = Math.PI / 4
    toeCap.scale.set(1.05, 1, 0.7)
    leg.add(toeCap)

    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.035, 0.35), accent)
    sole.position.set(0, -0.995, -0.075)
    leg.add(sole)

    visual.add(leg)
    legGroups.push(leg)
  }

  // Layered belt and back harness give the rear camera view more authored detail.
  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.278, 0.028, 8, 24), accent)
  belt.position.y = -0.25
  belt.rotation.x = Math.PI / 2
  visual.add(belt)

  const backpack = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.49, 0.17), carbon)
  backpack.position.set(0, 0.17, 0.31)
  backpack.rotation.x = 0.05
  visual.add(backpack)

  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.56, 0.045), accent)
  spine.position.set(0, 0.13, 0.41)
  visual.add(spine)

  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.64, 0.055), accent)
    rail.position.set(side * 0.18, 0.12, 0.35)
    rail.rotation.z = side * -0.13
    visual.add(rail)

    const thruster = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.085, 0.29, 10), panel)
    thruster.position.set(side * 0.14, -0.02, 0.43)
    thruster.rotation.x = Math.PI / 2
    visual.add(thruster)

    const thrusterCollar = new THREE.Mesh(new THREE.TorusGeometry(0.082, 0.014, 7, 16), deep)
    thrusterCollar.position.set(side * 0.14, -0.02, 0.505)
    thrusterCollar.rotation.x = Math.PI / 2
    visual.add(thrusterCollar)

    const thrusterGlow = new THREE.Mesh(new THREE.CircleGeometry(0.052, 12), hot)
    thrusterGlow.position.set(side * 0.14, -0.02, 0.585)
    visual.add(thrusterGlow)
  }

  const webSpool = new THREE.Mesh(new THREE.TorusGeometry(0.135, 0.035, 8, 22), panel)
  webSpool.position.set(0, 0.31, 0.43)
  webSpool.rotation.x = Math.PI / 2
  visual.add(webSpool)

  const spoolCore = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.065, 10), hot)
  spoolCore.position.set(0, 0.31, 0.43)
  spoolCore.rotation.x = Math.PI / 2
  visual.add(spoolCore)

  // Main scarf remains the animated reference; two tapering tails add a more premium silhouette.
  const scarf = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.055, 0.88), accent)
  scarf.position.set(0, 0.57, 0.46)
  scarf.rotation.x = -0.16
  visual.add(scarf)

  for (const side of [-1, 1]) {
    const tail = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.78, 5), hot)
    tail.position.set(side * 0.075, 0.53, 0.72)
    tail.rotation.x = Math.PI / 2
    tail.rotation.z = side * 0.06
    tail.scale.set(0.85, 1, 0.55)
    visual.add(tail)
  }


  // Silhouette polish: collar blades, rib panels and heel fins are visible during fast camera motion.
  for (const side of [-1, 1]) {
    const collar = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.24, 0.08), panel)
    collar.position.set(side * 0.205, 0.535, 0.03)
    collar.rotation.z = side * 0.42
    collar.rotation.x = -0.16
    visual.add(collar)

    const rib = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.27, 0.035), accent)
    rib.position.set(side * 0.245, 0.04, -0.31)
    rib.rotation.z = side * -0.1
    visual.add(rib)

    const backpackWing = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.34, 0.28), panel)
    backpackWing.position.set(side * 0.255, 0.18, 0.34)
    backpackWing.rotation.z = side * -0.18
    backpackWing.rotation.x = 0.12
    visual.add(backpackWing)

    const heelFin = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.25, 4), accent)
    heelFin.position.set(side * 0.19, -1.0, 0.08)
    heelFin.rotation.x = -Math.PI / 2
    heelFin.rotation.z = Math.PI / 4
    visual.add(heelFin)
  }

  const chinVent = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.035, 0.025), hot)
  chinVent.position.set(0, 0.71, -0.245)
  visual.add(chinVent)

  const brow = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.045, 0.05), deep)
  brow.position.set(0, 0.93, -0.265)
  brow.rotation.x = -0.08
  visual.add(brow)

  const backCore = new THREE.Mesh(new THREE.OctahedronGeometry(0.105, 0), hot)
  backCore.position.set(0, 0.22, 0.43)
  backCore.scale.set(0.7, 1.3, 0.48)
  visual.add(backCore)

  const beltFront = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.09, 0.055), hot)
  beltFront.position.set(0, -0.27, -0.295)
  visual.add(beltFront)

  visual.rotation.order = 'YXZ'
  scene.add(root)
  return {
    root,
    visual,
    torso,
    head,
    arms: [armGroups[0], armGroups[1]],
    legs: [legGroups[0], legGroups[1]],
    scarf,
  }
}

const COLLISION_MICROSTEP = 0.16
const MAX_COLLISION_MICROSTEPS = 8
const COLLISION_SKIN = 0.0025
const CONTACT_EPSILON = 0.035
const MAX_CONTACT_PASSES = 4
const CAMERA_COLLISION_RADIUS = 0.44
const CAMERA_COLLISION_SKIN = 0.12

function horizontalCircleTouchesBuilding(pos: THREE.Vector3, building: BuildingRuntime, radius = PLAYER_RADIUS) {
  const closestX = clamp(pos.x, building.min.x, building.max.x)
  const closestZ = clamp(pos.z, building.min.z, building.max.z)
  const dx = pos.x - closestX
  const dz = pos.z - closestZ
  return dx * dx + dz * dz <= radius * radius + 1e-7
}

function removeVelocityIntoNormal(velocity: THREE.Vector3, nx: number, ny: number, nz: number) {
  const inward = velocity.x * nx + velocity.y * ny + velocity.z * nz
  if (inward < 0) {
    velocity.x -= nx * inward
    velocity.y -= ny * inward
    velocity.z -= nz * inward
  }
}

/**
 * Resolves a vertical capsule-like player against the rendered building AABBs.
 * The vertical body is represented by its height and the horizontal cross-section is circular,
 * which avoids the sticky square-corner feel of a fully expanded AABB collider.
 */
function resolvePlayerContacts(
  pos: THREE.Vector3,
  velocity: THREE.Vector3,
  buildings: BuildingRuntime[],
  previousPosition: THREE.Vector3,
) {
  let grounded = false
  const groundLevel = GROUND_Y + PLAYER_HALF

  // Ground uses a tiny contact tolerance so gravity does not produce one-frame grounded flicker.
  if (pos.y <= groundLevel + CONTACT_EPSILON && velocity.y <= 0) {
    pos.y = groundLevel
    if (velocity.y < 0) velocity.y = 0
    grounded = true
  }

  // A few sequential passes are enough for corners where two buildings/faces can constrain motion.
  for (let pass = 0; pass < MAX_CONTACT_PASSES; pass++) {
    let corrected = false

    for (const b of buildings) {
      const feet = pos.y - PLAYER_HALF
      const head = pos.y + PLAYER_HALF
      const previousFeet = previousPosition.y - PLAYER_HALF
      const horizontalTouch = horizontalCircleTouchesBuilding(pos, b)
      if (!horizontalTouch) continue

      // Continuous-ish roof crossing test. The physics movement is additionally micro-stepped,
      // so even very fast downward motion cannot skip an entire roof contact in one solve.
      const crossedRoof =
        velocity.y <= 0 &&
        previousFeet >= b.max.y - CONTACT_EPSILON &&
        feet <= b.max.y + CONTACT_EPSILON

      const restingOnRoof =
        velocity.y <= 0 &&
        Math.abs(feet - b.max.y) <= CONTACT_EPSILON &&
        head > b.max.y

      if (crossedRoof || restingOnRoof) {
        pos.y = b.max.y + PLAYER_HALF
        if (velocity.y < 0) velocity.y = 0
        grounded = true
        corrected = true
        continue
      }

      const verticalOverlap = head > b.min.y + COLLISION_SKIN && feet < b.max.y - COLLISION_SKIN
      if (!verticalOverlap) continue

      const closestX = clamp(pos.x, b.min.x, b.max.x)
      const closestZ = clamp(pos.z, b.min.z, b.max.z)
      let dx = pos.x - closestX
      let dz = pos.z - closestZ
      const distSq = dx * dx + dz * dz

      if (distSq > 1e-10) {
        const distance = Math.sqrt(distSq)
        if (distance >= PLAYER_RADIUS) continue
        const nx = dx / distance
        const nz = dz / distance
        const penetration = PLAYER_RADIUS - distance + COLLISION_SKIN
        pos.x += nx * penetration
        pos.z += nz * penetration
        removeVelocityIntoNormal(velocity, nx, 0, nz)
        corrected = true
        continue
      }

      // The player center is horizontally inside the rectangle. Push through the nearest side,
      // never across the whole building. This case mainly handles rope corrections/spawn recovery.
      const toLeft = pos.x - b.min.x
      const toRight = b.max.x - pos.x
      const toBack = pos.z - b.min.z
      const toFront = b.max.z - pos.z
      const nearest = Math.min(toLeft, toRight, toBack, toFront)

      const cameFromLeft = previousPosition.x <= b.min.x - PLAYER_RADIUS + CONTACT_EPSILON
      const cameFromRight = previousPosition.x >= b.max.x + PLAYER_RADIUS - CONTACT_EPSILON
      const cameFromBack = previousPosition.z <= b.min.z - PLAYER_RADIUS + CONTACT_EPSILON
      const cameFromFront = previousPosition.z >= b.max.z + PLAYER_RADIUS - CONTACT_EPSILON

      if (cameFromLeft || (!cameFromRight && !cameFromBack && !cameFromFront && nearest === toLeft)) {
        pos.x = b.min.x - PLAYER_RADIUS - COLLISION_SKIN
        removeVelocityIntoNormal(velocity, -1, 0, 0)
      } else if (cameFromRight || (!cameFromBack && !cameFromFront && nearest === toRight)) {
        pos.x = b.max.x + PLAYER_RADIUS + COLLISION_SKIN
        removeVelocityIntoNormal(velocity, 1, 0, 0)
      } else if (cameFromBack || (!cameFromFront && nearest === toBack)) {
        pos.z = b.min.z - PLAYER_RADIUS - COLLISION_SKIN
        removeVelocityIntoNormal(velocity, 0, 0, -1)
      } else {
        pos.z = b.max.z + PLAYER_RADIUS + COLLISION_SKIN
        removeVelocityIntoNormal(velocity, 0, 0, 1)
      }
      corrected = true
    }

    if (!corrected) break
  }

  // Re-assert the ground after building resolution in case a corner correction nudged us down.
  if (pos.y < groundLevel) {
    pos.y = groundLevel
    if (velocity.y < 0) velocity.y = 0
    grounded = true
  } else if (Math.abs(pos.y - groundLevel) <= CONTACT_EPSILON && velocity.y <= 0) {
    grounded = true
  }

  return grounded
}

/** Finds the earliest segment entry into an AABB expanded by a camera radius. */
function segmentExpandedAabbHit(
  start: THREE.Vector3,
  end: THREE.Vector3,
  building: BuildingRuntime,
  radius: number,
) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const dz = end.z - start.z
  let tMin = 0
  let tMax = 1

  const slabs: Array<[number, number, number, number]> = [
    [start.x, dx, building.min.x - radius, building.max.x + radius],
    [start.y, dy, building.min.y - radius, building.max.y + radius],
    [start.z, dz, building.min.z - radius, building.max.z + radius],
  ]

  for (const [origin, delta, min, max] of slabs) {
    if (Math.abs(delta) < 1e-9) {
      if (origin < min || origin > max) return null
      continue
    }
    let t1 = (min - origin) / delta
    let t2 = (max - origin) / delta
    if (t1 > t2) [t1, t2] = [t2, t1]
    tMin = Math.max(tMin, t1)
    tMax = Math.min(tMax, t2)
    if (tMin > tMax) return null
  }

  return tMin >= 0 && tMin <= 1 ? tMin : null
}

function resolveCameraPenetration(pos: THREE.Vector3, buildings: BuildingRuntime[]) {
  for (let pass = 0; pass < 3; pass++) {
    let corrected = false
    for (const b of buildings) {
      const minX = b.min.x - CAMERA_COLLISION_RADIUS
      const maxX = b.max.x + CAMERA_COLLISION_RADIUS
      const minY = b.min.y - CAMERA_COLLISION_RADIUS
      const maxY = b.max.y + CAMERA_COLLISION_RADIUS
      const minZ = b.min.z - CAMERA_COLLISION_RADIUS
      const maxZ = b.max.z + CAMERA_COLLISION_RADIUS
      if (pos.x <= minX || pos.x >= maxX || pos.y <= minY || pos.y >= maxY || pos.z <= minZ || pos.z >= maxZ) {
        continue
      }

      const distances = [
        { d: pos.x - minX, axis: 'x' as const, value: minX - CAMERA_COLLISION_SKIN },
        { d: maxX - pos.x, axis: 'x' as const, value: maxX + CAMERA_COLLISION_SKIN },
        { d: pos.y - minY, axis: 'y' as const, value: minY - CAMERA_COLLISION_SKIN },
        { d: maxY - pos.y, axis: 'y' as const, value: maxY + CAMERA_COLLISION_SKIN },
        { d: pos.z - minZ, axis: 'z' as const, value: minZ - CAMERA_COLLISION_SKIN },
        { d: maxZ - pos.z, axis: 'z' as const, value: maxZ + CAMERA_COLLISION_SKIN },
      ]
      distances.sort((a, b2) => a.d - b2.d)
      const minCameraY = GROUND_Y + CAMERA_COLLISION_RADIUS + CAMERA_COLLISION_SKIN
      const exit = distances.find((candidate) => candidate.axis !== 'y' || candidate.value >= minCameraY) ?? distances[0]
      pos[exit.axis] = exit.value
      corrected = true
    }
    if (!corrected) break
  }
  pos.y = Math.max(GROUND_Y + CAMERA_COLLISION_RADIUS + CAMERA_COLLISION_SKIN, pos.y)
}

function compassFromYaw(yaw: number) {
  const a = ((yaw % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return dirs[Math.round(a / (Math.PI / 4)) % 8]
}

function headingFromYaw(yaw: number) {
  return ((THREE.MathUtils.radToDeg(yaw) % 360) + 360) % 360
}

export const GameScene = forwardRef<Handle, Props>(function GameScene({ onHud, onPointerLock }, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controlsRef = useRef<{
    lock: () => void
    setNight: (v: boolean) => void
    reset: () => void
  } | null>(null)

  useImperativeHandle(
    ref,
    () => ({
      lock: () => controlsRef.current?.lock(),
      toggleNight: (value: boolean) => controlsRef.current?.setNight(value),
      reset: () => controlsRef.current?.reset(),
    }),
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.06

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x79acbf)
    scene.fog = new THREE.FogExp2(0x79acbf, 0.0054)

    const camera = new THREE.PerspectiveCamera(68, 1, 0.08, 420)
    camera.position.set(0, 4.6, 11)
    camera.rotation.order = 'YXZ'

    const hemi = new THREE.HemisphereLight(0xd7f4ff, 0x34404a, 1.75)
    scene.add(hemi)

    const sun = new THREE.DirectionalLight(0xffedd0, 2.75)
    sun.position.set(52, 92, 24)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.left = -102
    sun.shadow.camera.right = 102
    sun.shadow.camera.top = 102
    sun.shadow.camera.bottom = -102
    sun.shadow.camera.near = 4
    sun.shadow.camera.far = 245
    sun.shadow.bias = -0.00045
    scene.add(sun)

    const fill = new THREE.DirectionalLight(0x68c9ff, 0.42)
    fill.position.set(-70, 35, -40)
    scene.add(fill)

    const neonCyan = new THREE.PointLight(0x46e7ff, 0, 92, 1.7)
    neonCyan.position.set(14, 46, -14)
    scene.add(neonCyan)

    const neonPink = new THREE.PointLight(0xff4f92, 0, 88, 1.8)
    neonPink.position.set(-42, 40, 42)
    scene.add(neonPink)

    const { sidewalkMat } = addGroundAndRoads(scene)
    const { buildings, raycastMeshes, facadeMaterials } = addCity(scene, sidewalkMat)
    const atmosphere = addAtmosphere(scene)
    addDistantArt(scene)
    const rig = createPlayer(scene)
    const player = rig.root

    const webGeometry = new THREE.BufferGeometry().setFromPoints(
      Array.from({ length: WEB_VISUAL_SEGMENTS + 1 }, () => new THREE.Vector3()),
    )
    const webMaterial = new THREE.LineBasicMaterial({ color: 0xeafcff, transparent: true, opacity: 0.96 })
    const webLine = new THREE.Line(webGeometry, webMaterial)
    webLine.visible = false
    webLine.frustumCulled = false
    scene.add(webLine)

    const webGlowGeometry = webGeometry.clone()
    const webGlowMaterial = new THREE.LineBasicMaterial({ color: 0x70e8ff, transparent: true, opacity: 0.28 })
    const webGlow = new THREE.Line(webGlowGeometry, webGlowMaterial)
    webGlow.visible = false
    webGlow.frustumCulled = false
    scene.add(webGlow)

    const webTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 1, 7, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xeaffff, transparent: true, opacity: 0.58, depthWrite: false, toneMapped: false }),
    )
    webTube.visible = false
    webTube.frustumCulled = false
    scene.add(webTube)

    const webPulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0xbaf8ff, transparent: true, opacity: 0.7, depthWrite: false, toneMapped: false }),
    )
    webPulse.visible = false
    scene.add(webPulse)

    const webAnchorBurst = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 14, 10),
      new THREE.MeshBasicMaterial({ color: 0x8ffff6, transparent: true, opacity: 0, depthWrite: false, toneMapped: false }),
    )
    webAnchorBurst.visible = false
    webAnchorBurst.frustumCulled = false
    scene.add(webAnchorBurst)

    const targetRing = new THREE.Mesh(
      new THREE.RingGeometry(0.18, 0.31, 24),
      new THREE.MeshBasicMaterial({ color: 0x9cf5ff, side: THREE.DoubleSide, transparent: true, opacity: 0.88, depthTest: false }),
    )
    targetRing.visible = false
    targetRing.renderOrder = 8
    scene.add(targetRing)

    const targetDot = new THREE.Mesh(
      new THREE.CircleGeometry(0.055, 16),
      new THREE.MeshBasicMaterial({ color: 0xf5fdff, side: THREE.DoubleSide, depthTest: false }),
    )
    targetDot.visible = false
    targetDot.renderOrder = 9
    scene.add(targetDot)

    const keys = new Set<string>()
    const velocity = new THREE.Vector3()
    const moveInput = new THREE.Vector3()
    const desiredGroundVelocity = new THREE.Vector3()
    const cameraTarget = new THREE.Vector3()
    const smoothedTarget = new THREE.Vector3()
    const desiredCamera = new THREE.Vector3()
    const cameraOffsetSmoothed = new THREE.Vector3(0, 3.7, 7.0)
    const flatForward = new THREE.Vector3()
    const cameraRight = new THREE.Vector3()
    const cameraBoomForward = new THREE.Vector3()
    const raycaster = new THREE.Raycaster()
    const center = new THREE.Vector2(0, 0)
    const previousPosition = new THREE.Vector3()
    const radial = new THREE.Vector3()
    const tangentWish = new THREE.Vector3()
    const desiredDir = new THREE.Vector3()
    const horizontalVelocity = new THREE.Vector3()
    const temp = new THREE.Vector3()
    const temp2 = new THREE.Vector3()
    const surfaceNormal = new THREE.Vector3()
    const webStart = new THREE.Vector3()
    const webCurvePoint = new THREE.Vector3()
    const webCurveSide = new THREE.Vector3()
    const webCurveUp = new THREE.Vector3()

    let grounded = true
    let yaw = 0
    let pitch = 0.75
    let cameraRoll = 0
    let movementState: MovementState = 'idle'
    let jumpQueued = false
    let jumpCutQueued = false
    let jumpBuffer = 0
    let coyoteTime = COYOTE_TIME
    let jumpHoldTimer = 0
    let mouseHeld = false
    let elapsedTime = 0
    let accumulator = 0
    let previousTime = performance.now()
    let running = false
    let ready = false
    let frameHandle = 0
    let lastHud = 0
    let lastFrameAt = performance.now()
    let isNight = false
    let inputActive = document.pointerLockElement === canvas
    let wasGrounded = true
    let landingCompression = 0
    let webCatchKick = 0
    let releaseMomentumKick = 0

    const web: WebRuntime = {
      attached: false,
      targetValid: false,
      anchor: null,
      anchorObjectId: null,
      ropeLength: null,
      targetPoint: null,
      targetObjectId: null,
      targetNormal: null,
      tension: 0,
    }

    const resize = () => {
      const width = Math.max(1, canvas.clientWidth)
      const height = Math.max(1, canvas.clientHeight)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    resize()

    const getAim = () => {
      raycaster.setFromCamera(center, camera)
      raycaster.near = 0.2
      raycaster.far = MAX_WEB_DISTANCE + 16
      const hits = raycaster.intersectObjects(raycastMeshes, false)
      const hit = hits[0]
      if (!hit || player.position.distanceTo(hit.point) > MAX_WEB_DISTANCE) return null
      const id = hit.object.userData.buildingId as string | undefined
      if (!id) return null
      const normal = hit.face?.normal.clone() ?? new THREE.Vector3(0, 1, 0)
      normal.transformDirection(hit.object.matrixWorld).normalize()
      return { point: hit.point.clone(), id, normal }
    }

    const getWebStart = (out: THREE.Vector3) => {
      out.set(0.36, 0.37, -0.08)
      out.applyAxisAngle(UP, rig.visual.rotation.y)
      return out.add(player.position)
    }

    const detachWeb = () => {
      if (web.attached) {
        // Feedback only: physics velocity is deliberately left untouched on release.
        releaseMomentumKick = Math.max(releaseMomentumKick, clamp((velocity.length() - 6) / 44, 0, 1))
      }
      web.attached = false
      web.anchor = null
      web.anchorObjectId = null
      web.ropeLength = null
      web.tension = 0
      webLine.visible = false
      webGlow.visible = false
      webTube.visible = false
      webPulse.visible = false
      webAnchorBurst.visible = false
    }

    const attachWeb = () => {
      const hit = getAim()
      if (!hit) return false
      const distance = player.position.distanceTo(hit.point)
      if (distance > MAX_WEB_DISTANCE) return false
      web.attached = true
      // Lift the anchor off the facade so the web line and glow don't clip into the wall.
      web.anchor = hit.point.clone().addScaledVector(hit.normal, 1.5)
      web.anchorObjectId = hit.id
      web.ropeLength = Math.max(MIN_WEB_DISTANCE, distance)
      web.tension = 0
      webCatchKick = Math.max(webCatchKick, clamp(0.22 + velocity.length() / 64, 0.22, 0.86))
      webLine.visible = true
      webGlow.visible = true
      webAnchorBurst.visible = true
      webAnchorBurst.position.copy(web.anchor)
      return true
    }

    const resetPlayer = () => {
      player.position.copy(START_POSITION)
      velocity.set(0, 0, 0)
      grounded = true
      coyoteTime = COYOTE_TIME
      jumpBuffer = 0
      jumpQueued = false
      jumpCutQueued = false
      jumpHoldTimer = 0
      movementState = 'idle'
      detachWeb()
      webCatchKick = 0
      releaseMomentumKick = 0
      camera.position.set(0, 4.6, 11)
      smoothedTarget.copy(player.position).add(temp.set(0, 0.55, 0))
      cameraOffsetSmoothed.copy(camera.position).sub(temp2.copy(player.position).add(temp.set(0, 0.88, 0)))
    }

    const setNight = (value: boolean) => {
      isNight = value
      if (isNight) {
        scene.background = new THREE.Color(0x030711)
        scene.fog = new THREE.FogExp2(0x040813, 0.0071)
        hemi.color.set(0x5d78ad)
        hemi.groundColor.set(0x070b12)
        hemi.intensity = 0.52
        sun.color.set(0x9ab9ff)
        sun.intensity = 0.42
        fill.color.set(0x3bd5ff)
        fill.intensity = 0.9
        neonCyan.intensity = 4.8
        neonPink.intensity = 3.8
        renderer.toneMappingExposure = 0.8
        facadeMaterials.forEach((m) => { m.emissiveIntensity = 1.38 })
        atmosphere.starMat.opacity = 0.9
        atmosphere.moon.opacity = 0.94
        atmosphere.moonHalo.opacity = 0.16
        atmosphere.sun.opacity = 0
        atmosphere.sunHalo.opacity = 0
        atmosphere.skyUniforms.topColor.value.set(0x020612)
        atmosphere.skyUniforms.horizonColor.value.set(0x111b32)
        atmosphere.skyUniforms.bottomColor.value.set(0x07101d)
      } else {
        scene.background = new THREE.Color(0x79acbf)
        scene.fog = new THREE.FogExp2(0x79acbf, 0.0054)
        hemi.color.set(0xd7f4ff)
        hemi.groundColor.set(0x34404a)
        hemi.intensity = 1.75
        sun.color.set(0xffedd0)
        sun.intensity = 2.75
        fill.color.set(0x68c9ff)
        fill.intensity = 0.42
        neonCyan.intensity = 0
        neonPink.intensity = 0
        renderer.toneMappingExposure = 1.06
        facadeMaterials.forEach((m) => { m.emissiveIntensity = 0.24 })
        atmosphere.starMat.opacity = 0
        atmosphere.moon.opacity = 0
        atmosphere.moonHalo.opacity = 0
        atmosphere.sun.opacity = 0.8
        atmosphere.sunHalo.opacity = 0.16
        atmosphere.skyUniforms.topColor.value.set(0x367b9a)
        atmosphere.skyUniforms.horizonColor.value.set(0x9bc9d1)
        atmosphere.skyUniforms.bottomColor.value.set(0xe2c8b0)
      }
    }

    const computeMoveInput = () => {
      flatForward.set(Math.sin(yaw), 0, -Math.cos(yaw)).normalize()
      cameraRight.crossVectors(flatForward, UP).normalize()
      moveInput.set(0, 0, 0)
      if (keys.has('KeyW')) moveInput.add(flatForward)
      if (keys.has('KeyS')) moveInput.sub(flatForward)
      if (keys.has('KeyD')) moveInput.add(cameraRight)
      if (keys.has('KeyA')) moveInput.sub(cameraRight)
      if (moveInput.lengthSq() > 1) moveInput.normalize()
    }

    const applyGroundMovement = (dt: number) => {
      const sprinting = keys.has('ShiftLeft') || keys.has('ShiftRight')
      const targetSpeed = sprinting ? SPRINT_SPEED : WALK_SPEED
      const horizontalSpeed = Math.hypot(velocity.x, velocity.z)
      const hasInput = moveInput.lengthSq() > 0.0001

      if (hasInput) {
        desiredDir.copy(moveInput).normalize()
        horizontalVelocity.set(velocity.x, 0, velocity.z)
        const directionDot = horizontalSpeed > 0.01
          ? clamp(horizontalVelocity.dot(desiredDir) / horizontalSpeed, -1, 1)
          : 1

        // Below traversal speed, acceleration is direction-aware: starts are quick, turns are firmer,
        // and reversals stop feeling like the character is sliding on rails.
        if (horizontalSpeed <= targetSpeed * 1.08) {
          desiredGroundVelocity.copy(desiredDir).multiplyScalar(targetSpeed)
          const deltaX = desiredGroundVelocity.x - velocity.x
          const deltaZ = desiredGroundVelocity.z - velocity.z
          const deltaLen = Math.hypot(deltaX, deltaZ)
          const accel = directionDot < -0.2
            ? GROUND_REVERSE_ACCEL
            : directionDot < 0.72
              ? GROUND_TURN_ACCEL
              : GROUND_ACCEL
          const maxDelta = accel * dt
          if (deltaLen > maxDelta && deltaLen > 0) {
            velocity.x += (deltaX / deltaLen) * maxDelta
            velocity.z += (deltaZ / deltaLen) * maxDelta
          } else {
            velocity.x = desiredGroundVelocity.x
            velocity.z = desiredGroundVelocity.z
          }
        } else {
          // A fast landing keeps the actual swing-earned speed. Input rotates that momentum rather
          // than replacing it with a fixed running velocity, so release trajectories remain valuable.
          horizontalVelocity.normalize()
          const turnAuthority = clamp(1.15 - horizontalSpeed / 105, 0.3, 0.9)
          const reverseBoost = directionDot < 0 ? 1.35 : 1
          const turnBlend = 1 - Math.exp(-GROUND_OVERSPEED_TURN_RATE * turnAuthority * reverseBoost * dt)
          horizontalVelocity.lerp(desiredDir, turnBlend)
          if (horizontalVelocity.lengthSq() > 0.001) horizontalVelocity.normalize()
          const excess = Math.max(0, horizontalSpeed - targetSpeed)
          const preserve = Math.exp(-GROUND_OVERSPEED_DRAG * clamp(excess / 42, 0.08, 1) * dt)
          horizontalVelocity.multiplyScalar(horizontalSpeed * preserve)
          velocity.x = horizontalVelocity.x
          velocity.z = horizontalVelocity.z
        }
      } else if (horizontalSpeed > 0.001) {
        if (horizontalSpeed > SPRINT_SPEED) {
          // Coasting after a swing is deliberately long. No input never acts as an invisible hard brake.
          const preserve = Math.exp(-GROUND_OVERSPEED_DRAG * clamp((horizontalSpeed - SPRINT_SPEED) / 44, 0.06, 1) * dt)
          velocity.x *= preserve
          velocity.z *= preserve
        } else {
          const nextSpeed = Math.max(0, horizontalSpeed - GROUND_BRAKE * dt)
          const scale = nextSpeed / horizontalSpeed
          velocity.x *= scale
          velocity.z *= scale
        }
      }
    }

    const applyAirMovement = (dt: number) => {
      if (moveInput.lengthSq() === 0) return

      if (web.attached && web.anchor) {
        radial.copy(player.position).sub(web.anchor)
        if (radial.lengthSq() > 0.001) {
          radial.normalize()
          tangentWish.copy(moveInput).addScaledVector(radial, -moveInput.dot(radial))
          if (tangentWish.lengthSq() > 0.001) {
            tangentWish.normalize()
            // Steering is applied only in the rope tangent plane. At high speed its authority softens,
            // preserving a momentum-driven arc instead of turning WASD into a free-flight thruster.
            const speed = velocity.length()
            temp.copy(velocity).addScaledVector(radial, -velocity.dot(radial))
            const tangentSpeed = temp.length()
            const tangentAlignment = tangentSpeed > 0.01 ? clamp(temp.normalize().dot(tangentWish), -1, 1) : 0
            const speedAuthority = speed > SWING_SOFT_SPEED
              ? clamp(1 - (speed - SWING_SOFT_SPEED) / 78, 0.36, 1)
              : 1
            const correctionBoost = tangentAlignment < 0.25 ? 1.18 : 1
            const airAccel = SWING_STEER_ACCEL * speedAuthority * correctionBoost
            velocity.addScaledVector(tangentWish, airAccel * dt)
          }
        }
      } else {
        horizontalVelocity.set(velocity.x, 0, velocity.z)
        const horizontalSpeed = horizontalVelocity.length()
        desiredDir.copy(moveInput).normalize()
        const aligned = horizontalSpeed > 0.01
          ? clamp(horizontalVelocity.normalize().dot(desiredDir), -1, 1)
          : 0
        const correctionBoost = aligned < -0.15 ? 1.32 : aligned < 0.55 ? 1.14 : 1
        const softCap = horizontalSpeed > AIR_SOFT_SPEED
          ? clamp(1 - (horizontalSpeed - AIR_SOFT_SPEED) / 58, 0.3, 1)
          : 1
        velocity.addScaledVector(desiredDir, AIR_ACCEL * correctionBoost * softCap * dt)
      }
    }

    // Neon Thread depth-load pass: separate from steering and from the hard constraint.
    // It reads the real anchor's Z separation and adds only rope-direction inward acceleration,
    // so the effect has visible city-depth pull without becoming a world-Z thruster.
    const applyDepthTetherLoad = (dt: number) => {
      if (!web.attached || !web.anchor || web.ropeLength == null) return
      temp2.copy(web.anchor).sub(player.position)
      const distance = temp2.length()
      if (distance < 0.001) return
      const zShare = Math.abs(temp2.z) / distance
      const usage = clamp(distance / Math.max(web.ropeLength, 0.001), 0, 1.04)
      const engage = clamp((usage - 0.8) / 0.2, 0, 1)
      if (zShare < 0.06 || engage <= 0) return
      temp2.multiplyScalar(1 / distance)
      const loadResponse = 1.35 + Math.min(4.8, web.tension * 0.038)
      velocity.addScaledVector(temp2, zShare * engage * loadResponse * dt)
    }

    const enforceRopeConstraint = () => {
      if (!web.attached || !web.anchor || web.ropeLength == null) {
        web.tension = 0
        return
      }
      radial.copy(player.position).sub(web.anchor)
      const distance = radial.length()
      if (distance < 0.0001) return
      radial.divideScalar(distance)

      const stretch = distance - web.ropeLength
      const outwardSpeed = velocity.dot(radial)
      if (stretch > 0) {
        // Position correction makes the rope inextensible; only outward radial momentum is removed.
        player.position.addScaledVector(radial, -stretch)
        if (outwardSpeed > 0) {
          // The constraint impulse is real (outward radial velocity removed by the taut rope).
          // Capture its magnitude only for camera/web feedback; do not add synthetic launch velocity.
          velocity.addScaledVector(radial, -outwardSpeed)
          webCatchKick = Math.max(webCatchKick, clamp(outwardSpeed / 24 + stretch * 0.42, 0, 1.35))
        }
      }

      const tangentialSpeedSq = Math.max(0, velocity.lengthSq() - Math.pow(velocity.dot(radial), 2))
      const centripetal = tangentialSpeedSq / Math.max(web.ropeLength, 0.1)
      const gravityContribution = Math.max(0, -GRAVITY * radial.y)
      web.tension = Math.max(0, centripetal + gravityContribution)
    }

    const physicsStep = (dt: number) => {
      previousPosition.copy(player.position)
      wasGrounded = grounded
      computeMoveInput()

      if (jumpQueued) {
        jumpBuffer = JUMP_BUFFER_TIME
        jumpQueued = false
      } else {
        jumpBuffer = Math.max(0, jumpBuffer - dt)
      }
      coyoteTime = grounded ? COYOTE_TIME : Math.max(0, coyoteTime - dt)

      if (grounded) applyGroundMovement(dt)
      else applyAirMovement(dt)

      if (jumpBuffer > 0 && coyoteTime > 0) {
        velocity.y = JUMP_SPEED
        grounded = false
        coyoteTime = 0
        jumpBuffer = 0
        jumpHoldTimer = JUMP_HOLD_TIME
        jumpCutQueued = false
      }

      // Variable jump height: holding Space gives a fuller arc; releasing early produces a crisp short hop.
      if (jumpCutQueued) {
        if (!grounded && velocity.y > 0 && jumpHoldTimer > 0) velocity.y *= JUMP_CUT_MULTIPLIER
        jumpCutQueued = false
        jumpHoldTimer = 0
      }
      jumpHoldTimer = Math.max(0, jumpHoldTimer - dt)
      const holdingJump = keys.has('Space') && jumpHoldTimer > 0 && velocity.y > 0
      const gravityScale = holdingJump ? JUMP_HOLD_GRAVITY_SCALE : velocity.y < 0 ? FALL_GRAVITY_SCALE : 1
      if (gravityScale === 1) velocity.y -= GRAVITY * dt
      else velocity.y -= GRAVITY * gravityScale * dt
      const impactVelocityY = velocity.y
      if (!grounded && !web.attached) {
        const airDrag = Math.exp(-AIRBORNE_DRAG * dt)
        velocity.x *= airDrag
        velocity.z *= airDrag
      }
      applyDepthTetherLoad(dt)

      // Clamp only extreme numerical runaway. Normal swing momentum is not capped.
      if (velocity.lengthSq() > 90 * 90) velocity.setLength(90)

      // Collision micro-steps are based on actual travel distance, not frame rate. This closes the
      // high-speed tunnelling gap while keeping the main simulation fixed at 120 Hz.
      const travelDistance = velocity.length() * dt
      const collisionSteps = clamp(Math.ceil(travelDistance / COLLISION_MICROSTEP), 1, MAX_COLLISION_MICROSTEPS)
      const collisionDt = dt / collisionSteps
      let finalSubstepGrounded = false

      for (let step = 0; step < collisionSteps; step++) {
        previousPosition.copy(player.position)
        player.position.addScaledVector(velocity, collisionDt)
        let substepGrounded = resolvePlayerContacts(player.position, velocity, buildings, previousPosition)

        // Rope correction and world collision are coupled constraints. Iterating them in each
        // micro-step prevents a taut web from pulling the capsule through the wall it is swinging past.
        for (let solverPass = 0; solverPass < 3; solverPass++) {
          previousPosition.copy(player.position)
          enforceRopeConstraint()
          substepGrounded =
            resolvePlayerContacts(player.position, velocity, buildings, previousPosition) || substepGrounded
        }

        finalSubstepGrounded = substepGrounded
      }

      grounded = finalSubstepGrounded
      webCatchKick = Math.max(0, webCatchKick - WEB_CATCH_DECAY * dt)
      releaseMomentumKick = Math.max(0, releaseMomentumKick - RELEASE_MOMENTUM_DECAY * dt)

      if (!wasGrounded && grounded) landingCompression = clamp(Math.abs(Math.min(0, impactVelocityY)) * 0.018 + 0.18, 0.18, 0.52)
      landingCompression = Math.max(0, landingCompression - dt * 2.8)

      if (
        player.position.y < -12 ||
        Math.abs(player.position.x) > WORLD_LIMIT ||
        Math.abs(player.position.z) > WORLD_LIMIT
      ) {
        resetPlayer()
      }

      const horizontalSpeed = Math.hypot(velocity.x, velocity.z)
      if (web.attached) movementState = 'swinging'
      else if (!grounded && velocity.y > 0.2) movementState = 'jumping'
      else if (!grounded) movementState = 'falling'
      else if (horizontalSpeed > 0.35) movementState = 'moving'
      else movementState = 'idle'
    }

    const updateCamera = (dt: number) => {
      flatForward.set(Math.sin(yaw), 0, -Math.cos(yaw)).normalize()
      cameraRight.crossVectors(flatForward, UP).normalize()
      const speed = velocity.length()

      // Look target follows real motion, but with lower-frequency smoothing. Avoid injecting any
      // periodic shake: rope catches and landings are communicated through framing/FOV instead.
      cameraTarget.copy(player.position).add(temp.set(0, 0.62, 0))
      cameraTarget.y += Math.sin(pitch) * 2.45
      cameraTarget.addScaledVector(flatForward, Math.max(0, Math.sin(pitch)) * 0.62)
      temp2.copy(velocity)
      temp2.y *= web.attached ? 0.56 : 0.46
      const leadSeconds = 0.046 + clamp(speed * 0.00155, 0, 0.064) + releaseMomentumKick * 0.026
      cameraTarget.addScaledVector(temp2, leadSeconds)


      const targetSmoothing = 1 - Math.exp(-dt * (web.attached ? 6.4 : 7.6))
      smoothedTarget.lerp(cameraTarget, targetSmoothing)

      const followDistance = 6.4 + clamp(speed * 0.098, 0, 5.5) + releaseMomentumKick * 0.38
      const shoulder = 0.54 + clamp(speed * 0.0045, 0, 0.2)
      const verticalMomentumPitch = clamp(velocity.y * 0.0062, -0.12, 0.12)
      const anchorPitchBias = web.attached && web.anchor
        ? clamp((web.anchor.y - player.position.y) / 110, -0.075, 0.1)
        : 0
      const orbitPitch = clamp(pitch + verticalMomentumPitch + anchorPitchBias, -1.16, 0.9)
      const boomHorizontalScale = Math.cos(orbitPitch * 0.76)

      cameraBoomForward.copy(flatForward).multiplyScalar(boomHorizontalScale)
      desiredCamera.copy(smoothedTarget)
      desiredCamera.addScaledVector(cameraBoomForward, -followDistance)
      desiredCamera.addScaledVector(cameraRight, shoulder)
      desiredCamera.y += 2.5 - Math.sin(orbitPitch) * followDistance * 0.61
      desiredCamera.y += clamp(-velocity.y * 0.009, -0.26, 0.36)
      desiredCamera.y = Math.max(GROUND_Y + 0.72, desiredCamera.y)

      // Third-person camera collision uses a player-relative boom origin that stays outside building interiors.
      // Smooth the boom offset, not the world-space camera position; then collision-sweep the final
      // candidate every frame. This removes the old lerp-through-wall failure mode entirely.
      temp2.copy(player.position).add(temp.set(0, 0.88, 0))
      temp.copy(desiredCamera).sub(temp2)
      const offsetAlpha = 1 - Math.exp(-dt * (web.attached ? 5.2 : 6.4))
      cameraOffsetSmoothed.lerp(temp, offsetAlpha)
      desiredCamera.copy(temp2).add(cameraOffsetSmoothed)

      temp.copy(desiredCamera).sub(temp2)
      const desiredDistance = temp.length()
      if (desiredDistance > 0.001) {
        let earliestHit = 1
        for (const building of buildings) {
          const hitT = segmentExpandedAabbHit(temp2, desiredCamera, building, CAMERA_COLLISION_RADIUS)
          if (hitT != null && hitT < earliestHit) earliestHit = hitT
        }
        if (earliestHit < 1) {
          const safeDistance = Math.max(0.82, desiredDistance * earliestHit - CAMERA_COLLISION_SKIN)
          desiredCamera.copy(temp2).addScaledVector(temp.divideScalar(desiredDistance), safeDistance)
          // Pull the smoothed boom inward immediately so the next frame does not fight the wall.
          cameraOffsetSmoothed.copy(desiredCamera).sub(temp2)
        }
      }

      desiredCamera.y = Math.max(GROUND_Y + 0.72, desiredCamera.y)
      camera.position.copy(desiredCamera)
      resolveCameraPenetration(camera.position, buildings)
      camera.position.y = Math.max(GROUND_Y + 0.72, camera.position.y)

      // Safety sweep after penetration recovery. The collision origin is the player-relative boom
      // origin rather than the look target, so aiming into a facade cannot start the sweep inside it.
      temp.copy(camera.position).sub(temp2)
      const actualDistance = temp.length()
      if (actualDistance > 0.001) {
        let earliestHit = 1
        for (const building of buildings) {
          const hitT = segmentExpandedAabbHit(temp2, camera.position, building, CAMERA_COLLISION_RADIUS)
          if (hitT != null && hitT < earliestHit) earliestHit = hitT
        }
        if (earliestHit < 1) {
          const safeDistance = Math.max(0.8, actualDistance * earliestHit - CAMERA_COLLISION_SKIN)
          camera.position.copy(temp2).addScaledVector(temp.divideScalar(actualDistance), safeDistance)
          cameraOffsetSmoothed.copy(camera.position).sub(temp2)
        }
      }
      camera.position.y = Math.max(GROUND_Y + 0.72, camera.position.y)
      camera.lookAt(smoothedTarget)

      const lateralSpeed = velocity.dot(cameraRight)
      const rollTarget = web.attached
        ? clamp(-lateralSpeed * 0.0021, -0.026, 0.026)
        : clamp(-lateralSpeed * 0.0007, -0.008, 0.008)
      cameraRoll = damp(cameraRoll, rollTarget, 4.5, dt)
      camera.rotateZ(cameraRoll)

      const targetFov = 66 + clamp((speed - 6) * 0.3, 0, 16) + webCatchKick * 1.1 + releaseMomentumKick * 2.4
      camera.fov = damp(camera.fov, targetFov, web.attached ? 5.2 : 6.2, dt)
      camera.updateProjectionMatrix()
    }

    const animatePlayer = (t: number, dt: number) => {
      const horizontalSpeed = Math.hypot(velocity.x, velocity.z)
      const speed = velocity.length()
      const stride = clamp(horizontalSpeed / 12, 0, 1)
      let face = rig.visual.rotation.y

      if (horizontalSpeed > 0.15) face = Math.atan2(velocity.x, -velocity.z)
      rig.visual.rotation.y = damp(rig.visual.rotation.y, face, web.attached ? 7 : 12, dt)

      const pitchTarget = !grounded ? clamp(-velocity.y * 0.018, -0.34, 0.4) : 0
      rig.visual.rotation.x = damp(rig.visual.rotation.x, pitchTarget, 7, dt)
      const localSide = Math.sin(face) * velocity.z + Math.cos(face) * velocity.x
      const bankTarget = web.attached ? clamp(-localSide * 0.018, -0.42, 0.42) : 0
      rig.visual.rotation.z = damp(rig.visual.rotation.z, bankTarget, 7, dt)

      if (web.attached && web.anchor) {
        const arc = Math.sin(t * 4.8)
        rig.arms[0].rotation.x = damp(rig.arms[0].rotation.x, -1.48, 13, dt)
        rig.arms[0].rotation.z = damp(rig.arms[0].rotation.z, -0.22, 12, dt)
        rig.arms[1].rotation.x = damp(rig.arms[1].rotation.x, -0.88 + arc * 0.1, 11, dt)
        rig.arms[1].rotation.z = damp(rig.arms[1].rotation.z, 0.48, 11, dt)
        rig.legs[0].rotation.x = damp(rig.legs[0].rotation.x, 0.48 + arc * 0.2, 9, dt)
        rig.legs[1].rotation.x = damp(rig.legs[1].rotation.x, -0.62 - arc * 0.15, 9, dt)
        rig.legs[0].rotation.z = damp(rig.legs[0].rotation.z, -0.12, 8, dt)
        rig.legs[1].rotation.z = damp(rig.legs[1].rotation.z, 0.12, 8, dt)
      } else if (grounded && horizontalSpeed > 0.5) {
        const cycle = Math.sin(t * (8.5 + stride * 4.5))
        rig.arms[0].rotation.x = damp(rig.arms[0].rotation.x, cycle * 0.82 * stride, 17, dt)
        rig.arms[1].rotation.x = damp(rig.arms[1].rotation.x, -cycle * 0.82 * stride, 17, dt)
        rig.legs[0].rotation.x = damp(rig.legs[0].rotation.x, -cycle * 0.88 * stride, 17, dt)
        rig.legs[1].rotation.x = damp(rig.legs[1].rotation.x, cycle * 0.88 * stride, 17, dt)
        rig.arms[0].rotation.z = damp(rig.arms[0].rotation.z, -0.1, 10, dt)
        rig.arms[1].rotation.z = damp(rig.arms[1].rotation.z, 0.1, 10, dt)
      } else if (!grounded) {
        const rising = velocity.y > 0
        rig.arms[0].rotation.x = damp(rig.arms[0].rotation.x, rising ? -0.7 : -0.28, 9, dt)
        rig.arms[1].rotation.x = damp(rig.arms[1].rotation.x, rising ? 0.65 : 0.34, 9, dt)
        rig.legs[0].rotation.x = damp(rig.legs[0].rotation.x, rising ? 0.42 : 0.22, 9, dt)
        rig.legs[1].rotation.x = damp(rig.legs[1].rotation.x, rising ? -0.36 : -0.18, 9, dt)
      } else {
        rig.arms[0].rotation.x = damp(rig.arms[0].rotation.x, 0, 12, dt)
        rig.arms[1].rotation.x = damp(rig.arms[1].rotation.x, 0, 12, dt)
        rig.legs[0].rotation.x = damp(rig.legs[0].rotation.x, 0, 12, dt)
        rig.legs[1].rotation.x = damp(rig.legs[1].rotation.x, 0, 12, dt)
      }

      if (!web.attached) {
        rig.legs[0].rotation.z = damp(rig.legs[0].rotation.z, 0, 10, dt)
        rig.legs[1].rotation.z = damp(rig.legs[1].rotation.z, 0, 10, dt)
      }

      const squash = landingCompression
      rig.torso.scale.y = damp(rig.torso.scale.y, 1 - squash * 0.17, 12, dt)
      rig.head.position.y = damp(rig.head.position.y, 0.8 - squash * 0.08, 12, dt)
      rig.scarf.rotation.x = damp(rig.scarf.rotation.x, -0.18 + clamp(speed * 0.018, 0, 0.7), 7, dt)
      rig.scarf.scale.z = damp(rig.scarf.scale.z, 1 + clamp(speed * 0.012, 0, 0.45), 6, dt)
    }

    const updateTargeting = () => {
      const hit = getAim()
      web.targetValid = Boolean(hit)
      web.targetPoint = hit?.point ?? null
      web.targetObjectId = hit?.id ?? null
      web.targetNormal = hit?.normal ?? null

      if (hit && !web.attached) {
        targetRing.visible = true
        targetDot.visible = true
        surfaceNormal.copy(hit.normal)
        targetRing.position.copy(hit.point).addScaledVector(surfaceNormal, 0.035)
        targetDot.position.copy(targetRing.position)
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), surfaceNormal)
        targetRing.quaternion.copy(q)
        targetDot.quaternion.copy(q)
        const pulse = 1 + Math.sin(elapsedTime * 10.5) * 0.16
        targetRing.scale.setScalar(pulse)
      } else {
        targetRing.visible = false
        targetDot.visible = false
      }

      if (mouseHeld && !web.attached && hit) attachWeb()
    }

    const updateWebVisual = () => {
      if (!web.attached || !web.anchor) {
        webLine.visible = false
        webGlow.visible = false
        webTube.visible = false
        webPulse.visible = false
        return
      }
      getWebStart(webStart)
      const ropeVector = temp2.copy(web.anchor).sub(webStart)
      const ropeDistance = Math.max(0.001, ropeVector.length())
      const ropeDirection = ropeVector.clone().divideScalar(ropeDistance)
      webCurveSide.crossVectors(ropeDirection, UP)
      if (webCurveSide.lengthSq() < 0.001) webCurveSide.set(1, 0, 0)
      else webCurveSide.normalize()
      webCurveUp.crossVectors(webCurveSide, ropeDirection).normalize()
      const tautness = web.ropeLength == null ? 1 : clamp(1 - Math.max(0, web.ropeLength - ropeDistance) / 3.2, 0, 1)
      const vibration = clamp(webCatchKick * 0.07 + web.tension / 900, 0, 0.14)
      const sag = (1 - tautness) * Math.min(1.35, ropeDistance * 0.018)

      for (const geometry of [webGeometry, webGlowGeometry]) {
        const attr = geometry.getAttribute('position') as THREE.BufferAttribute
        for (let i = 0; i <= WEB_VISUAL_SEGMENTS; i++) {
          const u = i / WEB_VISUAL_SEGMENTS
          webCurvePoint.lerpVectors(webStart, web.anchor, u)
          const envelope = Math.sin(Math.PI * u)
          webCurvePoint.addScaledVector(webCurveUp, -sag * envelope)
          webCurvePoint.addScaledVector(webCurveSide, Math.sin(elapsedTime * 38 - u * 11) * vibration * envelope)
          attr.setXYZ(i, webCurvePoint.x, webCurvePoint.y, webCurvePoint.z)
        }
        attr.needsUpdate = true
        geometry.computeBoundingSphere()
      }
      webLine.visible = true
      webGlow.visible = true
      const tensionGlow = clamp(web.tension / 38 + webCatchKick * 0.42, 0, 1)
      webMaterial.opacity = 0.82 + tensionGlow * 0.18
      webGlowMaterial.opacity = 0.18 + tensionGlow * 0.3

      temp2.copy(web.anchor).sub(webStart)
      const tubeLength = temp2.length()
      if (tubeLength > 0.001) {
        webTube.visible = true
        webTube.position.copy(webStart).add(web.anchor).multiplyScalar(0.5)
        webTube.scale.set(1 + tensionGlow * 0.82 + webCatchKick * 0.28, tubeLength, 1 + tensionGlow * 0.82 + webCatchKick * 0.28)
        webTube.quaternion.setFromUnitVectors(UP, temp2.normalize())
        ;(webTube.material as THREE.MeshBasicMaterial).opacity = 0.34 + tensionGlow * 0.44

        webPulse.visible = true
        const pulseT = (elapsedTime * (0.86 + tensionGlow * 1.05 + webCatchKick * 0.9)) % 1
        webPulse.position.lerpVectors(webStart, web.anchor, pulseT)
        webPulse.scale.setScalar(0.72 + tensionGlow * 0.72 + webCatchKick * 0.3)

        webAnchorBurst.visible = true
        webAnchorBurst.position.copy(web.anchor)
        const anchorPulse = 1 + Math.sin(elapsedTime * (10 + tensionGlow * 12)) * 0.12
        webAnchorBurst.scale.setScalar(anchorPulse * (0.82 + tensionGlow * 1.25 + webCatchKick * 0.9))
        ;(webAnchorBurst.material as THREE.MeshBasicMaterial).opacity = clamp(0.12 + tensionGlow * 0.34 + webCatchKick * 0.42, 0.12, 0.84)
      }
    }

    const publicGameState = (): GamePublicState => ({
      ready,
      running: running && performance.now() - lastFrameAt < 300,
      elapsedTime,
      renderer: 'webgl',
      viewport: { width: canvas.clientWidth, height: canvas.clientHeight },
    })

    const publicPlayerState = (): PlayerPublicState => ({
      position: copyVec(player.position),
      velocity: copyVec(velocity),
      grounded,
      movementState,
      collider: { radius: PLAYER_RADIUS, height: PLAYER_HEIGHT },
    })

    const publicCameraState = (): CameraPublicState => {
      const direction = new THREE.Vector3()
      camera.getWorldDirection(direction)
      const renderYaw = Math.atan2(direction.x, -direction.z)
      const renderPitch = Math.asin(clamp(direction.y, -1, 1))
      return {
        mode: 'third-person',
        position: copyVec(camera.position),
        target: copyVec(smoothedTarget),
        yaw: renderYaw,
        pitch: renderPitch,
      }
    }

    const publicWebState = (): WebPublicState => {
      const endpoint = web.attached ? getWebStart(temp) : null
      return {
        attached: web.attached,
        targetValid: web.targetValid,
        anchor: web.anchor ? copyVec(web.anchor) : null,
        anchorObjectId: web.anchorObjectId,
        ropeLength: web.ropeLength,
        distanceToAnchor: web.attached && web.anchor ? player.position.distanceTo(web.anchor) : null,
        lineVisible: webLine.visible,
        playerEndpoint: endpoint ? copyVec(endpoint) : null,
        anchorEndpoint: web.anchor ? copyVec(web.anchor) : null,
      }
    }

    const publicWorldState = (): WorldPublicState => ({
      groundY: GROUND_Y,
      buildings: buildings.map((b) => ({ id: b.id, min: { ...b.min }, max: { ...b.max } })),
    })

    window.__game = Object.freeze({ getState: publicGameState })
    window.__player = Object.freeze({ getState: publicPlayerState })
    window.__camera = Object.freeze({ getState: publicCameraState })
    window.__web = Object.freeze({ getState: publicWebState })
    window.__world = Object.freeze({ getState: publicWorldState })

    const clearInput = () => {
      keys.clear()
      mouseHeld = false
      jumpQueued = false
      jumpCutQueued = false
      jumpHoldTimer = 0
      detachWeb()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'KeyR' && !e.repeat) {
        resetPlayer()
        return
      }
      if (!inputActive) return
      if (['Space', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault()
      keys.add(e.code)
      if (e.code === 'Space' && !e.repeat) jumpQueued = true
    }

    const onKeyUp = (e: KeyboardEvent) => {
      keys.delete(e.code)
      if (e.code === 'Space') jumpCutQueued = true
    }

    const onMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement !== canvas) return
      // Horizontal look remains quicker for traversal while vertical aim stays controlled for web targeting.
      // A tiny high-speed sensitivity taper prevents overshooting narrow building faces without auto-aim.
      const speedTaper = clamp(1 - Math.max(0, velocity.length() - 30) / 180, 0.82, 1)
      yaw -= e.movementX * 0.00245 * speedTaper
      pitch -= e.movementY * 0.00216 * speedTaper
      pitch = clamp(pitch, -1.16, 0.9)
    }

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0 || document.pointerLockElement !== canvas) return
      mouseHeld = true
      attachWeb()
    }

    const onMouseUp = (e: MouseEvent) => {
      if (e.button !== 0) return
      mouseHeld = false
      detachWeb()
    }

    const onLockChange = () => {
      const locked = document.pointerLockElement === canvas
      inputActive = locked
      if (!locked) clearInput()
      onPointerLock(locked)
    }

    const onVisibility = () => {
      if (document.visibilityState !== 'visible') clearInput()
    }

    const onContextMenu = (e: MouseEvent) => e.preventDefault()

    window.addEventListener('resize', resize)
    window.addEventListener('keydown', onKeyDown, { passive: false })
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('blur', clearInput)
    document.addEventListener('pointerlockchange', onLockChange)
    document.addEventListener('visibilitychange', onVisibility)
    canvas.addEventListener('contextmenu', onContextMenu)

    controlsRef.current = {
      lock: () => {
        if (document.pointerLockElement !== canvas) {
          void canvas.requestPointerLock().catch(() => {})
        }
      },
      setNight,
      reset: resetPlayer,
    }

    smoothedTarget.copy(player.position).add(temp.set(0, 0.5, 0))
    updateCamera(1 / 60)
    updateTargeting()
    updateWebVisual()
    renderer.render(scene, camera)
    ready = true

    const frame = (now: number) => {
      const frameDt = Math.min(0.045, Math.max(0, (now - previousTime) / 1000))
      previousTime = now
      elapsedTime += frameDt
      accumulator += frameDt
      running = true
      lastFrameAt = now

      while (accumulator >= FIXED_DT) {
        if (inputActive) physicsStep(FIXED_DT)
        accumulator -= FIXED_DT
      }

      updateCamera(frameDt)
      updateTargeting()
      updateWebVisual()
      animatePlayer(elapsedTime, frameDt)
      atmosphere.hazeField.rotation.y = elapsedTime * 0.006
      atmosphere.hazeField.position.y = Math.sin(elapsedTime * 0.12) * 0.5
      renderer.render(scene, camera)

      if (now - lastHud > 66) {
        lastHud = now
        onHud({
          speed: velocity.length(),
          altitude: Math.max(0, player.position.y - PLAYER_HALF - GROUND_Y),
          verticalSpeed: velocity.y,
          compass: compassFromYaw(yaw),
          heading: headingFromYaw(yaw),
          attached: web.attached,
          targetValid: web.targetValid,
          movementState,
          ropeLength: web.ropeLength,
          ropeDistance: web.attached && web.anchor ? player.position.distanceTo(web.anchor) : null,
          webTension: web.tension,
          running,
          playerX: player.position.x,
          playerZ: player.position.z,
          anchorX: web.anchor?.x ?? null,
          anchorZ: web.anchor?.z ?? null,
        })
      }

      frameHandle = requestAnimationFrame(frame)
    }
    frameHandle = requestAnimationFrame(frame)

    return () => {
      ready = false
      running = false
      cancelAnimationFrame(frameHandle)
      window.removeEventListener('resize', resize)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('blur', clearInput)
      document.removeEventListener('pointerlockchange', onLockChange)
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('contextmenu', onContextMenu)
      controlsRef.current = null
      if (document.pointerLockElement === canvas) document.exitPointerLock()

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Points) {
          obj.geometry?.dispose()
          const material = obj.material
          const mats = Array.isArray(material) ? material : [material]
          mats.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              mat.map?.dispose()
              mat.emissiveMap?.dispose()
            }
            mat.dispose()
          })
        }
      })
      renderer.dispose()
    }
  }, [onHud, onPointerLock])

  return <canvas ref={canvasRef} data-testid="game-canvas" className="block h-full w-full outline-none" />
})
