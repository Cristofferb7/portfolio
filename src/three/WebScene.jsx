import { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * WebScene — a procedurally generated 3D spider web.
 * Radial spokes + concentric "capture spiral" rings, built as raw
 * BufferGeometry line segments, gently breathing and tilting toward
 * the pointer like a physical thread structure.
 */

const SPOKES = 18;
const RINGS = 9;
const R_MAX = 7.2;

function buildWeb() {
  const pts = [];
  const anchors = [];
  // slightly irregular spoke angles + per-spoke length noise → organic web
  for (let s = 0; s < SPOKES; s++) {
    const jitter = (Math.sin(s * 12.9898) * 43758.5453) % 0.22;
    anchors.push((s / SPOKES) * Math.PI * 2 + jitter * 0.35);
  }
  // spokes
  for (let s = 0; s < SPOKES; s++) {
    const a = anchors[s];
    pts.push(0, 0, 0, Math.cos(a) * R_MAX, Math.sin(a) * R_MAX, 0);
  }
  // spiral rings (connect neighboring spokes with slight sag)
  for (let r = 1; r <= RINGS; r++) {
    const t = r / RINGS;
    const radius = Math.pow(t, 1.35) * R_MAX;
    for (let s = 0; s < SPOKES; s++) {
      const a1 = anchors[s];
      const a2 = anchors[(s + 1) % SPOKES];
      const x1 = Math.cos(a1) * radius;
      const y1 = Math.sin(a1) * radius;
      const x2 = Math.cos(a2) * radius;
      const y2 = Math.sin(a2) * radius;
      // midpoint sag toward center = catenary feel
      const mx = (x1 + x2) / 2 * 0.965;
      const my = (y1 + y2) / 2 * 0.965;
      pts.push(x1, y1, 0, mx, my, 0);
      pts.push(mx, my, 0, x2, y2, 0);
    }
  }
  return new Float32Array(pts);
}

function Web() {
  const group = useRef();
  const { viewport } = useThree();
  // keep the web hugging the right edge on any screen, centered-ish on phones
  const x = Math.min(viewport.width * 0.30, 3.6);
  const scale = viewport.width < 8 ? 0.72 : 1;
  const positions = useMemo(buildWeb, []);
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;
    // breathing scale + slow drift
    const breathe = (1 + Math.sin(t * 0.55) * 0.012) * scale;
    group.current.scale.setScalar(breathe);
    group.current.rotation.z = Math.sin(t * 0.08) * 0.05;
    // pointer parallax — the web leans toward your cursor (spider-sense)
    const targetX = state.pointer.y * 0.16;
    const targetY = state.pointer.x * 0.22;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.04);
  });

  return (
    <group ref={group} position={[x, 1.2, 0]} rotation={[0.12, -0.35, 0.35]}>
      <lineSegments geometry={geo}>
        <lineBasicMaterial color="#c9c9d1" transparent opacity={0.75} />
      </lineSegments>
      {/* dew drops on intersections */}
      <Dew />
      <Spider />
    </group>
  );
}

function Dew() {
  const ref = useRef();
  const { positions, count } = useMemo(() => {
    const arr = [];
    for (let r = 2; r <= RINGS; r += 2) {
      const t = r / RINGS;
      const radius = Math.pow(t, 1.35) * R_MAX;
      for (let s = 0; s < SPOKES; s += 3) {
        const a = (s / SPOKES) * Math.PI * 2;
        arr.push(Math.cos(a) * radius, Math.sin(a) * radius, 0);
      }
    }
    return { positions: new Float32Array(arr), count: arr.length / 3 };
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 1.4) * 0.25;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#e11d2e" size={0.09} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

/** A tiny stylized spider that patrols the web on a physics-y ease */
function Spider() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.18;
    if (!ref.current) return;
    // parametric path along a spiral ring
    const radius = 3.6 + Math.sin(t * 0.7) * 1.2;
    const a = t % (Math.PI * 2);
    ref.current.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0.05);
    ref.current.rotation.z = a + Math.PI / 2;
    // subtle leg scuttle
    const bob = Math.sin(state.clock.elapsedTime * 9) * 0.02;
    ref.current.position.z = 0.05 + bob;
  });

  return (
    <group ref={ref} scale={0.36}>
      <mesh position={[0, 0.32, 0]}>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshBasicMaterial color="#1d1d1f" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.42, 16, 16]} />
        <meshBasicMaterial color="#e11d2e" />
      </mesh>
      {[...Array(8)].map((_, i) => {
        const side = i < 4 ? 1 : -1;
        const k = i % 4;
        return (
          <mesh
            key={i}
            position={[side * 0.5, 0.3 - k * 0.22, 0]}
            rotation={[0, 0, side * (0.7 - k * 0.35)]}
          >
            <cylinderGeometry args={[0.02, 0.02, 0.9, 6]} />
            <meshBasicMaterial color="#1d1d1f" />
          </mesh>
        );
      })}
    </group>
  );
}

/** Floating particles drifting like dust in volumetric light */
function Motes() {
  const ref = useRef();
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 22;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#9a9aa2" size={0.05} sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}

export default function WebScene() {
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 11], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <Web />
        <Motes />
      </Suspense>
    </Canvas>
  );
}
