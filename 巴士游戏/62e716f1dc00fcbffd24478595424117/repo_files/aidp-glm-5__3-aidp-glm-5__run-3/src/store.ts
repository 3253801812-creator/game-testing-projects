// Game Store - Central state management for Bus Simulator Indonesia

import { 
  BusState, GameState, VehicleState, RouteState, PassengersState,
  TrafficState, WorldState, CameraState, InputState, RendererState,
  PerformanceState, SettingsState, TrafficVehicle, PassengerStop,
  VehicleDynamics, RouteService, QualityProfiles, CameraMode
} from './types';

// Vehicle dynamics constants
export const VEHICLE_DYNAMICS: VehicleDynamics = {
  maxForwardSpeedMps: 24.5, // ~88 km/h
  maxReverseSpeedMps: 5.5,  // ~20 km/h
  throttleAcceleration: 10.5,
  serviceBrakeDeceleration: 15,
  reverseAcceleration: 6.2,
  rollingResistance: 0.55,
  parkingBrakeDamping: 9,
  steeringRateDegPerSec: 28,
  maxWheelAngleDeg: 32,
  doorInterlockSpeedMps: 1.2,
  boardingSpeedMps: 0.8,
};

export const ROUTE_SERVICE: RouteService = {
  stopLongitudinalHalfLength: 10.5,
  stopLateralHalfWidth: 4.2,
  boardingDuration: 1.25,
};

export const QUALITY_PROFILES: QualityProfiles = {
  cinematic: { pixelRatio: 1.35, density: 1, renderDistance: 520 },
  high: { pixelRatio: 1.1, density: 0.78, renderDistance: 420 },
  balanced: { pixelRatio: 0.85, density: 0.56, renderDistance: 320 },
};

// Initial passenger stops
export const INITIAL_STOPS: PassengerStop[] = [
  { id: 's1', name: 'Kota Lama', z: 80, status: 'next', waiting: 8 },
  { id: 's2', name: 'Pasar Raya', z: 350, status: 'upcoming', waiting: 12 },
  { id: 's3', name: 'Terminal Selatan', z: 620, status: 'upcoming', waiting: 15 },
];

// Traffic vehicle types with colors
const TRAFFIC_COLORS = [
  '#c41e3a', '#1e90ff', '#228b22', '#ffa500', '#4b0082',
  '#2f4f4f', '#8b4513', '#708090', '#ffd700', '#dc143c',
];

const TRAFFIC_TYPES: ('car' | 'truck' | 'motorcycle')[] = ['car', 'car', 'car', 'truck', 'motorcycle'];

// Game store class
export class GameStore {
  // Core state
  private _phase: 'menu' | 'playing' | 'paused' | 'complete' = 'menu';
  private _elapsed: number = 0;
  private _paused: boolean = false;
  
  // Vehicle state
  private _position: { x: number; z: number } = { x: 0.33, z: 20 };
  private _headingDeg: number = 0;
  private _velocity: number = 0;
  private _throttle: number = 0;
  private _brake: number = 0;
  private _steering: number = 0;
  private _gear: 'D' | 'R' | 'N' = 'D';
  private _parkingBrake: boolean = true;
  private _doorOpen: boolean = false;
  private _headlights: boolean = false;
  private _indicator: 'off' | 'left' | 'right' | 'hazard' = 'off';
  private _hornActive: boolean = false;
  private _fuel: number = 100;
  private _damage: number = 0;
  private _odometerKm: number = 0;
  private _wheelAngle: number = 0;
  private _collisionCount: number = 0;
  private _lastCollision: string = 'none';
  
  // Route state
  private _stops: PassengerStop[] = JSON.parse(JSON.stringify(INITIAL_STOPS));
  private _currentStopIndex: number = 0;
  private _earnings: number = 0;
  private _completed: boolean = false;
  
