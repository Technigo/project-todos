import { createSlice } from '@reduxjs/toolkit'

export const fridge = createSlice({
  name: 'fridge',
  initialState: {
    items: [
      { id: 1, name: 'Create todo app', needsMore: false },
      { id: 2, name: 'Follow Redux codealong', needsMore: true },
      { id: 3, name: 'Do laundry', needsMore: false }
    ]
  },

  /*action.payload is the value of the input field*/

  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },

  //Date.now() is milliseconds and serves as an id since we are not going to add the same todo item in the same millisecond.

    removeItem: (state, action) => {
      // find 'cheese' or whatever item
      // remove it from the items array
      // id = 3
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleNeedsMore: (state, action) => {
      console.log(action.payload)
      // find 'cheese'
      const foundItem = state.items.find(item => item.id === action.payload)

      // toggle the value of needsMore
      if (foundItem) {
        foundItem.needsMore = !foundItem.needsMore
      }
    }
  }
})