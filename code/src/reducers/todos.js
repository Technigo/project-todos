import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
    { id: 1, category: 'Study', text: 'Watch video on actions & reducers', complete: true, dueDate: Date.now() },
    { id: 2, category: 'Study', text: 'Follow redux codealong', complete: true, dueDate: Date.now() },
    { id: 3, category: 'Study', text: 'Fork weekly assignment', complete: true, dueDate: Date.now() },
    { id: 4, category: 'Study', text: 'Create a todo app', complete: false, dueDate: Date.now() },
    ]
  },
  //The functions that handles the data to put in the store:
  reducers: {
    addItem: (store, action) => {
      const { text, category, complete, dueDate } = action.payload
      store.items = [ ...store.items, { id: Date.now(), text, category, complete, dueDate }]
    },
    removeTodo: (store, action) => {
      //filter item, remove it from the items array
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (store) => {
      store.items = []
    },
    toggleCompleted: (store, action) => {
      // find item with the item id that matches the payload with find-method:
      const foundItem = store.items.find((item) => item.id === action.payload)
      // toggle the value of completed
      if (foundItem) {
        foundItem.complete = !foundItem.complete
      }
    }
  }
})