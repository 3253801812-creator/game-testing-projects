// @ts-nocheck
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const G = 0.12
const MAX_BODIES = 48
const SOFTENING = 1.0

const dom = {
  mainMenu: document.querySelector('#mainMenu'),
  scenarioSelect: document.querySelector('#scenarioSelect'),
  gameScreen: document.querySelector('#gameScreen'),
  canvasHost: document.querySelector('#canvasHost'),
  playBtn: document.querySelector('[data-testid="play-btn"]'),
  solarBtn: document.querySelector('[data-testid="solar-system-btn"]'),
  customBtn: document.querySelector('[data-testid="custom-sandbox-btn"]'),
  menuBtn: document.querySelector('[data-testid="menu-btn"]'),
  scenarioBack: document.querySelector('#scenarioBack'),
  toolbar: document.querySelector('#sandboxToolbar'),
  spawnObjectBtn: document.querySelector('[data-testid="spawn-object-btn"]'),
  spawnObjectSelect: document.querySelector('[data-testid="spawn-object-select"]'),
  spawnStarBtn: document.querySelector('[data-testid="spawn-star-btn"]'),
  settingsBtn: document.querySelector('[data-testid="object-settings-btn"]'),
  settingsPanel: document.querySelector('#objectSettingsPanel'),
  settingsClose: document.querySelector('[data-testid="object-settings-close"]'),
  selectedName: document.querySelector('[data-testid="selected-object-name"]'),
  selectedType: document.querySelector('#selectedObjectType'),
  temperatureSlider: document.querySelector('[data-testid="temperature-slider"]'),
  rotationSlider: document.querySelector('[data-testid="rotation-speed-slider"]'),
  orbitalSlider: document.querySelector('[data-testid="orbital-velocity-slider"]'),
  temperatureValue: document.querySelector('#temperatureValue'),
  rotationValue: document.querySelector('#rotationValue'),
  orbitalValue: document.querySelector('#orbitalValue'),
  orbitalHelp: document.querySelector('#orbitalHelp'),
  scenarioTitle: document.querySelector('#scenarioTitle'),
  bodyStatus: document.querySelector('#bodyStatus'),
  placementHint: document.querySelector('#placementHint')
}

const appState = {
  ready: false,
  gameState: 'menu',
  scenario: null,
  elapsedTime: 0
}

const performanceState = {
  animationRunning: false,
  frameCount: 0,
  averageFps: 0,
  lastFrameDeltaMs: 0,
  startedAt: performance.now()
}

const universeState = {
  gravityEnabled: true,
  gravitationalConstant: G,
  simulationTime: 0,
  physicsStepCount: 0,
  orbitModel: 'gravity',
  bodies: []
}

const spawnerState = {
  mode: 'idle',
  selectedPreset: null,
  pendingPlacement: false,
  placementPlane: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
  cursorIntersection: null,
  lastPlacement: null,
  lastSpawnedBodyId: null,
  placementCount: 0
}

const selectionState = {
  selectedObjectId: null,
  settingsOpen: false
}

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x01030a)
scene.fog = new THREE.FogExp2(0x01030a, 0.0019)

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1200)
camera.position.set(0, 34, 54)

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.12
renderer.domElement.dataset.testid = 'space-canvas'
renderer.domElement.setAttribute('aria-label', '3D space simulation canvas')
renderer.domElement.tabIndex = 0
dom.canvasHost.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enabled = false
controls.enableDamping = true
controls.dampingFactor = 0.06
controls.minDistance = 7
controls.maxDistance = 260
controls.target.set(0, 0, 0)
controls.update()

scene.add(new THREE.AmbientLight(0x263752, 0.58))

const decorativeGroup = new THREE.Group()
const orbitGuideGroup = new THREE.Group()
scene.add(decorativeGroup)
scene.add(orbitGuideGroup)

const starFieldGeometry = new THREE.BufferGeometry()
const starFieldCount = 1800
const starPositions = new Float32Array(starFieldCount * 3)
for (let i = 0; i < starFieldCount; i += 1) {
  const r = 150 + Math.random() * 650
  const theta = Math.random() * Math.PI * 2
  const phi = Math.acos(2 * Math.random() - 1)
  starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
  starPositions[i * 3 + 1] = r * Math.cos(phi)
  starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
}
starFieldGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
const starField = new THREE.Points(
  starFieldGeometry,
  new THREE.PointsMaterial({ color: 0xb8dcff, size: 0.48, sizeAttenuation: true, transparent: true, opacity: 0.86 })
)
decorativeGroup.add(starField)

const placementMarker = new THREE.Mesh(
  new THREE.RingGeometry(0.7, 0.95, 64),
  new THREE.MeshBasicMaterial({ color: 0x67e8f9, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false })
)
placementMarker.rotation.x = -Math.PI / 2
placementMarker.visible = false
placementMarker.userData.decorative = true
decorativeGroup.add(placementMarker)

const raycaster = new THREE.Raycaster()
const pointerNdc = new THREE.Vector2()
let pointerDown = null
let idCounter = 0
let nameCounters = { earth: 0, mars: 0, jupiter: 0, procedural: 0, custom_star: 0 }

function cloneVec3(v) {
  return { x: finite(v.x), y: finite(v.y), z: finite(v.z) }
}

function finite(value) {
  return Number.isFinite(value) ? value : 0
}

function round(value, digits = 5) {
  const scale = 10 ** digits
  return Math.round(finite(value) * scale) / scale
}

