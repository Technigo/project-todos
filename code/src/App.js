import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { bag } from './redux/reducers/bag' 
import { ListedThings } from 'components/ListedThings'
import { AddThings } from 'components/AddThings'


const reducer = combineReducers({
  bag: bag.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddThings />
      <ListedThings />
    </Provider>
  )
}
