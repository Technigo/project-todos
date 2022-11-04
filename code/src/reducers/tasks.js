import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {
        id: 1,
        name: 'Do something',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Do something else',
        isCompleted: false
      },
      {
        id: 3,
        name: 'Do something more',
        isCompleted: false
      },
      {
        id: 4,
        name: 'Do something at all',
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