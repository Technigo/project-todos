import { createSlice } from '@reduxjs/toolkit'

export const todoitem = createSlice({
  name: 'todoitem',
  initialState: {
    items: [
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    }
  },
})