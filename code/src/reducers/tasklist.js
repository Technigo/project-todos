import { createSlice } from '@reduxjs/toolkit'

export const tasklist = createSlice({
  name: 'tasklist',
  initialState: {
    tasks: [
        { id:1, text: 'What do you want to do today?', complete: true },
        { id:2, text: 'I am the next task on the list', complete: false }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload,
        complete: false
      })
    },

    toggleCheck: (state, action) => {
      const checkTodo = state.tasks.find((todo) => todo.id === action.payload)

      if(checkTodo) {
        checkTodo.complete = !checkTodo.complete
      }
    },

    removeTodo: (state, action) => {
      state.tasks = state.tasks.filter((todo) => todo.id !== action.payload)
    },

    removeAll: (state, action) => {
      state.tasks =[]
    }

  }
})