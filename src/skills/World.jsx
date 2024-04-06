import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Experience from './Experience'
import { TrackballControls } from '@react-three/drei'


const World = () => {
    return (
        <div className='w-full h-[500px] lg:w-full lg:h-[600px] z-40'>
            <Canvas camera={{ position: [0, 0, 47.5], fov: 95 }}>
                <Suspense>
                    <Experience />
                </Suspense>
                <TrackballControls noZoom />
            </Canvas>
        </div>
    )
}

export default World