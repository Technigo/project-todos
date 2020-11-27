import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {id: 1606460400000, text: 'meditate 10 minutes', complete: false, category: 'self-care'},
      {id: 1606462200000, text: 'think about five positive things', complete: false, category: 'self-care'},
      {id: 1606463100000, text: 'give a hug', complete: false, category: 'self-care'},
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