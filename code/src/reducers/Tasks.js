import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, todo: 'Wake up 👌', checkedTask: false},
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const { todo, createdAt } = action.payload
      state.items.push({ id: Date.now(), todo, createdAt})
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }, 
    toggleCheckedTask: (state, action) => {
      const checkedItem = state.items.find((item) => item.id === action.payload)

      if (checkedItem) {
        checkedItem.checkedTask = !checkedItem.checkedTask
      }
    },
    removeAll: (state) => {
      state.items = []
    }
  }

})