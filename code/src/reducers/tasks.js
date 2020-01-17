import { createSlice } from '@reduxjs/toolkit'


export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Dance around naked', complete: true },
      { id: 2, text: 'Find out how to build an app', complete: true },
      { id: 3, text: 'Learn how to code', complete: true },
      { id: 4, text: 'Get to know Redux', complete: false },
    ]
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), todo: action.payload })
    },

    removeTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    },

    toggleComplete: (state, action) => {
      const foundTask = state.items.find((task) => task.id !== action.payload)

      if (foundTask) {
        foundTask.complete = !foundTask.complete
      }
    }
  }
})



