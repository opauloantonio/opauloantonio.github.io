import { Box, Heading, Text, Stack, useColorMode, Link } from "@chakra-ui/react";

import { GithubIcon, TwitterIcon, RedditIcon, LinkedinIcon } from '../icons';

export default function Contact() {
  const { colorMode } = useColorMode();

  return(
    <Box id="contact">
      <Heading>Contact</Heading>

      <Text mt="5" mb="5">
        If you would like to talk to me about anything, be it a business inquiry or a casual chat, feel free
        {''} to get in touch with me through any of the following channels:
      </Text>

      <Stack direction="row" spacing="30px">
        <Link href="https://www.github.com/opauloantonio" rel="no-opener no-rel" target="_blank">
          <Stack 
            alignItems="center"
            cursor="pointer"
          >
            <Box w="30px" h="30px" >
              <GithubIcon style={{ ...(colorMode === "dark") && {transform: "scale(1.5)"} }} dark={colorMode === "dark"} />
            </Box>

            <Text>Github</Text>
          </Stack>
        </Link>

        <Link href="https://www.linkedin.com/in/opauloantonio/" rel="no-opener no-rel" target="_blank">
          <Stack 
            alignItems="center"
            cursor="pointer"
          >
            <Box w="30px" h="30px" >
              <LinkedinIcon />
            </Box>

            <Text>LinkedIn</Text>
          </Stack>
        </Link>

        <Link href="https://www.reddit.com/user/heo5981" rel="no-opener no-rel" target="_blank">
          <Stack
            alignItems="center"
            cursor="pointer"
          >
            <Box w="30px" h="30px">
              <RedditIcon />
            </Box>

            <Text>Reddit</Text>
          </Stack>
        </Link>

        <Link href="https://www.twitter.com/opauloantonio" rel="no-opener no-rel" target="_blank">
          <Stack
            alignItems="center"
            cursor="pointer"
          >
            <Box w="30px" h="30px">
              <TwitterIcon style={{borderRadius: "100%"}} />
            </Box>

            <Text>Twitter</Text>
          </Stack>
        </Link>
      </Stack>

    </Box>
  )
}