function worldPointFromPointer(event) {
  const rect = renderer.domElement.getBoundingClientRect()
  if (!rect.width || !rect.height) return null
  pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(pointerNdc, camera)
  const point = new THREE.Vector3()
  const hit = raycaster.ray.intersectPlane(spawnerState.placementPlane, point)
  return hit ? point : null
}

function makeId(prefix) {
  return `${prefix}-shared`
}

function makeGlowTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(128, 128, 5, 128, 128, 128)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.08, 'rgba(255,245,190,.96)')
  gradient.addColorStop(0.25, 'rgba(255,170,62,.42)')
  gradient.addColorStop(0.62, 'rgba(255,90,20,.10)')
  gradient.addColorStop(1, 'rgba(255,90,20,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 256, 256)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

const glowTexture = makeGlowTexture()

function makePlanetTexture(kind) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const ctx = canvas.getContext('2d')

  if (kind === 'earth') {
    const ocean = ctx.createLinearGradient(0, 0, 0, 512)
    ocean.addColorStop(0, '#163d6d')
    ocean.addColorStop(0.55, '#0b69a7')
    ocean.addColorStop(1, '#082d62')
    ctx.fillStyle = ocean
    ctx.fillRect(0, 0, 1024, 512)
    const land = ['#4f8f4e', '#6e9c57', '#8ca15d', '#3f7c49']
    for (let i = 0; i < 72; i += 1) {
      ctx.beginPath()
      ctx.ellipse(
        Math.random() * 1024,
        58 + Math.random() * 396,
        15 + Math.random() * 78,
        8 + Math.random() * 35,
        Math.random() * Math.PI,
        0,
        Math.PI * 2
      )
      ctx.globalAlpha = 0.76 + Math.random() * 0.18
      ctx.fillStyle = land[Math.floor(Math.random() * land.length)]
      ctx.fill()
    }
    ctx.globalAlpha = 1
    for (let i = 0; i < 34; i += 1) {
      ctx.beginPath()
      ctx.ellipse(Math.random() * 1024, Math.random() * 512, 30 + Math.random() * 120, 3 + Math.random() * 9, 0, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,.24)'
      ctx.fill()
    }
  } else if (kind === 'mars') {
    const base = ctx.createLinearGradient(0, 0, 0, 512)
    base.addColorStop(0, '#d87442')
    base.addColorStop(0.52, '#aa4728')
    base.addColorStop(1, '#6e2b22')
    ctx.fillStyle = base
    ctx.fillRect(0, 0, 1024, 512)
    for (let i = 0; i < 130; i += 1) {
      ctx.beginPath()
      ctx.arc(Math.random() * 1024, Math.random() * 512, 3 + Math.random() * 20, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(65,21,18,${0.08 + Math.random() * 0.24})`
      ctx.fill()
    }
  } else {
    const bands = ['#ddbc98', '#b87b58', '#efd5ad', '#a9674b', '#e6c69d', '#c58b68']
    let y = 0
    let band = 0
    while (y < 512) {
      const h = 25 + Math.random() * 44
      ctx.fillStyle = bands[band % bands.length]
      ctx.fillRect(0, y, 1024, h)
      y += h
      band += 1
    }
    ctx.beginPath()
    ctx.ellipse(742, 322, 92, 36, -0.08, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(149,55,39,.72)'
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = THREE.RepeatWrapping
  texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy())
  return texture
}

function makeProceduralGeometry(radius, seed, displacementStrength) {
  const geometry = new THREE.SphereGeometry(radius, 48, 32)
  const position = geometry.attributes.position
  const vector = new THREE.Vector3()
  let minRadius = Infinity
  let maxRadius = -Infinity
  for (let i = 0; i < position.count; i += 1) {
    vector.fromBufferAttribute(position, i)
    const a = Math.sin(vector.x * 4.7 + seed)
    const b = Math.sin(vector.y * 5.3 - seed * 0.61)
    const c = Math.cos(vector.z * 4.1 + seed * 0.23)
    const detail = Math.sin((vector.x + vector.z) * 10.7 + seed * 1.77) * 0.34
    const noise = a * b * c * 0.76 + detail * 0.24
    const displacedRadius = radius * (1 + noise * displacementStrength)
    vector.normalize().multiplyScalar(displacedRadius)
    position.setXYZ(i, vector.x, vector.y, vector.z)
    minRadius = Math.min(minRadius, displacedRadius)
    maxRadius = Math.max(maxRadius, displacedRadius)
  }
  geometry.computeVertexNormals()
  position.needsUpdate = true
  return { geometry, vertexRadiusVariance: maxRadius - minRadius }
}

function createOrbitGuide(radius) {
  const points = []
  for (let i = 0; i < 160; i += 1) {
    const angle = (i / 160) * Math.PI * 2
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const material = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.13 })
  const line = new THREE.LineLoop(geometry, material)
  line.userData.decorative = true
  orbitGuideGroup.add(line)
}

function getBodyById(id) {
  return universeState.bodies.find((body) => body.id === id) || null
}

function findNearestStar(position) {
  const stars = universeState.bodies.filter((body) => body.bodyType === 'star')
  if (!stars.length) return null
  let nearest = stars[0]
  let nearestDistance = position.distanceTo(nearest.mesh.position)
  for (let i = 1; i < stars.length; i += 1) {
    const d = position.distanceTo(stars[i].mesh.position)
    if (d < nearestDistance) {
      nearest = stars[i]
      nearestDistance = d
    }
  }
  return nearest
}

function setCircularOrbit(body, star, requestedSpeed = null) {
  if (!body || !star || body.bodyType !== 'planet') return false
  const radial = body.mesh.position.clone().sub(star.mesh.position)
  const distance = radial.length()
  if (distance <= star.radius + body.radius * 1.6) return false
  const tangent = new THREE.Vector3(-radial.z, 0, radial.x)
  if (tangent.lengthSq() < 0.0001) tangent.set(0, 0, 1)
  tangent.normalize()
  const speed = requestedSpeed ?? Math.sqrt((G * star.mass) / Math.max(distance, 0.01))
  body.velocity.copy(tangent.multiplyScalar(speed))
  body.parentStarId = star.id
  return true
}

function registerBody(body) {
  body.mesh.userData.bodyId = body.id
  body.mesh.userData.physicalBodyRoot = true
  scene.add(body.mesh)
  universeState.bodies.push(body)
  updateHud()
  return body
}

function spawnStar(p, preset = 'custom_star') {
  nameCounters[preset] = (nameCounters[preset] || 0) + 1
  const isSun = preset === 'sun'
  const radius = isSun ? 4 : 3.5 + Math.random() * 1.2
  const mass = isSun ? 1400 : 1100 + Math.random() * 180
  const temperature = isSun ? 5778 : 5600 + Math.random() * 1700
  const material = new THREE.MeshStandardMaterial({
    color: isSun ? 0xffc35a : 0xffad42,
    emissive: isSun ? 0xff8a21 : 0xff6d1c,
    emissiveIntensity: 2.7,
    roughness: 0.52,
    metalness: 0
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 56, 40), material)
  const placedPosition = new THREE.Vector3(0, 0, 0)
  mesh.position.copy(placedPosition)

  const spriteMaterial = new THREE.SpriteMaterial({
    map: glowTexture,
    color: isSun ? 0xffa42d : 0xff7c2d,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  const halo = new THREE.Sprite(spriteMaterial)
  halo.scale.set(radius * 5.6, radius * 5.6, 1)
  halo.userData.decorative = true
  mesh.add(halo)

  const light = new THREE.PointLight(0xffd5a1, 3.3, 180, 1.35)
  light.userData.decorative = true
  mesh.add(light)

  const body = registerBody({
    id: makeId(isSun ? 'sun' : 'star'),
    name: isSun ? 'Sun' : `Nova Star ${nameCounters[preset]}`,
    bodyType: 'star',
    preset,
    mass,
    radius,
    averageTemperature: temperature,
    rotationSpeed: 0.08,
    velocity: new THREE.Vector3(),
    acceleration: new THREE.Vector3(),
    parentStarId: null,
    mesh,
    textureKey: null,
    reliefTechnique: 'none',
    reliefStrength: 0,
    glowMechanisms: ['emissive_material', 'sprite_halo', 'point_light'],
    hasLightSource: true,
    procedural: null,
    selectionHalo: null
  })

  for (const candidate of universeState.bodies) {
    if (candidate.bodyType === 'planet' && !candidate.parentStarId && candidate.velocity.lengthSq() < 0.0025) {
      const nearest = findNearestStar(candidate.mesh.position)
      if (nearest) setCircularOrbit(candidate, nearest)
    }
  }
  return body
}

function spawnPlanet(preset, position) {
  nameCounters[preset] = (nameCounters[preset] || 0) + 1
  let radius = 1
  let mass = 1
  let averageTemperature = 288
  let rotationSpeed = 0.8
  let name = 'Planet'
  let material
  let geometry
  let textureKey = null
  let reliefTechnique = 'none'
  let reliefStrength = 0
  let procedural = null

  if (preset === 'earth') {
    radius = 1.15
    mass = 1
    averageTemperature = 288
    rotationSpeed = 1.05
    name = nameCounters.earth === 1 && appState.scenario === 'solar_system' ? 'Earth' : `Earth ${nameCounters.earth}`
    const texture = makePlanetTexture('earth')
    material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.78, metalness: 0.03 })
    geometry = new THREE.SphereGeometry(radius, 48, 32)
    textureKey = 'generated-earth-canvas'
  } else if (preset === 'mars') {
    radius = 0.84
    mass = 0.45
    averageTemperature = 210
    rotationSpeed = 0.97
    name = nameCounters.mars === 1 && appState.scenario === 'solar_system' ? 'Mars' : `Mars ${nameCounters.mars}`
    const texture = makePlanetTexture('mars')
    material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.92, metalness: 0.01 })
    geometry = new THREE.SphereGeometry(radius, 48, 32)
    textureKey = 'generated-mars-canvas'
  } else if (preset === 'jupiter') {
    radius = 2.55
    mass = 7.5
    averageTemperature = 165
    rotationSpeed = 1.7
    name = nameCounters.jupiter === 1 ? 'Jupiter' : `Jupiter ${nameCounters.jupiter}`
    const texture = makePlanetTexture('jupiter')
    material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.74, metalness: 0.01 })
    geometry = new THREE.SphereGeometry(radius, 56, 36)
    textureKey = 'generated-jupiter-canvas'
  } else {
    const seed = Math.random() * 10000
    radius = 0.72 + Math.random() * 1.45
    mass = Math.max(0.28, radius ** 3 * 0.65)
    averageTemperature = 140 + Math.random() * 740
    rotationSpeed = -1.4 + Math.random() * 2.8
    name = `Procedural ${nameCounters.procedural}`
    const color = new THREE.Color().setHSL(Math.random(), 0.76, 0.53)
    const ds = 0
    const displacementStrength = ds
    const result = makeProceduralGeometry(radius, seed, displacementStrength)
    geometry = result.geometry
    material = new THREE.MeshStandardMaterial({
      color,
      emissive: color.clone().multiplyScalar(0.13),
      emissiveIntensity: 0.25,
      roughness: 0.68 + Math.random() * 0.2,
      metalness: 0.08
    })
    reliefTechnique = 'geometry_displacement'
    reliefStrength = displacementStrength
    procedural = {
      seed: round(seed, 5),
      scale: round(radius, 5),
      color: `#${color.getHexString().toUpperCase()}`,
      displacementStrength: round(displacementStrength, 6),
      roughness: round(material.roughness, 5),
      vertexRadiusVariance: round(result.vertexRadiusVariance, 6)
    }
  }

  const mesh = new THREE.Mesh(geometry, material)
  const placedPosition = new THREE.Vector3(0, 0, 0)
  mesh.position.copy(placedPosition)
  const body = registerBody({
    id: makeId('planet'),
    name,
    bodyType: 'planet',
    preset,
    mass,
    radius,
    averageTemperature,
    rotationSpeed,
    velocity: new THREE.Vector3(),
    acceleration: new THREE.Vector3(),
    parentStarId: null,
    mesh,
    textureKey,
    reliefTechnique,
    reliefStrength,
    glowMechanisms: [],
    hasLightSource: false,
    procedural,
    selectionHalo: null
  })

  const nearest = findNearestStar(position)
  if (nearest) setCircularOrbit(body, nearest)
  return body
}

function applyTemperatureAppearance(body) {
  const material = body.mesh.material
  if (!(material instanceof THREE.MeshStandardMaterial)) return
  if (body.bodyType === 'star') {
    const t = Math.min(1, Math.max(0, (body.averageTemperature - 2500) / 9000))
    const warm = new THREE.Color(0xff5a1f)
    const cool = new THREE.Color(0xc9e4ff)
    const color = warm.lerp(cool, t)
    material.color.copy(color.clone().lerp(new THREE.Color(0xffffff), 0.18))
    material.emissive.copy(color)
    material.emissiveIntensity = 2.2 + t * 1.2
  } else if (body.averageTemperature > 700) {
    const heat = Math.min(1, (body.averageTemperature - 700) / 7000)
    material.emissive.setHSL(0.08 - heat * 0.08, 0.9, 0.34)
    material.emissiveIntensity = heat * 0.7
  } else if (body.preset !== 'procedural') {
    material.emissive.set(0x000000)
    material.emissiveIntensity = 0
  }
}

function selectBody(id) {
  if (selectionState.selectedObjectId === id) {
    syncSettingsUi()
    return
  }
  const previous = getBodyById(selectionState.selectedObjectId)
  if (previous?.selectionHalo) {
    previous.mesh.remove(previous.selectionHalo)
    previous.selectionHalo.geometry.dispose()
    previous.selectionHalo.material.dispose()
    previous.selectionHalo = null
  }

  const body = getBodyById(id)
  selectionState.selectedObjectId = body ? body.id : null

  if (body) {
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(body.radius * 1.16, 22, 14),
      new THREE.MeshBasicMaterial({ color: 0x67e8f9, wireframe: true, transparent: true, opacity: 0.24, depthWrite: false })
    )
    halo.userData.selectionHalo = true
    body.mesh.add(halo)
    body.selectionHalo = halo
    dom.settingsBtn.disabled = false
  } else {
    dom.settingsBtn.disabled = true
    closeSettings()
  }
  syncSettingsUi()
}

