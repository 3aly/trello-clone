import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    inputField: {
      //   width: "50%",
      input: {
        color: theme.palette.primary.light,

        // height: "10px",
        // lineHeight: "1px", // Add this line to maintain vertical centering
        // textAlign: "center", // Add this line to center the placeholder text
        // color: theme.palette.primary.light,
      },

      "& .MuiOutlinedInput-root": {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          color: "white",
          borderColor: theme.palette.primary.light, // Change to your desired hover color
        },
        "& fieldset": {
          borderWidth: 2,
          borderRadius: 8,
          //   borderStyle: "solid",
          borderColor: theme.palette.primary.light,
        },

        "&.Mui-focused fieldset": {
          borderWidth: 2,
          borderRadius: 8,
          borderStyle: "solid",
          color: "red",
          // borderColor: theme.palette.primary.light,
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
      // backgroundColor: "#0079bf",
      minHeight: "100vh",
      padding: "20px",
      // color: "#0079bf",
    },
    column: {
      backgroundColor: theme.palette.primary.main,
      minWidth: "300px",
      // margin: "0 10px",
      padding: "5%",

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
      color: "white",
    },
  };
});
