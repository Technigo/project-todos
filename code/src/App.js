import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TotalCompleteItems from './components/TotalCompleteItems'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div className="todo-list-card">
      <Provider store={store}>
        <TodoForm />
        <TodoList />
        <TotalCompleteItems />
      </Provider>
    </div>
  )
}
