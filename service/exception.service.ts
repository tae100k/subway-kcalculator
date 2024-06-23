import { InfoType } from "../types/const";

export const isDoubled = (addedItems: InfoType[]) => {
  return addedItems.some((items) => items.title === "30cm");
};
