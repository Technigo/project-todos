import { createSlice } from "@reduxjs/toolkit"


export const toggleTask = createSlice({
  name: "toggleTask",
  initialState: {
    items: []
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({ ...action.payload.id })

    }
  }
})