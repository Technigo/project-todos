import { createSlice } from '@reduxjs/toolkit'

export const ToDo = createSlice({
  name: 'ToDo',
  initialState: {
    items: [
      { id: 1, name: 'Take over the world', category: "work", completed: false },
      { id: 2, name: 'Tequila reace', category: "play", completed: true },
      { id: 3, name: 'Clean the kitchen', category: "work", completed: false }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const {name, category, dueDate} = action.payload
      state.items.push({ id: Date.now(), name, category, startDate:Date.now(), dueDate })
      console.log(name)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleCompleted: (state, action) => {   
    const foundItem = state.items.find(item => item.id === action.payload)

    
      if (foundItem) {
        foundItem.completed = !foundItem.completed
      }
    }
  }
})
