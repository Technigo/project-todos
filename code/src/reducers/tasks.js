/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

// initialState stored in a variable, outside of the createSlice (optional)
const initialState = {
  items: [
    { id: 1, text: 'Add tasks to list', checked: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleChecked: (store, action) => {
      const { id } = action.payload
      store.items = store.items.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked }
        }
        return item
      })
    },
    addTask: (store, action) => {
      // Immutable solution: Using a spread operator, recreating a new array containing new value.
      store.items = [...store.items, action.payload]
    },
    deleteAllTasks: (store) => {
      store.items = []
    },
    deleteSingleTask: (store, action) => {
      // returns array with only items that do not match the deleted one.
      store.items = store.items.filter((item) => item.id !== action.payload.id)
    }
  }
})