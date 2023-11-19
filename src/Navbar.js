import React from 'react';
import './Navbar.css';
/*
  I initially planned this to be a full on nav-bar at the top of the screen.
  Honestly, was not a big fan of the looks...
  
  Right now, it's simply a list for navigation in my homepage.
*/
const NavBar = () => {
  return (
    <ul>
      <li>
        <a href='/' className='movedMargins'>About Me</a>
      </li>
      <li>
        <a href='/' className='movedMargins'>Projects</a>
      </li>
      <li>
        <a href='/'>Resume</a>
      </li>
    </ul>
  )
}

export default NavBar