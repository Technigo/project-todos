import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Header from './components/Header'

//connect combine all of the slices into one group
const reducer = combineReducers({
  todos: todos.reducer
})

//Create redux store from connected slices
const store = configureStore({ reducer })

export const App = () => {
  return (
    //Pass already created redux store into <Provider /> component,
    // so every component inside can reach for it
    <Provider store={store}>
      <Header />
      <TodoForm />
      <TodoList />
    </Provider>
  )
}
