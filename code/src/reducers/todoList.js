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
  reducers: {
    addTask: (state, action) => {
      const id = Math.random()
      const todo = {
        id: id,
        task: action.payload
      };
      state.push(todo)
    },
    clearAllTask: (state, action) => {
      state.splice(0, state.length)
    }
  }
})
