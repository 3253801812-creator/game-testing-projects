# Skyline Thread — Game 1

A complete third-person 3D city web-swinging game built with React 19, TypeScript, Vite, Tailwind CSS, and Three.js. All city art, landmarks, character geometry, web visuals, lighting and effects are generated locally in code.

## Controls

- `WASD` — camera-relative movement.
- Mouse — free third-person yaw/pitch camera; Pointer Lock is preferred, with a normal-mouse fallback.
- `Space` — jump with jump buffering and coyote time.
- Hold primary mouse button — raycast from the real render camera and attach only when the reticle hits a real building surface.
- Release primary mouse button — detach immediately and preserve the exact release velocity.
- `Shift` — ground sprint; while swinging it increases only player-controlled tangent pumping, never radial rope thrust.
- `R` — reset to the canonical city start.
- `N` — toggle day/night lighting.

## Physics and collision

Swinging uses the player's current velocity, gravity, the real raycast hit point, and the exact player-to-anchor distance measured at attachment. The rope is a one-sided length constraint: it removes only outward radial velocity when taut, preserving tangential and inward momentum. Constraint feedback drives web tension, character pose, FOV and camera response but does not inject hidden swing velocity.

Player motion uses fixed substeps and swept collision checks against the ground and building collision space, with wall sliding, roof landing, depenetration and surface support. Air control does not truncate high-speed release momentum.

## Visual/gameplay systems

- Procedural city blocks, roads, crosswalks, sidewalks, lamps, parks and original stylized landmarks.
- Procedural articulated third-person hero with idle/move/jump/fall/swing poses.
- Web sag when slack and straightening/vibration/tension glow when loaded.
- Momentum trail, dynamic FOV, landing feedback and vertical-motion camera framing.
- Compass, speed, altitude, vertical velocity, motion state, web target/rope status and tension HUD.
- Day/night lighting and stars.

## Public read-only state

The runtime exposes the prompt-required observation interfaces only: `window.__game`, `window.__player`, `window.__camera`, `window.__web`, and `window.__world`. They report current real objects/state and do not provide mutation or test-control methods.

## Run and build

```bash
npm install
npm run play
```

Production verification:

```bash
npm run build
npm run preview:play
```

The project does not require remote images, models, textures, audio, fonts, game-data APIs or backend services at runtime.

## Direct offline HTML

`play.html` and `standalone.html` are synchronized self-contained WebGL entries for direct offline play. When `index.html` is opened with `file://`, it redirects to `play.html`; when served or built by Vite, `index.html` mounts the React application into `#root`.
