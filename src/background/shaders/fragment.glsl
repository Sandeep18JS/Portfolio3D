uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
varying vec3 vColor;

varying vec2 vUv;

float circle(vec2 uv, vec2 circlePosition, float radius) {
	float dist = distance(circlePosition, uv);
	return 0.6 - smoothstep(0.0, radius, dist);
}

void main() {
	vec2 mousePositions = u_mouse * 0.5 + 0.5;
	// float circleShape = circle(vUv, mousePositions, 0.3);
	// vec3 colorA = vec3(0.0980392, 0.0, 0.2039216);
	// vec3 colorB = vec3(0.9764706, 0.0509804, 0.5607843);
	// vec3 colorC = vec3(0.3215686, 0.2352941, 0.5647059);

	// float smoothCircle = smoothstep(0.0, 0.9, circleShape);
	// vec3 gradient = mix(colorB, colorC, smoothCircle);
	// vec3 finalColor = mix(colorA, gradient, smoothCircle);
	// gl_FragColor = vec4(vUv, 0.0, 1.0);
	gl_FragColor = vec4(vColor, 1.0);

}
