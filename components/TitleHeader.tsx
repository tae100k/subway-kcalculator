import { Box, Center } from "@chakra-ui/react";
import { HeaderLogo } from "../public/assets/icons";
const TitleHeader = () => {
  return (
    <Center h={14}>
      <Box>
        <HeaderLogo />
      </Box>
    </Center>
  );
};

export default TitleHeader;
