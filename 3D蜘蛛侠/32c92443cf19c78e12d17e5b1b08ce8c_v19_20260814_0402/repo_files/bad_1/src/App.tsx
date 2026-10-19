import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type Building = {
  id: string
  min: THREE.Vector3
  max: THREE.Vector3
  mesh: THREE.Mesh
}

type MovementState = 'idle' | 'moving' | 'jumping' | 'falling' | 'swinging'

type HudState = {
  speed: number
  altitude: number
  attached: boolean
  targetValid: boolean
  pointerLocked: boolean
  movement: MovementState
  heading: string
  night: boolean
  ropeTension: number
  anchorDistance: number | null
  ropeLength: number | null
  webRange: number
  sprinting: boolean
  verticalSpeed: number
  flow: number
  targetDistance: number | null
  reelDirection: 'in' | 'out' | null
  contextHint: string
  mapX: number
  mapZ: number
  mapYaw: number
  nearestLandmark: string
  landmarkDistance: number
}

const LANDMARKS = [
  { id: 'park', label: 'CENTRAL PARK', x: 0, z: 0 },
  { id: 'needle', label: 'NEEDLE CROWN', x: 0, z: -76 },
  { id: 'steps', label: 'STEPPED MONOLITH', x: -74, z: 14 },
  { id: 'bridge', label: 'SKYBRIDGE TWINS', x: 74, z: 58 },
] as const

const GROUND_Y = 0
const PLAYER_RADIUS = 0.5
const PLAYER_HEIGHT = 1.86
const GRAVITY = 24
const MAX_WEB_RANGE = 138
const FIXED_DT = 1 / 120
const WORLD_HALF = 188
const COLLISION_SKIN = 0.012
const COLLISION_EPS = 1e-7
const MAX_SLIDE_ITERS = 5
const CAMERA_COLLISION_RADIUS = 0.28
const WEB_MIN_LENGTH = 1.25
const MAX_AIR_HORIZONTAL_SPEED = 52
const JUMP_SPEED = 11.3
const COYOTE_TIME = 0.13
const JUMP_BUFFER_TIME = 0.17
const UP = new THREE.Vector3(0, 1, 0)

function cloneV(v: THREE.Vector3) {
  return { x: v.x, y: v.y, z: v.z }
}

