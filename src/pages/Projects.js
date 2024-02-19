import React from "react";
import "../styles/Projects.css";
import "../components/ProjectCard";
import Allescan from "../assets/Allescan.jpg";
import LicenseQuest from "../assets/LicenseQuest.jpg";
import Bronco from "../assets/Bronco.png";
import Twitter from "../assets/unnamed.png";
import C_plus from "../assets/ISO_C++_Logo.svg.png";
import BottomTab from "../assets/react-navigation.png"
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
        My Projects
      </h1>
      <div className="viewContainer">
        <ProjectCard
          image={LicenseQuest}
          title="LicenseQuest"
          description="Helping new drivers adjust to the roads and promote lawful driving."
        />
        <ProjectCard
          image={Allescan}
          title="Allescan"
          description="Mobile application to scan nutrition labels and highlight any allergens"
        />
        <ProjectCard
          image={Bronco}
          title="BroncoTransport"
          description="Research Project -- Mobile application to promote public transport use and exploration at SCU."
        />
        <ProjectCard
          image={Twitter}
          title="Automated Tweets"
          description="A JS Script which takes a prompt in and uses GPT's API to automagically create a tweet which is automatically uploaded to twitter"
        />
        <ProjectCard
          image={BottomTab}
          title="Bottom Tab Navigator"
          description="Testing out navigation systems implemented in React Native using TypeScript"
        />
        <ProjectCard
          image={C_plus}
          title="Budget Manager"
          description="Application to manage a budget created using C++ and OOP principles."
        />
      </div>
    </div>
  );
};

export default Projects;
