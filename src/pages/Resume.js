import React from "react";
import "../styles/Resume.css";
import teamPhoto1 from "../assets/TeamPhoto.JPG";

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
        <div className="ExperienceItemContainer"></div>
      </div>
      <div className="viewContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          My Experience
        </h1>
        <p className="font-sans text-2xl text-offWhite">
          Here's all my Jobs :)
        </p>
        <div className="ExperienceItemContainer">
          <p>Community Facilitator/Neighborhood Representative/RA</p>
          <img src={teamPhoto1} alt=''/>
        </div>
        <div className="ExperienceItemContainer">
          <p>Mobile App Developer (Research for Dr.Navid Shaghaghi)</p>
          <p></p>
        </div>
        <div className="ExperienceItemContainer">
          <p>Library Student Assistant</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
