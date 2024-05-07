import React from "react";
import { Box, Image, Badge, Icon } from "@chakra-ui/react";

const BoxFile = () => {
  return (
    <div>
      <Box
        bg="tomato"
        w="50%"
        m=" 20px auto"
        p="10px"
        color="white"
        borderRadius="xl"
      >
        This is a Box also known as a Div
      </Box>
      <hr />
      <Box
        border={"1px solid black"}
        maxW="sm"
        borderRadius={"lg"}
        overflow="hidden"
        p="6"
      >
        <Image src="https://bit.ly/2Z4KKcF" />
        <Box border="0px solid red" p="2">
          <Box
            ml="-2"
            border={"0px solid gold"}
            display="flex"
            alignItems={"baseline"}
          >
            <Badge borderRadius={"full"} px="2" colorScheme={"teal"}>
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight={"semibold"}
              letterSpacing="wide"
              fontSize={"sm"}
              ml="2"
              textTransform={"uppercase"}
            >
              3 Beds &bull; 2 Baths
            </Box>
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          textAlign="start"
        >
          Modern Home in a City Center in the heart of historic Los Angeles
        </Box>
        <Box textAlign="start">
          $1900.00
          <Box as="span" color="gray.600" fontSize="sm">
            {" "}
            / wk
          </Box>
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Icon key={i} color={i < 4 ? "teal.500" : "gray.500"} />
            ))}
          <Box as="span" ml="2" color="Black" fontSize={"sm"}>
            34 Reviews
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BoxFile;
