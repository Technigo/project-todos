import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

import todos from './reducers/todos';
import AddTodo from './components/AddTodos';
import TodoList from './components/TodoList';
import Summary from './components/Summary';

//always have to do it like this
const reducer = combineReducers({
  todos: todos.reducer,
});
// local storagee as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// create store with initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store the state in local storage on Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
});

// const store = configureStore({ reducer });

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Provider store={store}>
        <Summary />
        <div className="app-wrapper">
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    </>
  );
};
