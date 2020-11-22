import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todos } from 'reducers/fridge'

import { AddItemForm } from './components/AddItemForm'
import { ItemList } from './components/ItemList'
import { ClearButton } from './components/ClearButton'
import { Summary } from './components/Summary'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Summary />
      <AddItemForm />
      <ItemList />
      <ClearButton />
    </Provider>
  )
}