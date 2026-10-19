# 3 — Skyline Thread

第三人称 3D 城市摆荡游戏，使用 React 19 + TypeScript + Vite + Tailwind CSS + Three.js。

## 操作

- `WASD`：移动 / 空中方向修正
- `Space`：跳跃
- 鼠标：第三人称视角
- 鼠标左键按住：向准星方向的真实建筑表面尝试连接蛛丝
- 松开鼠标左键：解除蛛丝并保留当前真实速度
- `Esc`：释放鼠标锁定

## 核心实现

- 120 Hz 固定物理步长
- 建筑射线命中后建立真实锚点
- 以建立连接时的实际距离作为绳长
- 重力 + 玩家已有速度 + 绳长约束驱动摆荡，不使用预制圆周动画
- 松开蛛丝后不改写速度
- 地面与建筑 AABB 碰撞
- 第三人称相机带建筑遮挡避让与速度 FOV
- 程序化城市立面、窗灯、街道、地标和夜景，不依赖远程资产
- HUD 包含速度、高度、垂直速度、罗盘、摆荡张力与本地小地图

## 公开只读状态接口

运行时保留：

- `window.__game.getState()`
- `window.__player.getState()`
- `window.__camera.getState()`
- `window.__web.getState()`
- `window.__world.getState()`

接口仅读取当前真实游戏对象，不提供修改物理、瞬移或测试控制入口。

## 运行

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
```

## 直接进入游戏

新增独立游戏入口：`play.html`。

开发环境直接运行：

```bash
npm install
npm run play
```

也可以运行 `npm run dev` 后访问 `/play.html`。生产构建会同时输出 `dist/index.html` 与 `dist/play.html`。
