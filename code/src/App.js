import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Header } from 'components/Header';
// import pokemons from 'reducers/pokemon';
// import PokemonList from 'components/PokemonList';

import todo from 'reducers/todo';
import TodoList from 'components/TodoList';
import AddTask from 'components/AddTask';

export const App = () => {
  const reducer = combineReducers({
  //  pokemons: pokemons.reducer,
    todo: todo.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TodoList />
    </Provider>
  );
}
