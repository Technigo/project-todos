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
import { ShowDone } from 'Components/ShowDone'
import { ShowTodo } from 'Components/ShowTodo'
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
      {/* <ShowDone />
      <ShowTodo /> */}
      <List />
      <RemoveAll />
    </Provider>
  )
}

