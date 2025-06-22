import React from 'react'
import autism from '../assets/images/autsim.jpg';
import hotstar from '../assets/images/hotstar.jpg';
import qrcode from '../assets/images/qrcode.jpg';
import uipath from '../assets/images/uipath.jpg';
const Project = () => {
  const projectitems=[
    {
      url:autism,
      title:"Autism Prediction",
      content:"A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing capabilities.",
      languages:["python , REACT , NODE JS"]
    },
    {
      url:hotstar,
      title:"Hotstar Clone",
      content:"A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing capabilities.",
      languages:["python , REACT , NODE JS"]
    },
    {
      url:qrcode,
      title:"QrCode Generator",
      content:"A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing capabilities.",
      languages:["python , REACT , NODE JS"]
    },
    {
      url:uipath,
      title:"Library Pass Generator",
      content:"A comprehensive dashboard for e-commerce stores with analytics, inventory management, and order processing capabilities.",
      languages:["python , REACT , NODE JS"]
    }
  ]
  return (
    <>
    <div className="flex flex-col text-center my-20 gap-10">
    <span className="text-5xl font-bold">Featured Projects</span>
    <span className="text-gray-600 font-semibold text-lg">Here are some of my recent projects that showcase my skills in frontend development and UI/UX design.</span>
    </div>
    {/* <div className="project1 flex justify-center gap-10 m-10">
    <img src={autism} alt="Autsim Prediction Project" className="w-6/12 rounded-md"></img>
    <div className="project1-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit.</div>
    </div> */}
    {
      projectitems.map((items,index)=>{
        return(
          (index%2==0) ?(
            <div className="project1 flex justify-center gap-10 m-10 p-10" key={index}>
            <img src={items.url} alt="Autsim Prediction Project" className="w-10/12 rounded-md"></img>
            <div className="project1-description flex flex-col w-fit gap-6">
              <span className="text-5xl font-bold">{items.title}</span>
              <span className="w-11/12 text-lg text-gray-700 font-semibold">{items.content}</span>
            <div className="text-red-950 font-semibold bg-red-300 w-fit p-4 rounded">
              {
                items.languages.map((lang,idx)=>{
                    return(
                      <span key={idx}>{lang}</span>
                    )
                })
              }
            </div>
             <div className="flex gap-10 font-bold text-lg my-8">
              <button className="rounded-md text-white p-4 bg-black"><i className="fas fa-link text-xl text-white mx-4"></i>   Live Demo</button>
              <button className="border border-b-8 border-black p-4 rounded-md"><i className="fab fa-github mx-4"></i>   View Code</button>
            </div>
            </div>
            </div> 
          ):(
           <div className="project1 flex justify-center gap-10 m-10 p-10" key={index}>
          <div className="project1-description flex flex-col w-fit gap-6">
              <span className="text-5xl font-bold">{items.title}</span>
              <span className="w-11/12 text-lg text-gray-700 font-semibold">{items.content}</span>
              <div className="text-red-950 font-semibold bg-red-300 w-fit p-4 rounded">
              {
                items.languages.map((lang,idx)=>{
                    return(
                      <span key={idx} >{lang}</span>
                    )
                })
              }
            </div>
             <div className="flex gap-10 font-bold text-lg my-8">
              <button className="rounded-md text-white p-4 bg-black"><i className="fas fa-link text-xl text-white mx-4"></i>   Live Demo</button>
              <button className="border border-b-8 border-black p-4 rounded-md"><i className="fab fa-github mx-4"></i>   View Code</button>
            </div>
            </div>
           <img src={items.url} alt="Autsim Prediction Project" className="w-10/12 rounded-md"></img>
            </div>  
          )
        )
      })
    }
    </>
  )
}

export default Project