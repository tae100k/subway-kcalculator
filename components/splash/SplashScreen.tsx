import { Box, Flex, Text } from "@chakra-ui/react";
import { SplashText } from "../../public/assets/icons";

const SplashScreen = () => {
  // const splashScreenTitle = [
  //   "Calculate",
  //   "the",
  //   "Calories",
  //   "In your",
  //   "own",
  //   "Sub",
  // ];
  return (
    <Flex
      h="calc(100vh - (56px))"
      pt={"32px"}
      pb={"16px"}
      px={"16px"}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        {/* {splashScreenTitle.map((text) => {
          return (
            <Box
              textStyle="display"
              color="Green.10"
              key={text}
              lineHeight={"68px"}
            >
              {text}
            </Box>
          );
        })} */}
        <SplashText />
      </Box>

      <Text textStyle="label" color="Green.10">
        Team Zellybomb, 2022
      </Text>
    </Flex>
  );
};

export default SplashScreen;
