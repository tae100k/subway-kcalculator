import { Box, Flex, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { SplashText } from "../../public/assets/icons";

const SplashScreen = () => {
  return (
    <Flex
      css={css`
        @supports (height: 100dvh) {
          height: calc(100dvh - 56px);
        }
        @supports not (height: 100dvh) {
          height: calc(100vh - 56px);
        }
      `}
      pt="32px"
      pb="16px"
      px="16px"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <SplashText />
      </Box>

      <Text textStyle="label" color="Green.10">
        Team Zellybomb, 2022
      </Text>
    </Flex>
  );
};

export default SplashScreen;
