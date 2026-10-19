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
您是一位经验丰富的 Web 开发人员和游戏设计师，任务是使用 HTML5、JavaScript 和 Three.js 库（用于渲染 3D 图形）创建一个功能齐全的交互式 3D 战舰（海战）游戏。该游戏为单人游戏，玩家将与 AI 对手进行对抗。AI 对手必须实现为一个智能体，它通过使用特定模型“openrouter/horizon-beta”查询 OpenRouter API 来做出决策。游戏应完全在浏览器中运行，除了对 OpenRouter 的外部 API 调用之外，无需任何服务器端依赖。请按照以下详细要求逐步构建游戏。您的输出应为完整的游戏源代码，结构为一个包含嵌入式 CSS 和 JavaScript 的单个 HTML 文件。请确保代码注释清晰、模块化，并在适当的地方（例如，API 故障）包含错误处理。在最终确定游戏版本之前，请务必在 Chrome 等现代浏览器中进行全面测试。#### 1. 游戏概述和规则 - **核心玩法**：战舰是一款回合制策略游戏，在两个 10x10 的棋盘上进行（每位玩家一个棋盘）。玩家将战舰放置在自己的棋盘上，并轮流猜测对手棋盘上的坐标来“击中”或“未击中”对方的战舰。率先击沉所有对手战舰的玩家获胜。 - **战舰**：每位玩家拥有 5 艘战舰： - 航母：5 个单位长 - 战列舰：4 个单位长 - 巡洋舰：3 个单位长 - 潜艇：3 个单位长 - 驱逐舰：2 个单位长 - **放置**：战舰可以水平或垂直放置，但不能重叠或超出棋盘范围。 - **回合**：人类玩家先开始。每个回合中，玩家选择对手棋盘上的一个棋格。结果：“命中”（如果目标区域有船）、“未命中”（目标区域为空）或“击沉”（如果目标区域内有船）。- **获胜条件**：击沉所有5艘敌方船只。- **3D可视化**：使用Three.js以3D形式渲染游戏：- 两个独立的类似海洋的网格（例如，蓝色水面）分别代表玩家和对手的棋盘，在3D场景中并排或上下排列。- 船只以3D模型形式呈现（简单的几何体，例如长方体或每种船只类型的基本网格）。- 视觉效果：命中/未命中时产生爆炸或涟漪效果，船只击沉时产生动画效果。- 摄像机控制：允许使用Three.js的OrbitControls进行环绕/缩放。- **用户界面元素**：叠加2D HTML元素，用于显示状态消息、回合指示器、重新开始按钮和船只放置界面。 #### 2. 技术栈和设置 - **HTML5 结构**： - 使用 `<canvas>` 元素作为 Three.js 渲染器。 - 包含按钮、模态框或可拖动元素，用于舰船放置和游戏操作输入。 - **Three.js 集成**： - 通过 CDN 加载 Three.js：`<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>`。- 包含 OrbitControls：下载或使用 CDN 获取 `OrbitControls.js`（例如，来自 Three.js 示例）。- 场景设置：创建场景、摄像机（PerspectiveCamera）、渲染器（WebGLRenderer）和灯光（AmbientLight + DirectionalLight）。- 网格：将每个 10x10 网格表示为带有网格纹理或细分网格的 PlaneGeometry。使用 Group 对象来管理玩家和对手棋盘。- 舰船模型：使用 BoxGeometry 或 CylinderGeometry 来创建舰船，并添加材质（例如，MeshStandardMaterial）。使其可通过光线投射进行选择。- 交互：使用光线投射实现鼠标点击以选择网格单元格或放置舰船。- **JavaScript 模块**：- 将代码组织成函数/类：GameBoard 类用于网格管理，Ship 类用于舰船对象，AIPlayer 类用于 AI 逻辑。- 状态管理：跟踪游戏阶段（设置、进行中、结束）、当前回合、命中/未命中历史记录。- **外部依赖项**： - Three.js（如上所述）。 - OpenRouter API：使用 Fetch API 发送 HTTP 请求。您需要一个 API 密钥——假设它在代码中以常量形式提供（例如，`const API_KEY = 'your-openrouter-api-key-here';`）。妥善处理速率限制和错误（例如，如果 API 失败，则回退到随机 AI 移动）。 - 不使用其他库；尽可能保持原生 JavaScript 代码。 #### 3. 游戏阶段和实现细节 - **阶段 1：设置（舰船放置）**： - 玩家：交互式放置——将舰船显示为可拖动的 3D 模型。允许通过键盘（例如，'R' 键）旋转（水平/垂直）。验证放置（无重叠，在边界内）。使用射线投射捕捉到网格单元格。 - AI 玩家：自动在其网格上随机（但有效）放置舰船。不向玩家显示。 - 用户界面：模态框或侧边栏，包含“放置”按钮“舰船”指令。按钮用于确认放置并开始游戏。 - **第二阶段：游戏玩法（回合制）**： - 人类回合：点击对手的3D网格攻击一个格子。添加攻击动画（例如，弹丸或爆炸）。更新视觉效果：红色表示命中，白色表示未命中。如果可以，播放音效（使用HTML5音频）。 - AI回合：人类回合结束后，触发AI决定下一步行动。 - AI逻辑：AI是一个基于OpenRouter的LLM代理。在每个回合中，向API发送一个提示，描述当前的游戏状态（例如，之前的行动、命中/未命中、基于命中情况已知的舰船位置）。 - 提示结构：编写一个详细的提示，例如：``` 你是一个经验丰富的战舰AI，正在与人类玩家对战。棋盘是10x10（AJ行，1-10列）。你的目标是高效地击沉所有人类舰船。当前状态： - 你的舰船：[列出位置，但不要显示——AI知道自己的位置]。 - 已知的人类舰船命中情况：[列出坐标]命中次数]。- 已知未命中人类舰船：[列出未命中点的坐标]。- 被击沉的人类舰船：[数量或类型（如果知道）]。建议你的下一次攻击坐标（例如，“A5”）。优先选择狩猎模式（随机智能猜测）还是击杀模式（攻击相邻目标）。请简要解释您的理由。``` - API 调用：使用 POST 请求https://openrouter.ai/api/v1/chat/co完成 `，模型为“openrouter/horizon-beta”。 - 请求头：`{ 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' }` - 请求体：`{ model: 'openrouter/horizon-beta', messages: [{ role: 'user', content: prompt }] }` - 解析响应：从 API 的文本响应中提取建议的坐标（例如，使用正则表达式查找类似“A5”的模式）。 - 回退：如果 API 失败或响应无效，则默认使用一个随机的未使用坐标。 - AI 移动后更新游戏状态和视觉效果。 - **阶段 3：游戏结束**： - 检测胜负：检查所有船只是否都被击沉。 - 显示消息：“你赢了！”或“AI 赢了！”，并带有重新开始按钮。 - 制作胜利动画（例如，烟花或击沉所有可见船只）。 #### 4. AI代理细节 - **智能等级**：使用LLM（逻辑逻辑模型）使AI“智能”——它应该根据命中情况追踪可能的舰船位置（例如，如果B2被击中，则攻击B1/B3/C2）。 - **状态追踪**：为AI维护一个内部棋盘表示（一个二维数组，用于表示其自身的舰船和攻击历史）。 - **提示优化**：保持提示简洁，避免令牌限制。在每个提示中包含游戏规则以提供上下文。 - **伦理提示**：确保AI公平游戏；禁止作弊（例如，它不应该知道人类舰船的位置）。 #### 5. 视觉和音频增强 - **3D效果**： - 水：使用带有波浪模拟的纹理平面（如果可能，使用简单的正弦波顶点着色器）。 - 命中：爆炸效果使用粒子系统（使用Three.js Points或自定义粒子系统）。 - 摄像机：默认视图显示两个棋盘；允许用户环绕观察。 - **音频**：可选 – 通过 `<audio>` 标签添加免费音效，用于击中/未击中/沉没（音效来源为公共领域，例如http://freesound.org ，但需嵌入URL）。- **响应式设计**：使用窗口大小调整处理程序使画布能够全屏适应。#### 6. 错误处理和测试 - 处理无效移动（例如，重新攻击一个单元格）。- API 错误：记录到控制台并回退到随机移动。- 性能：优化至 60FPS；使用 requestAnimationFrame for 循环。- 测试：确保跨浏览器兼容性。测试极端情况，例如所有船只同时沉没、无效放置等。#### 7. 最终输出要求 - 以单个 HTML 文件交付：`<html><head>...</head><body><canvas id="game"></canvas><script>...</script></body></html>`。- 添加注释解释关键部分。- 假设 API 密钥为占位符；指导用户替换它。- 使游戏引人入胜且精良——目标是达到演示版质量。

