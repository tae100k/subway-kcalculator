import axios from "axios";
import cheerio from "cheerio";
import { infoType } from "../types/sandwich";
import { BASE_URL, SANDWICH_URL, INGREDIENTS_URL } from "./APIURL";

export const getSandwichInfoList = () => {
  const SANDWICH_FULL_URL = `${BASE_URL}${SANDWICH_URL}`;
  axios(SANDWICH_FULL_URL)
    .then((res) => {
      const htmlData = res.data;
      const $ = cheerio.load(htmlData);
      const sandwichInfo: infoType[] = [];

      $(".pd_list_wrapper li", htmlData).each((index, element) => {
        const title = $(element).children(".eng").text();
        const calories = $(element).children(".cal").text();
        if (calories !== "") {
          sandwichInfo.push({
            title,
            calories,
          });
        }
      });
      console.log(sandwichInfo);
      return sandwichInfo;
    })
    .catch((err) => console.error(err));
};

// export const getIngredientCategoryList = () => {
//   const CATEGORY_FULL_URL = `${BASE_URL}${INGREDIENTS_URL}`;
//   axios(CATEGORY_FULL_URL)
//     .then((res) => {
//       const htmlData = res.data;
//       const $ = cheerio.load(htmlData);
//       const ingredientsCategoryList: string[] = [];

//       $(".pd_tab li", htmlData).each((index, element) => {
//         const categoryTitle = $(element).text();
//         if (categoryTitle !== "All")
//           ingredientsCategoryList.push(categoryTitle);
//       });
//       console.log(ingredientsCategoryList);
//       return ingredientsCategoryList;
//     })
//     .catch((err) => console.error(err));
// };

export const getBreadInfoList = () => {
  const CATEGORY_FULL_URL = `${BASE_URL}${INGREDIENTS_URL}`;
  axios(CATEGORY_FULL_URL)
    .then((res) => {
      const htmlData = res.data;
      const $ = cheerio.load(htmlData);
      const breadInfoList: infoType[] = [];

      // attribs: {class: 'active'}
      $(".pd_list_wrapper .bread", htmlData).each((index, element) => {
        const title = $(element).children(".eng").text();
        const calories = $(element).children(".cal").text();

        if (calories !== "") {
          breadInfoList.push({
            title,
            calories,
          });
        }
      });

      console.log(breadInfoList);
    })
    .catch((err) => console.error(err));
};

export const getVegetableInfoList = async () => {
  const CATEGORY_FULL_URL = `${BASE_URL}${INGREDIENTS_URL}`;

  const vegetable = await axios(CATEGORY_FULL_URL).then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);

    return $(".pd_list_wrapper .vegetable", htmlData).map((index, element) => {
      const title = $(element).children(".eng").text();
      const calories = $(element).children(".cal").text();
      return {
        title,
        calories,
      };
    });
  });

  return vegetable.toArray();
};

export const axiosFunc = () => {};
