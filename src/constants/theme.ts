import { createTheme } from "@mui/material/styles";
import { COLORS, DARK } from "./colors";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      ...COLORS,
    },
    secondary: {
      main: "#ffff",
      light: "#ffff",
      contrastText: "#000",
    },
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      ...DARK,
    },
    secondary: {
      main: "#000",
      light: "#3a474e",
      contrastText: "#ffff",
    },
  },
});