function App() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [hud, setHud] = useState<HudState>({
    speed: 0,
    altitude: 0,
    attached: false,
    targetValid: false,
    pointerLocked: false,
    movement: 'idle',
    heading: 'N',
    night: false,
    ropeTension: 0,
    anchorDistance: null,
    ropeLength: null,
    webRange: MAX_WEB_RANGE,
    sprinting: false,
    verticalSpeed: 0,
    flow: 0,
    targetDistance: null,
    reelDirection: null,
    contextHint: 'AIM AT A BUILDING',
    mapX: 0,
    mapZ: 12,
    mapYaw: Math.PI,
    nearestLandmark: 'CENTRAL PARK',
    landmarkDistance: 12,
  })
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // --- Renderer / scene --------------------------------------------------
    const scene = new THREE.Scene()
    const daySky = new THREE.Color(0x80c9ec)
    const nightSky = new THREE.Color(0x030714)
    scene.background = daySky
    scene.fog = new THREE.FogExp2(daySky, 0.0026)

    // Procedural atmosphere: a gradient skydome gives the city a stronger horizon and
    // preserves the "no external assets" constraint.
    const skyUniforms = {
      topColor: { value: new THREE.Color(0x58a9d1) },
      horizonColor: { value: new THREE.Color(0xd9edf2) },
      bottomColor: { value: new THREE.Color(0x7eabb6) },
    }
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(360, 28, 18),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        uniforms: skyUniforms,
        vertexShader: `
          varying vec3 vWorld;
          void main() {
            vec4 world = modelMatrix * vec4(position, 1.0);
            vWorld = world.xyz;
            gl_Position = projectionMatrix * viewMatrix * world;
          }
        `,
        fragmentShader: `
          uniform vec3 topColor;
          uniform vec3 horizonColor;
          uniform vec3 bottomColor;
          varying vec3 vWorld;
          void main() {
            float h = normalize(vWorld).y;
            vec3 lower = mix(bottomColor, horizonColor, smoothstep(-0.12, 0.12, h));
            vec3 color = mix(lower, topColor, smoothstep(0.04, 0.72, h));
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      }),
    )
    scene.add(sky)

    const sunDisc = new THREE.Mesh(
      new THREE.SphereGeometry(8, 18, 12),
      new THREE.MeshBasicMaterial({ color: 0xfff2c5, transparent: true, opacity: 0.85 }),
    )
    sunDisc.position.set(-145, 128, -210)
    scene.add(sunDisc)

    const camera = new THREE.PerspectiveCamera(66, 1, 0.08, 520)
    camera.position.set(0, 6, 10)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.04
    renderer.domElement.dataset.testid = 'game-canvas'
    renderer.domElement.tabIndex = 0
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.outline = 'none'
    mount.appendChild(renderer.domElement)

    const hemi = new THREE.HemisphereLight(0xd9f3ff, 0x223149, 1.95)
    scene.add(hemi)

    const sun = new THREE.DirectionalLight(0xfff0cf, 3.6)
    sun.position.set(-62, 94, 34)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 5
    sun.shadow.camera.far = 230
    sun.shadow.camera.left = -105
    sun.shadow.camera.right = 105
    sun.shadow.camera.top = 105
    sun.shadow.camera.bottom = -105
    sun.shadow.bias = -0.0003
    scene.add(sun)

    const rim = new THREE.DirectionalLight(0x7ddcff, 0.75)
    rim.position.set(55, 40, -60)
    scene.add(rim)

    // --- Procedural city art ----------------------------------------------
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x101821, roughness: 0.96, metalness: 0.03 })
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(430, 430), groundMat)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    const roadMat = new THREE.MeshStandardMaterial({ color: 0x242b31, roughness: 0.95 })
    const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x66717a, roughness: 0.94 })
    const laneMat = new THREE.MeshBasicMaterial({ color: 0xe8c76d })
    const whiteRoadMat = new THREE.MeshBasicMaterial({ color: 0xeaf4f5 })

    const makePlane = (w: number, h: number, mat: THREE.Material, x: number, z: number, y = 0.014) => {
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat)
      plane.rotation.x = -Math.PI / 2
      plane.position.set(x, y, z)
      plane.receiveShadow = true
      scene.add(plane)
      return plane
    }

    const roadLines = [-152, -114, -76, -38, 0, 38, 76, 114, 152]
    for (const p of roadLines) {
      makePlane(10.5, 385, roadMat, p, 0)
      makePlane(385, 10.5, roadMat, 0, p, 0.016)
      makePlane(0.12, 370, laneMat, p, 0, 0.024)
      makePlane(370, 0.12, laneMat, 0, p, 0.026)
      for (let i = -4; i <= 4; i++) {
        if (i === 0) continue
        makePlane(0.1, 9.5, whiteRoadMat, p - 2.7, i * 36, 0.028)
        makePlane(0.1, 9.5, whiteRoadMat, p + 2.7, i * 36, 0.028)
        makePlane(9.5, 0.1, whiteRoadMat, i * 36, p - 2.7, 0.03)
        makePlane(9.5, 0.1, whiteRoadMat, i * 36, p + 2.7, 0.03)
      }
    }

    // Sidewalk islands make block edges easier to read at speed.
    for (let gx = -4; gx <= 4; gx++) {
      for (let gz = -4; gz <= 4; gz++) {
        if (gx === 0 || gz === 0) continue
        const cx = gx * 38
        const cz = gz * 38
        makePlane(26.5, 26.5, sidewalkMat, cx, cz, 0.02)
      }
    }

    // Central plaza / park for a visual and navigation landmark.
    const plazaMat = new THREE.MeshStandardMaterial({ color: 0x7d8a83, roughness: 1 })
    makePlane(26, 26, plazaMat, 0, 0, 0.022)
    const parkMat = new THREE.MeshStandardMaterial({ color: 0x315941, roughness: 1 })
    makePlane(18, 18, parkMat, 0, 0, 0.03)
    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3427, roughness: 1 })
    const treeLeafMat = new THREE.MeshStandardMaterial({ color: 0x315e43, roughness: 0.94 })
    for (const [tx, tz] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 2.5, 7), treeTrunkMat)
      trunk.position.set(tx, 1.25, tz)
      scene.add(trunk)
      const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(1.6, 1), treeLeafMat)
      crown.position.set(tx, 3.1, tz)
      crown.scale.y = 1.25
      scene.add(crown)
    }
    const fountainStone = new THREE.MeshStandardMaterial({ color: 0x81959a, roughness: 0.72, metalness: 0.1 })
    const fountainWater = new THREE.MeshStandardMaterial({ color: 0x4bbbd2, roughness: 0.2, metalness: 0.15, transparent: true, opacity: 0.72 })
    const fountainBase = new THREE.Mesh(new THREE.CylinderGeometry(2.15, 2.35, 0.42, 28), fountainStone)
    fountainBase.position.set(0, 0.21, 0)
    scene.add(fountainBase)
    const fountainPool = new THREE.Mesh(new THREE.CylinderGeometry(1.82, 1.82, 0.1, 28), fountainWater)
    fountainPool.position.set(0, 0.46, 0)
    scene.add(fountainPool)
    const fountainColumn = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.34, 1.6, 10), fountainStone)
    fountainColumn.position.set(0, 1.08, 0)
    scene.add(fountainColumn)

    // Park paths, benches, planters and water jets add close-range scale cues without
    // becoming collision or web targets.
    const pathMat = new THREE.MeshStandardMaterial({ color: 0xb3aba0, roughness: 0.96 })
    makePlane(2.2, 17.2, pathMat, 0, 0, 0.036)
    makePlane(17.2, 2.2, pathMat, 0, 0, 0.038)
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x8f6546, roughness: 0.8, metalness: 0.04 })
    const benchLegMat = new THREE.MeshStandardMaterial({ color: 0x26343d, roughness: 0.55, metalness: 0.5 })
    for (const [bx, bz, rot] of [[-7.4, 0, Math.PI / 2], [7.4, 0, -Math.PI / 2], [0, -7.4, 0], [0, 7.4, Math.PI]] as const) {
      const bench = new THREE.Group()
      bench.position.set(bx, 0.35, bz)
      bench.rotation.y = rot
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.14, 0.56), benchMat)
      seat.position.y = 0.18
      bench.add(seat)
      const back = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.62, 0.12), benchMat)
      back.position.set(0, 0.48, -0.24)
      back.rotation.x = -0.12
      bench.add(back)
      for (const lx of [-0.8, 0.8]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.45, 0.34), benchLegMat)
        leg.position.set(lx, -0.02, 0)
        bench.add(leg)
      }
      scene.add(bench)
    }
    const planterMat = new THREE.MeshStandardMaterial({ color: 0x596a6d, roughness: 0.82, metalness: 0.06 })
    const shrubMat = new THREE.MeshStandardMaterial({ color: 0x3b7650, roughness: 0.95 })
    for (const [px, pz] of [[-8.2, -3.5], [8.2, -3.5], [-8.2, 3.5], [8.2, 3.5]]) {
      const planter = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.82, 0.55, 10), planterMat)
      planter.position.set(px, 0.28, pz)
      scene.add(planter)
      const shrub = new THREE.Mesh(new THREE.IcosahedronGeometry(0.74, 1), shrubMat)
      shrub.position.set(px, 0.9, pz)
      shrub.scale.y = 0.78
      scene.add(shrub)
    }
    const jetMat = new THREE.MeshBasicMaterial({ color: 0xbaf7ff, transparent: true, opacity: 0.56 })
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2
      const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.045, 1.5, 6), jetMat)
      jet.position.set(Math.cos(a) * 0.82, 1.2, Math.sin(a) * 0.82)
      jet.rotation.z = Math.cos(a) * 0.22
      jet.rotation.x = Math.sin(a) * 0.22
      scene.add(jet)
    }

    // Crosswalks make intersections readable while swinging at street level.
    const crosswalkMat = new THREE.MeshBasicMaterial({ color: 0xdbe4e4, transparent: true, opacity: 0.7 })
    for (const p of [-114, -76, -38, 38, 76, 114]) {
      for (let stripe = -3; stripe <= 3; stripe++) {
        makePlane(0.85, 5.2, crosswalkMat, p + stripe * 1.15, 5.7, 0.032)
        makePlane(5.2, 0.85, crosswalkMat, 5.7, p + stripe * 1.15, 0.034)
      }
    }

    const buildings: Building[] = []
    const buildingMeshes: THREE.Object3D[] = []
    const basePalette = [0x24364a, 0x2e4657, 0x354e5d, 0x293a50, 0x3d525e, 0x263f53, 0x344454]
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x768996, roughness: 0.55, metalness: 0.25 })
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x1b2833, roughness: 0.8, metalness: 0.18 })
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x526776, roughness: 0.48, metalness: 0.36 })
    const terraceMat = new THREE.MeshStandardMaterial({ color: 0x8ba0a7, roughness: 0.6, metalness: 0.18 })
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x356878, roughness: 0.16, metalness: 0.38, transparent: true, opacity: 0.72 })
    const windowMaterials: Array<{ material: THREE.MeshBasicMaterial; landmark: boolean }> = []
    const beaconMaterials: THREE.MeshBasicMaterial[] = []
    let seed = 173911
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0
      return seed / 4294967296
    }

    const addBuilding = (
      id: string,
      x: number,
      z: number,
      w: number,
      d: number,
      h: number,
      color: number,
      landmark = false,
    ) => {
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: landmark ? 0.38 : 0.68,
        metalness: landmark ? 0.34 : 0.12,
        emissive: landmark ? 0x081a23 : 0x020508,
        emissiveIntensity: landmark ? 0.72 : 0.14,
      })
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
      mesh.position.set(x, h / 2, z)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.userData.buildingId = id
      scene.add(mesh)

      const min = new THREE.Vector3(x - w / 2, 0, z - d / 2)
      const max = new THREE.Vector3(x + w / 2, h, z + d / 2)
      buildings.push({ id, min, max, mesh })
      buildingMeshes.push(mesh)

      const windowColor = landmark ? 0x9eefff : 0x9ccbd6
      const windowMat = new THREE.MeshBasicMaterial({
        color: windowColor,
        transparent: true,
        opacity: landmark ? 0.82 : 0.48,
      })
      windowMaterials.push({ material: windowMat, landmark })
      const rows = Math.max(2, Math.floor(h / 4.8))
      for (let r = 1; r < rows; r++) {
        const y = (r / rows) * h - h / 2
        const front = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.72, 0.18), windowMat)
        front.position.set(0, y, d / 2 + 0.008)
        mesh.add(front)
        const back = front.clone()
        back.rotation.y = Math.PI
        back.position.z = -d / 2 - 0.008
        mesh.add(back)
        const side = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.72, 0.18), windowMat)
        side.rotation.y = Math.PI / 2
        side.position.set(w / 2 + 0.008, y, 0)
        mesh.add(side)
        const side2 = side.clone()
        side2.rotation.y = -Math.PI / 2
        side2.position.x = -w / 2 - 0.008
        mesh.add(side2)
      }

      // Architectural frame: corner piers, vertical mullions and belt courses break up
      // the procedural box silhouette while staying essentially inside the collision envelope.
      const detailTier = (Math.abs(Math.round(x / 9)) + Math.abs(Math.round(z / 9)) + Math.round(h)) % 3
      if (landmark || detailTier === 0) {
        const pierW = Math.min(0.24, Math.max(0.12, w * 0.018))
        for (const px of [-w / 2 + pierW / 2, w / 2 - pierW / 2]) {
          for (const pz of [-d / 2 + pierW / 2, d / 2 - pierW / 2]) {
            const pier = new THREE.Mesh(new THREE.BoxGeometry(pierW, h * 0.97, pierW), frameMat)
            pier.position.set(px, 0, pz)
            mesh.add(pier)
          }
        }
        for (const frac of [-0.24, 0.24]) {
          const frontMullion = new THREE.Mesh(new THREE.BoxGeometry(0.075, h * 0.94, 0.07), frameMat)
          frontMullion.position.set(w * frac, 0, d / 2 - 0.015)
          mesh.add(frontMullion)
          const backMullion = frontMullion.clone()
          backMullion.position.z = -d / 2 + 0.015
          mesh.add(backMullion)
        }
      }
      if (landmark || (h > 28 && detailTier !== 2)) {
        const beltCount = landmark || h > 45 ? 2 : 1
        for (let i = 1; i <= beltCount; i++) {
          const y = -h / 2 + (i / (beltCount + 1)) * h
          const belt = new THREE.Mesh(new THREE.BoxGeometry(w * 0.985, 0.12, d * 0.985), terraceMat)
          belt.position.y = y
          mesh.add(belt)
        }
      }

      // Roof cap and occasional mechanical box / antenna add silhouette variety.
      const capW = w * 1.03
      const capD = d * 1.03
      const capH = 0.35
      const cap = new THREE.Mesh(new THREE.BoxGeometry(capW, capH, capD), trimMat)
      cap.position.y = h / 2 + 0.17
      cap.castShadow = true
      const capId = `${id}-roof-cap`
      cap.userData.buildingId = capId
      mesh.add(cap)
      buildings.push({
        id: capId,
        min: new THREE.Vector3(x - capW / 2, h - 0.005, z - capD / 2),
        max: new THREE.Vector3(x + capW / 2, h - 0.005 + capH, z + capD / 2),
        mesh: cap,
      })
      buildingMeshes.push(cap)

      if (h > 32 && rand() > 0.48) {
        const mechW = w * 0.28
        const mechD = d * 0.28
        const mechH = 1.5 + rand() * 1.8
        const mech = new THREE.Mesh(new THREE.BoxGeometry(mechW, mechH, mechD), roofMat)
        mech.position.set((rand() - 0.5) * w * 0.36, h / 2 + 0.9, (rand() - 0.5) * d * 0.36)
        const mechId = `${id}-rooftop-unit`
        mech.userData.buildingId = mechId
        mesh.add(mech)
        const mechWorldX = x + mech.position.x
        const mechWorldY = h / 2 + mech.position.y
        const mechWorldZ = z + mech.position.z
        buildings.push({
          id: mechId,
          min: new THREE.Vector3(mechWorldX - mechW / 2, mechWorldY - mechH / 2, mechWorldZ - mechD / 2),
          max: new THREE.Vector3(mechWorldX + mechW / 2, mechWorldY + mechH / 2, mechWorldZ + mechD / 2),
          mesh: mech,
        })
        buildingMeshes.push(mech)
      }
      if (!landmark && h > 34 && rand() > 0.42) {
        const pavilionW = w * (0.38 + rand() * 0.16)
        const pavilionD = d * (0.38 + rand() * 0.16)
        const pavilionH = 2.2 + rand() * 3.2
        const pavilion = new THREE.Mesh(new THREE.BoxGeometry(pavilionW, pavilionH, pavilionD), glassMat)
        pavilion.position.set((rand() - 0.5) * w * 0.14, h / 2 + pavilionH / 2 + 0.36, (rand() - 0.5) * d * 0.14)
        pavilion.castShadow = true
        const pavilionId = `${id}-roof-pavilion`
        pavilion.userData.buildingId = pavilionId
        mesh.add(pavilion)
        const wx = x + pavilion.position.x
        const wz = z + pavilion.position.z
        buildings.push({
          id: pavilionId,
          min: new THREE.Vector3(wx - pavilionW / 2, h + 0.36, wz - pavilionD / 2),
          max: new THREE.Vector3(wx + pavilionW / 2, h + 0.36 + pavilionH, wz + pavilionD / 2),
          mesh: pavilion,
        })
        buildingMeshes.push(pavilion)
        const pavilionCrown = new THREE.Mesh(new THREE.BoxGeometry(pavilionW * 1.08, 0.18, pavilionD * 1.08), trimMat)
        pavilionCrown.position.y = pavilionH / 2 + 0.08
        pavilion.add(pavilionCrown)
      }
      if (h > 46 && rand() > 0.72) {
        const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.16, 5 + rand() * 5, 7), trimMat)
        antenna.position.y = h / 2 + 3.2
        mesh.add(antenna)
      }
      if (landmark) {
        const beaconMat = new THREE.MeshBasicMaterial({ color: 0x9defff, transparent: true, opacity: 0.72 })
        beaconMaterials.push(beaconMat)
        const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 7), beaconMat)
        beacon.position.set(0, h / 2 + 0.9, 0)
        mesh.add(beacon)
      }
      return mesh
    }

    for (let ix = -4; ix <= 4; ix++) {
      for (let iz = -4; iz <= 4; iz++) {
        if (ix === 0 || iz === 0) continue
        const cx = ix * 38
        const cz = iz * 38
        const slots: Array<[number, number]> = [[-9.2, -9.2], [9.2, -9.2], [-9.2, 9.2], [9.2, 9.2]]
        slots.forEach(([sx, sz], n) => {
          if (rand() < 0.08) return
          const w = 9.2 + rand() * 5.4
          const d = 9.2 + rand() * 5.4
          const centerBoost = Math.max(0, 5 - (Math.abs(ix) + Math.abs(iz))) * 4
          const h = 18 + rand() * 38 + centerBoost
          const jitterX = (rand() - 0.5) * 1.4
          const jitterZ = (rand() - 0.5) * 1.4
          addBuilding(
            `block-${ix}-${iz}-${n}`,
            cx + sx + jitterX,
            cz + sz + jitterZ,
            w,
            d,
            h,
            basePalette[Math.floor(rand() * basePalette.length)],
          )
        })
      }
    }

    // Original landmarks: needle crown, stepped monolith, bridge twins.
    const needle = addBuilding('landmark-needle', 0, -76, 18, 18, 82, 0x285267, true)
    const crown = new THREE.Mesh(
      new THREE.ConeGeometry(6.2, 18, 4),
      new THREE.MeshStandardMaterial({ color: 0x64b6c9, metalness: 0.48, roughness: 0.28, emissive: 0x0a2934, emissiveIntensity: 0.9 }),
    )
    crown.position.y = 50
    crown.rotation.y = Math.PI / 4
    needle.add(crown)
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.72, 16, 8), trimMat)
    spire.position.y = 66
    needle.add(spire)
    const crownRingMat = new THREE.MeshBasicMaterial({ color: 0x9ef4ff, transparent: true, opacity: 0.72 })
    for (const y of [42.5, 47.5]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(6.1, 0.13, 8, 28), crownRingMat)
      ring.position.y = y
      ring.rotation.x = Math.PI / 2
      needle.add(ring)
    }
    for (const angle of [0, Math.PI / 2, Math.PI / 4, -Math.PI / 4]) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.22, 13, 2.4), frameMat)
      fin.position.y = 49
      fin.rotation.y = angle
      needle.add(fin)
    }

    addBuilding('landmark-steps-base', -74, 14, 22, 21, 55, 0x465f6f, true)
    const stepsTop = new THREE.Mesh(
      new THREE.BoxGeometry(15, 18, 14),
      new THREE.MeshStandardMaterial({ color: 0x55798a, roughness: 0.36, metalness: 0.32, emissive: 0x0b252d, emissiveIntensity: 0.7 }),
    )
    stepsTop.position.set(-74, 64, 14)
    stepsTop.castShadow = true
    stepsTop.receiveShadow = true
    stepsTop.userData.buildingId = 'landmark-steps-top'
    scene.add(stepsTop)
    buildings.push({
      id: 'landmark-steps-top',
      min: new THREE.Vector3(-81.5, 55, 7),
      max: new THREE.Vector3(-66.5, 73, 21),
      mesh: stepsTop,
    })
    buildingMeshes.push(stepsTop)
    const stepsCrown = new THREE.Mesh(
      new THREE.BoxGeometry(9.5, 10, 9),
      new THREE.MeshStandardMaterial({ color: 0x6a8f9d, roughness: 0.31, metalness: 0.38, emissive: 0x0c2b34, emissiveIntensity: 0.75 }),
    )
    stepsCrown.position.set(-74, 78, 14)
    stepsCrown.castShadow = true
    stepsCrown.userData.buildingId = 'landmark-steps-crown'
    scene.add(stepsCrown)
    buildings.push({ id: 'landmark-steps-crown', min: new THREE.Vector3(-78.75, 73, 9.5), max: new THREE.Vector3(-69.25, 83, 18.5), mesh: stepsCrown })
    buildingMeshes.push(stepsCrown)
    const stepsBeacon = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.28, 8, 8), trimMat)
    stepsBeacon.position.set(-74, 87, 14)
    scene.add(stepsBeacon)

    addBuilding('landmark-bridge-a', 60, 58, 18, 18, 56, 0x31566d, true)
    addBuilding('landmark-bridge-b', 88, 58, 18, 18, 56, 0x31566d, true)
    const skybridge = new THREE.Mesh(
      new THREE.BoxGeometry(12, 5.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x6794a5, metalness: 0.42, roughness: 0.32, emissive: 0x12343f, emissiveIntensity: 0.7 }),
    )
    skybridge.position.set(74, 39.5, 58)
    skybridge.castShadow = true
    skybridge.receiveShadow = true
    skybridge.userData.buildingId = 'landmark-skybridge'
    scene.add(skybridge)
    buildings.push({
      id: 'landmark-skybridge',
      min: new THREE.Vector3(68, 36.75, 54),
      max: new THREE.Vector3(80, 42.25, 62),
      mesh: skybridge,
    })
    buildingMeshes.push(skybridge)
    const trussMat = new THREE.MeshStandardMaterial({ color: 0x8dc1cd, roughness: 0.38, metalness: 0.52, emissive: 0x0d3039, emissiveIntensity: 0.46 })
    for (const side of [-1, 1]) {
      const railTop = new THREE.Mesh(new THREE.BoxGeometry(12.3, 0.18, 0.18), trussMat)
      railTop.position.set(74, 42.1, 58 + side * 3.78)
      scene.add(railTop)
      const railBottom = railTop.clone()
      railBottom.position.y = 37.1
      scene.add(railBottom)
      for (const dx of [-4.3, 0, 4.3]) {
        const brace = new THREE.Mesh(new THREE.BoxGeometry(0.18, 5.1, 0.18), trussMat)
        brace.position.set(74 + dx, 39.6, 58 + side * 3.78)
        brace.rotation.z = dx === 0 ? 0 : (dx < 0 ? -0.62 : 0.62)
        scene.add(brace)
      }
    }
    const bridgeGlow = new THREE.Mesh(new THREE.BoxGeometry(11.2, 0.08, 6.4), new THREE.MeshBasicMaterial({ color: 0x7ce9f2, transparent: true, opacity: 0.28 }))
    bridgeGlow.position.set(74, 36.92, 58)
    scene.add(bridgeGlow)

    // Decorative street lamps, non-collidable and non-web targets.
    const lampMat = new THREE.MeshStandardMaterial({ color: 0x253442, roughness: 0.45, metalness: 0.58 })
    const lampGlowMat = new THREE.MeshBasicMaterial({ color: 0xbff6ff })
    for (let i = -4; i <= 4; i++) {
      if (i === 0) continue
      for (const sign of [-1, 1]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 4.2, 6), lampMat)
        pole.position.set(i * 38 + 6.2 * sign, 2.1, 5.9)
        scene.add(pole)
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.08, 0.08), lampMat)
        arm.position.set(pole.position.x + 0.4 * sign, 4.02, pole.position.z)
        scene.add(arm)
        const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), lampGlowMat)
        bulb.position.set(pole.position.x + 0.78 * sign, 3.96, pole.position.z)
        scene.add(bulb)
      }
    }

    // Stars and moon are generated in code and only visible at night.
    const starsGeometry = new THREE.BufferGeometry()
    const starCount = 650
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      const theta = rand() * Math.PI * 2
      const phi = Math.acos(0.15 + rand() * 0.85)
      const r = 290
      starPositions[i * 3] = Math.sin(phi) * Math.cos(theta) * r
      starPositions[i * 3 + 1] = Math.abs(Math.cos(phi) * r) + 35
      starPositions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * r
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const stars = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0xccecff, size: 0.7, sizeAttenuation: true }))
    stars.visible = false
    scene.add(stars)
    const moon = new THREE.Mesh(new THREE.SphereGeometry(7, 20, 14), new THREE.MeshBasicMaterial({ color: 0xe6efff }))
    moon.position.set(120, 115, -170)
    moon.visible = false
    scene.add(moon)

    // --- Player art --------------------------------------------------------
    const playerRoot = new THREE.Group()
    scene.add(playerRoot)
    const bodyRoot = new THREE.Group()
    playerRoot.add(bodyRoot)
    // Web emitter is part of the visible character rig and stays inside the actual body collider.
    // Keeping the rendered line endpoint on the body also makes the public endpoint contract exact.
    const webEmitter = new THREE.Object3D()
    webEmitter.position.set(0.22, 0.38, 0.22)
    bodyRoot.add(webEmitter)

    const suitMat = new THREE.MeshStandardMaterial({ color: 0x0c8faa, roughness: 0.42, metalness: 0.18 })
    const accentMat = new THREE.MeshStandardMaterial({ color: 0xf04b67, roughness: 0.47, metalness: 0.1 })
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x101a2b, roughness: 0.52, metalness: 0.14 })
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xe8fdff })
    const armorMat = new THREE.MeshStandardMaterial({ color: 0x17465a, roughness: 0.31, metalness: 0.34 })
    const trimGlowMat = new THREE.MeshBasicMaterial({ color: 0x7cecff, transparent: true, opacity: 0.78 })

    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.43, 0.72, 6, 10), suitMat)
    torso.position.y = 0.08
    torso.scale.set(1.08, 1, 0.8)
    torso.castShadow = true
    bodyRoot.add(torso)
    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.36, 0.08), accentMat)
    chest.position.set(0, 0.28, 0.35)
    chest.rotation.x = -0.12
    bodyRoot.add(chest)
    const chestCore = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.26, 0.04), trimGlowMat)
    chestCore.position.set(0, 0.3, 0.402)
    chestCore.rotation.z = Math.PI / 4
    bodyRoot.add(chestCore)
    for (const sx of [-1, 1]) {
      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 7), armorMat)
      shoulder.scale.set(1.25, 0.72, 0.88)
      shoulder.position.set(0.42 * sx, 0.5, 0)
      bodyRoot.add(shoulder)
      const collar = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.1, 0.16), darkMat)
      collar.position.set(0.19 * sx, 0.58, 0.08)
      collar.rotation.z = sx * 0.18
      bodyRoot.add(collar)
    }
    const backPlate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.48, 0.08), armorMat)
    backPlate.position.set(0, 0.18, -0.34)
    backPlate.rotation.x = 0.08
    bodyRoot.add(backPlate)
    const spineLight = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.42, 0.03), trimGlowMat)
    spineLight.position.set(0, 0.18, -0.392)
    bodyRoot.add(spineLight)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 12), accentMat)
    head.scale.set(0.94, 1.08, 0.92)
    head.position.y = 0.92
    head.castShadow = true
    bodyRoot.add(head)
    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), eyeMat)
      eye.scale.set(0.54, 1.58, 0.16)
      eye.rotation.z = sx * -0.18
      eye.position.set(0.13 * sx, 0.98, 0.29)
      bodyRoot.add(eye)
    }
    const hips = new THREE.Mesh(new THREE.SphereGeometry(0.39, 12, 8), darkMat)
    hips.scale.set(1, 0.63, 0.86)
    hips.position.y = -0.52
    bodyRoot.add(hips)
    const belt = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.055, 6, 18), armorMat)
    belt.position.y = -0.5
    belt.rotation.x = Math.PI / 2
    bodyRoot.add(belt)

    type LimbRig = { root: THREE.Group; lower: THREE.Group; hand: THREE.Mesh | null }
    const makeLimb = (x: number, y: number, upperLen: number, lowerLen: number, radius: number, mat: THREE.Material): LimbRig => {
      const root = new THREE.Group()
      root.position.set(x, y, 0)
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(radius, upperLen, 4, 7), mat)
      upper.position.y = -upperLen / 2
      upper.castShadow = true
      root.add(upper)
      const lower = new THREE.Group()
      lower.position.y = -upperLen
      const lowerMesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius * 0.9, lowerLen, 4, 7), mat)
      lowerMesh.position.y = -lowerLen / 2
      lowerMesh.castShadow = true
      lower.add(lowerMesh)
      root.add(lower)
      bodyRoot.add(root)
      return { root, lower, hand: null }
    }

    const leftArm = makeLimb(-0.49, 0.46, 0.42, 0.4, 0.1, accentMat)
    const rightArm = makeLimb(0.49, 0.46, 0.42, 0.4, 0.1, accentMat)
    const leftLeg = makeLimb(-0.22, -0.62, 0.46, 0.46, 0.115, darkMat)
    const rightLeg = makeLimb(0.22, -0.62, 0.46, 0.46, 0.115, darkMat)
    for (const arm of [leftArm, rightArm]) {
      const bracer = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.095, 0.22, 8), armorMat)
      bracer.position.y = -0.29
      arm.lower.add(bracer)
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.115, 8, 6), accentMat)
      hand.scale.set(0.8, 1.08, 0.86)
      hand.position.y = -0.49
      arm.lower.add(hand)
      arm.hand = hand
    }
    for (const leg of [leftLeg, rightLeg]) {
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.35), armorMat)
      boot.position.set(0, -0.48, 0.09)
      leg.lower.add(boot)
    }

    // Segmented web line: still represents the same physical rope, but the extra vertices let
    // us show a tiny amount of sag while slack and a high-frequency tremor when tension rises.
    const WEB_SEGMENTS = 10
    const webGeometry = new THREE.BufferGeometry()
    webGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(WEB_SEGMENTS * 3), 3))
    const webLineMaterial = new THREE.LineBasicMaterial({ color: 0xe8fbff, transparent: true, opacity: 0.96 })
    const webLine = new THREE.Line(webGeometry, webLineMaterial)
    webLine.visible = false
    webLine.frustumCulled = false
    scene.add(webLine)
    const webGlowGeometry = webGeometry.clone()
    const webGlowMaterial = new THREE.LineBasicMaterial({ color: 0x5ad8ff, transparent: true, opacity: 0.27 })
    const webGlow = new THREE.Line(webGlowGeometry, webGlowMaterial)
    webGlow.visible = false
    webGlow.frustumCulled = false
    scene.add(webGlow)
    const webAnchorPulse = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0xa9f6ff, transparent: true, opacity: 0.7 }),
    )
    webAnchorPulse.visible = false
    scene.add(webAnchorPulse)

    const aimDot = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 10, 8),
      new THREE.MeshBasicMaterial({ color: 0x79ecff, transparent: true, opacity: 0.78 }),
    )
    aimDot.visible = false
    scene.add(aimDot)

    // A subtle procedural motion ribbon makes high-speed launches readable without
    // adding particles, textures, or remote art assets.
    const trailCount = 12
    const trailPositions = new Float32Array(trailCount * 3)
    const trailGeometry = new THREE.BufferGeometry()
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
    const trailMaterial = new THREE.LineBasicMaterial({ color: 0x8befff, transparent: true, opacity: 0.18 })
    const motionTrail = new THREE.Line(trailGeometry, trailMaterial)
    motionTrail.frustumCulled = false
    motionTrail.visible = false
    scene.add(motionTrail)

    // --- Runtime state -----------------------------------------------------
    const playerPos = new THREE.Vector3(0, PLAYER_HEIGHT / 2 + 0.02, 12)
    for (let i = 0; i < trailCount; i++) {
      trailPositions[i * 3] = playerPos.x
      trailPositions[i * 3 + 1] = playerPos.y
      trailPositions[i * 3 + 2] = playerPos.z
    }
    const velocity = new THREE.Vector3()
    const camTarget = new THREE.Vector3()
    const desiredCamPos = new THREE.Vector3()
    const inputDir = new THREE.Vector3()
    const tmp = new THREE.Vector3()
    const tmp2 = new THREE.Vector3()
    const tmp3 = new THREE.Vector3()
    const tmp4 = new THREE.Vector3()
    const desiredCamTarget = new THREE.Vector3()
    const webPlayerEndpoint = new THREE.Vector3()
    const releaseVelocity = new THREE.Vector3()
    const webRay = new THREE.Raycaster()
    webRay.far = MAX_WEB_RANGE

    let grounded = true
    let movementState: MovementState = 'idle'
    let yaw = 0
    let pitch = 0.35
    let elapsedTime = 0
    let running = true
    let ready = false
    let attached = false
    let anchor: THREE.Vector3 | null = null
    let anchorObjectId: string | null = null
    let ropeLength: number | null = null
    let targetValid = false
    let targetPoint: THREE.Vector3 | null = null
    let targetObjectId: string | null = null
    let pointerLocked = false
    let night = false
    let accumulator = 0
    let previous = performance.now() / 1000
    let lastHud = 0
    let coyoteTimer = 0
    let jumpBufferTimer = 0
    let jumpHeld = false
    let ropeTension = 0
    let webCatchAge = 0
    let ropeBlockFrames = 0
    let detachMomentumGrace = 0
    let cameraShoulder = 0
    let cameraRoll = 0
    let cameraPitchBias = 0
    let cameraRenderPitch = pitch
    let landingKick = 0
    let landingMomentumGrace = 0
    let lastReleaseSpeed = 0
    let webButtonHeld = false
    let lastAttachAttempt = -1
    let reelFeedback = 0
    let reelDirection: 'in' | 'out' | null = null
    let reelVelocity = 0
    let shoulderSide = 1
    const keys = new Set<string>()

    function resize() {
      const rect = mount.getBoundingClientRect()
      const w = Math.max(1, Math.floor(rect.width))
      const h = Math.max(1, Math.floor(rect.height))
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)

    function setNightMode(value: boolean) {
      night = value
      stars.visible = value
      moon.visible = value
      if (value) {
        scene.background = nightSky
        scene.fog = new THREE.FogExp2(0x050a18, 0.0034)
        hemi.color.set(0x6a83b1)
        hemi.groundColor.set(0x050b16)
        hemi.intensity = 0.78
        sun.color.set(0x8da8dd)
        sun.intensity = 0.72
        rim.color.set(0x5dd9ff)
        rim.intensity = 1.25
        renderer.toneMappingExposure = 0.82
        lampGlowMat.color.set(0xe4fbff)
        skyUniforms.topColor.value.set(0x020713)
        skyUniforms.horizonColor.value.set(0x101d3a)
        skyUniforms.bottomColor.value.set(0x040913)
        sunDisc.visible = false
        for (const item of windowMaterials) {
          item.material.opacity = item.landmark ? 0.98 : 0.72
          item.material.color.set(item.landmark ? 0xbdf7ff : 0xd6e89f)
        }
        for (const material of beaconMaterials) {
          material.opacity = 1
          material.color.set(0x8ef5ff)
        }
      } else {
        scene.background = daySky
        scene.fog = new THREE.FogExp2(daySky, 0.0026)
        hemi.color.set(0xd9f3ff)
        hemi.groundColor.set(0x223149)
        hemi.intensity = 1.95
        sun.color.set(0xfff0cf)
        sun.intensity = 3.6
        rim.color.set(0x7ddcff)
        rim.intensity = 0.75
        renderer.toneMappingExposure = 1.04
        lampGlowMat.color.set(0xbff6ff)
        skyUniforms.topColor.value.set(0x58a9d1)
        skyUniforms.horizonColor.value.set(0xd9edf2)
        skyUniforms.bottomColor.value.set(0x7eabb6)
        sunDisc.visible = true
        for (const item of windowMaterials) {
          item.material.opacity = item.landmark ? 0.82 : 0.48
          item.material.color.set(item.landmark ? 0x9eefff : 0x9ccbd6)
        }
        for (const material of beaconMaterials) {
          material.opacity = 0.72
          material.color.set(0x9defff)
        }
      }
    }

    // Character collision uses continuous sweep tests against the Minkowski-expanded
    // building bounds. The public radius/height values are the exact controller extents:
    // radius in X/Z and height vertically. Sweeps stop tunneling at swing speeds, while
    // contact response removes only inward normal velocity so wall-sliding keeps momentum.
    function sweepPointAabb(
      origin: THREE.Vector3,
      delta: THREE.Vector3,
      minX: number, minY: number, minZ: number,
      maxX: number, maxY: number, maxZ: number,
      outNormal: THREE.Vector3,
    ) {
      let tEnter = -Infinity
      let tExit = Infinity
      let nx = 0
      let ny = 0
      let nz = 0

      const testAxis = (o: number, d: number, mn: number, mx: number, axis: 0 | 1 | 2) => {
        if (Math.abs(d) < COLLISION_EPS) {
          return o >= mn && o <= mx
        }
        let tNear = (mn - o) / d
        let tFar = (mx - o) / d
        let nearSign = -1
        if (tNear > tFar) {
          const swap = tNear
          tNear = tFar
          tFar = swap
          nearSign = 1
        }
        if (tNear > tEnter) {
          tEnter = tNear
          nx = axis === 0 ? nearSign : 0
          ny = axis === 1 ? nearSign : 0
          nz = axis === 2 ? nearSign : 0
        }
        tExit = Math.min(tExit, tFar)
        return tEnter <= tExit
      }

      if (!testAxis(origin.x, delta.x, minX, maxX, 0)) return null
      if (!testAxis(origin.y, delta.y, minY, maxY, 1)) return null
      if (!testAxis(origin.z, delta.z, minZ, maxZ, 2)) return null
      if (tExit < -COLLISION_EPS || tEnter > 1 + COLLISION_EPS || tEnter < -COLLISION_EPS) return null

      outNormal.set(nx, ny, nz)
      if (outNormal.lengthSq() < 0.5) return null
      return THREE.MathUtils.clamp(tEnter, 0, 1)
    }

    function removeInwardVelocity(normal: THREE.Vector3) {
      const into = velocity.dot(normal)
      if (into < 0) velocity.addScaledVector(normal, -into)
    }

    // A small depenetration pass is retained as a safety net for spawn/reset, floating-point
    // drift and rope corrections. Normal gameplay collision is handled by sweeps below.
    function depenetrateCharacter() {
      const halfHeight = PLAYER_HEIGHT / 2
      const floorCenter = GROUND_Y + halfHeight
      if (playerPos.y < floorCenter) {
        playerPos.y = floorCenter
        if (velocity.y < 0) velocity.y = 0
        grounded = true
      }

      for (let pass = 0; pass < 4; pass++) {
        let corrected = false
        for (const b of buildings) {
          const minX = b.min.x - PLAYER_RADIUS
          const maxX = b.max.x + PLAYER_RADIUS
          const minY = b.min.y - halfHeight
          const maxY = b.max.y + halfHeight
          const minZ = b.min.z - PLAYER_RADIUS
          const maxZ = b.max.z + PLAYER_RADIUS
          if (
            playerPos.x <= minX || playerPos.x >= maxX ||
            playerPos.y <= minY || playerPos.y >= maxY ||
            playerPos.z <= minZ || playerPos.z >= maxZ
          ) continue

          let bestDistance = playerPos.x - minX
          let bestAxis: 'x-' | 'x+' | 'y-' | 'y+' | 'z-' | 'z+' = 'x-'
          const consider = (distance: number, axis: typeof bestAxis) => {
            if (distance < bestDistance) {
              bestDistance = distance
              bestAxis = axis
            }
          }
          consider(maxX - playerPos.x, 'x+')
          // Never depenetrate downward through a building that is connected to the city ground.
          // Floating bodies such as the skybridge still allow a legitimate underside correction.
          if (b.min.y > GROUND_Y + 0.05) consider(playerPos.y - minY, 'y-')
          consider(maxY - playerPos.y, 'y+')
          consider(playerPos.z - minZ, 'z-')
          consider(maxZ - playerPos.z, 'z+')

          const push = bestDistance + COLLISION_SKIN
          if (bestAxis === 'x-') { playerPos.x -= push; candidateNormal.set(-1, 0, 0) }
          else if (bestAxis === 'x+') { playerPos.x += push; candidateNormal.set(1, 0, 0) }
          else if (bestAxis === 'y-') { playerPos.y -= push; candidateNormal.set(0, -1, 0) }
          else if (bestAxis === 'y+') { playerPos.y += push; candidateNormal.set(0, 1, 0) }
          else if (bestAxis === 'z-') { playerPos.z -= push; candidateNormal.set(0, 0, -1) }
          else { playerPos.z += push; candidateNormal.set(0, 0, 1) }

          removeInwardVelocity(candidateNormal)
          if (candidateNormal.y > 0.5) grounded = true
          corrected = true
        }
        if (!corrected) break
      }
    }

    const sweepNormal = new THREE.Vector3()
    const candidateNormal = new THREE.Vector3()
    const cameraSweepNormal = new THREE.Vector3()
    const remainingMove = new THREE.Vector3()
    const moveEnd = new THREE.Vector3()

    function moveCharacter(delta: THREE.Vector3) {
      remainingMove.copy(delta)
      const halfHeight = PLAYER_HEIGHT / 2
      const floorCenter = GROUND_Y + halfHeight

      for (let iter = 0; iter < MAX_SLIDE_ITERS; iter++) {
        const moveLength = remainingMove.length()
        if (moveLength < 1e-6) break

        let bestT = 1
        let foundHit = false
        sweepNormal.set(0, 0, 0)
        moveEnd.copy(playerPos).add(remainingMove)

        // Infinite ground plane. Starting exactly on the floor and moving down gives t=0,
        // keeping grounded contact stable without sinking below the plane.
        if (remainingMove.y < -COLLISION_EPS && playerPos.y >= floorCenter - COLLISION_SKIN) {
          const t = (floorCenter - playerPos.y) / remainingMove.y
          if (t >= -COLLISION_EPS && t <= bestT) {
            bestT = THREE.MathUtils.clamp(t, 0, 1)
            sweepNormal.set(0, 1, 0)
            foundHit = true
          }
        }

        for (const b of buildings) {
          const minX = b.min.x - PLAYER_RADIUS
          const maxX = b.max.x + PLAYER_RADIUS
          const minY = b.min.y - halfHeight
          const maxY = b.max.y + halfHeight
          const minZ = b.min.z - PLAYER_RADIUS
          const maxZ = b.max.z + PLAYER_RADIUS

          // Swept broad phase avoids a full slab test for distant city blocks.
          if (Math.max(playerPos.x, moveEnd.x) < minX || Math.min(playerPos.x, moveEnd.x) > maxX) continue
          if (Math.max(playerPos.y, moveEnd.y) < minY || Math.min(playerPos.y, moveEnd.y) > maxY) continue
          if (Math.max(playerPos.z, moveEnd.z) < minZ || Math.min(playerPos.z, moveEnd.z) > maxZ) continue

          const t = sweepPointAabb(
            playerPos, remainingMove,
            minX, minY, minZ, maxX, maxY, maxZ,
            candidateNormal,
          )
          if (t == null || t > bestT + COLLISION_EPS) continue
          // Prefer a more upward-facing contact when two faces are hit at effectively the same
          // time. This makes building roof edges land cleanly instead of randomly wall-catching.
          if (!foundHit || t < bestT - 1e-5 || candidateNormal.y > sweepNormal.y) {
            bestT = t
            sweepNormal.copy(candidateNormal)
            foundHit = true
          }
        }

        if (!foundHit) {
          playerPos.add(remainingMove)
          break
        }

        // Roof/floor contacts land exactly on the support plane so grounded does not flicker.
        // Side contacts keep a tiny skin gap to avoid precision re-entry at facade corners.
        const isVerticalContact = Math.abs(sweepNormal.y) > 0.5
        const backoffT = isVerticalContact ? 0 : Math.min(bestT, COLLISION_SKIN / Math.max(moveLength, COLLISION_SKIN))
        const travelT = Math.max(0, bestT - backoffT)
        if (travelT > 0) playerPos.addScaledVector(remainingMove, travelT)
        if (!isVerticalContact) playerPos.addScaledVector(sweepNormal, COLLISION_SKIN * 0.18)

        remainingMove.multiplyScalar(1 - bestT)
        const remainingInto = remainingMove.dot(sweepNormal)
        if (remainingInto < 0) remainingMove.addScaledVector(sweepNormal, -remainingInto)
        removeInwardVelocity(sweepNormal)

        if (sweepNormal.y > 0.5) {
          grounded = true
          if (velocity.y < 0) velocity.y = 0
        } else if (sweepNormal.y < -0.5 && velocity.y > 0) {
          velocity.y = 0
        }
      }

      depenetrateCharacter()
    }

    function cameraForwardFlat() {
      return tmp3.set(-Math.sin(yaw), 0, -Math.cos(yaw)).normalize()
    }

    function updateTargeting() {
      webRay.setFromCamera(new THREE.Vector2(0, 0), camera)
      const hit = webRay.intersectObjects(buildingMeshes, false)[0]
      if (hit && hit.distance <= MAX_WEB_RANGE) {
        targetValid = true
        targetPoint = hit.point.clone()
        targetObjectId = String(hit.object.userData.buildingId ?? '') || null
        aimDot.position.copy(hit.point)
        aimDot.scale.setScalar(0.85 + Math.sin(elapsedTime * 8) * 0.12)
        aimDot.visible = true
      } else {
        targetValid = false
        targetPoint = null
        targetObjectId = null
        aimDot.visible = false
      }
    }

    function attachWeb() {
      // Targeting is sampled every fixed step. Reuse the exact point currently shown by the
      // reticle instead of doing a second synchronous city raycast inside the mouse handler.
      if (!targetValid || !targetPoint || !targetObjectId) return
      if (!Number.isFinite(targetPoint.x + targetPoint.y + targetPoint.z)) return
      attached = true
      anchor = targetPoint.clone()
      anchorObjectId = targetObjectId
      // The swing hangs a touch short of the straight-line span, so keep some slack in the line.
      ropeLength = THREE.MathUtils.clamp(playerPos.distanceTo(anchor) * 0.85, WEB_MIN_LENGTH, MAX_WEB_RANGE)
      ropeTension = 0
      webCatchAge = 0
      ropeBlockFrames = 0
      detachMomentumGrace = 0
      webLine.visible = true
      webGlow.visible = true
      webAnchorPulse.visible = true
      webAnchorPulse.position.copy(anchor)
    }

    function detachWeb() {
      if (attached) {
        releaseVelocity.copy(velocity)
        lastReleaseSpeed = releaseVelocity.length()
        detachMomentumGrace = 0.72
      }
      attached = false
      anchor = null
      anchorObjectId = null
      ropeLength = null
      ropeTension = 0
      webCatchAge = 0
      ropeBlockFrames = 0
      webLine.visible = false
      webGlow.visible = false
      webAnchorPulse.visible = false
    }

    function adjustRopeLength(deltaY: number) {
      if (!attached || !anchor || ropeLength == null) return
      // Wheel input feeds a short reel velocity rather than snapping ropeLength immediately.
      // This keeps the line feeling mechanical while the real rope constraint remains authoritative.
      const impulse = THREE.MathUtils.clamp(Math.abs(deltaY) * 0.036, 1.8, 5.4)
      reelVelocity = THREE.MathUtils.clamp(
        reelVelocity + (deltaY > 0 ? impulse : -impulse),
        -10.5,
        10.5,
      )
      reelDirection = reelVelocity < 0 ? 'in' : 'out'
      reelFeedback = 0.48
    }

    function updateRopeReel(dt: number) {
      if (!attached || !anchor || ropeLength == null) {
        reelVelocity = THREE.MathUtils.damp(reelVelocity, 0, 12, dt)
        return
      }
      const currentDistance = playerPos.distanceTo(anchor)
      const minLength = Math.max(WEB_MIN_LENGTH, currentDistance - 13)
      const maxLength = Math.min(MAX_WEB_RANGE, Math.max(currentDistance + 28, ropeLength))
      ropeLength = THREE.MathUtils.clamp(ropeLength + reelVelocity * dt, minLength, maxLength)
      reelVelocity = THREE.MathUtils.damp(reelVelocity, 0, 7.5, dt)
      if (Math.abs(reelVelocity) < 0.08) reelVelocity = 0
    }

    function getWebPlayerEndpoint(out: THREE.Vector3) {
      return webEmitter.getWorldPosition(out)
    }

    function updateWebLine() {
      if (!attached || !anchor) {
        webLine.visible = false
        webGlow.visible = false
        webAnchorPulse.visible = false
        return
      }
      const endpoint = getWebPlayerEndpoint(webPlayerEndpoint)
      if (!Number.isFinite(endpoint.x + endpoint.y + endpoint.z + anchor.x + anchor.y + anchor.z)) {
        detachWeb()
        return
      }
      const tension = THREE.MathUtils.clamp(ropeTension, 0, 1)
      const setLine = (geometry: THREE.BufferGeometry, glow = false) => {
        const arr = geometry.attributes.position.array as Float32Array
        for (let i = 0; i < WEB_SEGMENTS; i++) {
          const t = i / (WEB_SEGMENTS - 1)
          const curve = Math.sin(Math.PI * t)
          const sag = curve * (1 - tension) * 0.62
          const tremor = Math.sin(elapsedTime * 24 + t * 19) * curve * tension * 0.045
          const k = i * 3
          arr[k] = THREE.MathUtils.lerp(endpoint.x, anchor!.x, t)
          arr[k + 1] = THREE.MathUtils.lerp(endpoint.y, anchor!.y, t) - sag + tremor
          arr[k + 2] = THREE.MathUtils.lerp(endpoint.z, anchor!.z, t)
        }
        geometry.attributes.position.needsUpdate = true
        if (glow) webGlowMaterial.opacity = 0.2 + tension * 0.48
      }
      setLine(webGeometry)
      setLine(webGlowGeometry, true)
      webLine.visible = true
      webGlow.visible = true
      webAnchorPulse.visible = true
      webAnchorPulse.position.copy(anchor)
      webAnchorPulse.scale.setScalar(0.72 + tension * 1.35 + Math.sin(elapsedTime * 18) * tension * 0.12)
      ;(webAnchorPulse.material as THREE.MeshBasicMaterial).opacity = 0.42 + tension * 0.46
    }

    // Skyline Thread uses a two-phase web solve. Traction is applied BEFORE gravity and
    // collision integration so a grounded player can actually be lifted by an elevated anchor.
    // The post-move pass only enforces the maximum rope length, so it cannot fight collision.
    function applyWebTraction(dt: number) {
      if (!attached || !anchor || ropeLength == null) {
        ropeTension = THREE.MathUtils.damp(ropeTension, 0, 14, dt)
        ropeBlockFrames = 0
        return
      }

      tmp.copy(anchor).sub(playerPos)
      const dist = tmp.length()
      if (!Number.isFinite(dist) || !Number.isFinite(ropeLength) || !Number.isFinite(velocity.lengthSq())) {
        detachWeb()
        return
      }
      if (dist < 0.0001) return

      const towardAnchor = tmp.multiplyScalar(1 / dist)
      const radial = tmp2.copy(towardAnchor).multiplyScalar(-1)
      const outwardSpeed = velocity.dot(radial)
      const tangentialVelocity = tmp3.copy(velocity).addScaledVector(radial, -outwardSpeed)
      const centripetalLoad = tangentialVelocity.lengthSq() / Math.max(1, dist)
      const gravityOutwardLoad = Math.max(0, -GRAVITY * radial.y)
      const tensionBand = Math.max(0.85, ropeLength * 0.045)
      const nearTaut = THREE.MathUtils.clamp((dist - (ropeLength - tensionBand)) / tensionBand, 0, 1)
      const depthWeight = THREE.MathUtils.clamp(Math.abs(towardAnchor.z), 0, 1)
      const stretch = Math.max(0, dist - ropeLength)

      // Held-web catch force acts strictly along the real 3-D web direction. On the ground it
      // only becomes strong enough to beat gravity when the anchor is actually above the player.
      const catchIn = THREE.MathUtils.smoothstep(webCatchAge, 0.0, 0.07)
      const catchOut = 1 - THREE.MathUtils.smoothstep(webCatchAge, 0.24, 0.48)
      const lowSpeedAssist = THREE.MathUtils.clamp(1 - velocity.length() / 18, 0, 1)
      const upwardShare = Math.max(0, towardAnchor.y)
      let activePull = 0
      if (catchOut > 0) {
        const baseCatch = 16 + depthWeight * 14
        activePull = baseCatch * catchIn * catchOut * (0.72 + lowSpeedAssist * 0.28)
        if (upwardShare > 0.26 && webCatchAge < 0.32) {
          const gravityBreakaway = THREE.MathUtils.clamp((GRAVITY + 6) / Math.max(0.26, upwardShare), 40, 120)
          activePull = Math.max(activePull, gravityBreakaway * catchIn * catchOut)
        }
      }

      // During the short catch window the line takes up only slack created by the pull. This keeps
      // the active traction physically taut instead of applying force through a visibly loose web.
      if (activePull > 0 && webCatchAge < 0.52 && dist < ropeLength - 0.04) {
        const takeUp = Math.min(ropeLength - (dist + 0.04), 16 * dt)
        ropeLength = Math.max(WEB_MIN_LENGTH, ropeLength - Math.max(0, takeUp))
      }

      // Sustained pull is much weaker than the catch. It preserves readable Z/depth traction
      // without turning the web into a constant winch or inventing tangential speed.
      const sustainedPull = nearTaut * (3.8 + depthWeight * 5.4)
      const stretchPull = stretch * 16
      const pullAccel = activePull * nearTaut + sustainedPull + stretchPull
      if (pullAccel > 0) velocity.addScaledVector(towardAnchor, pullAccel * dt)

      const targetTension = THREE.MathUtils.clamp(
        nearTaut * 0.3
        + Math.max(0, outwardSpeed) / 25 * 0.2
        + (centripetalLoad + gravityOutwardLoad) / 54 * 0.25
        + stretch * 2.4
        + depthWeight * nearTaut * 0.16
        + Math.min(1, activePull / 70) * 0.18,
        0, 1,
      )
      ropeTension = THREE.MathUtils.damp(ropeTension, targetTension, 12, dt)
    }

    function enforceRopeLimit(dt: number) {
      if (!attached || !anchor || ropeLength == null) return

      tmp.copy(playerPos).sub(anchor)
      const dist = tmp.length()
      if (!Number.isFinite(dist) || !Number.isFinite(ropeLength) || !Number.isFinite(velocity.lengthSq())) {
        detachWeb()
        return
      }
      if (dist < 0.0001) return

      // Stable unilateral rope solve: constrain radial velocity instead of teleporting the
      // player toward the facade and then depenetrating.  The old position projection could
      // fight the building collider every 120 Hz step and make a successful attach look frozen.
      const radial = tmp.multiplyScalar(1 / dist)
      const stretch = Math.max(0, dist - ropeLength)
      const radialSpeed = velocity.dot(radial)

      if (stretch > 0) {
        // Recover a small amount of stretch with a bounded inward radial velocity.  This is a
        // real rope constraint (no tangential impulse), while remaining stable at wall anchors.
        const desiredRadialSpeed = -Math.min(13.5, stretch * 8.5)
        if (radialSpeed > desiredRadialSpeed) {
          velocity.addScaledVector(radial, desiredRadialSpeed - radialSpeed)
        }

        // If collision geometry physically prevents recovery, pay out only a tiny amount of
        // line.  This avoids a collider/rope stalemate without resetting momentum or position.
        if (stretch > 0.72) {
          const payout = Math.min(stretch - 0.52, 7.5 * dt)
          ropeLength = Math.min(MAX_WEB_RANGE, ropeLength + Math.max(0, payout))
          if (reelVelocity < 0) reelVelocity = 0
          ropeBlockFrames = Math.min(3, ropeBlockFrames + 1)
        } else {
          ropeBlockFrames = 0
        }
      } else {
        ropeBlockFrames = 0
        // At a taut line, only remove outward radial velocity. Tangential velocity is untouched.
        if (dist >= ropeLength - 0.035 && radialSpeed > 0) {
          velocity.addScaledVector(radial, -radialSpeed)
        }
      }
    }

    function physicsStep(dt: number) {
      detachMomentumGrace = Math.max(0, detachMomentumGrace - dt)
      landingMomentumGrace = Math.max(0, landingMomentumGrace - dt)
      if (attached) webCatchAge = Math.min(1, webCatchAge + dt)
      else webCatchAge = 0
      if (webButtonHeld && !attached && pointerLocked && elapsedTime - lastAttachAttempt > 0.07) {
        lastAttachAttempt = elapsedTime
        attachWeb()
      }
      reelFeedback = Math.max(0, reelFeedback - dt)
      if (reelFeedback <= 0) reelDirection = null

      const forward = cameraForwardFlat()
      const right = tmp2.set(-forward.z, 0, forward.x)
      inputDir.set(0, 0, 0)
      if (keys.has('KeyW')) inputDir.add(forward)
      if (keys.has('KeyS')) inputDir.sub(forward)
      if (keys.has('KeyD')) inputDir.add(right)
      if (keys.has('KeyA')) inputDir.sub(right)
      if (inputDir.lengthSq() > 0) inputDir.normalize()

      if (grounded) coyoteTimer = COYOTE_TIME
      else coyoteTimer = Math.max(0, coyoteTimer - dt)
      jumpBufferTimer = Math.max(0, jumpBufferTimer - dt)

      if (jumpBufferTimer > 0 && coyoteTimer > 0) {
        velocity.y = JUMP_SPEED
        grounded = false
        coyoteTimer = 0
        jumpBufferTimer = 0
      }

      if (grounded) {
        const sprinting = keys.has('ShiftLeft') || keys.has('ShiftRight')
        const targetSpeed = sprinting ? 16.2 : 10.6
        const hasInput = inputDir.lengthSq() > 0
        const horizontalVelocity = tmp3.set(velocity.x, 0, velocity.z)
        const horizontalSpeed = horizontalVelocity.length()
        const directionDot = hasInput && horizontalSpeed > 0.5
          ? (velocity.x * inputDir.x + velocity.z * inputDir.z) / horizontalSpeed
          : 1
        const movingAgainstInput = hasInput && horizontalSpeed > 0.5 && directionDot < -0.2
        const carryingLandingMomentum = hasInput && horizontalSpeed > targetSpeed + 0.8 && directionDot > 0.45

        // Reversals brake decisively, but a clean landing/launch keeps some forward speed instead
        // of snapping immediately back to normal run speed.  The carry decays every fixed step,
        // so it is momentum preservation rather than a permanent ground boost.
        let desiredGroundSpeed = targetSpeed
        let response = !hasInput
          ? (landingMomentumGrace > 0 && horizontalSpeed > targetSpeed + 1 ? 3.15 : horizontalSpeed > targetSpeed + 1 ? 6.2 : 14.5)
          : movingAgainstInput ? 28 : sprinting ? 17 : 20
        if (carryingLandingMomentum) {
          desiredGroundSpeed = Math.max(targetSpeed, horizontalSpeed * Math.exp(-1.9 * dt))
          response = 8.5
        }
        velocity.x = THREE.MathUtils.damp(velocity.x, inputDir.x * desiredGroundSpeed, response, dt)
        velocity.z = THREE.MathUtils.damp(velocity.z, inputDir.z * desiredGroundSpeed, response, dt)
      } else {
        if (attached && anchor && ropeLength != null) {
          const radial = tmp.copy(playerPos).sub(anchor).normalize()
          const boosting = keys.has('ShiftLeft') || keys.has('ShiftRight')
          const tangentialVelocity = tmp2.copy(velocity).addScaledVector(radial, -velocity.dot(radial))
          const tangentialSpeed = tangentialVelocity.length()

          // A/D mainly rotates the swing plane using the camera-right tangent.
          const sideAxis = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0)
          if (sideAxis !== 0) {
            const sideTangent = tmp4.set(-forward.z, 0, forward.x)
            sideTangent.addScaledVector(radial, -sideTangent.dot(radial))
            if (sideTangent.lengthSq() > 0.001) {
              sideTangent.normalize()
              velocity.addScaledVector(sideTangent, sideAxis * (boosting ? 10.2 : 7.8) * dt)
            }
          }

          // W pumps along the current rope tangent; if nearly stationary it uses the camera-forward
          // tangent only to seed a controllable arc, never radial propulsion.
          if (keys.has('KeyW')) {
            let pumpDir = tangentialVelocity
            if (tangentialSpeed < 2.5) {
              pumpDir = tmp4.copy(forward).addScaledVector(radial, -forward.dot(radial))
            }
            if (pumpDir.lengthSq() > 0.001) {
              const descentBonus = THREE.MathUtils.clamp(-velocity.y / 24, 0, 0.65)
              const pump = boosting ? 5.1 : 3.65
              velocity.addScaledVector(pumpDir.normalize(), pump * (1 + descentBonus) * dt)
            }
          }
          if (keys.has('KeyS') && tangentialSpeed > 3.5) {
            velocity.addScaledVector(tangentialVelocity.normalize(), -(boosting ? 3.5 : 2.6) * dt)
          }
        } else {
          // Air control steers the existing horizontal velocity toward the requested direction
          // instead of stacking unlimited acceleration, so launches keep their identity.
          const sprinting = keys.has('ShiftLeft') || keys.has('ShiftRight')
          const horizontalSpeed = Math.hypot(velocity.x, velocity.z)
          if (inputDir.lengthSq() > 0.001) {
            const desiredSpeed = THREE.MathUtils.clamp(
              Math.max(horizontalSpeed, sprinting ? 10.5 : 8.5),
              0,
              44,
            )
            const desired = tmp3.copy(inputDir).multiplyScalar(desiredSpeed)
            const steerRate = detachMomentumGrace > 0 ? 0.9 : sprinting ? 2.45 : 1.95
            velocity.x = THREE.MathUtils.damp(velocity.x, desired.x, steerRate, dt)
            velocity.z = THREE.MathUtils.damp(velocity.z, desired.z, steerRate, dt)
            if (detachMomentumGrace > 0) {
              const steeredSpeed = Math.hypot(velocity.x, velocity.z)
              const preserved = horizontalSpeed * 0.992
              if (steeredSpeed > 0.001 && steeredSpeed < preserved) {
                const keep = preserved / steeredSpeed
                velocity.x *= keep
                velocity.z *= keep
              }
            }
          }
        }

        const horizontal = Math.hypot(velocity.x, velocity.z)
        if (horizontal > MAX_AIR_HORIZONTAL_SPEED && detachMomentumGrace <= 0) {
          // Do not hard-clamp a launch. Overspeed bleeds gradually after the release grace window.
          const overspeed = (horizontal - MAX_AIR_HORIZONTAL_SPEED) / MAX_AIR_HORIZONTAL_SPEED
          const drag = Math.exp(-Math.min(2.4, 0.7 + overspeed * 2.2) * dt)
          velocity.x *= drag
          velocity.z *= drag
        }
      }

      updateRopeReel(dt)
      applyWebTraction(dt)
      // Held jump slightly softens upward gravity near the apex; releasing Space still cuts the
      // upward component immediately. Falling remains decisive so the character never feels floaty.
      const jumpGravityScale = !attached && !grounded && velocity.y > 0
        ? (jumpHeld ? (velocity.y < 4.2 ? 0.64 : 0.82) : 1)
        : velocity.y < -2 ? 1.08 : 1
      velocity.y = Math.max(-58, velocity.y - GRAVITY * jumpGravityScale * dt)
      const preMoveVerticalSpeed = velocity.y
      const wasGroundedBeforeMove = grounded
      grounded = false
      moveCharacter(tmp4.copy(velocity).multiplyScalar(dt))

      // The second phase only enforces the rope-length ceiling after real collision movement.
      enforceRopeLimit(dt)

      if (!wasGroundedBeforeMove && grounded) {
        if (preMoveVerticalSpeed < -9) landingKick = THREE.MathUtils.clamp(Math.abs(preMoveVerticalSpeed) / 24, 0, 0.55)
        if (Math.hypot(velocity.x, velocity.z) > 11) landingMomentumGrace = 0.38
      }

      // Soft world bounds keep the player inside the generated city without invisible hard stops.
      if (Math.abs(playerPos.x) > WORLD_HALF || Math.abs(playerPos.z) > WORLD_HALF) {
        const toCenter = tmp.set(-playerPos.x, 0, -playerPos.z).normalize()
        velocity.addScaledVector(toCenter, 13 * dt)
      }

      if (attached) movementState = 'swinging'
      else if (!grounded) movementState = velocity.y > 0.65 ? 'jumping' : 'falling'
      else movementState = Math.hypot(velocity.x, velocity.z) > 0.35 ? 'moving' : 'idle'
    }

    function updateCamera(dt: number) {
      const speed = velocity.length()
      const speed01 = THREE.MathUtils.smoothstep(speed, 7, 38)
      const verticalRatio = THREE.MathUtils.clamp(velocity.y / 30, -1, 1)

      // User pitch remains the primary orbit input, but the composition follows vertical motion
      // and the anchor so the camera is never locked to a single horizontal band.
      let pitchBiasTarget = verticalRatio * (attached ? 0.24 : 0.15)
      if (attached && anchor) {
        const anchorDelta = tmp4.copy(anchor).sub(playerPos)
        const anchorDistance = Math.max(8, anchorDelta.length())
        pitchBiasTarget += THREE.MathUtils.clamp((anchorDelta.y / anchorDistance) * 0.2, -0.16, 0.16)
      }
      cameraPitchBias = THREE.MathUtils.damp(cameraPitchBias, pitchBiasTarget, attached ? 5.1 : 7.2, dt)
      const orbitPitch = THREE.MathUtils.clamp(pitch + cameraPitchBias, -0.98, 0.78)
      cameraRenderPitch = orbitPitch

      const distance = THREE.MathUtils.lerp(6.4, attached ? 10.4 : 9.35, speed01)
      const height = THREE.MathUtils.lerp(2.25, 3.15, speed01)
        - THREE.MathUtils.clamp(velocity.y * 0.022, -0.58, 0.58)

      const velocityLead = tmp.copy(velocity)
      if (velocityLead.lengthSq() > 0.01) {
        velocityLead.normalize().multiplyScalar(THREE.MathUtils.lerp(0.3, attached ? 3.25 : 2.75, speed01))
      } else velocityLead.set(0, 0, 0)

      const verticalLookAhead = THREE.MathUtils.clamp(velocity.y * 0.082, -2.35, 2.55)
      desiredCamTarget.copy(playerPos).addScaledVector(UP, 0.78 + verticalLookAhead).add(velocityLead)
      if (attached && anchor) {
        const anchorLead = tmp4.copy(anchor).sub(playerPos)
        if (anchorLead.lengthSq() > 0.01) {
          anchorLead.normalize().multiplyScalar(THREE.MathUtils.lerp(0.18, 1.35, ropeTension))
          desiredCamTarget.add(anchorLead)
        }
      }
      const targetFollow = 1 - Math.exp(-(attached ? 8.2 : speed > 24 ? 9.5 : 12.5) * dt)
      camTarget.lerp(desiredCamTarget, targetFollow)

      const strafeInput = (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0)
      const shoulderTarget = shoulderSide * 0.36 + strafeInput * 0.13
      cameraShoulder = THREE.MathUtils.damp(cameraShoulder, shoulderTarget, 6.8, dt)
      const right = tmp2.set(Math.cos(yaw), 0, -Math.sin(yaw))
      desiredCamPos.set(
        playerPos.x + Math.sin(yaw) * Math.cos(orbitPitch) * distance,
        playerPos.y + height + Math.sin(-orbitPitch) * distance,
        playerPos.z + Math.cos(yaw) * Math.cos(orbitPitch) * distance,
      ).addScaledVector(right, cameraShoulder)
      desiredCamPos.y = Math.max(GROUND_Y + CAMERA_COLLISION_RADIUS, desiredCamPos.y)

      // Swept camera collision keeps the third-person view in front of building faces.
      const cameraDelta = tmp3.copy(desiredCamPos).sub(camTarget)
      const desiredDistance = cameraDelta.length()
      if (desiredDistance > 0.001) {
        let bestCameraT = 1
        const endX = desiredCamPos.x
        const endY = desiredCamPos.y
        const endZ = desiredCamPos.z
        for (const b of buildings) {
          const minX = b.min.x - CAMERA_COLLISION_RADIUS
          const maxX = b.max.x + CAMERA_COLLISION_RADIUS
          const minY = b.min.y - CAMERA_COLLISION_RADIUS
          const maxY = b.max.y + CAMERA_COLLISION_RADIUS
          const minZ = b.min.z - CAMERA_COLLISION_RADIUS
          const maxZ = b.max.z + CAMERA_COLLISION_RADIUS
          if (Math.max(camTarget.x, endX) < minX || Math.min(camTarget.x, endX) > maxX) continue
          if (Math.max(camTarget.y, endY) < minY || Math.min(camTarget.y, endY) > maxY) continue
          if (Math.max(camTarget.z, endZ) < minZ || Math.min(camTarget.z, endZ) > maxZ) continue
          const t = sweepPointAabb(
            camTarget, cameraDelta,
            minX, minY, minZ, maxX, maxY, maxZ,
            cameraSweepNormal,
          )
          if (t != null && t < bestCameraT) bestCameraT = t
        }
        if (bestCameraT < 1) {
          const backoff = 0.035 / desiredDistance
          desiredCamPos.copy(camTarget).addScaledVector(cameraDelta, Math.max(0, bestCameraT - backoff))
        }
      }
      desiredCamPos.y -= landingKick * 0.7
      landingKick = THREE.MathUtils.damp(landingKick, 0, 9, dt)

      const followRate = attached ? 7.8 : (speed > 24 ? 9.2 : 11.6)
      const smoothing = 1 - Math.exp(-followRate * dt)
      camera.position.lerp(desiredCamPos, smoothing)
      camera.position.y = Math.max(GROUND_Y + CAMERA_COLLISION_RADIUS, camera.position.y)
      camera.lookAt(camTarget)
      const lateralSpeed = velocity.dot(right)
      const rollTarget = attached ? THREE.MathUtils.clamp(-lateralSpeed * 0.0125, -0.18, 0.18) : 0
      cameraRoll = THREE.MathUtils.damp(cameraRoll, rollTarget, attached ? 5.4 : 8.5, dt)
      camera.rotation.z += cameraRoll
      const tensionFov = attached ? ropeTension * 2.8 : detachMomentumGrace > 0 ? Math.min(2.4, lastReleaseSpeed * 0.045) : 0
      camera.fov = THREE.MathUtils.damp(
        camera.fov,
        THREE.MathUtils.lerp(66, attached ? 85 : 81, speed01) + tensionFov,
        5.1,
        dt,
      )
      camera.updateProjectionMatrix()
    }

    function updatePlayerVisual(dt: number) {
      playerRoot.position.copy(playerPos)
      const horizontalSpeed = Math.hypot(velocity.x, velocity.z)
      if (horizontalSpeed > 0.25) {
        const targetYaw = Math.atan2(velocity.x, velocity.z)
        let diff = targetYaw - playerRoot.rotation.y
        diff = Math.atan2(Math.sin(diff), Math.cos(diff))
        playerRoot.rotation.y += diff * Math.min(1, dt * (movementState === 'swinging' ? 6 : 11))
      }

      const horizontalDir = tmp.set(velocity.x, 0, velocity.z)
      const signedTurn = horizontalDir.lengthSq() > 0.1 ? THREE.MathUtils.clamp(velocity.x * 0.018, -0.42, 0.42) : 0
      bodyRoot.rotation.z = THREE.MathUtils.damp(bodyRoot.rotation.z, movementState === 'swinging' ? -signedTurn : 0, 7, dt)
      bodyRoot.rotation.x = THREE.MathUtils.damp(bodyRoot.rotation.x, movementState === 'swinging' ? -0.14 : 0, 7, dt)

      const t = elapsedTime
      if (movementState === 'moving') {
        const stride = Math.sin(t * (9 + Math.min(6, horizontalSpeed * 0.35))) * 0.78 * Math.min(1, horizontalSpeed / 7)
        leftArm.root.rotation.x = stride
        rightArm.root.rotation.x = -stride
        leftArm.lower.rotation.x = Math.max(0, -stride) * 0.6
        rightArm.lower.rotation.x = Math.max(0, stride) * 0.6
        leftLeg.root.rotation.x = -stride
        rightLeg.root.rotation.x = stride
        leftLeg.lower.rotation.x = Math.max(0, stride) * 0.7
        rightLeg.lower.rotation.x = Math.max(0, -stride) * 0.7
        torso.rotation.z = Math.sin(t * 12) * 0.025
      } else if (movementState === 'swinging') {
        const velocity01 = THREE.MathUtils.smoothstep(velocity.length(), 8, 32)
        leftArm.root.rotation.x = THREE.MathUtils.damp(leftArm.root.rotation.x, -2.36 - ropeTension * 0.18, 10, dt)
        rightArm.root.rotation.x = THREE.MathUtils.damp(rightArm.root.rotation.x, -2.08 - ropeTension * 0.34, 10, dt)
        leftArm.root.rotation.z = THREE.MathUtils.damp(leftArm.root.rotation.z, -0.32, 9, dt)
        rightArm.root.rotation.z = THREE.MathUtils.damp(rightArm.root.rotation.z, 0.32, 9, dt)
        leftArm.lower.rotation.x = THREE.MathUtils.damp(leftArm.lower.rotation.x, -0.45, 9, dt)
        rightArm.lower.rotation.x = THREE.MathUtils.damp(rightArm.lower.rotation.x, -0.2 - ropeTension * 0.34, 9, dt)
        leftLeg.root.rotation.x = THREE.MathUtils.damp(leftLeg.root.rotation.x, 0.58 + velocity01 * 0.25, 8, dt)
        rightLeg.root.rotation.x = THREE.MathUtils.damp(rightLeg.root.rotation.x, -0.36, 8, dt)
        leftLeg.lower.rotation.x = THREE.MathUtils.damp(leftLeg.lower.rotation.x, -1.0, 8, dt)
        rightLeg.lower.rotation.x = THREE.MathUtils.damp(rightLeg.lower.rotation.x, -0.75, 8, dt)
      } else if (movementState === 'jumping' || movementState === 'falling') {
        const falling = movementState === 'falling'
        leftArm.root.rotation.x = THREE.MathUtils.damp(leftArm.root.rotation.x, falling ? -0.72 : -1.05, 8, dt)
        rightArm.root.rotation.x = THREE.MathUtils.damp(rightArm.root.rotation.x, falling ? -0.35 : -0.72, 8, dt)
        leftLeg.root.rotation.x = THREE.MathUtils.damp(leftLeg.root.rotation.x, 0.46, 8, dt)
        rightLeg.root.rotation.x = THREE.MathUtils.damp(rightLeg.root.rotation.x, -0.48, 8, dt)
        leftLeg.lower.rotation.x = THREE.MathUtils.damp(leftLeg.lower.rotation.x, -0.72, 8, dt)
        rightLeg.lower.rotation.x = THREE.MathUtils.damp(rightLeg.lower.rotation.x, -0.45, 8, dt)
      } else {
        torso.rotation.z = THREE.MathUtils.damp(torso.rotation.z, 0, 8, dt)
        const rigs = [leftArm, rightArm, leftLeg, rightLeg]
        for (const rig of rigs) {
          rig.root.rotation.x = THREE.MathUtils.damp(rig.root.rotation.x, 0, 9, dt)
          rig.root.rotation.z = THREE.MathUtils.damp(rig.root.rotation.z, 0, 9, dt)
          rig.lower.rotation.x = THREE.MathUtils.damp(rig.lower.rotation.x, 0, 9, dt)
        }
      }
    }

    function updateMotionTrail() {
      const speed = velocity.length()
      const arr = trailGeometry.attributes.position.array as Float32Array
      for (let i = trailCount - 1; i > 0; i--) {
        arr[i * 3] = arr[(i - 1) * 3]
        arr[i * 3 + 1] = arr[(i - 1) * 3 + 1]
        arr[i * 3 + 2] = arr[(i - 1) * 3 + 2]
      }
      arr[0] = playerPos.x
      arr[1] = playerPos.y + 0.18
      arr[2] = playerPos.z
      trailGeometry.attributes.position.needsUpdate = true
      motionTrail.visible = speed > 14 && !grounded
      trailMaterial.opacity = THREE.MathUtils.lerp(0.08, 0.28, THREE.MathUtils.smoothstep(speed, 14, 38))
    }

    function headingFromYaw() {
      const a = ((-yaw * 180 / Math.PI) % 360 + 360) % 360
      const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
      return dirs[Math.round(a / 45) % 8]
    }

    function updateHud() {
      const now = performance.now()
      if (now - lastHud < 70) return
      lastHud = now
      let nearest: (typeof LANDMARKS)[number] = LANDMARKS[0]
      let nearestDistance = Infinity
      for (const landmark of LANDMARKS) {
        const distance = Math.hypot(playerPos.x - landmark.x, playerPos.z - landmark.z)
        if (distance < nearestDistance) {
          nearest = landmark
          nearestDistance = distance
        }
      }
      setHud({
        speed: velocity.length(),
        altitude: Math.max(0, playerPos.y - PLAYER_HEIGHT / 2 - GROUND_Y),
        attached,
        targetValid,
        pointerLocked,
        movement: movementState,
        heading: headingFromYaw(),
        night,
        ropeTension,
        anchorDistance: attached && anchor ? playerPos.distanceTo(anchor) : null,
        ropeLength,
        webRange: MAX_WEB_RANGE,
        sprinting: keys.has('ShiftLeft') || keys.has('ShiftRight'),
        verticalSpeed: velocity.y,
        flow: THREE.MathUtils.clamp(
          (THREE.MathUtils.smoothstep(velocity.length(), 7, 34) * 0.72) +
          (attached ? ropeTension * 0.28 : 0),
          0,
          1,
        ),
        targetDistance: targetValid && targetPoint ? camera.position.distanceTo(targetPoint) : null,
        reelDirection,
        contextHint: attached
          ? (reelDirection === 'in' ? 'REELING IN' : reelDirection === 'out' ? 'GIVING LINE' : 'RELEASE LMB TO LAUNCH')
          : targetValid
            ? 'PRESS LMB TO CONNECT'
            : 'AIM AT A BUILDING',
        mapX: playerPos.x,
        mapZ: playerPos.z,
        mapYaw: yaw,
        nearestLandmark: nearest.label,
        landmarkDistance: nearestDistance,
      })
    }

    function resetPlayer() {
      detachWeb()
      playerPos.set(0, PLAYER_HEIGHT / 2 + 0.02, 12)
      velocity.set(0, 0, 0)
      yaw = 0
      pitch = 0.35
      grounded = true
      movementState = 'idle'
      jumpBufferTimer = 0
      coyoteTimer = 0.12
      jumpHeld = false
      cameraShoulder = 0
      cameraRoll = 0
      cameraPitchBias = 0
      cameraRenderPitch = pitch
      webCatchAge = 0
      detachMomentumGrace = 0
      landingKick = 0
      landingMomentumGrace = 0
      lastReleaseSpeed = 0
      releaseVelocity.set(0, 0, 0)
      webButtonHeld = false
      reelFeedback = 0
      reelDirection = null
      reelVelocity = 0
      for (let i = 0; i < trailCount; i++) {
        trailPositions[i * 3] = playerPos.x
        trailPositions[i * 3 + 1] = playerPos.y
        trailPositions[i * 3 + 2] = playerPos.z
      }
      trailGeometry.attributes.position.needsUpdate = true
      motionTrail.visible = false
    }

    function onKeyDown(e: KeyboardEvent) {
      keys.add(e.code)
      if (e.code === 'Space' && !e.repeat) {
        e.preventDefault()
        jumpHeld = true
        jumpBufferTimer = JUMP_BUFFER_TIME
      }
      if (e.code === 'KeyN' && !e.repeat) setNightMode(!night)
      if (e.code === 'KeyR' && !e.repeat) resetPlayer()
      if (e.code === 'KeyC' && !e.repeat) shoulderSide *= -1
      if (e.code === 'KeyH' && !e.repeat) {
        setShowHelp((value: boolean) => !value)
        if (document.pointerLockElement === renderer.domElement) document.exitPointerLock()
      }
    }
    function onKeyUp(e: KeyboardEvent) {
      keys.delete(e.code)
      // Variable jump height: releasing Space early cuts only the upward component.
      if (e.code === 'Space') {
        jumpHeld = false
        if (velocity.y > 3.2 && !attached) velocity.y *= 0.72
      }
    }
    function onMouseMove(e: MouseEvent) {
      if (document.pointerLockElement !== renderer.domElement) return
      yaw -= e.movementX * 0.0022
      yaw = Math.atan2(Math.sin(yaw), Math.cos(yaw))
      pitch -= e.movementY * 0.00185
      pitch = THREE.MathUtils.clamp(pitch, -0.9, 0.7)
    }
    function onMouseDown(e: MouseEvent) {
      if (e.button !== 0) return
      if (document.pointerLockElement !== renderer.domElement) {
        webButtonHeld = false
        renderer.domElement.requestPointerLock()
        return
      }
      webButtonHeld = true
      lastAttachAttempt = elapsedTime
      attachWeb()
    }
    function onMouseUp(e: MouseEvent) {
      if (e.button === 0) {
        webButtonHeld = false
        detachWeb()
      }
    }
    function onWheel(e: WheelEvent) {
      if (!attached) return
      e.preventDefault()
      adjustRopeLength(e.deltaY)
    }
    function onPointerLockChange() {
      pointerLocked = document.pointerLockElement === renderer.domElement
      if (!pointerLocked) {
        webButtonHeld = false
        jumpHeld = false
        keys.clear()
        detachWeb()
      }
    }
    function onContextMenu(e: MouseEvent) {
      e.preventDefault()
    }

    renderer.domElement.addEventListener('mousedown', onMouseDown)
    renderer.domElement.addEventListener('contextmenu', onContextMenu)
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    document.addEventListener('pointerlockchange', onPointerLockChange)

    const exposeReadonly = (name: '__game' | '__player' | '__camera' | '__web' | '__world', getState: () => unknown) => {
      Object.defineProperty(window, name, {
        value: Object.freeze({ getState }),
        writable: false,
        enumerable: true,
        configurable: true,
      })
    }

    exposeReadonly('__game', () => ({
      ready,
      running,
      elapsedTime,
      renderer: 'webgl',
      viewport: { width: renderer.domElement.clientWidth, height: renderer.domElement.clientHeight },
    }))
    exposeReadonly('__player', () => ({
      position: cloneV(playerPos),
      velocity: cloneV(velocity),
      grounded,
      movementState,
      collider: { radius: PLAYER_RADIUS, height: PLAYER_HEIGHT },
    }))
    exposeReadonly('__camera', () => ({
      mode: 'third-person',
      position: cloneV(camera.position),
      target: cloneV(camTarget),
      yaw,
      pitch: cameraRenderPitch,
    }))
    exposeReadonly('__web', () => ({
      attached,
      targetValid,
      anchor: anchor ? cloneV(anchor) : null,
      anchorObjectId,
      ropeLength,
      distanceToAnchor: attached && anchor ? playerPos.distanceTo(anchor) : null,
      lineVisible: webLine.visible,
      playerEndpoint: attached ? cloneV(getWebPlayerEndpoint(webPlayerEndpoint)) : null,
      anchorEndpoint: attached && anchor ? cloneV(anchor) : null,
    }))
    exposeReadonly('__world', () => ({
      groundY: GROUND_Y,
      buildings: buildings.map((b) => ({ id: b.id, min: cloneV(b.min), max: cloneV(b.max) })),
    }))

    ready = true
    updateCamera(1)
    playerRoot.position.copy(playerPos)

    let raf = 0
    function animate() {
      if (!running) return
      raf = requestAnimationFrame(animate)
      const now = performance.now() / 1000
      const frameDt = Math.min(0.05, now - previous)
      previous = now
      elapsedTime += frameDt
      accumulator = Math.min(accumulator + frameDt, 0.16)
      while (accumulator >= FIXED_DT) {
        physicsStep(FIXED_DT)
        accumulator -= FIXED_DT
      }
      updatePlayerVisual(frameDt)
      updateCamera(frameDt)
      updateTargeting()
      updateWebLine()
      updateMotionTrail()
      updateHud()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      running = false
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      renderer.domElement.removeEventListener('mousedown', onMouseDown)
      renderer.domElement.removeEventListener('contextmenu', onContextMenu)
      renderer.domElement.removeEventListener('wheel', onWheel)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('pointerlockchange', onPointerLockChange)
      if (document.pointerLockElement === renderer.domElement) document.exitPointerLock()
      for (const name of ['__game', '__player', '__camera', '__web', '__world'] as const) {
        delete (window as unknown as Record<string, unknown>)[name]
      }
      renderer.dispose()
      scene.traverse((obj: THREE.Object3D) => {
        const mesh = obj as THREE.Mesh
        if (mesh.geometry) mesh.geometry.dispose()
        const material = mesh.material
        if (Array.isArray(material)) material.forEach((m) => m.dispose())
        else if (material) material.dispose()
      })
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  const begin = () => {
    setStarted(true)
    const canvas = mountRef.current?.querySelector('canvas')
    if (canvas instanceof HTMLCanvasElement) {
      canvas.focus()
      canvas.requestPointerLock?.()
    }
  }

  const speed01 = Math.min(1, Math.max(0, (hud.speed - 9) / 25))
  const reticleClass = hud.attached ? 'reticle attached' : hud.targetValid ? 'reticle valid' : 'reticle'
  const verticalLabel = Math.abs(hud.verticalSpeed) < 0.4 ? 'LEVEL' : hud.verticalSpeed > 0 ? 'CLIMB' : 'DIVE'
  const flowPercent = Math.round(hud.flow * 100)

  return (
    <main className="game-shell relative h-full w-full overflow-hidden bg-[#03060d]">
      <div ref={mountRef} className="absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="cinematic-vignette absolute inset-0" />
        <div className="speed-lines absolute inset-[-12%]" style={{ opacity: speed01 * 0.36 }} />

        <section className="hud-panel absolute left-4 top-4 min-w-[225px] rounded-[20px] px-4 py-3.5 sm:left-6 sm:top-6">
          <div className="flex items-center justify-between gap-5">
            <div>
              <div className="hud-kicker">VELOCITY</div>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <span className="hud-number">{hud.speed.toFixed(1)}</span>
                <span className="hud-unit">M/S</span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-right">
              <div className="hud-kicker">ALTITUDE</div>
              <div className="mt-1 text-[20px] font-semibold tracking-[-.03em] text-white">{hud.altitude.toFixed(0)}<span className="ml-1 text-[10px] font-medium tracking-[.16em] text-white/40">M</span></div>
            </div>
          </div>
          <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[.08]">
            <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-rose-300 transition-[width] duration-100" style={{ width: `${Math.min(100, hud.speed * 2.6)}%` }} />
          </div>
          <div className="mt-2 flex items-center justify-between text-[8px] font-semibold tracking-[.14em]">
            <span className="text-white/25">VERTICAL</span>
            <span className={hud.verticalSpeed > 1 ? 'text-cyan-100/65' : hud.verticalSpeed < -1 ? 'text-rose-100/65' : 'text-white/40'}>
              {verticalLabel} {Math.abs(hud.verticalSpeed).toFixed(1)}
            </span>
          </div>
        </section>

        <section className="hud-panel absolute right-4 top-4 rounded-[20px] px-4 py-3 text-right sm:right-6 sm:top-6">
          <div className="flex items-center justify-end gap-2">
            <span className={`status-dot ${hud.attached ? 'hot' : hud.targetValid ? 'ready' : ''}`} />
            <span className="hud-kicker">{hud.attached ? 'WEB LOCK' : hud.targetValid ? 'ANCHOR READY' : 'SCANNING'}</span>
          </div>
          <div className="mt-2 flex items-center justify-end gap-4">
            <div><div className="text-[9px] tracking-[.18em] text-white/30">HEADING</div><div className="mt-0.5 text-[17px] font-semibold text-white">{hud.heading}</div></div>
            <div className="h-8 w-px bg-white/10" />
            <div><div className="text-[9px] tracking-[.18em] text-white/30">STATE</div><div className="mt-0.5 text-[12px] font-medium uppercase tracking-[.09em] text-cyan-100">{hud.movement}</div></div>
          </div>
          <div className="mt-2 border-t border-white/[.07] pt-2 text-[8px] font-semibold tracking-[.14em] text-white/30">
            {hud.attached && hud.anchorDistance != null
              ? `ANCHOR ${hud.anchorDistance.toFixed(0)}M`
              : hud.targetValid && hud.targetDistance != null
                ? `TARGET ${hud.targetDistance.toFixed(0)}M`
                : `RANGE ${hud.webRange.toFixed(0)}M`}
          </div>
        </section>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={reticleClass}>
            <span className="reticle-ring" />
            <span className="reticle-dot" />
            <span className="reticle-t reticle-t1" />
            <span className="reticle-t reticle-t2" />
            <span className="reticle-t reticle-t3" />
            <span className="reticle-t reticle-t4" />
          </div>
          <div className={`context-hint absolute left-1/2 top-9 -translate-x-1/2 whitespace-nowrap ${hud.attached ? 'hot' : hud.targetValid ? 'ready' : ''}`}>
            {hud.contextHint}
            {hud.targetValid && !hud.attached && hud.targetDistance != null ? ` · ${hud.targetDistance.toFixed(0)}M` : ''}
          </div>
        </div>

        {hud.attached && (
          <div className="absolute bottom-[86px] left-1/2 w-[220px] -translate-x-1/2 text-center sm:bottom-[90px]">
            <div className="mb-1.5 flex items-center justify-between text-[8px] font-semibold tracking-[.2em] text-white/[.35]">
              <span>TENSION</span>
              <span>{hud.ropeLength ? `${hud.ropeLength.toFixed(0)}M LINE` : hud.anchorDistance ? `${hud.anchorDistance.toFixed(0)}M` : '—'}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-cyan-200 transition-[width] duration-75" style={{ width: `${Math.max(12, hud.ropeTension * 100)}%` }} />
            </div>
          </div>
        )}

        <section className="flow-panel pointer-events-none absolute bottom-16 right-4 w-[170px] rounded-[20px] px-4 py-3 sm:bottom-20 sm:right-6">
          <div className="flex items-center justify-between">
            <span className="hud-kicker">MOMENTUM FLOW</span>
            <span className="text-[10px] font-semibold tabular-nums text-cyan-50/70">{flowPercent}%</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[.08]">
            <div className="flow-fill h-full rounded-full transition-[width] duration-100" style={{ width: `${flowPercent}%` }} />
          </div>
          <div className="mt-2 flex items-center justify-between text-[7px] font-semibold tracking-[.14em] text-white/28">
            <span>{hud.sprinting ? 'BOOST' : 'CRUISE'}</span>
            <span>{hud.attached ? (hud.reelDirection === 'in' ? 'REEL IN' : hud.reelDirection === 'out' ? 'LINE OUT' : 'TETHERED') : 'FREE FLIGHT'}</span>
          </div>
        </section>

        <section className="minimap-panel pointer-events-none absolute bottom-16 left-4 h-[152px] w-[152px] overflow-hidden rounded-[22px] sm:bottom-20 sm:left-6">
          <div className="minimap-grid absolute inset-0" />
          {LANDMARKS.map((landmark) => {
            const left = ((landmark.x + WORLD_HALF) / (WORLD_HALF * 2)) * 100
            const top = ((landmark.z + WORLD_HALF) / (WORLD_HALF * 2)) * 100
            return (
              <span
                key={landmark.id}
                className="minimap-landmark absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ left: `${left}%`, top: `${top}%` }}
                title={landmark.label}
              />
            )
          })}
          <span
            className="minimap-player absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${THREE.MathUtils.clamp(((hud.mapX + WORLD_HALF) / (WORLD_HALF * 2)) * 100, 3, 97)}%`,
              top: `${THREE.MathUtils.clamp(((hud.mapZ + WORLD_HALF) / (WORLD_HALF * 2)) * 100, 3, 97)}%`,
              transform: `translate(-50%, -50%) rotate(${-hud.mapYaw}rad)`,
            }}
          />
          <div className="absolute left-3 top-2 text-[7px] font-bold tracking-[.2em] text-cyan-100/45">DISTRICT MAP</div>
          <div className="absolute bottom-2 left-3 right-3 truncate text-[7px] font-semibold tracking-[.1em] text-white/45">
            {hud.nearestLandmark} · {hud.landmarkDistance.toFixed(0)}M
          </div>
        </section>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6">
          <div className="control-pill rounded-full px-4 py-2 text-center text-[9px] font-medium uppercase tracking-[.14em] text-white/[.55] sm:px-5">
            <span className="text-white/[.85]">WASD</span> MOVE <b>·</b> <span className="text-white/[.85]">SPACE</span> JUMP <b>·</b> <span className="text-white/[.85]">PRESS / RELEASE LMB</span> WEB / LAUNCH <b>·</b> <span className="text-white/[.85]">WHEEL</span> REEL <b>·</b> <span className="text-white/[.85]">SHIFT</span> BOOST
          </div>
        </div>

        <div className="absolute bottom-5 right-5 hidden items-center gap-2 text-[8px] font-semibold tracking-[.18em] text-white/25 md:flex">
          <span className={`h-1.5 w-1.5 rounded-full ${hud.night ? 'bg-indigo-300' : 'bg-amber-200'}`} />
          {hud.night ? 'NIGHT GRID' : 'DAY GRID'}
        </div>
      </div>

      {!started && (
        <div className="start-screen absolute inset-0 z-20 flex items-center justify-center px-5">
          <div className="start-card w-full max-w-[680px] overflow-hidden rounded-[30px]">
            <div className="relative p-7 sm:p-9">
              <div className="absolute right-7 top-7 h-16 w-16 opacity-60 sm:right-9 sm:top-9">
                <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-200 to-transparent" />
                <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
                <div className="absolute inset-3 rotate-45 border border-cyan-100/30" />
              </div>
              <div className="text-[9px] font-semibold uppercase tracking-[.34em] text-cyan-200/[.55]">MOMENTUM / CITY / THREAD</div>
              <h1 className="mt-3 text-5xl font-semibold tracking-[-.055em] text-white sm:text-6xl">Skyline<br /><span className="text-gradient">Thread</span></h1>
              <p className="mt-5 max-w-[500px] text-[13px] leading-6 text-slate-300/70 sm:text-sm">
                选择真实建筑表面作为锚点，用速度、重力和实际绳长拉出连续弧线。按住主鼠标键时会持续尝试当前准星命中的建筑；松开立即保留真实动量飞出，滚轮可在摆荡中收放蛛丝。
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  ['WASD', '移动'], ['SPACE', '跳跃'], ['MOUSE', '视角'], ['LMB', '蛛丝'],
                  ['WHEEL', '收放蛛丝'], ['SHIFT', '冲刺 / 摆荡加速'], ['N', '昼夜切换'], ['R', '重置玩家'],
                ].map(([key, label]) => (
                  <div key={key} className="control-card rounded-2xl px-3 py-3">
                    <div className="text-[9px] font-semibold tracking-[.2em] text-cyan-100/75">{key}</div>
                    <div className="mt-1 text-[11px] text-white/[.45]">{label}</div>
                  </div>
                ))}
              </div>

              <button onClick={begin} className="start-button pointer-events-auto mt-7 w-full rounded-2xl px-5 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-100">
                Enter the City
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-[8px] font-semibold uppercase tracking-[.16em] text-white/25">
                <span className="h-1 w-1 rounded-full bg-cyan-300/60" />
                Esc releases pointer lock · Click canvas to recapture
              </div>
            </div>
          </div>
        </div>
      )}

      {started && showHelp && (
        <div className="help-overlay absolute inset-0 z-20 flex items-center justify-center px-5">
          <div className="help-card pointer-events-auto w-full max-w-[620px] rounded-[26px] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div><div className="hud-kicker">FIELD MANUAL</div><h2 className="mt-2 text-2xl font-semibold tracking-[-.03em] text-white">完整操作</h2></div>
              <button onClick={() => setShowHelp(false)} className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-bold tracking-[.16em] text-white/60">H / CLOSE</button>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                ['WASD', '相机朝向相对移动；空中保留有限控制，Shift 提高机动响应'],
                ['SPACE', '跳跃，带 jump buffer / coyote time；提前松开可短跳'],
                ['MOUSE', '第三人称自由视角；俯仰有限制防翻转'],
                ['LMB PRESS / HOLD', '按下立即沿中心射线尝试连接；未命中可继续按住并转向，松开保留真实动量'],
                ['MOUSE WHEEL', '连接时收短 / 放长实际绳长'],
                ['SHIFT', '地面冲刺；摆荡时增强切向操控'],
                ['N', '切换昼间 / 夜间照明与环境'],
                ['C', '左右肩视角切换，贴近建筑时更容易观察前方'],
                ['R', '安全重置到中央公园入口'],
              ].map(([key, label]) => <div key={key} className="control-card rounded-2xl px-4 py-3"><div className="text-[9px] font-bold tracking-[.18em] text-cyan-100/80">{key}</div><div className="mt-1 text-[11px] leading-5 text-white/45">{label}</div></div>)}
            </div>
          </div>
        </div>
      )}

      {started && !hud.pointerLocked && (
        <button
          onClick={begin}
          className="pause-prompt absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full px-5 py-3 text-[10px] font-semibold uppercase tracking-[.16em] text-cyan-50"
        >
          Click to recapture mouse
        </button>
      )}
    </main>
  )
}

export default App
