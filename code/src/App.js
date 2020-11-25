import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { TodoScreen } from './components/TodoScreen'
import { tasklist } from './reducers/tasklist'

const reducer = combineReducers({
  tasklist = tasklist.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TodoScreen></TodoScreen>
    </Provider>
  )
}
