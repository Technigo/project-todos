/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// The 'todo slice' has an initial state with an array of one todo item. Each todo item has an 'id', 'text', and 'isDone' property.
export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: '1', text: 'Click this task to mark it as done!', isDone: false },
      { id: '2', text: 'Your first task is: Party like a rockstar', isDone: false }
    ]
  },
  // The 'reducers' field is an object that contains functions to modify the state of the 'todo slice'.
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    completeAll: (store) => {
      store.items.forEach((item) => {
        item.isDone = true;
      });
    },
    clearAll: (store) => {
      store.items = [];
    }
  }
});

// 'toggleItem' is a function that takes an action as an argument.
// It finds the todo item with the same id as the 'action.payload'
// and toggles its 'isDone' property to the opposite value.

// 'addItem' is a function that takes an action as an argument.
// It adds the 'action.payload' (which is a new todo item) to the end of the items array in the store.

// 'deleteItem' removes the todo item at the index specified by 'action.payload' from the items array in the store.

// 'completeAll' function loops through all the items in the store array using the 'forEach' method,
// and sets the isDone property of each item to 'true'.
// This means that all the items will be marked as "complete" after this function is called.

// 'clearAll' function sets the store array to an empty array.
// This means that all the items in the store will be removed after this function is called.
