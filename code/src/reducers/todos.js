import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      text: 'Buy more striped t-shirts',
      completed: false
    }
  ]
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const { newTask } = action.payload
      state.items.push(newTask)
    }
  }
})