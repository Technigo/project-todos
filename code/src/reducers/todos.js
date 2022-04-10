import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      // à enlever plus tard
      { id: 1, text: 'Faire mon projet', category: 'school', deadline: 1649607605000, timestamp: 1649607005000, completed: false },
      { id: 2, text: 'Lire', category: 'work', deadline: 1651330191000, timestamp: 1651330191000, completed: true },
      { id: 3, text: 'Manger', category: 'personal', deadline: 1651330191000, timestamp: 1651330191000, completed: true },
      { id: 4, text: 'Dormir', category: 'personal', deadline: 1651330191000, timestamp: 1651330191000, completed: false },
    ]
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
        // add timestamp here
        // add deadline here
        completed: false
      })
    },


    // need to understand better this part...
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload)
      console.log(state.items)

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