import React, { useState,useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration
    once: true,     // animate only once when scrolled into view
    offset: 50      // offset (in px) from the top of the screen
  });
}, []);

  return (
    <>
<Router>
<header className=" top-0 right-0 left-0  z-50">
    <ul className="flex list-none font-bold justify-center mx-auto gap-6 p-5 text-md md:text-xl lg:text-2xl lg:gap-x-28  md:gap-20">
    <li><NavLink to="/" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-black to-rose-900':'text-white'}>Home</NavLink></li>

    <li><NavLink to="/About" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r  from-black to-rose-900':'text-white'}>About</NavLink></li>
    
    <li><NavLink to="/Project" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r  from-black to-rose-900':'text-white'}>Project</NavLink></li>
    
    <li><NavLink to="/Contact" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r  from-black to-rose-900':'text-white'}>Contact</NavLink></li>
    </ul>
    
</header>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Project' element={<Project/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  </Routes>
  </Router>
    </>
)
}

export default App