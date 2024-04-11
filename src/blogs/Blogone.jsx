import React from 'react'

const Blogone = ({ blogone }) => {
    return (
        <div className='max-w-5xl mx-auto my-14 space-y-14 px-6 lg:px-0'>
            <h1 className=' font-cabinet font-extrabold  text-white text-3xl lg:text-[40px]  text-center '>{blogone[0].excerpt}</h1>
            <img src={blogone[0].img} className=' rounded-xl mb-2  shadow-equal shadow-[#150b46]'>
            </img>
            {/* Three js */}
            <div className='w-full flex flex-col gap-7 text-gray-400 text-justify'>
                <div className=' flex flex-col gap-4 font-satoshi  lg:text-[17px] font-medium '>
                    <h1 className='font-cabinet font-extrabold  text-white text-3xl lg:text-[40px] '>Threejs</h1>
                    <p className='font-satoshi lg:text-[17px] font-bold '>
                        Ever wonder how websites display those slick 3D animations or interactive product models? Three.js is the secret weapon!
                    </p>
                    <p >
                        This JavaScript library acts like a special toolbox that lets you build 3D graphics directly within your web browser. Forget bulky software downloads; Three.js makes creating 3D experiences accessible to anyone.
                    </p>
                    <p>
                        Imagine spinning a 3D model of your favorite sneaker, or building a virtual world to explore. Three.js gives you the power to bring those ideas to life, without needing a degree in computer graphics. It's perfect for designers, developers, or anyone who wants to add a touch of magic to their web projects.
                    </p>
                    <p className='font-satoshi lg:text-[17px] font-bold '>
                        If you're wondering what React Three Fiber is, it's a React renderer for Three.js that simplifies working with 3D graphics in your web applications.                    </p>
                </div>
                <div className='flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium'>
                    <h3 className='font-cabinet font-extrabold  text-white text-2xl lg:text-3xl '>Courses</h3>
                    <ul className='list-disc list-inside underline'>
                        <li><a href='https://threejs-journey.com/'>Three.js Journey by Bruno Simon (Paid)</a></li>
                        <li><a href='https://lessons.wawasensei.dev/'>React Three Fiber: The Ultimate Guide to 3D Web Development by WaWaSensei (Paid)</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium'>
                    <h3 className='font-cabinet font-extrabold  text-white text-2xl lg:text-3xl '>Youtube</h3>
                    <ul className='list-disc list-inside underline'>
                        <li><a href='https://www.youtube.com/@WaelYasmina'>Three.js Tutorial For Absolute Beginners by WaelYasmina</a></li>
                        <li><a href='https://www.youtube.com/@WawaSensei'>Trending Three.js Projects by WaWaSensei   </a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium'>
                    <h3 className='font-cabinet font-extrabold  text-white text-2xl lg:text-3xl '>Docs</h3>
                    <ul className='list-disc list-inside underline'>
                        <li><a href='https://threejs.org/'>Official Three.js Docs</a></li>
                        <li><a href='https://docs.pmnd.rs/react-three-fiber/getting-started/introduction'>Pmndrs React Three Fiber Documentation   </a></li>
                        <li><a href='https://sbcode.net/react-three-fiber/'>Sbcode React Three Fiber Tutorials   </a></li>

                    </ul>
                </div>
            </div>
            {/* Shaders */}
            <div className='w-full flex flex-col gap-7 text-gray-400 text-justify'>
                <div className=' flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium '>
                    <h1 className='font-cabinet font-extrabold  text-white text-3xl lg:text-[40px] '>Shaders</h1>
                    <p className='font-satoshi lg:text-[17px] font-bold '>
                        But Three.js isn't just about building 3D shapes; it lets you paint them with dazzling effects!  This is where shaders come in.
                    </p>
                    <p >
                        Shaders are like tiny programs that run on your graphics card, allowing you to customize how objects are rendered.                     </p>
                    <p>
                        Want a glowing neon effect? A mind-bending reflection? Or maybe a realistic material texture? With shaders, the possibilities are endless!  They unlock a whole new level of creative expression for your 3D projects in Three.js.                    </p>

                </div>
                <div className='flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium'>
                    <h3 className='font-cabinet font-extrabold  text-white text-2xl lg:text-3xl '>Courses</h3>
                    <ul className='list-disc list-inside underline'>
                        <li><a href='https://threejs-journey.com/'>Three.js Journey (Chapter 04 - Shaders) by Bruno Simon (Paid)</a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium'>
                    <h3 className='font-cabinet font-extrabold  text-white text-2xl lg:text-3xl '>Youtube</h3>
                    <ul className='list-disc list-inside underline'>
                        <li><a href='https://www.youtube.com/watch?v=xZM8UJqN1eY'>GLSL & Shaders Tutorial - Introduction by WaelYasmina</a></li>
                        <li><a href='https://www.youtube.com/watch?v=3mfvZ-mdtZQ'>Introduction to shaders: Learn the basics! by Barney Codes   </a></li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium'>
                    <h3 className='font-cabinet font-extrabold  text-white text-2xl lg:text-3xl '>Docs</h3>
                    <ul className='list-disc list-inside underline'>
                        <li><a href='https://thebookofshaders.com/'>The Book of Shaders  (For Fragment shaders)</a></li>
                        <li><a href='https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/'>The Study of Shaders with React Three Fiber</a></li>
                    </ul>
                </div>
            </div>
            {/* Inspiration */}
            <div className='w-full flex flex-col gap-7 text-gray-400 text-justify'>
                <div className=' flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium '>
                    <h1 className='font-cabinet font-extrabold  text-white text-3xl lg:text-[40px] '>Inspiration</h1>
                    <p className='font-satoshi lg:text-[17px] font-bold '>
                        Websites that Inspired Me to Learn Three.js                    </p>

                </div>

                <div className='flex flex-col gap-4 font-satoshi lg:text-[17px] font-medium'>
                    <ul className='list-disc list-inside underline '>
                        <li><a href='https://www.swellmadeit.com/'>swellmadeit.com</a></li>
                        <li><a href='https://lusion.co/'>lusion.co</a></li>
                        <li><a href='https://unseen.co/'>unseen.co</a></li>
                        <li><a href='https://bruno-simon.com/#'>bruno-simon.com</a></li>
                        <li><a href='https://jesse-zhou.com/'>jesse-zhou.com</a></li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-10 px-20 relative pt-8 text-gray-400'>
                <div className='border-t border-gray-400   w-full'></div>
                <div className=' w-52 text-center relative bottom-3'>Thank you</div>
                <div className='border-t border-gray-400  w-full'></div>

            </div>
        </div >
    )
}

export default Blogone