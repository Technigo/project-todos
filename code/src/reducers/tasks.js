import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })

    },
    removeItem: (state, action) => {
      state.items = state.items.filter((items) => items.id !== action.payload)

    },
    removeAll: (state) => {
      state.items = []
    },
    // checkedTask: (state, action) => {
    //     // state.items.push({})

    // },
    toggleTaskStatus: (state, action) => {
      const existingTask = state.tasks.find((task) => task.id === action.payload)

      existingTask.isCompleted = !existingTask.isCompleted
    },
    countTotalQuantity: (state, action) => {
      // state.items.count(state.items)
      state.items = state.items.length(state.items)
    }

  }
})