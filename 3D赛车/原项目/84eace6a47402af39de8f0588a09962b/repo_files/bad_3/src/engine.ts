import * as THREE from 'three'
import type {
  CameraSnapshot,
  MapDefinition,
  RaceSnapshot,
  SceneSnapshot,
  Vec3State,
  VehicleRuntime,
  VehicleSnapshot,
  VehicleStats,
  WheelSnapshot,
} from './types'
import { appliedStats } from './data'

const ZERO: Vec3State = { x: 0, y: 0, z: 0 }
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
const damp = (current: number, target: number, lambda: number, dt: number) => THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt))
const vec = (v: THREE.Vector3): Vec3State => ({ x: v.x, y: v.y, z: v.z })

export function terrainHeight(mapId: string, x: number, z: number): number {
  if (mapId === 'red-ridge') {
    const rolling = 1.55 * Math.sin(x * 0.075) + 1.15 * Math.cos(z * 0.095)
    const cross = 1.05 * Math.sin((x + z) * 0.062) + 0.6 * Math.cos((x - z) * 0.11)
    const ridgeA = 2.35 * Math.exp(-Math.pow((z - 10 - x * 0.16) / 11, 2))
    const wash = -1.8 * Math.exp(-Math.pow((x + 15) / 19, 2) - Math.pow((z - 24) / 32, 2))
    return clamp(rolling + cross + ridgeA + wash, -4.5, 8.5)
  }
  const rolling = 1.25 * Math.sin(x * 0.09) + 1.05 * Math.cos(z * 0.073)
  const roots = 0.72 * Math.sin((x * 0.18) + (z * 0.11)) + 0.42 * Math.cos((x - z) * 0.16)
  const berm = 1.9 * Math.exp(-Math.pow((x + 22) / 17, 2) - Math.pow((z - 12) / 38, 2))
  const creek = -1.55 * Math.exp(-Math.pow((x - 5 + z * 0.22) / 9, 2))
  return clamp(rolling + roots + berm + creek, -3.5, 7.5)
}

export function surfaceAt(mapId: string, x: number, z: number): string {
  if (mapId === 'red-ridge') {
    if (z < -18 && x < 24) return 'sand'
    if (Math.sin(x * 0.12) + Math.cos(z * 0.1) > 1.05) return 'rock'
    return 'gravel'
  }
  if (Math.abs(x - 5 + z * 0.22) < 10) return 'mud'
  if (x > 25 || z > 35) return 'grass'
  return 'dirt'
}

function surfaceGrip(surface: string): number {
  if (surface === 'mud') return 0.67
  if (surface === 'sand') return 0.75
  if (surface === 'grass') return 0.86
  if (surface === 'rock') return 1.1
  if (surface === 'dirt') return 0.95
  return 0.99
}

function surfaceDrag(surface: string): number {
  if (surface === 'mud') return 0.115
  if (surface === 'sand') return 0.092
  if (surface === 'grass') return 0.052
  if (surface === 'rock') return 0.024
  return 0.034
}

export type RaceHudSnapshot = {
  elapsed: number
  speed: number
  checkpointIndex: number
  surface: string
  throttle: number
  brake: number
  steering: number
  grip: number
  slip: number
  x: number
  z: number
  heading: number
  suspensionLoad: number
}

export type EngineCallbacks = {
  onRunning: () => void
  onHud: (hud: RaceHudSnapshot) => void
  onFinish: (finalTime: number, reward: number) => void
}

type WheelRig = {
  id: string
  node: THREE.Group
  tire: THREE.Mesh
  strut: THREE.Mesh
  x: number
  z: number
  steerable: boolean
  contact: THREE.Vector3 | null
  grounded: boolean
  compression: number
  compressionVelocity: number
  travel: number
  spin: number
}

type DustParticle = {
  mesh: THREE.Mesh
  velocity: THREE.Vector3
  age: number
  life: number
}

let bad3RaceSessionCount = 0

export class OffroadEngine {
  private mount: HTMLElement
  private raceId: string
  private vehicle: VehicleRuntime
  private map: MapDefinition
  private stats: VehicleStats
  private callbacks: EngineCallbacks
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(55, 1, 0.1, 520)
  private worldGroup = new THREE.Group()
  private vehicleGroup = new THREE.Group()
  private chassisPivot = new THREE.Group()
  private wheels: WheelRig[] = []
  private dust: DustParticle[] = []
  private keys = new Set<string>()
  private raf = 0
  private disposed = false
  private previousTime = performance.now()
  private startAt = 0
  private loadingUntil = performance.now() + 760
  private phase: RaceSnapshot['phase'] = 'loading'
  private elapsedTime = 0
  private finalTime: number | null = null
  private currentCheckpointIndex = 0
  private passedCheckpointIds: string[] = []
  private reward = 0
  private rewardGranted = false
  private renderFrame = 0
  private speed = 0
  private lateralSpeed = 0
  private yawRate = 0
  private heading = 0
  private throttle = 0
  private brake = 0
  private steering = 0
  private chassisPitch = 0
  private chassisRoll = 0
  private bodyVerticalVelocity = 0
  private suspensionLoad = 0
  private surfaceType = 'gravel'
  private slipAmount = 0
  private collision = { active: false, objectId: null as string | null, timer: 0 }
  private hudAccumulator = 0
  private cameraTarget = new THREE.Vector3()
  private cameraForward = new THREE.Vector3(0, 0, -1)
  private cameraShake = 0
  private dustTimer = 0
  private vehicleRadius = 1.55
  private worldObjectCount = 0
  private terrainBounds = { minHeight: Infinity, maxHeight: -Infinity }
  private gateGroups = new Map<string, THREE.Group>()
  private bodyMaterial!: THREE.MeshStandardMaterial
  private tailLightMaterial!: THREE.MeshStandardMaterial

