import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { fridge } from 'reducers/fridge'

import { AddItemForm } from 'components/AddItemForm'
import { ItemList } from 'components/ItemList'
import { ClearButton } from 'components/ClearButton'
import { FridgeSummary } from 'components/FridgeSummary'
import './App.css'

const reducer = combineReducers({
  fridge: fridge.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div className="appContainer">
      <Provider store={store}>
        <AddItemForm />
        <ItemList />
        <ClearButton />
        <FridgeSummary />
      </Provider>
    </div>
  )
}
