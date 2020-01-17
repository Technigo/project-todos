import { createSlice } from '@reduxjs/toolkit'

// Declaring initialState to use it in the Slice and to return initialState when invoking removeAll()
const initialState = {
  items: []
}

export const tasks = createSlice({

  name: 'tasks',
  initialState, //shorthand for initialState: initialState
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
    },

    removeAll: (state) => {
      // return initialState (gives same result as below)
      state.items = []
    }

  }

})