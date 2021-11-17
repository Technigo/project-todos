import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit'

import { todos } from './reducers/todos'
import { TodoList } from 'components/TodoList'
import { AddTodo } from 'components/AddTodo'
import { CategorySection } from 'components/CategorySection'

const reducer = combineReducers({
  todos: todos.reducer
})

// Local storage
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// const store = configureStore({ reducer }) - Doesn't work for this localStorage solution

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <CategorySection />
      <TodoList />
    </Provider>
  )
}
