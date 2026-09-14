"use client";

import { useMemo, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, Float, Html, Line, Sparkles } from "@react-three/drei";

/* ------------------------------ design tokens ----------------------------- */

const JADE = "#0e866b";
const JADE_STRONG = "#0a6b53";
const JADE_BRIGHT = "#43d9a3";
const RING = 3.45;

/* --------------------------- reduced-motion hook -------------------------- */

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/* ------------------------------ service nodes ----------------------------- */

type NodeKind = "web" | "data" | "ai" | "cloud" | "enterprise" | "consult";

const SERVICES: { kind: NodeKind; label: string; angle: number; y: number; labelY: number }[] = [
  { kind: "web", label: "Web Applications", angle: 0.52, y: 0.62, labelY: 0.82 },
  { kind: "data", label: "Data & Analytics", angle: Math.PI / 3 + 0.52, y: -0.6, labelY: -0.84 },
  { kind: "ai", label: "AI Integration", angle: (2 * Math.PI) / 3 + 0.52, y: 0.6, labelY: 0.82 },
  { kind: "cloud", label: "Cloud Services", angle: Math.PI + 0.52, y: -0.6, labelY: -0.84 },
  { kind: "enterprise", label: "Enterprise Software", angle: (4 * Math.PI) / 3 + 0.52, y: 0.62, labelY: 0.82 },
  { kind: "consult", label: "IT Consulting", angle: (5 * Math.PI) / 3 + 0.52, y: -0.6, labelY: -0.84 },
];

function SolidMat() {
  return (
    <meshStandardMaterial
      color={JADE}
      metalness={0.45}
      roughness={0.3}
      emissive={JADE}
      emissiveIntensity={0.22}
    />
  );
}

function NodeGeometry({ kind }: { kind: NodeKind }) {
  switch (kind) {
    case "web":
      return (
        <group>
          <mesh>
            <boxGeometry args={[0.66, 0.5, 0.07]} />
            <SolidMat />
            <Edges color={JADE_BRIGHT} threshold={15} />
          </mesh>
          <mesh position={[0, 0.33, 0]}>
            <boxGeometry args={[0.66, 0.15, 0.05]} />
            <meshStandardMaterial
              color="#1b211e"
              metalness={0.4}
              roughness={0.4}
              emissive={JADE}
              emissiveIntensity={0.12}
            />
            <Edges color={JADE_BRIGHT} threshold={15} />
          </mesh>
        </group>
      );
    case "data":
      return (
        <group>
          {[-0.15, 0, 0.15].map((y) => (
            <mesh key={y} position={[0, y, 0]}>
              <cylinderGeometry args={[0.27, 0.27, 0.12, 24]} />
              <SolidMat />
              <Edges color={JADE_BRIGHT} threshold={20} />
            </mesh>
          ))}
        </group>
      );
    case "ai":
      return (
        <group>
          <mesh>
            <icosahedronGeometry args={[0.4, 0]} />
            <meshBasicMaterial color={JADE_BRIGHT} wireframe transparent opacity={0.7} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.17, 20, 20]} />
            <meshStandardMaterial
              color={JADE_STRONG}
              emissive={JADE}
              emissiveIntensity={1.2}
              roughness={0.3}
            />
          </mesh>
        </group>
      );
    case "cloud":
      return (
        <group>
          <mesh position={[-0.17, -0.03, 0]}>
            <sphereGeometry args={[0.19, 20, 20]} />
            <SolidMat />
          </mesh>
          <mesh position={[0.04, 0.1, 0]}>
            <sphereGeometry args={[0.25, 20, 20]} />
            <SolidMat />
          </mesh>
          <mesh position={[0.25, -0.02, 0]}>
            <sphereGeometry args={[0.17, 20, 20]} />
            <SolidMat />
          </mesh>
        </group>
      );
    case "enterprise":
      return (
        <mesh>
          <octahedronGeometry args={[0.44, 0]} />
          <SolidMat />
          <Edges color={JADE_BRIGHT} threshold={15} />
        </mesh>
      );
    case "consult":
      return (
        <group>
          <mesh rotation={[Math.PI / 2.6, 0.3, 0]}>
            <torusGeometry args={[0.28, 0.1, 16, 40]} />
            <SolidMat />
            <Edges color={JADE_BRIGHT} threshold={25} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial color={JADE_STRONG} emissive={JADE} emissiveIntensity={1.1} />
          </mesh>
        </group>
      );
  }
}

const _pulse = new THREE.Vector3();

function Pulse({
  pos,
  offset,
  reduced,
}: {
  pos: THREE.Vector3;
  offset: number;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (reduced) return;
    const t = (state.clock.elapsedTime * 0.22 + offset * 0.4) % 1;
    _pulse.copy(pos).multiplyScalar(t);
    _pulse.y += Math.sin(t * Math.PI) * 0.35;
    ref.current.position.copy(_pulse);
    ref.current.scale.setScalar(0.55 + Math.sin(t * Math.PI) * 0.55);
  });
  return (
    <mesh ref={ref} scale={0.001}>
      <sphereGeometry args={[0.055, 12, 12]} />
      <meshBasicMaterial color={JADE_BRIGHT} transparent opacity={0.9} />
    </mesh>
  );
}

