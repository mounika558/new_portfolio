import React from 'react'
import bootstrap from '../assets/icons/bootstrap.png';
import Tailwind from '../assets/icons/css-3.png';
import css from '../assets/icons/css-3.png';
import java from '../assets/icons/java.png';
import cProgram from '../assets/icons/letter-c.png';
import SQL from '../assets/icons/sql-server.png';
import MongoDB from '../assets/icons/mongodb.png';
import react from '../assets/icons/react.png';
import JavaScript from '../assets/icons/js.png';
import figma from '../assets/icons/figma.png';
import Vscode from '../assets/icons/vs.png';
import canva from '../assets/icons/canva.png';
import git from '../assets/icons/git.png';
import github from '../assets/icons/github.png';
import jira from '../assets/icons/jira.png';
const About = () => {
const cardData = [
  {
    id:1,
    title: "Frontend Developer",
    description:"I'm passionate about frontend development and enjoy building clean, user-friendly, and visually engaging web interfaces. I've worked on projects like a Hotstar clone, QR code generator, and a real-time website for Spotknack using React and Tailwind CSS. I'm skilled in HTML, CSS, Tailwind, Bootstrap, and React, and I love bringing ideas to life through code and design."
  },
  {
    id:2,
    title: "UIUX Designer",
    description: "I'm deeply interested in UI/UX design and enjoy creating clean, intuitive interfaces that enhance user experience. I've explored tools like Figma to design wireframes, prototypes, and responsive layouts for web projects. My design approach focuses on simplicity, usability, and aligning visuals with real user needs."
  },
  {
    id:3,
    title: "Problem Solving",
    description:"I'm learning problem-solving in Java and have practiced over 50 problems on LeetCode and 40 on GeeksforGeeks. I’m familiar with basic data structures like stacks, queues, and linked lists, as well as core Java concepts up to collections. These problems have helped me improve my coding logic and understanding step by step."
  },
  {
    id:4,
    title: "Ai Enthusiast",
    description: "I'm an AI enthusiast exploring how artificial intelligence can enhance frontend experiences. I enjoy experimenting with inbuilt AI features in web applications, like smart chatbots and real-time predictions. I'm excited about combining design, interactivity, and AI to build more intelligent and user-friendly websites."
  }
];

const skillsPrimary = [
  { name: "Java", logo: java },
  { name: "C", logo: cProgram },
  { name: "SQL", logo: SQL },
  { name: "MongoDB", logo: MongoDB },
  { name: "JavaScript", logo: JavaScript },
  { name: "ReactJS", logo: react },
  { name: "HTML/CSS", logo: css },
  { name: "Bootstrap", logo: bootstrap },
  { name: "TailwindCSS", logo: Tailwind }
];

const skillsTools = [
  { name: "Git", logo: git },
  { name: "GitHub", logo: github },
  { name: "VS Code", logo: Vscode },
  { name: "Figma", logo: figma },
  { name: "Canva", logo: canva },
  { name: "Jira", logo: jira }
];


  return (
    <>
    <div className="my-24 data-aos=fade-up">
      <p className=" text-xl md:text-3xl font-bold m-10 text-center">Know Something About Me!!!</p>
      <div className="flex border-solid border-gray-600  mx-8 md:w-4/6 border-2 rounded-lg md:mx-auto shadow-inner shadow-slate-100 transform transition ease-in-out duration-300 hover:scale-90">
      <p className=" text-justify md:text-center text-base leading-7 tracking-wide flex flex-wrap font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-600 m-8">I'm Mounika, a frontend developer from SREC, currently pursuing my degree in the IT department. I have a strong passion for UI/UX design and love building engaging, user-friendly web applications. I’ve been actively exploring web technologies through hands-on projects and recently enhanced my skills in JavaScript and UI/UX design through the Spotknack Frontend Development course. I enjoy turning ideas into clean, responsive interfaces using tools like React, Tailwind CSS, and Java. I'm constantly learning and evolving, driven by a love for design, code, and creativity—and always excited to build digital experiences that connect with people.</p>
      </div>
    </div>
    
      <div className=" grid grid-col-1 md:grid md:grid-cols-2 gap-y-6 data-aos=fade-up">
          {
            cardData.map((item,id)=>{
              return(
                <div className="rounded-md text-center  mx-8 p-3 md:p-6 md:w-5/6 md:mx-auto border-2 border-solid border-gray-600 shadow-inner shadow-yellow-200 transform transition ease-in-out duration-300 hover:scale-110" key={id}>
                <p className="text-xl font-bold pb-4">{item.title}</p>
                <p className='text-xs md:text-base text-justify tracking-wide leading-5 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-yellow-500'>{item.description}</p>
                </div>
              )
            })
          }
        </div>

          <div className='m-12 text-center text-gray-400'><blockquote className='text-xs md:text-lg italic'>"You don't need more time. You need more focus"</blockquote>
          <blockquote className='text-xs italic md:text-lg'>"Focus on progress, not perfection"</blockquote></div>
          
        <div className='bg-white text-black mt-20 p-8'>
          <span className="text-3xl font-bold flex justify-center">Skills</span>
          <div className="flex gap-10 p-6 m-4 flex-wrap lg:flex-nowrap">
          {
            skillsPrimary.map((img,id)=>{
              return(
                  <img src={img.logo} alt={img.name} key={id} className="w-16 h-16 transform transition ease-in-out duration-300 hover:scale-110"/>
                
              )
            })
          }</div>
        <div>
          <span className="text-3xl font-bold flex justify-center flex-wrap">Tools</span>
          <div className="flex gap-10 p-6 m-4 flex-wrap">
          {
            skillsTools.map((img,id)=>{
              return(
                  <img src={img.logo} alt={img.name} key={id} className="w-16 h-16 transform transition ease-in-out duration-300 hover:scale-110"/>
                
              )
            })
          }</div>
        </div>
        </div>
    </>
  )
}

export default About