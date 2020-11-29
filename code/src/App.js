import React from 'react';
import { Provider } from 'react-redux';
import { todos } from './reducers/todos';
import { combineReducers, createStore } from '@reduxjs/toolkit';

import { Header } from './components/Header';
import { List } from './components/List';

const reducer = combineReducers({todos : todos.reducer});

const persistedStateJSON = localStorage.getItem("toDoReduxState");
let persistedState = {};
if(persistedStateJSON) {
  persistedState = JSON.parse(localStorage.getItem("toDoReduxState"));
}
const store = createStore(reducer, persistedState);
store.subscribe(()=> {
  localStorage.setItem("toDoReduxState", JSON.stringify(store.getState()))
} )

export const App = () => {
  return (
   <Provider store={store}>
    <main> 
      <Header />
      <List />
    </main>
   </Provider>
  )
}
