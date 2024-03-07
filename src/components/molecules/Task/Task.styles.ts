import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    board: {
      // backgroundColor: "#0079bf",
      minHeight: "100vh",
      padding: "20px",
      // color: "#0079bf",
    },
    column: {
      backgroundColor: theme.palette.primary.main,
      minWidth: "300px",
      // margin: "0 10px",
      padding: "1%",

      borderRadius: 15,
    },
    card: {
      margin: "6px",
    },
    cardContent: {
      padding: "8px !important", // Override default padding
      "&:last-child": {
        paddingBottom: "8px",
      },
    },
    title: {
      color: theme.palette.primary.contrastText,
    },
  };
});
