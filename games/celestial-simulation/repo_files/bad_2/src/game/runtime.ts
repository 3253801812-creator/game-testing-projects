// @ts-nocheck
import * as THREE_NS from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
const THREE = Object.assign({}, THREE_NS, { OrbitControls });

(() => {
    'use strict';

    const loader = document.getElementById('loader');
    if (!THREE || !THREE.OrbitControls) {
      loader.classList.add('hidden');
      document.body.insertAdjacentHTML('beforeend', '<div class="error-box"><div><h2>Three.js could not load</h2><p>This Vite build could not initialize the installed Three.js and OrbitControls modules. Check the local dependency installation and rebuild the app.</p></div></div>');
      return;
    }

    // ---------- DOM ----------
    const dom = {
      mainMenu: document.getElementById('mainMenu'), scenarioSelect: document.getElementById('scenarioSelect'), gameScreen: document.getElementById('gameScreen'),
      playBtn: document.getElementById('playBtn'), solarScenario: document.getElementById('solarScenario'), customScenario: document.getElementById('customScenario'), menuBtn: document.getElementById('menuBtn'),
      scenarioLabel: document.getElementById('scenarioLabel'), simStatus: document.getElementById('simStatus'), placementHint: document.getElementById('placementHint'),
      spawnObjectBtn: document.getElementById('spawnObjectBtn'), spawnDropdown: document.getElementById('spawnDropdown'), planetPreset: document.getElementById('planetPreset'), confirmPlanetSpawn: document.getElementById('confirmPlanetSpawn'), spawnStarBtn: document.getElementById('spawnStarBtn'),
      settingsBtn: document.getElementById('settingsBtn'), settingsPanel: document.getElementById('objectSettingsPanel'), closeSettings: document.getElementById('closeSettings'), settingsName: document.getElementById('settingsName'),
      temperatureSlider: document.getElementById('temperatureSlider'), temperatureValue: document.getElementById('temperatureValue'), rotationSlider: document.getElementById('rotationSlider'), rotationValue: document.getElementById('rotationValue'), orbitalSlider: document.getElementById('orbitalSlider'), orbitalValue: document.getElementById('orbitalValue'), orbitNote: document.getElementById('orbitNote'),
      selectionBadge: document.getElementById('selectionBadge'), selectionName: document.getElementById('selectionName'), selectionMeta: document.getElementById('selectionMeta'), toast: document.getElementById('toast')
    };

    // ---------- Three.js core ----------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x02030a);
    scene.fog = new THREE.FogExp2(0x02030a, 0.0032);

    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 1200);
    camera.position.set(0, 42, 76);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.dataset.testid = 'space-canvas';
    renderer.domElement.setAttribute('aria-label', '3D space simulation canvas');
    document.getElementById('canvasMount').appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.minDistance = 5;
    controls.maxDistance = 360;
    controls.maxPolarAngle = Math.PI * 0.96;
    controls.target.set(0, 0, 0);

    scene.add(new THREE.AmbientLight(0x536080, 0.2));
    const coolLight = new THREE.DirectionalLight(0x779aff, 0.22);
    coolLight.position.set(-20, 35, 18);
    scene.add(coolLight);

    const worldGroup = new THREE.Group();
    const guideGroup = new THREE.Group();
    scene.add(worldGroup, guideGroup);

    const G = 0.28;
    const TIME_SCALE = 1.1;
    const MAX_DT = 1 / 20;
    const FIXED_REAL_STEP = 1 / 120;
    const MAX_PHYSICS_STEPS = 12;
    let bodies = [];
    let selectedBody = null;
    let spawnMode = null;
    let pendingPreset = 'earth';
    let playing = false;
    let currentScenario = null;
    let settingsOpen = false;
    let elapsedTime = 0;
    let simulationTime = 0;
    let physicsStepCount = 0;
    let placementCount = 0;
    let lastPlacement = null;
    let lastSpawnedBodyId = null;
    let cursorIntersection = null;
    let frameCount = 0;
    let averageFps = 0;
    let lastFrameDeltaMs = 0;
    let fpsWindow = [];
    let bodyId = 0;
    let toastTimer = null;
    let hoveredPlacement = null;
    let pointerDownAt = null;
    let physicsAccumulator = 0;
    let animationFrameId = 0;
    let runtimeDisposed = false;
    const placementPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const tempV1 = new THREE.Vector3();
    const tempV2 = new THREE.Vector3();
    const tempV3 = new THREE.Vector3();
    const clock = new THREE.Clock();

    function toast(message) {
      clearTimeout(toastTimer);
      dom.toast.textContent = message;
      dom.toast.classList.add('show');
      toastTimer = setTimeout(() => dom.toast.classList.remove('show'), 1800);
    }

    function seeded(seed) {
      let s = seed >>> 0;
      return () => ((s = Math.imul(1664525, s) + 1013904223 >>> 0) / 4294967296);
    }

    function makeCanvasTexture(kind) {
      const c = document.createElement('canvas'); c.width = 512; c.height = 256;
      const x = c.getContext('2d');
      if (kind === 'earth') {
        const g = x.createLinearGradient(0,0,0,256); g.addColorStop(0,'#18568f'); g.addColorStop(.52,'#287dcc'); g.addColorStop(1,'#0b3d75'); x.fillStyle=g; x.fillRect(0,0,512,256);
        const rnd=seeded(9721); x.globalAlpha=.95;
        for(let i=0;i<62;i++){const px=rnd()*512,py=22+rnd()*212,rx=8+rnd()*34,ry=4+rnd()*15;x.beginPath();x.ellipse(px,py,rx,ry,rnd()*Math.PI,0,Math.PI*2);x.fillStyle=rnd()>.34?'#4d8d56':'#b39862';x.fill();}
        x.globalAlpha=.38; x.strokeStyle='#ffffff'; x.lineWidth=3;
        for(let i=0;i<26;i++){const py=12+rnd()*230;x.beginPath();x.moveTo(-20,py);for(let px=-20;px<550;px+=22)x.lineTo(px,py+Math.sin(px*.035+rnd()*3)*7);x.stroke();}
      } else if (kind === 'mars') {
        x.fillStyle='#a94328';x.fillRect(0,0,512,256);const rnd=seeded(1934);
        for(let i=0;i<170;i++){const r=2+rnd()*16;x.beginPath();x.arc(rnd()*512,rnd()*256,r,0,Math.PI*2);x.fillStyle=rnd()>.55?'rgba(74,25,18,.27)':'rgba(240,137,86,.20)';x.fill();}
        x.fillStyle='rgba(236,196,164,.32)';x.fillRect(0,0,512,9);x.fillRect(0,247,512,9);
      } else if (kind === 'jupiter') {
        const bands=['#b58e69','#d7b58f','#8d674f','#e0c5a4','#a7795f','#cfab82','#8d674f','#d6b38d'];let y=0;
        bands.forEach((col,i)=>{x.fillStyle=col;const h=28+(i%3)*5;x.fillRect(0,y,512,h);y+=h;});
        x.beginPath();x.ellipse(340,152,48,22,-.12,0,Math.PI*2);x.fillStyle='#9f4b35';x.fill();
      }
      const tex = new THREE.CanvasTexture(c); tex.wrapS = THREE.RepeatWrapping; tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()); return tex;
    }

    const textures = { earth: makeCanvasTexture('earth'), mars: makeCanvasTexture('mars'), jupiter: makeCanvasTexture('jupiter') };

    function createStarfield() {
      const geo = new THREE.BufferGeometry();
      const count = 2200; const pos = new Float32Array(count * 3); const rnd = seeded(421337);
      for(let i=0;i<count;i++){
        const r=180+rnd()*620, theta=rnd()*Math.PI*2, phi=Math.acos(2*rnd()-1);
        pos[i*3]=r*Math.sin(phi)*Math.cos(theta); pos[i*3+1]=r*Math.cos(phi); pos[i*3+2]=r*Math.sin(phi)*Math.sin(theta);
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos,3));
      const mat = new THREE.PointsMaterial({color:0xcbdcff,size:0.7,sizeAttenuation:true,transparent:true,opacity:.8,depthWrite:false});
      const points = new THREE.Points(geo,mat); scene.add(points); return points;
    }
    const starfield = createStarfield();

    function createGlowTexture() {
      const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');
      const g=x.createRadialGradient(128,128,4,128,128,128);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.14,'rgba(255,223,106,.88)');g.addColorStop(.38,'rgba(255,118,35,.34)');g.addColorStop(1,'rgba(255,61,10,0)');x.fillStyle=g;x.fillRect(0,0,256,256);return new THREE.CanvasTexture(c);
    }
    const glowTexture=createGlowTexture();

    function addBodyOutline(body) {
      if (!body || body.outline) return;
      const geo = new THREE.SphereGeometry(body.radius * 1.12, 24, 16);
      const mat = new THREE.MeshBasicMaterial({color:0x6ee8ff,transparent:true,opacity:.2,wireframe:true,depthWrite:false});
      const mesh = new THREE.Mesh(geo,mat); body.group.add(mesh); body.outline=mesh;
    }
    function removeOutline(body){if(body?.outline){body.group.remove(body.outline);body.outline.geometry.dispose();body.outline.material.dispose();body.outline=null;}}

    function makePlanetAppearance(preset, radius) {
      if (preset === 'procedural') {
        const seed = (Math.random()*1e9)|0, rnd=seeded(seed), neon=['#43e6ff','#9b6dff','#ff5bbd','#7dff8f','#ffbe55','#55a7ff'];
        const color=neon[Math.floor(rnd()*neon.length)];
        const geo=new THREE.IcosahedronGeometry(radius,5);const attr=geo.attributes.position;const p=new THREE.Vector3();
        for(let i=0;i<attr.count;i++){p.fromBufferAttribute(attr,i);const n1=Math.sin(p.x*2.9+seed*.00001)+Math.sin(p.y*4.3)+Math.cos(p.z*3.7);const n2=Math.sin((p.x+p.y)*8.1)*.35;const k=1+(n1+n2)*.018;attr.setXYZ(i,p.x*k,p.y*k,p.z*k);}attr.needsUpdate=true;geo.computeVertexNormals();
        const mat=new THREE.MeshStandardMaterial({color,roughness:.82,metalness:.08,emissive:new THREE.Color(color).multiplyScalar(.12)});
        return {geo,mat,meta:{seed,color,scale:radius,displacementStrength:0.055,roughness:.82,vertexRadiusVariance:.055}};
      }
      const geo=new THREE.SphereGeometry(radius,48,32);
      if(preset==='earth') return {geo,mat:new THREE.MeshStandardMaterial({map:textures.earth,roughness:.68,metalness:.03})};
      if(preset==='mars') return {geo,mat:new THREE.MeshStandardMaterial({map:textures.mars,roughness:.92,metalness:.01})};
      if(preset==='jupiter') return {geo,mat:new THREE.MeshStandardMaterial({map:textures.jupiter,roughness:.77,metalness:.0})};
      return {geo,mat:new THREE.MeshStandardMaterial({color:0x86a7ff,roughness:.75})};
    }

    function addBody({type,preset,name,position,radius,mass,temperature,rotationSpeed,velocity}) {
      const group=new THREE.Group();group.position.copy(position);worldGroup.add(group);
      let mesh, light=null, glow=null, procedural=null;
      if(type==='star'){
        const geo=new THREE.SphereGeometry(radius,48,32);
        const mat=new THREE.MeshBasicMaterial({color:0xffb033});
        mesh=new THREE.Mesh(geo,mat);group.add(mesh);
        glow=null; light=null;
      } else {
        const appearance=makePlanetAppearance(preset,radius);mesh=new THREE.Mesh(appearance.geo,appearance.mat);mesh.castShadow=false;mesh.receiveShadow=false;group.add(mesh);procedural=appearance.meta||null;
      }
      mesh.userData.bodyId='shared-body';
      const body={id:'shared-body',type,preset,name,group,mesh,light,glow,procedural,radius,mass,temperature,rotationSpeed,baseRotationSpeed:rotationSpeed,velocity:velocity?velocity.clone():new THREE.Vector3(),acceleration:new THREE.Vector3(),outline:null,parentStar:null};
      group.userData.body=body;mesh.userData.body=body;bodies.push(body);return body;
    }

    function addOrbitGuide(radius,color=0x4f79aa){
      const pts=[];for(let i=0;i<=128;i++){const a=i/128*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*radius,0,Math.sin(a)*radius));}
      const geo=new THREE.BufferGeometry().setFromPoints(pts);const mat=new THREE.LineBasicMaterial({color,transparent:true,opacity:.15});guideGroup.add(new THREE.Line(geo,mat));
    }

    function clearWorld(){
      selectBody(null);
      for(const body of bodies){
        worldGroup.remove(body.group);
        body.group.traverse(o=>{
          if(o.geometry)o.geometry.dispose();
          if(o.material){
            const materials=Array.isArray(o.material)?o.material:[o.material];
            for(const material of materials){
              if(material?.map && material.map!==glowTexture && !Object.values(textures).includes(material.map)) material.map.dispose?.();
              material?.dispose?.();
            }
          }
        });
      }
      /* intentionally preserves prior bodies across scene reset */ placementCount=0; lastPlacement=null; lastSpawnedBodyId=null; cursorIntersection=null;
      simulationTime=0; physicsStepCount=0; physicsAccumulator=0;
      while(guideGroup.children.length){const o=guideGroup.children.pop();o.geometry?.dispose();o.material?.dispose();}
      setSpawnMode(null);dom.settingsPanel.classList.add('hidden');updateHud();
    }

    function circularVelocity(star, position, clockwise=false){
      tempV1.copy(position).sub(star.group.position);const r=Math.max(tempV1.length(),star.radius*2.3);tempV1.normalize();
      const tangent=new THREE.Vector3(-tempV1.z,0,tempV1.x).normalize().multiplyScalar(Math.sqrt(G*star.mass/r)*(clockwise?-1:1));
      tangent.y = tempV1.y * 0.02; return tangent;
    }

    function spawnSolarSystem(){
      const sun=addBody({type:'star',preset:'sun',name:'Sun',position:new THREE.Vector3(0,0,0),radius:5.4,mass:8200,temperature:5500,rotationSpeed:.12});
      const defs=[
        ['Earth','earth',23,1.8,1.0,15,1.0],
        ['Mars','mars',34,1.35,.45,-63,.72]
      ];
      defs.forEach((d,i)=>{const [name,preset,r,radius,mass,temp,rot]=d;const angle=[.3,2.1,4.15][i];const pos=new THREE.Vector3(Math.cos(angle)*r,(i-1)*.35,Math.sin(angle)*r);const v=circularVelocity(sun,pos,false);const p=addBody({type:'planet',preset,name,position:pos,radius,mass,temperature:temp,rotationSpeed:rot,velocity:v});p.parentStar=sun;addOrbitGuide(r);});
      camera.position.set(0,58,83);controls.target.set(0,0,0);controls.update();
    }

    function nearestStar(position){
      let best=null,bestD=Infinity;for(const b of bodies){if(b.type!=='star')continue;const d=b.group.position.distanceTo(position);if(d<bestD){bestD=d;best=b;}}
      return best;
    }

    function spawnPlanetAt(position,preset){
      const props = preset==='earth' ? {name:'Earth',radius:1.8,mass:1,temp:15,rot:1} : preset==='mars' ? {name:'Mars',radius:1.35,mass:.45,temp:-63,rot:.72} : {name:'Procedural Planet',radius:1.2+Math.random()*1.6,mass:.7+Math.random()*2.2,temp:-40+Math.round(Math.random()*260),rot:.45+Math.random()*1.5};
      const star=nearestStar(position);let vel=new THREE.Vector3();if(star && position.distanceTo(star.group.position)>star.radius*2.2)vel=circularVelocity(star,position,Math.random()<.18);
      const p=addBody({type:'planet',preset,name:props.name,position,radius:props.radius,mass:props.mass,temperature:props.temp,rotationSpeed:props.rot,velocity:vel});p.parentStar=star;
      selectBody(p); placementCount++; lastPlacement={x:position.x,y:position.y,z:position.z}; lastSpawnedBodyId=p.id; toast(star?'Planet placed with orbital velocity':'Planet placed · add a star to create an orbit');return p;
    }
    function spawnStarAt(position){
      const star=addBody({type:'star',preset:'custom_star',name:'Custom Star',position,radius:4.5+Math.random()*1.5,mass:6800+Math.random()*2600,temperature:4800+Math.round(Math.random()*1800),rotationSpeed:.08+Math.random()*.14});
      selectBody(star); placementCount++; lastPlacement={x:position.x,y:position.y,z:position.z}; lastSpawnedBodyId=star.id; toast('Star placed · nearby planets will feel its gravity');return star;
    }

    function updateHud(){dom.simStatus.textContent=`${bodies.length} ${bodies.length===1?'body':'bodies'} · gravity active`;}

    function selectBody(body){
      if(selectedBody===body)return;removeOutline(selectedBody);selectedBody=body;
      if(body){addBodyOutline(body);dom.selectionBadge.classList.remove('hidden');dom.selectionName.textContent=body.name;dom.selectionMeta.textContent=body.type==='star'?'Star · massive gravity source':`${body.preset==='procedural'?'Procedural ':' '}Planet`;syncSettings();}
      else{dom.selectionBadge.classList.add('hidden');dom.settingsPanel.classList.add('hidden');settingsOpen=false;}
    }

    function speed(body){return body.velocity.length();}
    function syncSettings(){
      if(!selectedBody){dom.settingsName.textContent='No selection';return;}
      dom.settingsName.textContent=selectedBody.name;
      dom.temperatureSlider.value='273';dom.temperatureValue.textContent='273 °C';
      dom.rotationSlider.value='0.25';dom.rotationValue.textContent='0.25×';
      const v=speed(selectedBody);dom.orbitalSlider.max='40';dom.orbitalSlider.value='4';dom.orbitalValue.textContent='4.00 u/s';
      const star=selectedBody.type==='planet'?nearestStar(selectedBody.group.position):null;dom.orbitalSlider.disabled=!star;dom.orbitNote.textContent=star?'Orbital velocity changes the current tangential speed around the nearest star.':'No orbital velocity control: this body is not orbiting a star.';
    }

    function setSpawnMode(mode){
      spawnMode=mode || null;dom.spawnObjectBtn.classList.toggle('active',mode==='planet');dom.spawnStarBtn.classList.toggle('active',mode==='star');
      dom.placementHint.classList.toggle('hidden',!mode);dom.placementHint.textContent=mode==='planet'?`Click in space to place ${pendingPreset==='procedural'?'a procedural planet':pendingPreset==='mars'?'Mars':'Earth'} · Esc to cancel`:'Click in space to place a massive star · Esc to cancel';
      renderer.domElement.style.cursor=mode?'crosshair':'grab';
    }

    function setPointerFromEvent(e){const rect=renderer.domElement.getBoundingClientRect();if(rect.width<=0||rect.height<=0)return false;pointer.x=((e.clientX-rect.left)/rect.width)*2-1;pointer.y=-((e.clientY-rect.top)/rect.height)*2+1;raycaster.setFromCamera(pointer,camera);return true;}
    function intersectPlacement(e){if(!setPointerFromEvent(e))return null;const point=new THREE.Vector3();const hit=raycaster.ray.intersectPlane(placementPlane,point)?point:null;cursorIntersection=hit?{x:hit.x,y:hit.y,z:hit.z}:null;return hit;}

    // ---------- Physics ----------
    function stepPhysics(dt){
      simulationTime += dt; physicsStepCount++;
      const n=bodies.length;if(!n)return;
      for(let i=0;i<n;i++)bodies[i].acceleration.set(0,0,0);
      for(let i=0;i<n;i++){
        const a=bodies[i];
        for(let j=i+1;j<n;j++){
          const b=bodies[j];tempV1.copy(b.group.position).sub(a.group.position);const distSq=Math.max(tempV1.lengthSq(),Math.pow((a.radius+b.radius)*.72,2));const dist=Math.sqrt(distSq);const dir=tempV1.multiplyScalar(1/dist);
          const aa=G*b.mass/distSq, ab=G*a.mass/distSq;a.acceleration.addScaledVector(dir,aa);b.acceleration.addScaledVector(dir,-ab);
        }
      }
      const starCount=bodies.reduce((count,body)=>count+(body.type==='star'?1:0),0);
      for(const b of bodies){
        if(b.type==='star' && starCount===1){ b.velocity.multiplyScalar(.99996); }
        b.velocity.addScaledVector(b.acceleration,dt);b.group.position.addScaledVector(b.velocity,dt);
        b.mesh.rotation.y += b.rotationSpeed*dt*.55;
        if(b.procedural)b.mesh.rotation.x += b.rotationSpeed*dt*.08;
      }
    }

    // ---------- Interaction ----------
    dom.playBtn.addEventListener('click',()=>{dom.mainMenu.classList.add('hidden');dom.scenarioSelect.classList.remove('hidden');});
    dom.solarScenario.addEventListener('click',()=>startScenario('Solar System',true,'solar_system'));
    dom.customScenario.addEventListener('click',()=>startScenario('Custom Sandbox',false,'custom_sandbox'));
    function startScenario(label,solar,scenarioKey){
      clearWorld();physicsAccumulator=0;if(solar)spawnSolarSystem();else{camera.position.set(0,40,72);controls.target.set(0,0,0);controls.update();}
      currentScenario=scenarioKey; elapsedTime=0; simulationTime=0; physicsStepCount=0; playing=true;dom.scenarioLabel.textContent=label;dom.scenarioSelect.classList.add('hidden');dom.mainMenu.classList.add('hidden');dom.gameScreen.classList.remove('hidden');updateHud();clock.getDelta();
    }
    dom.menuBtn.addEventListener('click',()=>{playing=false;currentScenario=null;settingsOpen=false;dom.gameScreen.classList.add('hidden');dom.scenarioSelect.classList.add('hidden');dom.mainMenu.classList.remove('hidden');});

    dom.spawnObjectBtn.addEventListener('click',(e)=>{e.stopPropagation();pendingPreset=dom.planetPreset.value;dom.spawnDropdown.classList.toggle('hidden');setSpawnMode('planet');});
    dom.confirmPlanetSpawn.addEventListener('click',(e)=>{e.stopPropagation();pendingPreset=dom.planetPreset.value;dom.spawnDropdown.classList.add('hidden');setSpawnMode('planet');});
    dom.planetPreset.addEventListener('change',()=>{pendingPreset=dom.planetPreset.value;if(spawnMode==='planet')setSpawnMode('planet');});
    dom.spawnStarBtn.addEventListener('click',(e)=>{e.stopPropagation();dom.spawnDropdown.classList.add('hidden');setSpawnMode('star');});
    dom.settingsBtn.addEventListener('click',(e)=>{e.stopPropagation();if(!selectedBody){toast('Select a celestial body first');return;}syncSettings();dom.settingsPanel.classList.toggle('hidden');settingsOpen=!dom.settingsPanel.classList.contains('hidden');});
    dom.closeSettings.addEventListener('click',()=>{dom.settingsPanel.classList.add('hidden');settingsOpen=false;});
    document.addEventListener('click',(e)=>{if(!dom.spawnDropdown.contains(e.target) && e.target!==dom.spawnObjectBtn)dom.spawnDropdown.classList.add('hidden');});
    document.addEventListener('keydown',(e)=>{if(e.key==='Escape'){setSpawnMode(null);dom.spawnDropdown.classList.add('hidden');}});

    dom.temperatureSlider.addEventListener('input',()=>{if(!selectedBody)return;dom.temperatureValue.textContent=`${Math.round(Number(dom.temperatureSlider.value))} °C`;});
    dom.rotationSlider.addEventListener('input',()=>{if(!selectedBody)return;dom.rotationValue.textContent=`${Number(dom.rotationSlider.value).toFixed(2)}×`;});
    dom.orbitalSlider.addEventListener('input',()=>{
      if(!selectedBody || selectedBody.type!=='planet')return;const target=Number(dom.orbitalSlider.value);dom.orbitalValue.textContent=`${target.toFixed(2)} u/s`;
    });

    renderer.domElement.addEventListener('pointermove',(e)=>{if(spawnMode)hoveredPlacement=intersectPlacement(e);});
    renderer.domElement.addEventListener('pointerdown',(e)=>{pointerDownAt={x:e.clientX,y:e.clientY};renderer.domElement.style.cursor=spawnMode?'crosshair':'grabbing';});
    renderer.domElement.addEventListener('pointerup',(e)=>{
      renderer.domElement.style.cursor=spawnMode?'crosshair':'grab';if(!playing)return;
      const moved = pointerDownAt ? Math.hypot(e.clientX-pointerDownAt.x,e.clientY-pointerDownAt.y) : 0; pointerDownAt=null; if(moved>6)return;
      if(spawnMode){const p=intersectPlacement(e);if(!p)return;if(spawnMode==='planet')spawnPlanetAt(p,pendingPreset);else spawnStarAt(p);setSpawnMode(null);updateHud();return;}
      if(!setPointerFromEvent(e))return;raycaster.intersectObjects(bodies.map(b=>b.mesh),false);selectBody(bodies.length?bodies[0]:null);
    });

    renderer.domElement.addEventListener('pointercancel',()=>{pointerDownAt=null;hoveredPlacement=null;cursorIntersection=null;renderer.domElement.style.cursor=spawnMode?'crosshair':'grab';});
    renderer.domElement.addEventListener('pointerleave',()=>{pointerDownAt=null;hoveredPlacement=null;cursorIntersection=null;renderer.domElement.style.cursor=spawnMode?'crosshair':'grab';});
    window.addEventListener('resize',()=>{const w=Math.max(1,innerWidth),h=Math.max(1,innerHeight);camera.aspect=w/h;renderer.setSize(w,h);renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));});
    document.addEventListener('visibilitychange',()=>{physicsAccumulator=0;clock.getDelta();});

    // ---------- Public read-only runtime state ----------
    const rnum=(n,d=6)=>{const q=10**d;return Number.isFinite(n)?Math.round(n*q)/q:0;};
    const v3=(v)=>({x:rnum(v?.x||0),y:rnum(v?.y||0),z:rnum(v?.z||0)});
    function bodyState(body){
      body.group.updateMatrixWorld(true); body.mesh.updateMatrixWorld(true);
      const wp=new THREE.Vector3(), ws=new THREE.Vector3(); body.group.getWorldPosition(wp); body.group.getWorldScale(ws);
      const parent=body.parentStar; const geo=body.mesh.geometry; const pos=geo?.attributes?.position;
      const speed=body.velocity.length();
      let materialTypes=[]; let hasTexture=false; let emissiveIntensity=0;
      body.group.traverse((o)=>{const mats=o.material?(Array.isArray(o.material)?o.material:[o.material]):[]; for(const m of mats){if(m?.type&&!materialTypes.includes(m.type))materialTypes.push(m.type);if(m?.map||m?.bumpMap||m?.normalMap||m?.displacementMap)hasTexture=true;if(m?.emissive&&m.emissive.getHex?.()!==0)emissiveIntensity=Math.max(emissiveIntensity,Number(m.emissiveIntensity)||1);}});
      const isProc=body.preset==='procedural';
      return {
        id:String(body.id), name:body.name, bodyType:body.type, preset:body.preset,
        position:v3(body.group.position), velocity:v3(body.velocity), acceleration:v3(body.acceleration), rotation:v3(body.mesh.rotation),
        mass:rnum(body.mass), radius:rnum(body.radius), averageTemperature:rnum(body.temperature), rotationSpeed:rnum(body.rotationSpeed), orbitalVelocity:rnum(speed),
        parentStarId:parent?String(parent.id):null, distanceToParent:parent?rnum(body.group.position.distanceTo(parent.group.position)):null, orbiting:!!parent, meshVisible:!!(body.group.visible&&body.mesh.visible),
        appearance:{
          color: body.type==='star' ? '#FFB033' : (body.procedural?.color || (body.preset==='earth'?'#287DCC':body.preset==='mars'?'#B55232':body.preset==='jupiter'?'#D4AD80':'#86A7FF')),
          textureKey: ['earth','mars','jupiter'].includes(body.preset)?body.preset:null,
          hasTexture, materialTypes, emissiveIntensity:rnum(emissiveIntensity),
          reliefTechnique:isProc?'geometry_displacement':'none', reliefStrength:isProc?rnum(body.procedural?.displacementStrength||0.055):0,
          glowMechanisms:body.type==='star'?['sprite_halo','point_light']:[], hasLightSource:!!body.light
        },
        mesh:{uuid:body.group.uuid,objectType:body.group.type||'Group',geometryType:geo?.type||null,vertexCount:pos?.count||0,worldPosition:v3(wp),worldScale:v3(ws)},
        procedural:isProc?{seed:body.procedural.seed,scale:rnum(body.procedural.scale||body.radius),color:body.procedural.color,displacementStrength:rnum(body.procedural.displacementStrength||0.055),roughness:rnum(body.procedural.roughness||.82),vertexRadiusVariance:rnum(body.procedural.vertexRadiusVariance||.055)}:null
      };
    }
    function defineHook(name,getState){Object.defineProperty(window,name,{value:Object.freeze({getState}),writable:false,configurable:false});}
    defineHook('__game',()=>({
      ready:true, gameState:playing?'playing':(!dom.scenarioSelect.classList.contains('hidden')?'scenario_select':'menu'), scenario:currentScenario,
      elapsedTime:rnum(elapsedTime), toolbarVisible:playing&&!dom.gameScreen.classList.contains('hidden'), spawnMode:spawnMode||'idle', selectedObjectId:selectedBody?String(selectedBody.id):null,
      bodyCount:bodies.length, planetCount:bodies.filter(b=>b.type==='planet').length, starCount:bodies.filter(b=>b.type==='star').length,
      canvas:{width:renderer.domElement.width,height:renderer.domElement.height,clientWidth:renderer.domElement.clientWidth,clientHeight:renderer.domElement.clientHeight},
      performance:{animationRunning:true,frameCount,averageFps:rnum(averageFps,2),lastFrameDeltaMs:rnum(lastFrameDeltaMs,3)}
    }));
    defineHook('__universe',()=>({gravityEnabled:true,gravitationalConstant:G,simulationTime:rnum(simulationTime),physicsStepCount,orbitModel:'gravity',bodies:bodies.map(bodyState)}));
    defineHook('__spawner',()=>({mode:spawnMode||'idle',selectedPreset:spawnMode==='star'?null:pendingPreset,pendingPlacement:!!spawnMode,placementPlane:{normal:{x:0,y:1,z:0},constant:0},cursorIntersection:cursorIntersection?{...cursorIntersection}:null,lastPlacement:lastPlacement?{...lastPlacement}:null,lastSpawnedBodyId:lastSpawnedBodyId,placementCount}));
    defineHook('__selection',()=>({selectedObjectId:selectedBody?String(selectedBody.id):null,selectedObjectType:selectedBody?selectedBody.type:null,settingsOpen}));
    defineHook('__settings',()=>({panelOpen:settingsOpen,selectedObjectId:selectedBody?String(selectedBody.id):null,averageTemperature:selectedBody?rnum(selectedBody.temperature):0,rotationSpeed:selectedBody?rnum(selectedBody.rotationSpeed):0,orbitalVelocity:selectedBody?rnum(selectedBody.velocity.length()):0}));
    defineHook('__lens',()=>{camera.updateProjectionMatrix();camera.updateMatrixWorld(true);return {cameraType:camera.type,controlsType:'OrbitControls',enabled:!!controls.enabled,position:v3(camera.position),target:v3(controls.target),distance:rnum(camera.position.distanceTo(controls.target)),azimuthAngle:rnum(controls.getAzimuthalAngle?.()||0),polarAngle:rnum(controls.getPolarAngle?.()||0),minDistance:rnum(controls.minDistance),maxDistance:rnum(controls.maxDistance),domElementMatchesCanvas:controls.domElement===renderer.domElement,projectionMatrix:camera.projectionMatrix.elements.map(rnum),projectionMatrixInverse:camera.projectionMatrixInverse.elements.map(rnum),matrixWorld:camera.matrixWorld.elements.map(rnum),matrixWorldInverse:camera.matrixWorldInverse.elements.map(rnum)};});
    defineHook('__renderer',()=>({webgl:true,contextType:(typeof WebGL2RenderingContext!=='undefined'&&renderer.getContext() instanceof WebGL2RenderingContext)?'webgl2':'webgl',canvasWidth:renderer.domElement.width,canvasHeight:renderer.domElement.height,clientWidth:renderer.domElement.clientWidth,clientHeight:renderer.domElement.clientHeight,pixelRatio:renderer.getPixelRatio(),animationRunning:true,frameCount,averageFps:rnum(averageFps,2),lastFrameDeltaMs:rnum(lastFrameDeltaMs,3),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,sceneBodyMeshCount:0}));

    function disposeRuntime(){
      if(runtimeDisposed)return;runtimeDisposed=true;
      if(animationFrameId)cancelAnimationFrame(animationFrameId);
      clearTimeout(toastTimer);
      try{clearWorld()}catch(_){}
      try{starfield.geometry.dispose();starfield.material.dispose()}catch(_){}
      for(const texture of Object.values(textures)){try{texture.dispose()}catch(_){}}
      try{glowTexture.dispose()}catch(_){}
      try{controls.dispose()}catch(_){}
      try{renderer.dispose()}catch(_){}
    }
    window.addEventListener('pagehide',(event)=>{if(!event.persisted)disposeRuntime()},{once:true});

    // ---------- Render loop ----------
    let lastHud=0;
    function animate(now){
      if(runtimeDisposed)return;
      animationFrameId=requestAnimationFrame(animate);const raw=Math.min(clock.getDelta(),MAX_DT); lastFrameDeltaMs=raw*1000; frameCount++; if(raw>0){fpsWindow.push(1/raw);if(fpsWindow.length>90)fpsWindow.shift();averageFps=fpsWindow.reduce((a,b)=>a+b,0)/fpsWindow.length;} controls.update();
      if(playing){elapsedTime+=raw;physicsAccumulator=Math.min(physicsAccumulator+raw,FIXED_REAL_STEP*MAX_PHYSICS_STEPS);let steps=0;while(physicsAccumulator>=FIXED_REAL_STEP&&steps<MAX_PHYSICS_STEPS){stepPhysics(FIXED_REAL_STEP*TIME_SCALE);physicsAccumulator-=FIXED_REAL_STEP;steps++;}}else{physicsAccumulator=0;}
      if(selectedBody?.outline){selectedBody.outline.rotation.y-=raw*.7;selectedBody.outline.material.opacity=.16+Math.sin(now*.005)*.04;}
      if(now-lastHud>420){updateHud();if(selectedBody && !dom.settingsPanel.classList.contains('hidden')){const focused=document.activeElement;if(![dom.temperatureSlider,dom.rotationSlider,dom.orbitalSlider].includes(focused))syncSettings();}lastHud=now;}
      renderer.render(scene,camera);
    }
    animationFrameId=requestAnimationFrame(animate);
    loader.classList.add('hidden');
  })();
