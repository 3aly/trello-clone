import { makeStyles } from "tss-react/mui";
import { COLORS } from "../../constants/colors";

export const useStyles = makeStyles()((theme) => {
  return {
    inputField: {
      input: {
        color: theme.palette.primary.contrastText,
      },
      color: theme.palette.primary.main,

      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderWidth: 2,
          borderRadius: 8,
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
