
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import BlogList from './blogs/Blog';
import Blogone from './blogs/Blogone';
import blogs from './blogs/util';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<BlogList blogs={blogs} />} />
      <Route path='/blog/:threejs+shaders' element={<Blogone blogone={blogs} />} />
    </Routes>
  )
}

export default App

