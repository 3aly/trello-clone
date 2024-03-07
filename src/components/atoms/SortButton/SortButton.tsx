import React, { MouseEventHandler } from "react";
import { useStyles } from "./SortButton.styles";
import { IconButton } from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

const SortButton = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { classes } = useStyles();

  return (
    <IconButton
      onClick={onClick}
      aria-label="sort tasks"
      className={classes.container}
    >
      <SortByAlphaIcon />
    </IconButton>
  );
};

export default SortButton;
