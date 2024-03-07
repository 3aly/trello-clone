import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

// Create a custom theme
export const theme = createTheme({
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
  },
});
