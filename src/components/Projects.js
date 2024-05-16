import React from "react";
import BackButton from "./ReturnToHome";
import "../styles/Projects.css";

const Projects = ({ backFunction }) => {
  return (
    <div>
      <BackButton backFunction={backFunction} />
      <div className="Project_Screen">
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
    </div>
  );
};

export default Projects;
