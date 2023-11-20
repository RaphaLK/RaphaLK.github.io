import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className='InfoContainer'>
      <h1 className='font-sans text-4xl font-bold mb-4 text-offWhite'>About Me</h1>
      <p className='font-sans text-2xl text-offWhite'>My name is Raphael, I'm a Junior <span class='font-bold'>Computer Science and Engineering Major with a 
        Minor in Mathematics</span> at <span class='font-bold'> Santa Clara University</span>. My current interests are in Front-End Development,
        Mobile App Development. I've worked with Professors at Santa Clara University, and I currently work in SCU's very own Residence Life Department as an RA.
        I'll expand more on my skills in the <span class='font-bold'>Resume</span> section. I'm currently looking for a <span class='font-bold'>Software Engineering Internship for Summer 2024</span>.
        I love learning new things, I love <span class='font-bold font italic'><span class='font-serif'>Coffee, Boxing, Exercise, Photography, and Video Games</span></span>. 
      </p>
    </div>
  )
}

export default AboutMe;