## 冲突处理与必要运行补充

- 上述 `{system_prompt}` 的工程技术栈优先级高于 `{user_prompt}` 中“仅原生 JavaScript / 不使用其他库”的描述。因此 `repo/` 使用 React 19 + TypeScript + Vite + Tailwind CSS；五款均保留标准源码入口和独立构建工程。
- `{user_prompt}` 对“单个 HTML 文件”的要求落实到每款最终交付：`final/<product>/index.html` 为单文件游戏入口，CSS 与应用代码内联；Three.js r128 与 OrbitControls 按原 Prompt 从 CDN 加载，OpenRouter 为唯一业务 API 调用。
- 原 Prompt 中 OpenRouter 请求 URL 的文字存在截断，实际产品按同一意图使用 `https://openrouter.ai/api/v1/chat/completions`。
- AI 只可读取它通过真实攻击公开获得的玩家命中、未命中和击沉信息，不得读取玩家隐藏舰位；API 失败、超时、非 2xx 或坐标无效时回退到公平本地狩猎/追击 AI。
- 为避免直接打开最终 HTML 时出现纯黑屏，若 Three.js、OrbitControls 或 WebGL 不可用，页面必须显示可见启动错误与重载操作，不得静默失败。

## 必需 DOM

- `canvas#game`
- `#hud`
- `#placementPanel`
- `#gameOverModal`
- `[data-testid="status-message"]`
- `[data-testid="turn-indicator"]`
- `[data-testid="ship-list"]`
- `[data-testid="ship-item"]`
- `[data-testid="orientation-indicator"]`
- `[data-testid="rotate-btn"]`
- `[data-testid="confirm-placement"]`
- `[data-testid="randomize-placement"]`
- `[data-testid="restart-btn"]`
- `[data-testid="api-status"]`
- `[data-testid="player-board-label"]`
- `[data-testid="enemy-board-label"]`

