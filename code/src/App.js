import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { todos } from './reducers/todos';
import ListTodos from './pages/ListTodos';
import CreateTodo from './pages/CreateTodo';

const reducer = combineReducers({
  todos: todos.reducer,
});

const persistedStateJSON = localStorage.getItem('todo-reduxState');
let persistedState = {};
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = configureStore({
  reducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem('todo-reduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <ListTodos />
          </Route>
          <Route path="/create_todo">
            <CreateTodo />
          </Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
