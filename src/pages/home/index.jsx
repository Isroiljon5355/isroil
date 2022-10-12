import React from "react"
import { Box, Image, Text } from "@mantine/core"
import Icon from "./Icon"
import useStyles from "./GlobalStayle"

function Home() {
  const { classes } = useStyles()
  return (
    <Box className={classes.homePages}>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="salom"
          radius="50%"
          width={250}
          height={250}
          style={{
            margin: "auto",
          }}
        />
        <Text className={classes.homePageTitle}>Musajonov Isroiljon</Text>

        <Text className={classes.homePageTexts}>I am a frontend developer</Text>
        <Icon />
      </Box>
    </Box>
  )
}

export default Home
