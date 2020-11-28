import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {id: 1606460400000, text: 'eat well and excercise', complete: false, category: 'self-care'},
      {id: 1606547700000, text: 'spend time with friends and family', complete: false, category: 'self-care'},
      {id: 1606548600000, text: 'express gratitude', complete: false, category: 'self-care'},
      {id: 1606463100000, text: 'laugh', complete: false, category: 'self-care'}
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const { newTask, category } = action.payload
      state.items.push({ id: Date.now(), text: newTask, category, complete: false})
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload)
    },
    toggleTaskCompleted: (state, action) => {
      const foundItem = state.items.find(task => task.id === action.payload)
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },
    removeAll: (state) => {
      state.items = []
    }
  }
})