import React from 'react'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css';

import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
const App = () => {
  return (
    <>
  <Router>
<header className="fixed top-0 right-0 left-0 bg-black text-white">
    <ul className="flex list-none font-bold justify-center gap-20 p-3 text-md">
     <li><Link to="/">Home</Link></li>
     <li><Link to="/Project">Project</Link></li>
     <li><Link to="/About">About</Link></li>
     <li><Link to="/Contact"><button className="bg-white text-black rounded-md p-1 hover:bg-gray-700">Contact Me</button></Link></li>
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