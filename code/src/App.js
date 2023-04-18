import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddPokemon from 'components/AddPokemon';
import PokemonList from 'components/PokemonList';
import pokemons from 'reducers/pokemon';

export const App = () => {
  const reducer = combineReducers({
    // Before the return statement, create a reducer. Since it's handled
    // by the reduxtoolkit it's called combineReducers. It is a function.
    // combineReducers exposes all of our reducers from the slices to
    // the store in the provider. It creates a new object which is easily
    // consumed and meets all req for the configStore function. Processes
    // our reducer and spits out something that is suited for the configStore
    // function below.
    pokemons: pokemons.reducer
    // Provide/insert an object (pokemons) as an argument. Since the reducer
    // is a function, open paranthesises and inside of them, open curly
    // brackets to indicate that this will be an object. This object will
    // have properties which we will populate. Those properties will be
    // the name of our redux store slices. "Undefined" until we have created
    // a slice (pokemons).
  });
  const store = configureStore({ reducer }); // Here we create the store
  // and here we provide the reducer.
  return (
  // Inside our store provide our reducer.
  // A wrapper, Provider, for our application to be able to function with our
  // redux store. Set provider takes one prop which is our store.
    <Provider store={store}>
      <AddPokemon />
      <PokemonList />
    </Provider>
  )
}

// Outside of the shopping cart: user account. One slice for the user and
// another for a specific, eg shopping cart, third slice for coloured themes,
// layout etc. Rule of thumb: If it still is within the same domain as as data
// stored inside of one slice, then no problem. You can start of with one slice.
// If it doesn't function well with the other stuff, put them in another slice.

// src/App.js
// import React from 'react'
// import { Provider } from 'react-redux'
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { tasks } from './reducers/tasks'

// const reducer = combineReducers({
//   tasks: tasks.reducer
// })

// const store = configureStore({ reducer })

// export const App = () => {
//   return (
//     <Provider store={store}>
//       Your components can be mounted here, inside the Provider.
//     </Provider>
//   )
// }