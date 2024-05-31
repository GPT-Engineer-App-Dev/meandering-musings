import { Box, Text, Heading, Link, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">About Me</Heading>
      <Text fontSize="md">
        Hello! I'm a passionate writer and blogger. This is my personal space where I share my thoughts, experiences, and stories. 
        I hope you find something interesting and engaging here.
      </Text>
      <Link href="/" color="teal.500" fontSize="lg">Back to Home</Link>
    </VStack>
  </Box>
);

export default About;