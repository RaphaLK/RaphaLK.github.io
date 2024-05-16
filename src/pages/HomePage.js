import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import { useState } from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

export const HomePage = () => {
  const [AboutMe_state, setClicked_AM] = useState(false);
  const [Projects_state, setClicked_Projects] = useState(false);
  const [Resume_state, setClicked_Resume] = useState(false);
  const [Navbar_Element, setNavbar_Element] = useState(false);

  const handle_AboutMe = () => {
    setClicked_AM(!AboutMe_state);
    setNavbar_Element(!Navbar_Element);
  };

  const handle_Projects = () => {
    setClicked_Projects(!Projects_state);
    setNavbar_Element(!Navbar_Element);
  };

  const handle_Resume = () => {
    setClicked_Resume(!Resume_state);
    setNavbar_Element(!Navbar_Element);
  };

  // If a navbar element isn't active, display usual homepage

  return (
    <div className="homepage_container">
      {!Navbar_Element && (
        <div>
          <div className="top_text">
            <h1>Hi, I'm Raphael</h1>
          </div>
          <div className="bottom_text">
            <Typewriter
              options={{
                loop: true,
                cursor: "_",
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("<span class='front_page_span'> and this is my website.</span>")
                  .pauseFor(5000)
                  .deleteAll()
                  .pauseFor(5000)
                  .start();
              }}
            />
          </div>

          <div className="navigation_bar">
            <Navbar 
              AboutMe_Click={handle_AboutMe}
              Project_Click={handle_Projects}
              Resume_Click={handle_Resume} 
              About_state={AboutMe_state}
              Project_state={Projects_state}
              Resume_state={Resume_state}
            />
          </div>
          <div className="socials_bar">
            <Socials></Socials>
          </div>
        </div>
      )}
      {AboutMe_state &&
      <About
      backFunction={handle_AboutMe}/> }

      {Projects_state &&
      <Projects
      backFunction={handle_Projects}/> }  

      {Resume_state &&
      <Resume
      backFunction={handle_Resume}/> }
    </div>
  );
};

export default HomePage;
