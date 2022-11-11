/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 'a',
        name: 'Look for recepie',
        isCaught: false },
      { id: 'b',
        name: 'Go to Ica',
        isCaught: false },
      {
        id: '3',
        name: 'Clean kitchen',
        isCaught: false
      }
    ]
  },
  reducers: {
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
      store.items = ([...store.items, action.payload]);
    },
    deleteItem: (store, action) => {
      const deletedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload;
      });
      store.items = deletedItems;
    },
    deleteAllItems: (store, action) => {
      store.items.splice(action.payload)
    }
  }
});

export default tasks;