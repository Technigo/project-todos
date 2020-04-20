import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'

import { Header } from 'components/Header'
import { ItemsCount } from 'components/ItemsCount'
import { AddItem } from 'components/AddItem'
import { ItemsList } from 'components/ItemsList'

import 'normalize.css';
import 'scss/app.scss'


const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">

        <Header />

        <main className="main-content">
          <ItemsCount />
          <AddItem />
          <ItemsList />
        </main>

      </div>
    </Provider>
  )
}
