import fifteen from "./15.svg";
import thirty from "./30.svg";

export const handleSize = (title: string) => {
  switch (title) {
    case "15cm":
      return fifteen;
    case "30cm":
      return thirty;

    default:
      console.log(title);
      return thirty;
  }
};
