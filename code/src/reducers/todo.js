/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: '1',
        name: 'one',
        isCompleted: false },
      {
        id: '2',
        name: 'two',
        isCompleted: false
      }
    ]
  },
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
      // Mutability
      // store.items.splice(action.payload, 1)

      // Immutability
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