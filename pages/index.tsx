import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import HomeScreen from "../components/home/Home";
import SplashScreen from "../components/splash/SplashScreen";
import TitleHeader from "../components/TitleHeader";

const Home: NextPage = () => {
  const [api, setApi] = useState(false);
  setTimeout(() => {
    setApi(true);
  }, 2000);
  return (
    <>
      <Head>
        <title>Sub Kcalculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        left={0}
        right={0}
        bottom={0}
        top={0}
        bg="Grayscale.20"
        display="flex"
        justifyContent="center"
      >
        <Box id="maxW box" bg="white" h="full" w="100%" maxW={"516px"}>
          <TitleHeader />
          <Box>{api ? <HomeScreen /> : <SplashScreen />}</Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
