/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'random101',
      name: 'Jigglypuff',
      isCaught: false
    },
    {
      id: 'random102',
      name: 'Snorlax',
      isCaught: true
    },
    {
      id: 'random103',
      name: 'Mewtwo',
      isCaught: false
    },
    {
      id: 'random104',
      name: 'Oddish',
      isCaught: true
    }
  ]
}
// here we can addToDo, deleteToDo, checkToDo etc.

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addPokemon: (store, action) => {
      store.items = [action.payload, ...store.items];
    },
    deleteAllPokemon: (store) => {
      store.items = [];
    },
    deleteSinglePokemon: (store, action) => {
      const id = action.payload;
      const copyOfPokemonArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfPokemonArrayFromStore.findIndex(condition);
      copyOfPokemonArrayFromStore.splice(foundIndex, 1);
      store.items = copyOfPokemonArrayFromStore;
    },
    toggleIfPokemonIsCaught: (store, action) => {
      const id = action.payload;
      const copyOfPokemonArrayFromStore = store.items;
      const condition = (element) => element.id === id;
      const foundIndex = copyOfPokemonArrayFromStore.findIndex(condition);
      copyOfPokemonArrayFromStore[foundIndex].isCaught =
      !copyOfPokemonArrayFromStore[foundIndex].isCaught;
      store.items = copyOfPokemonArrayFromStore;
    }
  }
});

// use immutable rather than mutable(store.items.push(action.payload).
// Spread operators prevents you from having a nested array.
// reducers will perform operations on our state.We need to create functions that will modify state.

export default pokemons;