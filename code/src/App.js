import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'

import { Header } from 'components/Header'
import { AddTodo } from 'components/AddTodo'
import { TodosList } from 'components/TodosList'
import { Summary } from 'components/Summary'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <AddTodo />
        <TodosList />
        <Summary />
      </main>
    </Provider>
  )
}