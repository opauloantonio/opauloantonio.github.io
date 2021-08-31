import { useState } from "react";

import { Box, Icon, Stack, Text, Divider, useColorMode } from "@chakra-ui/react";

import { HashLink } from 'react-router-hash-link';

import { Link } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function Topnav() {
  const pl = [null, null, "10px"];

  const [ menuShown, setMenuShow ] = useState(false);
  const { colorMode, setColorMode } = useColorMode();

  function toggleColorMode() {
    setColorMode(colorMode === "dark" ? "light" : "dark");
  }

  return(
    <Box>
      <Box pt="15px" pb="15px" w={["90%", null, null, "80%"]} m="0 auto">
        <Stack 
          direction={["column", null, "row"]}
          justify="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Text flex="1">
              <Link to="/">opauloantonio</Link>
            </Text>

            <Text 
              border="1px solid" p="8px" borderRadius="8px"
              display={["flex", null, "none"]}
            >
              <Icon 
                as={menuShown ? IoCloseOutline : FiMenu} 
                onClick={() => setMenuShow(!menuShown)}
                cursor="pointer"
              />
            </Text>
          </Stack>

          <Stack 
            direction={["column", null, "row"]} 
            display={[
              menuShown ? "flex" : "none",
              null,
              "flex"
            ]}
            align="center"
          >
            <Text pl={pl}>
              <HashLink smooth to="/#projects">Projects</HashLink>
            </Text>

            <Text pl={pl}>
              <HashLink smooth to="/#skills">Skills</HashLink>
            </Text>
            
            <Text pl={pl} pr={pl}>
              <HashLink smooth to="/#contact">Contact</HashLink>
            </Text>

            <Icon 
              as={colorMode === "dark" ? FaSun : BsMoon}
              onClick={toggleColorMode}
              cursor="pointer"
            />
          </Stack>
        </Stack>
      </Box>

      <Divider />
    </Box>
  );
}