import { createTheme } from "@mui/material/styles";
import { COLORS, DARK } from "./colors";

// Create a custom theme
export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // small devices
      sm: 600, // medium devices
      md: 900, // large devices
      lg: 1200, // extra large devices
      xl: 1536, // extra extra large devices
    },
  },
  palette: {
    primary: {
      ...COLORS,
    },
    secondary: {
      main: "#ffff",
    },
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // small devices
      sm: 600, // medium devices
      md: 900, // large devices
      lg: 1200, // extra large devices
      xl: 1536, // extra extra large devices
    },
  },
  palette: {
    primary: {
      ...DARK,
    },
    secondary: {
      main: "#000",
    },
  },
  // You can also customize other theme properties
});
