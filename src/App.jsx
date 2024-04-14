
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import BlogList from './blogs/Blog';
import Blogone from './blogs/Blogone';
import blogs from './blogs/util';
import AllProjects from './components/AllProjects';
import { texts } from './projects/util';
export const projects = [
  {
    text: "Finserve",
    about: "A Finance Dashboard website for tracking and analyzing financial data to facilitate informed decision-making",
    tech1: "Next js",
    tech2: "Shadcn UI",
    link: 'https://fin-serve.vercel.app/',
    i: 1

  },
  {
    text: "Furniture",
    about: "A Furniture website with captivating animations, offering a delightful browsing experience",
    tech1: "Next js",
    tech2: "GSAP",
    link: 'https://furniture-two-eta.vercel.app/',
    i: 2

  },
  {
    text: "Pawsofindia",
    about: "An Indian dog breeds website with captivating visuals, providing an immersive experience for enthusiasts",
    tech1: "React",
    tech2: "Tailwind CSS",
    link: 'https://paws-of-india.vercel.app/',
    i: 3

  },
  {
    text: "Shop Co",
    about: "A beautifully designed e-commerce store that provides a seamless shopping experience",
    tech1: "Next js",
    tech2: "Sanity CMS",
    link: 'https://shop-co-e-commerce.vercel.app/',
    i: 4


  },
  {
    text: "Roommates",
    about: "Expense Tracker: Easily manage shared expenses and bills, fostering financial harmony in shared living spaces",
    tech1: "React",
    tech2: "Tailwind CSS",
    link: 'https://mern-roommates.vercel.app/',
    i: 5

  },
  {
    text: "Oakhaven",
    about: " Immersive landing page incorporating Three.js effects for beer aficionados",
    tech1: "Three js",
    tech2: "React",
    link: 'https://oak-haven.vercel.app/',
    i: 6

  },
]
const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<BlogList blogs={blogs} />} />
      <Route path='/blog/:threejs+shaders' element={<Blogone blogone={blogs} />} />
      <Route path='/projects' element={<AllProjects projects={projects} />} />
    </Routes>
  )
}

export default App

