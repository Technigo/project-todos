import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: { items: [
    { id: 0, text: 'Add a todo!'},
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