import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 })
    }, 
    removeItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 })
    }
  }
})