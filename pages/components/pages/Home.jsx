import React from "react";
import { Box, Image, Text } from "@mantine/core";
function Home() {
	return (
		<Box
			style={{
				border: "1px solid red",
				// height: "85vh",
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
			}}
		>
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
				<Text
					style={{
						textAlign: "center",
						fontSize: "37px",
						fontWeight: "700",
						marginTop: "15px",
					}}
				>
					Musajonov Isroiljon
				</Text>
				<Text
					style={{
						textAlign: "center",
						fontSize: "27px",
						fontWeight: "500",
						marginTop: "-5px",
					}}
				>
					I am a frontend developer
				</Text>
			</Box>
		</Box>
	);
}

export default Home;
