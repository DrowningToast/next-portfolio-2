import {
  Center,
  Environment,
  Float,
  PerspectiveCamera,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bust } from "./Bust_very_low";

const HeroScene = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100%",
      }}
      shadows
    >
      {/* <color attach="background" args={["black"]} /> */}
      {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
      <SpotLight
        distance={5}
        angle={0.15}
        attenuation={5}
        anglePower={5}
        castShadow
        color="#b00c3f"
        receiveShadow
      >
        <Center>
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.2}
            floatingRange={[1, 2]}
          >
            <group scale={8}>
              <Bust />
            </group>
          </Float>
        </Center>
      </SpotLight>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <Environment preset="dawn" />
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default HeroScene;
