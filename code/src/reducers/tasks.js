import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'task',
  initialState: {
    taskArray: [
      { id: 1, text: 'clean up', complete: true, display: true },
      { id: 2, text: 'get groceries', complete: true, display: true },
      { id: 3, text: 'work out', complete: true, display: true },
      { id: 4, text: 'save the world', complete: false, display: true }
    ]
  },
  reducers: {
    addTask: (state, action) => {
      state.taskArray.push({ id: Date.now(), ...action.payload, display: true, date: new Date() })
    },
    removeTask: (state, action) => {
      state.taskArray = state.taskArray.filter((item) => item.id !== action.payload);
    },
    doneTask: (state, action) => {
      const taskDone = state.taskArray.find(item => item.id === action.payload);
      taskDone.complete = !taskDone.complete;
    },
    removeAllTasks: (state) => {
      state.taskArray = []
    },
    hideTasks: (state, action) => {
      if (action.payload === "complete") {
        state.taskArray.forEach((item) => {
          if (item.complete) item.display = true;
          else item.display = false;
        });
      } else if (action.payload === "un-complete") {
        state.taskArray.forEach((item) => {
          if (!item.complete) item.display = true;
          else item.display = false;
        });
      } else {
        state.taskArray.forEach((item) => {
          item.display = true;
        });
      }
    }

  }
})

// filter on complete, not complete, show all, date
