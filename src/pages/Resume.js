import React from "react";
import "../styles/Resume.css";
import teamPhoto1 from "../assets/TeamPhoto.JPG";
import Library from "../assets/SCU_Library.jpg";
import PTHub from "../assets/Bronco.png";
import ExperienceCard from "../components/ExperienceCard";
import Anritsu from "../assets/Anritsu-community-logo-1.png";

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
          description="Software Engineering Intern for Anritsu"
        />
        <ExperienceCard
          image={teamPhoto1}
          title="Neighborhood Representative"
          date="August 2023 - Present"
          description="Student leader position at the University Villas. Serving 3rd and 4th year residents by promoting and hosting 12-15 events every academic year
          aimed at professional and career development."
        />
        <ExperienceCard
          image={Library}
          title="Community Facilitator"
          date="April 2023 - September 2023"
          description="Served as a Resident Assistant for 300-400 freshman and sophomore residents within Graham Hall. Hosted events promoting social interaction and
          community building. In addition to serving on-call for disciplinary and logistical measures."
        />
        <ExperienceCard
          image={PTHub}
          title="Mobile Application Developer"
          date="May 2023 - Present"
          description="Collaborated alongside Dr. Navid Shaghaghi and fellow peers to develop a mobile app to improve the usage of public transport
          within the SCU student body."
        />
        <ExperienceCard
          image={Library}
          title="University Library Student Assistant"
          date="April 2022 - Present"
          description="yeah lmao"
        />
      </div>
    </div>
  );
};

export default Resume;
