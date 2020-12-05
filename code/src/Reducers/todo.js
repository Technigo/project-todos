import { createSlice } from "@reduxjs/toolkit"

export const todo = createSlice({
  name: "todo",
  initialState: {
    items: [
      { id: 1, text: "Eat", isComplete: true },
      { id: 2, text: "Sleep", isComplete: false },
      { id: 3, text: "Yoga", isComplete: false },
      { id: 4, text: "Repeat", isComplete: false },
    ],
  },
  reducers: {
    // Add tasks in the TaskInput
    addItem: (store, action) => {
      const {newItem} = action.payload
      store.items = [...store.items, newItem]
    },
    // Completes task in checkbox
    setComplete: (store, action) => {
      const foundItem = store.items.find((item) => item.id === action.payload)
      if (foundItem) {
        foundItem.isComplete = !foundItem.isComplete
      }
    },
    // Removes one item in the list
    removeItem: (store, action) => {
      const { id } = action.payload
      store.items = store.items.filter((item) => item.id !== id)
    },
    // Removes all the tasks
    removeAll: (store, action) => {
      store.items = []
    },
  },
})

