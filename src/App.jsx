import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import BlogList from './blogs/Blog';
import Blogone from './blogs/Blogone';
import AllProjects from './components/AllProjects';
import { blogs } from './blogs/util';
import { projects } from './projects/util';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs' element={<BlogList blogs={blogs} />} />
      <Route path='/blogs/:threejs+shaders' element={<Blogone blogone={blogs} />} />
      <Route path='/projects' element={<AllProjects projects={projects} />} />
    </Routes>
  )
}

export default App

