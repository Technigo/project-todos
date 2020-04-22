import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      const { newItem } = action.payload
      state.items.push(newItem)
    },
    setComplete: (state, action) => {
      const { itemIndex, completed } = action.payload
      state.items[itemIndex].completed = completed
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload
      state.items.splice(itemIndex, 1)
    },
    removeAll: (state) => {
      state.items = []
    }
  }
})