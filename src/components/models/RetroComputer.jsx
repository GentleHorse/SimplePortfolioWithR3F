import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";

const RetroComputer = (props) => {
  const { nodes, materials } = useGLTF("./models/retro-computer.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer.geometry}
        material={materials.com}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.com}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor.geometry}
        material={materials.com}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor001.geometry}
        material={materials.bamen}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer001.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer002.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer003.geometry}
        material={materials["Material.003"]}
      />
    </group>
  );
};

export default RetroComputer;

// useGLTF.preload("/retro-computer.glb");
