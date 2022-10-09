import { CHICKEN_BACON } from "../api/apiRequests";
import { infoType } from "../types/sandwich";

export const isDoubled = (addedItems: infoType[]) => {
  return addedItems.some((items) => items.title === "30cm");
};

export const filterToppings = (items: infoType[]) => {
  return items.filter(({ title }) => title !== "Meat" && title !== "Cheese");
};

export const filterExtraSandwich = (items: infoType[]): infoType[] => {
  const filteredItems = filterDuplicatedItems(items);
  return filteredItems.map((item) => {
    if (item.title === "Chicken Bacon Avocado") {
      return {
        ...item,
        title: "Chicken Bacon",
        calories: CHICKEN_BACON.toString(),
      };
    }
    return item;
  });
};

export const filterDuplicatedItems = (items: infoType[]) => {
  return items.filter(
    ({ title }) =>
      title !== "Egg Mayo" &&
      title !== "Turkey" &&
      title !== "Turkey Bacon Avocado" &&
      title !== "Veggie Delite"
  );
};
