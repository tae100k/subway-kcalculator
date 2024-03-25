import { handleBread } from "./bread";
import { handleCheese } from "./cheese";
import { handleExtras } from "./extras";
import { handleSandwich } from "./sandwich";
import { handleSauces } from "./sauces";
import { handleSize } from "./size";
import { handleVeggies } from "./veggies";

export const handleSVGCategory = (category: string, title: string) => {
  switch (category) {
    case "sandwich":
      return handleSandwich(title);
    case "size":
      return handleSize(title);
    case "bread":
      return handleBread(title);
    case "veggies":
      return handleVeggies(title);
    case "cheese":
      return handleCheese(title);
    case "sauces":
      return handleSauces(title);
    case "extras":
      return handleExtras(title);
    case "extracheese":
      return handleCheese(title);
    default:
      return handleBread(title);
  }
};
