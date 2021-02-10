import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { todos } from './reducers/todos'
import { TodoSummary } from 'components/TodoSummary'
import { AddTodoForm } from 'components/AddTodoForm'
import { TodoList } from 'components/TodoList'


const reducer = combineReducers({
  todos: todos.reducer
})

const persistedStateJSON = localStorage.getItem('todos_reduxState')

let persistedState = {}
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

  const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
  store.subscribe(() => {
    localStorage.setItem('todos_reduxState', JSON.stringify(store.getState()))
  })

  export const App = () => {
    return (
      <Provider store={store}>
        <TodoSummary />
        <AddTodoForm />
        <TodoList />
      </Provider>
    )
  }
