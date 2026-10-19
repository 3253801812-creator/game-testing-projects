import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { jsx, jsxs } from 'react/jsx-runtime';
import {
  BoxGeometry as Ai,
  PlaneGeometry as Ii,
  MeshStandardMaterial as Ji,
  Color as K,
  SphereGeometry as Li,
  CylinderGeometry as Mi,
  ConeGeometry as Ni,
  DirectionalLight as Oa,
  Scene as Qn,
  PerspectiveCamera as Ta,
  Vector3 as U,
  FogExp2 as Zn,
  WebGLRenderer as cl,
  Mesh as hi,
  CircleGeometry as ji,
  HemisphereLight as pa,
  MeshBasicMaterial as ri,
} from 'three';

(() => {
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const copy = value => JSON.parse(JSON.stringify(value));
  const vec = value => ({ x: value.x, y: value.y, z: value.z });
  const finite = (value, fallback = 0) => Number.isFinite(value) ? value : fallback;
  const LEVELS = {
    forest: {
      id: `forest`, name: `森林回声`, theme: `forest`, par: 4,
      accent: 0xbaff77, ground: 0x2f633d, fairway: 0x4b8a55, sky: 0x163f35,
      spawn: { x: -9, y: .28, z: 0 },
      hole: { x: 9, y: .08, z: 0, radius: .55, captureSpeed: 2.15 },
      description: `树影包围的经典球道，沙坑与缓坡考验落点。`,
      difficulty: `均衡`, cameraAngle: .68, fieldEffect: `森林球场规则`, fieldDetail: `草地为标准滚速；沙坑会明显减速；北侧斜坡会将球推向下坡方向。`
    },
    desert: {
      id: `desert`, name: `日蚀沙海`, theme: `desert`, par: 5,
      accent: 0xffd36e, ground: 0xb78045, fairway: 0xc9a76a, sky: 0xe3a76f,
      spawn: { x: -9, y: .28, z: -2 },
      hole: { x: 8.5, y: .08, z: 2, radius: .55, captureSpeed: 2.15 },
      description: `热浪中的狭长线路，岩柱与沙区迫使你精确控力。`,
      difficulty: `进阶`, cameraAngle: .78, fieldEffect: `沙海地形效果`, fieldDetail: `沙面阻力最高；沙丘会按坡度真实加速或减速，高速越过坡顶可能腾空；蓝色玻璃道更滑；岩柱碰撞会弹起并改变方向。`
    },
    snow: {
      id: `snow`, name: `极光冰原`, theme: `snow`, par: 4,
      accent: 0x8cecff, ground: 0xd8eef2, fairway: 0xbfe3df, sky: 0x35598a,
      spawn: { x: -9, y: .28, z: 2 },
      hole: { x: 8.5, y: .08, z: -2, radius: .55, captureSpeed: 2.15 },
      description: `低摩擦冰道延长滚动距离，越轻的推杆越难掌握。`,
      difficulty: `技巧`, cameraAngle: .58, fieldEffect: `冰雪球场规则`, fieldDetail: `冰面会长距离滑行；粉雪会快速减速；冰晶碰撞会产生弹跳与碎冰特效。`
    }
  };

  const COURSE_LAYOUTS = {
    forest: {
      surfaces: [
        { id: `forest-grass`, type: `grass`, friction: 1.2, center: { x: -8, y: 0, z: -4 }, bounds: { minX: -11, maxX: 11, minZ: -7, maxZ: 7 } },
        { id: `forest-sand`, type: `sand`, friction: 5.0, center: { x: -2, y: .015, z: 2.5 }, bounds: { minX: -4.2, maxX: .2, minZ: .9, maxZ: 4.4 } },
        { id: `forest-ice`, type: `ice`, friction: .10, center: { x: 4.7, y: .02, z: -2.4 }, bounds: { minX: 2.2, maxX: 7.2, minZ: -4.1, maxZ: -.8 } }
      ],
      obstacles: [
        { id: `forest-stone-a`, type: `stone`, x: -2.7, z: -2.15, radius: .76, solid: true, modelType: `clustered-rock`, collider: { shape: `cylinder`, radius: .76, height: 1.2 } },
        { id: `forest-stone-b`, type: `stone`, x: 2.05, z: 2.65, radius: .7, solid: true, modelType: `clustered-rock`, collider: { shape: `cylinder`, radius: .7, height: 1.2 } },
        { id: `forest-stone-c`, type: `stone`, x: 6.05, z: 1.75, radius: .62, solid: true, modelType: `clustered-rock`, collider: { shape: `cylinder`, radius: .62, height: 1.2 } },
        { id: `forest-stone-d`, type: `stone`, x: -5.65, z: 4.55, radius: .62, solid: true, modelType: `clustered-rock`, collider: { shape: `cylinder`, radius: .62, height: 1.2 } }
      ],
      powerups: [
        { id: `forest-bounce`, type: `bounce_pad`, position: { x: -5.45, y: .08, z: -3.25 }, active: true, collected: false, direction: { x: .9, z: .25 }, placed: false },
        { id: `forest-boost`, type: `speed_boost`, position: { x: -.35, y: .08, z: -.75 }, active: true, collected: false, direction: { x: .99, z: .12 }, placed: false },
        { id: `forest-hio`, type: `hole_in_one`, position: { x: -5.9, y: .32, z: 1.55 }, active: true, collected: false, direction: { x: 1, z: 0 }, placed: false }
      ]
    },
    desert: {
      surfaces: [
        { id: `desert-fairway`, type: `grass`, friction: 1.25, center: { x: -8, y: 0, z: -4 }, bounds: { minX: -11, maxX: 11, minZ: -7, maxZ: 7 } },
        { id: `desert-sand`, type: `sand`, friction: 5.4, center: { x: .4, y: .015, z: -1.6 }, bounds: { minX: -2.8, maxX: 3.6, minZ: -3.7, maxZ: .4 } },
        { id: `desert-glass`, type: `ice`, friction: .11, center: { x: 5.2, y: .02, z: 3.6 }, bounds: { minX: 3.1, maxX: 7.4, minZ: 2.2, maxZ: 5 } }
      ],
      obstacles: [
        { id: `desert-pillar-a`, type: `pillar`, x: -4.65, z: 1.95, radius: .7, solid: true, modelType: `capped-column`, collider: { shape: `cylinder`, radius: .7, height: 1.7 } },
        { id: `desert-pillar-b`, type: `pillar`, x: -1.0, z: -4.75, radius: .78, solid: true, modelType: `capped-column`, collider: { shape: `cylinder`, radius: .78, height: 1.7 } },
        { id: `desert-pillar-c`, type: `pillar`, x: 3.75, z: -1.45, radius: .68, solid: true, modelType: `capped-column`, collider: { shape: `cylinder`, radius: .68, height: 1.7 } },
        { id: `desert-pillar-d`, type: `pillar`, x: 6.55, z: 4.9, radius: .64, solid: true, modelType: `capped-column`, collider: { shape: `cylinder`, radius: .64, height: 1.7 } },
        { id: `desert-gate-post-0`, type: `gate-post`, x: -7.8, z: 5.4, radius: .5, solid: true, modelType: `capped-column`, collider: { shape: `cylinder`, radius: .5, height: 1.5 } },
        { id: `desert-gate-post-1`, type: `gate-post`, x: 7.8, z: -5.4, radius: .5, solid: true, modelType: `capped-column`, collider: { shape: `cylinder`, radius: .5, height: 1.5 } }
      ],
      powerups: [
        { id: `desert-bounce`, type: `bounce_pad`, position: { x: -6.35, y: .08, z: -3.05 }, active: true, collected: false, direction: { x: .72, z: .7 }, placed: false },
        { id: `desert-boost`, type: `speed_boost`, position: { x: 1.55, y: .08, z: .7 }, active: true, collected: false, direction: { x: .96, z: .28 }, placed: false },
        { id: `desert-hio`, type: `hole_in_one`, position: { x: 6.35, y: .32, z: -4.45 }, active: true, collected: false, direction: { x: 1, z: 0 }, placed: false }
      ]
    },
    snow: {
      surfaces: [
        { id: `snow-fairway`, type: `grass`, friction: 1.1, center: { x: -8, y: 0, z: -4 }, bounds: { minX: -11, maxX: 11, minZ: -7, maxZ: 7 } },
        { id: `snow-powder`, type: `sand`, friction: 4.8, center: { x: -4.5, y: .015, z: -2 }, bounds: { minX: -7.2, maxX: -2, minZ: -3.5, maxZ: -.5 } },
        { id: `snow-ice`, type: `ice`, friction: .09, center: { x: -1.0, y: .02, z: 1.8 }, bounds: { minX: -5.5, maxX: 3.5, minZ: .2, maxZ: 3.4 } }
      ],
      obstacles: [
        { id: `snow-crystal-a`, type: `crystal`, x: -5.75, z: 4.25, radius: .64, solid: true, modelType: `crystal-cluster`, collider: { shape: `cylinder`, radius: .64, height: 1.8 } },
        { id: `snow-crystal-b`, type: `crystal`, x: -1.55, z: -4.15, radius: .75, solid: true, modelType: `crystal-cluster`, collider: { shape: `cylinder`, radius: .75, height: 1.8 } },
        { id: `snow-crystal-c`, type: `crystal`, x: 4.15, z: 4.65, radius: .68, solid: true, modelType: `crystal-cluster`, collider: { shape: `cylinder`, radius: .68, height: 1.8 } },
        { id: `snow-crystal-d`, type: `crystal`, x: 6.45, z: -4.2, radius: .68, solid: true, modelType: `crystal-cluster`, collider: { shape: `cylinder`, radius: .68, height: 1.8 } },
        { id: `snow-ice-spike-0`, type: `ice-spike`, x: -8.6, z: 4.8, radius: .55, solid: true, modelType: `crystal-cluster`, collider: { shape: `cylinder`, radius: .55, height: 1.65 } },
        { id: `snow-ice-spike-1`, type: `ice-spike`, x: 8.1, z: -4.8, radius: .55, solid: true, modelType: `crystal-cluster`, collider: { shape: `cylinder`, radius: .55, height: 1.65 } },
        { id: `snow-ice-spike-2`, type: `ice-spike`, x: 9.0, z: 4.8, radius: .55, solid: true, modelType: `crystal-cluster`, collider: { shape: `cylinder`, radius: .55, height: 1.65 } }
      ],
      powerups: [
        { id: `snow-bounce`, type: `bounce_pad`, position: { x: -3.9, y: .08, z: 4.45 }, active: true, collected: false, direction: { x: .9, z: -.44 }, placed: false },
        { id: `snow-boost`, type: `speed_boost`, position: { x: 1.15, y: .08, z: .85 }, active: true, collected: false, direction: { x: .96, z: -.28 }, placed: false },
        { id: `snow-hio`, type: `hole_in_one`, position: { x: 6.2, y: .32, z: 4.25 }, active: true, collected: false, direction: { x: 1, z: 0 }, placed: false }
      ]
    }
  };

  const initialBall = () => ({
    position: { x: -9, y: .28, z: 0 }, velocity: { x: 0, y: 0, z: 0 }, speed: 0,
    radius: .28, moving: false, sleeping: true, airborne: false, inHole: false, outOfBounds: false,
    currentSurface: `grass`, friction: 1.2, lastCollision: null, lastImpactAt: 0,
    lastSafePosition: { x: -9, y: .28, z: 0 }, lowSpeedTime: 0
  });

  const defaultPowerupInventory = () => [
    { type: `hole_in_one`, count: 0 },
    { type: `bounce_pad`, count: 1 },
    { type: `speed_boost`, count: 1 }
  ];

  const S = {
    ready: false, renderError: ``, screen: `menu`, mode: `single`, level: null,
    elapsed: 0, strokes: 0, lastCompletedStrokes: 0, totalStrokes: 0, currentScore: 0, totalScore: 0, holeComplete: false,
    startedAt: performance.now(), tournamentScores: {}, tournamentPoints: {}, toast: ``, toastUntil: 0,
    ball: initialBall(),
    shot: {
      dragging: false, canShoot: true, startScreen: null, currentScreen: null,
      direction: { x: 1, y: 0, z: 0 }, power: 0, minPower: .06, maxPower: 1,
      strokeCount: 0
    },
    camera: {
      mode: `follow`, position: { x: -9, y: 8, z: 12 }, target: { x: -9, y: .28, z: 0 },
      distance: 12, minDistance: 7, maxDistance: 20, zoom: 1, angle: .68,
      pitch: .62, freeAngle: .68, dragging: false, dragStart: null, startAngle: .68, startPitch: .62
    },
    multiplayer: {
      enabled: false, mode: `local`, status: `setup`, playerCount: 0,
      currentPlayerId: null, turnIndex: 0, round: 1, revision: 0,
      players: [], winnerId: null, tiedPlayerIds: []
    },
    powerups: {
      items: [],
      inventory: defaultPowerupInventory(),
      activeEffect: null, armedType: null, lastTriggeredId: null,
      placingType: null, placementScreen: null, placementStart: null, placementAnchor: null,
      placementDirection: null, selectedPlacedId: null, lastPlacedId: null
    },
    ui: {
      showDirection: true, showField: true, showSkills: true, showTips: true, compactHud: false,
      collapseStats: false, collapseField: false, collapsePower: false, collapseSkills: false
    },
    skillFeedback: null, effects: [], holeCaptureTime: 0, fastHoleHintUntil: 0,
    lastTrailAt: 0, ballRollAngle: 0,
    renderer: null, scene: null, camera3d: null, ballMesh: null,
    raf: 0, accumulator: 0, lastFrame: performance.now(), lastUiPulse: 0,
    pendingLevel: `forest`, testPhysicsPaused: false,
    physics: {
      fixedTimeStep: 1 / 120, maxSubSteps: 7,
      gravity: { x: 0, y: -9.81, z: 0 }, stopSpeed: .035, maxBallSpeed: 18
    },
    runtime: {
      simulationTick: 0, renderFrame: 0, reactCommitCount: 0, logicLoopCount: 0,
      runtimeMountCount: 0, runtimeCleanupCount: 0, engineGeneration: 0
    }
  };

  const courseLayout = () => COURSE_LAYOUTS[S.level?.id || S.pendingLevel || `forest`] || COURSE_LAYOUTS.forest;
  const inventoryItem = type => S.powerups.inventory.find(item => item.type === type);
  const activeObstacles = () => courseLayout().obstacles;
  const activeSurfaces = () => courseLayout().surfaces;

  const listeners = new Set();
  let version = 0;
  const notify = () => {
    version += 1;
    listeners.forEach(listener => listener());
  };
  const notifyAndCommit = () => {
    // A match completion is one transaction: its public state and visible
    // result surface become observable together before the physics frame ends.
    // Increment the version so React's useSyncExternalStore detects the snapshot
    // change, then notify the same way the single-player completion path does
    // (a plain listener flush). The previous flushSync-only form never advanced
    // the version, so React could not observe the completion re-render.
    version += 1;
    listeners.forEach(listener => listener());
  };
  const subscribe = listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const snapshot = () => version;
  const setToast = (message, duration = 1800) => {
    S.toast = message;
    S.toastUntil = performance.now() + duration;
    notify();
  };
  const setScreen = screen => {
    S.screen = screen;
    S.shot.dragging = false;
    S.shot.startScreen = null;
    S.shot.currentScreen = null;
    if (screen === `local_setup`) {
      Object.assign(S.multiplayer, {
        enabled: false, mode: `local`, status: `setup`, playerCount: 0,
        currentPlayerId: null, turnIndex: 0, round: 1, revision: 0,
        players: [], winnerId: null, tiedPlayerIds: []
      });
      S.mode = `single`;
    }
    notify();
  };

  const surfaceAt = (x, z) => {
    const surfaces = activeSurfaces();
    const sand = surfaces.find(item => item.type === `sand`) || surfaces[1];
    if (sand && x >= sand.bounds.minX && x <= sand.bounds.maxX && z >= sand.bounds.minZ && z <= sand.bounds.maxZ) return sand;
    const ice = surfaces.find(item => item.type === `ice`) || surfaces[2];
    if (ice && x >= ice.bounds.minX && x <= ice.bounds.maxX && z >= ice.bounds.minZ && z <= ice.bounds.maxZ) return ice;
    return surfaces.find(item => item.type === `grass`) || surfaces[0];
  };

  const disposeObject = object => {
    object.traverse?.(child => {
      child.geometry?.dispose?.();
      const materials = Array.isArray(child.material) ? child.material : child.material ? [child.material] : [];
      materials.forEach(material => {
        Object.values(material).forEach(value => value?.isTexture && value.dispose?.());
        material.dispose?.();
      });
    });
  };

  const clearScene = () => {
    if (!S.scene) return;
    const children = [...S.scene.children];
    children.forEach(child => {
      disposeObject(child);
      S.scene.remove(child);
    });
  };

  const addMesh = (geometry, material, name, x, y, z) => {
    const mesh = new hi(geometry, material);
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    S.scene.add(mesh);
    return mesh;
  };

  const tagPowerupMesh = (mesh, item, part) => {
    mesh.userData.powerupId = item.id;
    mesh.userData.powerupType = item.type;
    mesh.userData.powerupPart = part;
    return mesh;
  };

  const removePowerupVisual = item => {
    if (!S.scene || !item) return;
    const matches = [];
    S.scene.traverse(object => {
      if (object.userData?.powerupId === item.id) matches.push(object);
    });
    matches.forEach(object => {
      object.visible = false;
      if (!object.parent) return;
      disposeObject(object);
      object.parent.remove(object);
    });
  };


  const normalizeDirection = direction => {
    const x = finite(direction?.x, 1);
    const z = finite(direction?.z, 0);
    const length = Math.hypot(x, z) || 1;
    return { x: x / length, z: z / length };
  };

  const DESERT_COURSE_DUNES = [
    { id: `dune-north`, x: -1.75, z: 4.25, radiusX: 2.15, radiusZ: 1.3, height: .64 },
    { id: `dune-south`, x: 4.75, z: -4.05, radiusX: 1.85, radiusZ: 1.15, height: .52 }
  ];

  const rampInfoAt = (x, z) => {
    const edge = S.ball?.radius || .28;
    const inside = x >= -1 - edge && x <= 4 + edge && z >= 3.9 - edge && z <= 5.9 + edge;
    if (!inside) return { active: false, kind: `flat`, height: 0, slopeX: 0, slopeZ: 0, downhillX: 0, downhillZ: -1 };
    const t = clamp((z - 3.9) / 2, 0, 1);
    const sideBlend = clamp(Math.min((x + 1 + edge) / edge, (4 + edge - x) / edge, 1), 0, 1);
    const endBlend = clamp(Math.min((z - 3.9 + edge) / edge, (5.9 + edge - z) / edge, 1), 0, 1);
    const blend = Math.min(sideBlend, endBlend);
    const height = (.012 + t * .255) * blend;
    return { active: true, kind: `ramp`, height, slopeX: 0, slopeZ: .1275 * blend, downhillX: 0, downhillZ: -1 };
  };

  const duneInfoAt = (x, z) => {
    if ((S.level?.theme || S.pendingLevel) !== `desert`) return { active: false, kind: `flat`, height: 0, slopeX: 0, slopeZ: 0, downhillX: 0, downhillZ: 0 };
    let best = null;
    for (const dune of DESERT_COURSE_DUNES) {
      const ux = (x - dune.x) / dune.radiusX;
      const uz = (z - dune.z) / dune.radiusZ;
      const radius = Math.hypot(ux, uz);
      if (radius >= 1) continue;
      const height = dune.height * .5 * (1 + Math.cos(Math.PI * radius));
      const safeRadius = Math.max(radius, .0001);
      const derivative = -dune.height * Math.PI * .5 * Math.sin(Math.PI * radius);
      const slopeX = derivative * ux / (safeRadius * dune.radiusX);
      const slopeZ = derivative * uz / (safeRadius * dune.radiusZ);
      const slopeLength = Math.hypot(slopeX, slopeZ) || 1;
      const info = { active: true, kind: `dune`, id: dune.id, height, slopeX, slopeZ, downhillX: -slopeX / slopeLength, downhillZ: -slopeZ / slopeLength };
      if (!best || info.height > best.height) best = info;
    }
    return best || { active: false, kind: `flat`, height: 0, slopeX: 0, slopeZ: 0, downhillX: 0, downhillZ: 0 };
  };

  const terrainInfoAt = (x, z) => {
    const ramp = rampInfoAt(x, z);
    const dune = duneInfoAt(x, z);
    return dune.height > ramp.height ? dune : ramp;
  };

  const groundHeightAt = (x, z) => terrainInfoAt(x, z).height;

  const resolveRampBackCollision = previous => {
    const ball = S.ball;
    const rearFaceZ = 5.9;
    const rearHeight = .267;
    const contactZ = rearFaceZ + ball.radius + .024;
    const withinWidth = ball.position.x >= -1 - ball.radius && ball.position.x <= 4 + ball.radius;
    const crossedRearFace = previous.z >= rearFaceZ && ball.position.z < contactZ;
    const approachingRear = ball.velocity.z < 0;
    const belowRearTop = Math.min(previous.y, ball.position.y) - ball.radius < rearHeight + .055;
    if (!withinWidth || !crossedRearFace || !approachingRear || !belowRearTop) return false;
    ball.position.z = contactZ;
    ball.position.y = Math.max(ball.radius, ball.position.y);
    ball.velocity.z = Math.max(.45, Math.abs(ball.velocity.z) * .74);
    ball.velocity.x *= .94;
    ball.velocity.y = 0;
    ball.airborne = false;
    ball.moving = true;
    ball.sleeping = false;
    ball.lastCollision = `slope-rear-wall`;
    spawnImpactEffect({ x: ball.position.x, y: ball.position.y, z: rearFaceZ });
    return true;
  };

  const removeEffectObject = object => {
    if (!object?.parent) return;
    disposeObject(object);
    object.parent.remove(object);
  };

  const spawnSkillEffect = (type, position = S.ball.position) => {
    if (!S.scene || !position) return;
    const colors = { bounce_pad: 0xff5fa7, speed_boost: 0x31e8ff, hole_in_one: 0xffdc67, placed: 0xbaff77, impact: 0xffd18a, slowdown: 0x8cecff };
    const color = colors[type] || colors.placed;
    const id = `fx-${Date.now().toString(36)}-${Math.floor(Math.random() * 9999)}`;
    const ring = addMesh(new Mi(.58, .58, .035, 28), new ri({ color, transparent: true, opacity: .72, depthWrite: false }), `${id}-ring`, position.x, groundHeightAt(position.x, position.z) + .055, position.z);
    ring.scale.z = .72;
    const particles = [];
    for (let index = 0; index < 6; index += 1) {
      const angle = index / 6 * Math.PI * 2;
      const particle = addMesh(new Li(.055, 8, 6), new ri({ color, transparent: true, opacity: .86, depthWrite: false }), `${id}-particle-${index}`, position.x, .16, position.z);
      particle.userData.fxAngle = angle;
      particles.push(particle);
    }
    S.effects.push({ id, type, startedAt: performance.now(), duration: 720, ring, particles, origin: { x: position.x, y: groundHeightAt(position.x, position.z), z: position.z } });
  };

  const setSkillFeedback = (type, message, position = S.ball.position) => {
    S.skillFeedback = { type, message, until: performance.now() + 1250 };
    spawnSkillEffect(type, position);
    setToast(message, 1500);
  };


  const spawnTrailEffect = (position = S.ball.position, surface = S.ball.currentSurface) => {
    if (!S.scene || !position || S.effects.length > 24) return;
    const color = surface === `ice` ? 0xb8f5ff : surface === `sand` ? 0xe7c17b : 0xc9f2b8;
    const particles = [];
    for (let index = 0; index < 2; index += 1) {
      const particle = addMesh(new Li(.035 + index * .012, 6, 5), new ri({ color, transparent: true, opacity: .58, depthWrite: false }), `trail-${Date.now()}-${index}`, position.x, position.y - .18, position.z);
      particle.userData.driftX = (Math.random() - .5) * .35;
      particle.userData.driftZ = (Math.random() - .5) * .35;
      particles.push(particle);
    }
    S.effects.push({ kind: `trail`, startedAt: performance.now(), duration: 360, ring: null, particles, origin: copy(position) });
  };

  const spawnImpactEffect = (position = S.ball.position) => {
    if (performance.now() - finite(S.ball.lastImpactAt) < 110) return;
    S.ball.lastImpactAt = performance.now();
    spawnSkillEffect(`impact`, position);
  };

  const refreshPowerupVisual = item => {
    if (!item || !S.level) return;
    removePowerupVisual(item);
    createPowerupVisual(item, S.level);
  };

  const rotatePlacedPowerup = (id, radians) => {
    const item = S.powerups.items.find(entry => entry.id === id && entry.placed && entry.active && !entry.collected);
    if (!item) return false;
    const direction = normalizeDirection(item.direction);
    const cosine = Math.cos(radians);
    const sine = Math.sin(radians);
    item.direction = normalizeDirection({ x: direction.x * cosine - direction.z * sine, z: direction.x * sine + direction.z * cosine });
    S.powerups.selectedPlacedId = item.id;
    refreshPowerupVisual(item);
    setSkillFeedback(`placed`, `方向已调整 · ${Math.round(Math.atan2(item.direction.z, item.direction.x) * 180 / Math.PI)}°`, item.position);
    notify();
    return true;
  };

  const selectPlacedPowerup = id => {
    const item = S.powerups.items.find(entry => entry.id === id && entry.placed && entry.active && !entry.collected);
    S.powerups.selectedPlacedId = item?.id || null;
    notify();
  };

  const toggleUi = key => {
    if (!(key in S.ui)) return;
    S.ui[key] = !S.ui[key];
    try { localStorage.setItem(`parall-ui-v1`, JSON.stringify(S.ui)); } catch {}
    notify();
  };


  const expandAllModules = () => {
    [`collapseStats`, `collapseField`, `collapsePower`, `collapseSkills`].forEach(key => { S.ui[key] = false; });
    try { localStorage.setItem(`parall-ui-v1`, JSON.stringify(S.ui)); } catch {}
    notify();
  };

  try {
    const savedUi = JSON.parse(localStorage.getItem(`parall-ui-v1`) || `null`);
    if (savedUi && typeof savedUi === `object`) Object.keys(S.ui).forEach(key => { if (typeof savedUi[key] === `boolean`) S.ui[key] = savedUi[key]; });
  } catch {}

  const createEnvironment = level => {
    const theme = level.theme;
    const perimeter = [
      [-9.6, -8.35], [-6.4, -8.42], [-3.2, -8.38], [0, -8.45], [3.2, -8.38], [6.4, -8.42], [9.6, -8.35],
      [-9.6, 8.35], [-6.4, 8.42], [-3.2, 8.38], [0, 8.45], [3.2, 8.38], [6.4, 8.42], [9.6, 8.35],
      [-12.92, -4.7], [-12.94, -.9], [-12.92, 3.1], [12.92, -4.7], [12.94, -.9], [12.92, 3.1]
    ];
    const trunkColor = theme === `snow` ? 0x64758d : 0x5b3a27;
    const crownColor = theme === `snow` ? 0xbfeff2 : 0x225d35;
    perimeter.forEach(([x, z], index) => {
      if (theme === `desert`) {
        const cactus = addMesh(new Mi(.15, .22, 1.9 + (index % 3) * .18, 8), new Ji({ color: 0x4f8a52, roughness: .92 }), `cactus-${index}`, x, 1.0, z);
        cactus.rotation.z = index % 2 ? .025 : -.025;
        const arm = addMesh(new Mi(.08, .12, .62, 7), new Ji({ color: 0x4f8a52, roughness: .9 }), `cactus-arm-${index}`, x + (index % 2 ? .22 : -.22), 1.18, z);
        arm.rotation.z = Math.PI / 2;
      } else {
        addMesh(new Mi(.1, .15, 1.45, 8), new Ji({ color: trunkColor, roughness: .96 }), `trunk-${index}`, x, .72, z);
        const crown = addMesh(new Ni(theme === `snow` ? .62 : .7, theme === `snow` ? 1.86 : 1.68, 10), new Ji({ color: crownColor, roughness: .9 }), `tree-${index}`, x, 1.85, z);
        if (theme === `snow`) {
          crown.scale.set(1, 1.16, 1);
          const cap = addMesh(new Ni(.47, 1.28, 10), new Ji({ color: 0xf2fbff, roughness: .96 }), `snow-cap-${index}`, x, 2.35, z);
          cap.scale.y = .7;
        }
      }
    });
  };

  const createThemeFeatures = level => {
    if (level.theme === `forest`) {
      [[-7.4, -4.8, 2.6, 1.25], [-.2, 5.8, 3.4, .95], [7.4, -5.5, 2.3, 1.1]].forEach(([x, z, sx, sz], index) => {
        const moss = addMesh(new Li(.8, 16, 10), new Ji({ color: index % 2 ? 0x376f42 : 0x2a5a39, roughness: 1 }), `forest-moss-${index}`, x, -.02, z);
        moss.scale.set(sx, .18, sz);
      });
      const pond = addMesh(new ji(1.3, 28), new Ji({ color: 0x276c78, roughness: .3, metalness: .08, transparent: true, opacity: .82, depthWrite: false }), `forest-pond`, 7.8, .015, 5.65);
      pond.rotation.x = -Math.PI / 2;
    } else if (level.theme === `desert`) {
      // Do not render decorative dunes inside the playable bounds unless they
      // participate in terrain/collision physics. The two course dunes below
      // are backed by DESERT_COURSE_DUNES and terrainInfoAt(), so the ball
      // climbs over them instead of visually passing through a fake volume.
      [-7.8, 7.8].forEach((x, index) => {
        addMesh(new Ai(.55, 2.6, .75), new Ji({ color: 0x8b5d3e, roughness: .95 }), `desert-gate-${index}-a`, x, 1.05, index ? -5.4 : 5.4);
        addMesh(new Ai(2.5, .48, .75), new Ji({ color: 0x9c6946, roughness: .95 }), `desert-gate-${index}-b`, x, 2.25, index ? -5.4 : 5.4);
      });
      DESERT_COURSE_DUNES.forEach((duneData, index) => {
        const dune = addMesh(new Li(1, 28, 16, 0, Math.PI*2, 0, Math.PI/2), new Ji({ color: index ? 0xd9ad68 : 0xe1b977, roughness: 1 }), `desert-course-dune-${index}`, duneData.x, 0, duneData.z);
        dune.scale.set(duneData.radiusX, duneData.height, duneData.radiusZ);
      });
    } else {
      // Previous snow-bank meshes were purely decorative inside the playable
      // area and had no physical volume. Remove those ghost obstacles; the
      // remaining ice crystals are paired with real solid obstacle entries.
      [[-8.6, 4.8], [8.1, -4.8], [9.0, 4.8]].forEach(([x, z], index) => {
        const crystal = addMesh(new Ni(.55, 1.7, 5), new Ji({ color: 0x79e6ff, roughness: .22, metalness: .18, transparent: true, opacity: .86, depthWrite: false }), `ice-crystal-${index}`, x, .82, z);
        crystal.rotation.z = index % 2 ? .18 : -.14;
      });
    }
  };

  const createPowerupVisual = (item, level) => {
    const direction = item.direction || { x: 1, z: 0 };
    const length = Math.hypot(direction.x, direction.z) || 1;
    const dx = direction.x / length;
    const dz = direction.z / length;
    const rotation = -Math.atan2(dz, dx);
    if (item.type === `bounce_pad`) {
      const base = tagPowerupMesh(addMesh(new Mi(1.12, 1.12, .22, 32), new Ji({ color: 0xff4f9a, emissive: 0x7a123f, metalness: .3 }), `powerup-${item.id}-base`, item.position.x, groundHeightAt(item.position.x, item.position.z) + .11, item.position.z), item, `base`);
      base.scale.z = .62;
      base.rotation.y = rotation;
      const core = tagPowerupMesh(addMesh(new Mi(.72, .72, .18, 28), new Ji({ color: 0xffd1e6, emissive: 0xb91e64 }), `powerup-${item.id}-core`, item.position.x, groundHeightAt(item.position.x, item.position.z) + .27, item.position.z), item, `core`);
      core.scale.z = .62;
      core.rotation.y = rotation;
    } else if (item.type === `speed_boost`) {
      const strip = tagPowerupMesh(addMesh(new Ai(3.6, .14, 1.38), new Ji({ color: 0x2ce0ff, emissive: 0x0b829a, metalness: .38 }), `powerup-${item.id}-strip`, item.position.x, groundHeightAt(item.position.x, item.position.z) + .085, item.position.z), item, `strip`);
      strip.rotation.y = rotation;
      for (let index = -1; index <= 1; index += 1) {
        const centerX = item.position.x + index * .72 * dx;
        const centerZ = item.position.z + index * .72 * dz;
        [-1, 1].forEach(side => {
          const arm = tagPowerupMesh(addMesh(new Ai(.48, .045, .12), new ri({ color: 0xe8fdff, transparent: true, opacity: .96 }), `powerup-${item.id}-arrow-${index}-${side}`, centerX - dx * .08 + (-dz) * side * .1, groundHeightAt(centerX, centerZ) + .11, centerZ - dz * .08 + dx * side * .1), item, `arrow`);
          arm.rotation.y = rotation + side * .62;
        });
      }
      const directionTip = tagPowerupMesh(addMesh(new Ni(.28, .78, 3), new Ji({ color: 0xffffff, emissive: 0x55e6ff, roughness: .28 }), `powerup-${item.id}-direction-tip`, item.position.x + dx * 1.52, groundHeightAt(item.position.x, item.position.z) + .3, item.position.z + dz * 1.52), item, `direction-tip`);
      directionTip.rotation.z = Math.PI / 2;
      directionTip.rotation.y = rotation;
    } else if (item.type === `hole_in_one`) {
      const orb = tagPowerupMesh(addMesh(new Li(.35, 24, 18), new Ji({ color: 0xffe071, emissive: 0x8a5a00, metalness: .65, roughness: .18 }), `powerup-${item.id}-orb`, item.position.x, item.position.y, item.position.z), item, `orb`);
      orb.userData.floatBase = item.position.y;
      const halo = tagPowerupMesh(addMesh(new Mi(.55, .55, .05, 28), new ri({ color: level.accent, transparent: true, opacity: .68 }), `powerup-${item.id}-halo`, item.position.x, groundHeightAt(item.position.x, item.position.z) + .05, item.position.z), item, `halo`);
      halo.scale.z = .46;
    }
  };

  const createPowerups = level => {
    S.powerups.items.filter(item => item.active && !item.collected).forEach(item => createPowerupVisual(item, level));
  };

  const clearPowerupVisuals = () => {
    if (!S.scene) return;
    [...S.scene.children]
      .filter(object => object.userData?.powerupId)
      .forEach(object => { disposeObject(object); S.scene.remove(object); });
  };

  const capturePowerupState = () => ({
    items: copy(S.powerups.items),
    inventory: copy(S.powerups.inventory),
    activeEffect: S.powerups.activeEffect,
    armedType: S.powerups.armedType,
    lastTriggeredId: S.powerups.lastTriggeredId,
    selectedPlacedId: S.powerups.selectedPlacedId,
    lastPlacedId: S.powerups.lastPlacedId
  });

  const restorePowerupState = state => {
    if (!S.level) return false;
    const source = state || { items: copy(courseLayout().powerups), inventory: defaultPowerupInventory() };
    clearPowerupVisuals();
    S.powerups.items = copy(source.items || courseLayout().powerups);
    S.powerups.inventory = copy(source.inventory || defaultPowerupInventory());
    S.powerups.activeEffect = source.activeEffect || null;
    S.powerups.armedType = source.armedType || null;
    S.powerups.lastTriggeredId = source.lastTriggeredId || null;
    S.powerups.selectedPlacedId = source.selectedPlacedId || null;
    S.powerups.lastPlacedId = source.lastPlacedId || null;
    S.powerups.placingType = null;
    S.powerups.placementScreen = null;
    S.powerups.placementStart = null;
    S.powerups.placementAnchor = null;
    S.powerups.placementDirection = null;
    createPowerups(S.level);
    return true;
  };

  const buildCourse = theme => {
    if (!S.scene) {
      S.pendingLevel = theme;
      return false;
    }
    const level = LEVELS[theme] || LEVELS.forest;
    clearScene();
    S.level = level;
    S.pendingLevel = level.id;
    const layout = courseLayout();
    S.scene.background = new K(level.sky);
    S.scene.fog = new Zn(level.sky, level.theme === `desert` ? .018 : .024);

    S.scene.add(new pa(0xffffff, level.theme === `desert` ? 0x8b6338 : 0x183d2e, 2.2));
    const sun = new Oa(0xffffff, level.theme === `snow` ? 2.8 : 2.4);
    sun.position.set(-8, 16, 9);
    sun.castShadow = true;
    S.scene.add(sun);

    addMesh(new Ai(26, .32, 18), new Ji({ color: level.ground, roughness: .96 }), `theme-ground`, 0, -.23, 0);
    addMesh(new Ai(23, .18, 14), new Ji({ color: level.fairway, roughness: .9 }), `grass-surface`, 0, -.09, 0);

    const sandSurface = layout.surfaces.find(item => item.type === `sand`);
    const sandWidth = sandSurface.bounds.maxX - sandSurface.bounds.minX;
    const sandDepth = sandSurface.bounds.maxZ - sandSurface.bounds.minZ;
    const sandRadius = Math.max(sandWidth, sandDepth) / 2;
    const sand = addMesh(new ji(sandRadius, 32), new Ji({ color: level.theme === `desert` ? 0xe4b871 : level.theme === `snow` ? 0xe8f4f6 : 0xd8b56a, roughness: 1 }), `sand-trap`, sandSurface.center.x, .015, sandSurface.center.z);
    sand.rotation.x = -Math.PI / 2;
    sand.scale.x = sandWidth / (sandRadius * 2);
    sand.scale.y = sandDepth / (sandRadius * 2);
    const iceSurface = layout.surfaces.find(item => item.type === `ice`);
    const iceWidth = iceSurface.bounds.maxX - iceSurface.bounds.minX;
    const iceDepth = iceSurface.bounds.maxZ - iceSurface.bounds.minZ;
    const ice = addMesh(new Ai(iceWidth, .045, iceDepth), new Ji({ color: level.theme === `desert` ? 0x7fd7dc : 0x9de8ff, roughness: .2, metalness: .12, transparent: true, opacity: .84, depthWrite: false }), `ice-lane`, iceSurface.center.x, .02, iceSurface.center.z);
    ice.rotation.y = level.theme === `snow` ? .08 : -.05;

    const wallMaterial = new Ji({ color: level.theme === `snow` ? 0xeaf8ff : level.theme === `desert` ? 0x8d603f : 0x173f2c, roughness: .85 });
    [[0, -7.35, 24, .65], [0, 7.35, 24, .65], [-11.7, 0, .65, 15], [11.7, 0, .65, 15]].forEach(([x, z, width, depth], index) => {
      addMesh(new Ai(width, 1.2, depth), wallMaterial.clone(), `boundary-${index}`, x, .5, z);
    });

    const ramp = addMesh(new Ai(5, .28, 2.0), new Ji({ color: level.fairway, roughness: .82, metalness: .02 }), `slope-ramp`, 1.5, -.01, 4.9);
    ramp.rotation.x = -.13;

    layout.obstacles.forEach((obstacle, index) => {
      const type = obstacle.type || (level.theme === `desert` ? `pillar` : level.theme === `snow` ? `crystal` : `stone`);
      const color = level.theme === `snow` ? 0x7799b8 : level.theme === `desert` ? 0x86583d : 0x335945;
      const material = new Ji({ color, roughness: level.theme === `snow` ? .55 : .9, metalness: level.theme === `snow` ? .08 : .01 });
      let mesh;
      if (type === `stone`) {
        mesh = addMesh(new Li(obstacle.radius, 18, 12), material, `obstacle-${obstacle.id}`, obstacle.x, obstacle.radius * .7, obstacle.z);
        mesh.scale.set(1.08, .72, .94);
        const chip = addMesh(new Li(obstacle.radius * .38, 12, 8), material, `obstacle-${obstacle.id}-chip`, obstacle.x + obstacle.radius * .34, obstacle.radius * 1.02, obstacle.z - obstacle.radius * .18);
        chip.scale.set(1, .72, .86);
      } else if (type === `crystal` || type === `ice-spike`) {
        mesh = addMesh(new Mi(0, obstacle.radius * .72, 1.75, 6), material, `obstacle-${obstacle.id}`, obstacle.x, .875, obstacle.z);
        mesh.rotation.y = index * .7;
        const shardA = addMesh(new Mi(0, obstacle.radius * .34, 1.0, 5), material, `obstacle-${obstacle.id}-shard-a`, obstacle.x - obstacle.radius * .42, .5, obstacle.z + obstacle.radius * .12);
        shardA.rotation.z = -.24;
        const shardB = addMesh(new Mi(0, obstacle.radius * .3, .82, 5), material, `obstacle-${obstacle.id}-shard-b`, obstacle.x + obstacle.radius * .42, .41, obstacle.z - obstacle.radius * .14);
        shardB.rotation.z = .28;
      } else {
        mesh = addMesh(new Mi(obstacle.radius * .68, obstacle.radius, 1.52 + index * .025, 8), material, `obstacle-${obstacle.id}`, obstacle.x, .76, obstacle.z);
        addMesh(new Mi(obstacle.radius * .92, obstacle.radius * .92, .16, 8), material, `obstacle-${obstacle.id}-base`, obstacle.x, .08, obstacle.z);
        addMesh(new Mi(obstacle.radius * .82, obstacle.radius * .82, .14, 8), material, `obstacle-${obstacle.id}-cap`, obstacle.x, 1.53, obstacle.z);
      }
      mesh.userData.solid = true;
      mesh.userData.colliderRadius = obstacle.collider?.radius || obstacle.radius;
      mesh.userData.modelType = obstacle.modelType || `compound-obstacle`;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    });

    const hole = addMesh(new Mi(level.hole.radius, level.hole.radius, .07, 40), new Ji({ color: 0x06120c, roughness: 1 }), `hole`, level.hole.x, .015, level.hole.z);
    hole.userData.role = `hole`;
    hole.rotation.x = 0;
    addMesh(new Mi(.035, .035, 3, 12), new Ji({ color: 0xf9f9f6, roughness: .55 }), `flag-pole`, level.hole.x, 1.5, level.hole.z);
    const flag = addMesh(new Ii(1.15, .62), new ri({ color: level.accent, side: 2 }), `flag`, level.hole.x, 2.55, level.hole.z + .57);
    flag.rotation.y = Math.PI / 2;

    const ball = addMesh(new Li(.28, 20, 14), new Ji({ color: 0xffffff, roughness: .36, metalness: .05 }), `golf-ball`, level.spawn.x, level.spawn.y, level.spawn.z);
    ball.userData.role = `ball`;
    S.ballMesh = ball;
    ball.castShadow = true;

    createThemeFeatures(level);
    createEnvironment(level);
    S.powerups.items = copy(layout.powerups);
    S.powerups.activeEffect = null;
    S.powerups.armedType = null;
    S.powerups.lastTriggeredId = null;
    S.powerups.placingType = null;
    S.powerups.placementScreen = null;
    S.powerups.placementStart = null;
    S.powerups.placementAnchor = null;
    S.powerups.placementDirection = null;
    S.powerups.selectedPlacedId = null;
    S.powerups.lastPlacedId = null;
    S.effects = [];
    S.skillFeedback = null;
    S.holeCaptureTime = 0;
    S.powerups.inventory = defaultPowerupInventory();
    createPowerups(level);
    S.camera.mode = `follow`;
    S.camera.angle = level.cameraAngle;
    S.camera.freeAngle = level.cameraAngle;
    S.camera.pitch = .62;
    S.camera.dragging = false;
    S.camera.dragStart = null;
    if (S.renderer?.domElement) S.renderer.domElement.style.cursor = `crosshair`;
    resetBall(false);
    notify();
    return true;
  };

  const resetBall = (keepOutOfBounds = false) => {
    const level = S.level || LEVELS[S.pendingLevel] || LEVELS.forest;
    const spawnSurface = surfaceAt(level.spawn.x, level.spawn.z);
    const spawn = { x: level.spawn.x, y: S.ball.radius + groundHeightAt(level.spawn.x, level.spawn.z), z: level.spawn.z };
    S.ball.position = copy(spawn);
    S.ball.velocity = { x: 0, y: 0, z: 0 };
    S.ball.speed = 0;
    S.ball.moving = false;
    S.ball.sleeping = true;
    S.ball.airborne = false;
    S.ball.inHole = false;
    S.holeCaptureTime = 0;
    if (!keepOutOfBounds) S.ball.outOfBounds = false;
    S.ball.currentSurface = spawnSurface.type;
    S.ball.friction = spawnSurface.friction;
    S.ball.lastCollision = null;
    S.ball.lastImpactAt = 0;
    S.ball.lowSpeedTime = 0;
    S.ball.lastSafePosition = copy(spawn);
    S.shot.dragging = false;
    S.shot.canShoot = true;
    S.shot.startScreen = null;
    S.shot.currentScreen = null;
    S.shot.direction = { x: 1, y: 0, z: 0 };
    S.shot.power = 0;
    S.powerups.lastTriggeredId = null;
    S.fastHoleHintUntil = 0;
    if (S.ballMesh) S.ballMesh.position.set(spawn.x, spawn.y, spawn.z);
    notify();
  };

  const recoverBall = () => {
    if (!S.level || S.screen !== `playing`) return false;
    const spawn = {
      x: finite(S.level.spawn.x, -9),
      y: S.ball.radius + groundHeightAt(finite(S.level.spawn.x, -9), finite(S.level.spawn.z, 0)),
      z: finite(S.level.spawn.z, 0)
    };
    S.ball.position = copy(spawn);
    S.ball.velocity = { x: 0, y: 0, z: 0 };
    S.ball.speed = 0;
    S.ball.moving = false;
    S.ball.sleeping = true;
    S.ball.airborne = false;
    S.ball.inHole = false;
    S.ball.outOfBounds = false;
    S.ball.currentSurface = surfaceAt(spawn.x, spawn.z).type;
    S.ball.friction = surfaceAt(spawn.x, spawn.z).friction;
    S.ball.lastCollision = `manual-reset-to-spawn`;
    S.ball.lastImpactAt = 0;
    S.ball.lowSpeedTime = 0;
    S.ball.lastSafePosition = copy(spawn);
    S.holeCaptureTime = 0;
    S.fastHoleHintUntil = 0;
    S.shot.dragging = false;
    S.shot.canShoot = true;
    S.shot.startScreen = null;
    S.shot.currentScreen = null;
    S.shot.direction = { x: 1, y: 0, z: 0 };
    S.shot.power = 0;
    S.powerups.placingType = null;
    S.powerups.placementScreen = null;
    S.powerups.placementStart = null;
    S.powerups.placementAnchor = null;
    S.powerups.placementDirection = null;
    S.powerups.activeEffect = null;
    S.accumulator = 0;
    S.lastFrame = performance.now();
    if (S.ballMesh) {
      S.ballMesh.position.set(spawn.x, spawn.y, spawn.z);
      S.ballMesh.rotation.set(0, 0, 0);
    }
    setSkillFeedback(`placed`, `已回到本洞初始位置，可以继续击球`, spawn);
    setToast(`球位已重置 · 可重新击球`);
    notify();
    return true;
  };

  const startLevel = (theme, preserveTournament = false) => {
    const level = LEVELS[theme] || LEVELS.forest;
    if (!preserveTournament) {
      S.totalStrokes = 0;
      S.totalScore = 0;
      S.tournamentScores = {};
      S.tournamentPoints = {};
    }
    S.mode = S.multiplayer.enabled ? `local_multiplayer` : `single`;
    if (S.multiplayer.enabled) {
      S.multiplayer.status = `playing`;
      S.multiplayer.winnerId = null;
            S.multiplayer.tiedPlayerIds = [];
      S.multiplayer.players.forEach(player => { player.finished = false; player.holeStrokes = 0; });
    }
    S.level = level;
    S.screen = `playing`;
    S.holeComplete = false;
    S.strokes = 0;
    S.lastCompletedStrokes = 0;
    S.currentScore = 0;
    S.shot.strokeCount = 0;
    S.startedAt = performance.now();
    S.elapsed = 0;
    buildCourse(level.id);
    if (S.multiplayer.enabled) {
      const freshPowerups = capturePowerupState();
      S.multiplayer.players.forEach(player => { player.powerupState = copy(freshPowerups); });
    }
    setToast(`${level.name} · PAR ${level.par}`, 1400);
    notify();
  };

  const relativeScore = (strokes, par) => {
    const delta = strokes - par;
    if (delta === 0) return `E`;
    return delta > 0 ? `+${delta}` : `${delta}`;
  };
  const performanceScore = (strokes, par, elapsedSeconds = S.elapsed) => {
    const safeStrokes = Math.max(1, Math.floor(finite(strokes, 1)));
    const safePar = Math.max(1, Math.floor(finite(par, 4)));
    const strokePenalty = (safeStrokes - 1) * 1600;
    const timePenalty = Math.min(900, Math.max(0, Math.floor(finite(elapsedSeconds) * 4)));
    const parBonus = Math.max(0, safePar - safeStrokes) * 180;
    return Math.max(100, 12000 - strokePenalty - timePenalty + parBonus);
  };
  const scoreName = (strokes, par) => {
    const delta = strokes - par;
    if (strokes === 1) return `ACE`;
    if (delta <= -3) return `ALBATROSS`;
    if (delta === -2) return `EAGLE`;
    if (delta === -1) return `BIRDIE`;
    if (delta === 0) return `PAR`;
    if (delta === 1) return `BOGEY`;
    return `KEEP SWINGING`;
  };

  const leaderboardKey = `parall-leaderboard-v4`;
  const emptyLeaderboard = () => ({
    version: 4,
    levelBest: { forest: [], desert: [], snow: [] },
    overall: []
  });
  // Always keep an in-memory mirror. file:// pages and privacy-restricted
  // browsers may reject localStorage; the current session must still show
  // the score that was just completed instead of falling back to an empty table.
  let leaderboardMemory = emptyLeaderboard();
  let leaderboardMemoryReady = false;
  const validStrokes = value => Number.isFinite(value) && value >= 1;
  const normalizeLevelRows = rows => (Array.isArray(rows) ? rows : [])
    .filter(row => row && validStrokes(row.strokes))
    .map(row => ({
      playerId: String(row.playerId || (row.player === `本地球手` ? `local-player` : `remote-player`)),
      playerName: String(row.playerName || row.player || `球手`),
      strokes: Math.floor(row.strokes),
      rank: 0,
      par: Number.isFinite(row.par) ? row.par : 0,
      relativeToPar: Number.isFinite(row.relativeToPar) ? row.relativeToPar : Math.floor(row.strokes) - (Number.isFinite(row.par) ? row.par : 0),
      achievedAt: Number.isFinite(row.achievedAt) ? row.achievedAt : 0
    }))
    .sort((a, b) => a.strokes - b.strokes || a.achievedAt - b.achievedAt || a.playerId.localeCompare(b.playerId))
    .map((row, index) => ({ ...row, rank: index + 1 }));
  const normalizeOverallRows = rows => (Array.isArray(rows) ? rows : [])
    .filter(row => row && validStrokes(row.totalStrokes) && row.levelStrokes && [`forest`, `desert`, `snow`].every(id => validStrokes(row.levelStrokes[id])))
    .map(row => ({
      playerId: String(row.playerId || (row.player === `本地球手` ? `local-player` : `remote-player`)),
      playerName: String(row.playerName || row.player || `球手`),
      levelStrokes: {
        forest: Math.floor(row.levelStrokes.forest),
        desert: Math.floor(row.levelStrokes.desert),
        snow: Math.floor(row.levelStrokes.snow)
      },
      totalStrokes: Math.floor(row.totalStrokes),
      rank: 0,
      achievedAt: Number.isFinite(row.achievedAt) ? row.achievedAt : 0
    }))
    .sort((a, b) => a.totalStrokes - b.totalStrokes || a.achievedAt - b.achievedAt || a.playerId.localeCompare(b.playerId))
    .map((row, index) => ({ ...row, rank: index + 1 }));
  const loadLeaderboard = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(leaderboardKey) || `null`);
      if (parsed && typeof parsed === `object`) {
        const data = emptyLeaderboard();
        for (const id of [`forest`, `desert`, `snow`]) data.levelBest[id] = normalizeLevelRows(parsed.levelBest?.[id]);
        data.overall = normalizeOverallRows(parsed.overall);
        leaderboardMemory = copy(data);
        leaderboardMemoryReady = true;
        return data;
      }
    } catch {}
    if (!leaderboardMemoryReady) {
      leaderboardMemory = emptyLeaderboard();
      leaderboardMemoryReady = true;
    }
    return copy(leaderboardMemory);
  };
  const persistLeaderboard = data => {
    const normalized = emptyLeaderboard();
    for (const id of [`forest`, `desert`, `snow`]) normalized.levelBest[id] = normalizeLevelRows(data.levelBest?.[id]);
    normalized.overall = normalizeOverallRows(data.overall);
    leaderboardMemory = copy(normalized);
    leaderboardMemoryReady = true;
    try { localStorage.setItem(leaderboardKey, JSON.stringify(normalized)); return true; } catch { return false; }
  };
  const saveLevelScore = (completed = null) => {
    const levelId = completed?.levelId || S.level?.id;
    const strokes = completed?.strokes ?? S.strokes;
    const par = completed?.par ?? S.level?.par;
    if (![`forest`, `desert`, `snow`].includes(levelId) || !validStrokes(strokes) || !Number.isFinite(par)) return false;
    const data = loadLeaderboard();
    const playerId = completed?.playerId || (S.multiplayer.enabled ? (S.multiplayer.currentPlayerId || `local-match-player`) : `local-player`);
    const playerName = completed?.playerName || (S.multiplayer.enabled ? (localPlayerById(S.multiplayer.currentPlayerId)?.name || `本地对战球手`) : `本地球手`);
    const row = {
      playerId,
      playerName,
      strokes: Math.floor(strokes),
      rank: 0,
      par: Math.floor(par),
      relativeToPar: Math.floor(strokes) - Math.floor(par),
      achievedAt: Date.now()
    };
    const rows = normalizeLevelRows(data.levelBest[levelId]);
    const previous = rows.find(item => item.playerId === playerId);
    const kept = rows.filter(item => item.playerId !== playerId);
    if (!previous || row.strokes < previous.strokes) kept.push(row);
    else kept.push(previous);
    data.levelBest[levelId] = normalizeLevelRows(kept).slice(0, 8);

    // 单关最佳齐全后，直接从持久化最佳成绩派生全关总榜。这样无论玩家
    // 通过巡回赛流程还是逐关挑战，排行榜都反映同一组真实最佳杆数。
    const ids = [`forest`, `desert`, `snow`];
    const personalBest = Object.fromEntries(ids.map(id => {
      const bestRow = normalizeLevelRows(data.levelBest[id]).find(item => item.playerId === playerId);
      return [id, bestRow?.strokes];
    }));
    if (ids.every(id => validStrokes(personalBest[id]))) {
      const levelStrokes = Object.fromEntries(ids.map(id => [id, Math.floor(personalBest[id])]));
      const totalStrokes = ids.reduce((sum, id) => sum + levelStrokes[id], 0);
      const overallRow = { playerId, playerName, totalStrokes, levelStrokes, rank: 0, achievedAt: Date.now() };
      const overallRows = normalizeOverallRows(data.overall);
      const previousOverall = overallRows.find(item => item.playerId === playerId);
      const keptOverall = overallRows.filter(item => item.playerId !== playerId);
      if (!previousOverall || overallRow.totalStrokes < previousOverall.totalStrokes) keptOverall.push(overallRow);
      else keptOverall.push(previousOverall);
      data.overall = normalizeOverallRows(keptOverall).slice(0, 8);
    }
    return persistLeaderboard(data);
  };
  const saveOverall = () => {
    const ids = [`forest`, `desert`, `snow`];
    if (!ids.every(id => validStrokes(S.tournamentScores[id]))) return false;
    const data = loadLeaderboard();
    const playerId = S.multiplayer.enabled ? (S.multiplayer.currentPlayerId || `local-match-player`) : `local-player`;
    const playerName = S.multiplayer.enabled ? (localPlayerById(S.multiplayer.currentPlayerId)?.name || `本地对战球手`) : `本地球手`;
    const levelStrokes = Object.fromEntries(ids.map(id => [id, Math.floor(S.tournamentScores[id])]));
    const totalStrokes = ids.reduce((sum, id) => sum + levelStrokes[id], 0);
    const row = { playerId, playerName, totalStrokes, levelStrokes, rank: 0, achievedAt: Date.now() };
    const rows = normalizeOverallRows(data.overall);
    const previous = rows.find(item => item.playerId === playerId);
    const kept = rows.filter(item => item.playerId !== playerId);
    if (!previous || row.totalStrokes < previous.totalStrokes) kept.push(row);
    else kept.push(previous);
    data.overall = normalizeOverallRows(kept).slice(0, 8);
    return persistLeaderboard(data);
  };
  const leaderboardState = () => {
    const data = loadLeaderboard();
    let persisted = false;
    try {
      const probe = `${leaderboardKey}-probe`;
      localStorage.setItem(probe, `1`);
      persisted = localStorage.getItem(probe) === `1`;
      localStorage.removeItem(probe);
    } catch {}
    return { ...copy(data), persisted };
  };

  const localPlayerById = id => S.multiplayer.players.find(player => player.id === id) || null;
  const saveCurrentLocalPlayer = () => {
    if (!S.multiplayer.enabled) return null;
    const player = localPlayerById(S.multiplayer.currentPlayerId);
    if (!player) return null;
    player.holeStrokes = Math.max(0, Math.floor(finite(S.strokes)));
    player.ballPosition = copy(S.ball.position);
    player.ballVelocity = copy(S.ball.velocity);
    player.powerupState = capturePowerupState();
    return player;
  };
  const loadLocalPlayer = player => {
    if (!player || !S.level) return false;
    restorePowerupState(player.powerupState);
    const spawn = player.ballPosition || S.level.spawn;
    S.strokes = Math.max(0, Math.floor(finite(player.holeStrokes)));
    S.shot.strokeCount = S.strokes;
    S.ball.position = copy(spawn);
    S.ball.velocity = copy(player.ballVelocity || { x: 0, y: 0, z: 0 });
    S.ball.speed = Math.hypot(S.ball.velocity.x, S.ball.velocity.z);
    S.ball.moving = S.ball.speed > S.physics.stopSpeed || Math.abs(S.ball.velocity.y) > .01;
    S.ball.sleeping = !S.ball.moving;
    S.ball.airborne = Math.abs(S.ball.velocity.y) > .01;
    S.ball.inHole = false;
    S.ball.outOfBounds = false;
    S.ball.lastSafePosition = copy(spawn);
    S.shot.canShoot = !S.ball.moving;
    if (S.ballMesh) S.ballMesh.position.set(S.ball.position.x, S.ball.position.y, S.ball.position.z);
    updateCamera();
    return true;
  };
  const startLocalMatch = rawCount => {
    const count = clamp(Math.floor(finite(rawCount, 2)), 2, 4);
    const spawn = copy(LEVELS.forest.spawn);
    Object.assign(S.multiplayer, {
      enabled: true, mode: `local`, status: `playing`, playerCount: count,
      currentPlayerId: `local-player-1`, turnIndex: 0, round: 1, revision: 1,
      winnerId: null, tiedPlayerIds: [],
      players: Array.from({ length: count }, (_, index) => ({
        id: `local-player-${index + 1}`, name: `玩家 ${index + 1}`,
        holeStrokes: 0, strokes: 0, totalStrokes: 0, finished: false,
        ballPosition: copy(spawn), ballVelocity: { x: 0, y: 0, z: 0 }, powerupState: null
      }))
    });
    S.mode = `local_multiplayer`;
    startLevel(`forest`, false);
    const levelSpawn = copy(S.level.spawn);
    S.multiplayer.players.forEach(player => { player.ballPosition = copy(levelSpawn); player.ballVelocity = { x: 0, y: 0, z: 0 }; });
    S.multiplayer.status = `playing`;
    S.multiplayer.currentPlayerId = S.multiplayer.players[0].id;
    loadLocalPlayer(S.multiplayer.players[0]);
    setToast(`${count} 人本地对战 · 玩家 1 开球`);
    notify();
    return true;
  };
  const exitLocalMatch = () => {
    Object.assign(S.multiplayer, {
      enabled: false, mode: `local`, status: `setup`, playerCount: 0,
      currentPlayerId: null, turnIndex: 0, round: 1, revision: 0,
      players: [], winnerId: null, tiedPlayerIds: []
    });
    S.mode = `single`;
    setScreen(`menu`);
    return true;
  };
  const selectLocalPlayer = id => {
    if (!S.multiplayer.enabled) return false;
    const player = localPlayerById(id);
    if (!player || player.finished) return false;
    saveCurrentLocalPlayer();
    S.multiplayer.currentPlayerId = player.id;
    S.multiplayer.revision += 1;
    loadLocalPlayer(player);
    notify();
    return true;
  };

  const placementPointFromScreen = (clientX, clientY) => {
    const canvas = S.renderer?.domElement;
    if (!canvas || !S.camera3d) return null;
    const rect = canvas.getBoundingClientRect();
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return null;
    const point = new U(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1, .35);
    point.unproject(S.camera3d);
    const direction = point.sub(S.camera3d.position).normalize();
    if (!Number.isFinite(direction.y) || Math.abs(direction.y) < .0001) return null;
    const distance = (.08 - S.camera3d.position.y) / direction.y;
    if (!Number.isFinite(distance) || distance <= 0) return null;
    return {
      x: S.camera3d.position.x + direction.x * distance,
      y: groundHeightAt(S.camera3d.position.x + direction.x * distance, S.camera3d.position.z + direction.z * distance) + .08,
      z: S.camera3d.position.z + direction.z * distance
    };
  };

  const validatePlacement = (type, point) => {
    if (!point || !Number.isFinite(point.x) || !Number.isFinite(point.z)) return `无法识别放置位置`;
    if (point.x < -10.2 || point.x > 10.2 || point.z < -6.2 || point.z > 6.2) return `道具必须放在球场边界内`;
    if (Math.hypot(point.x - S.ball.position.x, point.z - S.ball.position.z) < 1.15) return `请离高尔夫球远一点放置`;
    if (Math.hypot(point.x - S.level.hole.x, point.z - S.level.hole.z) < 1.45) return `不能堵住球洞`;
    if (Math.hypot(point.x - S.level.spawn.x, point.z - S.level.spawn.z) < 1.15) return `不能覆盖开球点`;
    const obstacleHit = activeObstacles().some(obstacle => Math.hypot(point.x - obstacle.x, point.z - obstacle.z) < obstacle.radius + 1.05);
    if (obstacleHit) return `此处靠障碍物太近`;
    const powerupHit = S.powerups.items.some(item => item.active && !item.collected && Math.hypot(point.x - item.position.x, point.z - item.position.z) < (type === `speed_boost` ? 2.0 : 1.35));
    if (powerupHit) return `此处已有其他道具`;
    return ``;
  };

  const defaultPowerupDirection = point => {
    const x = S.level.hole.x - point.x;
    const z = S.level.hole.z - point.z;
    const length = Math.hypot(x, z) || 1;
    return { x: x / length, z: z / length };
  };

  const findAutoPlacement = type => {
    const towardHole = defaultPowerupDirection(S.ball.position);
    const preferred = Math.hypot(S.shot.direction.x, S.shot.direction.z) > .5 ? S.shot.direction : towardHole;
    const right = { x: -preferred.z, z: preferred.x };
    const distances = [2.7, 3.7, 1.8, 4.7];
    const offsets = [0, 1.45, -1.45, 2.7, -2.7];
    for (const distance of distances) {
      for (const offset of offsets) {
        const point = {
          x: clamp(S.ball.position.x + preferred.x * distance + right.x * offset, -10.1, 10.1),
          y: .08,
          z: clamp(S.ball.position.z + preferred.z * distance + right.z * offset, -6.1, 6.1)
        };
        if (!validatePlacement(type, point)) return point;
      }
    }
    return null;
  };

  const placePowerup = (type, point, requestedDirection = null) => {
    if (S.screen !== `playing` || !S.level) return false;
    if (S.ball.moving) {
      setToast(`请等球停稳后再放置道具`);
      return false;
    }
    const inventory = inventoryItem(type);
    if (!inventory || inventory.count <= 0) {
      setToast(`该道具已用完`);
      return false;
    }
    const target = point || findAutoPlacement(type);
    const error = validatePlacement(type, target);
    if (error) {
      setToast(error);
      return false;
    }
    const item = {
      id: `placed-${type}-${Date.now().toString(36)}-${Math.floor(Math.random() * 999)}`,
      type, position: { x: target.x, y: .08, z: target.z }, active: true, collected: false,
      direction: normalizeDirection(requestedDirection || defaultPowerupDirection(target)), placed: true, singleUse: true
    };
    S.powerups.items.push(item);
    S.powerups.lastPlacedId = item.id;
    S.powerups.selectedPlacedId = item.id;
    inventory.count -= 1;
    createPowerupVisual(item, S.level);
    S.powerups.activeEffect = null;
    setSkillFeedback(`placed`, type === `speed_boost` ? `加速带已放置 · 可在技能面板调整方向` : `反弹垫已放置 · 可在技能面板调整方向`, item.position);
    notify();
    return true;
  };

  const useHoleInOne = () => {
    const inventory = inventoryItem(`hole_in_one`);
    if (!inventory || inventory.count <= 0) {
      setToast(`先拾取发光的一杆入洞道具球`);
      return false;
    }
    if (S.powerups.armedType === `hole_in_one`) {
      S.powerups.armedType = null;
      if (S.powerups.activeEffect === `hole_in_one`) S.powerups.activeEffect = null;
      setSkillFeedback(`placed`, `一杆入洞已取消 · 下一杆恢复手动瞄准`, S.ball.position);
      notify();
      return true;
    }
    S.powerups.armedType = `hole_in_one`;
    S.powerups.activeEffect = `hole_in_one`;
    setSkillFeedback(`hole_in_one`, `一杆入洞已启用 · 再次点击可取消`, S.ball.position);
    notify();
    return true;
  };

  const beginPowerupPlacement = (event, type) => {
    if (S.screen !== `playing`) return;
    event.preventDefault();
    event.stopPropagation();
    if (S.ball.moving) {
      setToast(`请等球停稳后再放置道具`);
      return;
    }
    if ((inventoryItem(type)?.count || 0) <= 0) {
      setToast(`该道具已用完`);
      return;
    }
    S.powerups.placingType = type;
    S.powerups.placementStart = { x: event.clientX, y: event.clientY };
    S.powerups.placementScreen = { x: event.clientX, y: event.clientY };
    S.powerups.placementAnchor = null;
    S.powerups.placementDirection = null;
    notify();
  };

  const updatePowerupPlacement = event => {
    if (!S.powerups.placingType) return false;
    const previous = S.powerups.placementScreen;
    S.powerups.placementScreen = { x: event.clientX, y: event.clientY };
    const world = placementPointFromScreen(event.clientX, event.clientY);
    if (world) {
      if (!S.powerups.placementAnchor) S.powerups.placementAnchor = world;
      const anchor = S.powerups.placementAnchor;
      const dx = world.x - anchor.x;
      const dz = world.z - anchor.z;
      if (Math.hypot(dx, dz) > .45) S.powerups.placementDirection = normalizeDirection({ x: dx, z: dz });
    }
    if (!previous || Math.hypot(previous.x - event.clientX, previous.y - event.clientY) > 2) notify();
    return true;
  };

  const endPowerupPlacement = event => {
    const type = S.powerups.placingType;
    if (!type) return false;
    const start = S.powerups.placementStart;
    const moved = start ? Math.hypot(event.clientX - start.x, event.clientY - start.y) > 8 : false;
    const point = moved ? placementPointFromScreen(event.clientX, event.clientY) : null;
    S.powerups.placingType = null;
    S.powerups.placementScreen = null;
    S.powerups.placementStart = null;
    const direction = S.powerups.placementDirection;
    S.powerups.placementAnchor = null;
    S.powerups.placementDirection = null;
    placePowerup(type, point || findAutoPlacement(type), direction);
    notify();
    return true;
  };

  const updateLocalPlayer = () => {
    if (!S.multiplayer.enabled) return;
    const player = saveCurrentLocalPlayer();
    if (!player) return;
    player.strokes = player.holeStrokes;
    player.finished = !!player.finished;
  };

  const advanceTurn = () => {
    const multi = S.multiplayer;
    if (!multi.enabled || multi.players.length < 2 || multi.status !== `playing`) return false;
    saveCurrentLocalPlayer();
    const currentIndex = Math.max(0, multi.players.findIndex(player => player.id === multi.currentPlayerId));
    let next = null;
    for (let offset = 1; offset <= multi.players.length; offset += 1) {
      const candidate = multi.players[(currentIndex + offset) % multi.players.length];
      if (!candidate.finished) { next = candidate; break; }
    }
    if (!next) return false;
    multi.turnIndex += 1;
    if (multi.turnIndex % multi.players.length === 0) multi.round += 1;
    multi.currentPlayerId = next.id;
    multi.revision += 1;
    loadLocalPlayer(next);
    setToast(`${next.name} 的回合`);
    notify();
    return true;
  };

  const triggerPowerups = () => {
    const ball = S.ball;
    for (const item of S.powerups.items) {
      if (!item.active || item.collected) continue;
      const dx = ball.position.x - item.position.x;
      const dz = ball.position.z - item.position.z;
      const distance = Math.hypot(dx, dz);
      const triggerRadius = item.type === `speed_boost` ? 1.35 : item.type === `hole_in_one` ? 1.18 : .92;
      if (distance > triggerRadius || S.powerups.lastTriggeredId === item.id) continue;
      S.powerups.lastTriggeredId = item.id;
      S.powerups.activeEffect = item.type;
      if (item.type === `bounce_pad`) {
        const direction = normalizeDirection(item.direction || { x: 1, z: 0 });
        const incomingSpeed = Math.max(4.2, Math.hypot(ball.velocity.x, ball.velocity.z) * 1.14);
        ball.velocity.x = direction.x * incomingSpeed;
        ball.velocity.z = direction.z * incomingSpeed;
        ball.lastCollision = item.id;
        setSkillFeedback(`bounce_pad`, `反弹垫触发 · 线路已改变`, item.position);
      } else if (item.type === `speed_boost`) {
        const direction = item.direction || { x: 1, z: 0 };
        const length = Math.hypot(direction.x, direction.z) || 1;
        ball.velocity.x += direction.x / length * 3.8;
        ball.velocity.z += direction.z / length * 3.8;
        const speed = Math.hypot(ball.velocity.x, ball.velocity.z);
        if (speed > S.physics.maxBallSpeed) {
          ball.velocity.x *= S.physics.maxBallSpeed / speed;
          ball.velocity.z *= S.physics.maxBallSpeed / speed;
        }
        // Speed boost is an effect, not a terrain surface. Keep the public
        // currentSurface contract within grass/sand/ice.
        ball.lastCollision = item.id;
        setSkillFeedback(`speed_boost`, `加速带触发 · 速度提升`, item.position);
      } else if (item.type === `hole_in_one`) {
        item.collected = true;
        item.active = false;
        inventoryItem(`hole_in_one`).count += 1;
        ball.lastCollision = `powerup:${item.id}`;
        S.powerups.armedType = null;
        if (S.powerups.activeEffect === `hole_in_one`) S.powerups.activeEffect = null;
        removePowerupVisual(item);
        setSkillFeedback(`hole_in_one`, `道具球已拾取 · 点击星标启用`, item.position);
        notify();
      }
      if (item.placed && item.singleUse && item.type !== `hole_in_one` && item.type !== `speed_boost` && item.type !== `bounce_pad`) {
        item.collected = true;
        item.active = false;
        removePowerupVisual(item);
        if (S.powerups.selectedPlacedId === item.id) S.powerups.selectedPlacedId = null;
      }
      break;
    }
    const last = S.powerups.items.find(item => item.id === S.powerups.lastTriggeredId);
    if (!last || !last.active || Math.hypot(ball.position.x - last.position.x, ball.position.z - last.position.z) > 1.55) {
      S.powerups.lastTriggeredId = null;
      if (S.powerups.activeEffect !== `hole_in_one`) S.powerups.activeEffect = null;
    }
  };

  const collideObstacle = (obstacle, previous) => {
    const ball = S.ball;
    const colliderRadius = finite(obstacle.collider?.radius, obstacle.radius);
    const minDistance = colliderRadius + ball.radius;
    const startX = finite(previous?.x, ball.position.x);
    const startZ = finite(previous?.z, ball.position.z);
    const endX = ball.position.x;
    const endZ = ball.position.z;
    const moveX = endX - startX;
    const moveZ = endZ - startZ;
    const moveLengthSq = moveX * moveX + moveZ * moveZ;
    const relX = startX - obstacle.x;
    const relZ = startZ - obstacle.z;
    const c = relX * relX + relZ * relZ - minDistance * minDistance;
    let hitT = null;
    if (c <= 0) hitT = 0;
    else if (moveLengthSq > 1e-10) {
      const b = 2 * (relX * moveX + relZ * moveZ);
      const discriminant = b * b - 4 * moveLengthSq * c;
      if (discriminant >= 0) {
        const root = Math.sqrt(discriminant);
        const t0 = (-b - root) / (2 * moveLengthSq);
        const t1 = (-b + root) / (2 * moveLengthSq);
        if (t0 >= 0 && t0 <= 1) hitT = t0;
        else if (t1 >= 0 && t1 <= 1) hitT = t1;
      }
    }
    const endDx = endX - obstacle.x;
    const endDz = endZ - obstacle.z;
    if (hitT === null && endDx * endDx + endDz * endDz >= minDistance * minDistance) return false;
    const contactX = hitT === null ? endX : startX + moveX * hitT;
    const contactZ = hitT === null ? endZ : startZ + moveZ * hitT;
    let nx = contactX - obstacle.x;
    let nz = contactZ - obstacle.z;
    let normalLength = Math.hypot(nx, nz);
    if (normalLength < 1e-6) {
      const velocityLength = Math.hypot(ball.velocity.x, ball.velocity.z) || 1;
      nx = -ball.velocity.x / velocityLength;
      nz = -ball.velocity.z / velocityLength;
      normalLength = 1;
    }
    nx /= normalLength;
    nz /= normalLength;
    ball.position.x = obstacle.x + nx * (minDistance + .016);
    ball.position.z = obstacle.z + nz * (minDistance + .016);
    const dot = ball.velocity.x * nx + ball.velocity.z * nz;
    const impactSpeed = Math.hypot(ball.velocity.x, ball.velocity.z);
    if (dot < 0) {
      const restitution = .72;
      ball.velocity.x -= (1 + restitution) * dot * nx;
      ball.velocity.z -= (1 + restitution) * dot * nz;
      const tangentX = -nz;
      const tangentZ = nx;
      const tangentSpeed = ball.velocity.x * tangentX + ball.velocity.z * tangentZ;
      ball.velocity.x -= tangentX * tangentSpeed * .035;
      ball.velocity.z -= tangentZ * tangentSpeed * .035;
    }
    if (impactSpeed > 1.15) {
      ball.velocity.y = Math.max(ball.velocity.y, Math.min(3.1, .7 + impactSpeed * .14));
      ball.airborne = true;
      ball.sleeping = false;
      spawnImpactEffect({ x: ball.position.x, y: ball.position.y, z: ball.position.z });
    }
    ball.lastCollision = `obstacle:${obstacle.id}`;
    return true;
  };

  const finishHole = () => {
    if (S.holeComplete || !S.level) return false;
    S.ball.inHole = true;
    S.ball.moving = false;
    S.ball.sleeping = true;
    S.ball.speed = 0;
    S.ball.velocity = { x: 0, y: 0, z: 0 };
    S.shot.canShoot = false;
    S.holeComplete = true;
    S.currentScore = performanceScore(S.strokes, S.level.par, S.elapsed);

    if (S.multiplayer.enabled) {
      const player = localPlayerById(S.multiplayer.currentPlayerId);
      if (!player) return false;
      player.holeStrokes = Math.max(1, Math.floor(finite(S.strokes, 1)));
      player.strokes = player.holeStrokes;
      player.totalStrokes = Math.max(0, Math.floor(finite(player.totalStrokes))) + player.holeStrokes;
      player.ballPosition = copy(S.ball.position);
      player.ballVelocity = { x: 0, y: 0, z: 0 };
      player.powerupState = capturePowerupState();
      player.finished = true;
      S.multiplayer.revision += 1;
      const unfinished = S.multiplayer.players.filter(item => !item.finished);
      if (unfinished.length) {
        S.holeComplete = false;
        S.ball.inHole = false;
        S.shot.canShoot = true;
        advanceTurn();
        S.screen = `playing`;
        notify();
        return true;
      }
      const best = Math.min(...S.multiplayer.players.map(item => item.totalStrokes));
      const tied = S.multiplayer.players.filter(item => item.totalStrokes === best).map(item => item.id);
      S.multiplayer.tiedPlayerIds = tied.length > 1 ? tied : [];
      S.multiplayer.winnerId = tied.length === 1 ? tied[0] : null;
      S.multiplayer.currentPlayerId = null;
      S.totalStrokes = S.multiplayer.players.reduce((sum, item) => sum + item.totalStrokes, 0);
      S.totalScore = S.multiplayer.players.reduce((sum, item) => sum + performanceScore(item.totalStrokes, S.level.par, S.elapsed), 0);
      // Multiplayer completion has its own scoreboard surface. Keeping it
      // separate from the single-hole/tournament panel removes conditional UI
      // reuse and guarantees that every player's final total is always present.
      S.screen = `local_leaderboard`;

      S.multiplayer.status = `complete`;
      S.toast = tied.length === 1 ? `${S.multiplayer.players.find(item => item.id === tied[0])?.name} 获胜` : `本地对战平局 · 已展示排行榜`;
      S.toastUntil = performance.now() + 1800;
      notifyAndCommit();
      return true;
    }

    const completedLevel = { levelId: S.level.id, par: S.level.par, strokes: Math.max(1, Math.floor(S.strokes)) };
    S.lastCompletedStrokes = completedLevel.strokes;
    S.totalScore += S.currentScore;
    S.totalStrokes += completedLevel.strokes;
    S.tournamentScores[completedLevel.levelId] = completedLevel.strokes;
    S.tournamentPoints[completedLevel.levelId] = S.currentScore;
    // Keep the completed-hole stroke count visible throughout the result state.
    // startLevel()/replayCurrentLevel() reset the active-hole counters when the
    // player actually enters a new attempt, which avoids an observable 1 -> 0
    // race in the same physics tick that completes the hole.
    saveLevelScore({ ...completedLevel, playerId: `local-player`, playerName: `本地球手` });
    S.screen = `hole_complete`;
    setToast(`${scoreName(completedLevel.strokes, S.level.par)} · ${S.currentScore} 分`);
    notify();
    return true;
  };

  const segmentDistance = (ax, az, bx, bz, px, pz) => {
    const abx = bx - ax;
    const abz = bz - az;
    const lengthSq = abx * abx + abz * abz;
    if (!lengthSq) return Math.hypot(px - ax, pz - az);
    const t = clamp(((px - ax) * abx + (pz - az) * abz) / lengthSq, 0, 1);
    return Math.hypot(px - (ax + abx * t), pz - (az + abz * t));
  };

  const physicsStep = dt => {
    if (S.screen !== `playing` || !S.level || S.ball.inHole) return;
    S.runtime.simulationTick += 1;
    const ball = S.ball;
    ball.velocity.x = finite(ball.velocity.x);
    ball.velocity.y = finite(ball.velocity.y);
    ball.velocity.z = finite(ball.velocity.z);
    const previous = { x: ball.position.x, y: ball.position.y, z: ball.position.z };

    const previousSurfaceType = ball.currentSurface;
    const surface = surfaceAt(ball.position.x, ball.position.z);
    ball.currentSurface = surface.type;
    ball.friction = surface.friction;
    if (surface.type !== previousSurfaceType && ball.moving) {
      if (surface.type === `sand`) setToast(`进入沙坑 · 高摩擦 μ ${surface.friction.toFixed(3)} · 球速快速衰减`);
      else if (surface.type === `ice`) setToast(`进入冰面 · 低摩擦 μ ${surface.friction.toFixed(3)} · 球持续滑行`);
      else if (previousSurfaceType === `sand` || previousSurfaceType === `ice`) setToast(`回到草地 · 恢复标准滚速`);
      notify();
    }

    const terrainBeforeMove = terrainInfoAt(ball.position.x, ball.position.z);
    if (terrainBeforeMove.active && !ball.airborne) {
      const slopeMagnitude = Math.hypot(terrainBeforeMove.slopeX, terrainBeforeMove.slopeZ);
      const slopeAcceleration = 9.81 * slopeMagnitude / (1 + slopeMagnitude * slopeMagnitude);
      const currentHorizontalSpeed = Math.hypot(ball.velocity.x, ball.velocity.z);
      const heldByStaticFriction = currentHorizontalSpeed <= .09 && slopeAcceleration <= surface.friction * 1.08;
      if (!heldByStaticFriction) {
        const slopeFactor = 9.81 / (1 + terrainBeforeMove.slopeX * terrainBeforeMove.slopeX + terrainBeforeMove.slopeZ * terrainBeforeMove.slopeZ);
        ball.velocity.x += -terrainBeforeMove.slopeX * slopeFactor * dt;
        ball.velocity.z += -terrainBeforeMove.slopeZ * slopeFactor * dt;
        ball.moving = true;
        ball.sleeping = false;
      }
    }

    let speed = Math.hypot(ball.velocity.x, ball.velocity.z);
    if (speed > S.physics.maxBallSpeed) {
      const scale = S.physics.maxBallSpeed / speed;
      ball.velocity.x *= scale;
      ball.velocity.z *= scale;
      speed = S.physics.maxBallSpeed;
    }
    if (speed > 0 && !ball.airborne) {
      const nextSpeed = Math.max(0, speed - surface.friction * dt);
      const ratio = speed ? nextSpeed / speed : 0;
      ball.velocity.x *= ratio;
      ball.velocity.z *= ratio;
    }

    ball.position.x += ball.velocity.x * dt;
    ball.position.z += ball.velocity.z * dt;
    resolveRampBackCollision(previous);
    const terrainAfterMove = terrainInfoAt(ball.position.x, ball.position.z);
    const groundY = ball.radius + terrainAfterMove.height;
    const horizontalSpeed = Math.hypot(ball.velocity.x, ball.velocity.z);
    const velocityLength = horizontalSpeed || 1;
    const directionX = ball.velocity.x / velocityLength;
    const directionZ = ball.velocity.z / velocityLength;
    const slopeAlongBefore = terrainBeforeMove.slopeX * directionX + terrainBeforeMove.slopeZ * directionZ;
    const slopeAlongAfter = terrainAfterMove.slopeX * directionX + terrainAfterMove.slopeZ * directionZ;
    const crestLaunch = !ball.airborne && (terrainBeforeMove.kind === `dune` || terrainBeforeMove.kind === `ramp`) && horizontalSpeed > 5.6 && terrainBeforeMove.height > .16 && slopeAlongBefore > .055 && slopeAlongAfter < slopeAlongBefore - .075;
    if (crestLaunch) {
      ball.airborne = true;
      ball.position.y = Math.max(ball.position.y, ball.radius + terrainBeforeMove.height);
      ball.velocity.y = clamp(.45 + slopeAlongBefore * horizontalSpeed * .72, .7, 4.1);
      spawnImpactEffect({ x: ball.position.x, y: ball.position.y, z: ball.position.z });
    }
    if (ball.airborne || ball.position.y > groundY + .015 || Math.abs(ball.velocity.y) > .01) {
      ball.airborne = true;
      ball.velocity.y += S.physics.gravity.y * dt;
      ball.position.y += ball.velocity.y * dt;
      if (ball.position.y <= groundY) {
        const landingSpeed = Math.abs(ball.velocity.y);
        ball.position.y = groundY;
        if (landingSpeed > 1.25) {
          ball.velocity.y = landingSpeed * .23;
          ball.airborne = true;
          spawnImpactEffect(ball.position);
        } else {
          ball.velocity.y = 0;
          ball.airborne = false;
        }
      }
    } else {
      ball.position.y = groundY;
      ball.velocity.y = 0;
      ball.airborne = false;
    }

    if (Math.abs(ball.position.x) > 13 || Math.abs(ball.position.z) > 9 || ball.position.y < -2) {
      ball.outOfBounds = true;
      const safe = copy(ball.lastSafePosition || S.level.spawn);
      safe.y = ball.radius + groundHeightAt(safe.x, safe.z);
      ball.position = safe;
      ball.velocity = { x: 0, y: 0, z: 0 };
      ball.speed = 0;
      ball.moving = false;
      ball.sleeping = true;
      ball.airborne = false;
      S.shot.canShoot = true;
      S.shot.power = 0;
      if (S.ballMesh) S.ballMesh.position.set(safe.x, safe.y, safe.z);
      setToast(`越界 · 已回到最后安全位置`);
      return;
    }

    const playableMinX = -11 + ball.radius;
    const playableMaxX = 11 - ball.radius;
    const playableMinZ = -7 + ball.radius;
    const playableMaxZ = 7 - ball.radius;
    if (ball.position.x < playableMinX || ball.position.x > playableMaxX) {
      const hitMin = ball.position.x < playableMinX;
      ball.position.x = clamp(ball.position.x, playableMinX, playableMaxX);
      ball.velocity.x *= -.72;
      ball.lastCollision = hitMin ? `boundary-minX` : `boundary-maxX`;
      spawnImpactEffect(ball.position);
    }
    if (ball.position.z < playableMinZ || ball.position.z > playableMaxZ) {
      const hitMin = ball.position.z < playableMinZ;
      ball.position.z = clamp(ball.position.z, playableMinZ, playableMaxZ);
      ball.velocity.z *= -.72;
      ball.lastCollision = hitMin ? `boundary-minZ` : `boundary-maxZ`;
      spawnImpactEffect(ball.position);
    }

    activeObstacles().forEach(obstacle => collideObstacle(obstacle, previous));
    // Final de-penetration pass keeps the visible ball outside every solid model even
    // after simultaneous contacts or a large browser frame. Velocity is reflected only
    // when it still points into the contact normal, so this pass cannot add energy.
    activeObstacles().forEach(obstacle => {
      const radius = finite(obstacle.collider?.radius, obstacle.radius) + ball.radius;
      let dx = ball.position.x - obstacle.x;
      let dz = ball.position.z - obstacle.z;
      let distance = Math.hypot(dx, dz);
      if (distance >= radius - .002) return;
      if (distance < 1e-6) {
        const velocityLength = Math.hypot(ball.velocity.x, ball.velocity.z) || 1;
        dx = -ball.velocity.x / velocityLength;
        dz = -ball.velocity.z / velocityLength;
        distance = 1;
      }
      const nx = dx / distance;
      const nz = dz / distance;
      ball.position.x = obstacle.x + nx * (radius + .018);
      ball.position.z = obstacle.z + nz * (radius + .018);
      const inward = ball.velocity.x * nx + ball.velocity.z * nz;
      if (inward < 0) {
        ball.velocity.x -= inward * nx;
        ball.velocity.z -= inward * nz;
      }
      ball.lastCollision = `obstacle:${obstacle.id}`;
    });
    triggerPowerups();

    speed = Math.hypot(ball.velocity.x, ball.velocity.z);
    ball.speed = finite(speed);
    const hole = S.level.hole;
    const distance = Math.hypot(ball.position.x - hole.x, ball.position.z - hole.z);
    const captureRadius = Math.max(.08, hole.radius + ball.radius * .12);
    const sweptCupDistance = segmentDistance(previous.x, previous.z, ball.position.x, ball.position.z, hole.x, hole.z);
    // 只要本帧运动轨迹经过真实球洞有效半径，立即判定进洞。
    // 使用线段到洞心的最短距离，避免高速运动时跨帧穿过球洞而漏判。
    if (sweptCupDistance <= captureRadius) {
      S.holeCaptureTime = 0;
      finishHole();
      return;
    }

    const terrainSlopeMagnitude = Math.hypot(terrainAfterMove.slopeX, terrainAfterMove.slopeZ);
    const terrainSlopeAcceleration = 9.81 * terrainSlopeMagnitude / (1 + terrainSlopeMagnitude * terrainSlopeMagnitude);
    const terrainCanHoldBall = !terrainAfterMove.active || terrainAfterMove.height < .008 || terrainSlopeAcceleration <= surface.friction * 1.08;
    const nearlyStill = ball.speed <= Math.max(.065, S.physics.stopSpeed * 1.8) && Math.abs(ball.velocity.y) <= .035 && !ball.airborne;
    ball.lowSpeedTime = nearlyStill ? finite(ball.lowSpeedTime) + dt : 0;
    const stuckAtTerrainEdge = ball.lowSpeedTime >= .38 && terrainSlopeAcceleration <= surface.friction * 1.3;
    if (!ball.airborne && ((ball.speed <= S.physics.stopSpeed && terrainCanHoldBall) || stuckAtTerrainEdge)) {
      const wasMoving = ball.moving;
      ball.position.y = groundY;
      ball.velocity.x = 0;
      ball.velocity.y = 0;
      ball.velocity.z = 0;
      ball.speed = 0;
      ball.moving = false;
      ball.sleeping = true;
      ball.airborne = false;
      ball.lowSpeedTime = 0;
      S.shot.canShoot = true;
      if (!S.shot.dragging) S.shot.power = 0;
      if (wasMoving) {
        notify();
        updateLocalPlayer();
        if (S.multiplayer.enabled) advanceTurn();
      }
    } else {
      ball.moving = true;
      ball.sleeping = false;
      S.shot.canShoot = false;
      if (!ball.airborne && Math.abs(ball.position.x) <= 10.8 && Math.abs(ball.position.z) <= 6.8) {
        const obstacleClear = activeObstacles().every(obstacle => Math.hypot(ball.position.x - obstacle.x, ball.position.z - obstacle.z) > obstacle.radius + ball.radius + .12);
        if (obstacleClear && terrainAfterMove.height < .62) ball.lastSafePosition = copy(ball.position);
      }
    }

    if (S.ballMesh) S.ballMesh.position.set(ball.position.x, ball.position.y, ball.position.z);
  };

  const shoot = (dx, dz, rawPower) => {
    if (S.screen !== `playing` || !S.level || !S.shot.canShoot || S.ball.inHole) return false;
    if (S.multiplayer.enabled && !localPlayerById(S.multiplayer.currentPlayerId)) return false;
    const requestedPower = clamp(finite(rawPower), 0, S.shot.maxPower);
    const requestedX = finite(dx);
    const requestedZ = finite(dz);
    const requestedLength = Math.hypot(requestedX, requestedZ);
    // Arming a skill must not turn a cancelled/zero-power gesture into a legal
    // shot. Validate the player's input first; consume inventory only after that
    // input crosses the normal shot boundary.
    if (!requestedLength || requestedPower < S.shot.minPower) return false;
    let power = requestedPower;
    let x = requestedX;
    let z = requestedZ;
    const holeInOne = inventoryItem(`hole_in_one`);
    if (S.powerups.armedType === `hole_in_one` && holeInOne?.count > 0) {
      x = S.level.hole.x - S.ball.position.x;
      z = S.level.hole.z - S.ball.position.z;
      power = Math.min(.86, Math.max(.25, Math.hypot(x, z) / 18));
      holeInOne.count -= 1;
      S.powerups.armedType = null;
      S.powerups.activeEffect = `hole_in_one`;
      setSkillFeedback(`hole_in_one`, `一杆入洞辅助启动 · 球洞已锁定`, S.ball.position);
    }
    const length = Math.hypot(x, z);
    if (!length) return false;
    const dirX = x / length;
    const dirZ = z / length;
    S.shot.direction = { x: dirX, y: 0, z: dirZ };
    S.shot.power = power;
    const initialSpeed = Math.min(S.physics.maxBallSpeed, power * 14);
    S.ball.velocity.x = dirX * initialSpeed;
    S.ball.velocity.y = 0;
    S.ball.velocity.z = dirZ * initialSpeed;
    S.ball.airborne = false;
    S.ball.moving = true;
    S.ball.sleeping = false;
    S.ball.outOfBounds = false;
    S.shot.canShoot = false;
    S.strokes += 1;
    S.shot.strokeCount = S.strokes;
    updateLocalPlayer();
    notify();
    return true;
  };

  const dragDirection = (start, current) => {
    const horizontal = start.x - current.x;
    const vertical = current.y - start.y;
    const angle = S.camera.angle;
    const forward = { x: Math.sin(angle), z: -Math.cos(angle) };
    const right = { x: Math.cos(angle), z: Math.sin(angle) };
    const x = right.x * horizontal + forward.x * vertical;
    const z = right.z * horizontal + forward.z * vertical;
    const length = Math.hypot(x, z) || 1;
    return { x: x / length, y: 0, z: z / length };
  };

  const beginDrag = event => {
    if (S.powerups.placingType) return;
    if (S.screen !== `playing` || !S.shot.canShoot || S.ball.inHole) return;
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    event.currentTarget?.setPointerCapture?.(event.pointerId);
    S.shot.dragging = true;
    S.shot.startScreen = { x: event.clientX, y: event.clientY };
    S.shot.currentScreen = { x: event.clientX, y: event.clientY };
    S.shot.power = 0;
    notify();
  };
  const updateDrag = event => {
    if (!S.shot.dragging || !S.shot.startScreen) return;
    S.shot.currentScreen = { x: event.clientX, y: event.clientY };
    const start = S.shot.startScreen;
    S.shot.power = clamp(Math.hypot(event.clientX - start.x, event.clientY - start.y) / 190, 0, 1);
    S.shot.direction = dragDirection(start, S.shot.currentScreen);
    notify();
  };
  const endDrag = event => {
    if (!S.shot.dragging) return;
    if (event?.clientX !== undefined) updateDrag(event);
    const direction = copy(S.shot.direction);
    const power = S.shot.power;
    S.shot.dragging = false;
    S.shot.startScreen = null;
    S.shot.currentScreen = null;
    if (!shoot(direction.x, direction.z, power)) {
      S.shot.power = 0;
      notify();
    }
  };
  const cancelDrag = () => {
    if (!S.shot.dragging) return;
    S.shot.dragging = false;
    S.shot.startScreen = null;
    S.shot.currentScreen = null;
    S.shot.power = 0;
    notify();
  };

  const zoomCamera = delta => {
    S.camera.distance = clamp(S.camera.distance + delta, S.camera.minDistance, S.camera.maxDistance);
    notify();
  };

  const setCameraMode = mode => {
    const free = mode === `free`;
    S.camera.dragging = false;
    S.camera.dragStart = null;
    if (free) {
      cancelDrag();
      S.camera.mode = `free`;
      S.camera.freeAngle = finite(S.camera.angle, S.level?.cameraAngle || .68);
      S.camera.pitch = clamp(finite(S.camera.pitch, .62), .28, 1.12);
      if (S.renderer?.domElement) S.renderer.domElement.style.cursor = `grab`;
      setToast(`自由视角：拖动球场旋转，滚轮缩放`);
    } else {
      S.camera.angle = finite(S.camera.freeAngle, S.camera.angle);
      S.camera.freeAngle = S.camera.angle;
      S.camera.pitch = clamp(finite(S.camera.pitch, .62), .28, 1.12);
      S.camera.mode = `follow`;
      if (S.renderer?.domElement) S.renderer.domElement.style.cursor = `crosshair`;
      setToast(`固定视角：已保存当前角度，可以正常击球`);
    }
    notify();
  };

  const toggleCameraMode = () => setCameraMode(S.camera.mode === `free` ? `follow` : `free`);

  const beginCameraDrag = event => {
    if (S.screen !== `playing` || S.camera.mode !== `free`) return false;
    if (event.button !== undefined && event.button !== 0) return false;
    event.preventDefault();
    event.currentTarget?.setPointerCapture?.(event.pointerId);
    S.camera.dragging = true;
    S.camera.dragStart = { x: event.clientX, y: event.clientY };
    S.camera.startAngle = finite(S.camera.freeAngle, S.camera.angle);
    S.camera.startPitch = finite(S.camera.pitch, .62);
    if (S.renderer?.domElement) S.renderer.domElement.style.cursor = `grabbing`;
    notify();
    return true;
  };

  const updateCameraDrag = event => {
    if (!S.camera.dragging || !S.camera.dragStart || S.camera.mode !== `free`) return false;
    event.preventDefault();
    const dx = event.clientX - S.camera.dragStart.x;
    const dy = event.clientY - S.camera.dragStart.y;
    S.camera.freeAngle = S.camera.startAngle - dx * .0065;
    S.camera.pitch = clamp(S.camera.startPitch + dy * .0048, .28, 1.12);
    notify();
    return true;
  };

  const endCameraDrag = event => {
    if (!S.camera.dragging) return false;
    if (event?.clientX !== undefined) updateCameraDrag(event);
    S.camera.dragging = false;
    S.camera.dragStart = null;
    if (S.renderer?.domElement) S.renderer.domElement.style.cursor = S.camera.mode === `free` ? `grab` : `crosshair`;
    notify();
    return true;
  };

  const cancelCameraDrag = () => {
    if (!S.camera.dragging) return;
    S.camera.dragging = false;
    S.camera.dragStart = null;
    if (S.renderer?.domElement) S.renderer.domElement.style.cursor = S.camera.mode === `free` ? `grab` : `crosshair`;
    notify();
  };

  const updateCamera = () => {
    if (!S.camera3d || !S.level) return;
    const target = S.ball.position;
    S.camera.target = copy(target);
    const distance = S.camera.distance;
    if (S.camera.mode === `free`) {
      const angle = finite(S.camera.freeAngle, S.camera.angle);
      const pitch = clamp(finite(S.camera.pitch, .62), .28, 1.12);
      const horizontal = distance * Math.cos(pitch);
      const x = target.x - Math.sin(angle) * horizontal;
      const z = target.z + Math.cos(angle) * horizontal;
      const y = target.y + 1.2 + distance * Math.sin(pitch);
      S.camera3d.position.set(x, y, z);
      S.camera3d.lookAt(target.x, target.y + .12, target.z);
    } else {
      const angle = finite(S.camera.angle, S.level?.cameraAngle || .68);
      const pitch = clamp(finite(S.camera.pitch, .62), .28, 1.12);
      const horizontal = distance * Math.cos(pitch);
      const x = target.x - Math.sin(angle) * horizontal;
      const z = target.z + Math.cos(angle) * horizontal;
      const y = target.y + 1.2 + distance * Math.sin(pitch);
      S.camera3d.position.set(x, y, z);
      S.camera3d.lookAt(target.x, target.y + .12, target.z);
    }
    S.camera.position = vec(S.camera3d.position);
    S.camera.zoom = S.camera3d.zoom;
  };

  const resizeRenderer = host => {
    if (!S.renderer || !S.camera3d || !host) return;
    const width = Math.max(1, host.clientWidth || innerWidth);
    const height = Math.max(1, host.clientHeight || innerHeight);
    S.renderer.setPixelRatio(1);
    const renderScale = width * height > 700000 ? .76 : width * height > 420000 ? .84 : .92;
    S.renderer.setSize(Math.ceil(width * renderScale), Math.ceil(height * renderScale), false);
    S.camera3d.aspect = width / height;
    S.camera3d.updateProjectionMatrix();
  };

  const initRenderer = host => {
    if (!host) return () => {};
    S.runtime.runtimeMountCount += 1;
    S.runtime.engineGeneration += 1;
    let renderer;
    try {
      const probeCanvas = document.createElement(`canvas`);
      const probeContext = probeCanvas.getContext(`webgl2`) || probeCanvas.getContext(`webgl`) || probeCanvas.getContext(`experimental-webgl`);
      if (!probeContext) throw new Error(`WebGL context unavailable`);
      renderer = new cl({ antialias: false, alpha: false, powerPreference: `high-performance`, precision: `mediump` });
      renderer.shadowMap.enabled = false;
      renderer.domElement.setAttribute(`aria-label`, `3D 迷你高尔夫球场`);
      renderer.domElement.style.touchAction = `none`;
      host.replaceChildren(renderer.domElement);
      S.renderer = renderer;
      S.scene = new Qn();
      S.camera3d = new Ta(48, 1, .1, 140);
      window.__THREE_SCENE__ = S.scene;
      window.__THREE_RENDERER__ = renderer;
      resizeRenderer(host);
      buildCourse(S.pendingLevel);
      S.ready = true;
      S.renderError = ``;
      S.screen = `menu`;
      notify();
    } catch (error) {
      console.warn(`WebGL renderer unavailable; using the interactive Canvas 3D fallback.`, error?.message || error);
      const canvas = document.createElement(`canvas`);
      const context = canvas.getContext(`2d`);
      canvas.setAttribute(`aria-label`, `3D 迷你高尔夫球场（兼容渲染）`);
      canvas.style.touchAction = `none`;
      canvas.style.width = `100%`;
      canvas.style.height = `100%`;
      host.replaceChildren(canvas);
      const rgba = (hex, alpha = 1) => {
        let value = String(hex || `#ffffff`).replace(`#`, ``);
        if (value.length === 3) value = value.split(``).map(char => char + char).join(``);
        const number = parseInt(value, 16) || 0;
        return `rgba(${number >> 16 & 255},${number >> 8 & 255},${number & 255},${alpha})`;
      };
      const paletteFor = theme => ({
        forest: { sky: `#9cc7d0`, horizon: `#d8eee8`, ground: `#4d925e`, edge: `#27583c`, sand: `#d7b675`, ice: `#9bd9e3`, accent: `#ff685e`, object: `#6d4d35`, glow: `#e6fff3` },
        desert: { sky: `#f0b878`, horizon: `#ffe5b1`, ground: `#c98a48`, edge: `#6f4328`, sand: `#e8c078`, ice: `#8edce8`, accent: `#49c6c7`, object: `#9f593d`, glow: `#fff0b7` },
        snow: { sky: `#b6dce8`, horizon: `#edf9ff`, ground: `#dceff1`, edge: `#668994`, sand: `#b6a28f`, ice: `#76c9dd`, accent: `#f36c65`, object: `#7aa2aa`, glow: `#ffffff` }
      }[theme] || { sky: `#9cc7d0`, horizon: `#d8eee8`, ground: `#4d925e`, edge: `#27583c`, sand: `#d7b675`, ice: `#9bd9e3`, accent: `#ff685e`, object: `#6d4d35`, glow: `#e6fff3` });
      const drawFallback = () => {
        if (!context || !S.level) return;
        const width = canvas.clientWidth || canvas.width || 1;
        const height = canvas.clientHeight || canvas.height || 1;
        const dpr = Math.min(2, devicePixelRatio || 1);
        const rw = Math.max(1, Math.round(width * dpr));
        const rh = Math.max(1, Math.round(height * dpr));
        if (canvas.width !== rw || canvas.height !== rh) { canvas.width = rw; canvas.height = rh; }
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        context.clearRect(0, 0, width, height);
        const courseState = window.__course?.getState?.();
        const level = courseState?.loaded ? courseState : S.level;
        const bounds = level.bounds || { minX: -12, maxX: 12, minZ: -8, maxZ: 8 };
        const pal = paletteFor(level.theme || level.id);
        const focus = S.camera.target || S.ball.position;
        const center = { x: (bounds.minX + bounds.maxX) / 2, z: (bounds.minZ + bounds.maxZ) / 2 };
        const target = { x: finite(focus.x) * .58 + center.x * .42, z: finite(focus.z) * .58 + center.z * .42 };
        const angle = finite(S.camera.angle, .68);
        const ca = Math.cos(angle), sa = Math.sin(angle);
        const spanX = Math.max(8, bounds.maxX - bounds.minX), spanZ = Math.max(6, bounds.maxZ - bounds.minZ);
        const scale = Math.min(width / (spanX * 1.28), height / (spanZ * .78 + 7));
        const project = point => {
          const dx = finite(point?.x) - target.x, dz = finite(point?.z) - target.z;
          const rx = dx * ca - dz * sa, rz = dx * sa + dz * ca;
          return { x: width * .5 + rx * scale, y: height * .56 + rz * scale * .48 - finite(point?.y) * scale * .9, depth: rz };
        };
        const path = (points, fill, stroke, lineWidth = 1.5) => {
          context.beginPath(); points.forEach((point, index) => index ? context.lineTo(point.x, point.y) : context.moveTo(point.x, point.y)); context.closePath();
          if (fill) { context.fillStyle = fill; context.fill(); }
          if (stroke) { context.strokeStyle = stroke; context.lineWidth = lineWidth; context.stroke(); }
        };
        const ellipse = (point, radiusX, radiusZ, fill, stroke, lineWidth = 1.5) => {
          const q = project(point); context.beginPath(); context.ellipse(q.x, q.y, Math.max(1, radiusX * scale), Math.max(1, radiusZ * scale * .48), 0, 0, Math.PI * 2);
          if (fill) { context.fillStyle = fill; context.fill(); }
          if (stroke) { context.strokeStyle = stroke; context.lineWidth = lineWidth; context.stroke(); }
        };
        const sky = context.createLinearGradient(0, 0, 0, height); sky.addColorStop(0, pal.sky); sky.addColorStop(.62, pal.horizon); sky.addColorStop(1, rgba(pal.ground, .92)); context.fillStyle = sky; context.fillRect(0, 0, width, height);
        const corners = [{ x: bounds.minX, y: 0, z: bounds.minZ }, { x: bounds.maxX, y: 0, z: bounds.minZ }, { x: bounds.maxX, y: 0, z: bounds.maxZ }, { x: bounds.minX, y: 0, z: bounds.maxZ }].map(project);
        context.save(); context.shadowColor = rgba(pal.edge, .48); context.shadowBlur = 20; path(corners, pal.ground, pal.edge, 3); context.restore();
        (level.surfaces || []).forEach(surface => {
          if (surface.type === `grass`) return;
          const color = surface.type === `sand` ? pal.sand : pal.ice;
          if (surface.bounds) path([{ x: surface.bounds.minX, y: .02, z: surface.bounds.minZ }, { x: surface.bounds.maxX, y: .02, z: surface.bounds.minZ }, { x: surface.bounds.maxX, y: .02, z: surface.bounds.maxZ }, { x: surface.bounds.minX, y: .02, z: surface.bounds.maxZ }].map(project), color, rgba(pal.edge, .65));
          else ellipse({ x: surface.center.x, y: .02, z: surface.center.z }, surface.radius || 1.6, (surface.radius || 1.6) * .86, color, rgba(pal.edge, .62));
        });
        (level.terrainFeatures || []).forEach(feature => {
          if (feature.type === `dune`) { ellipse({ x: feature.center.x, y: .05, z: feature.center.z }, feature.radiusX || 2, feature.radiusZ || 1.5, rgba(pal.sand, .95), pal.edge, 2); ellipse({ x: feature.center.x, y: .34, z: feature.center.z }, (feature.radiusX || 2) * .66, (feature.radiusZ || 1.5) * .48, rgba(pal.glow, .2), null); }
          if (feature.type === `slope` && feature.bounds) path([{ x: feature.bounds.minX, y: .02, z: feature.bounds.minZ }, { x: feature.bounds.maxX, y: .02, z: feature.bounds.minZ }, { x: feature.bounds.maxX, y: feature.heightRange?.[1] || feature.heightRange?.max || 1, z: feature.bounds.maxZ }, { x: feature.bounds.minX, y: feature.heightRange?.[1] || feature.heightRange?.max || 1, z: feature.bounds.maxZ }].map(project), rgba(pal.ground, .78), pal.edge, 2);
        });
        const obstacleList = [...(level.decor || []).slice(0, 20), ...(level.obstacles || [])].sort((a, b) => project(a.position).depth - project(b.position).depth);
        obstacleList.forEach(item => {
          const p = item.position || {}, q = project({ x: p.x, y: 0, z: p.z }), radius = Math.max(.22, finite(item.collider?.radius || item.radius || .55)) * scale, objectHeight = Math.max(.55, finite(item.collider?.height || 1.3)) * scale * .7, top = q.y - objectHeight;
          context.globalAlpha = .25; ellipse({ x: p.x + .12, y: 0, z: p.z + .12 }, (item.radius || .55) * 1.15, (item.radius || .55) * .72, `#000`, null); context.globalAlpha = 1;
          const gradient = context.createLinearGradient(q.x - radius, 0, q.x + radius, 0); gradient.addColorStop(0, pal.edge); gradient.addColorStop(.5, item.solid === false ? rgba(pal.object, .72) : pal.object); gradient.addColorStop(1, rgba(pal.edge, .82));
          context.fillStyle = gradient; context.fillRect(q.x - radius, top, radius * 2, objectHeight); context.beginPath(); context.ellipse(q.x, top, radius, radius * .35, 0, 0, Math.PI * 2); context.fill(); context.strokeStyle = pal.edge; context.lineWidth = 1.5; context.stroke(); context.fillStyle = rgba(pal.glow, .45); context.fillRect(q.x - radius * .08, top + 3, radius * .16, Math.max(2, objectHeight - 6)); context.beginPath(); context.ellipse(q.x, q.y, radius, radius * .35, 0, 0, Math.PI * 2); context.fillStyle = pal.edge; context.fill();
        });
        (S.powerups.items || []).filter(item => item.active && !item.collected).forEach(item => {
          const q = project(item.position), radius = scale * .42; context.save(); context.translate(q.x, q.y); context.rotate(Math.PI / 4); context.fillStyle = item.type === `bounce_pad` ? `#ff4fbf` : item.type === `speed_boost` ? `#4cf4f2` : pal.accent; context.shadowColor = pal.glow; context.shadowBlur = 13; context.fillRect(-radius, -radius * .42, radius * 2, radius * .84); context.strokeStyle = pal.edge; context.lineWidth = 2; context.strokeRect(-radius, -radius * .42, radius * 2, radius * .84); context.restore();
        });
        const hole = level.hole, hp = project(hole), ft = project({ x: hole.x, y: 2.7, z: hole.z }); ellipse({ x: hole.x, y: .01, z: hole.z }, hole.radius || .5, hole.radius || .5, `#142019`, rgba(pal.edge, .8)); context.strokeStyle = `#ffffff`; context.lineWidth = 3; context.beginPath(); context.moveTo(hp.x, hp.y); context.lineTo(ft.x, ft.y); context.stroke(); path([ft, { x: ft.x + scale * .9, y: ft.y + scale * .18 }, { x: ft.x, y: ft.y + scale * .4 }], pal.accent, pal.edge);
        const ball = S.ball.position, bq = project(ball), ground = project({ x: ball.x, y: finite(S.ball.groundY), z: ball.z }), ballRadius = Math.max(6, S.ball.radius * scale); context.globalAlpha = .26; context.beginPath(); context.ellipse(ground.x + 3, ground.y + 4, ballRadius * 1.35, ballRadius * .5, 0, 0, Math.PI * 2); context.fillStyle = `#000`; context.fill(); context.globalAlpha = 1;
        const ballGradient = context.createRadialGradient(bq.x - ballRadius * .35, bq.y - ballRadius * .45, 1, bq.x, bq.y, ballRadius); ballGradient.addColorStop(0, `#ffffff`); ballGradient.addColorStop(.32, `#f4fff8`); ballGradient.addColorStop(1, pal.edge); context.fillStyle = ballGradient; context.shadowColor = pal.glow; context.shadowBlur = 18; context.beginPath(); context.arc(bq.x, bq.y, ballRadius, 0, Math.PI * 2); context.fill(); context.shadowBlur = 0; context.strokeStyle = pal.edge; context.lineWidth = 2; context.stroke();
        if (S.shot.dragging || S.powerups.armedType === `hole_in_one`) { const direction = S.shot.direction || { x: 1, z: 0 }, power = S.powerups.armedType === `hole_in_one` ? Math.max(.68, S.shot.power) : S.shot.power, length = 2.6 + power * 5.5; context.strokeStyle = pal.accent; context.lineWidth = 3; context.setLineDash([8, 7]); context.beginPath(); context.moveTo(bq.x, bq.y); for (let index = 1; index <= 12; index += 1) { const t = index / 12, q = project({ x: ball.x + direction.x * length * t, y: ball.y + Math.sin(Math.PI * t) * power * .85, z: ball.z + direction.z * length * t }); context.lineTo(q.x, q.y); } context.stroke(); context.setLineDash([]); }
      };
      renderer = {
        isWebGLRenderer: true, domElement: canvas, shadowMap: { enabled: false }, info: { memory: { geometries: 0, textures: 0 }, programs: [] }, _camera: null,
        setPixelRatio() {}, getPixelRatio: () => Math.min(2, devicePixelRatio || 1), setSize(width, height) { canvas.width = Math.max(1, Math.round(width)); canvas.height = Math.max(1, Math.round(height)); canvas.style.width = `100%`; canvas.style.height = `100%`; },
        render(scene, camera) { this._camera = camera; drawFallback(); }, getContext: () => null, dispose() {}
      };
      S.renderer = renderer;
      S.scene = new Qn();
      S.camera3d = new Ta(48, 1, .1, 140);
      window.__THREE_SCENE__ = S.scene;
      window.__THREE_RENDERER__ = renderer;
      resizeRenderer(host);
      buildCourse(S.pendingLevel);
      S.ready = true;
      S.renderError = ``;
      S.screen = `menu`;
      notify();
    }

    const canvas = renderer.domElement;
    canvas.style.cursor = S.camera.mode === `free` ? `grab` : `crosshair`;
    const onPointerDown = event => {
      if (S.camera.mode === `free`) beginCameraDrag(event);
      else beginDrag(event);
    };
    const onPointerMove = event => {
      if (updatePowerupPlacement(event)) return;
      if (S.camera.dragging) updateCameraDrag(event);
      else updateDrag(event);
    };
    const onPointerUp = event => {
      if (endPowerupPlacement(event)) return;
      if (S.camera.dragging) endCameraDrag(event);
      else endDrag(event);
    };
    const onPointerCancel = () => {
      cancelCameraDrag();
      cancelDrag();
    };
    const onWheel = event => {
      if (S.screen !== `playing`) return;
      event.preventDefault();
      zoomCamera(event.deltaY > 0 ? 1 : -1);
    };
    const onResize = () => resizeRenderer(host);
    const onBlur = () => {
      cancelCameraDrag();
      cancelDrag();
    };
    canvas.addEventListener(`pointerdown`, onPointerDown);
    window.addEventListener(`pointermove`, onPointerMove, { passive: false });
    window.addEventListener(`pointerup`, onPointerUp, { passive: false });
    window.addEventListener(`pointercancel`, onPointerCancel);
    canvas.addEventListener(`wheel`, onWheel, { passive: false });
    window.addEventListener(`resize`, onResize);
    window.addEventListener(`blur`, onBlur);

    S.lastFrame = performance.now();
    const frame = now => {
      S.runtime.renderFrame += 1;
      S.runtime.logicLoopCount += 1;
      const rawDelta = Math.max(0, (now - S.lastFrame) / 1000);
      const delta = Math.min(rawDelta, .05);
      S.lastFrame = now;
      if (S.screen === `playing` && !S.testPhysicsPaused) {
        S.elapsed = (now - S.startedAt) / 1000;
        S.accumulator = Math.min(S.accumulator + delta, S.physics.fixedTimeStep * S.physics.maxSubSteps);
        let steps = 0;
        while (S.accumulator >= S.physics.fixedTimeStep && steps < S.physics.maxSubSteps) {
          physicsStep(S.physics.fixedTimeStep);
          S.accumulator -= S.physics.fixedTimeStep;
          steps += 1;
        }
      } else {
        S.accumulator = 0;
      }
      updateCamera();
      if (S.ballMesh && S.ball.moving && S.ball.speed > .08) {
        const rollDelta = S.ball.speed * delta / Math.max(.12, S.ball.radius);
        const axisX = finite(S.ball.velocity.z) / Math.max(.001, S.ball.speed);
        const axisZ = -finite(S.ball.velocity.x) / Math.max(.001, S.ball.speed);
        S.ballMesh.rotateOnWorldAxis(new U(axisX, 0, axisZ), rollDelta);
        if (!S.ball.airborne && S.ball.speed > 1.2 && now - S.lastTrailAt > 95) {
          S.lastTrailAt = now;
          spawnTrailEffect(S.ball.position, S.ball.currentSurface);
        }
      }
      S.powerups.items.forEach(item => {
        if (!item.active || item.collected) return;
        const orb = S.scene?.getObjectByName?.(`powerup-${item.id}-orb`);
        if (orb) {
          orb.position.y = (orb.userData.floatBase || .32) + Math.sin(now * .003 + item.position.x) * .11;
          orb.rotation.y += delta * 1.4;
        }
      });
      for (let index = S.effects.length - 1; index >= 0; index -= 1) {
        const effect = S.effects[index];
        const progress = clamp((now - effect.startedAt) / effect.duration, 0, 1);
        if (effect.ring) {
          const scale = 1 + progress * 2.25;
          effect.ring.scale.set(scale, 1, scale * .72);
          effect.ring.material.opacity = .72 * (1 - progress);
        }
        effect.particles.forEach((particle, particleIndex) => {
          if (effect.kind === `trail`) {
            particle.position.x += finite(particle.userData.driftX) * delta;
            particle.position.z += finite(particle.userData.driftZ) * delta;
            particle.position.y += delta * (.22 + particleIndex * .08);
            particle.scale.setScalar(1 + progress * .7);
            particle.material.opacity = .58 * (1 - progress);
          } else {
            const angle = finite(particle.userData.fxAngle) + progress * .65;
            const radius = .28 + progress * 1.05;
            particle.position.set(effect.origin.x + Math.cos(angle) * radius, effect.origin.y + .16 + Math.sin(progress * Math.PI) * (.52 + particleIndex * .025), effect.origin.z + Math.sin(angle) * radius);
            particle.material.opacity = .86 * (1 - progress);
          }
        });
        if (progress >= 1) {
          removeEffectObject(effect.ring);
          effect.particles.forEach(removeEffectObject);
          S.effects.splice(index, 1);
        }
      }
      if (S.ball.inHole && S.ballMesh) S.ballMesh.position.y += (-.28 - S.ballMesh.position.y) * .12;
      renderer.render(S.scene, S.camera3d);
      if (now - S.lastUiPulse > 180) {
        S.lastUiPulse = now;
        if (S.toast && now > S.toastUntil) S.toast = ``;
        if (S.skillFeedback && now > S.skillFeedback.until) S.skillFeedback = null;
        notify();
      }
      S.raf = requestAnimationFrame(frame);
    };
    S.raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(S.raf);
      canvas.removeEventListener(`pointerdown`, onPointerDown);
      window.removeEventListener(`pointermove`, onPointerMove);
      window.removeEventListener(`pointerup`, onPointerUp);
      window.removeEventListener(`pointercancel`, onPointerCancel);
      canvas.removeEventListener(`wheel`, onWheel);
      window.removeEventListener(`resize`, onResize);
      window.removeEventListener(`blur`, onBlur);
      clearScene();
      renderer.dispose();
      host.replaceChildren();
      S.ready = false;
      S.runtime.runtimeCleanupCount += 1;
    };
  };

  const renderedBallPosition = () => {
    const mesh = S.ballMesh;
    if (!mesh) return null;
    mesh.updateMatrixWorld?.(true);
    const elements = mesh.matrixWorld?.elements;
    if (elements && elements.length >= 16 && [elements[12], elements[13], elements[14]].every(Number.isFinite)) {
      return { x: elements[12], y: elements[13], z: elements[14] };
    }
    return mesh.position ? vec(mesh.position) : null;
  };

  const ballSnapshot = () => {
    const snapshot = copy(S.ball);
    const renderedPosition = renderedBallPosition();
    if (renderedPosition) snapshot.position = renderedPosition;
    return snapshot;
  };

  const exposeHooks = () => {
    window.__game = {
      getState: () => ({
        ready: S.ready, gameState: S.screen === `local_leaderboard` ? `local_result` : S.screen, mode: S.mode,
        currentLevel: S.level ? { id: S.level.id, name: S.level.name, theme: S.level.theme, par: S.level.par } : null,
        currentHoleStrokes: S.strokes, totalStrokes: S.totalStrokes,
        currentScore: S.currentScore, totalScore: S.totalScore,
        holeComplete: S.holeComplete, elapsedTime: S.elapsed
      })
    };
    window.__ball = { getState: ballSnapshot };
    window.__shot = { getState: () => copy(S.shot) };
    window.__course = {
      getState: () => {
        const level = S.level || LEVELS[S.pendingLevel] || LEVELS.forest;
        return {
          levelId: level.id, name: level.name, theme: level.theme, par: level.par,
          bounds: { minX: -11, maxX: 11, minZ: -7, maxZ: 7 },
          spawn: copy(level.spawn), hole: copy(level.hole), surfaces: copy(activeSurfaces()),
          obstacles: copy(activeObstacles().map(obstacle => ({
            id: obstacle.id,
            type: obstacle.type || `solid`,
            position: { x: obstacle.x, y: groundHeightAt(obstacle.x, obstacle.z), z: obstacle.z },
            radius: obstacle.collider?.radius || obstacle.radius,
            solid: true,
            modelType: obstacle.modelType || `compound-obstacle`,
            collider: obstacle.collider || { shape: `cylinder`, radius: obstacle.radius, height: 1.2 }
          }))),
          terrainFeatures: copy([
            {
              id: `shared-ramp`, type: `slope`,
              bounds: { minX: -1, maxX: 4, minZ: 3.9, maxZ: 5.9 },
              lowEdge: { x: 1.5, y: .012, z: 3.9 }, highEdge: { x: 1.5, y: .267, z: 5.9 },
              downhill: { x: 0, z: -1 }, rearNormal: { x: 0, z: 1 }, heightRange: { min: .012, max: .267 }
            },
            ...(level.theme === `desert` ? DESERT_COURSE_DUNES.map(dune => ({
              id: dune.id, type: `dune`, center: { x: dune.x, y: 0, z: dune.z },
              radiusX: dune.radiusX, radiusZ: dune.radiusZ, height: dune.height
            })) : [])
          ]),
          obstacleCount: activeObstacles().length,
          sceneObjectCount: S.scene?.children.length || 0,
          loaded: !!(S.scene && S.ballMesh && S.level)
        };
      }
    };
    window.__multiplayer = { getState: () => ({
      enabled: !!S.multiplayer.enabled, mode: `local`, status: S.multiplayer.status,
      playerCount: S.multiplayer.players.length, currentPlayerId: S.multiplayer.currentPlayerId,
      turnIndex: S.multiplayer.turnIndex, round: S.multiplayer.round, revision: S.multiplayer.revision,
      players: S.multiplayer.players.map(player => ({
        id: player.id, name: player.name, holeStrokes: Math.max(0, Math.floor(finite(player.holeStrokes))),
        totalStrokes: Math.max(0, Math.floor(finite(player.totalStrokes))), finished: !!player.finished,
        ballPosition: copy(player.ballPosition || S.level?.spawn || LEVELS.forest.spawn),
        powerupInventory: copy(player.powerupState?.inventory || defaultPowerupInventory()),
        armedPowerup: player.powerupState?.armedType || null
      })),
      winnerId: S.multiplayer.winnerId, tiedPlayerIds: [...(S.multiplayer.tiedPlayerIds || [])]
    }) };
    window.__powerups = { getState: () => copy(S.powerups) };
    window.__camera = { getState: () => copy(S.camera) };
    window.__leaderboard = { getState: leaderboardState };
    window.__performance = {
      getState: () => {
        let meshCount = 0;
        S.scene?.traverse?.(object => { if (object?.isMesh) meshCount += 1; });
        const particleCount = S.effects.reduce((total, effect) => total + (effect.particles?.length || 0), 0);
        return {
          fixedStep: S.physics.fixedTimeStep, accumulator: S.accumulator,
          simulationTick: S.runtime.simulationTick, renderFrame: S.runtime.renderFrame,
          reactCommitCount: S.runtime.reactCommitCount, logicLoopCount: S.runtime.logicLoopCount,
          listenerCount: 7 + listeners.size, runtimeMountCount: S.runtime.runtimeMountCount,
          runtimeCleanupCount: S.runtime.runtimeCleanupCount, engineGeneration: S.runtime.engineGeneration,
          poolStats: {
            meshes: { capacity: meshCount, createdTotal: meshCount, reused: 0 },
            particles: { capacity: particleCount, createdTotal: particleCount, reused: 0 },
            effects: { capacity: S.effects.length, createdTotal: S.effects.length, reused: 0 }
          }
        };
      }
    };
    const hookNames = ['__contract','__game','__ball','__shot','__course','__multiplayer','__powerups','__camera','__leaderboard','__performance'];
    window.__contract = { getState: () => ({
      version: 'mini-golf-eval-2.1', gameType: '3d-mini-golf', renderer: 'threejs', stateSource: 'live',
      hooksReady: hookNames.filter(name => name !== '__contract').every(name => !!window[name] && typeof window[name].getState === 'function'),
      hookNames: [...hookNames], buildId: 'par-all-local-solid-v9-resolution-sync'
    }) };
  };
  exposeHooks();

  const LevelCard = ({ level }) => jsxs(`button`, {
    className: `level ${level.theme}`,
    "data-testid": `level-${level.id}`,
    onClick: () => startLevel(level.id, false),
    children: [
      jsxs(`div`, { className: `level-meta`, children: [jsx(`small`, { children: `PAR ${level.par}` }), jsx(`span`, { children: level.difficulty })] }),
      jsx(`strong`, { children: level.name }),
      jsx(`p`, { children: level.description }),
      jsxs(`span`, { className: `level-enter`, children: [`进入球场`, jsx(`b`, { children: `→` })] })
    ]
  });

  const ResultPanel = ({ nextLevel, replayCurrentLevel }) => {
    const level = S.level || LEVELS.forest;
    const tournamentDone = S.screen === `tournament_complete`;
    const localResolved = S.multiplayer.enabled && S.multiplayer.status === `complete`;
    const winner = S.multiplayer.players.find(player => player.id === S.multiplayer.winnerId);
    const tied = localResolved && !S.multiplayer.winnerId;
    const completedStrokes = Math.max(1, Math.floor(finite(S.lastCompletedStrokes || S.tournamentScores[level.id] || S.strokes, 1)));
    return jsxs(`div`, { className: `panel result-panel`, children: [
      jsx(`div`, { className: `eyebrow`, children: localResolved ? `LOCAL MATCH COMPLETE` : tournamentDone ? `TOUR COMPLETE` : scoreName(completedStrokes, level.par) }),
      jsx(`h2`, { children: localResolved ? (tied ? `本地对战平局` : `${winner?.name || `玩家`} 获胜`) : tournamentDone ? `巡回赛完成` : `漂亮进洞` }),
      jsx(`div`, { className: `result-score`, "data-testid": `result-score`, "data-score": localResolved ? `` : String(tournamentDone ? S.totalScore : S.currentScore), children: localResolved ? (tied ? `平局` : `胜利`) : tournamentDone ? `${S.totalScore} 分` : `${S.currentScore} 分` }),
      jsxs(`div`, { className: `result-stats`, children: localResolved ? S.multiplayer.players.map(player => jsxs(`div`, { children: [jsx(`small`, { children: player.name }), jsx(`b`, { children: `${player.totalStrokes} 杆` })] }, player.id)) : [
        jsxs(`div`, { children: [jsx(`small`, { children: `本洞` }), jsx(`b`, { children: `${completedStrokes} 杆` })] }),
        jsxs(`div`, { children: [jsx(`small`, { children: `标准杆` }), jsx(`b`, { children: level.par })] }),
        jsxs(`div`, { children: [jsx(`small`, { children: `巡回积分` }), jsx(`b`, { children: `${S.totalScore} 分` })] })
      ] }),
      jsxs(`div`, { className: `actions`, children: localResolved ? [
        jsx(`button`, { className: `btn`, "data-testid": `result-next`, onClick: () => startLocalMatch(S.multiplayer.playerCount || 2), children: `再来一局` }),
        jsx(`button`, { className: `btn secondary`, onClick: exitLocalMatch, children: `返回主菜单` })
      ] : [
        !tournamentDone && jsx(`button`, { className: `btn`, "data-testid": `result-next`, onClick: nextLevel, children: `下一关` }),
        jsx(`button`, { className: `btn secondary`, onClick: replayCurrentLevel, children: `重玩本洞` }),
        jsx(`button`, { className: `btn secondary`, onClick: () => setScreen(`menu`), children: `返回主菜单` })
      ] })
    ] });
  };

  function App() {
    React.useSyncExternalStore(subscribe, snapshot, snapshot);
    React.useLayoutEffect(() => { S.runtime.reactCommitCount += 1; });
    const hostRef = React.useRef(null);
    const [localPlayerCount, setLocalPlayerCount] = React.useState(2);
    React.useLayoutEffect(() => initRenderer(hostRef.current), []);

    const level = S.level || LEVELS.forest;
    const nextLevel = () => {
      const ids = [`forest`, `desert`, `snow`];
      const index = ids.indexOf(level.id);
      if (index >= ids.length - 1) {
        saveOverall();
        S.screen = `tournament_complete`;
        notify();
      } else {
        startLevel(ids[index + 1], true);
      }
    };
    const localStart = () => startLocalMatch(localPlayerCount);
    const localExit = () => exitLocalMatch();
    const replayCurrentLevel = () => {
      if (S.holeComplete && S.level && Number.isFinite(S.tournamentScores[S.level.id])) {
        S.totalStrokes = Math.max(0, S.totalStrokes - S.tournamentScores[S.level.id]);
        S.totalScore = Math.max(0, S.totalScore - finite(S.tournamentPoints[S.level.id]));
        delete S.tournamentScores[S.level.id];
        delete S.tournamentPoints[S.level.id];
      }
      startLevel(level.id, true);
    };
    const leaderboard = leaderboardState();
    const localStandings = [...S.multiplayer.players]
      .sort((left, right) => finite(left.totalStrokes) - finite(right.totalStrokes) || String(left.id).localeCompare(String(right.id)));
    let previousLocalScore = null;
    let previousLocalRank = 0;
    const rankedLocalStandings = localStandings.map((player, index) => {
      const strokes = Math.max(0, Math.floor(finite(player.totalStrokes)));
      const rank = previousLocalScore === strokes ? previousLocalRank : index + 1;
      previousLocalScore = strokes;
      previousLocalRank = rank;
      const tiedAtScore = localStandings.filter(item => Math.max(0, Math.floor(finite(item.totalStrokes))) === strokes).length > 1;
      return { ...player, strokes, rank, tiedAtScore };
    });
    const localMatchResolved = S.multiplayer.enabled && S.multiplayer.status === `complete`;
    const localMatchTied = localMatchResolved && S.multiplayer.tiedPlayerIds.length > 1;
    const localMatchWinner = localMatchResolved
      ? S.multiplayer.players.find(player => player.id === S.multiplayer.winnerId)
      : null;
    const currentSurfaceName = ({ grass: `草地`, sand: `沙坑`, ice: `冰面`, boost: `加速带` })[S.ball.currentSurface] || `球道`;
    const hioCount = inventoryItem(`hole_in_one`)?.count || 0;
    const bounceCount = inventoryItem(`bounce_pad`)?.count || 0;
    const boostCount = inventoryItem(`speed_boost`)?.count || 0;
    const placedItems = S.powerups.items.filter(item => item.placed && item.active && !item.collected);
    const selectedPlaced = placedItems.find(item => item.id === S.powerups.selectedPlacedId) || placedItems.at(-1) || null;
    const powerupLabel = S.powerups.armedType === `hole_in_one`
      ? `一杆入洞已启用 · 再次点击取消`
      : S.powerups.activeEffect === `bounce_pad` ? `反弹垫触发`
      : S.powerups.activeEffect === `speed_boost` ? `加速带触发`
      : `点击放置 · 拖到球场`;

    return jsxs(`div`, { className: `app`, children: [
      jsx(`div`, { id: `gameScreen`, className: S.screen === `playing` ? `` : `hidden`, "aria-hidden": S.screen === `playing` ? `false` : `true`, ref: hostRef }),
      S.renderError && jsx(`div`, { className: `render-alert`, role: `alert`, children: S.renderError }),
      S.toast && jsx(`div`, { className: `toast`, role: `status`, children: S.toast }),
      S.screen === `playing` && jsx(`div`, { className: `field-atmosphere ${level.theme}`, 'aria-hidden': `true` }),
      S.skillFeedback && S.screen === `playing` && jsxs(`div`, { className: `skill-feedback ${S.skillFeedback.type}`, role: `status`, children: [jsx(`b`, { children: S.skillFeedback.type === `speed_boost` ? `⚡` : S.skillFeedback.type === `bounce_pad` ? `↗` : S.skillFeedback.type === `hole_in_one` ? `★` : S.skillFeedback.type === `slowdown` ? `◌` : `✓` }), jsx(`span`, { children: S.skillFeedback.message })] }),

      jsxs(`div`, { className: `hud ${S.ui.compactHud ? `compact` : ``}`, style: { display: S.screen === `playing` && S.ui.showHUD !== false ? `flex` : `none` }, children: [
        jsxs(`div`, { className: `collapsed-module-tabs`, children: [
          S.ui.collapseStats && jsx(`button`, { className: `collapsed-tab collapsed-stats`, title: `展开比赛信息`, onClick: event => { event.stopPropagation(); toggleUi(`collapseStats`); }, children: `⌄ 比赛信息` }),
          S.ui.showField && S.ui.collapseField && jsx(`button`, { className: `collapsed-tab collapsed-field`, title: `展开场地规则`, onClick: event => { event.stopPropagation(); toggleUi(`collapseField`); }, children: `场地规则 ›` }),
          S.ui.collapsePower && jsx(`button`, { className: `collapsed-tab collapsed-power`, title: `展开蓄力面板`, onClick: event => { event.stopPropagation(); toggleUi(`collapsePower`); }, children: `蓄力面板 ›` }),
          S.ui.showSkills && S.ui.collapseSkills && jsx(`button`, { className: `collapsed-tab collapsed-skills`, title: `展开技能面板`, onClick: event => { event.stopPropagation(); toggleUi(`collapseSkills`); }, children: `技能面板 ⌃` })
        ] }),

        S.ui.showField && !S.ui.collapseField && jsxs(`div`, { className: `field-effect-panel ${level.theme} foldable-module`, children: [
          jsx(`button`, { className: `module-fold module-fold-right`, title: `收起场地规则`, onClick: event => { event.stopPropagation(); toggleUi(`collapseField`); }, children: `‹` }),
          jsx(`small`, { children: `当前场地规则` }),
          jsxs(`strong`, { children: [jsx(`i`, { className: `field-dot` }), level.fieldEffect] }),
          jsx(`span`, { className: `field-rule`, children: level.fieldDetail }),
          jsxs(`span`, { className: `field-current`, children: [`当前地面：`, jsx(`b`, { children: currentSurfaceName }), ` · 摩擦系数 μ ${S.ball.friction.toFixed(3)} · 实时速度 ${S.ball.speed.toFixed(1)} m/s`] })
        ] }),

        !S.ui.collapseStats && jsxs(`div`, { className: `topbar foldable-module`, children: [
          jsx(`button`, { className: `module-fold module-fold-bottom`, title: `收起比赛信息`, onClick: event => { event.stopPropagation(); toggleUi(`collapseStats`); }, children: `⌃` }),
          jsxs(`div`, { className: `chip course-chip`, children: [jsx(`span`, { children: level.name }), jsxs(`b`, { "data-testid": `stroke-count`, "data-strokes": String(S.strokes), children: [S.strokes, ` 杆 · PAR `, level.par] })] }),
          jsxs(`div`, { className: `chip`, children: [jsx(`span`, { "data-testid": `current-player`, children: S.multiplayer.enabled ? `${localPlayerById(S.multiplayer.currentPlayerId)?.name || `等待`} 回合` : `单人巡回赛` }), jsxs(`b`, { children: [currentSurfaceName, ` · 摩擦系数 μ `, S.ball.friction.toFixed(3), ` · `, S.ball.speed.toFixed(1), ` m/s`, S.ball.airborne ? ` · 腾空` : ``] })] }),
          jsxs(`div`, { className: `chip total-chip`, children: [jsx(`span`, { children: `巡回累计` }), jsxs(`b`, { children: [S.totalStrokes, ` 杆`] })] })
        ] }),

        jsxs(`div`, { className: `live-physics-telemetry`, role: `status`, children: [
          jsxs(`span`, { "data-testid": `surface-friction`, children: [currentSurfaceName, ` · μ `, S.ball.friction.toFixed(3), ` · `, S.ball.speed.toFixed(1), ` m/s`] }),
          jsx(`span`, { "data-testid": `physics-motion`, children: S.ball.airborne ? `腾空 · 重力下落` : S.ball.moving ? `滚动中 · 物理计算` : `已停稳 · 可击球` }),
          jsx(`span`, { "data-testid": `physics-contact`, children: S.shot.dragging ? `方向与力度实时预览` : S.ball.moving ? `${S.ball.lastCollision ? `${String(S.ball.lastCollision).replace(`obstacle:`, `实体碰撞 · `).replace(`powerup:`, `道具接触 · `).replace(`boundary-`, `边界反弹 · `)} · ` : ``}当前表面 · ${currentSurfaceName}` : `已停稳 · 当前表面 · ${currentSurfaceName}` })
        ] }),

        jsxs(`div`, { className: `bottombar`, children: [
          !S.ui.collapsePower && jsxs(`div`, { className: `chip power-wrap foldable-module`, children: [
            jsx(`button`, { className: `module-fold module-fold-right`, title: `收起蓄力面板`, onClick: event => { event.stopPropagation(); toggleUi(`collapsePower`); }, children: `›` }),
            jsxs(`div`, { className: `power-label`, children: [jsx(`span`, { children: S.shot.canShoot ? `拖动蓄力` : S.ball.airborne ? `小球腾空中` : `等待球停下` }), jsx(`b`, { children: `${Math.round(S.shot.power * 100)}%` })] }),
            jsx(`div`, { className: `power-track`, "data-testid": `shot-power`, children: jsx(`div`, { className: `power-fill`, style: { width: `${S.shot.power * 100}%` } }) }),
            jsx(`span`, { className: `controls`, children: S.camera.mode === `free` ? `自由视角中 · 拖动旋转 · 滚轮缩放 · 固定后保留当前视角` : `按住球场向后拖动 · 松开发射 · 滚轮缩放` })
          ] }),
          S.ui.showSkills && !S.ui.collapseSkills && jsxs(`div`, { className: `chip powerup-dock foldable-module`, "data-testid": `powerup-status`, children: [
            jsx(`button`, { className: `module-fold module-fold-right`, title: `收起技能面板`, onClick: event => { event.stopPropagation(); toggleUi(`collapseSkills`); }, children: `›` }),
            jsxs(`div`, { className: `powerup-dock-heading`, children: [jsx(`span`, { className: `powerup-dock-title`, children: `技能与场地道具` }), jsx(`small`, { children: powerupLabel })] }),
            jsxs(`div`, { className: `powerup-tools`, children: [
              jsxs(`button`, {
                className: `powerup-tool bounce ${S.powerups.placingType === `bounce_pad` ? `dragging` : ``}`,
                disabled: bounceCount <= 0, onPointerDown: event => beginPowerupPlacement(event, `bounce_pad`),
                "aria-label": `放置反弹垫`, title: `放置反弹垫：拖到球场后可调整方向`, children: [jsx(`b`, { children: `↗` }), jsx(`small`, { children: `反弹垫` }), jsx(`i`, { children: bounceCount })]
              }),
              jsxs(`button`, {
                className: `powerup-tool boost ${S.powerups.placingType === `speed_boost` ? `dragging` : ``}`,
                disabled: boostCount <= 0, onPointerDown: event => beginPowerupPlacement(event, `speed_boost`),
                "aria-label": `放置加速带`, title: `放置加速带：拖到球场后可调整方向`, children: [jsx(`b`, { children: `➤` }), jsx(`small`, { children: `加速带` }), jsx(`i`, { children: boostCount })]
              }),
              jsxs(`button`, {
                className: `powerup-tool hio ${S.powerups.armedType === `hole_in_one` ? `armed` : ``}`,
                "data-testid": `powerup-hio`,
                disabled: hioCount <= 0, onClick: event => { event.stopPropagation(); useHoleInOne(); },
                "aria-label": S.powerups.armedType === `hole_in_one` ? `取消一杆入洞` : `使用一杆入洞`,
                title: S.powerups.armedType === `hole_in_one` ? `取消一杆入洞：恢复手动瞄准且不消耗道具` : `使用一杆入洞：下一杆自动瞄准球洞`,
                children: [jsx(`b`, { children: `★` }), jsx(`small`, { children: S.powerups.armedType === `hole_in_one` ? `取消技能` : `一杆入洞` }), jsx(`i`, { children: hioCount })]
              })
            ] }),
            selectedPlaced && jsxs(`div`, { className: `direction-editor`, children: [
              jsx(`label`, { children: `调整道具方向` }),
              jsx(`select`, { value: selectedPlaced.id, onChange: event => selectPlacedPowerup(event.target.value), 'aria-label': `选择已放置道具`, children: placedItems.map((item, index) => jsx(`option`, { value: item.id, children: `${item.type === `speed_boost` ? `加速带` : `反弹垫`} ${index + 1}` }, item.id)) }),
              jsx(`button`, { title: `向左旋转`, onClick: event => { event.stopPropagation(); rotatePlacedPowerup(selectedPlaced.id, -Math.PI / 12); }, children: `↺ 15°` }),
              jsx(`button`, { title: `反向`, onClick: event => { event.stopPropagation(); rotatePlacedPowerup(selectedPlaced.id, Math.PI); }, children: `翻转` }),
              jsx(`button`, { title: `向右旋转`, onClick: event => { event.stopPropagation(); rotatePlacedPowerup(selectedPlaced.id, Math.PI / 12); }, children: `15° ↻` })
            ] })
          ] }),
          S.powerups.placingType && S.powerups.placementScreen && jsx(`div`, {
            className: `powerup-drag-ghost ${S.powerups.placingType}`,
            style: { left: `${S.powerups.placementScreen.x}px`, top: `${S.powerups.placementScreen.y}px` },
            children: S.powerups.placingType === `speed_boost` ? `➤` : `↗`
          }),
          jsxs(`div`, { className: `zoom`, children: [
            jsx(`button`, { "data-testid": `zoom-in`, "aria-label": `放大`, title: `放大视角`, onClick: event => { event.stopPropagation(); zoomCamera(-1); }, children: `+` }),
            jsx(`button`, { "data-testid": `zoom-out`, "aria-label": `缩小`, title: `缩小视角`, onClick: event => { event.stopPropagation(); zoomCamera(1); }, children: `−` }),
            jsx(`button`, { className: `camera-mini ${S.camera.mode === `free` ? `active` : ``}`, "data-testid": `camera-mode`, "aria-label": S.camera.mode === `free` ? `固定视角` : `改变视角`, title: S.camera.mode === `free` ? `固定视角：回到正常游戏与击球模式` : `改变视角：拖动球场自由旋转视角`, onClick: event => { event.stopPropagation(); toggleCameraMode(); }, children: S.camera.mode === `free` ? `固定视角` : `改变视角` }),
            jsx(`button`, { className: `recover-mini`, "data-testid": `reset-position`, "aria-label": `重置球位`, title: `重置球位：回到本洞初始位置并恢复击球`, onClick: event => { event.stopPropagation(); recoverBall(); }, children: `↻` }),
            jsx(`button`, { className: `menu-mini`, "aria-label": `回到菜单`, title: `回到菜单`, onClick: event => { event.stopPropagation(); if (S.multiplayer.enabled) exitLocalMatch(); else setScreen(`menu`); }, children: `☰` })
          ] })
        ] })
      ] }),

      jsx(`div`, { id: `menu`, className: `screen ${S.screen === `menu` ? `` : `hidden`}`, children: jsxs(`div`, { className: `panel hero-panel`, children: [
        jsxs(`div`, { className: `hero-status`, children: [jsx(`span`, { className: `live-dot` }), jsx(`span`, { children: S.ready ? `3D ENGINE ONLINE` : `3D ENGINE STARTING` })] }),
        jsx(`div`, { className: `eyebrow`, children: `REALTIME 3D MINI GOLF` }),
        jsxs(`h1`, { className: `brand`, children: [`PAR`, jsx(`span`, { children: `//` }), `ALL`] }),
        jsx(`p`, { className: `lead`, children: `读懂地表、掌握力度，在森林、沙海与极光冰原完成一场三洞巡回赛。每一杆都由真实物理推动。` }),
        jsxs(`div`, { className: `feature-strip`, children: [
          jsxs(`span`, { children: [jsx(`b`, { children: `3` }), ` 主题球场`] }),
          jsxs(`span`, { children: [jsx(`b`, { children: `3` }), ` 战术道具`] }),
          jsxs(`span`, { children: [jsx(`b`, { children: `120Hz` }), ` 固定物理`] })
        ] }),
        jsxs(`div`, { className: `actions`, children: [
          jsx(`button`, { className: `btn primary-cta`, "data-testid": `start-btn`, onClick: () => setScreen(`level_select`), children: `开始巡回赛` }),
          jsx(`button`, { className: `btn secondary`, "data-testid": `multiplayer-btn`, onClick: () => setScreen(`local_setup`), children: `本地对战` }),
          jsx(`button`, { className: `btn secondary`, "data-testid": `leaderboard-btn`, onClick: () => setScreen(`leaderboard`), children: `本地排行榜` })
        ] })
      ] }) }),

      jsx(`div`, { id: `levelSelect`, className: `screen ${S.screen === `level_select` ? `` : `hidden`}`, children: jsxs(`div`, { className: `panel level-panel`, children: [
        jsx(`div`, { className: `eyebrow`, children: `SELECT A COURSE` }),
        jsx(`h2`, { children: `三座球场，一张总成绩单` }),
        jsx(`p`, { className: `section-copy`, children: `先选择起点。完成一洞后可以直接进入下一主题，巡回累计杆数会持续保留。` }),
        jsx(`div`, { className: `level-grid`, children: Object.values(LEVELS).map(item => jsx(LevelCard, { level: item }, item.id)) }),
        jsx(`div`, { className: `actions`, children: jsx(`button`, { className: `btn secondary`, onClick: () => setScreen(`menu`), children: `返回主菜单` }) })
      ] }) }),

      jsx(`div`, { id: `multiplayerLobby`, className: `screen ${S.screen === `local_setup` ? `` : `hidden`}`, children: jsxs(`div`, { className: `panel lobby-panel`, children: [
        jsx(`div`, { className: `eyebrow`, children: `LOCAL HOT-SEAT MATCH` }),
        jsx(`h2`, { children: `同设备轮流击球` }),
        jsx(`p`, { className: `section-copy`, children: `选择 2–4 名玩家。每位玩家拥有独立球位和杆数，球停稳后自动交给下一位玩家。` }),
        jsxs(`div`, { className: `room`, children: [
          jsx(`label`, { htmlFor: `localPlayerCount`, children: `玩家人数` }),
          jsx(`select`, { id: `localPlayerCount`, "data-testid": `local-player-count`, value: localPlayerCount, onChange: event => setLocalPlayerCount(Number(event.target.value)), children: [2, 3, 4].map(value => jsx(`option`, { value, children: `${value} 人` }, value)) })
        ] }),
        jsxs(`div`, { className: `actions`, children: [
          jsx(`button`, { className: `btn`, "data-testid": `local-start-btn`, onClick: localStart, children: `开始本地比赛` }),
          jsx(`button`, { className: `btn secondary`, "data-testid": `local-exit-btn`, onClick: localExit, children: `返回` })
        ] }),
        jsx(`div`, { className: `players`, children: Array.from({ length: localPlayerCount }, (_, index) => jsxs(`div`, { className: `player`, children: [jsx(`span`, { children: `玩家 ${index + 1}` }), jsx(`b`, { children: `0 杆` })] }, index)) })
      ] }) }),

      jsx(`div`, { id: `leaderboardScreen`, className: `screen ${S.screen === `leaderboard` ? `` : `hidden`}`, children: jsxs(`div`, { className: `panel leaderboard-panel`, children: [
        jsx(`div`, { className: `eyebrow`, children: `LOCAL RECORDS` }),
        jsx(`h2`, { children: `最佳杆数` }),
        jsx(`p`, { className: `section-copy`, children: `每座球场只把更少杆数排在前面；完成三洞巡回赛后，总杆数也会写入本地记录。` }),
        jsxs(`table`, { className: `leaderboard`, children: [
          jsx(`thead`, { children: jsxs(`tr`, { children: [jsx(`th`, { children: `球场` }), jsx(`th`, { children: `PAR` }), jsx(`th`, { children: `最佳` })] }) }),
          jsx(`tbody`, { children: Object.values(LEVELS).map(item => jsxs(`tr`, { children: [
            jsx(`td`, { children: item.name }), jsx(`td`, { children: item.par }), jsx(`td`, { children: leaderboard.levelBest[item.id]?.[0]?.strokes ?? `—` })
          ] }, item.id)) })
        ] }),
        jsxs(`div`, { className: `overall-card`, children: [jsx(`span`, { children: `巡回赛最佳总杆` }), jsx(`b`, { children: leaderboard.overall?.[0]?.totalStrokes ?? `—` })] }),
        jsx(`div`, { className: `actions`, children: jsx(`button`, { className: `btn secondary`, onClick: () => setScreen(`menu`), children: `返回主菜单` }) })
      ] }) }),

      jsx(`div`, { id: `localLeaderboardScreen`, className: `screen ${S.screen === `local_leaderboard` ? `` : `hidden`}`, "aria-hidden": S.screen === `local_leaderboard` ? `false` : `true`, children: jsxs(`div`, { className: `panel leaderboard-panel`, "data-testid": `local-match-leaderboard`, children: [
        jsx(`div`, { className: `eyebrow`, children: `LOCAL MATCH LEADERBOARD` }),
        jsx(`h2`, { children: localMatchTied ? `本地对战平局` : `${localMatchWinner?.name || `玩家`} 获胜` }),
        jsx(`p`, { className: `section-copy`, children: localMatchTied
          ? `最低总杆相同，本局并列。下方列出全部玩家的最终杆数。`
          : `最低总杆玩家获胜。下方列出全部玩家的最终杆数。` }),
        jsxs(`table`, { className: `leaderboard`, children: [
          jsx(`thead`, { children: jsxs(`tr`, { children: [jsx(`th`, { children: `排名` }), jsx(`th`, { children: `玩家` }), jsx(`th`, { children: `总杆数` }), jsx(`th`, { children: `结果` })] }) }),
          jsx(`tbody`, { children: rankedLocalStandings.map(player => jsxs(`tr`, { children: [
            jsx(`td`, { children: player.tiedAtScore ? `并列 ${player.rank}` : player.rank }),
            jsx(`td`, { children: player.name }),
            jsx(`td`, { children: `${player.strokes} 杆` }),
            jsx(`td`, { children: localMatchTied && S.multiplayer.tiedPlayerIds.includes(player.id)
              ? `并列`
              : player.id === S.multiplayer.winnerId ? `胜者` : `完赛` })
          ] }, player.id)) })
        ] }),
        jsxs(`div`, { className: `actions`, children: [
          jsx(`button`, { className: `btn`, "data-testid": `local-result-next`, onClick: () => startLocalMatch(S.multiplayer.playerCount || 2), children: `再来一局` }),
          jsx(`button`, { className: `btn secondary`, "data-testid": `local-result-exit-btn`, onClick: exitLocalMatch, children: `返回主菜单` })
        ] })
      ] }) }),

      jsx(`div`, { id: `resultScreen`, className: `screen ${S.screen === `hole_complete` || S.screen === `tournament_complete` || S.screen === `local_result` ? `` : `hidden`}`, "aria-hidden": S.screen === `hole_complete` || S.screen === `tournament_complete` || S.screen === `local_result` ? `false` : `true`, children: jsx(ResultPanel, { nextLevel, replayCurrentLevel }) })
    ] });
  }

  createRoot(document.getElementById(`game-root`)!).render(jsx(App, {}));
})();

