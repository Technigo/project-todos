/* eslint-disable no-shadow */
// src/reducers/tasks.js

import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true, createdAt: new Date().toISOString() },
    { id: 2, text: 'Follow redux codealong', complete: true, createdAt: new Date().toISOString() },
    { id: 3, text: 'Fork weekly assignment', complete: true, createdAt: new Date().toISOString() },
    { id: 4, text: 'Create a todo app', complete: false, createdAt: new Date().toISOString() }
  ],
  reducers: {
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload)
      if (task) {
        task.complete = !task.complete
      }
    },
    addTask: (state, action) => {
      const newId = state.length ? Math.max(...state.map((task) => task.id)) + 1 : 1
      const createdAT = new Date().toISOString() // timestamp
      state.push({ id: newId, ...action.payload, createdAT })
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { toggleComplete, addTask, removeTask } = tasks.actions