import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import HomeScreen from "../components/home/Home";
import SplashScreen from "../components/splash/SplashScreen";
import { InfoType } from "../types/const";

export async function getStaticProps() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("API URL:", apiUrl);
  try {
    const res = await fetch(`${apiUrl}/api/menu`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }
    const data = await res.json();
    console.log("data", data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}

export default function HomePage({
  data,
}: {
  data: DEFAULT_SANDWICH_INFO_TYPE;
}) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, LOADING_TIME_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Sub Kcalculator - Create Your Custom Sandwich</title>
        <meta
          name="description"
          content="Use the Sub Kcalculator to mix and match different ingredients to create your custom sandwich, and calculate its nutritional information and calories."
        />
        <meta
          property="og:title"
          content="Sub Kcalculator - Customize Your Sandwich"
        />
        <meta
          property="og:description"
          content="Select from a variety of breads, cheeses, sauces, and veggies to make your own sandwich, and check its nutritional value and calories. Plan your healthy meal with Sub Kcalculator."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/assets/icons/favicon.svg" />
      </Head>
      <Box
        left={0}
        right={0}
        bottom={0}
        top={0}
        bg="Grayscale.10"
        display="flex"
        justifyContent="center"
      >
        <Box id="maxW box" bg="Grayscale.10" h="full" w="full" maxW={"516px"}>
          <TitleHeader />
          <Box>
            {!showSplashScreen ? (
              <HomeScreen sandwichInfo={data} />
            ) : (
              <SplashScreen />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export type DEFAULT_SANDWICH_INFO_TYPE = {
  bread: InfoType[];
  sandwich: InfoType[];
  veggies: InfoType[];
  size: InfoType[];
  cheese: InfoType[];
  extracheese: InfoType[];
  sauces: InfoType[];
  extras: InfoType[];
  [key: string]: InfoType[];
};

export const DEFAULT_SANDWICH_INFO: DEFAULT_SANDWICH_INFO_TYPE = {
  bread: [],
  sandwich: [],
  veggies: [],
  size: [],
  cheese: [],
  extracheese: [],
  sauces: [],
  extras: [],
};
const LOADING_TIME_MS = 1200;
