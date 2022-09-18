import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

const SplashScreen = () => {
  const splashScreenTitle = [
    "Calculate",
    "the",
    "Calories",
    "In your",
    "own",
    "Sub",
  ];
  return (
    <Flex
      h="100%"
      pt={"32px"}
      pb={"16px"}
      px={"16px"}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        {splashScreenTitle.map((text) => {
          return (
            <Box
              textStyle="display1"
              color="Green.10"
              key={text}
              lineHeight={"68px"}
            >
              {text}
            </Box>
          );
        })}
      </Box>

      <Text textStyle="label1" color="Green.10">
        Team Zellybomb, 2022
      </Text>
    </Flex>
  );
};

export default SplashScreen;
