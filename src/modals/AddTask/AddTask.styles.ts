import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
    },
    inputField: {
      input: {
        color: theme.palette.primary.dark,
      },
      color: theme.palette.primary.main,
      "& .MuiOutlinedInput-root": {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.primary.dark,
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
          borderColor: theme.palette.primary.main,
        },
      },
    },
  };
});
