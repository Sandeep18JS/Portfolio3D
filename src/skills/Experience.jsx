import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Billboard, Image, } from '@react-three/drei'
import * as THREE from "three"

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)

    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])

    useFrame(() => {
        ref.current.material.color.lerp(color.set(hovered ? '#f20f8f' : 'white'), 0.1)
    })

    return (
        <Billboard  {...props}>
            <Image
                transparent
                scale={4.25}
                ref={ref}
                onPointerOver={over}
                onPointerOut={out}
                url={children}
            >
            </Image>
        </Billboard>
    )
}

function Sphere({ count = 0, radius = 20, svgs }) {
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count

    const sphericalSvgs = []
    for (let i = 1; i < count + 1; i++) {
        for (let j = 0; j < count; j++) {
            const pos = new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j))
            const svgIndex = (i * count + j) % svgs.length
            sphericalSvgs.push([pos, svgs[svgIndex]])
        }
    }
    return sphericalSvgs.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

const Experience = () => {
    const sphereRef = useRef()
    const svgs = [
        '/skills/html.png',
        '/skills/gsap.png',
        '/skills/css.png',
        '/skills/js.png',
        '/skills/tailwind.png',
        '/skills/three.png',
        '/skills/next.png',
        '/skills/git.png',
        '/skills/react.png',
        '/skills/ts.png',
        '/skills/blender.png'
    ]
    useFrame(() => {
        sphereRef.current.rotation.x += 0.005
        // sphereRef.current.rotation.y += 0.01

    })
    return (
        <group ref={sphereRef} rotation={[7.5, 0, 0]}>
            <Sphere count={6} radius={28} svgs={svgs} />
        </group>
    )
}

export default Experience