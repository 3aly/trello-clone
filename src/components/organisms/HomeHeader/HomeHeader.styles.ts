import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      padding: "0.5%",
    },
    buttonsContainer: {
      backgroundColor: theme.palette.primary.main,
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      width: "14%",
    },
  };
});
