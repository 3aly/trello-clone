import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import { useStyles } from "./TaskBoard.styles";

import { Task } from "@components/molecules";
import { toggleSortTasks, updateTaskStatus } from "@redux/taskBoardsReducer";
import { useDispatch } from "react-redux";
import { SortButton } from "@components/atoms";
import { useState } from "react";
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

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSortTasks = () => {
    dispatch(toggleSortTasks({ status: title })); // Dispatch the sorting action
  };
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.stopPropagation();
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ status: title, index })
    );
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
        <Box className={classes.buttonsContainer}>
          <Typography variant="h6" className={classes.title}>
            {title} ({searchQuery ? filteredTasks.length : tasks.length})
          </Typography>
          <TextField
            size="small"
            label="Search Tasks"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={classes.inputField} // Add CSS if needed
          />
          <SortButton onClick={handleSortTasks} />
        </Box>

        {tasks.length === 0 ? (
          <Container sx={{ padding: 10 }}>
            <Typography variant="h6" className={classes.title}>
              No Tasks to be Shown
            </Typography>
          </Container>
        ) : searchQuery ? (
          filteredTasks.length === 0 ? (
            <Container sx={{ padding: 10 }}>
              <Typography variant="h6" className={classes.title}>
                No Tasks Found
              </Typography>
            </Container>
          ) : (
            filteredTasks.map((task, index) => (
              <Task
                key={index}
                {...{ task, index }}
                onDragStart={handleDragStart}
              />
            ))
          )
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
