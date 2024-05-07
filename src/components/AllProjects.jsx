import React from 'react'

const AllProjects = ({ projects }) => {
    return (
        <div className='py-10  relative w-full mx-auto ' >
            <div>
                {projects.map((project) => (
                    <div className=' mx-auto flex flex-col gap-4 lg:hidden mt-10 px-6' key={project.text}>
                        <div className='lg:ml-2 w-full bg-[#00000030] shadow-equal shadow-[#150b46] rounded-lg  saturate-100 backdrop-blur-md p-4'>

                            <a href={project.link}>
                                <img src={`projects/img${project.i}.png`} className=' mx-auto  rounded mb-2'>
                                </img>
                            </a>

                            <h1 className=' text-white text-xl  font-cabinet font-bold'>{project.text}</h1>

                            <p className='mb-2  text-gray-400 text-[13px] lg:text-[15px] font-satoshi font-normal '>
                                {project.about}                            </p>
                            <div className='flex gap-6 justify-center'>
                                <p className='border-gray-400 border flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                                    {project.tech1}                                </p>
                                <p className='border-gray-400 border  flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base  rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                                    {project.tech2}                      </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProjects