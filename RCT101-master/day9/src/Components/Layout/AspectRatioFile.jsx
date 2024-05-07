import React from "react";
import { AspectRatio, Box, Image, Badge, Icon } from "@chakra-ui/react";

const AspectRatioFile = () => {
  return (
    <div>
      <AspectRatio maxW="500px" ratio={4 / 3}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
      <AspectRatio ratio={4 / 3} w="400px">
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>
    </div>
  );
};

export default AspectRatioFile;