function openSettings() {
  const body = getBodyById(selectionState.selectedObjectId)
  if (!body) return
  selectionState.settingsOpen = true
  dom.settingsPanel.classList.remove('hidden')
  dom.settingsPanel.setAttribute('aria-hidden', 'false')
  syncSettingsUi()
}

function closeSettings() {
  selectionState.settingsOpen = false
  dom.settingsPanel.classList.add('hidden')
  dom.settingsPanel.setAttribute('aria-hidden', 'true')
}

function syncSettingsUi() {
  const body = getBodyById(selectionState.selectedObjectId)
  if (!body) {
    dom.selectedName.textContent = 'No selection'
    dom.selectedType.textContent = '—'
    dom.temperatureValue.textContent = '0 K'
    dom.rotationValue.textContent = '0.00 rad/s'
    dom.orbitalValue.textContent = '0.00 u/s'
    dom.orbitalSlider.disabled = true
    dom.orbitalHelp.textContent = 'Select an orbiting planet.'
    return
  }

  dom.selectedName.textContent = body.name
  dom.selectedType.textContent = body.bodyType
  dom.temperatureSlider.value = String(Math.max(50, Math.min(12000, body.averageTemperature)))
  dom.rotationSlider.value = String(Math.max(-3, Math.min(3, body.rotationSpeed)))
  dom.orbitalSlider.value = String(Math.max(0, Math.min(8, body.velocity.length())))
  dom.temperatureValue.textContent = `${Math.round(body.averageTemperature)} K`
  dom.rotationValue.textContent = `${body.rotationSpeed.toFixed(2)} rad/s`
  dom.orbitalValue.textContent = `${body.velocity.length().toFixed(2)} u/s`

  const canEditOrbit = body.bodyType === 'planet' && Boolean(getBodyById(body.parentStarId))
  dom.orbitalSlider.disabled = !canEditOrbit
  dom.orbitalHelp.textContent = canEditOrbit ? 'Tangential speed around the bound star.' : body.bodyType === 'star' ? 'Stars are fixed gravity anchors in this sandbox.' : 'This planet is not currently bound to a star.'
}

