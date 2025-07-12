import React, { useEffect, useState } from 'react'
import Project from "./Project";
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";
const Home = () => {
  const [abt,setabt]=useState();
  const [project,setproject]=useState();
  const [contact,setcontact]=useState();
  function displayprojects(){
    setabt(<About/>)
    setproject(<Project/>)
    setcontact(<Contact/>)
  } 
  const getcontact=()=>{
  setcontact(<Contact/>)
  }
  return (
    <>
      <div className="flex flex-col text-center mt-32">
      <p className="hello text-gray-500 text-lg leading-10">Hello, my name is <span className='text-5xl'>Mounika</span></p>
      <p className="text-5xl font-bold m-6">Creative Frontend Developer</p>
      <p className="text-gray-400 text-lg">I design and build exceptional digital experiences that are fast, accessible, and visually appealing.</p>
      </div>
      
      <div className="flex justify-center m-6 gap-6">
      <button className="bg-black text-white px-6 py-2 rounded-md border-2 border-gray-600">My Resume</button>
      <button className="px-6  rounded-md text-white bg-gradient-to-r from-pink-500 via-red-500 to-orange-500" onClick={getcontact}>
      <Link to='/Contact'>Get in Contact
      </Link>
      </button>
      
      </div>
      <div className="flex justify-center translate-x-7 animate-pulse text-xl text-black mt-10 cursor-pointer">
      <button id="projects-arrow" onClick={displayprojects}><SlArrowDown className='text-white mt-6 w-4 h-4' /></button>
      </div>
      <div>
      {abt}
      {project}
      {contact}
      </div>
    </>
  )
}

export default Home