import { createSlice } from '@reduxjs/toolkit'

// Task data: id, text, completed: true/false

export const tasks = createSlice({

  name: 'tasks',
  initialState: {
    items: [
      // Hard coded tasks for testing
      // { id: 1, text: 'Diapers', completed: false },
      // { id: 2, text: 'Milk', completed: false },
      // { id: 3, text: 'Pizza', completed: true }
    ]
  },
  reducers: {
    // The actions for my store - but called reducers 🤷‍♀

    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false })
    },

    removeTask: (state, action) => {
      // Filter and display new array with the tasks that don't match the payloads task id
      state.items = state.items.filter((task) => task.id !== action.payload)
    },

    toggleTask: (state, action) => {

      // To find the task we want to toggle
      const foundTask = state.items.find((task) => task.id === action.payload)

      // To change completed status on that task
      if (foundTask) {
        foundTask.completed = !foundTask.completed
      }
    }
  }

})