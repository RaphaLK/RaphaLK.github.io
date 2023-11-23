import React from "react";
import "../styles/AboutMe.css";
import teamPhoto from "../assets/IMG_6679.JPG";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <h1 className="font-sans text-4xl font-bold mb-4 text-SoftWhite">
        Raphael Kusuma
      </h1>

      <div className="imageContainer">
        <img className="decorativePic1" src={teamPhoto} alt="" />
        <div className="smallImageSnippet1">
          <p className="text-offWhite bg-DarkishGreen p-1">
            me and my RA team :)
          </p>
        </div>
      </div>
    </div>
  );
};

/*
        <p className="font-sans text-2xl text-SoftWhite">
          My name is Raphael, I'm a Junior{" "}
          <span class="font-bold">
            Computer Science and Engineering Major with a Minor in Mathematics
          </span>{" "}
          at <span class="font-bold"> Santa Clara University</span>. My current
          interests are in Full-Stack Development and Mobile App Development.
          I've worked with Professors at Santa Clara University for projects,
          and I currently work in SCU's very own Residence Life Department as an
          RA. I'll expand more on my skills in the{" "}
          <span class="font-bold">Resume</span> section. I'm currently looking
          for a{" "}
          <span class="font-bold">
            Software Engineering Internship for Summer 2024
          </span>
          . I love learning new things, I love{" "}
          <span class="font-bold font italic">
            <span class="font-serif">
              Coffee, Boxing, Exercise, Photography, and Video Games
            </span>
          </span>
          .
        </p>  
*/
export default AboutMe;
