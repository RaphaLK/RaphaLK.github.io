import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import personalPhoto from "../assets/MyPhoto.jpg";
import Logo from "../components/Logo"

/*
  I initially planned this to be a full on nav-bar at the top of the screen.
  Honestly, was not a big fan of the looks...
  
  Right now, it's simply a list for navigation in my homepage.
*/
const Navbar = () => {
  return (
    <div class="navContainer">
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
    </div>
  )
}

export default Navbar