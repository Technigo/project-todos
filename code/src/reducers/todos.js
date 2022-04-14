import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    deletedItems: []
  },
  reducers: {
    addTodo: (store, action) => {
      store.items.push(action.payload)
    },

    toggleTodo: (store, action) => {
      store.items.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
      })
    },

    toggleAll: (store) => {
      if (store.items.find(todo => !todo.completed)) {
        store.items.forEach((todo) => {
          todo.completed = true
        })
      } else {
        store.items.forEach((todo) => {
          todo.completed = false
        })
      }
    },

    deleteTodo: (store, action) => {
      store.deletedItems = store.items.filter((todo) => todo.id === action.payload)
      store.items = store.items.filter((todo) => todo.id !== action.payload)
    },

    deleteAllCompleted: (store) => {
      store.items = store.items.filter((todo) => !todo.completed)
    },

    deleteAll: (store) => {
      store.deletedItems = store.items
      store.items = []
    },

    undoDelete: (store) => {
      store.items = store.items.concat(store.deletedItems)
      store.deletedItems = []
    },

    // disableUndoDelete: (store) => {
    //   store.deletedItems = []
    // }
  }
})

export default todos
