/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: 1,
        text: 'Answer emails',
        isDone: false },
      { id: 2,
        text: 'Walk the dog',
        isDone: true }
    ]
  },
  reducers: {
    addTask: (store, action) => {
      store.items.push(action.payload)
    },
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      // store.items.find((item) => item.id === action.payload).isCaught = !store.items.find((item) => item.id === action.payload).isCaught;
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },
    deleteTask: (store, { payload: itemId }) => {
      return {
        store,
        items: store.items.filter((item) => item.id !== itemId)
      }
    },
    clearList: (store) => {
      store.items = []
    }
  }
});

export default todos;