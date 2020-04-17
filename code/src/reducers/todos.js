import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      text: 'Walk the dog'
    },
    {
      id: 2,
      text: 'Apply for jobs!!'
    },
    {
      id: 3,
      text: 'Buy candy?'
    }
  ]
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload})
    },

    removeOne: (state, action) => {
      state.items = state.items.filter((item) => 
      item.id !== action.payload)
    },

    // clearAll: (state, action) => {
    //   state.items = []
    // }
  }
})
