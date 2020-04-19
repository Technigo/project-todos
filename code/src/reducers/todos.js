import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { description: 'Test', done: false },
    { description: 'Test2', done: false }
  ]
}

export const todos = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const itemInfo = action.payload
      state.items.push(itemInfo)
    },
    setDone: (state, action) => {
      const { itemIndex, done } = action.payload
      state.items[itemIndex].done = done
    },
    removeTodo: (state, action) => {
      const { itemIndex } = action.payload
      state.items = state.items.filter(
        (item, index) => index !== itemIndex
      )
    }
  }
})