import React from 'react'
import { Provider } from 'react-redux'
import { Header } from './components/Header.js'
import { List } from './components/List.js'
import { todos } from './reducers/list.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <List />
      <footer>
        Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> and <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </footer>
    </Provider>
  )
}