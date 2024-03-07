import { COLORS } from "@constants/colors";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    button: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.contrastText,
    },
  };
});
