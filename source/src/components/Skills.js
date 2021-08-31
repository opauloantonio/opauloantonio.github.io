import { Box, Heading, Text, Stack, useColorMode, SimpleGrid } from "@chakra-ui/react";

import {
  PythonIcon, HTMLIcon, CSSIcon, JavaScriptIcon, SQLIcon,
  ReactIcon, ReduxIcon, AWSIcon, HerokuIcon, InkscapeIcon,
  GithubIcon
} from '../icons';

export default function Skills() {
  const { colorMode } = useColorMode();

  const skills = [
    [<PythonIcon style={{width: 50, height: 50}} />, "Python"],
    [<HTMLIcon style={{width: 50, height: 50}} />, "HTML"],
    [<CSSIcon style={{width: 50, height: 50}} />, "CSS"],
    [<JavaScriptIcon style={{width: 50, height: 50}} />, "JavaScript"],
    [<ReactIcon style={{width: 50, height: 50}} />, "ReactJS"],
    [<ReduxIcon style={{width: 50, height: 50}} />, "ReduxJS"],
    [<SQLIcon style={{width: 50, height: 50}} />, "SQL"],
    [<AWSIcon style={{width: 50, height: 50}} />, "AWS"],
    [<HerokuIcon style={{width: 50, height: 50}} />, "Heroku"],
    [<GithubIcon dark={colorMode === "dark"} style={{width: 50, height: 50}} />, "Github"],
    [<InkscapeIcon dark={colorMode === "dark"} style={{width: 50, height: 50}} />, "Inkscape"],
  ];

  return(
    <Box id="skills">
      <Heading>Skills</Heading>

      <Text mt="5" mb="5">
        I'm currently more focused on web developement with Django and React, I've had some experience developing
        {''} games with Unity in the past and I do plan to go back to gamedev in the future!
      </Text>

      <Text mt="5" mb="5">
        For now, these are the technologies, platforms and tools that I work with almost everyday and feel comfortable using:
      </Text>

      <SimpleGrid columns={[3, null, 5, 8]} spacing="20px" mt="10" mb="10">
        {skills.map((s, si) => (
          <Stack spacing="10px" align="center">
            {s[0]}

            <Text>{s[1]}</Text>
          </Stack>  
        ))}
      </SimpleGrid>

    </Box>
  )
}
