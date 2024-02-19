import {
  Backdrop,
  Center,
  OrbitControls,
  OrthographicCamera,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMotionValue } from "framer-motion";
import { FC } from "react";
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

      <OrbitControls />
      <OrthographicCamera
        makeDefault
        zoom={100}
        near={1}
        far={5000}
        position={[0, 0, 18]}
      />
    </Canvas>
  );
};

export default ContactScene;
