import { useEffect, useRef, useState, useCallback } from 'react';
import { getGameEngine, GameEngine } from './game/GameEngine';
import { GameState, LevelId } from './types/game';

export function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  const [, forceUpdate] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const triggerUpdate = useCallback(() => forceUpdate({}), []);

  useEffect(() => {
    const engine = getGameEngine();
    engineRef.current = engine;
    engine.setOnStateChange(triggerUpdate);

    if (containerRef.current) {
      engine.init(containerRef.current);
    }

    return () => {
      engine.destroy();
    };
  }, [triggerUpdate]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!engineRef.current) return;
    const gameState = engineRef.current.getGameStateValue();
    if (gameState !== 'playing') return;
    
    setIsDragging(true);
    engineRef.current.startDrag(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!engineRef.current || !isDragging) return;
    engineRef.current.updateDrag(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    if (!engineRef.current) return;
    setIsDragging(false);
    engineRef.current.endDrag();
  };

  const gameState = engineRef.current?.getGameStateValue() || 'menu';

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Game Canvas Container */}
      <div
        ref={containerRef}
        id="gameScreen"
        className="absolute inset-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ display: gameState === 'playing' ? 'block' : 'none' }}
      />

      {/* Menu Screen */}
      {gameState === 'menu' && (
        <div id="menu" className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-800 to-green-900">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wider">3D Mini Golf</h1>
          <p className="text-green-200 mb-12 text-lg">Experience the thrill of mini golf in stunning 3D!</p>
          
          <div className="flex flex-col gap-4">
            <button
              data-testid="start-btn"
              onClick={() => engineRef.current?.setGameState('level_select')}
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-xl rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              Start Game
            </button>
            <button
              data-testid="multiplayer-btn"
              onClick={() => engineRef.current?.setGameState('local_setup')}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold text-xl rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              Local Multiplayer
            </button>
            <button
              data-testid="leaderboard-btn"
              onClick={() => engineRef.current?.setGameState('leaderboard')}
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl rounded-lg shadow-lg transition-all transform hover:scale-105"
            >
              Leaderboard
            </button>
          </div>
        </div>
      )}

      {/* Level Select Screen */}
      {gameState === 'level_select' && (
        <div id="levelSelect" className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-700 to-green-800">
          <h2 className="text-4xl font-bold text-white mb-8">Select Course</h2>
          
          <div className="flex gap-6">
            <LevelCard
              id="forest"
              name="Forest"
              description="A peaceful forest with lush green grass"
              color="from-green-500 to-green-600"
              par={3}
              onClick={() => {
                engineRef.current?.loadLevel('forest');
                engineRef.current?.startGame('single');
              }}
            />
            <LevelCard
              id="desert"
              name="Desert"
              description="Hot desert with sandy terrain"
              color="from-yellow-500 to-yellow-600"
              par={4}
              onClick={() => {
                engineRef.current?.loadLevel('desert');
                engineRef.current?.startGame('single');
              }}
            />
            <LevelCard
              id="snow"
              name="Ice"
              description="Frozen wonderland with slippery ice"
              color="from-blue-300 to-blue-400"
              par={3}
              onClick={() => {
                engineRef.current?.loadLevel('snow');
                engineRef.current?.startGame('single');
              }}
            />
          </div>
          
          <button
            onClick={() => engineRef.current?.setGameState('menu')}
            className="mt-8 px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition-all"
          >
            Back to Menu
          </button>
        </div>
      )}

      {/* Local Multiplayer Setup */}
      {gameState === 'local_setup' && (
        <div id="multiplayerLobby" className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-blue-800">
          <h2 className="text-4xl font-bold text-white mb-8">Local Multiplayer</h2>
          
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
            <label className="text-white text-xl mb-4 block">Number of Players:</label>
            <select
              data-testid="local-player-count"
              className="w-full p-3 rounded-lg bg-white text-gray-800 font-bold text-lg mb-6"
              defaultValue={2}
              onChange={(e) => engineRef.current?.setMultiplayerPlayerCount(parseInt(e.target.value))}
            >
              <option value={2}>2 Players</option>
              <option value={3}>3 Players</option>
              <option value={4}>4 Players</option>
            </select>
            
            <label className="text-white text-xl mb-4 block">Select Course:</label>
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => engineRef.current?.loadLevel('forest')}
                className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all"
              >
                🌲 Forest
              </button>
              <button
                onClick={() => engineRef.current?.loadLevel('desert')}
                className="flex-1 px-4 py-3 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg transition-all"
              >
                🏜️ Desert
              </button>
              <button
                onClick={() => engineRef.current?.loadLevel('snow')}
                className="flex-1 px-4 py-3 bg-blue-400 hover:bg-blue-300 text-white font-bold rounded-lg transition-all"
              >
                ❄️ Ice
              </button>
            </div>
            
            <div className="mt-6 flex gap-4">
              <button
                data-testid="local-start-btn"
                onClick={() => {
                  const state = engineRef.current?.getMultiplayerState();
                  const playerCount = state?.playerCount || 2;
                  const currentLevel = engineRef.current?.getCurrentLevel() || 'forest';
                  engineRef.current?.loadLevel(currentLevel);
                  engineRef.current?.startGame('local_multiplayer', playerCount);
                }}
                className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all"
              >
                Start Game
              </button>
              <button
                data-testid="local-exit-btn"
                onClick={() => engineRef.current?.setGameState('menu')}
                className="flex-1 px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-bold rounded-lg transition-all"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Leaderboard Screen */}
      {gameState === 'leaderboard' && (
        <LeaderboardScreen engine={engineRef.current} />
      )}

      {/* Local Multiplayer Result */}
      {gameState === 'local_result' && (
        <LocalResultScreen engine={engineRef.current} />
      )}

      {/* Game HUD */}
      {gameState === 'playing' && <GameHUD engine={engineRef.current} isDragging={isDragging} />}

      {/* Hole Complete Screen */}
      {gameState === 'hole_complete' && (
        <div id="resultScreen" className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-white p-8 rounded-xl text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Hole Complete!</h2>
            <p className="text-xl text-gray-700 mb-2">Strokes: {window.__game?.getState().currentHoleStrokes || 0}</p>
            <p className="text-lg text-gray-500 mb-6">Score: +{window.__game?.getState().currentScore || 0}</p>
            
            <button
              data-testid="result-next"
              onClick={() => engineRef.current?.nextState()}
              className="px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Tournament Complete Screen */}
      {gameState === 'tournament_complete' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600">
          <div className="bg-white p-8 rounded-xl text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-yellow-600 mb-4">🎉 Tournament Complete! 🎉</h2>
            <p className="text-xl text-gray-700 mb-2">Total Strokes: {window.__game?.getState().totalStrokes || 0}</p>
            <p className="text-lg text-gray-500 mb-6">Total Score: {window.__game?.getState().totalScore || 0}</p>
            
            <div className="flex gap-4">
              <button
                onClick={() => engineRef.current?.setGameState('menu')}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg transition-all"
              >
                Back to Menu
              </button>
              <button
                onClick={() => engineRef.current?.setGameState('level_select')}
                className="px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-lg transition-all"
              >
                Play Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Level Card Component
function LevelCard({ id, name, description, color, par, onClick }: {
  id: LevelId;
  name: string;
  description: string;
  color: string;
  par: number;
  onClick: () => void;
}) {
  return (
    <button
      data-testid={`level-${id}`}
      onClick={onClick}
      className={`w-56 h-72 rounded-xl bg-gradient-to-br ${color} flex flex-col items-center justify-center p-6 text-white shadow-xl hover:scale-105 transition-transform`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-sm opacity-80 text-center mb-4">{description}</p>
      <p className="text-lg font-semibold bg-white/20 px-4 py-2 rounded-full">Par {par}</p>
    </button>
  );
}

// Game HUD Component
function GameHUD({ engine, isDragging }: { engine: GameEngine | null; isDragging: boolean }) {
  const shotState = window.__shot?.getState();
  const gameState = window.__game?.getState();
  const ballState = window.__ball?.getState();
  const powerupState = window.__powerups?.getState();
  const multiplayerState = window.__multiplayer?.getState();

  if (!engine) return null;

  return (
    <div className="absolute inset-x-0 top-0 p-4 pointer-events-none">
      <div className="flex justify-between items-start">
        {/* Left: Game Info */}
        <div className="bg-black/50 text-white p-4 rounded-lg pointer-events-auto">
          <div className="flex gap-6">
            <div>
              <p className="text-sm text-gray-300">Strokes</p>
              <p data-testid="stroke-count" className="text-2xl font-bold">{gameState?.currentHoleStrokes || 0}</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Par</p>
              <p className="text-2xl font-bold">{gameState?.currentLevel?.par || 3}</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Score</p>
              <p className="text-2xl font-bold">{gameState?.totalScore || 0}</p>
            </div>
          </div>
          
          {/* Current Player in Multiplayer */}
          {multiplayerState?.enabled && (
            <div className="mt-2 pt-2 border-t border-white/20">
              <p data-testid="current-player" className="text-sm">
                Current: <span className="font-bold">{multiplayerState.players[multiplayerState.turnIndex]?.name || 'Player 1'}</span>
              </p>
            </div>
          )}
          
          {/* Surface Friction */}
          <div className="mt-2 pt-2 border-t border-white/20">
            <p className="text-sm text-gray-300">Surface: <span className="text-white">{ballState?.currentSurface || 'grass'}</span></p>
            <p data-testid="surface-friction" className="text-sm text-gray-300">
              Friction: <span className="text-white font-mono">{(ballState?.friction || 0.015).toFixed(4)}</span>
            </p>
          </div>
        </div>
        
        {/* Right: Power */}
        <div className="bg-black/50 text-white p-4 rounded-lg pointer-events-auto">
          <p className="text-sm text-gray-300 mb-2">Shot Power</p>
          <div className="w-32 h-4 bg-gray-700 rounded-full overflow-hidden">
            <div
              data-testid="shot-power"
              className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all"
              style={{ width: `${Math.min(100, ((shotState?.power || 0) / 15) * 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1 text-center">
            {isDragging ? `${Math.round((shotState?.power || 0) / 15 * 100)}%` : 'Drag to aim'}
          </p>
        </div>
      </div>
      
      {/* Aim Feedback */}
      {isDragging && shotState && (
        <div data-testid="aim-feedback" className="absolute left-1/2 top-24 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
          <p className="text-sm">
            Direction: {shotState.direction.x.toFixed(2)}, {shotState.direction.z.toFixed(2)}
          </p>
        </div>
      )}
      
      {/* Physics Motion Feedback */}
      <div data-testid="physics-motion" className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded text-xs">
        <p>Moving: {ballState?.moving ? 'Yes' : 'No'}</p>
        <p>Speed: {(ballState?.speed || 0).toFixed(3)}</p>
      </div>
      
      {/* Physics Contact Feedback */}
      <div data-testid="physics-contact" className="absolute bottom-4 left-48 bg-black/50 text-white p-2 rounded text-xs">
        <p>Last Collision: {ballState?.lastCollision || 'None'}</p>
      </div>
      
      {/* Bottom: Controls */}
      <div className="absolute bottom-4 right-4 flex gap-2 pointer-events-auto">
        {/* Powerup Status */}
        <div data-testid="powerup-status" className="bg-black/50 text-white p-3 rounded-lg">
          <p className="text-xs text-gray-300 mb-1">Powerups</p>
          <div className="flex gap-2">
            {powerupState?.inventory.map((p, i) => (
              <div key={i} className="text-center">
                <span className="text-lg">
                  {p.type === 'hole_in_one' ? '🎯' : p.type === 'bounce_pad' ? '🔄' : '⚡'}
                </span>
                <span className="text-xs ml-1">{p.count}</span>
              </div>
            ))}
            {powerupState?.inventory.length === 0 && (
              <span className="text-xs text-gray-400">None</span>
            )}
          </div>
          
          {/* Hole in One Button */}
          {powerupState?.inventory.some(p => p.type === 'hole_in_one' && p.count > 0) && (
            <button
              data-testid="powerup-hio"
              onClick={() => engine.armHoleInOne()}
              className={`mt-2 w-full text-xs py-1 px-2 rounded ${
                powerupState.armedType === 'hole_in_one'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-yellow-600 hover:bg-yellow-500 text-white'
              }`}
            >
              {powerupState.armedType === 'hole_in_one' ? '🎯 ARMED' : '🎯 Use Hole-in-One'}
            </button>
          )}
        </div>
        
        {/* Camera Controls */}
        <div className="flex flex-col gap-1">
          <button
            data-testid="zoom-in"
            onClick={() => engine.setZoom(-2)}
            className="p-2 bg-white/80 hover:bg-white rounded shadow"
          >
            🔍+
          </button>
          <button
            data-testid="zoom-out"
            onClick={() => engine.setZoom(2)}
            className="p-2 bg-white/80 hover:bg-white rounded shadow"
          >
            🔍-
          </button>
        </div>
        
        {/* Reset Ball */}
        <button
          data-testid="reset-position"
          onClick={() => engine.resetBall()}
          className="p-2 bg-red-500 hover:bg-red-400 text-white rounded shadow"
        >
          Reset Ball
        </button>
        
        {/* Back to Menu */}
        <button
          onClick={() => engine.setGameState('menu')}
          className="p-2 bg-gray-500 hover:bg-gray-400 text-white rounded shadow"
        >
          Menu
        </button>
      </div>
    </div>
  );
}

// Leaderboard Screen Component
function LeaderboardScreen({ engine }: { engine: GameEngine | null }) {
  const leaderboard = engine?.getLeaderboard();
  
  return (
    <div id="leaderboardScreen" className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-purple-900 p-8">
      <h2 className="text-4xl font-bold text-white mb-8">Leaderboard</h2>
      
      <div className="flex gap-8 w-full max-w-5xl">
        {/* Level Bests */}
        {['forest', 'desert', 'snow'].map(levelId => (
          <div key={levelId} className="flex-1 bg-white/10 rounded-xl p-4 backdrop-blur">
            <h3 className="text-xl font-bold text-white mb-4 text-center capitalize">{levelId}</h3>
            {leaderboard?.levelBest[levelId]?.length ? (
              <table className="w-full text-white">
                <thead>
                  <tr className="text-xs text-purple-300">
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-left">Player</th>
                    <th className="p-2 text-right">Strokes</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.levelBest[levelId].slice(0, 5).map((entry, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="p-2">{entry.rank}</td>
                      <td className="p-2">{entry.playerName}</td>
                      <td className="p-2 text-right">{entry.strokes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-purple-300 text-center text-sm">No records yet</p>
            )}
          </div>
        ))}
      </div>
      
      {/* Overall */}
      <div className="mt-8 w-full max-w-3xl bg-white/10 rounded-xl p-4 backdrop-blur">
        <h3 className="text-xl font-bold text-white mb-4 text-center">Overall Ranking</h3>
        {leaderboard?.overall?.length ? (
          <table className="w-full text-white">
            <thead>
              <tr className="text-xs text-purple-300">
                <th className="p-2 text-left">#</th>
                <th className="p-2 text-left">Player</th>
                <th className="p-2 text-center">Forest</th>
                <th className="p-2 text-center">Desert</th>
                <th className="p-2 text-center">Ice</th>
                <th className="p-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.overall.map((entry, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="p-2">{entry.rank}</td>
                  <td className="p-2">{entry.playerName}</td>
                  <td className="p-2 text-center">{entry.levelStrokes.forest}</td>
                  <td className="p-2 text-center">{entry.levelStrokes.desert}</td>
                  <td className="p-2 text-center">{entry.levelStrokes.snow}</td>
                  <td className="p-2 text-right font-bold">{entry.totalStrokes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-purple-300 text-center text-sm">Complete all three courses to see overall ranking</p>
        )}
      </div>
      
      <button
        onClick={() => engine?.setGameState('menu')}
        className="mt-8 px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all"
      >
        Back to Menu
      </button>
    </div>
  );
}

// Local Multiplayer Result Screen
function LocalResultScreen({ engine }: { engine: GameEngine | null }) {
  const multiplayer = engine?.getMultiplayerState();
  const leaderboard = engine?.getLeaderboard();
  
  return (
    <div id="localLeaderboardScreen" className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 p-8">
      <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl">
        {multiplayer?.winnerId ? (
          <>
            <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
              🏆 {multiplayer.players.find(p => p.id === multiplayer.winnerId)?.name} Wins! 🏆
            </h2>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-yellow-600 mb-4 text-center">
              🤝 It's a Tie! 🤝
            </h2>
          </>
        )}
        
        {/* Leaderboard for tied players */}
        <div data-testid="local-match-leaderboard" className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Final Standings</h3>
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-500">
                <th className="p-2 text-left">#</th>
                <th className="p-2 text-left">Player</th>
                <th className="p-2 text-right">Strokes</th>
                <th className="p-2 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {multiplayer?.players
                .sort((a, b) => a.totalStrokes - b.totalStrokes)
                .map((player, i) => (
                  <tr key={player.id} className={`border-t ${player.id === multiplayer.winnerId ? 'bg-yellow-50' : multiplayer.tiedPlayerIds.includes(player.id) ? 'bg-blue-50' : ''}`}>
                    <td className="p-2">{i + 1}</td>
                    <td className="p-2 font-semibold">{player.name}</td>
                    <td className="p-2 text-right">{player.totalStrokes}</td>
                    <td className="p-2 text-right">
                      {player.id === multiplayer.winnerId ? '🏆 Winner' : 
                       multiplayer.tiedPlayerIds.includes(player.id) ? '🤝 Tied' : ''}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => engine?.setGameState('menu')}
            className="flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-400 text-white font-bold rounded-lg transition-all"
          >
            Back to Menu
          </button>
          <button
            onClick={() => {
              const playerCount = multiplayer?.playerCount || 2;
              engine?.loadLevel('forest');
              engine?.startGame('local_multiplayer', playerCount);
            }}
            className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-lg transition-all"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}