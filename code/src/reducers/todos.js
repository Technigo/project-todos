import { createSlice } from '@reduxjs/toolkit'

// lecture 1 week 15 @24mins on creating initial state.
// I need to change the initial state to nothing & add startdate
const initialState = {
  items: [
    {
      id: 1,
      category: 'Study',
      text: 'Tweak the start date on todo in todo-app',
      complete: false,
      dueDate: Date.now()

    }
  ]
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  //The functions that handles the data to put in the store:
  reducers: {
    addItem: (store, action) => {
      const { text, category, complete, dueDate } = action.payload
      store.items = [...store.items, { id: Date.now(), text, category, complete, dueDate }]
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
    },
    setAllComplete: (store, action) => {
      store.items.map((item) => (item.complete = true) === action.payload)
    },
    setAllIncomplete: (store, action) => {
      store.items.map((item) => (item.complete = false) === action.payload)
    }
  }
})