/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

export const todo = createSlice({
  name: 'todos',
  initialState: {
    items: [{ id: 1, text: 'Click me when you&aposre done', isDone: false }]
    // The 'todo slice' has an initial state with an array of one todo item. Each todo item has an 'id', 'text', and 'isDone' property.
  },
  reducers: {
    // The 'reducers' field is an object that contains functions to modify the state of the 'todo slice'.
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    }
  }
});

// 'toggleItem' is a function that takes an action as an argument.
// It finds the todo item with the same id as the 'action.payload'
// and toggles its 'isDone' property to the opposite value.

// 'addItem' is a function that takes an action as an argument.
// It adds the 'action.payload' (which is a new todo item) to the end of the items array in the store.

// 'deleteItem' removes the todo item at the index specified by 'action.payload' from the items array in the store.
