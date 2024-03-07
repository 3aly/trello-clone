// store.js or wherever your store is configured

import { configureStore } from "@reduxjs/toolkit";
import taskBoardsReducer from "./taskBoardsReducer";
import themeReducer from "./themeReducer";
import { loadState, saveState } from "@utils/localStorage";

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    theme: themeReducer,

    boards: taskBoardsReducer,
  },
  preloadedState, // Use the loaded or default state
});

// Make sure to update the store when changes occur
store.subscribe(() => {
  saveState(store.getState().boards);
});
// store.subscribe(() => {
//   localStorage.setItem("tasks", JSON.stringify(store.getState()));
// });

export default store;
