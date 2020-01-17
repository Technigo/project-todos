import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, task: 'bla', done: true },
    { id: 2, task: 'bldada', done: false },
    { id: 4, task: 'blakllu', done: true }
  ]
}

export const fridge = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), task: action.payload })
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
