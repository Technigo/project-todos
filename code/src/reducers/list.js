/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// const data = []

const todos = createSlice({
  name: 'todos',
  initialState: {
    // items: data
    items: [
      { id: '1', text: 'Enjoy the nice weather', isDone: false },
      { id: '2', text: 'Eat some nice food', isDone: false }
    ]
  },
  // The reducers field contains functions to modify the state of the slice (todo made with createSlice)
  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },
    deleteItem: (store, action) => {
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload;
      });
      store.items = updatedItems;
    },
    addItem: (store, action) => {
      store.items = [...store.items, action.payload];
    },
    completeAll: (store) => {
      store.items.forEach((item) => {
        item.isDone = true;
      });
    },
    clearAll: (store) => {
      store.items = [];
    }
  }
});

export default todos;