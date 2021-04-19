import { createSlice } from '@reduxjs/toolkit'

const allTasks = [
  { id: 1, title: "Take a nap", isCompleted: false },
  { id: 2, title: "Eat cake", isCompleted: false },
  { id: 3, title: "Take a walk", isCompleted: true },
]

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    allTasks
  },
  reducers: {
    addTask: (state, action) => {
      state.allTasks.push({ title: action.payload, isCompleted: false })
    },
    removeTask: (state, action) => {
      state.allTasks = []
    },
    toggleTask: (state, action) => {
      const completedTask = state.allTasks.find(task => task.title === action.payload.title)
      if (action.payload.isCompleted) {
        completedTask.isCompleted = false
      } else if (!action.payload.isCompleted) {
        completedTask.isCompleted = true
      }
    }
  }
})