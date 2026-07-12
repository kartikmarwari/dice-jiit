import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Simplified lower-poly dice for loader / footer / decorative use.
 * No pips, faster render.
 */
export default function MiniDice({ fast = false }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    const speed = fast ? 2.4 : 0.9;
    ref.current.rotation.x += delta * speed * 0.6;
    ref.current.rotation.y += delta * speed;
  });
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          emissive="#3b82f6"
          emissiveIntensity={0.35}
          metalness={0.5}
          roughness={0.25}
          transmission={0.35}
          thickness={1}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[1.21, 1.21, 1.21]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.4} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1.1}
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}
