import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, text: 'Write a Book', complete: true },
    { id: 2, text: 'Do laundry', complete: false },
    { id: 3, text: 'Eat a cookie', complete: false }
  ],

  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload })
    },

    removeTodo: (state, action) => {
      // Return a totally new state,
      // needed when the initial state is an array
      return state.filter((task) => task.id !== action.payload)
    },

    removeAll: () => {
      return []
    },

    toggleCompleted: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload)

      if (foundTask) {
        foundTask.complete = !foundTask.complete
      }
    }
  }

})