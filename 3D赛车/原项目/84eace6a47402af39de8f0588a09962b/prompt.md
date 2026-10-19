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
Сделай симулятор offroad 3D гонок с видом от третьего лица с меню и разными авто с системой подвески. С одиночным режимом на время с разными картами и получением монет и покупкой и прокачкой машин. Сделай все полностью рабочим

---

## 必要玩法补充

游戏应提供从主菜单进入计时赛和车库的完整流程。计时赛流程依次完成车辆选择、地图选择、比赛加载、实际驾驶、有效完赛和结果结算；玩家在完成或退出比赛后能够返回主菜单，并可再次开始新比赛。

游戏至少提供两辆可识别且驾驶特性不同的越野车辆。开始时至少有一辆可用车辆，并至少有一辆能够使用金币购买的未拥有车辆。未拥有车辆不能直接参赛；购买后应在当前运行会话中保持拥有并可以参赛。不同车辆的质量、动力、制动、转向、抓地或悬挂参数中至少有一项不同，且差异应真实影响驾驶表现。

每辆车应具有真实工作的车轮悬挂。车轮与高低不平地形接触时，悬挂会分别压缩和回弹，并影响车身高度、俯仰或侧倾。车辆不能穿过地面或实体障碍。越野表面、坡度或地形起伏应对车辆速度、抓地或姿态产生实际影响。

游戏至少提供两张可选择的越野地图。不同地图应具有不同的可驾驶路线、地形高度、障碍、出生点、检查点或终点布局，不能只更换名称或背景颜色。每张地图都必须拥有有效出生区域、按顺序通过的路线进度和终点。只有按有效顺序完成路线并抵达终点才算完赛，直接接近终点或漏过必要路线进度不能提前结算。

计时赛为单人模式，不设置参与排名或比赛结算的 AI 与联网对手。比赛开始后计时才累计，完赛后计时停止，并显示本次车辆、地图和最终用时。未完成或中途退出不发放完赛奖励；每场有效比赛只发放一次正数金币奖励。

玩家应能使用键盘驾驶。`W` 或方向键上用于加速，`S` 或方向键下用于制动并在低速后倒车，`A`/`D` 或方向键左右用于转向。车辆应连续加速、减速和转向，具有惯性，不能按键瞬移。第三人称摄像机从车辆后上方平滑跟随，比赛画面持续显示玩家车辆。

车库应显示金币、车辆拥有状态、价格和升级。玩家金币足够时可以购买未拥有车辆，余额不足时不得购买；同一车辆不能重复扣款。至少提供一种可以购买的车辆升级。升级应改变对应车辆的真实性能或悬挂参数，不能只改变等级文字或进度条。金币、已购车辆和已购升级在当前运行会话内以及场景切换后保持有效；不额外要求跨浏览器重载保存。

新比赛开始时应重置本场车辆姿态、速度、计时、路线进度和上场结果，同时保留金币、车辆拥有状态与升级。多次进入或退出比赛不得累积重复的动画循环、输入处理或奖励结算。

## 公开只读运行状态接口

为便于读取 Canvas 或 WebGL 场景中的实时状态，项目必须提供以下公开只读接口。这些接口不得改变玩法、视觉效果、用户界面或游戏逻辑；所有返回值必须来自当前真实游戏对象，不得使用固定值、模拟值或与画面无关的状态。接口调用不得触发移动、完赛、发奖、购车、升级或任何其他状态变化。

所有坐标均使用游戏真实世界坐标。位置对象采用 `{ x: number, y: number, z: number }`。所有数组只返回当前实际存在的对象，不返回隐藏、不可见或与当前场景无关的替代对象。

### DOM 结构

- React 挂载节点：`id="root"`
- 主菜单：`id="main-menu"`
- 车辆选择界面：`id="vehicle-select"`
- 地图选择界面：`id="map-select"`
- 车库界面：`id="garage"`
- 比赛界面：`id="race-screen"`
- 结果界面：`id="result-screen"`
- 真实比赛画布：`data-testid="game-canvas"`
- 主菜单开始入口：`data-testid="start-race-btn"`
- 主菜单车库入口：`data-testid="garage-btn"`
- 车辆条目：`data-testid="vehicle-card"`，并使用 `data-vehicle-id` 标识真实车辆
- 选择车辆按钮：`data-testid="select-vehicle-btn"`，并使用 `data-vehicle-id`
- 购买车辆按钮：`data-testid="buy-vehicle-btn"`，并使用 `data-vehicle-id`
- 从车辆选择继续：`data-testid="vehicle-continue-btn"`
- 地图条目：`data-testid="map-card"`，并使用 `data-map-id` 标识真实地图
- 选择地图按钮：`data-testid="select-map-btn"`，并使用 `data-map-id`
- 开始计时赛按钮：`data-testid="start-time-trial-btn"`
- 升级按钮：`data-testid="upgrade-btn"`，并使用 `data-vehicle-id` 和 `data-upgrade-id`
- 可见金币值：`data-testid="credits-value"`
- 比赛计时：`data-testid="race-timer"`
- 结果最终时间：`data-testid="final-time"`
- 结果奖励：`data-testid="result-reward"`
- 结果返回主菜单：`data-testid="result-menu-btn"`
- 结果再次比赛：`data-testid="result-retry-btn"`
- 车库返回主菜单：`data-testid="garage-back-btn"`
- 车辆选择返回主菜单：`data-testid="vehicle-select-back-btn"`
- 地图选择返回车辆选择：`data-testid="map-select-back-btn"`
- 比赛中退出到主菜单：`data-testid="race-exit-btn"`

