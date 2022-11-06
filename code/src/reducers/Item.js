/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';

const items = createSlice({
  name: 'items',
  initialState: {
    items: [
      { id: 'adsjhady7', name: 'Bread', isBought: false },
      { id: 'asjkd7678', name: 'Milk', isBought: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isBought = !item.isBought
        }
      });
    },
    deleteItem: (store, action) => {
      console.log(action);
      // Mutability
      store.items.splice(action.payload, 1)
      // Inmutable
      const updatedItems = store.items.filter((item) => {
        return store.itemsindexOf(item) !== action.payload;
      });
      store.items = updatedItems
    },
    addItem: (store, action) => {
      console.log(action);
      // Mutable
      store.items.push(action.payload);
      // Inmutable
      store.items = [...store.items, action.payload];
    }
  }
});

export default items;