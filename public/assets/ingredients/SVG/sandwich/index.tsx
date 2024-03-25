import BLT from "./BLT.svg";
import ChickenBaconAvocado from "./Chicken Bacon Avocado.svg";
import ChickenSlice from "./Chicken Slice.svg";
import ChickenTeriyaki from "./Chicken Teriyaki.svg";
import EggMayo from "./Egg Mayo.svg";
import Ham from "./Ham.svg";
import ItalianBMT from "./Italian BMT.svg";
import KBBQs from "./K-BBQ.svg";
import Mushroom from "./Mushroom.svg";
import PulledPorkBarbecue from "./Pulled Pork Barbecue.svg";
import RoastedChicken from "./Roasted Chicken.svg";
import RotisserieBarbecueChicken from "./Rotisserie Barbecue Chicken.svg";
import Shrimp from "./Shrimp.svg";
import SpicyItalian from "./Spicy Italian.svg";
import SteakNCheese from "./SteakNCheese.svg";
import SubwayClub from "./Subway Club.svg";
import Tuna from "./Tuna.svg";
import VeggieDelite from "./Veggie Delite.svg";
import TurkeyBaconAvocado from "./Turkey Bacon Avocado.svg";
import Turkey from "./Turkey.svg";
import Favicon from "../../../icons/favicon-xs.svg";

export const handleSandwich = (title: string) => {
  switch (title) {
    case "B.L.T.":
      return BLT;
    case "Chicken Bacon Avocado":
      return ChickenBaconAvocado;
    case "Chicken Slice":
      return ChickenSlice;
    case "Chicken Teriyaki":
      return ChickenTeriyaki;
    case "Egg Mayo":
      return EggMayo;
    case "Ham":
      return Ham;
    case "Italian B.M.T.™":
      return ItalianBMT;
    case "K-BBQ":
      return KBBQs;
    case "Mushroom":
      return Mushroom;
    case "Pulled Pork Barbecue":
      return PulledPorkBarbecue;
    case "Roasted Chicken":
      return RoastedChicken;
    case "Rotisserie Barbecue Chicken":
      return RotisserieBarbecueChicken;
    case "Shrimp":
      return Shrimp;
    case "Spicy Italian":
      return SpicyItalian;
    case "Steak & Cheese":
      return SteakNCheese;
    case "Subway Club™":
      return SubwayClub;
    case "Tuna":
      return Tuna;
    case "Veggie Delite":
      return VeggieDelite;
    case "Turkey Bacon Avocado":
      return TurkeyBaconAvocado;
    case "Turkey":
      return Turkey;

    default:
      return Favicon;
  }
};
