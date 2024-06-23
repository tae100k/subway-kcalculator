import {
  AVOCADO_CALORIES,
  BACON_CALORIES,
  CHICKEN_BACON_CALORIES,
  EGG_MAYO_CALORIES,
  OMELET_CALORIES,
  PEPPERONI_CALORIES,
} from "../components/api/apiRequests";
import { InfoType } from "../types/const";

export const isDoubled = (addedItems: InfoType[]) => {
  return addedItems.some((items) => items.title === "30cm");
};

export const filterToppings = (items: InfoType[]) => {
  return items.filter(
    ({ title }) =>
      title !== "Meat" && title !== "Cheese" && title !== "Egg Slice"
  );
};

export const filterExtraSandwich = (items: InfoType[]): InfoType[] => {
  const filteredItems = filterSUBPICK(filterDuplicatedItems(items));
  return filteredItems.map((item) => {
    if (item.title === "Chicken Bacon Avocado") {
      return {
        ...item,
        title: "Chicken Bacon",
        calories: CHICKEN_BACON_CALORIES.toString(),
      };
    }
    return item;
  });
};

export const filterDuplicatedItems = (items: InfoType[]) => {
  return items.filter(
    ({ title }) =>
      title !== "Egg Mayo" &&
      title !== "Turkey" &&
      title !== "Turkey Bacon Avocado" &&
      title !== "Veggie Delite"
  );
};
export const filterSUBPICK = (items: InfoType[]) => {
  return items.filter(({ title }) => !title.toUpperCase().includes("SUBPICK"));
};

export const getEmptyExtrasCalories = (title: string): string => {
  switch (title) {
    case "Egg Mayo":
      return EGG_MAYO_CALORIES;
    case "Omelet":
      return OMELET_CALORIES;
    case "Avocado":
      return AVOCADO_CALORIES;
    case "Bacon":
      return BACON_CALORIES;
    case "Pepperoni":
      return PEPPERONI_CALORIES;
    default:
      console.log("exception", title);
      return "0";
  }
};
