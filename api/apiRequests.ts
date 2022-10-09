import axios from "axios";
import cheerio from "cheerio";
import { SANDWICH_URL, INGREDIENTS_URL } from "./APIURL";
import { v4 as uuidv4 } from "uuid";

export const WHEAT_BREAD_CALORIES = 192;
export const LETTUCE_CALORIES = 2.9;
export const TOMATO_CALORIES = 7.7;
export const CUCUMBER_CALORIES = 1.5;
export const BELL_PEPPERS_CALORIES = 1.4;
export const ONION_CALORIES = 2.8;
export const CHICKEN_BACON = 90.2;

const categories = ["bread", "vegetable", "cheese", "sauce"];

export const getSandwichInfoList = async (category: string) => {
  const SANDWICH_FULL_URL = `${SANDWICH_URL}`;
  const infoList = await axios(SANDWICH_FULL_URL).then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);

    return $(`.pd_list_wrapper li`, htmlData).map((index, element) => {
      if (element.attribs.class === "ITEM_SANDWICH.TOPPING") return;
      const title = $(element).children(".eng").text();
      const originalCalories = $(element).children(".cal").text().split(" ")[0];
      const calories = (
        Number(originalCalories) -
        WHEAT_BREAD_CALORIES -
        LETTUCE_CALORIES -
        TOMATO_CALORIES -
        CUCUMBER_CALORIES -
        BELL_PEPPERS_CALORIES -
        ONION_CALORIES
      )
        .toFixed(1)
        .toString();
      const id = uuidv4();
      return {
        id,
        title,
        calories,
        category,
      };
    });
  });
  return infoList.toArray();
};

export const getExtraToppingInfoList = async (category: string) => {
  const SANDWICH_FULL_URL = `${SANDWICH_URL}`;
  const infoList = await axios(SANDWICH_FULL_URL).then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);

    return $(`.pd_list_wrapper li`, htmlData).map((index, element) => {
      if (element.attribs.class !== "ITEM_SANDWICH.TOPPING") return;
      const title = $(element).children(".eng").text();
      const calories = $(element).children(".cal").text();
      const id = uuidv4();
      return {
        id,
        title,
        calories,
        category,
      };
    });
  });

  return infoList.toArray();
};

export const getInfoList = (category: string) => {
  const CATEGORY_FULL_URL = `${INGREDIENTS_URL}`;
  return getInfo(CATEGORY_FULL_URL, category);
};

export const getInfo = async (URL: string, category: string) => {
  const infoList = await axios(URL).then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);
    const query = category === "extra cheese" ? "cheese" : category;
    return $(`.pd_list_wrapper .${query}`, htmlData).map((index, element) => {
      const title = $(element).children(".eng").text();
      const calories = $(element).children(".cal").text();
      const id = uuidv4();
      return {
        id,
        title,
        calories,
        category,
      };
    });
  });

  return infoList.toArray();
};
