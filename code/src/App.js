import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos'
import { TodoList } from 'components/TodoList'
import { AddTodo } from 'components/AddTodo'
// import { CategorySection } from 'components/CategorySection'
import { Header } from 'components/Header'

const reducer = combineReducers({
  todos: todos.reducer
})

// Local storage
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// const store = configureStore({ reducer })

// The configureStore above doesn't work together with persistedState.
// The solution is to use createStore, see below.

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      {/* <CategorySection /> */}
      <TodoList />
    </Provider>
  )
}
