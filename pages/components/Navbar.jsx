import { useState } from "react"
import {
	AppShell,
	Navbar,
	Header,
	// Footer,
	// Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	Button,
} from "@mantine/core"
import Home from "./pages/Home"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
export default function AppShellDemo() {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)
	return (
		<>
			<AppShell
				styles={{
					main: {
						background:
							theme.colorScheme === "dark"
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint="sm"
				asideOffsetBreakpoint="sm"
				navbar={
					<Navbar
						p="md"
						hiddenBreakpoint="sm"
						hidden={!opened}
						width={{ sm: 200, lg: 300 }}
					>
						<Text>Application navbar</Text>
						<Button>Add click</Button>
					</Navbar>
				}
				header={
					<Header height={70} p="md">
						<div
							style={{ display: "flex", alignItems: "center", height: "100%" }}
						>
							<MediaQuery largerThan="sm" styles={{ display: "none" }}>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size="sm"
									color={theme.colors.gray[6]}
									mr="xl"
								/>
							</MediaQuery>

							<ColorModeSwitcher />
							<Text>Resize app to see responsive navbar in action</Text>
							<Text>Resize app to see responsive navbar in action</Text>
							<Text>Resize app to see responsive navbar in action</Text>
						</div>
					</Header>
				}
			>
				<Home />
				<Text>Resize app to see responsive navbar in action</Text>
			</AppShell>
		</>
	)
}
