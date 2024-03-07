import React, { useState } from "react";
import { Box } from "@mui/material";

import { useStyles } from "./HomeHeader.styles";
import { IMAGES } from "@assets/images";
import { AddButton, SortButton } from "@components/atoms";
import { AddTask } from "@modals/index";
import { useDispatch } from "react-redux";

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
      <Box className={classes.buttonsContainer}>
        <AddButton onClick={handelAddTask} />
      </Box>
      {openTaskModal && (
        <AddTask open={openTaskModal} setOpen={setOpenTaskModal} />
      )}
    </div>
  );
}

export default HomeHeader;
