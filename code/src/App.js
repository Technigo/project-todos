import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from 'reducers/todos'

import Header from 'components/Header'
import ToDoList from 'components/ToDoList'
import Input from 'components/Input'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Header />
        <ToDoList />
        <Input />
      </main>
    </Provider>
  )
}
