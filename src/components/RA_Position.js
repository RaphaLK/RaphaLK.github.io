
import React from 'react'
import TeamPhoto from "../assets/TeamPhoto.JPG"
import "./RA_Position.css"

const RA_Position = () => {
  return (
    <div className='RA_PosContainer'>
      <div className='RA_Desc'>
        <p className="text-2xl text-offWhite max-w-[80%] leading-relaxed"> RA at Santa Clara University</p>
      </div>
      <div className="img_container">
        <img className="TeamPicture" src={TeamPhoto}/>
      </div>
    </div>
  )
}

export default RA_Position