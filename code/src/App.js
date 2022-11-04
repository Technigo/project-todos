import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemons from 'reducers/pokemon';
import PokemonList from 'components/PokemonList';
import AddPokemon from 'components/AddPokemon';

export const App = () => {
  const reducer = combineReducers({
    pokemons: pokemons.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <PokemonList />
      <AddPokemon />
    </Provider>
  );
}
