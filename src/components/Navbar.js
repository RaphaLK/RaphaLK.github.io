import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navContainer">
      <ul>
        <li>
          <p>About Me</p>
        </li>
        <li>
          <p>Projects</p>
        </li>
        <li>
          <p>Resume</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar