/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

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
      const newTask = {
        id: uniqid(),
        text: action.payload,
        isDone: false
      };
      store.items = [...store.items, newTask];
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
    }
  }
});

export default todos