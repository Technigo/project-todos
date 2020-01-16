import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'task',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Read the read.me carefully', complete: false },
      { id: 5, text: 'Create a todo app', complete: false },
    ]
  },

  reducers: {
    addTask: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload })
    },
    // add reducer for CLEAR ALL tasks.

    // add reducer to check and uncheck (toggle) the tasks via a checkbox. 

    toggleComplete: (state, action) => {
      console.log(action.payload)
      //find task
      const foundItem = state.items.find((item) => item.id === action.payload)

      //toggle the value of toggleComplete.
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    }

    // count length of the array with unchecked tasks.
  }

})