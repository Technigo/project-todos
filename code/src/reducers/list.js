/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
  name: 'list',
  initialState: {
    items: [
      { id: 1, task: 'Wash dishes', completed: false },
      { id: 2, task: 'Gym time', completed: false },
      { id: 3, task: 'Pick kid from school', completed: false },
      { id: 4, task: 'Coding 4-9pm', completed: false }, // completed for toggle
      { id: 5, task: 'Watch Avengers', completed: false }
    ]
  },
  reducers: {

    toggleItem: (state, action) => {
      console.log(state)
      console.log(action)
      state.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },

    addItem: (state, action) => {
      state.items.push(action.payload)
    },

    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1) // taking the state for splicing, from the payload delete one task
    }
  }
})
