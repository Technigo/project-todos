/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// src/reducers/tasks.js
import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Study', taskDone: false },
      { id: 2, text: 'Clean bathroom', taskDone: false },
      { id: 3, text: 'Do the dishes', taskDone: false },
      { id: 4, text: 'Pay bills', taskDone: false }

    ]
  },
  reducers: {
    setAllItems: (store, action) => {
      store.items = action.payload
    },
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.taskDone = !item.taskDone
        }
      })
    },
    deleteItem: (store, action) => {
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      })
      store.items = updatedItems
    },
    addItem: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
});
