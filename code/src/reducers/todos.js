import { createSlice } from "@reduxjs/toolkit"

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, description: "Add new tasks", isComplete: false}
    ],
  },
  reducers: {
    toggleComplete: (store, action) => {
      // Immutability versions
      const updatedItems = store.items.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        } else {
          return todo
        }
      })
      
      store.items = updatedItems
    },
    removeTask: (store, action) => {
      const decreacedItems = store.items.filter(todo => todo.id !== action.payload)
      store.items = decreacedItems
    },
    addTask: (store, action) => {
      store.items = [...store.items, action.payload]
    }
  }
})

export default todos