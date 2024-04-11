import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col justify-center mb-16 mt-8 lg:mt-16 items-center gap-6 max-w-6xl lg:mx-auto text-center mx-2'>
            <h1 className='font-cabinet font-extrabold text-white text-4xl lg:text-5xl z-0'>Contact</h1>

            <div className=' lg:ml-2 w-full h-56  bg-[#00000030]  rounded-lg  shadow-equal shadow-[#150b46] saturate-100 backdrop-blur-md'>
                <div className='h-full flex flex-col lg:flex-row justify-evenly items-center'>
                    <div className='space-y-4'>
                        <h1 className='font-cabinet font-bold text-2xl text-gray-300'>Contact / Hire me</h1>
                        <a
                            href="mailto:sandeepvemula408@gmail.com"
                            className='font-cabinet w-[200px] h-10 border border-gray-300 text-gray-300 font-medium rounded-lg hover:bg-gray-300 hover:text-black inline-block text-center leading-10'
                        >
                            Email
                        </a>
                    </div>
                    <div className='space-y-4'>
                        <p className='font-cabinet font-medium text-lg text-gray-300'>or  Follow me</p>
                        <div className='flex gap-6'>
                            <a href="https://www.facebook.com/your-profile" target="_blank" rel="noreferrer">
                                <img src='/social/fb.svg' className='w-7 h-7' alt="Facebook" />
                            </a>
                            <a href="https://twitter.com/Sandeep_3Dev/" target="_blank" rel="noreferrer">
                                <img src='/social/x.svg' className='w-7 h-7' alt="Example" />
                            </a>
                            <a href="https://github.com/Sandeep18JS" target="_blank" rel="noreferrer">
                                <img src='/social/git.svg' className='w-7 h-7' alt="GitHub" />
                            </a>
                            <a href="https://www.instagram.com/sandeep_3dev/#" target="_blank" rel="noreferrer">
                                <img src='/social/insta.svg' className='w-7 h-7' alt="Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact