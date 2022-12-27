#pragma glslify: snoise = require(glsl-noise/simplex/4d)

uniform float u_time;
uniform float u_amplitude;

varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vNormal;

void main() {

  vUv = uv;
  vPosition = position;
  vNormal = normal;

  float noise = snoise(vec4(position, u_time / 1.));

  vec3 newPosition = position + normal * (noise * u_amplitude);

  vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}