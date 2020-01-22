import React from 'react'
import { Provider } from 'react-redux'
import { Header } from './components/Header.js'
import { List } from './components/List.js'
import { todosList } from './reducers/list.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  todosList: todosList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <List />
    </Provider>
  )
}
