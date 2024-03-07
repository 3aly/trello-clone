import React, { MouseEventHandler } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./AddButton.styles";
import { Button } from "@mui/material";

const AddButton = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { classes } = useStyles();

  return (
    <Button
      onClick={onClick}
      variant="contained"
      startIcon={<AddIcon />}
      className={classes.container}
    >
      Add Task
    </Button>
  );
};

export default AddButton;
