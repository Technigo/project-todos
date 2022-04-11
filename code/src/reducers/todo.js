import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    id: "lahjs275234x",
    name: "Bulbasaur",
    isCaught: false,
  },
  {
    id: "lahjs27kjahs24x",
    name: "Charmander",
    isCaught: false,
  },
];

const pokemons = createSlice({
  name: "pokemons",
  initialState: {
    items: data,
  },

  //Reducers to update the isCaught
  //We receive 2 arguments from redux: store and action
  // store.items = name of our array
  reducers: {
    toggleItem: (store, action) => {
      console.log("Store:", store);
      console.log("Action:", action);

      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught;
        }
      });
    },
  },
});

export default pokemons;
