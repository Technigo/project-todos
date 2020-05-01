import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1, task: 'Shower', completed: false, category: "circle" },
      { id: 2, task: 'Clean', completed: true, category: "circle" },
      { id: 3, task: 'Assignment', completed: false, category: "briefcase" }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const { task, category, dueDate } = action.payload
      state.items.push({
        id: Date.now(),
        task,
        completed: false,
        category,
        startDate: Date.now(),
        dueDate,
      })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleCheckbox: (state, action) => {
      const foundItem = state.items.find((item) => item.id === action.payload)

      if (foundItem) {
        foundItem.completed = !foundItem.completed
      }
    },
  },
})
