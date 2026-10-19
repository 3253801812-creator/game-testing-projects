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
3D 迷你高尔夫赛

核心技术要点：高尔夫球物理模拟、摩擦力计算、入洞判定逻辑
开发提示词：
使用 Three.js 开发 3D 迷你高尔夫游戏，功能要求：

高尔夫球发射机制（鼠标拖动控制力度 / 方向）
草地 / 沙坑物理模拟（不同场地摩擦系数差异）
入洞判定（球进入球洞触发得分结算）
杆数统计系统（最少杆数通关为目标）
本地多人对战（同场竞技比拼杆数）
道具系统（反弹垫、加速带、一杆入洞道具）
多关卡设计（3 个不同主题关卡：森林、沙漠、冰雪）
相机跟随视角（3D 跟随视角，支持视角缩放）
排行榜（单关卡最佳杆数、全关卡总杆数）

## 场地摩擦规则补充

- 沙坑必须表现为明显高于普通草地/球道的滚动阻力，球进入沙坑后应可观察到更快的速度衰减和更短的滑行距离。
- 冰雪主题若使用冰面作为可玩表面，应表现为明显低于普通草地/球道的滚动阻力，球进入后应可观察到更慢的速度衰减和更长的滑行距离。
- 不规定唯一的数值倍率；只要实际运动中能稳定观察到这些物理差异，且速度始终有限、可控即可。
- 游戏进行中必须在 HUD 持续显示球当前所在表面的实时摩擦系数，数值直接来自当前 `__ball.friction`，随表面切换同步更新。
- `currentSurface` 与 `friction` 必须反映球当前真实所在表面；不能只修改状态字段而不影响实际球速。

## 可见障碍与物理体积一致性补充

- 可玩区域内视觉上具有明显实体体积的沙丘、雪堆、岩石、冰晶等障碍不得作为可穿透的纯装饰存在。
- 这类模型若保留，必须由 `__course.obstacles` 的实体碰撞体或 `__course.terrainFeatures` 的真实地形高度/坡度参与球的运动；若没有物理对应，则应删除该模型。
- 仅位于不可到达的场外背景装饰不受此限制。

## 道具、多人和结算规则补充

- 一杆入洞道具被当前玩家拾取后进入该玩家自己的库存；玩家可通过可见控件启用它，只有该玩家下一次合法击球实际触发技能后才消耗一次库存。
- 反弹垫在球真实接触后应产生清晰、有限且与接触相关的反弹、改向或冲量效果；若产品公开了方向字段，则该效果应与公开方向保持一致，但不强制所有反弹垫都采用同一种方向模型。
- 加速带作为场上道具时，球真实接触后应沿其可见方向获得一次有限加速，速度必须保持有限并受游戏正常物理上限约束。
- 本地多人至少支持 2 名玩家在同一设备完成比赛；可以采用每杆轮换、每洞轮换或其他清晰一致的本地轮换方式。玩家成绩和道具状态必须相互隔离。
- 本地多人全部完赛后按总杆数最少确定胜者；相同最少杆数判为平局。平局结果必须清楚展示并列关系、玩家与杆数，并提供可继续操作；不要求必须跳转到独立的“本局排行榜”页面。
- 入洞后产生正向结算积分；在同一关卡、其他条件相近时，使用更少杆数完成应获得更高积分。
- 相机必须以真实 3D 透视相机跟随当前球，并通过可见缩放控件改变跟随距离；自由视角属于可选增强，不作为必需玩法。

## 排行榜规则补充

- 单关排行榜只记录已经完成该关卡的合法成绩；未完成球洞的击球过程不得产生排行榜记录。
- 同一玩家在同一关卡只保留最佳杆数；后续更差成绩不得覆盖已经保存的最佳成绩。
- 单关排行榜按杆数从少到多排序。杆数相同的记录可以并列或采用任意一致的次级排序规则，但该顺序必须稳定，刷新页面后不能无故变化；`rank` 应与页面实际展示顺序一致。
- 全关卡总排行榜仅在同一玩家已经拥有森林、沙漠、冰雪三关的合法最佳成绩后生成；`totalStrokes` 必须等于三关最佳杆数之和。
- 全关卡总排行榜按 `totalStrokes` 从少到多排序；总杆数相同的记录同样只要求采用稳定、一致的次级顺序，不规定唯一的 `achievedAt` / `playerId` tie-breaker。
- 排行榜应持久化；页面刷新后最佳成绩和稳定排序不得改变。

### 技术栈与构建验收说明

