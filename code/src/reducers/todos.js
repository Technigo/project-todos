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
      state.items.push({
        id: uniqid(),
        task: action.payload,
        isComplete: false
      })
    },
    removeToDo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleIsComplete: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload)
      task.isComplete = !task.isComplete
    },
    completeAll: (state) => {
      state.items = []
    }
  }
})

export default todos