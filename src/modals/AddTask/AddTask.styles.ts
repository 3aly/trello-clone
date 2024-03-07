import { COLORS } from "@constants/colors";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      // borderRadius: "5%",
      // boxShadow: 24,
      // borderRadius: 5,
    },
    inputField: {
      //   width: "50%",

      input: {
        // height: "10px",
        // lineHeight: "1px", // Add this line to maintain vertical centering
        // textAlign: "center", // Add this line to center the placeholder text
        color: theme.palette.primary.dark,
      },
      color: theme.palette.primary.main,
      //   "@media (max-width: 900px)": {
      //     width: "70%",
      //     "& .MuiFormLabel-root": {
      //       fontSize: 10,
      //     },
      //   },
      //   "@media (max-width: 600px)": {
      //     width: "90%",
      //   },
      //   "@media (max-width: 400px)": {
      //     width: "100%",
      //   },
      "& .MuiOutlinedInput-root": {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.dark, // Change to your desired hover color
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
          borderColor: theme.palette.primary.main,
        },
      },
    },
  };
});
