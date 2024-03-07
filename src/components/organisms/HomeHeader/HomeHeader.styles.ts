import { COLORS } from "@constants/colors";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      padding: "0.4%",
      // paddingLeft: "0.5%",
      // paddingRight: "0.5%",
    },
  };
});
