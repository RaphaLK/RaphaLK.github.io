import React from "react";
import BackButton from "./ReturnToHome";
import "../styles/AboutMe.css";
import MyPhoto from "../assets/MyPhoto.jpg";

const About = ({ backFunction, animations}) => {
  return (
    <div className={animations}>
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
          <div className="Desc_Contain">
            <p className="myDescription">
              Aspiring Software Engineer with experience in <span className="font-bold italic">Full-Stack Web and Mobile App Development</span>.
              I'm currently learning about <span className="font-bold italic"> Edge AI/ML Technologies and Signal Processing </span> for my Senior Design Project.
              We'll be using sEMG signals to provide accurate finger movements in VR/AR.
            </p>
          </div>
          <div className="ImageContainer">
            <img src={MyPhoto} className="ImageStyling"/>
          </div>
          <div className="">

          </div>
          <div className="Co_En_Na_Ph">
            <p className="Description2">Coffee Enjoyer & Nature Photographer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
