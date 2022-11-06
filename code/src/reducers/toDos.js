/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({ name: 'toDos',
  initialState: {
    items: []
  },
  reducers: { toggleItem: (store, action) => {
    // console.log(store);
    // console.log(action);
    store.items.find((item) => item.id === action.payload).complete = !store.items.find((item) => item.id === action.payload).complete;
  },
  addItem: (store, action) => {
    const existingToDo = store.items.find((item) => item.id === action.payload.id)

    if (existingToDo) {
      // increment quantity
      existingToDo.quantity += 1
    } else {
      store.items.push(action.payload)
    }
  },
  removeItem: (store, action) => {
    // remove it
    const existingToDo = store.items.filter((item) => item.id !== action.payload);
    store.items = existingToDo;
  },
  setAllItems: (store, action) => {
    store.items = action.payload;
  } } });

export default toDos;