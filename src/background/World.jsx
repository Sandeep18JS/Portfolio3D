import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Experience from './Experience'

const World = () => {
    return (
        <div className='absolute w-full h-full '>
            <Canvas>
                <Suspense fallback={null}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default World
