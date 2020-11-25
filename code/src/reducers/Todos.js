import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 1, name: 'My first task', isComplete: false },
    { id: 2, name: 'My second task', isComplete: true },
    { id: 3, name: 'My third task', isComplete: false },

  ]
}

export const todos = createSlice ({
  name: 'todos',
  initialState: {
    username: "Johanna",
    items: [
      { id: 1, text: 'The first todo' },
      { id: 2, text: 'The second todo' },
      { id: 3, text: 'The third todo' },
    ]
  },
  reducers: {
    removeOne: (state, action) => {
      state.items.pop()
    }
  }
})