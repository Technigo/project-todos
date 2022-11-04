import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      const { newTask } = action.payload;

      store.items.push({
        id: uniqid(),
        text: newTask,
        completed: false
      })
    },
    toggleItem: (store, action) => {
      store.items.forEach((items) => {
        if (items.id === action.payload) {
          items.completed = !items.completed;
        }
      });
    },
    deletedTask: (store, action) => {
      const updatedTasks = store.items.filter((item) => item.id !== action.payload);
      store.items = updatedTasks
    }
  }
})

