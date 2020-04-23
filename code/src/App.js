import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from './reducers/todos'
import { AddToDo } from './components/AddToDo'
import { Header } from "components/Header"
import { CategoryMap } from 'components/CategoryMap'
import { AddCategory } from './components/AddCategory'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}


const reducer = combineReducers({
  todos: todos.reducer
})

const persistedState = loadFromLocalStorage()

const store = createStore(reducer,
  persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => saveToLocalStorage(store.getState()))

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddToDo />
      <CategoryMap />
      <AddCategory />
    </Provider>
  )
}
