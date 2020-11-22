import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit';

// Reducers
import { todos, completed } from './reducers/todos';

// Components
import { ListOfTodos } from './components/ListOfTodos';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewTodo } from './components/NewTodo';

const reducer = combineReducers({
  todos: todos.reducer,
  completed: completed.reducer,
});
// const store = configureStore({ reducer });

// New storage
const persistedStateJSON = localStorage.getItem('reduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
// ----------------------------------------------------------------

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <NewTodo />
      <ListOfTodos />
      <Footer />
    </Provider>
  );
};
