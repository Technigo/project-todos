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
    },
    setComplete: (state, action) => {
      // find the task that is clicked and toggle if it is done or not
      // task.id equals the payload that is sent from TodoItem
      const taskComplete = state.items.find((task) => task.id === action.payload)

      // toggle the value of complete
      if (taskComplete) {
        taskComplete.complete = !taskComplete.complete
      }
    }
  }
})
