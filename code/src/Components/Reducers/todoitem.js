import { createSlice } from '@reduxjs/toolkit'

export const todoitem = createSlice({
  name: 'todoitem',
  initialState: {
    items: [
      { name: "todo1" },
      { name: "todo2" }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      console.log("action name", action.payload)
      state.items.push({ name: action.payload })
    },
    removeItem: (state, action) => {

    }
  },
})