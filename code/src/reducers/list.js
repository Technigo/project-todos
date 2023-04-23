/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const data = []

export const list = createSlice({
  name: 'todos',
  initialState: {
    items: data
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