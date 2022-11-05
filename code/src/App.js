import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todos from 'reducers/todo'
import TodoList from 'components/TodoList'
import AddTodo from 'components/AddTodo'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <TodoList />
      <AddTodo />
    </Provider>
  )
}
