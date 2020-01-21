import { createSlice } from '@reduxjs/toolkit'
import moment from "moment"


const taskData = [
  { id: 1, text: "Stand-up with my team", complete: true, createdAt: "an hour ago" },
  { id: 2, text: 'Demo the To-do app', complete: false, createdAt: "2 days ago", },
  // { id: 3, text: 'Fork weekly assignment', complete: true },
  // { id: 4, text: 'Update LinkedIn profile ', complete: true },
  // { id: 5, text: 'Create a todo app', complete: false },
]

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: taskData
  },

  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, complete: false, createdAt: moment().fromNow() })
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