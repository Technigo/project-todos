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
  // ACTIONS (i.e. functions) THAT WILL NEED CALLING:
  reducers: {
    // Action for adding an item to the taskData
    addToDo: (state, action) => {
      state.taskData.push({
        id: counter += 1,
        text: action.payload,
        complete: false
      })
    },
    // Action for toggling between completed/uncompleted when checkbox is clicked
    toggleItem: (state, action) => {
      state.taskData.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete
        }
      });
    },
    // Action for removing an item
    removeToDo: (state, action) => {
      state.taskData = state.taskData.filter((item) => item.id !== action.payload)
    },
    // Action for removing all items
    removeAll: (state) => {
      state.taskData = []
    },
    // Action for completing all items
    completeAllItems: (state) => {
      state.taskData.forEach((item) => {
        item.complete = true
      });
    }
  }
})
