import { Box, Button, Card, Text } from "@mantine/core";
import React from "react";
import List from "../about/index";

const prods = [
  { id: "ds", name: "salomf" },
  { id: "qwx", name: "saewds" },
  { id: "pp", name: "wwq" },
];

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
      </Box>
      <Box>
        <Text>salommwkds</Text>
        <Text>sacmks</Text>
      </Box>
      <List items={prods} itemComponents={<Product highlighted />} />
    </Box>
  );
}

export default About;

const Product = ({ id, name, highlighted }) => {
  return (
    <Card>
      {highlighted && <Text>salom</Text>}
      <Text>{name}</Text>
      <Button>Add to Cart</Button>
      991270628
    </Card>
  );
};
