import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { fridge } from 'reducers/fridge'
import { AddTask } from 'components/AddTask'
import { ItemList } from 'components/ItemList'
import { ClearButton } from 'components/ClearButton'

const reducer = combineReducers({
  fridge: fridge.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
      <ItemList />
      <ClearButton />
    </Provider>
  )
}
