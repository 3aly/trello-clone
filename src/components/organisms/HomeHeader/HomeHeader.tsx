import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useStyles } from "./HomeHeader.styles";
import { IMAGES } from "@assets/images";
import { AddButton } from "@components/atoms";
import { AddTask } from "@modals/index";

function HomeHeader() {
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

      <AddButton onClick={handelAddTask} />

      {openTaskModal && (
        <AddTask open={openTaskModal} setOpen={setOpenTaskModal} />
      )}
    </div>
  );
}

export default HomeHeader;
