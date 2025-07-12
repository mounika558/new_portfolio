import React, { useState } from 'react'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
const App = () => {
  const [navcolor,setnavcolor]=useState('');

  return (
    <>
<Router>
<header className="fixed top-0 right-0 left-0 bg-black z-50">
    <ul className="flex list-none font-bold justify-center mx-auto gap-6 p-5 text-md md:text-xl  md:gap-20">
    <li><NavLink to="/" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500':'text-white'}>Home</NavLink></li>

    <li><NavLink to="/About" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500':'text-white'}>About</NavLink></li>
    
    <li><NavLink to="/Project" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500':'text-white'}>Project</NavLink></li>
    
    <li><NavLink to="/Contact" className={({isActive})=>
    isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500':'text-white'}>Contact</NavLink></li>
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