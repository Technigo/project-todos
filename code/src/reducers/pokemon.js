import { createSlice } from '@reduxjs/toolkit';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: [
      { id: 'hejhej', name: 'Kristin', isCaught: false },
      { id: 'halloj', name: 'Rio', isCaught: false },
      { id: 'hejsan', name: 'Carl', isCaught: true }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      });
    }
  }
});

export default pokemons;