import { infoType } from "../types/sandwich";

export const calcSize = () => {};

export const isDoubled = (addedItems: infoType[]) => {
  return addedItems.some((items) => items.title === "30cm");
};
