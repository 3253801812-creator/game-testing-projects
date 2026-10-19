import { useEffect, useRef, type MutableRefObject } from 'react'
import * as THREE from 'three'
import type { MapDefinition, VehicleDefinition, VehicleStats } from './gameData'
import type { RuntimeStore } from './runtime'

type RaceMutable = {
  raceId: string | null
  phase: 'idle' | 'loading' | 'running' | 'finished'
  startTimeMs: number | null
  elapsedTime: number
  finalTime: number | null
  finished: boolean
  currentCheckpointIndex: number
  passedCheckpointIds: string[]
  finishEligible: boolean
  reward: number
  rewardGranted: boolean
}

type Props = {
  map: MapDefinition
  vehicle: VehicleDefinition
  appliedStats: VehicleStats
  raceRef: MutableRefObject<RaceMutable>
  runtimeRef: MutableRefObject<RuntimeStore>
  onProgress: () => void
  onFinish: (finalTime: number) => void
}

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
const smooth = (current: number, target: number, speed: number, dt: number) =>
  THREE.MathUtils.lerp(current, target, 1 - Math.exp(-speed * dt))

const terrainGrip: Record<string, number> = {
  hardpack: 1,
  rock: 0.9,
  sand: 0.67,
  dirt: 0.92,
  mud: 0.54,
  roots: 0.74,
}

function makeRock(color: number, radius: number) {
  const geometry = new THREE.DodecahedronGeometry(radius, 1)
  const material = new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0.03 })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true
  mesh.rotation.set(Math.random() * 0.5, Math.random() * Math.PI, Math.random() * 0.3)
  return mesh
}

function createGate(color: number, radius: number) {
  const group = new THREE.Group()
  const material = new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.8,
    roughness: 0.35,
    metalness: 0.25,
  })
  const ring = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.58, 0.16, 8, 36), material)
  ring.position.y = radius * 0.48
  group.add(ring)

  const postGeo = new THREE.CylinderGeometry(0.12, 0.16, radius * 0.95, 8)
  const left = new THREE.Mesh(postGeo, material)
  const right = new THREE.Mesh(postGeo, material)
  left.position.set(-radius * 0.58, radius * 0.45, 0)
  right.position.set(radius * 0.58, radius * 0.45, 0)
  left.castShadow = right.castShadow = true
  group.add(left, right)
  return group
}

function createVehicle(vehicle: VehicleDefinition) {
  const root = new THREE.Group()
  root.name = `vehicle-${vehicle.id}`

  const bodyTilt = new THREE.Group()
  root.add(bodyTilt)

  const bodyMat = new THREE.MeshStandardMaterial({ color: vehicle.bodyColor, roughness: 0.5, metalness: 0.42 })
  const accentMat = new THREE.MeshStandardMaterial({ color: vehicle.accentColor, roughness: 0.66, metalness: 0.28 })
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x8db4c1, roughness: 0.2, metalness: 0.15 })

  const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.55, 3.45), bodyMat)
  chassis.position.y = 0.08
  chassis.castShadow = true
  chassis.receiveShadow = true
  bodyTilt.add(chassis)

  const hood = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.33, 1.02), bodyMat)
  hood.position.set(0, 0.43, 1.03)
  hood.rotation.x = -0.05
  hood.castShadow = true
  bodyTilt.add(hood)

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.76, 0.82, 1.55), accentMat)
  cabin.position.set(0, 0.72, -0.34)
  cabin.castShadow = true
  bodyTilt.add(cabin)

  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.5, 0.06), glassMat)
  windshield.position.set(0, 0.85, 0.46)
  windshield.rotation.x = -0.18
  bodyTilt.add(windshield)

  const bumper = new THREE.Mesh(new THREE.BoxGeometry(2.42, 0.2, 0.24), accentMat)
  bumper.position.set(0, -0.06, 1.83)
  bodyTilt.add(bumper)

  const rollMaterial = new THREE.MeshStandardMaterial({ color: 0x111414, metalness: 0.65, roughness: 0.42 })
  const rollBar = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.055, 8, 24, Math.PI), rollMaterial)
  rollBar.rotation.z = Math.PI
  rollBar.position.set(0, 1.16, -0.63)
  bodyTilt.add(rollBar)

  const lightMat = new THREE.MeshStandardMaterial({ color: 0xeaffc6, emissive: 0xeaffc6, emissiveIntensity: 1.5 })
  for (const x of [-0.72, 0.72]) {
    const light = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 16), lightMat)
    light.rotation.x = Math.PI / 2
    light.position.set(x, 0.3, 1.77)
    bodyTilt.add(light)
  }

  const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x121413, roughness: 0.95, metalness: 0.05 })
  const rimMaterial = new THREE.MeshStandardMaterial({ color: 0x777f7b, roughness: 0.45, metalness: 0.7 })
  const wheelGeo = new THREE.CylinderGeometry(0.43, 0.43, 0.34, 18)
  const rimGeo = new THREE.CylinderGeometry(0.21, 0.21, 0.36, 16)

  const wheelDefs = [
    { id: 'front-left', x: -1.02, z: 1.14, front: true },
    { id: 'front-right', x: 1.02, z: 1.14, front: true },
    { id: 'rear-left', x: -1.02, z: -1.2, front: false },
    { id: 'rear-right', x: 1.02, z: -1.2, front: false },
  ]

  const wheels = wheelDefs.map((def) => {
    const holder = new THREE.Group()
    holder.position.set(def.x, -0.55, def.z)
    const tire = new THREE.Mesh(wheelGeo, wheelMaterial)
    tire.rotation.z = Math.PI / 2
    tire.castShadow = true
    const rim = new THREE.Mesh(rimGeo, rimMaterial)
    rim.rotation.z = Math.PI / 2
    holder.add(tire, rim)
    root.add(holder)
    return { ...def, holder, tire, rim }
  })

  return { root, bodyTilt, wheels }
}

