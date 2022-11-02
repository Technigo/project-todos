/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokemons from 'reducers/pokemon';
import PokemonList from 'components/PokemonList';
import ToDoList from 'components/ToDoList';
import toDos from 'reducers/toDos';

export const App = () => {
  const reducers = combineReducers({
    pokemons: pokemons.reducer,
    toDos: toDos.reducer
  })

  const store = configureStore({
    reducer: reducers // det som står efter : är samma som man döpt sina reducers
    // till. om man döper dem till bara reducer kan man skriva combineReducers({ reducer})

  })
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}
