import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: '23ereufdhsfjsn',
      name: 'Jigglypuff',
      isCaught: false
    },
    {
      id: '23ereufdhsfjsn10',
      name: 'Snorlax',
      isCaught: true
    },
    {
      id: '23ereufdhsfjsn11',
      name: 'Mewto',
      isCaught: false
    },
    {
      id: '23ereufdhsfjsn12',
      name: 'Oddish',
      isCaught: true
    }
  ]
}

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemon: (store, action) => {
    // store.items.push(action.payload)
      store.items = [...store.items, action.payload];
    }
  }

})

export default pokemons;