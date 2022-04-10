import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      // à enlever plus tard
      { id: 1, text: 'Faire mon projet', completed: false },
      { id: 2, text: 'Lire', completed: true },
      { id: 3, text: 'Manger', completed: true },
      { id: 4, text: 'Dormir', completed: false },
    ]
  },
  reducers: {
    addTodo: (state, action) => {

      const newTodo = {
        id: uniqid(),
        text: action.payload,
        completed: false
        // add timestamp here
        // maybe categories as well?
      }

      state.items = [...state.items, newTodo]
    },

    // need to understand more this part...
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
    },

    // need to understand more this part...
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