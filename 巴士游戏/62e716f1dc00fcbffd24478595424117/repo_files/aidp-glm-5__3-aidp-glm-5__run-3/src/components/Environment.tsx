// 3D Environment Components - Indonesia-inspired world
import { useMemo } from 'react';
import * as THREE from 'three';
import { INITIAL_STOPS } from '../store';

// Road component with markings
export function Road({ busZ }: { busZ: number }) {
  const roadLength = 2000;
  
  return (
    <group position={[0, 0, busZ - roadLength / 2]}>
      {/* Main road surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, roadLength / 2]} receiveShadow>
        <planeGeometry args={[10.4, roadLength]} />
        <meshStandardMaterial color="#333" roughness={0.9} />
      </mesh>
      
      {/* Road edges */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-5.2, 0.02, roadLength / 2]} receiveShadow>
        <planeGeometry args={[0.3, roadLength]} />
        <meshStandardMaterial color="#fff" roughness={0.7} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[5.2, 0.02, roadLength / 2]} receiveShadow>
        <planeGeometry args={[0.3, roadLength]} />
        <meshStandardMaterial color="#fff" roughness={0.7} />
      </mesh>
      
      {/* Center line markings */}
      {Array.from({ length: Math.ceil(roadLength / 15) }).map((_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0.33, 0.02, i * 15]} receiveShadow>
          <planeGeometry args={[0.2, 6]} />
          <meshStandardMaterial color="#ffcc00" roughness={0.8} />
        </mesh>
      ))}
      
      {/* Lane dividers */}
      {Array.from({ length: Math.ceil(roadLength / 12) }).map((_, i) => (
        <mesh key={`ld-${i}`} rotation={[-Math.PI / 2, 0, 0]} position={[-2.5, 0.02, i * 12]} receiveShadow>
          <planeGeometry args={[0.15, 4]} />
          <meshStandardMaterial color="#fff" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Passenger stop shelter
export function StopShelter({ position }: { position: [number, number, number]; name?: string }) {
  return (
    <group position={position}>
      {/* Main shelter structure */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <boxGeometry args={[6, 0.2, 4]} />
        <meshStandardMaterial color="#8b4513" roughness={0.8} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 2.8, 0]} castShadow>
        <boxGeometry args={[6.5, 0.1, 4.5]} />
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </mesh>
      
      {/* Support posts */}
      {[
        [-2.8, 0, -1.8], [2.8, 0, -1.8],
        [-2.8, 0, 1.8], [2.8, 0, 1.8]
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.15, 2.5, 0.15]} />
          <meshStandardMaterial color="#4a3728" roughness={0.9} />
        </mesh>
      ))}
      
      {/* Back wall */}
      <mesh position={[0, 1.2, -2]} castShadow>
        <boxGeometry args={[6, 2.2, 0.1]} />
        <meshStandardMaterial color="#deb887" roughness={0.7} />
      </mesh>
      
      {/* Bench */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <boxGeometry args={[4, 0.1, 0.5]} />
        <meshStandardMaterial color="#8b4513" roughness={0.8} />
      </mesh>
      {[-1.5, 1.5].map((x, i) => (
        <mesh key={`leg-${i}`} position={[x, 0.2, 0]} castShadow>
          <boxGeometry args={[0.1, 0.4, 0.4]} />
          <meshStandardMaterial color="#654321" roughness={0.9} />
        </mesh>
      ))}
      
      {/* Sign board */}
      <mesh position={[0, 3.2, -2.1]} castShadow>
        <boxGeometry args={[2, 0.5, 0.05]} />
        <meshStandardMaterial color="#2d5a27" roughness={0.6} />
      </mesh>
      
      {/* Stop marker on road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.33, 0.03, 0]} receiveShadow>
        <planeGeometry args={[2, 8]} />
        <meshStandardMaterial color="#ff6b35" roughness={0.7} />
      </mesh>
    </group>
  );
}

// Indonesian-style building
export function Building({ position, variant = 0 }: { position: [number, number, number]; variant?: number }) {
  const colors = [
    { wall: '#d4a574', roof: '#8b4513', accent: '#cd853f' },
    { wall: '#deb887', roof: '#a0522d', accent: '#d2691e' },
    { wall: '#f5deb3', roof: '#8b4513', accent: '#bc8f8f' },
    { wall: '#ffe4c4', roof: '#654321', accent: '#deb887' },
  ];
  
  const color = colors[variant % colors.length];
  const height = 4 + Math.random() * 4;
  const width = 4 + Math.random() * 2;
  const depth = 4 + Math.random() * 2;
  
  return (
    <group position={position}>
      {/* Main walls */}
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color.wall} roughness={0.9} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, height + 0.8, 0]} castShadow>
        <boxGeometry args={[width + 0.5, 0.6, depth + 0.5]} />
        <meshStandardMaterial color={color.roof} roughness={0.85} />
      </mesh>
      
      {/* Roof overhang */}
      <mesh position={[0, height + 1.1, 0]} castShadow>
        <boxGeometry args={[width + 1, 0.15, depth + 1]} />
        <meshStandardMaterial color={color.roof} roughness={0.85} />
      </mesh>
      
      {/* Windows */}
      {[
        [-width / 2 - 0.01, height * 0.6, 0],
        [width / 2 + 0.01, height * 0.6, 0],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, i === 0 ? Math.PI / 2 : -Math.PI / 2, 0]}>
          <boxGeometry args={[1, 1.2, 0.05]} />
          <meshStandardMaterial color="#4682b4" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      
      {/* Door */}
      <mesh position={[0, 1.2, depth / 2 + 0.01]}>
        <boxGeometry args={[1, 2.4, 0.05]} />
        <meshStandardMaterial color={color.accent} roughness={0.8} />
      </mesh>
      
      {/* Decorative trim */}
      <mesh position={[0, height, 0]}>
        <boxGeometry args={[width + 0.2, 0.2, depth + 0.2]} />
        <meshStandardMaterial color={color.accent} roughness={0.7} />
      </mesh>
    </group>
  );
}

