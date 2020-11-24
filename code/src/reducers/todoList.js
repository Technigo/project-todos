import { createSlice } from '@reduxjs/toolkit'

const list = [
  {
    id: 1,
    task: 'Work with todo project'
  },
  {
    id: 2,
    task: 'Cook dinner'
  },
  {
    id: 3,
    task: 'Do laundry'
  }
]

export const todoList = createSlice({
  name: 'todoList',
  initialState: list,
  reducer: {}
})
