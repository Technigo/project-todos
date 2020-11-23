import { createSlice } from '@reduxjs/toolkit'

export const bag = createSlice({
  name: 'bag',
  initialState: {
    items: [
      { id: 1, name: 'Handduk', category: 'Hygien' },
      { id: 2, name: 'Tandborste', category: 'Hygien' },
      { id: 3, name: 'Tvål', category: 'Hygien' },
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const { name, category } = action.payload
      state.items.push({ id: Date.now(), name, category })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    }
  }
})