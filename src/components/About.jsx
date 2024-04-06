import React from 'react'
import World from '../skills/World'

const About = () => {
    return (
        <div className='max-w-7xl  mx-auto text-center relative  lg:mt-24'>
            <h1 className='font-cabinet font-extrabold text-white text-4xl lg:text-5xl'>About</h1>

            <div className='flex flex-col lg:flex-row lg:gap-2 '>
                <div className='font-satoshi w-full px-6  lg:px-16 lg:py-14'>
                    <p className='text-2xl lg:text-3xl text-gray-100 text-justify font-semibold mt-14 mb-8'>WHO AM I  ?</p>
                    <div className='space-y-5 text-md lg:text-lg text-gray-300 font-thin  text-justify '>
                        <p>
                            A Front-end Developer from India with a degree in Computer Science,  My passion lies in crafting captivating user interfaces that push the boundaries of the web.
                        </p>
                        <p>
                            With technologies like React, Next.js, GSAP, and Tailwind CSS, I specialize in building performant, responsive interfaces that come alive with smooth animations.
                        </p>
                        <p>
                            In addition, I use Three.js to animate 3D graphics, creating immersive web experiences. My drive for innovation pushes me to integrate these elements into UI, constantly advancing front-end development."
                        </p>
                    </div>
                </div>
                <World />
            </div>
        </div>
    )
}

export default About

