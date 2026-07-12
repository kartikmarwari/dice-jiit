import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Rotating particle network — points + short connecting lines.
 * Lightweight: reduced particle count on mobile.
 */
export default function ParticleNetwork({ pointer = { x: 0, y: 0 }, isMobile = false }) {
  const group = useRef();
  const count = isMobile ? 60 : 140;

  const { positions, linePositions } = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const pts = [];
    for (let i = 0; i < count; i++) {
      // spherical distribution
      const r = 3 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
      pts.push([x, y, z]);
    }
    // build lines between nearby points
    const lp = [];
    const maxDist = isMobile ? 1.1 : 1.35;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i][0] - pts[j][0];
        const dy = pts[i][1] - pts[j][1];
        const dz = pts[i][2] - pts[j][2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < maxDist) {
          lp.push(pts[i][0], pts[i][1], pts[i][2]);
          lp.push(pts[j][0], pts[j][1], pts[j][2]);
        }
      }
    }
    return { positions: arr, linePositions: new Float32Array(lp) };
  }, [count, isMobile]);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x += delta * 0.03;
    // subtle parallax
    group.current.position.x += (pointer.x * 0.4 - group.current.position.x) * 0.04;
    group.current.position.y += (-pointer.y * 0.3 - group.current.position.y) * 0.04;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.055}
          color="#22d3ee"
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}
