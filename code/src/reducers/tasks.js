import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'task',
  initialState: [
    { id: 1, text: 'clean up', complete: true },
    { id: 1, text: 'get groceries', complete: true },
    { id: 2, text: 'work out', complete: true },
    { id: 2, text: 'save the world', complete: false }
  ]
})