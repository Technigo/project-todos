// src/reducers/tasks.js
import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: 1,
        text: "Watch video on actions & reducers",
        added: Date.now() - 604800000,
        complete: true,
        completed: Date.now() - 362880000
      },
      {
        id: 2,
        text: "Follow redux codealong",
        added: Date.now() - 604800000,
        complete: true,
        completed: Date.now() - 241920000
      },
      {
        id: 3,
        text: "Fork weekly assignment",
        added: Date.now() - 604800000,
        complete: true,
        completed: Date.now() - 120960000
      },
      {
        id: 4,
        text: "Create a todo app",
        added: Date.now() - 604800000,
        complete: false,
        completed: 0
      }
    ]
  },
  reducers: {
    markComplete: (state, action) => {
      const foundTask = state.tasks.find(task => task.id === action.payload);

      if (foundTask) {
        foundTask.complete = !foundTask.complete;
        if (foundTask.complete === true) foundTask.completed = Date.now();
      }
    },
    addItem: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        complete: false,
        added: Date.now()
      });
    },
    clearCompleted: (state, action) => {
      state.tasks = state.tasks.filter(
        task => task.complete !== action.payload
      );
    }
  }
});
