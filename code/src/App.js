import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import todos from './reducers/todos'
import TodoList from './components/TodoList'
import Header from './components/Header'
import EmptyField from './components/EmptyList'

//Collect all slices and put them together in one place
const reducer = combineReducers({
  todos: todos.reducer,
})

//Retrieve local storage as initial state
const persistedStateJSON = localStorage.getItem("todosReduxState")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

//Create store with initial state
const store = createStore(reducer, persistedState)

//Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
        <Header />
        <EmptyField />
        <TodoList />
    </Provider>
  )
}
