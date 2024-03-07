import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(3),
    },
    button: {
      borderWidth: 2,
      borderRadius: 8,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.contrastText,

      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    socialButton: {
      borderWidth: 2,
      borderRadius: 8,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
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
