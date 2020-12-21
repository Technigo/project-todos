import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: { items: [
    { id: 0, text: 'Add a todo!', checked: false},
  ] },
  reducers: {
    addItem: (state, action) => {
      const addItems = [...state.items,action.payload]
      state.items = addItems
    },
    removeItem: (state, action) => {
      const filterItems = state.items.filter((item) => item.id !== action.payload.id)
      state.items = filterItems
    },
    changeChecked: (state, action) => {
      const changeChecked = state.items.find((items) => items.id === action.payload.id)
      changeChecked.checked = action.payload.checked
    }
  }
})