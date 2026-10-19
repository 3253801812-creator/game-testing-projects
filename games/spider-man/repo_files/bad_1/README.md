# 2 — Skyline Thread

A fully procedural third-person web-swinging city game built with React 19, TypeScript, Vite, Tailwind CSS, and Three.js.

## Controls

- `WASD` — camera-relative movement; A/D reshape the swing plane while attached
- `Shift` — sprint / stronger swing pumping and air steering
- `Space` — jump; release early for a shorter jump
- Mouse — look
- Press / hold left mouse button — immediately shoot along the center ray; if no building is hit, holding keeps retrying as you aim, and only a real building-surface hit can attach
- Release left mouse button — detach while preserving momentum
- Mouse wheel while attached — smoothly reel the active web in / out
- `C` — switch left/right shoulder camera
- `N` — toggle day/night
- `R` — reset player to the park entrance
- `H` — open / close the full control guide
- `Esc` — release pointer lock; click the canvas to recapture it

## Gameplay / polish

- Momentum-based unilateral rope constraint using a real surface hit anchor
- Camera speed FOV, velocity look-ahead, landing kick, subtle swing roll, and building camera collision
- Ground acceleration with fast reversal braking, coyote time, jump buffering, variable jump height/apex shaping, momentum-preserving air steering, swing-plane steering, tangent pumping and controlled swing braking
- Ground and building collision with iterative rope/collision resolution
- Procedural city streets, sidewalks, animated day/night window lighting, rooftop details, park fountain, landmarks, beacons, lamps, gradient sky, stars and moon
- Procedural articulated player animation
- HUD for velocity, altitude, vertical speed, target distance, anchor status, movement state, heading, rope tension, live rope length and Momentum Flow
- Mini-map with player heading plus park / needle / stepped tower / skybridge landmarks

## Public read-only runtime state

The game exposes only the required observer APIs:

- `window.__game.getState()`
- `window.__player.getState()`
- `window.__camera.getState()`
- `window.__web.getState()`
- `window.__world.getState()`

These APIs read directly from the live game state and provide no mutation controls.

## Run

```bash
npm install
npm run dev
```

Build verification:

```bash
npm run build
```

## Play entry

The project includes a dedicated `play.html` entry that runs the exact same full game as the main page.

```bash
npm install
npm run play
```

You can also open `/play.html` while the Vite dev server is running. Production builds include `dist/play.html` and `dist/standalone.html` as first-class entries.

For direct local play without Vite, double-click `standalone.html`. `index.html` and `play.html` automatically route to it when opened with `file://`. The standalone entry implements the same core controls, collision, web physics, HUD and read-only observer APIs without external assets.
