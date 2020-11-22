import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, todo: 'Create a todo app', checkedTask: false },
      { id: 2, todo: 'test', checkedTask: true },
    ],
  },
  reducers: {
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }, 
    toggleCheckedTask: (state, action) => {
      const checkedItem = state.items.find((item) => item.id === action.payload)

      if (checkedItem) {
        checkedItem.checkedTask = !checkedItem.checkedTask
      }
    }
  }

})