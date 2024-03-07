import { MouseEventHandler } from "react";
import { useStyles } from "./ThemeButton.styles";
import { IconButton } from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { useSelector } from "react-redux";

const ThemeButton = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const { classes } = useStyles();
  const { darkMode } = useSelector(
    (state: { theme: { darkMode: boolean } }) => state.theme
  );
  return (
    <IconButton className={classes.button} size="large" onClick={onClick}>
      {darkMode ? (
        <>
          <WbSunnyOutlinedIcon />
        </>
      ) : (
        <>
          <BedtimeOutlinedIcon />
        </>
      )}
    </IconButton>
  );
};

export default ThemeButton;
