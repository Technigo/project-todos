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
      store.item.push(action.payload);
    },
    removeItem: (store, action) => {
      store.item.splice(action.payload);
    }
  }
});

export default tasks;