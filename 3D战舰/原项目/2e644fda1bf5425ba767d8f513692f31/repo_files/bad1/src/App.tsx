import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AIPlayer,
  FLEET_SPEC,
  GameBoard,
  Orientation,
  Phase,
  Turn,
  fromCoordinate,
} from './game/core';
import { ThreeBattlefield } from './scene/ThreeBattlefield';

type LastAction = null | {
  actor: 'human' | 'ai';
  row: number;
  col: number;
  coordinate: string;
  result: string;
  shipId: string | null;
};

const initialSessionId = () => `session-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export default function App() {
  const playerBoard = useMemo(() => new GameBoard('player', { x: -4.8, y: 0, z: 0 }), []);
  const enemyBoard = useMemo(() => new GameBoard('enemy', { x: 4.8, y: 0, z: 0 }), []);
  const aiPlayer = useMemo(() => new AIPlayer(), []);
  const sceneRef = useRef<ThreeBattlefield | null>(null);

  const [ready, setReady] = useState(false);
  const [fatalError, setFatalError] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>('setup');
  const [turn, setTurn] = useState<Turn>(null);
  const [inputLocked, setInputLocked] = useState(false);
  const [winner, setWinner] = useState<'human' | 'ai' | null>(null);
  const [sessionId, setSessionId] = useState<string | number>(initialSessionId);
  const [statusMessage, setStatusMessage] = useState('部署舰队：选择舰船，在左侧海域点击放置。按 R 旋转。');
  const [lastAction, setLastAction] = useState<LastAction>(null);
  const [apiStatus, setApiStatus] = useState('未配置 · 公平本地战术AI');
  const [selectedShipId, setSelectedShipId] = useState<string | null>(FLEET_SPEC[0].id);
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const [draggingShipId, setDraggingShipId] = useState<string | null>(null);
  const [previewCells, setPreviewCells] = useState<{ row: number; col: number }[]>([]);
  const [previewValid, setPreviewValid] = useState(false);
  const [invalidReason, setInvalidReason] = useState<string | null>(null);
  const [lastPlacementResult, setLastPlacementResult] = useState<object | null>(null);
  const [uiTick, setUiTick] = useState(0);
  const [apiKeyInput, setApiKeyInput] = useState('');

  const liveRef = useRef({
    ready,
    phase,
    turn,
    inputLocked,
    winner,
    sessionId,
    statusMessage,
    lastAction,
    apiStatus,
    selectedShipId,
    orientation,
    draggingShipId,
    previewCells,
    previewValid,
    invalidReason,
    lastPlacementResult,
  });

  useEffect(() => {
    liveRef.current = {
      ready,
      phase,
      turn,
      inputLocked,
      winner,
      sessionId,
      statusMessage,
      lastAction,
      apiStatus,
      selectedShipId,
      orientation,
      draggingShipId,
      previewCells,
      previewValid,
      invalidReason,
      lastPlacementResult,
    };
  }, [ready, phase, turn, inputLocked, winner, sessionId, statusMessage, lastAction, apiStatus, selectedShipId, orientation, draggingShipId, previewCells, previewValid, invalidReason, lastPlacementResult]);

  const placedShipIds = playerBoard.ships.filter((s) => s.confirmed).map((s) => s.id);
  const remainingShipIds = playerBoard.ships.filter((s) => !s.confirmed).map((s) => s.id);
  const canConfirm = remainingShipIds.length === 0;

  const refresh = useCallback(() => setUiTick((n) => n + 1), []);

  const resetPlacementUi = useCallback(() => {
    setSelectedShipId(FLEET_SPEC[0].id);
    setOrientation('horizontal');
    setDraggingShipId(null);
    setPreviewCells([]);
    setPreviewValid(false);
    setInvalidReason(null);
    setLastPlacementResult(null);
  }, []);

  const restartGame = useCallback(() => {
    const nextSession = initialSessionId();
    setSessionId(nextSession);
    setPhase('setup');
    setTurn(null);
    setInputLocked(false);
    setWinner(null);
    setLastAction(null);
    setStatusMessage('部署舰队：选择舰船，在左侧海域点击放置。按 R 旋转。');
    sceneRef.current?.resetVisuals();
    playerBoard.reset();
    enemyBoard.randomizeFleet();
    aiPlayer.reset(nextSession);
    sceneRef.current?.syncFleet(enemyBoard);
    resetPlacementUi();
    setApiStatus(aiPlayer.apiConfigured ? 'OpenRouter 已配置 · horizon-beta' : '未配置 · 公平本地战术AI');
    refresh();
  }, [aiPlayer, enemyBoard, playerBoard, refresh, resetPlacementUi]);

  useEffect(() => {
    const canvas = document.getElementById('game') as HTMLCanvasElement | null;
    if (!canvas) return;
    try {
      enemyBoard.randomizeFleet();
      aiPlayer.reset(sessionId);
      const scene = new ThreeBattlefield(canvas, playerBoard, enemyBoard);
      sceneRef.current = scene;
      scene.syncFleet(enemyBoard);
      scene.onFrame = (frameCount) => {
        if (frameCount % 30 === 0) refresh();
      };
      setReady(true);
      setFatalError(null);
      setApiStatus(aiPlayer.apiConfigured ? 'OpenRouter 已配置 · horizon-beta' : '未配置 · 公平本地战术AI');
    } catch (error: any) {
      console.error('[Boot] 3D battlefield failed:', error);
      setFatalError(String(error?.message ?? error));
      setReady(false);
    }
    return () => {
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
    // Deliberately create the 3D engine only once for this game instance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'r' && liveRef.current.phase === 'setup') {
        setOrientation((o) => (o === 'horizontal' ? 'vertical' : 'horizontal'));
        setStatusMessage('舰船方向已旋转。移动鼠标查看放置预览。');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    window.__playerBoard = { getState: () => playerBoard.getState() };
    window.__enemyBoard = { getState: () => enemyBoard.getState() };
    window.__aiPlayer = { getState: () => aiPlayer.getState() };
    window.__placement = {
      getState: () => {
        const s = liveRef.current;
        const placed = playerBoard.ships.filter((ship) => ship.confirmed).map((ship) => ship.id);
        const remaining = playerBoard.ships.filter((ship) => !ship.confirmed).map((ship) => ship.id);
        return {
          selectedShipId: s.selectedShipId,
          orientation: s.orientation,
          draggingShipId: s.draggingShipId,
          placedShipIds: placed,
          remainingShipIds: remaining,
          previewCells: s.previewCells.map((c) => ({ ...c })),
          previewValid: s.previewValid,
          invalidReason: s.invalidReason,
          canConfirm: remaining.length === 0,
          lastPlacementResult: s.lastPlacementResult ? { ...s.lastPlacementResult } : null,
        };
      },
    };
    window.__game = {
      getState: () => {
        const s = liveRef.current;
        return {
          ready: s.ready,
          phase: s.phase,
          turn: s.turn,
          inputLocked: s.inputLocked,
          winner: s.winner,
          sessionId: s.sessionId,
          fleetSpec: FLEET_SPEC.map((x) => ({ ...x })),
          humanAttackCount: enemyBoard.attackHistory.length,
          aiAttackCount: playerBoard.attackHistory.length,
          statusMessage: s.statusMessage,
          lastAction: s.lastAction ? { ...s.lastAction } : null,
          apiStatus: s.apiStatus,
          pendingAIRequests: aiPlayer.pendingRequestCount,
          frameCount: sceneRef.current?.frameCount ?? 0,
        };
      },
    };
    window.__effects = { getState: () => sceneRef.current?.getEffectsState() ?? { activeEffects: [], markers: [], sinkAnimations: [], endEffects: [] } };
    window.__three = { getState: () => sceneRef.current?.getThreeState() ?? { frameCount: 0, canvas: null, camera: null, controls: null, boardGroups: {}, lights: [], objectCount: 0 } };
  }, [aiPlayer, enemyBoard, playerBoard]);

  useEffect(() => {
    if (phase !== 'setup' || !selectedShipId || !previewCells.length) return;
    const first = previewCells[0];
    const validation = playerBoard.validatePlacement(selectedShipId, first.row, first.col, orientation);
    setPreviewCells(validation.cells);
    setPreviewValid(validation.valid);
    setInvalidReason(validation.reason);
    sceneRef.current?.showPlacementPreview(playerBoard, selectedShipId, first.row, first.col, orientation, validation.valid);
  }, [orientation]); // eslint-disable-line react-hooks/exhaustive-deps

  const rotateShip = () => {
    if (phase !== 'setup') return;
    setOrientation((o) => (o === 'horizontal' ? 'vertical' : 'horizontal'));
  };

  const randomizePlacement = () => {
    if (phase !== 'setup') return;
    sceneRef.current?.hidePlacementPreview();
    sceneRef.current?.clearShips(playerBoard);
    playerBoard.randomizeFleet();
    sceneRef.current?.syncFleet(playerBoard);
    setSelectedShipId(null);
    setPreviewCells([]);
    setPreviewValid(false);
    setInvalidReason(null);
    setLastPlacementResult({ action: 'randomize', success: true, count: 5 });
    setStatusMessage('舰队已随机部署。你可以直接开始，或选择任意舰船重新放置。');
    refresh();
  };

  const confirmPlacement = () => {
    if (phase !== 'setup') return;
    if (!playerBoard.ships.every((s) => s.confirmed)) {
      setStatusMessage('还未完成全部 5 艘舰船的部署。');
      return;
    }
    sceneRef.current?.hidePlacementPreview();
    sceneRef.current?.syncFleet(playerBoard);
    setSelectedShipId(null);
    setPhase('playing');
    setTurn('human');
    setInputLocked(false);
    setStatusMessage('战斗开始。点击右侧敌方海域发起攻击。');
    refresh();
  };

  const endGame = (who: 'human' | 'ai') => {
    setPhase('ended');
    setTurn(null);
    setInputLocked(true);
    setWinner(who);
    setStatusMessage(who === 'human' ? '你赢了！敌方舰队已全部击沉。' : 'AI 赢了。你的舰队已失去战斗力。');
    sceneRef.current?.victoryBurst(who);
    refresh();
  };

  const runAiTurn = async (capturedSession: string | number) => {
    if (liveRef.current.phase !== 'playing') return;
    setApiStatus(aiPlayer.apiConfigured ? 'OpenRouter 正在决策…' : '本地战术AI 正在决策…');
    refresh();
    const coordinate = await aiPlayer.decideMove(capturedSession);
    if (liveRef.current.sessionId !== capturedSession || liveRef.current.phase !== 'playing') return;
    if (!coordinate) {
      setApiStatus('AI 无可用坐标');
      endGame('human');
      return;
    }
    const parsed = fromCoordinate(coordinate);
    if (!parsed) {
      setApiStatus('AI 坐标解析失败');
      setTurn('human');
      setInputLocked(false);
      return;
    }
    const result = playerBoard.attack(parsed.row, parsed.col);
    if (!result.ok) {
      // This should be unreachable because AI validates choices. Recover safely if it happens.
      aiPlayer.fallbackCount += 1;
      setApiStatus('AI 选择重复坐标，已跳过并恢复玩家回合');
      setTurn('human');
      setInputLocked(false);
      return;
    }
    sceneRef.current?.addMarker(playerBoard, result.row, result.col, result.result);
    if (result.result === 'sunk' && result.shipId) sceneRef.current?.animateSink(playerBoard, result.shipId);
    aiPlayer.observeAttack(result.coordinate, result.result, result.result === 'sunk' ? result.ship?.name : null);
    setLastAction({ actor: 'ai', row: result.row, col: result.col, coordinate: result.coordinate, result: result.result, shipId: result.shipId });
    setApiStatus(aiPlayer.lastDecisionSource === 'openrouter' ? 'OpenRouter 已响应 · horizon-beta' : `本地公平回退 · ${aiPlayer.lastError || '狩猎/追击'}`);
    if (playerBoard.allSunk()) {
      endGame('ai');
      return;
    }
    setTurn('human');
    setInputLocked(false);
    setStatusMessage(result.result === 'miss' ? `AI 攻击 ${result.coordinate}：未命中。轮到你。` : result.result === 'sunk' ? `AI 攻击 ${result.coordinate}：击沉 ${result.ship?.name}。轮到你。` : `AI 攻击 ${result.coordinate}：命中。轮到你。`);
    refresh();
  };

  const handleCanvasMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (phase !== 'setup' || !selectedShipId) return;
    const pick = sceneRef.current?.pickBoardCell(event.clientX, event.clientY);
    if (!pick || pick.board.owner !== 'player') {
      sceneRef.current?.hidePlacementPreview();
      setPreviewCells([]);
      setPreviewValid(false);
      setInvalidReason(null);
      return;
    }
    const validation = playerBoard.validatePlacement(selectedShipId, pick.row, pick.col, orientation);
    setPreviewCells(validation.cells);
    setPreviewValid(validation.valid);
    setInvalidReason(validation.reason);
    setDraggingShipId(selectedShipId);
    sceneRef.current?.showPlacementPreview(playerBoard, selectedShipId, pick.row, pick.col, orientation, validation.valid);
  };

  const handleCanvasLeave = () => {
    if (phase === 'setup') {
      sceneRef.current?.hidePlacementPreview();
      setDraggingShipId(null);
    }
  };

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ready || fatalError) return;
    const pick = sceneRef.current?.pickBoardCell(event.clientX, event.clientY);
    if (!pick) return;

    if (phase === 'setup') {
      if (!selectedShipId || pick.board.owner !== 'player') return;
      const result = playerBoard.placeShip(selectedShipId, pick.row, pick.col, orientation);
      setLastPlacementResult({ shipId: selectedShipId, row: pick.row, col: pick.col, orientation, ...result });
      setPreviewCells(result.cells);
      setPreviewValid(result.valid);
      setInvalidReason(result.reason);
      if (!result.valid) {
        setStatusMessage(`无法放置：${result.reason}`);
        return;
      }
      sceneRef.current?.hidePlacementPreview();
      sceneRef.current?.syncFleet(playerBoard);
      const next = playerBoard.ships.find((s) => !s.confirmed)?.id ?? null;
      setSelectedShipId(next);
      setDraggingShipId(null);
      setStatusMessage(next ? `已部署。继续放置 ${playerBoard.getShip(next)?.name}。` : '全部舰船已部署。确认后开始战斗。');
      refresh();
      return;
    }

    if (phase !== 'playing' || turn !== 'human' || inputLocked || pick.board.owner !== 'enemy') return;
    const result = enemyBoard.attack(pick.row, pick.col);
    if (!result.ok) {
      setStatusMessage(`无效攻击：${result.reason}`);
      return;
    }
    setInputLocked(true);
    sceneRef.current?.addMarker(enemyBoard, result.row, result.col, result.result);
    if (result.result === 'sunk' && result.shipId) {
      sceneRef.current?.syncFleet(enemyBoard);
      sceneRef.current?.animateSink(enemyBoard, result.shipId);
    }
    setLastAction({ actor: 'human', row: result.row, col: result.col, coordinate: result.coordinate, result: result.result, shipId: result.result === 'sunk' ? result.shipId : null });
    if (enemyBoard.allSunk()) {
      endGame('human');
      return;
    }
    setTurn('ai');
    const msg = result.result === 'miss' ? `${result.coordinate} 未命中。AI 正在评估战局…` : result.result === 'sunk' ? `${result.coordinate} 命中并击沉 ${result.ship?.name}！AI 正在反击…` : `${result.coordinate} 命中！AI 正在反击…`;
    setStatusMessage(msg);
    const capturedSession = sessionId;
    window.setTimeout(() => void runAiTurn(capturedSession), 420);
    refresh();
  };

  const configureApiKey = () => {
    aiPlayer.setApiKey(apiKeyInput);
    setApiStatus(aiPlayer.apiConfigured ? 'OpenRouter 已配置 · horizon-beta' : '密钥无效/为空 · 使用本地战术AI');
    setStatusMessage(aiPlayer.apiConfigured ? 'OpenRouter 密钥仅保存在当前页面内存中。下一回合将尝试调用模型。' : '未启用 OpenRouter，游戏仍会使用公平本地AI。');
    setApiKeyInput('');
  };

  const selectShip = (id: string) => {
    if (phase !== 'setup') return;
    setSelectedShipId(id);
    setStatusMessage(`已选择 ${playerBoard.getShip(id)?.name}。在左侧海域点击放置，按 R 旋转。`);
  };

  const turnLabel = phase === 'setup' ? '部署阶段' : phase === 'ended' ? '战斗结束' : turn === 'human' ? '你的回合' : 'AI 回合';

  return (
    <div className="app-shell" data-ui-tick={uiTick}>
      <canvas
        id="game"
        onPointerMove={handleCanvasMove}
        onPointerLeave={handleCanvasLeave}
        onClick={handleCanvasClick}
      />

      <div className="scanlines" aria-hidden="true" />
      <header id="hud" className="hud glass-panel">
        <div className="brand-block">
          <div className="eyebrow">NAVAL TACTICAL SIMULATION</div>
          <h1>STEEL TIDE <span>COMMAND</span></h1>
        </div>
        <div className="hud-status">
          <div className={`turn-chip ${turn === 'human' ? 'active' : ''}`} data-testid="turn-indicator">{turnLabel}</div>
          <div className="status-line" data-testid="status-message">{statusMessage}</div>
        </div>
        <div className="hud-actions">
          <div className="api-pill" data-testid="api-status"><span className={aiPlayer.apiConfigured ? 'dot online' : 'dot'} />{apiStatus}</div>
          <button className="ghost-btn" data-testid="restart-btn" onClick={restartGame}>重新开始</button>
        </div>
      </header>

      <div className="board-label player-label" data-testid="player-board-label">
        <span>01</span><strong>己方海域</strong><small>{playerBoard.shipsRemaining} 艘存活</small>
      </div>
      <div className="board-label enemy-label" data-testid="enemy-board-label">
        <span>02</span><strong>敌方海域</strong><small>{enemyBoard.shipsRemaining} 艘存活</small>
      </div>

      <aside id="placementPanel" className={`side-panel glass-panel ${phase !== 'setup' ? 'collapsed' : ''}`}>
        <div className="panel-heading">
          <div>
            <div className="eyebrow">FLEET DEPLOYMENT</div>
            <h2>舰队部署</h2>
          </div>
          <div className="fleet-count">{placedShipIds.length}/5</div>
        </div>

        <div className="orientation-row">
          <div>
            <small>当前方向</small>
            <strong data-testid="orientation-indicator">{orientation === 'horizontal' ? '水平 H' : '垂直 V'}</strong>
          </div>
          <button className="compact-btn" data-testid="rotate-btn" onClick={rotateShip}>R · 旋转</button>
        </div>

        <div className="ship-list" data-testid="ship-list">
          {FLEET_SPEC.map((spec) => {
            const ship = playerBoard.getShip(spec.id)!;
            const placed = ship.confirmed;
            const selected = selectedShipId === spec.id;
            return (
              <button
                key={spec.id}
                className={`ship-item ${selected ? 'selected' : ''} ${placed ? 'placed' : ''}`}
                data-testid="ship-item"
                onClick={() => selectShip(spec.id)}
              >
                <span className="ship-index">{String(FLEET_SPEC.findIndex((s) => s.id === spec.id) + 1).padStart(2, '0')}</span>
                <span className="ship-name"><strong>{spec.name}</strong><small>{spec.type}</small></span>
                <span className="ship-cells">{Array.from({ length: spec.length }, (_, i) => <i key={i} />)}</span>
                <span className="ship-state">{placed ? 'READY' : selected ? 'SELECTED' : 'STANDBY'}</span>
              </button>
            );
          })}
        </div>

        <div className={`placement-feedback ${previewCells.length ? (previewValid ? 'valid' : 'invalid') : ''}`}>
          {previewCells.length ? (
            <><span>{previewValid ? 'VALID' : 'BLOCKED'}</span>{previewValid ? `${previewCells.length} 格可部署` : invalidReason}</>
          ) : '移动到左侧棋盘预览舰船位置'}
        </div>

        <div className="panel-actions">
          <button className="secondary-btn" data-testid="randomize-placement" onClick={randomizePlacement}>随机部署</button>
          <button className="primary-btn" data-testid="confirm-placement" disabled={!canConfirm} onClick={confirmPlacement}>确认部署 · 开战</button>
        </div>
        <div className="hint">提示：点击舰船后在左侧海域放置；可重复选择已部署舰船调整位置。</div>
      </aside>

      <aside className="intel-panel glass-panel">
        <div className="intel-section">
          <div className="eyebrow">COMBAT INTEL</div>
          <div className="score-grid">
            <div><small>你的攻击</small><strong>{enemyBoard.attackHistory.length}</strong></div>
            <div><small>AI 攻击</small><strong>{playerBoard.attackHistory.length}</strong></div>
            <div><small>命中</small><strong>{enemyBoard.totalHits}</strong></div>
            <div><small>AI 命中</small><strong>{playerBoard.totalHits}</strong></div>
          </div>
        </div>
        <div className="intel-section">
          <div className="intel-title">最近行动</div>
          {lastAction ? (
            <div className={`action-card ${lastAction.result}`}>
              <span>{lastAction.actor === 'human' ? 'YOU' : 'AI'}</span>
              <strong>{lastAction.coordinate}</strong>
              <em>{lastAction.result === 'miss' ? 'MISS' : lastAction.result === 'sunk' ? 'SUNK' : 'HIT'}</em>
            </div>
          ) : <div className="empty-action">等待第一发炮击</div>}
        </div>
        <div className="intel-section ai-config">
          <div className="intel-title">OpenRouter AI</div>
          <p>模型固定为 <code>openrouter/horizon-beta</code>。浏览器内密钥仅适合演示，不应用于生产环境。</p>
          <div className="api-row">
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder="sk-or-v1-...（可选）"
              aria-label="OpenRouter API Key"
            />
            <button onClick={configureApiKey}>应用</button>
          </div>
        </div>
        <div className="intel-section controls-help">
          <div><kbd>拖动</kbd><span>环绕视角</span></div>
          <div><kbd>滚轮</kbd><span>缩放</span></div>
          <div><kbd>R</kbd><span>旋转舰船</span></div>
        </div>
      </aside>

      <div id="gameOverModal" className={`modal-backdrop ${phase === 'ended' ? 'show' : ''}`} aria-hidden={phase !== 'ended'}>
        <div className="game-over-card glass-panel">
          <div className="modal-kicker">OPERATION COMPLETE</div>
          <h2>{winner === 'human' ? '海域控制权已夺取' : '舰队已失去战斗力'}</h2>
          <p>{winner === 'human' ? '你击沉了全部敌舰。' : 'AI 率先击沉了你的全部舰船。'}</p>
          <div className="result-stats">
            <div><small>总攻击</small><strong>{enemyBoard.attackHistory.length}</strong></div>
            <div><small>命中</small><strong>{enemyBoard.totalHits}</strong></div>
            <div><small>AI攻击</small><strong>{playerBoard.attackHistory.length}</strong></div>
          </div>
          <button className="primary-btn" onClick={restartGame}>重新部署舰队</button>
        </div>
      </div>

      {fatalError && (
        <div className="fatal-screen">
          <div className="fatal-card glass-panel">
            <div className="eyebrow">STARTUP ERROR</div>
            <h2>3D 引擎启动失败</h2>
            <p>{fatalError}</p>
            <p>请确认可访问 Three.js 与 OrbitControls CDN，并启用 WebGL。</p>
            <button className="primary-btn" onClick={() => window.location.reload()}>重新加载</button>
          </div>
        </div>
      )}

      <footer className="footer-strip">
        <span>GRID A–J / 1–10</span>
        <span>SESSION {String(sessionId).slice(-8).toUpperCase()}</span>
        <span>{ready ? `RENDER ${sceneRef.current?.frameCount ?? 0}` : 'INITIALIZING'}</span>
      </footer>
    </div>
  );
}
