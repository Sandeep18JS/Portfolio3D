import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Experience from './Experience'
import { TrackballControls } from '@react-three/drei'


const World = () => {
    const [width, setWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth > 1024);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
    });

    return (
        <div className='w-full h-[500px] lg:w-full lg:h-[600px] z-40'>
            <Canvas camera={{ position: [0, 0, 47.5], fov: 95 }}>
                <Suspense>
                    <Experience />
                </Suspense>
                {width ? (<TrackballControls noZoom />) : ("")}
            </Canvas>
        </div>
    )
}

export default World