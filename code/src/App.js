import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { fridge } from 'reducers/fridge'

import { AddItemForm } from 'components/AddItemForm'
import { ItemList } from 'components/ItemList'
import { Header } from 'components/Header'
import { FridgeSummary } from 'components/TodoSummary'
import { ClearButton } from 'components/ClearButton'

const reducer = combineReducers({
  fridge: fridge.reducer
})

const store = configureStore({ reducer })

//same code in every project

export const App = () => (
  
  <Provider store={store}>
    <section>
      <Header />
      <AddItemForm />
      <ItemList />
    <footer>  
      <FridgeSummary />
      <ClearButton />
    </footer>    
    </section>
  </Provider>
)
