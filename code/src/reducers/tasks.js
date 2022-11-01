import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [
      {
        id: 1,
        text: 'Clean the kitchen',
        isComplete: false
      }
    ]
  },
  reducers: {
    addTask: (store, action) => {
      console.log(action.payload);
    },
    toggleComplete: (store, action) => {
      // Expects a task id as action.payload

      store.tasks.forEach((task) => {
        if (task.id === action.payload) {
          task.isComplete = !task.isComplete;
        }
      });
    }
  }
});

export default tasks;
