import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from 'reducers/todos'

import Header from 'components/Header'
import ToDoList from 'components/ToDoList'
import Footer from 'components/Footer'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ToDoList />
      <Footer />
    </Provider>
  )
}
