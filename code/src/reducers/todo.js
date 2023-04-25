import { createSlice } from '@reduxjs/toolkit';

// Retrieve the initial items from localStorage or use an empty array if not found
const initialItems = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos')) : []

/// Create a Redux slice for todos using the createSlice function
const todos = createSlice({
  name: 'todos', // Unique name for the slice
  initialState: { items: initialItems },
  // Set the initial state with items from localStorage or an empty array
  reducers: { // Define the reducer functions for this slice
    // Reducer function to add a new todo item
    changeCompletionStatus: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    // Reducer function to delete a todo item
    deleteItem: (store, action) => {
      // Filter out the item with the matching id from the items array
      store.items = store.items.filter((item) => item.id !== action.payload)
    },
    // Reducer function to add an item
    addItem: (store, action) => {
      // Push the new item into the items array
      store.items.push(action.payload)
    }
  }
});

// Export the todos slice
export default todos;