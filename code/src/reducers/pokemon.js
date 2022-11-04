/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: [
      { id: 'ajsdfbvbdgw9047698346',
        name: 'Pikatchu',
        isCaught: false },
      {
        id: 'ajsdfbshgkjsdf62542875',
        name: 'Mew',
        isCaught: false
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

export default pokemons;