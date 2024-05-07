import { Center, Circle, HStack , PhoneIcon, Square} from "@chakra-ui/react";
import React from "react";

const CenterFile = () => {
  return (
    <>
      <HStack>
        <Center bg="teal" color="white" h="40px" w="40px">
          1
        </Center>
        <Circle bg="tomato" color="white" h="40px" w="40px">
          2
        </Circle>
        <Square bg="rebeccapurple" color="white" h="40px" w="40px">
          3
        </Square>
        <Center bg="purple" color="white" h="40px" w="40px">
          4
        </Center>
      </HStack>
    </>
  );
};

export default CenterFile;
