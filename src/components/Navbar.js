import React from 'react';
import './Navbar.css';

/*
* Logic Test: About_state is clicked and is true --> Resume state and project state remain false
*/
const Navbar = ({AboutMe_Click, Project_Click, Resume_Click, About_state, Project_state, Resume_state}) => {
  return (
    <nav class="navContainer">
      <ul>
        <li onClick={AboutMe_Click}>
          <p>About Me</p>
          {About_state && (!Resume_state || !Project_state)}
        </li>
          <p> -- </p>
        <li onClick={Project_Click}>
          <p>Projects</p>
          {Project_state && (!Resume_state || !About_state)}
        </li>
          <p> -- </p>
        <li onClick={Resume_Click}>
          <p>Resume</p>
          {Resume_state && (!About_state || !Project_state)}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar