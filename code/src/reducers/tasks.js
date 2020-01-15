import { createSlice } from '@reduxjs/toolkit'

const taskData = [
  { id: 1, text: 'Watch video on actions & reducers', complete: true },
  { id: 2, text: 'Follow redux codealong', complete: true },
  { id: 3, text: 'Fork weekly assignment', complete: true },
  { id: 4, text: 'Update LinkedIn profile ', complete: true },
  { id: 5, text: 'Create a todo app', complete: false },
]

export const tasks = createSlice({
  name: 'tasks',
  initialState: taskData,

  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, complete: false })
    }
  }
})