import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {id: 1, text: 'meditate 10 minutes', complete: false, category: 'self-care'},
      {id: 2, text: 'book meeting with my manager', complete: false, category: 'work'},
      {id: 3, text: 'clean the house', complete: false, category: 'household'},
      {id: 4, text: 'buy milk from the store', complete: false, category: 'shopping'}
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