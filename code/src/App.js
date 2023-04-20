import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddPokemon from 'components/AddPokemon';
import PokemonList from 'components/PokemonList';
import pokemons from 'reducers/pokemon';

export const App = () => {
  const reducer = combineReducers({
    pokemons: pokemons.reducer
  });
  // provide an object as an argument. Names of redux store slices.
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <AddPokemon />
      <PokemonList />
    </Provider>
  );
}
