import { Box, Text } from "@mantine/core";
import React from "react";
function About() {
  return (
    <Box
      style={{
        padding: "0px 50px",
      }}
    >
      <Text
        weight={700}
        style={{ fontSize: "35px", cursor: "pointer", paddingTop: "10px" }}
      >
        About me
      </Text>
      <Box>
        <Text
          weight={500}
          style={{
            fontSize: "28px",
            padding: "10px 0px",
          }}
        >
          Musajonov Isroiljon Frontend Developer
        </Text>
      </Box>
      <Box>
        <Text
          weight={400}
          style={{
            fontSize: "18px",
          }}
        >
          Hi there. My name is Israel. I am a frontend developer. I have been
          doing programming for over 2 years and I have been doing front end for
          1.5 years. I can create various HTML layouts and ReactJS SPA.
        </Text>
        <Text>add contact</Text>
      </Box>
    </Box>
  );
}

export default About;
