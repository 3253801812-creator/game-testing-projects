import { useEffect } from 'react';
import { bootBattleship } from './game/engine';

const ships = [
  ['carrier', '航母', 5],
  ['battleship', '战列舰', 4],
  ['cruiser', '巡洋舰', 3],
  ['submarine', '潜艇', 3],
  ['destroyer', '驱逐舰', 2],
] as const;

export default function App() {
  useEffect(() => {
    const dispose = bootBattleship();
    return () => dispose?.();
  }, []);

  return (
    <main className="app-shell">
      <canvas id="game" aria-label="3D 战舰游戏画布" />
      <div id="hud" className="hud-layer">
        <header className="topbar glass-panel">
          <div>
            <div className="eyebrow">ABYSSAL SONAR · THREE.JS</div>
            <h1>深渊声呐神谕 <span>3D BATTLESHIP</span></h1>
          </div>
          <div className="topbar-right">
            <div className="api-pill" data-testid="api-status">AI：准备中</div>
            <button className="icon-btn" data-testid="restart-btn" type="button">重新开始</button>
          </div>
        </header>

        <section className="board-label player-label" data-testid="player-board-label">
          <strong>己方海域</strong><span id="playerShipsRemaining">5 艘存活</span>
        </section>
        <section className="board-label enemy-label" data-testid="enemy-board-label">
          <strong>敌方海域</strong><span id="enemyShipsRemaining">5 艘未知</span>
        </section>

        <section className="status-dock glass-panel">
          <div>
            <span className="status-kicker">战术状态</span>
            <strong data-testid="status-message">部署你的舰队</strong>
          </div>
          <div className="turn-chip" data-testid="turn-indicator">部署阶段</div>
        </section>

        <aside id="placementPanel" className="placement-panel glass-panel">
          <div className="panel-heading">
            <div><span className="step">01</span><strong>舰队部署</strong></div>
            <span className="orientation" data-testid="orientation-indicator">水平</span>
          </div>
          <p className="help">选择舰船后悬停己方网格预览位置，点击放置。按 <kbd>R</kbd> 或按钮旋转。</p>
          <div className="ship-list" data-testid="ship-list">
            {ships.map(([id, name, length]) => (
              <button className="ship-item" data-testid="ship-item" data-ship-id={id} type="button" key={id}>
                <span className="ship-name">{name}</span>
                <span className="ship-length">{Array.from({ length }).map((_, i) => <i key={i} />)}</span>
                <span className="ship-state">待部署</span>
              </button>
            ))}
          </div>
          <div className="panel-actions two-col">
            <button className="secondary-btn" data-testid="rotate-btn" type="button">旋转 R</button>
            <button className="secondary-btn" data-testid="randomize-placement" type="button">随机部署</button>
          </div>
          <button className="primary-btn" data-testid="confirm-placement" disabled type="button">确认部署并开战</button>
          <div className="api-config">
            <label htmlFor="apiKey">OpenRouter API Key（可选）</label>
            <input id="apiKey" type="password" placeholder="未填写时使用公平本地 AI" autoComplete="off" />
            <small>也可在页面加载前设置 <code>window.OPENROUTER_API_KEY</code>。密钥仅在浏览器中用于 OpenRouter 请求。</small>
          </div>
        </aside>

        <div id="gameOverModal" className="modal-backdrop hidden" role="dialog" aria-modal="true">
          <div className="gameover-card glass-panel">
            <div className="result-badge" id="resultBadge">BATTLE COMPLETE</div>
            <h2 id="gameOverTitle">你赢了！</h2>
            <p id="gameOverText">敌方舰队已全部沉没。</p>
            <div className="result-stats">
              <div><span>你的攻击</span><strong id="humanAttackStat">0</strong></div>
              <div><span>AI 攻击</span><strong id="aiAttackStat">0</strong></div>
            </div>
            <button className="primary-btn" id="modalRestart" type="button">再来一局</button>
          </div>
        </div>

        <div id="startupError" className="startup-error hidden">
          <strong>3D 引擎启动失败</strong>
          <span id="startupErrorText">请检查 WebGL 与 Three.js CDN 是否可用。</span>
          <button id="reloadBtn" type="button">重新加载</button>
        </div>
      </div>
    </main>
  );
}
