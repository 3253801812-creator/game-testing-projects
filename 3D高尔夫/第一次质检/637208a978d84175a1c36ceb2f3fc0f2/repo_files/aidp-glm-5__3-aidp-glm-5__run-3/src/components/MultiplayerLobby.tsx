import { useState } from 'react';

interface MultiplayerLobbyProps {
  onStart: (playerCount: number) => void;
  onBack: () => void;
}

export function MultiplayerLobby({ onStart, onBack }: MultiplayerLobbyProps) {
  const [playerCount, setPlayerCount] = useState(2);

  return (
    <div id="multiplayerLobby" className="min-h-screen bg-gradient-to-b from-indigo-800 to-indigo-900 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-white mb-8">👥 本地多人对战</h1>
      
      <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm w-full max-w-md">
        <div className="mb-6">
          <label className="text-white text-lg mb-2 block">选择玩家数量</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setPlayerCount(Math.max(2, playerCount - 1))}
              className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full text-xl font-bold transition-all"
            >
              -
            </button>
            <span 
              data-testid="local-player-count"
              className="text-3xl font-bold text-white w-12 text-center"
            >
              {playerCount}
            </span>
            <button
              onClick={() => setPlayerCount(Math.min(4, playerCount + 1))}
              className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full text-xl font-bold transition-all"
            >
              +
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <p className="text-white/80 text-sm mb-2">玩家预览:</p>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: playerCount }, (_, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                玩家{i + 1}
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-white/70 text-sm mb-6">
          💡 多人对战模式下，玩家轮流击球，杆数最少者获胜
        </p>
        
        <button
          data-testid="local-start-btn"
          onClick={() => onStart(playerCount)}
          className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all transform hover:scale-105"
        >
          🎮 开始对战
        </button>
        
        <button
          data-testid="local-exit-btn"
          onClick={onBack}
          className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-xl transition-all"
        >
          ← 返回
        </button>
      </div>
    </div>
  );
}