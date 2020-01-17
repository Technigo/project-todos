import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
  name: 'todoList',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      console.log('current state', state)
      console.log('action', action)
      state.items.push({ id: Date.now(), name: action.payload })
    }
  }
})