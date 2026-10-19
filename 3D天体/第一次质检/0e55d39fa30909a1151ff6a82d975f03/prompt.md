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
Act as an expert 3D game developer and full-stack software agent. Your goal is to build a web-based 3D physics mini-clone of "Universe Sandbox" using the Three.js library. 

Implement the entire application inside ONE single integrated codebase with the following architecture:

1. MAIN MENU &amp; SCENARIOS:

- Start with a sleek, dark sci-fi main menu UI overlay with a "Play" button.

- Clicking "Play" opens a Scenario Selection screen with two options:

A) "Solar System": Spawns a central glowing Sun and at least 3-4 planet meshes (Earth, Mars, Jupiter) rotating on realistic orbital paths.

B) "Custom Sandbox": Starts in a completely empty 3D space scene.

2. INTERACTIVE SANDBOX UI (Bottom Toolbar):

- Create an overlay toolbar at the bottom of the canvas with the following tools:

- "Spawn Object" Button: Dropdown to select either "Real Planet" (Earth/Mars preset texture/color) or "Procedural Planet" (Random neon color, random scale, and rough displacement/relief map).

- "Spawn Star" Button: Places a massive glowing star at the click position.

- "Settings Gear" (System Controls): Opens a side panel to adjust selected object's parameters: Average Temperature, Rotation Speed, and Orbital Velocity.

3. 3D PHYSICS ENGINE:

- Implement basic orbital mechanics or attractive gravity vectors so spawned planets can actually orbit around the stars/Sun instead of flying away.

- Mouse controls: Allow camera orbiting and zooming using OrbitControls.

- Clicking in "Spawn mode" places the selected space body directly into the 3D world at the mouse cursor intersection plane.

Ensure the code is robust, fully functional, optimized for smooth 60 FPS, and renders beautifully inside the local environment preview. Do not stop until the entire system works end-to-end.

## Local direct-play convenience

Each game directory may also include a `play.html` convenience entry that can be opened directly for local play without starting the development server. It must be a generated/self-contained derivative of the same canonical `src/` application and must not introduce a separately maintained game implementation or alternate gameplay code path.

## Supplemental interaction rules

- Clicking a visible celestial body selects that production body for the Settings Gear and side panel. Settings edits apply only to the currently selected body and remain associated with that body when selection changes and later returns.
- Camera orbit/zoom gestures and toolbar interactions must not accidentally place celestial bodies. A single completed placement gesture creates at most one body.
- Returning to the menu and entering a scenario again starts a fresh world without stale selection or spawn state. Resizing the browser keeps the canvas, renderer, and camera projection synchronized.
- Procedural Planet 随机生成的颜色必须呈现明显霓虹色特征——其 HSV 饱和度（Saturation）和明度（Value）均不得低于 0.55。
- Spawn Star 生成的恒星质量必须严格高于同场景中所有普通行星（bodyType=planet）的质量。
- 产品性能目标为稳定 60 FPS（单帧预算 16.67ms），渲染循环与物理模拟必须在代表性天体负载（4–16 个可见天体）下持续满足此帧预算。

## Public read-only state interfaces

To make Canvas/WebGL runtime state observable, provide the read-only interfaces below. They must not alter gameplay, UI, rendering, camera behavior, spawning, selection, or physics. Every returned value must be a JSON-serializable snapshot derived from the current production DOM, active Three.js scene/Object3D instances, materials, camera, OrbitControls, WebGLRenderer, and simulation. These interfaces are observational only and do not expose control or mutation operations.

Implementation freedom is preserved: orbital motion may use force integration, an analytic orbit, or a hybrid; star glow may use emissive material, halo/sprite, light, bloom, or combinations; procedural relief may use displaced geometry, displacement/normal/bump maps, or shader noise. Report the real technique in use.

All identifiers, enum values, and field names below are case-sensitive.

### 0. Required DOM contract

The following elements must exist as real interactive DOM elements:

- `id="mainMenu"`
- `data-testid="play-btn"`
- `id="scenarioSelect"`
- `data-testid="solar-system-btn"`
- `data-testid="custom-sandbox-btn"`
- `id="gameScreen"`
- Three.js renderer canvas: `data-testid="space-canvas"`
- `id="sandboxToolbar"`
- `data-testid="spawn-object-btn"`
- `data-testid="spawn-object-select"`
- `data-testid="spawn-star-btn"`
- `data-testid="object-settings-btn"`
- `id="objectSettingsPanel"`
- `data-testid="selected-object-name"`
- `data-testid="temperature-slider"`
- `data-testid="rotation-speed-slider"`
- `data-testid="orbital-velocity-slider"`
- `data-testid="object-settings-close"`
- `data-testid="menu-btn"`

The preset selector must include exact option values `earth`, `mars`, and `procedural`.

### 1. Global application state

Provide `window.__game.getState()` returning:

```json
{
  "ready": true,
  "gameState": "menu | scenario_select | playing",
  "scenario": "solar_system | custom_sandbox | null",
  "elapsedTime": 0,
  "toolbarVisible": false,
  "spawnMode": "idle | planet | star",
  "selectedObjectId": null,
  "bodyCount": 0,
  "planetCount": 0,
  "starCount": 0,
  "canvas": { "width": 0, "height": 0, "clientWidth": 0, "clientHeight": 0 },
  "performance": {
    "animationRunning": true,
    "frameCount": 0,
    "averageFps": 0,
    "lastFrameDeltaMs": 0
  }
}
```

