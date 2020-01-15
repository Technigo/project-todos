// src/reducers/tasks.js
import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, text: "Watch video on actions & reducers", complete: true },
      { id: 2, text: "Follow redux codealong", complete: true },
      { id: 3, text: "Fork weekly assignment", complete: true },
      { id: 4, text: "Create a todo app", complete: false }
    ]
  },
  reducers: {
    markComplete: (state, action) => {
      const foundTask = state.tasks.find(task => task.id === action.payload);

      if (foundTask) {
        foundTask.complete = !foundTask.complete;
      }
    },
    addItem: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        complete: false
      });
    },
    clearCompleted: (state, action) => {
      state.tasks = state.tasks.filter(
        task => task.complete !== action.payload
      );
    }
  }
});