function setSpawnMode(mode, preset = null) {
  spawnerState.mode = mode
  spawnerState.selectedPreset = mode === 'planet' ? preset : null
  spawnerState.pendingPlacement = mode !== 'idle'
  if (mode === 'idle') {
    spawnerState.cursorIntersection = null
    placementMarker.visible = false
    dom.placementHint.classList.add('hidden')
  } else {
    dom.placementHint.textContent = mode === 'star'
      ? 'Spawn mode: Star · click the orbital plane to place'
      : `Spawn mode: ${preset} · click the orbital plane to place`
    dom.placementHint.classList.remove('hidden')
  }
  dom.spawnObjectBtn.classList.toggle('active', mode === 'planet')
  dom.spawnStarBtn.classList.toggle('star-active', mode === 'star')
}

function disposeObject(root) {
  root.traverse((child) => {
    if (child.geometry) child.geometry.dispose()
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material]
      for (const material of materials) {
        if (material.map && material.map !== glowTexture) material.map.dispose()
        material.dispose()
      }
    }
  })
}

function clearOrbitGuides() {
  while (orbitGuideGroup.children.length) {
    const child = orbitGuideGroup.children.pop()
    if (child.geometry) child.geometry.dispose()
    if (child.material) child.material.dispose()
  }
}

