import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload.text,
        isComplete: false,
        date: new Date(),
        category: action.payload.category
      };
      store.items = [newTodo, ...store.items];
    },
    toggle: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isComplete = !item.isComplete;
        }
      });
    },
    delete: (store, action) => {
      store.items.splice(action.payload, 1);
    }
  }
});