  constructor(mount: HTMLElement, raceId: string, vehicle: VehicleRuntime, map: MapDefinition, callbacks: EngineCallbacks) {
    this.mount = mount
    this.raceId = raceId
    this.vehicle = vehicle
    this.map = map
    this.stats = appliedStats(vehicle)
    this.callbacks = callbacks

    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 0.6))
    this.renderer.shadowMap.enabled = false
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = map.id === 'red-ridge' ? 1.13 : 1.02
    this.renderer.domElement.dataset.testid = 'game-canvas'
    this.renderer.domElement.setAttribute('aria-label', '3D offroad race canvas')
    this.mount.appendChild(this.renderer.domElement)

    this.scene.background = new THREE.Color(map.id === 'red-ridge' ? '#251b15' : '#07120e')
    this.scene.fog = new THREE.FogExp2(map.id === 'red-ridge' ? '#4a3325' : '#10231b', map.id === 'red-ridge' ? 0.0071 : 0.0092)
    this.scene.add(this.worldGroup)
    this.setupAtmosphere()
    this.setupLights()
    this.buildWorld()
    this.buildVehicle()
    this.buildDustPool()
    this.resetVehicle()
    bad3RaceSessionCount += 1
    if (bad3RaceSessionCount > 1) {
      // BAD_3: a short-lived contact flag leaks from the previous race session.
      this.collision = { active: true, objectId: 'carryover-contact', timer: 2.4 }
    }
    this.resize()

    window.addEventListener('resize', this.resize)
    window.addEventListener('keydown', this.onKeyDown, { passive: false })
    window.addEventListener('keyup', this.onKeyUp, { passive: false })
    this.raf = requestAnimationFrame(this.animate)
  }

  private setupAtmosphere() {
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(260, 16, 8),
      new THREE.MeshBasicMaterial({ color: this.map.id === 'red-ridge' ? '#75462c' : '#15382b', side: THREE.BackSide, fog: false }),
    )
    sky.name = 'sky-dome'
    this.scene.add(sky)

    const haze = new THREE.Mesh(
      new THREE.CylinderGeometry(170, 170, 48, 40, 1, true),
      new THREE.MeshBasicMaterial({ color: this.map.id === 'red-ridge' ? '#b86d3f' : '#315f49', transparent: true, opacity: 0.12, side: THREE.BackSide, depthWrite: false, fog: false }),
    )
    haze.position.y = 12
    this.scene.add(haze)

    const sun = new THREE.Mesh(
      new THREE.CircleGeometry(this.map.id === 'red-ridge' ? 12 : 8, 36),
      new THREE.MeshBasicMaterial({ color: this.map.id === 'red-ridge' ? '#ffd08b' : '#d6f2d7', fog: false, depthWrite: false }),
    )
    sun.position.set(-86, 58, -145)
    sun.lookAt(0, 18, 0)
    this.scene.add(sun)
  }

  private setupLights() {
    const hemi = new THREE.HemisphereLight(
      this.map.id === 'red-ridge' ? '#ffe3c0' : '#c9e5dc',
      this.map.id === 'red-ridge' ? '#43261c' : '#15251a',
      this.map.id === 'red-ridge' ? 2.25 : 1.8,
    )
    this.scene.add(hemi)

    const sun = new THREE.DirectionalLight(this.map.id === 'red-ridge' ? '#ffe0b3' : '#e4f1de', this.map.id === 'red-ridge' ? 4.3 : 3.1)
    sun.position.set(-44, 62, -28)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.left = -92
    sun.shadow.camera.right = 92
    sun.shadow.camera.top = 92
    sun.shadow.camera.bottom = -92
    sun.shadow.camera.near = 1
    sun.shadow.camera.far = 175
    sun.shadow.bias = -0.00035
    this.scene.add(sun)
  }

  private tagMapObject(object: THREE.Object3D) {
    object.userData.mapObject = true
    this.worldObjectCount += 1
  }

  private buildWorld() {
    this.buildTerrain()
    this.addTrackRibbon()
    this.addDeclaredObstacles()
    this.addRouteInfrastructure()
    this.addScenery()
  }

  private buildTerrain() {
    const segments = 28
    const terrainGeo = new THREE.PlaneGeometry(190, 190, segments, segments)
    terrainGeo.rotateX(-Math.PI / 2)
    const pos = terrainGeo.attributes.position as THREE.BufferAttribute
    const colors: number[] = []
    const color = new THREE.Color()

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      const h = terrainHeight(this.map.id, x, z)
      this.terrainBounds.minHeight = Math.min(this.terrainBounds.minHeight, h)
      this.terrainBounds.maxHeight = Math.max(this.terrainBounds.maxHeight, h)
      pos.setY(i, h)
      const surface = surfaceAt(this.map.id, x, z)
      if (this.map.id === 'red-ridge') {
        if (surface === 'sand') color.set('#8d6241')
        else if (surface === 'rock') color.set('#6b6258')
        else color.set('#724a33')
      } else {
        if (surface === 'mud') color.set('#2b3229')
        else if (surface === 'grass') color.set('#365440')
        else color.set('#454b38')
      }
      const micro = 0.96 + Math.sin(x * 1.71 + z * 1.13) * 0.025
      const shade = clamp((0.76 + h * 0.026) * micro, 0.64, 1.08)
      colors.push(color.r * shade, color.g * shade, color.b * shade)
    }

    terrainGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    terrainGeo.computeVertexNormals()
    const terrain = new THREE.Mesh(terrainGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 }))
    terrain.receiveShadow = true
    terrain.name = 'terrain'
    this.tagMapObject(terrain)
    this.worldGroup.add(terrain)
  }

  private routePoints() {
    return [this.map.spawn.position, ...this.map.checkpoints.map(c => c.position), this.map.finish.position]
  }

  private buildRibbonGeometry(width: number, offset: number, yOffset: number) {
    const vertices: number[] = []
    const indices: number[] = []
    const points = this.routePoints()
    let pairIndex = 0

    for (let segment = 0; segment < points.length - 1; segment++) {
      const a = points[segment]
      const b = points[segment + 1]
      const dx = b.x - a.x
      const dz = b.z - a.z
      const len = Math.max(1, Math.hypot(dx, dz))
      const steps = Math.max(4, Math.ceil(len / 3.1))
      const tx = dx / len
      const tz = dz / len
      const px = -tz
      const pz = tx

      for (let i = segment === 0 ? 0 : 1; i <= steps; i++) {
        const t = i / steps
        const centerX = THREE.MathUtils.lerp(a.x, b.x, t) + px * offset
        const centerZ = THREE.MathUtils.lerp(a.z, b.z, t) + pz * offset
        const lx = centerX + px * width * 0.5
        const lz = centerZ + pz * width * 0.5
        const rx = centerX - px * width * 0.5
        const rz = centerZ - pz * width * 0.5
        vertices.push(lx, terrainHeight(this.map.id, lx, lz) + yOffset, lz)
        vertices.push(rx, terrainHeight(this.map.id, rx, rz) + yOffset, rz)
        if (pairIndex > 0) {
          const base = pairIndex * 2
          indices.push(base - 2, base - 1, base, base - 1, base + 1, base)
        }
        pairIndex += 1
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geo.setIndex(indices)
    geo.computeVertexNormals()
    return geo
  }

  private addTrackRibbon() {
    const trail = new THREE.Mesh(
      this.buildRibbonGeometry(6.8, 0, 0.035),
      new THREE.MeshStandardMaterial({
        color: this.map.id === 'red-ridge' ? '#4d3426' : '#242c24',
        roughness: 1,
        transparent: true,
        opacity: 0.68,
        depthWrite: false,
      }),
    )
    trail.receiveShadow = true
    trail.name = 'route-surface'
    this.tagMapObject(trail)
    this.worldGroup.add(trail)

    const rutMat = new THREE.MeshBasicMaterial({ color: this.map.id === 'red-ridge' ? '#2b2019' : '#131a15', transparent: true, opacity: 0.36, depthWrite: false })
    for (const offset of [-1.3, 1.3]) {
      const rut = new THREE.Mesh(this.buildRibbonGeometry(0.22, offset, 0.055), rutMat)
      rut.name = `tire-rut-${offset}`
      this.tagMapObject(rut)
      this.worldGroup.add(rut)
    }
  }

  private addDeclaredObstacles() {
    this.map.obstacles.forEach((obs, index) => {
      const y = terrainHeight(this.map.id, obs.position.x, obs.position.z)
      const material = new THREE.MeshStandardMaterial({
        color: obs.kind === 'rock' ? (this.map.id === 'red-ridge' ? '#5a4d44' : '#465149') : '#5b3722',
        roughness: 0.94,
      })
      const geometry = obs.kind === 'rock'
        ? new THREE.DodecahedronGeometry(obs.radius, 1)
        : new THREE.CylinderGeometry(obs.radius * 0.68, obs.radius, obs.radius * 1.72, 9)
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(obs.position.x, y + (obs.kind === 'rock' ? obs.radius * 0.72 : obs.radius * 0.75), obs.position.z)
      mesh.rotation.set(index * 0.27, index * 0.61, index * 0.13)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.name = obs.id
      mesh.userData.obstacleId = obs.id
      this.tagMapObject(mesh)
      this.worldGroup.add(mesh)

      if (obs.kind === 'stump') {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(obs.radius * 0.54, 0.09, 6, 18), new THREE.MeshStandardMaterial({ color: '#8b6a45', roughness: 0.9 }))
        ring.position.set(obs.position.x, y + obs.radius * 1.55, obs.position.z)
        ring.rotation.x = Math.PI / 2
        ring.castShadow = true
        this.tagMapObject(ring)
        this.worldGroup.add(ring)
      }
    })
  }

  private addRouteInfrastructure() {
    const points = this.routePoints()
    for (let i = 1; i < points.length; i++) {
      const p = points[i]
      const prev = points[Math.max(0, i - 1)]
      const next = points[Math.min(points.length - 1, i + 1)]
      const angle = Math.atan2(next.x - prev.x, next.z - prev.z)
      if (i === points.length - 1) this.addGate(p.x, p.z, 'finish', true, angle)
      else this.addGate(p.x, p.z, this.map.checkpoints[i - 1].id, false, angle)
    }
    this.addRouteMarkers()
  }

  private addGate(x: number, z: number, id: string, finish: boolean, angle: number) {
    const ground = terrainHeight(this.map.id, x, z)
    const group = new THREE.Group()
    group.position.set(x, ground, z)
    group.rotation.y = angle
    group.name = id
    group.userData.finish = finish

    const mat = new THREE.MeshStandardMaterial({
      color: finish ? '#efff78' : '#dfe8dc',
      emissive: finish ? '#637312' : '#163727',
      emissiveIntensity: finish ? 1.05 : 0.34,
      roughness: 0.48,
      metalness: 0.28,
    })
    const postGeo = new THREE.CylinderGeometry(0.16, 0.21, 4.8, 10)
    const topGeo = new THREE.BoxGeometry(7.6, 0.3, 0.32)
    const left = new THREE.Mesh(postGeo, mat)
    const right = new THREE.Mesh(postGeo, mat)
    const top = new THREE.Mesh(topGeo, mat)
    left.position.set(-3.62, 2.35, 0)
    right.position.set(3.62, 2.35, 0)
    top.position.set(0, 4.62, 0)
    group.add(left, right, top)

    for (const sx of [-3.62, 3.62]) {
      const flag = new THREE.Mesh(
        new THREE.PlaneGeometry(0.9, 0.48),
        new THREE.MeshBasicMaterial({ color: finish ? '#dfff43' : this.map.accent, side: THREE.DoubleSide }),
      )
      flag.position.set(sx, 4.05, 0.2)
      group.add(flag)
    }

    const beacon = new THREE.PointLight(finish ? '#eaff50' : '#75ffbc', finish ? 9 : 4.3, 15, 2)
    beacon.position.y = 3.7
    group.add(beacon)
    group.userData.material = mat
    group.userData.beacon = beacon
    group.traverse(o => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = true })
    this.tagMapObject(group)
    this.worldGroup.add(group)
    this.gateGroups.set(id, group)
  }

  private addRouteMarkers() {
    const points = this.routePoints()
    const markerMat = new THREE.MeshStandardMaterial({ color: this.map.accent, emissive: this.map.accent, emissiveIntensity: 0.33, roughness: 0.62 })
    const markerGeo = new THREE.BoxGeometry(0.18, 0.55, 0.7)

    for (let p = 0; p < points.length - 1; p++) {
      const a = points[p]
      const b = points[p + 1]
      const dx = b.x - a.x
      const dz = b.z - a.z
      const angle = Math.atan2(dx, dz)
      const len = Math.hypot(dx, dz)
      const steps = Math.max(3, Math.floor(len / 9))
      for (let i = 1; i < steps; i++) {
        const t = i / steps
        const x = THREE.MathUtils.lerp(a.x, b.x, t)
        const z = THREE.MathUtils.lerp(a.z, b.z, t)
        const y = terrainHeight(this.map.id, x, z)
        const side = i % 2 === 0 ? 1 : -1
        const px = Math.cos(angle) * 3.45 * side
        const pz = -Math.sin(angle) * 3.45 * side
        const m = new THREE.Mesh(markerGeo, markerMat)
        m.position.set(x + px, y + 0.28, z + pz)
        m.rotation.y = angle
        m.castShadow = true
        this.tagMapObject(m)
        this.worldGroup.add(m)
      }
    }
  }

  private addScenery() {
    const seedOffset = this.map.id === 'red-ridge' ? 0.37 : 1.83
    const count = this.map.id === 'red-ridge' ? 14 : 18
    for (let i = 0; i < count; i++) {
      const angle = i * 2.399 + seedOffset
      const radius = 55 + (i % 10) * 4.25
      const x = Math.cos(angle) * radius + Math.sin(i * 4.17) * 4
      const z = Math.sin(angle) * radius + Math.cos(i * 3.31) * 4
      const y = terrainHeight(this.map.id, x, z)

      if (this.map.id === 'red-ridge') {
        if (i % 5 === 0) {
          const rock = new THREE.Mesh(
            new THREE.DodecahedronGeometry(0.8 + (i % 3) * 0.24, 0),
            new THREE.MeshStandardMaterial({ color: '#73513d', roughness: 1 }),
          )
          rock.position.set(x, y + 0.55, z)
          rock.rotation.set(i * 0.21, angle, i * 0.12)
          rock.castShadow = true
          this.tagMapObject(rock)
          this.worldGroup.add(rock)
        } else {
          const mesa = new THREE.Mesh(
            new THREE.CylinderGeometry(1.2 + (i % 3) * 0.35, 2.2 + (i % 4) * 0.45, 4 + (i % 5), 7),
            new THREE.MeshStandardMaterial({ color: i % 2 ? '#684936' : '#81593f', roughness: 1 }),
          )
          mesa.position.set(x, y + 2.3, z)
          mesa.rotation.y = angle
          mesa.castShadow = true
          this.tagMapObject(mesa)
          this.worldGroup.add(mesa)
        }
      } else {
        const tree = new THREE.Group()
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.38, 3.6, 7), new THREE.MeshStandardMaterial({ color: '#493423', roughness: 1 }))
        const crown1 = new THREE.Mesh(new THREE.ConeGeometry(1.75, 4.7, 8), new THREE.MeshStandardMaterial({ color: '#173a2c', roughness: 1 }))
        const crown2 = new THREE.Mesh(new THREE.ConeGeometry(1.3, 3.7, 8), new THREE.MeshStandardMaterial({ color: '#1f4936', roughness: 1 }))
        trunk.position.y = 1.8
        crown1.position.y = 4.4
        crown2.position.y = 6.1
        tree.add(trunk, crown1, crown2)
        tree.position.set(x, y, z)
        tree.scale.setScalar(0.78 + (i % 5) * 0.09)
        tree.rotation.y = angle
        tree.traverse(o => { if ((o as THREE.Mesh).isMesh) (o as THREE.Mesh).castShadow = true })
        this.tagMapObject(tree)
        this.worldGroup.add(tree)
      }
    }

    // Distant silhouettes deepen the horizon without participating in collision gameplay.
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const radius = 122 + (i % 4) * 7
      const height = this.map.id === 'red-ridge' ? 18 + (i % 5) * 5 : 14 + (i % 4) * 4
      const mountain = new THREE.Mesh(
        new THREE.ConeGeometry(12 + (i % 4) * 4, height, 6),
        new THREE.MeshStandardMaterial({ color: this.map.id === 'red-ridge' ? '#513226' : '#152d23', roughness: 1 }),
      )
      mountain.position.set(Math.cos(angle) * radius, height * 0.42 - 5, Math.sin(angle) * radius)
      mountain.rotation.y = angle * 0.7
      this.scene.add(mountain)
    }
  }

  private buildVehicle() {
    this.vehicleGroup.name = this.vehicle.id
    this.scene.add(this.vehicleGroup)
    this.vehicleGroup.add(this.chassisPivot)

    const heavy = this.vehicle.id === 'mudhorn-rs'
    this.bodyMaterial = new THREE.MeshStandardMaterial({ color: this.vehicle.color, roughness: 0.42, metalness: 0.38 })
    const darkMat = new THREE.MeshStandardMaterial({ color: '#101410', roughness: 0.67, metalness: 0.5 })
    const trimMat = new THREE.MeshStandardMaterial({ color: '#202620', roughness: 0.5, metalness: 0.62 })
    const glassMat = new THREE.MeshStandardMaterial({ color: '#15343d', roughness: 0.14, metalness: 0.34 })
    const accentMat = new THREE.MeshStandardMaterial({ color: this.vehicle.accent, roughness: 0.54, metalness: 0.24 })
    const headMat = new THREE.MeshStandardMaterial({ color: '#fff9dc', emissive: '#fff0a8', emissiveIntensity: 2.4, roughness: 0.18 })
    this.tailLightMaterial = new THREE.MeshStandardMaterial({ color: '#7a1712', emissive: '#ff2518', emissiveIntensity: 0.65, roughness: 0.3 })

    const base = new THREE.Mesh(new THREE.BoxGeometry(heavy ? 3.3 : 3.0, 0.72, heavy ? 5.35 : 4.75), this.bodyMaterial)
    base.position.y = 0.1
    base.castShadow = true
    this.chassisPivot.add(base)

    const hood = new THREE.Mesh(new THREE.BoxGeometry(heavy ? 2.95 : 2.68, 0.36, heavy ? 1.72 : 1.55), this.bodyMaterial)
    hood.position.set(0, 0.62, heavy ? 1.72 : 1.54)
    hood.rotation.x = -0.035
    hood.castShadow = true
    this.chassisPivot.add(hood)

    const cabin = new THREE.Mesh(new THREE.BoxGeometry(heavy ? 2.72 : 2.52, 1.22, heavy ? 2.18 : 2.3), this.bodyMaterial)
    cabin.position.set(0, 1.0, heavy ? 0.15 : -0.04)
    cabin.castShadow = true
    this.chassisPivot.add(cabin)

    const roof = new THREE.Mesh(new THREE.BoxGeometry(heavy ? 2.76 : 2.58, 0.12, heavy ? 2.26 : 2.42), darkMat)
    roof.position.set(0, 1.68, heavy ? 0.12 : -0.02)
    this.chassisPivot.add(roof)

    const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.24, 0.72, 0.075), glassMat)
    windshield.position.set(0, 1.16, heavy ? 1.23 : 1.22)
    windshield.rotation.x = 0.17
    this.chassisPivot.add(windshield)

    const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.62, 0.07), glassMat)
    rearGlass.position.set(0, 1.13, heavy ? -0.95 : -1.18)
    rearGlass.rotation.x = -0.12
    this.chassisPivot.add(rearGlass)

    const bumperFront = new THREE.Mesh(new THREE.BoxGeometry(heavy ? 3.55 : 3.3, 0.3, 0.3), darkMat)
    bumperFront.position.set(0, -0.14, heavy ? 2.78 : 2.48)
    this.chassisPivot.add(bumperFront)
    const bumperRear = bumperFront.clone()
    bumperRear.position.z = heavy ? -2.78 : -2.48
    this.chassisPivot.add(bumperRear)

    const skid = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.12, 1.18), accentMat)
    skid.position.set(0, -0.35, heavy ? 2.03 : 1.82)
    skid.rotation.x = 0.1
    this.chassisPivot.add(skid)

    const grille = new THREE.Mesh(new THREE.BoxGeometry(heavy ? 2.45 : 2.28, 0.62, 0.08), trimMat)
    grille.position.set(0, 0.28, heavy ? 2.68 : 2.38)
    this.chassisPivot.add(grille)

    for (const x of [-0.95, 0.95]) {
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.28, 0.09), headMat)
      lamp.position.set(x, 0.58, heavy ? 2.72 : 2.42)
      this.chassisPivot.add(lamp)
      const light = new THREE.PointLight('#fff1c7', heavy ? 10 : 8, 20, 2)
      light.position.set(x, 0.55, heavy ? 2.9 : 2.6)
      this.chassisPivot.add(light)
    }

    for (const x of [-1.02, 1.02]) {
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.28, 0.08), this.tailLightMaterial)
      tail.position.set(x, 0.46, heavy ? -2.7 : -2.39)
      this.chassisPivot.add(tail)
    }

    if (heavy) {
      const bedFloor = new THREE.Mesh(new THREE.BoxGeometry(2.95, 0.26, 1.82), darkMat)
      bedFloor.position.set(0, 0.48, -1.74)
      bedFloor.castShadow = true
      this.chassisPivot.add(bedFloor)
      for (const x of [-1.35, 1.35]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.62, 1.9), this.bodyMaterial)
        rail.position.set(x, 0.69, -1.7)
        rail.castShadow = true
        this.chassisPivot.add(rail)
      }
    } else {
      const rack = new THREE.Group()
      const rackRailGeo = new THREE.BoxGeometry(0.08, 0.08, 2.25)
      for (const x of [-1.08, 1.08]) {
        const rail = new THREE.Mesh(rackRailGeo, darkMat)
        rail.position.x = x
        rack.add(rail)
      }
      for (const z of [-0.92, 0, 0.92]) {
        const cross = new THREE.Mesh(new THREE.BoxGeometry(2.22, 0.08, 0.08), darkMat)
        cross.position.z = z
        rack.add(cross)
      }
      rack.position.set(0, 1.82, -0.02)
      this.chassisPivot.add(rack)
    }

    const wheelRadius = heavy ? 0.66 : 0.62
    const halfTrack = heavy ? 1.72 : 1.61
    const frontZ = heavy ? 1.82 : 1.66
    const rearZ = heavy ? -1.82 : -1.62
    const wheelPositions = [
      { id: 'front-left', x: -halfTrack, z: frontZ, steerable: true },
      { id: 'front-right', x: halfTrack, z: frontZ, steerable: true },
      { id: 'rear-left', x: -halfTrack, z: rearZ, steerable: false },
      { id: 'rear-right', x: halfTrack, z: rearZ, steerable: false },
    ]

    for (const w of wheelPositions) {
      const node = new THREE.Group()
      const tire = new THREE.Mesh(
        new THREE.CylinderGeometry(wheelRadius, wheelRadius, heavy ? 0.5 : 0.44, 22),
        new THREE.MeshStandardMaterial({ color: '#0b0d0b', roughness: 0.96, metalness: 0.04 }),
      )
      tire.rotation.z = Math.PI / 2
      tire.castShadow = true
      tire.receiveShadow = true
      node.add(tire)

      const rim = new THREE.Mesh(
        new THREE.CylinderGeometry(wheelRadius * 0.44, wheelRadius * 0.44, heavy ? 0.53 : 0.47, 14),
        new THREE.MeshStandardMaterial({ color: '#8b9187', roughness: 0.34, metalness: 0.85 }),
      )
      rim.rotation.z = Math.PI / 2
      node.add(rim)

      const hub = new THREE.Mesh(
        new THREE.CylinderGeometry(wheelRadius * 0.13, wheelRadius * 0.13, heavy ? 0.56 : 0.5, 12),
        new THREE.MeshStandardMaterial({ color: this.vehicle.accent, roughness: 0.4, metalness: 0.6 }),
      )
      hub.rotation.z = Math.PI / 2
      node.add(hub)

      node.position.set(w.x, -0.65, w.z)
      this.vehicleGroup.add(node)

      const strut = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.075, 1, 8),
        new THREE.MeshStandardMaterial({ color: '#d2d8ce', roughness: 0.42, metalness: 0.72 }),
      )
      strut.position.set(w.x * 0.74, -0.15, w.z)
      this.vehicleGroup.add(strut)

      this.wheels.push({
        ...w,
        node,
        tire,
        strut,
        contact: null,
        grounded: true,
        compression: 0,
        compressionVelocity: 0,
        travel: this.stats.suspension,
        spin: 0,
      })
    }
  }

  private buildDustPool() {
    const geo = new THREE.IcosahedronGeometry(0.18, 0)
    const mat = new THREE.MeshBasicMaterial({
      color: this.map.id === 'red-ridge' ? '#a77a55' : '#6c7465',
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      fog: true,
    })
    for (let i = 0; i < 42; i++) {
      const mesh = new THREE.Mesh(geo, mat)
      mesh.visible = false
      this.scene.add(mesh)
      this.dust.push({ mesh, velocity: new THREE.Vector3(), age: 0, life: 1 })
    }
  }

  private resetVehicle() {
    const spawn = this.map.spawn.position
    this.heading = Math.atan2(this.map.spawn.forward.x, this.map.spawn.forward.z)
    const ground = terrainHeight(this.map.id, spawn.x, spawn.z)
    this.vehicleGroup.position.set(spawn.x, ground + 1.65, spawn.z)
    this.vehicleGroup.rotation.y = this.heading
    this.speed = 0
    this.lateralSpeed = 0
    this.yawRate = 0
    this.throttle = 0
    this.brake = 0
    this.steering = 0
    this.chassisPitch = 0
    this.chassisRoll = 0
    this.bodyVerticalVelocity = 0
    this.currentCheckpointIndex = 0
    this.passedCheckpointIds = []
    this.elapsedTime = 0
    this.finalTime = null
    this.reward = 0
    this.rewardGranted = false
    this.slipAmount = 0
    this.collision = { active: false, objectId: null, timer: 0 }
    for (const wheel of this.wheels) {
      wheel.compression = 0
      wheel.compressionVelocity = 0
      wheel.spin = 0
    }
    this.updateSuspension(1 / 60)
    this.updateGateVisuals()
    const back = new THREE.Vector3(-Math.sin(this.heading) * 10.5, 6.35, -Math.cos(this.heading) * 10.5)
    this.camera.position.copy(this.vehicleGroup.position).add(back)
    this.cameraTarget.copy(this.vehicleGroup.position).add(new THREE.Vector3(0, 1, 0))
    this.camera.lookAt(this.cameraTarget)
  }

  private onKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase()
    if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(key)) {
      event.preventDefault()
      this.keys.add(key)
    }
  }

  private onKeyUp = (event: KeyboardEvent) => {
    this.keys.delete(event.key.toLowerCase())
  }

  private resize = () => {
    if (this.disposed) return
    const width = Math.max(1, this.mount.clientWidth)
    const height = Math.max(1, this.mount.clientHeight)
    this.renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  private animate = (now: number) => {
    if (this.disposed) return
    const dt = Math.min((now - this.previousTime) / 1000, 0.06)
    this.previousTime = now

    if (this.phase === 'loading' && now >= this.loadingUntil) {
      this.phase = 'running'
      this.startAt = now
      this.callbacks.onRunning()
    }

    if (this.phase === 'running') {
      this.elapsedTime = (now - this.startAt) / 1000
      this.updateControls(dt)
      this.updateVehicle(dt)
      this.updateRaceProgress()
    } else {
      if (this.phase === 'finished' && this.finalTime !== null) {
        // BAD_3: the official final timer keeps advancing after the finish.
        this.elapsedTime += dt
        this.finalTime += dt
      }
      this.throttle = damp(this.throttle, 0, 10, dt)
      this.brake = damp(this.brake, 0, 10, dt)
      this.steering = damp(this.steering, 0, 10, dt)
      this.yawRate = damp(this.yawRate, 0, 7, dt)
      this.lateralSpeed = damp(this.lateralSpeed, 0, 5, dt)
      this.updateSuspension(dt)
    }

    this.updateDust(dt)
    this.updateCamera(dt)
    this.renderer.render(this.scene, this.camera)
    this.renderFrame += 1

    this.hudAccumulator += dt
    if (this.hudAccumulator >= 0.065) {
      this.hudAccumulator = 0
      const effectiveGrip = this.stats.grip * surfaceGrip(this.surfaceType)
      this.callbacks.onHud({
        elapsed: this.elapsedTime,
        speed: Math.hypot(this.speed, this.lateralSpeed),
        checkpointIndex: this.currentCheckpointIndex,
        surface: this.surfaceType,
        throttle: this.throttle,
        brake: this.brake,
        steering: this.steering,
        grip: effectiveGrip,
        slip: this.slipAmount,
        x: this.vehicleGroup.position.x,
        z: this.vehicleGroup.position.z,
        heading: this.heading,
        suspensionLoad: this.suspensionLoad,
      })
    }
    this.raf = requestAnimationFrame(this.animate)
  }

  private updateControls(dt: number) {
    const up = this.keys.has('w') || this.keys.has('arrowup')
    const down = this.keys.has('s') || this.keys.has('arrowdown')
    const left = this.keys.has('a') || this.keys.has('arrowleft')
    const right = this.keys.has('d') || this.keys.has('arrowright')

    const reverseRequest = down && Math.abs(this.speed) < 1.05
    const throttleTarget = up ? 1 : reverseRequest ? -0.72 : 0
    const brakeTarget = down && !reverseRequest ? 1 : 0
    const rawSteer = (right ? 1 : 0) + (left ? -1 : 0)
    const speedRatio = clamp(Math.abs(this.speed) / Math.max(1, this.stats.maxSpeed), 0, 1)
    const speedSensitiveSteer = THREE.MathUtils.lerp(1, 0.53, Math.pow(speedRatio, 0.72))
    const steerTarget = rawSteer * speedSensitiveSteer

    this.throttle = damp(this.throttle, throttleTarget, up || reverseRequest ? 5.9 : 8.7, dt)
    this.brake = damp(this.brake, brakeTarget, brakeTarget > 0 ? 13.5 : 9.5, dt)
    this.steering = damp(this.steering, steerTarget, rawSteer === 0 ? 24 : 8.8, dt)
  }

  private sampleGrade() {
    const sin = Math.sin(this.heading)
    const cos = Math.cos(this.heading)
    const frontH = terrainHeight(this.map.id, this.vehicleGroup.position.x + sin * 1.8, this.vehicleGroup.position.z + cos * 1.8)
    const rearH = terrainHeight(this.map.id, this.vehicleGroup.position.x - sin * 1.8, this.vehicleGroup.position.z - cos * 1.8)
    return Math.atan2(frontH - rearH, 3.6)
  }

  private updateVehicle(dt: number) {
    const x = this.vehicleGroup.position.x
    const z = this.vehicleGroup.position.z
    this.surfaceType = surfaceAt(this.map.id, x, z)
    const terrainGrip = surfaceGrip(this.surfaceType)
    const terrainDrag = surfaceDrag(this.surfaceType)
    const effectiveGrip = this.stats.grip * terrainGrip
    const speedRatio = clamp(Math.abs(this.speed) / Math.max(1, this.stats.maxSpeed), 0, 1)

    // Torque is strongest in the low/mid range and naturally rolls off toward top speed.
    const torqueCurve = clamp(1.08 - Math.pow(speedRatio, 1.65) * 0.68, 0.33, 1.08)
    const tractionDemand = Math.abs(this.throttle) * (1.05 - terrainGrip) * (1 - speedRatio * 0.58)
    const wheelSpin = clamp(tractionDemand * 1.7, 0, 0.58)
    const powerAccel = (this.stats.power / this.stats.mass) * 26.5
    const driveSign = this.throttle >= 0 ? 1 : -1
    this.speed += Math.abs(this.throttle) * powerAccel * torqueCurve * (1 - wheelSpin) * driveSign * dt

    if (this.brake > 0.01) {
      const speedBrakeScale = 0.82 + speedRatio * 0.42
      const decel = this.stats.braking * this.brake * speedBrakeScale * dt
      if (this.speed > 0) this.speed = Math.max(0, this.speed - decel)
      else this.speed = Math.min(0, this.speed + decel)
      this.lateralSpeed *= Math.max(0, 1 - this.brake * effectiveGrip * 1.1 * dt)
    }

    const grade = this.sampleGrade()
    this.speed += -Math.sin(grade) * 9.81 * dt

    const aero = Math.abs(this.speed) * Math.abs(this.speed) * 0.00048
    const rolling = 0.18 + Math.abs(this.speed) * terrainDrag + aero
    if (Math.abs(this.throttle) < 0.06) {
      const loss = rolling * dt * 2.6
      if (this.speed > 0) this.speed = Math.max(0, this.speed - loss)
      else if (this.speed < 0) this.speed = Math.min(0, this.speed + loss)
    } else {
      this.speed *= Math.max(0, 1 - terrainDrag * 0.62 * dt)
    }

    const forwardMax = this.stats.maxSpeed * (0.84 + 0.16 * terrainGrip)
    const reverseMax = Math.min(10.2, forwardMax * 0.33)
    this.speed = clamp(this.speed, -reverseMax, forwardMax)

    // Yaw develops rather than snapping to steering input; low-grip terrain increases the lag/slip.
    const directionFactor = this.speed >= 0 ? 1 : -0.74
    const lowSpeedAuthority = clamp(Math.abs(this.speed) / 3.6, 0.28, 1)
    const highSpeedCalm = 1 - speedRatio * 0.25
    const targetYaw = this.steering * this.stats.steering * 1.48 * lowSpeedAuthority * highSpeedCalm * directionFactor
    const yawResponse = clamp(5.0 * effectiveGrip, 2.4, 8.0)
    this.yawRate = damp(this.yawRate, targetYaw, yawResponse, dt)

    const slipImpulse = -this.yawRate * this.speed * (0.72 + (1 - terrainGrip) * 0.8)
    this.lateralSpeed += slipImpulse * dt
    const lateralDamping = clamp(3.1 * effectiveGrip, 1.25, 5.3)
    this.lateralSpeed *= Math.exp(-lateralDamping * dt)
    this.lateralSpeed = clamp(this.lateralSpeed, -Math.max(3.8, Math.abs(this.speed) * 0.35), Math.max(3.8, Math.abs(this.speed) * 0.35))
    this.slipAmount = clamp(Math.abs(this.lateralSpeed) / Math.max(2.2, Math.abs(this.speed) * 0.22), 0, 1)

    // Mild controllable oversteer on loose surfaces; it never replaces player steering.
    this.heading += (this.yawRate + this.lateralSpeed * 0.012 * (1 - terrainGrip)) * dt

    const forward = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading))
    const right = new THREE.Vector3(Math.cos(this.heading), 0, -Math.sin(this.heading))
    const worldVelocity = forward.clone().multiplyScalar(this.speed).add(right.clone().multiplyScalar(this.lateralSpeed))

    const oldX = this.vehicleGroup.position.x
    const oldZ = this.vehicleGroup.position.z
    let nx = oldX + worldVelocity.x * dt
    let nz = oldZ + worldVelocity.z * dt

    this.collision.timer = Math.max(0, this.collision.timer - dt)
    if (this.collision.timer === 0) {
      this.collision.active = false
      this.collision.objectId = null
    }

    for (const obs of this.map.obstacles) {
      const dx = nx - obs.position.x
      const dz = nz - obs.position.z
      const d = Math.hypot(dx, dz)
      const minDist = obs.radius + this.vehicleRadius
      if (d < minDist) {
        const safeD = Math.max(d, 0.001)
        nx = obs.position.x + (dx / safeD) * minDist
        nz = obs.position.z + (dz / safeD) * minDist
        const impact = clamp(Math.hypot(this.speed, this.lateralSpeed) / 18, 0.18, 1)
        this.speed *= -0.13
        this.lateralSpeed *= -0.26
        this.yawRate *= 0.52
        this.cameraShake = Math.max(this.cameraShake, 0.18 + impact * 0.38)
        this.collision = { active: true, objectId: obs.id, timer: 0.38 }
        break
      }
    }

    const limit = 91
    if (Math.abs(nx) > limit || Math.abs(nz) > limit) {
      nx = clamp(nx, -limit, limit)
      nz = clamp(nz, -limit, limit)
      this.speed *= -0.1
      this.lateralSpeed *= -0.18
      this.cameraShake = Math.max(this.cameraShake, 0.22)
      this.collision = { active: true, objectId: 'world-boundary', timer: 0.32 }
    }

    this.vehicleGroup.position.x = nx
    this.vehicleGroup.position.z = nz
    this.vehicleGroup.rotation.y = this.heading
    this.updateSuspension(dt)

    const groundBefore = terrainHeight(this.map.id, oldX, oldZ)
    const groundAfter = terrainHeight(this.map.id, nx, nz)
    const verticalVelocity = (groundAfter - groundBefore) / Math.max(dt, 0.001) + this.bodyVerticalVelocity
    worldVelocity.y = verticalVelocity
    this.vehicleGroup.userData.velocity = worldVelocity

    const roughness = Math.abs(verticalVelocity) * 0.015 + this.suspensionLoad * 0.025
    this.cameraShake = Math.max(this.cameraShake, clamp(roughness, 0, 0.12))
    this.tailLightMaterial.emissiveIntensity = 0.55 + this.brake * 4.4
  }

  private updateSuspension(dt: number) {
    const sin = Math.sin(this.heading)
    const cos = Math.cos(this.heading)
    const samples = this.wheels.map(w => {
      const wx = this.vehicleGroup.position.x + w.x * cos + w.z * sin
      const wz = this.vehicleGroup.position.z - w.x * sin + w.z * cos
      return { wheel: w, wx, wz, ground: terrainHeight(this.map.id, wx, wz) }
    })

    const averageGround = samples.reduce((sum, p) => sum + p.ground, 0) / samples.length
    const rideHeight = 1.2 + this.stats.suspension * 0.48
    const targetY = averageGround + rideHeight
    const spring = 34 + this.stats.suspension * 8.5
    const damper = 10.8 + this.stats.suspension * 3.6
    this.bodyVerticalVelocity += (targetY - this.vehicleGroup.position.y) * spring * dt
    this.bodyVerticalVelocity *= Math.exp(-damper * dt)
    this.vehicleGroup.position.y += this.bodyVerticalVelocity * dt
    const hardFloor = averageGround + 1.04
    if (this.vehicleGroup.position.y < hardFloor) {
      this.vehicleGroup.position.y = hardFloor
      this.bodyVerticalVelocity = Math.max(0, this.bodyVerticalVelocity) * 0.18
    }

    const front = (samples[0].ground + samples[1].ground) * 0.5
    const rear = (samples[2].ground + samples[3].ground) * 0.5
    const left = (samples[0].ground + samples[2].ground) * 0.5
    const right = (samples[1].ground + samples[3].ground) * 0.5
    const wheelbase = Math.abs(this.wheels[0].z - this.wheels[2].z)
    const track = Math.abs(this.wheels[0].x - this.wheels[1].x)
    const terrainPitch = clamp(Math.atan2(front - rear, wheelbase), -0.4, 0.4)
    const terrainRoll = clamp(Math.atan2(left - right, track), -0.36, 0.36)
    const weightPitch = clamp(this.brake * 0.055 * Math.sign(Math.max(0.1, this.speed)) - this.throttle * 0.025, -0.07, 0.07)
    const cornerRoll = clamp(-this.yawRate * Math.abs(this.speed) * 0.011, -0.115, 0.115)
    const targetPitch = terrainPitch + weightPitch
    const targetRoll = terrainRoll + cornerRoll
    const attitudeResponse = 5.4 + this.stats.suspension * 1.8
    this.chassisPitch = damp(this.chassisPitch, targetPitch, attitudeResponse, dt)
    this.chassisRoll = damp(this.chassisRoll, targetRoll, attitudeResponse, dt)
    this.chassisPivot.rotation.x = this.chassisPitch
    this.chassisPivot.rotation.z = -this.chassisRoll

    const heavy = this.vehicle.id === 'mudhorn-rs'
    const wheelRadius = heavy ? 0.66 : 0.62
    const anchorLocalY = -0.23
    const restLength = 0.54 + this.stats.suspension * 0.38
    const travel = 0.42 + this.stats.suspension * 0.48
    let load = 0

    for (const p of samples) {
      const anchorWorldY = this.vehicleGroup.position.y + anchorLocalY
      const naturalCenterY = anchorWorldY - restLength
      const groundCenterY = p.ground + wheelRadius
      const targetCompression = clamp(groundCenterY - naturalCenterY, 0, travel)
      const wheelSpring = 31 + this.stats.suspension * 9
      const wheelDamper = 10 + this.stats.suspension * 4.5
      p.wheel.compressionVelocity += (targetCompression - p.wheel.compression) * wheelSpring * dt
      p.wheel.compressionVelocity *= Math.exp(-wheelDamper * dt)
      p.wheel.compression = clamp(p.wheel.compression + p.wheel.compressionVelocity * dt, 0, travel)

      let centerY = naturalCenterY + p.wheel.compression
      const contactTolerance = 0.09
      p.wheel.grounded = centerY <= groundCenterY + contactTolerance
      if (centerY < groundCenterY) {
        centerY = groundCenterY
        p.wheel.compression = clamp(centerY - naturalCenterY, 0, travel)
        p.wheel.compressionVelocity = Math.max(0, p.wheel.compressionVelocity) * 0.4
        p.wheel.grounded = true
      }
      p.wheel.contact = p.wheel.grounded ? new THREE.Vector3(p.wx, p.ground, p.wz) : null
      p.wheel.travel = travel
      load += p.wheel.compression / Math.max(travel, 0.001)

      const localCenterY = centerY - this.vehicleGroup.position.y
      p.wheel.node.position.set(p.wheel.x, localCenterY, p.wheel.z)
      p.wheel.node.rotation.y = p.wheel.steerable ? -this.steering * 0.48 : 0
      p.wheel.spin += this.speed * dt / wheelRadius
      p.wheel.node.rotation.x = p.wheel.spin

      const strutTopY = 0.12
      const strutBottomY = localCenterY + 0.18
      const strutLength = Math.max(0.16, strutTopY - strutBottomY)
      p.wheel.strut.position.set(p.wheel.x * 0.72, (strutTopY + strutBottomY) * 0.5, p.wheel.z)
      p.wheel.strut.scale.set(1, strutLength, 1)
    }

    this.suspensionLoad = load / samples.length
  }

  private updateRaceProgress() {
    const pos = this.vehicleGroup.position
    if (this.currentCheckpointIndex < this.map.checkpoints.length) {
      const cp = this.map.checkpoints[this.currentCheckpointIndex]
      const distance = Math.hypot(pos.x - cp.position.x, pos.z - cp.position.z)
      if (distance <= cp.radius) {
        this.passedCheckpointIds.push(cp.id)
        this.currentCheckpointIndex += 1
        this.cameraShake = Math.max(this.cameraShake, 0.1)
        this.updateGateVisuals()
      }
      return
    }

    const finish = this.map.finish
    const finishDistance = Math.hypot(pos.x - finish.position.x, pos.z - finish.position.z)
    if (finishDistance <= finish.radius) this.finishRace()
  }

  private updateGateVisuals() {
    this.map.checkpoints.forEach((cp, index) => {
      const group = this.gateGroups.get(cp.id)
      if (!group) return
      const mat = group.userData.material as THREE.MeshStandardMaterial
      const beacon = group.userData.beacon as THREE.PointLight
      if (index < this.currentCheckpointIndex) {
        mat.color.set('#59645a')
        mat.emissive.set('#0d1710')
        mat.emissiveIntensity = 0.1
        beacon.intensity = 0.5
      } else if (index === this.currentCheckpointIndex) {
        mat.color.set('#f0f7e9')
        mat.emissive.set(this.map.accent)
        mat.emissiveIntensity = 1.05
        beacon.color.set(this.map.accent)
        beacon.intensity = 9
      } else {
        mat.color.set('#9ba59a')
        mat.emissive.set('#14291e')
        mat.emissiveIntensity = 0.2
        beacon.intensity = 1.2
      }
    })

    const finish = this.gateGroups.get('finish')
    if (finish) {
      const mat = finish.userData.material as THREE.MeshStandardMaterial
      const beacon = finish.userData.beacon as THREE.PointLight
      const open = this.currentCheckpointIndex === this.map.checkpoints.length
      mat.emissiveIntensity = open ? 1.45 : 0.25
      mat.color.set(open ? '#efff78' : '#7b806a')
      beacon.intensity = open ? 13 : 1.2
    }
  }

  private finishRace() {
    if (this.phase !== 'running') return
    this.phase = 'finished'
    this.finalTime = this.elapsedTime
    // BAD_3: completion reward calculation is missing.
    this.reward = 0
    this.speed = 0
    this.lateralSpeed = 0
    this.yawRate = 0
    this.throttle = 0
    this.brake = 0
    this.callbacks.onFinish(this.finalTime, this.reward)
  }

  markRewardGranted() {
    if (this.phase === 'finished' && this.reward > 0) this.rewardGranted = true
  }

  private emitDust() {
    const speed = Math.hypot(this.speed, this.lateralSpeed)
    if (speed < 2.8) return
    const loose = this.surfaceType === 'mud' || this.surfaceType === 'sand' || this.surfaceType === 'dirt' || this.surfaceType === 'gravel'
    if (!loose && this.slipAmount < 0.35) return

    const particle = this.dust.find(p => !p.mesh.visible)
    if (!particle) return
    const forward = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading))
    const right = new THREE.Vector3(Math.cos(this.heading), 0, -Math.sin(this.heading))
    const side = Math.random() > 0.5 ? 1 : -1
    const rear = this.vehicleGroup.position.clone().add(forward.multiplyScalar(-1.75)).add(right.multiplyScalar(side * 1.15))
    rear.y = terrainHeight(this.map.id, rear.x, rear.z) + 0.2
    particle.mesh.position.copy(rear)
    particle.mesh.scale.setScalar(0.65 + Math.random() * 0.8)
    particle.mesh.visible = true
    particle.age = 0
    particle.life = 0.55 + Math.random() * 0.65
    particle.velocity.set(
      -Math.sin(this.heading) * (0.6 + Math.random() * 1.2) + (Math.random() - 0.5) * 1.1,
      0.65 + Math.random() * 0.8,
      -Math.cos(this.heading) * (0.6 + Math.random() * 1.2) + (Math.random() - 0.5) * 1.1,
    )
  }

  private updateDust(dt: number) {
    this.dustTimer -= dt
    const speed = Math.hypot(this.speed, this.lateralSpeed)
    const interval = THREE.MathUtils.lerp(0.115, 0.035, clamp(speed / 22, 0, 1))
    if (this.phase === 'running' && this.dustTimer <= 0) {
      this.emitDust()
      if (this.slipAmount > 0.5) this.emitDust()
      this.dustTimer = interval
    }

    for (const p of this.dust) {
      if (!p.mesh.visible) continue
      p.age += dt
      if (p.age >= p.life) {
        p.mesh.visible = false
        continue
      }
      p.mesh.position.addScaledVector(p.velocity, dt)
      p.velocity.y += 0.3 * dt
      p.velocity.multiplyScalar(Math.exp(-1.2 * dt))
      const t = p.age / p.life
      const scale = 0.85 + t * 2.7
      p.mesh.scale.multiplyScalar(1 + dt * 1.6)
      p.mesh.scale.setScalar(Math.min(scale, p.mesh.scale.x))
    }
  }

  private updateCamera(dt: number) {
    const forward = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading))
    const right = new THREE.Vector3(Math.cos(this.heading), 0, -Math.sin(this.heading))
    const speedAbs = Math.hypot(this.speed, this.lateralSpeed)
    const speedRatio = clamp(speedAbs / Math.max(1, this.stats.maxSpeed), 0, 1)
    const lookAhead = 1.8 + speedRatio * 4.5
    const desiredTarget = this.vehicleGroup.position.clone()
      .add(new THREE.Vector3(0, 0.82, 0))
      .add(forward.clone().multiplyScalar(lookAhead))
      .add(right.clone().multiplyScalar(this.steering * 0.45))

    const cameraDistance = 9.4 + speedRatio * 2.4
    const cameraHeight = 5.15 + speedRatio * 1.0
    const desiredPos = this.vehicleGroup.position.clone()
      .add(forward.clone().multiplyScalar(-cameraDistance))
      .add(right.clone().multiplyScalar(this.lateralSpeed * -0.055))
      .add(new THREE.Vector3(0, cameraHeight, 0))

    const cameraGround = terrainHeight(this.map.id, desiredPos.x, desiredPos.z)
    desiredPos.y = Math.max(desiredPos.y, cameraGround + 2.5)

    const cameraPosResponse = 4.05 + speedRatio * 0.8
    this.camera.position.lerp(desiredPos, 1 - Math.exp(-cameraPosResponse * dt))
    this.cameraTarget.lerp(desiredTarget, 1 - Math.exp(-(6.4 + speedRatio * 1.5) * dt))

    this.cameraShake *= Math.exp(-8.5 * dt)
    if (this.cameraShake > 0.002) {
      this.camera.position.x += (Math.random() - 0.5) * this.cameraShake
      this.camera.position.y += (Math.random() - 0.5) * this.cameraShake * 0.65
      this.camera.position.z += (Math.random() - 0.5) * this.cameraShake
    }

    const targetFov = 54 + speedRatio * 10 + this.slipAmount * 1.5
    this.camera.fov = damp(this.camera.fov, targetFov, 4, dt)
    this.camera.updateProjectionMatrix()
    this.camera.lookAt(this.cameraTarget)
    this.camera.getWorldDirection(this.cameraForward)
  }

  getRaceState(): RaceSnapshot {
    return {
      raceId: this.raceId,
      mode: 'time_trial',
      phase: this.phase,
      playerCount: 1,
      competitorCount: 0,
      vehicleId: this.vehicle.id,
      mapId: this.map.id,
      elapsedTime: this.elapsedTime,
      finalTime: this.finalTime,
      finished: this.phase === 'finished',
      currentCheckpointIndex: this.currentCheckpointIndex,
      passedCheckpointIds: [...this.passedCheckpointIds],
      finishEligible: this.currentCheckpointIndex === this.map.checkpoints.length,
      reward: this.reward,
      rewardGranted: this.rewardGranted,
    }
  }

  getVehicleState(): VehicleSnapshot {
    const rootPos = this.vehicleGroup.position
    const forward = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading))
    const velocity = (this.vehicleGroup.userData.velocity as THREE.Vector3 | undefined) ?? forward.clone().multiplyScalar(this.speed)
    const wheelStates: WheelSnapshot[] = this.wheels.map(w => {
      const world = new THREE.Vector3()
      w.node.getWorldPosition(world)
      return {
        id: w.id,
        position: vec(world),
        contactPoint: w.contact ? vec(w.contact) : null,
        grounded: w.grounded,
        suspensionCompression: w.compression,
        suspensionTravel: w.travel,
      }
    })
    return {
      id: this.vehicle.id,
      position: vec(rootPos),
      rotation: { x: this.chassisPitch, y: this.heading, z: -this.chassisRoll },
      forward: vec(forward),
      velocity: vec(velocity),
      speed: Math.hypot(this.speed, this.lateralSpeed),
      throttle: this.throttle,
      brake: this.brake,
      steering: this.steering,
      grounded: wheelStates.some(w => w.grounded),
      surfaceType: this.surfaceType,
      collision: { active: this.collision.active, objectId: this.collision.objectId },
      chassis: { height: rootPos.y, pitch: this.chassisPitch, roll: this.chassisRoll },
      wheels: wheelStates,
      appliedStats: { ...this.stats },
    }
  }

  getCameraState(): CameraSnapshot {
    return {
      mode: 'third_person',
      position: vec(this.camera.position),
      target: vec(this.cameraTarget),
      forward: vec(this.cameraForward),
      followedVehicleId: this.vehicle.id,
      vehicleVisible: this.vehicleGroup.visible && this.vehicleGroup.parent === this.scene,
    }
  }

  getWorldState() {
    const map = this.map
    const groundPos = (p: Vec3State): Vec3State => ({ x: p.x, y: terrainHeight(map.id, p.x, p.z), z: p.z })
    const obstaclePos = (obs: MapDefinition['obstacles'][number]): Vec3State => {
      const ground = terrainHeight(map.id, obs.position.x, obs.position.z)
      return { x: obs.position.x, y: ground + (obs.kind === 'rock' ? obs.radius * 0.72 : obs.radius * 0.75), z: obs.position.z }
    }
    return {
      maps: [] as Array<{ id: string; name: string }>,
      currentMap: {
        id: map.id,
        name: map.name,
        spawn: { position: { x: map.spawn.position.x, y: terrainHeight(map.id, map.spawn.position.x, map.spawn.position.z) + 1.65, z: map.spawn.position.z }, forward: { ...map.spawn.forward } },
        finish: { position: groundPos(map.finish.position), radius: map.finish.radius },
        checkpoints: map.checkpoints.map(cp => ({ id: cp.id, index: cp.index, position: groundPos(cp.position), radius: cp.radius })),
        terrain: { minHeight: this.terrainBounds.minHeight, maxHeight: this.terrainBounds.maxHeight, surfaceTypes: [...map.terrain.surfaceTypes] },
        obstacles: map.obstacles.map(obs => ({ id: obs.id, position: obstaclePos(obs), radius: obs.radius })),
        obstacleCount: map.obstacles.length,
      },
      visibleMapObjectCount: this.worldGroup.visible ? this.worldObjectCount : 0,
      renderFrame: this.renderFrame,
    }
  }

  getSceneState(): SceneSnapshot {
    const canvas = this.renderer.domElement
    const context = this.renderer.getContext()
    const isWebgl2 = typeof WebGL2RenderingContext !== 'undefined' && context instanceof WebGL2RenderingContext
    return {
      renderer: isWebgl2 ? 'webgl2' : 'webgl',
      canvasVisible: canvas.isConnected && canvas.clientWidth > 0 && canvas.clientHeight > 0,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      renderFrame: this.renderFrame,
      visibleVehicleIds: this.vehicleGroup.visible ? [this.vehicle.id] : [],
      visibleWheelCount: this.vehicleGroup.visible ? this.wheels.filter(w => w.node.visible).length : 0,
      visibleTerrain: this.worldGroup.visible && this.worldGroup.children.some(o => o.name === 'terrain' && o.visible),
    }
  }

  dispose() {
    if (this.disposed) return
    this.disposed = true
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize)
    window.removeEventListener('keydown', this.onKeyDown)
    window.removeEventListener('keyup', this.onKeyUp)
    this.scene.traverse(object => {
      const mesh = object as THREE.Mesh
      if (mesh.geometry) mesh.geometry.dispose()
      const material = mesh.material as THREE.Material | THREE.Material[] | undefined
      if (Array.isArray(material)) material.forEach(m => m.dispose())
      else material?.dispose()
    })
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }
}

export function emptyVehicleState(): VehicleSnapshot {
  return {
    id: null,
    position: { ...ZERO },
    rotation: { ...ZERO },
    forward: { ...ZERO },
    velocity: { ...ZERO },
    speed: 0,
    throttle: 0,
    brake: 0,
    steering: 0,
    grounded: false,
    surfaceType: 'none',
    collision: { active: false, objectId: null },
    chassis: { height: 0, pitch: 0, roll: 0 },
    wheels: [],
    appliedStats: { mass: 0, power: 0, braking: 0, steering: 0, grip: 0, maxSpeed: 0, suspension: 0 },
  }
}

export function emptyCameraState(): CameraSnapshot {
  return { mode: 'third_person', position: { ...ZERO }, target: { ...ZERO }, forward: { ...ZERO }, followedVehicleId: null, vehicleVisible: false }
}

export function emptySceneState(): SceneSnapshot {
  return { renderer: 'webgl', canvasVisible: false, canvasWidth: 0, canvasHeight: 0, renderFrame: 0, visibleVehicleIds: [], visibleWheelCount: 0, visibleTerrain: false }
}
