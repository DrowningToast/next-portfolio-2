import { useFrame, useThree } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { FC, useMemo, useRef } from "react";
import {
  BackSide,
  BufferGeometry,
  Color,
  DoubleSide,
  FrontSide,
  Material,
  Mesh,
  ShaderMaterial,
} from "three";
import ContactFragment from "../shader/ContactPlane/ContactFragment.glsl";
import ContactVertex from "../shader/ContactPlane/ContactVertex.glsl";

interface Props {
  xPos: MotionValue;
  yPos: MotionValue;
}

const ContactPlane: FC<Props> = ({ xPos, yPos }) => {
  const mesh = useRef<Mesh<BufferGeometry, ShaderMaterial>>(null);

  const uniforms = useMemo(() => {
    return {
      u_time: {
        value: 0.0,
      },
      u_density: {
        value: 1,
      },
      u_size: {
        value: 0.2,
      },
      u_scale: {
        value: 1.5,
      },
      u_amplitude: {
        value: 0.35,
      },
    };
  }, []);

  useFrame((state) => {
    const { clock } = state;
    if (!mesh.current) return;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} >
      <planeGeometry args={[32, 32, 512, 512]} />
      <shaderMaterial
        // wireframe
        transparent
        side={DoubleSide}
        fragmentShader={ContactFragment}
        vertexShader={ContactVertex}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default ContactPlane;
