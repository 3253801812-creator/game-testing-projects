import { useEffect, useRef, useState, useCallback } from 'react';
import { GameEngine } from './game/GameEngine';

interface GameUIProps {
  engine: GameEngine;
  onTogglePause: () => void;
  onReset: () => void;
  onToggleDoor: () => void;
  onToggleHeadlights: () => void;
  onToggleIndicator: () => void;
  onHorn: () => void;
  onCycleCamera: () => void;
  onSetQuality: (q: 'cinematic' | 'high' | 'balanced') => void;
  onStart: () => void;
}

function GameUI({ 
  engine, 
  onTogglePause, 
  onReset, 
  onToggleDoor,
  onToggleHeadlights,
  onToggleIndicator,
  onHorn,
  onCycleCamera,
  onSetQuality,
  onStart
}: GameUIProps) {
  const [state, setState] = useState({
    phase: 'menu',
    speedKph: 0,
    fuel: 100,
    onboard: 4,
    nextStopName: 'Kota Lama',
    nextStopDistance: 100,
    earnings: 0,
    doorOpen: false,
    headlights: false,
    indicator: 'off' as 'off' | 'left' | 'right',
    cameraMode: 'chase',
    quality: 'cinematic',
    paused: false,
    message: '',
    missionStatus: '',
    atStop: false,
    boardingProgress: 0
  });
  
  const [showControls, setShowControls] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const s = engine.getState();
      if (!s) return;
      
      setState(prev => ({
        ...prev,
        phase: s.phase,
        speedKph: Math.abs(s.bus.speedKph),
        fuel: s.bus.fuel,
        onboard: s.passengers.onboard,
        nextStopName: s.route.stops[s.route.currentStopIndex]?.name || 'Terminal',
        nextStopDistance: s.route.nextStopDistance,
        earnings: s.route.earnings,
        doorOpen: s.bus.doorOpen,
        headlights: s.bus.headlights,
        indicator: s.bus.indicator,
        cameraMode: s.camera.mode,
        quality: s.settings.quality,
        paused: s.paused,
        message: s.message,
        missionStatus: s.missionStatus,
        atStop: s.route.atStop,
        boardingProgress: s.passengers.boardingProgress
      }));
    }, 100);
    
    return () => clearInterval(interval);
  }, [engine]);
  
  const isMobile = window.innerWidth < 768;
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 p-3 md:p-4 pointer-events-auto">
        <div className="flex flex-wrap items-start justify-between gap-2">
          {/* Left: Speed, Fuel, Passengers */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {/* Speedometer */}
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white">
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Speed</div>
              <div className="text-xl md:text-2xl font-bold font-mono">
                {Math.round(state.speedKph)}
                <span className="text-xs md:text-sm ml-1">km/h</span>
              </div>
            </div>
            
            {/* Fuel */}
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white">
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Fuel</div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-16 md:w-20 h-2 md:h-2.5 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${state.fuel > 30 ? 'bg-green-500' : state.fuel > 15 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${state.fuel}%` }}
                  />
                </div>
                <span className="text-xs font-mono">{Math.round(state.fuel)}%</span>
              </div>
            </div>
            
            {/* Passengers */}
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white">
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wide">Passengers</div>
              <div className="text-lg md:text-xl font-bold">
                {state.onboard}
                <span className="text-xs md:text-sm text-gray-400">/42</span>
              </div>
            </div>
          </div>
          
          {/* Right: Next Stop, Earnings, Status */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {/* Next Stop */}
            <div className="bg-blue-900/80 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white">
              <div className="text-[10px] md:text-xs text-blue-300 uppercase tracking-wide">Next Stop</div>
              <div className="text-sm md:text-base font-semibold">{state.nextStopName}</div>
              <div className="text-xs text-blue-300">{Math.round(state.nextStopDistance)}m</div>
            </div>
            
            {/* Earnings */}
            <div className="bg-green-900/80 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white">
              <div className="text-[10px] md:text-xs text-green-300 uppercase tracking-wide">Earnings</div>
              <div className="text-sm md:text-base font-bold font-mono">
                Rp {state.earnings.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Status Message */}
      <div className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-center">
          <div className="text-sm md:text-base">{state.missionStatus}</div>
          {state.message && (
            <div className="text-xs text-gray-300 mt-1">{state.message}</div>
          )}
        </div>
      </div>
      
      {/* Stop indicator */}
      {state.atStop && state.phase === 'playing' && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 pointer-events-auto">
          <div className="bg-green-600/90 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-center animate-pulse">
            <div className="text-lg font-bold">At Stop - Open Doors!</div>
            {state.doorOpen && (
              <div className="text-sm mt-1">
                Boarding: {Math.round(state.boardingProgress * 100)}%
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Control buttons - Right side */}
      <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-auto">
        {/* Camera */}
        <button
          onClick={onCycleCamera}
          className="bg-black/70 hover:bg-gray-800 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white transition-colors"
          title="Camera (C)"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        
        {/* Pause */}
        <button
          onClick={onTogglePause}
          className="bg-black/70 hover:bg-gray-800 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white transition-colors"
          title="Pause (P)"
        >
          {state.paused ? (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          )}
        </button>
        
        {/* Settings/Quality */}
        <div className="relative">
          <button
            onClick={() => setShowControls(!showControls)}
            className="bg-black/70 hover:bg-gray-800 backdrop-blur-sm rounded-lg p-2 md:p-3 text-white transition-colors"
            title="Settings"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          {showControls && (
            <div className="absolute right-0 top-full mt-2 bg-black/90 backdrop-blur-sm rounded-lg p-3 text-white min-w-[150px]">
              <div className="text-xs text-gray-400 mb-2">Graphics Quality</div>
              {['cinematic', 'high', 'balanced'].map(q => (
                <button
                  key={q}
                  onClick={() => {
                    onSetQuality(q as 'cinematic' | 'high' | 'balanced');
                    setShowControls(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-sm capitalize ${
                    state.quality === q ? 'bg-blue-600' : 'hover:bg-gray-700'
                  }`}
                >
                  {q}
                </button>
              ))}
              <hr className="my-2 border-gray-700" />
              <button
                onClick={() => {
                  onReset();
                  setShowControls(false);
                }}
                className="w-full text-left px-3 py-2 rounded text-sm text-red-400 hover:bg-gray-700"
              >
                Reset Route
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Vehicle controls - Bottom */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="flex flex-wrap justify-center gap-2">
          {/* Door */}
          <button
            onClick={onToggleDoor}
            className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              state.doorOpen 
                ? 'bg-green-600 text-white' 
                : 'bg-black/70 hover:bg-gray-800 text-white'
            }`}
          >
            🚪 {state.doorOpen ? 'Close' : 'Open'}
          </button>
          
          {/* Headlights */}
          <button
            onClick={onToggleHeadlights}
            className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              state.headlights 
                ? 'bg-yellow-500 text-black' 
                : 'bg-black/70 hover:bg-gray-800 text-white'
            }`}
          >
            💡 Lights
          </button>
          
          {/* Indicator */}
          <button
            onClick={onToggleIndicator}
            className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              state.indicator !== 'off' 
                ? 'bg-orange-500 text-white' 
                : 'bg-black/70 hover:bg-gray-800 text-white'
            }`}
          >
            ⤴️ {state.indicator === 'left' ? '←' : state.indicator === 'right' ? '→' : 'Signal'}
          </button>
          
          {/* Horn */}
          <button
            onMouseDown={onHorn}
            onMouseUp={onHorn}
            onTouchStart={onHorn}
            onTouchEnd={onHorn}
            className="px-3 md:px-4 py-2 bg-black/70 hover:bg-gray-800 rounded-lg font-medium text-sm text-white transition-colors"
          >
            📢 Horn
          </button>
          
          {/* Parking Brake */}
          <button
            onClick={() => {
              const s = engine.getState();
              if (s) {
                s.bus.parkingBrake = !s.bus.parkingBrake;
              }
            }}
            className={`px-3 md:px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              engine.getState()?.bus.parkingBrake 
                ? 'bg-red-600 text-white' 
                : 'bg-black/70 hover:bg-gray-800 text-white'
            }`}
          >
            🅿️ Brake
          </button>
        </div>
      </div>
      
      {/* Mobile touch controls */}
      {isMobile && state.phase === 'playing' && !state.paused && (
        <MobileControls engine={engine} />
      )}
      
      {/* Menu overlay */}
      {state.phase === 'menu' && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center pointer-events-auto">
          <div className="text-center text-white max-w-md px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              🚌 Bus Simulator
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
              Indonesia Premium Edition
            </h2>
            <p className="text-gray-300 mb-8 text-sm md:text-base">
              Drive your bus through the scenic Indonesian countryside. 
              Pick up passengers at each stop and complete your route!
            </p>
            <button
              onClick={onStart}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-bold transition-colors"
            >
              🚀 Start Route
            </button>
            <div className="mt-6 text-xs text-gray-400">
              <div className="mb-2">Controls: W/S - Throttle/Brake | A/D - Steer</div>
              <div>Camera: C | Pause: P | Horn: H</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Paused overlay */}
      {state.phase === 'paused' && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-auto">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">⏸️ Paused</h2>
            <p className="text-gray-300 mb-6">Press P or click to resume</p>
            <button
              onClick={onTogglePause}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
            >
              ▶️ Resume
            </button>
          </div>
        </div>
      )}
      
      {/* Complete overlay */}
      {state.phase === 'complete' && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center pointer-events-auto">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">🎉 Route Complete!</h2>
            <div className="text-2xl text-green-400 mb-2">
              Earnings: Rp {state.earnings.toLocaleString()}
            </div>
            <p className="text-gray-300 mb-6">
              Passengers served: {engine.getState()?.passengers.boardedTotal}
            </p>
            <button
              onClick={onReset}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
            >
              🔄 Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileControls({ engine }: { engine: GameEngine }) {
  const handleTouchStart = useCallback((action: string) => {
    engine.setMobileControls(true);
    engine.handleInput(action, true);
  }, [engine]);
  
  const handleTouchEnd = useCallback((action: string) => {
    engine.handleInput(action, false);
  }, [engine]);
  
  return (
    <div className="absolute bottom-20 left-0 right-0 flex justify-between px-4 pointer-events-auto">
      {/* Left side - Steering */}
      <div className="flex gap-2">
        <button
          className="w-14 h-14 md:w-16 md:h-16 bg-black/60 rounded-full flex items-center justify-center text-white text-2xl active:bg-gray-700"
          onTouchStart={() => handleTouchStart('steerLeft')}
          onTouchEnd={() => handleTouchEnd('steerLeft')}
          onMouseDown={() => handleTouchStart('steerLeft')}
          onMouseUp={() => handleTouchEnd('steerLeft')}
          onMouseLeave={() => handleTouchEnd('steerLeft')}
        >
          ←
        </button>
        <button
          className="w-14 h-14 md:w-16 md:h-16 bg-black/60 rounded-full flex items-center justify-center text-white text-2xl active:bg-gray-700"
          onTouchStart={() => handleTouchStart('steerRight')}
          onTouchEnd={() => handleTouchEnd('steerRight')}
          onMouseDown={() => handleTouchStart('steerRight')}
          onMouseUp={() => handleTouchEnd('steerRight')}
          onMouseLeave={() => handleTouchEnd('steerRight')}
        >
          →
        </button>
      </div>
      
      {/* Right side - Throttle/Brake */}
      <div className="flex gap-2">
        <button
          className="w-14 h-14 md:w-16 md:h-16 bg-green-600/80 rounded-full flex items-center justify-center text-white text-xl font-bold active:bg-green-700"
          onTouchStart={() => handleTouchStart('throttle')}
          onTouchEnd={() => handleTouchEnd('throttle')}
          onMouseDown={() => handleTouchStart('throttle')}
          onMouseUp={() => handleTouchEnd('throttle')}
          onMouseLeave={() => handleTouchEnd('throttle')}
        >
          ⬆️
        </button>
        <button
          className="w-14 h-14 md:w-16 md:h-16 bg-red-600/80 rounded-full flex items-center justify-center text-white text-xl font-bold active:bg-red-700"
          onTouchStart={() => handleTouchStart('brake')}
          onTouchEnd={() => handleTouchEnd('brake')}
          onMouseDown={() => handleTouchStart('brake')}
          onMouseUp={() => handleTouchEnd('brake')}
          onMouseLeave={() => handleTouchEnd('brake')}
        >
          ⬇️
        </button>
      </div>
    </div>
  );
}

export function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  const [engineReady, setEngineReady] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current || engineRef.current) return;
    
    const engine = new GameEngine(containerRef.current);
    engineRef.current = engine;
    setEngineReady(true);
    
    // Keyboard handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!engineRef.current) return;
      
      const key = e.code;
      engineRef.current.handleInput(key, true);
      
      // Special keys
      if (key === 'KeyP') {
        const state = engineRef.current.getState();
        if (state.paused) {
          engineRef.current.resume();
        } else {
          engineRef.current.pause();
        }
      }
      if (key === 'KeyC') {
        engineRef.current.cycleCamera();
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!engineRef.current) return;
      engineRef.current.handleInput(e.code, false);
    };
    
    // Clear controls on blur
    const handleBlur = () => {
      if (!engineRef.current) return;
      const state = engineRef.current.getState();
      state.input.pressed = [];
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
      engine.destroy();
      engineRef.current = null;
    };
  }, []);
  
  const handleTogglePause = useCallback(() => {
    if (!engineRef.current) return;
    const state = engineRef.current.getState();
    if (state.paused) {
      engineRef.current.resume();
    } else {
      engineRef.current.pause();
    }
  }, []);
  
  const handleReset = useCallback(() => {
    if (!engineRef.current) return;
    engineRef.current.reset();
  }, []);
  
  const handleToggleDoor = useCallback(() => {
    if (!engineRef.current) return;
    const state = engineRef.current.getState();
    // Door interlock - can't open while moving
    if (Math.abs(state.bus.velocity) >= 1.2) return;
    state.bus.doorOpen = !state.bus.doorOpen;
  }, []);
  
  const handleToggleHeadlights = useCallback(() => {
    if (!engineRef.current) return;
    const state = engineRef.current.getState();
    state.bus.headlights = !state.bus.headlights;
  }, []);
  
  const handleToggleIndicator = useCallback(() => {
    if (!engineRef.current) return;
    const state = engineRef.current.getState();
    const indicators: Array<'off' | 'left' | 'right'> = ['off', 'left', 'right'];
    const currentIndex = indicators.indexOf(state.bus.indicator);
    state.bus.indicator = indicators[(currentIndex + 1) % 3];
  }, []);
  
  const handleHorn = useCallback(() => {
    if (!engineRef.current) return;
    const state = engineRef.current.getState();
    state.bus.hornActive = !state.bus.hornActive;
    engineRef.current.handleInput('horn', state.bus.hornActive);
  }, []);
  
  const handleCycleCamera = useCallback(() => {
    if (!engineRef.current) return;
    engineRef.current.cycleCamera();
  }, []);
  
  const handleSetQuality = useCallback((quality: 'cinematic' | 'high' | 'balanced') => {
    if (!engineRef.current) return;
    engineRef.current.setQuality(quality);
  }, []);
  
  const handleStart = useCallback(() => {
    if (!engineRef.current) return;
    engineRef.current.start();
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <div ref={containerRef} className="absolute inset-0" />
      {engineReady && engineRef.current && (
        <GameUI
          engine={engineRef.current}
          onTogglePause={handleTogglePause}
          onReset={handleReset}
          onToggleDoor={handleToggleDoor}
          onToggleHeadlights={handleToggleHeadlights}
          onToggleIndicator={handleToggleIndicator}
          onHorn={handleHorn}
          onCycleCamera={handleCycleCamera}
          onSetQuality={handleSetQuality}
          onStart={handleStart}
        />
      )}
    </div>
  );
}