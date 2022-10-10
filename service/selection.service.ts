import { Dispatch, SetStateAction } from "react";
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

export const toggleSelect = (
  items: infoType,
  state: null | infoType,
  setState: Dispatch<SetStateAction<infoType | null>>
) => {
  if (state === items) {
    setState(null);
  } else {
    setState(items);
  }
};
