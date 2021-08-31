import { Box, Stack, Image, Heading, Text, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import profile from "../assets/profile.png";

export default function Intro() {
  const ta = ["center", null, "left"];

  return(
    <Box mt="30px" id="intro">
      <Stack 
        direction={["column-reverse", null, "row"]}
        align="center"
        justifyContent="space-between"
      >
        <Stack 
          direction="column" 
          align={["center", null, "flex-start"]} 
          spacing={["15px"]}
        >
          <Heading>Hello!</Heading>

          <Text textAlign={ta}>
            My name is Paulo Antonio and I'm a self-taught software developer from Brazil.
          </Text>

          <Text textAlign={ta}>
            I started with game development and have been doing mostly web and mobile development in the last couple of months.
          </Text>

          <Text textAlign={ta}>
            Aside from coding, I also enjoy learning languages (currently studying Japanese), reading about diverse subjects and sometimes I play 
            {''} <Link href="https://playspellbreak.com/" target="_blank" rel="noopener noreferrer">Spellbreak <ExternalLinkIcon mx="2px" /></Link>.
          </Text>

          <Text textAlign={ta}>
            Checkout my projects and contact info below!
          </Text>
        </Stack>

        <Box align="center" minWidth="200px">
          <Image 
            borderRadius="100%"
            boxSize="200px"
            src={profile}
          />
        </Box>
      </Stack>
    </Box>
  );
}
