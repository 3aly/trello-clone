import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    inputField: {
      input: {
        color: theme.palette.primary.light,
      },

      "& .MuiOutlinedInput-root": {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          color: "white",
          borderColor: theme.palette.primary.light,
        },
        "& fieldset": {
          borderWidth: 2,
          borderRadius: 8,
          borderColor: theme.palette.primary.light,
        },

        "&.Mui-focused fieldset": {
          borderWidth: 2,
          borderRadius: 8,
          borderStyle: "solid",
          color: "red",
        },
      },
    },
    buttonsContainer: {
      backgroundColor: theme.palette.primary.main,
      justifyContent: "space-between",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      // width: "14%",
      margin: "0.5%",
      // paddingLeft: "0.5%",
      // paddingRight: "0.5%",
    },
    board: {
      width: "30%",
      padding: "20px",
      flex: 0.3,
    },
    column: {
      backgroundColor: theme.palette.primary.main,
      minWidth: "300px",
      padding: "5%",

      borderRadius: 15,
    },
    card: {
      margin: "6px",
    },
    cardContent: {
      padding: "8px !important",
      "&:last-child": {
        paddingBottom: "8px",
      },
    },
    title: {
      color: "white",
    },
  };
});
