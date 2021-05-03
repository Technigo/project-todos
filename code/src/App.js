import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import TodoList from './components/TodoList'
import TodoInformation from './components/TodoInformation'
import TodoForm from './components/TodoForm'

const reducer = combineReducers({
  todos: todos.reducer,
})

const store = configureStore({ reducer }) // shortcut for ({ reducer: reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <TodoInformation />
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  )
}
