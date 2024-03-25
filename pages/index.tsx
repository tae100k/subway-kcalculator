import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  getExtraToppingInfoList,
  getInfoList,
  getSandwichInfoList,
} from "../api/apiRequests";
import HomeScreen from "../components/home/Home";
import SplashScreen from "../components/splash/SplashScreen";
import TitleHeader from "../components/TitleHeader";
import {
  filterExtraSandwich,
  filterToppings,
} from "../service/exception.service";
import {
  GridCategoryTitleList,
  InfoType,
  SandwichCategory,
  SizeList,
} from "../types/const";
import { areAllValuesNonEmptyArray } from "../utils/array";

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

const Home: NextPage = () => {
  const [sandwichInfo, setSandwichInfo] = useState(DEFAULT_SANDWICH_INFO);

  const divideItemFunc = async (category: string) => {
    if (category === "sandwich") {
      const res = await getSandwichInfoList(category);
      setSandwichInfo((prev) => ({ ...prev, sandwich: res }));
    }
    if (category === "size") {
      const res = SizeList;
      setSandwichInfo((prev) => ({ ...prev, size: res }));
    }
    if (category === "bread") {
      const res = await getInfoList(category);
      setSandwichInfo((prev) => ({ ...prev, bread: res }));
    }
    if (category === "veggies") {
      const res = await getInfoList("vegetable");
      setSandwichInfo((prev) => ({ ...prev, veggies: res }));
    }
    if (category === "cheese") {
      const res = await getInfoList(category);
      setSandwichInfo((prev) => ({ ...prev, cheese: res }));
    }
    if (category === "extracheese") {
      const res = await getInfoList("cheese");
      const extraCheeseRes = res.map((item) => {
        return {
          ...item,
          category: SandwichCategory.ExtraCheese,
        };
      });
      setSandwichInfo((prev) => ({ ...prev, extracheese: extraCheeseRes }));
    }
    if (category === "sauces") {
      const res = await getInfoList("sauce");
      setSandwichInfo((prev) => ({ ...prev, sauces: res }));
    }
    if (category === "extras") {
      const toppingArray = await getExtraToppingInfoList("extras");
      const sandwichArray = await getSandwichInfoList("extras");
      const res = [
        ...filterToppings(toppingArray),
        ...filterExtraSandwich(sandwichArray),
      ];
      setSandwichInfo((prev) => ({ ...prev, extras: res }));
    }
  };

  const handleInfo = async () => {
    GridCategoryTitleList.map(async (title) => {
      await divideItemFunc(title);
    });
  };

  useEffect(() => {
    handleInfo();
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
        <Box id="maxW box" bg="Grayscale.10" h="full" w="100%" maxW={"516px"}>
          <TitleHeader />
          <Box>
            {areAllValuesNonEmptyArray(sandwichInfo) ? (
              <HomeScreen sandwichInfo={sandwichInfo} />
            ) : (
              <SplashScreen />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
