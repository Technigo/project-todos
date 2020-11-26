/* eslint-disable no-unused-vars */
import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const remember = createSlice({
  name: 'remember',
  initialState: {
    items: [
      { id: 1, text: 'laundry', done: false, priority: 'medium' },
      { id: 2, text: 'get groceries', done: true, priority: 'high' },
      { id: 3, text: 'feed cat', done: false, priority: 'high' },
      { id: 4, text: 'check mailbox', done: false, priority: 'low' }
    ]
  },
  reducers: {
    addTask: (state, action) => {
      const { text, done, priority } = action.payload
      state.items.push({ id: Date.now(), text, done, priority })
    },
    removeTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearDone: (state, action) => {
      state.items = state.items.filter((item) => item.id.done === action.payload)
    },
    clearAll: (state, action) => {
      state.items = []
    },
    toggleDone: (state, action) => {
      console.log(action.payload)
      // find task
      const foundItem = state.items.find((item) => item.id === action.payload)
      // toggle done value
      if (foundItem) {
        foundItem.done = !foundItem.done
      }
    }
  }
})