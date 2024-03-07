import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import taskBoardsReducer from "./taskBoardsReducer";

const store = configureStore({
  reducer: {
    boards: taskBoardsReducer,
  },
});

export default store;
