import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

/* // set up for local store 
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};


const store = createStore(reducer, persistedState); //(reducer is short for "reducer: reducer") the reducer property equals the reducer variable 
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
}); */



//collect all slices and put them together in one place
const reducer = combineReducers({
  todos: todos.reducer
})

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store with initial state
const store = createStore(reducer, persistedState)

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

/* const store = configureStore({ reducer }) //(short for "reducer: reducer") the reducer property equals the reducer variable  */

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>To-do's</h1>
      <AddTodo />
      <TodoList />
      </main>
    </Provider>
  )
}
