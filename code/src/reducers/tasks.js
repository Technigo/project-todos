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
      // store.items.push(action.payload);
      store.items = [...store.items, action.payload];
    },
    removeItem: (store, action) => {
      // store.items.splice(action.payload, 1);
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      });
      store.items = updatedItems;
    }
  }
});

export default tasks;