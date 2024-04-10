import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import World from './background/World'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timeoutId);
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
            <Hero />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </>


  )
}

export default App

