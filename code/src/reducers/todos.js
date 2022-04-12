import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    deletedItems: []
  },
  reducers: {
    addTodo: (store, action) => {
      const { inputText, inputCategory, inputDeadline, timestamp } = action.payload

      store.items.push({
        id: uniqid(),
        text: inputText,
        category: inputCategory,
        deadline: inputDeadline,
        timestamp: timestamp,
        completed: false
      })
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

    deleteAll: (store) => { 
      store.deletedItems = store.items
      store.items = [] 
    },

    // need to be implemented in UI, or remove deleteAll to keep this one instead
    deleteAllCompleted: (store) => {
      store.items = store.items.filter((todo) => !todo.completed)
    },

    undoDelete: (store) => {
      store.items = store.items.concat(store.deletedItems)
      store.deletedItems = []
    },



    // displayAll: (store) => {
    //   store.items
    // },

    displayPending: (store) => {
      store.items.filter(todo => !todo.completed)
    },

    displayCompleted: (store) => {
      store.items.filter(todo => todo.completed)
    }



  }
})

export default todos
