import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 'hu1234534io2eud7823454352sxd123',
      name: 'JigglyPuff',
      isCaught: false
    },
    {
      id: 'hu1234534io2eud7823454352sxd124',
      name: 'Oddish',
      isCaught: false
    },
    {
      id: 'hu1234534io2eud7823454352sxd125',
      name: 'Charmander',
      isCaught: false
    },
    {
      id: 'hu1234534io2eud7823454352sxd126',
      name: 'Peepoo',
      isCaught: false
    }
  ]
}

const pokemons = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    // first argument references the state of the store, second argument
    // references the data that is passed down from a component
    addPokemon: (store, action) => {
      // Mutable:
      // store.items.push(action.payload)
      // Immutable:
      store.items = [...store.items, action.payload]
      // this assigns a whole new value to the pokemons array
      // and removes the nesting, so you don't have an array within another array
      // const x = ['a', 'b', 'c']
      // const y = [x, 'd'] => [['a', 'b', 'c'], 'd']
      // const z = [...x, 'd'] => ['a', 'b', 'c', 'd']
      // this avoids nesting problems with arrays
    }
  }
})

export default pokemons;