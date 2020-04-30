import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1, task: 'Shower', completed: false, category: 'To-Do' },
      { id: 2, task: 'Clean', completed: true, category: 'To-Do' },
      { id: 3, task: 'Assignment', completed: false, category: 'Work' }
    ]
  },
  reducers: {}
})