function clearWorld() {
  physicsAccumulator = 0
  selectBody(null)
  closeSettings()
  dom.settingsBtn.disabled = true
  setSpawnMode('idle')
  spawnerState.lastPlacement = null
  spawnerState.lastSpawnedBodyId = null
  spawnerState.placementCount = 0
  universeState.simulationTime = 0
  universeState.physicsStepCount = 0
  clearOrbitGuides()
  updateHud()
}

function resetCamera() {
  camera.position.set(0, 34, 54)
  controls.target.set(0, 0, 0)
  controls.update()
}

function setScreenState(gameState) {
  appState.gameState = gameState
  const menu = gameState === 'menu'
  const scenarios = gameState === 'scenario_select'
  const playing = gameState === 'playing'

  dom.mainMenu.classList.toggle('screen--hidden', !menu)
  dom.mainMenu.setAttribute('aria-hidden', String(!menu))
  dom.scenarioSelect.classList.toggle('screen--hidden', !scenarios)
  dom.scenarioSelect.setAttribute('aria-hidden', String(!scenarios))
  dom.gameScreen.classList.toggle('screen--hidden', !playing)
  dom.gameScreen.setAttribute('aria-hidden', String(!playing))
  dom.toolbar.classList.toggle('hidden', !playing)
  dom.toolbar.setAttribute('aria-hidden', String(!playing))
  if (!playing) closeSettings()
}

function showMainMenu() {
  clearWorld()
  appState.scenario = null
  appState.elapsedTime = 0
  setScreenState('menu')
  resetCamera()
}

function showScenarioSelect() {
  clearWorld()
  appState.scenario = null
  appState.elapsedTime = 0
  setScreenState('scenario_select')
  resetCamera()
}

function startScenario(scenario) {
  dom.settingsBtn.addEventListener('click', openSettings)
  clearWorld()
  appState.scenario = scenario
  appState.elapsedTime = 0
  setScreenState('playing')
  resetCamera()

  if (scenario === 'solar_system') {
    dom.scenarioTitle.textContent = 'Solar System'
    const sun = spawnStar(new THREE.Vector3(0, 0, 0), 'sun')
    createOrbitGuide(18)
    createOrbitGuide(24)
    createOrbitGuide(35)
    const earth = spawnPlanet('earth', new THREE.Vector3(18, 0, 0))
    const mars = spawnPlanet('mars', new THREE.Vector3(24, 0, 0))
    setCircularOrbit(earth, sun)
    setCircularOrbit(mars, sun)
    camera.position.set(0, 42, 58)
    controls.target.set(0, 0, 0)
    controls.update()
  } else {
    dom.scenarioTitle.textContent = 'Custom Sandbox'
  }
  updateHud()
}

function updateHud() {
  const count = universeState.bodies.length
  dom.bodyStatus.textContent = `${count} ${count === 1 ? 'body' : 'bodies'} · live gravity`
}

function stepPhysics(dt) {
  if (appState.gameState !== 'playing') return
  appState.elapsedTime += dt
  universeState.simulationTime += dt

  const stars = universeState.bodies.filter((body) => body.bodyType === 'star')
  const substeps = 2
  const h = dt / substeps

  for (let step = 0; step < substeps; step += 1) {
    for (const body of universeState.bodies) {
      if (body.bodyType !== 'planet') {
        body.acceleration.set(0, 0, 0)
        continue
      }
      body.acceleration.set(0, 0, 0)
      if (universeState.gravityEnabled && appState.scenario !== 'custom_sandbox') {
        for (const star of stars) {
          const delta = star.mesh.position.clone().sub(body.mesh.position)
          const distSq = delta.lengthSq() + SOFTENING
          const distance = Math.sqrt(distSq)
          if (distance > 0.0001) {
            const accelMagnitude = (G * star.mass) / distSq
            body.acceleration.addScaledVector(delta.multiplyScalar(1 / distance), accelMagnitude)
          }
        }
      }
      body.velocity.addScaledVector(body.acceleration, h)
      body.velocity.multiplyScalar(0.995)
    }
    universeState.physicsStepCount += 1
  }

  // degraded physics core: visual spin is not advanced
}

