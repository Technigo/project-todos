import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (store, action) => {
      store.items.push(action.payload)
    },
    toggleTodo: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },

    deleteTodo: (store, action) => {
      store.items.splice(action.payload, 1)
    }
  }
})

export default todos