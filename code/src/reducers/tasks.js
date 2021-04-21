import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1618850133385, text:'Read a book', complete: true },
    { id: 1618850133386, text:'Do dishes', complete: false },
    { id: 1618850133387, text:'Clean windows', complete: false},
    { id: 1618850133388, text:'Eat chocolate', complete: false },
  ],
  reducers: {
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    toggleCompleted: (state, action) => {
      const existingTask = state.find((item) => item.id === action.payload.id)
      if (existingTask){
        existingTask.complete = !existingTask.complete
      }
    },
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        complete: false}
      state.push(newTask)
    },
    removeAll: () => {
      return []
    },
    removeCompleted: (state) => {
      return state.filter((item) => !item.complete)
    }
  }
})

