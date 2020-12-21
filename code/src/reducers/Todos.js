import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, name: 'Wake up', isComplete: false },
    { id: 2, name: 'Snooze', isComplete: false },
    { id: 3, name: 'Eat breakfast', isComplete: false },

  ]
}

export const todos = createSlice ({
  name: 'todos',
  initialState,  
  reducers: {
    removeItem: (store, action) => {
      const itemId = action.payload

      const filteredList = store.items.filter(item => item.id !== itemId)

      store.items = filteredList
    },

    addItem: (store, action) => {
      const newItem = {
        id: Math.max(...store.items.map(item => item.id)) +1,
        name: action.payload,
        isComplete: false
      }

      const newItemsList = [...store.items, newItem]

      store.items = newItemsList
    }
  }
})