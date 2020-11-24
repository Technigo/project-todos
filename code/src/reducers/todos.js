import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const todos = createSlice({
  name: "todos",
  initialState: {
    username: "Jonna",
    tasks: [
      { id: 1, text: "The first todo", complete: true },
      { id: 2, text: "The second todo", complete: true },
      { id: 3, text: "The third todo", complete: false },
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
  },
});
