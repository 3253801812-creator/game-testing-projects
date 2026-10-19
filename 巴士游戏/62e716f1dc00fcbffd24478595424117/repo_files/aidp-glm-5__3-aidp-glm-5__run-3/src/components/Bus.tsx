// 3D Bus Model Component
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gameStore } from '../store';

interface BusProps {
  position: [number, number, number];
  rotation: number;
}

export function Bus({ position, rotation }: BusProps) {
  const groupRef = useRef<THREE.Group>(null);
  const wheelRefs = useRef<THREE.Mesh[]>([]);
  const doorRef = useRef<THREE.Mesh>(null);
  
  // Wheel animation based on velocity
  useFrame((_, delta) => {
    const vehicleState = gameStore.getVehicleState();
    const wheelRotation = vehicleState.velocity * delta * 2;
    
    wheelRefs.current.forEach(wheel => {
      if (wheel) {
        wheel.rotation.x += wheelRotation;
      }
    });
    
    // Animate door
    if (doorRef.current) {
      const targetX = vehicleState.doorOpen ? 1.2 : 0;
      doorRef.current.position.x += (targetX - doorRef.current.position.x) * 0.1;
    }
  });
  
  // Bus body geometry
  const bodyGeometry = useMemo(() => new THREE.BoxGeometry(2.55, 2.8, 8.9), []);
  const wheelGeometry = useMemo(() => new THREE.CylinderGeometry(0.45, 0.45, 0.35, 16), []);
  
  return (
    <group ref={groupRef} position={position} rotation={[0, rotation, 0]}>
      {/* Main Body */}
      <mesh geometry={bodyGeometry} position={[0, 1.6, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 3.1, 0]} castShadow>
        <boxGeometry args={[2.4, 0.15, 8.5]} />
        <meshStandardMaterial color="#0f0f1a" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Window strip */}
      <mesh position={[0, 2.4, 0]} castShadow>
        <boxGeometry args={[2.56, 0.9, 8.5]} />
        <meshStandardMaterial color="#87ceeb" metalness={0.9} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      
      {/* Front face */}
      <mesh position={[0, 1.8, 4.45]} castShadow>
        <boxGeometry args={[2.35, 1.4, 0.15]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Front windshield */}
      <mesh position={[0, 2.6, 4.42]} castShadow>
        <boxGeometry args={[2.2, 1.0, 0.08]} />
        <meshStandardMaterial color="#4682b4" metalness={0.95} roughness={0.05} transparent opacity={0.8} />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[-0.8, 1.3, 4.48]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={gameStore.getVehicleState().headlights ? 2 : 0} />
      </mesh>
      <mesh position={[0.8, 1.3, 4.48]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={gameStore.getVehicleState().headlights ? 2 : 0} />
      </mesh>
      
      {/* Side windows */}
      {[-1.28, 1.28].map((xOffset, side) => (
        <group key={side}>
          {[0, 1.5, 3, 4.5].map((zOffset, i) => (
            <mesh key={i} position={[xOffset, 2.4, zOffset - 2]} castShadow>
              <boxGeometry args={[0.05, 0.8, 1.2]} />
              <meshStandardMaterial color="#4682b4" metalness={0.9} roughness={0.1} transparent opacity={0.7} />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Door */}
      <mesh ref={doorRef} position={[1.28, 1.6, 2.5]} castShadow>
        <boxGeometry args={[0.08, 2.0, 1.0]} />
        <meshStandardMaterial color="#2d2d44" metalness={0.4} roughness={0.5} />
      </mesh>
      
      {/* Door window */}
      <mesh position={[1.32, 2.0, 2.5]} castShadow>
        <boxGeometry args={[0.02, 0.6, 0.6]} />
        <meshStandardMaterial color="#4682b4" metalness={0.9} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      
      {/* Wheels */}
      {[
        [-1.1, 0.45, 3.2], [1.1, 0.45, 3.2],
        [-1.1, 0.45, -2.8], [1.1, 0.45, -2.8],
        [-1.1, 0.45, -3.5], [1.1, 0.45, -3.5],
      ].map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) wheelRefs.current[i] = el; }}
          geometry={wheelGeometry}
          position={pos as [number, number, number]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color="#111" metalness={0.3} roughness={0.8} />
        </mesh>
      ))}
      
      {/* Wheel rims */}
      {[
        [-1.1, 0.45, 3.2], [1.1, 0.45, 3.2],
        [-1.1, 0.45, -2.8], [1.1, 0.45, -2.8],
        [-1.1, 0.45, -3.5], [1.1, 0.45, -3.5],
      ].map((pos, i) => (
        <mesh key={`rim-${i}`} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.25, 0.25, 0.36, 8]} />
          <meshStandardMaterial color="#666" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
      
      {/* Rear */}
      <mesh position={[0, 1.6, -4.45]} castShadow>
        <boxGeometry args={[2.35, 2.4, 0.15]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Rear windshield */}
      <mesh position={[0, 2.6, -4.42]} castShadow>
        <boxGeometry args={[1.8, 0.8, 0.08]} />
        <meshStandardMaterial color="#4682b4" metalness={0.95} roughness={0.05} transparent opacity={0.7} />
      </mesh>
      
      {/* Tail lights */}
      <mesh position={[-0.9, 1.4, -4.48]} castShadow>
        <boxGeometry args={[0.25, 0.15, 0.05]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.9, 1.4, -4.48]} castShadow>
        <boxGeometry args={[0.25, 0.15, 0.05]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Side mirrors */}
      <mesh position={[-1.5, 2.3, 3.5]} castShadow>
        <boxGeometry args={[0.3, 0.15, 0.3]} />
        <meshStandardMaterial color="#333" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[1.5, 2.3, 3.5]} castShadow>
        <boxGeometry args={[0.3, 0.15, 0.3]} />
        <meshStandardMaterial color="#333" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Side stripe */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[2.56, 0.15, 8.9]} />
        <meshStandardMaterial color="#ffd700" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Destination sign */}
      <mesh position={[0, 3.0, 3.8]} castShadow>
        <boxGeometry args={[1.5, 0.3, 0.1]} />
        <meshStandardMaterial color="#001a00" emissive="#00ff00" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}