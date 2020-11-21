import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  // the initialState is now hardcoded to have something to start with. 
  // This shall be blank 
  // The initialState can include expiring date info too "dueDate"
  initialState: [
    { id: 1, todo: 'Create a todo app', checkedTask: false },
    { id: 2, todo: 'test', checkedTask: false },
  ]
})