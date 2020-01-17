import { createSlice } from '@reduxjs/toolkit'


const taskData = [
  { id: 1, text: 'Watch video on actions & reducers', complete: true },
  { id: 2, text: 'Follow redux codealong', complete: false },
  { id: 3, text: 'Fork weekly assignment', complete: true },
  { id: 4, text: 'Update LinkedIn profile ', complete: true },
  { id: 5, text: 'Create a todo app', complete: false },
]

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: taskData
  },

  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, complete: false })
    },

    toggleCheckbox: (state, action) => {
      let foundItem = state.items.find((item) => item.id === action.payload)

      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },
    removeAllTasks: (state, action) => {
      state.items = []

    },
    removeTask: (state, action) => {
      // find 'item' or whatever item
      // remove it from the items array
      // id = 3
      state.items = state.items.filter(item => item.id !== action.payload)

    }
  }
})