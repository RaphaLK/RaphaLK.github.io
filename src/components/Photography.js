
import React from 'react'
import Photo1 from "../assets/Photography.png"
import "./Photography.css"

const Photography = () => {
  return (
    <div className='Photo_container'>
      <div className="img_container">
        <img className="Photo" src={Photo1}/>
      </div>
      <div className='Photo_desc'>
        <p className="text-2xl text-offWhite max-w-[80%] leading-relaxed">Photography</p>
      </div>
    </div>
  )
}

export default Photography