  // Passenger state
  private _onboard: number = 4;
  private _boardedTotal: number = 0;
  private _boardingProgress: number = 0;
  private _isBoarding: boolean = false;
  private _boardingTimer: number = 0;
  
  // Traffic state
  private _traffic: TrafficVehicle[] = [];
  private _trafficDensity: number = 0.92;
  
  // Camera state
  private _cameraMode: CameraMode = 'chase';
  private _cameraPosition: { x: number; y: number; z: number } = { x: 0, y: 5, z: 0 };
  private _cameraTarget: { x: number; y: number; z: number } = { x: 0, y: 1, z: 0 };
  private _cameraFov: number = 60;
  
  // Input state
  private _pressed: Set<string> = new Set();
  private _lastAction: string = 'none';
  private _lastPointerType: 'mouse' | 'touch' | 'keyboard' = 'keyboard';
  private _mobileControls: boolean = false;
  
  // Touch controls state
  private _touchAccelerate: boolean = false;
  private _touchBrake: boolean = false;
  private _touchSteerLeft: boolean = false;
  private _touchSteerRight: boolean = false;
  private _touchHorn: boolean = false;
  
  // Renderer state
  private _rendererFrame: number = 0;
  private _drawCalls: number = 0;
  private _canvasSize: { width: number; height: number } = { width: 0, height: 0 };
  private _quality: 'cinematic' | 'high' | 'balanced' = 'cinematic';
  
  // Performance state
  private _tick: number = 0;
  private _fixedStep: number = 1 / 60;
  private _accumulator: number = 0;
  private _uiUpdates: number = 0;
  
  // Score
  private _score: number = 0;
  private _message: string = 'Board the coach and begin the route.';
  private _missionStatus: string = 'Ready for departure';
  
  // Boarding tracking
  private _lastStopBoarded: string | null = null;
  
  constructor() {
    this.generateTraffic();
  }
  
  // Traffic generation
  private generateTraffic(): void {
    this._traffic = [];
    const count = Math.floor(12 * this._trafficDensity);
    
    for (let i = 0; i < count; i++) {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const lane = direction === 1 ? 0.33 : -0.33;
      
      this._traffic.push({
        id: `traffic-${i}`,
        x: lane * 10 + (Math.random() - 0.5) * 2,
        z: this._position.z + 100 + Math.random() * 600,
        speedKph: 30 + Math.random() * 40,
        direction,
        type: TRAFFIC_TYPES[Math.floor(Math.random() * TRAFFIC_TYPES.length)],
        color: TRAFFIC_COLORS[Math.floor(Math.random() * TRAFFIC_COLORS.length)],
      });
    }
  }
  
  // Update methods
  update(deltaTime: number): void {
    if (this._phase !== 'playing' || this._paused) return;
    
    this._elapsed += deltaTime;
    this._tick++;
    this._accumulator += deltaTime;
    
    // Fixed step updates
    let steps = 0;
    while (this._accumulator >= this._fixedStep && steps < 4) {
      this.fixedUpdate(this._fixedStep);
      this._accumulator -= this._fixedStep;
      steps++;
    }
    
    // Update camera
    this.updateCamera();
    
    // Update message based on state
    this.updateMessage();
  }
  
