import React, { useRef } from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

function AnimateLogo() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />
      <OrbitControls autoRotate />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr"
        resolution={512}
        blur={1}
      />
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.9}
      />
      <Logo />
    </Canvas>
  );
}

function Logo() {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/spotify.glb");

  useFrame(() => {
    ref.current.rotation.y += 0.005;
  });
  return (
    <group ref={ref} rotation-x={Math.PI * 2} rotation-y={Math.PI * 0.25}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Case_low_Case_low_0.geometry}
        material={materials.Case_low}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Parts_b_low_Parts_b_low_0.geometry}
        material={materials.Parts_b_low}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Parts_low_Parts_low_0.geometry}
        material={materials.Parts_low}
      />
    </group>
  );
}

export default AnimateLogo;
