import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const todos = createSlice({
  name: "todos",
  initialState: {
    username: "Jonna",
    tasks: [
      { id: 1, text: "Get a dog", complete: false },
      { id: 2, text: "Drink beer", complete: false },
      { id: 3, text: "Work out", complete: true },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: uuid(), ...action.payload });
    },
    doneTask: (state, action) => {
      const taskDone = state.tasks.find((item) => item.id === action.payload);
      taskDone.complete = !taskDone.complete;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
  },
});
