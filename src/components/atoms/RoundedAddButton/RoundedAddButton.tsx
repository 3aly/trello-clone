import React, { MouseEventHandler } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./RoundedAddButton.styles";
import { Button } from "@mui/material";

const RoundedAddButton = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { classes } = useStyles();

  return (
    <Fab
      onClick={onClick}
      color="primary"
      aria-label="add"
      className={classes.container}
    >
      <AddIcon />
    </Fab>
  );
};

export default RoundedAddButton;
