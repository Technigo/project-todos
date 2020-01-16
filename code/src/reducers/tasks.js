import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: [
      {
        id: 1,
        text: "Watch video on actions & reducers",
        complete: true
      },
      { id: 2, text: "Meditate for 30 minutes", isDone: true },
      { id: 3, text: "Finish reading the book", isDone: true },
      { id: 4, text: "Buy banana", isDone: false }
    ]
  },

  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload });
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleIsDone: (state, action) => {
      const finishedTask = state.items.find(item => item.id === action.payload);

      if (finishedTask) {
        finishedTask.isDone = !finishedTask.isDone;
      }
    }
  }
});
