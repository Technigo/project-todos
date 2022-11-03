import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Header } from 'components/Header';
// import pokemons from 'reducers/pokemon';
// import PokemonList from 'components/PokemonList';

import todo from 'reducers/todo';
import TodoList from 'components/TodoList';
import { InnerWrapper, OuterWrapper } from 'components/styling/GlobalStyling';

const reducer = combineReducers({
  //  pokemons: pokemons.reducer,
  todo: todo.reducer
});

const store = configureStore({
  reducer
});

store.subscribe(() => localStorage.setItem('todos', JSON.stringify(store.getState().todo.items)))

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <TodoList />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  );
}
