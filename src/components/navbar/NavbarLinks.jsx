import React from "react"
import Link from "next/link"
import { Badge, Box, NavLink } from "@mantine/core"
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from "@tabler/icons"
function NavbarLinks() {
  return (
    <>
      <Link
        href="/"
        style={{
          textDecoration: "none !important",
          color: "#fff",
        }}
      >
        <NavLink
          label="With icon"
          variant="filled"
          active
          icon={<IconHome2 size={16} stroke={1.5} />}
        />
      </Link>
      <Link href="/about">
        <NavLink label="About" icon={<IconHome2 size={16} stroke={1.5} />} />
      </Link>
    </>
  )
}

export default NavbarLinks
