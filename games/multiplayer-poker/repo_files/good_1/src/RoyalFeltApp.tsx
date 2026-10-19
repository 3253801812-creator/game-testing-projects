import { useEffect, useRef } from 'react';
import { mountRoyalFelt } from './royal/runtime';

export default function RoyalFeltApp() {
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (!stageRef.current) return; return mountRoyalFelt(stageRef.current); }, []);
  return <main className="app-shell relative min-h-screen" aria-label="Royal Felt · 3D 炸金花">
    <div id="stage" ref={stageRef} className="absolute inset-0" />
    <header className="topbar"><div className="brand"><div className="brand-kicker">THREE.JS · THREE-CARD TABLE</div><h1 className="brand-title">Royal <span>Felt</span></h1></div><div className="scoreboard"><div className="score-cell"><span className="score-label">玩家</span><span className="score-value" data-testid="player-score">0</span></div><div className="score-cell"><span className="score-label">电脑</span><span className="score-value" data-testid="computer-score">0</span></div><div className="score-cell"><span className="score-label">奖池</span><span className="score-value" data-testid="pot">0</span></div></div></header>
    <div className="floating-total computer-total">电脑 <strong id="computer-note">三张暗牌 · 自动决策</strong></div><div className="floating-total player-total">玩家 <strong id="player-note">等待发牌</strong></div>
    <section className="hud"><div className="hud-row"><div className="stats"><div className="stat"><span className="stat-label">玩家筹码</span><span className="stat-value" data-testid="player-chips">1000</span></div><div className="stat"><span className="stat-label">电脑筹码</span><span className="stat-value" data-testid="computer-chips">1000</span></div><div className="stat"><span className="stat-label">当前注额</span><span className="stat-value" data-testid="current-bet">0</span></div><div className="stat"><span className="stat-label">手牌</span><span className="stat-value" data-testid="player-hand">未发牌</span></div><div className="stat"><span className="stat-label">牌型</span><span className="stat-value" data-testid="player-hand-type">未看牌</span></div></div>
      <div className="actions zjh-actions"><button data-testid="deal-btn" className="action-btn primary">发牌</button><button data-testid="peek-btn" className="action-btn" disabled>看牌</button><button data-testid="call-btn" className="action-btn" disabled>跟注</button><button data-testid="raise-btn" className="action-btn" disabled>加注</button><button data-testid="fold-btn" className="action-btn" disabled>弃牌</button><button data-testid="compare-btn" className="action-btn" disabled>比牌</button></div>
      <div className="status-wrap"><div className="status-pill" data-testid="game-status"><span data-zjh-status-title>等待</span><small data-zjh-status-sub>点击发牌开始</small></div><span className="zjh-hidden-meta" data-testid="turn">等待</span></div></div></section>
  </main>;
}
