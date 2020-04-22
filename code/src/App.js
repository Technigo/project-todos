import React from 'react'
import { Provider } from 'react-redux'
import { TodoList } from 'components/TodoList'
import { TodoInput } from 'components/TodoInput'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'
import { TodoSummary } from 'components/TodoSummary'

const reducer = combineReducers({ todos: todos.reducer })

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <div className='header-wrapper'>
          <TodoInput />
          <TodoList />
        </div>
        <TodoSummary />
      </main>
    </Provider>
  )
}
