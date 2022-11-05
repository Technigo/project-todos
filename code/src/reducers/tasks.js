import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {
        id: 1,
        name: 'Demo task 1',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Demo task 2',
        isCompleted: false
      },
      {
        id: 3,
        name: 'Demo task 3',
        isCompleted: true
      }
    ]
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
      store.items.unshift(action.payload)
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