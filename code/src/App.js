import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// REDUCERS
import { list } from 'reducers/list'
// COMPONENTS
import { AddTodo } from 'Components/AddTodo'
import { List } from 'Components/List'
// STYLE
import 'app.css'


const reducer = combineReducers ({
  list: list.reducer

})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <h1>To Do</h1>
      <AddTodo />
      <List />
    </Provider>
  )
}

