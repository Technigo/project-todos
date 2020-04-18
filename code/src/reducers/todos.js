import { createSlice } from '@reduxjs/toolkit'

const todoItems = {
  items: [
    {
      text: 'Buy more striped t-shirts',
      completed: false
    }
  ]
}

export const todos = createSlice({
  name: 'todos',
  initialState: todoItems,
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
    }
  }
})