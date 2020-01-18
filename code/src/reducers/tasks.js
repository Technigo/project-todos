import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, name: "Clean house", complete: false }
    ]
  },

  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), name: action.payload })
    },

    removeTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    },

    removeAll: (state, action) => {
      state.items = []
    },

    toggleComplete: (state, action) => {
      const foundTask = state.items.find((task) => task.id !== action.payload)

      if (foundTask) {
        foundTask.complete = !foundTask.complete
      }
    }
  }
})



