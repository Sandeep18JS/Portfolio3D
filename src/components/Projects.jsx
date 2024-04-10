import React from 'react'
import World from '../projects/World'

const Projects = () => {
    return (
        <div className='lg:h-screen mt-4  relative w-full mx-auto text-center  z-10'>
            <World />
            <div className='lg:absolute top-[-10px] right-[145px] lg:top-[0px] lg:right-[410px] xl:right-[670px]'>
                <h1 className='font-cabinet font-extrabold text-white text-4xl lg:text-5xl'>Projects</h1>
            </div>

            <div className='w-[420px] md:w-[500px]  mx-auto flex flex-col gap-4 lg:hidden mt-10 px-6'>
                <div className='lg:ml-2 w-full bg-[#00000030] shadow-equal shadow-[#150b46] rounded-lg  saturate-100 backdrop-blur-md p-6'>

                    <a href='https://furniture-two-eta.vercel.app/'>
                        <img src='projects/img2.png' className=' mx-auto  rounded mb-2'>
                        </img>
                    </a>

                    <h1 className=' text-white text-xl  font-cabinet font-bold'>Furniture</h1>

                    <p className='mb-2  text-gray-400 text-[13px] lg:text-[15px] font-satoshi font-normal '>
                        A Furniture website with captivating animations, offering a delightful browsing experience
                    </p>
                    <div className='flex gap-6 justify-center'>
                        <p className='border-gray-400 border flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                            Next js
                        </p>
                        <p className='border-gray-400 border  flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base  rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                            Gsap                        </p>
                    </div>
                </div>
                <div className='lg:ml-2 w-full    bg-[#00000030] shadow-equal shadow-[#150b46]  rounded-lg saturate-100 backdrop-blur-md p-6'>
                    <a href='https://oak-haven.vercel.app/'>

                        <img src='projects/img6.png' className=' mx-auto  rounded mb-2' />
                    </a>
                    <h1 className=' text-white text-xl  font-cabinet font-bold'>Oakhaven</h1>
                    <p className='mb-2  text-gray-400 text-[13px] lg:text-[15px] font-satoshi font-normal '>
                        Immersive landing page incorporating Three.js effects for beer aficionados
                    </p>
                    <div className='flex gap-6 justify-center'>
                        <p className='border-gray-400 border flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                            React                        </p>
                        <p className='border-gray-400 border  flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base  rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                            Three Js                        </p>
                    </div>
                </div>
                <div className='lg:ml-2 w-full   bg-[#00000030] shadow-equal shadow-[#150b46]  rounded-lg  saturate-100 backdrop-blur-md p-6' >
                    <a href='https://fin-serve.vercel.app/'>
                        <img src='projects/img1.png' className=' mx-auto  rounded mb-2' />
                    </a>
                    <h1 className=' text-white text-xl  font-cabinet font-bold'>Finserve</h1>
                    <p className='mb-2  text-gray-400 text-[13px] lg:text-[15px] font-satoshi font-normal '>
                        A Finance Dashboard website for tracking and analyzing financial data to facilitate informed decision-making                    </p>
                    <div className='flex gap-6 justify-center'>
                        <p className='border-gray-400 border flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                            Next js
                        </p>
                        <p className='border-gray-400 border  flex w-[100px] lg:w-[130px] justify-center font-cabinet text-sm lg:text-base  rounded-lg items-center text-white h-[24px] lg:h-[30px] bg-[#00000030]  shadow-sm saturate-100 backdrop-blur-md'>
                            Shadcn UI                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects