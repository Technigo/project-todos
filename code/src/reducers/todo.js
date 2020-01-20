import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      { id: 1, name: 'Create todo app', finishedTask: false },
      { id: 2, name: 'Follow Redux codealong', finishedTask: true },
      { id: 3, name: 'Do laundry', finishedTask: false }
    ]
  },

  /*action.payload is the value of the input field*/

  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },

  //Date.now() is milliseconds and serves as an id since we are not going to add the same todo item in the same millisecond.

    removeItem: (state, action) => {
      // find item/task
      // remove it from the items array
      // id = 3
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleFinishedTask: (state, action) => {
      console.log(action.payload)
      // find item/task
      const foundItem = state.items.find(item => item.id === action.payload)

      // toggle the value of finishedTask
      if (foundItem) {
        foundItem.finishedTask = !foundItem.finishedTask
      }
    }
  }
})