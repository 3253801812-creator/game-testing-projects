// Mobile Touch Controls for Bus Simulator
import React from 'react';
import { gameStore } from '../store';

export function MobileControls() {
  const handleTouchStart = (control: string) => {
    gameStore.setTouchControl(control, true);
  };
  
  const handleTouchEnd = (control: string) => {
    gameStore.setTouchControl(control, false);
  };
  
  return (
    <div className="fixed bottom-20 left-0 right-0 flex justify-between px-4 z-40 pointer-events-none">
      {/* Left side - Steering */}
      <div className="flex gap-2 pointer-events-auto">
        <button
          className="touch-button"
          onTouchStart={() => handleTouchStart('steerLeft')}
          onTouchEnd={() => handleTouchEnd('steerLeft')}
          onMouseDown={() => handleTouchStart('steerLeft')}
          onMouseUp={() => handleTouchEnd('steerLeft')}
          onMouseLeave={() => handleTouchEnd('steerLeft')}
        >
          ←
        </button>
        <button
          className="touch-button"
          onTouchStart={() => handleTouchStart('steerRight')}
          onTouchEnd={() => handleTouchEnd('steerRight')}
          onMouseDown={() => handleTouchStart('steerRight')}
          onMouseUp={() => handleTouchEnd('steerRight')}
          onMouseLeave={() => handleTouchEnd('steerRight')}
        >
          →
        </button>
      </div>
      
      {/* Right side - Accelerate/Brake */}
      <div className="flex gap-2 pointer-events-auto">
        <button
          className="touch-button bg-gradient-to-b from-green-600 to-green-700 border-green-500"
          onTouchStart={() => handleTouchStart('accelerate')}
          onTouchEnd={() => handleTouchEnd('accelerate')}
          onMouseDown={() => handleTouchStart('accelerate')}
          onMouseUp={() => handleTouchEnd('accelerate')}
          onMouseLeave={() => handleTouchEnd('accelerate')}
        >
          ▲
        </button>
        <button
          className="touch-button bg-gradient-to-b from-red-600 to-red-700 border-red-500"
          onTouchStart={() => handleTouchStart('brake')}
          onTouchEnd={() => handleTouchEnd('brake')}
          onMouseDown={() => handleTouchStart('brake')}
          onMouseUp={() => handleTouchEnd('brake')}
          onMouseLeave={() => handleTouchEnd('brake')}
        >
          ▼
        </button>
      </div>
    </div>
  );
}

export function MobileActionButtons() {
  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-40">
      <button
        className="touch-button touch-button-small"
        onTouchStart={() => gameStore.toggleDoor()}
        onClick={() => gameStore.toggleDoor()}
      >
        🚪
      </button>
      <button
        className="touch-button touch-button-small"
        onTouchStart={() => gameStore.toggleParkingBrake()}
        onClick={() => gameStore.toggleParkingBrake()}
      >
        P
      </button>
      <button
        className="touch-button touch-button-small"
        onTouchStart={() => gameStore.cycleCamera()}
        onClick={() => gameStore.cycleCamera()}
      >
        📷
      </button>
      <button
        className="touch-button touch-button-small"
        onTouchStart={() => gameStore.togglePause()}
        onClick={() => gameStore.togglePause()}
      >
        ⏸
      </button>
    </div>
  );
}

export function MobileHorn() {
  const handleHornStart = () => {
    gameStore.setTouchControl('horn', true);
  };
  
  const handleHornEnd = () => {
    gameStore.setTouchControl('horn', false);
  };
  
  return (
    <div className="fixed bottom-36 right-4 z-40">
      <button
        className="touch-button bg-gradient-to-b from-amber-600 to-amber-700 border-amber-500"
        onTouchStart={handleHornStart}
        onTouchEnd={handleHornEnd}
        onMouseDown={handleHornStart}
        onMouseUp={handleHornEnd}
        onMouseLeave={handleHornEnd}
      >
        📯
      </button>
    </div>
  );
}