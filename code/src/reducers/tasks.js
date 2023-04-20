import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: 1,
      name: 'Do the laundry',
      complete: true
    },
    {
      id: 2,
      name: 'Book flights to London',
      complete: false
    },
    {
      id: 3,
      name: 'Finish assignment',
      complete: false
    }
  ]

}

export const tasks = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    // action for toggling the checkbox done/not done
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },
    // action for adding a task to Task List
    addTask: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    // action for removing a task from Task List
    removeTask: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    }
  }
})
