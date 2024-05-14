import React from 'react'
import BackButton from "./ReturnToHome"

const About = ({backFunction}) => {

  return (
    <div className='AboutMe_Screen'>
      <BackButton
        backFunction={backFunction}
      />
      <p>ABOUT ME!</p>
    </div>
  )
}

export default About