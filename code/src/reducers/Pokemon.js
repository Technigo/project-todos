/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: [
      { id: 'mbotnadlkmb',
        name: 'Pikatchu',
        isCaught: false },
      {
        id: 'kvownbk',
        name: 'Mew',
        isCaught: true
      }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
    }
  }
});

export default pokemons;