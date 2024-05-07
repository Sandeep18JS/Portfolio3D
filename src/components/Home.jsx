import Hero from './Hero'
import Projects from './Projects'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'
import World from '../background/World'
import React, { useState, useEffect } from 'react';
import BlogList from '../blogs/Blog'
import { Homeblogs } from '../blogs/util'
import { Link } from 'react-router-dom'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingH, setIsLoadingH] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsLoading(false), 3000);
        const timeoutIdH = setTimeout(() => setIsLoadingH(false), 3300);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(timeoutIdH);
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className='bg-black w-screen h-screen flex flex-col justify-center items-center'>
                        <div className="loader border-t-[6px] rounded-full border-[#150b46] animate-spin aspect-square w-16 flex justify-center items-center ">
                        </div>
                    </div>
                </div>
            ) : (
                <div className='absolute w-full '>
                    <World />
                    <div>
                        <Navbar />
                        {isLoadingH ? <div className='w-full h-screen'></div> : (<Hero />)}
                        <About />
                        <Projects />
                        <div className='max-w-7xl h-screen  mx-auto relative   lg:mb-24'>
                            <BlogList blogs={Homeblogs} />
                            <div className='text-right lg:p-6 lg:mr-28'>
                                <Link to='/blogs' className='text-white '>More &rarr; </Link>
                            </div>
                        </div>
                        <Contact />
                    </div>
                </div>
            )}
        </>


    )
}

export default Home

