import { createSlice } from '@reduxjs/toolkit'

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: [
      { id: 'jajaja',
        name: 'Pikatchu',
        isCaught: false },
      { id: 'hehehe',
        name: 'hufflepuff',
        isCaught: false }
    ]

  },
  reducer: {
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
