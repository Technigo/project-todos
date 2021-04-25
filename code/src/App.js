import React from 'react'
import { Provider }  from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Background } from './styling/GlobalStyles'

import todos from './reducers/todos'
import Header from './components/Header'
import AddTodoForm from './components/AddToDoForm'

import "./index.css"

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Background>
        <Header /> 
        <AddTodoForm />
      </Background>
    </Provider>
  )
}
