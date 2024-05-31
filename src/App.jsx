import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import { projects } from './projects/util';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<AllProjects projects={projects} />} />
    </Routes>
  )
}

export default App

