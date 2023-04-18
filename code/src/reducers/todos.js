import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({

  // Example tasks shown in the beginning, resets when page is reloaded
  name: 'tasks',
  initialState: {
    items: [
      { id: '1',
        text: 'text',
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