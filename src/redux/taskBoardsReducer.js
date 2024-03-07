import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "@fakers/index";
const taskBoardsSlice = createSlice({
  name: "taskBoards",
  initialState: fakeData,
  reducers: {
    addTask: (state, action) => {
      const { taskName, taskDescription, taskStatus } = action.payload;
      const newTask = {
        title: taskName,
        description: taskDescription,
        status: taskStatus,
      };

      const statusCategory = state.find(
        (category) => category.name === taskStatus
      );

      if (statusCategory) {
        statusCategory.tasks.push(newTask);
      }
    },
    editTask: (state, action) => {
      const { taskStatus, taskIndex, updatedTask } = action.payload;
      const statusCategory = state.find(
        (category) => category.name === taskStatus
      );

      if (
        statusCategory &&
        taskIndex >= 0 &&
        taskIndex < statusCategory.tasks.length
      ) {
        statusCategory.tasks[taskIndex] = {
          ...statusCategory.tasks[taskIndex],
          ...updatedTask,
        };
      }
    },
    updateTaskStatus: (state, action) => {
      const { oldStatus, newStatus, taskIndex } = action.payload;
      const oldStatusCategory = state.find(
        (category) => category.name === oldStatus
      );

      const task = oldStatusCategory?.tasks.splice(taskIndex, 1)[0];
      if (task) {
        const newStatusCategory = state.find(
          (category) => category.name === newStatus
        );
        newStatusCategory?.tasks.push({ ...task, status: newStatus });
      }
    },

    deleteTask: (state, action) => {
      const { status, index } = action.payload;
      const statusCategory = state.find((category) => category.name === status);

      if (statusCategory && index >= 0 && index < statusCategory.tasks.length) {
        statusCategory.tasks.splice(index, 1);
      }
    },
    toggleSortTasks: (state, action) => {
      const { status } = action.payload;
      const statusCategory = state.find((category) => category.name === status);

      if (statusCategory) {
        if (statusCategory.sortOrder === "asc") {
          statusCategory.tasks.sort((a, b) => b.title.localeCompare(a.title));
          statusCategory.sortOrder = "desc";
        } else {
          statusCategory.tasks.sort((a, b) => a.title.localeCompare(b.title));
          statusCategory.sortOrder = "asc";
        }
      }
    },
  },
});
export const {
  addTask,
  deleteTask,
  updateTaskStatus,
  editTask,
  toggleSortTasks,
} = taskBoardsSlice.actions;

export default taskBoardsSlice.reducer;
