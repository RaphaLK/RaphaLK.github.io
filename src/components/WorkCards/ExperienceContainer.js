import React from 'react'
import { Heading, Text, Box } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const ExperienceContainer = ({companyName, roleName, date, description}) => {
  return (
    <Box>
      <Heading>{companyName}</Heading>
      <Text>{roleName}</Text>
    </Box>
    /*
    <Heading> Anritsu  </Heading>
    <Text>Software Engineering Intern</Text>
    <Heading> EPIC Lab -- Full Stack Mobile App Developer </Heading>
    <Text>Full Stack Mobile App Developer</Text>
    <Heading> Santa Clara University SWE++ </Heading>
    <Text>Volunteer Tutor</Text>
    <Heading>
      {" "}
      Santa Clara University Residence Life{" "}
    </Heading>
    <Text>Resident Advisor</Text>
    <Heading>
      {" "}
      Santa Clara University Library -- Student Assistant{" "}
    </Heading>
    <Text></Text>
    <Heading>
      {" "}
      Springfield School Jakarta -- Stage Manager/Stream Operator{" "}
    </Heading>
    <Text></Text>
    <Heading> Springfield School Jakarta -- Head of Logistics </Heading>
    <Text></Text>
    */
  )
}

export default ExperienceContainer
