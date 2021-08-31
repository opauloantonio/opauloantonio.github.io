import { Box, Divider } from '@chakra-ui/react';

import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function Home() {
  return(
    <Box  w={["90%", null, null, "80%"]} m="0 auto">
      <Intro />

      <Divider mt="5" mb="5" />

      <Projects />

      <Divider mt="5" mb="5" />

      <Skills />

      <Divider mt="5" mb="5" />

      <Contact />
    </Box>
  )
}
