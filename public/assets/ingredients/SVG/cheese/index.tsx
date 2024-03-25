import AmericanCheese from "./American Cheese.svg";
import MozzarellaCheese from "./Mozzarella Cheese.svg";
import ShreddedCheese from "./Shredded Cheese.svg";
import Default from "../../../icons/favicon-xs.svg";

export const handleCheese = (title: string) => {
  switch (title) {
    case "American Cheese":
      return AmericanCheese;
    case "Mozzarella Cheese":
      return MozzarellaCheese;
    case "Shredded Cheese":
      return ShreddedCheese;
    default:
      return Default;
  }
};
