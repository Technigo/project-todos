import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
  items: [
    { id: 1, text: 'buy wine', complete: true, timeCreated: '' },
    { id: 2, text: 'learn Redux', complete: true, timeCreated: '' },
    { id: 3, text: 'self care', complete: true, timeCreated: '' },
    { id: 4, text: 'Create my todo list', complete: false, timeCreated: '' }
  ],
  uncomplete: 1
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const date = moment().startOf('minute').fromNow()

      state.items.push({ id: state.items.length + 1, text: action.payload, timeCreated: date })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleCompleted: (state, action) => {
      console.log(action.payload)
      const foundItem = state.items.find((item) => item.id === action.payload)

      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },
    clearAll: (state) => {
      state.items = []
    }
  }
})