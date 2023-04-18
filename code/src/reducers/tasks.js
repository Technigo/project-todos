import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    addTask: (store, action) => {
      store.items.push(action.payload)
    }
  }
})