import { createSlice } from '@reduxjs/toolkit'

export const ToDo = createSlice({
  name: 'ToDo',
  initialState: {
    items: [
      { id: 1, name: 'Take over the world', completed: false },
      { id: 2, name: 'Tequila reace', completed: true },
      { id: 3, name: 'Clean the kitchen', completed: false }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },
    removeItem: (state, action) => {
      // find 'cheese' or whatever item
      // remove it from the items array
      // id = 3
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleCompleted: (state, action) => {
      console.log(action.payload)
      // find 'cheese'
      const foundItem = state.items.find(item => item.id === action.payload)

      // toggle the value of completed
      if (foundItem) {
        foundItem.completed = !foundItem.completed
      }
    }
  }
})
