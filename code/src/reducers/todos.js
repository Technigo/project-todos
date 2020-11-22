import { createSlice } from '@reduxjs/toolkit'


// Add dueDate to each todo in the list?
// Add category to items also below? See AddTodoForm/Select
export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
    { id: 1, text: 'Watch video on actions & reducers', complete: true },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false },
    ]
  },
  reducers: {
    addItem: (store, action) => {
      const { text, dueDate } = action.payload
      //state or store below? Jennie has state.
      store.items.push({ id: Date.now(), text, dueDate })
    },
    removeTodo: (store, action) => {
      // find item/ filter item
      // remove it from the items array
      // id = 3 (what does this mean?)
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (store, action) => {
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