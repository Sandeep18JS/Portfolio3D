import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'

const World = () => {
    return (
        <div className='absolute w-full h-full '>
            <Canvas>
                <Experience />
            </Canvas>
        </div>
    )
}

export default World