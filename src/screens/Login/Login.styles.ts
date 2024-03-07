import { makeStyles } from "tss-react/mui";
import { COLORS } from "../../constants/colors";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "",
      padding: theme.spacing(3),
    },
    inputField: {
      input: {
        color: "white",
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
