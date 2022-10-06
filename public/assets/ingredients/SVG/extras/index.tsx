import Avocado from "./Avocado.svg";
import Bacon from "./Bacon.svg";
import BLT from "./BLT.svg";
import BMT from "./BMT.svg";
import ChickenBacon from "./Chicken Bacon.svg";
import ChickenSlice from "./Chicken Slice.svg";
import ChickenTeriyaki from "./Chicken Teriyaki.svg";
import ClubChicken from "./Club(Chicken).svg";
import EggMayo from "./Egg Mayo.svg";
import Ham from "./Ham.svg";
import KBBQ from "./K-BBQ.svg";
import Mushroom from "./Mushroom.svg";
import Omelet from "./Omelet.svg";
import Pepperoni from "./Pepperoni.svg";
import PulledPork from "./Pulled Pork.svg";
import RoastedChicken from "./Roasted Chicken.svg";
import RotisserieChicken from "./Rotisserie Chicken.svg";
import Shrimp from "./Shrimp.svg";
import SpicyItalian from "./Spicy Italian.svg";
import SteakNCheese from "./SteakNCheese.svg";
import Tuna from "./Tuna.svg";

export const handleExtras = (title: string) => {
  switch (title) {
    case "Avocado":
      return Avocado;
    case "Bacon":
      return Bacon;
    case "BLT":
      return BLT;
    case "BMT":
      return BMT;
    case "Chicken Bacon":
      return ChickenBacon;
    case "Chicken Slice":
      return ChickenSlice;
    case "Chicken Teriyaki":
      return ChickenTeriyaki;
    case "Club(Chicken)":
      return ClubChicken;
    case "Egg Mayo":
      return EggMayo;
    case "Ham":
      return Ham;
    case "KBBQ":
      return KBBQ;
    case "Mushroom":
      return Mushroom;
    case "Omelet":
      return Omelet;
    case "Pepperoni":
      return Pepperoni;
    case "Pulled Pork":
      return PulledPork;
    case "Roasted Chicken":
      return RoastedChicken;
    case "Rotisserie Chicken":
      return RotisserieChicken;
    case "Shrimp":
      return Shrimp;
    case "Spicy Italian":
      return SpicyItalian;
    case "SteakNCheese":
      return SteakNCheese;
    case "Tuna":
      return Tuna;
    default:
      return Tuna;
  }
};
