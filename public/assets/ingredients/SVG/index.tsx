import { handleBread } from "./bread";
import { handleCheese } from "./cheese";
import { handleExtras } from "./extras";
import { handleSandwich } from "./sandwich";
import { handleSauces } from "./sauces";
import { handleSize } from "./size";
import { handleVeggies } from "./veggies";

export const handleSVGCategory = (category: string, title: string) => {
  switch (category) {
    case "Sandwich":
      return handleSandwich(title);
    case "Size":
      return handleSize(title);
    case "Bread":
      return handleBread(title);
    case "Veggies":
      return handleVeggies(title);
    case "Cheese":
      return handleCheese(title);
    case "Sauces":
      return handleSauces(title);
    case "Extras":
      return handleExtras(title);
    case "Extra cheese":
      return handleCheese(title);
    default:
      return handleBread(title);
  }
};
