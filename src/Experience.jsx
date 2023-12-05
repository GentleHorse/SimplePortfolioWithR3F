import { OrbitControls } from "@react-three/drei";
import RetroComputer from "./components/models/RetroComputer.jsx";

export default function Experience() {
  return (
    <>
      <color args={["#554236"]} attach="background" />

      <OrbitControls makeDefault />

      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
        shadow-normalBias={0.04}
      />


      <RetroComputer scale={0.25} />
    </>
  );
}
