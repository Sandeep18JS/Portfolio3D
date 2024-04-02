import { shaderMaterial } from '@react-three/drei'
import React, { useRef } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import vertextShader from './shaders/vertex.glsl?raw'
import fragmentShader from './shaders/fragment.glsl?raw'
import * as THREE from 'three'


const GradientMaterial = shaderMaterial(
    {
        u_time: 0,
        u_radius: 0.0,
        u_mouse: new THREE.Vector2(),
        u_resolution: new THREE.Vector2(),
        u_color: 0
    },
    vertextShader,
    fragmentShader
)
extend({ GradientMaterial })

const Experience = () => {
    const { viewport, pointer } = useThree()
    const materialRef = useRef()
    let palette = ['#523C90', '#523C90', '#190034']

    palette = palette.map((color) => new THREE.Color(color))

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.u_time.value += 0.0002
            materialRef.current.uniforms.u_mouse.value.set(pointer.x, pointer.y * 0.45)
            materialRef.current.uniforms.u_resolution.value = viewport;
            materialRef.current.uniforms.u_color.value = palette;

        }
    })

    return (
        <>
            <mesh >
                <planeGeometry args={[10, 10, 100, 100]} />
                <gradientMaterial key={GradientMaterial.key} ref={materialRef} toneMapped={false} />
            </mesh>
        </>
    )
}

export default Experience
