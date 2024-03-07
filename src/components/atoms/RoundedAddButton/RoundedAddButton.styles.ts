import { COLORS } from "@constants/colors";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      marginTop: 20,
      // borderRadius: 20,
    },
  };
});
