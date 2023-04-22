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
      name: 'Book holiday flights',
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
      const index = store.items.findIndex((element) => element.id === action.payload);
      if (index !== -1) {
        store.items.splice(index, 1);
      }
      // store.items = store.items.filter((item) => item.id !== action.payload)
      // store.items = store.items.splice(action.payload)
    },
    // action for removing all tasks from Task List
    removeAllTasks: (store) => {
      store.items = []
    },
    // action for completing all tasks
    completeAllTasks: (store) => {
      store.items.forEach((item) => {
        item.complete = true
      })
    }
  }
})
