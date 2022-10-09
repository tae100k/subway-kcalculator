import { infoType } from "../types/const";

export const isSingleSelect = (items: infoType): boolean => {
  return (
    items.category === "bread" ||
    items.category === "size" ||
    items.category === "sandwich"
  );
};

export const isMultiSelect = (items: infoType): boolean => {
  return (
    items.category !== "bread" &&
    items.category !== "size" &&
    items.category !== "sandwich"
  );
};
