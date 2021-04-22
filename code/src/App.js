import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
// import users from './reducers/users' example if more slices
import { Header } from './components/Header'
import TodoList from './components/TodoList'
import { TodoForm } from 'components/TodoForm'


const reducer = combineReducers({
  todos: todos.reducer
  //if you have severall slices, you put them here. ex users: users.reducer, messages, etc
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoForm />
      <TodoList />
    </Provider>
  )
}
