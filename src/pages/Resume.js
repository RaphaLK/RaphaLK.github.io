import React from "react";
import "../styles/Resume.css";
import Languages from "../components/Languages";
import teamPhoto1 from "../assets/TeamPhoto.JPG";
import Library from "../assets/SCU_Library.jpg";
import PTHub from "../assets/Bronco.png"

const Resume = () => {
  return (
    <div>
      <div className="viewContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          My Skills
        </h1>
        <p className="font-sans text-2xl text-offWhite">
          Here's what I can do :)
        </p>
        <div className="ExperienceItemContainer">
          <Languages/>
        </div>
      </div>
      <div className="viewContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          My Experience
        </h1>
        <p className="font-sans text-2xl text-offWhite">
          Here's all my Jobs :)
        </p>
        <div className="ExperienceItemContainer">
          <p className="font-sans text-xl text-offWhite">Community Facilitator/Neighborhood Representative/RA</p>
          <img src={teamPhoto1} alt=''/>
        </div>
        <div className="ExperienceItemContainer">
          <p className="font-sans text-xl text-offWhite">Mobile App Developer (Research for Dr.Navid Shaghaghi)</p>
          <img src={PTHub} alt=''></img>
          <p></p>
        </div>
        <div className="ExperienceItemContainer">
          <p className="font-sans text-xl text-offWhite">Library Student Assistant</p>
          <img src={Library} alt=''></img>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
