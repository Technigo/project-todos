import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({ name: 'tasks',
  initialState: [
    { id: 0, text: 'Plugga', complete: true },
    { id: 1, text: 'Gamea', complete: false },
    { id: 2, text: 'Kodea', complete: true },
    { id: 3, text: 'Chilla', complete: true }
  ],
  reducers: {
    addTask(state, action) {
      state.push(action.payload)
    },
    toggleTask(state, action) {
      const todo = state.find((t) => t.id === action.payload)
      todo.complete = !todo.complete
    },
    deleteTask(state, action) {
      // state = state.filter((t) => t.id !== action.payload)
      const todo = state.find((t) => t.id === action.payload)
      state.splice(state.indexOf(todo), 1)
    }
  } })