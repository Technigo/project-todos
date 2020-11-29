import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { remember } from 'reducers/remember'
import { Summary } from 'components/Summary'
import { List } from 'components/List'
import { AddTask } from 'components/AddTask'
import { AppShell } from 'lib/Container'

const reducer = combineReducers({
  remember: remember.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AppShell>
        <Summary />
        <AddTask />
        <List />
        {/* <Footer /> */}
      </AppShell>
    </Provider>
  )
}
