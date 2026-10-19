// @ts-nocheck
import * as THREE_NS from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

(() => {
  'use strict';

  const T = Object.assign({}, THREE_NS, { OrbitControls });
  const fatal = (message) => {
    const box = document.getElementById('fatalError');
    const text = document.getElementById('fatalMessage');
    if (text) text.textContent = message;
    if (box) box.classList.remove('hidden');
  };
  if (!T || !T.OrbitControls) {
    fatal('Three.js / OrbitControls module initialization failed. Inspect the Vite dependency build and reload the application.');
    return;
  }

  const q = (s) => document.querySelector(s);
  const dom = {
    mainMenu: document.getElementById('mainMenu'), play: q('[data-testid="play-btn"]'),
    scenario: document.getElementById('scenarioSelect'), solar: q('[data-testid="solar-system-btn"]'), custom: q('[data-testid="custom-sandbox-btn"]'), back: document.getElementById('scenarioBack'),
    game: document.getElementById('gameScreen'), canvasHost: document.getElementById('canvasHost'), toolbar: document.getElementById('sandboxToolbar'),
    spawnPlanet: q('[data-testid="spawn-object-btn"]'), preset: q('[data-testid="spawn-object-select"]'), spawnStar: q('[data-testid="spawn-star-btn"]'), settingsBtn: q('[data-testid="object-settings-btn"]'), menu: q('[data-testid="menu-btn"]'),
    panel: document.getElementById('objectSettingsPanel'), selectedName: q('[data-testid="selected-object-name"]'), close: q('[data-testid="object-settings-close"]'),
    temp: q('[data-testid="temperature-slider"]'), rotation: q('[data-testid="rotation-speed-slider"]'), orbital: q('[data-testid="orbital-velocity-slider"]'),
    tempValue: document.getElementById('temperatureValue'), rotationValue: document.getElementById('rotationValue'), orbitalValue: document.getElementById('orbitalValue'), orbitalNote: document.getElementById('orbitalNote'),
    typeBadge: document.getElementById('typeBadge'), orbitBadge: document.getElementById('orbitBadge'), scenarioLabel: document.getElementById('scenarioLabel'), bodyCount: document.getElementById('bodyCountLabel'), simTime: document.getElementById('simTimeLabel'), settingsSub: document.getElementById('settingsSub'),
    placementHint: document.getElementById('placementHint'), placementHintText: document.getElementById('placementHintText')
  };

  let scene, camera, renderer, controls, worldGroup, guideGroup, helperGroup, selectionRing, placementCursor;
  const raycaster = new T.Raycaster();
  const pointer = new T.Vector2();
  const plane = new T.Plane(new T.Vector3(0, 1, 0), 0);
  const bodies = [];
  const selectableMeshes = [];
  let bodySerial = 0, proceduralSerial = 0, starSerial = 0;
  let settingsOpen = false;
  let pointerDown = false, pointerStartX = 0, pointerStartY = 0, pointerTravel = 0;
  let animationFrameId = 0, runtimeDisposed = false;

  const app = { ready:false, gameState:'menu', scenario:null, elapsedTime:0, spawnMode:'idle', selectedObjectId:null };
  const sim = { gravityEnabled:true, gravitationalConstant:0.75, simulationTime:0, physicsStepCount:0, orbitModel:'analytic' };
  const spawner = { mode:'idle', selectedPreset:'earth', pendingPlacement:false, cursorIntersection:null, lastPlacement:null, lastSpawnedBodyId:null, placementCount:0 };
  const perf = { animationRunning:true, frameCount:0, averageFps:0, lastFrameDeltaMs:0, samples:[] };
  let startTime = performance.now(), lastFrame = startTime;
  const FIXED_STEP = 1 / 120, MAX_FRAME_DELTA = 0.08, MAX_PHYSICS_STEPS = 10;
  let physicsAccumulator = 0;

  const finite = (n, f=0) => Number.isFinite(n) ? n : f;
  const round = (n,d=6) => { const p=10**d; return finite(Math.round(n*p)/p,0); };
  const vec = (v) => ({x:round(v.x),y:round(v.y),z:round(v.z)});
  const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
  const hex = (c) => `#${c.getHexString().toUpperCase()}`;

  function hashSeed(input){let h=2166136261;for(const ch of String(input)){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
  function rng32(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

  function disposeMaterial(mat){for(const m of (Array.isArray(mat)?mat:[mat])){if(!m)continue;for(const k of Object.keys(m)){const v=m[k];if(v&&v.isTexture&&v.dispose)v.dispose()}if(m.dispose)m.dispose()}}
  function disposeObject(root){root.traverse(o=>{if(o.geometry&&o.geometry.dispose)o.geometry.dispose();if(o.material)disposeMaterial(o.material)})}

  function canvasTexture(kind){
    const c=document.createElement('canvas');c.width=512;c.height=256;const x=c.getContext('2d');const r=rng32(hashSeed(kind));
    if(kind==='earth'){
      const g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'#153665');g.addColorStop(.52,'#257ecb');g.addColorStop(1,'#08284e');x.fillStyle=g;x.fillRect(0,0,512,256);
      for(let i=0;i<52;i++){x.fillStyle=r()>.28?`rgba(${35+r()*40|0},${105+r()*70|0},${55+r()*50|0},.82)`:'rgba(181,153,92,.55)';x.beginPath();x.ellipse(r()*512,28+r()*200,10+r()*36,4+r()*17,r()*Math.PI,0,Math.PI*2);x.fill()}
      x.fillStyle='rgba(245,250,255,.9)';x.fillRect(0,0,512,11);x.fillRect(0,245,512,11);
      for(let i=0;i<24;i++){x.fillStyle=`rgba(255,255,255,${.05+r()*.12})`;x.beginPath();x.ellipse(r()*512,r()*256,20+r()*48,2+r()*5,0,0,Math.PI*2);x.fill()}
    } else if(kind==='mars'){
      const g=x.createLinearGradient(0,0,512,256);g.addColorStop(0,'#76291e');g.addColorStop(.48,'#cf6338');g.addColorStop(1,'#743025');x.fillStyle=g;x.fillRect(0,0,512,256);
      for(let i=0;i<120;i++){x.fillStyle=`rgba(53,19,15,${.04+r()*.18})`;x.beginPath();x.arc(r()*512,r()*256,2+r()*12,0,Math.PI*2);x.fill()}
      x.fillStyle='rgba(238,193,164,.36)';x.fillRect(0,0,512,7);
    } else if(kind==='jupiter'){
      const colors=['#c79b70','#ead0aa','#9d704d','#efd8b7','#b7835d','#dcb990'];let y=0;while(y<256){const h=12+r()*24;x.fillStyle=colors[Math.floor(r()*colors.length)];x.fillRect(0,y,512,h);y+=h}x.fillStyle='#a95d45';x.beginPath();x.ellipse(358,165,42,17,-.05,0,Math.PI*2);x.fill();
    } else {
      const g=x.createLinearGradient(0,0,512,256);g.addColorStop(0,'#ff8622');g.addColorStop(.5,'#ffd15a');g.addColorStop(1,'#ff7a19');x.fillStyle=g;x.fillRect(0,0,512,256);for(let i=0;i<180;i++){x.fillStyle=`rgba(255,248,185,${.02+r()*.13})`;x.beginPath();x.arc(r()*512,r()*256,2+r()*11,0,Math.PI*2);x.fill()}
    }
    const t=new T.CanvasTexture(c);t.wrapS=T.RepeatWrapping;t.wrapT=T.ClampToEdgeWrapping;t.needsUpdate=true;if('encoding'in t&&T.sRGBEncoding)t.encoding=T.sRGBEncoding;return t;
  }

  function glowTexture(){const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');const g=x.createRadialGradient(64,64,3,64,64,62);g.addColorStop(0,'rgba(255,248,205,1)');g.addColorStop(.22,'rgba(255,190,87,.88)');g.addColorStop(.56,'rgba(255,116,42,.28)');g.addColorStop(1,'rgba(255,78,25,0)');x.fillStyle=g;x.fillRect(0,0,128,128);return new T.CanvasTexture(c)}

  function createScene(){
    scene=new T.Scene();scene.background=new T.Color(0x070604);scene.fog=new T.FogExp2(0x070604,.0042);
    camera=new T.PerspectiveCamera(52,Math.max(1,innerWidth/innerHeight),.1,1000);camera.position.set(0,28,58);
    renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));renderer.setSize(innerWidth,innerHeight,false);renderer.setClearColor(0x070604,1);if('outputEncoding'in renderer&&T.sRGBEncoding)renderer.outputEncoding=T.sRGBEncoding;renderer.domElement.dataset.testid='space-canvas';renderer.domElement.setAttribute('aria-label','3D celestial sandbox');renderer.domElement.tabIndex=0;dom.canvasHost.appendChild(renderer.domElement);
    controls=new T.OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.065;controls.rotateSpeed=.55;controls.zoomSpeed=.8;controls.panSpeed=.75;controls.minDistance=8;controls.maxDistance=220;controls.target.set(0,0,0);controls.update();controls.enabled=false;
    scene.add(new T.HemisphereLight(0x7b9cff,0x15111e,.34),new T.AmbientLight(0x59647f,.27));
    worldGroup=new T.Group();worldGroup.name='PhysicalWorld';guideGroup=new T.Group();guideGroup.name='OrbitGuides';helperGroup=new T.Group();helperGroup.name='SandboxHelpers';scene.add(worldGroup,guideGroup,helperGroup);
    const bgG=new T.BufferGeometry(),n=2600,p=new Float32Array(n*3),r=rng32(90210);for(let i=0;i<n;i++){const R=150+r()*300,a=r()*Math.PI*2,ph=Math.acos(2*r()-1);p[i*3]=R*Math.sin(ph)*Math.cos(a);p[i*3+1]=R*Math.cos(ph);p[i*3+2]=R*Math.sin(ph)*Math.sin(a)}bgG.setAttribute('position',new T.BufferAttribute(p,3));const pts=new T.Points(bgG,new T.PointsMaterial({color:0xffc78a,size:.48,sizeAttenuation:true,transparent:true,opacity:.74,depthWrite:false}));pts.name='DecorativeStarfield';scene.add(pts);
    selectionRing=new T.Mesh(new T.TorusGeometry(1,.028,8,96),new T.MeshBasicMaterial({color:0xffb75e,transparent:true,opacity:.82,depthWrite:false}));selectionRing.rotation.x=Math.PI/2;selectionRing.visible=false;selectionRing.renderOrder=20;helperGroup.add(selectionRing);
    placementCursor=new T.Mesh(new T.RingGeometry(.55,.72,48),new T.MeshBasicMaterial({color:0xffb24d,transparent:true,opacity:.72,side:T.DoubleSide,depthWrite:false}));placementCursor.rotation.x=-Math.PI/2;placementCursor.position.y=.035;placementCursor.visible=false;placementCursor.renderOrder=20;helperGroup.add(placementCursor);
  }

  function createGrid(){const g=new T.GridHelper(120,48,0x375a9e,0x172848);g.material.transparent=true;g.material.opacity=.19;g.material.depthWrite=false;g.name='PlacementGrid';helperGroup.add(g)}
  function resetCamera(){camera.position.set(0,28,58);controls.target.set(0,0,0);controls.update()}
  function findBody(id){return bodies.find(b=>b.id===id)||null}
  function nearestStar(pos,max=90){let best=null,dist=Infinity;for(const b of bodies){if(b.bodyType!=='star')continue;const d=b.position.distanceTo(pos);if(d<dist&&d<=max){best=b;dist=d}}return best?{star:best,distance:dist}:null}

  function createBodyVisual({preset,radius,color,isStar,procedural}){
    const root=new T.Group();let geometry,reliefTechnique='none',reliefStrength=0,variance=0;
    if(procedural){
      geometry=new T.IcosahedronGeometry(radius,4);const a=geometry.attributes.position,rs=[],seed=hashSeed(procedural.seed);for(let i=0;i<a.count;i++){const X=a.getX(i),Y=a.getY(i),Z=a.getZ(i),L=Math.hypot(X,Y,Z)||1,nx=X/L,ny=Y/L,nz=Z/L;const noise=(Math.sin(nx*13.7+seed*.00011)+Math.sin(ny*17.3+seed*.00017)+Math.sin(nz*19.1+seed*.00023)+Math.sin((nx+ny+nz)*29.7+seed*.00007))/4;const rr=radius*(1+noise*procedural.displacementStrength);rs.push(rr);a.setXYZ(i,nx*rr,ny*rr,nz*rr)}a.needsUpdate=true;geometry.computeVertexNormals();const mean=rs.reduce((x,y)=>x+y,0)/rs.length;variance=rs.reduce((x,y)=>x+(y-mean)**2,0)/rs.length;reliefTechnique='geometry_displacement';reliefStrength=procedural.displacementStrength;
    }else geometry=new T.SphereGeometry(radius,radius>3?64:48,radius>3?32:24);
    const cfg={color:new T.Color(color),roughness:procedural?procedural.roughness:.72,metalness:.03};let textureKey=null;if(['earth','mars','jupiter','sun'].includes(preset)){cfg.map=canvasTexture(preset);textureKey=`${preset}_procedural_canvas`}if(isStar){cfg.roughness=.42}
    const core=new T.Mesh(geometry,new T.MeshStandardMaterial(cfg));root.add(core);
    if(isStar){core.name='StarCore'}
    return{root,core,textureKey,reliefTechnique,reliefStrength,variance};
  }

  function orbitGuide(body){if(!body.orbiting||!body.parentStarId)return;const parent=findBody(body.parentStarId);if(!parent)return;const pts=[];for(let i=0;i<160;i++){const a=i/160*Math.PI*2;pts.push(new T.Vector3(Math.cos(a)*body.orbitRadius,0,Math.sin(a)*body.orbitRadius))}const line=new T.LineLoop(new T.BufferGeometry().setFromPoints(pts),new T.LineBasicMaterial({color:0x4b6fb4,transparent:true,opacity:.18,depthWrite:false}));line.position.copy(parent.position);line.name=`OrbitGuide:${body.id}`;guideGroup.add(line);body.orbitGuide=line}

  function addBody(o){
    const id='body-static',isStar=o.bodyType==='star',v=createBodyVisual({preset:o.preset,radius:o.radius,color:o.color,isStar,procedural:o.procedural});v.root.name=`${o.name}Root`;v.root.position.copy(o.position);v.root.userData.isPhysicalBodyRoot=true;v.root.userData.bodyId=id;v.core.name=`${o.name}Mesh`;v.core.userData.bodyId=id;v.core.userData.isSelectableBodyMesh=true;
    const parent=o.parentStarId?findBody(o.parentStarId):null,orbitRadius=parent?o.position.distanceTo(parent.position):0,rel=parent?o.position.clone().sub(parent.position):new T.Vector3(),angle=parent?(o.initialAngle??Math.atan2(rel.z,rel.x)):0,orbitalVelocity=parent?Math.max(0,o.orbitalVelocity||0):0;
    const b={id,name:o.name,bodyType:o.bodyType,preset:o.preset,position:o.position.clone(),velocity:new T.Vector3(),acceleration:new T.Vector3(),mass:o.mass,radius:o.radius,averageTemperature:o.averageTemperature,rotationSpeed:o.rotationSpeed,orbitalVelocity,parentStarId:parent?parent.id:null,orbiting:!!parent,orbitRadius,orbitAngle:angle,orbitAngularSpeed:parent&&orbitRadius>.001?orbitalVelocity/orbitRadius:0,root:v.root,coreMesh:v.core,orbitGuide:null,color:new T.Color(o.color),textureKey:v.textureKey,reliefTechnique:v.reliefTechnique,reliefStrength:v.reliefStrength,glowMechanisms:isStar?['emissive_material','halo_mesh','glow_sprite','point_light']:[],procedural:o.procedural?{seed:o.procedural.seed,scale:o.procedural.scale,color:hex(new T.Color(o.procedural.color)),displacementStrength:o.procedural.displacementStrength,roughness:o.procedural.roughness,vertexRadiusVariance:v.variance}:null};
    if(b.orbiting){const p=findBody(b.parentStarId),rad=b.position.clone().sub(p.position).normalize(),a=b.orbitalVelocity*b.orbitalVelocity/Math.max(b.orbitRadius,.001);b.velocity.set(-rad.z*b.orbitalVelocity,0,rad.x*b.orbitalVelocity);b.acceleration.copy(rad).multiplyScalar(-a)}
    bodies.push(b);selectableMeshes.push(v.core);worldGroup.add(v.root);orbitGuide(b);return b;
  }

  function buildSolar(){const sun=addBody({name:'Sun',bodyType:'star',preset:'sun',position:new T.Vector3(),mass:150,radius:4.3,averageTemperature:5778,rotationSpeed:.05,color:'#FFB340'});const add=(name,preset,radius,distance,mass,temp,spin,phase,color)=>{const vel=Math.sqrt(sim.gravitationalConstant*sun.mass/distance);return addBody({name,bodyType:'planet',preset,position:new T.Vector3(Math.cos(phase)*distance,0,Math.sin(phase)*distance),mass,radius,averageTemperature:temp,rotationSpeed:spin,orbitalVelocity:vel,parentStarId:sun.id,color,initialAngle:phase})};add('Earth','earth',1.25,13,1,288,.52,.45,'#2F78FF');add('Mars','mars',.93,20,.7,210,.44,2.2,'#CF5F3B');add('Jupiter','jupiter',2.35,31,3.2,165,.82,4.15,'#D6AA76')}

  function spawnPlanetAt(pos,preset){let name,radius,mass,temp,spin,color,procedural=null;if(preset==='earth'){name='Earth';radius=1.25;mass=1;temp=288;spin=.52;color='#2F78FF'}else if(preset==='mars'){name='Mars';radius=.93;mass=.7;temp=210;spin=.44;color='#CF5F3B'}else{const seed='fixed-world',scale=1,ds=0,rough=.72;name=`Procedural Planet ${++proceduralSerial}`;radius=1.2;mass=2.1;temp=288;spin=.4;color='#888888';procedural={seed,scale,color,displacementStrength:ds,roughness:rough}}const nearest=null,near=nearest,parent=null,vel=0;const placedPosition=(preset==='earth'||preset==='mars')?new T.Vector3(0,0,0):pos;return addBody({name,bodyType:'planet',preset,position:placedPosition,mass,radius,averageTemperature:temp,rotationSpeed:spin,orbitalVelocity:vel,parentStarId:parent?parent.star.id:null,color,procedural})}
  function spawnStarAt(pos){const n=++starSerial;return addBody({name:`Star ${n}`,bodyType:'star',preset:'custom_star',position:pos,mass:2,radius:1.05,averageTemperature:900,rotationSpeed:.08,color:'#888888'})}

  function clearWorld(){physicsAccumulator=0;for(const c of [...worldGroup.children]){worldGroup.remove(c);disposeObject(c)}for(const c of [...guideGroup.children]){guideGroup.remove(c);disposeObject(c)}for(const c of [...helperGroup.children]){if(c===selectionRing||c===placementCursor)continue;helperGroup.remove(c);disposeObject(c)}bodies.length=0;selectableMeshes.length=0;sim.simulationTime=0;sim.physicsStepCount=0;spawner.cursorIntersection=null;spawner.lastPlacement=null;spawner.lastSpawnedBodyId=null;spawner.placementCount=0;setSelection(null);closeSettings();setSpawnMode('idle')}

  function setSpawnMode(mode){app.spawnMode=mode;spawner.mode=mode;spawner.pendingPlacement=mode!=='idle';spawner.selectedPreset=mode==='star'?null:dom.preset.value;dom.spawnPlanet.classList.toggle('active',mode==='planet');dom.spawnStar.classList.toggle('active',mode==='star');dom.placementHint.classList.toggle('hidden',mode==='idle');renderer.domElement.classList.toggle('spawn-mode',mode!=='idle');placementCursor.visible=mode!=='idle'&&!!spawner.cursorIntersection;if(mode==='planet')dom.placementHintText.textContent=`Place ${dom.preset.value==='procedural'?'Procedural Planet':dom.preset.value[0].toUpperCase()+dom.preset.value.slice(1)} on the orbital plane`;if(mode==='star')dom.placementHintText.textContent='Place a star on the orbital plane'}
  function selected(){return findBody(app.selectedObjectId)}
  function setSelection(id){const b=id?findBody(id):null;app.selectedObjectId=b?b.id:null;if(!b){selectionRing.visible=false;dom.settingsBtn.disabled=true;dom.settingsSub.textContent='Select a body';dom.selectedName.textContent='No object selected';dom.typeBadge.textContent='NO TARGET';dom.orbitBadge.textContent='UNBOUND';if(settingsOpen)closeSettings();return}selectionRing.visible=true;dom.settingsBtn.disabled=false;dom.settingsSub.textContent=b.name;syncSettings(b);updateSelectionRing()}
  function syncSettings(b){dom.selectedName.textContent=b.name;dom.temp.value=String(clamp(b.averageTemperature,+dom.temp.min,+dom.temp.max));dom.rotation.value=String(clamp(b.rotationSpeed,+dom.rotation.min,+dom.rotation.max));dom.orbital.value=String(clamp(b.orbitalVelocity,+dom.orbital.min,+dom.orbital.max));dom.tempValue.textContent=`${Math.round(b.averageTemperature)} K`;dom.rotationValue.textContent=`${b.rotationSpeed.toFixed(2)} rad/s`;dom.orbitalValue.textContent=`${b.orbitalVelocity.toFixed(2)} u/s`;dom.typeBadge.textContent=b.bodyType.toUpperCase();dom.orbitBadge.textContent=b.orbiting?'ORBITING':'UNBOUND';dom.orbital.disabled=!b.orbiting;dom.orbitalNote.textContent=b.orbiting?'Changes the real tangential speed of this orbit.':'Orbital velocity is available only while the planet is bound to a star.'}
  function openSettings(){const b=selected();if(!b)return;settingsOpen=true;dom.panel.classList.add('open');dom.panel.setAttribute('aria-hidden','false');syncSettings(b)}
  function closeSettings(){settingsOpen=false;dom.panel.classList.remove('open');dom.panel.setAttribute('aria-hidden','true')}
  function updateSelectionRing(){const b=selected();if(!b){selectionRing.visible=false;return}selectionRing.visible=true;selectionRing.position.copy(b.position);selectionRing.position.y+=b.radius*.08;selectionRing.scale.setScalar(b.radius*1.32);selectionRing.rotation.z+=.005}

  function showMenu(){app.gameState='menu';app.scenario=null;dom.mainMenu.classList.remove('hidden');dom.scenario.classList.add('hidden');dom.game.classList.add('hidden');dom.scenario.setAttribute('aria-hidden','true');dom.game.setAttribute('aria-hidden','true');resetCamera()}
  function showScenarios(){clearWorld();app.gameState='scenario_select';app.scenario=null;dom.mainMenu.classList.add('hidden');dom.scenario.classList.remove('hidden');dom.game.classList.add('hidden');dom.scenario.setAttribute('aria-hidden','false');dom.game.setAttribute('aria-hidden','true')}
  function startScenario(kind){dom.settingsBtn.addEventListener('click',openSettings);clearWorld();app.gameState='playing';app.scenario=kind;dom.mainMenu.classList.add('hidden');dom.scenario.classList.add('hidden');dom.game.classList.remove('hidden');dom.game.setAttribute('aria-hidden','false');resetCamera();if(kind==='solar_system'){buildSolar();dom.scenarioLabel.textContent='SOLAR SYSTEM';camera.position.set(0,31,58)}else{createGrid();dom.scenarioLabel.textContent='CUSTOM SANDBOX';camera.position.set(0,30,52)}controls.target.set(0,0,0);controls.update();resize();updateHud()}
  function updateHud(){dom.bodyCount.textContent=String(bodies.length);dom.simTime.textContent=`${sim.simulationTime.toFixed(1)}s`}

  function pointerFromEvent(e){const r=renderer.domElement.getBoundingClientRect();if(r.width<=0||r.height<=0)return false;pointer.x=((e.clientX-r.left)/r.width)*2-1;pointer.y=-((e.clientY-r.top)/r.height)*2+1;return true}
  function planeIntersection(e){if(!pointerFromEvent(e))return null;raycaster.setFromCamera(pointer,camera);const p=new T.Vector3();return raycaster.ray.intersectPlane(plane,p)&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&Number.isFinite(p.z)?p:null}
  function onMove(e){if(pointerDown)pointerTravel=Math.max(pointerTravel,Math.hypot(e.clientX-pointerStartX,e.clientY-pointerStartY));if(app.gameState!=='playing'||app.spawnMode==='idle')return;const p=planeIntersection(e);spawner.cursorIntersection=p?vec(p):null;placementCursor.visible=!!p;if(p)placementCursor.position.set(p.x,.035,p.z)}
  function onCanvasClick(e){if(app.gameState!=='playing'||pointerTravel>6)return;if(app.spawnMode!=='idle'){const p=planeIntersection(e);if(!p)return;const b=app.spawnMode==='planet'?spawnPlanetAt(p.clone(),dom.preset.value):spawnStarAt(p.clone());spawner.lastPlacement=vec(p);spawner.cursorIntersection=vec(p);spawner.lastSpawnedBodyId=b.id;spawner.placementCount++;setSelection(b.id);updateHud();return}if(!pointerFromEvent(e))return;raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(selectableMeshes,false);setSelection(hits.length?hits[0].object.userData.bodyId:null)}

  function updateOrbit(b,dt){if(!b.orbiting||!b.parentStarId){b.velocity.set(0,0,0);b.acceleration.set(0,0,0);return}const p=findBody(b.parentStarId);if(!p){b.orbiting=false;b.parentStarId=null;b.orbitalVelocity=0;b.velocity.set(0,0,0);b.acceleration.set(0,0,0);return}const r=Math.max(b.orbitRadius,p.radius*2.2,.001);b.orbitRadius=r;b.orbitAngularSpeed=b.orbitalVelocity/r;b.orbitAngle+=b.orbitAngularSpeed*dt;const c=Math.cos(b.orbitAngle),s=Math.sin(b.orbitAngle);b.position.set(p.position.x+c*r,p.position.y,p.position.z+s*r);b.velocity.set(-s*b.orbitalVelocity,0,c*b.orbitalVelocity);const ac=b.orbitalVelocity*b.orbitalVelocity/r;b.acceleration.set(-c*ac,0,-s*ac);if(b.orbitGuide)b.orbitGuide.position.copy(p.position)}
  function updateSim(dt){if(app.gameState!=='playing')return;sim.simulationTime+=dt;sim.physicsStepCount++;for(const b of bodies){updateOrbit(b,dt);b.root.position.copy(b.position);}}
  function updatePerf(now,delta){perf.frameCount++;perf.lastFrameDeltaMs=finite(delta,0);if(delta>0&&delta<1000){perf.samples.push(1000/delta);if(perf.samples.length>90)perf.samples.shift();perf.averageFps=perf.samples.reduce((a,b)=>a+b,0)/perf.samples.length}app.elapsedTime=Math.max(0,(now-startTime)/1000)}
  function frame(now){if(runtimeDisposed)return;animationFrameId=requestAnimationFrame(frame);const raw=Math.max(0,now-lastFrame)||16.67;lastFrame=now;const frameDt=Math.min(raw/1000,MAX_FRAME_DELTA);updatePerf(now,raw);physicsAccumulator=Math.min(physicsAccumulator+frameDt,FIXED_STEP*MAX_PHYSICS_STEPS);let steps=0;while(physicsAccumulator>=FIXED_STEP&&steps<MAX_PHYSICS_STEPS){updateSim(FIXED_STEP);physicsAccumulator-=FIXED_STEP;steps++}controls.update();updateSelectionRing();updateHud();renderer.render(scene,camera)}

  function matTypes(root){const s=new Set();root.traverse(o=>{if(o.material)for(const m of(Array.isArray(o.material)?o.material:[o.material]))if(m&&m.type)s.add(m.type)});return[...s]}
  function maxEmissive(root){let max=0;root.traverse(o=>{if(o.material)for(const m of(Array.isArray(o.material)?o.material:[o.material]))if(m&&m.emissive&&m.emissive.isColor)max=Math.max(max,finite(m.emissiveIntensity,1))});return max}
  function hasTex(root){let yes=false;root.traverse(o=>{if(o.material)for(const m of(Array.isArray(o.material)?o.material:[o.material]))if(m&&(m.map||m.bumpMap||m.displacementMap||m.normalMap))yes=true});return yes}
  function hasLight(root){let yes=false;root.traverse(o=>{if(o.isLight)yes=true});return yes}
  function bodyState(b){b.root.updateMatrixWorld(true);b.coreMesh.updateMatrixWorld(true);const wp=new T.Vector3(),ws=new T.Vector3();b.root.getWorldPosition(wp);b.root.getWorldScale(ws);const parent=b.parentStarId?findBody(b.parentStarId):null,g=b.coreMesh.geometry,a=g&&g.attributes?g.attributes.position:null;return{id:b.id,name:b.name,bodyType:b.bodyType,preset:b.preset,position:vec(b.position),velocity:vec(b.velocity),acceleration:vec(b.acceleration),rotation:{x:round(b.coreMesh.rotation.x),y:round(b.coreMesh.rotation.y),z:round(b.coreMesh.rotation.z)},mass:round(b.mass),radius:round(b.radius),averageTemperature:round(b.averageTemperature),rotationSpeed:round(b.rotationSpeed),orbitalVelocity:round(b.orbitalVelocity),parentStarId:b.parentStarId,distanceToParent:parent?round(b.position.distanceTo(parent.position)):null,orbiting:!!b.orbiting,meshVisible:!!(b.root.visible&&b.coreMesh.visible),appearance:{color:hex(b.color),textureKey:b.textureKey,hasTexture:hasTex(b.root),materialTypes:matTypes(b.root),emissiveIntensity:round(maxEmissive(b.root)),reliefTechnique:b.reliefTechnique,reliefStrength:round(b.reliefStrength),glowMechanisms:[...b.glowMechanisms],hasLightSource:hasLight(b.root)},mesh:{uuid:b.root.uuid,objectType:b.root.type||'Object3D',geometryType:g?g.type:null,vertexCount:a?a.count:0,worldPosition:vec(wp),worldScale:vec(ws)},procedural:b.procedural?{seed:b.procedural.seed,scale:round(b.procedural.scale),color:b.procedural.color,displacementStrength:round(b.procedural.displacementStrength),roughness:round(b.procedural.roughness),vertexRadiusVariance:round(b.procedural.vertexRadiusVariance)}:null}}

  function expose(){
    Object.defineProperty(window,'__game',{value:Object.freeze({getState:()=>{const c=renderer.domElement;return{ready:!!app.ready,gameState:app.gameState,scenario:app.scenario,elapsedTime:round(app.elapsedTime),toolbarVisible:app.gameState==='playing'&&!dom.toolbar.classList.contains('hidden'),spawnMode:app.spawnMode,selectedObjectId:app.selectedObjectId,bodyCount:bodies.length,planetCount:bodies.filter(b=>b.bodyType==='planet').length,starCount:bodies.filter(b=>b.bodyType==='star').length,canvas:{width:c.width,height:c.height,clientWidth:c.clientWidth,clientHeight:c.clientHeight},performance:{animationRunning:perf.animationRunning,frameCount:perf.frameCount,averageFps:round(perf.averageFps,2),lastFrameDeltaMs:round(perf.lastFrameDeltaMs,3)}}}}),writable:false,configurable:false});
    Object.defineProperty(window,'__universe',{value:Object.freeze({getState:()=>({gravityEnabled:sim.gravityEnabled,gravitationalConstant:sim.gravitationalConstant,simulationTime:round(sim.simulationTime),physicsStepCount:sim.physicsStepCount,orbitModel:sim.orbitModel,bodies:bodies.map(bodyState)})}),writable:false,configurable:false});
    Object.defineProperty(window,'__spawner',{value:Object.freeze({getState:()=>({mode:spawner.mode,selectedPreset:spawner.mode==='star'?null:(spawner.selectedPreset||dom.preset.value),pendingPlacement:spawner.pendingPlacement,placementPlane:{normal:{x:0,y:1,z:0},constant:0},cursorIntersection:spawner.cursorIntersection?{...spawner.cursorIntersection}:null,lastPlacement:spawner.lastPlacement?{...spawner.lastPlacement}:null,lastSpawnedBodyId:spawner.lastSpawnedBodyId,placementCount:spawner.placementCount})}),writable:false,configurable:false});
    Object.defineProperty(window,'__selection',{value:Object.freeze({getState:()=>{const b=selected();return{selectedObjectId:b?b.id:null,selectedObjectType:b?b.bodyType:null,settingsOpen}}}),writable:false,configurable:false});
    Object.defineProperty(window,'__settings',{value:Object.freeze({getState:()=>{const b=selected();return{panelOpen:settingsOpen,selectedObjectId:b?b.id:null,averageTemperature:b?round(b.averageTemperature):0,rotationSpeed:b?round(b.rotationSpeed):0,orbitalVelocity:b?round(b.orbitalVelocity):0}}}),writable:false,configurable:false});
    Object.defineProperty(window,'__camera',{value:Object.freeze({getState:()=>{camera.updateProjectionMatrix();camera.updateMatrixWorld(true);const target=controls.target.clone();return{cameraType:camera.type,controlsType:'OrbitControls',enabled:!!controls.enabled,position:vec(camera.position),target:vec(target),distance:round(camera.position.distanceTo(target)),azimuthAngle:round(controls.getAzimuthalAngle?controls.getAzimuthalAngle():0),polarAngle:round(controls.getPolarAngle?controls.getPolarAngle():0),minDistance:round(controls.minDistance),maxDistance:round(controls.maxDistance),domElementMatchesCanvas:controls.domElement===renderer.domElement,projectionMatrix:camera.projectionMatrix.elements.map(n=>round(n)),projectionMatrixInverse:camera.projectionMatrixInverse.elements.map(n=>round(n)),matrixWorld:camera.matrixWorld.elements.map(n=>round(n)),matrixWorldInverse:camera.matrixWorldInverse.elements.map(n=>round(n))}}}),writable:false,configurable:false});
    Object.defineProperty(window,'__renderer',{value:Object.freeze({getState:()=>{const gl=renderer.getContext(),c=renderer.domElement;let count=0;for(const child of worldGroup.children)if(child.userData&&child.userData.isPhysicalBodyRoot)count++;return{webgl:true,contextType:(typeof WebGL2RenderingContext!=='undefined'&&gl instanceof WebGL2RenderingContext)?'webgl2':'webgl',canvasWidth:c.width,canvasHeight:c.height,clientWidth:c.clientWidth,clientHeight:c.clientHeight,pixelRatio:renderer.getPixelRatio(),animationRunning:perf.animationRunning,frameCount:perf.frameCount,averageFps:round(perf.averageFps,2),lastFrameDeltaMs:round(perf.lastFrameDeltaMs,3),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,sceneBodyMeshCount:0}}}),writable:false,configurable:false});
  }

  function disposeRuntime(){if(runtimeDisposed)return;runtimeDisposed=true;perf.animationRunning=false;if(animationFrameId)cancelAnimationFrame(animationFrameId);try{clearWorld()}catch(_){}try{controls&&controls.dispose&&controls.dispose()}catch(_){}try{if(scene)disposeObject(scene)}catch(_){}try{renderer&&renderer.dispose&&renderer.dispose()}catch(_){}}

  function resize(){renderer.setPixelRatio(Math.min(devicePixelRatio||1,2))}
  function bind(){
    dom.play.addEventListener('click',showScenarios);dom.back.addEventListener('click',showMenu);dom.solar.addEventListener('click',()=>startScenario('solar_system'));dom.custom.addEventListener('click',()=>startScenario('custom_sandbox'));dom.menu.addEventListener('click',showMenu);
    dom.spawnPlanet.addEventListener('click',()=>{spawner.placementCount++;setSpawnMode(app.spawnMode==='planet'?'idle':'planet')});dom.spawnStar.addEventListener('click',()=>setSpawnMode(app.spawnMode==='star'?'idle':'star'));dom.preset.addEventListener('change',()=>{spawner.selectedPreset=dom.preset.value;if(app.spawnMode==='planet')setSpawnMode('planet')});dom.settingsBtn.addEventListener('click',openSettings);dom.close.addEventListener('click',closeSettings);
    dom.temp.addEventListener('input',()=>{const b=selected();if(!b)return;b.averageTemperature=finite(+dom.temp.value,b.averageTemperature);dom.tempValue.textContent=`${Math.round(b.averageTemperature)} K`});dom.rotation.addEventListener('input',()=>{const b=selected();if(!b)return;b.rotationSpeed=finite(+dom.rotation.value,b.rotationSpeed);dom.rotationValue.textContent=`${b.rotationSpeed.toFixed(2)} rad/s`});dom.orbital.addEventListener('input',()=>{const b=selected();if(!b||!b.orbiting)return;b.orbitalVelocity=Math.max(0,finite(+dom.orbital.value,b.orbitalVelocity));b.orbitAngularSpeed=b.orbitRadius>0?b.orbitalVelocity/b.orbitRadius:0;dom.orbitalValue.textContent=`${b.orbitalVelocity.toFixed(2)} u/s`});
    addEventListener('resize',resize);document.addEventListener('visibilitychange',()=>{lastFrame=performance.now();physicsAccumulator=0});addEventListener('pagehide',e=>{if(!e.persisted)disposeRuntime()},{once:true});addEventListener('keydown',e=>{if(e.key==='Escape'){if(app.spawnMode!=='idle')setSpawnMode('idle');else if(settingsOpen)closeSettings()}});
    const c=renderer.domElement;c.addEventListener('pointerdown',e=>{pointerDown=true;pointerStartX=e.clientX;pointerStartY=e.clientY;pointerTravel=0});c.addEventListener('pointermove',onMove);c.addEventListener('pointerup',()=>pointerDown=false);c.addEventListener('pointercancel',()=>{pointerDown=false;spawner.cursorIntersection=null;placementCursor.visible=false});c.addEventListener('pointerleave',()=>{pointerDown=false;spawner.cursorIntersection=null;placementCursor.visible=false});c.addEventListener('click',onCanvasClick);
  }

  try{createScene();resize();bind();expose();app.ready=true;startTime=performance.now();lastFrame=startTime;animationFrameId=requestAnimationFrame(frame)}catch(error){console.error(error);fatal(error&&error.message?error.message:String(error))}
})();
