import React, { useEffect, useState } from 'react'
import World from '../hero/World'

const Hero = () => {
    const [width, setWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth > 1280);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
    });
    return (
        <>
            {
                width ? (<div className='xl:h-screen w-full  mx-auto text-white font-bold' >

                    <World />
                </div>) : (
                    <div className='flex flex-col items-center justify-center  h-screen w-full  mx-auto  relative text-white font-bold  tracking-wider text-center ' >
                        <h1 className='font-cabinet font-black text-[44px] lg:text-[70px]'>Hi,I'm Sandeep,</h1>
                        <p className='font-cabinet font-black  text-[44px] lg:text-[70px]'>Front End Web Developer</p>
                    </div>
                )
            }
        </>

    )
}

export default Hero