import { createSlice } from '@reduxjs/toolkit'

export const notepad = createSlice({
  name: 'notepad',
  initialState: {
    items: [
      { id: 1, name: 'Fix portfolio', description: 'fill in my thoughts section', dueDate: '26/4', category: 'coding', done: false },
      { id: 2, name: 'Make lunchbox', description: 'make lunch for wednesday', dueDate: '21/4', category: 'home', done: false },
      { id: 3, name: 'Write a post', description: 'write a post about how to toggle display in React', dueDate: '23/4', category: 'coding', done: false }
    ],
  },
  reducers: {
    addTask: (state, action) => {
      //function that adds a task to the notepad
      const { name, description, dueDate, category, done } = action.payload
      state.items.push({
        id: Date.now(),
        name,
        description,
        startDate: Date.now(),
        dueDate,
        category,
        done: false,
      })
    },
    removeTask: (state, action) => {
      // function that removes a task from the notepad
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    taskDone: (state, action) => {
      // function that toggles the done state of the task
      console.log(action.payload)
      const checkedTask = state.items.find((item) => item.id === action.payload)
      if (checkedTask) {
        checkedTask.done = !checkedTask.done
      }

    },
  },
})