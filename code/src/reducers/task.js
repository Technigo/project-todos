/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'Tasks',
  initialState: {
    items: []
  },
  reducers: {
    setAllItems: (store, action) => {
      store.items = action.payload;
    },
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone
        }
      });
    },
    addItem: (store, action) => {
      store.items.push({ ...action.payload, quantity: 1 })
      // store.items = [...store.items, action.payload];*/
    },
    deleteItem: (store, action) => {
      // store.items.splice(action.payload, 1);*/
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload;
      });
      store.items = updatedItems;
    },
  }
});

export default tasks;