  private fixedUpdate(dt: number): void {
    // Skip if parking brake is on and not moving
    if (this._parkingBrake && Math.abs(this._velocity) < 0.1) {
      this._velocity *= 0.9;
    }
    
    // Process inputs
    const accelerating = this._pressed.has('w') || this._pressed.has('W') || this._touchAccelerate;
    const braking = this._pressed.has('s') || this._pressed.has('S') || this._touchBrake;
    const steeringLeft = this._pressed.has('a') || this._pressed.has('A') || this._touchSteerLeft;
    const steeringRight = this._pressed.has('d') || this._pressed.has('D') || this._touchSteerRight;
    
    // Throttle and brake
    this._throttle = accelerating ? 1 : 0;
    this._brake = braking ? 1 : 0;
    
    // Steering
    const steerInput = (steeringRight ? 1 : 0) - (steeringLeft ? 1 : 0);
    const targetWheelAngle = steerInput * VEHICLE_DYNAMICS.maxWheelAngleDeg;
    const wheelDiff = targetWheelAngle - this._wheelAngle;
    const maxChange = VEHICLE_DYNAMICS.steeringRateDegPerSec * dt;
    this._wheelAngle += Math.sign(wheelDiff) * Math.min(Math.abs(wheelDiff), maxChange);
    
    // Apply physics
    if (!this._parkingBrake || Math.abs(this._velocity) > 0.5) {
      // Acceleration
      if (this._throttle > 0 && this._fuel > 0) {
        const accel = this._gear === 'R' ? VEHICLE_DYNAMICS.reverseAcceleration : VEHICLE_DYNAMICS.throttleAcceleration;
        this._velocity += accel * this._throttle * dt * (this._gear === 'R' ? -1 : 1);
        this._fuel = Math.max(0, this._fuel - 0.02 * dt);
      }
      
      // Braking
      if (this._brake > 0) {
        const decel = VEHICLE_DYNAMICS.serviceBrakeDeceleration;
        if (this._velocity > 0) {
          this._velocity = Math.max(0, this._velocity - decel * dt);
        } else if (this._velocity < 0) {
          this._velocity = Math.min(0, this._velocity + decel * dt);
        }
        
        // Transition to reverse when near rest
        if (Math.abs(this._velocity) < 0.5 && this._brake > 0.5 && this._gear === 'D') {
          this._gear = 'R';
        }
      } else if (Math.abs(this._velocity) < 0.3) {
        this._gear = 'D';
      }
      
      // Rolling resistance
      this._velocity *= Math.pow(0.98, dt * 60);
      
      // Speed limits
      const maxSpeed = this._gear === 'R' ? VEHICLE_DYNAMICS.maxReverseSpeedMps : VEHICLE_DYNAMICS.maxForwardSpeedMps;
      this._velocity = Math.max(-VEHICLE_DYNAMICS.maxReverseSpeedMps, Math.min(maxSpeed, this._velocity));
      
      // Parking brake damping
      if (this._parkingBrake) {
        this._velocity *= Math.pow(0.9, dt * 60);
      }
    }
    
    // Movement
    const speed = Math.abs(this._velocity);
    const moveDir = this._velocity >= 0 ? 1 : -1;
    
    // Heading change based on speed and wheel angle
    if (speed > 0.1) {
      const turnRate = this._wheelAngle * (speed / 50) * dt * 60 * moveDir;
      this._headingDeg += turnRate;
    }
    
    // Position update
    const rad = this._headingDeg * Math.PI / 180;
    const dx = Math.sin(rad) * this._velocity * dt;
    const dz = Math.cos(rad) * this._velocity * dt;
    
    this._position.x += dx;
    this._position.z += dz;
    
    // Odometer
    this._odometerKm += Math.abs(this._velocity) * dt / 1000;
    
    // Collision detection
    this.checkCollisions();
    
    // Traffic update
    this.updateTraffic(dt);
    
    // Check stops
    this.checkStops();
    
    // Door interlock
    if (Math.abs(this._velocity) > VEHICLE_DYNAMICS.doorInterlockSpeedMps && this._doorOpen) {
      this._doorOpen = false;
      this._message = 'Doors closed - safety interlock';
    }
    
    // Horn
    this._hornActive = this._pressed.has('h') || this._pressed.has('H') || this._touchHorn;
  }
  
