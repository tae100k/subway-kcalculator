import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import HomeScreen from "../components/home/Home";
import SplashScreen from "../components/splash/SplashScreen";
import { InfoType } from "../types/const";

export default function HomePage() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [data, setData] = useState<DEFAULT_SANDWICH_INFO_TYPE>(
    DEFAULT_SANDWICH_INFO
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setData(menu);
      setLoading(false);
    };

    fetchData();
  }, []);

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
              loading ? (
                <SplashScreen />
              ) : (
                <HomeScreen sandwichInfo={data} />
              )
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
const menu = {
  bread: [
    { title: "Honey Oat", calories: "235 kcal", category: "bread" },
    { title: "Hearty Italian", calories: "210 kcal", category: "bread" },
    { title: "Wheat", calories: "192 kcal", category: "bread" },
    { title: "Parmesan Oregano", calories: "213 kcal", category: "bread" },
    { title: "White", calories: "202 kcal", category: "bread" },
    { title: "Flat Bread", calories: "232 kcal", category: "bread" },
  ],
  sandwich: [
    { title: "Egg Slice", calories: "70.7", category: "sandwich" },
    { title: "Steak & Cheese", calories: "146.7", category: "sandwich" },
    {
      title: "Chicken Bacon Avocado",
      calories: "146.7",
      category: "sandwich",
    },
    { title: "Spicy Shrimp", calories: "36.7", category: "sandwich" },
    { title: "Shrimp", calories: "32.7", category: "sandwich" },
    { title: "Roasted Chicken", calories: "91.7", category: "sandwich" },
    {
      title: "Rotisserie Barbecue Chicken",
      calories: "118.7",
      category: "sandwich",
    },
    { title: "K-BBQ", calories: "163.7", category: "sandwich" },
    {
      title: "Pulled Pork Barbecue",
      calories: "118.7",
      category: "sandwich",
    },
    { title: "Subway Club™", calories: "90.7", category: "sandwich" },
    { title: "Chicken Teriyaki", calories: "105.7", category: "sandwich" },
    { title: "Spicy Italian", calories: "255.7", category: "sandwich" },
    { title: "Italian B.M.T.™", calories: "179.7", category: "sandwich" },
    { title: "B.L.T.", calories: "91.7", category: "sandwich" },
    { title: "Chicken Slice", calories: "56.7", category: "sandwich" },
    { title: "Tuna", calories: "107.7", category: "sandwich" },
    { title: "Ham", calories: "53.7", category: "sandwich" },
    { title: "Egg Mayo", calories: "207.7", category: "sandwich" },
    { title: "Veggie Delite", calories: "0.7", category: "sandwich" },
  ],
  veggies: [
    { title: "Lettuce", calories: "2.9 kcal", category: "vegetable" },
    { title: "Tomatoes", calories: "7.7 kcal", category: "vegetable" },
    { title: "Cucumbers", calories: "1.5 kcal", category: "vegetable" },
    { title: "Peppers", calories: "1.4 kcal", category: "vegetable" },
    { title: "Red Onions", calories: "2.8 kcal", category: "vegetable" },
    { title: "Pickles", calories: "0.4 kcal", category: "vegetable" },
    { title: "Olives", calories: "3.9 kcal", category: "vegetable" },
    { title: "Jalapenos", calories: "0.6 kcal", category: "vegetable" },
    { title: "Avocado", calories: "56.5 kcal", category: "vegetable" },
  ],
  size: [
    { title: "15cm", calories: "0", category: "size" },
    { title: "30cm", calories: "0", category: "size" },
  ],
  cheese: [
    { title: "American Cheese", calories: "35.3 kcal", category: "cheese" },
    { title: "Shredded Cheese", calories: "53.6 kcal", category: "cheese" },
    { title: "Mozzarella Cheese", calories: "43.8 kcal", category: "cheese" },
  ],
  extracheese: [
    {
      title: "American Cheese",
      calories: "35.3 kcal",
      category: "extracheese",
    },
    {
      title: "Shredded Cheese",
      calories: "53.6 kcal",
      category: "extracheese",
    },
    {
      title: "Mozzarella Cheese",
      calories: "43.8 kcal",
      category: "extracheese",
    },
  ],
  sauces: [
    { title: "Ranch", calories: "116 kcal", category: "sauce" },
    { title: "Sweet Onion", calories: "40.1 kcal", category: "sauce" },
    { title: "Mayonnaise", calories: "158 kcal", category: "sauce" },
    { title: "Sweet Chilli", calories: "40 kcal", category: "sauce" },
    { title: "Smoke BBQ", calories: "32.8 kcal", category: "sauce" },
    { title: "Hot Chilli", calories: "41.8 kcal", category: "sauce" },
    { title: "Honey Mustard", calories: "38.4 kcal", category: "sauce" },
    { title: "Southwest Chipotle", calories: "96.5 kcal", category: "sauce" },
    { title: "Horseradish", calories: "106 kcal", category: "sauce" },
    { title: "Yellow Mustard", calories: "15.3 kcal", category: "sauce" },
    {
      title: "Extra Virgin Olive Oil",
      calories: "29 kcal",
      category: "sauce",
    },
    {
      title: "Red Wine Vinaigrette",
      calories: "0.7 kcal",
      category: "sauce",
    },
    { title: "Salt", calories: "", category: "sauce" },
    { title: "Black Pepper", calories: "", category: "sauce" },
  ],
  extras: [
    { title: "Egg Mayo", calories: "205", category: "extras" },
    { title: "Omelet", calories: "120", category: "extras" },
    { title: "Avocado", calories: "63", category: "extras" },
    { title: "Bacon", calories: "85", category: "extras" },
    { title: "Pepperoni", calories: "81", category: "extras" },
    { title: "Egg Slice", calories: "70.7", category: "extras" },
    { title: "Steak & Cheese", calories: "146.7", category: "extras" },
    { title: "Chicken Bacon", calories: "90.2", category: "extras" },
    { title: "Spicy Shrimp", calories: "36.7", category: "extras" },
    { title: "Shrimp", calories: "32.7", category: "extras" },
    { title: "Roasted Chicken", calories: "91.7", category: "extras" },
    {
      title: "Rotisserie Barbecue Chicken",
      calories: "118.7",
      category: "extras",
    },
    { title: "K-BBQ", calories: "163.7", category: "extras" },
    { title: "Pulled Pork Barbecue", calories: "118.7", category: "extras" },
    { title: "Subway Club™", calories: "90.7", category: "extras" },
    { title: "Chicken Teriyaki", calories: "105.7", category: "extras" },
    { title: "Spicy Italian", calories: "255.7", category: "extras" },
    { title: "Italian B.M.T.™", calories: "179.7", category: "extras" },
    { title: "B.L.T.", calories: "91.7", category: "extras" },
    { title: "Chicken Slice", calories: "56.7", category: "extras" },
    { title: "Tuna", calories: "107.7", category: "extras" },
    { title: "Ham", calories: "53.7", category: "extras" },
  ],
};
