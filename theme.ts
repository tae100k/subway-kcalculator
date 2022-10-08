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
    label1: {
      fontFamily: "Epilogue",
      fontWeight: 600,
      letterSpacing: "-0.03em",
      color: "Gray.50",
    },
    body1: {
      fontFamily: "Epilogue",
      fontWeight: "700",
      fontSize: "18px",
      letterSpacing: "-0.03em",
      color: "Grayscale.10",
    },
    display1: {
      fontFamily: "Epilogue",
      fontWeight: "800",
      fontSize: "68px",
      letterSpacing: "-0.03em",
      color: "Grayscale.10",
    },
  },
  // TODO: font가 안되는 걸 수정해야 함
  fonts: {
    heading: `'Epilogue'`,
    body: `'Epilogue'`,
  },
});
