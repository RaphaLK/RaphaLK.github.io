import React from "react";
import "../styles/Resume.css";
import teamPhoto1 from "../assets/TeamPhoto.JPG";
import Library from "../assets/SCU_Library.jpg";
import PTHub from "../assets/Bronco.png"

const Resume = () => {
  return (
    <div>
      <div className="ResumeContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          My Experience
        </h1>
        <p className="font-sans text-2xl text-offWhite">
          Here's all my Jobs :)
        </p>
        <div className="ExperienceItemContainer">
          <img className="exp_img" src={teamPhoto1} alt=''/>
          <p className="font-sans text-m text-offWhite">Community Facilitator/Neighborhood Representative/RA</p>
        </div>
        <div className="ExperienceItemContainer">
          <img className="exp_img" src={PTHub} alt=''></img>
          <p className="font-sans text-m text-offWhite">Mobile App Developer (Research for Dr.Navid Shaghaghi)</p>
          <p></p>
        </div>
        <div className="ExperienceItemContainer">
          <img className="exp_img" src={Library} alt=''></img>
          <p className="font-sans text-m text-offWhite">Library Student Assistant</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
