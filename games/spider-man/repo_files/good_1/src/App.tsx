import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type VecState = { x: number; y: number; z: number }
type MovementState = 'idle' | 'moving' | 'jumping' | 'falling' | 'swinging'
type BuildingState = { id: string; min: VecState; max: VecState }

declare global {
  interface Window {
    __game: { getState: () => { ready: boolean; running: boolean; elapsedTime: number; renderer: 'webgl'; viewport: { width: number; height: number } } }
    __player: { getState: () => { position: VecState; velocity: VecState; grounded: boolean; movementState: MovementState; collider: { radius: number; height: number } } }
    __camera: { getState: () => { mode: 'third-person'; position: VecState; target: VecState; yaw: number; pitch: number } }
    __web: { getState: () => { attached: boolean; targetValid: boolean; anchor: VecState | null; anchorObjectId: string | null; ropeLength: number | null; distanceToAnchor: number | null; lineVisible: boolean; playerEndpoint: VecState | null; anchorEndpoint: VecState | null } }
    __world: { getState: () => { groundY: number; buildings: BuildingState[] } }
  }
}

const v = (p: THREE.Vector3): VecState => ({ x: p.x, y: p.y, z: p.z })
const clamp = THREE.MathUtils.clamp

interface BuildingRecord {
  id: string
  mesh: THREE.Mesh
  box: THREE.Box3
}

interface LandmarkRecord {
  id: string
  name: string
  object: THREE.Object3D
}

