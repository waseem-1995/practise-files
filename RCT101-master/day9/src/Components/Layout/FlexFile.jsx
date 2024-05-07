import React from "react";
import {
  Center,
  Flex,
  Square,
  Text,
  Box,
  Spacer,
  Heading,
  Button,
  border,
  VStack,
  ButtonGroup,
  color,
} from "@chakra-ui/react";

const FlexFile = () => {
  return (
    <>
      {/* <Text fontSize={"30px"}>Flex Box</Text>
      <Flex border={"1px solid black"}>
        <Center bg="teal" w="100px" h="100px">
          1
        </Center>
        <Square size="100px" bg="red.900" color="whiteAlpha.900">
          <Text>2</Text>
        </Square>
        <Box bg="tomato" flex={"1"}>
          <Text>3</Text>
        </Box>
      </Flex>
      <Text fontSize="2xl">Chakra Spacer</Text>
      <Flex border="1px solid red" maxW={"600px"} m="auto">
        <Box padding={"5"} bg="teal.300">
          1
        </Box>
        <Spacer />
        <Box padding={"5"} bg="teal.600">
          2
        </Box>
      </Flex>
      <Flex border={"1px solid red"} p="2">
        <Box
          display={"flex"}
          border="0px solid black"
          textAlign="center"
          alignItems="center"
          w="60%"
          justifyContent='space-between'
        >
          <Heading>Logo</Heading>
          <Text>Inspiration</Text>
          <Text>Find Work</Text>
          <Text>Hire Designers</Text>
          <Text>Learn Designs</Text>
        </Box>
        <Spacer />
        <Box display={"flex"}>
          <Button bg={"transparent"} _hover={{ textDecoration: "underline" }}>
            SignIn
          </Button>
          <Button bg='#ed64a6' _hover={{bg:'#ed4647'}}>SignUp</Button>
        </Box>
      </Flex>
       */}
      <Box border="1px solid black" w="300px" h="full" pos="fixed">
        <Box
          textAlign={"start"}
          p="2"
          fontSize={"3xl"}
          fontWeight="semibold"
          mb='30px'
        >
          Logo
        </Box>
        <VStack>
          <Box
            h="60px"
            w="90%"
            textAlign={"start"}
            pl="3"
            fontSize="20px"
            _hover={{bg:'blue.500' , color:'white'}}
          >
            Home
          </Box>
          <Box
            h="60px"
            w="90%"
            textAlign={"start"}
            pl="3"
            fontSize="20px"
            _hover={{bg:'blue.500' , color:'white'}}
          >
            Trending
          </Box>
          <Box
            h="60px"
            w="90%"
            textAlign={"start"}
            pl="3"
            fontSize="20px"
            _hover={{bg:'blue.500' , color:'white'}}
          >
            Explore
          </Box>
          <Box
            h="60px"
            w="90%"
            textAlign={"start"}
            pl="3"
            fontSize="20px"
            _hover={{bg:'blue.500' , color:'white'}}
          >
            Favourites
          </Box>
          <Box
            h="60px"
            
            w="90%"
            textAlign={"start"}
            pl="3"
            fontSize="20px"
            _hover={{bg:'blue.500' , color:'white'}}
          >
            Settings
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default FlexFile;
