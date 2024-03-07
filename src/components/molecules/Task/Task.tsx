import {
  AppBar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useStyles } from "./Task.styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTask } from "@redux/taskBoardsReducer";
import { useDispatch } from "react-redux";
import { EditTask } from "@modals/index";
import { useState } from "react";
const Task = ({
  task,
  index,
  onDragStart,
}: {
  task: {
    title: string;
    description: string;
    status: "Not Started" | "In Progress" | "Finished";
  };
  index: number;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void; // Add this type
}) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  type TaskStatus = "Not Started" | "In Progress" | "Finished";

  function handleEdit(task: {
    title: string;
    description: string;
    status: string;
  }) {
    setOpenTaskModal(!openTaskModal);
  }

  function handleDelete({
    index,
    status,
  }: {
    index: number;
    status: TaskStatus;
  }) {
    // Logic to handle deleting a task
    // console.log("index, status", index, status);
    dispatch(deleteTask({ status, index }));

    // This might involve updating your component's state or making an API call to delete the task.
    // Ensure to confirm deletion before proceeding.
  }
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const statusColors: Record<TaskStatus, string> = {
    "Not Started": "#cccccc", // Grey
    "In Progress": "#ffcc00", // Yellow
    Finished: "#00cc66", // Green
  };

  const pillColor = statusColors[task.status];
  return (
    <Card
      key={index}
      className={classes.card}
      draggable
      onDragStart={(e) => onDragStart(e, index)} // Use the passed onDragStart prop here
    >
      <CardContent className={classes.cardContent}>
        {/* <Box> */}
        <Typography variant="h6">{task.title}</Typography>

        {/* </Box> */}
        <Typography variant="body2">{task.description}</Typography>
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Chip
            label={task.status}
            size="small"
            style={{
              backgroundColor: pillColor,
              color: "black",
            }}
          />
          <Box>
            <IconButton aria-label="edit" onClick={() => handleEdit(task)}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete({ status: task.status, index })}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </div>
      </CardContent>
      {openTaskModal && (
        <EditTask
          open={openTaskModal}
          setOpen={setOpenTaskModal}
          taskIndex={index}
          taskStatus={task.status}
        />
      )}
    </Card>
  );
};

export default Task;