- 项目源码必须实际使用 React 19、TypeScript、Vite 和 Tailwind CSS，并由 Three.js 创建主要 3D 场景。
- Tailwind CSS 不仅需要安装和配置，源码中至少应存在实际 Tailwind utility class 用于可见页面样式。
- 交付验收会从源码重新执行 `npm run build`；不得依赖历史 `dist` 目录或旧构建产物替代本轮构建。

## 运行状态与 DOM 契约（必须实现）

以下接口提供当前游戏的实时只读状态。每次 `getState()` 返回可 JSON 序列化的独立快照，所有数值均为有限数值。

### DOM 定位契约

以下 DOM 标识仅用于稳定定位真实用户可见页面和控件，不得创建隐藏替代控件或重复标识：
未列出的增强控件可以存在；例如固定双人模式不需要额外的人数选择控件。

- 主菜单：`id="menu"`
- 关卡选择：`id="levelSelect"`
- 游戏画面：`id="gameScreen"`
- 本地多人设置：`id="multiplayerLobby"`
- 排行榜：`id="leaderboardScreen"`
- 结算界面：`id="resultScreen"`
- 开始游戏：`data-testid="start-btn"`
- 森林关卡：`data-testid="level-forest"`
- 沙漠关卡：`data-testid="level-desert"`
- 冰雪关卡：`data-testid="level-snow"`
- 本地多人入口：`data-testid="multiplayer-btn"`
- 本地多人开局：`data-testid="local-start-btn"`
- 本地多人退出：`data-testid="local-exit-btn"`
- 排行榜入口：`data-testid="leaderboard-btn"`
- 击球力度：`data-testid="shot-power"`
- 当前杆数：`data-testid="stroke-count"`
- 当前玩家：`data-testid="current-player"`
- 道具状态区：`data-testid="powerup-status"`
- 一杆入洞道具：`data-testid="powerup-hio"`
- 相机放大：`data-testid="zoom-in"`
- 相机缩小：`data-testid="zoom-out"`
- 实时摩擦系数：`data-testid="surface-friction"`
- 瞄准方向反馈：`data-testid="aim-feedback"`
- 结算后继续：`data-testid="result-next"`

### 1. 契约信息

`window.__contract.getState()` 返回：

```ts
{
  version: string,
  gameType: "3d-mini-golf",
  renderer: "threejs",
  stateSource: "live",
  hooksReady: boolean,
  hookNames: string[],
  buildId: string
}
```

### 2. 全局游戏状态

`window.__game.getState()` 返回：

```ts
{
  ready: boolean,
  gameState: "menu" | "level_select" | "local_setup" | "playing" | "hole_complete" | "tournament_complete" | "local_result" | "leaderboard",
  mode: "single" | "local_multiplayer",
  currentLevel: { id: "forest" | "desert" | "snow", name: string, theme: string, par: number } | null,
  currentHoleStrokes: number,
  totalStrokes: number,
  currentScore: number,
  totalScore: number,
  holeComplete: boolean,
  elapsedTime: number
}
```

### 3. 高尔夫球状态

`window.__ball.getState()` 返回：

```ts
{
  position: { x: number, y: number, z: number },
  velocity: { x: number, y: number, z: number },
  speed: number,
  radius: number,
  moving: boolean,
  sleeping: boolean,
  airborne: boolean,
  inHole: boolean,
  outOfBounds: boolean,
  currentSurface: "grass" | "sand" | "ice",
  friction: number,
  lastCollision: string | null,
  lastSafePosition: { x: number, y: number, z: number }
}
```

### 4. 击球状态

`window.__shot.getState()` 返回：

```ts
{
  dragging: boolean,
  canShoot: boolean,
  startScreen: { x: number, y: number } | null,
  currentScreen: { x: number, y: number } | null,
  direction: { x: number, z: number },
  power: number,
  minPower: number,
  maxPower: number,
  strokeCount: number
}
```

拖动瞄准时 `dragging`、`direction` 和 `power` 应实时变化；有效击球后球的真实速度、位置和杆数应同步变化。

### 5. 球场状态

`window.__course.getState()` 返回：

```ts
{
  levelId: "forest" | "desert" | "snow",
  name: string,
  theme: string,
  par: number,
  bounds: { minX: number, maxX: number, minZ: number, maxZ: number },
  spawn: { x: number, y: number, z: number },
  hole: { x: number, y: number, z: number, radius: number },
  surfaces: Array<{
    id: string,
    type: "grass" | "sand" | "ice",
    friction: number,
    center?: { x: number, y: number, z: number },
    bounds?: { minX: number, maxX: number, minZ: number, maxZ: number }
  }>,
  obstacles: Array<{
    id: string,
    type: string,
    position: { x: number, y: number, z: number },
    solid: boolean,
    radius?: number,
    bounds?: { minX: number, maxX: number, minZ: number, maxZ: number }
  }>,
  terrainFeatures: Array<Record<string, unknown>>,
  obstacleCount: number,
  sceneObjectCount: number,
  loaded: boolean
}
```

