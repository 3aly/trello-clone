import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { useStyles } from "./Task.styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTask } from "@redux/taskBoardsReducer";
import { useDispatch } from "react-redux";
import { EditTask } from "@modals/index";
import { useState } from "react";
import { StatusTypes, TaskProps } from "../../../types/props";

const Task = ({ task, index, onDragStart }: TaskProps) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

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
    status: StatusTypes;
  }) {
    dispatch(deleteTask({ status, index }));
  }
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const statusColors: Record<StatusTypes, string> = {
    "Not Started": "#cccccc",
    "In Progress": "#ffcc00",
    Finished: "#00cc66",
  };

  const pillColor = statusColors[task.status];
  return (
    <Card
      key={index}
      className={classes.card}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
    >
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{task.title}</Typography>

        <Typography variant="body2">{task.description}</Typography>
        <div className={classes.task}>
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
