import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// REDUCERS
import { list } from 'reducers/list'
// COMPONENTS
import { Header } from 'Components/Header'
import { AddTodo } from 'Components/AddTodo'
import { List } from 'Components/List'
import { RemoveAll } from 'Components/RemoveAll'
// STYLE
import 'app.css'


const reducer = combineReducers ({
  list: list.reducer

})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <List />
      <RemoveAll />
    </Provider>
  )
}

