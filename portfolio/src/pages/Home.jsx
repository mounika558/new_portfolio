import React, { useEffect, useState } from 'react'
import Project from "./Project";
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';

// import { SlArrowDown } from "react-icons/sl";
const Home = () => {

  return (
    <>

      <div className='mt-32 mb-44'>
      <div className="flex flex-col text-center items-centerju my-10  data-aos=fade-up">
      <p className="hello text-lg leading-10 xl:text-[90px] font-bold text-white"><span className='text-5xl lg:text-7xl'>Mounika</span></p>
      <p className="text-5xl font-bold m-6 xl:text-[90px] ">Creative Frontend Developer</p>
      <p className="text-white text-lg xl:text-2xl">I design and build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
      </div>
      
      <div className="flex flex-wrap justify-center space-x-8 ">
      <button className="bg-gradient-to-r from-black via-black-500 to-black-500 text-white border-none outline-none  px-6 py-2 rounded-md border-2 xl:text-2xl">My Resume</button>
      <Link to='/Contact' className="px-6 py-2 rounded-md text-white bg-gradient-to-r from-black via-black-500 to-black-500 xl:text-2xl">
        Get in Contact
      </Link>  
      </div>
      </div>

      {/* <div className="flex items-center justify-center  animate-pulse text-xl text-black mt-32 cursor-pointer">
      <button id="projects-arrow" onClick={displayprojects}><SlArrowDown className='text-white mt-6 w-4 h-4' /></button>
      </div> */}
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default Home