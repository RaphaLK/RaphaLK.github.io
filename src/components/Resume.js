import React from "react";
import BackButton from "./ReturnToHome";
import "../styles/Resume.css";


const Resume = ({ backFunction }) => {
  return (
    <div>
      <BackButton backFunction={backFunction} />
      <div className="Resume_Screen">
        <p className="title">Resume</p>

        <div className="Introductions">
          <p>
            {" "}
            <span className="font-semibold text-s">
              My Work & Volunteer Experience!
            </span>{" "}
          </p>
        </div>
        </div>
    </div>
  );
};

export default Resume;
