import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted
        }
      })
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
      console.log(store.items)
    },
    deleteItem: (store, action) => {
      const newTaskArray = store.items.filter(
        (item) => item.id !== action.payload
      );
      store.items = newTaskArray;
    }
  }
});