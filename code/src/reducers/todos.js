/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (store, action) => {
      store.items.push(action.payload)
    },
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },
    deleteTask: (store, action) => {
      store.items.splice(action.payload, 1);
    },
    clearList: (store) => {
      store.items = []
    }
  }
});

export default todos;