// UI Components for Bus Simulator
import React from 'react';
import { gameStore } from '../store';

// Format numbers with commas
function formatNumber(num: number): string {
  return num.toLocaleString('id-ID');
}

// Speed display
export function SpeedDisplay() {
  const [state, setState] = React.useState(gameStore.getVehicleState());
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(gameStore.getVehicleState());
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="stat-box flex items-center gap-3">
      <div className="text-3xl font-bold text-amber-400">
        {Math.round(state.speedKph)}
      </div>
      <div className="text-xs text-gray-400">
        <div>km/h</div>
        <div className="text-xs">{state.gear === 'R' ? 'REVERSE' : 'DRIVE'}</div>
      </div>
    </div>
  );
}

// Fuel gauge
export function FuelGauge() {
  const [fuel, setFuel] = React.useState(100);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setFuel(gameStore.getVehicleState().fuel);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  const color = fuel > 50 ? 'bg-green-500' : fuel > 25 ? 'bg-amber-500' : 'bg-red-500';
  
  return (
    <div className="stat-box">
      <div className="text-xs text-gray-400 mb-1">FUEL</div>
      <div className="w-20 h-3 bg-gray-700 rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all duration-300`} style={{ width: `${fuel}%` }} />
      </div>
      <div className="text-xs text-gray-400 mt-1">{Math.round(fuel)}%</div>
    </div>
  );
}

// Passenger counter
export function PassengerCounter() {
  const [state, setState] = React.useState(gameStore.getPassengersState());
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(gameStore.getPassengersState());
    }, 200);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="stat-box">
      <div className="text-xs text-gray-400">PASSENGERS</div>
      <div className="text-xl font-bold text-white">
        <span className="text-amber-400">{state.onboard}</span>
        <span className="text-gray-500">/{state.capacity}</span>
      </div>
      {state.boardingProgress > 0 && (
        <div className="w-full h-1 bg-gray-700 rounded mt-1">
          <div className="h-full bg-green-500 rounded" style={{ width: `${state.boardingProgress * 100}%` }} />
        </div>
      )}
    </div>
  );
}

