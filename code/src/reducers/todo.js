/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: '1',
        text: 'Click this task to mark as done',
        isDone: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    addItem: (store, action) => {
      store.items.push(action.payload)
    }
  }
})

