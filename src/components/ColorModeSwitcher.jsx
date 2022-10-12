import React, { useState } from "react"
import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core"
import { IconMoon, IconSun } from "@tabler/icons"
export function ColorModeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <>
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <IconMoon size={18} /> : <IconMoon size={18} />}
      </ActionIcon>
    </>
  )
}
