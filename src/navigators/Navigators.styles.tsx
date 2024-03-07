import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.secondary.main,
      minHeight: "100vh",
    },
  };
});
