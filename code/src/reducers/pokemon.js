import { createSlice } from "@reduxjs/toolkit";

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
//here we can addToDo, deleteToDo, checkToDo etc.

const pokemons = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        addPokemon: (store, action) => {
        store.items = [...store.items, action.payload];  
        }
    } 
});
//use immutable rather than mutable(store.items.push(action.payload). Spread operators prevents you from having a nested array.
//reducers will perform operations on our state.We need to create functions that will modify that state.

export default pokemons;