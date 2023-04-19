import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddPokemon from 'components.js/AddPokemon';
import PokemonList from 'components.js/PokemonList';
import pokemons from 'reducers.js/pokemon';

export const App = () => {
  const reducer = combineReducers({
    pokemons: pokemons.reducer
  });
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <AddPokemon />
      <PokemonList />
    </Provider>
  );
}
