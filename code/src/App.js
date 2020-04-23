import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todos } from './reducers/todos'
import { TodoSummary } from './components/TodoSummary'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { CustomCheckbox } from 'components/CustomCheckbox'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })


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
