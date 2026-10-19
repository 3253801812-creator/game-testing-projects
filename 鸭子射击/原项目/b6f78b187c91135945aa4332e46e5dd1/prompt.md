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
Ame un juego 3d unos patos que tenga una arma de pintura que se alga un botón para dispara un botón para moverse que alga bost que te disparen que alga diferente rangos como bronce oro plata y oro Ai bonito que cuando tú lo botón  que te enseña los rangos que te pida tener kills para subir tango cuando subas de rango los bots se volverán más inteligente más pro que el mundo bosque con árboles que todo tenga diseño guapo


# 补充玩法与规则

以下内容用于消除原始需求中的歧义，不改变原始游戏主题和核心目标。

1. 游戏是一个可直接游玩的实时 3D 浏览器游戏，核心战斗场景使用真实的 Canvas/WebGL 3D 渲染。允许第一人称、第三人称、俯视或其他合理的 3D 镜头设计。

2. 玩家角色应具有清晰的鸭子主题，并使用具有彩弹、颜料或喷漆视觉特征的武器。射击时应产生真实参与战斗的可见彩弹弹丸，而不是只播放按钮动画或只修改分数。

3. 页面必须提供一个屏幕上的移动按钮和一个屏幕上的射击按钮。移动按钮按下或按住时应真实改变玩家在 3D 世界中的位置。可以额外支持键盘、摇杆、鼠标或触控瞄准，但核心移动和射击不能只依赖未声明的隐藏键位。

4. 射击按钮本身必须能够用于完成基本击杀流程。如果没有独立的可见瞄准控制，射击时应自动选择当前可攻击的合理 Bot 目标或按当前朝向对可攻击目标开火，保证玩家仅通过公开的正常游戏操作可以获得击杀。

5. 敌方 Bot 是真实的战斗实体，会自主寻找或锁定玩家，并向玩家方向发射真实攻击。Bot 不能只是装饰模型或只播放射击动画。

6. 每个 Bot 被真实淘汰时只能为玩家结算一次击杀。玩家的击杀数只能由真实淘汰敌方 Bot 增加，不能通过计时、点击段位按钮或其他无关操作增加。

7. 段位至少包含三个不同层级：Bronze（青铜/Brone/Bronce 等合理本地化显示均可）、Silver（白银/Plata 等）和 Gold（黄金/Oro 等）。原始用户文本中重复出现的 “oro” 视为示例重复，不要求存在两个不同的黄金段位。允许在 Gold 之后继续增加更高段位。

8. 新的一局从最低段位 Bronze 开始。每个更高段位都有严格高于前一段位的累计击杀要求；达到下一段位要求前不能提前晋级，达到要求后一次只晋升到相邻的下一段位。

9. 段位界面必须向玩家展示全部段位、当前段位、当前击杀数，以及下一段位所需的击杀要求或剩余进度。点击段位按钮后应能看到这些信息。

10. 游戏必须持续提供足够的敌方 Bot 或合理的 Bot 补充/刷新机制，使玩家通过正常战斗能够从 Bronze 晋升到 Silver，并继续晋升到 Gold；段位系统不能因为可击杀 Bot 数量不足而成为不可达状态。晋级门槛应适合短时网页游戏体验，而不是要求不可实际完成的大量击杀。

11. 每次玩家晋升段位后，Bot 的真实战斗表现都必须提高，而不是只改变一个显示标签。可通过更高射击频率、更高瞄准精度、更高追击/移动效率等方式实现；至少一种直接影响实际战斗难度的行为应在每次晋级后真实增强。

12. 游戏世界以森林为主要环境，必须在实际 3D 场景中明显看到树木和自然环境元素。整体游戏、HUD、按钮和段位界面应具有完整、协调、有游戏感的视觉设计。


# 公开只读状态接口

为便于读取 Canvas/WebGL 场景中的实时状态，项目需要提供以下公开只读接口。这些接口不得改变玩法、视觉效果、用户界面或游戏逻辑；所有返回值必须来自当前真实游戏对象、真实战斗事件和真实渲染状态，不得使用固定值、模拟值或与画面无关的测试状态。

所有接口都只能提供 `getState()` 读取能力，不得提供设置击杀数、设置段位、传送玩家、传送 Bot、强制击杀、强制射击或其他测试控制函数。

## 0. DOM 结构

以下标识符用于保证正常 UI 可访问性和稳定交互。同一标识符只能出现一次；不得使用隐藏的替代按钮或重复元素代替真实控件。

- 游戏根节点：`id="game"`
- 主 3D 游戏 Canvas：`data-testid="game-canvas"`
- 屏幕移动按钮：`data-testid="move-btn"`
- 屏幕射击按钮：`data-testid="shoot-btn"`
- 段位按钮：`data-testid="rank-btn"`
- 段位面板：`id="rankPanel"`
- 当前段位显示：`data-testid="current-rank"`，并设置 `data-rank-id` 为当前段位稳定 ID
- 击杀/晋级进度显示：`data-testid="kills-progress"`
- 段位列表中的每个段位项：`data-testid="rank-item"`，并通过 `data-rank-id` 设置稳定段位 ID
- Bronze 段位项：`data-testid="rank-item" data-rank-id="bronze"`
- Silver 段位项：`data-testid="rank-item" data-rank-id="silver"`
- Gold 段位项：`data-testid="rank-item" data-rank-id="gold"`

