import React from 'react'
import World from '../projects/World'
import { Link } from 'react-router-dom'
import AllProjects from './AllProjects'
import { Homeprojects } from '../projects/util'

const Projects = () => {
    return (
        <div className='lg:h-screen mt-4  relative w-full mx-auto text-center  z-10'>
            <World />
            <div className='lg:absolute top-[-10px] right-[145px] lg:top-[0px] lg:right-[410px] xl:right-[670px]'>
                <h1 className='font-cabinet font-extrabold text-white text-4xl lg:text-5xl'>Projects</h1>
            </div>

            <AllProjects projects={Homeprojects} />
            <div className='text-right p-6  lg:hidden'>
                <Link to='/projects' className='text-white '>More &rarr; </Link>
            </div>
        </div>
    )
}

export default Projects