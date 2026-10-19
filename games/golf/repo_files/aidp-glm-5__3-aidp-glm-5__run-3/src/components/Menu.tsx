

interface MenuProps {
  onStartGame: () => void;
  onLevelSelect: () => void;
  onMultiplayer: () => void;
  onLeaderboard: () => void;
}

export function Menu({ onStartGame, onLevelSelect, onMultiplayer, onLeaderboard }: MenuProps) {
  return (
    <div id="menu" className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          🏌️ 3D 迷你高尔夫赛
        </h1>
        <p className="text-green-200 text-xl">体验精彩的三维高尔夫挑战</p>
      </div>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button
          data-testid="start-btn"
          onClick={onStartGame}
          className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 text-xl"
        >
          🎮 开始游戏
        </button>
        
        <button
          onClick={onLevelSelect}
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
        >
          🗺️ 选择关卡
        </button>
        
        <button
          data-testid="multiplayer-btn"
          onClick={onMultiplayer}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
        >
          👥 本地多人
        </button>
        
        <button
          data-testid="leaderboard-btn"
          onClick={onLeaderboard}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
        >
          🏆 排行榜
        </button>
      </div>
      
      <div className="mt-12 text-green-300 text-sm">
        <p>使用鼠标拖拽控制击球方向和力度</p>
        <p>支持 2-4 名玩家本地对战</p>
      </div>
    </div>
  );
}