export default function GameCanvas({ map, vehicle, appliedStats, raceRef, runtimeRef, onProgress, onFinish }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let disposed = false
    let frameId = 0
    let renderFrame = 0
    const keys = new Set<string>()
    const scene = new THREE.Scene()
    const canyon = map.theme === 'canyon'
    scene.background = new THREE.Color(canyon ? 0x897b70 : 0x63756c)
    scene.fog = new THREE.FogExp2(canyon ? 0x81756b : 0x596b62, 0.006)

    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 420)
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0.6))
    renderer.shadowMap.enabled = false
    renderer.shadowMap.type = THREE.PCFShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.domElement.dataset.testid = 'game-canvas'
    renderer.domElement.className = 'game-canvas'
    host.appendChild(renderer.domElement)

    const hemi = new THREE.HemisphereLight(canyon ? 0xffe0c0 : 0xdcebd7, canyon ? 0x4b3328 : 0x24382d, 2.25)
    scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xfff0d5, 3.1)
    sun.position.set(-46, 72, -24)
    sun.castShadow = false
    sun.shadow.mapSize.set(1024, 1024)
    sun.shadow.camera.left = -95
    sun.shadow.camera.right = 95
    sun.shadow.camera.top = 95
    sun.shadow.camera.bottom = -95
    sun.shadow.camera.near = 1
    sun.shadow.camera.far = 190
    scene.add(sun)

    const mapObjects: THREE.Object3D[] = []
    const terrainSize = 240
    const terrainGeo = new THREE.PlaneGeometry(terrainSize, terrainSize, 18, 18)
    const posAttr = terrainGeo.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < posAttr.count; i += 1) {
      const x = posAttr.getX(i)
      const planeY = posAttr.getY(i)
      const worldZ = -planeY
      posAttr.setZ(i, map.heightAt(x, worldZ))
    }
    posAttr.needsUpdate = true
    terrainGeo.computeVertexNormals()
    const terrainMat = new THREE.MeshStandardMaterial({
      color: canyon ? 0x7a5a42 : 0x485e46,
      roughness: 0.98,
      metalness: 0,
    })
    const terrain = new THREE.Mesh(terrainGeo, terrainMat)
    terrain.rotation.x = -Math.PI / 2
    terrain.receiveShadow = true
    terrain.userData.mapObject = true
    scene.add(terrain)
    mapObjects.push(terrain)

    const routePoints = [map.spawn.position, ...map.checkpoints.map((cp) => cp.position), map.finish.position]
    const curve = new THREE.CatmullRomCurve3(
      routePoints.map((p) => new THREE.Vector3(p.x, map.heightAt(p.x, p.z) + 0.18, p.z)),
      false,
      'catmullrom',
      0.1,
    )
    const routeSamples = curve.getPoints(64)
    routeSamples.forEach((p) => {
      p.y = map.heightAt(p.x, p.z) + 0.22
    })
    const routeGeo = new THREE.BufferGeometry().setFromPoints(routeSamples)
    const routeMat = new THREE.LineBasicMaterial({ color: 0xd8ff3e, transparent: true, opacity: 0.55 })
    const routeLine = new THREE.Line(routeGeo, routeMat)
    routeLine.userData.mapObject = true
    scene.add(routeLine)
    mapObjects.push(routeLine)

    const routeMarkers: THREE.Group[] = []
    routeSamples.forEach((sample, index) => {
      if (index % 16 !== 0 || index === 0 || index === routeSamples.length - 1) return
      const marker = new THREE.Group()
      const poleMat = new THREE.MeshStandardMaterial({ color: 0xe7f0dc, roughness: 0.75, metalness: 0.1 })
      const glowMat = new THREE.MeshStandardMaterial({ color: 0xd8ff3e, emissive: 0xd8ff3e, emissiveIntensity: 0.8, roughness: 0.35 })
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.15, 6), poleMat)
      pole.position.y = 0.57
      const glow = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 0.08), glowMat)
      glow.position.y = 1.02
      marker.add(pole, glow)
      const tangent = index < routeSamples.length - 1 ? routeSamples[index + 1].clone().sub(sample) : sample.clone().sub(routeSamples[index - 1])
      const right = new THREE.Vector3(tangent.z, 0, -tangent.x).normalize()
      marker.position.copy(sample).addScaledVector(right, index % 16 === 0 ? 2.9 : -2.9)
      marker.position.y = map.heightAt(marker.position.x, marker.position.z) + 0.05
      marker.userData.baseY = marker.position.y
      marker.userData.mapObject = true
      scene.add(marker)
      mapObjects.push(marker)
      routeMarkers.push(marker)
    })

    const checkpointGates: THREE.Group[] = []
    map.checkpoints.forEach((cp, i) => {
      const gate = createGate(i === 0 ? 0x66e7ff : 0xd8ff3e, cp.radius)
      gate.position.set(cp.position.x, map.heightAt(cp.position.x, cp.position.z) + 0.04, cp.position.z)
      gate.userData.baseY = gate.position.y
      gate.userData.mapObject = true
      scene.add(gate)
      mapObjects.push(gate)
      checkpointGates.push(gate)
    })
    const finishGate = createGate(0x5cff8a, map.finish.radius)
    finishGate.position.set(map.finish.position.x, map.heightAt(map.finish.position.x, map.finish.position.z) + 0.04, map.finish.position.z)
    finishGate.userData.baseY = finishGate.position.y
    finishGate.userData.mapObject = true
    scene.add(finishGate)
    mapObjects.push(finishGate)

    const obstacleMeshes = map.obstacles.map((obstacle, index) => {
      let mesh: THREE.Mesh
      if (obstacle.type === 'rock') {
        mesh = makeRock(canyon ? 0x59463a : 0x4c5049, obstacle.radius)
      } else if (obstacle.type === 'log') {
        mesh = new THREE.Mesh(
          new THREE.CylinderGeometry(obstacle.radius * 0.44, obstacle.radius * 0.5, obstacle.radius * 2.5, 12),
          new THREE.MeshStandardMaterial({ color: 0x503723, roughness: 1 }),
        )
        mesh.rotation.z = Math.PI / 2
        mesh.rotation.y = index * 0.65
        mesh.castShadow = true
      } else {
        mesh = new THREE.Mesh(
          new THREE.CylinderGeometry(obstacle.radius * 0.54, obstacle.radius * 0.72, obstacle.radius * 1.6, 10),
          new THREE.MeshStandardMaterial({ color: 0x4a3622, roughness: 1 }),
        )
        mesh.castShadow = true
      }
      mesh.name = obstacle.id
      mesh.position.set(
        obstacle.position.x,
        map.heightAt(obstacle.position.x, obstacle.position.z) + (obstacle.type === 'rock' ? obstacle.radius * 0.62 : obstacle.radius * 0.5),
        obstacle.position.z,
      )
      mesh.userData.mapObject = true
      scene.add(mesh)
      mapObjects.push(mesh)
      return { definition: obstacle, mesh }
    })

    if (canyon) {
      for (let i = 0; i < 6; i += 1) {
        const angle = (i / 6) * Math.PI * 2
        const radius = 72 + (i % 6) * 7
        const x = Math.cos(angle) * radius
        const z = 60 + Math.sin(angle) * radius
        const rock = makeRock(0x654c3e, 2.2 + (i % 5) * 0.5)
        rock.position.set(x, map.heightAt(x, z) + 1.1, z)
        rock.scale.y = 1.2 + (i % 3) * 0.4
        rock.userData.mapObject = true
        scene.add(rock)
        mapObjects.push(rock)
      }
    } else {
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3c2b1c, roughness: 1 })
      const leafMat = new THREE.MeshStandardMaterial({ color: 0x243f2a, roughness: 0.95 })
      for (let i = 0; i < 8; i += 1) {
        const a = i * 2.399
        const radius = 42 + (i % 9) * 6
        const x = 4 + Math.cos(a) * radius
        const z = 5 + Math.sin(a) * radius
        const tree = new THREE.Group()
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 3.3, 8), trunkMat)
        trunk.position.y = 1.65
        trunk.castShadow = true
        const crown = new THREE.Mesh(new THREE.ConeGeometry(2.1, 5.5, 10), leafMat)
        crown.position.y = 4.8
        crown.castShadow = true
        tree.add(trunk, crown)
        tree.position.set(x, map.heightAt(x, z), z)
        tree.scale.setScalar(0.8 + (i % 4) * 0.08)
        tree.userData.mapObject = true
        scene.add(tree)
        mapObjects.push(tree)
      }
    }

    const car = createVehicle(vehicle)
    scene.add(car.root)

    const spawnForward = new THREE.Vector3(map.spawn.forward.x, 0, map.spawn.forward.z).normalize()
    let yaw = Math.atan2(spawnForward.x, spawnForward.z)
    const position = new THREE.Vector3(map.spawn.position.x, 0, map.spawn.position.z)
    const velocity = new THREE.Vector3()
    let bodyY = map.heightAt(position.x, position.z) + 1.25
    let verticalVelocity = 0
    let pitch = 0
    let roll = 0
    let throttle = 0
    let brake = 0
    let steering = 0
    // BAD_1: the front steering rack / telemetry channel lags behind the real yaw control.
    // The vehicle stays driveable, but the visible rack does not recenter promptly.
    let steeringRack = 0
    let wheelSpin = 0
    let collisionId: string | null = null
    const cameraTarget = new THREE.Vector3(position.x, bodyY + 0.7, position.z)
    const cameraPos = new THREE.Vector3(position.x - spawnForward.x * 7.4, bodyY + 4.4, position.z - spawnForward.z * 7.4)
    camera.position.copy(cameraPos)
    camera.lookAt(cameraTarget)

    const wheelBase = car.wheels.map((wheel) => ({ id: wheel.id, x: wheel.x, z: wheel.z }))
    const wheelRadius = 0.43
    const wheelMountDrop = 0.45
    const nominalLength = 0.5
    const clock = new THREE.Clock()
    const dustParticles = Array.from({ length: 3 }, () => {
      const material = new THREE.MeshStandardMaterial({
        color: canyon ? 0xc6a185 : 0xb5c4b1,
        roughness: 1,
        metalness: 0,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 6), material)
      mesh.visible = false
      scene.add(mesh)
      return {
        mesh,
        velocity: new THREE.Vector3(),
        life: 0,
        maxLife: 0.7,
      }
    })
    let dustCursor = 0
    let landingKick = 0
    let previousGroundedCount = 4

    function resize() {
      if (!host) return
      const width = Math.max(1, host.clientWidth)
      const height = Math.max(1, host.clientHeight)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      runtimeRef.current.scene.canvasWidth = renderer.domElement.width
      runtimeRef.current.scene.canvasHeight = renderer.domElement.height
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)

    const onKeyDown = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(event.code)) {
        event.preventDefault()
        keys.add(event.code)
      }
    }
    const onKeyUp = (event: KeyboardEvent) => keys.delete(event.code)
    window.addEventListener('keydown', onKeyDown, { passive: false })
    window.addEventListener('keyup', onKeyUp)
    // BAD_1: a harmless telemetry key listener is leaked on every race mount.
    const leakedKeyTelemetry = () => undefined
    window.addEventListener('keydown', leakedKeyTelemetry)

    runtimeRef.current.scene.renderer =
      typeof WebGL2RenderingContext !== 'undefined' && renderer.getContext() instanceof WebGL2RenderingContext ? 'webgl2' : 'webgl'
    runtimeRef.current.scene.canvasVisible = true
    runtimeRef.current.scene.visibleTerrain = true
    runtimeRef.current.scene.visibleVehicleIds = [vehicle.id]
    runtimeRef.current.scene.visibleWheelCount = 4
    runtimeRef.current.scene.visibleMapObjectCount = mapObjects.filter((object) => object.visible).length

    const tempForward = new THREE.Vector3()
    const tempRight = new THREE.Vector3()
    const tempLateral = new THREE.Vector3()
    const tempDesiredCamera = new THREE.Vector3()
    const tempTarget = new THREE.Vector3()
    const tempCameraForward = new THREE.Vector3()

    const animate = () => {
      if (disposed) return
      frameId = requestAnimationFrame(animate)
      const dt = Math.min(clock.getDelta(), 0.06)
      const race = raceRef.current
      const running = race.phase === 'running'

      const throttleHeld = keys.has('KeyW') || keys.has('ArrowUp')
      const brakeHeld = keys.has('KeyS') || keys.has('ArrowDown')
      const leftHeld = keys.has('KeyA') || keys.has('ArrowLeft')
      const rightHeld = keys.has('KeyD') || keys.has('ArrowRight')
      throttle = smooth(throttle, running && throttleHeld ? 1 : 0, 8, dt)
      brake = smooth(brake, running && brakeHeld ? 1 : 0, 10, dt)
      const steerTarget = running ? (leftHeld ? -1 : 0) + (rightHeld ? 1 : 0) : 0
      steering = smooth(steering, steerTarget, steerTarget === 0 ? 13 : 10, dt)
      // BAD_1: only the visible/telemetry rack recenters too slowly.
      steeringRack = smooth(steeringRack, steerTarget, steerTarget === 0 ? 2.2 : 10, dt)

      tempForward.set(Math.sin(yaw), 0, Math.cos(yaw)).normalize()
      tempRight.set(tempForward.z, 0, -tempForward.x)
      const surface = map.surfaceAt(position.x, position.z)
      const surfaceFactor = terrainGrip[surface] ?? 0.82
      const speed = Math.hypot(velocity.x, velocity.z)
      const forwardSpeed = velocity.dot(tempForward)
      const speedRatio = clamp(Math.abs(forwardSpeed) / Math.max(6, appliedStats.maxSpeed), 0, 1)

      if (running) {
        const terrainHere = map.heightAt(position.x, position.z)
        const terrainAhead = map.heightAt(position.x + tempForward.x * 2.2, position.z + tempForward.z * 2.2)
        const grade = clamp((terrainAhead - terrainHere) / 2.2, -0.65, 0.65)
        const torqueCurve = clamp(1 - speedRatio * 0.72, 0.28, 1.15)
        const driveGrip = clamp(surfaceFactor * (0.78 + appliedStats.grip * 0.06), 0.45, 1.35)
        const engineAccel = (appliedStats.power / appliedStats.mass) * torqueCurve * driveGrip * clamp(1 - grade * 0.82, 0.52, 1.24)

        if (throttle > 0.01 && speed < appliedStats.maxSpeed * 1.08) {
          velocity.addScaledVector(tempForward, engineAccel * throttle * dt)
        }
        if (brake > 0.01) {
          if (forwardSpeed > 0.85 || speed > 1.2) {
            const decel = Math.min(speed, appliedStats.braking * brake * dt)
            if (speed > 0.001) velocity.multiplyScalar(Math.max(0, (speed - decel) / speed))
          } else {
            velocity.addScaledVector(tempForward, -engineAccel * 0.58 * brake * dt)
          }
        }

        const currentForwardSpeed = velocity.dot(tempForward)
        const lateralSpeed = velocity.dot(tempRight)
        tempLateral.copy(tempRight).multiplyScalar(lateralSpeed)
        const lateralGrip = clamp(appliedStats.grip * surfaceFactor * dt, 0, 0.9)
        velocity.addScaledVector(tempLateral, -lateralGrip)

        const steerSpeedFactor = clamp(Math.abs(currentForwardSpeed) / 5.2, 0.25, 1)
        const directionSign = currentForwardSpeed < -0.1 ? -1 : 1
        const steerAuthority = appliedStats.steering * clamp(0.34 + (1 - speedRatio) * 0.95, 0.32, 1.22) * clamp(0.58 + surfaceFactor * 0.62, 0.48, 1.18)
        yaw += steering * steerAuthority * steerSpeedFactor * directionSign * dt
        yaw += clamp(lateralSpeed, -6, 6) * 0.003 * steering * dt

        const drag = 0.12 + speed * 0.011 + (surface === 'mud' ? 0.2 : surface === 'sand' ? 0.1 : 0.03)
        velocity.multiplyScalar(Math.exp(-drag * dt))
        if (!throttleHeld && !brakeHeld) velocity.multiplyScalar(Math.exp(-(surface === 'mud' ? 0.12 : 0.05) * dt))
        const postSpeed = Math.hypot(velocity.x, velocity.z)
        if (postSpeed > appliedStats.maxSpeed) velocity.multiplyScalar(appliedStats.maxSpeed / postSpeed)

        position.x += velocity.x * dt
        position.z += velocity.z * dt
        position.x = clamp(position.x, -112, 112)
        position.z = clamp(position.z, -112, 168)

        collisionId = null
        for (const { definition } of obstacleMeshes) {
          const dx = position.x - definition.position.x
          const dz = position.z - definition.position.z
          const dist = Math.hypot(dx, dz)
          const minDist = definition.radius + 1.12
          if (dist < minDist) {
            const nx = dist > 0.001 ? dx / dist : 1
            const nz = dist > 0.001 ? dz / dist : 0
            position.x = definition.position.x + nx * minDist
            position.z = definition.position.z + nz * minDist
            const normalVelocity = velocity.x * nx + velocity.z * nz
            if (normalVelocity < 0) {
              velocity.x -= normalVelocity * nx * 1.55
              velocity.z -= normalVelocity * nz * 1.55
            }
            velocity.multiplyScalar(0.42)
            collisionId = definition.id
            landingKick = Math.max(landingKick, 0.18)
            break
          }
        }

        const nextCp = map.checkpoints[race.currentCheckpointIndex]
        if (nextCp) {
          const cpDistance = Math.hypot(position.x - nextCp.position.x, position.z - nextCp.position.z)
          if (cpDistance <= nextCp.radius) {
            race.passedCheckpointIds.push(nextCp.id)
            race.currentCheckpointIndex += 1
            race.finishEligible = race.currentCheckpointIndex >= map.checkpoints.length
            onProgress()
          }
        } else if (race.finishEligible && !race.finished) {
          const finishDistance = Math.hypot(position.x - map.finish.position.x, position.z - map.finish.position.z)
          if (finishDistance <= map.finish.radius && race.startTimeMs !== null) {
            const finalTime = Math.max(0.01, (performance.now() - race.startTimeMs) / 1000)
            race.elapsedTime = finalTime
            race.finalTime = finalTime
            race.finished = true
            race.phase = 'finished'
            onFinish(finalTime)
          }
        }

        if (race.startTimeMs !== null && !race.finished) {
          race.elapsedTime = (performance.now() - race.startTimeMs) / 1000
        }
      } else {
        velocity.multiplyScalar(Math.exp(-5 * dt))
      }

      tempForward.set(Math.sin(yaw), 0, Math.cos(yaw)).normalize()
      const wheelSamples = wheelBase.map((wheel) => {
        const wx = position.x + wheel.x * Math.cos(yaw) + wheel.z * Math.sin(yaw)
        const wz = position.z - wheel.x * Math.sin(yaw) + wheel.z * Math.cos(yaw)
        const groundY = map.heightAt(wx, wz)
        return { ...wheel, wx, wz, groundY }
      })
      const avgGround = wheelSamples.reduce((sum, wheel) => sum + wheel.groundY, 0) / wheelSamples.length
      const desiredBodyY = avgGround + 1.24
      const spring = 12 + appliedStats.suspension * 18
      const damper = 5.8
      verticalVelocity += (desiredBodyY - bodyY) * spring * dt
      verticalVelocity *= Math.exp(-damper * dt)
      bodyY += verticalVelocity * dt
      const maxGround = Math.max(...wheelSamples.map((wheel) => wheel.groundY))
      bodyY = Math.max(bodyY, maxGround + 0.78)

      const frontHeight = (wheelSamples[0].groundY + wheelSamples[1].groundY) / 2
      const rearHeight = (wheelSamples[2].groundY + wheelSamples[3].groundY) / 2
      const leftHeight = (wheelSamples[0].groundY + wheelSamples[2].groundY) / 2
      const rightHeight = (wheelSamples[1].groundY + wheelSamples[3].groundY) / 2
      const targetPitch = -Math.atan2(frontHeight - rearHeight, 2.34)
      const targetRoll = Math.atan2(rightHeight - leftHeight, 2.04)
      pitch = smooth(pitch, targetPitch, 7, dt)
      roll = smooth(roll, targetRoll, 7, dt)

      car.root.position.set(position.x, bodyY, position.z)
      car.root.rotation.y = yaw
      car.bodyTilt.rotation.x = pitch
      car.bodyTilt.rotation.z = roll
      wheelSpin += velocity.dot(tempForward) * dt / wheelRadius

      const wheelRuntime = wheelSamples.map((sample, index) => {
        const wheel = car.wheels[index]
        // BAD_1: the rear-right corner has a seized damper (zero usable travel).
        const travel = index === 3 ? 0 : appliedStats.suspension
        const mountY = bodyY - wheelMountDrop
        const groundWheelCenterY = sample.groundY + wheelRadius
        const suspensionLength = mountY - groundWheelCenterY
        const maxLength = nominalLength + travel / 2
        const grounded = suspensionLength <= maxLength + 0.04
        const wheelCenterY = grounded ? groundWheelCenterY : mountY - maxLength
        const compression = grounded
          ? (travel > 0 ? clamp((maxLength - suspensionLength) / travel, 0, 1) : 0)
          : 0
        wheel.holder.position.y = wheelCenterY - bodyY
        wheel.holder.rotation.y = wheel.front ? steeringRack * 0.45 : 0
        wheel.tire.rotation.x = wheelSpin
        wheel.rim.rotation.x = wheelSpin
        return {
          id: sample.id,
          position: { x: sample.wx, y: wheelCenterY, z: sample.wz },
          contactPoint: grounded ? { x: sample.wx, y: sample.groundY, z: sample.wz } : null,
          grounded,
          suspensionCompression: compression,
          suspensionTravel: travel,
        }
      })
      const groundedCount = wheelRuntime.filter((wheel) => wheel.grounded).length
      if (groundedCount >= 2 && previousGroundedCount < 2 && Math.abs(verticalVelocity) > 0.8) {
        landingKick = Math.max(landingKick, Math.min(0.45, Math.abs(verticalVelocity) * 0.08))
      }
      previousGroundedCount = groundedCount
      landingKick = Math.max(0, landingKick - dt * 0.9)

      checkpointGates.forEach((gate, index) => {
        const pulse = running && race.currentCheckpointIndex === index ? 1.15 : 1
        gate.scale.setScalar(smooth(gate.scale.x, pulse, 6, dt))
        gate.position.y = gate.userData.baseY + Math.sin(renderFrame * 0.05 + index) * 0.08
        gate.rotation.y += dt * 0.45
      })
      finishGate.scale.setScalar(smooth(finishGate.scale.x, race.finishEligible ? 1.18 : 1, 6, dt))
      finishGate.position.y = finishGate.userData.baseY + Math.sin(renderFrame * 0.06) * 0.1
      finishGate.rotation.y += dt * 0.38
      routeMarkers.forEach((marker, index) => {
        marker.position.y = marker.userData.baseY + Math.sin(renderFrame * 0.04 + index * 0.35) * 0.03
        const glow = marker.children[1] as THREE.Mesh
        const glowMaterial = glow.material as THREE.MeshStandardMaterial
        glowMaterial.emissiveIntensity = 0.55 + Math.sin(renderFrame * 0.06 + index) * 0.2
      })

      if (running && groundedCount >= 2 && speed > 4.5) {
        const emitCount = speed > 10 ? 2 : 1
        for (let i = 0; i < emitCount; i += 1) {
          const particle = dustParticles[dustCursor % dustParticles.length]
          dustCursor += 1
          const offset = (Math.random() - 0.5) * 1.5
          particle.mesh.visible = true
          particle.life = 1
          particle.maxLife = 0.45 + Math.random() * 0.28
          particle.mesh.scale.setScalar(0.65 + Math.random() * 0.45)
          particle.mesh.position.set(
            position.x - tempForward.x * 1.5 + tempRight.x * offset,
            bodyY - 0.82,
            position.z - tempForward.z * 1.5 + tempRight.z * offset,
          )
          particle.velocity.set(
            -tempForward.x * (0.8 + Math.random() * 1.3) + tempRight.x * offset * 0.65,
            0.55 + Math.random() * 0.45,
            -tempForward.z * (0.8 + Math.random() * 1.3) + tempRight.z * offset * 0.65,
          )
        }
      }
      dustParticles.forEach((particle) => {
        if (particle.life <= 0) {
          particle.mesh.visible = false
          return
        }
        particle.life -= dt
        if (particle.life <= 0) {
          particle.mesh.visible = false
          return
        }
        particle.mesh.position.addScaledVector(particle.velocity, dt)
        particle.velocity.y += 0.35 * dt
        const alpha = particle.life / particle.maxLife
        particle.mesh.scale.multiplyScalar(1 + dt * 1.45)
        const material = particle.mesh.material as THREE.MeshStandardMaterial
        material.opacity = alpha * 0.26
      })

      const chaseDistance = 7.45 + Math.min(2.3, speed * 0.065)
      const heightBoost = 4.15 + Math.min(1.4, speed * 0.03)
      const sideOffset = steering * Math.min(0.9, speed * 0.03)
      tempDesiredCamera.set(
        position.x - tempForward.x * chaseDistance + tempRight.x * sideOffset,
        bodyY + heightBoost + landingKick * 1.1,
        position.z - tempForward.z * chaseDistance + tempRight.z * sideOffset,
      )
      const camBlend = 1 - Math.exp(-4.6 * dt)
      cameraPos.lerp(tempDesiredCamera, camBlend)
      tempTarget.set(position.x, bodyY + 0.68 + landingKick * 0.22, position.z).addScaledVector(tempForward, 1.9 + speed * 0.04)
      cameraTarget.lerp(tempTarget, 1 - Math.exp(-6.4 * dt))
      camera.fov = THREE.MathUtils.lerp(camera.fov, 62 + clamp(speed * 0.45, 0, 10), 0.08)
      camera.updateProjectionMatrix()
      camera.position.copy(cameraPos)
      camera.lookAt(cameraTarget)
      tempCameraForward.subVectors(cameraTarget, cameraPos).normalize()

      renderFrame += 1
      runtimeRef.current.vehicle = {
        id: vehicle.id,
        position: { x: position.x, y: bodyY, z: position.z },
        rotation: { x: pitch, y: yaw, z: roll },
        forward: { x: tempForward.x, y: -Math.sin(pitch), z: tempForward.z },
        velocity: { x: velocity.x, y: verticalVelocity, z: velocity.z },
        speed: Math.hypot(velocity.x, velocity.z),
        throttle,
        brake,
        steering: steeringRack,
        grounded: wheelRuntime.filter((wheel) => wheel.grounded).length >= 2,
        surfaceType: surface,
        collision: { active: collisionId !== null, objectId: collisionId },
        chassis: { height: bodyY, pitch, roll },
        wheels: wheelRuntime,
        appliedStats: { ...appliedStats },
      }
      runtimeRef.current.camera = {
        mode: 'third_person',
        position: { x: cameraPos.x, y: cameraPos.y, z: cameraPos.z },
        target: { x: cameraTarget.x, y: cameraTarget.y, z: cameraTarget.z },
        forward: { x: tempCameraForward.x, y: tempCameraForward.y, z: tempCameraForward.z },
        followedVehicleId: vehicle.id,
        vehicleVisible: car.root.visible,
      }
      runtimeRef.current.scene.renderFrame = renderFrame
      runtimeRef.current.scene.canvasVisible = renderer.domElement.isConnected && renderer.domElement.clientWidth > 0
      runtimeRef.current.scene.visibleVehicleIds = car.root.visible ? [vehicle.id] : []
      runtimeRef.current.scene.visibleWheelCount = car.wheels.filter((wheel) => wheel.holder.visible).length
      runtimeRef.current.scene.visibleTerrain = terrain.visible
      runtimeRef.current.scene.visibleMapObjectCount = mapObjects.filter((object) => object.visible && object.parent !== null).length

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh
        if (mesh.geometry) mesh.geometry.dispose()
        const material = (mesh as THREE.Mesh).material
        if (Array.isArray(material)) material.forEach((m) => m.dispose())
        else if (material) material.dispose()
      })
      renderer.dispose()
      // Explicitly release the GPU context so repeated playable runs do not exhaust
      // the browser's WebGL context budget. The intentional R33 listener leak remains.
      renderer.forceContextLoss()
      renderer.domElement.remove()
      runtimeRef.current.scene.canvasVisible = false
      runtimeRef.current.scene.canvasWidth = 0
      runtimeRef.current.scene.canvasHeight = 0
      runtimeRef.current.scene.visibleVehicleIds = []
      runtimeRef.current.scene.visibleWheelCount = 0
      runtimeRef.current.scene.visibleTerrain = false
      runtimeRef.current.scene.visibleMapObjectCount = 0
      runtimeRef.current.vehicle = {
        id: null,
        position: { x: 0, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        forward: { x: 0, y: 0, z: 1 },
        velocity: { x: 0, y: 0, z: 0 },
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
      runtimeRef.current.camera = {
        mode: 'third_person',
        position: { x: 0, y: 0, z: 0 },
        target: { x: 0, y: 0, z: 0 },
        forward: { x: 0, y: 0, z: 1 },
        followedVehicleId: null,
        vehicleVisible: false,
      }
    }
  // A race mount owns exactly one renderer/RAF/input loop. Stats and callbacks are
  // stable for the lifetime of a race; depending on parent render-time values here
  // can repeatedly recreate WebGL contexts under the evaluator's frequent HUD reads.
  }, [map.id, vehicle.id])

  return <div ref={hostRef} className="game-host" aria-label="真实越野比赛 WebGL 场景" />
}
