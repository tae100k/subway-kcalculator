import { infoType } from "../types/sandwich";

export const isDoubled = (addedItems: infoType[]) => {
  return addedItems.some((items) => items.title === "30cm");
};

export const filterToppings = (items: infoType[]) => {
  return items.filter(({ title }) => title !== "Meat" && title !== "Cheese");
};
