#pragma glslify: snoise3D = require(glsl-noise/simplex/3d)

uniform float u_time;
uniform float u_scale;
uniform float u_size;
uniform float u_density;
uniform float u_amplitude;

varying vec2 vUv;

float patternLine(float v) {
  float f = abs(fract(v) - .5);
  float df = fwidth(v) * u_density;
  return smoothstep(0., df, f);
}

void main() {
  vec3 p = vec3(vUv * u_scale, 0.0);
  float v = 0.0;

  float amp = u_amplitude;

  for (int i = 0; i < 3; i++) {
    v += snoise3D(p + (u_time * 0.1) * float(i)) * amp;
    amp *= 0.5;
    p *= 2.0;
  }
  v /= u_size;

  float t = patternLine(v);
  vec3 color = vec3(mix(.1, .98, abs(t - 1.)));

  gl_FragColor = vec4(color, 1.0);
}