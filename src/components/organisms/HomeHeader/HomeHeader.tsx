import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";

import { useStyles } from "./HomeHeader.styles";
import { IMAGES } from "@assets/images";
import { AddButton, SortButton, ThemeButton } from "@components/atoms";
import { AddTask } from "@modals/index";
import { useSelector } from "react-redux";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@redux/themeReducer";

function HomeHeader() {
  const { darkMode } = useSelector(
    (state: { theme: { darkMode: boolean } }) => state.theme
  );
  const dispatch = useDispatch();

  const { classes } = useStyles();
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const handelAddTask = () => {
    setOpenTaskModal(!openTaskModal);
  };

  return (
    <div className={classes.container}>
      <header>
        <img src={IMAGES.smallLogo} width={150} height={25} />
        {/* <Button title="add new task">dasds</Button> */}
      </header>
      <Box className={classes.buttonsContainer}>
        <ThemeButton onClick={() => dispatch(toggleTheme())} />
        <AddButton onClick={handelAddTask} />
      </Box>
      {openTaskModal && (
        <AddTask open={openTaskModal} setOpen={setOpenTaskModal} />
      )}
    </div>
  );
}

export default HomeHeader;
