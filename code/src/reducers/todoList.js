import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
  name: 'todoList',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), todoText: action.payload, isCompleted: false })
    },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.tasks.find((task) => task.id === action.payload)

      // If the task is already completed set isCompleted to false, otherwise to true to toggle task status
      existingTask.isCompleted ? existingTask.isCompleted = false : existingTask.isCompleted = true

    }

  }
})