import { RoundedAddButton } from "@components/atoms";
import {
  Modal,
  TextField,
  Typography,
  useMediaQuery,
  Box,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./AddTask.styles";
import { useDispatch } from "react-redux";
import { addTask } from "@redux/taskBoardsReducer";

const AddTask = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    status: "",
  });

  const theme = useTheme();
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const handleClose = () => setOpen(false);
  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setTaskName(event.target.value);
  const handleDescriptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setTaskDescription(event.target.value);
  const handleStatusChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setTaskStatus(event.target.value);
  const handleSubmit = () => {
    let hasErrors = false;
    let newErrors = { name: "", description: "", status: "" };

    if (!taskName.trim()) {
      newErrors.name = "Name is required";
      hasErrors = true;
    }

    if (!taskDescription.trim()) {
      newErrors.description = "Description is required";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!taskStatus) {
      newErrors.status = "Status is required";
      hasErrors = true;
    }

    if (hasErrors) return;

    dispatch(addTask({ taskName, taskDescription, taskStatus }));

    handleClose();
  };

  const getModalStyle = () => {
    if (largeScreen) return { width: "50%" };
    if (mediumScreen) return { width: "70%" };
    return { width: "90%" };
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
    ...getModalStyle(),
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-task-modal"
      aria-describedby="add-task-modal-description"
    >
      <Box sx={style}>
        <Typography id="add-task-modal-title" variant="h6" component="h2">
          Add New Task
        </Typography>
        <TextField
          className={classes.inputField}
          autoFocus
          margin="dense"
          id="taskName"
          label="Task Name"
          type="text"
          fullWidth
          variant="outlined"
          value={taskName}
          onChange={handleNameChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          margin="dense"
          id="taskDescription"
          label="Task Description"
          multiline
          rows={4}
          className={classes.inputField}
          fullWidth
          variant="outlined"
          value={taskDescription}
          onChange={handleDescriptionChange}
          error={Boolean(errors.description)}
          helperText={errors.description}
        />
        <FormControl
          fullWidth
          margin="dense"
          error={Boolean(errors.status)}
          className={classes.inputField}
        >
          <InputLabel id="task-status-label">Current Status</InputLabel>
          <Select
            labelId="task-status-label"
            id="taskStatus"
            value={taskStatus}
            label="Current Status"
            onChange={handleStatusChange}
          >
            <MenuItem value={"Not Started"}>Not Started</MenuItem>
            <MenuItem value={"In Progress"}>In Progress</MenuItem>
            <MenuItem value={"Finished"}>Finished</MenuItem>
          </Select>
          {errors.status && <FormHelperText>{errors.status}</FormHelperText>}
        </FormControl>
        <RoundedAddButton onClick={handleSubmit} />
      </Box>
    </Modal>
  );
};

export default AddTask;
