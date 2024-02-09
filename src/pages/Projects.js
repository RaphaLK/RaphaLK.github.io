import React from "react";
import "../styles/Projects.css";
import Allescan from "../assets/Allescan.jpg";
import LicenseQuest from "../assets/LicenseQuest.jpg";
import Bronco from "../assets/Bronco.png";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="viewContainer">
        <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
          Projects
        </h1>
        <p className="font-sans text-2xl text-offWhite">
          Here are some of my projects!
        </p>
      </div>
      <div className="projects">
        <div className="projectsListContainer">
          <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
            LicenseQuest
          </h1>
          <a href="https://devpost.com/software/licensequest" target="_blank">
            <div class="card">
              <img
                src={LicenseQuest}
                alt=""
                className="w-1/2 bg-offWhite rounded-2xl"
              />
              <div class="card__content">
                <p class="card__title">Hackathon Project</p>
                <p class="card__description">
                  A mobile app created using React-Native and Expo. Our backend
                  utilizes API calls to Inrix's custom traffic API(s) and
                  Amazon's AWS. I personally worked on the Front End, using
                  Figma to plan designs and implementing them. In addition, I
                  programmed the app's navigation stack in addition to our
                  written test-prep feature.
                </p>
              </div>
            </div>
          </a>
          <div className="flex flex-column flex-wrap justify-center">
            <button class="ReactNative">React Native</button>
            <button class="Figma">Figma</button>
            <button class="Expo">Expo</button>
            <button class="AWS">AWS</button>
          </div>
        </div>
        <div className="projectsListContainer">
          <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
            BroncoTransit
          </h1>
          <a
            href="https://ieeexplore.ieee.org/document/9615809/"
            target="_blank"
          >
            <div class="card">
              <img
                src={Bronco}
                alt=""
                className="w-5/6 bg-offWhite rounded-2xl"
              />
              <div class="card__content">
                <p class="card__title">Research Project</p>
                <p class="card__description">
                  Worked alongside Dr. Navid Shaghaghi and a few of my fellow
                  peers to create a Mobile App which explores the potential of
                  public transportation. An important feature we have is called
                  the "Discovery" feature, which allows users to explore the
                  areas they can get to using public transportation. We used
                  React Native to create this app. The Yelp API is used for
                  identifying places of interest, and we used Firebase to store
                  user data. In addition, we used React Redux for state
                  management. I assisted in the implementation of Firebase.
                  Creating systems for storing user data (such as last visited
                  locations, and favorite places), in addition to helping
                  implement a system for authentication. Furthermore, I
                  implemented the functionality for certain screens and
                  "modernized" the UI.
                </p>
              </div>
            </div>
          </a>
          <div className="flex flex-row flex-wrap justify-center">
            <button class="ReactNative">React Native</button>
            <button class="ReactRedux">React Redux</button>
            <button class="Firebase">Firebase</button>
          </div>
        </div>
        <div className="projectsListContainer">
          <h1 className="font-sans text-4xl font-bold mb-4 text-offWhite">
            AlleScan
          </h1>
          <a href="https://devpost.com/software/hi-9cjrfo" target="_blank">
            <div class="card">
              <img
                src={Allescan}
                alt=""
                className=" w-5/6 bg-offWhite rounded-2xl"
              />
              <div class="card__content">
                <p class="card__title">Hackathon Project</p>
                <p class="card__description">
                  AlleScan was my first Hackathon Project. I teamed up with five
                  others to create a Mobile App that would be able to scan and
                  read nutrition labels and display the any potential allergens
                  in the food. We used Google Vision API to scan the labels. We
                  used Flutter to create the app and implemented a system for
                  storing important user data and a system for authentication
                  using Firebase.
                </p>
              </div>
            </div>
          </a>
          <div className="flex flex-row flex-wrap justify-center">
            <button class="Flutter">Flutter</button>
            <button class="Firebase">Firebase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
