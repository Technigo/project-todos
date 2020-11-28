import { createSlice } from "@reduxjs/toolkit"

export const todos = createSlice({
  name: "todos",
  initialState: {
    username: 'you',
    items: ['The first todo', 'The second todo', 'The third todo'],
  },

})