## 状态接口

```js
window.__game.getState()
window.__playerBoard.getState()
window.__enemyBoard.getState()
window.__placement.getState()
window.__aiPlayer.getState()
window.__effects.getState()
window.__three.getState()
window.__scene
window.__camera
window.__renderer
```

### `window.__game.getState()` 至少返回

```js
{
  ready: boolean,
  phase: 'setup' | 'playing' | 'ended',
  turn: 'human' | 'ai' | null,
  inputLocked: boolean,
  winner: 'human' | 'ai' | null,
  sessionId: string | number,
  fleetSpec: [{ id, type, name, length }],
  humanAttackCount: number,
  aiAttackCount: number,
  statusMessage: string,
  lastAction: null | { actor, row, col, coordinate, result, shipId },
  apiStatus: string,
  pendingAIRequests: number,
  frameCount: number
}
```

### 棋盘状态至少返回

```js
{
  owner: 'player' | 'enemy',
  size: 10,
  origin: { x, y, z },
  cellSize: number,
  ships: [{
    id, type, name, length,
    orientation: 'horizontal' | 'vertical' | null,
    start: { row, col } | null,
    cells: [{ row, col }],
    hits: [{ row, col }],
    sunk: boolean,
    confirmed: boolean,
    revealed: boolean,
    meshVisible: boolean,
    meshObjectId: number | string | null
  }],
  cells: [{ row, col, shipId, attacked, result, markerObjectId }],
  attackHistory: [{ row, col, coordinate, result, shipId }],
  shipsRemaining: number,
  totalHits: number,
  occupiedCellCount: number
}
```

### 放置状态至少返回

```js
{
  selectedShipId: string | null,
  orientation: 'horizontal' | 'vertical',
  draggingShipId: string | null,
  placedShipIds: string[],
  remainingShipIds: string[],
  previewCells: [{ row, col }],
  previewValid: boolean,
  invalidReason: string | null,
  canConfirm: boolean,
  lastPlacementResult: object | null
}
```

### AI 状态至少返回

```js
{
  mode: 'hunt' | 'target' | 'kill',
  knownHits: string[],
  knownMisses: string[],
  sunkShips: string[],
  targetQueue: string[],
  attackHistory: string[],
  knowledgeBoard: string[][],
  lastPrompt: string,
  lastRawResponse: string | null,
  lastChosenCoordinate: string | null,
  lastDecisionSource: string | null,
  lastError: string | null,
  fallbackCount: number,
  apiConfigured: boolean,
  requestTimeoutMs: number,
  pendingRequestCount: number,
  activeSessionId: string | number
}
```

### 效果与 Three.js 状态至少返回

```js
window.__effects.getState() // activeEffects、markers、sinkAnimations、endEffects
window.__three.getState()   // frameCount、canvas、camera、controls、boardGroups、lights、对象计数
```

这些字段必须与 `window.__scene`、`window.__camera`、`window.__renderer` 和真实棋盘对象一致；所有返回值必须来自当前实时运行状态，不得使用固定值、模拟值或与画面无关的影子状态。

其中 `window.__enemyBoard.getState()` 必须遵守战争迷雾：敌舰未击沉时不得返回其隐藏 `start`、完整 `cells`、真实 `orientation`、按舰船归属整理的 `hits`，或通过 `shipId` 暴露命中格属于哪一艘舰；只允许返回玩家已经通过真实攻击公开的命中/未命中/击沉结果。舰船击沉后才可公开该舰完整占格、方向和身份。
