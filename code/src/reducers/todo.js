import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice({
  name: 'todo',
  initialState: {
    tasks: []
  }
  reducers: {
    addTodo: (state, action) => {

    }
  }
})