import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow Redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const { text, complete } = action.payload
      state.items.push({
        text,
        complete
      })
    }
  }
})
