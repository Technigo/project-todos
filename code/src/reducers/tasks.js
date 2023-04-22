
/* eslint-disable */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, text: 'Sleep', due: '-', complete: false, priority: false },
    { id: 2, text: 'Call my boyfriend', due: '-', complete: false, priority: true },
    { id: 3, text: 'Take a bath', due: '-', complete: true, priority: false },
    { id: 4, text: 'Go to Friskis&Svettis', due: '-', complete: false, priority: false }
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

    togglePriority: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.priority = !item.priority;
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

    sortPriority: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      state.items.sort((a, b) => {
        if (!a.priority && b.priority) {
          return 1;
        } else if (a.priority && !b.priority) {
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
