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
用 Three.js r128 构建可玩炸金花游戏，代码完整可运行：
核心：实现真人玩家与 1 名电脑玩家 1v1 对战的完整炸金花规则（双方各发 3 张牌，发牌 / 看牌 / 跟注 / 加注 / 弃牌 / 比牌，支持豹子、同花顺、金花、顺子、对子、单张牌型判定与大小比较，电脑玩家根据牌力和当前下注情况自动决策，计分 / 筹码 / 奖池系统）；
3D 视觉：程序化生成 3D 扑克牌（花色 / 点数纹理，轻微弯曲效果），绿色绒布桌面（#006400，粗糙材质），牌堆位于中央，真人玩家位于下方，电脑玩家位于上方对坐；
交互：底部玻璃态 UI（看牌 / 跟注 / 加注 / 弃牌 / 比牌按钮，悬停抬升），仅真人玩家手动操作，电脑玩家自动行动，实时显示手牌 / 牌型 / 当前注额 / 奖池 / 双方剩余筹码 / 当前行动方 / 游戏状态（等待 / 弃牌 / 比牌 / 胜利）；
动画：发牌时卡片沿路径平滑飞入（LERP 插值），看牌时牌面翻转 / 扇形展开，下注筹码飞入奖池，比牌时双方牌移动至中央并翻牌，胜利 / 淘汰时颜色反馈；
技术：透视相机 + 环境光，轻量 OrbitControls 微调视角，响应式画布适配窗口，60FPS，无外部模型。

## 补充玩法与规则


以下内容只用于消除“完整炸金花规则”中的必要歧义，不改变原始玩法目标：

- 使用一副不含大小王的标准 52 张扑克牌；同一局中任何实体牌都不得重复。
- 双方每局各获得 3 张牌。发牌完成后电脑手牌保持隐藏；真人玩家在执行“看牌”前也保持未看牌状态，看牌只改变真人玩家自己的可见牌面与牌型显示，不改变手牌内容、筹码、奖池或行动归属。
- 牌型强弱按原始 Prompt 所列顺序执行：豹子 > 同花顺 > 金花 > 顺子 > 对子 > 单张。相同牌型比较时只比较点数结构，不使用花色决定胜负；A-2-3 作为最小顺子，Q-K-A 作为最大顺子。对子先比较对子点数，再比较单张；金花和单张按三张牌从大到小逐级比较。
- 每局开始时双方各投入相同且为正数的基础注，形成初始奖池；具体基础注和加注步长可由实现自行设计，但必须在界面和真实状态中保持一致，且任何下注都必须由对应玩家筹码真实扣除并进入奖池。
- 真人玩家只能在自己的行动阶段通过界面执行看牌、跟注、加注、弃牌或比牌；如果某操作在当前阶段不合法，对应控件应禁用或操作不产生结算副作用。
- 跟注应补齐当前需要承担的下注；加注应把本轮有效注额提高到更高的合法值；弃牌立即结束本局并由对手获得当前奖池；比牌进入双方摊牌比较并结束本局。若实现对看牌玩家或比牌操作采用额外倍率/费用，该规则必须在界面当前注额、双方筹码和奖池中一致体现，不能产生隐藏扣款。
- 真人完成一个会继续牌局的有效动作后，电脑玩家应自动行动。电脑决策必须参考自己的真实牌力和当前下注情况，并且只选择当前合法动作；不能要求用户替电脑点击任何按钮。
- 结算只能发生一次。获胜方获得奖池后，奖池归零或进入明确的已结算状态，双方总筹码守恒，计分只增加一次。新一局应保留累计计分和结算后的筹码，并重置本局手牌、下注、弃牌/看牌状态和胜负状态。
- 当一方剩余筹码不足以继续正常牌局时，应进入可观察的淘汰/最终胜利状态，并出现与原始 Prompt 一致的颜色反馈；不得继续产生负筹码。
- 游戏应能连续进行多局而保持稳定；进入下一局时应清理上一局不再使用的卡牌、筹码、动画与场景资源，不应因重复开局持续叠加渲染循环、输入监听或 WebGL 资源。

## 公开只读状态接口

为便于读取 Canvas / WebGL 场景中的真实实时状态，项目需要提供以下公开只读接口。这些接口不得改变玩法、视觉效果、用户界面或游戏逻辑；所有返回值必须来自当前真实游戏对象，不得使用固定值、模拟值或与画面无关的测试状态。

