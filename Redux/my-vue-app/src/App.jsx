import { Box, Center, Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { WarningIcon, } from "@chakra-ui/icons";

const App = () => {
  return (
    <>
      <Box>hello</Box>
      <Center bg="tomato" h="100px" w="100%" color="white">
        this is center
      </Center>
      <Container maxW="100%" p={2}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
        molestiae.
      </Container>
      <WarningIcon w={8} h={8} color="red.500" />

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </>
  );
};

export default App;

