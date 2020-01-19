import { createSlice } from "@reduxjs/toolkit"

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    items: [],
    completedItems: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.unshift({ id: Date.now(), name: action.payload })
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.completedItems = state.completedItems.filter(
        item => item.id !== action.payload
      )
    },
    completeTodo: (state, action) => {
      const todoItem = state.items.find(item => item.id === action.payload)
      state.items = state.items.filter(item => item.id !== action.payload)
      state.completedItems.unshift(todoItem)
    },
    uncompleteTodo: (state, action) => {
      const todoItem = state.completedItems.find(
        item => item.id === action.payload
      )
      state.completedItems = state.completedItems.filter(
        item => item.id !== action.payload
      )
      state.items.push(todoItem)
    }
  }
})
