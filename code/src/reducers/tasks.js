import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({ name: 'tasks',
  initialState: [
    { id: 1, text: 'Plugga', complete: true },
    { id: 2, text: 'Gamea', complete: false },
    { id: 3, text: 'Kodea', complete: true },
    { id: 4, text: 'Chilla', complete: true }
  ],
  reducers: {
    addTask(state, action) {
      console.log(action.payload)
      state.push(action.payload)
    },
    toggleTask(state, action) {
      const todo = state.find((t) => t.id === action.payload)
      todo.complete = !todo.complete
    }
  } })