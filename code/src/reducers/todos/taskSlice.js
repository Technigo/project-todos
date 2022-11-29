/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksArray: []
  },
  reducers: {
    toggleItem: (store, action) => {
      store.tasksArray.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    removeTask: (store, action) => {
      store.tasksArray = [
        ...store.tasksArray.filter((task) => task.id !== action.payload)
      ];
    },
    addTask: (store, action) => {
      store.tasksArray = [action.payload, ...store.tasksArray];
    },
    removeAllTasks: (store, action) => {
      store.tasksArray = [
        ...store.tasksArray.filter((task) => task.id === action.payload)
      ];
      console.log('remove', store);
    },
    countTasksLeft: (store, action) => {
      store.tasksArray.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
        }
      });
    },
    setAllTasksDone: (store, action) => {
      console.log('setAllTasksDone', store);
      store.tasksArray.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = true;
        }
      });
    }
  }
});

export default taskSlice;
