import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    items: []

  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload, complete: false }
      )
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    toggleComplete: (state, action) => {
      const todoItem = state.items.find(item => item.id === action.payload)
      if (todoItem) {
        todoItem.complete = !todoItem.complete
      }
    }
  }
})