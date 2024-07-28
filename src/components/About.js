import React from "react";
import BackButton from "./ReturnToHome";
import "../styles/AboutMe.css";
import MyPhoto from "../assets/MyPhoto.jpg";
import Pumpkin from "../assets/Photography.png"

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
          <div className="PhotographyContainer">
            <img src={Pumpkin} className="PhotographyStyle"/>
          </div>
          <div className="Co_En_Na_Ph">
            <p className="Description2">Coffee Enjoyer & Nature Photographer</p>
            <p className="Description3"> I take photos of nature! I find that there's a lot of beauty that we tend to overlook. 
            I also enjoy the occasional cup of coffee. Growing up in Indonesia, coffee plays a large part in social settings.
            I've kept that part of my culture with me!</p>
          </div>
          <div className="Boxer_UltimateFrisbee">
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
