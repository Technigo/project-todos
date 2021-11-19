import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid'

const initialState = {
  items: []
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.items.unshift({
        id: uniqid(),
        task: action.payload.input,
        isComplete: false,
        newDate: new Date(),
        category: action.payload.category
      })
    },
    removeToDo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleIsComplete: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload)
      task.isComplete = !task.isComplete
      state.items.sort((a,b) => a.isComplete > b.isComplete && (1 || -1))
    },
    completeAll: (state) => {
      state.items = []
    },
  }
})

export default todos