import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'


const World = () => {
    return (
        <div className='h-screen  w-full z-40'>
            <Canvas camera={{ position: [0, 0, 0.1], fov: 35 }}>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Suspense>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default World