如果产品额外设计了开始菜单，真正进入游戏的开始按钮使用 `data-testid="game-start-btn"`。没有开始菜单时不需要该元素。

## 1. 全局游戏状态

提供：

`window.__game.getState()`

返回当前真实游戏状态：

```ts
{
  ready: boolean,
  elapsedTime: number,
  kills: number
}
```

要求：

- `ready` 只有在主游戏 Canvas、玩家、Bot 和核心游戏循环已经可交互时才为 `true`。
- `elapsedTime` 是当前真实游戏运行时间。
- `kills` 与真实击杀结算一致，并与段位系统中的击杀数保持一致。

## 2. 3D 场景状态

提供：

`window.__scene.getState()`

返回：

```ts
{
  renderer: {
    type: "webgl" | "webgl2",
    width: number,
    height: number
  },
  camera: {
    position: { x: number, y: number, z: number },
    forward: { x: number, y: number, z: number },
    viewMatrix: number[],
    projectionMatrix: number[]
  }
}
```

要求：

- `viewMatrix` 和 `projectionMatrix` 都是当前真实 3D 相机使用的 4×4 矩阵，共 16 个有限数值。
- `renderer.width` 和 `renderer.height` 对应当前真实 Canvas 的绘制尺寸。

## 3. 玩家状态

提供：

`window.__player.getState()`

返回：

```ts
{
  id: string,
  position: { x: number, y: number, z: number },
  forward: { x: number, y: number, z: number },
  isMoving: boolean
}
```

要求：

- `position` 来自当前真实玩家 3D 对象的位置。
- 操作屏幕移动按钮时，`position` 必须随真实移动发生变化；停止移动后不得继续伪造位移。
- `forward` 表示当前玩家/武器实际使用的前向或瞄准方向。

## 4. 战斗状态

提供：

`window.__combat.getState()`

返回：

```ts
{
  activeProjectiles: Array<{
    id: string,
    ownerType: "player" | "bot",
    ownerId: string,
    position: { x: number, y: number, z: number },
    direction: { x: number, y: number, z: number }
  }>,

  recentShots: Array<{
    id: string,
    ownerType: "player" | "bot",
    ownerId: string,
    spawnedAt: number,
    origin: { x: number, y: number, z: number },
    direction: { x: number, y: number, z: number },
    lastPosition: { x: number, y: number, z: number },
    hitEntityId: string | null
  }>,

  recentHits: Array<{
    shotId: string,
    attackerType: "player" | "bot",
    attackerId: string,
    targetId: string,
    happenedAt: number
  }>,

  recentKills: Array<{
    botId: string,
    sourceShotId: string,
    creditedTo: "player",
    happenedAt: number
  }>
}
```

要求：

- `activeProjectiles` 只包含当前真实存在于战斗世界中的弹丸。
- `recentShots`、`recentHits` 和 `recentKills` 是由真实战斗过程产生的近期事件历史；历史应保留足够的最近事件，使正常运行中的射击、命中和击杀关系可以被观察，不应在事件发生后立即清空。
- `origin`、`direction`、`lastPosition`、`hitEntityId`、`sourceShotId` 等字段必须来自对应的真实弹丸和碰撞/命中结果。
- 一个真实 Bot 淘汰只产生一次对应的 `recentKills` 记录。

## 5. Bot 与 AI 状态

提供：

`window.__bots.getState()`

返回：

```ts
{
  bots: Array<{
    id: string,
    alive: boolean,
    position: { x: number, y: number, z: number },
    targetPlayer: boolean
  }>,

  difficultyProfile: {
    rankIndex: number,
    fireCooldownMs: number | null,
    aimErrorDeg: number | null,
    moveSpeed: number | null
  }
}
```

要求：

- `bots` 对应真实场景中的 Bot 实体；每个 Bot 使用稳定且唯一的 ID。
- 已淘汰且已从战斗中移除的 Bot 不得继续以 `alive: true` 参与战斗。
- `targetPlayer` 反映 Bot 当前真实 AI 是否以玩家作为战斗目标。
- `difficultyProfile` 必须是当前段位真实应用到 Bot AI 的参数，而不是只用于展示。三个可选参数中允许某些字段为 `null`，但每次晋级后至少一个实际使用的非空参数必须朝更具挑战性的方向变化：`fireCooldownMs` 变小、`aimErrorDeg` 变小或 `moveSpeed` 变大。

## 6. 段位状态

提供：

`window.__ranking.getState()`

返回：

```ts
{
  ranks: Array<{
    id: string,
    name: string,
    index: number,
    killsRequired: number
  }>,

  currentRank: {
    id: string,
    name: string,
    index: number,
    killsRequired: number
  },

  nextRank: {
    id: string,
    name: string,
    index: number,
    killsRequired: number
  } | null,

  kills: number,
  killsToNext: number
}
```

要求：

- `ranks` 至少包含稳定 ID `bronze`、`silver`、`gold`，并按 `index` 从低到高排列。
- `killsRequired` 使用累计真实击杀数作为晋级门槛；Bronze 的初始要求可以为 0，之后各段位要求必须严格递增。
- 新局的 `currentRank.id` 为 `bronze`，且初始 `kills` 为 0。
- `nextRank` 始终指向相邻的下一段位；最高段位时可以为 `null`。
- `killsToNext` 等于当前真实击杀距离下一段位门槛还差的数量；最高段位时使用 0。
- `kills` 必须与 `window.__game.getState().kills` 保持一致。