function ServiceNode({
  service,
  reduced,
}: {
  service: (typeof SERVICES)[number];
  reduced: boolean;
}) {
  const mesh = useRef<THREE.Group>(null!);

  const position = useMemo(
    () =>
      new THREE.Vector3(
        Math.cos(service.angle) * RING,
        service.y,
        Math.sin(service.angle) * RING
      ),
    [service]
  );

  const linePoints = useMemo(() => {
    const mid = position.clone().multiplyScalar(0.5);
    mid.y += 0.45;
    mid.multiplyScalar(1.14);
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 0, 0),
      mid,
      position
    );
    return curve.getPoints(40);
  }, [position]);

  useFrame((_, dt) => {
    if (reduced) return;
    mesh.current.rotation.y += dt * 0.45;
    mesh.current.rotation.x += dt * 0.18;
  });

  return (
    <group>
      <Float
        speed={reduced ? 0 : 1.6}
        rotationIntensity={reduced ? 0 : 0.35}
        floatIntensity={reduced ? 0 : 0.85}
        floatingRange={[-0.08, 0.08]}
      >
        <group position={position}>
          <group ref={mesh}>
            <NodeGeometry kind={service.kind} />
          </group>
          <Html
            center
            position={[0, service.labelY, 0]}
            zIndexRange={[30, 10]}
            wrapperClass="pointer-events-none select-none"
            style={{ pointerEvents: "none" }}
          >
            <span className="inline-flex items-center whitespace-nowrap rounded border border-white/10 bg-[#131715]/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-jade-bright shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-2.5 sm:py-1.5 sm:text-[10px]">
              {service.label}
            </span>
          </Html>
        </group>
      </Float>
      <Line points={linePoints} color={JADE_BRIGHT} transparent opacity={0.3} lineWidth={1} />
      <Pulse pos={position} offset={service.angle} reduced={reduced} />
    </group>
  );
}

/* --------------------------------- the core -------------------------------- */

function Core({ reduced }: { reduced: boolean }) {
  const wire = useRef<THREE.Mesh>(null!);
  const inner = useRef<THREE.Mesh>(null!);

  useFrame((state, dt) => {
    if (reduced) return;
    wire.current.rotation.y -= dt * 0.16;
    wire.current.rotation.x += dt * 0.06;
    inner.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.05);
  });

  return (
    <group>
      <mesh ref={wire}>
        <icosahedronGeometry args={[1.12, 1]} />
        <meshBasicMaterial color={JADE_BRIGHT} wireframe transparent opacity={0.38} />
      </mesh>
      <mesh ref={inner}>
        <sphereGeometry args={[0.52, 32, 32]} />
        <meshStandardMaterial
          color={JADE_STRONG}
          emissive={JADE}
          emissiveIntensity={1.1}
          metalness={0.2}
          roughness={0.25}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.82, 24, 24]} />
        <meshBasicMaterial color={JADE} transparent opacity={0.08} depthWrite={false} />
      </mesh>
      <Sparkles
        count={50}
        scale={[2.6, 2.6, 2.6]}
        size={2.2}
        speed={reduced ? 0 : 0.35}
        color={JADE_BRIGHT}
        opacity={0.6}
      />
      <pointLight color={JADE_BRIGHT} intensity={14} distance={9} decay={2} />
    </group>
  );
}

/* --------------------------------- dust ----------------------------------- */

function Dust({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i++) {
      const r = 4.6 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.cos(phi) * 0.6;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (reduced) return;
    ref.current.rotation.y += dt * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#9aa39e"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ------------------------------ motion rigs -------------------------------- */

function Spin({ reduced, children }: { reduced: boolean; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (reduced) return;
    group.current.rotation.y += dt * 0.07;
  });
  return <group ref={group}>{children}</group>;
}

function Rig({ reduced }: { reduced: boolean }) {
  useFrame((state, dt) => {
    if (reduced) return;
    const { camera, pointer } = state;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.85, 2, dt);
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      0.35 + pointer.y * 0.55,
      2,
      dt
    );
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneContents({ reduced }: { reduced: boolean }) {
  const width = useThree((s) => s.size.width);
  const scale = width < 640 ? 0.7 : width < 1024 ? 0.85 : 1.05;

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 7, 5]} intensity={1.2} />
      <directionalLight position={[-6, -3, -5]} intensity={0.5} color={JADE} />
      <Rig reduced={reduced} />
      <group rotation={[0.14, 0, 0]}>
        <Spin reduced={reduced}>
          <group scale={scale}>
            <Core reduced={reduced} />
            {SERVICES.map((s) => (
              <ServiceNode key={s.kind} service={s} reduced={reduced} />
            ))}
            <Dust reduced={reduced} />
          </group>
        </Spin>
      </group>
    </>
  );
}

/* --------------------------------- export ---------------------------------- */

export default function HeroScene() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={reduced ? "demand" : "always"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.35, 8.2], fov: 42 }}
      >
        <SceneContents reduced={reduced} />
      </Canvas>
    </div>
  );
}
