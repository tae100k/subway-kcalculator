import FlatBread from "./Flat Bread.svg";
import HeartyItalian from "./Hearty Italian.svg";
import HoneyOat from "./Honey Oat.svg";
import ParmesanOregano from "./Parmesan Oregano.svg";
import Wheat from "./Wheat.svg";
import White from "./White.svg";
import Default from "../../../icons/favicon-xs.svg";

export const handleBread = (title: string) => {
  switch (title) {
    case "Flat Bread":
      return FlatBread;
    case "Hearty Italian":
      return HeartyItalian;
    case "Honey Oat":
      return HoneyOat;
    case "Parmesan Oregano":
      return ParmesanOregano;
    case "Wheat":
      return Wheat;
    case "White":
      return White;
    default:
      return Default;
  }
};
