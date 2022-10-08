import { Box, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { LandingTitlePng } from "../../public/assets/icons";

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
              textStyle="display1"
              color="Green.10"
              key={text}
              lineHeight={"68px"}
            >
              {text}
            </Box>
          );
        })} */}
        <Image src={LandingTitlePng} />
      </Box>

      <Text textStyle="label1" color="Green.10">
        Team Zellybomb, 2022
      </Text>
    </Flex>
  );
};

export default SplashScreen;
