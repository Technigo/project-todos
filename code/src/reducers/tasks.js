import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1618850133385, text:'read a book', complete: true },
    { id: 1618850133386, text:'do dishes', complete: false },
    { id: 1618850133387, text:'clean windows', complete: false},
    { id: 1618850133388, text:'eat chocolate', complete: false },
  ],
  reducers: {
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    },
    toggleCompleted: (state, action) => {
      const existingTask = state.find((item) => item.id === action.payload.id)
      if (existingTask){
        existingTask.complete = !existingTask.complete
      }
    },
    addTask: (state, action) => {
      const newTask = { id: Date.now(), text: action.payload.text, complete: false}
      state.push(newTask)
    }
  }
})