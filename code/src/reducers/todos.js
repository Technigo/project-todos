/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (store, action) => {
      store.items = [...store.items, action.payload];
    }
  }
})