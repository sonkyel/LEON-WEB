"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  Lightformer,
  ContactShadows,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = "/models/watch.glb";

function WatchModel() {
  const { scene } = useGLTF(MODEL_URL);
  // Auto-escala el modelo a un tamaño objetivo (los GLB vienen en escalas variables).
  const scale = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return 3.6 / maxDim;
  }, [scene]);

  return (
    <Center>
      <group scale={scale} rotation={[0.12, -0.5, 0]}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}
useGLTF.preload(MODEL_URL);

export function Hero3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 30, position: [0, 0.3, 7.5] }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 6, 5]} intensity={2.4} color="#fff4e0" />
      <directionalLight position={[-6, 2, -3]} intensity={1.5} color="#c9a253" />

      <Suspense fallback={null}>
        <WatchModel />
        {/* Iluminación basada en imagen (reflejos en el metal) — sin red */}
        <Environment resolution={256}>
          <Lightformer
            form="rect"
            intensity={2}
            color="#ffffff"
            position={[0, 4, -4]}
            scale={[8, 8, 1]}
          />
          <Lightformer
            form="rect"
            intensity={3}
            color="#e8cd8c"
            position={[-5, 1, 2]}
            scale={[3, 8, 1]}
          />
          <Lightformer
            form="ring"
            intensity={2.5}
            color="#c9a253"
            position={[5, 3, 3]}
            scale={3}
          />
        </Environment>
      </Suspense>

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.55}
        scale={14}
        blur={2.6}
        far={5}
        color="#000000"
      />

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.1}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
