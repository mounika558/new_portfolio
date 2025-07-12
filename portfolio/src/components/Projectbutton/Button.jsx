import React from 'react'

const Button = () => {
  return (
    <>
      <div className="flex gap-10 font-bold text-lg my-8">
              <button className="rounded-md text-white p-4 bg-black"><i className="fas fa-link text-xl text-white mx-4"></i>   Live Demo</button>
              <button className="border border-b-8 border-black p-4 rounded-md"><i className="fab fa-github mx-4"></i>   View Code</button>
      </div>
    </>
  )
}

export default Button