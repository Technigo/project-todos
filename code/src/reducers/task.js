/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'ToDos',
  initialState: {
    items: [
      { id: 'testone',
        name: 'Pikatchu',
        isCaught: false },
      {
        id: 'testtwo',
        name: 'Mew',
        isCaught: true,
        completed: ''
      }
    ]
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
          item.isCaught = !item.isCaught
          item.completed = Date.now()
        }
      });
    },
    deleteItem: (store, action) => {
      // store.items.splice(action.payload, 1);*/
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload;
      });
      store.items = updatedItems;
    },
    addItem: (store, action) => {
      // store.items.push(action.payload);*/
      store.items = [...store.items, action.payload];
    }
  }
});

export default tasks;