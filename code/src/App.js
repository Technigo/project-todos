import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import PokemonList from 'components/PokemonList';
import AddPokemon from 'components/AddPokemon';
import pokemons from 'reducers/pokemon';

export const App = () => {
  const reducer = combineReducers({
    pokemons: pokemons.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <AddPokemon />
      <PokemonList />
    </Provider>
  );
}