同一车辆或地图的条目、按钮及状态接口必须使用相同稳定 ID。页面上不得放置隐藏的替代按钮、重复 ID 或与真实玩法无关的交互副本。

### `window.__game.getState()`

返回全局实时状态：

```ts
{
  ready: boolean,
  gameState: 'menu' | 'vehicle_select' | 'map_select' | 'garage' | 'loading' | 'racing' | 'result',
  credits: number,
  selectedVehicleId: string | null,
  selectedMapId: string | null,
  currentRaceId: string | null,
  result: null | {
    raceId: string,
    vehicleId: string,
    mapId: string,
    finalTime: number,
    reward: number
  }
}
```

`credits` 必须与界面显示及车库经济状态一致。每次新比赛的 `currentRaceId` 都应变化。

### `window.__garage.getState()`

返回车辆、拥有状态、价格和升级的真实状态：

```ts
{
  credits: number,
  selectedVehicleId: string | null,
  vehicles: Array<{
    id: string,
    name: string,
    owned: boolean,
    selected: boolean,
    price: number,
    stats: {
      mass: number,
      power: number,
      braking: number,
      steering: number,
      grip: number,
      maxSpeed: number,
      suspension: number
    },
    upgrades: Array<{
      id: string,
      name: string,
      level: number,
      cost: number,
      affectedStat: 'power' | 'braking' | 'steering' | 'grip' | 'maxSpeed' | 'suspension'
    }>
  }>
}
```

价格与升级成本为非负有限数。升级后的 `stats` 必须返回实际用于车辆物理的当前值。

### `window.__world.getState()`

返回地图目录和当前真实世界状态：

```ts
{
  maps: Array<{ id: string, name: string }>,
  currentMap: null | {
    id: string,
    name: string,
    spawn: { position: {x:number,y:number,z:number}, forward: {x:number,y:number,z:number} },
    finish: { position: {x:number,y:number,z:number}, radius: number },
    checkpoints: Array<{
      id: string,
      index: number,
      position: {x:number,y:number,z:number},
      radius: number
    }>,
    terrain: {
      minHeight: number,
      maxHeight: number,
      surfaceTypes: string[]
    },
    obstacles: Array<{
      id: string,
      position: {x:number,y:number,z:number},
      radius: number
    }>,
    obstacleCount: number
  },
  visibleMapObjectCount: number,
  renderFrame: number
}
```

`checkpoints` 按有效通过顺序返回，终点不作为隐藏的首个检查点。`renderFrame` 来自真实渲染循环。

### `window.__race.getState()`

返回当前计时赛的真实状态：

```ts
{
  raceId: string | null,
  mode: 'time_trial',
  phase: 'idle' | 'loading' | 'running' | 'finished',
  playerCount: number,
  competitorCount: number,
  vehicleId: string | null,
  mapId: string | null,
  elapsedTime: number,
  finalTime: number | null,
  finished: boolean,
  currentCheckpointIndex: number,
  passedCheckpointIds: string[],
  finishEligible: boolean,
  reward: number,
  rewardGranted: boolean
}
```

`elapsedTime` 和 `finalTime` 使用秒。检查点只能按地图声明顺序推进，同一检查点不得重复推进进度。

### `window.__vehicle.getState()`

返回玩家当前真实车辆的物理与悬挂状态：

```ts
{
  id: string | null,
  position: {x:number,y:number,z:number},
  rotation: {x:number,y:number,z:number},
  forward: {x:number,y:number,z:number},
  velocity: {x:number,y:number,z:number},
  speed: number,
  throttle: number,
  brake: number,
  steering: number,
  grounded: boolean,
  surfaceType: string,
  collision: { active: boolean, objectId: string | null },
  chassis: { height: number, pitch: number, roll: number },
  wheels: Array<{
    id: string,
    position: {x:number,y:number,z:number},
    contactPoint: {x:number,y:number,z:number} | null,
    grounded: boolean,
    suspensionCompression: number,
    suspensionTravel: number
  }>,
  appliedStats: {
    mass: number,
    power: number,
    braking: number,
    steering: number,
    grip: number,
    maxSpeed: number,
    suspension: number
  }
}
```

输入量使用 `-1` 到 `1` 或 `0` 到 `1` 的连续数值。`wheels` 必须对应场景中实际渲染和参与接触计算的车轮。

### `window.__camera.getState()`

返回比赛摄像机真实状态：

```ts
{
  mode: 'third_person',
  position: {x:number,y:number,z:number},
  target: {x:number,y:number,z:number},
  forward: {x:number,y:number,z:number},
  followedVehicleId: string | null,
  vehicleVisible: boolean
}
```

摄像机位置和目标必须来自当前实际渲染摄像机，并随被跟随车辆更新。

### `window.__scene.getState()`

返回真实渲染场景摘要：

```ts
{
  renderer: 'webgl' | 'webgl2',
  canvasVisible: boolean,
  canvasWidth: number,
  canvasHeight: number,
  renderFrame: number,
  visibleVehicleIds: string[],
  visibleWheelCount: number,
  visibleTerrain: boolean
}
```

该接口只描述当前实际呈现的 WebGL 场景；所有字段必须来自当前真实渲染状态，读取接口本身不得改变游戏状态。
