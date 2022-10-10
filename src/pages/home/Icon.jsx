import { Box } from "@mantine/core"
import React from "react"
import { IconBell, IconBrandGithub } from "@tabler/icons"
import useStyles from "./GlobalStayle"
import data from "./data"
function Icon() {
	const { classes } = useStyles()
	return (
		<Box
			style={{
				display: "flex",
				justifyContent: "space-between",
				marginTop: "25px",
			}}
		>
			{data.map((e) => {
				return (
					<Box key={e.id}>
						<a href={e.urel}>
							<Box className={classes.IconeBox}>{e.icon}</Box>
						</a>
					</Box>
				)
			})}
		</Box>
	)
}

export default Icon