function App() {
  const mountRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const [speed, setSpeed] = useState(0)
  const [altitude, setAltitude] = useState(0)
  const [heading, setHeading] = useState('N 000°')
  const [webLabel, setWebLabel] = useState('SEARCHING')
  const [ropeInfo, setRopeInfo] = useState('—')
  const [night, setNight] = useState(false)
  const [motion, setMotion] = useState<MovementState>('idle')
  const [verticalSpeed, setVerticalSpeed] = useState(0)
  const [tension, setTension] = useState(0)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x8ac7ee)
    scene.fog = new THREE.Fog(0x8ac7ee, 90, 310)

    // Lightweight procedural atmosphere: no remote textures, but the horizon now has
    // a readable warm-to-cool gradient instead of a flat clear color.
    const skyMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x397fc4) },
        horizonColor: { value: new THREE.Color(0xc8e8f6) },
        lowerColor: { value: new THREE.Color(0xf5c995) },
      },
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
        uniform vec3 lowerColor;
        void main() {
          float h = normalize(vWorldPosition).y;
          float upper = smoothstep(0.02, 0.70, h);
          float lower = smoothstep(-0.18, 0.02, h);
          vec3 lowMix = mix(lowerColor, horizonColor, lower);
          gl_FragColor = vec4(mix(lowMix, topColor, upper), 1.0);
        }
      `,
    })
    const sky = new THREE.Mesh(new THREE.SphereGeometry(480, 24, 16), skyMaterial)
    scene.add(sky)

    const camera = new THREE.PerspectiveCamera(64, mount.clientWidth / mount.clientHeight, 0.1, 700)
    camera.position.set(0, 5, 10)

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.shadowMap.enabled = false
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.08
    renderer.setClearColor(0x8ac7ee, 1)
    renderer.domElement.dataset.testid = 'game-canvas'
    renderer.domElement.tabIndex = 0
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    mount.appendChild(renderer.domElement)

    const hemi = new THREE.HemisphereLight(0xd9f4ff, 0x17243b, 2.0)
    scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xffefd0, 3.2)
    sun.position.set(60, 110, 45)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.left = -140
    sun.shadow.camera.right = 140
    sun.shadow.camera.top = 140
    sun.shadow.camera.bottom = -140
    sun.shadow.camera.far = 300
    sun.shadow.bias = -0.00018
    sun.shadow.normalBias = 0.035
    scene.add(sun)

    // Cool camera-side rim makes the player and roof silhouettes stay readable against glass.
    const rimLight = new THREE.DirectionalLight(0x7bdfff, 1.0)
    rimLight.position.set(-45, 35, -70)
    scene.add(rimLight)
    const warmFill = new THREE.DirectionalLight(0xffb46e, 0.42)
    warmFill.position.set(35, 18, 70)
    scene.add(warmFill)

    const sunDisc = new THREE.Mesh(
      new THREE.CircleGeometry(18, 48),
      new THREE.MeshBasicMaterial({ color: 0xffd8a0, transparent: true, opacity: 0.82, depthWrite: false, fog: false }),
    )
    sunDisc.position.set(145, 105, -260)
    sunDisc.lookAt(camera.position)
    scene.add(sunDisc)

    // Procedural star field; hidden by day and enabled in night mode.
    const starPositions: number[] = []
    let starSeed = 9157
    const starRand = () => {
      starSeed = (starSeed * 1664525 + 1013904223) >>> 0
      return starSeed / 4294967296
    }
    for (let i = 0; i < 420; i++) {
      const angle = starRand() * Math.PI * 2
      const radius = 180 + starRand() * 220
      const y = 55 + starRand() * 190
      starPositions.push(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
    }
    const starGeometry = new THREE.BufferGeometry()
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3))
    const starMaterial = new THREE.PointsMaterial({ color: 0xcfeaff, size: 0.75, sizeAttenuation: true, transparent: true, opacity: 0.82 })
    const stars = new THREE.Points(starGeometry, starMaterial)
    stars.visible = false
    scene.add(stars)

    const cloudMaterial = new THREE.MeshBasicMaterial({ color: 0xeaf7ff, transparent: true, opacity: 0.18, depthWrite: false, fog: true })
    const clouds = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), cloudMaterial, 28)
    const cloudDummy = new THREE.Object3D()
    for (let i = 0; i < 28; i++) {
      const angle = starRand() * Math.PI * 2
      const radius = 95 + starRand() * 180
      cloudDummy.position.set(Math.cos(angle) * radius, 48 + starRand() * 48, Math.sin(angle) * radius)
      cloudDummy.scale.set(8 + starRand() * 14, 1.5 + starRand() * 3.4, 4 + starRand() * 9)
      cloudDummy.rotation.set(starRand() * 0.2, starRand() * Math.PI, starRand() * 0.1)
      cloudDummy.updateMatrix()
      clouds.setMatrixAt(i, cloudDummy.matrix)
    }
    clouds.instanceMatrix.needsUpdate = true
    scene.add(clouds)

    const groundY = 0
    const cameraGroundClearance = 1.15
    const cameraTargetGroundClearance = 0.92
    const cameraCollisionRadius = 0.42
    const cameraMinPlayerDistance = 1.75
    const cameraMaxUpPitch = Math.PI / 4
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(520, 520),
      new THREE.MeshStandardMaterial({ color: 0x243244, roughness: 0.96, metalness: 0.02 }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    const roadMat = new THREE.MeshStandardMaterial({ color: 0x151d28, roughness: 0.92 })
    const roadGeoLong = new THREE.PlaneGeometry(520, 10)
    const roadGeoCross = new THREE.PlaneGeometry(10, 520)
    for (let p = -180; p <= 180; p += 45) {
      const a = new THREE.Mesh(roadGeoLong, roadMat)
      a.rotation.x = -Math.PI / 2
      a.position.set(0, 0.015, p)
      scene.add(a)
      const b = new THREE.Mesh(roadGeoCross, roadMat)
      b.rotation.x = -Math.PI / 2
      b.position.set(p, 0.016, 0)
      scene.add(b)
    }

    // Instanced lane dashes make every avenue readable at speed without hundreds of draw calls.
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0xe7ddb6 })
    const stripeGeo = new THREE.PlaneGeometry(4.6, 0.13)
    const roadPositions: number[] = []
    for (let p = -180; p <= 180; p += 45) roadPositions.push(p)
    const dashPositions: number[] = []
    for (let d = -240; d <= 240; d += 12) dashPositions.push(d)
    const stripes = new THREE.InstancedMesh(stripeGeo, stripeMat, roadPositions.length * dashPositions.length * 2)
    const stripeDummy = new THREE.Object3D()
    let stripeIndex = 0
    for (const p of roadPositions) {
      for (const d of dashPositions) {
        stripeDummy.position.set(d, 0.028, p)
        stripeDummy.rotation.set(-Math.PI / 2, 0, 0)
        stripeDummy.updateMatrix()
        stripes.setMatrixAt(stripeIndex++, stripeDummy.matrix)
        stripeDummy.position.set(p, 0.029, d)
        stripeDummy.rotation.set(-Math.PI / 2, 0, Math.PI / 2)
        stripeDummy.updateMatrix()
        stripes.setMatrixAt(stripeIndex++, stripeDummy.matrix)
      }
    }
    stripes.instanceMatrix.needsUpdate = true
    scene.add(stripes)

    // Sidewalk slabs and intersection markings establish city scale without affecting collision.
    const sidewalkMat = new THREE.MeshStandardMaterial({ color: 0x465564, roughness: 0.9, metalness: 0.03 })
    const sidewalkEdgeMat = new THREE.MeshStandardMaterial({ color: 0x788998, roughness: 0.72, metalness: 0.05 })
    const sidewalkGeo = new THREE.BoxGeometry(33, 0.025, 33)
    const sidewalkEdgeGeo = new THREE.BoxGeometry(34.2, 0.018, 34.2)
    const sidewalkSlabs = new THREE.InstancedMesh(sidewalkGeo, sidewalkMat, 81)
    const sidewalkEdges = new THREE.InstancedMesh(sidewalkEdgeGeo, sidewalkEdgeMat, 81)
    sidewalkSlabs.receiveShadow = true
    sidewalkEdges.receiveShadow = true
    const sidewalkDummy = new THREE.Object3D()
    let sidewalkIndex = 0
    for (let gx = -4; gx <= 4; gx++) {
      for (let gz = -4; gz <= 4; gz++) {
        const cx = gx * 45 + 22.5
        const cz = gz * 45 + 22.5
        sidewalkDummy.position.set(cx, 0.014, cz)
        sidewalkDummy.updateMatrix()
        sidewalkEdges.setMatrixAt(sidewalkIndex, sidewalkDummy.matrix)
        sidewalkDummy.position.set(cx, 0.031, cz)
        sidewalkDummy.updateMatrix()
        sidewalkSlabs.setMatrixAt(sidewalkIndex, sidewalkDummy.matrix)
        sidewalkIndex += 1
      }
    }
    sidewalkSlabs.instanceMatrix.needsUpdate = true
    sidewalkEdges.instanceMatrix.needsUpdate = true
    scene.add(sidewalkEdges, sidewalkSlabs)

    const crosswalkMat = new THREE.MeshBasicMaterial({ color: 0xe8edf0, transparent: true, opacity: 0.72 })
    const crosswalkGeo = new THREE.PlaneGeometry(0.52, 5.2)
    const crosswalkPositions: Array<[number, number, number]> = []
    for (let x = -180; x <= 180; x += 45) {
      for (let z = -180; z <= 180; z += 45) {
        for (let i = -3; i <= 3; i++) {
          crosswalkPositions.push([x + i * 0.88, 0.036, z + 6.2])
          crosswalkPositions.push([x + 6.2, 0.037, z + i * 0.88])
        }
      }
    }
    const crosswalks = new THREE.InstancedMesh(crosswalkGeo, crosswalkMat, crosswalkPositions.length)
    const crosswalkDummy = new THREE.Object3D()
    crosswalkPositions.forEach((pos, i) => {
      crosswalkDummy.position.set(pos[0], pos[1], pos[2])
      crosswalkDummy.rotation.set(-Math.PI / 2, 0, i % 14 >= 7 ? Math.PI / 2 : 0)
      crosswalkDummy.updateMatrix()
      crosswalks.setMatrixAt(i, crosswalkDummy.matrix)
    })
    crosswalks.instanceMatrix.needsUpdate = true
    scene.add(crosswalks)

    const buildings: BuildingRecord[] = []
    const landmarks: LandmarkRecord[] = []
    const webTargets: THREE.Object3D[] = []

    // Procedural facade texture gives the skyline actual window rhythm while keeping
    // the entire visual stack generated locally in code.
    const facadeSize = 64
    const facadePixels = new Uint8Array(facadeSize * facadeSize * 4)
    for (let y = 0; y < facadeSize; y++) {
      for (let x = 0; x < facadeSize; x++) {
        const i = (y * facadeSize + x) * 4
        const cellX = x % 8
        const cellY = y % 8
        const windowCell = cellX >= 2 && cellX <= 5 && cellY >= 2 && cellY <= 5
        const lit = ((x * 13 + y * 7) % 17) > 5
        const base = windowCell ? (lit ? 202 : 76) : 25
        facadePixels[i] = windowCell ? Math.min(255, base + 18) : base
        facadePixels[i + 1] = windowCell ? Math.min(255, base + 34) : base + 8
        facadePixels[i + 2] = windowCell ? Math.min(255, base + 42) : base + 14
        facadePixels[i + 3] = 255
      }
    }
    const facadeGridTexture = new THREE.DataTexture(facadePixels, facadeSize, facadeSize, THREE.RGBAFormat)
    facadeGridTexture.colorSpace = THREE.SRGBColorSpace
    facadeGridTexture.wrapS = THREE.RepeatWrapping
    facadeGridTexture.wrapT = THREE.RepeatWrapping
    facadeGridTexture.repeat.set(2.2, 5.4)
    facadeGridTexture.magFilter = THREE.NearestFilter
    facadeGridTexture.needsUpdate = true

    const sharedMats = [
      new THREE.MeshStandardMaterial({ color: 0x52697d, map: facadeGridTexture, emissiveMap: facadeGridTexture, roughness: 0.58, metalness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x75636b, map: facadeGridTexture, emissiveMap: facadeGridTexture, roughness: 0.68, metalness: 0.12 }),
      new THREE.MeshStandardMaterial({ color: 0x597469, map: facadeGridTexture, emissiveMap: facadeGridTexture, roughness: 0.62, metalness: 0.11 }),
      new THREE.MeshStandardMaterial({ color: 0x6c6688, map: facadeGridTexture, emissiveMap: facadeGridTexture, roughness: 0.56, metalness: 0.23 }),
    ]
    const facadeMat = new THREE.MeshStandardMaterial({
      color: 0x8bd9f2,
      emissive: 0x102736,
      emissiveIntensity: 0.28,
      roughness: 0.24,
      metalness: 0.58,
      transparent: true,
      opacity: 0.61,
    })
    const structuralMat = new THREE.MeshStandardMaterial({ color: 0x263543, roughness: 0.7, metalness: 0.22 })
    const roofTechMat = new THREE.MeshStandardMaterial({ color: 0x9fb2c1, roughness: 0.5, metalness: 0.42 })
    const neonCyanMat = new THREE.MeshStandardMaterial({ color: 0x8defff, emissive: 0x29c8ff, emissiveIntensity: 1.25, roughness: 0.24, metalness: 0.25 })
    const neonWarmMat = new THREE.MeshStandardMaterial({ color: 0xffc08a, emissive: 0xff6d3c, emissiveIntensity: 0.85, roughness: 0.32, metalness: 0.18 })

    // Shared instanced detail meshes keep the richer city silhouette cheap enough for fast swinging.
    const structuralDetails = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), structuralMat, 1600)
    structuralDetails.count = 0
    structuralDetails.castShadow = true
    structuralDetails.receiveShadow = true
    scene.add(structuralDetails)
    const roofDetails = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), roofTechMat, 320)
    roofDetails.count = 0
    roofDetails.castShadow = true
    scene.add(roofDetails)
    const ventDetails = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1.2, 1, 8), structuralMat, 320)
    ventDetails.count = 0
    ventDetails.castShadow = true
    scene.add(ventDetails)
    const cyanAccents = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), neonCyanMat, 180)
    cyanAccents.count = 0
    scene.add(cyanAccents)
    const warmAccents = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), neonWarmMat, 180)
    warmAccents.count = 0
    scene.add(warmAccents)
    const detailDummy = new THREE.Object3D()
    const addDetailInstance = (target: THREE.InstancedMesh, position: THREE.Vector3, scale: THREE.Vector3) => {
      if (target.count >= target.instanceMatrix.count) return
      detailDummy.position.copy(position)
      detailDummy.rotation.set(0, 0, 0)
      detailDummy.scale.copy(scale)
      detailDummy.updateMatrix()
      target.setMatrixAt(target.count, detailDummy.matrix)
      target.count += 1
      target.instanceMatrix.needsUpdate = true
    }

    function addBuilding(id: string, x: number, z: number, sx: number, sy: number, sz: number, materialIndex: number, geometry?: THREE.BufferGeometry) {
      const mat = sharedMats[materialIndex % sharedMats.length]
      const mesh = new THREE.Mesh(geometry ?? new THREE.BoxGeometry(sx, sy, sz), mat)
      mesh.position.set(x, sy / 2, z)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.userData.buildingId = id
      scene.add(mesh)
      mesh.updateMatrixWorld(true)
      const box = new THREE.Box3().setFromObject(mesh)
      buildings.push({ id, mesh, box })
      webTargets.push(mesh)

      // Layered facade modeling: glass inset, plinth, corner structure, cornice and roof machinery.
      const frontPanel = new THREE.Mesh(
        new THREE.BoxGeometry(Math.max(2, sx * 0.74), Math.max(4, sy * 0.66), 0.09),
        facadeMat,
      )
      frontPanel.position.set(x, sy * 0.54, z + sz / 2 + 0.052)
      scene.add(frontPanel)
      const sidePanel = new THREE.Mesh(
        new THREE.BoxGeometry(0.09, Math.max(4, sy * 0.52), Math.max(2, sz * 0.66)),
        facadeMat,
      )
      sidePanel.position.set(x + sx / 2 + 0.052, sy * 0.5, z)
      scene.add(sidePanel)

      const plinthHeight = Math.min(2.1, sy * 0.09)
      addDetailInstance(structuralDetails, new THREE.Vector3(x, plinthHeight / 2, z), new THREE.Vector3(sx * 1.035, plinthHeight, sz * 1.035))

      const columnHeight = Math.max(5, sy * 0.78)
      for (const [cx, cz] of [[-1, -1], [-1, 1], [1, -1], [1, 1]] as const) {
        addDetailInstance(
          structuralDetails,
          new THREE.Vector3(x + cx * (sx / 2 + 0.09), columnHeight / 2 + 0.7, z + cz * (sz / 2 + 0.09)),
          new THREE.Vector3(0.22, columnHeight, 0.22),
        )
      }
      addDetailInstance(structuralDetails, new THREE.Vector3(x, sy + 0.12, z), new THREE.Vector3(sx * 1.045, 0.34, sz * 1.045))
      addDetailInstance(roofDetails, new THREE.Vector3(x, sy + 0.46, z), new THREE.Vector3(Math.max(1.4, sx * 0.25), 0.62, Math.max(1.4, sz * 0.25)))
      addDetailInstance(
        ventDetails,
        new THREE.Vector3(x + sx * 0.12, sy + 1.15, z - sz * 0.08),
        new THREE.Vector3(Math.max(0.16, Math.min(sx, sz) * 0.025), 1.15, Math.max(0.16, Math.min(sx, sz) * 0.025)),
      )

      if (sy > 34) {
        addDetailInstance(
          (materialIndex + Math.round(sy)) % 2 === 0 ? cyanAccents : warmAccents,
          new THREE.Vector3(x, sy * 0.79, z + sz / 2 + 0.115),
          new THREE.Vector3(Math.max(1.8, sx * 0.42), 0.095, 0.12),
        )
      }
      return mesh
    }

    let seed = 48271
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0
      return seed / 4294967296
    }

    let buildingCounter = 0
    for (let gx = -4; gx <= 4; gx++) {
      for (let gz = -4; gz <= 4; gz++) {
        const cx = gx * 45 + 22.5
        const cz = gz * 45 + 22.5
        if (Math.abs(cx) < 25 && Math.abs(cz) < 25) continue
        const count = rand() > 0.48 ? 2 : 1
        for (let i = 0; i < count; i++) {
          const sx = 13 + rand() * 8
          const sz = 13 + rand() * 8
          const sy = 20 + rand() * 42
          const ox = (i === 0 ? -1 : 1) * (count === 2 ? 7 : 0)
          const oz = (rand() - 0.5) * 7
          addBuilding(`building-${buildingCounter++}`, cx + ox, cz + oz, sx, sy, sz, buildingCounter)
        }
      }
    }

    // Original skyline landmarks: a needle tower, twin lantern cylinders, and a stepped crown.
    const needleTower = addBuilding('landmark-needle', 0, -112, 18, 82, 18, 3)
    landmarks.push({ id: 'landmark-needle', name: 'Needle Crown', object: needleTower })
    const needle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 2.6, 30, 12),
      new THREE.MeshStandardMaterial({ color: 0xdbeaff, emissive: 0x274c68, emissiveIntensity: 1.2, metalness: 0.55 }),
    )
    needle.position.set(0, 97, -112)
    needle.castShadow = true
    scene.add(needle)
    const needleRingMat = new THREE.MeshStandardMaterial({ color: 0xb9f3ff, emissive: 0x28bfe8, emissiveIntensity: 1.15, metalness: 0.48, roughness: 0.24 })
    for (const [ry, rr] of [[83.5, 5.4], [88.5, 4.3], [93.5, 3.3]] as const) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(rr, 0.18, 8, 28), needleRingMat)
      ring.position.set(0, ry, -112)
      ring.rotation.x = Math.PI / 2
      scene.add(ring)
    }

    const cylGeoA = new THREE.CylinderGeometry(8.5, 10.5, 58, 16)
    const westLantern = addBuilding('landmark-lantern-west', -112, -20, 17, 58, 17, 2, cylGeoA)
    landmarks.push({ id: 'landmark-lantern-west', name: 'West Lantern', object: westLantern })
    const eastLantern = addBuilding('landmark-lantern-east', 112, 70, 17, 52, 17, 1, new THREE.CylinderGeometry(8.5, 10.5, 52, 16))
    landmarks.push({ id: 'landmark-lantern-east', name: 'East Lantern', object: eastLantern })
    const lanternCapMat = new THREE.MeshStandardMaterial({ color: 0x28485e, metalness: 0.52, roughness: 0.3 })
    const lanternGlowMat = new THREE.MeshStandardMaterial({ color: 0xb7fbff, emissive: 0x36d8ff, emissiveIntensity: 1.4, roughness: 0.18 })
    for (const [lx, ly, lz] of [[-112, 59.2, -20], [112, 53.2, 70]] as const) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(7.2, 8.7, 1.2, 18), lanternCapMat)
      cap.position.set(lx, ly, lz)
      cap.castShadow = true
      scene.add(cap)
      const halo = new THREE.Mesh(new THREE.TorusGeometry(7.5, 0.14, 8, 28), lanternGlowMat)
      halo.position.set(lx, ly + 0.65, lz)
      halo.rotation.x = Math.PI / 2
      scene.add(halo)
      const beacon = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.3, 4.2, 8), lanternGlowMat)
      beacon.position.set(lx, ly + 2.6, lz)
      scene.add(beacon)
    }

    addBuilding('landmark-step-base', 72, -118, 28, 45, 24, 0)
    addBuilding('landmark-step-mid', 72, -118, 20, 63, 18, 0)
    const steppedCrown = addBuilding('landmark-step-crown', 72, -118, 12, 78, 12, 0)
    landmarks.push({ id: 'landmark-step-crown', name: 'Stepped Crown', object: steppedCrown })
    const crownMat = new THREE.MeshStandardMaterial({ color: 0xffc28a, emissive: 0xff713d, emissiveIntensity: 0.9, metalness: 0.36, roughness: 0.3 })
    for (let i = -1; i <= 1; i++) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.45, 5.8 - Math.abs(i) * 1.1, 0.45), crownMat)
      fin.position.set(72 + i * 2.5, 81.2 - Math.abs(i) * 0.35, -118)
      fin.castShadow = true
      scene.add(fin)
    }

    // Park plaza around the spawn so the opening view is readable.
    const park = new THREE.Mesh(
      new THREE.CircleGeometry(17, 48),
      new THREE.MeshStandardMaterial({ color: 0x3f6950, roughness: 1 }),
    )
    park.rotation.x = -Math.PI / 2
    park.position.y = 0.03
    park.receiveShadow = true
    scene.add(park)
    const sculpture = new THREE.Mesh(
      new THREE.TorusKnotGeometry(2.2, 0.45, 100, 12),
      new THREE.MeshPhysicalMaterial({ color: 0xd8f3ff, metalness: 0.78, roughness: 0.2, clearcoat: 0.6, clearcoatRoughness: 0.18 }),
    )
    sculpture.position.set(0, 4.2, 0)
    sculpture.castShadow = true
    scene.add(sculpture)

    // Park trees and street lamps create mid-scale detail between the hero and towers.
    const treeTrunkMat = new THREE.MeshStandardMaterial({ color: 0x5a4638, roughness: 0.94 })
    const treeLeafMat = new THREE.MeshStandardMaterial({ color: 0x315f4b, roughness: 0.86 })
    const trunkInstances = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.16, 0.22, 1, 7), treeTrunkMat, 18)
    const leafInstances = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), treeLeafMat, 18)
    trunkInstances.castShadow = true
    leafInstances.castShadow = true
    scene.add(trunkInstances, leafInstances)
    const parkTreeSpots: Array<[number, number]> = [
      [-12, -8], [-8, -13], [8, -13], [13, -7], [-13, 7], [-8, 13], [8, 13], [13, 7],
      [-15, 0], [15, 0],
    ]
    parkTreeSpots.forEach(([tx, tz], i) => {
      detailDummy.position.set(tx, 1.15, tz)
      detailDummy.scale.set(1, 2.3, 1)
      detailDummy.rotation.set(0, i * 0.57, 0)
      detailDummy.updateMatrix()
      trunkInstances.setMatrixAt(i, detailDummy.matrix)
      detailDummy.position.set(tx, 3.2, tz)
      detailDummy.scale.set(1.45 + (i % 3) * 0.12, 1.15 + (i % 2) * 0.16, 1.45 + (i % 3) * 0.12)
      detailDummy.rotation.set(0, i * 0.63, 0)
      detailDummy.updateMatrix()
      leafInstances.setMatrixAt(i, detailDummy.matrix)
    })
    trunkInstances.count = parkTreeSpots.length
    leafInstances.count = parkTreeSpots.length
    trunkInstances.instanceMatrix.needsUpdate = true
    leafInstances.instanceMatrix.needsUpdate = true

    const lampPoleMat = new THREE.MeshStandardMaterial({ color: 0x23303b, metalness: 0.52, roughness: 0.48 })
    const lampGlowMat = new THREE.MeshStandardMaterial({ color: 0xffe7b2, emissive: 0xffb34f, emissiveIntensity: 1.35, roughness: 0.2 })
    const lampPoles = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.06, 0.09, 1, 7), lampPoleMat, 96)
    const lampHeads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.18, 8, 6), lampGlowMat, 96)
    lampPoles.castShadow = true
    scene.add(lampPoles, lampHeads)
    const lampSpots: Array<[number, number]> = []
    for (let p = -180; p <= 180; p += 45) {
      for (let d = -160; d <= 160; d += 40) {
        if (lampSpots.length >= 96) break
        lampSpots.push([d, p + 7.1])
      }
      if (lampSpots.length >= 96) break
    }
    lampSpots.forEach(([lx, lz], i) => {
      detailDummy.position.set(lx, 2.1, lz)
      detailDummy.scale.set(1, 4.2, 1)
      detailDummy.rotation.set(0, 0, 0)
      detailDummy.updateMatrix()
      lampPoles.setMatrixAt(i, detailDummy.matrix)
      detailDummy.position.set(lx, 4.2, lz)
      detailDummy.scale.set(1, 1, 1)
      detailDummy.updateMatrix()
      lampHeads.setMatrixAt(i, detailDummy.matrix)
    })
    lampPoles.count = lampSpots.length
    lampHeads.count = lampSpots.length
    lampPoles.instanceMatrix.needsUpdate = true
    lampHeads.instanceMatrix.needsUpdate = true

    const player = new THREE.Group()
    scene.add(player)
    const heroMat = new THREE.MeshPhysicalMaterial({
      color: 0x19b8c8,
      roughness: 0.34,
      metalness: 0.22,
      clearcoat: 0.42,
      clearcoatRoughness: 0.28,
    })
    const accentMat = new THREE.MeshPhysicalMaterial({
      color: 0x071429,
      roughness: 0.46,
      metalness: 0.3,
      clearcoat: 0.32,
      clearcoatRoughness: 0.34,
    })
    const trimMat = new THREE.MeshPhysicalMaterial({
      color: 0xff5268,
      emissive: 0x3b0710,
      emissiveIntensity: 0.34,
      roughness: 0.31,
      metalness: 0.2,
      clearcoat: 0.5,
    })
    const glowMat = new THREE.MeshStandardMaterial({ color: 0xf4fdff, emissive: 0x65dfff, emissiveIntensity: 1.65, roughness: 0.16 })
    const armorMat = new THREE.MeshPhysicalMaterial({ color: 0x102643, roughness: 0.3, metalness: 0.52, clearcoat: 0.55, clearcoatRoughness: 0.24 })

    // More anatomical procedural hero silhouette: capsule torso, articulated limbs,
    // mask lenses and an original luminous thread crest. Physics collider stays unchanged.
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.39, 0.74, 8, 14), heroMat)
    torso.position.y = 1.46
    torso.scale.set(1.0, 1.1, 0.74)
    torso.castShadow = true
    player.add(torso)

    const shoulderFrame = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.58, 6, 10), armorMat)
    shoulderFrame.position.set(0, 1.79, -0.015)
    shoulderFrame.rotation.z = Math.PI / 2
    shoulderFrame.scale.set(0.78, 1.12, 0.62)
    shoulderFrame.castShadow = true
    player.add(shoulderFrame)

    const pelvis = new THREE.Mesh(new THREE.SphereGeometry(0.35, 14, 10), accentMat)
    pelvis.position.set(0, 1.04, 0)
    pelvis.scale.set(1.08, 0.52, 0.74)
    pelvis.castShadow = true
    player.add(pelvis)

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.17, 0.22, 10), armorMat)
    neck.position.set(0, 1.99, 0)
    neck.castShadow = true
    player.add(neck)

    const chest = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), trimMat)
    chest.position.set(0, 1.64, 0.39)
    chest.scale.set(0.72, 1.16, 0.22)
    chest.rotation.z = Math.PI / 4
    player.add(chest)
    const chestLine = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.52, 6), trimMat)
    chestLine.position.set(0, 1.39, 0.39)
    player.add(chestLine)
    const crestWingGeo = new THREE.BoxGeometry(0.32, 0.035, 0.035)
    const crestLeft = new THREE.Mesh(crestWingGeo, trimMat)
    const crestRight = new THREE.Mesh(crestWingGeo, trimMat)
    crestLeft.position.set(-0.17, 1.62, 0.395)
    crestRight.position.set(0.17, 1.62, 0.395)
    crestLeft.rotation.z = -0.52
    crestRight.rotation.z = 0.52
    player.add(crestLeft, crestRight)

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 24, 18), accentMat)
    head.position.y = 2.22
    head.scale.set(0.9, 1.08, 0.88)
    head.castShadow = true
    player.add(head)
    const eyeGeo = new THREE.SphereGeometry(0.105, 10, 6)
    const leftEye = new THREE.Mesh(eyeGeo, glowMat)
    const rightEye = new THREE.Mesh(eyeGeo, glowMat)
    leftEye.position.set(-0.115, 2.27, 0.27)
    rightEye.position.set(0.115, 2.27, 0.27)
    leftEye.scale.set(0.58, 1.3, 0.18)
    rightEye.scale.set(0.58, 1.3, 0.18)
    leftEye.rotation.z = -0.11
    rightEye.rotation.z = 0.11
    player.add(leftEye, rightEye)

    const maskBrowGeo = new THREE.BoxGeometry(0.17, 0.026, 0.035)
    const browL = new THREE.Mesh(maskBrowGeo, trimMat)
    const browR = new THREE.Mesh(maskBrowGeo, trimMat)
    browL.position.set(-0.11, 2.38, 0.268)
    browR.position.set(0.11, 2.38, 0.268)
    browL.rotation.z = -0.2
    browR.rotation.z = 0.2
    player.add(browL, browR)

    const maskStripe = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.33, 0.03), armorMat)
    maskStripe.position.set(0, 2.17, 0.292)
    player.add(maskStripe)

    const backNode = new THREE.Mesh(new THREE.OctahedronGeometry(0.09, 0), glowMat)
    backNode.position.set(0, 1.58, -0.38)
    backNode.scale.set(0.7, 1.25, 0.45)
    player.add(backNode)

    const limbMat = heroMat
    const armGeo = new THREE.CylinderGeometry(0.095, 0.13, 0.88, 10)
    const forearmGeo = new THREE.CylinderGeometry(0.075, 0.105, 0.48, 10)
    const legGeo = new THREE.CylinderGeometry(0.125, 0.17, 0.92, 10)
    const shinGeo = new THREE.CylinderGeometry(0.09, 0.135, 0.58, 10)
    const handGeo = new THREE.SphereGeometry(0.13, 10, 7)

    const buildArm = (side: number) => {
      const pivot = new THREE.Group()
      pivot.position.set(0.5 * side, 1.78, 0)
      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 8), armorMat)
      shoulder.position.set(0, -0.03, 0)
      shoulder.scale.set(1.12, 0.9, 0.92)
      const upper = new THREE.Mesh(armGeo, limbMat)
      upper.position.y = -0.4
      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 7), armorMat)
      elbow.position.y = -0.82
      elbow.scale.set(1.04, 0.82, 1.0)
      const lower = new THREE.Mesh(forearmGeo, trimMat)
      lower.position.y = -1.02
      lower.scale.set(1.1, 1.04, 0.95)
      const gauntlet = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.22, 8), armorMat)
      gauntlet.position.y = -1.22
      const hand = new THREE.Mesh(handGeo, accentMat)
      hand.position.y = -1.36
      hand.scale.set(0.94, 1.1, 0.86)
      const webShooter = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.07, 0.12), glowMat)
      webShooter.position.set(0, -1.2, 0.09)
      ;[shoulder, upper, elbow, lower, gauntlet, hand, webShooter].forEach((m) => { m.castShadow = true; pivot.add(m) })
      player.add(pivot)
      return pivot
    }
    const buildLeg = (side: number) => {
      const pivot = new THREE.Group()
      pivot.position.set(0.225 * side, 1.17, 0)
      const hip = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 7), armorMat)
      hip.position.y = -0.02
      const thigh = new THREE.Mesh(legGeo, accentMat)
      thigh.position.y = -0.34
      thigh.scale.set(1.08, 1, 0.94)
      const knee = new THREE.Mesh(new THREE.OctahedronGeometry(0.135, 0), trimMat)
      knee.position.set(0, -0.69, 0.105)
      knee.scale.set(0.92, 1.15, 0.5)
      const shin = new THREE.Mesh(shinGeo, limbMat)
      shin.position.y = -0.9
      const shinGuard = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.34, 0.08), armorMat)
      shinGuard.position.set(0, -0.89, 0.115)
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.2, 0.46), accentMat)
      boot.position.set(0, -1.15, 0.09)
      boot.rotation.x = -0.08
      const sole = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.055, 0.5), trimMat)
      sole.position.set(0, -1.25, 0.095)
      ;[hip, thigh, knee, shin, shinGuard, boot, sole].forEach((m) => { m.castShadow = true; pivot.add(m) })
      player.add(pivot)
      return pivot
    }
    const leftArm = buildArm(-1)
    const rightArm = buildArm(1)
    const leftLeg = buildLeg(-1)
    const rightLeg = buildLeg(1)

    const playerPos = new THREE.Vector3(0, 0, 18)
    const velocity = new THREE.Vector3()
    player.position.copy(playerPos)
    const colliderRadius = 0.65
    const colliderHeight = 2.6
    let grounded = true
    let movementState: MovementState = 'idle'
    let yaw = 0
    let pitch = 0.24
    // Render pitch combines user input with a small motion assist.
    let renderPitch = pitch
    let actualCameraYaw = yaw
    let actualCameraPitch = renderPitch
    let actualCameraTarget = new THREE.Vector3(0, 1.4, 14)
    let elapsed = 0
    let running = true
    let ready = true
    let frame = 0
    let rafId = 0
    let lastTime = performance.now()
    let jumpHeld = false
    let coyoteTime = 0.12
    let jumpBuffer = 0
    let cameraKick = 0
    let ropeTension = 0
    let ropeCatchPulse = 0
    let previousVerticalSpeed = 0
    let controlActive = false
    let hadPointerLock = false
    let landingPulse = 0
    let releasePulse = 0
    let wasGrounded = true

    const keys = new Set<string>()
    const tempForward = new THREE.Vector3()
    const tempRight = new THREE.Vector3()
    const tempInput = new THREE.Vector3()
    const tempVec = new THREE.Vector3()
    const desiredCameraTarget = new THREE.Vector3()
    const desiredCameraPosition = new THREE.Vector3()
    const cameraLookDir = new THREE.Vector3()
    const cameraLead = new THREE.Vector3()
    const webStart = new THREE.Vector3()
    const ropeDir = new THREE.Vector3()
    const tangentialInput = new THREE.Vector3()
    const prevPos = new THREE.Vector3()
    const raycaster = new THREE.Raycaster()
    raycaster.far = 150

    let targetValid = false
    const targetPoint = new THREE.Vector3()
    let targetObjectId: string | null = null
    let webAttached = false
    let webAnchor: THREE.Vector3 | null = null
    let webObjectId: string | null = null
    let ropeLength: number | null = null

    const webSegments = 8
    const webGeometry = new THREE.BufferGeometry().setFromPoints(Array.from({ length: webSegments + 1 }, () => new THREE.Vector3()))
    const webMaterial = new THREE.LineBasicMaterial({ color: 0xf5fdff, transparent: true, opacity: 0.98 })
    const webLine = new THREE.Line(webGeometry, webMaterial)
    webLine.visible = false
    scene.add(webLine)
    const webGlowMaterial = new THREE.MeshBasicMaterial({ color: 0x66ddff, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false })
    const webGlow = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.022, 1, 8), webGlowMaterial)
    webGlow.visible = false
    scene.add(webGlow)
    const webCoreMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.82, depthWrite: false })
    const webCore = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 1, 6), webCoreMaterial)
    webCore.visible = false
    scene.add(webCore)
    const anchorHaloMaterial = new THREE.MeshBasicMaterial({ color: 0x78efff, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
    const anchorHalo = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.34, 20), anchorHaloMaterial)
    anchorHalo.visible = false
    scene.add(anchorHalo)

    const trailCount = 28
    const trailPositions = new Float32Array(trailCount * 3)
    const trailGeometry = new THREE.BufferGeometry()
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3))
    const trailMaterial = new THREE.PointsMaterial({ color: 0x8fefff, size: 0.11, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true })
    const trail = new THREE.Points(trailGeometry, trailMaterial)
    scene.add(trail)

    const aimMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 8, 6),
      new THREE.MeshBasicMaterial({ color: 0x9eefff, transparent: true, opacity: 0.75 }),
    )
    aimMarker.visible = false
    scene.add(aimMarker)

    // Purely procedural contact feedback. It is driven by the real landing velocity
    // and never changes the player's physics state.
    const landingRingMaterial = new THREE.MeshBasicMaterial({
      color: 0xa8efff, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    })
    const landingRing = new THREE.Mesh(new THREE.RingGeometry(0.4, 0.54, 32), landingRingMaterial)
    landingRing.rotation.x = -Math.PI / 2
    landingRing.visible = false
    scene.add(landingRing)

    const cameraCollisionRay = new THREE.Raycaster()
    const cameraExpandedBox = new THREE.Box3()
    const cameraCandidate = new THREE.Vector3()
    const cameraCandidate2 = new THREE.Vector3()
    const cameraCandidate3 = new THREE.Vector3()
    const cameraCandidate4 = new THREE.Vector3()
    const cameraCandidateResolved = new THREE.Vector3()
    const cameraResolved = new THREE.Vector3()
    const cameraBoom = new THREE.Vector3()
    const cameraHitPoint = new THREE.Vector3()
    const cameraCollisionOrigin = new THREE.Vector3()

    function getAimHit() {
      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera)
      const hit = raycaster.intersectObjects(webTargets, false)[0]
      if (hit) {
        targetValid = true
        targetPoint.copy(hit.point)
        targetObjectId = (hit.object as THREE.Mesh).userData.buildingId ?? null
        aimMarker.position.copy(hit.point)
        aimMarker.visible = true
        return
      }
      targetValid = false
      targetPoint.set(0, 0, 0)
      targetObjectId = null
      aimMarker.visible = false
    }

    function attachWeb() {
      // Respect the aim state already rendered to the player. If the current frame says
      // there is no valid building under the reticle, a click must never create a web.
      // Re-querying from scratch before this guard caused a race where an invalid target
      // could become valid during the click itself.
      if (!targetValid || !targetObjectId || !aimMarker.visible) return
      // When the frame was valid, verify the same center ray once more so a stale marker
      // cannot attach after a fast camera turn. A failed verification invalidates the click.
      getAimHit()
      if (!targetValid || !targetObjectId || !aimMarker.visible) return
      const measuredLength = playerPos.distanceTo(targetPoint)
      if (!Number.isFinite(measuredLength) || measuredLength <= 0.01) return
      webAttached = true
      webAnchor = targetPoint.clone()
      webObjectId = targetObjectId
      // The constraint starts at the exact real player-to-hit distance. Do not shorten,
      // lengthen or snap it: the prompt requires the recorded rope length to be the
      // distance that actually existed at the moment of attachment.
      ropeLength = measuredLength
      ropeDir.copy(playerPos).sub(webAnchor).normalize()
      const outwardAtCatch = Math.max(0, velocity.dot(ropeDir))
      ropeCatchPulse = clamp(0.32 + outwardAtCatch * 0.055 + velocity.length() * 0.008, 0.32, 1)
      ropeTension = Math.max(ropeTension, ropeCatchPulse * 0.45)

      // A grounded hero actively pushes off when committing to an elevated web. This is a
      // real input-driven takeoff impulse, not a fake swing path: the measured anchor and
      // ropeLength remain unchanged and every following frame is still solved by gravity,
      // the existing velocity and the unilateral rope constraint. It also prevents a taut
      // zero-speed line from leaving the player visually planted on the street.
      const anchorRise = webAnchor.y - (playerPos.y + 1.0)
      if (anchorRise > 1.5) {
        // Committing to an elevated web includes a strong acrobatic pump. It preserves
        // the incoming horizontal momentum, but guarantees enough upward velocity for
        // the player to remain airborne through a normal swing/release window. This is
        // an input-triggered player impulse at attachment; all following motion still
        // integrates gravity, the real anchor, ropeLength and the existing velocity.
        const launchVy = 15.2 + clamp(anchorRise * 0.04, 0, 1.4)
        velocity.y = Math.max(velocity.y, launchVy)
        grounded = false
        coyoteTime = 0
        jumpBuffer = 0
        cameraKick = Math.max(cameraKick, 0.22)
      }

      cameraKick = Math.max(cameraKick, 0.12 + ropeCatchPulse * 0.12)
      webLine.visible = true
    }

    function releaseWeb(withFeedback = true) {
      // Preserve the exact release velocity. All release feedback below is visual only.
      if (withFeedback && webAttached) releasePulse = Math.max(releasePulse, clamp((velocity.length() - 7) / 34, 0.12, 1))
      webAttached = false
      webAnchor = null
      webObjectId = null
      ropeLength = null
      ropeCatchPulse = 0
      webLine.visible = false
    }

    const collisionSkin = 0.025
    const contactNormal = new THREE.Vector3()
    const collisionStart = new THREE.Vector3()
    const collisionEnd = new THREE.Vector3()
    const collisionRemaining = new THREE.Vector3()
    const collisionPoint = new THREE.Vector3()

    type SweepHit = {
      t: number
      normal: THREE.Vector3
      building: BuildingRecord | null
      kind: 'wall' | 'roof' | 'ground'
    }

    function verticalOverlapAt(y: number, box: THREE.Box3) {
      const feet = y
      const top = y + colliderHeight
      return feet < box.max.y - collisionSkin && top > box.min.y + collisionSkin
    }

    function pointInsideExpandedXZ(point: THREE.Vector3, box: THREE.Box3, inset = 0) {
      return point.x > box.min.x - colliderRadius + inset &&
        point.x < box.max.x + colliderRadius - inset &&
        point.z > box.min.z - colliderRadius + inset &&
        point.z < box.max.z + colliderRadius - inset
    }

    function depenetratePlayer() {
      // Rope corrections and reset states can occasionally place the cylinder a few
      // millimetres inside an expanded building box. Resolve those cases before the
      // swept pass so the sweep always starts from a valid configuration.
      for (let pass = 0; pass < 4; pass++) {
        let corrected = false
        for (const b of buildings) {
          const box = b.box
          if (!verticalOverlapAt(playerPos.y, box) || !pointInsideExpandedXZ(playerPos, box)) continue

          const left = playerPos.x - (box.min.x - colliderRadius)
          const right = (box.max.x + colliderRadius) - playerPos.x
          const near = playerPos.z - (box.min.z - colliderRadius)
          const far = (box.max.z + colliderRadius) - playerPos.z
          const minPen = Math.min(left, right, near, far)

          if (minPen === left) {
            playerPos.x = box.min.x - colliderRadius - collisionSkin
            if (velocity.x > 0) velocity.x = 0
          } else if (minPen === right) {
            playerPos.x = box.max.x + colliderRadius + collisionSkin
            if (velocity.x < 0) velocity.x = 0
          } else if (minPen === near) {
            playerPos.z = box.min.z - colliderRadius - collisionSkin
            if (velocity.z > 0) velocity.z = 0
          } else {
            playerPos.z = box.max.z + colliderRadius + collisionSkin
            if (velocity.z < 0) velocity.z = 0
          }
          corrected = true
        }
        if (!corrected) break
      }
    }

    function sweepPointAgainstExpandedBoxXZ(start: THREE.Vector3, delta: THREE.Vector3, box: THREE.Box3) {
      const minX = box.min.x - colliderRadius
      const maxX = box.max.x + colliderRadius
      const minZ = box.min.z - colliderRadius
      const maxZ = box.max.z + colliderRadius

      let txEntry = -Infinity
      let txExit = Infinity
      let xNormal = 0
      if (Math.abs(delta.x) < 1e-8) {
        if (start.x <= minX || start.x >= maxX) return null
      } else if (delta.x > 0) {
        txEntry = (minX - start.x) / delta.x
        txExit = (maxX - start.x) / delta.x
        xNormal = -1
      } else {
        txEntry = (maxX - start.x) / delta.x
        txExit = (minX - start.x) / delta.x
        xNormal = 1
      }

      let tzEntry = -Infinity
      let tzExit = Infinity
      let zNormal = 0
      if (Math.abs(delta.z) < 1e-8) {
        if (start.z <= minZ || start.z >= maxZ) return null
      } else if (delta.z > 0) {
        tzEntry = (minZ - start.z) / delta.z
        tzExit = (maxZ - start.z) / delta.z
        zNormal = -1
      } else {
        tzEntry = (maxZ - start.z) / delta.z
        tzExit = (minZ - start.z) / delta.z
        zNormal = 1
      }

      const entry = Math.max(txEntry, tzEntry)
      const exit = Math.min(txExit, tzExit)
      if (entry > exit || exit < 0 || entry < 0 || entry > 1) return null

      contactNormal.set(0, 0, 0)
      if (txEntry > tzEntry) contactNormal.set(xNormal, 0, 0)
      else contactNormal.set(0, 0, zNormal)
      return { t: entry, normal: contactNormal.clone() }
    }

    function findEarliestCollision(start: THREE.Vector3, delta: THREE.Vector3): SweepHit | null {
      let best: SweepHit | null = null

      // Ground is treated as an infinite horizontal plane under the player's feet.
      if (delta.y < -1e-8 && start.y >= groundY) {
        const t = (groundY - start.y) / delta.y
        if (t >= 0 && t <= 1) best = { t, normal: new THREE.Vector3(0, 1, 0), building: null, kind: 'ground' }
      }

      for (const b of buildings) {
        const box = b.box

        // Roof landing is a separate sweep so falling quickly onto a roof cannot tunnel
        // through the top and then be interpreted as a wall overlap.
        if (delta.y < -1e-8 && start.y >= box.max.y - collisionSkin) {
          const t = (box.max.y - start.y) / delta.y
          if (t >= 0 && t <= 1 && (!best || t < best.t)) {
            collisionPoint.copy(start).addScaledVector(delta, t)
            if (pointInsideExpandedXZ(collisionPoint, box, collisionSkin * 0.5)) {
              best = { t, normal: new THREE.Vector3(0, 1, 0), building: b, kind: 'roof' }
            }
          }
        }

        const side = sweepPointAgainstExpandedBoxXZ(start, delta, box)
        if (!side || (best && side.t >= best.t)) continue
        const yAtContact = start.y + delta.y * side.t
        if (!verticalOverlapAt(yAtContact, box)) continue
        best = { t: side.t, normal: side.normal, building: b, kind: 'wall' }
      }
      return best
    }

    function movePlayerWithCollisions(start: THREE.Vector3, desired: THREE.Vector3) {
      playerPos.copy(start)
      depenetratePlayer()
      collisionRemaining.copy(desired).sub(start)
      grounded = false

      // A few conservative iterations are enough for a box-city: one wall hit can
      // slide into a second wall at a corner, then a roof/ground hit can finish it.
      for (let iteration = 0; iteration < 5; iteration++) {
        if (collisionRemaining.lengthSq() < 1e-10) break
        collisionStart.copy(playerPos)
        const hit = findEarliestCollision(collisionStart, collisionRemaining)
        if (!hit) {
          playerPos.add(collisionRemaining)
          collisionRemaining.set(0, 0, 0)
          break
        }

        const safeT = Math.max(0, hit.t - 1e-5)
        playerPos.addScaledVector(collisionRemaining, safeT)

        // Keep a tiny skin on vertical walls so floating-point noise does not make
        // the next sub-step start "inside" the same wall. Horizontal skin is not
        // applied to floors/roofs because the public player position represents feet.
        if (hit.kind === 'wall') playerPos.addScaledVector(hit.normal, collisionSkin)
        else if (hit.kind === 'ground') playerPos.y = groundY
        else if (hit.kind === 'roof' && hit.building) playerPos.y = hit.building.box.max.y

        const remainderScale = Math.max(0, 1 - hit.t)
        collisionRemaining.multiplyScalar(remainderScale)
        const intoSurface = collisionRemaining.dot(hit.normal)
        if (intoSurface < 0) collisionRemaining.addScaledVector(hit.normal, -intoSurface)

        const velocityIntoSurface = velocity.dot(hit.normal)
        if (velocityIntoSurface < 0) velocity.addScaledVector(hit.normal, -velocityIntoSurface)

        if (hit.normal.y > 0.5) grounded = true
      }

      // Final safety pass handles the rare case where a rope positional correction
      // starts extremely close to a corner shared by multiple expanded AABBs.
      depenetratePlayer()
      if (playerPos.y <= groundY + 1e-5) {
        playerPos.y = groundY
        if (velocity.y < 0) velocity.y = 0
        grounded = true
      }
    }

    function applyRopeConstraint(point: THREE.Vector3, dt: number, recordFeedback = true) {
      if (!webAttached || !webAnchor || ropeLength === null) return false
      ropeDir.copy(point).sub(webAnchor)
      const dist = ropeDir.length()
      if (!Number.isFinite(dist) || dist <= ropeLength || dist < 0.0001) return false

      const stretchError = dist - ropeLength
      ropeDir.multiplyScalar(1 / dist)
      point.copy(webAnchor).addScaledVector(ropeDir, ropeLength)

      // A rope can pull but never push: only outward radial velocity is removed.
      // Tangential and inward components are preserved exactly for momentum-based arcs.
      const outward = velocity.dot(ropeDir)
      if (outward > 0) velocity.addScaledVector(ropeDir, -outward)

      if (recordFeedback) {
        const radial = velocity.dot(ropeDir)
        const tangentSpeedSq = Math.max(0, velocity.lengthSq() - radial * radial)
        const centripetalDemand = tangentSpeedSq / Math.max(ropeLength, 1)
        const correctionRate = stretchError / Math.max(dt, 1 / 240)
        const tensionSample = clamp(outward * 0.065 + correctionRate * 0.018 + centripetalDemand * 0.019, 0, 1)
        ropeTension = Math.max(ropeTension, tensionSample)
        if (outward > 2.2 || stretchError > 0.055) {
          ropeCatchPulse = Math.max(ropeCatchPulse, clamp(outward * 0.044 + stretchError * 1.45, 0, 0.88))
          cameraKick = Math.max(cameraKick, ropeCatchPulse * 0.075)
        }
      }
      return true
    }

    function restoreSurfaceSupport() {
      // Keep feet stable on ground/roof planes between swept contacts. This does not
      // create a new collision shape; it only recognizes an existing support surface.
      if (velocity.y > 0.05) return
      if (Math.abs(playerPos.y - groundY) <= 0.055) {
        playerPos.y = groundY
        if (velocity.y < 0) velocity.y = 0
        grounded = true
        return
      }
      for (const b of buildings) {
        if (Math.abs(playerPos.y - b.box.max.y) > 0.055) continue
        if (!pointInsideExpandedXZ(playerPos, b.box, collisionSkin)) continue
        playerPos.y = b.box.max.y
        if (velocity.y < 0) velocity.y = 0
        grounded = true
        return
      }
    }

    function simulateStep(dt: number) {
      prevPos.copy(playerPos)
      tempForward.set(Math.sin(yaw), 0, -Math.cos(yaw)).normalize()
      tempRight.set(Math.cos(yaw), 0, Math.sin(yaw)).normalize()
      tempInput.set(0, 0, 0)
      if (keys.has('KeyW')) tempInput.add(tempForward)
      if (keys.has('KeyS')) tempInput.sub(tempForward)
      if (keys.has('KeyD')) tempInput.add(tempRight)
      if (keys.has('KeyA')) tempInput.sub(tempRight)
      if (tempInput.lengthSq() > 0) tempInput.normalize()

      const sprinting = keys.has('ShiftLeft') || keys.has('ShiftRight')
      const hasMoveInput = tempInput.lengthSq() > 0

      // Rope tension is an observed feedback value, never a substitute force. It is
      // refreshed only when the real length constraint has to remove outward motion.
      ropeTension *= Math.exp(-8.5 * dt)
      ropeCatchPulse *= Math.exp(-7.2 * dt)

      if (webAttached && webAnchor) {
        // An attached rope owns the movement regime even during a brief ground/roof
        // contact.  Previously the no-input case fell through to the grounded idle-drag
        // branch, which could erase genuine swing momentum before mouse-up.  Keep the
        // real velocity intact while attached; optional input only adds tangential pump.
        if (hasMoveInput) {
          ropeDir.copy(playerPos).sub(webAnchor)
          if (ropeDir.lengthSq() > 0.0001) {
            ropeDir.normalize()
            tangentialInput.copy(tempInput).addScaledVector(ropeDir, -tempInput.dot(ropeDir))
            if (tangentialInput.lengthSq() > 0.0001) {
              const swingPumpAccel = sprinting ? 11.5 : 9.0
              velocity.addScaledVector(tangentialInput.normalize(), swingPumpAccel * dt)
            }
          }
        }
      } else if (grounded) {
        // Ground movement is target-speed based for responsive starts and reversals.
        // Crucially, this is not a global velocity clamp: airborne momentum from a
        // released web is left untouched until real ground contact occurs.
        if (hasMoveInput) {
          const targetSpeed = sprinting ? 20.5 : 13.8
          const desiredX = tempInput.x * targetSpeed
          const desiredZ = tempInput.z * targetSpeed
          const response = sprinting ? 54 : 48
          tempVec.set(desiredX - velocity.x, 0, desiredZ - velocity.z)
          const maxControlDelta = response * dt
          if (tempVec.lengthSq() > maxControlDelta * maxControlDelta) tempVec.setLength(maxControlDelta)
          velocity.x += tempVec.x
          velocity.z += tempVec.z
        } else {
          const drag = Math.exp(-9.5 * dt)
          velocity.x *= drag
          velocity.z *= drag
          if (Math.abs(velocity.x) < 0.01) velocity.x = 0
          if (Math.abs(velocity.z) < 0.01) velocity.z = 0
        }
      } else if (hasMoveInput) {
        // Air control only changes the component along the requested direction and
        // never truncates an existing high-speed release vector. This preserves the
        // exact horizontal momentum required after letting go of the web.
        const alongInput = velocity.x * tempInput.x + velocity.z * tempInput.z
        const airTarget = sprinting ? 17.5 : 13.0
        const available = Math.max(0, airTarget - alongInput)
        const airDelta = Math.min(7.5 * dt, available)
        velocity.x += tempInput.x * airDelta
        velocity.z += tempInput.z * airDelta
      }

      // Classic Metropolis depth traction: the loaded web gains a modest inward pull when
      // the real anchor has meaningful Z separation. The force remains collinear with the
      // actual rope; Z only controls how strongly the existing rope load is felt in depth.
      if (webAttached && webAnchor && ropeLength !== null) {
        ropeDir.copy(playerPos).sub(webAnchor)
        const liveDistance = ropeDir.length()
        if (liveDistance > 0.0001) {
          ropeDir.multiplyScalar(1 / liveDistance)
          const depthShare = Math.abs(playerPos.z - webAnchor.z) / liveDistance
          const lineLoad = clamp((liveDistance / Math.max(ropeLength, 0.001) - 0.86) / 0.14, 0, 1)
          if (depthShare > 0.05 && lineLoad > 0) {
            const depthTraction = depthShare * lineLoad * (2.15 + ropeTension * 2.65)
            velocity.addScaledVector(ropeDir, -depthTraction * dt)
          }
        }
      }

      // High-anchor traction: when the real rope is loaded and the actual anchor is above
      // the hero, sustain a stronger pull *along that same rope direction*. This is not a
      // free vertical boost: elevation only increases the tensile force of an already
      // loaded line, so gravity, momentum, anchor geometry and ropeLength still determine
      // the trajectory. It gives tall-building webs enough upward authority to lift rather
      // than merely drag the hero horizontally across the street.
      if (webAttached && webAnchor && ropeLength !== null) {
        ropeDir.copy(playerPos).sub(webAnchor)
        const liveDistance = ropeDir.length()
        if (liveDistance > 0.0001) {
          ropeDir.multiplyScalar(1 / liveDistance)
          const anchorRise = webAnchor.y - (playerPos.y + 0.9)
          const elevationShare = Math.max(0, -ropeDir.y)
          const lineLoad = clamp((liveDistance / Math.max(ropeLength, 0.001) - 0.82) / 0.18, 0, 1)
          if (anchorRise > 1.0 && elevationShare > 0.08 && lineLoad > 0) {
            const elevationGain = 0.62 + 0.38 * clamp(anchorRise / 18, 0, 1)
            const liftTraction = lineLoad * elevationGain * (26 + elevationShare * 38 + ropeTension * 16 + ropeCatchPulse * 8)
            velocity.addScaledVector(ropeDir, -liftTraction * dt)
          }
        }
      }

      const jumpNow = keys.has('Space')
      coyoteTime = grounded ? 0.12 : Math.max(0, coyoteTime - dt)
      jumpBuffer = Math.max(0, jumpBuffer - dt)
      if (jumpNow && !jumpHeld) jumpBuffer = 0.12
      if (jumpBuffer > 0 && coyoteTime > 0) {
        velocity.y = 11.4
        grounded = false
        coyoteTime = 0
        jumpBuffer = 0
        cameraKick = Math.max(cameraKick, 0.07)
      }
      jumpHeld = jumpNow

      // Gravity is always integrated while airborne/attached. Ground collision below
      // removes only the component directed into the supporting surface.
      velocity.y += -24 * dt

      // Numerical safety only. Normal gameplay stays well below this threshold; it
      // is deliberately not applied after release, so real release momentum survives.
      if (webAttached && velocity.lengthSq() > 60 * 60) velocity.setLength(60)

      collisionEnd.copy(playerPos).addScaledVector(velocity, dt)
      applyRopeConstraint(collisionEnd, dt, true)

      const verticalBeforeCollision = velocity.y
      wasGrounded = grounded
      movePlayerWithCollisions(prevPos, collisionEnd)
      restoreSurfaceSupport()

      // Collision response can slide the player along a wall after the first rope
      // projection. Re-apply the same one-sided length constraint using a swept move
      // so the rope stays taut without teleporting the player through geometry.
      if (webAttached && webAnchor && ropeLength !== null) {
        tempVec.copy(playerPos).sub(webAnchor)
        const postDistance = tempVec.length()
        if (postDistance > ropeLength + 0.002 && postDistance > 0.0001) {
          collisionStart.copy(playerPos)
          tempVec.multiplyScalar(1 / postDistance)
          collisionEnd.copy(webAnchor).addScaledVector(tempVec, ropeLength)
          applyRopeConstraint(collisionEnd, dt, false)
          movePlayerWithCollisions(collisionStart, collisionEnd)
          restoreSurfaceSupport()
        }
      }

      if (!wasGrounded && grounded && verticalBeforeCollision < -4.2) {
        landingPulse = Math.max(landingPulse, clamp((-verticalBeforeCollision - 4.2) / 18, 0.12, 1))
        cameraKick = Math.max(cameraKick, landingPulse * 0.09)
      }

      if (playerPos.y < -40 || !Number.isFinite(playerPos.x + playerPos.y + playerPos.z)) {
        playerPos.set(0, 0, 18)
        velocity.set(0, 0, 0)
        releaseWeb(false)
      }
    }

    function updateAnimation(t: number) {
      const planar = Math.hypot(velocity.x, velocity.z)
      if (webAttached) movementState = 'swinging'
      else if (!grounded) movementState = velocity.y > 0.6 ? 'jumping' : 'falling'
      else if (planar > 0.6) movementState = 'moving'
      else movementState = 'idle'

      // Reset pose axes first so state transitions never inherit stale rotations.
      leftArm.rotation.set(0, 0, 0)
      rightArm.rotation.set(0, 0, 0)
      leftLeg.rotation.set(0, 0, 0)
      rightLeg.rotation.set(0, 0, 0)
      torso.rotation.set(0, 0, 0)
      player.rotation.x = 0
      player.rotation.z = 0
      const stretch = clamp(velocity.length() / 44, 0, 1)
      player.scale.set(1 - stretch * 0.035, 1 + stretch * 0.055, 1 - stretch * 0.035)

      if (movementState === 'moving') {
        const stride = Math.sin(t * (9 + Math.min(5, planar * 0.25)))
        leftArm.rotation.x = stride * 0.62
        rightArm.rotation.x = -stride * 0.62
        leftLeg.rotation.x = -stride * 0.5
        rightLeg.rotation.x = stride * 0.5
        torso.rotation.x = -0.1
        player.rotation.z = clamp(-velocity.dot(tempRight) * 0.008, -0.08, 0.08)
      } else if (movementState === 'jumping') {
        // Readable airborne silhouette from the chase camera: one arm reaches, the other
        // opens for balance and the knees tuck asymmetrically instead of resembling idle.
        leftArm.rotation.x = -1.92
        leftArm.rotation.z = 1.02
        rightArm.rotation.x = -1.18
        rightArm.rotation.z = -1.28
        leftLeg.rotation.x = 1.18
        leftLeg.rotation.z = 0.30
        rightLeg.rotation.x = 0.58
        rightLeg.rotation.z = -0.32
        torso.rotation.x = -0.26
        torso.rotation.z = 0.16
        // Make the airborne silhouette unmistakable from a rear chase camera.
        player.rotation.x = -0.16
        player.rotation.z = 0.18
      } else if (movementState === 'falling') {
        leftArm.rotation.z = 1.24
        rightArm.rotation.z = -1.24
        leftArm.rotation.x = -0.36
        rightArm.rotation.x = -0.36
        leftLeg.rotation.x = -0.42
        rightLeg.rotation.x = 0.46
        leftLeg.rotation.z = 0.12
        rightLeg.rotation.z = -0.12
        torso.rotation.x = 0.14
        player.rotation.z = clamp(-velocity.dot(tempRight) * 0.012, -0.12, 0.12)
      } else if (movementState === 'swinging') {
        const swingPitch = clamp(velocity.y * 0.022, -0.34, 0.28)
        const pullPose = ropeTension * 0.42 + ropeCatchPulse * 0.26
        // Strong single-arm reach plus scissored legs makes the web state legible even
        // when the camera is directly behind the player. The pose is purely visual.
        leftArm.rotation.x = -2.18 - pullPose
        leftArm.rotation.z = 0.48 + pullPose * 0.22
        rightArm.rotation.x = -0.72 - pullPose * 0.25
        rightArm.rotation.z = -1.05 - pullPose * 0.12
        leftLeg.rotation.x = 1.02 + ropeTension * 0.22
        leftLeg.rotation.z = 0.16
        rightLeg.rotation.x = -0.72 - ropeTension * 0.16
        rightLeg.rotation.z = -0.18
        torso.rotation.z = clamp(-velocity.x * 0.024, -0.38, 0.38) + 0.10
        torso.rotation.x = swingPitch - 0.16 - pullPose * 0.20
        player.rotation.x = clamp(-velocity.y * 0.016 - 0.10 - pullPose * 0.08, -0.34, 0.20)
        player.rotation.z = clamp(-velocity.dot(tempRight) * 0.018 + 0.10, -0.26, 0.26)
      }
    }

    function updateCamera(dt: number) {
      const horizontalForward = tempForward.set(Math.sin(yaw), 0, -Math.cos(yaw)).normalize()
      tempRight.set(Math.cos(yaw), 0, Math.sin(yaw)).normalize()
      const speedNow = velocity.length()
      const planarSpeed = Math.hypot(velocity.x, velocity.z)
      const actionDistance = movementState === 'swinging' ? 6.55 : movementState === 'jumping' ? 5.85 : movementState === 'falling' ? 6.45 : 8.0
      const followDistance = actionDistance + Math.min(movementState === 'swinging' ? 2.6 : 3.8, speedNow * 0.075)

      // Vertical motion and the height of the real web anchor gently bias the camera
      // pitch. Mouse pitch remains authoritative; this assist only prevents high-rise
      // swings from feeling like a camera sliding along a fixed horizontal rail.
      const motionPitch = Math.atan2(velocity.y, Math.max(7, planarSpeed)) * 0.31
      let anchorPitch = 0
      if (webAttached && webAnchor) {
        const dx = webAnchor.x - playerPos.x
        const dz = webAnchor.z - playerPos.z
        const anchorHorizontal = Math.max(3, Math.hypot(dx, dz))
        anchorPitch = Math.atan2(webAnchor.y - (playerPos.y + 1.5), anchorHorizontal) * 0.19
      }
      const desiredRenderPitch = clamp(pitch + motionPitch + anchorPitch, -0.74, cameraMaxUpPitch)
      renderPitch += (desiredRenderPitch - renderPitch) * (1 - Math.exp(-6.5 * dt))

      const cp = Math.cos(renderPitch)
      cameraLookDir.set(Math.sin(yaw) * cp, Math.sin(renderPitch), -Math.cos(yaw) * cp).normalize()

      // Lead the framing in the actual travel direction. This makes release momentum
      // readable both horizontally and vertically without changing player physics.
      cameraLead.copy(velocity).multiplyScalar(0.055)
      if (cameraLead.lengthSq() > 2.8 * 2.8) cameraLead.setLength(2.8)
      // Keep vertical action readable on screen. Tracking player Y one-for-one made a
      // real jump look visually planted because the whole camera boom rose with the hero.
      // During airborne states, follow only part of the vertical displacement so the road
      // visibly separates from the player's feet; normal grounded framing is unchanged.
      const verticalFollow = movementState === 'jumping' ? 0.34 : movementState === 'falling' ? 0.52 : movementState === 'swinging' ? 0.68 : 1.0
      desiredCameraTarget.set(playerPos.x, groundY + 1.5 + (playerPos.y - groundY) * verticalFollow + clamp(velocity.y * 0.018, -0.34, 0.42), playerPos.z)
      desiredCameraTarget.addScaledVector(cameraLead, 0.76)
      desiredCameraTarget.addScaledVector(horizontalForward, 0.32)
      // The look target itself never crosses the city floor. This matters at very low pitch,
      // because a below-ground target can drag the whole boom through the ground plane.
      desiredCameraTarget.y = Math.max(groundY + cameraTargetGroundClearance, desiredCameraTarget.y)

      desiredCameraPosition.copy(desiredCameraTarget).addScaledVector(cameraLookDir, -followDistance)
      desiredCameraPosition.y += 1.75 + clamp(-velocity.y * 0.018, -0.55, 0.55)
      desiredCameraPosition.y = Math.max(groundY + cameraGroundClearance, desiredCameraPosition.y)

      // Constraint catches produce a short physical-feeling tug: mostly vertical and
      // lateral camera response, never a velocity edit. Sustained tension adds a tiny
      // inward compression that makes the rope feel loaded instead of decorative.
      if (webAttached && webAnchor && ropeTension > 0.001) {
        ropeDir.copy(webAnchor).sub(playerPos)
        if (ropeDir.lengthSq() > 0.001) {
          ropeDir.normalize()
          desiredCameraPosition.addScaledVector(ropeDir, ropeTension * 0.18)
          desiredCameraTarget.addScaledVector(ropeDir, ropeTension * 0.09)
        }
      }
      if (cameraKick > 0.001) {
        desiredCameraPosition.y += Math.sin(elapsed * 44) * cameraKick * 0.18
        desiredCameraPosition.addScaledVector(tempRight, Math.cos(elapsed * 39) * cameraKick * 0.11)
        cameraKick *= Math.exp(-10 * dt)
      }
      if (landingPulse > 0.001) {
        desiredCameraPosition.y -= landingPulse * 0.2
        desiredCameraTarget.y -= landingPulse * 0.08
      }
      if (releasePulse > 0.001) {
        desiredCameraTarget.addScaledVector(cameraLookDir, releasePulse * 0.12)
      }

      // Treat the chase camera as a small sphere instead of a mathematical point.
      // If the straight boom is blocked, try elevated/shoulder alternatives before
      // shortening it. This prevents walls from squeezing the camera into the hero mesh.
      const resolveCameraCandidate = (candidate: THREE.Vector3, out: THREE.Vector3) => {
        cameraBoom.copy(candidate).sub(cameraCollisionOrigin)
        const wantedDistance = cameraBoom.length()
        if (wantedDistance < 0.001) {
          out.copy(candidate)
          return 0
        }
        cameraBoom.multiplyScalar(1 / wantedDistance)
        let allowedDistance = wantedDistance
        for (const building of buildings) {
          cameraExpandedBox.copy(building.box).expandByScalar(cameraCollisionRadius)
          cameraCollisionRay.ray.origin.copy(cameraCollisionOrigin)
          cameraCollisionRay.ray.direction.copy(cameraBoom)
          const hit = cameraCollisionRay.ray.intersectBox(cameraExpandedBox, cameraHitPoint)
          if (!hit) continue
          const hitDistance = cameraCollisionOrigin.distanceTo(hit)
          if (hitDistance >= 0 && hitDistance < allowedDistance) allowedDistance = Math.max(0, hitDistance - 0.08)
        }
        out.copy(cameraCollisionOrigin).addScaledVector(cameraBoom, allowedDistance)
        return allowedDistance
      }

      cameraCollisionOrigin.set(playerPos.x, Math.max(groundY + 1.15, playerPos.y + 1.45), playerPos.z)
      cameraResolved.copy(desiredCameraPosition)
      let bestDistance = resolveCameraCandidate(desiredCameraPosition, cameraResolved)
      if (bestDistance < cameraMinPlayerDistance) {
        cameraCandidate.copy(desiredCameraPosition).setY(desiredCameraPosition.y + 1.9)
        cameraCandidate2.copy(desiredCameraPosition).addScaledVector(tempRight, 1.35).setY(desiredCameraPosition.y + 1.05)
        cameraCandidate3.copy(desiredCameraPosition).addScaledVector(tempRight, -1.35).setY(desiredCameraPosition.y + 1.05)
        cameraCandidate4.set(cameraCollisionOrigin.x, cameraCollisionOrigin.y + 3.0, cameraCollisionOrigin.z + 0.8)
        for (const candidate of [cameraCandidate, cameraCandidate2, cameraCandidate3, cameraCandidate4]) {
          const candidateDistance = resolveCameraCandidate(candidate, cameraCandidateResolved)
          if (candidateDistance > bestDistance) {
            bestDistance = candidateDistance
            cameraResolved.copy(cameraCandidateResolved)
          }
        }
      }
      desiredCameraPosition.copy(cameraResolved)
      // Re-assert floor clearance after rope feedback, landing compression and facade clipping.
      // The higher clearance protects the entire near plane, not just the camera center point.
      desiredCameraPosition.y = Math.max(groundY + cameraGroundClearance, desiredCameraPosition.y)
      desiredCameraTarget.y = Math.max(groundY + cameraTargetGroundClearance, desiredCameraTarget.y)

      const verticalAcceleration = (velocity.y - previousVerticalSpeed) / Math.max(dt, 1 / 240)
      previousVerticalSpeed = velocity.y
      const cameraResponse = webAttached ? 7.8 : 8.8
      const alpha = 1 - Math.exp(-cameraResponse * dt)
      camera.position.lerp(desiredCameraPosition, alpha)
      actualCameraTarget.lerp(desiredCameraTarget, 1 - Math.exp(-7.4 * dt))

      // Smoothing itself can cross geometry, so run the same sphere/AABB safety
      // pass on the actual post-lerp camera position every frame.
      cameraCollisionOrigin.set(playerPos.x, Math.max(groundY + 1.15, playerPos.y + 1.45), playerPos.z)
      resolveCameraCandidate(camera.position, cameraResolved)
      camera.position.copy(cameraResolved)
      // Building collision can shorten the boom, but it must never resolve the camera below
      // the infinite ground plane. Keep enough clearance for the near plane as a final pass.
      camera.position.y = Math.max(groundY + cameraGroundClearance, camera.position.y)
      actualCameraTarget.y = Math.max(groundY + cameraTargetGroundClearance, actualCameraTarget.y)

      // Upward aim is decoupled from the physical boom once the camera approaches the
      // ground. Without this, floor collision prevents the camera from orbiting lower and
      // silently turns a requested 45-degree up-look into an almost level view. Keep the
      // collision-safe camera position, then raise the look target so the *actual rendered*
      // view can reach 45 degrees without ever placing the camera below ground or in a wall.
      if (renderPitch > 0.26) {
        const horizontalAimDistance = Math.hypot(
          actualCameraTarget.x - camera.position.x,
          actualCameraTarget.z - camera.position.z,
        )
        if (horizontalAimDistance > 0.05) {
          const upAimBlend = clamp((renderPitch - 0.26) / Math.max(0.001, cameraMaxUpPitch - 0.26), 0, 1)
          const requestedAimY = camera.position.y + Math.tan(Math.min(renderPitch, cameraMaxUpPitch)) * horizontalAimDistance
          actualCameraTarget.y += (requestedAimY - actualCameraTarget.y) * upAimBlend
        }
      }

      const momentumFov = Math.min(11.5, speedNow * 0.255)
      const tensionFov = ropeTension * 1.8 + ropeCatchPulse * 1.2
      const desiredFov = 64 + momentumFov + tensionFov + releasePulse * 1.6
      camera.fov += (desiredFov - camera.fov) * Math.min(1, dt * 5.5)
      camera.updateProjectionMatrix()
      camera.lookAt(actualCameraTarget)
      tempVec.copy(actualCameraTarget).sub(camera.position)
      if (tempVec.lengthSq() > 0.000001) {
        tempVec.normalize()
        actualCameraYaw = Math.atan2(tempVec.x, -tempVec.z)
        actualCameraPitch = Math.asin(clamp(tempVec.y, -1, 1))
      }
      const bank = clamp(-velocity.dot(tempRight) * 0.0048 - verticalAcceleration * 0.00018, -0.095, 0.095)
      camera.rotateZ(bank)
    }

    function updatePhysicalFeedback(dt: number) {
      landingPulse *= Math.exp(-7.5 * dt)
      releasePulse *= Math.exp(-4.8 * dt)
      if (landingPulse > 0.012) {
        landingRing.visible = true
        landingRing.position.set(playerPos.x, playerPos.y + 0.035, playerPos.z)
        const ringScale = 1 + (1 - landingPulse) * 5.2
        landingRing.scale.setScalar(ringScale)
        landingRingMaterial.opacity = landingPulse * 0.42
      } else {
        landingRing.visible = false
      }
    }

    function updateTrail() {
      for (let i = trailCount - 1; i > 0; i--) {
        trailPositions[i * 3] = trailPositions[(i - 1) * 3]
        trailPositions[i * 3 + 1] = trailPositions[(i - 1) * 3 + 1]
        trailPositions[i * 3 + 2] = trailPositions[(i - 1) * 3 + 2]
      }
      trailPositions[0] = playerPos.x
      trailPositions[1] = playerPos.y + 1.25
      trailPositions[2] = playerPos.z
      ;(trailGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true
      trailMaterial.opacity = clamp((velocity.length() - 12) / 35, 0, 0.42)
      trailMaterial.size = 0.08 + clamp(velocity.length() / 44, 0, 1) * 0.08
    }

    function updateWebVisual() {
      if (webAttached && webAnchor) {
        webStart.set(playerPos.x, playerPos.y + 1.65, playerPos.z)
        const positions = webGeometry.attributes.position as THREE.BufferAttribute
        tempVec.copy(webAnchor).sub(webStart)
        const webDistance = tempVec.length()
        const distance = playerPos.distanceTo(webAnchor)
        const tautness = ropeLength ? clamp(distance / ropeLength, 0, 1) : 0

        // A slightly slack web bows under gravity; as the real rope constraint loads,
        // it straightens and develops a tiny high-frequency transverse vibration.
        for (let i = 0; i <= webSegments; i++) {
          const u = i / webSegments
          const sagShape = 4 * u * (1 - u)
          const sag = (1 - tautness) * Math.min(1.25, webDistance * 0.018) * sagShape
          const vibration = Math.sin(elapsed * 46 + u * 19) * ropeTension * 0.045 * sagShape
          const x = THREE.MathUtils.lerp(webStart.x, webAnchor.x, u) + tempRight.x * vibration
          const y = THREE.MathUtils.lerp(webStart.y, webAnchor.y, u) - sag
          const z = THREE.MathUtils.lerp(webStart.z, webAnchor.z, u) + tempRight.z * vibration
          positions.setXYZ(i, x, y, z)
        }
        positions.needsUpdate = true
        webLine.computeLineDistances()
        webMaterial.opacity = 0.5 + tautness * 0.34 + ropeTension * 0.16
        webLine.visible = true

        if (webDistance > 0.001) {
          webGlow.visible = true
          webCore.visible = true
          webGlow.position.copy(webStart).add(webAnchor).multiplyScalar(0.5)
          webCore.position.copy(webGlow.position)
          const thickness = 1 + ropeTension * 1.8 + ropeCatchPulse * 0.65
          webGlow.scale.set(thickness, webDistance, thickness)
          webCore.scale.set(1 + ropeTension * 0.7, webDistance, 1 + ropeTension * 0.7)
          const webQuat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), tempVec.normalize())
          webGlow.quaternion.copy(webQuat)
          webCore.quaternion.copy(webQuat)
          webGlowMaterial.opacity = 0.10 + tautness * 0.18 + ropeTension * 0.28
          webCoreMaterial.opacity = 0.52 + tautness * 0.24 + ropeTension * 0.22
          anchorHalo.visible = true
          anchorHalo.position.copy(webAnchor).addScaledVector(tempVec, -0.035)
          anchorHalo.lookAt(camera.position)
          const pulse = 1 + Math.sin(elapsed * (8 + ropeTension * 14)) * 0.12 + ropeTension * 0.32 + ropeCatchPulse * 0.22
          anchorHalo.scale.setScalar(pulse)
          anchorHaloMaterial.opacity = 0.2 + tautness * 0.26 + ropeTension * 0.38
        }
      } else {
        webLine.visible = false
        webGlow.visible = false
        webCore.visible = false
        anchorHalo.visible = false
      }
    }

    function setLighting(isNight: boolean) {
      if (isNight) {
        scene.background = new THREE.Color(0x050b18)
        scene.fog = new THREE.Fog(0x071126, 72, 270)
        hemi.intensity = 0.72
        sun.intensity = 0.62
        rimLight.intensity = 1.4
        warmFill.intensity = 0.16
        sharedMats.forEach((m) => { m.emissive.setHex(0x071018); m.emissiveIntensity = 0.52 })
        facadeMat.emissive.setHex(0x2f9cca)
        facadeMat.emissiveIntensity = 1.38
        facadeMat.opacity = 0.76
        neonCyanMat.emissiveIntensity = 2.2
        neonWarmMat.emissiveIntensity = 1.75
        lampGlowMat.emissiveIntensity = 2.8
        glowMat.emissiveIntensity = 2.15
        cloudMaterial.opacity = 0.055
        sunDisc.visible = false
        skyMaterial.uniforms.topColor.value.setHex(0x01040c)
        skyMaterial.uniforms.horizonColor.value.setHex(0x102640)
        skyMaterial.uniforms.lowerColor.value.setHex(0x081326)
        stars.visible = true
      } else {
        scene.background = new THREE.Color(0x8ac7ee)
        scene.fog = new THREE.Fog(0x8ac7ee, 90, 310)
        hemi.intensity = 2
        sun.intensity = 3.2
        rimLight.intensity = 1.0
        warmFill.intensity = 0.42
        sharedMats.forEach((m) => { m.emissive.setHex(0x000000); m.emissiveIntensity = 1 })
        facadeMat.emissive.setHex(0x102736)
        facadeMat.emissiveIntensity = 0.28
        facadeMat.opacity = 0.61
        neonCyanMat.emissiveIntensity = 1.25
        neonWarmMat.emissiveIntensity = 0.85
        lampGlowMat.emissiveIntensity = 1.35
        glowMat.emissiveIntensity = 1.65
        cloudMaterial.opacity = 0.18
        sunDisc.visible = true
        skyMaterial.uniforms.topColor.value.setHex(0x397fc4)
        skyMaterial.uniforms.horizonColor.value.setHex(0xc8e8f6)
        skyMaterial.uniforms.lowerColor.value.setHex(0xf5c995)
        stars.visible = false
      }
    }

    let nightMode = false

    function onKeyDown(e: KeyboardEvent) {
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault()
      keys.add(e.code)
      // Latch Space immediately at the real keydown event so a short press cannot fall
      // entirely between fixed simulation steps. The actual jump is still consumed by
      // simulateStep only when grounded/coyote-time permits it.
      if (e.code === 'Space' && !e.repeat) jumpBuffer = Math.max(jumpBuffer, 0.16)
      if (e.code === 'KeyR') {
        playerPos.set(0, 0, 18)
        velocity.set(0, 0, 0)
        yaw = 0
        pitch = 0.24
        renderPitch = pitch
        actualCameraYaw = yaw
        actualCameraPitch = renderPitch
        actualCameraTarget.set(0, 1.5, 14)
        ropeTension = 0
        ropeCatchPulse = 0
        previousVerticalSpeed = 0
        landingPulse = 0
        releasePulse = 0
        grounded = true
        coyoteTime = 0.12
        jumpBuffer = 0
        releaseWeb(false)
      }
      if (e.code === 'KeyN' && !e.repeat) {
        nightMode = !nightMode
        setNight(nightMode)
        setLighting(nightMode)
      }
    }
    function onKeyUp(e: KeyboardEvent) {
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault()
      keys.delete(e.code)
    }
    function onBlur() {
      keys.clear()
      jumpHeld = false
      releaseWeb(false)
    }
    function onMouseMove(e: MouseEvent) {
      const locked = document.pointerLockElement === renderer.domElement
      if (!locked && !controlActive) return
      yaw -= e.movementX * 0.00245
      pitch = clamp(pitch - e.movementY * 0.0019, -0.70, cameraMaxUpPitch)
      // Mouse pitch is a direct camera input.  Apply it to the rendered pitch on the
      // same input event so a real vertical mouse movement is immediately visible;
      // the motion/anchor assist in updateCamera can still blend from this value.
      renderPitch = pitch
    }
    function onMouseDown(e: MouseEvent) {
      if (e.button !== 0) return
      const locked = document.pointerLockElement === renderer.domElement
      if (!locked && !controlActive) {
        renderer.domElement.requestPointerLock?.()
        return
      }
      if (!locked) renderer.domElement.requestPointerLock?.()
      attachWeb()
    }
    function onMouseUp(e: MouseEvent) {
      if (e.button === 0) releaseWeb()
    }
    function onContextMenu(e: MouseEvent) { e.preventDefault() }
    function onResize() {
      const width = mount!.clientWidth
      const height = mount!.clientHeight
      camera.aspect = width / Math.max(1, height)
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    }
    function onStartRequest() {
      controlActive = true
    }
    function onPointerLock() {
      const locked = document.pointerLockElement === renderer.domElement
      if (locked) {
        hadPointerLock = true
        controlActive = true
        setStarted(true)
      } else if (hadPointerLock) {
        hadPointerLock = false
        controlActive = false
        setStarted(false)
        // Losing a real pointer lock also invalidates a held primary mouse button.
        releaseWeb(false)
      }
    }

    window.addEventListener('game-start-request', onStartRequest)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', onBlur)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('resize', onResize)
    document.addEventListener('pointerlockchange', onPointerLock)
    renderer.domElement.addEventListener('mousedown', onMouseDown)
    renderer.domElement.addEventListener('contextmenu', onContextMenu)

    window.__game = {
      getState: () => ({
        ready,
        running,
        elapsedTime: elapsed,
        renderer: 'webgl',
        viewport: { width: renderer.domElement.clientWidth, height: renderer.domElement.clientHeight },
      }),
    }
    window.__player = {
      getState: () => ({
        position: v(playerPos),
        velocity: v(velocity),
        grounded,
        movementState,
        collider: { radius: colliderRadius, height: colliderHeight },
      }),
    }
    window.__camera = {
      getState: () => ({
        mode: 'third-person',
        position: v(camera.position),
        target: v(actualCameraTarget),
        yaw: actualCameraYaw,
        pitch: renderPitch,
      }),
    }
    window.__web = {
      getState: () => {
        const distance = webAnchor ? playerPos.distanceTo(webAnchor) : null
        const playerEndpoint = webAttached ? new THREE.Vector3(playerPos.x, playerPos.y + 1.65, playerPos.z) : null
        return {
          attached: webAttached,
          targetValid,
          anchor: webAnchor ? v(webAnchor) : null,
          anchorObjectId: webObjectId,
          ropeLength,
          distanceToAnchor: distance,
          lineVisible: webLine.visible,
          playerEndpoint: playerEndpoint ? v(playerEndpoint) : null,
          anchorEndpoint: webAnchor ? v(webAnchor) : null,
        }
      },
    }
    window.__world = {
      getState: () => ({
        groundY,
        buildings: buildings.map((b) => ({ id: b.id, min: v(b.box.min), max: v(b.box.max) })),
      }),
    }

    function animate(now: number) {
      if (!running) return
      const rawDt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now
      elapsed += rawDt

      let remain = rawDt
      const maxStep = 1 / 120
      while (remain > 0) {
        const dt = Math.min(maxStep, remain)
        simulateStep(dt)
        remain -= dt
      }

      player.position.copy(playerPos)
      if (Math.hypot(velocity.x, velocity.z) > 0.2) {
        player.rotation.y = Math.atan2(velocity.x, velocity.z)
      } else {
        player.rotation.y = yaw + Math.PI
      }
      updateAnimation(elapsed)
      updatePhysicalFeedback(rawDt)
      updateTrail()
      updateCamera(rawDt)
      getAimHit()
      aimMarker.scale.setScalar(0.82 + Math.sin(elapsed * 8) * 0.12)
      updateWebVisual()
      if (sunDisc.visible) sunDisc.lookAt(camera.position)
      renderer.render(scene, camera)

      if ((frame++ & 3) === 0) {
        const horizontalSpeed = Math.hypot(velocity.x, velocity.z)
        setSpeed(Math.sqrt(horizontalSpeed * horizontalSpeed + velocity.y * velocity.y))
        setAltitude(playerPos.y)
        setVerticalSpeed(velocity.y)
        setTension(webAttached ? ropeTension : 0)
        const deg = ((THREE.MathUtils.radToDeg(yaw) % 360) + 360) % 360
        const cardinal = deg < 22.5 || deg >= 337.5 ? 'N' : deg < 67.5 ? 'NE' : deg < 112.5 ? 'E' : deg < 157.5 ? 'SE' : deg < 202.5 ? 'S' : deg < 247.5 ? 'SW' : deg < 292.5 ? 'W' : 'NW'
        setHeading(`${cardinal} ${Math.round(deg).toString().padStart(3, '0')}°`)
        setWebLabel(webAttached ? 'ATTACHED' : targetValid ? 'TARGET LOCK' : 'SEARCHING')
        setRopeInfo(webAttached && ropeLength !== null ? `${ropeLength.toFixed(1)} u` : targetValid ? `${camera.position.distanceTo(targetPoint).toFixed(0)} u` : '—')
        setMotion(movementState)
      }
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      ready = false
      running = false
      releaseWeb(false)
      window.removeEventListener('game-start-request', onStartRequest)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('pointerlockchange', onPointerLock)
      renderer.domElement.removeEventListener('mousedown', onMouseDown)
      renderer.domElement.removeEventListener('contextmenu', onContextMenu)
      cancelAnimationFrame(rafId)
      const geometries = new Set<THREE.BufferGeometry>()
      const materials = new Set<THREE.Material>()
      scene.traverse((obj: THREE.Object3D) => {
        const mesh = obj as THREE.Mesh
        if (mesh.geometry) geometries.add(mesh.geometry)
        const material = mesh.material
        if (Array.isArray(material)) material.forEach((m) => materials.add(m))
        else if (material) materials.add(material)
      })
      geometries.forEach((g) => g.dispose())
      materials.forEach((m) => m.dispose())
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  const begin = () => {
    setStarted(true)
    window.dispatchEvent(new Event('game-start-request'))
    const canvas = mountRef.current?.querySelector('canvas')
    canvas?.requestPointerLock?.()
  }

  return (
    <main className="game-shell relative h-full w-full overflow-hidden bg-slate-950 text-white">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="cinematic-grain pointer-events-none absolute inset-0" />
      <div className="speed-vignette pointer-events-none absolute inset-0" style={{ opacity: Math.min(0.72, Math.max(0, (speed - 10) / 38)) }} />

      <div className="hud-top pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-6">
        <section className="glass-panel hud-card min-w-[220px] sm:min-w-[272px]">
          <div className="hud-kicker"><span className="signal-dot" /> SKYLINE THREAD / LIVE</div>
          <div className="mt-3 flex items-end gap-3">
            <div className="font-mono text-4xl font-semibold leading-none tracking-[-0.06em] text-white">{speed.toFixed(0)}</div>
            <div className="pb-1 text-[10px] font-semibold tracking-[0.24em] text-cyan-100/55">U / SEC</div>
          </div>
          <div className="speed-rail mt-3"><span style={{ width: `${Math.min(100, speed / 44 * 100)}%` }} /></div>
          <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[10px] tracking-[0.12em]">
            <div className="hud-stat"><span>ALTITUDE</span><b>{altitude.toFixed(1)}</b></div>
            <div className="hud-stat"><span>VERTICAL</span><b>{verticalSpeed >= 0 ? '+' : ''}{verticalSpeed.toFixed(1)}</b></div>
            <div className="hud-stat"><span>MOTION</span><b>{motion.toUpperCase()}</b></div>
            <div className="hud-stat"><span>TENSION</span><b>{webLabel === 'ATTACHED' ? `${Math.round(tension * 100)}%` : '—'}</b></div>
          </div>
        </section>

        <section className="glass-panel compass-card flex items-center gap-4 px-4 py-3">
          <div className="compass-glyph"><span /></div>
          <div>
            <div className="text-[9px] font-semibold tracking-[0.25em] text-white/40">VECTOR</div>
            <div className="mt-1 font-mono text-sm tracking-[0.08em] text-white/90">{heading}</div>
          </div>
        </section>
      </div>

      <div className={`reticle pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${webLabel === 'TARGET LOCK' ? 'is-lock' : ''} ${webLabel === 'ATTACHED' ? 'is-attached' : ''}`}>
        <span className="reticle-ring" />
        <span className="reticle-core" />
        <i className="reticle-n" /><i className="reticle-e" /><i className="reticle-s" /><i className="reticle-w" />
      </div>

      <div className="pointer-events-none absolute bottom-5 left-4 sm:bottom-6 sm:left-6">
        <div className={`web-status glass-panel ${webLabel === 'ATTACHED' ? 'attached' : webLabel === 'TARGET LOCK' ? 'locked' : ''}`}>
          <div className="web-icon"><span /></div>
          <div>
            <div className="text-[9px] font-semibold tracking-[0.24em] text-white/40">THREAD LINK</div>
            <div className="mt-1 flex items-center gap-3 font-mono text-xs">
              <b>{webLabel}</b><span className="text-white/35">{ropeInfo}</span>
            </div>
            <div className="tension-rail mt-2"><span style={{ width: `${webLabel === 'ATTACHED' ? Math.max(5, tension * 100) : 0}%` }} /></div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-4 hidden text-right sm:bottom-6 sm:right-6 sm:block">
        <div className="control-strip glass-panel">
          <span><kbd>WASD</kbd> MOVE</span>
          <span><kbd>SPACE</kbd> JUMP</span>
          <span><kbd>LMB</kbd> WEB</span>
          <span><kbd>SHIFT</kbd> SPRINT</span>
        </div>
      </div>

      {!started && (
        <button
          type="button"
          onClick={begin}
          data-testid="start-overlay"
          className="start-overlay absolute inset-0 flex h-full w-full cursor-crosshair items-center justify-center p-5 text-left"
        >
          <div className="launch-card w-full max-w-[680px] overflow-hidden">
            <div className="launch-scanline" />
            <div className="relative p-7 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <div className="hud-kicker"><span className="signal-dot" /> CITY LINK READY</div>
                <div className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] tracking-[0.2em] text-white/40">BUILD 01</div>
              </div>
              <div className="mt-8 max-w-xl">
                <div className="text-[11px] font-semibold tracking-[0.38em] text-cyan-300/80">SKYLINE THREAD</div>
                <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Own the arc.</h1>
                <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300/80 sm:text-base">Read the skyline, anchor to real building surfaces, pump through the low point, and release with every unit of momentum intact.</p>
              </div>

              <div className="mt-8 grid gap-3 border-y border-white/[0.08] py-5 sm:grid-cols-2">
                <div className="launch-tip"><kbd>W A S D</kbd><span>Directional movement</span></div>
                <div className="launch-tip"><kbd>MOUSE</kbd><span>Third-person camera</span></div>
                <div className="launch-tip"><kbd>SPACE</kbd><span>Jump / buffered takeoff</span></div>
                <div className="launch-tip"><kbd>HOLD LMB</kbd><span>Anchor / swing / release</span></div>
                <div className="launch-tip"><kbd>SHIFT</kbd><span>Ground sprint</span></div>
                <div className="launch-tip"><kbd>N / R</kbd><span>Night mode / reset</span></div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-[10px] tracking-[0.2em] text-white/35">GREEN RETICLE = VALID SURFACE</span>
                <span className="launch-cta">CLICK TO DROP IN <b>↗</b></span>
              </div>
            </div>
          </div>
        </button>
      )}

      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-[0.18em] text-white/25 sm:bottom-3">
        {night ? 'NIGHT GRID' : 'DAY GRID'} · ESC CURSOR · N LIGHTING · R RESET
      </div>
    </main>
  )
}

export default App
