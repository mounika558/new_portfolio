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
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci repudiandae nostrum ea expedita nemo laborum illo est officiis, nihil beatae ullam modi error iure minima, unde praesentium eaque alias minus!"
  },
  {
    id:2,
    title: "UIUX Designer",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere debitis quos consequuntur, incidunt velit voluptas dicta, quis eius earum at numquam animi, officiis laboriosam architecto tenetur nam veniam doloribus consequatur?"
  },
  {
    id:3,
    title: "Problem Solving",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sunt, recusandae vel aut debitis sit, tempore adipisci nisi reprehenderit expedita aspernatur explicabo voluptates ullam. Nihil modi natus sunt adipisci porro."
  },
  {
    id:4,
    title: "Ai Enthusiast",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam perspiciatis velit inventore quisquam nobis commodi, tempora, quo autem fugiat eum sed corrupti quidem temporibus qui praesentium nemo maxime sunt!"
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
    <div className="my-24 mt-28">
      <p className="text-5xl font-bold m-10 text-center">Know Something About Me!!!</p>
      <p className="text-center text-base font-semibold text-gray-600 m-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ratione eos sequi minima autem architecto.<br></br> 
        Iste corporis quo necessitatibus laborum, ipsa aspernatur corrupti soluta pariatur eum rem, in, officiis alias?</p>
    </div>
      <div className="flex gap-10 mx-10">
          {
            cardData.map((item,id)=>{
              return(
                <div className="bg-gray-500 text-black rounded-md text-center leading-3" key={id}>
                <p className="text-xl font-bold p-4">{item.title}</p>
                <p className='text-lg text-black p-8'>{item.description}</p>
                </div>
              )
            })
          }
        </div>
        <div>
          <span className="text-3xl font-bold flex justify-center mt-14">Skills</span>
          <div className="flex gap-10 m-14">
          {
            skillsPrimary.map((img,id)=>{
              return(
                  <img src={img.logo} alt={img.name} key={id} className="w-16 h-16 "/>
                
              )
            })
          }</div>
        </div>
        <div>
          <span className="text-3xl font-bold flex justify-center mt-14">Tools</span>
          <div className="flex gap-10 m-14">
          {
            skillsTools.map((img,id)=>{
              return(
                  <img src={img.logo} alt={img.name} key={id} className="w-16 h-16 "/>
                
              )
            })
          }</div>
        </div>
    </>
  )
}

export default About