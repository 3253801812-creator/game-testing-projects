{system_prompt} 
You are an expert coding assistant who creates web applications from scratch. You will be using the provided tools to create and edit files in the project. For any user prompt, always try to generate a complete, functional website. Always just write the code instead of asking the user to confirm details. ## Starting from Scratch You need to create the entire project from scratch. A typical project structure includes: 1. package.json (with React, Vite, Tailwind CSS, TypeScript as dependencies) 2. vite.config.ts 3. tsconfig.json and tsconfig.node.json 4. tailwind.config.js and postcss.config.js 5. index.html (with an appropriate title, mounting a root div) 6. src/main.tsx (React entry point rendering into #root) 7. src/index.css (with @tailwind base/components/utilities directives) 8. src/ application components organized as you see fit (e.g. App.tsx, pages/, components/) ## Tech Stack - React 19 + TypeScript - Vite as build tool - Tailwind CSS for styling ## Requirements ALWAYS create complete, functional web applications. When you are finished, run npm run build to verify the build succeeds. ## Remember Use tools for all file creation and editing. Never output code directly in your response text.

{user_prompt} You are an expert video game developer and 3D graphics programmer. Create a fully playable 3D web-swinging game inspired by Spider-Man (no external assets or servers). Requirements: Use WebGL / Three.js (or vanilla WebGL) Third-person 3D camera following the player Player can swing using web physics (attach web to buildings, momentum-based swinging) Keyboard + mouse controls (WASD to move, mouse to look, click to shoot web) A city environment with recognizable landmarks (stylized, not copyrighted replicas) Collision detection with buildings and ground Basic animations for swinging and jumping Nice to have (if possible): Mini-map or compass Day/night lighting Simple HUD (speed, altitude) Do not include explanations unless explicitly asked.

## 补充玩法与运行约束

游戏应作为可持续游玩的第三人称城市摆荡体验运行，不要求额外增加任务、敌人、计分、胜负条件或剧情。核心交互是移动、跳跃、射出蛛丝、摆荡、解除蛛丝后保持动量继续飞行，并再次连接有效建筑。

主鼠标键用于向当前瞄准方向尝试连接蛛丝；只有存在真实建筑命中点时才能建立连接。蛛丝连接必须能够通过正常用户输入解除；默认使用松开主鼠标键解除连接。连接后应使用真实锚点、实际绳长、玩家已有速度和重力产生摆荡约束，不能用固定圆周动画代替物理摆荡。解除连接后应保留解除瞬间的真实速度。

玩家使用 `Space` 跳跃。玩家与地面和建筑之间必须存在真实碰撞关系，正常移动、跳跃和摆荡过程中不能直接穿过实体建筑或持续落到地面以下。

运行时不得依赖远程图片、模型、纹理、音频、字体、游戏数据接口或后端服务；可使用 npm 安装并由 Vite 打包进产物的前端库。城市、建筑、地标、玩家代理和其他视觉内容应由代码或项目内资源生成，不依赖远程资产。

“Mini-map or compass”“Day/night lighting”“Simple HUD (speed, altitude)”保持为可选增强项，不属于核心必需功能。

## DOM 契约

页面必须保留 React 挂载根节点 `id="root"`。

主 WebGL 游戏画布必须具有稳定标识：

```html
data-testid="game-canvas"
```

该画布应为真实游戏渲染画布、可见且具有非零显示尺寸。不要另外创建隐藏画布来伪造该标识。

## 公开只读状态接口

为便于读取 WebGL 场景中的实时状态，项目需要提供以下公开只读接口。这些接口不得改变玩法、视觉效果、用户界面、输入状态或游戏逻辑；所有返回值必须来自当前真实游戏对象，不得返回固定值、模拟值或与实际场景无关的替代状态。公开接口仅用于读取状态，不得提供瞬移、直接设置速度、直接设置蛛丝锚点或其他绕过正常用户交互的控制能力。

### `window.__game.getState()`

返回整体实时状态：

```ts
{
  ready: boolean,
  running: boolean,
  elapsedTime: number,
  renderer: 'webgl',
  viewport: { width: number, height: number }
}
```

- `ready`：真实场景、玩家和渲染器已完成初始化。
- `running`：主更新/渲染循环正在正常推进。
- `elapsedTime`：真实运行时间，运行过程中应持续增加。
- `viewport`：当前主游戏画布的实际显示尺寸。

### `window.__player.getState()`

返回玩家真实物理状态：

```ts
{
  position: { x: number, y: number, z: number },
  velocity: { x: number, y: number, z: number },
  grounded: boolean,
  movementState: 'idle' | 'moving' | 'jumping' | 'falling' | 'swinging',
  collider: {
    radius: number,
    height: number
  }
}
```

- `position`、`velocity` 必须来自实际用于游戏更新的玩家对象。
- `grounded` 必须反映真实地面接触状态。
- `movementState` 必须反映当前实际移动/动画状态。
- `collider` 描述实际用于碰撞的玩家碰撞体尺寸。

### `window.__camera.getState()`

返回真实第三人称渲染相机状态：

```ts
{
  mode: 'third-person',
  position: { x: number, y: number, z: number },
  target: { x: number, y: number, z: number },
  yaw: number,
  pitch: number
}
```

`position`、`target`、`yaw`、`pitch` 必须来自实际渲染相机，不能维护一套与画面无关的测试相机状态。

### `window.__web.getState()`

返回当前蛛丝与摆荡状态：

```ts
{
  attached: boolean,
  targetValid: boolean,
  anchor: { x: number, y: number, z: number } | null,
  anchorObjectId: string | null,
  ropeLength: number | null,
  distanceToAnchor: number | null,
  lineVisible: boolean,
  playerEndpoint: { x: number, y: number, z: number } | null,
  anchorEndpoint: { x: number, y: number, z: number } | null
}
```

- `targetValid` 表示当前真实瞄准方向是否存在可连接建筑命中点。
- 仅在真实连接时 `attached` 为 `true`。
- `anchor` 必须对应被命中的真实建筑表面位置，`anchorObjectId` 必须对应真实场景建筑。
- `ropeLength` 是当前摆荡约束实际使用的绳长。
- `distanceToAnchor` 根据当前玩家与锚点真实坐标计算。
- `lineVisible` 反映真实蛛丝渲染对象是否可见。
- 未连接时，与连接相关的字段应为空或 `false`。

### `window.__world.getState()`

返回城市与碰撞空间的真实状态：

```ts
{
  groundY: number,
  buildings: Array<{
    id: string,
    min: { x: number, y: number, z: number },
    max: { x: number, y: number, z: number }
  }>
}
```

- `buildings` 只包含场景中真实存在并参与渲染、碰撞或蛛丝命中的建筑体；其边界应与实际碰撞空间一致。
- 所有公开接口均只用于观察真实运行状态，不得成为改变游戏状态的控制入口。
