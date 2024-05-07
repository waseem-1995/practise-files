import { Container, VStack, Box } from "@chakra-ui/react";
import React from "react";

const ContFile = () => {
  return (
    <>
      Container
      <Container border={"1px solid red"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        suscipit quam ut quaerat nesciunt perspiciatis vitae delectus. Expedita
        reprehenderit aspernatur eaque doloremque cupiditate assumenda quas
        aliquid. Mollitia facere aliquam laudantium.
      </Container>
      <VStack>
        <Container maxW={"md"} bg="teal" m="20px">
          "md" Container
        </Container>
      </VStack>
      <Container border={"1px solid black"} maxW="2xl" bg="blue.600" centerContent>
        <Box padding='4' bg='blue.400' maxW='md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit
          explicabo sit voluptatem ab ad repudiandae laboriosam numquam rerum
          exercitationem, amet maiores iure, voluptatum culpa nemo, ullam
          recusandae sapiente at?
        </Box>
      </Container>
    </>
  );
};

export default ContFile;
