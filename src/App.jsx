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
    const timeoutId = setTimeout(() => setIsLoading(false), 500);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <div className='absolute w-full '>
        <World />
        <div>
          <Navbar />

          {isLoading ? (
            <div className='w-full h-screen'></div>
          ) : (
            <Hero />
          )}
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App

