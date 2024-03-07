import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: "white",
      color: theme.palette.primary.main,

      borderRadius: 20,
    },
  };
});