// Route info
export function RouteInfo() {
  const [state, setState] = React.useState(gameStore.getRouteState());
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(gameStore.getRouteState());
    }, 200);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="stat-box">
      <div className="text-xs text-gray-400">NEXT STOP</div>
      <div className="text-sm font-bold text-white">
        {state.stops[state.currentStopIndex]?.name || 'Route Complete'}
      </div>
      {!state.completed && (
        <div className="text-xs text-amber-400 mt-1">
          {Math.round(state.nextStopDistance)}m
        </div>
      )}
      <div className="flex gap-1 mt-2">
        {state.stops.map((stop) => (
          <div
            key={stop.id}
            className={`w-3 h-3 rounded-full ${
              stop.status === 'completed' ? 'bg-green-500' :
              stop.status === 'next' ? 'bg-amber-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Earnings display
export function EarningsDisplay() {
  const [earnings, setEarnings] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setEarnings(gameStore.getRouteState().earnings);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="stat-box">
      <div className="text-xs text-gray-400">EARNINGS</div>
      <div className="text-lg font-bold text-green-400">
        Rp {formatNumber(earnings)}
      </div>
    </div>
  );
}

// Status message
export function StatusMessage() {
  const [message, setMessage] = React.useState('');
  const [missionStatus, setMissionStatus] = React.useState('');
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      const state = gameStore.getGameState();
      setMessage(state.message);
      setMissionStatus(state.missionStatus);
    }, 200);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="stat-box text-center">
      <div className="text-xs text-amber-400">{missionStatus}</div>
      <div className="text-sm text-white">{message}</div>
    </div>
  );
}

// Vehicle indicators
export function VehicleIndicators() {
  const [state, setState] = React.useState(gameStore.getVehicleState());
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(gameStore.getVehicleState());
    }, 200);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="stat-box flex gap-3 items-center">
      <div className={`w-3 h-3 rounded-full ${state.headlights ? 'bg-yellow-400' : 'bg-gray-600'}`} title="Headlights" />
      <div className={`px-2 py-1 rounded text-xs ${state.doorOpen ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
        DOOR
      </div>
      <div className={`px-2 py-1 rounded text-xs ${state.parkingBrake ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
        P
      </div>
      {state.indicator !== 'off' && (
        <div className={`px-2 py-1 rounded text-xs ${state.indicator === 'hazard' ? 'bg-amber-500' : 'bg-amber-600'} text-white animate-pulse`}>
          {state.indicator === 'left' && '←'}
          {state.indicator === 'right' && '→'}
          {state.indicator === 'hazard' && '⟲'}
        </div>
      )}
    </div>
  );
}

// Camera mode display
export function CameraModeDisplay() {
  const [mode, setMode] = React.useState<ReturnType<typeof gameStore.getCameraState>['mode']>('chase');
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMode(gameStore.getCameraState().mode);
    }, 200);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="stat-box">
      <div className="text-xs text-gray-400">CAMERA</div>
      <div className="text-sm font-bold text-white capitalize">{mode}</div>
    </div>
  );
}

// Top HUD
export function TopHUD() {
  return (
    <div className="fixed top-2 left-2 right-2 flex flex-wrap gap-2 z-20">
      <SpeedDisplay />
      <FuelGauge />
      <PassengerCounter />
      <RouteInfo />
      <EarningsDisplay />
    </div>
  );
}

// Bottom HUD
export function BottomHUD() {
  return (
    <div className="fixed bottom-2 left-2 right-2 flex flex-wrap gap-2 z-20">
      <VehicleIndicators />
      <StatusMessage />
      <CameraModeDisplay />
    </div>
  );
}

// Control buttons (desktop)
export function ControlButtons() {
  return (
    <div className="fixed top-20 right-2 flex flex-col gap-2 z-30">
      <button
        className="game-button text-xs"
        onClick={() => gameStore.toggleParkingBrake()}
      >
        Parking Brake
      </button>
      <button
        className="game-button text-xs"
        onClick={() => gameStore.toggleDoor()}
      >
        Door
      </button>
      <button
        className="game-button text-xs"
        onClick={() => gameStore.toggleHeadlights()}
      >
        Lights
      </button>
      <button
        className="game-button text-xs"
        onClick={() => gameStore.cycleIndicator()}
      >
        Indicator
      </button>
      <button
        className="game-button text-xs"
        onClick={() => gameStore.cycleCamera()}
      >
        Camera
      </button>
      <button
        className="game-button text-xs"
        onClick={() => gameStore.togglePause()}
      >
        Pause
      </button>
    </div>
  );
}

// Quality selector
export function QualitySelector() {
  const [quality, setQuality] = React.useState<'cinematic' | 'high' | 'balanced'>('cinematic');
  
  const handleQualityChange = (q: 'cinematic' | 'high' | 'balanced') => {
    setQuality(q);
    gameStore.setQuality(q);
  };
  
  return (
    <div className="fixed top-20 left-2 flex flex-col gap-1 z-30">
      <div className="text-xs text-white mb-1">Quality:</div>
      {(['cinematic', 'high', 'balanced'] as const).map(q => (
        <button
          key={q}
          className={`game-button text-xs ${quality === q ? 'game-button-active' : ''}`}
          onClick={() => handleQualityChange(q)}
        >
          {q.charAt(0).toUpperCase() + q.slice(1)}
        </button>
      ))}
    </div>
  );
}

// Main menu
export function MainMenu({ onStart }: { onStart: () => void }) {
  return (
    <div className="message-popup w-80">
      <h1 className="text-2xl font-bold text-amber-400 mb-2">Bus Simulator</h1>
      <h2 className="text-lg text-gray-300 mb-4">Indonesia Premium</h2>
      
      <div className="text-sm text-gray-400 mb-6">
        <p className="mb-2">Route: Bandung · Kota Lama · Selatan</p>
        <p>3 passenger stops • Luxury Coach</p>
      </div>
      
      <div className="text-xs text-gray-500 mb-6">
        <p className="mb-1"><strong>Controls:</strong></p>
        <p>W - Accelerate | S - Brake/Reverse</p>
        <p>A/D - Steer | H - Horn</p>
        <p>Space - Parking Brake | E - Door</p>
        <p>L - Headlights | I - Indicator</p>
        <p>C - Camera | P - Pause</p>
      </div>
      
      <button
        className="game-button game-button-active w-full py-3 text-lg"
        onClick={onStart}
      >
        Start Driving
      </button>
    </div>
  );
}

// Pause menu
export function PauseMenu({ onResume, onReset }: { onResume: () => void; onReset: () => void }) {
  return (
    <div className="message-popup w-64">
      <h2 className="text-xl font-bold text-white mb-4">Paused</h2>
      
      <div className="flex flex-col gap-2">
        <button className="game-button game-button-active" onClick={onResume}>
          Resume
        </button>
        <button className="game-button game-button-warning" onClick={onReset}>
          Reset Route
        </button>
      </div>
    </div>
  );
}

// Complete screen
export function CompleteScreen({ onReset }: { onReset: () => void }) {
  const [gameState, setGameState] = React.useState(gameStore.getGameState());
  const [routeState, setRouteState] = React.useState(gameStore.getRouteState());
  
  React.useEffect(() => {
    setGameState(gameStore.getGameState());
    setRouteState(gameStore.getRouteState());
  }, []);
  
  return (
    <div className="message-popup w-80">
      <h2 className="text-2xl font-bold text-green-400 mb-2">Route Complete!</h2>
      
      <div className="text-lg text-white mb-4">
        Congratulations, Driver!
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
        <div className="text-gray-400">Score:</div>
        <div className="text-amber-400 font-bold">{gameState.score}</div>
        
        <div className="text-gray-400">Earnings:</div>
        <div className="text-green-400 font-bold">Rp {formatNumber(routeState.earnings)}</div>
        
        <div className="text-gray-400">Passengers:</div>
        <div className="text-white font-bold">{gameStore.getPassengersState().boardedTotal}</div>
        
        <div className="text-gray-400">Time:</div>
        <div className="text-white font-bold">{Math.floor(gameState.elapsed / 60)}:{String(Math.floor(gameState.elapsed % 60)).padStart(2, '0')}</div>
      </div>
      
      <button className="game-button game-button-active w-full" onClick={onReset}>
        New Route
      </button>
    </div>
  );
}