// Palm tree
export function PalmTree({ position }: { position: [number, number, number] }) {
  const trunkHeight = 4 + Math.random() * 2;
  
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, trunkHeight / 2, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.35, trunkHeight, 8]} />
        <meshStandardMaterial color="#8b6914" roughness={0.95} />
      </mesh>
      
      {/* Trunk rings */}
      {[0.3, 0.5, 0.7, 0.9].map((h, i) => (
        <mesh key={i} position={[0, trunkHeight * h, 0]} castShadow>
          <torusGeometry args={[0.22 + (1 - h) * 0.1, 0.05, 4, 8]} />
          <meshStandardMaterial color="#654321" roughness={0.9} />
        </mesh>
      ))}
      
      {/* Fronds */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <group key={i} position={[0, trunkHeight + 0.3, 0]} rotation={[0.3, (angle * Math.PI) / 180, 0.2]}>
          <mesh position={[0, 0, 1.5]} rotation={[0.5, 0, 0]} castShadow>
            <coneGeometry args={[0.3, 3, 4]} />
            <meshStandardMaterial color="#228b22" roughness={0.8} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Vegetation and foliage
export function Vegetation({ busZ }: { busZ: number }) {
  const vegetation = useMemo(() => {
    const items: { type: 'palm' | 'bush'; x: number; z: number }[] = [];
    
    for (let i = 0; i < 50; i++) {
      const side = Math.random() > 0.5 ? 1 : -1;
      items.push({
        type: 'palm',
        x: side * (8 + Math.random() * 15),
        z: i * 25 + Math.random() * 10
      });
    }
    
    for (let i = 0; i < 80; i++) {
      const side = Math.random() > 0.5 ? 1 : -1;
      items.push({
        type: 'bush',
        x: side * (6.5 + Math.random() * 10),
        z: i * 15 + Math.random() * 8
      });
    }
    
    return items;
  }, []);
  
  return (
    <group>
      {vegetation.map((item, i) => (
        item.type === 'palm' ? (
          <PalmTree key={i} position={[item.x, 0, item.z + busZ - 500]} />
        ) : (
          <mesh key={i} position={[item.x, 0.4, item.z + busZ - 500]} castShadow>
            <sphereGeometry args={[0.8 + Math.random() * 0.5, 8, 8]} />
            <meshStandardMaterial color="#2d5a27" roughness={0.9} />
          </mesh>
        )
      ))}
    </group>
  );
}

// Street lamp
export function StreetLamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Pole */}
      <mesh position={[0, 3, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.1, 6, 8]} />
        <meshStandardMaterial color="#404040" metalness={0.7} roughness={0.4} />
      </mesh>
      
      {/* Lamp arm */}
      <mesh position={[0.8, 5.8, 0]} rotation={[0, 0, 0.3]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 1.8, 4]} />
        <meshStandardMaterial color="#404040" metalness={0.7} roughness={0.4} />
      </mesh>
      
      {/* Lamp housing */}
      <mesh position={[1.5, 5.5, 0]} castShadow>
        <boxGeometry args={[0.6, 0.3, 0.3]} />
        <meshStandardMaterial color="#505050" metalness={0.6} roughness={0.5} />
      </mesh>
      
      {/* Light */}
      <mesh position={[1.5, 5.35, 0]}>
        <boxGeometry args={[0.5, 0.05, 0.25]} />
        <meshStandardMaterial color="#fffacd" emissive="#fffacd" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// Traffic vehicle
