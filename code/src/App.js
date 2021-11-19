import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


const reducer = combineReducers({
  todos: todos.reducer,
})

// RETRIEVE LOCAL STORAGE
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// const store = configureStore({ reducer: reducer})
const store = createStore(reducer, persistedState)


//LISTENING TO THE CHANGES, WHEN SOMETHING HAPPENS IN REDUX STORE,
// ADDING OR REMOVING, THIS WILL UPDATE THE LOCALSTORAGE. getState is build in.
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
