import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos', //good to name the same as a variable
  initialState: {
    tasks: [
      { id: 1, description: 'First task', isComplete: false },
      { id: 2, description: 'Second task', isComplete: false },
      { id: 3, description: 'Third task', isComplete: false }
    ]
  },
  reducers: {//methods/actions to manipulate the store

  }
})

export default todos

