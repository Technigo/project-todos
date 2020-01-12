import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quests } from './reducer/quests'

const reducer = combineReducers({
  quests: quests.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <h1>test</h1>
    </Provider>
  )
}

