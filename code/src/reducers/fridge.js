import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const fridge = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        task: action.payload,
        done: false,
        added: Date.now()
      })
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    removeAll: (state) => {
      state.items = []
    },

    toggleDone: (state, action) => {
      const foundItem = state.items.find((item) => item.id === action.payload)

      if (foundItem) {
        foundItem.done = !foundItem.done
      }
    }
  }
})
