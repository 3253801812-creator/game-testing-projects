import { useCallback, useEffect, useRef, useState } from 'react';
import { GameState, GameMode, LevelId, Player } from '../types';

const LEADERBOARD_KEY = 'mini-golf-leaderboard';

export interface GameData {
  gameState: GameState;
  mode: GameMode;
  currentLevelId: LevelId | null;
  players: Player[];
  currentPlayerIndex: number;
  startTime: number;
}

const defaultPlayer = (id: string, name: string): Player => ({
  id,
  name,
  holeStrokes: 0,
  totalStrokes: 0,
  finished: false,
  ballPosition: { x: 0, y: 0, z: 0 },
  powerupInventory: [
    { type: 'bounce_pad', count: 0 },
    { type: 'speed_boost', count: 0 },
    { type: 'hole_in_one', count: 0 },
  ],
  armedPowerup: null,
});

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [mode, setMode] = useState<GameMode>('single');
  const [currentLevelId, setCurrentLevelId] = useState<LevelId | null>(null);
  const [players, setPlayers] = useState<Player[]>([defaultPlayer('p1', '玩家1')]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<number | null>(null);

  // Timer
  useEffect(() => {
    if (gameState === 'playing') {
      startTimeRef.current = Date.now();
      timerRef.current = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameState]);

  const startGame = useCallback((levelId: LevelId, gameMode: GameMode, playerCount: number = 1) => {
    const newPlayers: Player[] = [];
    for (let i = 0; i < playerCount; i++) {
      newPlayers.push(defaultPlayer(`p${i + 1}`, `玩家${i + 1}`));
    }
    setPlayers(newPlayers);
    setMode(gameMode);
    setCurrentLevelId(levelId);
    setCurrentPlayerIndex(0);
    setElapsedTime(0);
    setGameState('playing');
  }, []);

  const resetBall = useCallback((playerIndex: number, position: { x: number; y: number; z: number }) => {
    setPlayers(prev => {
      const newPlayers = [...prev];
      newPlayers[playerIndex] = {
        ...newPlayers[playerIndex],
        ballPosition: { ...position },
      };
      return newPlayers;
    });
  }, []);

  const addStroke = useCallback((playerIndex: number) => {
    setPlayers(prev => {
      const newPlayers = [...prev];
      newPlayers[playerIndex] = {
        ...newPlayers[playerIndex],
        holeStrokes: newPlayers[playerIndex].holeStrokes + 1,
      };
      return newPlayers;
    });
  }, []);

  const completeHole = useCallback((playerIndex: number) => {
    setPlayers(prev => {
      const newPlayers = [...prev];
      newPlayers[playerIndex] = {
        ...newPlayers[playerIndex],
        totalStrokes: newPlayers[playerIndex].totalStrokes + newPlayers[playerIndex].holeStrokes,
        finished: true,
      };
      return newPlayers;
    });
  }, []);

  const nextPlayer = useCallback(() => {
    setCurrentPlayerIndex(prev => (prev + 1) % players.length);
  }, [players.length]);

  const updatePlayerPowerup = useCallback((playerIndex: number, type: 'bounce_pad' | 'speed_boost' | 'hole_in_one', count: number) => {
    setPlayers(prev => {
      const newPlayers = [...prev];
      const inventory = [...newPlayers[playerIndex].powerupInventory];
      const idx = inventory.findIndex(p => p.type === type);
      if (idx >= 0) {
        inventory[idx] = { type, count: Math.max(0, inventory[idx].count + count) };
      }
      newPlayers[playerIndex] = {
        ...newPlayers[playerIndex],
        powerupInventory: inventory,
      };
      return newPlayers;
    });
  }, []);

  const armPowerup = useCallback((playerIndex: number, type: 'hole_in_one' | null) => {
    setPlayers(prev => {
      const newPlayers = [...prev];
      newPlayers[playerIndex] = {
        ...newPlayers[playerIndex],
        armedPowerup: type,
      };
      return newPlayers;
    });
  }, []);

  const useArmedPowerup = useCallback((playerIndex: number) => {
    setPlayers(prev => {
      const newPlayers = [...prev];
      const player = newPlayers[playerIndex];
      if (player.armedPowerup) {
        const inventory = player.powerupInventory.map(p => 
          p.type === player.armedPowerup ? { ...p, count: Math.max(0, p.count - 1) } : p
        );
        newPlayers[playerIndex] = {
          ...player,
          powerupInventory: inventory,
          armedPowerup: null,
        };
      }
      return newPlayers;
    });
  }, []);

  const goToMenu = useCallback(() => {
    setGameState('menu');
    setCurrentLevelId(null);
  }, []);

  const goToLevelSelect = useCallback(() => {
    setGameState('level_select');
  }, []);

  const goToMultiplayerSetup = useCallback(() => {
    setGameState('local_setup');
  }, []);

  const goToLeaderboard = useCallback(() => {
    setGameState('leaderboard');
  }, []);

  const setResultState = useCallback((isTie: boolean) => {
    setGameState(isTie ? 'local_result' : 'hole_complete');
  }, []);

  const currentPlayer = players[currentPlayerIndex];

  return {
    gameState,
    mode,
    currentLevelId,
    players,
    currentPlayerIndex,
    currentPlayer,
    elapsedTime,
    startGame,
    resetBall,
    addStroke,
    completeHole,
    nextPlayer,
    updatePlayerPowerup,
    armPowerup,
    useArmedPowerup,
    goToMenu,
    goToLevelSelect,
    goToMultiplayerSetup,
    goToLeaderboard,
    setResultState,
    setGameState,
    setPlayers,
  };
}

// Leaderboard management
export interface LeaderboardData {
  levelBest: Record<string, Array<{
    playerId: string;
    playerName: string;
    strokes: number;
    rank: number;
    par: number;
    relativeToPar: number;
    achievedAt: number;
  }>>;
  overall: Array<{
    playerId: string;
    playerName: string;
    levelStrokes: { forest: number; desert: number; snow: number };
    totalStrokes: number;
    rank: number;
    achievedAt: number;
  }>;
}

export function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardData>(() => {
    try {
      const saved = localStorage.getItem(LEADERBOARD_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load leaderboard:', e);
    }
    return { levelBest: {}, overall: [] };
  });

  const saveLevelScore = useCallback((levelId: string, playerId: string, playerName: string, strokes: number, par: number) => {
    setLeaderboard(prev => {
      const newLevelBest = { ...prev.levelBest };
      const entries = newLevelBest[levelId] || [];
      
      // Check if player already has a better score
      const existingIdx = entries.findIndex(e => e.playerId === playerId);
      if (existingIdx >= 0 && entries[existingIdx].strokes <= strokes) {
        // Don't update if existing score is better or equal
        return prev;
      }
      
      // Remove existing entry for this player if any
      const filtered = entries.filter(e => e.playerId !== playerId);
      
      // Add new entry
      const newEntry = {
        playerId,
        playerName,
        strokes,
        par,
        relativeToPar: strokes - par,
        achievedAt: Date.now(),
        rank: 0,
      };
      filtered.push(newEntry);
      
      // Sort: by strokes ascending, then by achievedAt ascending, then by playerId ascending
      filtered.sort((a, b) => {
        if (a.strokes !== b.strokes) return a.strokes - b.strokes;
        if (a.achievedAt !== b.achievedAt) return a.achievedAt - b.achievedAt;
        return a.playerId.localeCompare(b.playerId);
      });
      
      // Assign ranks
      filtered.forEach((entry, idx) => {
        entry.rank = idx + 1;
      });
      
      newLevelBest[levelId] = filtered;
      
      const newData = { ...prev, levelBest: newLevelBest };
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(newData));
      return newData;
    });
  }, []);

  const recalculateOverall = useCallback(() => {
    setLeaderboard(prev => {
      const overall: LeaderboardData['overall'] = [];
      const playerLevelScores: Record<string, { forest?: number; desert?: number; snow?: number; playerName: string; achievedAt: number }> = {};
      
      // Collect all player scores across levels
      for (const [levelId, entries] of Object.entries(prev.levelBest)) {
        for (const entry of entries) {
          if (!playerLevelScores[entry.playerId]) {
            playerLevelScores[entry.playerId] = {
              playerName: entry.playerName,
              achievedAt: entry.achievedAt,
            };
          }
          playerLevelScores[entry.playerId][levelId as 'forest' | 'desert' | 'snow'] = entry.strokes;
          // Update to earliest achievedAt
          playerLevelScores[entry.playerId].achievedAt = Math.min(
            playerLevelScores[entry.playerId].achievedAt,
            entry.achievedAt
          );
        }
      }
      
      // Create overall entries for players with all 3 levels
      for (const [playerId, data] of Object.entries(playerLevelScores)) {
        if (data.forest && data.desert && data.snow) {
          overall.push({
            playerId,
            playerName: data.playerName,
            levelStrokes: {
              forest: data.forest,
              desert: data.desert,
              snow: data.snow,
            },
            totalStrokes: data.forest + data.desert + data.snow,
            achievedAt: data.achievedAt,
            rank: 0,
          });
        }
      }
      
      // Sort: by totalStrokes ascending, then by achievedAt ascending, then by playerId ascending
      overall.sort((a, b) => {
        if (a.totalStrokes !== b.totalStrokes) return a.totalStrokes - b.totalStrokes;
        if (a.achievedAt !== b.achievedAt) return a.achievedAt - b.achievedAt;
        return a.playerId.localeCompare(b.playerId);
      });
      
      // Assign ranks
      overall.forEach((entry, idx) => {
        entry.rank = idx + 1;
      });
      
      const newData = { ...prev, overall };
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(newData));
      return newData;
    });
  }, []);

  return {
    leaderboard,
    saveLevelScore,
    recalculateOverall,
  };
}