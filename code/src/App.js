import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import Header from './components/Header'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState().todos.items))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoForm />
      <TodoList />  
    </Provider>
  )
}
