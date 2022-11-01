/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'pokemons',
  initialState: {
    items: [
      { id: 'adsfasdjk2314nmdfsahj',
        name: 'Pikatchu',
        isCaught: false },
      {
        id: 'asdfasdfe4r63456gbxcv45w',
        name: 'Mew',
        isCaught: true
      }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      // store.items.find((item) => item.id === action.payload).isCaught = !store.items.find((item) => item.id === action.payload).isCaught;
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      });
    }
  }
});

export default tasks;