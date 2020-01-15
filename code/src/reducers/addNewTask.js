import { createSlice } from "@reduxjs/toolkit"


export const addNewTask = createSlice({
  name: "addNewTask",
  initialState: {
    items: []
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload })

    }
  }
})