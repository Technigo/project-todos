import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, text: 'Watch video on actions and reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false }
    ]
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({id: Date.now(), text: action.payload })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    toggleCompleted: (state, action) => {
      console.log(action.payload)
      const foundItem = state.items.find((item) => item.id === action.payload)

      if(foundItem) {
        foundItem.complete = !foundItem.complete
      }
    },
    clearAll: () => {
      return[]
    }
  }
}) 


// initialState: {
//   items: [
//   { id: 1, text: 'Watch video on actions and reducers', complete: true },
//   { id: 2, text: 'Follow redux codealong', complete: true },
//   { id: 3, text: 'Fork weekly assignment', complete: true },
//   { id: 4, text: 'Create a todo app', complete: false }
// ]},