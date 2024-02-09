import React from "react";
import "../styles/Resume.css";
import teamPhoto1 from "../assets/TeamPhoto.JPG";
import Library from "../assets/SCU_Library.jpg";
import PTHub from "../assets/Bronco.png";
import ExperienceCard from "../components/ExperienceCard";
import Anritsu from "../assets/Anritsu-community-logo-1.png";
import Graham from "../assets/graham.jpg";
import Villas from "../assets/University_Villas.jpg";

const Resume = () => {
  return (
    <div className="ResumeContainer">
      <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
        My Experience
      </h1>
      <p className="font-sans text-2xl text-offWhite">Here's all my Jobs :)</p>
      <div className="JobsContainer">
        <ExperienceCard
          image={Anritsu}
          title="Software Engineer Intern"
          date="June 2024 - September 2024"
          description="Intern for Anritsu for Summer 2024 in Morgan Hill, CA"
        />
        <ExperienceCard
          image={Villas}
          title="Neighborhood Representative"
          date="August 2023 - Present"
          description="Student leader position at the University Villas. Serving 300-400 Juniors and Seniors."
        />
        <ExperienceCard
          image={Graham}
          title="Community Facilitator"
          date="April 2023 - September 2023"
          description="Resident assistant for Graham Hall at Santa Clara University."
        />
        <ExperienceCard
          image={PTHub}
          title="Mobile Application Developer"
          date="May 2023 - Present"
          description="Collaborated alongside Dr. Navid Shaghaghi and fellow peers to develop a mobile app."
        />
        <ExperienceCard
          image={Library}
          title="University Library Student Assistant"
          date="April 2022 - Present"
          description="Customer Service and Maintenance of Library Services"
        />
      </div>
    </div>
  );
};

export default Resume;
