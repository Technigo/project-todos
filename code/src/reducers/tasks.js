import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Make some coffee', complete: true },
    { id: 2, text: 'Make a functional to-do app', complete: false },
    { id: 3, text: 'Have a dance party', complete: false }
  ]
})