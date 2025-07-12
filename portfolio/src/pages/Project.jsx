import React from 'react'
import autism from '../assets/images/autsim.jpg';
import hotstar from '../assets/images/hotstar.jpg';
import qrcode from '../assets/images/qrcode.jpg';
import uipath from '../assets/images/UIpath.jpg';
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
    <span className=" text-3xl md:text-4xl font-bold">Featured Projects</span>
    <span className="text-gray-600 font-semibold text-lg">Here are some of my recent projects that showcase my skills in frontend development and UI/UX design.</span>
    </div>
    {
      projectitems.map((items,index)=>{
        return(
          (index%2==0) ?(
            <div className="project1 m-6 my-16 md:flex md:justify-center md:gap-10 md:m-8 md:p-10" key={index}>
            <img src={items.url} alt="Autsim Prediction Project" className=" md:w-6/12 md:h-70 rounded-md hover:opacity-40 hover:bg-opacity-40"></img>
            <div className="project1-description flex flex-col w-fit gap-3">
              <span className="text-2xl font-bold">{items.title}</span>
              <span className="w-11/12 text-base text-gray-600 font-semibold lg:text-lg">{items.content}</span>
            <div className="text-white text-base font-semibold ">
              {
                items.languages.map((lang,idx)=>{
                    return(
                      <span key={idx}>{lang}</span>
                    )
                })
              }
            </div>
            <div className="flex gap-10 font-bold my-6">
              <button className="p-1 rounded-md text-white md:p-1 bg-gradient-to-r from-pink-600 to-orange-600"><i className="fas fa-link text-md"></i>   Live Demo</button>
              <button className="p-1 border border-black md:p-1  rounded-md text-md bg-gradient-to-r from-pink-600 to-orange-600"><i className="fab fa-github "></i>   View Code</button>
            </div>
            </div>
            </div> 
          ):(
          <div className="project1 m-6 my-16 md:flex md:justify-center md:gap-10 md:m-8 md:p-10" key={index}>
          <div className="project1-description flex flex-col w-fit gap-6">
              <span className="text-2xl font-bold">{items.title}</span>
              <span className="w-10/12 text-base text-gray-600 font-semibold lg:text-lg">{items.content}</span>
              <div className="text-white text-base font-semibold">
              {
                items.languages.map((lang,idx)=>{
                    return(
                      <span key={idx} >{lang}</span>
                    )
                })
              }
            </div>
           <div className="flex gap-10 font-bold my-6">
              <button className="p-1 rounded-md text-white md:p-1  bg-gradient-to-r from-pink-600 to-orange-600"><i className="fas fa-link text-md"></i>   Live Demo</button>
              <button className="p-1 border border-black md:p-1  rounded-md text-md bg-gradient-to-r from-pink-600 to-orange-600"><i className="fab fa-github "></i>   View Code</button>
            </div>
            </div>
           <img src={items.url} alt="Autsim Prediction Project" className="md:w-6/12 md:h-70 rounded-md hover:opacity-40 hover:bg-opacity-40"></img>
            </div>  
          )
        )
      })
    }
    </>
  )
}

export default Project