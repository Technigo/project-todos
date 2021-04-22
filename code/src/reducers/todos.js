import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    toggleComplete: (store, action) => {
      // create a new array - immutability
      const updatedItems = store.items.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          }
        } else {
          return todo
        }
      })

      store.items = updatedItems

      /* // mutability 
      store.items.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.isComplete = !todo.isComplete
        }
      }) */
    },
    removeTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (todo) => todo.id !== action.payload
      )
      store.items = decreasedItems

      // mutability (add and change id -> index in TodoList.js )
      // store.items.splice(action.payload, 1)
    },
    addTodo: (store, action) => {
      // immutability
      store.items = [...store.items, action.payload]
    },
  },
})

export default todos