`ready` 表示应用已完成启动初始化，此时 UI 处理器、渲染器、相机和控制器应均已就绪。 Counts must match the physical bodies returned by `window.__universe.getState()`. Numeric values must remain finite during normal use.

### 2. Universe, body, rendering, and physics state

Provide `window.__universe.getState()` returning:

```json
{
  "gravityEnabled": true,
  "gravitationalConstant": 0,
  "simulationTime": 0,
  "physicsStepCount": 0,
  "orbitModel": "gravity | analytic | hybrid",
  "bodies": [
    {
      "id": "string",
      "name": "string",
      "bodyType": "star | planet",
      "preset": "sun | earth | mars | jupiter | procedural | custom_star",
      "position": { "x": 0, "y": 0, "z": 0 },
      "velocity": { "x": 0, "y": 0, "z": 0 },
      "acceleration": { "x": 0, "y": 0, "z": 0 },
      "rotation": { "x": 0, "y": 0, "z": 0 },
      "mass": 0,
      "radius": 0,
      "averageTemperature": 0,
      "rotationSpeed": 0,
      "orbitalVelocity": 0,
      "parentStarId": null,
      "distanceToParent": null,
      "orbiting": false,
      "meshVisible": true,
      "appearance": {
        "color": "#000000",
        "textureKey": null,
        "hasTexture": false,
        "materialTypes": [],
        "emissiveIntensity": 0,
        "reliefTechnique": "none | geometry_displacement | displacement_map | normal_map | bump_map | shader_noise",
        "reliefStrength": 0,
        "glowMechanisms": [],
        "hasLightSource": false
      },
      "mesh": {
        "uuid": "string",
        "objectType": "Mesh | Group | Object3D",
        "geometryType": "string | null",
        "vertexCount": 0,
        "worldPosition": { "x": 0, "y": 0, "z": 0 },
        "worldScale": { "x": 1, "y": 1, "z": 1 }
      },
      "procedural": null
    }
  ]
}
```

For each procedural planet, `procedural` is a live record:

```json
{
  "seed": "string | number",
  "scale": 1,
  "color": "#RRGGBB",
  "displacementStrength": 0,
  "roughness": 0,
  "vertexRadiusVariance": 0
}
```

Body IDs are unique and stable for each body's lifetime. `mesh` and `appearance` describe the associated live render object. `distanceToParent` is the current 3D distance to `parentStarId`. Velocity, acceleration, orbital velocity, simulation time, and physics-step values must reflect the application's real orbit model rather than placeholder zeros.

### 3. Spawn and placement state

Provide `window.__spawner.getState()` returning:

```json
{
  "mode": "idle | planet | star",
  "selectedPreset": "earth | mars | procedural | null",
  "pendingPlacement": false,
  "placementPlane": {
    "normal": { "x": 0, "y": 1, "z": 0 },
    "constant": 0
  },
  "cursorIntersection": null,
  "lastPlacement": null,
  "lastSpawnedBodyId": null,
  "placementCount": 0
}
```

`cursorIntersection` and `lastPlacement`, when present, are real world coordinates from the active camera ray and the reported placement plane. `placementCount` 记录通过生产放置路径成功创建天体的累计总次数。

### 4. Selection and settings state

Provide `window.__selection.getState()` returning:

```json
{
  "selectedObjectId": null,
  "selectedObjectType": null,
  "settingsOpen": false
}
```

Provide `window.__settings.getState()` returning:

```json
{
  "panelOpen": false,
  "selectedObjectId": null,
  "averageTemperature": 0,
  "rotationSpeed": 0,
  "orbitalVelocity": 0
}
```

Selection state, global state, settings state, visible labels/controls, and the production body must refer to the same selected object. Control changes must update that production body.

### 5. Camera and OrbitControls state

Provide `window.__camera.getState()` returning:

```json
{
  "cameraType": "PerspectiveCamera | OrthographicCamera",
  "controlsType": "OrbitControls",
  "enabled": true,
  "position": { "x": 0, "y": 0, "z": 0 },
  "target": { "x": 0, "y": 0, "z": 0 },
  "distance": 0,
  "azimuthAngle": 0,
  "polarAngle": 0,
  "minDistance": 0,
  "maxDistance": 0,
  "domElementMatchesCanvas": true,
  "projectionMatrix": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "projectionMatrixInverse": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "matrixWorld": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "matrixWorldInverse": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
```

The matrices are the active camera's current Three.js matrices (`Matrix4.elements`, column-major) after world/projection matrices are updated. `distance` 表示相机到当前轨道目标点的距离；`azimuthAngle` 和 `polarAngle` 表示当前轨道视角的方位角和极角。OrbitControls uses the renderer canvas as its DOM element.

### 6. Renderer state

Provide `window.__renderer.getState()` returning:

```json
{
  "webgl": true,
  "contextType": "webgl | webgl2",
  "canvasWidth": 0,
  "canvasHeight": 0,
  "clientWidth": 0,
  "clientHeight": 0,
  "pixelRatio": 1,
  "animationRunning": true,
  "frameCount": 0,
  "averageFps": 0,
  "lastFrameDeltaMs": 0,
  "drawCalls": 0,
  "triangles": 0,
  "sceneBodyMeshCount": 0
}
```

Values come from the actual WebGLRenderer, canvas, animation loop, scene traversal, and `renderer.info` where applicable. `sceneBodyMeshCount` counts one real render root per physical body, not decorative scene objects. The product performance target remains smooth 60 FPS; this interface must report actual measured performance rather than a fabricated constant, and animation/simulation must keep progressing without a persistent freeze under a modest body count.
