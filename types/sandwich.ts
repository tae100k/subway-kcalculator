import { v4 as uuidv4 } from "uuid";

export interface infoType {
  id: string;
  title: string;
  calories: string;
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

export const SizeList: infoType[] = [
  {
    title: "15cm",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "30cm",
    calories: "0",
    id: uuidv4(),
  },
];

export const ExtrasList: infoType[] = [
  {
    title: "Avocado",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Bacon",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Pepperoni",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Omelet",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Avocado",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Bacon",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Avocado",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Bacon",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Avocado",
    calories: "0",
    id: uuidv4(),
  },
  {
    title: "Bacon",
    calories: "0",
    id: uuidv4(),
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
