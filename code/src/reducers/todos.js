import { createSlice } from '@reduxjs/toolkit';

const data = [
  {
    id: 'adsfadsfsdf',
    title: 'wash your clothes',
    isDone: false,
  },
  {
    id: 'fgfdgfghdfg',
    title: 'read a book',
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
  },
});

export default todos;