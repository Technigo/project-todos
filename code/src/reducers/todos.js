import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
  todos: [
    {
      id: 1,
      text: 'Walk the dog',
      time: '1 hour ago',
      complete: true
    },
    {
      id: 2,
      text: 'Apply for jobs!!',
      time: '3 days ago',
      complete: false
    },
    {
      id: 3,
      text: 'Buy candy?',
      time: '36 min ago',
      complete: false
    }
  ]
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1,
        text: action.payload,
        time: moment().fromNow(),
        complete: false  
      })
    },

    removeOne: (state, action) => {
      state.todos = state.todos.find((todo) =>
      todo.id !== action.payload)
    },

    isDone: (state, action) => {
      const checkTodo = state.todos.find((todo) =>
      todo.id === action.payload)

      if (checkTodo) {
        checkTodo.complete = !checkTodo.complete
      }
    }

    // clearAll: (state, action) => {
    //   state.items = []
    // }
  }
})
