import fs from 'node:fs'
import path from 'node:path'

const read = (name) => fs.readFileSync(name, 'utf8')
const files = {
  html: read('index.html'),
  play: read('play.html'),
  standalone: read('standalone.html'),
  app: read('src/App.tsx'),
  game: read('src/components/GameScene.tsx'),
  types: read('src/gameTypes.ts'),
  css: read('src/index.css'),
}
const allRuntime = [files.html, files.play, files.standalone, files.app, files.game, files.css].join('\n')

const checks = [
  ['React root', files.html.includes('id="root"')],
  ['play HTML root', files.play.includes('id="root"')],
  ['play HTML mounts real app', files.play.includes('/src/main.tsx')],
  ['game canvas test id', files.game.includes('data-testid="game-canvas"')],
  ['real WebGL renderer', files.game.includes('new THREE.WebGLRenderer')],
  ['third-person PerspectiveCamera', files.game.includes('new THREE.PerspectiveCamera') && files.game.includes("mode: 'third-person'")],
  ['building raycast', files.game.includes('intersectObjects(raycastMeshes') && files.game.includes('buildingId')],
  ['mouse release detaches web', files.game.includes('onMouseUp') && files.game.includes('detachWeb()')],
  ['space jump', files.game.includes("e.code === 'Space'") && files.game.includes('jumpQueued = true')],
  ['fixed-step physics', files.game.includes('FIXED_DT') && files.game.includes('physicsStep(FIXED_DT)')],
  ['gravity', files.game.includes('velocity.y -= GRAVITY * dt')],
  ['momentum rope constraint', files.game.includes('web.ropeLength') && files.game.includes('velocity.dot(radial)') && files.game.includes('outwardSpeed')],
  ['tangential swing steering', files.game.includes('tangentWish') && files.game.includes('airAccel')],
  ['release does not synthesize launch velocity', !/detachWeb[\s\S]{0,900}velocity\.addScaledVector/.test(files.game)],
  ['building collision', files.game.includes('resolvePlayerContacts') && files.game.includes('horizontalCircleTouchesBuilding')],
  ['high-speed collision microsteps', files.game.includes('COLLISION_MICROSTEP') && files.game.includes('MAX_COLLISION_MICROSTEPS')],
  ['rope/collision coupled solver', files.game.includes('solverPass') && files.game.includes('enforceRopeConstraint()') && files.game.includes('resolvePlayerContacts')],
  ['ground collision', files.game.includes('GROUND_Y + PLAYER_HALF')],
  ['camera collision', files.game.includes('Third-person camera collision') && files.game.includes('segmentExpandedAabbHit') && files.game.includes('resolveCameraPenetration')],
  ['free vertical camera framing', files.game.includes('Math.sin(pitch) * 2.45') && files.game.includes('orbitPitch') && files.game.includes('pitch = clamp')],
  ['game API', files.game.includes('window.__game') && files.types.includes('GamePublicState')],
  ['player API', files.game.includes('window.__player') && files.types.includes('PlayerPublicState')],
  ['camera API', files.game.includes('window.__camera') && files.game.includes('camera.getWorldDirection')],
  ['web API', files.game.includes('window.__web') && files.types.includes('WebPublicState')],
  ['world API', files.game.includes('window.__world') && files.types.includes('WorldPublicState')],
  ['no write controls in public APIs', !files.game.includes('__player = Object.freeze({ set') && !files.game.includes('__web = Object.freeze({ set')],
  ['no remote runtime assets', !/https?:\/\//i.test(allRuntime)],
  ['local procedural facade texture', files.game.includes('new THREE.CanvasTexture') && files.game.includes('makeFacadeTexture')],
  ['day/night presentation', files.game.includes('setNight') && files.app.includes('KeyN')],
  ['HUD speed and altitude', files.app.includes('hud.speed') && files.app.includes('hud.altitude')],
  ['compass HUD', files.app.includes('directionTicks') && files.app.includes('hud.heading')],
  ['minimap HUD', files.app.includes('minimap-shell') && files.app.includes('playerX') && files.app.includes('playerZ')],
  ['input cleanup on focus loss', files.game.includes('clearInput') && files.game.includes('visibilitychange')],
  ['out-of-bounds reset', files.game.includes('WORLD_LIMIT') && files.game.includes('resetPlayer()')],

  // The file:// entry is audited as a real build, not as a splash-page fallback.
  ['standalone root', files.standalone.includes('id="root"')],
  ['standalone game canvas contract', files.standalone.includes('data-testid="game-canvas"')],
  ['standalone WebGL', files.standalone.includes("getContext('webgl'" )],
  ['standalone real building raycast', files.standalone.includes('rayAabb') && files.standalone.includes('targetHit=trace()')],
  ['standalone mouse release detaches', files.standalone.includes('mouseup') && files.standalone.includes('detachWeb()')],
  ['standalone real rope length', files.standalone.includes('ropeLength=Math.max(MIN_WEB_DISTANCE,d)') && files.standalone.includes('enforceRope')],
  ['standalone gravity momentum swing', files.standalone.includes('vel[1]-=GRAVITY*gscale*dt') && files.standalone.includes('out=dot(vel,radial)')],
  ['standalone tangential swing control', files.standalone.includes('SWING_STEER_ACCEL') && files.standalone.includes('tangent=sub(w,scale(radial,dot(w,radial)))')],
  ['standalone fixed 120 Hz', files.standalone.includes('FIXED_DT=1/120') && files.standalone.includes('physics(FIXED_DT)')],
  ['standalone collision', files.standalone.includes('function collide()') && files.standalone.includes('for(let pass=0;pass<3;pass++)')],
  ['standalone free vertical camera', files.standalone.includes('Math.sin(pitch)*2.45') && files.standalone.includes('-1.16,.9')],
  ['standalone optional enhancements', files.standalone.includes('DAY/NIGHT') && files.standalone.includes('CITY GRID') && files.standalone.includes('VELOCITY M/S')],
  ['standalone all read-only APIs', ['__game','__player','__camera','__web','__world'].every(k => files.standalone.includes(`window.${k}=Object.freeze`))],
]

let failed = false
for (const [name, ok] of checks) {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}`)
  if (!ok) failed = true
}

for (const required of ['package.json', 'play.html', 'standalone.html', 'vite.config.ts', 'tsconfig.json', 'tailwind.config.js', 'postcss.config.js', 'src/main.tsx']) {
  const ok = fs.existsSync(path.resolve(required))
  console.log(`${ok ? 'PASS' : 'FAIL'}  project file ${required}`)
  if (!ok) failed = true
}

if (failed) process.exit(1)
