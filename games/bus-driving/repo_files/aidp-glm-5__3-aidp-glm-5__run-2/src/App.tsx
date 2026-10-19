import { useEffect, useRef, useState, useCallback } from 'react';
import { GameEngine } from './game/GameEngine';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<GameEngine | null>(null);
  const [phase, setPhase] = useState<'menu' | 'playing' | 'paused' | 'complete'>('menu');
  const [busState, setBusState] = useState({
    speedKph: 0,
    fuel: 100,
    onboard: 4,
    doorOpen: false,
    headlights: false,
    indicator: 'off' as 'off' | 'left' | 'right',
    parkingBrake: false,
    nextStop: 'Kota Lama',
    nextStopDistance: 25,
    routeProgress: 0,
    earnings: 0,
    atStop: false,
    boardingProgress: 0,
    message: 'Board the coach and begin the route.',
    missionStatus: 'Ready for departure'
  });

  const [showMobileControls, setShowMobileControls] = useState(false);
  const [quality, setQuality] = useState('cinematic');
  const [cameraMode, setCameraMode] = useState('chase');

  // Initialize game engine
  useEffect(() => {
    if (containerRef.current && !gameRef.current) {
      gameRef.current = new GameEngine(containerRef.current);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.dispose();
        gameRef.current = null;
      }
    };
  }, []);

  // Update UI from game state
  useEffect(() => {
    const updateUI = () => {
      if (!gameRef.current) return;

      try {
        const bus = (window as any).__bus?.getState?.();
        const game = (window as any).__game?.getState?.();
        const route = (window as any).__route?.getState?.();
        const passengers = (window as any).__passengers?.getState?.();
        const vehicle = (window as any).__vehicle?.getState?.();
        const settings = (window as any).__settings?.getState?.();
        const camera = (window as any).__camera?.getState?.();

        if (bus && game && route && passengers && vehicle && settings && camera) {
          setPhase(game.phase);
          setBusState({
            speedKph: Math.round(bus.speedKph),
            fuel: Math.round(bus.fuel),
            onboard: passengers.onboard,
            doorOpen: vehicle.doorOpen,
            headlights: vehicle.headlights,
            indicator: vehicle.indicator,
            parkingBrake: vehicle.parkingBrake,
            nextStop: route.stops[route.currentStopIndex]?.name || 'Complete',
            nextStopDistance: Math.round(route.nextStopDistance),
            routeProgress: bus.routeProgress,
            earnings: route.earnings,
            atStop: route.atStop,
            boardingProgress: passengers.boardingProgress,
            message: game.message,
            missionStatus: game.missionStatus
          });
          setQuality(settings.quality);
          setCameraMode(camera.mode);
          setShowMobileControls(window.innerWidth < 768 || (window as any).__input?.getState?.()?.mobileControls);
        }
      } catch (e) {
        // Ignore errors during initial load
      }
    };

    const interval = setInterval(updateUI, 100);
    return () => clearInterval(interval);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter' && phase === 'menu') {
        gameRef.current?.startGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase]);

  const handleStart = useCallback(() => {
    gameRef.current?.startGame();
  }, []);

  const handlePause = useCallback(() => {
    if (phase === 'playing') gameRef.current?.pauseGame();
    else if (phase === 'paused') gameRef.current?.resumeGame();
  }, [phase]);

  const handleReset = useCallback(() => {
    gameRef.current?.resetGame();
  }, []);

  const handleCameraCycle = useCallback(() => {
    gameRef.current?.cycleCamera();
  }, []);

  

  const handleTouchControl = useCallback((control: string, active: boolean) => {
    gameRef.current?.setTouchControl(control, active);
  }, []);

  const handleToggleDoor = useCallback(() => {
    gameRef.current?.toggleDoor();
  }, []);

  const handleToggleParkingBrake = useCallback(() => {
    gameRef.current?.toggleParkingBrake();
  }, []);

  const handleToggleHeadlights = useCallback(() => {
    gameRef.current?.toggleHeadlights();
  }, []);

  const handleSetIndicator = useCallback((dir: 'off' | 'left' | 'right') => {
    gameRef.current?.setIndicator(dir);
  }, []);

  const handleHonk = useCallback((active: boolean) => {
    gameRef.current?.honk(active);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Game Canvas Container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Menu Overlay */}
      {phase === 'menu' && (
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black/90 flex flex-col items-center justify-center text-white z-50">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-yellow-400 drop-shadow-lg">
              BUS SIMULATOR
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-green-400">
              Indonesia Deluxe Edition
            </h2>
            <div className="bg-black/40 rounded-xl p-6 mb-8 max-w-md mx-4">
              <h3 className="text-xl font-bold mb-4 text-yellow-300">Controls</h3>
              <div className="grid grid-cols-2 gap-2 text-sm md:text-base text-left">
                <span className="text-gray-300">Accelerate:</span><span className="text-white font-mono">W</span>
                <span className="text-gray-300">Brake/Reverse:</span><span className="text-white font-mono">S</span>
                <span className="text-gray-300">Steer Left:</span><span className="text-white font-mono">A</span>
                <span className="text-gray-300">Steer Right:</span><span className="text-white font-mono">D</span>
                <span className="text-gray-300">Door Toggle:</span><span className="text-white font-mono">E</span>
                <span className="text-gray-300">Headlights:</span><span className="text-white font-mono">H</span>
                <span className="text-gray-300">Left Indicator:</span><span className="text-white font-mono">Z</span>
                <span className="text-gray-300">Right Indicator:</span><span className="text-white font-mono">X</span>
                <span className="text-gray-300">Horn:</span><span className="text-white font-mono">V</span>
                <span className="text-gray-300">Camera:</span><span className="text-white font-mono">C</span>
                <span className="text-gray-300">Quality:</span><span className="text-white font-mono">Q</span>
                <span className="text-gray-300">Pause:</span><span className="text-white font-mono">ESC</span>
                <span className="text-gray-300">Reset:</span><span className="text-white font-mono">R</span>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="px-12 py-4 bg-gradient-to-r from-green-500 to-green-600 text-2xl font-bold rounded-xl shadow-lg hover:from-green-400 hover:to-green-500 transition-all transform hover:scale-105"
            >
              START ROUTE
            </button>
            <p className="text-gray-400 mt-4">or press SPACE or ENTER</p>
          </div>
        </div>
      )}

      {/* Complete Overlay */}
      {phase === 'complete' && (
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/90 flex flex-col items-center justify-center text-white z-50">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400">
              ROUTE COMPLETE!
            </h1>
            <div className="bg-black/40 rounded-xl p-6 mb-8">
              <p className="text-3xl mb-2">Total Earnings:</p>
              <p className="text-5xl font-bold text-green-400">Rp {busState.earnings.toLocaleString()}</p>
              <p className="text-xl mt-4">Passengers Boarded: {busState.onboard}</p>
            </div>
            <button
              onClick={handleReset}
              className="px-12 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-2xl font-bold rounded-xl shadow-lg hover:from-blue-400 hover:to-blue-500 transition-all"
            >
              PLAY AGAIN
            </button>
          </div>
        </div>
      )}

      {/* HUD */}
      {phase !== 'menu' && phase !== 'complete' && (
        <>
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-2 md:p-4 z-40">
            {/* Speed & Fuel */}
            <div className="bg-black/60 rounded-lg p-2 md:p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white font-mono">
                    {busState.speedKph}
                  </div>
                  <div className="text-xs text-gray-400">KM/H</div>
                </div>
                <div className="w-px h-12 bg-gray-600" />
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                    </svg>
                    <span className="text-xl md:text-2xl font-bold text-yellow-400 font-mono">
                      {Math.round(busState.fuel)}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">FUEL %</div>
                </div>
              </div>
            </div>

            {/* Status & Message */}
            <div className="bg-black/60 rounded-lg p-2 md:p-3 backdrop-blur-sm text-center flex-1 mx-2 max-w-md">
              <div className="text-green-400 font-semibold text-sm md:text-base">{busState.missionStatus}</div>
              <div className="text-gray-300 text-xs md:text-sm">{busState.message}</div>
            </div>

            {/* Passengers & Earnings */}
            <div className="bg-black/60 rounded-lg p-2 md:p-3 backdrop-blur-sm">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="text-center">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                    <span className="text-xl md:text-2xl font-bold text-white font-mono">{busState.onboard}</span>
                  </div>
                  <div className="text-xs text-gray-400">PAX</div>
                </div>
                <div className="w-px h-10 bg-gray-600" />
                <div className="text-center">
                  <div className="text-lg md:text-xl font-bold text-green-400 font-mono">
                    Rp {busState.earnings.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">EARNINGS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Stop Panel */}
          <div className="absolute top-20 md:top-24 left-2 md:left-4 bg-black/60 rounded-lg p-2 md:p-3 backdrop-blur-sm z-40">
            <div className="text-gray-400 text-xs">NEXT STOP</div>
            <div className="text-white font-bold">{busState.nextStop}</div>
            <div className="text-yellow-400 font-mono text-sm">{busState.nextStopDistance}m</div>
            <div className="w-full h-2 bg-gray-700 rounded mt-2">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded transition-all"
                style={{ width: `${busState.routeProgress * 100}%` }}
              />
            </div>
          </div>

          {/* Boarding Progress */}
          {busState.atStop && busState.boardingProgress > 0 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 rounded-xl p-6 z-40">
              <div className="text-white text-center">
                <div className="text-xl font-bold text-green-400 mb-2">Boarding Passengers...</div>
                <div className="w-48 h-3 bg-gray-700 rounded">
                  <div 
                    className="h-full bg-green-500 rounded transition-all"
                    style={{ width: `${busState.boardingProgress * 100}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Controls Panel */}
          <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-black/60 rounded-lg p-2 md:p-3 backdrop-blur-sm z-40">
            <div className="flex flex-wrap gap-1 md:gap-2">
              <button
                onClick={handlePause}
                className={`px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-sm font-semibold transition-all ${
                  phase === 'paused' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {phase === 'paused' ? '▶ RESUME' : '⏸ PAUSE'}
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-1 md:px-4 md:py-2 bg-gray-700 text-gray-300 rounded text-xs md:text-sm font-semibold hover:bg-gray-600 transition-all"
              >
                ↻ RESET
              </button>
              <button
                onClick={handleCameraCycle}
                className="px-3 py-1 md:px-4 md:py-2 bg-gray-700 text-gray-300 rounded text-xs md:text-sm font-semibold hover:bg-gray-600 transition-all"
              >
                📷 {cameraMode.toUpperCase()}
              </button>
              <button
                onClick={() => {
                  const newQuality = quality === 'cinematic' ? 'high' : quality === 'high' ? 'balanced' : 'cinematic';
                  // Force update through window hook
                  if ((window as any).__settings) {
                    (window as any).__settings.quality = newQuality;
                  }
                }}
                className="px-3 py-1 md:px-4 md:py-2 bg-gray-700 text-gray-300 rounded text-xs md:text-sm font-semibold hover:bg-gray-600 transition-all"
              >
                ⚡ {quality.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Vehicle Controls */}
          <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-black/60 rounded-lg p-2 md:p-3 backdrop-blur-sm z-40">
            <div className="flex flex-wrap gap-1 md:gap-2">
              <button
                onClick={handleToggleDoor}
                className={`px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-sm font-semibold transition-all ${
                  busState.doorOpen ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                🚪 DOOR
              </button>
              <button
                onClick={handleToggleParkingBrake}
                className={`px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-sm font-semibold transition-all ${
                  busState.parkingBrake ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                🅿️ BRAKE
              </button>
              <button
                onClick={handleToggleHeadlights}
                className={`px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-sm font-semibold transition-all ${
                  busState.headlights ? 'bg-yellow-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                💡 LIGHTS
              </button>
              <button
                onMouseDown={() => handleHonk(true)}
                onMouseUp={() => handleHonk(false)}
                onMouseLeave={() => handleHonk(false)}
                className="px-3 py-1 md:px-4 md:py-2 bg-gray-700 text-gray-300 rounded text-xs md:text-sm font-semibold hover:bg-gray-600 active:bg-yellow-600 transition-all"
              >
                📢 HORN
              </button>
            </div>
            <div className="flex gap-1 mt-2">
              <button
                onClick={() => handleSetIndicator(busState.indicator === 'left' ? 'off' : 'left')}
                className={`flex-1 px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-sm font-semibold transition-all ${
                  busState.indicator === 'left' ? 'bg-orange-500 text-white animate-pulse' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                ⬅️
              </button>
              <button
                onClick={() => handleSetIndicator('off')}
                className={`px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-sm font-semibold transition-all ${
                  busState.indicator === 'off' ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                ⚫
              </button>
              <button
                onClick={() => handleSetIndicator(busState.indicator === 'right' ? 'off' : 'right')}
                className={`flex-1 px-3 py-1 md:px-4 md:py-2 rounded text-xs md:text-sm font-semibold transition-all ${
                  busState.indicator === 'right' ? 'bg-orange-500 text-white animate-pulse' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                ➡️
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          {showMobileControls && (
            <div className="absolute bottom-24 left-2 right-2 flex justify-between items-end z-40">
              {/* Left side - Steering */}
              <div className="flex gap-2">
                <button
                  onTouchStart={() => handleTouchControl('steerLeft', true)}
                  onTouchEnd={() => handleTouchControl('steerLeft', false)}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gray-800/80 rounded-full flex items-center justify-center text-white text-2xl font-bold active:bg-blue-600"
                >
                  ◀
                </button>
              </div>

              {/* Right side - Throttle/Brake */}
              <div className="flex flex-col gap-2">
                <button
                  onTouchStart={() => handleTouchControl('throttle', true)}
                  onTouchEnd={() => handleTouchControl('throttle', false)}
                  className="w-16 h-16 md:w-20 md:h-20 bg-green-700/80 rounded-full flex items-center justify-center text-white text-xl font-bold active:bg-green-500"
                >
                  ▲ GAS
                </button>
                <button
                  onTouchStart={() => handleTouchControl('brake', true)}
                  onTouchEnd={() => handleTouchControl('brake', false)}
                  className="w-16 h-16 md:w-20 md:h-20 bg-red-700/80 rounded-full flex items-center justify-center text-white text-xl font-bold active:bg-red-500"
                >
                  ▼ BRAKE
                </button>
              </div>
            </div>
          )}

          {/* Paused Overlay */}
          {phase === 'paused' && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">PAUSED</h2>
                <p className="text-gray-400">Press ESC or click Resume to continue</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}