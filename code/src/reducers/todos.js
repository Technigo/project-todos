import { createSlice } from '@reduxjs/toolkit'

//Maks lecture week 16 wednesday @1.32
//const initialTodos = localStorage.getItem('todos')
//? JSON.parse(localStorage.getItem('todos'))
//: {}
//And also update initial state so that items: initialTodos
//see in App.js Vans way to implement local storage

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        category: 'Study',
        text: 'Watch video on actions & reducers',
        complete: true,
        dueDate: Date.now()
      }
    ]
  },
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
    }
  }
})