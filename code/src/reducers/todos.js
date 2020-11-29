import { createSlice } from "@reduxjs/toolkit";

export const todos = createSlice({
  name: "todos",
  initialState: {
    username: "",
    tasks: [
      { id: 1, text: "Get a dog", complete: false, time: 1606335505869 },
      { id: 2, text: "Drink beer", complete: false, time: 1606420536320 },
      { id: 3, text: "Work out", complete: true, time: Date.now() },
    ],
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
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
    completeAllTasks: (state) => {
      state.tasks = state.tasks.map((item) => {
        return { ...item, complete: true };
      });
    },
  },
});
