import React from "react";
import BackButton from "./ReturnToHome";
import "../styles/AboutMe.css";

const About = ({ backFunction }) => {
  return (
    <div>
      <BackButton backFunction={backFunction} />
      <div className="AboutMe_Screen">
        <p className="title">About Me</p>

        <div className="Introductions">
          <p>
            {" "}
            <span className="font-semibold text-s">
              Senior Computer Science and Engineering Major
            </span>{" "}
            at Santa Clara University
          </p>
        </div>

        <div className="grid grids-rows-4 grid-cols-2 mt-10">
          <div className="align-middle">
            <p className="myDescription">
              Aspiring Software Engineer with experience in Full-Stack Web and Mobile App Development.
              I'm currently learning about Edge AI/ML and Signal Processing for my Senior Design Project.
              We'll be using sEMG signals to provide accurate finger movements in VR/AR.
            </p>

          </div>
          <div>
            Photo Goes Here
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
