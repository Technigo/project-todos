import { createSlice } from "@reduxjs/toolkit"
// here we create a slice that consists of name, initialstate and reducer and proporties 
const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {},
})

export default todos
