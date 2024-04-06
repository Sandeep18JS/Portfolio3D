import React from 'react'
import World from '../projects/World'

const Projects = () => {
    return (
        <div className='lg:h-screen mt-4  relative w-full mx-auto text-center  z-10'>
            <World />
            <div className='absolute top-[-10px] right-[145px] lg:top-[0px] lg:right-[680px]'>
                <h1 className='font-cabinet font-extrabold text-white text-4xl lg:text-5xl'>Projects</h1>
            </div>
        </div>
    )
}

export default Projects