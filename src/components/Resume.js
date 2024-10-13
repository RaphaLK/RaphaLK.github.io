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
          <ExperienceContainer companyName={"Anritsu"} roleName={"Software Engineering Intern"} description={"Worked on the Back-end of a Signal Generator and a prototype Vector Signal Generator."} date={"2024"}/>
          <ExperienceContainer companyName={"EPIC Lab SCU"} roleName={"Full Stack Mobile App Developer"} description={"Developed key functionalities on a Mobile App focused on Public Transport use."} date={"2023 - Present"}/>
          <ExperienceContainer companyName={"Santa Clara University SWE++"} roleName={"Volunteer Tutor"} description={"Taught Python students between the ages of middle school and highschool. Introduced them to projects and basic fundamentals of DSA."} date={"2024"}/>
          <ExperienceContainer companyName={"Santa Clara University Residence Life"} roleName={"Resident Advisor"} description={"Organized events and handled logistics in the residence halls at SCU. Promoted community amongst the residents."} date={"2023-2024"}/>
          <ExperienceContainer companyName={"Santa Clara University Library"} roleName={"Student Assistant"} description={"Provided customer service, organized Library layouts, handled Inter-Library Loan deliveries, and worked on material archival systems"} date={"2022-Present"}/>
          <ExperienceContainer companyName={"Springfield School Jakarta"} roleName={"Stage Manager/Stream Operator"} description={"Handled the streaming and effect/prop timings of a Musical"} date={"2021"}/>
          <ExperienceContainer companyName={"Springfield School Jakarta"} roleName={"Head of Logistics"} description={"Led a team to handle meals, competitions, equipment, and inter-team communication for a city-wide sports gathering"} date={"2020"}/>
        </Grid>
      </div>
    </div>
  );
};

export default Resume;
