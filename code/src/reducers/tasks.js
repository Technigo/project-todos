import { createSlice } from '@reduxjs/toolkit'

const allTasks = [
  { id: 1, title: "Take a nap", isCompleted: false, isHidden: false },
  { id: 2, title: "Eat cake", isCompleted: false, isHidden: false },
  { id: 3, title: "Take a walk", isCompleted: true, isHidden: false },
]

export const tasks = createSlice({
  name: "tasks",
  initialState: {
    allTasks,
    isFiltered: false
  },
  reducers: {
    addTask: (state, action) => {
      state.allTasks.push({ title: action.payload, isCompleted: false })
    },
    removeTask: (state, action) => {
      if (action.payload) {
        state.allTasks = state.allTasks.filter(task => task.title !== action.payload.title)
      } else {
        state.allTasks = []
      }
    },
    toggleTask: (state, action) => {
      const completedTask = state.allTasks.find(task => task.title === action.payload.title)
      if (action.payload.isCompleted) {
        completedTask.isCompleted = false
      } else if (!action.payload.isCompleted) {
        completedTask.isCompleted = true
      }
    },
    completeAllTasks: (state, action) => {
      for (let task of state.allTasks) {
        task.isCompleted = true
      }
    },
    filterCompleted: (state, action) => {
      for (let task of state.allTasks) {
        if (!task.isCompleted) {
          task.isHidden = true
        } else if (task.isCompleted) {
          task.isHidden = false
        }
      }
      state.isFiltered = true
    },
    filterUncompleted: (state, action) => {
      for (let task of state.allTasks) {
        if (task.isCompleted) {
          task.isHidden = true
        } else if (!task.isCompleted) {
          task.isHidden = false
        }
      }
      state.isFiltered = true
    },
    resetFilter: (state, action) => {
      for (let task of state.allTasks) {
        task.isHidden = false
      }
      state.isFiltered = false
    }
  }
})