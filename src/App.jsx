import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import World from './background/World'

const App = () => {
  return (
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


  )
}

export default App