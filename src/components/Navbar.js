import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "../components/Logo"

/*
  I initially planned this to be a full on nav-bar at the top of the screen.
  Honestly, was not a big fan of the looks...
  
  Right now, it's simply a list for navigation in my homepage.
*/
const Navbar = () => {
  return (
    <nav class="navContainer">
      <Logo/>
      <ul>
        <li>
          <Link to='/AboutMe'>About Me</Link>
        </li>
        <li>
          <Link to='/Projects'>Projects</Link>
        </li>
        <li>
          <Link to='/Resume'>Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar