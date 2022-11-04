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
    },
    deleteItem: (store, action) => {
      console.log(action);
      // Mutability
      // store.items.splice(action.payload, 1);
      // Immutability
      const updatedItems = store.items.filter((item) => {
        return store.items.indexOf(item) !== action.payload
      });
      store.items = updatedItems;
    },
    addItem: (store, action) => {
      console.log(action);
      // Mutability
      // store.items.push(action.payload);
      // Immutability
      store.items = [...store.items, action.payload];
      // const x = [a,b,c]
      // const y = [x, d] => [[a,b,c], d]
      // const z = [...x, d] => [a,b,c,d]
    }
  }
});

export default pokemons;