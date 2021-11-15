import { createSlice } from "@reduxjs/toolkit"
import uniqid from 'uniqid'

// create a variable that takes one object/argument
const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [] //array of todos
  },
  reducers: {
    addTodo: (store, action) => {
      console.log(action)
      const newTodo = 
    },
  },
})

export default todos