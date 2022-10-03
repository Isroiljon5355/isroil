import { useState } from "react";
import { Box, NavLink } from "@mantine/core";
const data = [
	{ icon: "s", label: "Activity", links: "/About" },
	{ icon: "s", label: "Activity", links: "/About" },
	{ icon: "s", label: "Activity", links: "/About" },
];

export default function Demo() {
	const [active, setActive] = useState(0);

	const items = data.map((item, index) => (
		<NavLink
			href={item.links}
			key={item.label}
			active={index === active}
			label={item.label}
			description={item.description}
			rightSection={item.rightSection}
			icon={<item.icon size={16} stroke={1.5} />}
			onClick={() => setActive(index)}
		/>
	));

	return <Box sx={{ width: 220 }}>{items}</Box>;
}