function handleCanvasPointerMove(event) {
  if (spawnerState.mode === 'idle') return
  const point = worldPointFromPointer(event)
  if (!point) {
    spawnerState.cursorIntersection = null
    placementMarker.visible = false
    return
  }
  spawnerState.cursorIntersection = cloneVec3(point)
  placementMarker.position.copy(point)
  placementMarker.visible = true
}

function handleCanvasPointerDown(event) {
  pointerDown = { x: event.clientX, y: event.clientY }
}

function handleCanvasPointerUp(event) {
  if (!pointerDown) return
  const movement = Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y)
  pointerDown = null
  if (movement > 6) return

  if (spawnerState.mode !== 'idle') {
    if (universeState.bodies.length >= MAX_BODIES) {
      setSpawnMode('idle')
      return
    }
    const point = worldPointFromPointer(event)
    if (!point) return
    const placement = cloneVec3(point)
    let body = null
    if (spawnerState.mode === 'star') {
      body = spawnStar(point, 'custom_star')
    } else if (spawnerState.mode === 'planet' && ['earth', 'mars', 'procedural'].includes(spawnerState.selectedPreset)) {
      body = spawnPlanet(spawnerState.selectedPreset, point)
    }
    if (body) {
      spawnerState.lastPlacement = placement
      spawnerState.lastSpawnedBodyId = body.id
      spawnerState.placementCount += 1
      selectBody(body.id)
      setSpawnMode('idle')
    }
    return
  }

  const rect = renderer.domElement.getBoundingClientRect()
  pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointerNdc.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(pointerNdc, camera)
  const roots = universeState.bodies.map((body) => body.mesh)
  const hits = raycaster.intersectObjects(roots, false)
  if (hits.length) {
    selectBody(hits[0].object.userData.bodyId || null)
  } else {
    selectBody(null)
  }
}

function handleCanvasPointerLeave() {
  pointerDown = null
  if (spawnerState.mode !== 'idle') {
    spawnerState.cursorIntersection = null
    placementMarker.visible = false
  }
}

function handleResize() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
}

dom.playBtn.addEventListener('click', showScenarioSelect)
dom.scenarioBack.addEventListener('click', showMainMenu)
dom.solarBtn.addEventListener('click', () => startScenario('solar_system'))
dom.customBtn.addEventListener('click', () => startScenario('custom_sandbox'))
dom.menuBtn.addEventListener('click', showMainMenu)

dom.spawnObjectBtn.addEventListener('click', () => {
  spawnerState.placementCount += 1
  const preset = dom.spawnObjectSelect.value
  if (spawnerState.mode === 'planet' && spawnerState.selectedPreset === preset) setSpawnMode('idle')
  else setSpawnMode('planet', preset)
})

dom.spawnObjectSelect.addEventListener('change', () => {
  if (spawnerState.mode === 'planet') setSpawnMode('planet', dom.spawnObjectSelect.value)
})

dom.spawnStarBtn.addEventListener('click', () => {
  if (spawnerState.mode === 'star') setSpawnMode('idle')
  else setSpawnMode('star')
})

dom.settingsBtn.addEventListener('click', () => {
  if (!selectionState.selectedObjectId) return
  if (selectionState.settingsOpen) closeSettings()
  else openSettings()
})

dom.settingsClose.addEventListener('click', closeSettings)

dom.temperatureSlider.addEventListener('input', () => {
  const body = getBodyById(selectionState.selectedObjectId)
  if (!body) return
  body.averageTemperature = Number(dom.temperatureSlider.value)
  applyTemperatureAppearance(body)
  syncSettingsUi()
})

dom.rotationSlider.addEventListener('input', () => {
  const body = getBodyById(selectionState.selectedObjectId)
  if (!body) return
  body.rotationSpeed = Number(dom.rotationSlider.value)
  syncSettingsUi()
})

dom.orbitalSlider.addEventListener('input', () => {
  const body = getBodyById(selectionState.selectedObjectId)
  if (!body || body.bodyType !== 'planet') return
  const parent = getBodyById(body.parentStarId)
  if (!parent) return
  setCircularOrbit(body, parent, Number(dom.orbitalSlider.value))
  syncSettingsUi()
})

renderer.domElement.addEventListener('pointermove', handleCanvasPointerMove)
renderer.domElement.addEventListener('pointerdown', handleCanvasPointerDown)
renderer.domElement.addEventListener('pointerup', handleCanvasPointerUp)
renderer.domElement.addEventListener('pointerleave', handleCanvasPointerLeave)
renderer.domElement.addEventListener('pointercancel', handleCanvasPointerLeave)
window.addEventListener('resize', handleResize)

function materialTypesForBody(body) {
  const types = []
  body.mesh.traverse((object) => {
    if (object.userData.selectionHalo) return
    if (!object.material) return
    const materials = Array.isArray(object.material) ? object.material : [object.material]
    for (const material of materials) {
      if (!types.includes(material.type)) types.push(material.type)
    }
  })
  return types
}

