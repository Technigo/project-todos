import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { QuestsLog } from 'components/QuestsLog'
import { Header } from 'components/Header'

import { quests } from './reducer/quests'

const reducer = combineReducers({
  quests: quests.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <QuestsLog />
    </Provider>
  )
}

