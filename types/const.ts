import { v4 as uuidv4 } from "uuid";

// 결국 많은 variation들은 category에 따라 결정된다.
// single/multi select
// 글자
// isSelected 등
// 그래서 infoType에는 category가 있는 게 맞았다.
// 일반화 : 도메일 로직에 종속될수록 코드가 구분할 수 있는 flag가 있어야 한다.
export interface InfoType {
  id: string;
  title: string;
  calories: string;
  category: string;
}

export const GridCategoryTitleList = [
  "Sandwich",
  "Size",
  "Bread",
  "Cheese",
  "Extra cheese",
  "Veggies",
  "Sauces",
  "Extras",
];

export const SizeList: InfoType[] = [
  {
    title: "15cm",
    calories: "0",
    id: uuidv4(),
    category: "size",
  },
  {
    title: "30cm",
    calories: "0",
    id: uuidv4(),
    category: "size",
  },
];

export const LETTUCE_CALORIES = "202";
export const TOMATO_CALORIES = "7.7";
export const CUCUMBER_CALORIES = "1.5";
export const BELL_PEPPER_CALORIES = "1.4";
export const ONION_CALORIES = "2.8";
export const FLAT_BREAD_CALORIES = "2.8";
export const DEFAULT_CALORIES =
  LETTUCE_CALORIES +
  TOMATO_CALORIES +
  CUCUMBER_CALORIES +
  BELL_PEPPER_CALORIES +
  ONION_CALORIES;