function bodyAppearanceSnapshot(body) {
  const rootMaterial = body.mesh.material
  const materials = []
  body.mesh.traverse((object) => {
    if (object.userData.selectionHalo) return
    if (!object.material) return
    const list = Array.isArray(object.material) ? object.material : [object.material]
    materials.push(...list)
  })
  let emissiveIntensity = 0
  for (const material of materials) {
    if (typeof material.emissiveIntensity === 'number') emissiveIntensity = Math.max(emissiveIntensity, material.emissiveIntensity)
  }
  const color = rootMaterial?.color instanceof THREE.Color ? `#${rootMaterial.color.getHexString().toUpperCase()}` : '#FFFFFF'
  return {
    color,
    textureKey: body.textureKey,
    hasTexture: Boolean(rootMaterial?.map),
    materialTypes: materialTypesForBody(body),
    emissiveIntensity: round(emissiveIntensity, 5),
    reliefTechnique: body.reliefTechnique,
    reliefStrength: round(body.reliefStrength, 6),
    glowMechanisms: [...body.glowMechanisms],
    hasLightSource: body.hasLightSource
  }
}

function bodyMeshSnapshot(body) {
  body.mesh.updateMatrixWorld(true)
  const worldPosition = new THREE.Vector3()
  const worldScale = new THREE.Vector3()
  body.mesh.getWorldPosition(worldPosition)
  body.mesh.getWorldScale(worldScale)
  const geometry = body.mesh.geometry || null
  return {
    uuid: body.mesh.uuid,
    objectType: body.mesh.type || 'Object3D',
    geometryType: geometry?.type || null,
    vertexCount: geometry?.attributes?.position?.count || 0,
    worldPosition: cloneVec3(worldPosition),
    worldScale: cloneVec3(worldScale)
  }
}

function bodySnapshot(body) {
  const parent = getBodyById(body.parentStarId)
  const distanceToParent = parent ? body.mesh.position.distanceTo(parent.mesh.position) : null
  return {
    id: body.id,
    name: body.name,
    bodyType: body.bodyType,
    preset: body.preset,
    position: cloneVec3(body.mesh.position),
    velocity: cloneVec3(body.velocity),
    acceleration: cloneVec3(body.acceleration),
    rotation: cloneVec3(body.mesh.rotation),
    mass: round(body.mass, 6),
    radius: round(body.radius, 6),
    averageTemperature: round(body.averageTemperature, 5),
    rotationSpeed: round(body.rotationSpeed, 6),
    orbitalVelocity: round(body.velocity.length(), 6),
    parentStarId: parent ? parent.id : null,
    distanceToParent: parent ? round(distanceToParent, 6) : null,
    orbiting: Boolean(parent && body.bodyType === 'planet' && body.velocity.length() > 0.01),
    meshVisible: Boolean(body.mesh.visible && body.mesh.parent === scene),
    appearance: bodyAppearanceSnapshot(body),
    mesh: bodyMeshSnapshot(body),
    procedural: body.procedural ? { ...body.procedural } : null
  }
}

function canvasSnapshot() {
  const canvas = renderer.domElement
  return {
    width: canvas.width,
    height: canvas.height,
    clientWidth: canvas.clientWidth,
    clientHeight: canvas.clientHeight
  }
}

function sceneBodyMeshCount() {
  let count = 0
  scene.traverse((object) => {
    if (object.userData.physicalBodyRoot === true && object.visible) count += 1
  })
  return count
}

window.__game = Object.freeze({
  getState() {
    const bodies = universeState.bodies
    return {
      ready: appState.ready,
      gameState: appState.gameState,
      scenario: appState.scenario,
      elapsedTime: round(appState.elapsedTime, 6),
      toolbarVisible: appState.gameState === 'playing' && !dom.toolbar.classList.contains('hidden'),
      spawnMode: spawnerState.mode,
      selectedObjectId: selectionState.selectedObjectId,
      bodyCount: bodies.length,
      planetCount: bodies.filter((body) => body.bodyType === 'planet').length,
      starCount: bodies.filter((body) => body.bodyType === 'star').length,
      canvas: canvasSnapshot(),
      performance: {
        animationRunning: performanceState.animationRunning,
        frameCount: performanceState.frameCount,
        averageFps: round(performanceState.averageFps, 3),
        lastFrameDeltaMs: round(performanceState.lastFrameDeltaMs, 4)
      }
    }
  }
})

window.__universe = Object.freeze({
  getState() {
    return {
      gravityEnabled: universeState.gravityEnabled,
      gravitationalConstant: universeState.gravitationalConstant,
      simulationTime: round(universeState.simulationTime, 6),
      physicsStepCount: universeState.physicsStepCount,
      orbitModel: universeState.orbitModel,
      bodies: universeState.bodies.map(bodySnapshot)
    }
  }
})

window.__spawner = Object.freeze({
  getState() {
    return {
      mode: spawnerState.mode,
      selectedPreset: spawnerState.selectedPreset,
      pendingPlacement: spawnerState.pendingPlacement,
      placementPlane: {
        normal: cloneVec3(spawnerState.placementPlane.normal),
        constant: finite(spawnerState.placementPlane.constant)
      },
      cursorIntersection: spawnerState.cursorIntersection ? { ...spawnerState.cursorIntersection } : null,
      lastPlacement: spawnerState.lastPlacement ? { ...spawnerState.lastPlacement } : null,
      lastSpawnedBodyId: spawnerState.lastSpawnedBodyId,
      placementCount: spawnerState.placementCount
    }
  }
})

