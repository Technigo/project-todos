import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'

import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'

import 'normalize.css';
import 'scss/app.scss'


const reducer = combineReducers({
  todos: todos.reducer
})

// Retrieve the localstorage & use as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store using the initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Store the state in localstorage on any Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})


export const App = () => {
  return (
    <Provider store={store}>

      <div className="wrapper">
        <Header />
        <MainContent />
      </div>

    </Provider>
  )
}
