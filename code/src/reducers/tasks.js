import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'task',
  initialState: {
    user: "",
    taskArray: [
      { id: 1, text: 'Clean up', complete: true, display: true, date: new Date() },
      { id: 2, text: 'Get groceries', complete: true, display: false, date: new Date() },
      { id: 3, text: 'Work out', complete: true, display: false, date: new Date() },
      { id: 4, text: 'Save the world', complete: false, display: true, date: new Date() }
    ]
  },
  reducers: {
    changeUser: (state, action) => {
      state.user = action.payload
    },
    addTask: (state, action) => {
      state.taskArray.push({ id: Date.now(), ...action.payload, display: true, date: new Date() })
    },
    removeTask: (state, action) => {
      state.taskArray = state.taskArray.filter((item) => item.id !== action.payload);
    },
    removeComplete: (state, action) => {
      state.taskArray = state.taskArray.filter((item) => item.complete !== true);
    },
    doneTask: (state, action) => {
      const taskDone = state.taskArray.find(item => item.id === action.payload);
      taskDone.complete = !taskDone.complete;
    },
    removeAllTasks: (state) => {
      state.taskArray = []
    },
    filterTasks: (state, action) => {
      if (action.payload === "complete") {
        state.taskArray.forEach((item) => {
          item.complete ? item.display = true : item.display = false;
        });
      } else if (action.payload === "un-complete") {
        state.taskArray.forEach((item) => {
          !item.complete ? item.display = true : item.display = false;
        });
      } else {
        state.taskArray.forEach((item) => {
          item.display = true;
        });
      }
    }

  }
})
