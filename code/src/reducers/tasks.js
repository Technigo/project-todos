import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const tasks = createSlice({
  name: 'tasks',
  initialState: { items: [] },
  reducers: {
    addTask: (store, action) => {
      const newTask = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };

      store.items = [...store.items, newTask];
    },
    toggleTask: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTask = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTask;
        } else {
          return item;
        }
      });
      store.items = updatedItems;
    },
    deleteTask: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = decreasedItems;
    },
  },
});

export default tasks;
