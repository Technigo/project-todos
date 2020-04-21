import { createSlice } from '@reduxjs/toolkit'

export const notepad = createSlice({
  name: 'notepad',
  initialState: {
    items: [
      { id: 1, name: 'Fix portfolio', description: 'fill in my thoughts section', dueDate: '26/4', category: 'coding' },
      { id: 2, name: 'Make lunchbox', description: 'make lunch for wednesday', dueDate: '21/4', category: 'home' }
    ],
  },
  reducers: {
    addTask: (state, action) => {
      //function that adds a task to the notepad
      const { name, description, dueDate, category } = action.payload
      state.items.push({
        id: Date.now(),
        name,
        description,
        startDate: Date.now(),
        dueDate,
        category
      })
    },
    removeTask: (state, action) => {
      // function that removes a task from the notepad
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
  },
})