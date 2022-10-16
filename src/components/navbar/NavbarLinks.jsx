import React from "react";
import Link from "next/link";
import { Badge, Box, NavLink, Text } from "@mantine/core";
import { IconHome2 } from "@tabler/icons";
function NavbarLinks() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          alignContent: "space-between",
          // border: "1px solid red",
          height: "85vh",
          padding: "5%",
        }}
      >
        <Box
          style={{
            width: "100%",
          }}
        >
          <Link href="/">
            <Text weight={700} style={{ fontSize: "35px", cursor: "pointer" }}>
              Isroiljon
            </Text>
          </Link>
        </Box>
        <Box
          style={{
            width: "100%",
          }}
        >
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
            <NavLink
              label="About"
              icon={<IconHome2 size={16} stroke={1.5} />}
            />
          </Link>
        </Box>
        <Box
          style={{
            width: "100%",
          }}
        >
          ;mkds
        </Box>
      </Box>
    </>
  );
}

export default NavbarLinks;
