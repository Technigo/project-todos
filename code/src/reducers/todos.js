import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
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

    deleteTodo: (store, action) => {
      store.items = store.items.filter((todo) => todo.id !== action.payload)
    },

    toggleTodo: (store, action) => {
      console.log(Date.now())
      console.log(Math.round(Date.now() / 86400000) * 86400000)

      store.items.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
      })
    },

    deleteAll: (store) => { store.items = [] },

    // need to be implemented in UI, or remove deleteAll to keep this one instead
    deleteAllCompleted: (store) => {
      store.items = store.items.filter((todo) => !todo.completed)
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



    // displayAll: (store) => {
    //   store.items
    // },

    // displayPending: (store) => {
    //   store.items.filter(todo => !todo.completed)
    // },

    // displayCompleted: (store) => {
    //   store.items.filter(todo => todo.completed)
    // }



  }
})

export default todos
