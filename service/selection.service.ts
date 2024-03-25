import { Dispatch, SetStateAction } from "react";
import { InfoType } from "../types/const";

export const isSingleSelect = (items: InfoType): boolean => {
  return (
    items.category === "bread" ||
    items.category === "size" ||
    items.category === "sandwich"
  );
};

export const isMultiSelect = (items: InfoType): boolean => {
  return (
    items.category !== "bread" &&
    items.category !== "size" &&
    items.category !== "sandwich"
  );
};

export const toggleSelect = (
  items: InfoType,
  state: null | InfoType,
  setState: Dispatch<SetStateAction<InfoType | null>>
) => {
  if (state === items) {
    setState(null);
  } else {
    setState(items);
  }
};
