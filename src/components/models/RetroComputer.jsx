import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const RetroComputer = (props) => {
  const { nodes, materials } = useGLTF("./models/retro-computer.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-3.688, 0.067, 7.965]}
        scale={[2.162, 0.17, 1.87]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[0.42, -0.172, 8.187]}
        scale={[0.634, 0.634, 0.78]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer.geometry}
        material={materials.com}
        position={[0.408, 2.286, 4.778]}
        scale={[1.223, 2.298, 2.298]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.com}
        position={[0.408, 2.286, 4.778]}
        scale={[1.231, 2.298, 2.298]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor.geometry}
        material={materials.com}
        position={[-3.808, 3.056, 5.928]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.804, 2.804, 2.578]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor001.geometry}
        material={materials.bamen}
        position={[-3.808, 3.056, 5.928]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.804, 2.804, 2.578]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.led.geometry}
        material={materials["Material.001"]}
        position={[-0.365, 3.016, 5.835]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer001.geometry}
        material={materials["Material.003"]}
        position={[0.408, 2.286, 4.778]}
        scale={[1.223, 2.298, 2.298]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer002.geometry}
        material={materials.Material}
        position={[0.408, 2.286, 4.778]}
        scale={[1.223, 2.298, 2.298]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer003.geometry}
        material={materials["Material.003"]}
        position={[0.408, 2.286, 4.778]}
        scale={[1.223, 2.298, 2.298]}
      />
    </group>
  );
};

export default RetroComputer;

// useGLTF.preload("/retro-computer.glb");
