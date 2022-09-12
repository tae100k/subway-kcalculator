import axios from "axios";
import cheerio from "cheerio";
import { SANDWICH_URL, INGREDIENTS_URL } from "./APIURL";

const categories = ["bread", "vegetable", "cheese", "sauce"];

export const getSandwichInfoList = async () => {
  const SANDWICH_FULL_URL = `${SANDWICH_URL}`;
  const infoList = await axios(SANDWICH_FULL_URL).then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);

    return $(`.pd_list_wrapper li`, htmlData).map((index, element) => {
      if (element.attribs.class === "ITEM_SANDWICH.TOPPING") return;
      const title = $(element).children(".eng").text();
      const calories = $(element).children(".cal").text();
      return {
        title,
        calories,
      };
    });
  });
  return infoList.toArray();
};

export const getExtraToppingInfoList = async () => {
  const SANDWICH_FULL_URL = `${SANDWICH_URL}`;
  const infoList = await axios(SANDWICH_FULL_URL).then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);

    return $(`.pd_list_wrapper li`, htmlData).map((index, element) => {
      if (element.attribs.class !== "ITEM_SANDWICH.TOPPING") return;
      const title = $(element).children(".eng").text();
      const calories = $(element).children(".cal").text();
      return {
        title,
        calories,
      };
    });
  });
  return infoList.toArray();
};

export const getBreadInfoList = () => {
  const CATEGORY_FULL_URL = `${INGREDIENTS_URL}`;
  return getInfo(CATEGORY_FULL_URL, categories[0]);
};

export const getVegetableInfoList = async () => {
  const CATEGORY_FULL_URL = `${INGREDIENTS_URL}`;
  return getInfo(CATEGORY_FULL_URL, categories[1]);
};

export const getCheeseInfoList = async () => {
  const CATEGORY_FULL_URL = `${INGREDIENTS_URL}`;
  return getInfo(CATEGORY_FULL_URL, categories[2]);
};

export const getSauceInfoList = async () => {
  const CATEGORY_FULL_URL = `${INGREDIENTS_URL}`;
  return getInfo(CATEGORY_FULL_URL, categories[3]);
};

export const getInfo = async (URL: string, category: string) => {
  const infoList = await axios(URL).then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);

    return $(`.pd_list_wrapper .${category}`, htmlData).map(
      (index, element) => {
        const title = $(element).children(".eng").text();
        const calories = $(element).children(".cal").text();
        return {
          title,
          calories,
        };
      }
    );
  });

  return infoList.toArray();
};
