import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import Header from 'components/Header'
import AddTask from 'components/AddTask'
import TodoList from 'components/TodoList'
import todos from './reducers/todos'

const reducer = combineReducers({
  todos: todos.reducer,
})

// get the localStorage in JSON string format
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

// if we have data in persistedStateJSON -> convert to an object
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// create a store with initial state
const store = createStore(
  reducer,
  persistedState,
  /* enable the redux devtools */
  /* eslint-disable-next-line no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// const store = configureStore({
//   reducer,
// })

document.title = `(${store.getState().todos.items.length}) My Task`

// store the state in localStorage as JSON string on Redux state change
store.subscribe(() => {
  document.title = `(${store.getState().todos.items.length}) My Task`
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TodoList />
    </Provider>
  )
}
