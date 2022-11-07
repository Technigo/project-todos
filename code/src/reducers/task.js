/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1,
        name: 'Watch video on actions & reducers',
        isDone: false },
      {
        id: 2,
        name: 'Follow redux codealong',
        isDone: false
      },
      {
        id: 3,
        name: 'Fork weekly assignment',
        isDone: false
      },
      {
        id: 4,
        name: 'Create a todo app',
        isDone: false
      }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },
    deleteItem: (store, action) => {
      console.log(action);
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      });
      store.items = updatedItems;
    },
    addItem: (store, action) => {
      console.log(action);
      store.items = [...store.items, action.payload];
    }
  }
});

export default tasks;