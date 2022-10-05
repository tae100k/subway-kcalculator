import BlackPepper from "./Black Pepper.svg";
import HoneyMustard from "./Honey Mustard.svg";
import Horseradish from "./Horseradish.svg";
import HotChilli from "./Hot Chilli.svg";
import ItalianDressing from "./Italian Dressing.svg";
import Mayonnaise from "./Mayonnaise.svg";
import OliveOil from "./Olive Oil.svg";
import Ranch from "./Ranch.svg";
import RedWineVinaigrette from "./Red Wine Vinaigrette_1.svg";
import Salt from "./Salt.svg";

import SmokeBBQ from "./Smoke BBQ.svg";
import SouthwestChipotle from "./Southwest Chipotle.svg";
import SweetChilli from "./Sweet Chilli.svg";
import SweetOnion from "./Sweet Onion.svg";
import YellowMustard from "./Yellow Mustard.svg";

export const handleSauces = (title: string) => {
  switch (title) {
    case "Black Pepper":
      return BlackPepper;
    case "Honey Mustard":
      return HoneyMustard;
    case "Horseradish":
      return Horseradish;
    case "Hot Chilli":
      return HotChilli;
    case "Italian Dressing":
      return ItalianDressing;
    case "Mayonnaise":
      return Mayonnaise;
    case "Olive Oil":
      return OliveOil;
    case "Ranch":
      return Ranch;
    case "Red Wine Vinaigrette":
      return RedWineVinaigrette;
    case "Salt":
      return Salt;
    case "Smoke BBQ":
      return SmokeBBQ;
    case "NEW Southwest Chipotle":
      return SouthwestChipotle;
    case "Sweet Chilli":
      return SweetChilli;
    case "Sweet Onion":
      return SweetOnion;
    case "Yellow Mustard":
      return YellowMustard;
    default:
      return Salt;
  }
};
