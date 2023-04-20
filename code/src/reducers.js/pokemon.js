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
    setupStore: (store, action) => {
      store.items = action.payload;
    },
    addPokemon: (store, action) => {
    // store.items.push(action.payload)
      store.items = [action.payload, ...store.items];
      localStorage.setItem('pokemonList', JSON.stringify(store.items));
    },
    deleteAllPokemon: (store) => {
      store.items = [];
      localStorage.setItem('pokemonList', JSON.stringify(store.items));
    },
    deleteSinglePokemon: (store, action) => {
      const id = action.payload;
      console.log('action.payload', action.payload)
      const copyOfPokemonArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfPokemonArrayFromStore.findIndex(condition);
      copyOfPokemonArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfPokemonArrayFromStore;
      localStorage.setItem('pokemonList', JSON.stringify(store.items));
    },
    toggleIfPokemonIsCaught: (store, action) => {
      const id = action.payload;
      console.log('action.payload', action.payload)
      const copyOfPokemonArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfPokemonArrayFromStore.findIndex(condition);
      // eslint-disable-next-line max-len
      copyOfPokemonArrayFromStore[foundIndex].isCaught = !copyOfPokemonArrayFromStore[foundIndex].isCaught;
      store.items = copyOfPokemonArrayFromStore;
      localStorage.setItem('pokemonList', JSON.stringify(store.items));
    }
  }

})

export default pokemons;