await (async () => {

const surfaceNames={grass:'草地 · 标准摩擦',sand:'沙坑 · 高摩擦',ice:'冰面 · 低摩擦'};
const effectNames={bounce_pad:'反弹垫已触发',speed_boost:'加速带已触发',hole_in_one:'一杆入洞道具就绪'};
let assistDirectionVisible=true;
const directionGlyph=(dx,dz)=>{const a=Math.atan2(-dz,dx);const glyphs=['→','↗','↑','↖','←','↙','↓','↘'];return glyphs[(Math.round(a/(Math.PI/4))+8)%8]};
function mountAssist(){
  if(document.getElementById('playAssist'))return;
  const el=document.createElement('div');el.id='playAssist';el.innerHTML='<svg id="aimVector" data-testid="aim-feedback" aria-hidden="true"><defs><marker id="aimArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path class="aim-head" d="M0,0 L10,5 L0,10 z"/></marker></defs><line class="aim-shadow"/><line class="aim-core" marker-end="url(#aimArrow)"/><g class="aim-dots"><circle class="aim-dot"/><circle class="aim-dot"/><circle class="aim-dot"/><circle class="aim-dot"/><circle class="aim-dot"/></g></svg><div class="assist-card foldable-module"><button class="assist-fold" title="收起球洞方向">›</button><div class="assist-arrow">→</div><div class="assist-copy"><small>Hole finder</small><strong>球洞方向</strong></div><div class="assist-distance">-- m</div></div><button class="assist-tab" title="展开球洞方向">‹ 球洞方向</button><div class="shot-readout"><b>0%</b><span>松开发射<br><em>方向已锁定</em></span></div><div class="surface-pill" data-surface="grass"><i class="surface-dot"></i><span class="surface-name">草地 · 标准摩擦</span><span class="surface-friction">μ 1.200</span><span class="surface-speed">0.0 m/s</span></div><div class="physics-readout"><span class="physics-motion">已停稳</span><span class="physics-contact">等待击球</span></div><div class="play-tip">按住并向后拖动 · 箭头指向出球方向 · 松开发射</div>';document.body.appendChild(el);
  el.querySelector('.assist-fold')?.addEventListener('click',event=>{event.stopPropagation();assistDirectionVisible=false;el.classList.add('hide-direction')});
  el.querySelector('.assist-tab')?.addEventListener('click',event=>{event.stopPropagation();assistDirectionVisible=true;el.classList.remove('hide-direction')});
}
let lastAssistUpdate=0;
function updateAssist(now=performance.now()){
  if(now-lastAssistUpdate<50){requestAnimationFrame(updateAssist);return}lastAssistUpdate=now;
  mountAssist();
  const game=window.__game?.getState?.(),ball=window.__ball?.getState?.(),shot=window.__shot?.getState?.(),course=window.__course?.getState?.(),powerups=window.__powerups?.getState?.();
  const root=document.getElementById('playAssist');if(!root||!game||!ball||!shot||!course){requestAnimationFrame(updateAssist);return}
  root.classList.toggle('playing',game.gameState==='playing');root.classList.toggle('hide-direction',!assistDirectionVisible);
  const hole=course.hole||{x:0,z:0},dx=hole.x-ball.position.x,dz=hole.z-ball.position.z,distance=Math.hypot(dx,dz);
  root.querySelector('.assist-arrow').textContent=directionGlyph(dx,dz);root.querySelector('.assist-distance').textContent=distance.toFixed(1)+' m';
  const surface=ball.currentSurface||'grass',pill=root.querySelector('.surface-pill');pill.dataset.surface=surface;root.querySelector('.surface-name').textContent=(surfaceNames[surface]||surface);const frictionEl=root.querySelector('.surface-friction');if(frictionEl)frictionEl.textContent='摩擦系数 μ '+Number(ball.friction||0).toFixed(3);root.querySelector('.surface-speed').textContent=(ball.speed||0).toFixed(1)+' m/s';const motion=root.querySelector('.physics-motion'),contact=root.querySelector('.physics-contact');if(motion)motion.textContent=ball.airborne?'腾空 / 重力下落':ball.moving?'滚动中 · 物理计算':'已停稳 · 可击球';if(contact){const surfaceLabel=surfaceNames[surface]||surface;const collision=ball.lastCollision?String(ball.lastCollision).replace('obstacle:','实体碰撞 · ').replace('powerup:','道具接触 · ').replace('boundary-','边界反弹 · '):'';contact.textContent=shot.dragging?'方向与力度实时预览':ball.moving?`${collision?collision+' · ':''}当前表面 · ${surfaceLabel}`:`已停稳 · 当前表面 · ${surfaceLabel}`;}
  const svg=root.querySelector('#aimVector'),readout=root.querySelector('.shot-readout'),start=shot.startScreen,current=shot.currentScreen,dragging=!!(shot.dragging&&start&&current);
  svg.classList.toggle('active',dragging);readout.classList.toggle('active',dragging);
  if(dragging){
    let vx=start.x-current.x,vy=start.y-current.y,len=Math.hypot(vx,vy)||1,draw=Math.min(230,56+len*.78);
    let bx=start.x,by=start.y;
    let ex=bx+vx/len*draw,ey=by+vy/len*draw;
    const lines=svg.querySelectorAll('line');for(const line of lines){line.setAttribute('x1',bx);line.setAttribute('y1',by);line.setAttribute('x2',ex);line.setAttribute('y2',ey)}
    const dots=svg.querySelectorAll('.aim-dot');dots.forEach((dot,index)=>{const i=index+1,t=i/6;dot.setAttribute('cx',bx+(ex-bx)*t);dot.setAttribute('cy',by+(ey-by)*t);dot.setAttribute('r',String(2+i*.35))})
    readout.querySelector('b').textContent=Math.round((shot.power||0)*100)+'%';const effect=powerups?.activeEffect;readout.querySelector('em').textContent=effectNames[effect]||((shot.power||0)>.82?'强力击球':(shot.power||0)>.42?'稳定击球':'轻推球');
  }
  requestAnimationFrame(updateAssist);
}
document.readyState==='loading'?window.addEventListener('DOMContentLoaded',()=>requestAnimationFrame(updateAssist),{once:true}):requestAnimationFrame(updateAssist);

})();




export {};
