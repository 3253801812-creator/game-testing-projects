import * as React from 'react';
const { useEffect, useRef, useState } = React;
import { BattleshipEngine } from './game/BattleshipEngine';
import { FLEET_SPEC, fromCoordinate, toCoordinate } from './game/contracts';
import { ThreeBattlefield } from './scene/ThreeBattlefield';
import { DrydockReadouts } from './components/DrydockReadouts';

function ResultBadge({ result }: { result?: string | null }) {
  if (!result) return null;
  const label = result === 'miss' ? '未命中' : result === 'sunk' ? '击沉' : '命中';
  return <span className={`result-badge ${result}`}>{label}</span>;
}

export default function App() {
  const [, setVersion] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<BattleshipEngine | null>(null);
  const sceneRef = useRef<ThreeBattlefield | null>(null);
  const [startupError, setStartupError] = useState<string | null>(null);

  if (!engineRef.current) engineRef.current = new BattleshipEngine(() => setVersion(v => v + 1));
  const engine = engineRef.current;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'r' && engine.phase === 'setup') engine.rotate();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [engine]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      if (!window.THREE || !window.THREE.OrbitControls) throw new Error('Three.js 或 OrbitControls 未能从 CDN 加载。请检查网络后重试。');
      const three = new ThreeBattlefield(canvas, engine.playerBoard, engine.enemyBoard);
      sceneRef.current = three;
      engine.attachThree(three);
      window.__scene = three.scene;
      window.__camera = three.camera;
      window.__renderer = three.renderer;
      window.__game = { getState: () => engine.getState() };
      window.__playerBoard = { getState: () => engine.playerBoard.getState() };
      window.__enemyBoard = { getState: () => engine.enemyBoard.getState() };
      window.__placement = { getState: () => engine.placementState() };
      window.__aiPlayer = { getState: () => engine.aiPlayer.getState() };
      window.__effects = { getState: () => ({ ...three.getEffectsState(), lastSound: engine.audio.lastCue }) };
      window.__three = { getState: () => three.getState() };
      window.__engine = engine;
      window.__test = {
        reset: () => engine.restart(),
        setFleet: (owner: 'player' | 'enemy', placements: any[]) => engine.setFleet(owner, placements),
        startBattle: () => engine.startBattle(),
        coordinateToLabel: (row: number, col: number) => toCoordinate({ row, col }),
        labelToCoordinate: (label: string) => fromCoordinate(label),
        selectShip: (shipId: string) => engine.selectShip(shipId),
        placeShip: (shipId: string, row: number, col: number, orientation: 'horizontal' | 'vertical') => engine.testPlaceShip(shipId, row, col, orientation),
        moveShip: (shipId: string, row: number, col: number, orientation: 'horizontal' | 'vertical') => engine.moveShip(shipId, row, col, orientation),
        rotateShip: (shipId?: string) => engine.rotateShip(shipId),
        randomizePlayerFleet: () => { engine.randomizePlacement(); return { ok: true }; },
        playerAttack: (row: number, col: number) => engine.testHumanAttack(row, col),
        aiAttack: (row: number, col: number) => engine.testAIAttack(row, col),
        requestAIMove: () => engine.requestAIMove(),
        configureAI: (config: any) => engine.configureAI(config),
        waitForIdle: (timeoutMs?: number) => engine.waitForIdle(timeoutMs),
        toggleAudio: () => engine.toggleAudio(),
        getBattleLog: () => ({ entries: engine.getBattleLog() }),
        getCellScreenPosition: (owner: 'player' | 'enemy', row: number, col: number) => three.getCellScreenPosition(owner, row, col)
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('3D startup failed:', error);
      setStartupError(message);
    }
    return () => sceneRef.current?.dispose();
  }, [engine]);

  const p = engine.placement;
  const selected = p.selectedShipId ? engine.playerBoard.ship(p.selectedShipId) : null;
  const last = engine.lastAction;

  return (
    <main className="app-shell">
      <canvas id="game" ref={canvasRef} aria-label="3D 战舰游戏画布" />
      <div className="vignette" />
      <div className="scanlines" />

      <header className="topbar" id="hud">
        <div className="brand-block">
          <div className="eyebrow">COILFIRE DRYDOCK NETWORK</div>
          <h1>磁轨铸舰场 · 3D 战舰</h1>
        </div>
        <div className="turn-card">
          <span data-testid="phase">{engine.phase === 'setup' ? '部署' : engine.phase === 'playing' ? '战斗' : '结束'}</span>
          <strong data-testid="turn-indicator">
            {engine.phase === 'setup' ? '部署阶段' : engine.phase === 'ended' ? '战斗结束' : engine.turn === 'human' ? '你的回合' : 'AI 回合'}
          </strong>
        </div>
        <button className="button ghost" data-testid="restart-btn" onClick={() => engine.restart()}>重新开始</button>
      </header>

      <div className="board-label player-label" data-testid="player-board-label">己方海域 · FLEET</div>
      <div className="board-label enemy-label" data-testid="enemy-board-label">敌方海域 · UNKNOWN</div>

      <aside className="left-panel glass-panel">
        <div className="panel-kicker">TACTICAL FEED</div>
        <div className="status-message" data-testid="status-message">{engine.statusMessage}</div>
        {last && (
          <div className="last-action">
            <span>{last.actor === 'human' ? '你' : 'AI'} · {last.coordinate}</span>
            <ResultBadge result={last.result} />
          </div>
        )}
        <div className="mini-stats">
          <div><span>你的攻击</span><b>{engine.humanAttackCount}</b></div>
          <div><span>AI 攻击</span><b>{engine.aiAttackCount}</b></div>
          <div><span>敌舰剩余</span><b>{engine.enemyBoard.shipsRemaining()}</b></div>
        </div>
        <div className="api-box">
          <span className={`api-dot ${engine.aiPlayer.apiConfigured ? 'live' : ''}`} />
          <div>
            <small>AI AGENT</small>
            <p data-testid="api-status">{engine.apiStatus}</p>
          </div>
        </div>

        <DrydockReadouts engine={engine} />
      </aside>

      <aside id="placementPanel" className={`placement-panel glass-panel ${engine.phase !== 'setup' ? 'collapsed' : ''}`}>
        <div className="panel-heading">
          <div>
            <div className="panel-kicker">FLEET DEPLOYMENT</div>
            <h2>舰队部署</h2>
          </div>
          <div className="orientation" data-testid="orientation-indicator">{p.orientation === 'horizontal' ? '水平' : '垂直'}</div>
        </div>

        <div className="ship-list" data-testid="ship-list">
          {FLEET_SPEC.map(spec => {
            const placed = p.placedShipIds.includes(spec.id);
            const active = p.selectedShipId === spec.id;
            return (
              <button
                key={spec.id}
                data-testid="ship-item"
                data-ship-id={spec.id}
                className={`ship-item ${active ? 'active' : ''} ${placed ? 'placed' : ''}`}
                onClick={() => engine.selectShip(spec.id)}
              >
                <span className="ship-name">{spec.name}</span>
                <span className="ship-units">{Array.from({ length: spec.length }, (_, i) => <i key={i} />)}</span>
                <span className="ship-state">{placed ? '已部署' : `${spec.length} 单位`}</span>
              </button>
            );
          })}
        </div>

        <div className="placement-help">
          <p>{selected ? `当前：${selected.name} · ${selected.length} 单位` : '全部舰船已部署'}</p>
          <p>悬停预览，点击海格放置；按 R 或按钮旋转。</p>
          {p.invalidReason && <p className="invalid">{p.invalidReason}</p>}
        </div>

        <div className="action-row">
          <button className="button secondary" data-testid="rotate-btn" onClick={() => engine.rotate()}>旋转 R</button>
          <button className="button secondary" data-testid="randomize-placement" onClick={() => engine.randomizePlacement()}>随机部署</button>
        </div>
        <button className="button primary full" data-testid="confirm-placement" disabled={!p.canConfirm} onClick={() => engine.confirmPlacement()}>
          {p.canConfirm ? '确认部署 · 开始战斗' : `还需部署 ${p.remainingShipIds.length} 艘`}
        </button>
      </aside>

      <div className="bottom-hint">
        <span>拖动视角</span><kbd>鼠标</kbd><span>缩放</span><kbd>滚轮</kbd><span>旋转舰船</span><kbd>R</kbd>
      </div>

      <section id="gameOverModal" className={`modal-layer ${engine.phase === 'ended' ? 'show' : ''}`} aria-hidden={engine.phase !== 'ended'}>
        <div className="modal-card">
          <div className="victory-ring" />
          <div className="panel-kicker">BATTLE REPORT</div>
          <h2>{engine.winner === 'human' ? '你赢了' : 'AI 赢了'}</h2>
          <p>{engine.winner === 'human' ? '敌方五艘战舰均已确认击沉。' : '我方舰队已经失去全部战斗能力。'}</p>
          <div className="report-row"><span>攻击次数</span><b>{engine.humanAttackCount} : {engine.aiAttackCount}</b></div>
          <button className="button primary full" onClick={() => engine.restart()}>重新部署</button>
        </div>
      </section>

      {startupError && (
        <section className="startup-error">
          <div className="error-card">
            <div className="panel-kicker">STARTUP FAILURE</div>
            <h2>3D 引擎启动失败</h2>
            <p>{startupError}</p>
            <button className="button primary" onClick={() => window.location.reload()}>重新加载</button>
          </div>
        </section>
      )}
    </main>
  );
}
