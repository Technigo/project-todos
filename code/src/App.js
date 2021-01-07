import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { todos } from './reducers/todos';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

const reducer = combineReducers({ todos: todos.reducer })

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

export const App = () => {
  return (    
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TodoList />
          </Route>
          <Route exact path="/todo">
            <TodoForm />
          </Route>
          <Route path="/todo/:id">
            <TodoForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
};
