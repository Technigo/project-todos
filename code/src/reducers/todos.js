import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const data = [
  {
    id: uniqid(),
    title: 'Add task',
    isDone: false,
  },
];

const todos = createSlice({
  name: 'todos',
  initialState: {
    items: data,
  },
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
  },
});

export default todos;