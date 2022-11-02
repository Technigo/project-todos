/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// Needs name, initial state and reducers
const pokemons = createSlice({
  // Om man vill använda API gör man INTE api-callet här
  name: 'pokemons',
  initialState: {
    items: [
      {
        id: 'ldkfjg', name: 'Mewto', isCaught: false
      },
      {
        id: 'sdh',
        name: 'Mew',
        isCaught: false
      }
    ]
  },
  reducers: {
    // funktions that will be called
    toggleItem: (store, action) => {
    // the första argumentet kommer alltid att referera till stor och det andra till den acions som använts.
      store.items.forEach((item) => {
        // for this you cant use .map() due to immutability in the store
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      })
    }
  }
})

export default pokemons;