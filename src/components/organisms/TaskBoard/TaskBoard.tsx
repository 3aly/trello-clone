import { Container, Grid, Paper, Typography } from "@mui/material";
import { useStyles } from "./TaskBoard.styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Task } from "@components/molecules";
import { updateTaskStatus } from "@redux/taskBoardsReducer";
import { useDispatch } from "react-redux";
const TaskBoard = ({
  title,
  tasks,
}: {
  title: string;
  tasks: Array<{
    title: string;
    description: string;
    status: "Not Started" | "In Progress" | "Finished";
  }>;
}) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.stopPropagation();
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ status: title, index })
    );
    console.log("handleOnDrop", e.dataTransfer.getData("text/plain"));
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskData = JSON.parse(e.dataTransfer.getData("text/plain"));
    dispatch(
      updateTaskStatus({
        oldStatus: taskData.status,
        newStatus: title,
        taskIndex: taskData.index,
      })
    );
  };

  const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className={classes.board}>
      <Paper
        className={classes.column}
        onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}
      >
        <Typography variant="h6" className={classes.title}>
          {title} ({tasks.length})
        </Typography>
        {tasks.length === 0 ? (
          <Container sx={{ padding: 10 }}>
            <Typography variant="h6" className={classes.title}>
              No Tasks to be Shown
            </Typography>
          </Container>
        ) : (
          tasks.map((task, index) => (
            <Task
              key={index}
              {...{ task, index }}
              onDragStart={handleDragStart}
            />
          ))
        )}
      </Paper>
    </div>
  );
};

export default TaskBoard;
