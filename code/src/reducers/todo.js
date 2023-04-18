/* eslint-disable jsx-a11y/label-has-associated-control */
import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },

  reducers: {
    toggleTask: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1)
    },
    addTask: (store, action) => {
      store.items.push(action.payload)
    }
  }
})

export default todos;