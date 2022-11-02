import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: []
  },
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
      })
    },
    addItem: (store, action) => {
      store.items.push(action.payload);
    },
    removeItem: (store, action) => {
      store.items.splice(action.payload);
    }
  }
});

export default tasks;