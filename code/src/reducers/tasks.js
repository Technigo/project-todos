
/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Watch video on actions & reducers', complete: false },
    { id: 2, text: 'Follow redux codealong', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false }
  ]
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

    addItem: (store, action) => {
      store.items = [...store.items, action.payload];
    },

    deleteItem: (store, action) => {
      store.items.splice(action.payload, 1);
    },

    toggleItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.complete = !item.complete;
      }
    },

    sortItems: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      state.items.sort((a, b) => {
        if (a.complete && !b.complete) {
          return 1; 
        } else if (!a.complete && b.complete) {
          return -1; 
        } else {
          return 0;
        }
      });
    },


    allCompleteItem: (store, action) => {
      store.items = store.items.map((item) => {
        return { ...item, complete: action.payload};
      });
    },

    clearAllItems: (store, action) => {
      store.items.splice(action.payload);
    }
  }
});
