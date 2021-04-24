import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoList from '../src/components/TodoList'
import TodoAddNew from './components/TodoAddNew'
import Header from '../src/components/Header'
import ProgressBar from '../src/components/ProgressBar'
import TodoAllDone from 'components/TodoAllDone'


const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <ProgressBar />
      <TodoAddNew />
      <TodoList />
      <TodoAllDone />
    </Provider>
  )
}
