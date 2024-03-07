// localStorage.js

import { fakeData } from "@fakers/index";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

// Assuming the global state shape
interface GlobalState {
  tasks: Task[];
}

// loadState.js or wherever you have defined loadState function

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    if (serializedState === null) {
      // If no state is found, return the fakeData as initial state
      return { boards: fakeData }; // Make sure this aligns with your store structure
    }
    return JSON.parse(serializedState);
  } catch (err) {
    // If errors occur, return the default state
    return { boards: fakeData }; // Default to fakeData if there's an error
  }
};

export const saveState = (state: Partial<GlobalState>) => {
  console.log("state", state);
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (err) {
    // Ignore write errors or handle them if necessary
    // You could log this in production scenario
  }
};
