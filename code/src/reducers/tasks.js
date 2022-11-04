/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// src/reducers/tasks.js
import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', taskDone: false },
      { id: 2, text: 'Follow redux codealong', taskDone: false },
      { id: 3, text: 'Fork weekly assignment', taskDone: false },
      { id: 4, text: 'Create a todo app', taskDone: false }

    ]
  },
  reducers: {
    setAllItems: (store, action) => {
      store.items = action.payload
    },
    toggleItem: (store, action) => {
      console.log(store)
      console.log(action)
      // store.items.find((item) => item.id === action.payload).taskDone = !store.items.find((item) => item.id === action.payload).taskDone
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.taskDone = !item.taskDone
        }
      })
    },
    deleteItem: (store, action) => {
      console.log(action)

      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      })
      store.items = updatedItems
      console.log(updatedItems)
    },
    addItem: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
});
