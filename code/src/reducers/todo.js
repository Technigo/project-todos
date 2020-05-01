import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1, task: 'Shower', completed: false, category: 'To-Do' },
      { id: 2, task: 'Clean', completed: true, category: 'To-Do' },
      { id: 3, task: 'Assignment', completed: false, category: 'Work' }
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
        icon: (category === 'To-Do') ? "circle"
          : (category === 'Shopping') ? "shopping-cart"
            : (category === 'Work') ? "briefcase"
              : (category === 'Family') ? "heart"
                : "user"
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
