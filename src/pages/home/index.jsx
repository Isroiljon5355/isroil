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
          src="https://avatars.githubusercontent.com/u/110961908?v=4"
          alt="Isroiljon"
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
