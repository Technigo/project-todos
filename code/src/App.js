import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { shopping } from 'reducers/shopping'

import { AddItemForm } from 'components/AddItemForm'
import { ShoppingList } from 'components/ShoppingList'
import { ClearButton } from 'components/ClearButton'
import { ShoppingSummary } from 'components/ShoppingSummary'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import './App.css'

const reducer = combineReducers({
  shopping: shopping.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <container className="appContainer">
      <Provider store={store}>
        <Header />
        <section className="formBox">
          <AddItemForm />
          <ShoppingList />
          <ClearButton />
          <ShoppingSummary />
        </section>
        <Footer />
      </Provider>
    </container>
  )
}
