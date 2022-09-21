import Cucumbers from "./Cucumbers.svg";
import Jalapenos from "./Jalapenos.svg";
import Lettuce from "./Lettuce.svg";
import Olives from "./Olives.svg";
import Peppers from "./Peppers.svg";
import Pickles from "./Pickles.svg";
import RedOnions from "./Red Onions.svg";
import Tomatoes from "./Tomatoes.svg";

export const handleVeggies = (title: string) => {
  switch (title) {
    case "Cucumbers":
      return Cucumbers;
    case "Jalapenos":
      return Jalapenos;
    case "Lettuce":
      return Lettuce;
    case "Olives":
      return Olives;
    case "Peppers":
      return Peppers;
    case "Pickles":
      return Pickles;
    case "Red Onions":
      return RedOnions;
    case "Tomatoes":
      return Tomatoes;
    default:
      return Tomatoes;
  }
};
