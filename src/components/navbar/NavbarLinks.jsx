import React, { useState } from "react";
import Link from "next/link";
import { Badge, Box, NavLink, Text } from "@mantine/core";
import { IconHome2 } from "@tabler/icons";

import { useRouter } from "next/router";

function NavbarLinks() {
  const router = useRouter();

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
          <Link href="/" passHref>
            <NavLink
              component="a"
              label="Home"
              active={router.pathname === "/"}
              style={{
                borderRadius: "10px",
                marginTop: "15px",
              }}
            />
          </Link>
          <Link href="/about" passHref>
            <NavLink
              component="a"
              label="About"
              active={router.pathname === "/about"}
              style={{
                borderRadius: "10px",
                marginTop: "15px",
              }}
            />
          </Link>
        </Box>
        <Box
          style={{
            width: "100%",
          }}
        >
          add
        </Box>
      </Box>
    </>
  );
}

export default NavbarLinks;
