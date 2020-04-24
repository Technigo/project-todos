import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { todos } from './reducers/todos'
import { TodoSummary } from './components/TodoSummary'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

const reducer = combineReducers({
  todos: todos.reducer
})
// Old store code
/* const store = configureStore({ reducer }) */

// New store code
// 1. Retrieve the localstorage as initial state
const persistedStateJSON = localStorage.getItem('todo-reduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
// 2. Create the store using the initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// 3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem('todo-reduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoSummary />
        <TodoInput />
        <TodoList />
      </main>
    </Provider>
  )
}
