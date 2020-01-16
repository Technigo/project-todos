import { createSlice } from "@reduxjs/toolkit";

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    items: []
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
