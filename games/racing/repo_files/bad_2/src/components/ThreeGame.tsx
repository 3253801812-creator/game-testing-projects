import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { MapDef, VehicleDef, VehicleStats } from '../types'
import { runtime } from '../runtime'

type Props = {
  map: MapDef
  vehicle: VehicleDef
  stats: VehicleStats
  raceId: string
  active: boolean
  onReady: () => void
  onTick: (elapsed: number, speed: number, checkpointIndex: number, surface: string) => void
  onFinish: (time: number) => void
}

const clamp = THREE.MathUtils.clamp

const makeRock = (radius: number) => {
  const geo = new THREE.DodecahedronGeometry(radius, 0)
  const mat = new THREE.MeshStandardMaterial({ color: 0x5b5148, roughness: 1 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.castShadow = true
  mesh.receiveShadow = true
  mesh.scale.set(1.25, 0.8, 1)
  return mesh
}

const makeCheckpointGate = (color: number, finish = false) => {
  const group = new THREE.Group()
  const mat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: finish ? 0.5 : 0.18, roughness: 0.55 })
  const postGeo = new THREE.BoxGeometry(0.34, 4.8, 0.34)
  const topGeo = new THREE.BoxGeometry(6.4, 0.34, 0.34)
  const left = new THREE.Mesh(postGeo, mat)
  const right = new THREE.Mesh(postGeo, mat)
  const top = new THREE.Mesh(topGeo, mat)
  left.position.set(-3.05, 2.4, 0)
  right.position.set(3.05, 2.4, 0)
  top.position.set(0, 4.65, 0)
  group.add(left, right, top)
  if (!finish) {
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.55, 24),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, side: THREE.DoubleSide }),
    )
    disc.position.set(0, 3.25, 0.21)
    group.add(disc)
  }
  return group
}

const addTree = (scene: THREE.Scene, x: number, z: number, h: number, scale = 1) => {
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * scale, 0.26 * scale, 2.5 * scale, 7), new THREE.MeshStandardMaterial({ color: 0x4f3b2a, roughness: 1 }))
  trunk.position.set(x, h + 1.25 * scale, z)
  trunk.castShadow = true
  const crown = new THREE.Mesh(new THREE.ConeGeometry(1.35 * scale, 4.1 * scale, 9), new THREE.MeshStandardMaterial({ color: 0x304a34, roughness: 1 }))
  crown.position.set(x, h + 3.6 * scale, z)
  crown.castShadow = true
  scene.add(trunk, crown)
}

function createVehicleVisual(def: VehicleDef) {
  const root = new THREE.Group()
  root.name = `vehicle-${def.id}`

  const frameMat = new THREE.MeshStandardMaterial({ color: def.accentColor, metalness: 0.45, roughness: 0.5 })
  const bodyMat = new THREE.MeshStandardMaterial({ color: def.bodyColor, metalness: 0.2, roughness: 0.42 })
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x26343b, metalness: 0.6, roughness: 0.2 })

  const frame = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.28, 4.3), frameMat)
  frame.position.y = 0.55
  frame.castShadow = true
  root.add(frame)

  const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.85, 3.25), bodyMat)
  body.position.set(0, 1.05, -0.1)
  body.castShadow = true
  body.receiveShadow = true
  root.add(body)

  const hood = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.5, 1.15), bodyMat)
  hood.position.set(0, 1.32, -1.8)
  hood.castShadow = true
  root.add(hood)

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.95, 1.65), glassMat)
  cabin.position.set(0, 1.78, 0.45)
  cabin.scale.x = 0.94
  cabin.castShadow = true
  root.add(cabin)

  const bumperGeo = new THREE.BoxGeometry(2.45, 0.24, 0.28)
  const frontBumper = new THREE.Mesh(bumperGeo, frameMat)
  frontBumper.position.set(0, 0.82, -2.25)
  const rearBumper = new THREE.Mesh(bumperGeo, frameMat)
  rearBumper.position.set(0, 0.82, 2.25)
  root.add(frontBumper, rearBumper)

  const lightMat = new THREE.MeshStandardMaterial({ color: 0xfff2c2, emissive: 0xffdd88, emissiveIntensity: 1.4 })
  for (const x of [-0.72, 0.72]) {
    const light = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.25, 0.12), lightMat)
    light.position.set(x, 1.23, -2.39)
    root.add(light)
  }

  const wheelGeo = new THREE.CylinderGeometry(0.58, 0.58, 0.42, 18)
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x111311, roughness: 1 })
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x9c9d99, metalness: 0.8, roughness: 0.35 })
  const wheels: THREE.Group[] = []
  const struts: THREE.Mesh[] = []
  const wheelOffsets = [
    { id: 'front-left', x: -1.25, z: -1.55 },
    { id: 'front-right', x: 1.25, z: -1.55 },
    { id: 'rear-left', x: -1.25, z: 1.55 },
    { id: 'rear-right', x: 1.25, z: 1.55 },
  ]
  for (const offset of wheelOffsets) {
    const wheel = new THREE.Group()
    const tire = new THREE.Mesh(wheelGeo, tireMat)
    tire.rotation.z = Math.PI / 2
    tire.castShadow = true
    tire.receiveShadow = true
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.44, 16), rimMat)
    rim.rotation.z = Math.PI / 2
    wheel.add(tire, rim)
    wheel.position.set(offset.x, -0.05, offset.z)
    wheel.userData.wheelId = offset.id
    root.add(wheel)
    wheels.push(wheel)

    const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.85, 8), new THREE.MeshStandardMaterial({ color: 0xbfc3bd, metalness: 0.75, roughness: 0.3 }))
    strut.position.set(offset.x, 0.4, offset.z)
    root.add(strut)
    struts.push(strut)
  }

  return { root, wheels, struts, wheelOffsets }
}

