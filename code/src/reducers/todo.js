/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

const initialItems = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

const todo = createSlice({
  name: 'todo',
  initialState: { items: initialItems },
  reducers: {
    setAllItems: (store, action) => {
      store.item = action.payload
    },
    toggleItem: (store, action) => {
      console.log(store)
      console.log(action)
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCompleted = !item.isCompleted
        }
      })
    },
    deleteItem: (store, action) => {
      // Mutable
      // store.items.splice(action.payload, 1)

      // Immutable
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      })
      store.items = updatedItems
    },
    addItem: (store, action) => {
      // Mutable
      // store.items.push(action.payload)

      // Immutable
      store.items = [...store.items, action.payload]
    }
  }
})

export default todo