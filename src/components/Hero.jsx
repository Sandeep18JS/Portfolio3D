import React from 'react'
import World from '../hero/World'

const Hero = () => {
    return (
        <div className='h-screen max-w-7xl mx-auto  relative text-white font-bold  tracking-wider text-center ' >
            {/* <h1 className='font-cabinet font-black text-[100px]'>Hi,I'm Sandeep,</h1>
            <p className='font-cabinet font-black text-[100px]'>Front End Web Developer</p>
            <p className='text-xl leading-10 font-normal text-gray-400 mt-8 font-satoshi'>Creative front-end developer bringing visions to life as stunning and engaging websites. I bridge the gap between design and functionality, crafting user journeys that convert</p> */}
            <World />
        </div>
    )
}

export default Hero