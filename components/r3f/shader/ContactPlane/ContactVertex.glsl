#pragma glslify: snoise = require(glsl-noise/simplex/2d)

varying vec3 vPosition;
varying vec2 vUv;

void main() {

  vUv = uv;
  vPosition = position;

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
