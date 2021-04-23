import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import TodoWrapper from "./components/TodoWrapper"

import todos from './reducers/todos'

const reducer = combineReducers({
  todos: todos.reducer
})

// const store = configureStore({ reducer })

const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

// So now we setup the store with the reducer we defined and the persistedState
// as the initial state. The store subscribes to any actions performed on the state
// so that it always stores the most updated data
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});


export const App = () => {
  return (
    <Provider store={store}>
        <TodoWrapper/>
    </Provider>
  )
}
