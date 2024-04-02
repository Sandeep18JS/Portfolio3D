import React from 'react'
import World from '../projects/World'

const Projects = () => {
    return (
        <div className='h-screen mt-4  relative w-full mx-auto text-center  z-10'>
            <World />
            <div style={{ position: "absolute", top: 30, right: 680 }}>
                <h1 className='font-cabinet font-extrabold text-white text-5xl'>Projects</h1>
            </div>
        </div>
    )
}

export default Projects