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
    title: {
      fontFamily: "epilogue",
      fontWeight: "600",
      fontSize: "30px",
      lineHeight: "38px",
      letterSpacing: "-0.03em",
      color: "Green.20",
    },
    label: {
      fontFamily: "epilogue",
      fontWeight: "600",
      letterSpacing: "-0.03em",
      color: "Gray.50",
      lineHeight: "14px",
      fontSize: "12px",
    },
    body: {
      fontFamily: "epilogue",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "-0.03em",
      color: "Grayscale.10",
    },
    display: {
      fontFamily: "epilogue",
      fontWeight: "800",
      fontSize: "68px",
      lineHeight: "68px",
      letterSpacing: "-0.03em",
      color: "Grayscale.10",
    },
  },
  fonts: {
    epilogue: `'Epilogue', cursive`,
  },
});
