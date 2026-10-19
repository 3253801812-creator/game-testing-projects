// Game Types for Bus Simulator Indonesia

export interface Vector2 {
  x: number;
  z: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface BusState {
  phase: 'menu' | 'playing' | 'paused' | 'complete';
  speedKph: number;
  position: Vector2;
  headingDeg: number;
  doorOpen: boolean;
  passengerCount: number;
  nextStopIndex: number;
  routeProgress: number;
  fuel: number;
  score: number;
}

export interface GameState {
  phase: 'menu' | 'playing' | 'paused' | 'complete';
  elapsed: number;
  paused: boolean;
  missionStatus: string;
  score: number;
  message: string;
}

export interface VehicleDynamics {
  maxForwardSpeedMps: number;
  maxReverseSpeedMps: number;
  throttleAcceleration: number;
  serviceBrakeDeceleration: number;
  reverseAcceleration: number;
  rollingResistance: number;
  parkingBrakeDamping: number;
  steeringRateDegPerSec: number;
  maxWheelAngleDeg: number;
  doorInterlockSpeedMps: number;
  boardingSpeedMps: number;
}

export interface VehicleState {
  id: string;
  type: string;
  position: Vector2;
  headingDeg: number;
  speedKph: number;
  velocity: number;
  throttle: number;
  brake: number;
  steering: number;
  gear: 'D' | 'R' | 'N';
  parkingBrake: boolean;
  doorOpen: boolean;
  headlights: boolean;
  indicator: 'off' | 'left' | 'right' | 'hazard';
  hornActive: boolean;
  fuel: number;
  damage: number;
  odometerKm: number;
  wheelAngle: number;
  collisionCount: number;
  lastCollision: string;
  dynamics: VehicleDynamics;
}

export interface PassengerStop {
  id: string;
  name: string;
  z: number;
  status: 'next' | 'upcoming' | 'completed';
  waiting: number;
}

export interface RouteService {
  stopLongitudinalHalfLength: number;
  stopLateralHalfWidth: number;
  boardingDuration: number;
}

export interface RouteState {
  name: string;
  stopCount: number;
  currentStopIndex: number;
  stops: PassengerStop[];
  nextStopDistance: number;
  atStop: boolean;
  completed: boolean;
  earnings: number;
  service: RouteService;
}

export interface PassengersState {
  onboard: number;
  capacity: number;
  boardedTotal: number;
  waitingAtNext: number;
  boardingProgress: number;
}

export interface TrafficVehicle {
  id: string;
  x: number;
  z: number;
  speedKph: number;
  direction: number;
  type: 'car' | 'truck' | 'motorcycle';
  color: string;
}

export interface TrafficState {
  count: number;
  density: number;
  vehicles: TrafficVehicle[];
}

export interface SolidObstacle {
  id: string;
  type: string;
  x: number;
  z: number;
  halfWidth: number;
  halfLength: number;
}

export interface WorldState {
  environment: string;
  weather: string;
  timeOfDay: string;
  roadCenter: number;
  roadHalfWidth: number;
  surface: string;
  nearStopMarkers: number;
  solidObstacleCount: number;
  collision: {
    roadEdgeEnabled: boolean;
    trafficEnabled: boolean;
    solidObjectsEnabled: boolean;
    busWidth: number;
    busLength: number;
  };
  nearbySolidObstacles: SolidObstacle[];
}

export type CameraMode = 'chase' | 'showcase' | 'cockpit' | 'cinematic' | 'stopside';

export interface CameraState {
  mode: CameraMode;
  position: Vector3;
  target: Vector3;
  fov: number;
  near: number;
  far: number;
  modes: CameraMode[];
}

export interface InputState {
  pressed: string[];
  lastAction: string;
  lastPointerType: 'mouse' | 'touch' | 'keyboard';
  mobileControls: boolean;
}

export interface QualityProfile {
  pixelRatio: number;
  density: number;
  renderDistance: number;
}

export interface QualityProfiles {
  cinematic: QualityProfile;
  high: QualityProfile;
  balanced: QualityProfile;
}

export interface RendererState {
  backend: string;
  contextLost: boolean;
  frame: number;
  drawCalls: number;
  canvas: { width: number; height: number };
  quality: 'cinematic' | 'high' | 'balanced';
  pixelRatio: number;
  renderDistance: number;
  webglVersion: number;
  dynamicLighting: boolean;
  fog: boolean;
  antialias: boolean;
  shadowsEnabled: boolean;
}

export interface PerformanceState {
  elapsed: number;
  tick: number;
  frame: number;
  fixedStep: number;
  accumulator: number;
  maxSubSteps: number;
  uiUpdates: number;
  mounted: boolean;
}

export interface SettingsState {
  quality: 'cinematic' | 'high' | 'balanced';
  masterVolume: number;
  pixelRatio: number;
  trafficDensity: number;
  renderDistance: number;
  qualityProfiles: QualityProfiles;
}

export interface GameAction {
  type: string;
  payload?: any;
}

export interface TouchControlState {
  accelerate: boolean;
  brake: boolean;
  steerLeft: boolean;
  steerRight: boolean;
  horn: boolean;
}