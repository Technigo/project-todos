import { createSlice } from '@reduxjs/toolkit';

const taskData = [
  { id: 1, text: 'Watch video on actions & reducers', complete: false },
  { id: 2, text: 'Follow redux codealong', complete: false },
  { id: 3, text: 'Fork weekly assignment', complete: false },
  { id: 4, text: 'Create a todo app', complete: false }
]

let counter = taskData.length;

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    taskData
  },
  // functions that will need calling:
  reducers: {
    // action for adding an item to the taskData:
    addToDo: (state, action) => {
      console.log('taskData:', taskData)
      state.taskData.push({
        id: counter += 1,
        text: action.payload,
        complete: false
      })
      console.log('taskData now:', taskData)
    },
    toggleItem: (state, action) => {
      state.taskData.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    },
    removeToDo: (state, action) => {
      console.log('taskData:', taskData)
      state.taskData = state.taskData.filter((item) => item.id !== action.payload)
      console.log('taskData now:', taskData)
    }
  }
})
