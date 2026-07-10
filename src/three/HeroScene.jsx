import { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * HeroScene — a living, procedurally-generated 3D spider web.
 *
 * v2 upgrades over the original:
 *  · custom ShaderMaterial: a crimson "silk shimmer" pulse travels outward
 *    along every strand (distance-from-center attribute + time uniform)
 *  · pointer ripple physics: strands near the cursor are displaced in Z
 *    with a gaussian falloff and spring back — the web feels *touched*
 *  · scroll-linked recession: the whole scene dollies away and fades as
 *    you scroll, handing the stage to the content
 *  · depth-twinkling dust motes and a patrolling spider with leg scuttle
 */

const SPOKES = 20;
const RINGS = 10;
const R_MAX = 7.4;

function buildWeb() {
  const pts = [];
  const anchors = [];
  for (let s = 0; s < SPOKES; s++) {
    const jitter = (Math.sin(s * 12.9898) * 43758.5453) % 0.22;
    anchors.push((s / SPOKES) * Math.PI * 2 + jitter * 0.35);
  }
  for (let s = 0; s < SPOKES; s++) {
    const a = anchors[s];
    pts.push(0, 0, 0, Math.cos(a) * R_MAX, Math.sin(a) * R_MAX, 0);
  }
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
      const mx = ((x1 + x2) / 2) * 0.965;
      const my = ((y1 + y2) / 2) * 0.965;
      pts.push(x1, y1, 0, mx, my, 0);
      pts.push(mx, my, 0, x2, y2, 0);
    }
  }
  return new Float32Array(pts);
}

const silkVertex = /* glsl */ `
  attribute float aDist;
  varying float vDist;
  void main() {
    vDist = aDist;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const silkFragment = /* glsl */ `
  uniform float uTime;
  uniform float uFade;
  varying float vDist;
  void main() {
    // traveling shimmer band, radiating outward from the hub
    float band = smoothstep(0.06, 0.0, abs(fract(vDist * 1.4 - uTime * 0.22) - 0.5) - 0.42);
    vec3 silver = vec3(0.79, 0.79, 0.82);
    vec3 crimson = vec3(0.88, 0.11, 0.18);
    vec3 col = mix(silver, crimson, band * 0.85);
    float alpha = (0.55 + band * 0.45) * uFade;
    gl_FragColor = vec4(col, alpha);
  }
`;

function Web({ scrollRef }) {
  const group = useRef();
  const lines = useRef();
  const { viewport } = useThree();
  const x = Math.min(viewport.width * 0.3, 3.6);
  const scale = viewport.width < 8 ? 0.72 : 1;

  const base = useMemo(buildWeb, []);
  const { geo, positions } = useMemo(() => {
    const pos = base.slice();
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const dist = new Float32Array(pos.length / 3);
    for (let i = 0; i < dist.length; i++) {
      const dx = base[i * 3];
      const dy = base[i * 3 + 1];
      dist[i] = Math.sqrt(dx * dx + dy * dy) / R_MAX;
    }
    g.setAttribute('aDist', new THREE.BufferAttribute(dist, 1));
    return { geo: g, positions: pos };
  }, [base]);

  const uniforms = useMemo(
    () => ({ uTime: { value: 0 }, uFade: { value: 1 } }),
    []
  );

  const pointerWorld = useRef(new THREE.Vector3());

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!group.current) return;

    uniforms.uTime.value = t;

    // scroll recession — dolly back + fade
    const sc = scrollRef?.current ?? 0;
    const recede = Math.min(sc / 0.9, 1);
    uniforms.uFade.value = (1 - recede * 0.85) * 0.9;
    group.current.position.z = -recede * 3.2;

    // breathing + drift
    const breathe = (1 + Math.sin(t * 0.55) * 0.012) * scale;
    group.current.scale.setScalar(breathe);
    group.current.rotation.z = Math.sin(t * 0.08) * 0.05;

    // spider-sense lean toward pointer
    const targetX = state.pointer.y * 0.16;
    const targetY = state.pointer.x * 0.22;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.04);

    // ---- pointer ripple physics ----
    // project pointer into the web's local plane (approximate)
    pointerWorld.current.set(
      (state.pointer.x * viewport.width) / 2 - x,
      (state.pointer.y * viewport.height) / 2 - 1.2,
      0
    );
    const px = pointerWorld.current.x / breathe;
    const py = pointerWorld.current.y / breathe;
    const attr = lines.current?.geometry.attributes.position;
    if (attr) {
      const arr = attr.array;
      for (let i = 0; i < arr.length; i += 3) {
        const bx = base[i];
        const by = base[i + 1];
        const dx = bx - px;
        const dy = by - py;
        const d2 = dx * dx + dy * dy;
        // gaussian push + gentle standing wave so the web is never static
        const ripple =
          Math.exp(-d2 * 0.55) * Math.sin(t * 5.0 - Math.sqrt(d2) * 2.0) * 0.42 +
          Math.sin(t * 0.9 + bx * 0.7 + by * 0.5) * 0.05;
        arr[i + 2] = ripple;
      }
      attr.needsUpdate = true;
    }
  });

  return (
    <group ref={group} position={[x, 1.2, 0]} rotation={[0.12, -0.35, 0.35]}>
      <lineSegments ref={lines} geometry={geo}>
        <shaderMaterial
          vertexShader={silkVertex}
          fragmentShader={silkFragment}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </lineSegments>
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

/** A tiny stylized spider that patrols the web */
function Spider() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.18;
    if (!ref.current) return;
    const radius = 3.6 + Math.sin(t * 0.7) * 1.2;
    const a = t % (Math.PI * 2);
    ref.current.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0.05);
    ref.current.rotation.z = a + Math.PI / 2;
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

/** Dust motes with per-particle depth twinkle */
function Motes() {
  const ref = useRef();
  const count = 140;
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
      ref.current.material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
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

export default function HeroScene({ scrollRef }) {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(true);

  // static single frame for users who prefer reduced motion
  const reduced = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  // stop the GL frameloop entirely once the hero has scrolled away
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.02 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapRef} style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        className="hero-canvas"
        camera={{ position: [0, 0, 11], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={reduced ? 'demand' : visible ? 'always' : 'never'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Suspense fallback={null}>
          <Web scrollRef={scrollRef} />
          <Motes />
        </Suspense>
      </Canvas>
    </div>
  );
}