export function TrafficVehicleMesh({ position, color, type }: { position: [number, number, number]; color: string; type: 'car' | 'truck' | 'motorcycle' }) {
  if (type === 'motorcycle') {
    return (
      <group position={position}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[0.4, 0.5, 1.2]} />
          <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.85, 0.2]} castShadow>
          <boxGeometry args={[0.35, 0.4, 0.5]} />
          <meshStandardMaterial color="#222" roughness={0.8} />
        </mesh>
      </group>
    );
  }
  
  if (type === 'truck') {
    return (
      <group position={position}>
        <mesh position={[0, 1, 0]} castShadow>
          <boxGeometry args={[2, 1.5, 4]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.6} />
        </mesh>
        <mesh position={[0, 2, -1.5]} castShadow>
          <boxGeometry args={[2, 1.2, 2]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.6} />
        </mesh>
        <mesh position={[0, 2.4, -2.3]} castShadow>
          <boxGeometry args={[1.8, 0.6, 0.1]} />
          <meshStandardMaterial color="#4682b4" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    );
  }
  
  // Car
  return (
    <group position={position}>
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[1.6, 0.8, 3.5]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[1.5, 0.7, 1.8]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.35, 0]} castShadow>
        <boxGeometry args={[1.3, 0.5, 1.5]} />
        <meshStandardMaterial color="#4682b4" metalness={0.9} roughness={0.1} transparent opacity={0.7} />
      </mesh>
    </group>
  );
}

// Ground plane
export function Ground({ busZ }: { busZ: number }) {
  return (
    <group position={[0, 0, busZ]}>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 2000]} />
        <meshStandardMaterial color="#3d6b3d" roughness={1} />
      </mesh>
      
      {/* Dirt shoulder */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]} receiveShadow>
        <planeGeometry args={[40, 2000]} />
        <meshStandardMaterial color="#8b7355" roughness={1} />
      </mesh>
    </group>
  );
}

// Full environment
export function Environment({ busZ }: { busZ: number }) {
  const stops = INITIAL_STOPS;
  
  // Generate buildings
  const buildings = useMemo(() => {
    const items: { position: [number, number, number]; variant: number }[] = [];
    
    for (let i = 0; i < 30; i++) {
      const side = Math.random() > 0.5 ? 1 : -1;
      items.push({
        position: [side * (15 + Math.random() * 10), 0, i * 50 + Math.random() * 20],
        variant: Math.floor(Math.random() * 4)
      });
    }
    
    return items;
  }, []);
  
  return (
    <group>
      <Ground busZ={busZ} />
      <Road busZ={busZ} />
      <Vegetation busZ={busZ} />
      
      {/* Stop shelters */}
      {stops.map((stop, i) => (
        <StopShelter key={i} position={[-8, 0, stop.z]} name={stop.name} />
      ))}
      
      {/* Buildings */}
      {buildings.map((b, i) => (
        <Building key={i} position={[b.position[0] + busZ * 0, b.position[1], b.position[2]]} variant={b.variant} />
      ))}
      
      {/* Street lamps */}
      {Array.from({ length: 40 }).map((_, i) => (
        <StreetLamp key={i} position={[i % 2 === 0 ? -6.5 : 6.5, 0, i * 30]} />
      ))}
    </group>
  );
}