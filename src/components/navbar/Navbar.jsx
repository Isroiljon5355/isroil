// import { useState } from "react"
// import {
// 	AppShell,
// 	Navbar,
// 	Header,
// 	MediaQuery,
// 	Burger,
// 	useMantineTheme,
// 	Box,
// } from "@mantine/core"
// import Home from "../../pages/home/Home"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import NavbarLinks from "./NavbarLinks"
// function AppShellDemo() {
// 	const theme = useMantineTheme()
// 	const [opened, setOpened] = useState(false)
// 	return (
// 		<>
// 			<AppShell
// 				styles={{
// 					main: {
// 						background:
// 							theme.colorScheme === "dark"
// 								? theme.colors.dark[8]
// 								: theme.colors.gray[0],
// 					},
// 				}}
// 				navbarOffsetBreakpoint="sm"
// 				asideOffsetBreakpoint="sm"
// 				navbar={
// 					<Navbar
// 						p="md"
// 						hiddenBreakpoint="sm"
// 						hidden={!opened}
// 						width={{ sm: 200, lg: 300 }}
// 					>
// 						<NavbarLinks />
// 					</Navbar>
// 				}
// 				header={
// 					<Header height={70} p="md">
// 						<div
// 							style={{
// 								display: "flex",
// 								justifyContent: "space-between",
// 								alignItems: "center",
// 								height: "100%",
// 							}}
// 						>
// 							<MediaQuery largerThan="sm" styles={{ display: "none" }}>
// 								<Burger
// 									opened={opened}
// 									onClick={() => setOpened((o) => !o)}
// 									size="sm"
// 									color={theme.colors.gray[6]}
// 									mr="xl"
// 								/>
// 							</MediaQuery>
// 							<ColorModeSwitcher />
// 						</div>
// 					</Header>
// 				}
// 			>
// 				{/* <Home /> */}
// 			</AppShell>
// 		</>
// 	)
// }
// export default AppShellDemo
