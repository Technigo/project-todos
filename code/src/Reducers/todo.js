import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice ({
  name: 'todo',
    initialState: {
      items: [
        { id: 1, text: 'Eat' },
        { id: 2, text: 'Sleep' },
        { id: 3, text: 'Yoga' },
        { id: 4, text: 'Repeat' },
      ],
  },

  reducers:{
    removeOne: (state, action) => {
      state.items.pop()
    }
  }
})

