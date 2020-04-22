import { createSlice } from '@reduxjs/toolkit'

export const todoitem = createSlice({
  name: 'todoitem',
  initialState: {
    items: [
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload, done: false})
    },
    completeStatus: (state, action) => {
      const selectedItem = state.items.find(item => item.id === action.payload.id)
     
      if (selectedItem) {
        selectedItem.done = !selectedItem.done
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    removeAll: (state, action) => {
      state.items = []
    }
  },
})