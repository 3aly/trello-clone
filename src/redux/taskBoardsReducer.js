import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "@fakers/index";
const taskBoardsSlice = createSlice({
  name: "taskBoards",
  initialState: fakeData,
  reducers: {
    // addBoard: (state, action) => {
    //   const isActive = state.length > 0 ? false : true;
    //   const payload = action.payload;
    //   const board = {
    //     name: payload.name,
    //     isActive,
    //     columns: [],
    //   };
    //   board.columns = payload.newColumns;
    //   state.push(board);
    // },
    // editBoard: (state, action) => {
    //   const payload = action.payload;
    //   const board = state.find((board) => board.isActive);
    //   board.name = payload.name;
    //   board.columns = payload.newColumns;
    // },
    // deleteBoard: (state) => {
    //   const board = state.find((board) => board.isActive);
    //   state.splice(state.indexOf(board), 1);
    // },
    // setBoardActive: (state, action) => {
    //   state.map((board, index) => {
    //     index === action.payload.index
    //       ? (board.isActive = true)
    //       : (board.isActive = false);
    //     return board;
    //   });
    // },
    addTask: (state, action) => {
      const { taskName, taskDescription, taskStatus } = action.payload;
      const newTask = {
        title: taskName,
        description: taskDescription,
        status: taskStatus,
      };

      // Find the correct status category in the state
      const statusCategory = state.find(
        (category) => category.name === taskStatus
      );

      // Push the new task into the corresponding tasks array
      if (statusCategory) {
        statusCategory.tasks.push(newTask);
      }
    },
    editTask: (state, action) => {
      const { taskStatus, taskIndex, updatedTask } = action.payload;
      // Find the correct status category in the state
      const statusCategory = state.find(
        (category) => category.name === taskStatus
      );

      // Check if the status category exists and the index is valid
      if (
        statusCategory &&
        taskIndex >= 0 &&
        taskIndex < statusCategory.tasks.length
      ) {
        // Update the task at the given index with the new details
        statusCategory.tasks[taskIndex] = {
          ...statusCategory.tasks[taskIndex], // Keep existing task details
          ...updatedTask, // Overwrite with updated task details
        };
      }
    },
    updateTaskStatus: (state, action) => {
      const { oldStatus, newStatus, taskIndex } = action.payload;
      // Find the task and its current status category
      const oldStatusCategory = state.find(
        (category) => category.name === oldStatus
      );

      const task = oldStatusCategory?.tasks.splice(taskIndex, 1)[0]; // Remove the task from its old status category

      if (task) {
        // Find the new status category and add the task there
        const newStatusCategory = state.find(
          (category) => category.name === newStatus
        );
        newStatusCategory?.tasks.push({ ...task, status: newStatus });
      }
    },

    deleteTask: (state, action) => {
      const { status, index } = action.payload;
      // console.log(" taskStatus, taskIndex", status, index);
      // Find the correct status category in the state
      const statusCategory = state.find((category) => category.name === status);

      // Remove the task from the corresponding tasks array if the category exists and the index is valid
      if (statusCategory && index >= 0 && index < statusCategory.tasks.length) {
        statusCategory.tasks.splice(index, 1);
      }
    },
  },
});
export const { addTask, deleteTask, updateTaskStatus, editTask } =
  taskBoardsSlice.actions;

export default taskBoardsSlice.reducer;
