import { RoundedAddButton } from "@components/atoms";
import {
  Modal,
  TextField,
  Typography,
  useMediaQuery,
  Box,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useStyles } from "./EditTask.styles";
import { useDispatch } from "react-redux";
import { editTask } from "@redux/taskBoardsReducer";
import { EditTaskProps } from "../../types/props";

const EditTask = ({ open, setOpen, taskIndex, taskStatus }: EditTaskProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });

  const theme = useTheme();
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const handleClose = () => setOpen(false);
  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setTitle(event.target.value);
  const handleDescriptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setDescription(event.target.value);

  const handleSubmit = () => {
    let hasErrors = false;
    let newErrors = { title: "", description: "" };

    if (!title.trim()) {
      newErrors.title = "Title is required";
      hasErrors = true;
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
      hasErrors = true;
    }

    setErrors(newErrors);

    if (hasErrors) return;

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
      setErrors({ title: "", description: "" });
    }

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
