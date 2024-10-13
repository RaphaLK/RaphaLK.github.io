import React from "react";
import BackButton from "./ReturnToHome";
import "@radix-ui/themes/styles.css";
import "../styles/Resume.css";
import { Grid, Heading, Text } from "@radix-ui/themes";
import ExperienceContainer from "./WorkCards/ExperienceContainer";

const Resume = ({ backFunction }) => {
  return (
    <div>
      <BackButton backFunction={backFunction} />
      <div className="Resume_Screen">
        <p className="title">Resume</p>

        <div className="Introductions_Resume">
          <p>
            {" "}
            <span className="font-semibold text-s">
              My Work & Volunteer Experience!
            </span>{" "}
          </p>
        </div>
        <Grid columns="3" gap="3" rows="repeat(2, 64px)" width="auto">
          <ExperienceContainer companyName={"Anritsu"} roleName={"Software Engineering Intern"}/>
          <ExperienceContainer companyName={"EPIC Lab SCU"} roleName={"Full Stack Mobile App Developer"}/>
          <ExperienceContainer companyName={"Santa Clara University SWE++"} roleName={"Volunteer Tutor"}/>
          <ExperienceContainer companyName={"Santa Clara University Residence Life"} roleName={"Resident Advisor"}/>
          <ExperienceContainer companyName={"Springfield School Jakarta"} roleName={"Stage Manager/Stream Operator"}/>
          <ExperienceContainer companyName={"Springfield School Jakarta"} roleName={"Head of Logistics"}/>
        </Grid>
      </div>
    </div>
  );
};

export default Resume;