let bad2RaceSessionCount = 0

export default function ThreeGame({ map, vehicle, stats, raceId, active, onReady, onTick, onFinish }: Props) {
  const mountRef = useRef<HTMLDivElement>(null)
  const callbacksRef = useRef({ onReady, onTick, onFinish })
  callbacksRef.current = { onReady, onTick, onFinish }
  const activeRef = useRef(active)
  activeRef.current = active

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let disposed = false
    let animation = 0
    const keys = new Set<string>()
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(map.skyColor)
    scene.fog = new THREE.FogExp2(map.fogColor, map.id === 'pine-ridge' ? 0.009 : 0.006)

    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 420)
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.domElement.dataset.testid = 'game-canvas'
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    mount.appendChild(renderer.domElement)

    const hemi = new THREE.HemisphereLight(0xc9e1ef, 0x4b3b2c, 2.0)
    scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xfff0d5, 3.1)
    sun.position.set(-45, 70, 28)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.left = -85
    sun.shadow.camera.right = 85
    sun.shadow.camera.top = 85
    sun.shadow.camera.bottom = -85
    scene.add(sun)

    const terrainSize = map.bounds * 2
    const terrainGeo = new THREE.PlaneGeometry(terrainSize, terrainSize, 88, 88)
    const pos = terrainGeo.attributes.position
    const colors: number[] = []
    const c = new THREE.Color()
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const planeY = pos.getY(i)
      const z = -planeY
      const h = map.heightAt(x, z)
      pos.setZ(i, h)
      const surface = map.surfaceAt(x, z)
      if (surface === 'mud') c.set(0x384235)
      else if (surface === 'rock') c.set(map.id === 'red-canyon' ? 0x755d4c : 0x525956)
      else if (surface === 'sand') c.set(0xa77d51)
      else c.set(map.id === 'red-canyon' ? 0x865f43 : 0x4f644b)
      const noise = 0.88 + 0.12 * Math.sin(x * 1.77 + z * 0.61)
      colors.push(c.r * noise, c.g * noise, c.b * noise)
    }
    terrainGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    terrainGeo.computeVertexNormals()
    terrainGeo.rotateX(-Math.PI / 2)
    const terrain = new THREE.Mesh(terrainGeo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 }))
    terrain.receiveShadow = true
    terrain.name = `terrain-${map.id}`
    scene.add(terrain)

    // Route ribbon: a physical-looking trail strip built from checkpoint path segments.
    const routePoints = [map.spawn.position, ...map.checkpoints.map((p) => p.position), map.finish.position]
    for (let i = 0; i < routePoints.length - 1; i++) {
      const a = routePoints[i]
      const b = routePoints[i + 1]
      const midX = (a.x + b.x) / 2
      const midZ = (a.z + b.z) / 2
      const length = Math.hypot(b.x - a.x, b.z - a.z)
      const ribbon = new THREE.Mesh(
        new THREE.PlaneGeometry(5.4, length, 1, 1),
        new THREE.MeshStandardMaterial({ color: map.id === 'red-canyon' ? 0x6d4b37 : 0x3c4939, roughness: 1, transparent: true, opacity: 0.72, polygonOffset: true, polygonOffsetFactor: -2 }),
      )
      ribbon.rotation.x = -Math.PI / 2
      ribbon.rotation.z = -Math.atan2(b.x - a.x, b.z - a.z)
      ribbon.position.set(midX, map.heightAt(midX, midZ) + 0.055, midZ)
      ribbon.receiveShadow = true
      scene.add(ribbon)
    }

    for (const cp of map.checkpoints) {
      const gate = makeCheckpointGate(0xf2b94b)
      gate.name = cp.id
      gate.position.set(cp.position.x, map.heightAt(cp.position.x, cp.position.z), cp.position.z)
      scene.add(gate)
    }
    const finishGate = makeCheckpointGate(0x6ef2a0, true)
    finishGate.name = 'finish-gate'
    finishGate.position.set(map.finish.position.x, map.heightAt(map.finish.position.x, map.finish.position.z), map.finish.position.z)
    scene.add(finishGate)

    for (const obstacle of map.obstacles) {
      const y = map.heightAt(obstacle.position.x, obstacle.position.z)
      if (obstacle.kind === 'rock') {
        const rock = makeRock(obstacle.radius)
        rock.position.set(obstacle.position.x, y + obstacle.radius * 0.55, obstacle.position.z)
        rock.rotation.set(obstacle.position.x * 0.03, obstacle.position.z * 0.08, 0.1)
        rock.name = obstacle.id
        scene.add(rock)
      } else if (obstacle.kind === 'log') {
        const log = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.56, obstacle.radius * 2.4, 10), new THREE.MeshStandardMaterial({ color: 0x4b3422, roughness: 1 }))
        log.rotation.z = Math.PI / 2
        log.rotation.y = 0.4
        log.position.set(obstacle.position.x, y + 0.45, obstacle.position.z)
        log.castShadow = true
        log.name = obstacle.id
        scene.add(log)
      } else {
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.2, 14), new THREE.MeshStandardMaterial({ color: 0xb7672e, roughness: 0.65, metalness: 0.25 }))
        barrel.position.set(obstacle.position.x, y + 0.6, obstacle.position.z)
        barrel.castShadow = true
        barrel.name = obstacle.id
        scene.add(barrel)
      }
    }

    if (map.id === 'pine-ridge') {
      for (let i = 0; i < 52; i++) {
        const ang = i * 2.399
        const r = 36 + (i % 7) * 6.1
        const x = Math.cos(ang) * r
        const z = Math.sin(ang) * r
        if (Math.abs(x) < map.bounds - 3 && Math.abs(z) < map.bounds - 3) addTree(scene, x, z, map.heightAt(x, z), 0.72 + (i % 4) * 0.12)
      }
    } else {
      for (let i = 0; i < 24; i++) {
        const x = -map.bounds + 7 + ((i * 17.7) % (map.bounds * 2 - 14))
        const z = -map.bounds + 7 + ((i * 29.3) % (map.bounds * 2 - 14))
        const rock = makeRock(0.8 + (i % 4) * 0.35)
        rock.position.set(x, map.heightAt(x, z) + 0.5, z)
        scene.add(rock)
      }
    }

    const vehicleVisual = createVehicleVisual(vehicle)
    scene.add(vehicleVisual.root)

    const spawn = map.spawn.position
    let px = spawn.x
    let pz = spawn.z
    let yaw = Math.atan2(map.spawn.forward.x, -map.spawn.forward.z)
    let speed = 0
    let throttle = 0
    let brake = 0
    let steering = 0
    let chassisY = map.heightAt(px, pz) + 1.3
    let pitch = 0
    let roll = 0
    let finished = false
    let checkpointIndex = 0
    let startTime = performance.now()
    let lastTime = performance.now()
    let lastUiPush = 0
    bad2RaceSessionCount += 1
    let collisionObject: string | null = bad2RaceSessionCount > 1 ? 'carryover-contact' : null
    let collisionTimer = bad2RaceSessionCount > 1 ? 3 : 0

    const wheelbase = 3.1
    const track = 2.5
    const restWheelY = -0.05
    const clearance = 1.18
    const tempForward = new THREE.Vector3()
    const desiredCamera = new THREE.Vector3()
    const cameraTarget = new THREE.Vector3()

    const resetRuntimeRace = () => {
      runtime.race.raceId = raceId
      runtime.race.phase = 'loading'
      runtime.race.vehicleId = vehicle.id
      runtime.race.mapId = map.id
      runtime.race.elapsedTime = 0
      runtime.race.finalTime = null
      runtime.race.finished = false
      runtime.race.currentCheckpointIndex = 0
      runtime.race.passedCheckpointIds = []
      runtime.race.finishEligible = false
      runtime.race.reward = 0
      runtime.race.rewardGranted = false
      runtime.vehicle.id = vehicle.id
      runtime.vehicle.appliedStats = { ...stats }
      runtime.world.currentMapId = map.id
    }
    resetRuntimeRace()

    const resize = () => {
      const w = Math.max(1, mount.clientWidth)
      const h = Math.max(1, mount.clientHeight)
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      runtime.scene.canvasWidth = renderer.domElement.width
      runtime.scene.canvasHeight = renderer.domElement.height
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(mount)

    const onKeyDown = (e: KeyboardEvent) => {
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        keys.add(e.code)
        e.preventDefault()
      }
    }
    const onKeyUp = (e: KeyboardEvent) => keys.delete(e.code)
    window.addEventListener('keydown', onKeyDown, { passive: false })
    window.addEventListener('keyup', onKeyUp)

    const worldWheelSample = (localX: number, localZ: number) => {
      const wx = px + localX * Math.cos(yaw) - localZ * Math.sin(yaw)
      const wz = pz + localX * Math.sin(yaw) + localZ * Math.cos(yaw)
      return { x: wx, z: wz, h: map.heightAt(wx, wz) }
    }

    // Camera is initialized immediately from the actual vehicle spawn.
    const initForward = new THREE.Vector3(Math.sin(yaw), 0, -Math.cos(yaw))
    camera.position.set(px - initForward.x * 8, chassisY + 5.4, pz - initForward.z * 8)
    camera.lookAt(px, chassisY + 1, pz)

    requestAnimationFrame(() => {
      if (!disposed) callbacksRef.current.onReady()
    })

    const animate = (now: number) => {
      if (disposed) return
      animation = requestAnimationFrame(animate)
      const dt = Math.min(0.035, Math.max(0.001, (now - lastTime) / 1000))
      lastTime = now

      if (activeRef.current && !finished) {
        if (runtime.race.phase !== 'running') {
          runtime.race.phase = 'running'
          startTime = now
        }

        const throttleTarget = keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0
        const brakeTarget = keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0
        const steerTarget = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0)
        throttle += (throttleTarget - throttle) * Math.min(1, dt * 7)
        brake += (brakeTarget - brake) * Math.min(1, dt * 8)
        steering += (steerTarget - steering) * Math.min(1, dt * (steerTarget === 0 ? 18 : 7))

        const surface = map.surfaceAt(px, pz)
        const surfaceTraction = surface === 'mud' ? 0.58 : surface === 'sand' ? 0.72 : surface === 'rock' ? 0.86 : 1
        const grip = stats.grip * surfaceTraction
        const forwardNow = { x: Math.sin(yaw), z: -Math.cos(yaw) }
        const aheadHeight = map.heightAt(px + forwardNow.x * 2.5, pz + forwardNow.z * 2.5)
        const hereHeight = map.heightAt(px, pz)
        const slope = (aheadHeight - hereHeight) / 2.5
        const powerAccel = (stats.power * 0.86) * (1650 / stats.mass) * (0.7 + grip * 0.3)

        if (throttle > 0.01) speed += throttle * powerAccel * dt
        if (brake > 0.01) {
          if (speed > 1.0) speed -= brake * stats.braking * dt
          else speed -= brake * powerAccel * 0.62 * dt
        }
        speed -= slope * 5.2 * dt
        const rolling = (surface === 'mud' ? 1.65 : surface === 'sand' ? 1.2 : 0.55) + Math.abs(speed) * 0.013
        if (Math.abs(speed) > 0.02) speed -= Math.sign(speed) * rolling * dt
        else speed = 0
        speed = clamp(speed, -stats.maxSpeed * 0.34, stats.maxSpeed)

        const steeringEffect = clamp(Math.abs(speed) / 7, 0.16, 1)
        yaw -= steering * stats.steering * steeringEffect * grip * Math.sign(speed || 1) * dt * 0.62
        const fx = Math.sin(yaw)
        const fz = -Math.cos(yaw)
        px += fx * speed * dt
        pz += fz * speed * dt

        // BAD_2: rendered obstacles have no physical collision bodies.
        // The first seconds of a fresh race also expose a stale previous-contact flag.
        if (collisionTimer > 0) collisionTimer -= dt
        else collisionObject = null

        const bound = map.bounds - 1.8
        if (Math.abs(px) > bound) { px = clamp(px, -bound, bound); speed *= 0.35 }
        if (Math.abs(pz) > bound) { pz = clamp(pz, -bound, bound); speed *= 0.35 }

        const fl = worldWheelSample(-track / 2, -wheelbase / 2)
        const fr = worldWheelSample(track / 2, -wheelbase / 2)
        const rl = worldWheelSample(-track / 2, wheelbase / 2)
        const rr = worldWheelSample(track / 2, wheelbase / 2)
        const frontAvg = (fl.h + fr.h) / 2
        const rearAvg = (rl.h + rr.h) / 2
        const leftAvg = (fl.h + rl.h) / 2
        const rightAvg = (fr.h + rr.h) / 2
        const targetPitch = Math.atan2(rearAvg - frontAvg, wheelbase)
        const targetRoll = Math.atan2(leftAvg - rightAvg, track)
        pitch += (targetPitch - pitch) * Math.min(1, dt * (4.2 + stats.suspension * 1.2))
        roll += (targetRoll - roll) * Math.min(1, dt * (4.2 + stats.suspension * 1.2))
        const avgH = (fl.h + fr.h + rl.h + rr.h) / 4
        const targetY = avgH + clearance + 0.13 * stats.suspension
        chassisY += (targetY - chassisY) * Math.min(1, dt * (5 + stats.suspension * 2.5))
        chassisY = Math.max(chassisY, hereHeight + 0.85)

        vehicleVisual.root.position.set(px, chassisY, pz)
        vehicleVisual.root.rotation.order = 'YXZ'
        vehicleVisual.root.rotation.set(pitch, yaw, roll)

        const samples = [fl, fr, rl, rr]
        const wheelRuntime = []
        for (let i = 0; i < vehicleVisual.wheels.length; i++) {
          const wheel = vehicleVisual.wheels[i]
          const sample = samples[i]
          const localGroundDelta = sample.h - avgH
          const travel = stats.suspension
          const wheelY = clamp(restWheelY + localGroundDelta * 0.72, restWheelY - travel * 0.44, restWheelY + travel * 0.44)
          wheel.position.y += (wheelY - wheel.position.y) * Math.min(1, dt * 15)
          wheel.rotation.x += speed * dt / 0.58
          if (i < 2) wheel.rotation.y = steering * 0.42

          const strut = vehicleVisual.struts[i]
          const strutTop = 0.68
          const strutBottom = wheel.position.y + 0.2
          strut.position.y = (strutTop + strutBottom) / 2
          strut.scale.y = Math.max(0.22, Math.abs(strutTop - strutBottom) / 0.85)

          const worldPos = new THREE.Vector3()
          wheel.getWorldPosition(worldPos)
          const contactY = map.heightAt(worldPos.x, worldPos.z)
          const compression = clamp(0.5 + (localGroundDelta / Math.max(0.35, travel)) * 0.72, 0, 1)
          wheelRuntime.push({
            id: String(wheel.userData.wheelId),
            position: { x: worldPos.x, y: worldPos.y, z: worldPos.z },
            contactPoint: { x: worldPos.x, y: contactY, z: worldPos.z },
            grounded: worldPos.y - 0.62 <= contactY + 0.25,
            suspensionCompression: compression,
            suspensionTravel: travel,
          })
        }

        // Ordered checkpoint progression only.
        if (checkpointIndex < map.checkpoints.length) {
          const cp = map.checkpoints[checkpointIndex]
          if (Math.hypot(px - cp.position.x, pz - cp.position.z) <= cp.radius) {
            runtime.race.passedCheckpointIds.push(cp.id)
            checkpointIndex += 1
            runtime.race.currentCheckpointIndex = checkpointIndex
            runtime.race.finishEligible = checkpointIndex === map.checkpoints.length
          }
        } else if (Math.hypot(px - map.finish.position.x, pz - map.finish.position.z) <= map.finish.radius) {
          finished = true
          const final = Math.max(0, (now - startTime) / 1000)
          runtime.race.elapsedTime = final
          runtime.race.finalTime = final
          runtime.race.finished = true
          runtime.race.phase = 'finished'
          callbacksRef.current.onFinish(final)
        }

        const elapsed = Math.max(0, (now - startTime) / 1000)
        if (!finished) runtime.race.elapsedTime = elapsed

        runtime.vehicle.position = { x: px, y: chassisY, z: pz }
        runtime.vehicle.rotation = { x: pitch, y: yaw, z: roll }
        runtime.vehicle.forward = { x: fx, y: 0, z: fz }
        runtime.vehicle.velocity = { x: fx * speed, y: 0, z: fz * speed }
        runtime.vehicle.speed = Math.abs(speed)
        runtime.vehicle.throttle = throttle
        runtime.vehicle.brake = brake
        runtime.vehicle.steering = steering
        runtime.vehicle.grounded = wheelRuntime.some((w) => w.grounded)
        runtime.vehicle.surfaceType = surface
        runtime.vehicle.collision = { active: Boolean(collisionObject), objectId: collisionObject }
        runtime.vehicle.chassis = { height: chassisY, pitch, roll }
        runtime.vehicle.wheels = wheelRuntime

        if (now - lastUiPush > 90) {
          callbacksRef.current.onTick(runtime.race.elapsedTime, Math.abs(speed), checkpointIndex, surface)
          lastUiPush = now
        }
      }

      tempForward.set(Math.sin(yaw), 0, -Math.cos(yaw))
      desiredCamera.set(px - tempForward.x * 8.5, chassisY + 5.3, pz - tempForward.z * 8.5)
      camera.position.lerp(desiredCamera, 1 - Math.exp(-5.1 * dt))
      cameraTarget.set(px + tempForward.x * 1.8, chassisY + 1.0, pz + tempForward.z * 1.8)
      camera.lookAt(cameraTarget)
      camera.getWorldDirection(tempForward)

      renderer.render(scene, camera)
      runtime.scene.renderFrame += 1
      runtime.world.renderFrame = runtime.scene.renderFrame
      runtime.scene.renderer = renderer.capabilities.isWebGL2 ? 'webgl2' : 'webgl'
      runtime.scene.canvasVisible = renderer.domElement.isConnected && renderer.domElement.clientWidth > 0 && renderer.domElement.clientHeight > 0
      runtime.scene.visibleVehicleIds = [vehicle.id]
      runtime.scene.visibleWheelCount = vehicleVisual.wheels.length
      runtime.scene.visibleTerrain = terrain.visible
      runtime.world.visibleMapObjectCount = 1 + map.checkpoints.length + 1 + map.obstacles.length
      runtime.camera.position = { x: camera.position.x, y: camera.position.y, z: camera.position.z }
      runtime.camera.target = { x: cameraTarget.x, y: cameraTarget.y, z: cameraTarget.z }
      runtime.camera.forward = { x: tempForward.x, y: tempForward.y, z: tempForward.z }
      runtime.camera.followedVehicleId = vehicle.id
      runtime.camera.vehicleVisible = true
    }

    animation = requestAnimationFrame(animate)

    return () => {
      disposed = true
      cancelAnimationFrame(animation)
      ro.disconnect()
      // BAD_2: keydown listener is accidentally retained between race sessions.
      window.removeEventListener('keyup', onKeyUp)
      renderer.dispose()
      terrainGeo.dispose()
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose()
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material]
          mats.forEach((m) => m.dispose())
        }
      })
      if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement)
      runtime.scene.canvasVisible = false
      runtime.scene.visibleVehicleIds = []
      runtime.scene.visibleWheelCount = 0
      runtime.scene.visibleTerrain = false
      runtime.camera.followedVehicleId = null
      runtime.camera.vehicleVisible = false
    }
  }, [map, vehicle, stats, raceId])

  return <div ref={mountRef} className="absolute inset-0" aria-label="3D offroad race scene" />
}
