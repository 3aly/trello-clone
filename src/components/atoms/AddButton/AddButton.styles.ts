import { COLORS } from "@constants/colors";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,

      borderRadius: 20,
    },
  };
});
