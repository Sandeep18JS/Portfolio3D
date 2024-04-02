import React, { Suspense } from 'react'
import Experience from './Experience'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'

const World = () => {
    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                <Experience />
            </Suspense>
        </Canvas>
    )
}

export default World

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}