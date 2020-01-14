import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
  name: 'todoList',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {

      state.tasks.push({ todoText: action.payload, isCompleted: false })
    }

  }
})