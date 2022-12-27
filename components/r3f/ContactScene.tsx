import {
  Center,
  OrbitControls,
  OrthographicCamera,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionValue } from "framer-motion";
import { FC, useRef } from "react";
import { Camera } from "three";
import ContactPlane from "./components/ContactPlane";

const ContactScene: FC = () => {
  const xPos = useMotionValue(0);
  const yPos = useMotionValue(0);

  return (
    <Canvas
      onMouseMove={(e) => {
        xPos.set(e.clientX);
        yPos.set(e.clientY);
      }}
    >
      <ContactPlane xPos={xPos} yPos={yPos} />
      <ambientLight intensity={0.8} />
      <OrthographicCamera
        makeDefault
        zoom={100}
        near={1}
        far={5000}
        position={[0, 18, 0]}
      />
      <OrbitControls />
    </Canvas>
  );
};

export default ContactScene;