### DOM 契约

- 游戏根节点：`id="root"`
- Three.js 主画布：`data-testid="game-canvas"`
- 发牌 / 新一局按钮：`data-testid="deal-btn"`
- 看牌按钮：`data-testid="peek-btn"`
- 跟注按钮：`data-testid="call-btn"`
- 加注按钮：`data-testid="raise-btn"`
- 弃牌按钮：`data-testid="fold-btn"`
- 比牌按钮：`data-testid="compare-btn"`
- 真人手牌显示：`data-testid="player-hand"`
- 真人牌型显示：`data-testid="player-hand-type"`
- 当前注额：`data-testid="current-bet"`
- 奖池：`data-testid="pot"`
- 真人剩余筹码：`data-testid="player-chips"`
- 电脑剩余筹码：`data-testid="computer-chips"`
- 真人累计得分：`data-testid="player-score"`
- 电脑累计得分：`data-testid="computer-score"`
- 当前行动方：`data-testid="turn"`
- 游戏状态：`data-testid="game-status"`

### `window.__zjh.getState()`

返回当前真实牌局状态，至少包含：

```ts
{
  ready: boolean,
  phase: 'waiting' | 'dealing' | 'player_turn' | 'computer_turn' | 'comparing' | 'round_over' | 'eliminated',
  turn: 'player' | 'computer' | null,
  round: number,
  pot: number,
  currentBet: number,
  winner: 'player' | 'computer' | null,
  outcome: null | 'fold' | 'compare' | 'elimination',
  score: {
    player: number,
    computer: number
  },
  canDeal: boolean,
  canPeek: boolean,
  canCall: boolean,
  canRaise: boolean,
  canFold: boolean,
  canCompare: boolean,
  player: {
    chips: number,
    roundBet: number,
    looked: boolean,
    folded: boolean,
    handType: null | '豹子' | '同花顺' | '金花' | '顺子' | '对子' | '单张',
    cards: Array<{
      id: string,
      rank: string,
      suit: string,
      faceUp: boolean
    }>
  },
  computer: {
    chips: number,
    roundBet: number,
    looked: boolean,
    folded: boolean,
    handType: null | '豹子' | '同花顺' | '金花' | '顺子' | '对子' | '单张',
    cards: Array<{
      id: string,
      rank: string,
      suit: string,
      faceUp: boolean
    }>
  }
}
```

其中 `cards` 必须对应当前这一局真实使用的牌；`faceUp` 表示画面中的真实朝向/可见状态。电脑的 `handType` 可以在未比牌时保持 `null`，但比牌或结算需要展示电脑手牌时必须与真实三张牌一致。


### `window.__scene.getState()`

返回当前 Three.js 活动场景的只读状态，至少包含：

```ts
{
  ready: boolean,
  threeRevision: string,
  renderer: {
    ready: boolean,
    type: string
  },
  canvas: {
    width: number,
    height: number
  },
  camera: {
    type: 'PerspectiveCamera',
    fov: number,
    near: number,
    far: number,
    aspect: number,
    position: { x: number, y: number, z: number },
    target: { x: number, y: number, z: number }
  },
  ambientLight: {
    exists: boolean,
    intensity: number
  },
  orbitControls: {
    enabled: boolean,
    target: { x: number, y: number, z: number }
  },
  table: {
    color: string,
    roughness: number,
    position: { x: number, y: number, z: number }
  },
  deck: {
    count: number,
    position: { x: number, y: number, z: number }
  },
  cards: Array<{
    id: string,
    owner: 'deck' | 'player' | 'computer' | 'compare',
    rank: string,
    suit: string,
    faceUp: boolean,
    position: { x: number, y: number, z: number },
    rotation: { x: number, y: number, z: number }
  }>,
  chips: Array<{
    id: string,
    owner: 'player' | 'computer' | 'pot',
    position: { x: number, y: number, z: number }
  }>
}
```

`cards` 与 `window.__zjh.getState()` 中的牌 ID 必须来自同一组真实牌对象；牌的 `owner`、位置、朝向和 `faceUp` 必须随着发牌、看牌、比牌动画实时变化。状态接口本身不得提供发牌、改牌、改筹码、强制电脑决策、直接结算或跳过动画的控制方法。

