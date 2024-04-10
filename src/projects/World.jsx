import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Experience from './Experience'
import { Html, OrbitControls } from '@react-three/drei'


const World = () => {
    return (
        <div className='w-full h-[500px] hidden lg:flex lg:h-screen  lg:w-full z-40'>
            <Canvas camera={{ position: [0, 0, 0.1], fov: 35 }}>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2} />
                <Suspense fallback={<Loader />}>
                    <Experience />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default World

function Loader() {
    return <Html center>
        <div className='bg-black w-screen h-screen flex flex-col justify-center items-center'>
            <div className="loader border-t-[6px] rounded-full border-[#150b46] animate-spin
aspect-square w-16 flex justify-center items-center ">
            </div>
        </div>
    </Html>

}
