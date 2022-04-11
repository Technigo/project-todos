import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      const { inputText, inputCategory, inputDeadline, timestamp } = action.payload

      state.items.push({
        id: uniqid(),
        text: inputText,
        category: inputCategory,
        deadline: inputDeadline,
        timestamp: timestamp,
        completed: false
      })
    },

    // need to understand better this part...
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    },

    // need to understand better this part...
    toggleTodo: (state, action) => {
      const updatedTodos = state.items.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
      state.items = updatedTodos
    },

    deleteAll: (state) => {
      state.items = []
      // state.items.length = 0
    },

    toggleAll: (state) => {
      if (state.items.filter(todo => !todo.completed).length > 0) {
        state.items = state.items.map((todo) => {
          return {
            ...todo,
            completed: true
          }
        })
      } else {
        state.items = state.items.map((todo) => {
          return {
            ...todo,
            completed: false
          }
        })
      }
    },
  }
})