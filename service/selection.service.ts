import { SandwichCategory } from "../types/const";

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
