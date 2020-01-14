import { createSlice } from '@reduxjs/toolkit'

// Task data: id, title, completed: true/false

export const tasks = createSlice({

  name: 'tasks',
  initialState: [
    { id: 1, text: 'Diapers', complete: false },
    { id: 2, text: 'Milk', complete: false },
    { id: 3, text: 'Pizza', complete: true },
  ],
  reducers: {
    // Fix the ADD_TASK
    //Fix the TOGGLE_TASK
  }

})