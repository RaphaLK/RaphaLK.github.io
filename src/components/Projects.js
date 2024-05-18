import React from "react";
import BackButton from "./ReturnToHome";
import "../styles/Projects.css";

const Projects = ({ backFunction }) => {
  return (
    <div>
      <BackButton backFunction={backFunction} />

      <div className="grid grid-cols-2">
        <div className="left_page">
          <p className="title">Projects</p>

          <div className="Introductions">
            <p>
              {" "}
              <span className="font-semibold text-s">
                The stuff I've done in the past couple years or so.
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="right_page">
          <p className="title">What am I working on these days?</p>
          <div className="project_intro">
            <p className="proj_intro_text"> Currently I have a 3 projects in progress. I'm developing a mobile app which focuses on public transport
              for SCU students. I'm also working with two friends to develop a website which scrapes our University's registration 
              system and allows students to identify their degree progress. Finally, for my Senior capstone project we're processing 
              EMG signals and applying ML algorithms to accurately predict finger movements in VR and AR.
            </p>

          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Projects;
