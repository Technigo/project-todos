import { createSlice } from '@reduxjs/toolkit'

export const tasklist = createSlice({
  name: 'tasklist',
  initialState: {
    tasks: [
      { id: 1, text: 'Work on ToDo', complete: true },
      { id: 2, text: 'Have fun', complete: false },
      { id: 3, text: 'Eat a burger', complete: false },
      { id: 4, text: 'Hug my best beetle', complete: false }
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      state.tasks.push({
        id: state.tasks.length + 1,
        text: action.payload, 
        complete: false
      })
    },
    toggleCheck: (state, action) => {
      const checkToDo = state.tasks.find((toDo) => toDo.id === action.payload)
      
      if (checkToDo) {
        checkToDo.complete = !checkToDo.complete
      }
    },
    removeToDo: (state, action) => {
      state.tasks = state.tasks.filter((toDo) => toDo.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.tasks = []
    }
  }
})