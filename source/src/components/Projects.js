import { 
  Box, Container, Heading, SimpleGrid, Image, 
  Text, Stack, useColorMode, Button, Link
} from "@chakra-ui/react";

import { 
  DjangoIcon, ReactIcon, ReduxIcon, SQLIcon, 
  AWSIcon, HerokuIcon, UnityIcon, CSharpIcon
} from '../icons';

export default function Projects() {
  const { colorMode } = useColorMode();
  
  const projects = [
    {
      name:"Ryou Flashcards",
      imgSrc: "https://opauloantonio.s3.us-east-2.amazonaws.com/ryou-dashboard-screenshot.png",
      description: "A multipurpose web application to study the Japanese language.",
      icons: [
        <DjangoIcon />, <ReactIcon />, <ReduxIcon />, <SQLIcon />, <AWSIcon />, <HerokuIcon />
      ],
      link: "https://www.ryouflashcards.com",
    },
    {
      name:"Tatoeba App",
      imgSrc: "https://opauloantonio.s3.us-east-2.amazonaws.com/tatoebaGraphic.png",
      description: "A simple mobile app for searching sentences on Tatoeba.",
      icons: [
        <ReactIcon />, <ReduxIcon />
      ],
      link: "https://play.google.com/store/apps/details?id=com.tatoebareactnative",
      github: "https://github.com/opauloantonio/tatoebaReactNative",
    },
    {
      name:"Save The Prehistory",
      imgSrc: "https://opauloantonio.s3.us-east-2.amazonaws.com/savetheprehistory.png",
      description: "My first real project, a dumb 2D platformer that no one can beat.",
      icons: [
        <UnityIcon dark={colorMode === "dark"} />, <CSharpIcon />
      ],
      link: "https://play.google.com/store/apps/details?id=com.soluno.savetheprehistory",
    },
  ];

  return(
    <Box id="projects">
      <Heading mt="10" mb="10">
        Projects
      </Heading>

      <SimpleGrid columns={[1, 2, null, null, 3]} gap={6}>
        {projects.map((p, pi) => (
          <Container border="1px" borderColor="gray.200" borderRadius="md" pt="5" pb="5" key={`project-${pi}`}>
            <Stack spacing={5}>
              <Image src={p.imgSrc} />
      
              <Heading size="md">{p.name}</Heading>
      
              <Text>
                {p.description}
              </Text>

              <Stack direction={["row"]} align="center">
                {p.icons.map((icon, iconIndex) => (
                  <span key={`project-${pi}-icon-${iconIndex}`} style={{width: 30, height: 30}}>
                    {icon}
                  </span>
                ))}
              </Stack>

              <Box mt="100">
                <Link href={p.link} target="_blank" rel="no-referrer no-opener">
                  <Button>
                    VISIT
                  </Button>
                </Link>

                {p.github &&
                  <Link ml="5" href={p.github} target="_blank" rel="no-referrer no-opener">
                    <Button>VIEW ON GITHUB</Button>
                  </Link>
                }
              </Box>
            </Stack>
          </Container>
        ))}
      </SimpleGrid>
    </Box>
  );
}
