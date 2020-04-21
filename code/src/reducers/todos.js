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
      },
      {
        text: 'Walk the dog',
        complete: true,
        category: 'Home'
      },
      {
        text: 'Apply for jobs 🌸',
        complete: false,
        category: 'Work'
      }
    ]
  },
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    //Adding new todo 
    addTodo: (state, action) => {
      const { todoInfo } = action.payload
      state.list.todos.push(todoInfo)
      },

    //Removing existing todo
    removeItem: (state, action) => {
      const { todoIndex } = action.payload
      state.list.todos = state.list.todos.filter(
        (todo, index) => index !== todoIndex
      )
    },

    //Gets checked when done
    setDone: (state, action) => {
      const { todoIndex, complete } = action.payload
      state.list.todos[todoIndex].complete = complete
    },

    //Clear the list of to dos
    removeAll: (state, action) => {
      state.list.todos = []
    }
  }
})
