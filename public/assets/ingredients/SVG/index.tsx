import { handleBread } from "./bread";

export const handleSVGCategory = (category: string, title: string) => {
  switch (category) {
    case "Sandwich":
      return handleBread(title);
    case "Size":
      return handleBread(title);
    case "Bread":
      return handleBread(title);
    case "Veggies":
      return handleBread(title);
    case "Cheese":
      return handleBread(title);
    case "Sauces":
      return handleBread(title);
    case "Extras":
      return handleBread(title);
    case "Extra Cheese":
      return handleBread(title);
    default:
      return handleBread(title);
  }
};
