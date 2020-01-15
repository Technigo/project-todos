import { createSlice } from '@reduxjs/toolkit'

export const todoList = createSlice({
  name: 'todoList',
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      const taskId = 1 + state.tasks.length;
      state.tasks.push({ id: Date.now(), todoText: action.payload, isCompleted: false })
    },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.tasks.find((task) => task.id === action.payload)

      if (existingTask && existingTask.isCompleted === true) {
        existingTask.isCompleted = false;
      } else if (existingTask && existingTask.isCompleted === false) {
        existingTask.isCompleted = true;
      }
    }

  }
})