import { createSlice } from '@reduxjs/toolkit'
// import moment from 'moment'

const initialState = {
  list: {
    name: 'Todo',
    todos: [
      {
        text: 'Buy Candy!',
        complete: false,
        category: 'Other'
        // time: moment().format('D/M, HH:mm')
      },
      {
        text: 'Walk the dog',
        complete: true,
        category: 'Home'
        // time: moment().format('D/M, HH:mm')
      },
      {
        text: 'Apply for jobs 🌸',
        complete: false,
        category: 'Work'
        // time: moment().format('D/M, HH:mm')
      }
    ]
  },
  category: ['Other', 'Home', 'Study', 'Work'],
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { todoInfo } = action.payload
      state.list.todos.push(todoInfo)
      },
      // state.todos.push({
      //   id: state.todos.length + 1,
      //   text: action.payload,
      //   time: moment().fromNow(),
      //   complete: false  
      // })
    // },

    removeItem: (state, action) => {
      const { todoIndex } = action.payload
      state.list.todos = state.list.todos.filter(
        (todo, index) => index !== todoIndex
      )
      // state.todos = state.todos.find((todo) =>
      // todo.id !== action.payload)
    },

    setDone: (state, action) => {
      const { todoIndex, complete } = action.payload
      state.list.todos[todoIndex].complete = complete

      // const checkTodo = state.todos.find((todo) =>
      // todo.id === action.payload)

      // if (checkTodo) {
      //   checkTodo.complete = !checkTodo.complete
      // }
    },

    removeAll: (state, action) => {
      state.list.todos = []
    }
  }
})
