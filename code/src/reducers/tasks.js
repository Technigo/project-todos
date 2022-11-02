import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {
        id: '1',
        name: 'Create a hardcoded task array',
        isCompleted: false
      }, {
        id: '2',
        name: 'Implement feature to mark tasks as complete',
        isCompleted: false
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
    addTask: (store, action) => {
      store.items.unshift(action.payload)
      console.log(store.items)
    }
  }
});