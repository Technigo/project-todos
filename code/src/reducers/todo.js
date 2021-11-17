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
        text: action.payload,
        isComplete: false
      };
      store.items = [...store.items, newTodo];
    }
  }
});
