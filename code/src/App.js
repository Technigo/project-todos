import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { remember } from 'reducers/remember'
import { Container } from 'lib/Container'
import { Summary } from 'components/Summary'
import { List } from 'components/List'
import { AddTask } from 'components/AddTask'

const reducer = combineReducers({
  remember: remember.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container background="#ccc">
        <Summary />
        <AddTask />
        <List />
        {/* <Footer /> */}
      </Container>
    </Provider>
  )
}
