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

export const breadList: infoType[] = [
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
