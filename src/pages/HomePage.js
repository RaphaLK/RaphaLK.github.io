import React from 'react'
import Typewriter from 'typewriter-effect';
import '../styles/HomePage.css'
import Navbar from '../components/Navbar';

export const HomePage = () => {
  return (
    <div className='homepage_container'>


      <div className='top_text'>
        <h1>Hi, I'm Raphael</h1>
      </div>
      <div className='bottom_text'>
        <Typewriter
          options={{
            loop: true,
            cursor: '_',
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('<span> and this is my website.</span>')
              .pauseFor(2000)
              .deleteAll()
              .start();

          }}/>
      </div>

      <div className='navigation_bar'>
          <Navbar/>
      </div>

    </div>
  )
}

export default HomePage
