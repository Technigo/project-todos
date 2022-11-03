/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
  name: 'list',
  initialState: {
    items: [
      { id: 1, task: 'Wash dishes', isDone: false },
      { id: 2, task: 'Gym time', isDone: false },
      { id: 3, task: 'Pick kid from school', isDone: false },
      { id: 4, task: 'Coding 4-9pm', isDone: false } // isDone for toggle
    ]
  },
  reducers: {
    toggleItem: (state, action) => {
      console.log(state)
      console.log(action)
      state.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      })
    },
    deleteItem: (state, action) => {
      console.log(state)
      console.log(action)
      const existingTask = state.items.find((item) => item.id === action.payload.id) // find the matching to existing.

      if (existingTask) {
        existingTask.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    }
  }
})
