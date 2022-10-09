import { Box, Center } from "@chakra-ui/react";
import { HeaderLogo } from "../public/assets/icons";
import { scrollToTop } from "../utils/scroll";
const TitleHeader = () => {
  return (
    <Center h={14} onClick={scrollToTop}>
      <Box>
        <HeaderLogo />
      </Box>
    </Center>
  );
};

export default TitleHeader;