三关的布局、表面、出生点和球洞必须分别对应森林、沙漠和冰雪主题；若关卡包含可玩区域内的实体障碍，则其状态与真实 Three.js 模型/碰撞体必须一致。

### 6. 本地多人状态

`window.__multiplayer.getState()` 返回：

```ts
{
  enabled: boolean,
  mode: "local",
  status: "setup" | "playing" | "complete",
  playerCount: number,
  currentPlayerId: string | null,
  turnIndex: number,
  round: number,
  revision: number,
  players: Array<{
    id: string,
    name: string,
    holeStrokes: number,
    totalStrokes: number,
    finished: boolean,
    ballPosition: { x: number, y: number, z: number },
    powerupInventory: Array<{ type: "bounce_pad" | "speed_boost" | "hole_in_one", count: number }>,
    armedPowerup: "hole_in_one" | null
  }>,
  winnerId: string | null,
  tiedPlayerIds: string[]
}
```

该状态描述同一设备上的本地多人比赛。`currentPlayerId` / `turnIndex` / `round` 应反映产品当前采用的轮换策略，但不限定必须“每一杆”轮换。每名玩家的 `ballPosition` 表示其当前或最近球位快照，用于观测状态，不要求所有实现采用同一种热座保存方式。比赛中的成绩、完成状态与胜者必须来自当前页面内实际进行的本地比赛。

#### 本地多人状态隔离规则

- 不同玩家的杆数、总杆数、完成状态不得相互覆盖。
- 如果多人模式允许使用道具，则各玩家的库存与当前武装状态必须相互隔离；玩家 A 拾取或使用道具不得直接修改玩家 B 的库存或武装状态。
- 不要求为每个玩家复制一份独立的场上道具实例，也不限定每杆轮换或每洞轮换；只要求产品采用的规则前后一致、所有玩家都能真实完成比赛。

### 7. 道具状态

`window.__powerups.getState()` 返回：

```ts
{
  items: Array<{
    id: string,
    type: "bounce_pad" | "speed_boost" | "hole_in_one",
    position: { x: number, y: number, z: number },
    active: boolean,
    collected: boolean,
    direction?: { x: number, z: number }
  }>,
  inventory: Array<{ type: "bounce_pad" | "speed_boost" | "hole_in_one", count: number }>,
  activeEffect: string | null,
  lastTriggeredId: string | null,
  placingType?: string | null,
  armedType?: string | null,
  selectedPlacedId?: string | null
}
```

### 8. 相机状态

`window.__camera.getState()` 返回：

```ts
{
  mode: "follow" | "free",
  position: { x: number, y: number, z: number },
  target: { x: number, y: number, z: number },
  distance: number,
  minDistance: number,
  maxDistance: number,
  zoom: number,
  angle?: number,
  pitch?: number
}
```

### 9. 排行榜状态

`window.__leaderboard.getState()` 返回：

```ts
{
  levelBest: Record<string, Array<{
    playerId: string,
    playerName: string,
    strokes: number,
    rank: number,
    par: number,
    relativeToPar: number,
    achievedAt: number
  }>>,
  overall: Array<{
    playerId: string,
    playerName: string,
    levelStrokes: { forest: number, desert: number, snow: number },
    totalStrokes: number,
    rank: number,
    achievedAt: number
  }>,
  persisted: boolean
}
```

### 10. 运行时性能与资源状态

`window.__performance.getState()` 返回：

```ts
{
  fixedStep: number,
  accumulator: number,
  simulationTick: number,
  renderFrame: number,
  reactCommitCount: number,
  logicLoopCount: number,
  listenerCount: number,
  runtimeMountCount: number,
  runtimeCleanupCount: number,
  engineGeneration: number,
  poolStats: Record<string, { capacity: number, createdTotal: number, reused: number }>
}
```

该接口报告当前运行中的循环、挂载、监听器和资源池状态。

### 11. Three.js 运行对象

- `window.__THREE_SCENE__` 指向当前游戏实际渲染的 `THREE.Scene`。
- `window.__THREE_RENDERER__` 指向当前游戏实际使用的 `THREE.WebGLRenderer`。

场景中的球、球洞、障碍、道具和相机应与上述实时状态保持一致。
