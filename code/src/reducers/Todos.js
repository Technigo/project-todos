import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, name: 'My first task', isComplete: false },
    { id: 2, name: 'My second task', isComplete: true },
    { id: 3, name: 'My third task', isComplete: false },

  ]
}

export const todos = createSlice ({
  name: 'todos',
  initialState,
  reducers: {
    removeItem: (store, action) => {
      console.log(store, action)
      const itemId = action.payload

      const filteredList = store.items.filter(item => item.id !== itemId)
      console.log(filteredList)

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