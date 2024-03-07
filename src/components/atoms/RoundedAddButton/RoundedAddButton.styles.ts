import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      marginTop: 20,
    },
  };
});
