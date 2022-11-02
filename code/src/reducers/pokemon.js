/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: [
      { id: 'bdfbb',
        name: 'Pikatchu',
        isCaught: false },
      { id: 'cvdjs',
        name: 'Mew',
        isCaught: true }
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

export default pokemons;