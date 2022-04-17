import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false },
  ],
  reducers: {
      addTask: (state, action) => {
          const newTask = {
              id: Math.random(), 
              text: action.payload.task
          }
          state.push(newTask);
      },
      deleteTask: (state, action) => {
          return state.filter((item) => item.id !== action.payload.id)
      }
    }
})

export const {addTask, deleteTask} = tasks.actions;