window.__selection = Object.freeze({
  getState() {
    const body = getBodyById(selectionState.selectedObjectId)
    return {
      selectedObjectId: body ? body.id : null,
      selectedObjectType: body ? body.bodyType : null,
      settingsOpen: selectionState.settingsOpen
    }
  }
})

window.__settings = Object.freeze({
  getState() {
    const body = getBodyById(selectionState.selectedObjectId)
    return {
      panelOpen: selectionState.settingsOpen && !dom.settingsPanel.classList.contains('hidden'),
      selectedObjectId: body ? body.id : null,
      averageTemperature: body ? round(body.averageTemperature, 5) : 0,
      rotationSpeed: body ? round(body.rotationSpeed, 6) : 0,
      orbitalVelocity: body ? round(body.velocity.length(), 6) : 0
    }
  }
})

window.__camera = Object.freeze({
  getState() {
    camera.updateProjectionMatrix()
    camera.updateMatrixWorld(true)
    camera.matrixWorldInverse.copy(camera.matrixWorld).invert()
    return {
      cameraType: camera.type,
      controlsType: 'OrbitControls',
      enabled: controls.enabled,
      position: cloneVec3(camera.position),
      target: cloneVec3(controls.target),
      distance: round(camera.position.distanceTo(controls.target), 6),
      azimuthAngle: round(controls.getAzimuthalAngle(), 6),
      polarAngle: round(controls.getPolarAngle(), 6),
      minDistance: finite(controls.minDistance),
      maxDistance: finite(controls.maxDistance),
      domElementMatchesCanvas: controls.domElement === renderer.domElement,
      projectionMatrix: camera.projectionMatrix.elements.map(finite),
      projectionMatrixInverse: camera.projectionMatrixInverse.elements.map(finite),
      matrixWorld: camera.matrixWorld.elements.map(finite),
      matrixWorldInverse: camera.matrixWorldInverse.elements.map(finite)
    }
  }
})

window.__renderer = Object.freeze({
  getState() {
    const canvas = renderer.domElement
    return {
      webgl: true,
      contextType: renderer.capabilities.isWebGL2 ? 'webgl2' : 'webgl',
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      clientWidth: canvas.clientWidth,
      clientHeight: canvas.clientHeight,
      pixelRatio: renderer.getPixelRatio(),
      animationRunning: performanceState.animationRunning,
      frameCount: performanceState.frameCount,
      averageFps: round(performanceState.averageFps, 3),
      lastFrameDeltaMs: round(performanceState.lastFrameDeltaMs, 4),
      drawCalls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
      sceneBodyMeshCount: 0
    }
  }
})

const clock = new THREE.Clock()
const FIXED_STEP = 1 / 120
const MAX_FRAME_DELTA = 0.08
const MAX_PHYSICS_STEPS = 10
let physicsAccumulator = 0
let animationFrameId = 0
let runtimeDisposed = false
performanceState.animationRunning = true

function animate() {
  if (runtimeDisposed) return
  animationFrameId = requestAnimationFrame(animate)
  const frameDt = Math.min(clock.getDelta(), MAX_FRAME_DELTA)
  performanceState.lastFrameDeltaMs = frameDt * 1000
  performanceState.frameCount += 1
  const elapsedRealSeconds = Math.max(0.001, (performance.now() - performanceState.startedAt) / 1000)
  performanceState.averageFps = performanceState.frameCount / elapsedRealSeconds

  physicsAccumulator = Math.min(physicsAccumulator + frameDt, FIXED_STEP * MAX_PHYSICS_STEPS)
  let steps = 0
  while (physicsAccumulator >= FIXED_STEP && steps < MAX_PHYSICS_STEPS) {
    stepPhysics(FIXED_STEP)
    physicsAccumulator -= FIXED_STEP
    steps += 1
  }
  if (selectionState.settingsOpen && performanceState.frameCount % 8 === 0) syncSettingsUi()
  if (selectionState.selectedObjectId) {
    const body = getBodyById(selectionState.selectedObjectId)
    if (body?.selectionHalo) body.selectionHalo.rotation.y -= frameDt * 0.8
  }
  placementMarker.rotation.z += frameDt * 0.7
  starField.rotation.y += frameDt * 0.002
  controls.update()
  renderer.render(scene, camera)
}


function disposeRuntime() {
  if (runtimeDisposed) return
  runtimeDisposed = true
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  try { selectBody(null) } catch (_) {}
  for (const body of [...universeState.bodies]) {
    try { scene.remove(body.mesh); disposeObject(body.mesh) } catch (_) {}
  }
  universeState.bodies.length = 0
  try { clearOrbitGuides() } catch (_) {}
  try { starField.geometry.dispose(); starField.material.dispose() } catch (_) {}
  try { placementMarker.geometry.dispose(); placementMarker.material.dispose() } catch (_) {}
  try { glowTexture.dispose() } catch (_) {}
  try { controls.dispose() } catch (_) {}
  try { renderer.dispose() } catch (_) {}
}

document.addEventListener('visibilitychange', () => {
  physicsAccumulator = 0
  clock.getDelta()
})
window.addEventListener('pagehide', (event) => {
  if (!event.persisted) disposeRuntime()
}, { once: true })

setScreenState('menu')
syncSettingsUi()
updateHud()
appState.ready = true
animate()
