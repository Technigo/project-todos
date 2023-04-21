/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1,
      text: 'Watch video on actions & reducers',
      complete: true },
    { id: 2,
      text: 'Eat food',
      complete: true },
    { id: 3,
      text: 'Use toilet',
      complete: true },
    { id: 4,
      text: 'Drink water',
      complete: false }
  ],
  reducers: {
    toggleComplete: (state, action) => {
      const task = state.find((eachTask) => eachTask.id === action.payload)
      if (task) {
        task.complete = !task.complete
      }
    }
  }
})

export const { toggleComplete } = tasks.actions