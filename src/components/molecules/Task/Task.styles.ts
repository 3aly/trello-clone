import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    board: {
      minHeight: "100vh",
      padding: "20px",
    },
    column: {
      backgroundColor: theme.palette.primary.main,
      minWidth: "300px",
      padding: "1%",
      borderRadius: 15,
    },
    card: {
      margin: "6px",
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
    },
    cardContent: {
      padding: "8px !important",
      "&:last-child": {
        paddingBottom: "8px",
      },
    },
    title: {
      color: theme.palette.primary.contrastText,
    },
    pill: {
      color: theme.palette.primary.contrastText,
    },
    task: {
      marginTop: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
});
