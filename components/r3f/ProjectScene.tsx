import {
  Backdrop,
  Center,
  MeshWobbleMaterial,
  OrbitControls,
  Sky,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, useMemo } from "react";
import ProjectSphere from "./components/ProjectSphere";

const ProjectScene: FC = () => {
  const uniforms = useMemo(() => {
    return {
      u_time: {
        value: 0,
      },
    };
  }, []);

  return (
    <Canvas shadows>
      <SpotLight
        distance={5}
        position={[0, 5, 0]}
        castShadow
        color="#b00c3f"
        receiveShadow
      >
        <Center>
          <ProjectSphere />
        </Center>
      </SpotLight>
      {/* <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      /> */}
      <OrbitControls />
      <ambientLight intensity={1} />
    </Canvas>
  );
};

export default ProjectScene;
