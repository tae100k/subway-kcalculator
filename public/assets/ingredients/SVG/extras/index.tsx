import Avocado from "./Avocado.svg";
import Bacon from "./Bacon.svg";
import BLT from "./BLT.svg";
import BMT from "./BMT.svg";
import ChickenSlice from "./Chicken Slice.svg";
import EggMayo from "./Egg Mayo_1.svg";
import Mushroom from "./Mushroom.svg";
import Omelet from "./Omelet.svg";
import Pepperoni from "./Pepperoni.svg";
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
    case "Chicken Slice":
      return ChickenSlice;
    case "Egg Mayo":
      return EggMayo;
    case "Mushroom":
      return Mushroom;
    case "Omelet":
      return Omelet;
    case "Pepperoni":
      return Pepperoni;
    case "Tuna":
      return Tuna;
    default:
      return Tuna;
  }
};
