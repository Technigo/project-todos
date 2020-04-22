import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { todos } from '../reducers/todos';
import { TodoProjects } from '../components/TodoProjects';
import { OuterContainer }from '../lib/Containers';

const reducer = combineReducers({ todos: todos.reducer });

const persistedStateJSON = localStorage.getItem('TodoAppState'); 
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  localStorage.setItem('TodoAppState', JSON.stringify(store.getState()));
})

export const Home = () => {
  return (
    <Provider store={store}>
      <OuterContainer>
        <TodoProjects />
      </OuterContainer>
    </Provider>
  )
};

