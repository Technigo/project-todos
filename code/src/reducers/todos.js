import { createSlice } from '@reduxjs/toolkit'

// Should i define this const below Like Van/Maks do in he lecture??
// const initialState = {
//   items: []
// }

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
    { id: 1, category: 'Study', text: 'Watch video on actions & reducers', complete: true },
    { id: 2, category: 'Study', text: 'Follow redux codealong', complete: true },
    { id: 3, category: 'Study', text: 'Fork weekly assignment', complete: true },
    { id: 4, category: 'Study', text: 'Create a todo app', complete: false },
    ]
  },
  //The functions that handles the data to put in the store
  reducers: {
    addItem: (store, action) => {
      const { text, category, complete, dueDate } = action.payload
      // se wed lecture about push being bad practice (something with immutability)
      // use spread operator instead???
     // store.items.push({ id: Date.now(), text, category, complete, dueDate })
      store.items = [ ...store.items, { id: Date.now(), text, category, complete, dueDate }]
    },
    removeTodo: (store, action) => {
      // find item/ filter item
      // remove it from the items array
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