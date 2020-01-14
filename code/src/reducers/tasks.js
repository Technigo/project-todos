import { createSlice } from '@reduxjs/toolkit'

// Task data: id, title, completed: true/false

export const tasks = createSlice({

  name: 'tasks',
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({ ...action.payload })
    }
  }

})