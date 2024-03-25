import { Dispatch, SetStateAction } from "react";
import { InfoType, SandwichCategory } from "../types/const";

export const isSingleSelect = (
  category: SandwichCategory | string
): boolean => {
  return (
    category === SandwichCategory.Bread ||
    category === SandwichCategory.Sandwich ||
    category === SandwichCategory.Size ||
    category === SandwichCategory.Cheese
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
