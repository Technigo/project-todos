import { createSlice } from '@reduxjs/toolkit'

import moment from "moment"

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, todo: 'Create a todo app', checkedTask: false, createdAt: "" },
      { id: 2, todo: 'test', checkedTask: true,  createdAt: "" },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), todo: action.payload, createdAt: moment()})
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }, 
    toggleCheckedTask: (state, action) => {
      const checkedItem = state.items.find((item) => item.id === action.payload)

      if (checkedItem) {
        checkedItem.checkedTask = !checkedItem.checkedTask
      }
    },
    removeAll: (state, action) => {
      state.items = []
    }
  }

})