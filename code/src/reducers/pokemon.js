import { createSlice } from '@reduxjs/toolkit';

const pokemons = createSlice({
  name: 'pokemons',
  initialState: {
    items: [
      { id: '1',
        name: 'Pickachu',
        isCaught: false },
      { id: '2',
        name: 'Sandshrew',
        isCaught: false }
    ]
  },
  reducers: {
    toggleItem: (store, action) => {
      console.log(store);
      console.log(action)
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      })
    }
  }
});

export default pokemons