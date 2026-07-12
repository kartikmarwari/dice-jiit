import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Pip positions for each face (1..6) of a standard dice.
 * Face is a plane at z = +size/2 (front face); we rotate the group to place on each face.
 */
const PIP_LAYOUTS = {
  1: [[0, 0]],
  2: [[-0.4, 0.4], [0.4, -0.4]],
  3: [[-0.4, 0.4], [0, 0], [0.4, -0.4]],
  4: [[-0.4, 0.4], [0.4, 0.4], [-0.4, -0.4], [0.4, -0.4]],
  5: [[-0.4, 0.4], [0.4, 0.4], [0, 0], [-0.4, -0.4], [0.4, -0.4]],
  6: [
    [-0.4, 0.5], [0.4, 0.5],
    [-0.4, 0], [0.4, 0],
    [-0.4, -0.5], [0.4, -0.5],
  ],
};

// face rotations: [rotX, rotY] to bring face to z+
const FACE_ROTATIONS = {
  1: [0, 0],
  6: [0, Math.PI],
  2: [0, -Math.PI / 2],
  5: [0, Math.PI / 2],
  3: [-Math.PI / 2, 0],
  4: [Math.PI / 2, 0],
};

function Pip({ position, color = "#22d3ee" }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.11, 20, 20]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.4}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

function DiceFace({ faceNumber, size = 1 }) {
  const [rx, ry] = FACE_ROTATIONS[faceNumber];
  const half = size / 2 + 0.001;
  return (
    <group rotation={[rx, ry, 0]}>
      <group position={[0, 0, half]}>
        {PIP_LAYOUTS[faceNumber].map(([x, y], i) => (
          <Pip key={i} position={[x * (size / 1.4), y * (size / 1.4), 0.02]} />
        ))}
      </group>
    </group>
  );
}

export default function Dice({
  size = 1.6,
  autoRotate = true,
  pointer = { x: 0, y: 0 },
  rolling = false,
  onRollEnd,
}) {
  const group = useRef();
  const rollState = useRef({ active: false, t: 0, duration: 1.2, targetQ: null, startQ: null });

  useFrame((_, delta) => {
    if (!group.current) return;

    if (rolling && !rollState.current.active) {
      rollState.current.active = true;
      rollState.current.t = 0;
      rollState.current.startQ = group.current.quaternion.clone();
      // choose random face target rotation
      const eulers = [
        [0, 0, 0],
        [0, Math.PI / 2, 0],
        [Math.PI / 2, 0, 0],
        [0, Math.PI, 0],
        [-Math.PI / 2, 0, 0],
        [0, -Math.PI / 2, 0],
      ];
      const pick = eulers[Math.floor(Math.random() * eulers.length)];
      const tumble = new THREE.Euler(
        pick[0] + Math.PI * 2 * (1 + Math.random()),
        pick[1] + Math.PI * 2 * (1 + Math.random()),
        pick[2] + Math.PI * (0.5 + Math.random())
      );
      rollState.current.targetQ = new THREE.Quaternion().setFromEuler(tumble);
    }

    if (rollState.current.active) {
      rollState.current.t += delta;
      const p = Math.min(rollState.current.t / rollState.current.duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      group.current.quaternion.slerpQuaternions(
        rollState.current.startQ,
        rollState.current.targetQ,
        eased
      );
      // slight bounce on scale
      const bounce = 1 + Math.sin(p * Math.PI) * 0.06;
      group.current.scale.setScalar(bounce);
      if (p >= 1) {
        rollState.current.active = false;
        group.current.scale.setScalar(1);
        onRollEnd && onRollEnd();
      }
      return;
    }

    if (autoRotate) {
      group.current.rotation.x += delta * 0.35 + pointer.y * 0.02;
      group.current.rotation.y += delta * 0.5 + pointer.x * 0.02;
    }
  });

  // Beveled cube geometry (rounded via subdivision-lite)
  const geometry = useMemo(() => {
    const g = new THREE.BoxGeometry(size, size, size, 1, 1, 1);
    return g;
  }, [size]);

  return (
    <group ref={group}>
      {/* Outer glassy cube */}
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#1a1a2e"
          roughness={0.15}
          metalness={0.4}
          transmission={0.55}
          thickness={1.2}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.15}
          emissive="#3b82f6"
          emissiveIntensity={0.18}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Inner glowing core */}
      <mesh>
        <boxGeometry args={[size * 0.6, size * 0.6, size * 0.6]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.9}
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Edge glow via wireframe */}
      <mesh>
        <boxGeometry args={[size * 1.005, size * 1.005, size * 1.005]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Pips on 6 faces */}
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <DiceFace key={n} faceNumber={n} size={size} />
      ))}
    </group>
  );
}
