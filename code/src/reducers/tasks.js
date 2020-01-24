// src/reducers/tasks.js
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: 1,
        text: "Watch video on actions & reducers",
        added: moment().subtract(4, "days"),
        complete: true,
        completed: moment().subtract(3, "days")
      },
      {
        id: 2,
        text: "Follow redux codealong",
        added: moment().subtract(4, "days"),
        complete: true,
        completed: moment().subtract(2, "days")
      },
      {
        id: 3,
        text: "Fork weekly assignment",
        added: moment().subtract(4, "days"),
        complete: true,
        completed: moment().subtract(1, "days")
      },
      {
        id: 4,
        text: "Create a todo app",
        added: moment().subtract(4, "days"),
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
