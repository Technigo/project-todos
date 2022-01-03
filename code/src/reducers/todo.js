import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [
      {
        id: 0,
        text: 'Continue with code along',
        complete: false,
        category: 'Studies'
      },
      {
        id: 1,
        text: 'Clean the office room',
        complete: false,
        category: 'House Chores'
      }
    ]
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
    },
    deleteAll: (store, action) => {
      store.items = [];
    }
  }
});
