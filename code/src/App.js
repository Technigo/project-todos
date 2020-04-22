import React from 'react'
import { Provider } from 'react-redux'
import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit'
import { TodoList } from 'components/TodoList'
import { todos } from 'reducers/todos'

const reducer = combineReducers({ todos: todos.reducer });

// const store = configureStore({ reducer }); old store

const persistedStateJSON = localStorage.getItem('todos');
console.log(`persistedStateJSON: ${persistedStateJSON}`);
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}
console.log(`persistedState: ${JSON.stringify(persistedState)}`);

// 2. Create the store using the initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()));
});


export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList />
      </main>
    </Provider>
  )
}
