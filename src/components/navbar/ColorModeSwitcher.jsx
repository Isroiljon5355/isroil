import React from "react"
import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core"
import { IconName, FiSun } from "react-icons/fi"
import { IconMoon, IconSun, IconSunMoon } from "@tabler/icons"
export function ColorModeSwitcher() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	return (
		<Group position="center">
			<ActionIcon
				onClick={() => toggleColorScheme()}
				size="xl"
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[6]
							: theme.colors.gray[0],
					color:
						theme.colorScheme === "dark"
							? theme.colors.yellow[4]
							: theme.colors.blue[6],
				})}
			>
				{colorScheme === "dark" ? <IconSun size={24} /> : <IconMoon size={24} />}
			</ActionIcon>
		</Group>
	)
}
