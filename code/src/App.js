import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todos } from './reducers/todos'
import { TodoSummary } from './components/TodoSummary'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoSummary />
        TODO INPUT
        <TodoInput />
        TODO LIST
        <TodoList />
      </main>
    </Provider>
  )
}