  private checkCollisions(): void {
    const busWidth = 2.55;
    const roadHalfWidth = 5.2;
    const roadCenter = 0.33;
    
    // Road edge collision
    const leftEdge = roadCenter - roadHalfWidth;
    const rightEdge = roadCenter + roadHalfWidth;
    
    const busLeft = this._position.x - busWidth / 2;
    const busRight = this._position.x + busWidth / 2;
    
    if (busLeft < leftEdge || busRight > rightEdge) {
      this._position.x = Math.max(leftEdge + busWidth / 2, Math.min(rightEdge - busWidth / 2, this._position.x));
      this._velocity *= 0.5;
      this._collisionCount++;
      this._lastCollision = 'road_edge';
      this._damage = Math.min(100, this._damage + 1);
    }
    
    // Traffic collision
    for (const vehicle of this._traffic) {
      const dx = this._position.x - vehicle.x;
      const dz = this._position.z - vehicle.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < 3) {
        this._velocity *= 0.3;
        this._collisionCount++;
        this._lastCollision = `traffic_${vehicle.id}`;
        this._damage = Math.min(100, this._damage + 5);
        this._position.x += dx * 0.3;
        this._position.z += dz * 0.1;
      }
    }
  }
  
  private updateTraffic(dt: number): void {
    for (const vehicle of this._traffic) {
      // Move traffic
      const speedMps = vehicle.speedKph / 3.6;
      vehicle.z += speedMps * vehicle.direction * dt;
      
      // Respawn traffic that's too far behind or ahead
      if (vehicle.z < this._position.z - 100 || vehicle.z > this._position.z + 700) {
        vehicle.z = this._position.z + 200 + Math.random() * 400;
        if (vehicle.direction < 0) {
          vehicle.z = this._position.z - 200 - Math.random() * 400;
        }
        vehicle.speedKph = 30 + Math.random() * 40;
      }
    }
  }
  
  private checkStops(): void {
    const nextStop = this._stops[this._currentStopIndex];
    if (!nextStop || nextStop.status === 'completed') return;
    
    const stopZ = nextStop.z;
    const busZ = this._position.z;
    const distToStop = Math.abs(busZ - stopZ);
    
    // Check if at stop
    const inStopZone = distToStop < ROUTE_SERVICE.stopLongitudinalHalfLength &&
                       Math.abs(this._position.x - 0.33) < ROUTE_SERVICE.stopLateralHalfWidth + 2;
    
    const nearlyStationary = Math.abs(this._velocity) < VEHICLE_DYNAMICS.doorInterlockSpeedMps;
    
    // Update stop statuses
    this._stops.forEach((stop, i) => {
      if (i < this._currentStopIndex) {
        stop.status = 'completed';
      } else if (i === this._currentStopIndex) {
        stop.status = 'next';
      } else {
        stop.status = 'upcoming';
      }
    });
    
    // Boarding logic
    if (inStopZone && nearlyStationary && this._doorOpen) {
      if (!this._isBoarding && this._lastStopBoarded !== nextStop.id) {
        this._isBoarding = true;
        this._boardingTimer = 0;
      }
      
      if (this._isBoarding) {
        this._boardingTimer += this._fixedStep;
        this._boardingProgress = Math.min(1, this._boardingTimer / ROUTE_SERVICE.boardingDuration);
        
        if (this._boardingProgress >= 1) {
          // Complete boarding
          const boardingCount = Math.min(nextStop.waiting, 42 - this._onboard);
          this._onboard += boardingCount;
          this._boardedTotal += boardingCount;
          this._earnings += boardingCount * 2500;
          this._score += boardingCount * 100;
          this._message = `Boarded ${boardingCount} passengers at ${nextStop.name}`;
          
          nextStop.status = 'completed';
          this._lastStopBoarded = nextStop.id;
          this._isBoarding = false;
          this._boardingProgress = 0;
          this._currentStopIndex++;
          
          if (this._currentStopIndex >= this._stops.length) {
            this._completed = true;
            this._phase = 'complete';
            this._score += 500;
            this._missionStatus = 'Route Complete!';
            this._message = 'Congratulations! You completed the route!';
          }
        }
      }
    } else {
      this._isBoarding = false;
      this._boardingProgress = 0;
    }
  }
  
  private updateCamera(): void {
    const rad = this._headingDeg * Math.PI / 180;
    
    switch (this._cameraMode) {
      case 'chase':
        this._cameraPosition = {
          x: this._position.x - Math.sin(rad) * 12,
          y: 5,
          z: this._position.z - Math.cos(rad) * 12
        };
        this._cameraTarget = {
          x: this._position.x,
          y: 1.5,
          z: this._position.z
        };
        this._cameraFov = 55;
        break;
        
      case 'showcase':
        this._cameraPosition = {
          x: this._position.x + 6,
          y: 3,
          z: this._position.z + 6
        };
        this._cameraTarget = {
          x: this._position.x,
          y: 1.2,
          z: this._position.z
        };
        this._cameraFov = 45;
        break;
        
      case 'cockpit':
        this._cameraPosition = {
          x: this._position.x + Math.sin(rad) * 0.8,
          y: 2.5,
          z: this._position.z + Math.cos(rad) * 1.5
        };
        this._cameraTarget = {
          x: this._position.x + Math.sin(rad) * 50,
          y: 2,
          z: this._position.z + Math.cos(rad) * 50
        };
        this._cameraFov = 70;
        break;
        
      case 'cinematic':
        const time = this._elapsed * 0.5;
        this._cameraPosition = {
          x: this._position.x + Math.sin(time) * 15,
          y: 8,
          z: this._position.z - 20 + Math.cos(time) * 10
        };
        this._cameraTarget = {
          x: this._position.x,
          y: 1,
          z: this._position.z
        };
        this._cameraFov = 40;
        break;
        
      case 'stopside':
        const stop = this._stops[this._currentStopIndex];
        if (stop) {
          this._cameraPosition = {
            x: -10,
            y: 4,
            z: stop.z
          };
          this._cameraTarget = {
            x: 0,
            y: 1.5,
            z: this._position.z
          };
        }
        this._cameraFov = 50;
        break;
    }
  }
  
  private updateMessage(): void {
    const nextStop = this._stops[this._currentStopIndex];
    
    if (this._phase === 'menu') {
      this._message = 'Board the coach and begin the route.';
      this._missionStatus = 'Ready for departure';
    } else if (this._phase === 'complete') {
      this._missionStatus = 'Route Complete!';
    } else if (nextStop) {
      const dist = Math.abs(nextStop.z - this._position.z);
      
      if (dist < 50 && !this._doorOpen) {
        this._message = `Stop at ${nextStop.name} - Open doors when stationary`;
        this._missionStatus = `Approaching ${nextStop.name}`;
      } else if (this._isBoarding) {
        this._message = 'Boarding passengers...';
        this._missionStatus = 'Passenger service';
      } else {
        this._message = `Next stop: ${nextStop.name} (${Math.round(dist)}m)`;
        this._missionStatus = 'En route';
      }
    }
  }
  
  // Public getters
  getBusState(): BusState {
    return {
      phase: this._phase,
      speedKph: Math.abs(this._velocity) * 3.6,
      position: { x: this._position.x, z: this._position.z },
      headingDeg: this._headingDeg,
      doorOpen: this._doorOpen,
      passengerCount: this._onboard,
      nextStopIndex: this._currentStopIndex,
      routeProgress: this._currentStopIndex / this._stops.length,
      fuel: this._fuel,
      score: this._score
    };
  }
  
  getGameState(): GameState {
    return {
      phase: this._phase,
      elapsed: this._elapsed,
      paused: this._paused,
      missionStatus: this._missionStatus,
      score: this._score,
      message: this._message
    };
  }
  
  getVehicleState(): VehicleState {
    return {
      id: 'NLX-880',
      type: '12m Luxury Coach',
      position: { x: this._position.x, z: this._position.z },
      headingDeg: this._headingDeg,
      speedKph: Math.abs(this._velocity) * 3.6,
      velocity: this._velocity,
      throttle: this._throttle,
      brake: this._brake,
      steering: this._steering,
      gear: this._gear,
      parkingBrake: this._parkingBrake,
      doorOpen: this._doorOpen,
      headlights: this._headlights,
      indicator: this._indicator,
      hornActive: this._hornActive,
      fuel: this._fuel,
      damage: this._damage,
      odometerKm: this._odometerKm,
      wheelAngle: this._wheelAngle,
      collisionCount: this._collisionCount,
      lastCollision: this._lastCollision,
      dynamics: VEHICLE_DYNAMICS
    };
  }
  
  getRouteState(): RouteState {
    const nextStop = this._stops[this._currentStopIndex];
    const nextStopDistance = nextStop ? Math.abs(nextStop.z - this._position.z) : 0;
    
    return {
      name: 'Bandung · Kota Lama · Selatan',
      stopCount: this._stops.length,
      currentStopIndex: this._currentStopIndex,
      stops: this._stops.map(s => ({ ...s })),
      nextStopDistance,
      atStop: nextStop ? Math.abs(nextStop.z - this._position.z) < ROUTE_SERVICE.stopLongitudinalHalfLength : false,
      completed: this._completed,
      earnings: this._earnings,
      service: ROUTE_SERVICE
    };
  }
  
  getPassengersState(): PassengersState {
    const nextStop = this._stops[this._currentStopIndex];
    return {
      onboard: this._onboard,
      capacity: 42,
      boardedTotal: this._boardedTotal,
      waitingAtNext: nextStop ? nextStop.waiting : 0,
      boardingProgress: this._boardingProgress
    };
  }
  
  getTrafficState(): TrafficState {
    return {
      count: this._traffic.length,
      density: this._trafficDensity,
      vehicles: this._traffic.map(v => ({
        id: v.id,
        x: v.x,
        z: v.z,
        speedKph: v.speedKph,
        direction: v.direction,
        type: v.type,
        color: v.color
      }))
    };
  }
  
  getWorldState(): WorldState {
    // Generate nearby obstacles based on position
    const obstacles: { id: string; type: string; x: number; z: number; halfWidth: number; halfLength: number }[] = [];
    
    // Buildings on both sides
    for (let i = -10; i < 15; i++) {
      const z = this._position.z + i * 40;
      if (i % 3 === 0) {
        obstacles.push({ id: `building-left-${i}`, type: 'building', x: -12, z, halfWidth: 3, halfLength: 4 });
      }
      if (i % 2 === 0) {
        obstacles.push({ id: `building-right-${i}`, type: 'building', x: 12, z, halfWidth: 3.5, halfLength: 3 });
      }
    }
    
    // Stop shelters
    for (const stop of this._stops) {
      if (Math.abs(stop.z - this._position.z) < 200) {
        obstacles.push({ id: `shelter-${stop.id}`, type: 'shelter', x: -7, z: stop.z, halfWidth: 2, halfLength: ROUTE_SERVICE.stopLongitudinalHalfLength });
      }
    }
    
    return {
      environment: 'Tropical intercity corridor',
      weather: 'Sunbreak after rain',
      timeOfDay: '16:20',
      roadCenter: 0.33,
      roadHalfWidth: 5.2,
      surface: 'asphalt',
      nearStopMarkers: this._stops.filter(s => Math.abs(s.z - this._position.z) < 100).length,
      solidObstacleCount: obstacles.length + this._traffic.length,
      collision: {
        roadEdgeEnabled: true,
        trafficEnabled: true,
        solidObjectsEnabled: true,
        busWidth: 2.55,
        busLength: 8.9
      },
      nearbySolidObstacles: obstacles
    };
  }
  
  getCameraState(): CameraState {
    return {
      mode: this._cameraMode,
      position: { ...this._cameraPosition },
      target: { ...this._cameraTarget },
      fov: this._cameraFov,
      near: 0.1,
      far: 900,
      modes: ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside']
    };
  }
  
  getInputState(): InputState {
    return {
      pressed: Array.from(this._pressed),
      lastAction: this._lastAction,
      lastPointerType: this._lastPointerType,
      mobileControls: this._mobileControls
    };
  }
  
  getRendererState(): RendererState {
    const profile = QUALITY_PROFILES[this._quality];
    return {
      backend: 'WebGL',
      contextLost: false,
      frame: this._rendererFrame,
      drawCalls: this._drawCalls,
      canvas: { ...this._canvasSize },
      quality: this._quality,
      pixelRatio: profile.pixelRatio,
      renderDistance: profile.renderDistance,
      webglVersion: 2,
      dynamicLighting: true,
      fog: true,
      antialias: true,
      shadowsEnabled: this._quality === 'cinematic'
    };
  }
  
  getPerformanceState(): PerformanceState {
    return {
      elapsed: this._elapsed,
      tick: this._tick,
      frame: this._rendererFrame,
      fixedStep: this._fixedStep,
      accumulator: this._accumulator,
      maxSubSteps: 4,
      uiUpdates: this._uiUpdates,
      mounted: true
    };
  }
  
  getSettingsState(): SettingsState {
    const profile = QUALITY_PROFILES[this._quality];
    return {
      quality: this._quality,
      masterVolume: 0.8,
      pixelRatio: profile.pixelRatio,
      trafficDensity: this._trafficDensity,
      renderDistance: profile.renderDistance,
      qualityProfiles: QUALITY_PROFILES
    };
  }
  
  // Control methods
  startGame(): void {
    this._phase = 'playing';
    this._paused = false;
  }
  
  togglePause(): void {
    if (this._phase === 'playing') {
      this._phase = 'paused';
      this._paused = true;
    } else if (this._phase === 'paused') {
      this._phase = 'playing';
      this._paused = false;
    }
  }
  
  resumeGame(): void {
    if (this._phase === 'paused') {
      this._phase = 'playing';
      this._paused = false;
    }
  }
  
  resetGame(): void {
    // Reset all state
    this._phase = 'menu';
    this._elapsed = 0;
    this._paused = false;
    this._position = { x: 0.33, z: 20 };
    this._headingDeg = 0;
    this._velocity = 0;
    this._throttle = 0;
    this._brake = 0;
    this._steering = 0;
    this._gear = 'D';
    this._parkingBrake = true;
    this._doorOpen = false;
    this._headlights = false;
    this._indicator = 'off';
    this._hornActive = false;
    this._fuel = 100;
    this._damage = 0;
    this._odometerKm = 0;
    this._wheelAngle = 0;
    this._collisionCount = 0;
    this._lastCollision = 'none';
    this._stops = JSON.parse(JSON.stringify(INITIAL_STOPS));
    this._currentStopIndex = 0;
    this._earnings = 0;
    this._completed = false;
    this._onboard = 4;
    this._boardedTotal = 0;
    this._boardingProgress = 0;
    this._isBoarding = false;
    this._boardingTimer = 0;
    this._lastStopBoarded = null;
    this._score = 0;
    this._message = 'Board the coach and begin the route.';
    this._missionStatus = 'Ready for departure';
    this._tick = 0;
    this._accumulator = 0;
    this.generateTraffic();
  }
  
  // Input handlers
  setKeyPressed(key: string): void {
    this._pressed.add(key);
    this._lastAction = `key_${key}`;
    this._lastPointerType = 'keyboard';
  }
  
  setKeyReleased(key: string): void {
    this._pressed.delete(key);
  }
  
  clearAllKeys(): void {
    this._pressed.clear();
    this._touchAccelerate = false;
    this._touchBrake = false;
    this._touchSteerLeft = false;
    this._touchSteerRight = false;
    this._touchHorn = false;
  }
  
  setTouchControl(control: string, active: boolean): void {
    this._lastPointerType = 'touch';
    this._mobileControls = true;
    this._lastAction = `touch_${control}`;
    
    switch (control) {
      case 'accelerate': this._touchAccelerate = active; break;
      case 'brake': this._touchBrake = active; break;
      case 'steerLeft': this._touchSteerLeft = active; break;
      case 'steerRight': this._touchSteerRight = active; break;
      case 'horn': this._touchHorn = active; break;
    }
  }
  
  // Vehicle controls
  toggleParkingBrake(): void {
    this._parkingBrake = !this._parkingBrake;
    this._lastAction = 'toggle_parking_brake';
  }
  
  toggleDoor(): void {
    if (Math.abs(this._velocity) < VEHICLE_DYNAMICS.doorInterlockSpeedMps) {
      this._doorOpen = !this._doorOpen;
      this._lastAction = 'toggle_door';
    }
  }
  
  toggleHeadlights(): void {
    this._headlights = !this._headlights;
    this._lastAction = 'toggle_headlights';
  }
  
  cycleIndicator(): void {
    const order: ('off' | 'left' | 'right' | 'hazard')[] = ['off', 'left', 'right', 'hazard'];
    const current = order.indexOf(this._indicator);
    this._indicator = order[(current + 1) % order.length];
    this._lastAction = 'cycle_indicator';
  }
  
  cycleCamera(): void {
    const modes: CameraMode[] = ['chase', 'showcase', 'cockpit', 'cinematic', 'stopside'];
    const current = modes.indexOf(this._cameraMode);
    this._cameraMode = modes[(current + 1) % modes.length];
    this._lastAction = 'cycle_camera';
  }
  
  setQuality(quality: 'cinematic' | 'high' | 'balanced'): void {
    this._quality = quality;
    this._trafficDensity = QUALITY_PROFILES[quality].density;
    this.generateTraffic();
    this._lastAction = `set_quality_${quality}`;
  }
  
  // Renderer updates
  updateRendererState(frame: number, drawCalls: number, width: number, height: number): void {
    this._rendererFrame = frame;
    this._drawCalls = drawCalls;
    this._canvasSize = { width, height };
    this._uiUpdates++;
  }
  
  // Get traffic for rendering
  getTrafficVehicles(): TrafficVehicle[] {
    return this._traffic;
  }
  
  // Get position for camera
  getPosition(): { x: number; z: number } {
    return { x: this._position.x, z: this._position.z };
  }
  
  // Get heading
  getHeading(): number {
    return this._headingDeg;
  }
  
  // Get velocity for sound/effects
  getVelocity(): number {
    return this._velocity;
  }
  
  // Check if doors can open
  canOpenDoors(): boolean {
    return Math.abs(this._velocity) < VEHICLE_DYNAMICS.doorInterlockSpeedMps;
  }
  
  // Get current camera mode
  getCameraMode(): CameraMode {
    return this._cameraMode;
  }
}

// Global store instance
export const gameStore = new GameStore();

// Setup global hooks
export function setupGlobalHooks(): void {
  (window as any).__bus = {
    getState: () => gameStore.getBusState()
  };
  
  (window as any).__game = {
    getState: () => gameStore.getGameState()
  };
  
  (window as any).__vehicle = {
    getState: () => gameStore.getVehicleState()
  };
  
  (window as any).__route = {
    getState: () => gameStore.getRouteState()
  };
  
  (window as any).__passengers = {
    getState: () => gameStore.getPassengersState()
  };
  
  (window as any).__traffic = {
    getState: () => gameStore.getTrafficState()
  };
  
  (window as any).__world = {
    getState: () => gameStore.getWorldState()
  };
  
  (window as any).__camera = {
    getState: () => gameStore.getCameraState()
  };
  
  (window as any).__input = {
    getState: () => gameStore.getInputState()
  };
  
  (window as any).__renderer = {
    getState: () => gameStore.getRendererState()
  };
  
  (window as any).__performance = {
    getState: () => gameStore.getPerformanceState()
  };
  
  (window as any).__settings = {
    getState: () => gameStore.getSettingsState()
  };
}