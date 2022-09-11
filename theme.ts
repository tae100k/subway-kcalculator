import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f9f9f9",
      },
    },
  },

  colors: {
    white: "#Ffffff",
    black: "#000000",
    Grayscale: {
      10: "#F9F9F9",
      20: "#CCCCCC",
      30: "#999999",
      40: "#666666",
      50: "#3E3E3E",
    },
    Green: {
      10: "#00A652",
      20: "#00984B",
    },
    Yellow: {
      10: "#FFFF6A",
    },
  },
  textStyles: {
    heading1: {
      fontFamily: "Epilogue",
      fontWeight: "600",
      fontSize: "30px",
      lineHeight: "38px",
      letterSpacing: "-0.03em",
      color: "Green.20",
    },
  },
  fonts: {
    londrina: `'Epilogue', cursive`,
    noto: `'Noto Sans', sans-serif`,
    roboto: `'Roboto', sans-serif`,
  },
});
