/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

// initialState stored in a variable, outside of the createSlice (optional)
const initialState = {
  items: [
    { id: 1, text: 'Make some coffee', complete: true },
    { id: 2, text: 'Make a functional to-do app', complete: false },
    { id: 3, text: 'Have a dance party', complete: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (store, action) => {
      // Mutable option: push new task (the payload) into task-items array
      // store.items.push(action.payload)
      // Immutable option(better): Using a spread operator, recreating a new array containing new value.
      store.items = [...store.items, action.payload]
    }
  }
})