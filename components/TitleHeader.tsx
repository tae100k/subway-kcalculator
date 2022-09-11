import { Box, Center } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { HeaderLogo } from "../public/assets/icons";
const TitleHeader = () => {
  return (
    <Center h={14}>
      <Box>
        <Image src={HeaderLogo} width={120} height={12} alt="subway logo" />
      </Box>
    </Center>
  );
};

export default TitleHeader;
