import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },

  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },

    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload)
    },

    removeAll: (state, action) => {
      state.items = []
    },

    toggleComplete: (state, action) => {
      console.log(action.payload)

      const foundTask = state.items.find(task => task.id === action.payload)

      if (foundTask) {
        foundTask.complete = !foundTask.complete
      }
    }
  }
})



