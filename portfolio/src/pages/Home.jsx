import React, { useEffect, useState } from 'react'
import Project from "./Project";
import About from './About';
import Contact from './Contact';
const Home = () => {
  const [project,setproject]=useState();
  const [abt,setabt]=useState();
  const [contact,setcontact]=useState();
  function displayprojects(){
    setproject(<Project/>)
    setabt(<About/>)
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
      <button className="bg-black text-white px-6 py-2 rounded-md border-2 border-gray-600">View My Work</button>
      <button className="border-4 border-black-600 px-6 py-2 rounded-md">Get In Touch</button>
      </div>
      <div className="flex justify-center translate-x-7 animate-pulse text-xl text-black mt-10 cursor-pointer">
      <button id="projects-arrow" onClick={displayprojects}><i className="fas fa-arrow-down"></i></button>
      </div>
      <div>{project}
      {abt}
      {contact}
      </div>
    </>
  )
}

export default Home