import { createTheme, Theme } from "@mui/material/styles";

const primaryColor = {
  main: "#5ACCCC",
  white: "#FFFFFF",
  steelBlue: "#335C6E",
  yellow: "#FABD33",
};

const secondaryColor = {
  main: "#CFFAFA",
  light: "#F76434",
  teal: "#4AA088",
  darkYellow: "#FAAD00",
  darkTurquoise: "#53C2C2",
  pastelOrange: "#FFE6DC",
  darkTurquoise2: "#28B8B8",
};

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: primaryColor.main,
      contrastText: primaryColor.steelBlue,
    },
    secondary: {
      main: secondaryColor.main,
      contrastText: primaryColor.steelBlue,
    },
    text: {
      primary: primaryColor.steelBlue,
      secondary: primaryColor.yellow,
    },
    error: {
      main: secondaryColor.light,
    },
    warning: {
      main: secondaryColor.darkYellow,
    },
    info: {
      main: secondaryColor.teal,
    },
    success: {
      main: secondaryColor.darkTurquoise,
    },
    background: {
      default: primaryColor.white,
      paper: primaryColor.white,
    },
  },
  typography: {
    fontFamily: "Roboto",
    button: {
      textTransform: "none",
      fontFamily: "Roboto",
    },
  },
});
