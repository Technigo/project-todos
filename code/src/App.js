import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos'
import { Home } from './pages/Home'

const reducer = combineReducers({ todos: todos.reducer })

//Retrieve the local storage and use it as the inital state
const persistedStateJSON = localStorage.getItem('reduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
//using the persistedState instead of the intialstate 
//instead of const store = configureStore({reducer})
const store = createStore(
  reducer, 
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// Store the state in localstorage for any redux state change
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
