import React from "react";
import "../styles/Projects.css";
import Allescan from "../assets/Allescan.jpg";
import LicenseQuest from "../assets/LicenseQuest.jpg";
import Bronco from "../assets/Bronco.png";

const Projects = () => {
  return (
    <div>
      <div className="viewContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          Projects
        </h1>
        <p className="font-sans text-2xl text-offWhite">
          Here are some of my projects!
        </p>
      </div>
      <div className="projectsListContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          License Quest
        </h1>
        <a
          href="https://devpost.com/software/licensequest"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={LicenseQuest}
            alt=""
            className="w-15 border-8 border-Darks rounded-3xl "
          />
        </a>
        <p className="font-sans text-xl text-offWhite mt-5">
          License Quest was my second Hackathon Project. I teamed up with five
          others to create a Mobile App that would assist new drivers with
          adjusting to the road by providing them routes that would be less
          congested in order to allow them to get accustommed to driving. In
          addition, we provided several other features that would help with test
          anxiety (Such as Flashcards and a practice exam). We used React Native
          and Expo to create the app. I assisted my team members with setting up
          the environment. I planned and implemented the UI, in addition to
          implementing features such as a Flashcards system.
        </p>
      </div>
      <div className="projectsListContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          BroncoTransit (Research Project)
        </h1>
        <a
          href="https://ieeexplore.ieee.org/document/9615809"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Bronco} alt="" className="w-15 bg-offWhite rounded-2xl" />
        </a>
        <p className="font-sans text-xl text-offWhite mt-5">
          Worked alongside Dr. Navid Shaghaghi and a few of my fellow peers to
          create a Mobile App which explores the potential of public
          transportation. An important feature we have is called the "Discovery"
          feature, which allows users to explore the areas they can get to using
          public transportation. We used React Native to create this app. The
          Yelp API is used for identifying places of interest, and we used
          Firebase to store user data. In addition, we used React Redux for
          state management. I assisted in the implementation of Firebase.
          Creating systems for storing user data (such as last visited
          locations, and favorite places), in addition to helping implement a
          system for authentication. Furthermore, I implemented the
          functionality for certain screens and "modernized" the UI.
        </p>
        <div className="flex flex-row flex-wrap justify-center">
          <button className="bg-cyan-600">React Native</button>
        </div>
      </div>
      <div className="projectsListContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          AlleScan
        </h1>
        <a
          href="https://devpost.com/software/hi-9cjrfo"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Allescan}
            alt=""
            className="w-15 border-8 border-Darks rounded-3xl border-dashed"
          />
        </a>
        <p className="font-sans text-xl text-offWhite mt-5">
          AlleScan was my first Hackathon Project. I teamed up with five others
          to create a Mobile App that would be able to scan and read nutrition
          labels and display the any potential allergens in the food. We used
          Google Vision API to scan the labels. We used Flutter to create the
          app and implemented a system for storing important user data and a
          system for authentication using Firebase.
        </p>
      </div>
    </div>
  );
};

export default Projects;
