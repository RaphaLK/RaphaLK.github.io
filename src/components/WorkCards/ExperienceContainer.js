import React from 'react'
import { Heading, Text, Box } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const ExperienceContainer = ({companyName, roleName, date, description}) => {
  return (
    <Box>
      <Heading>{companyName}</Heading>
      <Text>{roleName}</Text>
      <Text>{description}</Text>
      <Text>{date}</Text>
    </Box>
  )
}

export default ExperienceContainer
