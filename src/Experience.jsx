import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
} from "@react-three/drei";
import { useControls } from "leva";
import RetroComputer from "./components/models/RetroComputer.jsx";

export default function Experience() {
  return (
    <>
      <Environment preset="city" />

      <color args={["#554236"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.05, -0.08, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <RetroComputer scale={0.4} position={[1.45, -1.1, -2.2]} />
          <Html
            transform
            wrapperClass="htmlScreen"
            position={[-0.05, 0, 0]}
            distanceFactor={0.61}
          >
            <iframe src="https://www.toshihito.design/" />
          </Html>
          <Text
            font="./fonts/abril-fatface-v23-latin-regular.woff"
            fontSize={0.9}
            position={[-4.8, 2.06, -2.2]}
            rotation-y={Math.PI * 0.1}
            maxWidth={2}
          >
            Toshihito Endo's Portfolio
          </Text>
          <Text
            font="./fonts/courier-prime-v9-latin-regular.woff"
            fontSize={0.15}
            position={[-3.2, -1.2, -1.3]}
            rotation-y={Math.PI * 0.1}
            maxWidth={4}
            color="black"
          >
            3D model is created by @senmurai
            https://www.blendswap.com/blend/26625
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
