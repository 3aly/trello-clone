import { RoundedAddButton } from "@components/atoms";
import {
  Button,
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
} from "@mui/material";
import React, { SetStateAction, useState } from "react";
import { useStyles } from "./EditTask.styles";
import { useDispatch } from "react-redux";
import { editTask } from "@redux/taskBoardsReducer";

const EditTask = ({
  open,
  setOpen,
  taskIndex,
  taskStatus,
}: {
  open: boolean;
  setOpen: Function;
  taskIndex: number;
  taskStatus: string;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [taskStatus, setTaskStatus] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });

  const theme = useTheme();
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg")); // screens larger than 1200px
  const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg")); // screens between 900px and 1200px
  const smallScreen = useMediaQuery(theme.breakpoints.down("md")); // screens smaller than 900px

  const handleClose = () => setOpen(false);
  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setTitle(event.target.value);
  const handleDescriptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setDescription(event.target.value);

  const handleSubmit = () => {
    // console.log(taskName, taskDescription, taskStatus);
    let hasErrors = false;
    let newErrors = { title: "", description: "" };

    // Validate title
    if (!title.trim()) {
      newErrors.title = "Title is required";
      hasErrors = true;
    }

    // Validate description
    if (!description.trim()) {
      newErrors.description = "Description is required";
      hasErrors = true;
    }

    setErrors(newErrors); // Update error messages

    if (hasErrors) return; // Stop the submission if there are errors

    // If there are no errors, proceed to dispatch the editTask action
    if (taskIndex !== null) {
      dispatch(
        editTask({
          taskStatus,
          taskIndex,
          updatedTask: {
            title,
            description,
          },
        })
      );
      setErrors({ title: "", description: "" }); // Reset errors
    }

    handleClose();
  };

  const getModalStyle = () => {
    if (largeScreen) return { width: "50%" };
    if (mediumScreen) return { width: "70%" };
    return { width: "90%" }; // Default for small screens
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
    ...getModalStyle(), // Apply the responsive width
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
          Edit Task
        </Typography>
        <TextField
          className={classes.inputField}
          autoFocus
          margin="dense"
          id="taskName"
          label="New Name"
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={handleNameChange}
          error={Boolean(errors.title)}
          helperText={errors.title}
        />
        <TextField
          className={classes.inputField}
          margin="dense"
          id="taskDescription"
          label="New Description"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
          helperText={errors.description}
          error={Boolean(errors.description)}
        />

        <RoundedAddButton onClick={handleSubmit} />
      </Box>
    </Modal>
  );
};

export default EditTask;
