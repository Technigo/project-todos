import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: { items: [
    { id: 1, text: 'Watch video on actions & reducers', complete: false },
    { id: 2, text: 'Follow redux codealong', complete: false },
    { id: 3, text: 'Fork weekly assignment', complete: false },
    { id: 4, text: 'Create a todo app', complete: false }
  ] },
  reducers: {
    addItem: (state, action) => {
      const addItems = [...state.items,action.payload]
      state.items = addItems
    },
    removeItem: (state, action) => {
      const filterItems = state.items.filter((item) => item.id !== action.payload.id)
      state.items = filterItems
    }
  }
})