import { makeStyles } from "tss-react/mui";
import { COLORS } from "../../constants/colors";

export const useStyles = makeStyles()((theme) => {
  return {
    inputField: {
      //   width: "50%",

      input: {
        // height: "10px",
        color: "white",
        // lineHeight: "1px", // Add this line to maintain vertical centering

        // textAlign: "center", // Add this line to center the placeholder text
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
          borderColor: "white",
        },
      },
    },
  };
});
