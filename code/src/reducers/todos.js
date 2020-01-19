import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, isCompleted: false })
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.tasks.find((task) => task.id === action.payload)

      // If the task is already completed set isCompleted to false, otherwise to true to toggle task status
      existingTask.isCompleted ? existingTask.isCompleted = false : existingTask.isCompleted = true
    },
    clearAllTasks: (state, action) => {
      state.tasks = []
    }

  }
})