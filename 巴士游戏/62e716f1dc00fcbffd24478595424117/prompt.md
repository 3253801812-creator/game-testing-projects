{system_prompt}
You are an expert coding assistant who creates web applications from scratch. You will be using the provided tools to create and edit files in the project.
For any user prompt, always try to generate a complete, functional website. Always just write the code instead of asking the user to confirm details.

## Starting from Scratch

You need to create the entire project from scratch. A typical project structure includes:
1. package.json (with React, Vite, Tailwind CSS, TypeScript as dependencies)
2. vite.config.ts
3. tsconfig.json and tsconfig.node.json
4. tailwind.config.js and postcss.config.js
5. index.html (with an appropriate title, mounting a root div)
6. src/main.tsx (React entry point rendering into #root)
7. src/index.css (with @tailwind base/components/utilities directives)
8. src/ application components organized as you see fit (e.g. App.tsx, pages/, components/)


## Tech Stack

- React 19 + TypeScript
- Vite as build tool
- Tailwind CSS for styling

## Requirements

ALWAYS create complete, functional web applications. When you are finished, run `npm run build` to verify the build succeeds.

## Remember

Use tools for all file creation and editing. Never output code directly in your response text.

{user_prompt}
create bus simulator game bus simulator indoesia but higher grahics than bus simulator indoesia

Build a complete single-player 3D bus-driving simulator on an Indonesia-inspired route with a polished, high-detail visual presentation. The active driving scene should contain a modeled bus with readable body depth, windows, wheels and lighting details; a paved road with solid driveable boundaries; moving traffic; volumetric roadside buildings and shelters; vegetation, furniture and regional details; route-stop markers; atmospheric lighting/fog; and both exterior and cockpit-oriented camera views.

Product requirements:

- Drive with keyboard and equivalent narrow-screen touch controls. While moving forward, W accelerates, S brakes and can transition into reverse near rest, A steers left relative to the road, and D steers right relative to the road.
- Provide a parking brake, passenger-door control, headlights, left/right indicators, horn, camera cycling, pause/resume, graphics-quality control, and route reset.
- The bus must respect solid driving-world collision boundaries. It must not pass through road-edge barriers, traffic vehicles, passenger-stop shelters, buildings, or other solid roadside structures.
- The route contains exactly three ordered passenger stops. A passenger stop completes only after the bus is inside the stop area, nearly stationary, and its doors remain open long enough for boarding. The same stop cannot complete repeatedly while the bus remains there.
- Passenger service increases the onboard/boarded counts and fare earnings and gives immediate player-facing feedback. Passenger doors remain interlocked while the bus is moving unsafely.
- Fuel decreases while the bus travels under engine power. Traffic moves independently during active play and freezes while the simulation is paused.
- Pause freezes simulation time, bus movement, and traffic movement; resume continues the same session. Reset restores the fresh route, vehicle state, fuel, passenger counts, fare earnings, and stop progress.
- Losing page focus clears held driving controls so the bus cannot remain stuck accelerating or steering.
- The graphics-quality control changes render resolution/density and render distance without resetting route progress or passenger state.
- The interface keeps speed, fuel, passenger count, next stop, route progress, status feedback, signal/door state, pause state, and camera controls readable at desktop and mobile widths.
- The environment must read as a volumetric 3D place rather than flat card layers. Roadside buildings and stop shelters should have visible depth and multi-part construction, with layered scenery and atmospheric perspective around the road.

## Evaluation Hooks

Expose the following read-only runtime observation hooks. Each `getState()` returns a fresh, serializable snapshot of the current production session. The examples below define the required fields and their normal product meanings. Values must come from the live game state; legitimate product variants may use different vehicle proportions, environment details, camera compositions, visual materials, or simulation coefficients while preserving the same bus-simulator rules.

### Core bus summary

Provide:
window.__bus.getState()

At minimum, return:

```json
{
  "phase": "menu",
  "speedKph": 0,
  "position": { "x": 0.33, "z": 20 },
  "headingDeg": 0.96,
  "doorOpen": false,
  "passengerCount": 4,
  "nextStopIndex": 0,
  "routeProgress": 0,
  "fuel": 100,
  "score": 0
}
```

`phase` follows the current product lifecycle. The remaining fields summarize the same live vehicle, passenger, route, fuel, and earnings state exposed by the more specific hooks below.

### Game lifecycle

Provide:
window.__game.getState()

At minimum, return:

```json
{
  "phase": "menu",
  "elapsed": 0,
  "paused": false,
  "missionStatus": "Ready for departure",
  "score": 0,
  "message": "Board the coach and begin the route."
}
```

`phase` uses the normal states `menu`, `playing`, `paused`, and `complete`. `elapsed` advances only during active simulation. `missionStatus`, `score`, and `message` describe the current player-facing route state.

### Vehicle and driving dynamics

Provide:
window.__vehicle.getState()

At minimum, return:

```json
{
  "id": "NLX-880",
  "type": "12m Luxury Coach",
  "position": { "x": 0.33, "z": 20 },
  "headingDeg": 0.96,
  "speedKph": 0,
  "velocity": 0,
  "throttle": 0,
  "brake": 0,
  "steering": 0,
  "gear": "D",
  "parkingBrake": false,
  "doorOpen": false,
  "headlights": false,
  "indicator": "off",
  "hornActive": false,
  "fuel": 100,
  "damage": 0,
  "odometerKm": 0,
  "wheelAngle": 0,
  "collisionCount": 0,
  "lastCollision": "none",
  "dynamics": {
    "maxForwardSpeedMps": 24.5,
    "maxReverseSpeedMps": 5.5,
    "throttleAcceleration": 10.5,
    "serviceBrakeDeceleration": 15,
    "reverseAcceleration": 6.2,
    "rollingResistance": 0.55,
    "parkingBrakeDamping": 9,
    "steeringRateDegPerSec": 28,
    "maxWheelAngleDeg": 32,
    "doorInterlockSpeedMps": 1.2,
    "boardingSpeedMps": 0.8
  }
}
```

`position`, `headingDeg`, `velocity`, `speedKph`, input fields, gear, and wheel angle describe the live production motion. `collisionCount` and `lastCollision` reflect actual road-edge, traffic, or solid-world contacts. `dynamics` exposes the active product's normal driving coefficients; these are observation data, not control methods.

### Route and passenger stops

Provide:
window.__route.getState()

At minimum, return:

```json
{
  "name": "Bandung · Kota Lama · Selatan",
  "stopCount": 3,
  "currentStopIndex": 0,
  "stops": [
    { "id": "s1", "name": "Kota Lama", "z": 45, "status": "next" },
    { "id": "s2", "name": "Pasar Raya", "z": 300, "status": "upcoming" },
    { "id": "s3", "name": "Terminal Selatan", "z": 620, "status": "upcoming" }
  ],
  "nextStopDistance": 25,
  "atStop": false,
  "completed": false,
  "earnings": 0,
  "service": {
    "stopLongitudinalHalfLength": 10.5,
    "stopLateralHalfWidth": 4.2,
    "boardingDuration": 1.25
  }
}
```

`currentStopIndex`, each stop `status`, `nextStopDistance`, `atStop`, `completed`, and `earnings` describe the active route. `service` reports the normal production stop-service geometry and boarding duration used by this product.

Provide:
window.__passengers.getState()

At minimum, return:

```json
{
  "onboard": 4,
  "capacity": 42,
  "boardedTotal": 0,
  "waitingAtNext": 7,
  "boardingProgress": 0
}
```

`boardingProgress` ranges from `0` to `1` while valid passenger service is in progress. Counts come from the same live route session.

### Traffic state

Provide:
window.__traffic.getState()

At minimum, return:

```json
{
  "count": 10,
  "density": 0.92,
  "vehicles": [
    {
      "id": "traffic-1",
      "x": -1.65,
      "z": 180,
      "speedKph": 23.04,
      "direction": -1
    }
  ]
}
```

Each traffic entry has a stable id and current production position/speed. Traffic positions advance during active play and remain frozen while the simulation is paused.

### World and collision state

Provide:
window.__world.getState()

At minimum, return:

```json
{
  "environment": "Tropical intercity corridor",
  "weather": "Sunbreak after rain",
  "timeOfDay": "16:20",
  "roadCenter": 0.33,
  "roadHalfWidth": 5.2,
  "surface": "asphalt",
  "nearStopMarkers": 1,
  "solidObstacleCount": 67,
  "collision": {
    "roadEdgeEnabled": true,
    "trafficEnabled": true,
    "solidObjectsEnabled": true,
    "busWidth": 2.55,
    "busLength": 8.9
  },
  "nearbySolidObstacles": [
    { "id": "building-2-1", "type": "building", "x": 14.3, "z": 30, "halfWidth": 3, "halfLength": 3.6 }
  ]
}
```

The world fields describe the current Indonesia-inspired environment and active road corridor. `nearbySolidObstacles` is a bounded read-only observation list of nearby production collision volumes and may change as the bus moves.

### Camera state

Provide:
window.__camera.getState()

At minimum, return:

```json
{
  "mode": "chase",
  "position": { "x": -5.4, "y": 4.7, "z": 5.8 },
  "target": { "x": 0.4, "y": 1.65, "z": 34 },
  "fov": 53,
  "near": 0.1,
  "far": 900,
  "modes": ["chase", "showcase", "cockpit", "cinematic", "stopside"]
}
```

The camera snapshot reports the live perspective composition. `mode` changes through normal player camera controls; supported modes are `chase`, `showcase`, `cockpit`, `cinematic`, and `stopside`. `showcase` is a close exterior inspection composition for normal driving and vehicle presentation. The `stopside` view is a normal exterior passenger-service composition that looks across the road toward the nearby current stop when one is close. `position`, `target`, and `fov` follow the active view.

### Input state

Provide:
window.__input.getState()

At minimum, return:

```json
{
  "pressed": [],
  "lastAction": "none",
  "lastPointerType": "mouse",
  "mobileControls": false
}
```

`pressed` contains currently held production key codes. `lastPointerType` reports the latest normal pointer source, and `mobileControls` reflects whether the narrow-screen touch driving surface is currently active.

### Renderer state

Provide:
window.__renderer.getState()

At minimum, return:

```json
{
  "backend": "WebGL",
  "contextLost": false,
  "frame": 0,
  "drawCalls": 0,
  "canvas": { "width": 0, "height": 0 },
  "quality": "cinematic",
  "pixelRatio": 1.35,
  "renderDistance": 520,
  "webglVersion": 1,
  "dynamicLighting": true,
  "fog": true,
  "antialias": true,
  "shadowsEnabled": false
}
```

Before the active renderer is available, dimensions or WebGL version may be `0`. During healthy active play, frame and draw-call counters advance, canvas dimensions describe the current render surface, and `contextLost` reflects the actual WebGL context state.

### Performance state

Provide:
window.__performance.getState()

At minimum, return:

```json
{
  "elapsed": 0,
  "tick": 0,
  "frame": 0,
  "fixedStep": 0.016666666666666666,
  "accumulator": 0,
  "maxSubSteps": 4,
  "uiUpdates": 0,
  "mounted": true
}
```

`tick` advances with fixed-step simulation updates, while `frame` follows rendering. During pause the simulation clock/tick stop even though healthy rendering may continue. `accumulator` stays bounded by the fixed-step loop.

### Settings state

Provide:
window.__settings.getState()

At minimum, return:

```json
{
  "quality": "cinematic",
  "masterVolume": 0.8,
  "pixelRatio": 1.35,
  "trafficDensity": 0.92,
  "renderDistance": 520,
  "qualityProfiles": {
    "cinematic": { "pixelRatio": 1.35, "density": 1, "renderDistance": 520 },
    "high": { "pixelRatio": 1.1, "density": 0.78, "renderDistance": 420 },
    "balanced": { "pixelRatio": 0.85, "density": 0.56, "renderDistance": 320 }
  }
}
```

The settings snapshot describes the active production graphics configuration. Changing `quality` updates the renderer profile without resetting route gameplay state.

All observation hooks are read-only. Their snapshots must describe the same live production session and remain consistent with normal visible gameplay.
