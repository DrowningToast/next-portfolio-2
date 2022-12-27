import { useFrame } from "@react-three/fiber";
import { FC, useMemo, useRef } from "react";
import { ShaderMaterial } from "three";
import ProjectSphereFragmentShader from "../shader/ProjectSphere/ProjectSphereFragment.glsl";
import ProjectSphereVertexShader from "../shader/ProjectSphere/ProjectSphereVertex.glsl";

const ProjectSphere: FC = () => {
  const uniforms = useMemo(() => {
    return {
      u_time: {
        value: 0,
      },
      u_amplitude: {
        value: 0.1,
      },
    };
  }, []);

  const sphere = useRef<ShaderMaterial>(null);

  useFrame((state) => {
    const { clock } = state;
    if (!sphere.current?.uniforms) return;
    sphere.current.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <>
      <mesh castShadow receiveShadow>
        <sphereBufferGeometry args={[1, 128, 128]} />
        <shaderMaterial
          ref={sphere}
          vertexShader={ProjectSphereVertexShader}
          fragmentShader={ProjectSphereFragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

export default ProjectSphere;
