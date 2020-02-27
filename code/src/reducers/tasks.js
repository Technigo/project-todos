import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(), text: action.payload, isCompleted: false
      })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((items) => items.id !== action.payload)

    },
    removeAll: (state) => {
      state.items = []
    },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.items.find((task) => task.id === action.payload)

      // If  task is already completed set isCompleted to false, else to true to toggle task status
      existingTask.isCompleted = !existingTask.isCompleted
    }
  }
})