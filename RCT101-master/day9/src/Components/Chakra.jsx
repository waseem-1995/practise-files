import React from "react";
import {
  AspectRatio,
  Box,
  Image,
  Badge,
  Icon,
  Text,
  Container
} from "@chakra-ui/react";
import AspectRatioFile from "./Layout/AspectRatioFile";
import BoxFile from "./Layout/BoxFile";
import CenterFile from "./Layout/CenterFile";
import ContFile from "./Layout/ContFile";
import FlexFile from "./Layout/FlexFile";


const Chakra = () => {
  return (
    <>
      {/* <Text fontSize={"9xl"}> Learn Chakra Ui</Text> */}
      {/* <AspectRatioFile /> */}
      {/* <hr /> */}
      {/* <BoxFile /> */}
      {/* <hr /> */}
      {/* <CenterFile /> */}
      {/* <hr /> */}
      {/* <ContFile /> */}
      {/* <hr /> */}
      <FlexFile />
    </>
  );
};

export default Chakra;
