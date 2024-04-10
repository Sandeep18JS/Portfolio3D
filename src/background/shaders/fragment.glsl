uniform float u_time;
uniform vec2 u_mouse;
varying vec3 vColor;

varying vec2 vUv;


void main() {
	vec2 mousePositions = u_mouse * 0.5 + 0.5;

	gl_FragColor = vec4(vColor, 1.0);

}
