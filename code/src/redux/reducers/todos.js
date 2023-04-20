/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// The slice for todo has the initial state with an array for each of the single todo-items
// Every todo item has an id, text and isDone property.

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: '1', text: 'Click this to-do to mark it as done ✅✔', isDone: false },
      { id: '2', text: 'Your first to-do is: Sing like no one is hearing ‼', isDone: false }
    ]
  },
  // The reducers field contains functions to modify the state of the slice (todo made with createSlice)
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
// Mutable
//   store.items.push(action.payload);
// Immutable
// store.items = [...store.items, action.payload];

// const initialState = {
//   items: [
//     {
//       id: '189438fdjhrjejioe9845',
//       name: 'ToDo1',
//       isNew: false
//     },
//     {
//       id: '189438fdjhrjejioe9846',
//       name: 'ToDo2',
//       isNew: false
//     },
//     {
//       id: '189438fdjhrjejioe9847',
//       name: 'ToDo3',
//       isNew: false
//     }
//   ]
// }